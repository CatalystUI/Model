<!--
Diese Übersetzung wurde von ChatGPT erstellt und sollte von einem menschlichen Übersetzer überprüft werden.
Entfernen Sie diese Zeilen in einem Pull Request, nachdem die Übersetzung überprüft wurde.
-->

# 6.6 Connectors :: Native

## Ausführliche Besprechung

### Von Windows zu Systems

Der **Native** connector sitzt zwischen **Layer 2: Windows** und **Layer 1: Systems**. Er ist dafür verantwortlich, das window mit dem zugrunde liegenden system zu verbinden, damit output geliefert und Interaktionen durch die tatsächliche Umgebung empfangen werden können, in der das Programm läuft.

Layer 2 gibt dem Stack ein window: eine begrenzte view, einen container oder einen point of delivery. Layer 1 gibt dem Stack das system: die Betriebsumgebung, hardware access, services, devices und native behavior, die das window möglich machen. Der Native connector stellt den Übergangspunkt zwischen diesen beiden Schichten bereit.

Dieser connector ist oft der Ort, an dem der Stack die praktische Realität des Rechnens am direktesten berührt. Bis zu diesem Punkt hat das Modell beschrieben, wie Information durch strukturierte data, components, graphs, renderers und surfaces wandert. Ein window existiert jedoch nicht allein durch Vorstellungskraft. Etwas muss das system bitten, es zu erstellen, zu konfigurieren, zu erhalten, zu aktualisieren und Interaktionen darüber zurückzumelden.

Dieses Etwas ist der Native connector.

### Bindings definieren

Ein **binding** ist eine kontrollierte Verbindung zwischen einer Schicht und Funktionalität, die von einer anderen bereitgestellt wird. Im Kontext des Native connectors stellen bindings system-level behavior dem window in einer Form bereit, die das Programm verwenden kann, ohne dass das window selbst zum system werden muss.

Diese Definition ist absichtlich einfach. Ein binding muss nicht geheimnisvoll sein. Es ist die zugängliche Beziehung zwischen dem code darüber und der Funktionalität darunter.

Ein native binding kann die Fähigkeit bereitstellen, ein window zu erstellen, seinen Titel zu ändern, keyboard input zu empfangen, auf pointer movement zu reagieren, den aktiven Bereich zu verändern, focus anzufordern, auf ein device zuzugreifen oder mit einem system service zu kommunizieren. Die Details variieren je nach system und Implementierung, aber das Konzept bleibt gleich: Das binding stellt eine nutzbare Verbindung zu native functionality bereit.

Deshalb sind bindings auf dieser Schicht so wichtig. Das system kann mächtige Fähigkeiten bereitstellen, aber diese Fähigkeiten sind nicht automatisch in der Sprache oder Struktur verfügbar, die der Rest des Stacks verwendet. Sie müssen durch irgendeine Form von Verbindung offengelegt werden. Der Native connector ist der Ort, an dem diese Verbindungen gesammelt, geformt und genutzt werden.

### Native Access bereitstellen

In vielen Implementierungen wird der Native connector hauptsächlich bindings zu niedrigerer system functionality bereitstellen. Das kann zunächst gewöhnlich wirken, besonders weil developers bereits mit native APIs, platform libraries, operating system calls, device interfaces und ähnlichen tools vertraut sind. Innerhalb des Stacks sind diese Dinge jedoch nicht bloß zufällige Implementierungsdetails. Sie sind die Mittel, durch die Layer 2 Zugang zu Layer 1 erhält.

Ein grafisches window auf einem desktop operating system kann bindings zu einer platform windowing API benötigen. Eine command-line interface kann bindings zu terminal input und output benötigen. Ein spezialisiertes device kann bindings zu buttons, sensors, speakers, lights oder anderen system-controlled devices benötigen. In jedem Fall stellt der Native connector die Beziehung bereit, die das window im system handeln lässt.

Wichtig ist nicht, welche platform verwendet wird. Wichtig ist, dass das window keinen output liefern und keine interaction empfangen kann, wenn es keine Möglichkeit hat, mit dem system zu kommunizieren, das es enthält.

Der Native connector stellt diese Möglichkeit bereit.

### Mehr als ein Wrapper

Weil dieser connector oft native behavior offenlegt, kann es naheliegen, ihn als wrapper um system APIs zu beschreiben. Diese Beschreibung kann in manchen praktischen Kontexten nützlich sein, erklärt aber nicht vollständig, was der connector innerhalb des Modells tut.

Ein wrapper beschreibt, wie Menschen diese Art von Schicht oft implementieren. Ein binding beschreibt, was der connector tatsächlich bereitstellt.

Der Native connector ist nicht bloß ein Haufen platform calls unterhalb des windows. Er ist die formale Beziehung zwischen window und system. Er definiert, wie das window seine system-backed existence erhält, wie system behavior dem Stack verfügbar wird und wie system-originating interactions beginnen, nach oben zu wandern.

Diese Unterscheidung ist wichtig, weil das Modell nicht versucht, die historischen Beschreibungen von developers für diese tools zu bewahren. Es versucht, den zugrunde liegenden Prozess selbst zu beschreiben. In diesem Prozess ist der Native connector nicht wichtig, weil er zufällig eine native API wrappt. Er ist wichtig, weil er Layer 2 an Layer 1 bindet.

