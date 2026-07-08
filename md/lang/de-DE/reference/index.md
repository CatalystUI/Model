<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 3. Referenz

Unten ist das CatalystUI-Modell in verschiedenen Formaten zusammengefasst, damit es beim Lernen, Dokumentieren oder Implementieren des Modells leichter nachgeschlagen, kopiert und angewendet werden kann.

Die Referenzseite soll die umliegende Dokumentation nicht ersetzen. Sie bietet stattdessen eine kompakte Ansicht des Modells, nachdem Terminologie, Zusammenfassung, Domains, Stack, Connectors und Interactions bereits eingeführt wurden.

## Nach KI-Prompt

Ein KI-Prompt, mit dem ein LLM das CatalystUI-Modell interpretieren und verstehen kann. Er kann verwendet werden, um Fragen zum Modell zu stellen, bestehende Systeme damit zu vergleichen oder beim Problemlösen in einer technischen Umgebung ein Referenzblatt bereitzustellen.

---

```md
Das CatalystUI-Modell ist ein universelles Modell zur Beschreibung des Informationsflusses zwischen einem Benutzer und einem Informationssystem.

Ein Prozess ist etwas, das eine Eingabe annimmt, eine Transformation ausführt und eine Ausgabe erzeugt. Ein System ist eine organisierte Menge von Prozessen, definiert dadurch, wie sie miteinander interagieren und in welcher Reihenfolge sie ausgeführt werden. Ein Interface ist ein Mechanismus, der zwei unterschiedliche Systeme miteinander interagieren lässt. Ein Informationssystem ist ein spezialisiertes System, das mit persistenten Daten arbeitet und einem Benutzer erlaubt, diese über längere Zeit durch ein Interface zu erstellen, zu lesen, zu aktualisieren oder zu löschen. Ein Computer ist ein Informationssystem, das ausschließlich mit digitalen Daten arbeitet, also mit Daten, die binär dargestellt und von einer Maschine verarbeitet werden können. Ein Benutzer ist eine Person, die mit einem Informationssystem interagieren kann.

Im CatalystUI-Modell werden die Begriffe "data" und "information" als austauschbar behandelt.

Das Modell beschreibt Benutzeroberflächen durch den Fluss von Information. Information kann von einem System präsentiert, vom Benutzer interpretiert, vom Benutzer beantwortet, vom System verarbeitet und erneut präsentiert werden, während der Zyklus weiterläuft. Der Zyklus kann an jedem Punkt beginnen, doch dasselbe Muster gilt immer: Information fließt zwischen dem Benutzer und dem Informationssystem durch ein Interface.

Das CatalystUI-Modell ist in drei Hauptkategorien aufgeteilt:

- Domains
- The Stack
- Connectors

Domains kategorisieren Daten. The Stack beschreibt Daten. Connectors transformieren, verändern und übersetzen Daten.

Domains beschreiben, welche Art von Information während einer Interaction behandelt wird. Die sieben obersten Domains sind Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory und Multisensory. Symbolic data ist Information, bevor sie auf einen bestimmten Sinn festgelegt wurde. Visual data ist Information, die gesehen werden soll. Auditory data ist Information, die gehört werden soll. Tactile data ist Information, die gefühlt werden soll. Olfactory data ist Information, die gerochen werden soll. Gustatory data ist Information, die geschmeckt werden soll. Multisensory data ist Information, bei der mehrere Sinneskategorien als eine Erfahrung zusammenarbeiten.

The Stack beschreibt, wo Information im Fluss liegt. Er enthält sieben explizite Layers mit zwei impliziten Endpunkten. Von oben nach unten ist The Stack:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage ist die implizite Quelle oder das implizite Ziel, an dem persistente Daten außerhalb des aktiven Interface-Flusses verfügbar bleiben. Digital Data sind Daten, nachdem sie in computerlesbarer Form in den aktiven Interface-Fluss eingetreten sind, aber bevor der Rest des Modells sie interpretiert, organisiert oder präsentiert hat. Structure & Semantics beschreibt, wie digitale Daten verstanden werden sollen; Semantics definieren die Regeln zur Interpretation von Daten, während Structure das organisierte Ergebnis der Anwendung dieser Regeln ist. Components, Controls, & Layouts stellen die logischen und nutzbaren Teile des Interface dar; Components stehen für nutzbare Interface-Objekte, Controls verarbeiten Interactions, und Layouts ordnen andere Components oder Controls an. Graphs & Frames organisieren diese Teile in größere Beziehungen und aktive Kontexte; Graphs stellen organisierte Beziehungen zwischen Interface-Objekten dar, während Frames Graphs für die Vorbereitung in Richtung Renderer enthalten und koordinieren. Renderers verwandeln vorbereitete Interface-Daten in eine ausgabebereite Form. Windows stellen eine Ansicht oder einen Kontext bereit, durch den der Benutzer Eingaben an das System geben oder Ausgaben vom System empfangen kann. Systems stellen die Umgebung, Dienste, Geräte und Prozesse bereit, die letztlich Ausgabe liefern und Eingabe empfangen. Das Human Interface ist der implizite Endpunkt, an dem der Benutzer Information wahrnimmt und durch Interaction antwortet.

Connectors beschreiben, wie Information zwischen benachbarten expliziten Layers des Stack bewegt wird. Von oben nach unten sind die Connectors:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Der Data connector verbindet Digital Data mit Structure & Semantics. Er bringt aktive computerlesbare Information in eine strukturierte Form, die das Modell verstehen kann, und kann strukturierte Information auch wieder in digitale Form zurückführen.

Der Parser connector verbindet Structure & Semantics mit Components, Controls, & Layouts. Er parst stabile interpretierte Strukturen in veränderbare Interface-Teile und kann veränderte Components auch wieder in strukturierte Daten zurückführen.

Der Adapter connector verbindet Components, Controls, & Layouts mit Graphs & Frames. Er adaptiert nutzbare Interface-Teile in organisierte Beziehungen und aktive Kontexte und hilft dabei, kontextuelle Interactions zu den Components oder Controls zurückzuführen, die sie verarbeiten können.

Der Bridge connector verbindet Graphs & Frames mit Renderers. Er trägt organisierten Interface-Kontext in den Renderer und gibt Interactions normalerweise mit wenig Veränderung nach oben zurück, damit Graph und Frame sie passend routen können.

Der Surface connector verbindet Renderers mit Windows. Er gibt gerenderter Ausgabe ein Ziel innerhalb des Window und trägt von Window ausgehende Interaction-Information nach oben zurück.

Der Native connector verbindet Windows mit Systems. Er stellt Bindings zwischen Window und System bereit, sodass das Window existieren, Interactions empfangen, Ausgabe liefern und mit nativem Systemverhalten kommunizieren kann.

Interactions sind der Punkt, an dem das Modell partizipativ wird. Eine Interaction ist die Absicht hinter einer Aktion. Klick, Tippen, Wischen, Befehl, Bewegung oder gesprochenes Wort sind nur die sichtbare Aktion; die Interaction ist das, was der Benutzer durch diese Aktion erreichen möchte. Interactions bewegen sich durch den Stack, werden von Connectors transformiert und können schließlich digitale Daten verändern, bevor der Zyklus erneut beginnt.

Verwende das CatalystUI-Modell, um die Art der behandelten Information zu klassifizieren, zu bestimmen, wo diese Information im Stack liegt, festzustellen, welcher Connector für den Übergang zwischen Layers verantwortlich ist, und nachzuverfolgen, wie Information von gespeicherten Daten zur Benutzererfahrung und von der Benutzerabsicht zurück in Daten fließt.
```

