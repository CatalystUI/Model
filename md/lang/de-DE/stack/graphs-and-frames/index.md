<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 5.5 The Stack :: Graphs & Frames

## Ausführliche Besprechung

### Die Organisationsschicht

**Graphs & Frames** ist die Schicht, in der nutzbare Schnittstellenobjekte in einen größeren Betriebskontext organisiert werden. Layer 5 stellt Components, Controls und Layouts als veränderliche Objekte bereit, aber diese Objekte bilden nicht automatisch eine vollständige Schnittstelle, nur weil sie zusammen existieren. Sie brauchen eine Möglichkeit, entdeckt, zueinander in Beziehung gesetzt, abgefragt, geordnet, geroutet, begrenzt und für die unteren Schichten des Stacks vorbereitet zu werden.

Das ist der Zweck von Layer 4. Er empfängt die aktiven Schnittstellenobjekte aus Layer 5 und stellt den umfassenderen Kontext her, in dem sie arbeiten. Eine Component kann wissen, wie sie ihren eigenen Zustand repräsentiert, ein Control kann wissen, wie es eine Interaktion verarbeitet, und ein Layout kann wissen, wie es eine Gruppe von Components anordnet, aber Layer 4 bestimmt, wie diese Teile an der Schnittstelle als Ganzem teilnehmen.

### Graphs

Ein **Graph** beschreibt organisierte Beziehungen zwischen Components, Controls und Layouts. Er stellt die Struktur bereit, die nötig ist, um zu verstehen, wie Schnittstellenobjekte zueinander stehen, wie sie gefunden werden können und wie sie während des aktiven Betriebs durchlaufen oder abgefragt werden können.

Das unterscheidet einen Graph von einem Layout. Ein Layout ordnet Components nach einer bestimmten Regel oder einem bestimmten Muster an. Ein Graph verwaltet den größeren Beziehungsraum, in dem Layouts und Components existieren. Er kann Eltern-Kind-Beziehungen, Besitz, Abhängigkeiten, Gruppierung, Ordnung, Fokuspfade, Routingpfade oder andere Verbindungsformen beschreiben, die der Schnittstelle helfen, als kohärentes System zu funktionieren.

Ein Graph bietet außerdem eine praktische Möglichkeit, Schnittstellenobjekte zu finden und zu verwalten, ohne jede Component zu zwingen, jede andere Component zu kennen. Components können auf ihren eigenen nutzbaren Zustand fokussiert bleiben, während der Graph die umgebende Struktur für Entdeckung, Koordination und Routing bereitstellt. Das verhindert, dass die Schnittstelle zu einer Sammlung isolierter Objekte oder zu einem verhedderten Netz direkter Referenzen wird.

### Frames

Ein **Frame** beschreibt den größeren aktuellen Betriebskontext, der für die unteren Schichten des Stacks vorbereitet ist. Während ein Graph Schnittstellenobjekte und ihre Beziehungen organisiert, enthält und koordiniert ein Frame den relevanten Zustand dieser Organisation in einer Form, die Richtung Rendering, Ausgabe oder niedrigere Verarbeitung weitergegeben werden kann.

Der Frame wirkt als Hauptgrenze zwischen der objektorientierten Schnittstellenwelt von Layer 5 und der renderingorientierten Welt von Layer 3. Er enthält Components nicht nur; er bereitet sie vor. Diese Vorbereitung kann das Auflösen von Grenzen, Anwenden von Layout-Ergebnissen, Sammeln renderbarer Elemente, Ordnen von Ausgabe, Verfolgen des aktuellen Schnittstellenzustands oder Erzeugen einer temporären Repräsentation dessen umfassen, womit der Renderer arbeiten soll.

Ein Frame sollte als kontextuell und nicht als dauerhaft verstanden werden. Er repräsentiert den aktuellen Zustand der Schnittstelle für einen bestimmten Durchlauf, eine Aktualisierung, ein Rendering oder eine Routingoperation. Wenn sich die Schnittstelle ändert, können neue Frames oder aktualisierte Frame-Zustände erzeugt werden. Dadurch kann der Stack Live-Betrieb beschreiben, ohne temporären Präsentationszustand mit gespeichertem Inhalt oder interpretierter Struktur zu verwechseln.

### Beziehung zwischen Graphs und Frames

Graphs und Frames arbeiten zusammen, weil eine Schnittstelle sowohl Beziehung als auch Kontext braucht. Der Graph erklärt, wie Schnittstellenobjekte verbunden sind. Der Frame erklärt, was die unteren Schichten zu einem bestimmten Zeitpunkt von diesen verbundenen Objekten erhalten sollen.

Diese Unterscheidung ist wichtig, weil Organisation und Vorbereitung nicht dieselbe Aufgabe sind. Ein Graph kann die Beziehungen enthalten, die nötig sind, um ein Control zu finden, eine Layout-Hierarchie zu verstehen oder zu bestimmen, welche Component zu welcher Region der Schnittstelle gehört. Ein Frame kann das aktuelle Ergebnis dieser Organisation nehmen und für Rendering oder Interaktionsrouting vorbereiten. Der Graph liefert die Karte; der Frame liefert den aktuellen Durchlauf durch diese Karte.

Zusammen verhindern sie, dass Layer 4 entweder zu einer passiven Sammlung von Components oder zu einer renderer-spezifischen Befehlsliste wird. Er bleibt die organisatorische und kontextuelle Schicht des Stacks: nah genug an Layer 5, um Schnittstellenobjekte zu verstehen, aber nah genug an Layer 3, um sie für niedrigere Transformation vorzubereiten.

### Vorbereitung für Rendering

