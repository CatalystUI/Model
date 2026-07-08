<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 3. Reference

Hieronder staat het Model samengevat in verschillende vormen, zodat het makkelijker te raadplegen is.

## Als AI-prompt

Een AI-prompt waarmee een LLM het CatalystUI Model kan interpreteren en begrijpen. Dit kan worden gebruikt om vragen over het Model te stellen, of als referentieblad tijdens probleemoplossing in een echte programmatische omgeving.

---

```md
Het CatalystUI Framework is een verzameling C#-programmeerhulpmiddelen voor gebruikersinterface-ontwikkeling in moderne software.

Het CatalystUI Model beschrijft de informatiestroom tussen een gebruiker en een informatiesysteem. Het classificeert data via Domains, lokaliseert data binnen de Stack, transformeert data via Connectors en volgt gebruikersintentie via Interactions.

Het Model is verdeeld in vier hoofdonderdelen:

- Domains
- The Stack
- Connectors
- Interactions

Domains categoriseren het soort informatie dat wordt behandeld. De zeven top-level domains zijn Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory en Multisensory. Symbolic beschrijft informatie voordat zij aan een specifiek zintuig is verbonden. Visual beschrijft informatie die bedoeld is om gezien te worden. Auditory beschrijft informatie die bedoeld is om gehoord te worden. Tactile beschrijft informatie die bedoeld is om gevoeld te worden. Olfactory beschrijft informatie die bedoeld is om geroken te worden. Gustatory beschrijft informatie die bedoeld is om geproefd te worden. Multisensory beschrijft meerdere zintuiglijke categorieën die samenwerken als één ervaring.

De Stack beschrijft waar informatie zich bevindt in de stroom tussen opgeslagen data, systeemoutput en menselijke interactie. De Stack bestaat uit twee impliciete lagen en zeven expliciete lagen:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage is de impliciete bron of bestemming waar persistente data beschikbaar blijft buiten de actieve interfacestroom. Digital Data is data nadat zij de actieve interfacestroom is binnengekomen in een door de computer leesbare vorm, maar voordat de rest van het Model haar heeft geïnterpreteerd, georganiseerd of gepresenteerd. Structure & Semantics beschrijft hoe digitale data moet worden begrepen; semantics definiëren de regels voor interpretatie, terwijl structure het georganiseerde resultaat is van het toepassen van die regels. Components, Controls, & Layouts vertegenwoordigen de logische en bruikbare onderdelen van de interface; components vertegenwoordigen bruikbare interfaceobjecten, controls verwerken interactions, en layouts rangschikken andere components of controls. Graphs & Frames organiseren die onderdelen in grotere relaties en actieve contexten; graphs vertegenwoordigen georganiseerde relaties tussen interfaceobjecten, terwijl frames graphs bevatten en coördineren voor renderer-gerichte voorbereiding. Renderers transformeren voorbereide interfacedata naar een output-ready vorm. Windows bieden een view of context waardoor de gebruiker input aan het system kan geven of output van het system kan ontvangen. Systems leveren de omgeving, services, apparaten en processen die uiteindelijk output leveren en input ontvangen. De Human Interface is het impliciete eindpunt waar de gebruiker informatie waarneemt en via interaction reageert.

Connectors beschrijven hoe informatie tussen aangrenzende expliciete lagen van de Stack beweegt. Van boven naar beneden zijn de connectors:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

De Data-connector verbindt Digital Data met Structure & Semantics. Hij brengt actieve computerleesbare informatie in een gestructureerde vorm die het Model kan begrijpen, en kan gestructureerde informatie ook terugbrengen naar digitale vorm.

De Parser-connector verbindt Structure & Semantics met Components, Controls, & Layouts. Hij parset stabiele geïnterpreteerde structuren naar veranderlijke interfaceonderdelen, en kan gewijzigde components ook terugbrengen naar gestructureerde data.

De Adapter-connector verbindt Components, Controls, & Layouts met Graphs & Frames. Hij adapteert bruikbare interfaceonderdelen naar georganiseerde relaties en actieve contexten, en helpt contextuele interactions terug te brengen naar de components of controls die ze kunnen afhandelen.

De Bridge-connector verbindt Graphs & Frames met Renderers. Hij draagt georganiseerde interfacecontext naar de renderer en geeft interactions meestal met weinig wijziging terug omhoog zodat de graph en het frame ze passend kunnen routen.

De Surface-connector verbindt Renderers met Windows. Hij geeft gerenderde output een bestemming binnen het window en draagt interaction-informatie die uit het window komt terug omhoog.

De Native-connector verbindt Windows met Systems. Hij levert bindings tussen het window en het system, waardoor het window kan bestaan, interactions kan ontvangen, output kan leveren en met native systeemgedrag kan communiceren.

Interactions zijn het punt waarop het Model participatief wordt. Een interaction is de intentie achter een actie. De klik, tik, swipe, opdracht, beweging of gesproken zin is alleen de zichtbare actie; de interaction is wat de gebruiker door die actie probeert te bereiken. Interactions bewegen door de Stack, worden door connectors getransformeerd en kunnen uiteindelijk Digital Data wijzigen voordat de cyclus opnieuw begint.

Gebruik het CatalystUI Model om het soort informatie te classificeren, te bepalen waar die informatie zich in de Stack bevindt, vast te stellen welke connector verantwoordelijk is voor de overgang tussen lagen, en te volgen hoe informatie beweegt van opgeslagen data naar gebruikerservaring en van gebruikersintentie terug naar data.
```

