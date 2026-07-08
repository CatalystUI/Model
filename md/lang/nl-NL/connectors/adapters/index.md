<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 6.3 Connectors :: Adapter

## Uitgebreide bespreking

### Van gebruik naar context

De **Adapter**-connector bevindt zich tussen **Layer 5: Components, Controls, & Layouts** en **Layer 4: Graphs & Frames**. Hij is verantwoordelijk voor het nemen van veranderlijke interfacedata en het plaatsen daarvan in een grotere context waar die data kan worden georganiseerd, gevonden, gerouteerd, begrensd en voorbereid voor de rest van de Stack.

Layer 5 geeft het systeem componenten, controls en layouts. Dit zijn de veranderlijke stukken waarmee een ontwikkelaar rechtstreeks kan werken. Een component kan een stuk informatie vertegenwoordigen. Een control kan op een interactie reageren. Een layout kan andere componenten volgens een bepaalde volgorde organiseren. Toch beschrijven deze stukken niet volledig de omgeving waarin zij bestaan. Ze kunnen weten wat ze zijn en hoe ze zich gedragen, maar ze weten niet automatisch hoe ze zich tot de volledige interface verhouden.

De Adapter-connector verzorgt deze beweging van individuele bruikbare stukken naar georganiseerde context. Hij neemt de componenten die via de Parser-connector zijn geproduceerd en adapteert ze naar graphs en frames. Hier begint de Stack niet alleen te begrijpen dat een component bestaat, maar ook waar die thuishoort, hoe die zich tot andere componenten verhoudt, en hoe die moet deelnemen aan de actieve interface.

Met andere woorden: de Parser-connector maakt gestructureerde informatie bruikbaar. De Adapter-connector maakt bruikbare informatie contextueel.

### Componenten adapteren naar graphs

Een component kan op zichzelf bestaan, maar een gebruikersinterface bestaat zelden uit één geïsoleerde component. Zelfs de eenvoudigste interface bevat meestal relaties: een component kan een andere bevatten, een control kan van een layout afhangen, of een groep moet samen kunnen worden gezocht, geordend, ingeschakeld, uitgeschakeld, gefocust of bijgewerkt.

Hier wordt de graph belangrijk.

De Adapter-connector laat componenten, controls en layouts in een graph plaatsen zodat zij als deel van een groter geheel kunnen worden georganiseerd. Een graph kan componenten opslaan, hun relaties volgen, manieren bieden om ze te bevragen en de omringende logica leveren die nodig is om ze als verzameling te beheren. Zonder deze stap zouden componenten losse stukken veranderlijke data blijven in plaats van deelnemers in een verenigde interface.

Een instellingencomponent kan op zichzelf nuttig zijn. Zodra hij in een graph wordt geadapteerd, kan hij deel worden van een volledige instellingenweergave, verbonden met andere secties, op naam doorzoekbaar, bijgewerkt met verwante waarden, of bereikbaar wanneer de gebruiker een actie uitvoert. De component is niet opgehouden een component te zijn, maar heeft via de graph context gekregen.

Dit onderscheid helpt Layer 5 en Layer 4 gescheiden te houden. Componenten beschrijven bruikbare interfacedata. Graphs beschrijven hoe die stukken samen georganiseerd zijn.

### Layout is niet de volledige context

De Adapter-connector helpt ook het verschil tussen een layout en een graph te verduidelijken. Omdat layouts componenten kunnen organiseren, kan het verleidelijk zijn om ze te behandelen als de volledige organisatielaag van de interface. Een layout organiseert componenten echter alleen op een bepaalde manier. Hij beschrijft niet noodzakelijk de volledige relatie, levenscyclus, routing of omgevingscontext van die componenten.

Een verticale layout kan bepalen dat meerdere controls op volgorde moeten verschijnen. Dat betekent niet dat de layout verantwoordelijk is voor de hele interface. Hij hoeft niet elke actieve component te kennen, elke interactie te beheren, de outputgrens voor te bereiden of als hoogste mediator van het systeem te functioneren. Die verantwoordelijkheden horen bij Layer 4.

De Adapter-connector respecteert dit onderscheid. Hij kan een layout uit Layer 5 nemen en in een graph plaatsen, maar de layout wordt niet de graph alleen omdat hij componenten rangschikt. De graph biedt een bredere organisatorische context, terwijl de layout een component blijft waarvan het doel is andere componenten te ordenen.

Deze scheiding wordt vooral nuttig wanneer een interface groeit. Eenvoudige rangschikkingen kunnen eenvoudig blijven, terwijl het grotere systeem nog steeds de structuur kan bieden die nodig is voor ontdekking, routing, updates en voorbereiding op output.

### Verbinden met het frame

Layer 4 gaat niet alleen over graphs. Het bevat ook het frame, dat de actieve grens en het communicatiepunt vertegenwoordigt tussen georganiseerde componenten en de lagere lagen van de Stack.

De Adapter-connector helpt componenten deze geframede context binnen te gaan. Een component kan een grootte hebben, een control kan interactiegedrag hebben en een layout kan relatieve plaatsing beschrijven, maar het frame bepaalt de grenzen waarbinnen die stukken worden voorbereid. Het gaat om het actieve gebied, de omringende context en de informatie die uiteindelijk richting rendering moet worden doorgegeven.

