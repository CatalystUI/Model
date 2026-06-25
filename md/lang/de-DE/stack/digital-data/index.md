# 5.2 The Stack :: Digital Data

## Ausführliche Besprechung

### Die erste explizite Schicht

**Digital Data** ist die erste explizite Schicht des Stacks. Sie repräsentiert Inhalt, Zustand oder eine Ressource, nachdem sie in computerlesbarer Form in den aktiven Schnittstellenfluss eingetreten ist, aber bevor das Modell Structure & Semantics angewendet oder daraus Komponenten, Layout, Rendering oder Präsentation gemacht hat. Es ist der Punkt, an dem erhaltene Verfügbarkeit zu etwas wird, womit der Stack direkt zu arbeiten beginnen kann.

Diese Schicht ist explizit, weil das Modell die Ressource nun als Teil des Schnittstellenprozesses beschreiben kann. Während Data Storage erklärt, wo etwas außerhalb des aktiven Flusses fortbestehen kann, erklärt Digital Data die aktive Repräsentation, die gelesen, empfangen, geladen, gestreamt, erzeugt oder anderweitig dem Stack verfügbar gemacht wurde. Sie ist nicht mehr nur irgendwo verfügbar. Sie ist nun in einer Form vorhanden, die das System verarbeiten kann.

### Computerlesbare Repräsentation

Digital Data wird durch seine Fähigkeit definiert, binär repräsentiert und von einer Maschine verarbeitet zu werden. Auf dieser Schicht kann die Ressource als Bytes, codierter Text, empfangene Antwort, Speicherbuffer, Stream oder eine andere maschinenlesbare Repräsentation gehalten werden. Der genaue Container ist weniger wichtig als die Rolle, die er spielt: Er ist die aktive Form der Ressource vor der Interpretation.

Das bedeutet, dass Digital Data nicht mit Bedeutung, Struktur oder Präsentation verwechselt werden sollte. Eine Bytefolge kann ein Dokument, Bild, Kommando, eine Konfiguration oder Audiodatei enthalten, aber Layer 7 beschreibt noch nicht, wie diese Folge verstanden werden soll. Er stellt nur fest, dass der Inhalt innerhalb des Stacks in einer Form existiert, auf die das System zugreifen und die es an die nächste Schicht weitergeben kann.

### Vor Structure and Semantics

Digital Data liegt unmittelbar über **Layer 6: Structure & Semantics**, weil es das Material repräsentiert, das Structure & Semantics interpretieren wird. Bis diese Interpretation stattfindet, hat der Stack noch nicht erkannt, welche Regeln, Beziehungen, Felder, Abschnitte oder Bedeutungen in der Repräsentation enthalten sind. Die Ressource kann bereits einem Format folgen, aber das Modell hat dieses Format noch nicht angewendet.

Ein gespeichertes Dokument kann bereits gemäß seinem Format gültig sein, und eine Datei kann bereits organisierten Inhalt enthalten, aber Layer 7 modelliert diese Organisation noch nicht als verstandene Struktur. In dem Moment, in dem der Stack beginnt, Regeln dafür anzuwenden, wie die Repräsentation gelesen werden soll, ist der Fluss in Structure & Semantics gewechselt. Digital Data ist daher nicht bedeutungslos; es ist nur innerhalb des Stacks noch nicht interpretiert.

### Der obere Wendepunkt

Digital Data dient als oberer Wendepunkt des expliziten Stacks. Im Top-down-Fluss beginnt der Stack hier damit, eine computerlesbare Repräsentation in etwas zu transformieren, das schließlich vom Benutzer wahrgenommen oder mit dem interagiert werden kann. Der Fluss beginnt mit einer aktiven Repräsentation und bewegt sich dann abwärts durch Interpretation, Komponentenbildung, Organisation, Rendering, Windowing und Systemauslieferung.

Im Bottom-up-Fluss ist Digital Data der Punkt, an dem das Ergebnis einer Interaktion wieder maschinenlesbar wird. Eine Benutzerhandlung kann geroutet, verarbeitet und in eine Änderung innerhalb der Schnittstelle umgewandelt werden. Diese Änderung kann dann den Stack hinaufwandern, bis sie zu Digital Data wird: eine aktive Repräsentation, die behalten, übertragen, verglichen, neu erzeugt oder zu Data Storage zurückgegeben werden kann. Auf diese Weise nimmt Layer 7 an beiden Richtungen des Schnittstellenzyklus teil.

### Digital Data und Domains

Digital Data steht oft in enger Beziehung zur **symbolischen** Domain, weil es gewöhnlich existiert, bevor eine bestimmte sensorische Form gewählt wurde. Eine Textdatei kann zum Beispiel später visuell angezeigt, hörbar gesprochen, in ein anderes Format übersetzt oder verarbeitet werden, ohne überhaupt direkt präsentiert zu werden. Auf Layer 7 ist nicht entscheidend, wie der Benutzer sie später wahrnimmt, sondern dass die Repräsentation für die Interpretation durch den Stack verfügbar ist.

Das bedeutet nicht, dass Digital Data nur symbolisch sein kann. Eine Ressource kann visuelle, auditive, taktile oder multisensorische Inhalte in codierter Form enthalten. Die Schicht selbst beschreibt jedoch die computerlesbare Repräsentation, bevor der aktive Stack sie in ein wahrnehmbares oder interaktives Ergebnis transformiert hat. Domains identifizieren die Art der behandelten Information; der Stack identifiziert, wo diese Information im Fluss liegt.

### Warum die Schicht wichtig ist

Digital Data hält das Modell davon ab, den ersten aktiven Schritt der Schnittstellenarbeit zu überspringen. Ohne diese Schicht würde der Stack direkt von Speicherung zu Interpretation springen, als würden gespeicherte Ressourcen automatisch nutzbare Struktur tragen, sobald auf sie zugegriffen wird. In realen Systemen geschieht das nicht. Etwas muss zuerst in einer aktiven maschinenlesbaren Form existieren, bevor es geparst, validiert, organisiert, angepasst, gerendert oder präsentiert werden kann.

Durch die Trennung von Digital Data sowohl von Data Storage als auch von Structure & Semantics bewahrt das Modell drei wichtige Unterscheidungen. Data Storage erklärt Persistenz außerhalb des aktiven Flusses. Digital Data erklärt aktive computerlesbare Repräsentation innerhalb des Flusses. Structure & Semantics erklärt die Interpretation dieser Repräsentation. Diese Verantwortlichkeiten getrennt zu halten erlaubt dem Stack, Schnittstellenverhalten präziser zu beschreiben, besonders wenn dieselbe gespeicherte Ressource auf mehr als eine Weise gelesen, interpretiert, transformiert oder präsentiert werden kann.
