# 5.9 The Stack :: Human Interface

## Ausführliche Besprechung

### Die implizite menschliche Grenze

**Human Interface** ist die implizite untere Grenze des Stacks. Es repräsentiert den Benutzer: die Person, die wahrnehmbare Ausgabe vom System empfängt und Handlungen erzeugt, die zu Interaktionseingabe werden können. Einfacher gesagt: Diese Schicht bist du.

Das klingt vielleicht offensichtlich, aber es ist wichtig. Der Stack existiert, um den Kommunikationsprozess zwischen einem Benutzer und einem Informationssystem zu beschreiben. Wenn Data Storage die Grenze erklärt, an der erhaltener Inhalt in den aktiven Fluss eintreten oder ihn verlassen kann, erklärt Human Interface die entgegengesetzte Grenze: den Ort, an dem Computerausgabe schließlich Teil menschlicher Erfahrung wird und an dem menschliche Handlung den Rückweg in das System beginnt.

Human Interface ist implizit, weil das Modell den Körper, Geist, die Aufmerksamkeit, Emotionen, Sinne, Absichten, Erinnerungen oder Entscheidungen des Benutzers nicht direkt repräsentiert. CatalystUI kann beschreiben, wie ein System Ausgabe zu einem Benutzer liefert und wie die Handlung eines Benutzers zu Interaktionseingabe wird, aber es behauptet nicht, den ganzen Menschen zu modellieren. Das wäre leicht ehrgeizig. Und auch erschreckend. Der Stack ist mächtig, aber er muss kein Psychologielehrbuch mit angehängtem Renderer werden.

### Der Empfänger wahrnehmbarer Ausgabe

Im Top-down-Fluss ist das Human Interface der Empfänger wahrnehmbarer Ausgabe. Digital Data wandert durch den expliziten Stack, wird interpretiert, geformt, organisiert, gerendert, durch ein Window geliefert und vom System getragen, bis sie schließlich wahrgenommen werden kann. Sobald diese Ausgabe die Sinne des Benutzers erreicht, hat der explizite Stack seinen abwärts gerichteten Weg abgeschlossen.

Das bedeutet nicht, dass der Benutzer Digital Data direkt empfängt. Eine Person nimmt Einsen und Nullen, Speicherbuffer, Zeichenaufrufe, Audiosamples oder Systemereignisse nicht natürlich wahr. Der Benutzer nimmt das Ergebnis der Systemarbeit wahr: Licht, Klang, Vibration, Bewegung, Text, räumliche Veränderung oder eine andere Form sensorischer Ausgabe. Das Human Interface ist der Ort, an dem diese Ausgabe nicht mehr nur geliefert wird, sondern erlebt wird.

Diese Unterscheidung hält das Modell ehrlich. Das System kann Ausgabe bereitstellen, aber es kann Verständnis nicht erzwingen. Ein Display kann einen Button zeigen, ein Lautsprecher kann einen Klang abspielen, und ein Gerät kann vibrieren, aber der Benutzer muss dieses Ergebnis immer noch als Mensch wahrnehmen und interpretieren. Das Modell erkennt diese Grenze an, ohne zu versuchen, jeden persönlichen, biologischen oder kontextuellen Faktor zu definieren. Anders gesagt: CatalystUI kann die Ausgabe zum Menschen bringen. Es kann den Menschen nicht dazu bringen, die Benachrichtigung nicht zu ignorieren. Leider.

### Die Quelle der Interaktion

Im Bottom-up-Fluss ist das Human Interface die Quelle von Handlung. Der Benutzer sieht, hört, fühlt, versteht, reagiert, entscheidet und tut dann etwas. Diese Handlung kann ein Tastendruck, eine Zeigerbewegung, das Berühren eines Bildschirms, das Sprechen eines Kommandos, das Drehen eines Knopfs, das Gehen durch ein Sensorfeld oder ein anderes Verhalten sein, das das System empfangen kann.

Die Handlung selbst beginnt außerhalb des expliziten Stacks. Das Modell beschreibt nicht direkt den vollständigen inneren Prozess, der den Benutzer zur Handlung geführt hat. Es beginnt den Rückweg erst zu modellieren, sobald das System die Wirkung dieser Handlung empfängt. An diesem Punkt wird die Handlung zu Interaktionseingabe und tritt in Layer 1: Systems ein, wo sie nach oben durch den Stack weitergegeben werden kann.

