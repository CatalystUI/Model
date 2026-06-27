# 6.3 Connectors :: Adapter

## Ausführliche Besprechung

### Von Nutzung zu Kontext

Der **Adapter** connector sitzt zwischen **Layer 5: Components, Controls, & Layouts** und **Layer 4: Graphs & Frames**. Er ist dafür verantwortlich, veränderbare interface data zu nehmen und in einen größeren Kontext zu setzen, in dem sie organisiert, entdeckt, geroutet, begrenzt und für den Rest des Stacks vorbereitet werden kann.

Layer 5 gibt dem System components, controls und layouts. Das sind die veränderbaren Teile, mit denen ein developer direkt arbeiten kann. Eine component kann ein Stück Information repräsentieren. Ein control kann auf eine Interaktion reagieren. Ein layout kann andere components nach einer bestimmten Ordnung organisieren. Diese Teile beschreiben jedoch nicht vollständig die Umgebung, in der sie existieren. Sie können wissen, was sie sind, und sie können wissen, wie sie sich verhalten, aber sie wissen nicht automatisch, wie sie sich auf die gesamte Schnittstelle beziehen.

Der Adapter connector stellt diese Bewegung von einzelnen nutzbaren Teilen in organisierten Kontext bereit. Er nimmt die components, die durch den Parser connector erzeugt wurden, und adaptiert sie in graphs und frames. Hier beginnt der Stack nicht nur zu verstehen, dass eine component existiert, sondern auch, wohin sie gehört, wie sie zu anderen components in Beziehung steht und wie sie an der aktiven Schnittstelle teilnehmen soll.

Anders gesagt: Der Parser connector macht strukturierte Information nutzbar. Der Adapter connector macht nutzbare Information kontextuell.

### Components in Graphs adaptieren

Eine component kann für sich allein existieren, aber eine Benutzerschnittstelle besteht selten aus einer einzigen isolierten component. Selbst die einfachste Schnittstelle enthält normalerweise Beziehungen: Eine component kann eine andere enthalten, ein control kann von einem layout abhängen, eine Gruppe muss vielleicht gemeinsam durchsucht, geordnet, aktiviert, deaktiviert, fokussiert oder aktualisiert werden.

Hier wird der graph wichtig.

Der Adapter connector erlaubt, components, controls und layouts in einen graph zu setzen, damit sie als Teil eines größeren Ganzen organisiert werden können. Ein graph kann components speichern, ihre Beziehungen verfolgen, Abfragemöglichkeiten bereitstellen und die umgebende Logik liefern, die nötig ist, um sie als Sammlung zu verwalten. Ohne diesen Schritt blieben components verstreute Stücke veränderbarer data statt Teilnehmer an einer einheitlichen Schnittstelle.

Eine settings component kann zum Beispiel für sich nützlich sein. Sobald sie in einen graph adaptiert wird, kann sie Teil einer vollständigen settings view werden, mit anderen Abschnitten verbunden sein, nach Namen durchsucht werden, mit verwandten Werten aktualisiert oder angesteuert werden, wenn der Benutzer eine action ausführt. Die component hat nicht aufgehört, eine component zu sein, aber sie hat durch den graph Kontext gewonnen.

Diese Unterscheidung hilft, Layer 5 und Layer 4 getrennt zu halten. Components beschreiben nutzbare interface data. Graphs beschreiben, wie diese Stücke zusammen organisiert sind.

### Layout ist nicht der ganze Kontext

Der Adapter connector hilft auch, den Unterschied zwischen einem layout und einem graph zu klären. Weil layouts components organisieren können, liegt es nahe, sie als die vollständige Organisationsschicht der Schnittstelle zu behandeln. Ein layout organisiert components jedoch nur auf eine bestimmte Weise. Es beschreibt nicht notwendigerweise die vollständige Beziehung, den lifecycle, das routing oder den Umgebungskontext dieser components.

Ein vertikales layout kann bestimmen, dass mehrere controls der Reihe nach erscheinen sollen. Das bedeutet nicht, dass das layout für die gesamte Schnittstelle verantwortlich ist. Es muss nicht jede aktive component kennen, jede Interaktion verwalten, die output boundary vorbereiten oder als oberster Vermittler des Systems handeln. Diese Verantwortungen gehören zu Layer 4.

Der Adapter connector respektiert diese Unterscheidung. Er kann ein layout aus Layer 5 nehmen und in einen graph setzen, aber das layout wird nicht allein deshalb zum graph, weil es components anordnet. Der graph stellt einen breiteren Organisationskontext bereit, während das layout eine component bleibt, deren Zweck darin besteht, andere components anzuordnen.

Diese Trennung wird besonders nützlich, wenn eine Schnittstelle wächst. Einfache Anordnungen können einfach bleiben, während das größere System weiterhin die Struktur bereitstellt, die für discovery, routing, updates und Vorbereitung auf output nötig ist.

### Verbindung zum Frame

Layer 4 befasst sich nicht nur mit graphs. Er enthält auch den frame, der die aktive Grenze und den Kommunikationspunkt zwischen organisierten components und den unteren Schichten des Stacks repräsentiert.

Der Adapter connector hilft components, in diesen gerahmten Kontext einzutreten. Eine component kann eine Größe haben, ein control kann interaction behavior haben und ein layout kann relative Platzierung beschreiben, aber der frame bestimmt die Grenzen, in denen diese Stücke vorbereitet werden. Er befasst sich mit dem aktiven Bereich, dem umgebenden Kontext und der Information, die schließlich in Richtung rendering weitergegeben werden muss.

