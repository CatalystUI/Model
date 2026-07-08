<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 5.4 The Stack :: Components, Controls, & Layouts

## Uitgebreide bespreking

### De eerste veranderlijke interfacelaag

**Components, Controls, & Layouts** is de laag waar geïnterpreteerde structure bruikbaar interfacemateriaal wordt. Layer 6 legt uit wat een representatie betekent en hoe zij is georganiseerd; Layer 5 zet die stabiele interpretatie om in veranderlijke objecten die kunnen worden gerangschikt, bijgewerkt, gebruikt voor interaction en voorbereid voor de rest van de Stack.

Dit is de eerste laag waar het Model de interface begint te beschrijven als iets actief bruikbaars in plaats van alleen begrepen. Een structure kan de betekenis van een resource uitleggen, maar een gebruiker interageert niet rechtstreeks met een structure. De interface heeft objecten nodig die waarden kunnen blootleggen, op intentie kunnen reageren, tijdelijke toestand kunnen bijhouden en aan een grotere ordening kunnen deelnemen. Layer 5 levert die objecten.

### Van interpretatie naar gebruik

De grens tussen **Structure & Semantics** en **Components, Controls, & Layouts** is de grens tussen geïnterpreteerde vorm en bruikbare vorm. Layer 6 produceert een stabiel begrip van de inhoud. Layer 5 zet dat begrip om in een vorm waarmee de interface tijdens actieve werking kan werken.

Dit onderscheid is belangrijk omdat geïnterpreteerde structure en interfacegedrag niet dezelfde verantwoordelijkheid zijn. Een structure kan identificeren dat een waarde bestaat, waar die thuishoort en welke regels ervoor gelden. Een component kan die waarde blootleggen als iets dat verstelbaar, weergeefbaar, afspeelbaar, selecteerbaar, bewerkbaar of anderszins bruikbaar is. De structure verklaart de inhoud; de component geeft de interface een manier om ermee te werken.

Layer 5 is daarom niet slechts een visuele laag. Components, controls en layouts kunnen in elk domain bestaan. Een component kan tekst, geluid, haptische feedback, een command, een documentsectie, een mediaresource of elk ander bruikbaar stuk van een interface vertegenwoordigen. Wat de laag definieert, is niet hoe het object uiteindelijk wordt waargenomen, maar dat het een veranderlijke interfacevorm biedt die uit geïnterpreteerde inhoud is opgebouwd.

### Components

Een **component** is een logisch, veranderlijk deel van de interface dat is gemaakt uit, of gekoppeld aan, geïnterpreteerde structure. Het kan een afbeelding, label, audiotrack, stijlelement, command, documentsectie, mediaresource of ander bruikbaar stuk van de interface vertegenwoordigen. Waar een structure vooral over stabiele betekenis gaat, gaat een component over actief gebruik.

Een component kan properties, methods, state of behavior blootleggen die de onderliggende inhoud gemakkelijker te behandelen maken. Hij kan waarden bieden die gelezen of gewijzigd kunnen worden, operaties die kunnen worden uitgevoerd, of toestand die kan worden gevolgd terwijl de interface actief is. Daardoor kan de rest van de Stack met betekenisvolle objecten werken in plaats van steeds ruwe representaties of immutable structures te behandelen.

Het belangrijke punt is dat een component niet exact dezelfde vorm hoeft te bewaren als de oorspronkelijke resource. Hij mag die vereenvoudigen, delen combineren, slechts een specifiek gedeelte blootleggen of een handiger interface erboven bieden. Layer 5 mag praktisch zijn omdat haar taak niet is de oorspronkelijke betekenis van de inhoud te definiëren. Haar taak is die betekenis bruikbaar te maken.

### Controls

Een **control** is een component die interaction afhandelt. Hij ontvangt geroute interaction uit lagere lagen van de Stack en bepaalt wat er als reactie moet gebeuren. Daardoor zijn controls een van de belangrijkste ontmoetingspunten tussen de user-facing kant van de interface en de content-facing kant van de interface.

Controls zijn verantwoordelijk voor het omzetten van interaction naar betekenisvol interfacegedrag. Een control kan een waarde bijwerken, een operatie starten, state veranderen, een nieuwe representatie aanvragen of helemaal geen verandering veroorzaken. Het sleutelverschil is dat een control niet alleen als deel van de interface bestaat; hij neemt deel aan het vermogen van de gebruiker om op het systeem te handelen.

Omdat controls components zijn, delen zij dezelfde veranderlijke aard. Hun bepalende verantwoordelijkheid is echter interaction handling. Een component kan een bruikbaar object vertegenwoordigen zonder direct op user intent te reageren. Een control vertegenwoordigt een bruikbaar object dat die intentie binnen de interfacestroom kan ontvangen, interpreteren en uitvoeren.

### Layouts

Een **layout** is een component die andere components, inclusief controls, rangschikt volgens een vorm van volgorde, relatie of plaatsingsregel. In visuele interfaces kan dit ruimtelijke ordening zijn. In andere domains kan layout sequence, grouping, priority, timing, category, routing of een andere organisatorische relatie beschrijven.

