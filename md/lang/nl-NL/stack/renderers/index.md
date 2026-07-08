<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 5.6 The Stack :: Renderers

## Uitgebreide bespreking

### Voorbereide informatie omzetten naar output

**Renderers** is Layer 3 van de Stack. Deze laag is verantwoordelijk voor het omzetten van georganiseerde, voorbereide interfaceinformatie naar een output-ready vorm die uiteindelijk door een window en system kan worden geleverd. Een renderer neemt dus niet zomaar ruwe data. Hij ontvangt context die door hogere lagen is geïnterpreteerd, bruikbaar gemaakt en georganiseerd.

In gewone software wordt rendering vaak met graphics geassocieerd. OpenGL, Vulkan, Direct3D, Metal en vergelijkbare libraries tekenen beelden. In het CatalystUI Model is rendering echter breder. Een renderer kan visual, auditory, tactile of een ander domain bedienen. Een audio renderer kan geluidsgolven of audiobuffers produceren. Een haptic renderer kan feedbackpatronen produceren. Een text renderer kan glyphs of symbolische output voorbereiden. De kern is niet het soort zintuig, maar de rol: voorbereide informatie omzetten naar een vorm die richting waarneming kan bewegen.

### Rendering is transformatie

Rendering is een transformatie tussen de georganiseerde interfacecontext en output die door een lager systeem kan worden geleverd. Een graph en frame kunnen zeggen wat bestaat, waar het thuishoort en welke state actief is. De renderer zet die informatie om naar draw commands, audio buffers, haptic events, terminal output of een andere output-ready representatie.

Deze stap is nodig omdat de lagere lagen meestal niet weten wat een component, layout of graph betekent. Een GPU begrijpt geen “button” als gebruikersinterfaceconcept. Een audiodriver begrijpt geen “song component” als object uit Layer 5. De renderer vertaalt de voorbereide interface naar vormen die de delivery path van het system kan dragen.

### Domain-onafhankelijkheid

Renderers zijn domain-onafhankelijk in de zin dat dezelfde laag verschillende zintuiglijke vormen kan bedienen. Het Model zegt niet dat Layer 3 altijd visueel is. Het zegt dat Layer 3 de plaats is waar voorbereide data wordt omgezet naar output-ready vorm. Het domain bepaalt wat voor output dat is.

Dit is belangrijk omdat interfaces niet altijd grafisch zijn. Een command-line interface kan tekstoutput renderen. Een screenreader kan symbolic text naar auditory output renderen. Een gamecontroller kan state naar tactile feedback renderen. Een embedded device kan status naar licht, geluid of fysieke beweging renderen. Het patroon blijft hetzelfde, zelfs wanneer de outputvorm verandert.

### Relatie met Graphs & Frames

Renderers ontvangen informatie van **Layer 4: Graphs & Frames** via de Bridge-connector. Layer 4 organiseert context; Layer 3 produceert output-ready vorm. Deze scheiding voorkomt dat renderers verantwoordelijk worden voor de volledige interfaceorganisatie. Een renderer hoeft niet te bepalen wat elk component betekent of waarom het bestaat. Hij moet weten hoe de voorbereide context moet worden omgezet naar output.

In sommige implementaties kan de renderer extra gegevens nodig hebben, zoals resources, fonts, textures, buffers, device state of timinginformatie. De Bridge-connector kan helpen bepalen wat de grens moet oversteken, maar de verantwoordelijkheid van de renderer blijft gericht op outputproductie.

### Relatie met Windows

Renderers leveren hun resultaat niet rechtstreeks aan de gebruiker. Zij hebben een bestemming nodig. Die bestemming wordt geleverd door **Layer 2: Windows** via de Surface-connector. De renderer produceert output-ready data; de windowlaag biedt de context waarin die output het system kan binnengaan.

In een grafische applicatie kan de renderer tekenen naar een surface die aan een window is gekoppeld. In een audio-applicatie kan de renderer audiobuffers leveren aan een outputcontext. In andere domains kan de renderer output voorbereiden voor een apparaat, kanaal of systeemservice. De renderer transformeert; het window bevat, ontvangt en geeft door.

### Interactions en renderers

In de bottom-up flow kunnen interactions door renderers passeren. Soms hoeft de renderer weinig te doen; hij draagt informatie gewoon omhoog. Soms moet hij de interaction vertalen of aanvullen. Een pointerpositie kan bijvoorbeeld in renderingcoördinaten worden geïnterpreteerd. Een sensorwaarde kan naar een bruikbaar event worden gemapt. Een key input kan worden doorgegeven naar hogere lagen.

De renderer is meestal niet de uiteindelijke plaats waar intentie wordt afgehandeld. Die verantwoordelijkheid ligt hoger, vooral bij controls. Maar de renderer kan helpen de interaction in een vorm te plaatsen die hogere lagen kunnen begrijpen.

### Waarom de laag ertoe doet

Renderers voorkomen dat de Stack doet alsof georganiseerde interfacecontext vanzelf output wordt. Er moet een laag zijn die voorbereide informatie omzet naar een vorm die door windows, systems en apparaten kan worden geleverd. Door Renderers als Layer 3 te definiëren, behoudt het Model een duidelijke grens tussen organisatie en outputproductie.

Deze laag maakt het ook mogelijk om CatalystUI over meerdere domains heen te gebruiken. Rendering is niet “tekenen”; tekenen is één soort rendering. Rendering is de omzetting van voorbereide interface-informatie naar output-ready representatie.
