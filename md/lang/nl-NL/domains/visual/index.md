<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 4.2 Domains :: Visual

## Uitgebreide bespreking

Waar het **symbolic** domain data beschrijft voordat die aan een specifiek zintuig is verbonden, beschrijft het **visual** domain data zodra die voor zicht is gevormd. Visual data is informatie die bedoeld is om gezien te worden: een afbeelding, gerenderde tekst of een zichtbare control. Het belangrijke onderscheid is niet of de data ooit op een scherm _zou kunnen_ verschijnen, maar of haar huidige rol in de interactie is om via zicht te communiceren.

Visual data moet daarom niet worden verward met de opgeslagen vorm erachter. Een bestand dat afbeeldingsdata bevat, blijft symbolic zolang het alleen als opgeslagen informatie bestaat. Een tekstparagraaf blijft symbolic zolang die alleen als tekens, markup of een andere abstracte representatie bestaat. Zij wordt visual wanneer het systeem haar presenteert in een vorm die de gebruiker kan zien en interpreteren. De verandering is niet dat de data belangrijker wordt; de verandering is dat haar communicatiemethode verschuift van representatie naar waarneming.

Visual data komt bijzonder vaak voor omdat zicht veel relaties tegelijk kan communiceren. Grootte, kleur, afstand, richting, groepering en beweging kunnen de gebruiker allemaal helpen begrijpen wat iets is, waar het thuishoort en of erop gehandeld kan worden. Daarom voelen visuele interfaces vaak direct. Een gebruiker kan naar een window, webpagina of gamescène kijken en betekenis oppikken voordat elk woord is gelezen. Het systeem toont niet alleen data; het rangschikt data tot een zichtbare ervaring.

### Visual data begrijpen

Een nuttige manier om visual data te begrijpen is te kijken naar **plaatsing**, **uiterlijk** en **toestand**. Dit zijn geen formele sub-domains of verplichte categorieën van het CatalystUI Model, maar ze helpen praktisch herkennen hoe visuele informatie betekenis communiceert.

**Plaatsing** beschrijft waar visual data verschijnt en hoe zij zich verhoudt tot de informatie eromheen. Een kop boven een alinea communiceert eigenaarschap. Een knop bij een formulier communiceert samenhang. Een menu boven andere inhoud communiceert tijdelijke prioriteit. Plaatsing doet ertoe omdat de gebruiker zichtbare objecten niet geïsoleerd waarneemt; hij neemt relaties tussen zichtbare objecten waar.

**Uiterlijk** beschrijft hoe visual data zich aan de gebruiker presenteert. Vorm, kleur, typografie, contrast en beeld beïnvloeden allemaal wat de gebruiker denkt te zien. Tekst kan eruitzien als titel, waarschuwing of link afhankelijk van de styling. Een rechthoek kan eruitzien als knop, paneel of decoratie afhankelijk van rand, afstand en context. Uiterlijk geeft visual data haar herkenbare vorm.

**Toestand** beschrijft de huidige conditie die visueel wordt gecommuniceerd. Een control kan actief, uitgeschakeld, geselecteerd, gefocust, ladend of verborgen lijken. Deze toestanden zijn belangrijk omdat de volgende handeling van de gebruiker vaak afhangt van wat de interface klaar lijkt te zijn om te doen. Als de visuele toestand niet overeenkomt met de werkelijke toestand van het systeem, wordt de interface verwarrend, zelfs wanneer de onderliggende logica technisch klopt.

### Visual betekenis

Visual output drukt betekenis uit, maar moet niet worden aangezien voor de betekenis zelf. Een rode rand kan communiceren dat iets fout is, maar de rand is niet de fout. Een icoon kan een actie vertegenwoordigen, maar het icoon is niet de actie. Een layout kan hiërarchie tonen, maar de layout is niet de onderliggende structuur. Visual data is de zintuiglijke uitdrukking van betekenis, niet de volledige bron van betekenis.

Dit onderscheid helpt een veelgemaakte ontwerpfout voorkomen: te veel verantwoordelijkheid leggen op hoe iets eruitziet zonder te bewaren wat het betekent. Als een interface alleen kleur gebruikt om een fout te communiceren, zit de betekenis opgesloten in één visueel signaal. Als een icoon geen ondersteunend label, beschrijving of toegankelijke betekenis heeft, kan het systeem er netjes uitzien terwijl het moeilijker te begrijpen wordt. Visuele helderheid is het sterkst wanneer de zichtbare vorm de onderliggende intentie trouw uitdrukt.

Visual data draagt ook een uniek risico omdat gebruikers geneigd zijn te vertrouwen op wat zij zien. Als iets klikbaar lijkt, verwacht de gebruiker dat het reageert. Als iets uitgeschakeld lijkt, verwacht de gebruiker dat het niet reageert. Als iets geselecteerd lijkt, verwacht de gebruiker dat het systeem het als geselecteerd behandelt. Wanneer presentatie en gedrag niet overeenkomen, ervaart de gebruiker de interface als kapot, zelfs als het programma precies doet wat het is geschreven om te doen.

### Visual data en toegankelijkheid

Het visual domain maakt toegankelijkheid makkelijker te beredeneren omdat het laat zien wanneer informatie alleen via zicht wordt gecommuniceerd. Als een fout alleen door kleur wordt getoond, een grafiek alleen door een afbeelding, of voortgang alleen door animatie, dan is de betekenis mogelijk niet voor elke gebruiker beschikbaar. Het probleem is niet dat visuele communicatie slecht is; het probleem is dat visuele communicatie mogelijk naar een andere vorm vertaald moet worden.

Hier worden domains nuttig als diagnosehulpmiddel. Ze helpen ons vragen waar de betekenis nu leeft. Is zij alleen visual? Kan zij ook symbolic worden vertegenwoordigd? Moet zij via geluid, aanraking of een andere vorm van output beschikbaar zijn? Door die vragen te beantwoorden kan de ontwikkelaar dezelfde betekenis behouden over verschillende soorten waarneming, in plaats van toegankelijkheid als bijzaak te behandelen.

### Visual data in bredere ervaringen

Visual data kan ook deelnemen aan ervaringen die niet puur visueel zijn. Een videospeler kan bewegende beelden met geluid combineren. Een game kan graphics, muziek en controllerfeedback combineren. Een besturingssysteem kan windows, meldingen en invoerapparaten combineren tot één grotere uitwisseling. In zulke situaties identificeert het visual domain het deel van de ervaring dat voor zicht bedoeld is, terwijl andere domains de aanvullende vormen van waarneming beschrijven.

Dit houdt het Model precies. Een visuele interface is niet automatisch de hele gebruikersinterface, en een multisensory ervaring wist het visuele deel erin niet uit. Elk domain helpt identificeren hoe betekenis wordt gedragen. Het visual domain beantwoordt één specifieke vraag: welke informatie wordt zo gevormd dat de gebruiker haar kan zien?

Kort gezegd beschrijft het visual domain de beweging van symbolische representatie naar zichtleesbare output. Het geeft ons een manier om zichtbare informatie te bespreken zonder alle interfaces tot graphics te reduceren. Wanneer visual data goed wordt behandeld, kan de gebruiker herkennen wat het systeem presenteert, begrijpen waarop gehandeld kan worden, en met vertrouwen reageren.
