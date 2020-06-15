/* tursics.de/story/ - JavaScript file */

/*jslint browser: true*/
/*global $,L,window,document,ddj*/

// -----------------------------------------------------------------------------

var config = {
	dataUrl: 'https://tursics.com/script/school-student-development/spreadsheets.php',
	dataIgnoreSecondLine: true,
	dataIgnoreLastLine: true,
	embedUrl: 'https://tursics.github.io/school-student-development/',
	mapboxId: 'tursics.l7ad5ee8',
	mapboxToken: 'pk.eyJ1IjoidHVyc2ljcyIsImEiOiI1UWlEY3RNIn0.U9sg8F_23xWXLn4QdfZeqg',
	mapCenterLat: 52.524889, // center the main station in Berlin-Mitte
	mapCenterLng: 13.367792,
	mapZoom: 13,
};

var userInput = {
	year: 0,
	primarySchoolYears: 6,
	classSizes:  24,
	seatsPerClassSizes: 144,
};

var globalData = {
	selectedItem: null,
};

// -----------------------------------------------------------------------------

function mapAction() {
	'use strict';
}

// -----------------------------------------------------------------------------

function parseGermanFloat(str) {
	'use strict';

	if ((str === '') || (str === null) || (str === undefined) || (typeof str === undefined)) {
		return str;
	}

	var number = (str + '').replace(/,/g, '.');
	return parseFloat(number);
}

// -----------------------------------------------------------------------------

function formatGermanFloat(number, fractional) {
	'use strict';

	if (isNaN(number)) {
		return null;
	}

	var ten = Math.pow(10, fractional);
	var rounded = parseInt(number * ten, 10) / ten;
	var str = rounded + '';

	return str.replace(/\./g, ',');
}

// -----------------------------------------------------------------------------

function updateMapSelectItem(data) {
	'use strict';

	mapAction();

	globalData.selectedItem = data;
	ddj.quickinfo.show(globalData.selectedItem);
}

// -----------------------------------------------------------------------------

function selectSuggestion(selection) {
	'use strict';

	var done = false;
	$.each(ddj.getData(), function (key, val) {
		if (!done && val && (val.BSN === selection)) {
			done = true;
			ddj.getMap().panTo(new L.LatLng(val.lat, val.lng));
			updateMapSelectItem(ddj.getAllObjects(val));
		}
	});
}

// -----------------------------------------------------------------------------

function updateDirtyData() {
	'use strict';

	userInput.seatsPerClassSizes = userInput.classSizes * userInput.primarySchoolYears;

	if (ddj.getData() === null) {
		return;
	}

	$.each(ddj.getData(), function (key, val) {
		val.diffdraftinessCurrent = val['diffdraftiness' + userInput.year] || 0;
		val.draftinessCurrent = val['draftiness' + userInput.year] || 1;
		val.containerCurrent = val['container' + userInput.year] || '';
		val.studentsCurrent = val['students' + userInput.year] || 0;
		val.classesCurrent = val['classes' + userInput.year] || 0;

		val.seatsCurrent = formatGermanFloat(parseGermanFloat(val.draftinessCurrent) * userInput.seatsPerClassSizes, 0);
		val.workloadCurrent = formatGermanFloat(parseGermanFloat(val.studentsCurrent) / parseGermanFloat(val.seatsCurrent) * 100, 0);
		val.classsizesCurrent = formatGermanFloat(parseGermanFloat(val.studentsCurrent) / parseGermanFloat(val.seatsCurrent) * userInput.classSizes, 1);
	});

	if (globalData.selectedItem !== null) {
		ddj.quickinfo.show(globalData.selectedItem);
	}

	ddj.marker.update();
}

// -----------------------------------------------------------------------------

function dataUpdated() {
	'use strict';

	var dirty = false;

	var classSizes = document.getElementById('settingClassSizes').value;
	dirty |= userInput.classSizes !== classSizes;
	userInput.classSizes = classSizes;

	var year = document.getElementById('settingYear').value;
	dirty |= userInput.year !== year;
	userInput.year = year;

	if (dirty) {
		updateDirtyData();
	}
}

// -----------------------------------------------------------------------------

var ControlInfo = L.Control.extend({
	options: {
		position: 'bottomright'
	},

	onAdd: function () {
		'use strict';

		var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

		if ($('#popupShare').length === 1) {
			container.innerHTML = '<a style="font-size:1.2em" href="#popupShare" title="Teilen" data-rel="popup" data-position-to="window" data-transition="pop"><i class="fa fa-share-alt" aria-hidden="true"></i></a>';
		}
		if ($('#popupInfo').length === 1) {
			container.innerHTML += '<a style="font-size:1.2em" href="#popupInfo" title="Info" data-rel="popup" data-position-to="window" data-transition="pop"><i class="fa fa-info" aria-hidden="true"></i></a>';
		}
		if ($('#popupAuthor').length === 1) {
			container.innerHTML += '<a style="font-size:1.2em" href="#popupAuthor" title="Autor" data-rel="popup" data-position-to="window" data-transition="pop"><i class="fa fa-envelope" aria-hidden="true"></i></a>';
		}

		return container;
	}
});

