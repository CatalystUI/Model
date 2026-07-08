<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 5.5 The Stack :: Graphs & Frames

## Uitgebreide bespreking

### De interface in context organiseren

**Graphs & Frames** is de laag waar bruikbare interfaceobjecten in een grotere operationele context worden geplaatst. Layer 5 levert components, controls en layouts. Layer 4 organiseert die objecten, houdt hun relaties bij, bepaalt de actieve context en bereidt ze voor op de renderer-gerichte delen van de Stack.

Deze laag bestaat uit twee verwante ideeën: **graphs** en **frames**. Een graph beschrijft georganiseerde relaties tussen interfaceobjecten. Een frame beschrijft de actieve context of grens waarin die graph of verzameling graphs wordt gecoördineerd en voorbereid voor output.

### Graphs

Een **graph** is een georganiseerde relatie tussen interfaceobjecten. In een visuele interface kan dit lijken op een component tree, scene graph of DOM-achtige structuur. In andere domains kan het een verzameling audiocomponenten, tactiele feedbackobjecten, commands, documenten, routes of andere bruikbare delen organiseren.

Graphs zijn belangrijk omdat components zelden alleen bestaan. Een component kan een ouder, kind, buur, volgorde, dependency, state relationship of routing relationship hebben. Een control kan input ontvangen afhankelijk van focus of positie. Een layout kan meerdere components rangschikken, maar de graph kan bepalen hoe die layout en haar inhoud in de grotere interface worden gevonden, bijgewerkt en beheerd.

Een graph is dus niet slechts “een layout.” Een layout rangschikt components volgens een specifieke regel. Een graph beschrijft bredere relaties, discovery en organization. Het geeft de interface een manier om te weten welke objecten bestaan, hoe ze verbonden zijn en hoe ze als geheel moeten worden behandeld.

### Frames

Een **frame** vertegenwoordigt de actieve context waarin graphs en hun components worden voorbereid voor de lagere lagen van de Stack. Het frame kan grenzen, beschikbare ruimte, timing, actieve state, updatecontext of renderer-facing voorbereiding omvatten. Het is de plaats waar de georganiseerde interface wordt samengebracht zodat zij richting rendering kan bewegen.

In een grafische interface kan een frame de beschikbare surface area, viewport of documentcontext bevatten waarin een component tree moet worden geplaatst. In een audio-interface kan een frame de huidige mixcontext, timing window of output state vertegenwoordigen. In een tactiele interface kan het de actieve apparaatcontext en de grenzen van het feedbackkanaal vertegenwoordigen.

Het frame is niet de renderer. Het bereidt de interface voor op de renderer. Het is de laag die de georganiseerde objecten in de juiste context plaatst voordat de Bridge-connector ze naar Layer 3 draagt.

### Waarom Layer 4 tussen gebruik en rendering staat

Layer 5 levert bruikbare objecten, maar bruikbare objecten zijn nog geen renderbare context. Een knop kan bestaan, maar de renderer moet uiteindelijk weten waar die hoort, welke relaties van belang zijn, welke state actief is en welke grenzen gelden. Een audiocomponent kan bestaan, maar de output heeft mogelijk timing, mixrelaties en actieve kanaalcontext nodig. Layer 4 biedt deze tussenstap.

Zonder Graphs & Frames zouden components te veel zelf moeten beheren, of renderers zouden de volledige organisatie van de interface moeten begrijpen. Beide richtingen maken de Stack rommelig. Door Layer 4 te benoemen, kan het Model duidelijk zeggen: hier worden bruikbare interfaceobjecten georganiseerd en voorbereid voordat rendering begint.

### Rol in top-down flow

In top-down flow ontvangt Layer 4 components, controls en layouts via de Adapter-connector. De laag organiseert ze in graphs, plaatst ze in frames en bereidt de actieve context voor. Dit kan discovery, ordering, bounds, lifecycle, focus, routing data, layout results of andere contextuele informatie omvatten.

Het resultaat is nog geen zintuiglijke output. Het is georganiseerde interfacecontext die de renderer kan gebruiken. Deze voorbereiding maakt het mogelijk dat de renderer zich op rendering kan concentreren in plaats van op de volledige logica van de interfaceorganisatie.

### Rol in bottom-up flow

In bottom-up flow speelt Layer 4 een belangrijke rol bij het routen van interactions. Een system kan detecteren dat er iets is gebeurd, en lagere lagen kunnen de interaction omhoog dragen, maar de graph en het frame helpen bepalen waar die interaction binnen de georganiseerde interface thuishoort.

Een pointerlocatie kan aan een component worden gekoppeld. Een key event kan naar de gefocuste control worden gestuurd. Een resize event kan layout recalculation vereisen. Een command kan alleen geldig zijn binnen een bepaalde graph of frame. Layer 4 gebruikt de georganiseerde context om zulke decisions betekenisvol te maken en kan de interaction via de Adapter-connector terugbrengen naar Layer 5.

### Relatie met Renderers

Graphs & Frames staan net boven **Layer 3: Renderers**. Deze relatie is bewust. Layer 4 moet genoeg informatie voorbereiden om rendering mogelijk te maken, maar moet niet zelf renderen. De renderer zet voorbereide informatie om naar output-ready vorm. Layer 4 organiseert de informatie voordat die omzetting gebeurt.

De Bridge-connector verzorgt de overgang tussen deze verantwoordelijkheden. Daardoor kan een graph rijk en contextueel blijven, terwijl een renderer gespecialiseerd kan blijven in het produceren van output.

### Waarom de laag ertoe doet

Graphs & Frames voorkomt dat het Model bruikbare interfaceobjecten verwart met georganiseerde interfacecontext. Components, controls en layouts zijn nodig, maar zij moeten in een groter geheel worden geplaatst voordat output betrouwbaar kan worden voorbereid of interactions correct kunnen worden gerouteerd.

Door Layer 4 expliciet te maken, geeft CatalystUI een plaats aan organisatie, relaties, grenzen, routing en renderer-facing voorbereiding. Dit maakt het mogelijk om interfaces te beschrijven die complex zijn zonder dat elke component verantwoordelijk wordt voor de hele wereld, en zonder dat renderers moeten begrijpen wat elk interfaceobject betekent.
