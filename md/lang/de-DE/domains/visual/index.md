# 4.2 Domains :: Visual

## Ausführliche Besprechung

Während die **symbolische** Domain Daten beschreibt, bevor sie einem bestimmten Sinn zugeordnet wurden, beschreibt die **visuelle** Domain Daten, sobald sie für das Sehen geformt wurden. Visuelle Daten sind Informationen, die gesehen werden sollen: ein Bild, gerenderter Text oder ein sichtbares Steuerelement. Die wichtige Unterscheidung ist nicht, ob die Daten irgendwann auf einem Bildschirm erscheinen „könnten“, sondern ob ihre gegenwärtige Rolle in der Interaktion darin besteht, über das Sehen zu kommunizieren.

Das bedeutet, dass visuelle Daten nicht mit der gespeicherten Form verwechselt werden sollten, die ihnen zugrunde liegt. Eine Datei mit Bilddaten ist weiterhin symbolisch, solange sie nur als gespeicherte Information existiert. Ein Textabsatz ist weiterhin symbolisch, solange er nur als Zeichen, Markup oder eine andere abstrakte Darstellung existiert. Er wird visuell, wenn das System ihn in einer Form präsentiert, die der Benutzer sehen und interpretieren kann. Die Veränderung besteht nicht darin, dass die Daten wichtiger werden; die Veränderung besteht darin, dass ihre Kommunikationsweise von Repräsentation zu Wahrnehmung gewechselt hat.

Visuelle Daten sind besonders verbreitet, weil das Sehen viele Beziehungen gleichzeitig kommunizieren kann. Größe, Farbe, Abstand, Richtung, Gruppierung und Bewegung können dem Benutzer dabei helfen zu verstehen, was etwas ist, wohin es gehört und ob damit interagiert werden kann. Deshalb fühlen sich visuelle Schnittstellen oft unmittelbar an. Ein Benutzer kann einen Blick auf ein Fenster, eine Webseite oder eine Spielszene werfen und Bedeutung erfassen, bevor jedes Wort gelesen wurde. Das System zeigt nicht nur Daten; es ordnet Daten zu einer sichtbaren Erfahrung an.

### Visuelle Daten verstehen

Eine hilfreiche Möglichkeit, visuelle Daten zu verstehen, besteht darin, **Platzierung**, **Erscheinungsbild** und **Zustand** zu betrachten. Dies sind keine formalen Sub-Domains oder erforderlichen Kategorien im CatalystUI-Modell, aber sie bieten eine praktische Möglichkeit zu erkennen, wie visuelle Information Bedeutung kommuniziert.

**Platzierung** beschreibt, wo visuelle Daten erscheinen und wie sie sich auf die Informationen um sie herum beziehen. Eine Überschrift über einem Absatz kommuniziert Zugehörigkeit. Ein Button in der Nähe eines Formulars kommuniziert Verbindung. Ein Menü über anderen Inhalten kommuniziert vorübergehende Priorität. Platzierung ist wichtig, weil der Benutzer sichtbare Objekte nicht isoliert wahrnimmt; er nimmt Beziehungen zwischen sichtbaren Objekten wahr.

**Erscheinungsbild** beschreibt, wie visuelle Daten sich dem Benutzer präsentieren. Form, Farbe, Typografie, Kontrast und Bildsprache beeinflussen, was der Benutzer zu sehen glaubt. Ein Textstück kann je nach Gestaltung wie ein Titel, eine Warnung oder ein Link wirken. Ein Rechteck kann je nach Rahmen, Abstand und umgebendem Kontext wie ein Button, ein Panel oder Dekoration wirken. Das Erscheinungsbild gibt visuellen Daten ihre erkennbare Form.

**Zustand** beschreibt die aktuelle Bedingung, die visuell kommuniziert wird. Ein Steuerelement kann aktiv, deaktiviert, ausgewählt, fokussiert, ladend oder verborgen erscheinen. Diese Zustände sind wichtig, weil die nächste Handlung des Benutzers oft davon abhängt, wozu die Schnittstelle bereit zu sein scheint. Wenn der visuelle Zustand nicht mit dem tatsächlichen Zustand des Systems übereinstimmt, wird die Schnittstelle verwirrend, selbst wenn die zugrunde liegende Logik technisch korrekt ist.

### Visuelle Bedeutung