Das ist es, was dieser connector wirklich ist.

### Das Window erstellen und erhalten

Im Top-down-Fluss erlaubt der Native connector dem window, durch das system zu arbeiten. Ein window muss vielleicht erstellt, gezeigt, verborgen, resized, bewegt, fokussiert, aktualisiert oder geschlossen werden. Diese actions benötigen eine Beziehung zum system, weil das system die Schicht ist, die tatsächlich die Umgebung bereitstellt, in der diese actions stattfinden können.

Der Native connector kann die bindings bereitstellen, die nötig sind, um diese actions auszuführen. Durch ihn kann Layer 2 system behavior anfordern, ohne die gesamte Verantwortung des system management zu übernehmen. Das window bleibt der begrenzte point of delivery. Das system bleibt die Umgebung, die die zugrunde liegende Funktionalität bereitstellt. Der Native connector trägt die Beziehung zwischen beiden.

Das ist besonders wichtig, weil systems sich unterscheiden. Unterschiedliche operating systems, devices, runtimes und environments können unterschiedliche APIs und behaviors bereitstellen. Der Native connector gibt dem Stack einen Ort, um diese Unterschiede zu repräsentieren, ohne den Rest des Modells system-specific zu machen.

### Interaktionen empfangen

Weil der Stack reversibel ist, ist der Native connector auch der erste explizite connector, der beteiligt ist, wenn eine Interaktion aus dem system eintritt.

Ein key press, pointer movement, touch input, controller action, device signal, resize event, focus change oder ein anderes system-originating event muss von Layer 1 nach Layer 2 überqueren, bevor der Rest des Stacks irgendetwas damit tun kann. Der Native connector stellt diesen Übergang bereit. Er empfängt oder exponiert die interaction information des systems und trägt sie in das window, wo sie durch den Surface connector weiter nach oben in Renderers und dann durch Bridge, Adapter, Parser und Data connectors wandern kann, wenn nötig.

In vielen Fällen muss der Native connector nicht entscheiden, was die Interaktion bedeutet. Seine Rolle besteht darin, die interaction source des systems an den interaction path des windows zu binden. Das system meldet, dass etwas geschehen ist. Der Native connector macht diese Meldung für Layer 2 nutzbar. Der Rest des Stacks kann die Interaktion dann gemäß den eigenen Verantwortungen routen, transformieren und behandeln.

Das hält die untere Grenze sauber. Der Native connector gibt interaction input einen Weg in den Stack, ohne vom system zu verlangen, die höheren Schichten zu verstehen, und ohne von den höheren Schichten zu verlangen, sich so zu verhalten, als wären sie das system.

### Die Grenze bewahren

Ein Native connector sollte die Grenze zwischen window und system bewahren. Er sollte die system functionality offenlegen, die das window benötigt, aber die Unterscheidung zwischen den beiden Schichten nicht auslöschen.

Hier sind bindings als Konzept besonders nützlich. Ein binding erlaubt Zugriff ohne Identität. Das window kann system functionality verwenden, ohne zum system zu werden. Das system kann behavior bereitstellen, ohne zum window zu werden. Der connector definiert die Beziehung zwischen beiden.

Diese Grenze erlaubt CatalystUI, ein window über unterschiedliche Umgebungen hinweg konsistent zu beschreiben. Ein system kann ein traditionelles desktop window bereitstellen. Ein anderes kann ein terminal bereitstellen. Ein anderes kann einen device-specific output channel bereitstellen. Ein anderes kann eine remote oder virtualisierte Umgebung bereitstellen. Die native bindings können sich unterscheiden, aber die Rolle des connectors bleibt gleich.

Der Native connector bindet Layer 2 an Layer 1, damit das window im system, das es unterstützt, existieren, arbeiten, Interaktionen empfangen und output liefern kann.

### Warum der Connector wichtig ist

Der Native connector verhindert, dass der Stack ein window mit dem system verwechselt, das es bereitstellt. Ohne diesen connector müsste Windows system-specific behavior direkt enthalten, oder Systems müsste das höherstufige Konzept des windows verstehen. Beide Richtungen würden die Grenze zwischen dem point of delivery und der Umgebung verwischen, die delivery möglich macht.

Durch die Definition des Native connectors gibt das Modell diesem Übergang einen eigenen Ort.

Windows bleibt für den begrenzten Kontext verantwortlich, durch den output und interaction passieren. Systems bleibt für die zugrunde liegende Umgebung, services, devices und native behavior verantwortlich. Der Native connector übernimmt das binding zwischen beiden.

Dies ist der letzte explizite connector des Stacks. Hier erreicht die modellierte Schnittstelle das system unter ihr. Er kann wie platform access aussehen. Er kann durch native libraries, operating system calls, device APIs oder runtime services implementiert werden. Unter diesen vertrauten Beschreibungen ist sein Zweck jedoch klarer und einfacher.

Der Native connector stellt bindings bereit.

Er bindet das window an das system, sodass output den Stack verlassen und interaction in ihn eintreten kann. Dadurch vervollständigt er den expliziten Pfad zwischen der modellierten Schnittstelle und der realen Umgebung, in der diese Schnittstelle leben muss.
