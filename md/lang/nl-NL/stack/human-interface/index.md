<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 5.9 The Stack :: Human Interface

## Uitgebreide bespreking

### Jij, de end user

**Human Interface** is de impliciete laag onderaan de Stack. Zij vertegenwoordigt de gebruiker: de persoon die output waarneemt, betekenis probeert te begrijpen en door interaction reageert. Deze laag is implied omdat het CatalystUI Model haar niet rechtstreeks programmeert of bestuurt. Toch is zij het hele punt van de interface.

Een gebruikersinterface bestaat niet zodat computers zichzelf kunnen bewonderen. Zij bestaat omdat een mens informatie moet kunnen ontvangen, begrijpen en beïnvloeden. De Human Interface is dus het eindpunt van de output-facing flow en het beginpunt van de interaction-facing flow.

### Waarneembare output ontvangen

Wanneer informatie omlaag door de Stack beweegt, wordt zij uiteindelijk door het system geleverd als iets wat de gebruiker kan waarnemen. Dat kan beeld, geluid, aanraking, geur, smaak of een multisensory combinatie zijn. De Human Interface is waar die output wordt ervaren.

Het systeem kan pixels tonen, geluid afspelen of een apparaat laten trillen, maar de betekenis is pas werkelijk deel van de interface wanneer een gebruiker haar kan waarnemen en interpreteren. De gebruiker ziet de knop, hoort de waarschuwing, voelt de feedback, herkent de verandering of mist haar volledig. Die menselijke ontvangst is geen bijzaak; zij bepaalt of de interface haar doel bereikt.

### Reageren door interaction

De gebruiker is niet alleen een ontvanger. Zodra hij output waarneemt, kan hij reageren. Hij kan klikken, typen, spreken, bewegen, wachten, negeren, aarzelen, verkeerd begrijpen of iets onverwachts doen. Die reactie wordt interaction data wanneer het system haar ontvangt.

Daarom is de Human Interface ook het beginpunt van de bottom-up flow. De gebruiker brengt intentie mee. Het system ontvangt misschien een signaal, maar achter dat signaal zit een bedoeling: iets openen, sluiten, wijzigen, bevestigen, annuleren, begrijpen of verkennen. Het Model behandelt die intentie als essentieel voor het begrijpen van interactions.

### Waarom de laag implied is

De Human Interface is implied omdat het Model de gebruiker niet als programmeerbare laag behandelt. Een framework kan components maken, events routeren, rendering verzorgen en output leveren, maar het kan de gebruiker niet rechtstreeks vertegenwoordigen zoals het een softwareobject vertegenwoordigt. De gebruiker bestaat buiten het systeem.

Toch impliceert elke gebruikersinterface een gebruiker. Als er geen persoon is die output kan waarnemen of intentie kan teruggeven, beschrijven we misschien communicatie tussen systemen, maar niet volledig een gebruikersinterface. Daarom staat de Human Interface buiten de expliciete nummering en fungeert zij als eindpunt van de stroom.

### Mensen zijn niet randgevallen

Deze laag herinnert ons eraan dat de interface voor echte mensen bestaat. Mensen hebben verschillende zintuigen, behoeften, beperkingen, verwachtingen, talen, gewoonten, emoties en contexten. Een interface kan technisch correct zijn en toch menselijk verkeerd voelen. Zij kan data leveren maar betekenis verbergen. Zij kan reageren maar niet duidelijk genoeg. Zij kan “werken” en toch frustreren.

Door de Human Interface expliciet als implied endpoint te benoemen, dwingt het Model ons om te vragen of output werkelijk wordt waargenomen, of intentie werkelijk wordt begrepen, en of de cyclus voor de gebruiker zinvol blijft.

### Kleine waarschuwing over katten

We hopen natuurlijk dat de end user een **mens** is. De Stack is ontworpen voor mensen. Voor niet-mensen werkt hij waarschijnlijk minder geweldig. Mogelijk **honden**. Of **katten**.

Je wilt misschien eigenlijk je toetsenbord tegen je kat beschermen. Het is waarschijnlijk beter dat we ze niet **zoveel macht** geven. Dat stijgt ze naar de kop, en dan zijn ze niet meer te stoppen.

Ik bedoel, je kunt het proberen, maar succes daarmee.

Alle eer aan onze nieuwe **katachtige overheersers**, denk ik dan maar.

### Waarom de laag ertoe doet

De Human Interface maakt duidelijk dat de Stack uiteindelijk niet over machines alleen gaat. De informatiestroom is pas compleet wanneer output de gebruiker bereikt en de gebruiker de kans krijgt om te reageren. Door deze laag te benoemen, kan CatalystUI de volledige cyclus beschrijven: data wordt ervaring, ervaring roept intentie op, intentie wordt interaction, en interaction kan opnieuw data veranderen.

Deze laag is implied, maar zonder haar heeft de rest van de Stack geen doel.
