# 5.4 The Stack :: Components, Controls, & Layouts

## Ausführliche Besprechung

### Die erste veränderliche Schnittstellenschicht

**Components, Controls, & Layouts** ist die Schicht, in der interpretierte Struktur zu nutzbarem Schnittstellenmaterial wird. Layer 6 erklärt, was eine Repräsentation bedeutet und wie sie organisiert ist; Layer 5 verwandelt diese stabile Interpretation in veränderliche Objekte, die angeordnet, aktualisiert, interaktiv genutzt und für den Rest des Stacks vorbereitet werden können.

Dies ist die erste Schicht, in der das Modell beginnt, die Schnittstelle als etwas aktiv Nutzbares zu beschreiben und nicht nur als etwas Verstandenes. Eine Structure kann die Bedeutung einer Ressource erklären, aber ein Benutzer interagiert nicht direkt mit einer Structure. Die Schnittstelle braucht Objekte, die Werte offenlegen, auf Absicht reagieren, temporären Zustand halten und an einer größeren Anordnung teilnehmen können. Layer 5 stellt diese Objekte bereit.

### Von Interpretation zu Nutzung

Die Grenze zwischen **Structure & Semantics** und **Components, Controls, & Layouts** ist die Grenze zwischen interpretierter Form und nutzbarer Form. Layer 6 erzeugt ein stabiles Verständnis des Inhalts. Layer 5 passt dieses Verständnis in eine Form an, mit der die Schnittstelle im aktiven Betrieb arbeiten kann.

Diese Unterscheidung ist wichtig, weil interpretierte Struktur und Schnittstellenverhalten nicht dieselbe Verantwortung sind. Eine Structure kann erkennen, dass ein Wert existiert, wohin er gehört und welche Regeln ihn steuern. Eine Component kann diesen Wert als etwas Anpassbares, Darstellbares, Abspielbares, Auswählbares, Bearbeitbares oder anderweitig Nutzbares offenlegen. Die Structure erklärt den Inhalt; die Component gibt der Schnittstelle eine Möglichkeit, mit ihm zu arbeiten.

Layer 5 ist daher nicht bloß eine visuelle Schicht. Components, Controls und Layouts können in jeder Domain existieren. Eine Component kann Text, Klang, haptisches Feedback, ein Kommando, einen Dokumentabschnitt, eine Medienressource oder jedes andere nutzbare Stück einer Schnittstelle repräsentieren. Die Schicht wird nicht dadurch definiert, wie das Objekt später wahrgenommen wird, sondern dadurch, dass es eine veränderliche Schnittstellenform bereitstellt, die aus interpretiertem Inhalt gebaut wurde.

### Components

Eine **Component** ist ein logischer, veränderlicher Teil der Schnittstelle, der aus interpretierter Struktur erstellt oder mit ihr verbunden ist. Sie kann ein Bild, Label, einen Audiotrack, ein Stilelement, Kommando, einen Dokumentabschnitt, eine Medienressource oder ein anderes nutzbares Stück der Schnittstelle repräsentieren. Während eine Structure vor allem mit stabiler Bedeutung befasst ist, ist eine Component mit aktiver Nutzung befasst.

Eine Component kann Eigenschaften, Methoden, Zustand oder Verhalten offenlegen, die den zugrunde liegenden Inhalt leichter handhabbar machen. Sie kann Werte bereitstellen, die gelesen oder geändert werden können, Operationen, die ausgeführt werden können, oder Zustand, der verfolgt werden kann, während die Schnittstelle aktiv ist. Dadurch kann der Rest des Stacks mit bedeutungsvollen Objekten arbeiten, statt wiederholt rohe Repräsentationen oder unveränderliche Strukturen zu handhaben.

Entscheidend ist, dass eine Component die exakte Form der ursprünglichen Ressource nicht bewahren muss. Sie kann sie vereinfachen, Teile davon kombinieren, nur einen bestimmten Ausschnitt offenlegen oder eine bequemere Schnittstelle darüber bereitstellen. Layer 5 darf praktisch sein, weil seine Rolle nicht darin besteht, die ursprüngliche Bedeutung des Inhalts zu definieren. Seine Rolle besteht darin, diese Bedeutung nutzbar zu machen.

