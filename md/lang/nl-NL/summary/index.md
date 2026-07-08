<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 2. Summary

## De informatiestroom

> **Opmerking:** Deze sectie dient als het high-level overzicht van het Model. Latere documentatie biedt respectievelijk de samenvattingen per onderwerp en de uitgebreide besprekingen.

Om te begrijpen hoe een gebruikersinterface werkt, moeten we eerst “_de informatiestroom_” definiëren. Elke dag, of mensen het nu beseffen of niet, interageren zij met informatiesystemen — of dat nu een smartphone, computer of winkelsensor bij een deur is (daarover later meer). In elk systeem wordt informatie gepresenteerd, interpreteert de gebruiker die informatie, reageert de gebruiker eventueel, en verwerkt het systeem die reactie. Daarna presenteert het systeem opnieuw informatie, en de cyclus herhaalt zich gedurende de interactie. De cyclus kan op elk punt beginnen: informatie kan al lang zijn gepresenteerd voordat de gebruiker haar kon interpreteren, of een gebruiker kan reageren zonder dat informatie eerst is gepresenteerd. Ongeacht wanneer of hoe de stroom begint, blijft dezelfde cyclus gelden.

Het CatalystUI Model is rond deze stroom gebouwd. Het biedt een high-level structuur om te beschrijven hoe informatie tussen een gebruiker en een informatiesysteem beweegt, zelfs wanneer het systeem niet op een traditionele gebruikersinterface lijkt. Met andere woorden: een winkelsensor bij een deur lijkt misschien bijna magisch een persoon te “voelen,” maar de informatiestroom maakt het proces eenvoudig. De gebruiker ziet de deuropening, herkent het pad naar voren en loopt het detectiegebied binnen. Die beweging wordt input voor het systeem. Het systeem verwerkt die input, opent de deur als waarneembare output, en de gebruiker reageert door door te lopen. Na een korte vertraging sluit het systeem de deur, waarmee de uitwisseling eindigt totdat een andere actie de cyclus opnieuw start.

Samen met de informatiestroom definieert een _gebruikersinterface_ hoe die stroom binnen een bepaald informatiesysteem plaatsvindt. Zij bepaalt hoe het systeem input accepteert, output produceert en de gebruiker ermee laat interageren. Omdat elk systeem andere behoeften heeft, zijn in de loop van de tijd veel verschillende manieren ontstaan om deze interacties te beschrijven en te implementeren, waaronder “human interfaces” (“HI”), “human-machine interfaces” (“HMI”) en “human-computer interfaces” (“HCI”). In het moderne computertijdperk is de bekendste vorm hiervan de “graphical user interface” (“GUI”).

Wanneer we de verschillende implementaties vergelijken, begint een gemeenschappelijk patroon zichtbaar te worden. Ondanks hun uiterlijke verschillen kunnen we drie concepten herkennen die in alle gebruikersinterfaces voorkomen: 1) “domains,” die data categoriseren en organiseren; 2) “the stack,” die data vertegenwoordigt en uitlegt; en 3) “connectors,” die data transformeren, wijzigen en vertalen. Elk concept is op zichzelf nuttig, maar samen vormen zij een _omkeerbaar_ _systeem_ dat zowel de volledige interface als de afzonderlijke processen kan beschrijven. Hier wordt de kracht van het CatalystUI Model duidelijk: door interactie te scheiden in categorisatie, representatie en vertaling, worden informatiesystemen makkelijker uit te leggen, te debuggen en te begrijpen.
