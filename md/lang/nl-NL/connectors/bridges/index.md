<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 6.4 Connectors :: Bridge

## Uitgebreide bespreking

### Van context naar rendering

De **Bridge**-connector bevindt zich tussen **Layer 4: Graphs & Frames** en **Layer 3: Renderers**. Hij is verantwoordelijk voor het dragen van georganiseerde interfacedata vanuit de graph en het frame naar de renderer, waar die data kan beginnen aan haar omzetting naar waarneembare output.

Layer 4 geeft het systeem georganiseerde context. Het weet welke componenten bestaan, hoe zij zich tot elkaar verhouden, welke grenzen zij innemen, en hoe de actieve interface als geheel moet worden begrepen. Layer 3 is verantwoordelijk voor rendering. Het neemt voorbereide data en zet die om naar een vorm die uiteindelijk via een window en system kan worden geleverd.

De Bridge-connector bestaat omdat deze twee lagen niet vanzelf dezelfde taal spreken.

Een graph organiseert relaties. Een frame definieert de actieve context en grenzen. Een renderer produceert output. De Bridge-connector is het kruispunt tussen deze zorgen. Hij hoeft niet uitgebreid of zichtbaar te zijn. In de meeste gevallen stelt hij de georganiseerde interfacedata simpelweg beschikbaar aan de renderer en laat hij interactie-informatie wanneer nodig terug omhoog bewegen. In die zin doet de Bridge-connector precies wat zijn naam zegt: hij overbrugt de kloof.

### Het frame vooruit dragen

In de top-down stroom ontvangt de Bridge-connector de voorbereide resultaten van Layer 4 en draagt die naar Layer 3. Dat betekent niet dat de Bridge verantwoordelijk is voor het organiseren van componenten, het berekenen van layouts, het routen van controls of het renderen van output. Die verantwoordelijkheden horen bij de omliggende lagen. De Bridge bestaat ertussen zodat die verantwoordelijkheden gescheiden kunnen blijven.

Een frame kan de actieve grenzen van de interface al hebben voorbereid. Een graph kan de componenten die erin thuishoren al hebben georganiseerd. De Bridge-connector neemt die voorbereide context en presenteert die aan de renderer in een vorm waarmee de renderer kan werken. Dit kan verwijzingen, voorbereide render entries, afgevlakte componentinformatie, resource handles, command-ready data of elke andere representatie omvatten die passend is voor het beschreven systeem.

De exacte implementatie kan verschillen, maar de verantwoordelijkheid blijft hetzelfde. De Bridge-connector beslist niet wat de interface betekent. Hij beslist niet hoe de uiteindelijke output aan de gebruiker moet worden geleverd. Hij biedt eenvoudig het kruispunt waar georganiseerde interfacecontext renderer-gerichte data wordt.

Daardoor kunnen de graph en het frame gericht blijven op organisatie, terwijl de renderer gericht blijft op rendering.

### Een stille connector

De Bridge-connector zal vaak stiller lijken dan de connectors erboven. De Data-connector kan digitale data benaderen en interpreteren. De Parser-connector kan structuren veranderen in veranderlijke componenten. De Adapter-connector kan die componenten in graphs en frames plaatsen. Vergeleken daarmee kan de Bridge-connector bijna leeg aanvoelen.

Die leegte is deel van het punt.

Een Bridge-connector zou meestal niet meer werk moeten doen dan nodig is. Zijn hoofddoel is om de graph en het frame met de renderer te laten communiceren zonder dat een van beide lagen de verantwoordelijkheden van de ander overneemt. Als de graph zich als renderer begint te gedragen, verliest het Model helderheid. Als de renderer zich als graph begint te gedragen, verliest het Model het vermogen om organisatie netjes los van output te beschrijven.

De Bridge-connector beschermt die grens.

Hij kan data voorbereiden voor consumptie door de renderer, maar moet niet de renderer worden. Hij kan de georganiseerde interface aan de renderer blootstellen, maar moet niet de graph worden. Zijn nut komt voort uit het feit dat twee aangrenzende lagen onderscheiden kunnen blijven en toch kunnen samenwerken.

### Interacties terug omhoog doorgeven

De Bridge-connector is ook belangrijk in de bottom-up stroom. Wanneer een interactie uit het systeem komt, beweegt zij omhoog door de lagere lagen totdat zij het punt bereikt waar de georganiseerde interface er betekenis aan kan geven. In veel gevallen kan de renderer de interactie ontvangen of vertalen naar een vorm die de Stack verder kan routen, maar meestal weet de renderer niet welke uiteindelijke component haar moet afhandelen.

