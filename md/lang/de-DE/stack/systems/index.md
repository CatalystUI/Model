# 5.8 The Stack :: Systems

## Ausführliche Besprechung

### Die niedrigste explizite Schicht

**Systems** sind die niedrigste explizite Schicht des Stacks. Diese Schicht repräsentiert die Rechenumgebung, die die zugrunde liegenden Dienste, Geräte und Operationen bereitstellt, die nötig sind, damit Ausgabe geliefert und Interaktion empfangen werden kann. Während Layer 2 den begrenzten Kontext definiert, durch den Ausgabe und Interaktion passieren, repräsentiert Layer 1 die breitere Umgebung, die diesen Kontext möglich macht.

Ein System sollte nicht nur als Desktop-Betriebssystem verstanden werden. Im CatalystUI-Modell ist ein System die organisierte Menge von Prozessen und Plattformfähigkeiten, die die Schnittstelle zur Laufzeit unterstützt. Es kann ein traditionelles Betriebssystem, eine eingebettete Umgebung, eine Konsole, eine Browser-Laufzeit, eine Hardwareplattform oder ein anderer verwalteter Rechenkontext sein. Das bestimmende Merkmal ist nicht die Produktkategorie. Das bestimmende Merkmal ist, dass das System die niedrigeren Fähigkeiten bereitstellt, durch die die Schnittstelle tatsächlich arbeiten kann.

### Die Betriebsumgebung

Die System-Schicht stellt die umgebende Ausführungsumgebung für den expliziten Stack bereit. Sie kann Hardwarezugriff, Eingabegeräte, Ausgabegeräte, Treiber, Berechtigungen, Scheduling, Speicher, Dateien, Prozesse, Windows, Kanäle oder andere plattformnahe Dienste verwalten. Diese Details unterscheiden sich stark zwischen Implementierungen, erfüllen aber alle dieselbe konzeptuelle Rolle: Sie erlauben der Schnittstelle, sich mit den tatsächlichen Fähigkeiten der Maschine oder des Informationssystems zu verbinden.

Das unterscheidet Layer 1 von Layer 2. Ein Window ist ein begrenzter systemseitiger Kontext, den die Schnittstelle verwendet. Das System ist die breitere Umgebung, die diesen Kontext erzeugt, besitzt, erkennt, einschränkt und bedient. Das Window stellt einen spezifischen Verbindungspunkt bereit; das System stellt die Welt bereit, in der diese Verbindung existiert.

Deshalb ist die System-Schicht nicht nur ein passives Fundament. Sie nimmt aktiv am Schnittstellenzyklus teil. Sie liefert gerenderte Ausgabe Richtung physischer oder logischer Geräte, empfängt Eingabe von diesen Geräten, wendet Plattformregeln an und legt die Operationen offen, auf die die oberen Schichten angewiesen sind. Der Stack kann den Schnittstellenfluss beschreiben, aber das System liefert den operativen Boden unter diesem Fluss.

### Beziehung zu Windows

Systems und Windows sind eng verbunden, aber sie sind nicht dieselbe Schicht. Ein Window empfängt gerenderte Ausgabe von Layer 3 und stellt einen begrenzten Lieferkontext bereit. Das System empfängt diese windowgebundene Ausgabe und führt die niedrigere Arbeit aus, die nötig ist, um sie über verfügbare Geräte oder Dienste zu liefern.

Im Top-down-Fluss gibt das Window Ausgabe an das System weiter. Das System verarbeitet dann den tatsächlichen Lieferpfad: Es sendet visuelle Ausgabe zu einem Display, Audioausgabe zu einem Klanggerät, taktile Ausgabe zu einem haptischen Gerät, Textausgabe zu einem Terminal oder eine andere Ausgabeform zu ihrem passenden Kanal. Das Window definiert, wohin die Ausgabe gehört; das System trägt sie in die Umgebung, die sie wahrnehmbar machen kann.

Im Bottom-up-Fluss empfängt oder erkennt das System Interaktion von der menschlichen Seite der Schnittstelle. Diese kann über Tastatur, Zeiger, Touchscreen, Mikrofon, Controller, Sensor, Button oder einen anderen Eingabepfad kommen. Das System wandelt diese physische oder gerätebezogene Aktivität in ein systemseitiges Signal um, das mit einem Window verbunden und nach oben durch den Stack weitergegeben werden kann.

### Ausgabelieferung

Die System-Schicht ist die letzte explizite Phase des Top-down-Flusses. Wenn Ausgabe Layer 1 erreicht, haben die oberen Schichten bereits die ursprüngliche Repräsentation interpretiert, nutzbare Schnittstellenobjekte geformt, sie in einen aktuellen Betriebskontext organisiert, diesen Kontext in ausgabebereite Form gerendert und ihn durch ein Window weitergegeben. Das System führt nun die plattformnahe Arbeit aus, die nötig ist, um diese Ausgabe dem Human Interface verfügbar zu machen.

Das bedeutet nicht, dass das System selbst dasselbe ist wie die Wahrnehmung des Benutzers. Der Benutzer nimmt ein Betriebssystem nicht direkt wahr. Der Benutzer nimmt das physische oder sensorische Ergebnis wahr, das durch vom System verwaltete Geräte und Kanäle verfügbar gemacht wird. Layer 1 bleibt daher innerhalb des computerseitigen Prozesses, während das implizite Human Interface jenseits davon als Empfänger der Ausgabe liegt.

Diese Unterscheidung hält das Modell präzise. Das System kann Licht über ein Display, Klang über Lautsprecher, Vibration über einen Motor oder ein anderes wahrnehmbares Ergebnis über ein Gerät oder einen Dienst erzeugen. Das System stellt den letzten expliziten Liefermechanismus bereit; das Human Interface empfängt und nimmt das Ergebnis wahr.

