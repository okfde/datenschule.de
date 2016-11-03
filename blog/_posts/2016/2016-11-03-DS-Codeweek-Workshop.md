---
authors: Jasmin Helm
date: 2016-11-03 11:00:00
picture:
  src: /files/blog/2016/11/forest.jpg
  title: 
  license: "Public Domain, via pixabay"
  license_url: "https://wiki.creativecommons.org/wiki/Public_domain"
tags:
- data literacy
- social change
- workshops
- umwelt
title: "Schadstoffemissionen in Deutschland - Wer sind die Übeltäter? Ein Rückblick unseres Workshops zur Analyse und Visualisierung von Umweltdaten"
---

<br/>

Die Umweltverschmutzung ist eines der größten Probleme des 21. Jahrhunderts. Schadstoffe, die durch die Industrie, aber auch durch jede einzelne Person in die Umwelt gelangen, wirken sich auf das Klima, begrenzte natürliche Ressourcen und auch unsere Gesundheit aus. Welche Betriebe belasten die Umwelt in welcher Umgebung am stärksten? Welche Industriebranchen sind für die meisten CO2-Emissionen in Deutschland verantwortlich? Welche Konzerne produzieren den höchsten Abfallberg?

Diesen Fragen sind wir nachgegangen - bei unserem Workshop im Rahmen der CodeWeek am 20. Oktober in der Zentral- und Landesbibliothek Berlin. Mit Expert/innen aus der Umweltbranche analysierten und visualisierten wir Umweltdaten. Ziel war es einen Einblick in die Arbeit mit Daten zu geben und Möglichkeiten aufzuzeigen, wie man einfache Fragen anhand von Daten ohne Programmierkenntnisse und mit einfachen tools beantworten kann.

<br/>


### Umwelt-Tech-Projekt - eine kurze Einführung
<br/>

