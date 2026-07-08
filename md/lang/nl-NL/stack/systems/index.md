<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 5.8 The Stack :: Systems

## Uitgebreide bespreking

### De omgeving onder de interface

**Systems** is Layer 1 van de Stack. Deze laag vertegenwoordigt de onderliggende omgeving, services, devices en processen die output uiteindelijk leveren en input ontvangen. In veel moderne computers is dit een operating system zoals Windows, macOS, Linux, Android of iOS. In andere contexten kan het een embedded controller, firmwareomgeving, runtime, hardwareplatform, mechanisch systeem of gespecialiseerde informatieomgeving zijn.

Het system is de laag die de interface verbindt met de praktische werkelijkheid waarin zij draait. Het biedt toegang tot hardware, devices, scheduling, permissions, input sources, output targets, memory, files, drivers, services en platform behavior. Zonder een system heeft de interface geen omgeving waarin zij kan bestaan.

### Meer dan een besturingssysteem

Hoewel “system” vaak aan een OS doet denken, is het concept breder. Een automatische deur heeft een system dat sensoren, motoren, stroom en besturingslogica omvat. Een embedded medical device heeft een system dat zijn hardware, firmware en veiligheidsprocessen omvat. Een gameconsole, browser runtime of terminalomgeving kan ook als system dienen binnen de beschreven flow.

Daarom gebruikt CatalystUI het woord system om de omgeving zelf te beschrijven, niet alleen een specifieke softwarelaag. Het system is wat uiteindelijk output naar de wereld brengt en input uit de wereld ontvangt.

### Relatie met Windows

Systems staan onder **Layer 2: Windows**. Een window is de begrensde view of delivery context die de interface gebruikt. Het system is de grotere omgeving die dat window mogelijk maakt. Het system kan windows maken, beheren, focus geven, verplaatsen, beperken, sluiten of met apparaten verbinden. Het kan ook inputevents genereren die via het window de Stack binnenkomen.

De Native-connector verzorgt de verbinding tussen Window en System. Via native bindings kan een window system behavior gebruiken zonder het system zelf te worden. Deze scheiding is belangrijk omdat platformdetails anders gemakkelijk door de hele interface zouden lekken.

### Output naar de gebruiker brengen

In top-down flow ontvangt het system output via het window en voert het de lagere stappen uit die nodig zijn om die output waarneembaar te maken. In een grafische omgeving kan dit betekenen dat pixels via drivers en displayhardware worden weergegeven. In een audioomgeving kan het betekenen dat audiobuffers via drivers naar speakers gaan. In een fysieke omgeving kan het betekenen dat een motor beweegt, een lamp brandt of een apparaat trilt.

Het system is dus de laag waar gemodelleerde output de bredere omgeving binnengaat. Het is dicht bij de Human Interface, maar het is nog steeds niet de gebruiker. Het system levert de output; de gebruiker neemt die waar.

### Input ontvangen

In bottom-up flow is het system de eerste expliciete laag waar acties uit de wereld als input worden gedetecteerd. Een toets wordt ingedrukt. Een muis beweegt. Een sensor detecteert beweging. Een microfoon ontvangt geluid. Een controllerknop wordt geactiveerd. Het system ontvangt of detecteert deze gebeurtenis en maakt haar beschikbaar aan het juiste window.

Het system hoeft de volledige gebruikersintentie niet te begrijpen. Het hoeft alleen te detecteren dat er een actie of signaal is en dat die aan een context kan worden gekoppeld. De hogere lagen van de Stack kunnen daarna bepalen wat de interaction betekent.

### Systemverschillen

Systems verschillen sterk. Verschillende platforms bieden verschillende APIs, constraints, permissions, event models, rendering paths en device capabilities. Het Model erkent deze verschillen zonder de hele Stack systeem-specifiek te maken. Door Systems als Layer 1 te definiëren en de Native-connector als overgang te gebruiken, kunnen platformverschillen aan de onderkant worden behandeld terwijl hogere lagen hetzelfde conceptuele patroon behouden.

Dit is een van de redenen waarom CatalystUI nuttig is voor cross-platform denken. Het Model doet niet alsof alle systems identiek zijn. Het geeft een plaats waar hun verschillen horen.

### Waarom de laag ertoe doet

Systems voorkomen dat de Stack zweeft zonder uitvoeringsomgeving. Een interface kan data interpreteren, components organiseren en output renderen, maar uiteindelijk moet iets die output leveren en input ontvangen. Layer 1 vertegenwoordigt dat iets.

Door Systems van Windows en de Human Interface te scheiden, bewaart het Model een heldere grens. Het system is de omgeving die delivery mogelijk maakt. Het window is de specifieke context waardoor delivery en input passeren. De human interface is de gebruiker die output waarneemt en reageert. Deze scheiding helpt het Model zowel gewone software als gespecialiseerde systemen beschrijven zonder alles tot een desktop-OS te reduceren.