Das bewahrt eine klare Unterscheidung zwischen **menschlicher Handlung** und **Systeminteraktion**. Eine menschliche Handlung ist das, was der Benutzer tut. Interaktionseingabe ist das, was das System von dieser Handlung empfängt. Diese beiden Dinge sind eng verwandt, aber nicht identisch. Eine Person kann beabsichtigen, auf etwas zu klicken, und versehentlich auf etwas anderes klicken, oder eine Taste streifen, während sie nach etwas greift. Das System kann beides empfangen, aber nur eines davon ist wahrscheinlich ein bedeutungsvoller Ausdruck von Benutzerabsicht. Es sei denn, versehentliche Eingabe war das Ziel; in diesem Fall herzlichen Glückwunsch: Die Schnittstelle ist in eine sehr experimentelle Phase eingetreten.

### Warum die Schicht implizit ist

Human Interface ist aus demselben Grund implizit wie Data Storage: Es wird vom Fluss benötigt, aber nicht direkt als explizite Transformationsschicht modelliert. Der Stack hängt vom Benutzer ab, aber er transformiert den Benutzer nicht. Er parst den Benutzer nicht, rendert den Benutzer nicht, passt den Benutzer nicht an und speichert den Benutzer nicht als Component. Das ist wahrscheinlich besser so.

Stattdessen behandelt das Modell das Human Interface als lebendige Grenze am unteren Ende des Systems. Der explizite Stack kann beschreiben, wie Ausgabe vorbereitet und geliefert wird, und er kann beschreiben, wie empfangene Interaktion nach oben wandert. Er hört auf, bevor er Besitz über die menschliche Erfahrung selbst beansprucht.

Diese Grenze ist besonders wichtig, weil ein Benutzer nicht nur ein weiteres Gerät ist. Ein Display liefert visuelle Ausgabe. Eine Tastatur liefert Eingabesignale. Ein Benutzer nimmt wahr, interpretiert, wählt, reagiert, missversteht, lernt, zögert, macht Fehler und klickt manchmal mit vollem Selbstvertrauen auf den falschen Button. Das Modell sollte diesen Unterschied respektieren. Human Interface ist daher vorhanden, weil der Stack für menschliche Kommunikation gebaut ist, aber implizit, weil der Mensch nicht Teil des maschinenseitigen Transformationsprozesses ist.

### Wahrnehmung und Absicht

Das Human Interface vollendet den Kommunikationszyklus, indem es Wahrnehmung und Absicht verbindet. In die eine Richtung stellt das System etwas Wahrnehmbares bereit. In die andere Richtung antwortet der Benutzer mit einer Handlung. Dadurch entsteht die dialogische Schleife im Zentrum von CatalystUI: Das System spricht durch Ausgabe, der Benutzer antwortet durch Interaktion, und das System verarbeitet diese Antwort, um den Austausch fortzusetzen.

Deshalb kann das Human Interface nicht auf Eingabegeräte reduziert werden. Tastatur, Maus, Touchscreen, Mikrofon, Kamera oder Controller können helfen, Interaktion zu erfassen, aber keines davon ist der Benutzer. Sie sind systemzugängliche Pfade, durch die Benutzerhandlung in den Stack eintreten kann. Das Human Interface ist die Person, deren Wahrnehmung und Absicht diesen Signalen Bedeutung geben.

Dasselbe gilt für Ausgabegeräte. Ein Monitor, Lautsprecher, haptischer Motor oder anderes Ausgabegerät kann wahrnehmbare Daten tragen, aber das Gerät vollendet die Erfahrung nicht. Die Erfahrung wird vollendet, wenn der Benutzer das Ergebnis wahrnimmt. Ein Bildschirm voller perfekt gerenderter Pixel ist immer noch keine erfolgreiche Schnittstelle, wenn der Benutzer nicht sehen, verstehen, erreichen, hören, fühlen oder auf das reagieren kann, was bereitgestellt wurde.

### Beziehung zu Systems

