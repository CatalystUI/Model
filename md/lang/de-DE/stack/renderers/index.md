<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 5.6 The Stack :: Renderers

## Ausführliche Besprechung

### Die Transformationsschicht

**Renderers** sind die Schicht, in der organisierter Schnittstellenzustand in eine ausgabebereite Form transformiert wird. Layer 4 stellt Graphs und Frames bereit: einen vorbereiteten Betriebskontext, der beschreibt, was nach unten gesendet werden soll, wie es organisiert ist und welcher aktuelle Zustand repräsentiert werden soll. Layer 3 empfängt diesen vorbereiteten Kontext und wandelt ihn in eine Form um, die für die Lieferung durch ein Window und schließlich durch das System geeignet ist.

Diese Schicht heißt Rendering, weil sie die aktive Transformation von Schnittstellenrepräsentation in wahrnehmbare Ausgabe ausführt. Ein Renderer speichert die Schnittstelle nicht einfach, interpretiert ihren ursprünglichen Inhalt nicht und verwaltet nicht ihre Component-Beziehungen. Seine Verantwortung besteht darin, das vorbereitete Ergebnis der oberen Schichten zu nehmen und die domain-spezifische Ausgabe zu erzeugen, die von den unteren Schichten des Stacks benötigt wird.

### Rendering als Umwandlung

In CatalystUI ist Rendering nicht auf Grafik beschränkt. Ein visueller Renderer kann vorbereiteten Schnittstellenzustand in Pixel, Zeichenbefehle, Texturen, Glyphen oder andere visuelle Ausgabe umwandeln. Ein auditiver Renderer kann vorbereiteten Zustand in Wellenformen, Samples, Tracks oder gemischte Audioausgabe umwandeln. Ein taktiler Renderer kann vorbereiteten Zustand in haptische Muster umwandeln. Die spezifische Domain kann sich ändern, aber die Rolle der Schicht bleibt dieselbe: Rendering wandelt organisierte Schnittstellenrepräsentation in Ausgabe um, die das System liefern kann.

Diese Unterscheidung hält das Modell breiter als traditionelles Denken in grafischen Benutzeroberflächen. Ein Renderer wird nicht dadurch definiert, ob er auf einen Bildschirm zeichnet. Er wird dadurch definiert, ob er vorbereiteten Schnittstellenzustand in eine niedrigere Ausgabeform transformiert. Das Ergebnis kann schließlich gesehen, gehört, gefühlt oder anderweitig wahrgenommen werden, aber auf Layer 3 liegt der Fokus auf der Transformation selbst.

### Beziehung zu Graphs & Frames

Renderers hängen von **Graphs & Frames** ab, weil sie nicht dafür verantwortlich sein sollten, das gesamte Schnittstellenmodell zu verstehen. Layer 4 löst den aktuellen Betriebskontext auf, organisiert Components, bereitet Grenzen vor, bestimmt relevanten Zustand und liefert einen Frame, der sich für Rendering eignet. Layer 3 transformiert diesen vorbereiteten Frame dann in ausgabebereite Form.

Diese Trennung ist wichtig, weil Organisation und Rendering unterschiedliche Verantwortlichkeiten sind. Ein Graph kann wissen, wie Components zueinander stehen, und ein Frame kann wissen, was der aktuelle Durchlauf enthalten soll. Ein Renderer sollte wissen, wie dieser vorbereitete Kontext in die passende Ausgaberepräsentation transformiert wird. Wenn diese Verantwortlichkeiten getrennt bleiben, kann der Renderer spezialisiert und effizient bleiben, ohne zum globalen Manager der Schnittstelle zu werden.

### Beziehung zu Windows

Renderers hängen auch von **Layer 2: Windows** ab, weil gerenderte Ausgabe ein Lieferziel braucht. Ein Renderer kann Kommandos, Buffer, Streams oder andere ausgabebereite Repräsentationen erzeugen, aber diese Ergebnisse brauchen weiterhin einen Ort, an den sie gehen können. Das Window stellt die begrenzte Sicht, den Kanal oder die Lieferfläche bereit, durch die gerenderte Ausgabe zum System getragen werden kann.

Dadurch wird der Renderer zum aktiven Umwandlungspunkt zwischen dem oberen Schnittstellenmodell und dem unteren Liefermodell. Oberhalb davon befasst sich der Stack hauptsächlich mit Bedeutung, Nutzbarkeit, Organisation und aktivem Zustand. Unterhalb davon befasst sich der Stack damit, Ausgabe durch ein Window und in das System weiterzugeben. Layer 3 steht zwischen diesen Anliegen und wandelt das eine in das andere um.

### Domain-spezifische Verantwortung

Renderers sind von Natur aus domain-spezifisch. Ein Renderer muss die Art von Ausgabe verstehen, die er erzeugt, weil unterschiedliche Domains unterschiedliche Transformationsformen erfordern. Visuelle Ausgabe, auditive Ausgabe, taktile Ausgabe und andere sensorische Formen teilen nicht dieselben Lieferanforderungen, selbst wenn sie aus demselben konzeptuellen Schnittstellenzustand erzeugt werden.