## Als tekst

Een compact referentieblad dat de primaire volgorde van het CatalystUI Model toont.

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | Korte betekenis                                               |
| ------------ | ------------------------------------------------------------- |
| Symbolic     | Informatie vóór koppeling aan een specifiek zintuig.          |
| Visual       | Informatie die bedoeld is om gezien te worden.                |
| Auditory     | Informatie die bedoeld is om gehoord te worden.               |
| Tactile      | Informatie die bedoeld is om gevoeld te worden.               |
| Olfactory    | Informatie die bedoeld is om geroken te worden.               |
| Gustatory    | Informatie die bedoeld is om geproefd te worden.              |
| Multisensory | Meerdere zintuiglijke categorieën als één ervaring.           |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Layer   | Naam                            | Korte betekenis                                                           |
| ------- | ------------------------------- | ------------------------------------------------------------------------- |
| Implied | Data Storage                    | Persistente data buiten de actieve interfacestroom.                       |
| Layer 7 | Digital Data                    | Actieve computerleesbare informatie vóór interpretatie.                   |
| Layer 6 | Structure & Semantics           | Geïnterpreteerde data en de regels die haar betekenis geven.              |
| Layer 5 | Components, Controls, & Layouts | Veranderlijke interfaceonderdelen die door het programma worden gebruikt. |
| Layer 4 | Graphs & Frames                 | Georganiseerde relaties en actieve interfacecontext.                      |
| Layer 3 | Renderers                       | Processen die informatie voorbereiden voor output.                        |
| Layer 2 | Windows                         | Views of leveringscontexten waar input en output passeren.                |
| Layer 1 | Systems                         | De omgeving, services, apparaten en processen onder de interface.         |
| Implied | Human Interface                 | De gebruiker die output waarneemt en via interaction reageert.            |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Verbindt                                                | Korte betekenis                                          |
| --------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | Verbindt actieve digitale data met geïnterpreteerde structuur. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Parset stabiele structuren naar veranderlijke interfaceonderdelen. |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adapteert bruikbare onderdelen naar georganiseerde context. |
| Bridge    | Graphs & Frames ↔ Renderers                             | Overbrugt georganiseerde context naar rendering.         |
| Surface   | Renderers ↔ Windows                                     | Verbindt gerenderde output met een window.               |
| Native    | Windows ↔ Systems                                       | Levert bindings tussen een window en het system.         |

## Volgens stroom

Een compacte referentie voor het volgen van informatie door het Model.

---

### Output-gerichte stroom

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

### Interaction-gerichte stroom

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

## Volgens verantwoordelijkheid

Een snelle referentie om te bepalen waar iets in het Model thuishoort.

---

| Vraag                                                 | Gebruik      |
| ----------------------------------------------------- | ------------ |
| Wat voor soort informatie wordt behandeld?            | Domains      |
| Waar bevindt de informatie zich in de stroom?         | The Stack    |
| Hoe beweegt informatie tussen aangrenzende lagen?     | Connectors   |
| Wat probeert de gebruiker te bereiken?                | Interactions |

## Volgens diagnostische vraag

Een vraaggerichte referentie voor het toepassen van het Model op een bestaand systeem.

---

| Vraag                                                       | Waarschijnlijk gebied                    |
| ----------------------------------------------------------- | ---------------------------------------- |
| Is data beschikbaar maar niet begrepen?                     | Digital Data, Data, Structure & Semantics |
| Is geïnterpreteerde data nog niet bruikbaar?                | Structure & Semantics, Parser, Components |
| Zijn bruikbare onderdelen niet in context georganiseerd?    | Components, Adapter, Graphs & Frames     |
| Bereikt georganiseerde context de renderer niet?            | Graphs & Frames, Bridge, Renderers       |
| Heeft gerenderde output geen bestemming?                    | Renderers, Surface, Windows              |
| Is het window niet goed verbonden met het system?           | Windows, Native, Systems                 |
| Heeft het system een actie gedetecteerd maar de intentie gemist? | Interactions en interaction routing  |

## Als samenvatting in één zin

Een compacte samenvatting van het hele Model.

---

```md
Het CatalystUI Model beschrijft de informatiestroom tussen een gebruiker en een informatiesysteem door data via Domains te categoriseren, data binnen de Stack te lokaliseren, data via Connectors te transformeren en gebruikersintentie via Interactions te volgen.
```
