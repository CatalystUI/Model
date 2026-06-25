# 4.1 Domains :: Symbolic

## Ausführliche Besprechung

Die **symbolische** Domain beschreibt Daten in ihrer repräsentierten Form, bevor sie einer direkten sensorischen Ausgabe zugeordnet wurden. Symbolische Daten tragen Bedeutung, indem sie für etwas anderes stehen. Sie können einen Wert beschreiben, eine Regel definieren, eine Nachricht bewahren, eine Beziehung kennzeichnen oder einem System vorgeben, wie sich etwas verhalten soll. Ihr Zweck ist nicht unmittelbare Wahrnehmung, sondern Repräsentation.

Das macht symbolische Daten im Kontext des Modells wichtig. Ein System kann Informationen nicht sinnvoll transformieren, wenn sie nicht zunächst *existieren*. Ein Dokument, eine Konfigurationsdatei, ein Datenformat oder eine Markup-Struktur kann Bedeutung enthalten, aber diese Bedeutung wird symbolisch gehalten. Das System muss sie nach einer bestimmten Erwartung lesen, bevor es etwas Nützliches damit tun kann.

Symbolische Daten sind kein „rohes Nichts“. Sie können hoch organisiert, tief bedeutungsvoll und bereit zur Interpretation sein. Eine Zahl kann eine Größe darstellen, ein String kann einen Titel darstellen, und ein Tag kann den Beginn eines Abschnitts darstellen. Die Daten bedeuten bereits etwas, aber ihre Bedeutung wird weiterhin über Symbole getragen und nicht über direkte Erfahrung.

### Symbolische Repräsentation

Ein Symbol funktioniert, weil es über seine unmittelbare Form hinaus Bedeutung trägt. Ein Name, ein Wert, eine Regel oder eine Definition kann für etwas stehen, das das System später verstehen muss. Das Symbol selbst ist nicht das endgültige Ergebnis; es ist eine Repräsentation, die das System halten, weitergeben, vergleichen und interpretieren kann. Symbolische Daten beruhen auf einer Trennung zwischen dem, was geschrieben, gespeichert oder definiert ist, und dem, was diese Repräsentation *beschreiben soll*.

Deshalb sind symbolische Daten auf eine Weise mächtig, die direkte Ausgabe nicht ist. Sie können gespeichert, kopiert, durchsucht, übertragen, bearbeitet, validiert und transformiert werden, ohne dass die endgültige Erfahrung bereits existieren muss. Das System kann eine Beschreibung von etwas halten, bevor es dieses Etwas erzeugt. Diese Trennung gibt Software einen großen Teil ihrer Flexibilität.

Hier ist auch Präzision wichtig. Wenn das Symbol unklar ist, kann das System es möglicherweise trotzdem verarbeiten, aber die Bedeutung wird instabil. Ein vager Name, eine fehlerhafte Struktur oder ein inkonsistentes Format kann Verwirrung erzeugen, lange bevor etwas den Benutzer erreicht. Symbolische Fehler sind gefährlich, weil sie oft früh entstehen und dann durch alles nachhallen, was von ihnen abhängt.

### Symbolische Struktur

Symbolische Daten existieren selten als isolierte Werte. Meist erscheinen sie innerhalb einer Struktur, die jedem Wert eine Rolle gibt. Eine Konfigurationsdatei kann Schlüssel und Werte enthalten. Ein Dokument kann Überschriften und Absätze enthalten. Ein Befehl kann Argumente in einer bestimmten Reihenfolge enthalten. Die Bedeutung entsteht nicht nur aus jedem Symbol, sondern auch daraus, wo es erscheint und wie es sich auf die umgebenden Informationen bezieht.

Deshalb kann dasselbe Symbol unterschiedliche Bedeutungen tragen. Ein Wert, Name oder Ausdruck erklärt sich nicht allein dadurch, dass er existiert; er erhält seine Rolle aus dem umgebenden Kontext. Struktur sagt dem System, wie jedes Stück symbolischer Daten verstanden werden soll, ob es eine Eigenschaft definiert, eine Beziehung kennzeichnet, eine Bedingung setzt oder einen Teil eines größeren Ganzen beschreibt.

Gut geformte symbolische Struktur gibt dem System einen verlässlichen Pfad zur Interpretation. Sie ermöglicht es, Daten zu parsen, zu prüfen, umzuwandeln und mit späterem Verhalten zu verbinden. Schlechte symbolische Struktur zwingt das System, zu raten, zu schließen oder die Daten vollständig zurückzuweisen. In CatalystUI-Begriffen ist symbolische Struktur einer der ersten Orte, an denen Klarheit entweder beginnt oder bricht.

