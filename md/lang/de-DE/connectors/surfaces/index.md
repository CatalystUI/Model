<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 6.5 Connectors :: Surface

## Ausführliche Besprechung

### Von Rendering zu Delivery

Der **Surface** connector sitzt zwischen **Layer 3: Renderers** und **Layer 2: Windows**. Er ist dafür verantwortlich, gerenderten output vom renderer in das window zu tragen, wo dieser output in einen begrenzten Kontext gesetzt werden kann, den das system bereitstellt.

Layer 3 ist der Ort, an dem Information in eine output-ready form umgewandelt wird. Der renderer nimmt die vorbereiteten data aus graph und frame und erzeugt etwas, das schließlich wahrgenommen werden kann. Gerenderter output braucht jedoch weiterhin ein Ziel. Er braucht einen Ort, an den er gehen kann, etwas, womit er verbunden wird, und eine Grenze, durch die das system ihn liefern kann.

Dieses Ziel wird durch die Windows-Schicht repräsentiert.

Der Surface connector stellt den Übergangspunkt zwischen renderer und window bereit. Er erklärt, wie gerenderter output an den nutzbaren Bereich des windows angehängt wird und wie der renderer genug Information vom window erhält, um output korrekt weiter zu erzeugen. Ohne diesen connector könnte der renderer output erzeugen, aber der Stack hätte keine explizite Erklärung dafür, wie dieser output mit dem window verbunden wird, das ihn präsentiert.

Einfacher gesagt: Ein renderer erzeugt output. Ein window stellt den Ort bereit, an dem dieser output geliefert werden kann. Der Surface connector erlaubt beiden, zusammenzuarbeiten.

### Der gerenderte Bereich

Eine surface kann als der nutzbare Bereich eines windows verstanden werden, der gerenderten output empfängt. In einer traditionellen grafischen Anwendung ist das leicht vorstellbar: Ein renderer zeichnet in den inneren Bereich eines windows. Dasselbe Prinzip gilt jedoch breiter. Die surface ist nicht bloß „der Bildschirm“. Sie ist der connector, der gerendertem output einen Ort innerhalb der Grenzen des windows gibt.

Das ist wichtig, weil ein renderer das window normalerweise nicht besitzt. Der renderer kann wissen, wie output erzeugt wird, aber das window ist die Schicht, die den aktiven Blick in das system bereitstellt. Das window kann Größe, Position, Zustand, scale, focus oder andere systemverwaltete Bedingungen haben. Der Surface connector macht diese Bedingungen dem renderer in der Weise verfügbar, die für korrekte output delivery nötig ist.

Ein renderer muss vielleicht die aktuellen bounds des windows kennen. Er muss vielleicht wissen, wann sich diese bounds geändert haben. Er braucht vielleicht ein target, in das er zeichnen, schreiben, streamen oder das er anderweitig aktualisieren kann. Diese Details können je nach Implementierung variieren, aber die konzeptuelle Verantwortung bleibt gleich: Der Surface connector verbindet renderer output mit dem window context, der ihn enthalten wird.

Das verhindert, dass der renderer so tut, als besäße er die system boundary, und es verhindert, dass das window so tut, als wüsste es, wie rendering funktioniert.

### Mehr als ein fertiges Bild

Es kann verlockend sein, den Surface connector so zu verstehen, dass er einfach ein fertiges Ergebnis in ein window weitergibt. In manchen Fällen ist diese Beschreibung nah genug. Ein renderer bereitet output vor, die surface trägt ihn zum window, und der Benutzer nimmt das Ergebnis schließlich wahr.

Rendering ist jedoch oft eine fortlaufende Beziehung statt einer einzelnen delivery. Ein window kann seine Größe ändern. Sein aktiver Zustand kann sich ändern. Das system kann ein redraw anfordern. Der renderer muss vielleicht kontinuierlich aktualisieren, auf ein Signal warten oder seinen output mit dem aktuellen Zustand des windows synchronisieren. Der Surface connector stellt den Ort bereit, an dem diese Beziehung ausgedrückt werden kann.

Deshalb ist der Surface connector nicht bloß ein container für fertigen output. Er ist die Verbindung zwischen dem Akt des rendering und dem window, das das Ergebnis empfängt. Er erlaubt dem renderer, auf die Bedingungen des windows zu reagieren, ohne den renderer dafür verantwortlich zu machen, das window zu sein.

Der output gehört weiterhin dem renderer. Die Grenze gehört weiterhin dem window. Der Surface connector trägt die Beziehung zwischen beiden.

### Interaktionen zurück nach oben weitergeben

