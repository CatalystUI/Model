# 5.3 The Stack :: Structure & Semantics

## Ausführliche Besprechung

### Die erste interpretierende Schicht

**Structure & Semantics** ist die Schicht, in der Digital Data innerhalb des Stacks erstmals verständlich wird. Layer 7 liefert eine aktive computerlesbare Repräsentation, aber diese Repräsentation erklärt sich nicht selbst. Bevor der Rest der Schnittstelle sie verwenden kann, muss das System wissen, welche Art von Repräsentation sie ist, welche Regeln sie steuern und wie ihre inneren Teile verstanden werden sollen.

Das ist der Zweck von Layer 6. Er nimmt eine aktive Repräsentation aus Digital Data und gibt ihr eine bedeutungsvolle Form. An diesem Punkt befasst sich der Stack noch nicht mit Komponenten, Controls, Layouts, Rendering oder Präsentation. Er befasst sich mit Interpretation: wie die Repräsentation gelesen werden soll, welche Beziehungen in ihr existieren und welche Form sicher an die nächste Schicht weitergegeben werden kann.

### Semantik

**Semantics** definieren die Regeln, nach denen eine Repräsentation verstanden werden soll. Sie beschreiben die erwartete Bedeutung, Reihenfolge, das Format und die Beziehungen des Inhalts, der interpretiert wird. In diesem Sinne wirken Semantics wie ein Vertrag. Sie müssen die aktive Repräsentation selbst nicht enthalten; vielmehr definieren sie, wie diese Repräsentation gelesen werden soll.

Diese Unterscheidung ist wichtig, weil Digital Data erkennbare Muster enthalten kann, ohne dass der Stack schon weiß, was diese Muster bedeuten. Eine Folge von Bytes, Zeichen, Feldern oder Datensätzen kann einem bekannten Format folgen, aber das Modell behandelt dieses Format erst als angewendet, wenn Layer 6 erreicht ist. Semantics liefern das Regelwerk, das Interpretation möglich macht.

Semantics können breite Regeln definieren, etwa die erwartete Form eines Dokuments, Dateiformats, einer Nachricht, Antwort, Konfiguration oder Ressource. Sie können auch kleinere interne Erwartungen definieren, etwa wie ein Feld geordnet ist, wie ein Abschnitt erkannt wird, welche Werte gültig sind oder wie ein Teil mit einem anderen zusammenhängt. Entscheidend ist, dass Semantics Bedeutung definieren, bevor die Schnittstelle beginnt, diese Bedeutung in nutzbare Teile zu verwandeln.

### Struktur

Eine **Structure** ist das organisierte Ergebnis der Anwendung von Semantics auf Digital Data. Während Semantics definieren, wie etwas verstanden werden soll, repräsentiert eine Structure, was aus einer bestimmten aktiven Repräsentation verstanden wurde. Sie ist die geformte Form des Inhalts, nachdem die relevanten Regeln angewendet wurden.

Structure ermöglicht dem Rest des Stacks, mit der Repräsentation zu arbeiten, ohne wiederholt zur rohen Form zurückzukehren. Statt die Ressource als uninterpretierten Ablauf zu behandeln, kann das System nun mit organisierten Abschnitten, Werten, Beziehungen oder Datensätzen arbeiten. Dadurch wird die Ressource noch nicht interaktiv. Es bedeutet nur, dass der Inhalt eine stabile Form erhalten hat, die die Schnittstelle als Grundlage verwenden kann.

Im Modell ist Structure an eine bestimmte Interpretation gebunden. Wenn dieselben Digital Data durch mehr als ein Regelwerk verstanden werden können, können daraus auch mehr als eine Structure entstehen. Ebenso muss die resultierende Structure eine geänderte Interpretation widerspiegeln, wenn sich die zugrunde liegende Repräsentation ändert. Structure ist daher nicht einfach „die Daten im Speicher“. Sie ist die interpretierte Form einer bestimmten Repräsentation gemäß bestimmten semantischen Regeln.

### Stabile Interpretation

Structure & Semantics sollten innerhalb eines bestimmten Durchlaufs durch den Stack als stabil behandelt werden. Diese Schicht repräsentiert eine Interpretation, die bereits hergestellt wurde, nicht ein veränderliches Schnittstellenobjekt, das aktiv vom Benutzer manipuliert wird. Sobald Digital Data in Structure interpretiert wurde, bietet diese Structure eine verlässliche Grundlage für spätere Schichten.

Diese Stabilität trennt Layer 6 von **Layer 5: Components, Controls, & Layouts**. Layer 5 führt veränderliche, menschlich ausgerichtete Schnittstellenobjekte ein, die angeordnet, aktualisiert, interaktiv genutzt und durch den Rest der Schnittstelle geroutet werden können. Layer 6 erfüllt diese Rolle nicht. Er erklärt, was der Inhalt bedeutet und wie er organisiert ist, bevor die Schnittstelle ihn in nutzbare Komponenten verwandelt.

