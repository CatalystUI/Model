<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 7. Interactions

## Samenvatting per onderwerp

Op dit punt kunnen we een gebruikersinterface via het CatalystUI Model veel duidelijker beschrijven dan voorheen. We kunnen de informatiestroom identificeren, die informatie in domains classificeren, haar door de Stack volgen en uitleggen hoe connectors haar van de ene laag naar de volgende verplaatsen en transformeren. Daardoor begint veel van het mysterie achter gebruikersinterfaces te verdwijnen. We kunnen zien waar informatie begint, waar zij heen gaat, hoe zij verandert en hoe zij uiteindelijk de gebruiker bereikt.

Zijn we dan klaar? Niet helemaal. Er is nog één essentieel stuk van de puzzel dat we niet volledig hebben behandeld: _jij!_

Het belangrijkste deel van elke gebruikersinterface is de persoon die haar gebruikt. Zonder gebruiker verliest de interface haar doel. Op dat punt zouden we slechts beschrijven hoe één machine met een andere communiceert, zoals een server die data naar een API stuurt, of een programma dat instructies aan een ander programma doorgeeft. Die uitwisselingen kunnen nuttig zijn, maar zij zijn niet het volledige onderwerp van het Model. Een gebruikersinterface bestaat omdat een persoon iets moet waarnemen, begrijpen, kiezen of op een bepaalde manier beantwoorden. Zelfs als je kat op je toetsenbord stapt, de Kattengoden aanroept en de aarde terugbrengt naar hun rechtmatige troon, blijft het punt hetzelfde: iets buiten het systeem heeft op het systeem gehandeld, en de interface moet nu reageren.

Daarom doet de “Human Interface” ertoe. We hebben haar al geïdentificeerd als het impliciete eindpunt onderaan de Stack, maar nu moeten we nauwkeuriger kijken naar wat daar gebeurt. Informatie bereikt de gebruiker niet simpelweg om daarna te stoppen. De gebruiker kan reageren. Hij kan klikken, spreken, bewegen, typen, luisteren, negeren, aarzelen, verkeerd begrijpen of handelen op een manier die het systeem niet verwachtte. Die reactie wordt deel van de stroom.

Daarom moeten we nog één soort data identificeren en volgen: _interaction_. Een interaction is de uitwisseling die plaatsvindt wanneer informatie de gebruiker bereikt, de gebruiker reageert en het systeem die reactie ontvangt als deel van de voortdurende stroom. Het is het punt waarop het Model niet alleen over presentatie gaat, maar over deelname. De interface toont niet alleen informatie aan een persoon; zij laat die persoon beïnvloeden wat er daarna gebeurt.

Rechtstreekser gezegd: _een interaction is de intentie achter een actie_. De klik, tik, swipe, opdracht, beweging of gesproken zin is alleen het zichtbare deel. Achter die actie zit iets wat de gebruiker _probeert_ te doen. Hij wil een menu openen, vooruit bewegen, een formulier verzenden, een lied pauzeren, een waarschuwing sluiten, een lamp aanzetten, of simpelweg uitzoeken wat er gebeurt. Het systeem ontvangt misschien alleen een signaal, maar de gebruiker verzendt niet slechts een signaal. De gebruiker doet een verzoek.

### Moderne frustraties met technologie

Hier beginnen veel moderne frustraties met technologie. Een gebruiker handelt met een bepaalde intentie, maar het systeem interpreteert die intentie verkeerd, reageert te langzaam of negeert haar volledig. We kennen dit allemaal: een knop die klikbaar lijkt maar niets doet, een pagina die bevroren lijkt, een apparaat dat ons hoorde maar ons niet begreep, of een interface die technisch werkte maar niet reageerde op een manier die we konden waarnemen. In elk geval deed de gebruiker een verzoek, maar het systeem antwoordde niet duidelijk. Wanneer dat gebeurt, is frustratie geen mysterie. Het is het natuurlijke gevolg van een interaction die verkeerd is begrepen, vertraagd of onopgelost is gebleven.