Weil der Stack reversibel ist, nimmt der Surface connector auch am Bottom-up-Fluss teil. Wenn eine Interaktion im system beginnt und in ein window eintritt, muss sie schließlich nach oben zu den Teilen des Stacks wandern, die sie verstehen und behandeln können.

Der Surface connector trägt diese Interaktion oft vom window in den renderer. In vielen Fällen muss er nicht viel mehr tun, als die Information zu bewahren und ihr zu erlauben, weiter nach oben zu wandern. Eine pointer movement, ein key press, eine focus change, ein resize event oder eine andere Interaktion kann durch das window eintreten und dann die surface überqueren, damit renderer und höhere Schichten bei Bedarf reagieren können.

Das bedeutet nicht, dass der Surface connector dafür verantwortlich ist zu entscheiden, welche component die Interaktion behandeln soll. Diese Verantwortung liegt höher im Stack, besonders sobald die Interaktion graph und frame erreicht. Der Surface connector gibt der Interaktion einfach einen Weg über die Grenze zwischen window und renderer.

Im Top-down-Fluss trägt der Surface connector gerenderten output in das window. Im Bottom-up-Fluss trägt er interaction information, die vom window ausgeht, zurück in Richtung renderer und der darüberliegenden Schichten.

### Das Window getrennt halten

Der Surface connector ist wichtig, weil er verhindert, dass renderer und window zu derselben Verantwortung zusammenfallen. Ohne diesen connector müsste ein renderer zu viel über das window wissen, oder das window müsste zu viel über den renderer wissen. Beide Richtungen schwächen die Trennung, die den Stack nützlich macht.

Ein window stellt die aktive system-facing boundary bereit. Es repräsentiert view, container oder point of delivery. Ein renderer erzeugt output, der durch diese Grenze geliefert werden kann. Der Surface connector sitzt dazwischen, damit jede Schicht auf ihren eigenen Zweck fokussiert bleiben kann.

Diese Trennung wird besonders nützlich, wenn ein renderer mit mehr als einer Art von window verwendet werden kann oder wenn ein window mehr als eine Art von renderer unterstützen kann. Der connector gibt dem Modell einen Ort, um die Beziehung zu beschreiben, ohne die beiden Schichten fest miteinander zu verdrahten. Ein renderer kann an eine passende surface angehängt werden. Ein window kann eine passende surface bereitstellen. Der Surface connector erklärt, wie diese Anbindung geschieht.

Das erlaubt renderer und window, zusammenzuarbeiten, ohne ununterscheidbar zu werden.

### Output bewahren

Ein Surface connector sollte den gerenderten output bewahren, während er in das window übergeht. Das heißt nicht, dass der output niemals transformiert, skaliert, geclippt, synchronisiert oder gemäß den Anforderungen des windows vorbereitet wird. Es heißt, dass der output dem treu bleiben sollte, was der renderer erzeugt hat, und auf eine Weise geliefert werden sollte, die zum aktiven window context passt.

Wenn das window seine Größe ändert, kann der Surface connector helfen, diese Änderung zu kommunizieren. Wenn das window inaktiv, verborgen, minimiert oder anderweitig nicht verfügbar wird, kann der connector dem renderer helfen, angemessen zu reagieren. Wenn der renderer ein vom window bereitgestelltes target benötigt, kann der connector dieses target halten oder verfügbar machen. Diese Verantwortungen sind nicht dasselbe wie rendering und nicht dasselbe wie window sein. Es sind die Verantwortungen der Verbindung zwischen beiden.

Das ist die Hauptform des Surface connectors: Er bewahrt den output des renderers, während er ihn an den delivery context anpasst, den das window bereitstellt.

### Warum der Connector wichtig ist

Der Surface connector verhindert, dass der Stack gerenderten output mit dem window verwechselt, das ihn enthält. Ohne diesen connector wäre ein renderer gezwungen, so zu handeln, als besäße er das window, oder ein window wäre gezwungen, so zu handeln, als verstünde es rendering direkt.

Durch die Definition des Surface connectors gibt das Modell diesem Übergang einen eigenen Ort.

Renderers bleibt dafür verantwortlich, vorbereitete Information in output-ready form zu verwandeln. Windows bleibt dafür verantwortlich, den begrenzten system-facing context bereitzustellen, durch den output und interaction passieren können. Der Surface connector übernimmt die Bewegung zwischen beiden.

Dies ist der Punkt im Stack, an dem gerenderte Information ein Ziel erhält. Hier hört output auf, bloß erzeugt zu sein, und wird an den Ort gebunden, an dem er geliefert werden kann. Von dort aus kann Windows den output weiter in Systems tragen, wo er schließlich zu etwas werden kann, das der Benutzer wahrnehmen und beantworten kann.