Das bedeutet nicht, dass sich die zugrunde liegende Ressource niemals ändern kann. Es bedeutet, dass das Modell bei einer Änderung eine neue oder aktualisierte Interpretation erkennen sollte, anstatt die ursprüngliche Structure als endlos veränderliche Control-Oberfläche zu behandeln. Layer 6 liefert die interpretierte Grundlage; Layer 5 liefert die darauf aufgebaute veränderliche Schnittstelle.

### Beziehung zu Digital Data

Die Grenze zwischen Digital Data und Structure & Semantics ist die Grenze zwischen aktiver Repräsentation und interpretierter Form. Digital Data sagt: „Diese Ressource ist nun in computerlesbarer Form im Stack vorhanden.“ Structure & Semantics sagt: „So wird diese Repräsentation verstanden.“

Das verhindert, dass Layer 7 Verantwortlichkeiten übernimmt, die zur Interpretation gehören. Eine Datei, ein Stream, eine Antwort oder ein Buffer kann bereits gemäß einem Format codiert sein, aber Codierung allein ist innerhalb des Modells nicht dasselbe wie Interpretation. Layer 6 beginnt, wenn der Stack die relevanten Regeln anwendet und eine organisierte Form erzeugt, die vom Rest der Schnittstelle verwendet werden kann.

### Beziehung zu Components, Controls, & Layouts

Structure & Semantics schützt auch Layer 5 davor, jede rohe Repräsentation direkt verstehen zu müssen. Components, Controls und Layouts sollten nicht gezwungen sein, Bytes zu parsen, Formate zu decodieren, Feldreihenfolgen zu validieren oder jedes Mal die grundlegende Bedeutung einer Ressource zu bestimmen, wenn sie verwendet werden. Sie sollten eine bereits interpretierte Form erhalten, die in menschlich ausgerichtete Schnittstellenobjekte angepasst werden kann.

Diese Trennung erlaubt Layer 5, sich auf Nutzbarkeit, Interaktion und Anordnung zu konzentrieren. Eine Component kann eine praktische Eigenschaft bereitstellen, ein Control kann auf Benutzerabsicht reagieren, und ein Layout kann sichtbare oder nicht sichtbare Teile einer Schnittstelle organisieren. Diese Verantwortlichkeiten hängen von Bedeutung ab, definieren Bedeutung aber nicht von Grund auf neu. Layer 6 liefert das strukturierte Verständnis, das diese Verantwortlichkeiten möglich macht.

### Rolle im Fluss

Im Top-down-Fluss empfängt Structure & Semantics Digital Data und interpretiert sie in eine stabile organisierte Form. Das ist der Moment, in dem der Stack beginnt, sich von roher computerlesbarer Repräsentation zu nutzbarem Schnittstellenmaterial zu bewegen. Das Ergebnis kann anschließend in Components, Controls und Layouts transformiert werden, die für Interaktion und weitere Organisation geeignet sind.

Im Bottom-up-Fluss empfängt Structure & Semantics Änderungen, die durch Interaktion erzeugt wurden, und bereitet sie darauf vor, wieder zu Digital Data zu werden. Ein Control kann einen Wert ändern, einen Abschnitt aktualisieren, einen Datensatz erstellen, Inhalt entfernen oder eine andere Änderung erzeugen. Bevor dieses Ergebnis zu Digital Data zurückkehren kann, muss es weiterhin den relevanten semantischen Regeln entsprechen. Layer 6 hilft daher sicherzustellen, dass das Ergebnis bedeutungsvoll bleibt, bevor es wieder in maschinenlesbarer Form repräsentiert wird.

### Warum die Schicht wichtig ist

Structure & Semantics verhindert, dass der Stack Zugriff mit Verständnis verwechselt. Digital Data kann für das System verfügbar sein, aber Verfügbarkeit bedeutet nicht, dass die Schnittstelle weiß, wie sie es verwenden soll. Layer 6 liefert den fehlenden interpretierenden Schritt: Er definiert, was die Repräsentation bedeutet, und organisiert sie in eine Form, auf der spätere Schichten sicher aufbauen können.

Durch die Trennung von Semantics, Structure und Components bewahrt das Modell eine klare Abfolge. Digital Data liefert die aktive Repräsentation. Semantics definiert, wie diese Repräsentation verstanden werden soll. Structure liefert das organisierte Ergebnis dieses Verständnisses. Components, Controls, & Layouts verwandeln diese interpretierte Form dann in veränderliche Schnittstellenobjekte. Diese Unterscheidung hält den Stack präzise, verhindert, dass Parsing-Logik in jede Schicht sickert, und erlaubt derselben zugrunde liegenden Repräsentation, unterschiedliche Formen von Interaktion, Präsentation und Transformation zu unterstützen.
