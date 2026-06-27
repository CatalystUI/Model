# 6.2 Connectors :: Parser

## Ausführliche Besprechung

### Von Struktur zu Nutzung

Der **Parser** connector sitzt zwischen **Layer 6: Structure & Semantics** und **Layer 5: Components, Controls, & Layouts**. Er ist dafür verantwortlich, strukturierte Information zu nehmen und sie in etwas zu verwandeln, das der Rest der Schnittstelle aktiv verwenden, ändern, anordnen oder beantworten kann.

Layer 6 gibt Information eine stabile interpretierte Form. Er definiert, was die Daten bedeuten, wie sie organisiert sind und welche Regeln ihnen Gestalt geben. Eine Struktur ist jedoch nicht dasselbe wie ein Schnittstellenobjekt. Eine Struktur kann dem System sagen, dass ein Dokument eine Überschrift hat, dass eine Datei einen Abschnitt enthält oder dass ein Lied timing information enthält, aber die Struktur selbst beschäftigt sich noch vor allem damit, die Daten treu zu repräsentieren.

Der Parser connector bewegt diese interpretierte Information in Layer 5, wo sie veränderbar wird. Hier kann eine Struktur zu einer component, einem control oder einem layout werden. Hier hört Information auf, nur eine stabile Beschreibung dessen zu sein, was existiert, und beginnt, etwas zu werden, womit das Programm direkt interagieren kann. Anders gesagt: Der Data connector hilft dem System zu verstehen, was die Information ist. Der Parser connector hilft dem System, dieses Verständnis in etwas Nutzbares zu verwandeln.

### In Components parsen

Das Wort „parser“ wird oft verwendet, um den Prozess zu beschreiben, Text zu lesen oder eine Datei in bedeutungsvolle Teile zu zerlegen. In CatalystUI trägt das Wort dieselbe allgemeine Idee, wird aber breiter angewandt. Ein Parser connector liest nicht nur Zeichen oder tokens. Er empfängt eine bereits interpretierte Struktur und verwandelt diese Struktur in veränderbare components. Diese Unterscheidung ist wichtig, weil der Data connector digital data bereits in Structure & Semantics gebracht hat. Wenn Information den Parser connector erreicht, fragt das System nicht mehr: „Kann diese data verstanden werden?“ Es fragt nun: „Wie soll diese verstandene data nutzbar werden?“

Eine Dokumentstruktur kann zu document components werden. Eine Konfigurationsstruktur kann zu settings components werden. Eine Musikstruktur kann zu editierbaren audio components werden. Der Parser connector führt den Übergang von strukturierter Bedeutung zu interaktiver Repräsentation aus. Hier beginnt sich der Stack für Programmierer auch vertrauter anzufühlen. Components, controls und layouts sind die Teile, mit denen ein developer direkt arbeiten kann. Sie können verändert, abgefragt, organisiert, aktualisiert und schließlich durch die unteren Schichten des Stacks geroutet werden. Der Parser connector gibt diesen Teilen ihre Ausgangsform.

### Wenn der Unterschied klein wirkt

In vielen Fällen können eine Struktur und eine component sehr unterschiedlich erscheinen. Ein komplexes Dokument, eine Audiodatei oder eine interaktive view kann eine erhebliche Transformation benötigen, bevor sie in Layer 5 nützlich wird. Wenn die ursprüngliche Struktur jedoch einfach ist, kann der Unterschied zwischen Struktur und component auf den ersten Blick fast unsichtbar wirken.

Eine INI-Datei zeigt das gut. Nachdem der Data connector die Datei interpretiert hat, kann die Struktur sections, keys und values enthalten. Eine component, die dieselbe Datei repräsentiert, kann ebenfalls sections, keys und values enthalten. Oberflächlich können diese beiden Formen nahezu identisch aussehen.

Der Kern ist: Die Unterscheidung liegt nicht nur in ihrer Form, sondern in ihrer Verantwortung.

Die Struktur repräsentiert den interpretierten Zustand der Daten. Sie ist die stabile Form, die aus der ursprünglichen digitalen Repräsentation erzeugt wurde. Die component repräsentiert den nutzbaren Zustand dieser Daten. Sie kann einem developer erlauben, eine section hinzuzufügen, einen key zu entfernen, einen value zu ändern, defaults anzuwenden, edits zu validieren, Änderungen zu verfolgen oder die Information für Anzeige und Interaktion vorzubereiten.

Eine einfache INI-Struktur und eine INI-component können also fast dieselbe Information enthalten, aber sie bedeuten innerhalb des Stacks nicht dasselbe. Die Struktur befasst sich mit treuer Interpretation. Die component befasst sich mit aktiver Nutzung.

Das erklärt, warum der Parser connector wichtig bleibt, auch wenn seine Arbeit klein wirkt. Manchmal ist parsing dramatisch. Manchmal ist es fast eine Eins-zu-eins-Abbildung. In beiden Fällen markiert der connector dennoch die Grenze, an der interpretierte Information zu veränderbarer interface data wird.

### Die Kraft der Neuformulierung

Der Parser connector wird besonders mächtig, wenn eine einzelne Struktur in mehr als einer nützlichen Form neu ausgedrückt werden kann. Weil Layer 6 interpretierte Bedeutung repräsentiert, kann der Parser connector entscheiden, wie diese Bedeutung in Layer 5 nutzbar werden soll.