Zur Einführung in die Thematik gab uns Johanna zum Felde  einen kurzen Input zur Umweltbelastung in Deutschland und zeigte einige Beispiele zur Nutzung von Umweltdaten mit Hintergrundwissen aus dem “[2030 Watch](https://2030-watch.de/)”-Projekt.
<br/>
<br/>


![Air Pollution Map](/files/blog/2016/11/globalairpollutionmap.jpg "Air Pollution Map")

[**Global Air Pollution Map**](http://www.esa.int/Our_Activities/Observing_the_Earth/Envisat/Global_air_pollution_map_produced_by_Envisat_s_SCIAMACHY)

Die Heidelberger Universität stellt auf einer hochaufgelösten Karte die globale Luftverschmutzung dar. Die Aufnahmen lieferte Envisat, der weltgrößte Satellit zum Monitoring der Umweltbelastung.
<br/>
<br/>


![Beijing Air Pollution](/files/blog/2016/11/airpollutionbeijing.jpg "Beijing Air Pollution")

[**Visualization of Beijing Air Pollution**](http://scottcheng.github.io/bj-air-vis/)

Diese interaktive Visualisierung zeigt die Intensität der größten Umweltsünder in Beijing von Mitte bis Ende Oktober 2012. Die Daten stammen aus dem Beijinger Umweltschutzzentrum. Die Umsetzung der Visualisierung erfolgte mit D3.
<br/>
<br/>


![Open Budgets](/files/blog/2016/11/openbudgets.jpg "Open Budgets")

[**Open Budgets**](http://openbudgets.eu/)

In dem EU-Projekt wird eine Open Source-Software as-a-service entwickelt, die einen zentralen und europaweiten Zugang zu Daten staatlicher Ausgaben ermöglicht. Dadurch soll im öffentlichen Raum Transparenz gestärkt und Korruption bekämpft werden. Staatliche Ausgaben zur Bekämpfung der Umweltverschmutzung können über das Projekt nachvollzogen werden. 


### Schadstoffemissionsdaten - was geben sie her?
<br/>

Das Umweltbundesamt veröffentlicht in regelmäßigen Abständen Umweltdaten auf der Website [thru.de](http://www.thru.de/index.php?id=421) als Open Data. Seit 2007 werden dort alle Unternehmen aufgeführt, die (gefährliche und ungefährliche) Emissionen in die Umwelt entlassen und dabei den gesetzlich festgesetzten Grenzwert überschreiten. Für 91 Schadstoffe ist es bei Grenzüberschreitung Pflicht zu berichten. 

Die Grenzwerte für die einzelnen Stoffe sind allerdings immer unterschiedlich hoch. In der Kategorie “Abfall” besteht bei "normalen" Abfällen eine Berichtspflicht bei 2000 Tonnen/pro Jahr. Bei gefährlichen schon bei 2 Tonnen pro Jahr. Die Daten enthalten sowohl Informationen zu den Betrieben, als auch zur Menge, Messung und Entsorgung der Schadstoffe. Aus neun verschiedenen Branchen - wie dem Energiesektor und der Metallindustrie - sind Angaben zu Abfällen, Abwasser und Luftverbringung zu finden. Weitere Infos findet ihr unter [thru.de](http://www.thru.de/index.php?id=421) oder in dieser [Dokumentation](http://www.thru.de/fileadmin/SITE_MASTER/content/Dokumente/Downloads/Neu_Kurzanleitung_PRTR_offene_Datenbank_rev1c_150602.pdf).


### Datenanalyse - schneller Überblick mit Pivot-Tabellen
<br/>

In Vorbereitung des Workshops haben wir verschiedene Daten der thru.de-Datenbank miteinander verknüpft und für die Teilnehmer/innen gesäubert zur Verfügung gestellt. Um sich einen schnellen Überblick über größere Datenmengen (in unserem Fall mehrere tausend Zeilen) zu verschaffen, haben wir mit Pivot-Tabellen gearbeitet und hilfreiche Funktionen angewendet. Mit der Pivot-Funktion lassen sich Zusammenhänge in Kreuztabellen übersichtlich darstellen, um erste Fragen an Daten, wie z.B. “In welchem Bundesland verursacht die jeweilige Branche besonders viele Abfälle, in welchen besonders wenige?” zu stellen.

Beim Workshop hat jede Gruppe eigenständige Analysen zu unterschiedlichen Industriebranchen durchgeführt. Eine Gruppe, die sich mit der Abfall- und Abwasserbewirtschaftung auseinandergesetzt hat, fand heraus, dass Schadstoffemissionen in Nordrhein-Westfalen (NRW) im Vergleich zu anderen Bundesländern am höchsten waren und die Luftverbringungen den größten Anteil der Schadstoffemissionen ausmachten. Die Analysen ließen zahlreiche Anschlussfragen zu: Warum gerade NRW? Welche regionalen Gegebenheiten sind dafür verantwortlich? Und: Hängt der hohe Anteil an Luftverbringungen mit der Art der Entsorgung von Abfällen zusammen?


### Visualisierungen - One does not simply use a pie chart!

<br/>


Was sind die “good & bad guys” der Datenvisualisierung? Wann nutzt man eigentlich Kuchen-, Balken- und Liniendiagramme? Worauf man achten sollte und was die gängigste Anwendungsfehler sind, haben wir uns anhand einiger Beispiele angesehen.

Dann ging’s an die Praxis: Wir nutzten [Infogram](https://infogr.am/) zum Einstieg in die Visualisierung von Daten - es ist ein einfach zu bedienendes Tool und Programmierkenntnisse werden nicht benötigt. Bei der Darstellung von Betrieben und Schadstoffmengen in einem Streudiagramm (Scatter Plot) bspw. ließen sich deutlich Ausreißer erkennen. Während ein Unternehmen überdurchschnittlich häufig, aber nur minimal die Grenzwerte überschritt, lag die Zahl an Überschreitungen bei einem anderen Betrieb niedriger, die Menge an abgesonderten Schadstoffen jedoch deutlich höher. Auch hier stellten sich dem Team weiterführende Fragen: Welche Gründe könnten dafür verantwortlich sein, dass diese Unternehmen besonders häufig bzw. besonder hohe Schadstoffmengen berichten mussten?

Wir bedanken und bei allen Teilnehmenden und Interessierten für viel Austausch, Input und die interessanten Erkenntnisse zu Schadstoffemissionen in Deutschland! <3
<br/>
<br/>



### Materialien vom Workshop

<br/>

[Unsere Präsentation als pdf](/files/downloads/workshops/slides-codeweek-1016.pdf)

[Thru.de-Kurzübersicht & Erklärung zu Pivot-Funktionen](/files/downloads/workshops/hintergrund.pdf)

[Umweltdaten aus unserem Workshop](https://drive.google.com/drive/folders/0B8GaLtzJXlwdMm14ZG5nNVpMZ0U?usp=sharing)

[Fragen zur Analyse der Umweltdaten aus unserem Workshop](/files/downloads/workshops/fragen-analyse.pdf)

[Lösungsweg](/files/downloads/workshops/loesungen.pdf)