## Nach Text

Ein kompaktes Referenzblatt, das die primäre Reihenfolge des CatalystUI-Modells zeigt.

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | Kurzbedeutung                                                   |
| ------------ | --------------------------------------------------------------- |
| Symbolic     | Information vor der Festlegung auf einen bestimmten Sinn.       |
| Visual       | Information, die gesehen werden soll.                           |
| Auditory     | Information, die gehört werden soll.                            |
| Tactile      | Information, die gefühlt werden soll.                           |
| Olfactory    | Information, die gerochen werden soll.                          |
| Gustatory    | Information, die geschmeckt werden soll.                        |
| Multisensory | Mehrere Sinneskategorien, die als eine Erfahrung zusammenwirken. |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Layer   | Name                            | Kurzbedeutung                                                               |
| ------- | ------------------------------- | --------------------------------------------------------------------------- |
| Implied | Data Storage                    | Persistente Daten außerhalb des aktiven Interface-Flusses.                  |
| Layer 7 | Digital Data                    | Aktive computerlesbare Information vor der Interpretation.                  |
| Layer 6 | Structure & Semantics           | Interpretierte Daten und die Regeln, die ihnen Bedeutung geben.             |
| Layer 5 | Components, Controls, & Layouts | Veränderbare Interface-Teile, die vom Programm genutzt werden.              |
| Layer 4 | Graphs & Frames                 | Organisierte Beziehungen und aktiver Interface-Kontext.                     |
| Layer 3 | Renderers                       | Prozesse, die Information für die Ausgabe vorbereiten.                      |
| Layer 2 | Windows                         | Ansichten oder Lieferkontexte, durch die Eingabe und Ausgabe laufen.        |
| Layer 1 | Systems                         | Umgebung, Dienste, Geräte und Prozesse unterhalb des Interface.             |
| Implied | Human Interface                 | Der Benutzer, der Ausgabe wahrnimmt und durch Interaction antwortet.        |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Verbindet                                               | Kurzbedeutung                                                |
| --------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| Data      | Digital Data ↔ Structure & Semantics                    | Verbindet aktive digitale Daten mit interpretierter Struktur. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Parst stabile Strukturen in veränderbare Interface-Teile.     |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adaptiert nutzbare Teile in organisierten Kontext.            |
| Bridge    | Graphs & Frames ↔ Renderers                             | Überbrückt organisierten Kontext in Richtung Rendering.       |
| Surface   | Renderers ↔ Windows                                     | Verbindet gerenderte Ausgabe mit einem Window.                |
| Native    | Windows ↔ Systems                                       | Stellt Bindings zwischen Window und System bereit.            |