### Controls

Ein **Control** ist eine Component, die Interaktion verarbeitet. Es empfängt geroutete Interaktion aus unteren Schichten des Stacks und bestimmt, was als Reaktion geschehen soll. Dadurch werden Controls zu einem der wichtigsten Treffpunkte zwischen der benutzerseitigen und der inhaltsseitigen Seite der Schnittstelle.

Controls sind dafür verantwortlich, Interaktion in bedeutungsvolles Schnittstellenverhalten zu verwandeln. Ein Control kann einen Wert aktualisieren, eine Operation auslösen, Zustand ändern, eine neue Repräsentation anfordern oder überhaupt keine Änderung erzeugen. Die zentrale Unterscheidung ist, dass ein Control nicht nur als Teil der Schnittstelle existiert; es beteiligt sich an der Fähigkeit des Benutzers, auf das System einzuwirken.

Da Controls Components sind, teilen sie deren veränderliche Natur. Ihre bestimmende Verantwortung ist jedoch die Verarbeitung von Interaktion. Eine Component kann ein nutzbares Objekt repräsentieren, ohne direkt auf Benutzerabsicht zu reagieren. Ein Control repräsentiert ein nutzbares Objekt, das diese Absicht innerhalb des Schnittstellenflusses empfangen, interpretieren und darauf handeln kann.

### Layouts

Ein **Layout** ist eine Component, die andere Components, einschließlich Controls, gemäß einer Form von Ordnung, Beziehung oder Platzierungsregel anordnet. In visuellen Schnittstellen kann dies als räumliche Anordnung erscheinen. In anderen Domains kann Layout eine Abfolge, Gruppierung, Priorität, Timing, Kategorie, Routing oder eine andere organisatorische Beziehung beschreiben.

Layouts sind wichtig, weil nutzbare Schnittstellenobjekte selten isoliert existieren. Components brauchen Kontext. Sie müssen möglicherweise geordnet, gruppiert, ausgerichtet, geschichtet, sequenziert oder anderweitig zueinander in Beziehung gesetzt werden, bevor sie klar an der Erfahrung des Benutzers teilnehmen können. Ein Layout stellt diese relationale Struktur bereit, ohne zum obersten Manager der gesamten Schnittstelle zu werden.

Dies trennt Layouts von Graphs. Ein Layout ordnet Components gemäß einer bestimmten Regel oder einem bestimmten Muster an. Ein Graph verwaltet umfassendere Entdeckung, Organisation, Beziehungen und Lebenszyklen in einem größeren Schnittstellenkontext. Layer 5 stellt die Layout-Objekte selbst bereit; Layer 4 bestimmt, wie diese Objekte am größeren Betriebsrahmen teilnehmen.

### Veränderlichkeit und aktiver Zustand

Layer 5 ist veränderlich, weil Schnittstellen aktiv sind. Sobald interpretierter Inhalt Teil einer Schnittstelle wird, muss er möglicherweise auf Änderungen in Benutzerabsicht, Systemzustand, Timing, Fokus, Auswahl, Sichtbarkeit, Wiedergabe, Eingabe oder anderen Live-Bedingungen reagieren. Components, Controls und Layouts bieten einen Ort, an dem diese aktiven Änderungen stattfinden können.

Das bedeutet nicht, dass Layer 5 die stabile Interpretation von Layer 6 ersetzt. Stattdessen baut er auf ihr auf. Eine Component kann vorübergehend einen geänderten Wert halten, ein Control kann eine Bearbeitung verarbeiten oder ein Layout kann Anordnung neu berechnen, aber diese Änderungen bleiben weiterhin mit der interpretierten Bedeutung unter ihnen verbunden. Wenn eine Änderung Teil der behaltenen Ressource werden muss, kann der Fluss wieder nach oben durch Structure & Semantics und Digital Data wandern.

