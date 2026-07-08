<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 6.4 Connectors :: Bridge

## Ausführliche Besprechung

### Von Kontext zu Rendering

Der **Bridge** connector sitzt zwischen **Layer 4: Graphs & Frames** und **Layer 3: Renderers**. Er ist dafür verantwortlich, organisierte interface data aus graph und frame in den renderer zu tragen, wo diese data ihre Umwandlung in wahrnehmbaren output beginnen kann.

Layer 4 gibt dem System organisierten Kontext. Er weiß, welche components existieren, wie sie zueinander in Beziehung stehen, welche bounds sie einnehmen und wie die aktive Schnittstelle als Ganzes verstanden werden soll. Layer 3 ist für rendering verantwortlich. Er nimmt vorbereitete data und verwandelt sie in eine Form, die schließlich durch ein window und system geliefert werden kann.

Der Bridge connector existiert, weil diese beiden Schichten nicht von Natur aus dieselbe Sprache sprechen.

Ein graph organisiert Beziehungen. Ein frame definiert den aktiven Kontext und die Grenzen. Ein renderer erzeugt output. Der Bridge connector ist der Übergangspunkt zwischen diesen Anliegen. Er muss nicht aufwendig oder sichtbar sein. In den meisten Fällen macht er einfach die organisierte interface data für den renderer zugänglich und erlaubt interaction information, bei Bedarf wieder nach oben zu wandern. In diesem Sinn tut der Bridge connector genau das, was sein Name sagt. Er überbrückt die Lücke.

### Den Frame weitertragen

Im Top-down-Fluss empfängt der Bridge connector die vorbereiteten Ergebnisse von Layer 4 und trägt sie in Layer 3. Das bedeutet nicht, dass die Bridge dafür verantwortlich ist, components zu organisieren, layouts zu berechnen, controls zu routen oder output zu rendern. Diese Verantwortungen gehören zu den umgebenden Schichten. Die Bridge existiert in der Mitte, damit diese Verantwortungen getrennt bleiben können.

Ein frame kann die aktiven Grenzen der Schnittstelle bereits vorbereitet haben. Ein graph kann die components, die hineingehören, bereits organisiert haben. Der Bridge connector nimmt diesen vorbereiteten Kontext und präsentiert ihn dem renderer in einer Form, mit der der renderer arbeiten kann. Dazu kann gehören, references, vorbereitete render entries, abgeflachte component information, resource handles, command-ready data oder jede andere für das beschriebene System passende Repräsentation weiterzugeben.

Die genaue Implementierung kann variieren, aber die Verantwortung bleibt gleich. Der Bridge connector entscheidet nicht, was die Schnittstelle bedeutet. Er entscheidet nicht, wie der endgültige output an den Benutzer geliefert werden soll. Er stellt einfach den Übergangspunkt bereit, an dem organisierter interface context zu renderer-facing data wird.

Das erlaubt graph und frame, auf Organisation fokussiert zu bleiben, während der renderer auf rendering fokussiert bleibt.

### Ein leiser Connector

Der Bridge connector wird oft leiser erscheinen als die connectors über ihm. Der Data connector kann auf digital data zugreifen und sie interpretieren. Der Parser connector kann Strukturen in veränderbare components verwandeln. Der Adapter connector kann diese components in graphs und frames setzen. Im Vergleich dazu kann der Bridge connector fast leer wirken.

Diese Leere ist Teil des Sinns.

Ein Bridge connector sollte typischerweise nicht mehr Arbeit verrichten als nötig. Sein Hauptzweck besteht darin, graph und frame mit dem renderer kommunizieren zu lassen, ohne eine der beiden Schichten zu zwingen, die Verantwortung der anderen zu übernehmen. Wenn der graph beginnt, wie ein renderer zu handeln, verliert das Modell Klarheit. Wenn der renderer beginnt, wie ein graph zu handeln, verliert das Modell die Fähigkeit, Organisation sauber getrennt von output zu beschreiben.

Der Bridge connector schützt diese Grenze.

Er kann data für den renderer vorbereiten, aber er sollte nicht zum renderer werden. Er kann die organisierte Schnittstelle dem renderer zugänglich machen, aber er sollte nicht zum graph werden. Sein Nutzen entsteht daraus, dass zwei benachbarte Schichten getrennt bleiben und trotzdem zusammenarbeiten können.

### Interaktionen zurück nach oben weitergeben

Der Bridge connector ist auch im Bottom-up-Fluss wichtig. Wenn eine Interaktion vom System kommt, wandert sie durch die unteren Schichten nach oben, bis sie den Punkt erreicht, an dem die organisierte Schnittstelle sie sinnvoll verstehen kann. In vielen Fällen kann der renderer die Interaktion empfangen oder in eine Form übersetzen, die der Stack weiter routen kann, aber der renderer weiß normalerweise nicht, welche endgültige component sie behandeln soll.