### Symbolische Interpretation

Symbolische Daten werden nützlich, wenn das System weiß, wie es sie interpretieren soll. Interpretation verbindet die Repräsentation mit einer erwarteten Bedeutung. Ein Parser kann ein Dateiformat lesen. Ein Schema kann gültige Felder definieren. Ein Befehlsprozessor kann bestimmen, welche Handlung eine Formulierung beschreibt. Ohne Interpretation können symbolische Daten zwar existieren, aber das System hat keinen zuverlässigen Weg, nach ihnen zu handeln.

Deshalb liegt symbolische Daten so nah an Absicht. Ein Entwickler kann Verhalten durch Code beschreiben. Ein Benutzer kann Verhalten durch Einstellungen verändern. Ein Dokument kann Gedanken durch Text bewahren. In jedem Fall erlaubt die symbolische Form, Bedeutung auszudrücken, ohne direkt am endgültigen Ergebnis zu manipulieren. Das System empfängt eine Repräsentation, interpretiert sie und nutzt sie dann, um das nächste Geschehen zu steuern.

Symbolische Interaktion kann weniger unmittelbar wirken als direkte Manipulation, bietet aber oft größere Kontrolle. Ein geschriebener Befehl kann exakt wiederholt werden. Eine Konfigurationsdatei kann versioniert werden. Ein strukturiertes Dokument kann in viele verschiedene Ausgaben transformiert werden. Symbolische Daten geben sowohl dem System als auch dem Benutzer einen stabilen Bezugspunkt.

### Symbolische Daten und Barrierefreiheit

Symbolische Daten spielen eine wichtige Rolle für Barrierefreiheit, weil sie Bedeutung in einer Form bewahren, die angepasst werden kann. Wenn Informationen nur als endgültige Präsentation existieren, hat das System möglicherweise begrenzte Möglichkeiten, sie zu erklären, zu vergrößern, zu durchsuchen, zu übersetzen oder neu zu organisieren. Wenn die zugrunde liegende symbolische Bedeutung verfügbar bleibt, hat das System mehr Möglichkeiten, diese Bedeutung so zu präsentieren, dass der Benutzer sie empfangen kann.

Ein strukturiertes Dokument lässt sich leichter navigieren als ein flaches Bild von Text. Ein Steuerelement mit einer sinnvollen Beschriftung lässt sich leichter zugänglich machen als eines, dessen Zweck nur in seinem Aussehen existiert. Eine Datentabelle mit echten Beziehungen lässt sich leichter neu interpretieren als ein Bild aus Zeilen und Spalten. In jedem Fall schützt symbolische Daten die Bedeutung hinter der Präsentation.

Das macht symbolische Daten nicht automatisch barrierefrei. Symbole können vage, unvollständig, falsch beschriftet oder von dem getrennt sein, was sie darstellen sollen. Wenn symbolische Bedeutung aber klar und bewahrt ist, gewinnt das System die Fähigkeit, Informationen zu transformieren, ohne ihren Zweck zu verlieren.

### Symbolische Daten im Modell

Die symbolische Domain gibt CatalystUI eine Möglichkeit, Informationen zu beschreiben, bevor sie zu einer direkten benutzerseitigen Erfahrung werden. Hier kann Bedeutung gespeichert, benannt, angeordnet und vorbereitet werden. Dazu gehören Dateien, Befehle, Formate, Metadaten, Einstellungen, Quellcode, Markup und andere repräsentierte Formen, die ein System interpretieren kann.

Ihre Bedeutung wird leicht übersehen, weil symbolische Daten oft hinter dem Ergebnis leben. Der Benutzer sieht vielleicht nie das Dateiformat, Schema, den Parser oder die interne Repräsentation, die die Erfahrung möglich gemacht haben. Dennoch prägen diese symbolischen Formen, was das System verstehen kann, was es erzeugen kann und wie treu es Bedeutung über Transformationen hinweg bewahren kann.

Kurz gesagt beschreibt die symbolische Domain Informationen als Repräsentation. Sie wird nicht dadurch definiert, wie der Benutzer sie wahrnimmt, sondern dadurch, wie das System Bedeutung vor direkter Präsentation hält und versteht. Wenn symbolische Daten gut behandelt werden, hat der Rest der Interaktion eine klarere Grundlage, auf der er aufbauen kann.