Veränderlichkeit erlaubt Layer 5 außerdem, temporäre Schnittstellenbedingungen zu repräsentieren, die vielleicht nie gespeichert werden. Ein ausgewähltes Element, ein aufgeklappter Abschnitt, eine Wiedergabeposition, ein Hover-Zustand, ein Fokusziel oder eine ausstehende Bearbeitung kann für die aktive Schnittstelle sehr wichtig sein, selbst wenn sie nie Teil dauerhafter Speicherung wird. Layer 5 gibt dem Stack einen klaren Ort, um diese Live-Bedingungen zu beschreiben.

### Rolle im Top-down-Fluss

Im Top-down-Fluss empfängt Components, Controls, & Layouts interpretierte Struktur und verwandelt sie in nutzbare Schnittstellenobjekte. Der Stack ist über das Wissen hinausgegangen, was der Inhalt bedeutet, und beginnt nun, diesen Inhalt für Interaktion, Organisation und spätere Präsentation vorzubereiten.

In dieser Phase kann die Schnittstelle entscheiden, welche Teile des interpretierten Inhalts zu Components werden sollen, welche Components Interaktion verarbeiten können sollen und wie diese Components angeordnet werden sollen. Das Ergebnis ist noch kein gerenderter Frame oder Systemoutput. Es ist ein aktives Schnittstellenmodell, das von Layer 4 organisiert und schließlich für das Rendering vorbereitet werden kann.

### Rolle im Bottom-up-Fluss

Im Bottom-up-Fluss ist Layer 5 der Ort, an dem geroutete Interaktion zu bedeutungsvollem Verhalten wird. Untere Schichten können eine Handlung erkennen, übersetzen und routen, aber ein Control ist der Ort, an dem diese Handlung schließlich in Bezug auf das betroffene Schnittstellenobjekt verstanden wird.

Wenn ein Control eine Interaktion verarbeitet, kann es Component-Zustand aktualisieren, eine Layout-Änderung anfordern, ein Kommando auslösen oder eine Modifikation erzeugen, die zurück Richtung Structure & Semantics wandern muss. Wenn diese Modifikation den zugrunde liegenden Inhalt betrifft, kann Layer 6 die Änderung gemäß den relevanten semantischen Regeln validieren und organisieren, bevor sie wieder zu Digital Data wird. Auf diese Weise dient Layer 5 als aktiver Umwandlungspunkt zwischen Benutzerabsicht und Schnittstellenzustand.

### Beziehung zu Graphs & Frames

Layer 5 erzeugt die nutzbaren Schnittstellenobjekte, dient aber nicht als vollständige Umgebung, in der diese Objekte operieren. Diese Verantwortung gehört zu **Layer 4: Graphs & Frames**. Components, Controls und Layouts brauchen einen breiteren Kontext, der sie organisieren, abfragen, zwischen ihnen routen, sie für das Rendering vorbereiten und die Grenzen definieren kann, innerhalb derer sie teilnehmen.

Diese Beziehung hält das Modell sauber. Layer 5 definiert die Objekte der aktiven Schnittstelle. Layer 4 verwaltet ihre größere Organisation und bereitet sie für die unteren Schichten des Stacks vor. Eine Component sollte wissen, wie sie ihren eigenen nutzbaren Zustand repräsentiert und verwaltet; Graph und Frame sollten wissen, wie diese Component in den weiteren Schnittstellenfluss passt.

### Warum die Schicht wichtig ist

Components, Controls, & Layouts verhindert, dass der Stack direkt von Interpretation zu Rendering springt. Ein System kann keine klare Schnittstelle bauen, indem es Inhalte nur versteht und sofort Ausgabe erzeugt. Es muss eine Schicht geben, in der dieser interpretierte Inhalt nutzbar, veränderlich, anordenbar und reaktionsfähig für Interaktion wird.

Durch die Trennung von Layer 5 sowohl von Structure & Semantics als auch von Graphs & Frames bewahrt das Modell eine präzise Verantwortungsfolge. Structure & Semantics definiert stabile Bedeutung. Components, Controls, & Layouts verwandelt diese Bedeutung in aktive Schnittstellenobjekte. Graphs & Frames organisiert diese Objekte in einen größeren Betriebskontext. Diese Trennung erlaubt CatalystUI, Schnittstellen über Domains hinweg zu beschreiben, ohne sie auf visuelle Widgets, rohe Strukturen oder renderer-spezifische Kommandos zu reduzieren.
