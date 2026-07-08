<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 6.1 Connectors :: Data

## Ausführliche Besprechung

### Die erste Übersetzung

Der **Data** connector ist der erste explizite connector des Stacks. Er sitzt zwischen **Layer 7: Digital Data** und **Layer 6: Structure & Semantics**, wo aktive computerlesbare Information zum ersten Mal eine interpretierte Form erhält. Layer 7 sagt uns, dass die Information als digital data existiert. Layer 6 sagt uns, wie diese Information strukturiert ist und was sie bedeutet. Der Data connector erklärt, wie das System von einem Zustand in den anderen wechselt.

Dieser connector ist notwendig, weil digital data sich nicht selbst interpretiert. Eine Datei, ein Stream, ein Buffer, ein Datenbankergebnis, eine Antwort oder eine Nachricht kann bereits organisierte Information enthalten, aber Organisation ist nicht dasselbe wie Interpretation. Etwas muss auf die Daten zugreifen, sie gemäß den passenden Erwartungen lesen und eine Form erzeugen, die Structure & Semantics verstehen kann. Dieses „Etwas“ ist der Data connector.

In diesem Sinn ist dieser connector der erste Übersetzungsakt innerhalb des expliziten Stacks. Er erzeugt die ursprüngliche Information nicht und erzeugt auch noch keine user-facing components. Seine Rolle besteht darin, Information bei Bedarf als Digital Data in den aktiven Fluss zu bringen und diese aktive digitale Repräsentation dann mit den Regeln und Strukturen zu verbinden, die Interpretation möglich machen.

### Arbeit mit Data Storage

Obwohl der Data connector zwischen Digital Data und Structure & Semantics sitzt, hat er oft eine enge Beziehung zur impliziten **Data Storage**-Schicht. Der Grund ist, dass viele Formen von digital data erst nützlich werden, wenn sie von dem Ort aus zugänglich sind, an dem sie gespeichert sind. Deshalb erfüllt ein Data connector häufig zwei verwandte Aufgaben. Erstens greift er in den storage hinein, um Information abzurufen, zu empfangen oder anderweitig zugänglich zu machen, damit diese Information als Digital Data in den aktiven Fluss eintreten kann. Zweitens verarbeitet er die daraus entstehende Digital Data zu einer interpretierten Struktur.

Ein MySQL data connector ist ein gutes Beispiel. Aus Sicht des Modells kann die MySQL-Datenbank als Data Storage behandelt werden, während das Abfrageergebnis zur aktiven Digital Data wird, mit der gearbeitet wird. Der connector kann die Verbindung herstellen, eine Abfrage senden, das Ergebnis empfangen und dieses Ergebnis dann zu strukturierter Information organisieren, die der Rest des Stacks verstehen kann. Datenbankverbindung, Abfrageverhalten und Ergebnisverarbeitung können alle im selben connector erscheinen, weil der Data connector dafür verantwortlich ist, in storage hineinzureichen und die abgerufene Information zu strukturierter, bedeutungsvoller data zu tragen.

Das macht Data Storage nicht zu einer expliziten Schicht des Stacks, und es macht den Data connector nicht selbst zur Datenbank, zum Dateisystem, zum Dienst oder zum Speichermechanismus. Vielmehr erkennt das Modell an, dass der erste connector oft in Richtung storage greifen muss, um digital data in den aktiven Fluss des Systems zu bringen.

### Zugriff ist nicht Verständnis

Der Data connector existiert auch deshalb, weil Zugriff und Verständnis nicht dasselbe sind. Ein Computer kann eine Datei öffnen, eine Antwort empfangen, Bytes im Speicher halten oder sich mit einer Datenbank verbinden. Das beweist nur, dass die Information verfügbar ist. Es beweist nicht, dass die Information verstanden wurde.

Eine Einstellungsdatei kann zum Beispiel als Text verfügbar sein. Das System kann wissen, wo die Datei liegt, ihren Inhalt erfolgreich lesen und diesen Inhalt im Speicher halten. Trotzdem hat der Stack noch nicht bestimmt, welche Teile keys sind, welche Teile values sind, welche Abschnitte gültig sind oder welche Regeln das Format definieren.

Der Data connector liefert die Bewegung von „die Information ist als digital data verfügbar“ zu „die Information kann jetzt gemäß structure und semantics interpretiert werden“. Diese Unterscheidung hält Layer 7 sauber. Digital Data muss nicht wissen, wie jedes mögliche Format interpretiert werden soll. Es muss nur die aktive computerlesbare Information repräsentieren. Der Data connector übernimmt dann die Übergabe an Layer 6, wo Interpretation nach den passenden Regeln stattfinden kann.

### Struktur erzeugen

Im Top-down-Fluss empfängt der Data connector Digital Data und bereitet sie für Structure & Semantics vor. Dazu kann gehören, Bytes zu lesen, Text zu dekodieren, ein Format zu identifizieren, semantische Regeln auszuwählen, grundlegende Erwartungen zu validieren oder die Repräsentation in eine organisierte Struktur zu transformieren. Die genaue Arbeit hängt von der Art der Information ab, aber die Verantwortung bleibt gleich: die aktive Repräsentation mit einer interpretierten Form verbinden.