Visuelle Ausgabe drückt Bedeutung aus, sollte aber nicht mit der Bedeutung selbst verwechselt werden. Ein roter Rahmen kann kommunizieren, dass etwas falsch ist, aber der Rahmen ist nicht der Fehler. Ein Icon kann eine Handlung darstellen, aber das Icon ist nicht die Handlung. Ein Layout kann Hierarchie zeigen, aber das Layout ist nicht die zugrunde liegende Struktur. Visuelle Daten sind der sinnliche Ausdruck von Bedeutung, nicht die vollständige Quelle der Bedeutung.

Diese Unterscheidung hilft, einen häufigen Designfehler zu vermeiden: zu viel Verantwortung darauf zu legen, wie etwas aussieht, ohne zu bewahren, was es bedeutet. Wenn eine Schnittstelle nur auf Farbe angewiesen ist, um einen Fehler zu kommunizieren, ist die Bedeutung in einem einzigen visuellen Signal eingeschlossen. Wenn ein Icon keine unterstützende Beschriftung, Beschreibung oder zugängliche Bedeutung hat, kann das System sauber aussehen und gleichzeitig schwerer verständlich werden. Visuelle Klarheit ist am stärksten, wenn die sichtbare Form die zugrunde liegende Absicht zuverlässig ausdrückt.

Visuelle Daten tragen außerdem eine besondere Art von Risiko, weil Benutzer dazu neigen, dem zu vertrauen, was sie sehen. Wenn etwas anklickbar aussieht, erwartet der Benutzer, dass es reagiert. Wenn etwas deaktiviert aussieht, erwartet der Benutzer, dass es nicht reagiert. Wenn etwas ausgewählt aussieht, erwartet der Benutzer, dass das System es als ausgewählt behandelt. Wenn die sichtbare Darstellung und das tatsächliche Verhalten voneinander abweichen, erlebt der Benutzer die Schnittstelle als defekt, selbst wenn das Programm genau so funktioniert, wie es geschrieben wurde.

### Visuelle Daten und Barrierefreiheit

Die visuelle Domain macht Barrierefreiheit leichter nachvollziehbar, weil sie identifiziert, wann Informationen allein über das Sehen kommuniziert werden. Wenn ein Fehler nur durch Farbe, ein Diagramm nur durch ein Bild oder Fortschritt nur durch Animation gezeigt wird, ist die Bedeutung möglicherweise nicht für jeden Benutzer verfügbar. Das Problem ist nicht, dass visuelle Kommunikation schlecht ist; das Problem ist, dass visuelle Kommunikation möglicherweise in eine andere Form übersetzt werden muss.

Hier werden Domains als Diagnosewerkzeug nützlich. Sie helfen uns zu fragen, wo die Bedeutung derzeit lebt. Ist sie nur visuell? Kann sie auch symbolisch dargestellt werden? Sollte sie über Klang, Berührung oder eine andere Ausgabeform verfügbar sein? Durch die Beantwortung dieser Fragen kann der Entwickler dieselbe Bedeutung über verschiedene Arten der Wahrnehmung hinweg bewahren, statt Barrierefreiheit als nachträglichen Gedanken zu behandeln.

### Visuelle Daten in umfassenderen Erfahrungen

Visuelle Daten können auch an Erfahrungen beteiligt sein, die nicht rein visuell sind. Ein Videoplayer kann bewegte Bilder mit Klang verbinden. Ein Spiel kann Grafik, Musik und Controller-Feedback kombinieren. Ein Betriebssystem kann Fenster, Warnungen und Eingabegeräte zu einem größeren Austausch verbinden. In solchen Situationen identifiziert die visuelle Domain den Teil der Erfahrung, der für das Sehen gedacht ist, während andere Domains die zusätzlichen beteiligten Wahrnehmungsformen beschreiben.

Das hält das Modell präzise. Eine visuelle Schnittstelle ist nicht automatisch die gesamte Benutzerschnittstelle, und eine multisensorische Erfahrung löscht den visuellen Anteil darin nicht aus. Jede Domain hilft zu erkennen, wie Bedeutung getragen wird. Die visuelle Domain beantwortet eine bestimmte Frage: Welche Informationen werden so geformt, dass der Benutzer sie sehen kann?

Kurz gesagt beschreibt die visuelle Domain die Bewegung von symbolischer Repräsentation zu einer Ausgabe, die durch Sehen lesbar ist. Sie gibt uns eine Möglichkeit, über sichtbare Informationen zu sprechen, ohne alle Schnittstellen auf Grafik zu reduzieren. Wenn visuelle Daten gut behandelt werden, kann der Benutzer erkennen, was das System präsentiert, verstehen, womit interagiert werden kann, und mit Vertrauen reagieren.