Das bedeutet nicht, dass die oberen Schichten für jede Domain neu geschrieben werden müssen. Eine Stärke des Stacks besteht darin, dass die oberen Schichten Inhalt, Interaktion, Organisation und Zustand konsistent beschreiben können, während Renderers sich an dem Punkt spezialisieren, an dem domain-spezifische Umwandlung notwendig wird. Der Renderer ist der Ort, an dem diese Spezialisierung explizit wird.

Eine einzelne Schnittstelle kann auch mehr als einen Renderer einbeziehen, wenn mehrere Ausgabeformen getrennt behandelt werden. In diesen Fällen ist jeder Renderer für die Transformation verantwortlich, die seine eigene Domain erfordert, während der umgebende Stack den größeren Fluss der Interaktion bewahrt.

### Rendering und Wahrnehmbarkeit

Ein Renderer bereitet Ausgabe für Wahrnehmung vor, ist aber nicht dasselbe wie Wahrnehmung selbst. Der Benutzer nimmt den Renderer nicht direkt wahr. Der Renderer erzeugt eine Form, die durch ein Window und ein System weitergegeben werden kann, bis sie über ein Gerät, einen Kanal oder eine physische Ausgabe wahrnehmbar wird.

Diese Unterscheidung ist wichtig, weil Rendering weiterhin Teil des computerseitigen Transformationsprozesses ist. Ein visueller Renderer kann Pixeldaten erzeugen, aber der Benutzer nimmt Licht von einem Display wahr. Ein auditiver Renderer kann Audiosamples erzeugen, aber der Benutzer nimmt Klang über Lautsprecher oder Kopfhörer wahr. Layer 3 bereitet die Ausgabe vor; die unteren Schichten liefern sie.

### Rolle im Top-down-Fluss

Im Top-down-Fluss empfangen Renderers einen vorbereiteten Frame aus Layer 4 und wandeln ihn in ausgabebereite Form um. Das ist der Punkt, an dem das aktive Schnittstellenmodell beginnt, die abstrakte Organisation von Components zu verlassen und in den konkreten Lieferpfad des Systems einzutreten.

Der Renderer kann Component-Zustand in Zeichenoperationen, Audiobuffer, haptische Anweisungen oder eine andere domain-spezifische Repräsentation transformieren. Sobald diese Transformation stattgefunden hat, wird das Ergebnis an die Window-Schicht weitergegeben, die den begrenzten Kanal oder die Sicht bereitstellt, durch die das System die Ausgabe liefern kann.

### Rolle im Bottom-up-Fluss

Im Bottom-up-Fluss können Renderers auch an der Interpretation oder Transformation von Interaktionsdetails teilnehmen, bevor diese zu den oberen Schichten zurückkehren. Eine Interaktion kann vom System durch ein Window in einer Form eintreffen, die angepasst, übersetzt, mit einem gerenderten Bereich verbunden oder in eine Repräsentation umgewandelt werden muss, die Graph und Frame routen können.

Das macht den Renderer nicht zum endgültigen Handler der Interaktion. Diese Verantwortung gehört zum passenden Control in Layer 5. Weil der Renderer jedoch versteht, wie die Schnittstelle in Ausgabe transformiert wurde, kann er notwendigen Kontext liefern, um einen Teil dieser Transformation umzukehren oder abzubilden. Er kann zum Beispiel helfen, eine niedrigere Interaktion mit einer gerenderten Position, einem Ausgabebereich, einem Zeitpunkt oder einem domain-spezifischen Ziel zu verbinden, bevor Layer 4 sie nach oben routet.

### Warum die Schicht wichtig ist

Renderers verhindern, dass der Stack Ausgabe als direkte Folge organisierter Schnittstellenobjekte behandelt. Ein Frame kann beschreiben, was repräsentiert werden soll, aber dadurch wird er nicht automatisch wahrnehmbare Ausgabe. Etwas muss diesen vorbereiteten Kontext in eine Form transformieren, die die unteren Schichten liefern können. Layer 3 liefert diese Transformation.

Durch die Trennung von Renderers sowohl von Graphs & Frames als auch von Windows bewahrt das Modell eine klare Arbeitsteilung. Graphs & Frames organisiert den aktuellen Schnittstellenkontext. Renderers wandeln diesen Kontext in ausgabebereite Form um. Windows stellen den begrenzten Kanal bereit, durch den diese Ausgabe das System erreicht. Diese Unterscheidung erlaubt CatalystUI, Rendering über Domains hinweg zu beschreiben, ohne Rendering auf Grafik zu reduzieren, Windows zur Transformation zu zwingen oder obere Schnittstellenobjekte wissen zu lassen, wie sie später geliefert werden.