// -----------------------------------------------------------------------------

$(document).on("pageshow", "#pageMap", function () {
	'use strict';

	function updateEmbedURI() {
		var size = $('#selectEmbedSize').val().split('x'),
			x = size[0],
			y = size[1],
			html = '<iframe src="' + config.embedUrl + '" width="' + x + '" height="' + y + '" frameborder="0" style="border:0" allowfullscreen></iframe>';

		$('#inputEmbedURI').val(html);
		if (-1 === $('#embedMap iframe')[0].outerHTML.indexOf('width="' + x + '"')) {
			$('#embedMap iframe')[0].outerHTML = html.replace('.html"', '.html?foo=' + (new Date().getTime()) + '"');
			$('#embedMap input').focus().select();
		}
	}

	ddj.map.init('mapContainer', {
		mapboxId: config.mapboxId,
		mapboxToken: config.mapboxToken,
		centerLat: config.mapCenterLat,
		centerLng: config.mapCenterLng,
		zoom: config.mapZoom,
//		attribution: 'icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>',
		onFocusOnce: mapAction
	});
	
	var dataUrlStudentDevelopment =  config.dataUrl + '?nocache=' + (new Date().getTime());

	$.getJSON(dataUrlStudentDevelopment, function (dataStudentDevelopment) {
		var data = dataStudentDevelopment;

		if (config.dataIgnoreSecondLine) {
			data.shift();
		}
		if (config.dataIgnoreLastLine) {
			data.pop();
		}

		ddj.init(data);
		ddj.setUniqueIdentifier('BSN');
	}).done(function() {
		ddj.marker.init({
			onAdd: function (marker, value) {
				if (value.workloadCurrent < 80) {
					marker.color = 'blue';
				} else if (value.workloadCurrent <= 100) {
					marker.color = 'green';
				} else if (value.workloadCurrent <= 120) {
					marker.color = 'orange';
				} else {
					marker.color = 'red';
				}
//				marker.iconPrefix = 'pin';
//				marker.iconFace = value.pin;

				return true;
			},
			onClick: function (latlng, data) {
				updateMapSelectItem(data);
			}
		});

		ddj.search.init({
			orientation: 'auto',
			showNoSuggestion: true,
			titleNoSuggestion: '<i class="fa fa-info-circle" aria-hidden="true"></i> Geben sie bitte den Namen einer Schule ein',
			onAdd: function (obj, value) {
				var name = value.title,
					color = 'darkred';

				if ('' !== value.BSN) {
					name += ' (' + value.BSN + ')';
				}

				obj.sortValue1 = name;
				obj.sortValue2 = value.BSN;
				obj.data = value.BSN;
				obj.color = color;
				obj.value = name;
				obj.desc = value.regiontitle;

				return true;
			},
			onFocus: function () {
				mapAction();

				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				$('#pageMap').animate({
					scrollTop: parseInt(0, 10)
				}, 500);
			},
			onFormat: function (suggestion, currentValue) {
				var color = suggestion.color,
					icon = 'fa-dot-circle-o',
					str = '';

				str += '<div class="autocomplete-icon back' + color + '"><i class="fa ' + icon + '" aria-hidden="true"></i></div>';
				str += '<div>' + suggestion.value.replace(new RegExp(currentValue.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'gi'), '<strong>' + currentValue + '</strong>') + '</div>';
				str += '<div class="' + color + '">' + suggestion.desc + '</div>';
				return str;
			},
			onClick: function (data) {
				if (Array.isArray(data)) {
					selectSuggestion(data[0].BSN);
				} else {
					selectSuggestion(data.BSN);
				}
			}
		});

		ddj.quickinfo.init({
			onShow: function () {
				$('#infoSign').hide();
			},
			onHide: function () {
				$('#autocomplete').val('');
				$('#infoSign').show();
				globalData.selectedItem = null;
			}
		});

		dataUpdated();

		$('.visibleWithoutData').hide();
		$('.visibleWithData').show();
	}).fail(function(jqXHR, textStatus) {
		$('.visibleWithoutErrors').hide();
		$('.visibleWithErrors').show();
	}).always(function() {
		ddj.getMap().addControl(new ControlInfo());

		$('#autocomplete').val('');

		$("#popupShare").on('popupafteropen', function () {
			$('#shareLink input').focus().select();
		});
		$('#tabShareLink').on('click', function () {
			$('#popupShare').popup('reposition', 'positionTo: window');
			$('#shareLink input').focus().select();
		});
		$('#tabEmbedMap').on('click', function () {
			updateEmbedURI();
			$('#popupShare').popup('reposition', 'positionTo: window');
			$('#embedMap input').focus().select();
		});

		$('#selectEmbedSize').val('400x300').selectmenu('refresh');
		$('#selectEmbedSize').on('change', function () {
			updateEmbedURI();
			$('#popupShare').popup('reposition', 'positionTo: window');
		});
	});
});

// -----------------------------------------------------------------------------
