<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 5.7 The Stack :: Windows

## Ausführliche Besprechung

### Die begrenzte Lieferschicht

**Windows** sind die Schicht, in der gerenderte Ausgabe einen begrenzten Lieferkontext erhält. Layer 3 transformiert vorbereiteten Schnittstellenzustand in ausgabebereite Form, aber diese Ausgabe braucht weiterhin einen definierten Ort, Kanal oder eine Sicht, durch die sie vom System geliefert werden kann. Layer 2 stellt diese Grenze bereit.

Ein Window sollte als logischer Lieferkontext verstanden werden und nicht bloß als visuelle Box auf einem Bildschirm. In einer grafischen Umgebung erscheint ein Window häufig als sichtbarer Bereich, der von einem Betriebssystem verwaltet wird. Im Modell ist der Begriff jedoch breiter: Ein Window ist der systemseitige Kontext, durch den Ausgabe bereitgestellt und Interaktion empfangen werden kann. Es definiert, wohin das gerenderte Ergebnis innerhalb des umgebenden Systems gehört.

### Eine Sicht in das System

Das Window wirkt als Sicht in das System. Es erzeugt das System nicht und ersetzt den Renderer nicht. Stattdessen stellt es den begrenzten Kontext bereit, in dem die Ausgabe des Renderers mit systemseitiger Lieferung verbunden werden kann. Diese Grenze kann Position, Größe, Fokus, Sichtbarkeit, Gerätekontext, Ausgabekanal oder eine andere Form systemdefinierten Umfangs umfassen.

Das ist wichtig, weil gerenderte Ausgabe für den Benutzer nicht isoliert existiert. Sie muss irgendwo geliefert werden. Ein Renderer kann visuelle Kommandos, Audiosamples, haptische Anweisungen oder eine andere domain-spezifische Ausgabe erzeugen, aber diese Ergebnisse müssen weiterhin mit einem vom System erkannten Kontext verbunden werden. Das Window stellt diese Verbindung bereit.

In visuellen Schnittstellen ist das leicht zu erkennen, weil das Window einem rechteckigen Bereich auf einem Display entsprechen kann. In anderen Domains kann dieselbe konzeptuelle Rolle von einer Kommandozeilensitzung, einem Audioausgabekontext, einem Gerätekanal, einem virtuellen Viewport oder einer anderen begrenzten systemseitigen Schnittstelle erfüllt werden. Das bestimmende Merkmal ist nicht das visuelle Erscheinungsbild. Das bestimmende Merkmal ist, dass das Window die Liefergrenze zwischen gerenderter Ausgabe und System bereitstellt.

### Beziehung zu Renderers

Windows empfangen Ausgabe von Renderers, führen aber selbst kein Rendering aus. Rendering ist die Transformation vorbereiteten Schnittstellenzustands in ausgabebereite Form. Windowing ist der Akt, dieser Ausgabe einen begrenzten Systemkontext zu geben, durch den sie geliefert werden kann.

Diese Unterscheidung verhindert, dass Layer 2 die Verantwortlichkeiten von Layer 3 aufnimmt. Ein Renderer sollte entscheiden, wie organisierter Schnittstellenzustand ausgabebereit wird. Ein Window sollte den systemseitigen Ort oder Kanal bereitstellen, an den diese Ausgabe gesendet werden kann. Der Renderer transformiert; das Window enthält, empfängt und leitet weiter.

Das erlaubt auch unterschiedlichen Renderern, unterschiedliche Window-Typen anzusteuern. Ein visueller Renderer kann ein grafisches Window ansteuern, während ein auditiver Renderer einen Audioausgabekontext ansteuern kann. Die konkrete Implementierung kann je nach System und Domain variieren, aber die geschichtete Verantwortung bleibt konsistent.

### Beziehung zum System

Windows hängen von **Layer 1: Systems** ab, weil sie gewöhnlich von der umgebenden Plattform erzeugt, verwaltet, eingeschränkt oder erkannt werden. Ein System kann bestimmen, wie Windows erzeugt werden, wie sie Eingabe empfangen, wie sie Ausgabekanäle offenlegen, auf welche Ressourcen sie zugreifen können und wie sie mit Hardware oder niedrigeren Diensten interagieren.

Das macht das Window nicht identisch mit dem System. Das System ist die umfassendere Betriebsumgebung, die Hardwarezugriff, Gerätedienste, Scheduling, Berechtigungen, Treiber und Plattformverhalten bereitstellt. Das Window ist ein begrenzter logischer Kontext innerhalb dieser Umgebung. Es ist der schnittstellenseitige Kontext, der gerenderte Ausgabe und Interaktion zwischen Stack und System passieren lässt.

