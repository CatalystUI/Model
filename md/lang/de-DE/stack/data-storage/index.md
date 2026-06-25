# 5.1 The Stack :: Data Storage

## Ausführliche Besprechung

### Eine implizite Grenze

**Data Storage** ist die implizite obere Grenze des Stacks. Es beschreibt den Zustand, in dem Inhalt, Zustand oder eine Ressource verfügbar bleibt, bevor die expliziten Schichten mit ihr arbeiten, und in dem das Ergebnis einer Interaktion später bewahrt werden kann. Das Modell braucht diese Grenze, weil eine Schnittstelle ihr gesamtes Thema nicht aus dem Nichts erzeugt. Etwas muss verfügbar sein, um gelesen, abgerufen, empfangen oder referenziert zu werden, bevor es interpretiert, transformiert, gerendert oder bearbeitet werden kann.

Data Storage ist implizit, weil der Stack die internen Mechanismen der Speicherung selbst nicht modelliert. Das Modell kann von einer gespeicherten Ressource abhängen, muss aber nicht jedes Detail beschreiben, wie diese Ressource behalten wird. Diese Fragen gehören zum umgebenden Informationssystem. Der Stack beginnt, wenn irgendeine Form von Inhalt Teil des aktiven Schnittstellenflusses wird.

### Gespeicherte Verfügbarkeit und aktive Repräsentation

Die Unterscheidung zwischen Data Storage und Layer 7: **Digital Data** ist die Unterscheidung zwischen **gespeicherter Verfügbarkeit** und **aktiver Repräsentation**. Data Storage beschreibt den Ort oder Zustand, in dem etwas fortbestehen kann. Digital Data beschreibt die erste explizite Form dieser Sache, sobald sie als computerlesbare Repräsentation in den modellierten Prozess eintritt.

Ein Dokument kann zum Beispiel in einem Dateisystem existieren, ein Datensatz in einer Datenbank oder eine Antwort hinter einer API warten. Solange sie nur für den Zugriff verfügbar ist, gehört sie zu Data Storage. Wenn die Schnittstelle dieses Dokument liest, diesen Datensatz empfängt, diese Antwort öffnet oder die Ressource auf andere Weise in den aktiven Fluss bringt, wird sie zu Layer 7. Die wichtige Veränderung besteht nicht darin, dass der Inhalt plötzlich bedeutungsvoll geworden ist. Die wichtige Veränderung besteht darin, dass er nun innerhalb des Stacks repräsentiert ist.

### Persistenz und Transformation

Data Storage befasst sich mit Persistenz und Verfügbarkeit. Der explizite Stack befasst sich mit Transformation. Sobald eine gespeicherte Ressource zu Digital Data wird, kann das Modell beschreiben, was mit ihr geschieht: wie sie durch Structure & Semantics interpretiert, zu Components, Controls, & Layouts geformt, durch Graphs & Frames organisiert, von einem Renderer vorbereitet, durch ein Window geliefert und vom System zum Human Interface getragen wird.

Diese Trennung ist wichtig, weil Speicherung und Transformation unterschiedliche Fragen beantworten. Data Storage fragt, ob etwas über die Zeit verfügbar bleiben kann. Digital Data fragt, mit welcher aktiven binären, textuellen, gestreamten oder empfangenen Repräsentation die Schnittstelle gerade arbeitet. Das erste erklärt Aufbewahrung. Das zweite beginnt den modellierten Fluss.

### Die Quell- und Rückkehrgrenze

Im Top-down-Fluss dient Data Storage als Quellgrenze. Eine gespeicherte Ressource wird ausgewählt oder abgerufen und tritt dann als Digital Data in den Stack ein. Von diesem Punkt an kann das Modell verfolgen, wie die Ressource verstanden, angeordnet, transformiert und an den Benutzer geliefert wird. Data Storage selbst rendert, parst, layoutet oder interpretiert die Ressource nicht. Es liefert nur den Zustand, aus dem die aktive Repräsentation beginnen kann.

Im Bottom-up-Fluss dient Data Storage als Rückkehrgrenze. Eine Benutzerinteraktion kann etwas im Schnittstellenfluss anfordern, erstellen, aktualisieren, löschen oder anderweitig beeinflussen. Eine daraus entstehende Änderung kann den Stack hinaufwandern, bis sie wieder zu Digital Data wird. Wenn dieses Ergebnis über den unmittelbaren Prozess hinaus verfügbar bleiben muss, kehrt es als bewahrter Zustand zu Data Storage zurück. Der Stack muss nicht jede Schreibstrategie, Datenbanktransaktion, Cache-Aktualisierung oder Netzwerksynchronisierung modellieren, um zu erkennen, dass das Ergebnis zurück in die Persistenz gewechselt ist.

### Beispiele im Kontext

Deshalb kann Data Storage durch viele Technologien erscheinen, ohne durch eine von ihnen definiert zu sein. Ein Dateisystem, eine MySQL-Datenbank, eine MongoDB-Collection, ein API-gestützter Dienst, ein Cloud-Objektspeicher, ein Speicherbereich auf einem Gerät oder ein Streaming-Dienst können alle als Data Storage dienen, wenn sie erhaltene Verfügbarkeit außerhalb des aktiven Stacks bereitstellen. Sobald eine bestimmte Datei, ein Datensatz, eine Antwort, ein Buffer oder ein Stream in den Schnittstellenfluss gebracht wird, behandelt das Modell diese aktive Repräsentation als Digital Data.

### Warum die Trennung wichtig ist

Data Storage von Layer 7 zu trennen hält den Stack sauber. Ohne diese Unterscheidung würde das Modell den Ort, an dem etwas aufbewahrt wird, mit der Form vermischen, die es annimmt, sobald die Schnittstelle damit arbeitet. Dadurch wäre Digital Data sowohl für Persistenz als auch für aktive Repräsentation verantwortlich, was den Zweck der expliziten Schichten schwächen würde.

Indem Data Storage implizit bleibt, bewahrt das Modell eine klare Grenze: Speicherung umgibt den Schnittstellenfluss, während Digital Data ihn beginnt. Dadurch kann der Stack die Transformation einer bestimmten aktiven Repräsentation beschreiben, ohne sich in jedem möglichen Speichermechanismus dahinter zu verfangen. Data Storage erklärt, woher erhaltener Inhalt kommen kann und wohin bewahrte Ergebnisse zurückkehren können; Layer 7 beginnt den expliziten Prozess, diesen Inhalt in etwas zu verwandeln, das die Schnittstelle verstehen, transformieren und schließlich präsentieren kann.
