<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 6.2 Connectors :: Parser

## Uitgebreide bespreking

### Van structuur naar gebruik

De **Parser**-connector bevindt zich tussen **Layer 6: Structure & Semantics** en **Layer 5: Components, Controls, & Layouts**. Hij is verantwoordelijk voor het nemen van gestructureerde informatie en het omzetten daarvan naar iets wat de rest van de interface actief kan gebruiken, wijzigen, ordenen of beantwoorden.

Layer 6 geeft informatie een stabiele, geïnterpreteerde vorm. Deze laag definieert wat de data betekent, hoe zij is georganiseerd, en welke regels haar vorm geven. Een structuur is echter niet hetzelfde als een interfaceobject. Een structuur kan het systeem vertellen dat een document een kop heeft, dat een bestand een sectie bevat, of dat een lied timinginformatie bevat, maar de structuur zelf is vooral bezig met het trouw vertegenwoordigen van de data.

De Parser-connector verplaatst die geïnterpreteerde informatie naar Layer 5, waar zij veranderlijk wordt. Hier kan een structuur een component, control of layout worden. Hier stopt informatie met alleen een stabiele beschrijving te zijn van wat bestaat, en begint zij iets te worden waarmee het programma rechtstreeks kan werken. Met andere woorden: de Data-connector helpt het systeem begrijpen wat de informatie is. De Parser-connector helpt het systeem dat begrip om te zetten in iets bruikbaars.

### Parsen naar componenten

Het woord “parser” wordt vaak gebruikt voor het lezen van tekst of het opdelen van een bestand in betekenisvolle stukken. In CatalystUI draagt het woord hetzelfde algemene idee, maar wordt het breder toegepast. Een Parser-connector leest niet alleen tekens of tokens. Hij ontvangt een al geïnterpreteerde structuur en zet die structuur om in veranderlijke componenten. Dit onderscheid is belangrijk, omdat de Data-connector digitale data al naar Structure & Semantics heeft gebracht. Tegen de tijd dat informatie de Parser-connector bereikt, vraagt het systeem niet meer: “Kan deze data worden begrepen?” Het vraagt nu: “Hoe moet deze begrepen data bruikbaar worden?”

Een documentstructuur kan documentcomponenten worden. Een configuratiestructuur kan instellingencomponenten worden. Een muziekstructuur kan bewerkbare audiocomponenten worden. De Parser-connector voert de overgang uit van gestructureerde betekenis naar interactieve representatie. Dit is ook waar de Stack voor een programmeur bekender begint te voelen. Componenten, controls en layouts zijn de onderdelen waarmee een ontwikkelaar direct kan werken. Ze kunnen worden veranderd, bevraagd, georganiseerd, bijgewerkt en uiteindelijk door de lagere lagen van de Stack worden gerouteerd. De Parser-connector geeft die onderdelen hun beginvorm.

### Wanneer het verschil klein lijkt

In veel gevallen lijken een structuur en een component sterk van elkaar te verschillen. Een complex document, audiobestand of interactieve view kan een flinke transformatie vereisen voordat het nuttig wordt in Layer 5. Maar wanneer de oorspronkelijke structuur eenvoudig is, kan het verschil tussen een structuur en een component op het eerste gezicht bijna onzichtbaar lijken.

Een INI-bestand laat dit goed zien. Nadat de Data-connector het bestand heeft geïnterpreteerd, kan de structuur secties, sleutels en waarden bevatten. Een component die hetzelfde bestand vertegenwoordigt, kan ook secties, sleutels en waarden bevatten. Aan de oppervlakte lijken deze twee vormen bijna identiek.

De sleutel is dat het onderscheid niet alleen in hun vorm zit, maar in hun verantwoordelijkheid.

De structuur vertegenwoordigt de geïnterpreteerde toestand van de data. Zij is de stabiele vorm die uit de oorspronkelijke digitale representatie is geproduceerd. De component vertegenwoordigt de bruikbare toestand van die data. Zij kan een ontwikkelaar toestaan een sectie toe te voegen, een sleutel te verwijderen, een waarde te wijzigen, standaardwaarden toe te passen, bewerkingen te valideren, wijzigingen bij te houden of informatie voor weergave en interactie voor te bereiden.

Dus hoewel een eenvoudige INI-structuur en een INI-component vrijwel dezelfde informatie kunnen bevatten, betekenen zij binnen de Stack niet hetzelfde. De structuur gaat over trouwe interpretatie. De component gaat over actief gebruik.

Dit verklaart waarom de Parser-connector ertoe doet, zelfs wanneer zijn werk klein lijkt. Soms is parsen dramatisch. Soms is het bijna een één-op-één omzetting. In beide gevallen markeert de connector nog steeds de grens waar geïnterpreteerde informatie veranderlijke interfacedata wordt.

### De kracht van heruitdrukking

De Parser-connector wordt vooral krachtig wanneer één structuur op meer dan één bruikbare manier opnieuw kan worden uitgedrukt. Omdat Layer 6 geïnterpreteerde betekenis vertegenwoordigt, kan de Parser-connector bepalen hoe die betekenis in Layer 5 bruikbaar moet worden.

Een HTML-document laat dit duidelijk zien. Hetzelfde gestructureerde document kan worden geparsed naar componenten voor een visuele webpagina, componenten voor een leesbare documentopzet, componenten voor toegankelijkheidsnavigatie, componenten voor afdrukken, of componenten voor het extraheren van specifieke informatie. De oorspronkelijke structuur kan hetzelfde zijn, maar de Parser-connector laat die structuur verschillende bruikbare representaties worden, afhankelijk van wat het systeem probeert te bereiken.