Durch die Trennung von Windows und System vermeidet das Modell, jedes Plattformdetail als Teil der Schnittstellengrenze zu behandeln. Das Window repräsentiert den spezifischen systemseitigen Kontext, den die Schnittstelle verwendet. Das System repräsentiert die größere Umgebung, die diesen Kontext möglich macht.

### Ausgabe liefern

Im Top-down-Fluss empfängt das Window ausgabebereite Repräsentation vom Renderer und gibt sie Richtung System weiter. Dies ist die Phase, in der gerenderte Ausgabe nicht mehr nur von der Schnittstelle vorbereitet ist; sie wird einem Lieferkontext zugewiesen, den das System verwenden kann.

Das Window kann je nach Domain und Implementierung Grenzen, Fokus, Buffering, Sichtbarkeit, Kanalzustand oder andere Lieferbedingungen verwalten. Diese Details beeinflussen, wie Ausgabe in das System wandert, ändern aber nicht die Hauptrolle der Schicht. Das Window stellt die Grenze bereit, durch die gerenderte Ausgabe zu Systemausgabe werden kann.

Sobald die Ausgabe durch das Window gegangen ist, kann das System sie zum relevanten Gerät, Dienst oder physischen Prozess tragen, der sie für den Benutzer wahrnehmbar macht. Das Window liegt daher nahe an Wahrnehmbarkeit, ist aber nicht Wahrnehmung selbst. Es bleibt Teil des computerseitigen Flusses.

### Eintritt von Interaktion

Im Bottom-up-Fluss ist das Window die erste explizite Stack-Schicht, in der vom System bereitgestellte Interaktion für die modellierte Schnittstelle verfügbar wird. Das System kann einen Tastendruck, eine Zeigerbewegung, ein Berührungsereignis, ein Gerätesignal, ein Audiokommando oder eine andere Eingabeform erkennen. Das Window empfängt diese Interaktion innerhalb seines eigenen begrenzten Kontexts und leitet sie zur weiteren Weiterleitung und Verarbeitung nach oben.

Dadurch wird das Window zentral für Interaktion, weil es Kontext für die Handlung bereitstellt. Eine Interaktion bedeutet nicht nur, dass etwas passiert ist, sondern dass es innerhalb einer bestimmten systemseitigen Grenze passiert ist. Fokus, Position, Timing, Gerätequelle, Kanal oder aktiver Kontext können bestimmen, wie der Rest des Stacks die Interaktion verstehen und routen soll.

Das Window entscheidet gewöhnlich nicht über die endgültige Bedeutung der Interaktion. Diese Verantwortung gehört weiter oben im Stack, besonders sobald die Interaktion das passende Control erreicht. Die Rolle des Windows besteht darin, die Interaktion vom System zu empfangen, sie mit der richtigen Grenze zu verbinden und sie in einer Form nach oben weiterzugeben, die der Rest des Stacks weiterverarbeiten kann.

### Domain-Unabhängigkeit

Windows sind domain-unabhängig auf dieselbe Weise, wie der Rest des Stacks domain-unabhängig ist. Das Wort „Window“ wird oft mit Grafik verbunden, aber in CatalystUI bezeichnet es jeden begrenzten systemseitigen Kontext für Ausgabe und Interaktion. Die Domain bestimmt, welche Art von Ausgabe und Eingabe das Window trägt; die Stack-Position bestimmt, welche Rolle das Window erfüllt.

Dadurch kann dieselbe Schicht grafische Windows, Textsitzungen, Audiokanäle, taktile Ausgabekontexte oder andere Formen der Schnittstellenlieferung beschreiben, ohne das Modell zu ändern. Jede Implementierung kann unterschiedliche Systemanforderungen haben, aber jede erfüllt dieselbe konzeptuelle Verantwortung: Sie stellt die Grenze bereit, durch die gerenderte Ausgabe und Systeminteraktion passieren.

### Warum die Schicht wichtig ist

Windows verhindern, dass der Stack gerenderte Ausgabe so behandelt, als würde sie den Benutzer automatisch erreichen. Ein Renderer kann Schnittstellenzustand in ausgabebereite Form transformieren, aber diese Ausgabe braucht weiterhin einen systemseitigen Kontext. Layer 2 liefert diesen Kontext.

Durch die Trennung von Windows sowohl von Renderers als auch vom System bewahrt das Modell einen klaren Lieferpfad. Renderers transformieren vorbereiteten Schnittstellenzustand in ausgabebereite Repräsentation. Windows stellen den begrenzten Kontext bereit, durch den diese Repräsentation in das System eintritt. Das System führt dann die niedrigere Arbeit aus, die nötig ist, um Ausgabe zu liefern und Eingabe zu empfangen. Diese Unterscheidung erlaubt CatalystUI, Schnittstellenlieferung über Plattformen und Domains hinweg zu beschreiben, ohne Windows auf visuelle Rechtecke zu reduzieren oder Renderers zu zwingen, Plattformverhalten zu verwalten.