## Nach Flow

Eine kompakte Referenz, um nachzuverfolgen, wie Information durch das Modell läuft.

---

### Output-Facing Flow

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

### Interaction-Facing Flow

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

## Nach Verantwortung

Eine kurze Referenz, um zu bestimmen, wohin etwas im Modell gehört.

---

| Frage                                                   | Verwenden    |
| ------------------------------------------------------- | ------------ |
| Welche Art von Information wird behandelt?              | Domains      |
| Wo liegt die Information im Fluss?                      | The Stack    |
| Wie bewegt sich Information zwischen benachbarten Layers? | Connectors   |
| Was versucht der Benutzer zu erreichen?                 | Interactions |

## Nach Diagnosefrage

Eine fragenbasierte Referenz zur Anwendung des Modells auf ein bestehendes System.

---

| Frage                                                       | Wahrscheinlicher Bereich                   |
| ----------------------------------------------------------- | ------------------------------------------ |
| Sind Daten verfügbar, aber noch nicht verstanden?           | Digital Data, Data, Structure & Semantics  |
| Sind interpretierte Daten noch nicht nutzbar?               | Structure & Semantics, Parser, Components  |
| Sind nutzbare Teile noch nicht in Kontext organisiert?      | Components, Adapter, Graphs & Frames       |
| Erreicht organisierter Kontext den Renderer nicht?          | Graphs & Frames, Bridge, Renderers         |
| Hat gerenderte Ausgabe keinen Ort, an den sie gehen kann?   | Renderers, Surface, Windows                |
| Ist das Window nicht richtig mit dem System verbunden?      | Windows, Native, Systems                   |
| Hat das System eine Aktion erkannt, aber die Absicht verfehlt? | Interactions und Interaction-Routing    |

## In einem Satz

Eine kompakte Zusammenfassung des gesamten Modells.

---

```md
Das CatalystUI-Modell beschreibt den Informationsfluss zwischen einem Benutzer und einem Informationssystem, indem es Daten durch Domains kategorisiert, Daten im Stack verortet, Daten durch Connectors transformiert und Benutzerabsicht durch Interactions nachverfolgt.
```