Dit is meer dan gemak. Het laat iets belangrijks over de Stack zien: zodra data is geïnterpreteerd, kan zij volgens doel worden hervormd.

Hetzelfde principe kan gelden voor muziek. Een gestructureerde muzikale representatie kan bewerkbare tijdlijncomponenten, afspeelcomponenten, notatiecomponenten of exportgerichte componenten worden. Daarna kan de informatie uiteindelijk terugkeren naar een structuur die geschikt is voor een WAV-bestand, een MP3-bestand of een ander formaat. De Parser-connector is een van de redenen waarom dit soort transformatie netjes kan worden uitgedrukt. Hij geeft het systeem een plaats om te bewegen tussen stabiele structuur en veranderlijke representatie zonder te doen alsof die twee ideeën hetzelfde zijn.

Op die manier helpt de Parser-connector de flexibiliteit van informatie te behouden. Hij laat dezelfde geïnterpreteerde data deelnemen aan verschillende workflows, tools en vormen van expressie, terwijl zij gegrond blijft in de betekenis die Structure & Semantics geeft.

### Terug naar structuur

Omdat de Stack omkeerbaar is, werkt de Parser-connector ook in de andere richting. Wanneer componenten door interactie worden gewijzigd, moeten die veranderingen mogelijk terug naar Structure & Semantics voordat zij opnieuw Digital Data kunnen worden.

In dit omgekeerde pad wordt veranderlijke informatie voorbereid om weer stabiel te worden. Een instellingencomponent kan door een gebruiker worden gewijzigd en daarna terug worden geparsed naar een configuratiestructuur. Een documentcomponent kan worden bewerkt en daarna terug worden geparsed naar een documentstructuur. Een muziekcomponent kan worden geordend, ingekort of aangepast en daarna terug worden geparsed naar een structuur die later als bestand kan worden geschreven.

Dit proces betekent niet dat elke component precies naar dezelfde structuur moet terugkeren waaruit zij kwam. Soms is het doel van interactie juist om informatie naar een nieuwe vorm te transformeren. Een geïmporteerd document kan een vereenvoudigde opzet worden. Een bewerkt audioproject kan een definitieve exportstructuur worden. Een complexe groep componenten kan worden teruggebracht tot een kleinere structuur voor opslag of verzending.

De Parser-connector geeft het Model een eigen plaats voor deze transformatie. Hij laat veranderlijke interfacedata opnieuw gestructureerde data worden zonder Layer 5 verantwoordelijk te maken voor opslag, en zonder Layer 6 elk mogelijk interactief formaat te laten begrijpen.

### Intentie behouden

Een Parser-connector moet de bedoelde betekenis van informatie behouden terwijl zij tussen lagen beweegt. Wanneer hij van structuur naar componenten beweegt, moet hij bruikbare vormen produceren die de structuur eerlijk weerspiegelen. Wanneer hij van componenten terug naar structuur beweegt, moet hij het resultaat van interactie duidelijk genoeg vertegenwoordigen dat de bovenliggende lagen het kunnen bewaren of verzenden.

Dit vereist geen perfecte één-op-één kopie. Vaak bestaat de Parser-connector juist omdat een één-op-één kopie minder bruikbaar zou zijn. Componenten kunnen gemaksproperties, hulpfuncties, bewerkingstoestand, validatietoestand, layoutinformatie of tijdelijke waarden nodig hebben die niet in de oorspronkelijke structuur thuishoren. Evenzo kan een teruggekeerde structuur tijdelijke componenttoestand weglaten omdat die toestand alleen tijdens interactie nuttig was.

Het doel is niet om elk intern detail identiek te houden. Het doel is om de betekenis te bewaren die ertoe doet.

Zo blijft de Stack eerlijk. Structure & Semantics blijft de plaats voor geïnterpreteerde, stabiele informatie. Components, Controls, & Layouts blijft de plaats voor veranderlijke, bruikbare informatie. De Parser-connector voert de beweging tussen beide uit terwijl hij de intentie van de getransformeerde data behoudt.

### Waarom de connector ertoe doet

De Parser-connector voorkomt dat de Stack geïnterpreteerde data verwart met bruikbare interfacedata. Zonder deze connector zouden structuren zelf veranderlijk moeten worden, of componenten zouden moeten weten hoe zij elke structuur die ze ontvangen moeten interpreteren. Beide benaderingen vervagen de verantwoordelijkheden van de omliggende lagen.

Door de Parser-connector te definiëren, krijgt deze overgang een eigen plaats in het Model.

Structure & Semantics blijft verantwoordelijk voor stabiele interpretatie. Components, Controls, & Layouts blijft verantwoordelijk voor actief gebruik, wijziging en interactie. De Parser-connector handelt de transformatie tussen beide af.

Dit is het punt in de Stack waar begrepen informatie iets wordt waarmee het programma direct kan werken. Hier wordt stabiele betekenis veranderlijke representatie. Van daaruit kan de informatie worden georganiseerd in graphs en frames, voorbereid op output, door de lagere lagen worden gerouteerd en uiteindelijk aan de gebruiker worden aangeboden als iets wat die kan waarnemen, begrijpen en beantwoorden.
