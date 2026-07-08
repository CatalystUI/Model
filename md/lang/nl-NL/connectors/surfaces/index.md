<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 6.5 Connectors :: Surface

## Uitgebreide bespreking

### Van rendering naar levering

De **Surface**-connector bevindt zich tussen **Layer 3: Renderers** en **Layer 2: Windows**. Hij is verantwoordelijk voor het dragen van gerenderde output van de renderer naar het window, waar die output binnen een door het systeem geleverde begrensde context kan worden geplaatst.

Layer 3 is waar informatie wordt omgezet naar een output-ready vorm. De renderer neemt de voorbereide data uit de graph en het frame en produceert iets wat uiteindelijk kan worden waargenomen. Maar gerenderde output heeft nog steeds een bestemming nodig. Zij heeft een plaats nodig om heen te gaan, iets om mee verbonden te worden, en een grens waardoor het systeem haar kan leveren.

Die bestemming wordt vertegenwoordigd door de Windows-laag.

De Surface-connector biedt het kruispunt tussen renderer en window. Hij legt uit hoe gerenderde output aan het bruikbare gebied van het window wordt gekoppeld, en hoe de renderer genoeg informatie van het window ontvangt om correct output te blijven produceren. Zonder deze connector kan de renderer output produceren, maar zou de Stack geen expliciete verklaring hebben voor hoe die output verbonden wordt met het window dat haar presenteert.

Eenvoudiger gezegd: een renderer maakt output. Een window biedt de plaats waar die output kan worden geleverd. De Surface-connector laat die twee samenwerken.

### Het gerenderde gebied

Een surface kan worden begrepen als het bruikbare gebied van een window dat gerenderde output ontvangt. In een traditionele grafische applicatie is dit makkelijk voor te stellen: een renderer tekent in het binnengebied van een window. Maar hetzelfde principe geldt breder. De surface is niet slechts “het scherm.” Het is de connector die gerenderde output een plaats geeft binnen de grenzen van het window.

Dit is belangrijk omdat een renderer het window meestal niet bezit. De renderer weet misschien hoe output geproduceerd moet worden, maar het window is de laag die de actieve view in het systeem biedt. Het window kan een grootte, positie, toestand, schaal, focus of andere door het systeem beheerde condities hebben. De Surface-connector maakt deze condities beschikbaar aan de renderer op de manier die nodig is om output correct te leveren.

Een renderer moet mogelijk de huidige grenzen van het window kennen. Hij moet mogelijk weten wanneer die grenzen zijn veranderd. Hij kan een doel nodig hebben om in te tekenen, naar te schrijven, in te streamen of anderszins bij te werken. Deze details kunnen per implementatie verschillen, maar de conceptuele verantwoordelijkheid blijft hetzelfde: de Surface-connector verbindt renderer-output met de windowcontext die haar zal bevatten.

Zo voorkomt hij dat de renderer doet alsof hij de systeemgrens bezit, en dat het window doet alsof het weet hoe rendering werkt.

### Meer dan een eindbeeld

Het kan verleidelijk zijn om de Surface-connector te zien als iets dat simpelweg een voltooid resultaat naar een window doorgeeft. In sommige gevallen is die beschrijving voldoende. Een renderer bereidt output voor, de surface draagt die naar het window, en de gebruiker neemt het resultaat uiteindelijk waar.

Rendering is echter vaak een voortdurende relatie in plaats van één enkele levering. Een window kan van grootte veranderen. De actieve toestand kan veranderen. Het systeem kan om een redraw vragen. De renderer moet misschien continu bijwerken, wachten op een signaal, of zijn output synchroniseren met de huidige toestand van het window. De Surface-connector biedt de plaats waar deze relatie kan worden uitgedrukt.

Daarom is de Surface-connector niet slechts een container voor voltooide output. Hij is de verbinding tussen de handeling van rendering en het window dat het resultaat ontvangt. Hij laat de renderer reageren op de condities van het window zonder dat de renderer verantwoordelijk wordt voor het zijn van het window.

De output blijft bij de renderer horen. De grens blijft bij het window horen. De Surface-connector draagt de relatie tussen beide.

### Interacties terug omhoog doorgeven

Omdat de Stack omkeerbaar is, neemt de Surface-connector ook deel aan de bottom-up stroom. Wanneer een interactie bij het systeem begint en een window binnenkomt, moet zij uiteindelijk omhoog bewegen naar de delen van de Stack die haar kunnen begrijpen en afhandelen.