### Ursprung der Interaktion

Die System-Schicht ist auch die erste explizite Phase des Bottom-up-Flusses. Ein Benutzer führt eine Handlung außerhalb des expliziten Stacks aus, aber das System ist der Ort, an dem diese Handlung der modellierten Schnittstelle als Interaktionseingabe verfügbar wird. Die menschliche Handlung selbst gehört zum impliziten Human Interface. Das System empfängt die Wirkung dieser Handlung über einen unterstützten Eingabepfad und beginnt, sie in etwas umzuwandeln, das der Stack verarbeiten kann.

Deshalb ist das System eng mit Interaktion verbunden. Ein physischer Tastendruck, eine Zeigerbewegung, eine Berührungsgeste, gesprochene Eingabe, ein Controllersignal oder eine Sensoränderung muss zuerst von der Rechenumgebung empfangen werden, bevor die oberen Schnittstellenschichten reagieren können. Das System bestimmt normalerweise nicht die endgültige Bedeutung dieser Interaktion. Es erkennt, dass etwas geschehen ist, liefert relevanten Geräte- oder Plattformkontext und gibt die Interaktion Richtung passendes Window weiter.

Von dort kann die Interaktion nach oben durch den Stack reisen. Das Window verbindet sie mit einem begrenzten Kontext, der Renderer kann helfen, sie zu übersetzen oder abzubilden, Graph und Frame können sie routen, und das passende Control kann sie schließlich verarbeiten. Das System beginnt den expliziten Rückweg, aber die Bedeutung der Handlung wird höher im Stack aufgelöst.

### Plattformregeln und Einschränkungen

Systems sind wichtig, weil jede Schnittstelle innerhalb von Einschränkungen arbeitet. Ein System kann bestimmen, welche Geräte verfügbar sind, wie Windows erzeugt werden, wie Eingabe geliefert wird, wie Berechtigungen gewährt werden, wie Ausgabekanäle sich verhalten, auf welche Ressourcen zugegriffen werden kann und welche Operationen unterstützt werden. Diese Einschränkungen prägen, was der Rest des Stacks tun kann.

CatalystUI trennt diese Plattformfragen jedoch vom oberen Schnittstellenmodell. Components sollten nicht jedes Treiber- oder Betriebssystemdetail direkt verstehen müssen. Renderers sollten nicht jedes Hardwaredetail verwalten müssen. Windows sollten nicht die gesamte Plattform repräsentieren müssen. Layer 1 bietet einen klaren Ort für systemnahes Verhalten, sodass die oberen Schichten auf Interpretation, Nutzbarkeit, Organisation und Transformation fokussiert bleiben können.

Diese Trennung erlaubt dem Modell außerdem, über verschiedene Umgebungen hinweg zu gelten. Eine Desktop-Anwendung, mobile App, ein eingebettetes Gerät, eine browserbasierte Schnittstelle, ein Kommandozeilenwerkzeug oder ein spezialisiertes Hardwaresystem können alle unterschiedliche Plattformregeln haben, brauchen aber dennoch jeweils eine System-Schicht, die die operative Umgebung unter der Schnittstelle bereitstellt.

### Beziehung zum Human Interface

Systems liegen direkt über dem impliziten **Human Interface**. Das bedeutet, Layer 1 ist die letzte explizite Schicht, bevor Ausgabe den modellierten computerseitigen Fluss verlässt, und die erste explizite Schicht, nachdem Benutzerhandlung in ihn eintritt. Das System ist daher die Grenze zwischen der verwalteten Rechenumgebung und dem Menschen, der wahrnimmt und handelt.

Diese Grenze ist wesentlich. Das Modell kann beschreiben, wie ein System Ausgabe zu einem Gerät sendet, aber es modelliert nicht direkt die sensorische Erfahrung, Biologie, Aufmerksamkeit, Emotion oder Interpretation des Benutzers. Ebenso kann das Modell beschreiben, wie das System ein Eingabesignal empfängt, aber es modelliert nicht direkt den vollständigen menschlichen Prozess, der die Handlung erzeugt hat. Diese Anliegen gehören zum impliziten Human Interface.

Indem Systems als Layer 1 platziert wird, identifiziert der Stack klar den niedrigsten expliziten Punkt, an dem der computerseitige Prozess beschrieben werden kann, bevor er in menschliche Wahrnehmung und Handlung übergeht.

### Warum die Schicht wichtig ist

Systems halten den Stack im realen Betrieb geerdet. Ohne diese Schicht würde das Modell Rendering und Windows so beschreiben, als würden Ausgabelieferung und Eingabeempfang automatisch geschehen. In der Praxis hängt jede Schnittstelle von einer zugrunde liegenden Umgebung ab, die Geräte, Ressourcen, Berechtigungen, Ausführung und Plattformverhalten verwaltet.

Durch die Trennung von Systems, Windows und Human Interface bewahrt das Modell eine klare letzte Grenze. Windows stellen den begrenzten Kontext für Ausgabe und Interaktion bereit. Systems stellen die zugrunde liegende operative Umgebung bereit, die Ausgabe liefert und Eingabe empfängt. Das Human Interface nimmt die Ausgabe wahr und erzeugt Handlung. Diese Unterscheidung erlaubt CatalystUI, Schnittstellen über Plattformen und Domains hinweg zu beschreiben, ohne das System auf ein einzelnes Betriebssystem, ein bestimmtes Gerät oder ein visuelles Display-Modell zu reduzieren.
