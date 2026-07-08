<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 6.6 Connectors :: Native

## Uitgebreide bespreking

### Van windows naar systems

De **Native**-connector bevindt zich tussen **Layer 2: Windows** en **Layer 1: Systems**. Hij is verantwoordelijk voor het verbinden van het window met het onderliggende system, zodat output kan worden geleverd en interacties kunnen worden ontvangen via de werkelijke omgeving waarin het programma draait.

Layer 2 geeft de Stack een window: een begrensde view, container of leveringsplaats. Layer 1 geeft de Stack het system: de uitvoeringsomgeving, hardwaretoegang, services, apparaten en native gedragingen die het window mogelijk maken. De Native-connector biedt het kruispunt tussen deze twee lagen.

Deze connector is vaak de plaats waar de Stack de praktische werkelijkheid van computing het meest direct raakt. Tot dit punt heeft het Model informatie beschreven terwijl die door gestructureerde data, componenten, graphs, renderers en surfaces beweegt. Maar een window bestaat niet alleen door verbeelding. Iets moet het systeem vragen om het te maken, configureren, onderhouden, bijwerken en interacties erdoor terug te melden.

Dat iets is de Native-connector.

### Bindings definiëren

Een **binding** is een gecontroleerde verbinding tussen één laag en functionaliteit die door een andere laag wordt geleverd. In de context van de Native-connector stellen bindings systeemniveau-gedrag beschikbaar aan het window in een vorm die het programma kan gebruiken zonder dat het window het system zelf hoeft te worden.

Deze definitie is bewust eenvoudig. Een binding hoeft niet mysterieus te zijn. Het is de toegankelijke relatie tussen de code erboven en de functionaliteit eronder.

Een native binding kan de mogelijkheid bieden om een window te maken, de titel te wijzigen, toetsenbordinvoer te ontvangen, op pointerbeweging te reageren, het actieve gebied te vergroten of te verkleinen, focus aan te vragen, een apparaat te benaderen of met een systeemservice te communiceren. De details verschillen per systeem en implementatie, maar het concept blijft hetzelfde: de binding biedt een bruikbare verbinding met native functionaliteit.

Daarom zijn bindings op deze laag zo belangrijk. Het systeem kan krachtige mogelijkheden bieden, maar die mogelijkheden zijn niet automatisch beschikbaar in de taal of structuur die de rest van de Stack gebruikt. Ze moeten via een vorm van verbinding worden blootgelegd. De Native-connector is waar die verbindingen worden verzameld, gevormd en gebruikt.

### Native toegang leveren

In veel implementaties zal de Native-connector vooral bindings leveren naar lager gelegen systeemfunctionaliteit. Dat lijkt eerst misschien gewoon, vooral omdat ontwikkelaars al bekend zijn met native API’s, platformbibliotheken, besturingssysteemaanroepen, apparaatinterfaces en vergelijkbare tools. Binnen de Stack zijn dit echter niet zomaar willekeurige implementatiedetails. Het zijn de middelen waardoor Layer 2 toegang krijgt tot Layer 1.

Een grafisch window op een desktopbesturingssysteem kan bindings naar een platform-windowing-API vereisen. Een command-line interface kan bindings naar terminalinvoer en -uitvoer vereisen. Een gespecialiseerd apparaat kan bindings naar knoppen, sensoren, luidsprekers, lampen of andere door het systeem beheerde apparaten vereisen. In elk geval biedt de Native-connector de relatie waardoor het window binnen het system kan handelen.

Het belangrijkste is niet welk platform wordt gebruikt. Het belangrijkste is dat het window geen output kan leveren en geen interactie kan ontvangen tenzij het een manier heeft om te communiceren met het systeem dat het bevat.

De Native-connector biedt die manier.

### Meer dan een wrapper

Omdat deze connector vaak native gedrag blootlegt, kan het verleidelijk zijn om hem te beschrijven als een wrapper rond systeem-API’s. Die beschrijving kan in praktische contexten nuttig zijn, maar verklaart niet volledig wat de connector binnen het Model doet.

Een wrapper beschrijft hoe mensen zo’n laag vaak implementeren. Een binding beschrijft wat de connector werkelijk levert.

De Native-connector is niet slechts een hoop platformaanroepen onder het window. Hij is de formele relatie tussen het window en het system. Hij definieert hoe het window zijn systeemgedragen bestaan ontvangt, hoe systeemgedrag beschikbaar wordt voor de Stack, en hoe interacties die in het systeem ontstaan omhoog beginnen te bewegen.

Dit onderscheid is belangrijk omdat het Model niet probeert te bewaren hoe ontwikkelaars deze tools historisch hebben beschreven. Het probeert het onderliggende proces zelf te beschrijven. In dat proces is de Native-connector niet belangrijk omdat hij toevallig een native API wrappet. Hij is belangrijk omdat hij Layer 2 aan Layer 1 bindt.

Dat is wat deze connector werkelijk is.

