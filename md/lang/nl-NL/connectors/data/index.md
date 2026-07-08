<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 6.1 Connectors :: Data

## Uitgebreide bespreking

### De eerste vertaling

De **Data**-connector is de eerste expliciete connector van de Stack. Hij bevindt zich tussen **Layer 7: Digital Data** en **Layer 6: Structure & Semantics**, waar actieve, door de computer leesbare informatie voor het eerst een geïnterpreteerde vorm begint te krijgen. Layer 7 vertelt ons dat de informatie als digitale data bestaat. Layer 6 vertelt ons hoe die informatie is gestructureerd en wat zij betekent. De Data-connector legt uit hoe het systeem van de ene toestand naar de andere beweegt.

Deze connector is nodig omdat digitale data zichzelf niet interpreteert. Een bestand, stream, buffer, databaseresultaat, antwoord of bericht kan al georganiseerde informatie bevatten, maar organisatie is niet hetzelfde als interpretatie. Iets moet de data openen, lezen volgens de juiste verwachtingen, en een vorm produceren die Structure & Semantics kan begrijpen. Dat “iets” is de Data-connector.

In die zin is deze connector de eerste vertaalslag binnen de expliciete Stack. Hij maakt de oorspronkelijke informatie niet, en hij maakt nog geen gebruikersgerichte componenten. Zijn taak is om informatie, wanneer nodig, als Digital Data in de actieve stroom te brengen en die actieve digitale representatie vervolgens te verbinden met de regels en structuren die interpretatie mogelijk maken.

### Werken met Data Storage

Hoewel de Data-connector tussen Digital Data en Structure & Semantics staat, heeft hij vaak een nauwe relatie met de impliciete laag **Data Storage**. Veel vormen van digitale data zijn pas nuttig wanneer ze kunnen worden bereikt op de plaats waar ze zijn opgeslagen. Daarom voert een Data-connector vaak twee verwante taken uit. Eerst reikt hij naar opslag om informatie op te halen, te ontvangen of anderszins toegankelijk te maken, zodat die informatie als Digital Data de actieve stroom kan binnenkomen. Daarna verwerkt hij de resulterende Digital Data tot een geïnterpreteerde structuur.

Een MySQL-data-connector is een goed voorbeeld. Vanuit het perspectief van het Model kan de MySQL-database als Data Storage worden behandeld, terwijl het queryresultaat de actieve Digital Data wordt waarmee wordt gewerkt. De connector kan de verbinding openen, een query sturen, het resultaat ontvangen, en dat resultaat organiseren tot gestructureerde informatie die de rest van de Stack kan begrijpen. De databaseverbinding, het querygedrag en de resultaatverwerking kunnen allemaal in dezelfde connector verschijnen, omdat de Data-connector verantwoordelijk is voor het reiken naar opslag en het dragen van opgehaalde informatie naar gestructureerde, betekenisvolle data.

Dit maakt Data Storage geen expliciete laag van de Stack, en het maakt de Data-connector ook niet verantwoordelijk voor het zijn van de database, het bestandssysteem, de service of het opslagmechanisme zelf. Het Model erkent alleen dat de eerste connector vaak richting opslag moet reiken om digitale data in de actieve systeemstroom te brengen.

### Toegang is geen begrip

De Data-connector bestaat mede omdat toegang en begrip niet hetzelfde zijn. Een computer kan een bestand openen, een response ontvangen, bytes in geheugen houden of verbinding maken met een database. Dat bewijst alleen dat de informatie beschikbaar is. Het bewijst niet dat de informatie is begrepen.

Een instellingenbestand kan bijvoorbeeld beschikbaar zijn als tekst. Het systeem kan weten waar het bestand staat, de inhoud succesvol lezen en die inhoud in geheugen houden. Zelfs dan heeft de Stack nog niet bepaald welke delen sleutels zijn, welke delen waarden zijn, welke secties geldig zijn, of welke regels de indeling definiëren.

De Data-connector verzorgt de beweging van “de informatie is beschikbaar als digitale data” naar “de informatie kan nu worden geïnterpreteerd volgens structuur en semantiek.” Dit onderscheid houdt Layer 7 schoon. Digital Data hoeft niet te weten hoe elk denkbaar formaat geïnterpreteerd moet worden. Het hoeft alleen de actieve, door de computer leesbare informatie te vertegenwoordigen. De Data-connector draagt die informatie vervolgens over aan Layer 6, waar interpretatie volgens de juiste regels kan plaatsvinden.

### Structuur produceren

In de top-down stroom ontvangt de Data-connector Digital Data en bereidt die voor op Structure & Semantics. Dit kan het lezen van bytes omvatten, het decoderen van tekst, het herkennen van een formaat, het kiezen van semantische regels, het valideren van basisverwachtingen, of het omzetten van de representatie naar een georganiseerde structuur. Het exacte werk hangt af van het soort informatie dat wordt behandeld, maar de verantwoordelijkheid blijft dezelfde: de actieve representatie verbinden met een geïnterpreteerde vorm.

