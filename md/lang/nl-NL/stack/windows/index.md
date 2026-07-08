<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 5.7 The Stack :: Windows

## Uitgebreide bespreking

### De view in het system

**Windows** is Layer 2 van de Stack. Deze laag vertegenwoordigt een begrensde view, container, context of leveringsplaats waardoor output het system kan binnengaan en interaction uit het system de interface kan bereiken. In gewone taal denken mensen bij een window vaak aan een grafisch venster op een desktop. In CatalystUI is het concept breder.

Een window is elke systeemgerichte context waarin de gebruiker input kan geven of output kan ontvangen. Dit kan een traditioneel applicatievenster zijn, een terminal, een audio-outputcontext, een capture device, een embedded display, een tactile channel of een andere interfaceboundary. De vorm kan verschillen; de verantwoordelijkheid blijft dezelfde.

### Niet alleen een rechthoek

Een grafisch window is een bekend voorbeeld, maar het is niet de definitie. Een interface hoeft niet visueel te zijn om een window nodig te hebben. Een auditory window kan een outputkanaal vertegenwoordigen waar geluid doorheen wordt geleverd. Een command-line window kan tekstinput en -output bieden. Een apparaatwindow kan een bounded context zijn waarin sensoren, lampen, knoppen of speakers samenwerken.

Het woord “window” beschrijft dus niet alleen een visuele rechthoek. Het beschrijft de view of boundary waardoor de Stack met het system communiceert. Dit maakt de laag bruikbaar over domains heen.

### Relatie met Renderers

Windows ontvangen output-ready representatie van **Layer 3: Renderers** via de Surface-connector. De renderer transformeert voorbereide interfaceinformatie naar output-ready vorm. Het window biedt de plaats of het kanaal waar die output heen kan. Een renderer kan output maken, maar zonder window heeft die output geen system-facing bestemming.

Deze scheiding maakt verschillende combinaties mogelijk. Een visual renderer kan een grafisch window targeten. Een auditory renderer kan een audio-outputcontext targeten. Een tactile renderer kan een haptic device context targeten. De implementatie kan verschillen per system en domain, maar de layered responsibility blijft consistent.

### Relatie met het System

Windows hangen af van **Layer 1: Systems**, omdat zij meestal door het omliggende platform worden gemaakt, beheerd, beperkt of herkend. Een system kan bepalen hoe windows worden gemaakt, hoe ze input ontvangen, welke outputchannels ze blootleggen, welke resources ze mogen gebruiken en hoe ze met hardware of lagere services interageren.

Dit maakt het window niet hetzelfde als het system. Het system is de bredere operating environment met hardwaretoegang, device services, scheduling, permissions, drivers en platform behavior. Het window is een begrensde logische context binnen die omgeving. Het is de interface-facing context die output en interaction tussen de Stack en het system laat passeren.

Door Windows van Systems te scheiden, voorkomt het Model dat elk platformdetail deel wordt van de interfaceboundary. Het window vertegenwoordigt de specifieke system-facing context die door de interface wordt gebruikt. Het system vertegenwoordigt de grotere omgeving die die context mogelijk maakt.

### Outputlevering

In top-down flow ontvangt het window output-ready representatie van de renderer en geeft die door richting het system. Dit is de fase waarin gerenderde output niet langer alleen door de interface is voorbereid; zij wordt toegewezen aan een delivery context die het system kan gebruiken.

Het window kan bounds, focus, buffering, visibility, channel state of andere delivery conditions beheren, afhankelijk van domain en implementatie. Deze details beïnvloeden hoe output het system binnengaat, maar veranderen de hoofdrol van de laag niet. Het window biedt de boundary waardoor rendered output system output kan worden.

Zodra output door het window gaat, kan het system haar dragen naar het relevante device, service of fysieke proces waardoor de gebruiker haar kan waarnemen. Het window staat dus dicht bij waarneembaarheid, maar is niet waarneming zelf. Het blijft deel van de computerzijde van de stroom.

### Interaction entry

In bottom-up flow is het window de eerste expliciete Stack-laag waar system-provided interaction beschikbaar wordt voor de gemodelleerde interface. Het system kan een key press, pointer movement, touch event, device signal, audio command of andere vorm van input detecteren. Het window ontvangt die interaction binnen zijn eigen begrensde context en geeft haar omhoog door voor verdere routing en handling.

Dit maakt het window centraal voor interaction omdat het context aan de actie geeft. Een interaction is niet alleen dat er iets gebeurde, maar dat het binnen een bepaalde system-facing boundary gebeurde. Focus, position, timing, device source, channel of active context kan bepalen hoe de rest van de Stack de interaction moet begrijpen en routen.

Het window beslist meestal niet de uiteindelijke betekenis van de interaction. Die verantwoordelijkheid ligt hoger in de Stack, vooral wanneer de interaction de juiste control bereikt. De rol van het window is om de interaction uit het system te ontvangen, haar met de juiste boundary te verbinden en haar omhoog door te geven in een vorm die de rest van de Stack kan verwerken.

### Domain-onafhankelijkheid

Windows zijn domain-onafhankelijk op dezelfde manier als de rest van de Stack. Het woord “window” wordt vaak met graphics geassocieerd, maar in CatalystUI verwijst het naar elke begrensde system-facing context voor output en interaction. Het domain bepaalt welk soort output en input het window draagt; de Stackpositie bepaalt welke rol het window vervult.

Dit laat dezelfde laag grafische windows, textsessies, audiochannels, tactile outputcontexts en andere vormen van interfacedelivery beschrijven zonder het Model te veranderen.

### Waarom de laag ertoe doet

Windows voorkomen dat de Stack doet alsof gerenderde output automatisch de gebruiker bereikt. Een renderer kan interface state omzetten naar output-ready form, maar die output heeft nog steeds een system-facing context nodig. Layer 2 levert die context.

Door Windows te scheiden van zowel Renderers als Systems, bewaart het Model een schoon delivery path. Renderers transformeren voorbereide interface state naar output-ready representation. Windows bieden de begrensde context waardoor die representation het system binnengaat. Systems voeren daarna het lagere werk uit dat nodig is om output te leveren en input te ontvangen.