Das bedeutet nicht, dass der Adapter connector irgendetwas rendert. Rendering gehört zu den unteren Schichten. Der Adapter connector bereitet die organisierte Schnittstelle vor, damit der frame sie korrekt kommunizieren kann. Er gibt dem frame die component-Beziehungen, layout-Ergebnisse und Kontextinformation, die benötigt werden, bevor der nächste connector diese Information in Richtung renderer trägt.

Auf diese Weise wirkt der Adapter connector als Brücke zwischen „das sind die Stücke, die wir verwenden können“ und „das ist die organisierte Schnittstelle, die wir vorbereiten“.

### Wiederverwendung durch Adaptation

Einer der stärksten Aspekte des Adapter connectors ist, dass dieselbe component in unterschiedliche Kontexte adaptiert werden kann. Eine component muss nicht dauerhaft an einen graph, einen frame oder eine Art von Schnittstelle gebunden sein. Ihre Bedeutung und ihr Verhalten können stabil bleiben, während der Adapter connector bestimmt, wie sie in einer bestimmten Umgebung teilnehmen soll.

Eine document component könnte in einen editing graph, einen preview graph oder einen printing graph adaptiert werden. Eine music component könnte in einen playback graph, einen editing graph oder einen library graph adaptiert werden. Eine Gruppe von settings components könnte in eine einfache preferences page, ein advanced configuration panel oder einen automatisierten setup flow adaptiert werden.

Die zugrunde liegenden components können vertraut bleiben, aber ihre Beziehungen und ihr Zweck ändern sich je nach graph und frame, in die sie eintreten. Das gibt CatalystUI eine saubere Möglichkeit, reuse auszudrücken, ohne so zu tun, als bedeute reuse, dass jeder Kontext identisch ist.

Der Adapter connector macht das möglich. Er erlaubt veränderbarer interface data, nach Zweck neu organisiert zu werden, während die component selbst darauf fokussiert bleibt, was sie repräsentiert und wie sie sich verhält.

### Zurück zu Components

Weil der Stack reversibel ist, nimmt der Adapter connector auch am Fluss der Interaktion zurück zu den oberen Schichten teil. Wenn ein Benutzer mit dem System interagiert, müssen die unteren Schichten diese Interaktion schließlich zurück zur passenden component oder zum passenden control routen.

Layer 4 spielt dabei eine wichtige Rolle, weil er den organisierten Kontext versteht. Der graph kann helfen zu bestimmen, welche component relevant ist. Der frame kann helfen, die Grenzen zu interpretieren, in denen die Interaktion stattgefunden hat. Sobald dieser Kontext bekannt ist, hilft der Adapter connector, die Interaktion zu Layer 5 zurückzuführen, wo die passende component oder das passende control reagieren kann.

Das ist wichtig, weil Interaktionen selten bereits an genau die component gebunden ankommen, die sie behandeln soll. Das System kann wissen, dass eine Taste gedrückt, ein pointer bewegt, ein command ausgelöst oder eine region ausgewählt wurde, aber der Stack muss noch bestimmen, was diese action innerhalb der aktuellen Schnittstelle bedeutet. Der Adapter connector hilft, diese Kontextentscheidung zurück in die veränderbaren components zu tragen, wo die Interaktion behandelt werden kann.

Im Top-down-Fluss setzt der Adapter connector components in Kontext. Im Bottom-up-Fluss hilft er, kontextuelle Interaktionen zu den components zurückzuführen, die darauf handeln können.

### Identität bewahren

Ein Adapter connector sollte die Identität und Absicht der components bewahren, die er adaptiert. Wenn eine component in einen graph oder frame eintritt, sollte sie nicht verlieren, was sie ist. Ihr Zweck, ihr Zustand und ihre Beziehung zur ursprünglichen Information sollten erkennbar bleiben, selbst wenn sie in ein größeres System organisiert wird.

Das heißt nicht, dass die component nicht gewrappt, indexiert, gruppiert, gemessen, transformiert oder für eine bestimmte Umgebung vorbereitet werden kann. In vielen Fällen erfordert adaptation zusätzliche Information, die die component ursprünglich nicht enthielt. Ein graph kann identifiers benötigen. Ein frame kann bounds benötigen. Ein routing system kann focus information benötigen. Diese Ergänzungen helfen der component, am Kontext teilzunehmen, aber sie sollten die Bedeutung der component nicht auslöschen.

Der Adapter connector führt daher eine sorgfältige Art von Transformation aus. Er fügt Kontext hinzu, ohne die component zu verschlucken. Er erlaubt der Schnittstelle, organisiert zu werden, ohne jede component für das ganze System um sie herum verantwortlich zu machen.

### Warum der Connector wichtig ist

Der Adapter connector verhindert, dass der Stack nutzbare interface data mit organisiertem interface context verwechselt. Ohne diesen connector müssten components ihre eigenen graphs verwalten, layouts würden fälschlich als vollständige Schnittstellenorganisation gelten, oder frames müssten components ohne passenden Übergang zwischen den beiden Schichten verstehen.

Durch die Definition des Adapter connectors gibt das Modell diesem Übergang einen eigenen Ort.

Components, Controls, & Layouts bleibt für veränderbare Schnittstellenobjekte und direktes interaction behavior verantwortlich. Graphs & Frames bleibt für Organisation, Kontext, Grenzen, routing und Vorbereitung für die unteren Schichten verantwortlich. Der Adapter connector übernimmt die Bewegung zwischen beiden.

Dies ist der Punkt im Stack, an dem nutzbare Information zu situierter Information wird. Components sind nicht mehr nur für das Programm verfügbar; sie werden in einen lebendigen Kontext gesetzt, in dem sie sich aufeinander beziehen, über die richtigen Pfade reagieren und vorbereitet werden können, weiter durch den Stack getragen zu werden. Von dort aus kann die organisierte Schnittstelle in Richtung rendering, delivery, perception und response weitergehen.