Ein HTML-Dokument zeigt das klar. Dasselbe strukturierte Dokument könnte in components für eine visuelle Webseite geparst werden, in components für eine lesbare Dokumentgliederung, in components für accessibility navigation, in components für Druck oder in components zum Extrahieren bestimmter Information. Die ursprüngliche Struktur kann dieselbe sein, aber der Parser connector erlaubt dieser Struktur, je nach Ziel des Systems unterschiedliche nutzbare Repräsentationen zu werden.

Das ist nicht nur eine Bequemlichkeit. Es zeigt etwas Wichtiges über den Stack: Sobald data interpretiert wurde, kann sie entsprechend einem Zweck neu geformt werden.

Dasselbe Prinzip kann für Musik gelten. Eine strukturierte musikalische Repräsentation könnte zu editierbaren timeline components, playback components, notation components oder export-orientierten components werden. Von dort aus kann die Information später in Richtung einer Struktur zurückkehren, die für eine WAV-Datei, eine MP3-Datei oder ein anderes Format geeignet ist. Der Parser connector ist ein Grund, warum sich diese Art von Transformation sauber ausdrücken lässt. Er gibt dem System einen Ort, um zwischen stabiler Struktur und veränderbarer Repräsentation zu wechseln, ohne so zu tun, als seien diese beiden Ideen dasselbe.

Auf diese Weise hilft der Parser connector, die Flexibilität von Information zu bewahren. Er erlaubt derselben interpretierten data, an unterschiedlichen workflows, tools und Ausdrucksformen teilzunehmen, während sie dennoch in der Bedeutung verankert bleibt, die Structure & Semantics bereitstellt.

### Zurück zur Struktur

Weil der Stack reversibel ist, arbeitet der Parser connector auch in die entgegengesetzte Richtung. Wenn components durch Interaktion verändert werden, müssen diese Änderungen möglicherweise zu Structure & Semantics zurückkehren, bevor sie wieder Digital Data werden können.

Dieser Rückweg ist der Ort, an dem veränderbare Information vorbereitet wird, wieder stabil zu werden. Eine settings component kann von einem Benutzer verändert und dann zurück in eine Konfigurationsstruktur geparst werden. Eine document component kann bearbeitet und dann zurück in eine Dokumentstruktur geparst werden. Eine music component kann arrangiert, getrimmt oder angepasst und dann zurück in eine Struktur geparst werden, die später als Datei geschrieben werden kann.

Dieser Prozess bedeutet nicht, dass jede component zu genau derselben Struktur zurückkehren muss, aus der sie kam. Manchmal besteht der Zweck der Interaktion darin, die Information in eine neue Form zu transformieren. Ein importiertes Dokument kann zu einer vereinfachten Gliederung werden. Ein bearbeitetes Audioprojekt kann zu einer finalen Exportstruktur werden. Eine komplexe Gruppe von components kann für Speicherung oder Übertragung zu einer kleineren Struktur reduziert werden.

Der Parser connector gibt dem Modell einen passenden Ort für diese Transformation. Er erlaubt veränderbarer interface data, wieder strukturierte data zu werden, ohne Layer 5 so zu behandeln, als sei er für storage verantwortlich, und ohne Layer 6 zu zwingen, jede mögliche interaktive Form zu verstehen.

### Absicht bewahren

Ein Parser connector sollte die beabsichtigte Bedeutung der Information bewahren, während sie zwischen Schichten wechselt. Beim Weg von Struktur zu components sollte er nutzbare Formen erzeugen, die die Struktur ehrlich widerspiegeln. Beim Weg von components zurück zu Struktur sollte er das Ergebnis der Interaktion klar genug repräsentieren, damit die oberen Schichten es bewahren oder übertragen können.

Das verlangt keine perfekte Eins-zu-eins-Kopie. Tatsächlich existiert der Parser connector oft gerade deshalb, weil eine Eins-zu-eins-Kopie weniger nützlich wäre. Components können convenience properties, helper methods, editing state, validation state, layout information oder temporäre Werte benötigen, die nicht in die ursprüngliche Struktur gehören. Ebenso kann eine zurückgegebene Struktur temporären component state auslassen, weil dieser Zustand nur während der Interaktion nützlich war.

Das Ziel ist nicht, jedes interne Detail identisch zu halten. Das Ziel ist, die Bedeutung zu bewahren, die zählt.

Das hält den Stack ehrlich. Structure & Semantics bleibt der Ort für interpretierte, stabile Information. Components, Controls, & Layouts bleibt der Ort für veränderbare, nutzbare Information. Der Parser connector führt die Bewegung zwischen beiden aus und bewahrt dabei die Absicht der transformierten data.

### Warum der Connector wichtig ist

Der Parser connector verhindert, dass der Stack interpretierte data mit nutzbarer interface data verwechselt. Ohne diesen connector müssten Strukturen selbst veränderbar werden, oder components müssten wissen, wie sie jede Struktur interpretieren, die sie empfangen. Beide Ansätze verwischen die Verantwortlichkeiten der umliegenden Schichten.

Durch die Definition des Parser connectors gibt das Modell diesem Übergang einen eigenen Ort.

Structure & Semantics bleibt für stabile Interpretation verantwortlich. Components, Controls, & Layouts bleibt für aktive Nutzung, Veränderung und Interaktion verantwortlich. Der Parser connector übernimmt die Transformation zwischen beiden.

Dies ist der Punkt im Stack, an dem verstandene Information zu etwas wird, womit das Programm direkt arbeiten kann. Hier wird stabile Bedeutung zu veränderbarer Repräsentation. Von dort aus kann die Information in graphs und frames organisiert, für output vorbereitet, durch die unteren Schichten geroutet und schließlich dem Benutzer als etwas präsentiert werden, das er wahrnehmen, verstehen und beantworten kann.
