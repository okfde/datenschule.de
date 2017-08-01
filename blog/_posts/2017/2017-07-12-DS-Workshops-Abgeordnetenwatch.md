---
authors: 
- Moritz Neujeffski, Helene Hahn, Jasmin Helm
date: 2017-07-12 10:00:00
picture:
  src: /files/blog/2017/07/workshop-agw.jpg
  title: 
  license: "CC-BY 3.0, Data Pipeline, Foto: Jasmin Helm" 
  license_url: "https://creativecommons.org/licenses/by/3.0/%22"   
tags:
- bundestagswahl 2017
- workshops
- wahldaten
- data literacy
title: "Wahldaten analysieren - Rückblick zu unseren Workshops mit Abgeordnetenwatch"
---

Bei der Datenschule wollen wir Diskussionen um die Digitalisierung in gemeinnützigen Organisation fördern und Teams dabei unterstützen, die Chancen von Daten für ihre Anliegen aktiv zu nutzen. Aktuell arbeiten wir mit [Abgeordnetenwatch.de](https://abgeordnetenwatch.de) zusammen- einer NGO, die öffentliche Bürgeranfragen an Abgeordnete ermöglicht und so mehr Transparenz und Beteiligungsmöglichkeiten schafft. 

Jede Organisation hat andere Bedarfe, wenn es um den Einsatz von Daten geht. Um zielgerichtet unterstützen zu können, wollen wir zunächst verstehen, wo eine Organisation steht und wie bereits mit Daten gearbeitet wird. Im Laufe des letzten halben Jahres haben wir hierfür einen [Fragebogen entwickelt](https://datenschule.de/files/workshops/DataLiteracy-MaturityModel-Datenschule.pdf), mit dem Organisationen einen Eindruck über ihre Fähigkeiten im Umgang mit Daten erhalten können. In unserem zweitägigen Workshop legten wir den Fokus auf das Finden und die Säuberung, Analyse und Visualisierung von Daten, das Abgeordnetenwatch direkt in ihre alltägliche Arbeit einbinden kann. 

### Wahldaten recherchieren - Wo gibt es sie und wie kann ich sie nutzen?

Da die Recherche oft sehr umfangreich und schwierig ist, haben wir uns zunächst einige interessante Datenquellen genauer angesehen. Die Plattform [Govdata](https://www.govdata.de/) stellt beispielsweise deutschlandweit Daten von Städten und Open Data Portalen gesammelt zur Verfügung. Auf [Every Politican](http://everypolitician.org/) gibt es Informationen zu vielen Politiker/innen weltweit, auf [Open Sanctions](https://opensanctions.org) ist sichtbar, welche Staaten gegeneinander Sanktionen verhängen und die Webseite [Lobbyfacts](https://lobbyfacts.eu/) informiert über die Lobbyorganisationen in der EU. Ein Problem bei der Weiternutzung der Daten ist oft, dass sie nicht in maschinenlesbarem Format heruntergeladen werden können - so auch bei Informationen zu Abgeordneten und Kandidierenden. Das Scrapen von Abgeordnetenlisten auf Parteienwebseiten kann daher eine Arbeitserleichterung sein. Dies geht beispielsweise durch den IMPORT-Befehl in Excel oder Google Sheets. PDFs lassen sich dagegen gut mit dem Tool [Tabula](http://tabula.technology/) scrapen. 

Gute Rechercheergebnisse und verlässliche Informationen sind wichtig, um sie später weiter nutzen und evidenzbasiert argumentieren zu können. Vorher müssen die Daten aber in gesäuberter Form vorliegen. Ein gutes Tool zur Datenbereinigung ist z.B. [Open Refine](http://openrefine.org/). Genauso wichtig ist eine gute Begleitrecherche, um Informationen in den Daten richtig einordnen und bewerten zu können.

### Analyse und Visualisierung von Wahldaten - am Beispiel der Nebentätigkeiten von Parteien

Welche/r Abgeordnete hat welche Nebentätigkeiten? Gibt es mögliche Abhängigkeiten zwischen Abgeordnet/innen und Unternehmen? Und wie verteilt sich die Zahl der Nebentätigkeiten auf die Parteien? Um diese Fragen analysieren zu können, nutzten wir die Pivot-Funktion in Google Sheets. Damit lassen sich einzelne Spalten schnell und einfach miteinander in Verbindung setzen. Bei der Analyse fielen uns einige Besonderheiten im Datensatz auf, z.B. dass es unterschiedliche Angaben zu einmaligen, monatlichen und jährlichen Beiträgen gibt oder ehrenamtliche Tätigkeiten teilweise als vergütet angegeben werden. Hier ist Hintergrundwissen und eine gute begleitende Recherche nötig.    

Für die Präsentation der Ergebnisse aus der Datenanalyse erfüllen bereits einfache Datenvisualisierungen ihren Zweck: Sie können auf der Webseite, in Berichten oder im Blog eingebunden werden. Ein hilfreiches Tool hierfür ist z.B. [Datawrapper](https://www.datawrapper.de/). 

### Materialien
-[PDFs scrapen mit Tabula](files/downloads/workshops/Lehrmaterial-DS-PDF-Scraping-Tabula.pdf) <br/>
-[Analyse mit Excel und Pivot-Tabellen](files/downloads/workshops/Lernmaterial-Pivot-Tabellen_Excel_Hintergundinfos.pdf) <br/>
-[Datenvisualisierung mit Datawrapper](files/downloads/workshops/Lehrmaterial-DS-Data-Viz-Datawrapper.pdf)