De Surface-connector draagt deze interactie vaak van het window naar de renderer. In veel gevallen hoeft hij niet veel meer te doen dan de informatie bewaren en haar verder omhoog laten bewegen. Een pointerbeweging, toetsaanslag, focuswijziging, resize-event of andere interactie kan via het window binnenkomen en vervolgens de surface oversteken zodat de renderer en hogere lagen naar behoefte kunnen reageren.

Dat betekent niet dat de Surface-connector verantwoordelijk is voor het beslissen welke component de interactie moet afhandelen. Die verantwoordelijkheid ligt hoger in de Stack, vooral zodra de interactie de graph en het frame bereikt. De Surface-connector geeft de interactie simpelweg een pad over de grens tussen window en renderer.

In de top-down stroom draagt de Surface-connector gerenderde output naar het window. In de bottom-up stroom draagt hij interactie-informatie die uit het window komt terug naar de renderer en de lagen erboven.

### Het window gescheiden houden

De Surface-connector is belangrijk omdat hij voorkomt dat renderer en window in dezelfde verantwoordelijkheid samenvallen. Zonder deze connector zou een renderer te veel over het window moeten weten, of het window te veel over de renderer. Beide richtingen verzwakken de scheiding die de Stack nuttig maakt.

Een window biedt de actieve, systeemgerichte grens. Het vertegenwoordigt de view, container of leveringsplaats. Een renderer produceert output die door die grens kan worden geleverd. De Surface-connector staat ertussen zodat elke laag gericht kan blijven op haar eigen doel.

Deze scheiding wordt vooral nuttig wanneer een renderer met meer dan één soort window kan worden gebruikt, of wanneer een window meer dan één soort renderer kan ondersteunen. De connector geeft het Model een plaats om de relatie te beschrijven zonder de twee lagen hard aan elkaar te koppelen. Een renderer kan aan een geschikte surface worden gekoppeld. Een window kan een geschikte surface beschikbaar stellen. De Surface-connector legt uit hoe die koppeling plaatsvindt.

Dit laat renderer en window samenwerken zonder ononderscheidbaar te worden.

### Output behouden

Een Surface-connector moet de gerenderde output behouden terwijl zij het window binnengaat. Dit betekent niet dat de output nooit wordt getransformeerd, geschaald, afgesneden, gesynchroniseerd of voorbereid volgens de eisen van het window. Het betekent dat de output trouw moet blijven aan wat de renderer heeft geproduceerd en geleverd moet worden op een manier die past bij de actieve windowcontext.

Als het window van grootte verandert, kan de Surface-connector helpen die wijziging te communiceren. Als het window inactief, verborgen, geminimaliseerd of anderszins niet beschikbaar wordt, kan de connector de renderer helpen passend te reageren. Als de renderer een doel nodig heeft dat door het window wordt geleverd, kan de connector dat doel vasthouden of beschikbaar maken. Deze verantwoordelijkheden zijn niet hetzelfde als rendering, en niet hetzelfde als het zijn van het window. Het zijn de verantwoordelijkheden van de verbinding tussen beide.

Dit is de hoofdvorm van de Surface-connector: hij behoudt de output van de renderer terwijl hij die aanpast aan de leveringscontext van het window.

### Waarom de connector ertoe doet

De Surface-connector voorkomt dat de Stack gerenderde output verwart met het window dat haar bevat. Zonder deze connector zou een renderer moeten doen alsof hij het window bezit, of een window zou moeten doen alsof het rendering rechtstreeks begrijpt.

Door de Surface-connector te definiëren, krijgt deze overgang een eigen plaats in het Model.

Renderers blijven verantwoordelijk voor het omzetten van voorbereide informatie naar output-ready vorm. Windows blijven verantwoordelijk voor het bieden van de begrensde, systeemgerichte context waardoor output en interactie kunnen passeren. De Surface-connector handelt de beweging tussen beide af.

Dit is het punt in de Stack waar gerenderde informatie een bestemming krijgt. Hier houdt output op slechts geproduceerd te zijn en wordt zij gekoppeld aan de plaats waar zij kan worden geleverd. Van daaruit kunnen Windows de output verder naar Systems dragen, waar zij uiteindelijk iets kan worden dat de gebruiker kan waarnemen en beantwoorden.