Dit betekent niet dat de Adapter-connector iets rendert. Rendering hoort bij de lagere lagen. De Adapter-connector bereidt de georganiseerde interface voor zodat het frame die goed kan communiceren. Hij geeft het frame de componentrelaties, layoutresultaten en contextuele informatie die nodig zijn voordat de volgende connector die informatie naar de renderer draagt.

Zo werkt de Adapter-connector als de overgang tussen “dit zijn de stukken die we kunnen gebruiken” en “dit is de georganiseerde interface die we voorbereiden.”

### Hergebruik door adaptatie

Een van de krachtigste onderdelen van de Adapter-connector is dat dezelfde component in verschillende contexten kan worden geadapteerd. Een component hoeft niet permanent vast te zitten aan één graph, één frame of één soort interface. Zijn betekenis en gedrag kunnen stabiel blijven terwijl de Adapter-connector bepaalt hoe hij in een bepaalde omgeving moet deelnemen.

Een documentcomponent kan worden geadapteerd naar een bewerkingsgraph, een previewgraph of een printgraph. Een muziekcomponent kan worden geadapteerd naar een afspeelgraph, een bewerkingsgraph of een bibliotheekgraph. Een groep instellingencomponenten kan worden geadapteerd naar een eenvoudige voorkeurenpagina, een geavanceerd configuratiepaneel of een automatische installatiestroom.

De onderliggende componenten kunnen vertrouwd blijven, maar hun relaties en doel veranderen afhankelijk van de graph en het frame waarin ze terechtkomen. Dit geeft CatalystUI een nette manier om hergebruik uit te drukken zonder te doen alsof hergebruik betekent dat elke context identiek is.

De Adapter-connector maakt dat mogelijk. Hij laat veranderlijke interfacedata opnieuw worden georganiseerd volgens doel, terwijl de component zelf gericht blijft op wat hij vertegenwoordigt en hoe hij zich gedraagt.

### Terug naar componenten

Omdat de Stack omkeerbaar is, neemt de Adapter-connector ook deel aan de stroom van interactie terug naar de bovenliggende lagen. Wanneer een gebruiker met het systeem interageert, moeten de lagere lagen die interactie uiteindelijk terugleiden naar de juiste component of control.

Layer 4 speelt hierin een belangrijke rol omdat het de georganiseerde context begrijpt. De graph kan helpen bepalen welke component relevant is. Het frame kan helpen de grenzen te interpreteren waarin de interactie plaatsvond. Zodra die context bekend is, helpt de Adapter-connector de interactie terug te brengen naar Layer 5, waar de juiste component of control kan reageren.

Dit is belangrijk omdat interacties zelden al aan de exacte component zijn gekoppeld die ze moet afhandelen. Het systeem weet misschien dat een toets is ingedrukt, een pointer bewoog, een opdracht werd gestart of een gebied werd geselecteerd, maar de Stack moet nog bepalen wat die actie binnen de huidige interface betekent. De Adapter-connector helpt die contextuele beslissing terug te dragen naar de veranderlijke componenten waar de interactie kan worden afgehandeld.

In de top-down stroom plaatst de Adapter-connector componenten in context. In de bottom-up stroom helpt hij contextuele interacties terug te brengen naar de componenten die erop kunnen handelen.

### Identiteit behouden

Een Adapter-connector moet de identiteit en intentie van de componenten die hij adapteert behouden. Wanneer een component een graph of frame binnenkomt, mag hij niet verliezen wat hij is. Zijn doel, toestand en relatie met de oorspronkelijke informatie moeten herkenbaar blijven, zelfs wanneer hij in een groter systeem wordt georganiseerd.

Dit betekent niet dat de component niet kan worden verpakt, geïndexeerd, gegroepeerd, gemeten, getransformeerd of voorbereid voor een specifieke omgeving. In veel gevallen vereist adaptatie extra informatie die de component oorspronkelijk niet bevatte. Een graph kan identifiers nodig hebben. Een frame kan grenzen nodig hebben. Een routingsysteem kan focusinformatie nodig hebben. Deze toevoegingen helpen de component deelnemen aan context, maar mogen de betekenis van de component niet uitwissen.

Daarom voert de Adapter-connector een zorgvuldige vorm van transformatie uit. Hij voegt context toe zonder de component op te slokken. Hij laat de interface georganiseerd worden zonder elke component verantwoordelijk te maken voor het hele systeem eromheen.

### Waarom de connector ertoe doet

De Adapter-connector voorkomt dat de Stack bruikbare interfacedata verwart met georganiseerde interfacecontext. Zonder deze connector zouden componenten hun eigen graphs moeten beheren, layouts zouden ten onrechte als volledige interfaceorganisatie worden behandeld, of frames zouden componenten moeten begrijpen zonder goede overgang tussen de twee lagen.

Door de Adapter-connector te definiëren, krijgt deze overgang een eigen plaats in het Model.

Components, Controls, & Layouts blijven verantwoordelijk voor veranderlijke interfaceobjecten en direct interactiegedrag. Graphs & Frames blijven verantwoordelijk voor organisatie, context, grenzen, routing en voorbereiding voor de lagere lagen. De Adapter-connector handelt de beweging tussen beide af.

Dit is het punt in de Stack waar bruikbare informatie gesitueerde informatie wordt. Componenten zijn niet langer alleen beschikbaar voor het programma; zij worden in een levende context geplaatst waar zij zich tot elkaar kunnen verhouden, via de juiste paden kunnen reageren en verder door de Stack kunnen worden gedragen. Van daaruit kan de georganiseerde interface richting rendering, levering, waarneming en reactie bewegen.