Human Interface liegt direkt unter **Layer 1: Systems**. Die System-Schicht übernimmt die letzte explizite computerseitige Behandlung von Ausgabe und die erste explizite computerseitige Behandlung von Interaktion. Human Interface liegt jenseits dieser Schicht als Empfänger von Systemausgabe und Quelle von Benutzerhandlung.

Diese Beziehung definiert die untere Kante des Stacks. Im Top-down-Fluss liefert das System Ausgabe zum Benutzer. Im Bottom-up-Fluss empfängt das System die Wirkung der Handlung des Benutzers. Das System ist daher die letzte explizite Schicht maschinellen Betriebs, während Human Interface die implizite Grenze ist, an der maschineller Betrieb auf menschliche Erfahrung trifft.

Durch die Trennung dieser Schichten vermeidet das Modell, Geräteverhalten mit Benutzererfahrung zu verwechseln. Das System kann wissen, dass eine Taste gedrückt, ein Zeiger bewegt oder ein Klang abgespielt wurde. Es weiß nicht automatisch, was der Benutzer verstanden, beabsichtigt, gefühlt oder bemerkt hat. Diese menschlichen Wirklichkeiten liegen jenseits des expliziten Stacks, auch wenn der Stack existiert, um ihnen zu dienen.

### Barrierefreiheit und menschliche Variation

Human Interface erinnert das Modell außerdem daran, dass Benutzer keine austauschbaren Maschinen sind. Menschen nehmen durch unterschiedliche Fähigkeiten, Sinne, Kontexte, Werkzeuge, Einschränkungen, Vorlieben und Umgebungen wahr und handeln. Ein Benutzer kann sich hauptsächlich auf visuelle Ausgabe stützen. Ein anderer kann auf auditive Ausgabe, taktiles Feedback, Tastaturnavigation, Screenreader, Untertitel, reduzierte Bewegung, alternative Eingabegeräte oder andere Zugangsformen angewiesen sein.

Das ändert die Struktur des Stacks nicht. Es verdeutlicht, warum der Stack wichtig ist. Durch die Trennung der Schichten kann CatalystUI besser erkennen, wo ein Fehler auftritt, wenn Ausgabe geliefert, aber nicht bedeutungsvoll wahrnehmbar ist, oder wenn ein Benutzer Absicht hat, aber keinen nutzbaren Weg, sie auszudrücken. Die Human-Interface-Grenze hält den Zweck des gesamten Flusses sichtbar: Das System erzeugt nicht nur Ausgabe; es kommuniziert mit einer Person.

Diese Person kann müde, abgelenkt, brillant, verwirrt, behindert, lernend, multitaskend oder dabei sein, fünf Minuten vor einer Deadline etwas fertigzustellen. Die Schnittstelle muss ihr trotzdem als Mensch begegnen. Vorzugsweise ohne zu verlangen, dass sie zuerst eine vierzigseitige Fehlermeldung liest.

### Warum die Schicht wichtig ist

Human Interface verhindert, dass der Stack bei der Maschine endet. Ohne diese implizite Schicht würde das Modell bei Systemausgabe und Systemeingabe aufhören, als bestünde der Zweck einer Schnittstelle nur darin, Signale durch Hardware zu bewegen. Das würde den Punkt verfehlen. Der Zweck des Stacks besteht nicht nur darin, Ausgabe zu erzeugen; er besteht darin, Kommunikation zwischen einem Informationssystem und einem Benutzer möglich zu machen.

Durch die Trennung von Human Interface und Systems bewahrt das Modell eine klare letzte Grenze. Systems liefert Ausgabe und empfängt Eingabe. Human Interface nimmt Ausgabe wahr und erzeugt Handlung. Der explizite Stack beschreibt den maschinenseitigen Prozess zwischen diesen beiden Richtungen, während das implizite Human Interface daran erinnert, für wen dieser Prozess da ist.

Deshalb gehört Human Interface in den Stack, obwohl es nicht nummeriert ist. Der Benutzer ist keine Schicht, die implementiert, gerendert, geparst oder unit-getestet wird. Der Benutzer ist der Grund, warum die Schichten existieren. Und vorausgesetzt, der Benutzer ist menschlich, funktioniert das Modell wunderschön.
