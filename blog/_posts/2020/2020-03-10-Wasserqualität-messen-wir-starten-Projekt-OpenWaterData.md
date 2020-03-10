---
authors: 
- Maximilian Voigt
date: 2020-03-10 08:00:00
picture:
  src: /files/blog/2020/wasserlauf.jpg
  title: Ein Wasserlauf. Bild - Torsten Behrens
  license: "CC-BY-2.0"
  license_url: "https://creativecommons.org/licenses/by/2.0/"
tags:
- Open Data
- Wasserdaten
- Wasserqualität
title: "Auf dem Weg zu mehr offenen Wasserdaten"
---

Mit der globalen Erwärmung und dem industriellen Wirtschaften steigt die Belastung der Wasservorkommen. Diese frühzeitig zu erkennen ist eine wichtige Maßnahme. Kollaborativ gesammelte und offene Daten können dabei helfen. Im Rahmen der Umweltdatenschule recherchieren wir bestehende Projekte und arbeiten an einem Testaufbau. Im Fokus steht dabei das automatische und langfristige Messen der Wasserqualität.  

## Status Quo: Das Themenfeld ist breit
Es existieren zahlreiche Projekte, die sich mit der Vermessung von Wasser beschäftigen. Mit [crowdwater.ch](https://crowdwater.ch/en/welcome-to-crowdwater/) schätzen zivilgesellschaftliche Akteure den Wasserstand von Flüssen oder Seen und speisen ihn in eine zentrale Datenbank ein. Die Plattform [Open Water Data App](https://water-data-web-app.appspot.com/) konzentriert sich auf Wasservorkommen in Indien und basiert auf unterschieldichen Datenquellen, die auch aus dem [zivilen Sektor](https://datameet-pune.github.io/open-water-data/precipitation/2017/12/31/OWD-Paper/) stammen. Das Projekt [Monocle](https://www.monocle-h2020.eu/Citizen_science) beschäftigt sich besonders mit der Rollen der Zivilgesellschaft bei der Vermessung der Wasserqualität und vereint verschiedene Projekte. Und der [LADI Trawl](https://civiclaboratory.nl/2016/06/29/ladi-trawl/) ist auf das Sammeln von Mikroplastik spezialisiert. 

## Gegenstand der Messung: Wasserqualität
Die aufgeführten Projekte zeigen eine große Bandbreite. Das liegt auch daran, dass die Wasserqualität ein komplexer Faktor ist, der von vielen Parametern abhängt. Besonders interessant sind konkrete Belastungen, z.B. durch Schwermetalle oder Nitrat. Diese automatisiert zu messen ist allerdings eine Herausforderung, da es in der Regel ohne den Einsatz von Chemikalien nicht geht, die der Messprobe hinzugefügt werden müssen. Für die Messung eignen sich besonders optische Verfahren, wie z.B. Photometer (hier ein [Open Hardware-Sensor](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0134989) zum Nachbauen). Ein Verfahren, das ohne den Einsatz einer Chemikalie auskommen soll, ist in [diesem Artikel](https://www.hydrol-earth-syst-sci.net/23/3997/2019/hess-23-3997-2019.pdf) beschrieben. Allerdings ist der Aufbau sehr aufwändig und kommt für den breiten, zivilen Einsatz nicht in Frage.

Das grundsätzliche Problem ist - neben dem Einsatz einer Chemikalie als Indikator - das Verhältnis von Lösungsmittel (Wasser) und Belastung (z.B. Nitrat). Es wird gewissermaßen die Nadel im Heuhaufen gesucht. Wenn langfristig gemessen werden soll, kommt die schnelle Verunreinigung des Messsystems hinzu.

Neben der konkreten Belastung des Wassers geben verschiedene andere Parameter Aufschluss über den Qualitätszustand. Dazu gehören z.B. der pH-Wert, die elektrische Leitfähigkeit, der Trübheitsgrad, die Temperatur oder die Sättigung von Sauerstoff. Allerdings gibt es hier starke Veränderungen, abhängig vom Ort der Messung. An der Oberfläche werden andere Werte gemessen, als zwei Meter darunter. 

## Daten automatisiert Messen: unsere Herangehensweise
Das automatische Messen im Wasser ist eine Herausforderung. Das zeigen auch die aufgelisteten Projektbeispiele, die kaum mit in situ Sensoren arbeiten, die in Echtzeit Messen. Für die Beobachtung relativer Veränderungen ist ein solcher Ansatz aber besonders interessant. 

Aus diesem Grund haben wir uns dazu entschieden, erst mal mit einer einfachen Auswahl von Sensoren zu beginnen und einen Ansatz zu entwickeln, mit dem ein weitestgehend automatisierter Messprozess im Außenbereich möglich ist. Grundlage dafür ist ein Hardware-Projekt von [publiclab.org](https://publiclab.org/notes/wmacfarl/01-10-2020/building-the-simple-water-sensor-platform) sowie die Infrastruktur der [sensor.community](https://sensor.community/en/). Der Prototyp auf publiclab.org misst die folgenden parameter: Trübheit, pH-Wert, elektrische Leitfähigkeit, gelöster Sauerstoff sowie das Redoxpotential. Ziel unseres Projektes ist es, diese Auswahl mit der Hardware-Plattform der sensor.community zu verbinden und die interne Software entsprechend anzupassen, damit die Messwerte automatisiert erfasst und an die Server der Community übermittelt werden. Der Arbeitstitel des Projektes ist [OpenWaterData](https://github.com/Datenschule/wasserdaten). Wer sich am Projekt beteiligen möchte, ist herzlich willkommen. Meldet euch einfach über unsere <a href="mailto:info@datenschule.de">Mail-Adresse</a>. 