Diese Verantwortung liegt höher im Stack.

Deshalb wird der Bridge connector eine Interaktion oft mit sehr geringer Veränderung an Layer 4 weitergeben. Graph und frame sind die Schichten, die bestimmen können, wohin die Interaktion gehört. Sie kennen den organisierten Kontext. Sie können bestimmen, welche component aktiv ist, welches control die relevante region einnimmt, welche layout-Beziehung zählt oder welcher Teil der Schnittstelle die Interaktion erhalten soll.

Deshalb sollte der Bridge connector nicht mit einem interaction router verwechselt werden. Er kann die Interaktion tragen und die für routing nötige Information bewahren, aber er ist normalerweise nicht die Schicht, die das routing selbst ausführt. Die Bridge stellt nur sicher, dass die Interaktion von renderer-facing information zurück in graph-facing context überqueren kann.

Im Top-down-Fluss hilft die Bridge, den renderer zu speisen. Im Bottom-up-Fluss hilft sie, Interaktionen an den Ort zurückzugeben, an dem sie sinnvoll geroutet werden können.

### Der am schwersten sichtbare Connector

Der Bridge connector war einer der am schwersten zu identifizierenden connectors, weil sein Zweck nach außen hin vage wirken kann. Er hat nicht die offensichtliche storage-Beziehung des Data connectors. Er hat nicht die klare Transformation des Parser connectors. Er hat nicht die organisatorische Rolle des Adapter connectors. Auf den ersten Blick kann er wie eine dünne Übergabe zwischen zwei Schichten aussehen, die bereits nah genug wirken, um direkt zu kommunizieren.

Ohne den Bridge connector hätte der Stack jedoch keinen expliziten Weg, von organisiertem interface context zu rendering zu wechseln. Ein graph müsste wissen, wie er einen renderer direkt speist, oder ein renderer müsste wissen, wie er graphs und frames selbst interpretiert. Beide Richtungen würden die Grenze zwischen Organisation und output zusammenfallen lassen.

Der Bridge connector gibt dieser Grenze einen Namen.

Er enthält vielleicht nicht immer viel Logik, und in manchen Implementierungen kann er sehr klein erscheinen, aber die konzeptuelle Rolle ist wesentlich. Er erklärt, wie die organisierte Schnittstelle in den rendering process übergeht, ohne Layer 4 und Layer 3 zu derselben Sache zu machen.

### Die Grenze bewahren

Ein Bridge connector sollte die Grenze zwischen Kontext und rendering bewahren. Die Information, die er nach unten weitergibt, sollte der von Layer 4 vorbereiteten organisierten Schnittstelle treu bleiben und zugleich für Layer 3 nutzbar sein. Die Information, die er nach oben weitergibt, sollte die Details bewahren, die graph und frame benötigen, um zu verstehen, was geschehen ist, während der renderer dennoch auf seine eigene Verantwortung fokussiert bleiben kann.

Das verlangt nicht, dass die Bridge jedes interne Detail einer der beiden Schichten bewahrt. Ein renderer benötigt möglicherweise nicht den vollständigen graph. Ein graph benötigt möglicherweise nicht jedes renderer-specific detail. Der Bridge connector entscheidet, was die Grenze überqueren muss, damit jede Seite weiterarbeiten kann, ohne die Rolle der anderen zu übernehmen.

Das macht den connector besonders wichtig in Systemen, in denen der renderer sehr spezifische Anforderungen hat. Graph und frame sollten nicht jedes Detail dieser Anforderungen kennen müssen. Der renderer sollte nicht die gesamte Organisation der Schnittstelle verstehen müssen. Der Bridge connector existiert, damit beide Seiten kommunizieren können, ohne sich ineinander zu verstricken.

### Warum der Connector wichtig ist

Der Bridge connector verhindert, dass der Stack organisierten interface context mit gerendertem output verwechselt. Ohne diesen connector wären graphs und frames gezwungen, direkt in renderer-Begriffen zu sprechen, oder renderers wären gezwungen, die vollständige Struktur der aktiven Schnittstelle zu verstehen.

Durch die Definition des Bridge connectors gibt das Modell diesem Übergang einen eigenen Ort.

Graphs & Frames bleibt für Organisation, Kontext, Grenzen, routing und Vorbereitung verantwortlich. Renderers bleibt dafür verantwortlich, vorbereitete Information in output-ready form zu verwandeln. Der Bridge connector übernimmt die Bewegung zwischen beiden.

Dies ist der Punkt im Stack, an dem organisierte Information in den rendering process übergeht. Er ist oft leise. Er ist oft dünn. Er kann fast unsichtbar wirken. Aber ohne ihn verliert der Stack die explizite Verbindung zwischen der Schnittstelle als organisiert und der Schnittstelle als gerendert. Der Bridge connector macht diesen Übergang möglich und tritt dann, gnädigerweise, aus dem Weg.