Een JSON-instellingenbestand kan beginnen als gecodeerde tekst. De Data-connector leest de tekst, herkent het verwachte formaat en produceert gestructureerde informatie die de instellingen vertegenwoordigt. Een CSV-bestand kan rijen en velden worden. Een databaseresultaat kan records worden. Een binair bestand kan headers, secties en waarden worden. Een serverantwoord kan een gestructureerd bericht worden.

Het belangrijke punt is de beweging. De Data-connector kan beginnen door naar opslag te reiken, maar zijn expliciete Stack-overgang is pas voltooid wanneer de opgehaalde of ontvangen Digital Data informatie is geworden die via Structure & Semantics kan worden begrepen.

### Betekenis behouden

Een Data-connector moet betekenis behouden terwijl informatie tussen lagen beweegt. Dat betekent niet dat elk detail van de oorspronkelijke representatie onveranderd moet blijven. Het betekent dat de connector de bedoelde relatie moet bewaren tussen de digitale data en de geïnterpreteerde structuur die hij produceert.

Als een bestand bijvoorbeeld een titel bevat, moet de resulterende structuur die titel vertegenwoordigen op een manier die trouw blijft aan de oorspronkelijke informatie. Als een databaserecord een identificator bevat, moet die identificator verbonden blijven met het record dat hij beschrijft. Als een formaat volgorde, groepering of verplichte waarden definieert, moet de connector die verwachtingen respecteren bij het produceren van het gestructureerde resultaat.

### Terug naar Digital Data

Omdat de Stack omkeerbaar is, neemt de Data-connector ook deel aan de bottom-up stroom. Wanneer een interactie informatie in de interface verandert, moet die wijziging uiteindelijk mogelijk terugkeren naar Digital Data. Voordat zij kan worden bewaard, verzonden of hergebruikt, moet gestructureerde informatie opnieuw worden omgezet naar een door de computer leesbare vorm.

In deze richting voert de Data-connector de tegenovergestelde transformatie uit. Hij ontvangt gestructureerde informatie van Layer 6 en produceert Digital Data die geschikt is voor opslag, verzending, vergelijking of verdere verwerking.

Een instellingenstructuur kan gecodeerde JSON-tekst worden. Een tabel met waarden kan CSV worden. Een record kan een database-update worden. Een documentstructuur kan de bytes van een bestand worden.

Deze omgekeerde beweging is net zo belangrijk als de top-down beweging. Als de Data-connector informatie wel naar structuur kan lezen, maar structuur niet terug kan schrijven naar digitale vorm, kan de interface informatie misschien weergeven of gebruiken, maar het resultaat van interactie niet volledig bewaren. De connector helpt daarom de cyclus tussen gebruikersintentie en blijvende verandering af te maken.

### Validatie en falen

De Data-connector is ook een van de eerste plaatsen waar falen betekenisvol kan worden herkend. Digital Data kan ontbreken, verkeerd gevormd zijn, onvolledig zijn, niet worden ondersteund, verouderd zijn of niet overeenkomen met de semantische regels die Layer 6 verwacht.

Wanneer dit gebeurt, moet de connector het resultaat van die transformatie duidelijk maken. Een connector kan ontbrekende optionele waarden herstellen, standaardwaarden toepassen, niet-ondersteunde extensies negeren of waar passend een gedeeltelijke structuur produceren. Maar de rest van de Stack zou niet hoeven raden of de data correct is geïnterpreteerd.

Door falen op deze grens te identificeren, houdt het Model de interpretatie eerlijk. De Data-connector beschermt de rest van de Stack tegen het bouwen op informatie die nooit succesvol is begrepen.

### Waarom de connector ertoe doet

De Data-connector voorkomt dat de Stack aanneemt dat digitale data automatisch betekenisvol wordt zodra zij beschikbaar is. Zonder deze connector zou het Model de grens tussen representatie en interpretatie vervagen. Layer 7 zou formaten rechtstreeks moeten begrijpen, of Layer 6 zou ruwe data zelf moeten ophalen. Door de Data-connector te definiëren, krijgt deze overgang een eigen plaats.

Digital Data blijft verantwoordelijk voor actieve, door de computer leesbare representatie. Structure & Semantics blijft verantwoordelijk voor geïnterpreteerde betekenis en georganiseerde vorm. De Data-connector verzorgt de beweging tussen beide.

Zo wordt de eerste transformatie van de Stack expliciet. Informatie begint als actieve digitale representatie, gaat door de Data-connector, en wordt iets wat het systeem kan begrijpen. Daarna kan de rest van de Stack het proces voortzetten: geïnterpreteerde informatie omzetten in bruikbare interfaceobjecten, die objecten organiseren in context, ze voorbereiden op output, ze via het systeem leveren, en de gebruiker laten reageren.
