# Student development

- Online-Version: tdb.
- github.io-Version: https://tursics.github.io/school-student-development
- Google Docs-Datei: https://docs.google.com/spreadsheets/d/1sHTSm0Iqmwlz_FIweHhoTHDeBWmm09kJJpZuFvVixmo/
- Google Docs-Export: https://docs.google.com/spreadsheets/d/e/2PACX-1vTcHn1WLex6I_BrFYD-IXVCUcODKa5S5MVBHjPJ1ZjtpbTRufeLx3GPmf7Uk5prNYlhYn3fSnpIbzBm/pubhtml?gid=0&single=true

# To Do

- [ ]  Layout - fehlendes Icon von MH
- [ ]  "schüler pro klasse" mit link zur erklärung /oder "i"
- [ ]  23 - 26 / 21 - 25 SuS (NDH 40%)
- [ ]  link mit "kein tutorial"

---

* Züge: Die Größe der Schulen wird in Zügen angegeben, jede Schule hat also eine bestimmte "Zügigkeit". Ein Zug bedeutet: Eine Klasse in jedem Jahrgang. Da die Berliner Grundschule regelmäßig von Jahrgang 1 bis Jahrgang 6 reicht, bedeutet ein Zug also, dass sechs Schulklassen in der Schule sind. Bei einer 4-zügigen Schule sind es jeweils vier Parallelklassen - also vier erste, vier zweite ... vier sechste, insgesamt also 24 Klassen. Da jede Klasse einen gewissen Platz braucht, ist die Zügigkeit direkt von der Zahl der Räume abhängig, die zur Verfügung stehen. Bei älteren Gebäuden wird die Zügigkeit aufgrund der vorhandenen Räume ermittelt. Das führt dazu, dass es auch (gerundet) "halbe" Zügigkeiten gibt (z.B. 3,5-zügig). Hier gibt es jedoch keine halben Klassen, sondern es werden zum Beispiel von Jahr zu Jahr wechselnd zwei und drei erste Klassen aufgenommen. - Wenn eine Schule baulich erweitert wird (z.B. durch einen MEB), dann vergrößert sich die Zügigkeit entsprechend.

* Formale Zahl an Plätzen: Die Zahl der Züge und Klassen ist durch die vorhandenen Räume vorgegeben. Die Zahl der Kinder, die in einer Schule gleichzeitig lernen können, hängt dann davon ab, wie viele Kinder in jeder Klasse sind ("Klassenfrequenz"). In Berlin wird diese "Kapazität" der Grundschulen mit 24 Kindern pro Klasse berechnet. Da pro Zug sechs Klassen vorhanden sind, kann die Zahl der Plätze einfach aus der Zügigkeit errechnet werden. Die tatsächliche Größen der Klassen ist jedoch unterschiedlich, und sie sich ändert sich außerdem immer wieder. Die so berechnete Zahl der Plätze ist daher zunächst eine formale Größe.

* Auslastung: Aus dem Verhältnis zwischen der formal errechneten Zahl an Schulplätzen und der Zahl der Kinder, die tatächlich an dieser Schule lernen, lässt sich berechnen, wie stark "ausgelastet" die Schule ist. Wenn es genau so viele Kinder wie Schulplätze sind, liegt die Auslastung bei 100%. Trotzdem werden die Klassen in der Praxis etwas unterschiedliche Größen haben.

* Ø-Frequenz laut Zügigkeit: Weil der Schulraum in Berlin vielfach nicht ausreicht, sind viele Schulen zu mehr als 100% "ausgelastet". Das hat von Schule zu Schule, von Klasse zu Klasse unterschiedliche Auswirkungen. Es können Klassen vergrößert werden. Oder es können Fachräume zugunsten von allgemeinen Unterrichtsräumen aufgelöst werden und dadurch mehr Klassen eingerichtet werden. Die "Ø-Frequenz laut Zügigkeit" ist ein theoretisch errechneter Wert, der die (Über-) Auslastung einer Schule anschaulicher macht als der reine Auslastungs-Wert in Prozent. Für die "Ø-Frequenz laut Zügigkeit" wird angenommen, dass die Zahl der eingerichteten Klassen genau so groß ist wie laut Zügigkeit vorgesehen. Und es wird angenommen, dass sich alle Schüler*innen gleichmäßig auf diese Klassen verteilen würden. In diesem Modell gibt "Ø-Frequenz laut Zügigkeit" an, wie viele Schüler*innen dann durchschnittlich in jeder Klasse wären.

* Klassenfrequenz: Dieser Wert bezeichnet die Größe der Klasse. Er ist für die Grundschulen in der Grundschulverordnung auf 23 bis 26 Kinder pro Klasse festgelegt, und bei Vorliegen bestimmter Indikatoren auf 21 bis 25 Kinder. Wie viele Kinder in die Berliner Schulgebäude "passen", hängt u.a. entscheidend von der Größe der Klassen ab. Andererseits ist die Größe der Klassen einer von mehreren Faktoren, die die Lern-Möglichkeiten entscheidend prägen, also eine Rahmenbedingung von Unterrichtsqualität. Um die Auswirkungen unterschiedlicher Klassenfrequenzen anschaulich zu machen, können Sie diesen Wert ändern. Entsprechend verändert sich dann die Zahl der Schulplätze, die formale Auslastung sowie die Ø-Frequenz laut Zügigkeit. Vorgegeben sind 24 Kinder pro Klasse, also der Berlin-übliche Wert für die Berechnung der "Kapazitäten" der Schulen.

---

# Data
- RBS_OD_ESB_2012_12.geojson
  - license: CC-BY-3.0
  - title: "Grundschuleinzugsbereiche (Geometrien) in Berlin 2012 mit demographischen Merkmalen"
  - attribution: "Amt für Statistik Berlin-Brandenburg"
  - uri: https://daten.berlin.de/datensaetze/grundschuleinzugsbereiche-geometrien-berlin-2012-mit-demographischen-merkmalen
- RBS_OD_ESB_2016_06.geojson
  - license: CC-BY-3.0
  - title: "Einschulbereiche (Geometrien) in Berlin 2016/17"
  - attribution: "Amt für Statistik Berlin-Brandenburg"
  - uri: https://daten.berlin.de/datensaetze/einschulbereiche-geometrien-berlin-201617
- RBS_OD_ESB_2017_06.geojson
  - license: CC-BY-3.0
  - title: "Einschulbereiche (Geometrien) in Berlin 2017/18"
  - attribution: "Amt für Statistik Berlin-Brandenburg"
  - uri: https://daten.berlin.de/datensaetze/einschulbereiche-geometrien-berlin-201718
- RBS_OD_ESB_2018_10.geojson
  - license: CC-BY-3.0
  - title: "Einschulbereiche (Geometrien) Schuljahr 2018/2019"
  - attribution: "Amt für Statistik Berlin-Brandenburg"
  - uri: https://daten.berlin.de/datensaetze/einschulbereiche-geometrien-schuljahr-20182019
- RBS_OD_ESB_2019_06.geojson
  - license: CC-BY-3.0
  - title: "Einschulbereiche (Geometrien) Schuljahr 2019/2020"
  - attribution: "Amt für Statistik Berlin-Brandenburg"
  - uri: https://daten.berlin.de/datensaetze/einschulbereiche-geometrien-schuljahr-20192020
- schulen.csv
  - license: CC-BY-3.0
  - title: "Schulen in Berlin"
  - attribution: "Senatsverwaltung für Bildung, Jugend und Familie"
  - uri: https://daten.berlin.de/datensaetze/schulen-berlin