Die verantwoordelijkheid ligt hoger in de Stack.

Daarom zal de Bridge-connector een interactie vaak met weinig wijziging doorgeven aan Layer 4. De graph en het frame zijn de lagen die kunnen bepalen waar de interactie thuishoort. Zij kennen de georganiseerde context. Zij kunnen bepalen welke component actief is, welke control het relevante gebied inneemt, welke layoutrelatie ertoe doet, of welk deel van de interface de interactie moet ontvangen.

Daarom moet de Bridge-connector niet worden aangezien voor een interactierouter. Hij kan de interactie dragen en de informatie bewaren die voor routing nodig is, maar hij is meestal niet de laag die de routing zelf uitvoert. De Bridge zorgt er simpelweg voor dat de interactie kan oversteken van renderer-gerichte informatie terug naar graph-gerichte context.

In de top-down stroom helpt de Bridge de renderer te voeden. In de bottom-up stroom helpt hij interacties terug te brengen naar de plaats waar zij betekenisvol kunnen worden gerouteerd.

### De moeilijkst zichtbare connector

De Bridge-connector was een van de moeilijkste connectors om te identificeren, omdat zijn doel uiterlijk vaag kan aanvoelen. Hij heeft niet de duidelijke opslagrelatie van de Data-connector. Hij heeft niet de heldere transformatie van de Parser-connector. Hij heeft niet de organisatorische rol van de Adapter-connector. Op het eerste gezicht kan hij lijken op een dunne overdracht tussen twee lagen die al dicht genoeg bij elkaar lijken om rechtstreeks te communiceren.

Zonder de Bridge-connector zou de Stack echter geen expliciete manier hebben om van georganiseerde interfacecontext naar rendering te bewegen. Een graph zou direct moeten weten hoe hij een renderer voedt, of een renderer zou zelf moeten weten hoe hij graphs en frames interpreteert. Beide richtingen zouden de grens tussen organisatie en output laten instorten.

De Bridge-connector geeft die grens een naam.

Hij bevat misschien niet altijd veel logica, en in sommige implementaties kan hij heel klein lijken, maar zijn conceptuele rol is essentieel. Hij verklaart hoe de georganiseerde interface het renderingproces binnengaat zonder Layer 4 en Layer 3 hetzelfde te maken.

### De grens behouden

Een Bridge-connector moet de grens tussen context en rendering behouden. De informatie die hij omlaag doorgeeft, moet trouw blijven aan de georganiseerde interface die Layer 4 heeft voorbereid, terwijl zij bruikbaar blijft voor Layer 3. De informatie die hij omhoog doorgeeft, moet de details bewaren die de graph en het frame nodig hebben om te begrijpen wat er gebeurde, terwijl de renderer gericht kan blijven op zijn eigen verantwoordelijkheid.

Dit vereist niet dat de Bridge elk intern detail van beide lagen bewaart. Een renderer heeft mogelijk niet de volledige graph nodig. Een graph heeft mogelijk niet elk renderer-specifiek detail nodig. De Bridge-connector beslist wat de grens moet oversteken zodat beide kanten hun werk kunnen voortzetten zonder de rol van de ander over te nemen.

Dat maakt de connector vooral belangrijk in systemen waar de renderer zeer specifieke eisen heeft. De graph en het frame hoeven niet elk detail van die eisen te kennen. De renderer hoeft niet de volledige organisatie van de interface te begrijpen. De Bridge-connector bestaat zodat beide kanten kunnen communiceren zonder verstrikt te raken.

### Waarom de connector ertoe doet

De Bridge-connector voorkomt dat de Stack georganiseerde interfacecontext verwart met gerenderde output. Zonder deze connector zouden graphs en frames rechtstreeks in renderer-termen moeten spreken, of renderers zouden de volledige structuur van de actieve interface moeten begrijpen.

Door de Bridge-connector te definiëren, krijgt deze overgang een eigen plaats in het Model.

Graphs & Frames blijven verantwoordelijk voor organisatie, context, grenzen, routing en voorbereiding. Renderers blijven verantwoordelijk voor het omzetten van voorbereide informatie naar output-ready vorm. De Bridge-connector handelt de beweging tussen beide af.

Dit is het punt in de Stack waar georganiseerde informatie het renderingproces binnengaat. Hij is vaak stil. Hij is vaak dun. Hij kan bijna onzichtbaar aanvoelen. Maar zonder hem verliest de Stack de expliciete verbinding tussen de interface zoals zij georganiseerd is en de interface zoals zij gerenderd wordt. De Bridge-connector maakt die oversteek mogelijk, en gaat daarna, genadig genoeg, uit de weg.