### Het window maken en onderhouden

In de top-down stroom laat de Native-connector het window via het systeem werken. Een window moet mogelijk worden gemaakt, getoond, verborgen, vergroot of verkleind, verplaatst, gefocust, bijgewerkt of gesloten. Deze acties vereisen een relatie met het systeem, omdat het systeem de laag is die de omgeving levert waarin die acties kunnen plaatsvinden.

De Native-connector kan de bindings blootleggen die nodig zijn om die acties uit te voeren. Via hem kan Layer 2 systeemgedrag aanvragen zonder de volledige verantwoordelijkheid voor systeembeheer over te nemen. Het window blijft de begrensde leveringsplaats. Het systeem blijft de omgeving die de onderliggende functionaliteit biedt. De Native-connector draagt de relatie tussen beide.

Dit is vooral belangrijk omdat systemen verschillen. Verschillende besturingssystemen, apparaten, runtimes en omgevingen kunnen verschillende API’s en gedragingen bieden. De Native-connector geeft de Stack een plaats om die verschillen te vertegenwoordigen zonder de rest van het Model systeem-specifiek te maken.

### Interacties ontvangen

Omdat de Stack omkeerbaar is, is de Native-connector ook de eerste expliciete connector die betrokken is wanneer een interactie uit het systeem binnenkomt.

Een toetsaanslag, pointerbeweging, touch-input, controlleractie, apparaatsignaal, resize-event, focuswijziging of ander systeemgebeuren moet van Layer 1 naar Layer 2 oversteken voordat de rest van de Stack er iets mee kan doen. De Native-connector biedt die oversteek. Hij ontvangt of exposeert de interactie-informatie van het systeem en draagt die naar het window, waar zij via de Surface-connector verder omhoog kan gaan naar Renderers, en daarna via Bridge, Adapter, Parser en Data waar nodig.

In veel gevallen hoeft de Native-connector niet te beslissen wat de interactie betekent. Zijn taak is om de interactiebron van het systeem te binden aan het interactiepad van het window. Het systeem meldt dat er iets is gebeurd. De Native-connector maakt die melding bruikbaar voor Layer 2. De rest van de Stack kan de interactie daarna routen, transformeren en afhandelen volgens zijn eigen verantwoordelijkheden.

Zo blijft de onderste grens schoon. De Native-connector geeft interactie-invoer een weg de Stack in zonder dat het systeem de hogere lagen hoeft te begrijpen, en zonder dat de hogere lagen moeten doen alsof zij het systeem zijn.

### De grens behouden

Een Native-connector moet de grens tussen het window en het system behouden. Hij moet de systeemfunctionaliteit blootleggen die het window nodig heeft, maar hij mag het onderscheid tussen de twee lagen niet uitwissen.

Hier zijn bindings als concept bijzonder nuttig. Een binding geeft toegang zonder identiteit. Het window kan systeemfunctionaliteit gebruiken zonder het systeem te worden. Het systeem kan gedrag leveren zonder het window te worden. De connector definieert de relatie tussen beide.

Deze grens laat CatalystUI een window consistent beschrijven in verschillende omgevingen. Het ene systeem kan een traditioneel desktopwindow bieden. Een ander kan een terminal bieden. Een ander kan een apparaatspecifiek outputkanaal bieden. Een ander kan een remote of gevirtualiseerde omgeving bieden. De native bindings kunnen verschillen, maar de rol van de connector blijft hetzelfde.

De Native-connector bindt Layer 2 aan Layer 1 zodat het window kan bestaan, werken, interacties ontvangen en output leveren binnen het systeem dat het ondersteunt.

### Waarom de connector ertoe doet

De Native-connector voorkomt dat de Stack een window verwart met het systeem dat het levert. Zonder deze connector zouden Windows systeem-specifiek gedrag direct moeten bevatten, of Systems zouden het hogere concept van het window moeten begrijpen. Beide richtingen zouden de grens vervagen tussen de leveringsplaats en de omgeving die levering mogelijk maakt.

Door de Native-connector te definiëren, krijgt deze overgang een eigen plaats in het Model.

Windows blijven verantwoordelijk voor de begrensde context waardoor output en interactie passeren. Systems blijven verantwoordelijk voor de onderliggende omgeving, services, apparaten en native gedrag. De Native-connector handelt de binding tussen beide af.

Dit is de laatste expliciete connector van de Stack. Hier bereikt de gemodelleerde interface het systeem eronder. Het kan eruitzien als platformtoegang. Het kan worden geïmplementeerd via native libraries, besturingssysteemaanroepen, apparaat-API’s of runtime-services. Maar onder die vertrouwde beschrijvingen is het doel helderder en eenvoudiger.

De Native-connector levert bindings.

Hij bindt het window aan het system, waardoor output de Stack kan verlaten en interactie erin kan binnenkomen. Daarmee voltooit hij het expliciete pad tussen de gemodelleerde interface en de echte omgeving waarin die interface moet leven.