Eine JSON-Einstellungsdatei kann als kodierter Text beginnen. Der Data connector liest den Text, erkennt das erwartete Format und erzeugt strukturierte Information, die die Einstellungen repräsentiert. Eine CSV-Datei kann zu Zeilen und Feldern werden. Ein Datenbankergebnis kann zu records werden. Eine Binärdatei kann zu headers, sections und values werden. Eine Serverantwort kann zu einer strukturierten Nachricht werden.

Wichtig ist die Bewegung. Der Data connector kann damit beginnen, in storage hineinzureichen, aber sein expliziter Stack-Übergang ist erst abgeschlossen, wenn die abgerufene oder empfangene Digital Data zu Information geworden ist, die durch Structure & Semantics verstanden werden kann.

### Bedeutung bewahren

Ein Data connector muss Bedeutung bewahren, während Information zwischen Schichten wandert. Das heißt nicht, dass jedes Detail der ursprünglichen Repräsentation unverändert bleiben muss. Es heißt, dass der connector die beabsichtigte Beziehung zwischen der digital data und der interpretierten Struktur bewahren sollte, die er erzeugt.

Wenn eine Datei zum Beispiel einen Titel enthält, sollte die resultierende Struktur diesen Titel so repräsentieren, dass sie der ursprünglichen Information treu bleibt. Wenn ein Datenbank-record einen identifier enthält, sollte dieser identifier mit dem record verbunden bleiben, den er beschreibt. Wenn ein Format Reihenfolge, Gruppierung oder erforderliche Werte definiert, sollte der connector diese Erwartungen respektieren, wenn er das strukturierte Ergebnis erzeugt.

### Zurück zu Digital Data

Weil der Stack reversibel ist, nimmt der Data connector auch am Bottom-up-Fluss teil. Wenn eine Interaktion Information in der Schnittstelle verändert, muss diese Änderung später möglicherweise zu Digital Data zurückkehren. Bevor sie bewahrt, übertragen oder wiederverwendet werden kann, muss die strukturierte Information wieder in eine computerlesbare Form umgewandelt werden.

In dieser Richtung führt der Data connector die entgegengesetzte Transformation aus. Er empfängt strukturierte Information von Layer 6 und erzeugt Digital Data, die sich für Speicherung, Übertragung, Vergleich oder weitere Verarbeitung eignet.

Eine Einstellungsstruktur kann zu kodiertem JSON-Text werden. Eine Wertetabelle kann zu CSV werden. Ein record kann zu einem Datenbank-update werden. Eine Dokumentstruktur kann zu den Bytes einer Datei werden.

Diese Rückwärtsbewegung ist genauso wichtig wie die Top-down-Bewegung. Wenn der Data connector Information in Struktur lesen kann, aber Struktur nicht zurück in digitale Form schreiben kann, kann die Schnittstelle Information vielleicht anzeigen oder verwenden, aber das Ergebnis der Interaktion nicht vollständig bewahren. Der connector hilft deshalb, den Kreislauf zwischen Benutzerabsicht und persistenter Änderung zu schließen.

### Validierung und Fehler

Der Data connector ist auch einer der ersten Orte, an denen Fehler sinnvoll erkannt werden können. Digital Data kann fehlen, fehlerhaft geformt, unvollständig, nicht unterstützt, veraltet oder mit den semantischen Regeln von Layer 6 unvereinbar sein.

Wenn das geschieht, sollte der connector das Ergebnis dieser Transformation klar machen. Ein connector kann fehlende optionale Werte ausgleichen, defaults anwenden, nicht unterstützte Erweiterungen ignorieren oder, wenn passend, eine Teilstruktur erzeugen. Der Rest des Stacks sollte jedoch nicht raten müssen, ob die Daten korrekt interpretiert wurden.

Indem Fehler an dieser Grenze erkannt werden, hält das Modell Interpretation ehrlich. Der Data connector schützt den Rest des Stacks davor, auf Information aufzubauen, die nie erfolgreich verstanden wurde.

### Warum der Connector wichtig ist

Der Data connector verhindert, dass der Stack annimmt, digital data werde automatisch bedeutungsvoll, sobald sie verfügbar ist. Ohne diesen connector würde das Modell die Grenze zwischen Repräsentation und Interpretation verwischen. Layer 7 müsste Formate direkt verstehen, oder Layer 6 müsste rohe Daten selbst abrufen. Durch die Definition des Data connectors gibt das Modell diesem Übergang einen eigenen Ort.

Digital Data bleibt für aktive computerlesbare Repräsentation verantwortlich. Structure & Semantics bleibt für interpretierte Bedeutung und organisierte Form verantwortlich. Der Data connector übernimmt die Bewegung zwischen beiden.

Damit wird die erste Transformation des Stacks explizit. Information beginnt als aktive digitale Repräsentation, überquert den Data connector und wird zu etwas, das das System verstehen kann. Von dort aus kann der Rest des Stacks den Prozess fortsetzen: interpretierte Information in nutzbare Schnittstellenobjekte verwandeln, diese Objekte in Kontext organisieren, sie für output vorbereiten, sie durch das System liefern und dem Benutzer erlauben, zu reagieren.
