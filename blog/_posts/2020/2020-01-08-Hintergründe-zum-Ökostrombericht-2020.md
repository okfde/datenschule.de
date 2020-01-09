---
authors: 
- Maximilian Voigt
date: 2020-01-10 08:00:00
picture:
  src: /files/blog/2020/oekostromreport_2020.png
  title: Ökostrombericht 2020
  license: "CC-BY-4.0"
  license_url: "https://creativecommons.org/licenses/by/4.0/deed.en"
tags:
- Umweltdaten
- Open Data
- Ökostrom
title: "Ökostrombericht 2020: Hintergründe und Daten"
---

Seit einigen Monaten arbeiten wir gemeinsam mit [ROBIN WOOD](https://www.robinwood.de/) an der Neuauflage des [Ökostromberichtes, den wir nun final veröffentlichen](https://www.robinwood.de/oekostromreport-2020). Mit dem Bericht empfehlen wir acht Ökostromanbieter, die nicht nur außschließlich Ökostrom vertreiben, sondern auch nahezu keine wirtschaftlichen Verflechtungen zu Unternehmen der Kohle- und Atomenergie aufweisen sowie sich für eine nachhaltige Energiewende engagieren.

Die Basis des Berichtes bilden verschiedene Daten, die im Rahmen der Recherche zusammengetragen wurden. In diesem Blogartikel veröffentlichen wir die Rohdaten und geben ein paar Einblicke.

## Daten zu wirtschaftlichen Verflechtungen
Die Grundlage des Berichtes ist eine Umfrage, die von den Anbietern selbst beantwortet wurde. Um diese zu verifizieren wurden verschiedene Quellen und Plattformen genutzt. Mit "[North Data](https://www.northdata.de/)" lassen sich beispielsweise wirtschaftliche Verflechtungen von Unternehmen analysieren, die über Pflichtveröffentlichungen, z.B. durch die Handelsrigisterbekanntmachungen, einsehbar sind. Allerdings sind die grundlegenden sowie die aufbereiteten Daten keine Open Data. Einige der Daten stehen aber über "[OffeneRegister.de](https://offeneregister.de/)" zur Verfügung.
Andere Quellen, besonders, wenn es um die Beteiligungen von Städten oder Kommunen an Unternehmen oder Kraftwerken geht, sind die "Beteiligungsberichte". Hier muss die jeweilige Stadt oder der Kreis jährlich auflisten, in welche Bereiche investiert wurde.

## Mehr Transparenz für den Strommarkt
Der ROBIN WOOD-Report geht weiter, als die bekanntesten Ökostromlabel, bei denen wirtschaftliche Verflechtungen häufig deutlich weniger intensiv betrachtet werden. So wird beispielsweise ein Tarif des Anbieters "NaturEnergiePlus" mit dem "Grüner Strom" Label ausgezeichnet, obwohl dieser zu 100% zur EnBW gehört. EnBW betreibt sowohl Atom- als auch Kohlekraftwerke. Ähnlich verhält es sich bei der "Energie und Wasser Waldbröl GmbH", welche mit dem "ok power"-Siegel zertifiziert ist. Das Unternehmen gehört zu 51% der Stadtwerke Aachen AG (STAWAG), welche an Kohlekraftwerken beteiligt ist.

Das Problem sind die zur Verfügung stehenden Informationen: Zwar existieren Plattformen wie Herkunftsnachweis- und Handelsregister, die Zugänge und die Nutzung der Daten sind allerdings nicht barrierefrei. Verbraucher* und Journalisten* haben es schwer. Hier muss nachgebessert werden! Mehr zum Thema gibt es im OKF-Blog- [Das Handelsregister: Endlich offene Daten!](https://okfn.de/blog/2019/02/handelsregister/), [Transparenzregister? Diesmal bitte transparent](https://okfn.de/blog/2018/06/transparenz-register/).

<iframe title="Inbetriebnahme und Installierte Leistung der Bezugskraftwerke" aria-label="Scatter Plot" id="datawrapper-chart-R0dwa" src="//datawrapper.dwcdn.net/R0dwa/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="700"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}})}();</script>

## Kraftwerke und ihre Daten
Besonders im Fokus standen auch verschiedene [Parameter rund um die Kraftwerke](https://github.com/Datenschule/oekostrom-suche-proto/tree/gh-pages/assets/data/provider), von denen die verschiedenen Anbieter ihren Strom beziehen. Die Wesentlichen sind die Art des Kraftwerkes, das Baujahr, die Leistung sowie die Besitzverhältnisse der Anlagen.
Interessant war hier besonders die Erkenntnis, dass der Großteil des vertriebenen Stromes der Anbieter aus Wasserkraft stammt - aus Kraftwerken, die oft älter als 50 Jahre sind. Mehr Details dazu gibt es in [diesem Artikel](https://datenschule.de/blog/2019/11/Einschr%C3%A4nkung-der-Verbraucherinnen-%C3%96kostrom-aus-dem-Ausland/).

## Viele Anbieter, wenige Empfehlungen
Von mehr als 1200 Anbietern wurden nur acht empfohlen. Das liegt zu großen Teilen daran, dass der Großteil der Marktteilnehmer ihren Strom über die Strombörse beziehen und lediglich mit Herkunftsnachweisen handeln. Andere sind lediglich Marken von großen Energiekonzernen, die mit der Kohle- oder Atomindustrie identifiziert werden können.
Über die Anbietersuche des Ökostromberichtes kann der eigene Anbieter recherchiert werden. [Die der Suche zugrundeliegenden Daten haben wir hier veröffentlicht.](https://github.com/Datenschule/oekostrom-suche-proto/tree/gh-pages/assets/data)

## Links
* [Zum Ökostrombericht 2020](https://www.robinwood.de/oekostromreport-2020)
* [Die Kraftwerksdaten der empfohlenen Anbieter](https://github.com/Datenschule/oekostrom-suche-proto/tree/gh-pages/assets/data/provider)
* [Alle bewerteten Stromanbieter als csv](https://github.com/Datenschule/oekostrom-suche-proto/tree/gh-pages/assets/data)