Layouts doen ertoe omdat bruikbare interfaceobjecten zelden geïsoleerd bestaan. Components hebben context nodig. Ze moeten mogelijk worden geordend, gegroepeerd, uitgelijnd, gelaagd, gesequenced of anderszins gerelateerd voordat ze duidelijk kunnen deelnemen aan de ervaring van de gebruiker. Een layout biedt die relationele structuur zonder de top-level manager van de hele interface te worden.

Dit scheidt layouts van graphs. Een layout rangschikt components volgens een specifieke regel of pattern. Een graph beheert bredere discovery, organization, relationships en lifecycle binnen een grotere interfacecontext. Layer 5 levert de layoutobjecten zelf; Layer 4 bepaalt hoe die objecten deelnemen aan het grotere operationele frame.

### Mutability en actieve state

Layer 5 is mutable omdat interfaces actief zijn. Zodra geïnterpreteerde inhoud deel wordt van een interface, moet zij mogelijk reageren op veranderingen in user intent, system state, timing, focus, selection, visibility, playback, input of andere live conditions. Components, controls en layouts bieden een plaats waar die actieve wijzigingen kunnen plaatsvinden.

Dit betekent niet dat Layer 5 de stabiele interpretatie van Layer 6 vervangt. Zij bouwt erop voort. Een component kan tijdelijk een gewijzigde waarde vasthouden, een control kan een bewerking verwerken, of een layout kan de rangschikking herberekenen, maar die veranderingen blijven verbonden met de geïnterpreteerde betekenis eronder. Wanneer een verandering deel moet worden van de bewaarde resource, kan de stroom opnieuw omhoog bewegen via Structure & Semantics en Digital Data.

Mutability laat Layer 5 ook tijdelijke interfacecondities vertegenwoordigen die nooit opgeslagen hoeven te worden. Een geselecteerd item, uitgeklapte sectie, playback position, hover state, focus target of pending edit kan diep belangrijk zijn voor de actieve interface zonder ooit deel van permanente opslag te worden.

### Rol in top-down flow

In top-down flow ontvangt Components, Controls, & Layouts geïnterpreteerde structure en zet die om in bruikbare interfaceobjecten. De Stack is voorbij het punt waarop hij alleen weet wat de inhoud betekent en begint die inhoud nu voor te bereiden op interaction, organization en uiteindelijke presentation.

In deze fase kan de interface beslissen welke delen van de geïnterpreteerde inhoud components moeten worden, welke components interaction moeten kunnen afhandelen, en hoe die components moeten worden gerangschikt. Het resultaat is nog geen rendered frame of system output. Het is een actief interfacemodel dat door Layer 4 kan worden georganiseerd en uiteindelijk voor rendering kan worden voorbereid.

### Rol in bottom-up flow

In bottom-up flow is Layer 5 waar geroute interaction betekenisvol gedrag wordt. Lagere lagen kunnen een actie detecteren, vertalen en routen, maar een control is waar die actie uiteindelijk wordt begrepen in relatie tot het interfaceobject dat zij beïnvloedt.

Wanneer een control een interaction afhandelt, kan hij component state bijwerken, een layoutwijziging aanvragen, een command starten of een wijziging produceren die terug naar Structure & Semantics moet bewegen. Als die wijziging de onderliggende inhoud beïnvloedt, kan Layer 6 de wijziging valideren en organiseren volgens de relevante semantic rules voordat zij opnieuw Digital Data wordt. Zo dient Layer 5 als het actieve omzettingspunt tussen user intent en interface state.

### Relatie met Graphs & Frames

Layer 5 produceert de bruikbare interfaceobjecten, maar is niet de volledige omgeving waarin die objecten werken. Die verantwoordelijkheid ligt bij **Layer 4: Graphs & Frames**. Components, controls en layouts hebben een bredere context nodig die ze kan organiseren, bevragen, ertussen kan routen, ze voor rendering kan voorbereiden en de grenzen kan definiëren waarin zij deelnemen.

Deze relatie houdt het Model schoon. Layer 5 definieert de objecten van de actieve interface. Layer 4 beheert hun grotere organisatie en bereidt ze voor op de lagere lagen van de Stack. Een component moet weten hoe hij zijn eigen bruikbare state vertegenwoordigt en beheert; de graph en het frame moeten weten hoe die component in de bredere interfacestroom past.

### Waarom de laag ertoe doet

Components, Controls, & Layouts voorkomt dat de Stack rechtstreeks van interpretatie naar rendering springt. Een systeem kan geen duidelijke interface bouwen door inhoud alleen te begrijpen en onmiddellijk output te produceren. Er moet een laag zijn waar die geïnterpreteerde inhoud bruikbaar, veranderlijk, rangschikbaar en responsief voor interaction wordt.

Door Layer 5 te scheiden van zowel Structure & Semantics als Graphs & Frames, bewaart het Model een precieze volgorde van verantwoordelijkheid. Structure & Semantics definieert stabiele betekenis. Components, Controls, & Layouts zet die betekenis om in actieve interfaceobjecten. Graphs & Frames organiseert die objecten in een grotere operationele context. Deze scheiding laat CatalystUI interfaces over domains heen beschrijven zonder ze te reduceren tot visuele widgets, ruwe structures of renderer-specifieke commands.