Im Top-down-Fluss empfängt Graphs & Frames Components, Controls und Layouts aus Layer 5 und bereitet sie für den Renderer vor. Das bedeutet nicht, dass Layer 4 Rendering ausführt. Rendering gehört zu Layer 3. Layer 4 bestimmt, was nach unten gesendet werden soll, in welcher Beziehung, unter welchen Grenzen und in welchem aktuellen Zustand.

Diese Vorbereitung ist notwendig, weil ein Renderer nicht dafür verantwortlich sein sollte, die vollständige Bedeutung jeder Component, jedes Controls oder jedes Layouts zu verstehen. Der Renderer braucht eine vorbereitete Form, die er in wahrnehmbare Ausgabe transformieren kann. Layer 4 bewahrt die Organisation der Schnittstelle, während er das aktive Objektmodell auf etwas reduziert, womit der Renderer arbeiten kann.

Dadurch erlaubt Layer 4 Renderern, spezialisiert zu bleiben. Ein Renderer kann sich auf die Transformation in eine domain-spezifische Ausgabe konzentrieren, ohne zugleich zum obersten Manager von Component-Beziehungen, Layout-Hierarchie, Interaktionszielen und aktivem Schnittstellenzustand zu werden.

### Interaktionen routen

Im Bottom-up-Fluss hilft Graphs & Frames, Interaktionen zurück zu den passenden Controls zu routen. Untere Schichten können erkennen, dass eine Interaktion stattgefunden hat, und Details wie Position, Timing, Gerätequelle, Fokuskontext oder anderen relevanten Eingabezustand bereitstellen. Layer 4 nutzt den Graph- und Frame-Kontext, um zu bestimmen, wohin diese Interaktion gehört.

Diese Routingrolle ist einer der klarsten Gründe, warum Layer 4 existieren muss. Ein Control kann wissen, wie es eine Interaktion verarbeitet, sobald es sie erhält, aber irgendetwas muss bestimmen, welches Control sie erhalten soll. Der Graph liefert die Beziehungsstruktur, während der Frame den aktuellen Betriebskontext liefert. Zusammen erlauben sie dem Stack, Absicht durch die Schnittstelle zu routen, statt Eingabe nur richtungslos nach oben weiterzureichen.

Das bedeutet auch, dass Layer 4 sowohl an Ausgabevorbereitung als auch an Eingabeauflösung teilnimmt. Er bereitet organisierten Schnittstellenzustand in einer Richtung für Rendering vor und hilft in der anderen Richtung, geroutete Interaktion aufzulösen. Dieselbe Schicht, die weiß, wie die Schnittstelle aktuell angeordnet ist, ist auch am besten positioniert, um zu bestimmen, wie eine Interaktion durch diese Anordnung zurückreisen soll.

### Beziehung zu Components, Controls, & Layouts

Layer 4 hängt von Layer 5 für die aktiven Schnittstellenobjekte ab, die er organisiert. Components, Controls und Layouts stellen die nutzbaren Teile der Schnittstelle bereit, aber Layer 4 bestimmt, wie diese Teile ein größeres Ganzes bilden. Dadurch werden einzelne Components nicht für globales Schnittstellenmanagement verantwortlich.

Die Trennung schützt auch Layouts davor, zu breit zu werden. Ein Layout kann eine Gruppe von Components anordnen, aber es muss nicht jede Beziehung in der Schnittstelle verwalten. Es muss nicht als vollständiges Routingsystem, Lebenszykluskoordinator oder Renderinggrenze handeln. Layer 4 stellt diese höherstufige Organisation bereit, damit Layouts auf Anordnung fokussiert bleiben können.

### Beziehung zum Renderer

Layer 4 schützt auch den Renderer vor Verantwortlichkeiten, die nicht zum Rendering gehören. Ohne Graphs & Frames müsste der Renderer Component-Bäume, Layout-Beziehungen, Control-Routing, Grenzauflösung und aktiven Schnittstellenkontext verstehen, bevor er Ausgabe erzeugen könnte. Dadurch wäre Rendering für zu viel vom Schnittstellenmodell verantwortlich.

Indem Graphs & Frames zwischen Layer 5 und Layer 3 platziert wird, schafft der Stack eine klare Übergabe. Layer 5 stellt nutzbare Schnittstellenobjekte bereit. Layer 4 organisiert und bereitet diese Objekte vor. Layer 3 transformiert die vorbereitete Repräsentation in wahrnehmbare Ausgabe. Jede Schicht bleibt auf einen eigenen Teil des Prozesses fokussiert.

### Warum die Schicht wichtig ist

Graphs & Frames verhindert, dass der Stack eine Schnittstelle als lose Sammlung von Components oder als direktes Renderingproblem behandelt. Eine nutzbare Schnittstelle braucht Organisation, bevor sie gerendert werden kann, und Routing, bevor sie kohärent auf Interaktion reagieren kann. Layer 4 stellt die dafür nötige Struktur bereit.

Durch die Trennung von Layer 4 von Components, Controls, & Layouts und vom Renderer bewahrt das Modell eine klare Verantwortungsfolge. Components, Controls und Layouts definieren die aktiven Schnittstellenobjekte. Graphs und Frames organisieren diese Objekte in einen aktuellen Betriebskontext. Der Renderer transformiert diesen vorbereiteten Kontext dann in wahrnehmbare Ausgabe. Diese Unterscheidung erlaubt CatalystUI, komplexe Schnittstellen zu beschreiben, ohne Components zu zwingen, das ganze System zu verwalten, oder Renderers zu zwingen, das gesamte Schnittstellenmodell zu verstehen.