Daarom zijn interactions zo bijzonder. Anders dan veel andere vormen van data zijn zij zowel bidirectioneel als transformerend. Ze bewegen van het systeem naar de gebruiker als output die kan worden waargenomen, en van de gebruiker terug naar het systeem als intentie die verwerkt moet worden. Ze kunnen uiteindelijk digitale data wijzigen, een nieuwe output veroorzaken, een toestand veranderen, of niets doen als het systeem bepaalt dat de intentie niet geldig is. Maar zelfs een “no-op” blijft deel van de interaction, omdat het systeem nog steeds op de intentie heeft gereageerd.

### Interaction data volgen

Binnen de Stack begint interaction data bij de Human Interface en komt zij via het System binnen. Het System detecteert een actie: een toetsdruk, pointerbeweging, touch-event, apparaatsignaal, gesproken commando of andere vorm van input. Die actie beweegt door Windows, Renderers, Graphs & Frames en uiteindelijk naar Components, Controls, & Layouts, waar de juiste control of component haar kan afhandelen.

Tijdens die reis kan de interaction worden vertaald, verrijkt of gerouteerd. Een raw key press kan een command worden. Een pointerlocatie kan aan een specifiek component worden gekoppeld. Een gesproken zin kan worden geïnterpreteerd als intentie. Een resize-event kan layouts opnieuw laten berekenen. Connectors helpen die beweging tussen lagen te dragen, terwijl de lagen bepalen wat de interaction binnen hun context betekent.

Het belangrijke punt is dat een interaction niet alleen de fysieke actie is. Zij is de intentie die het systeem probeert te begrijpen. Een muisklik op verschillende plaatsen kan verschillende dingen betekenen. Dezelfde toets kan tekst invoeren, een shortcut activeren of niets doen, afhankelijk van context. Dezelfde gesproken woorden kunnen een opdracht, vraag of foutieve input zijn. Interaction data vereist daarom context om betekenisvol te worden.

### Interactions en verandering

Wanneer een interaction wordt afgehandeld, kan zij verandering veroorzaken. Een knop kan een menu openen. Een tekstveld kan Digital Data bijwerken. Een audio control kan afspelen starten of stoppen. Een instellingencomponent kan een waarde veranderen die later naar opslag wordt teruggeschreven. In deze gevallen beweegt de interaction omhoog door de Stack en kan uiteindelijk de data beïnvloeden waaruit toekomstige output wordt geproduceerd.

Dit voltooit de cyclus van het Model. Data wordt output, output wordt waargenomen, de gebruiker reageert, en die reactie kan opnieuw data worden. De interface is daarom geen eenrichtingsdisplay. Zij is een gesprek tussen gebruiker en informatiesysteem.

### Waarom interactions ertoe doen

Interactions geven het Model zijn menselijke centrum. Zonder interactions zouden we alleen beschrijven hoe systemen informatie leveren. Met interactions kunnen we beschrijven hoe mensen reageren, kiezen, corrigeren, sturen en deelnemen.

Dit maakt het Model praktischer. Wanneer een interface verkeerd voelt, kunnen we vragen waar de interaction kapotging. Was de output niet waarneembaar? Was de intentie niet duidelijk? Heeft het system de actie verkeerd geïnterpreteerd? Werd de interaction naar de verkeerde component gerouteerd? Werd de verandering niet teruggeschreven naar Digital Data? Door interactions als data te behandelen, kunnen zulke problemen preciezer worden gevonden.

Kort gezegd beschrijven interactions de intentie achter gebruikersacties en de manier waarop die intentie door het systeem beweegt. Zij zijn het punt waarop de gebruiker niet alleen ontvanger van informatie is, maar deelnemer aan de informatiestroom. Wanneer interactions goed worden behandeld, voelt een interface helder, responsief en betrouwbaar — alsof het systeem werkelijk begrijpt wat de gebruiker probeert te doen.
