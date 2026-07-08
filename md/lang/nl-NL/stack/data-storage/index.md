<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 5.0 The Stack :: Data Storage

## Uitgebreide bespreking

### De impliciete bron van data

**Data Storage** is de impliciete laag boven de expliciete Stack. Zij vertegenwoordigt de plaats waar informatie blijft bestaan buiten de actieve interfacestroom. Dit kan een bestandssysteem zijn, een database, een webservice, een geheugenopslag, een cloud-API, een apparaatopslag of een andere vorm waarin data beschikbaar blijft voordat de interface haar actief gebruikt.

Deze laag is _implied_ omdat het CatalystUI Model haar niet rechtstreeks als een expliciete interface-laag behandelt. Toch moet zij bestaan. Als informatie later in de interface kan verschijnen, gewijzigd kan worden of opnieuw kan worden geladen, dan moet die informatie ergens vandaan komen of ergens naartoe gaan. Data Storage is die bron of bestemming.

### Waarom Data Storage buiten de Stack staat

De Stack begint expliciet bij **Layer 7: Digital Data**, omdat dat het moment is waarop informatie de actieve interfaceflow binnenkomt in een computerleesbare vorm. Data Storage zelf kan veel verschillende vormen aannemen en kan buiten de directe verantwoordelijkheid van de interface vallen. Een bestand op schijf, een SQL-database, een externe service en een streamingsysteem gedragen zich allemaal anders. Het Model hoeft ze niet allemaal als afzonderlijke interfacelagen te behandelen om de interfaceflow te kunnen beschrijven.

Door Data Storage impliciet te houden, blijft de Stack gericht op wat er gebeurt zodra informatie actief wordt gebruikt. De opslagvorm kan belangrijk zijn voor implementatie, prestaties, betrouwbaarheid en eigenaarschap, maar de eerste expliciete stap in de interface begint wanneer opgeslagen informatie als Digital Data beschikbaar wordt gemaakt.

### Relatie met Digital Data

Data Storage en Digital Data zijn nauw verwant, maar niet hetzelfde. Data Storage is waar persistente informatie verblijft. Digital Data is de actieve representatie van die informatie nadat zij in de interfaceflow is gebracht. Een bestand op schijf kan Data Storage zijn. De bytes die uit dat bestand zijn gelezen en door de interface worden behandeld, zijn Digital Data. Een databaserij kan in opslag bestaan. Het queryresultaat dat de applicatie ontvangt, wordt Digital Data.

Dit onderscheid voorkomt dat het Model opslagmechanismen verwart met actieve informatie. De Stack hoeft niet te weten of de data uit een bestand, database of netwerk kwam om haar verdere beweging te beschrijven. Zodra zij actief is, kan zij door Structure & Semantics, Components, Graphs, Renderers, Windows en Systems bewegen.

### Terugschrijven naar opslag

Omdat de Stack omkeerbaar is, is Data Storage ook de bestemming voor veranderingen die uit interactions voortkomen. Een gebruiker kan een instelling wijzigen, een document bewerken, een bestand opslaan, een formulier versturen of een toestand veranderen die later behouden moet blijven. Die wijziging beweegt omhoog door de Stack totdat zij opnieuw Digital Data wordt, waarna zij naar Data Storage kan worden teruggeschreven.

Niet elke interaction hoeft Data Storage te bereiken. Sommige veranderingen zijn tijdelijk: focus, hover, selectie, playback position of een open menu kunnen belangrijk zijn in de actieve interface zonder permanent te worden bewaard. Maar wanneer een verandering blijvend moet worden, eindigt de stroom uiteindelijk opnieuw bij opslag.

### Waarom de laag ertoe doet

Data Storage herinnert ons eraan dat interfaces niet uit het niets beginnen. De gebruiker ziet misschien alleen output, maar die output is vaak verbonden met informatie die ergens is opgeslagen. Door Data Storage als impliciet eindpunt te benoemen, kan het Model de volledige cyclus beschrijven: opgeslagen informatie wordt actieve Digital Data, beweegt naar waarneembare output, ontvangt gebruikersintentie, verandert mogelijk, en kan daarna opnieuw worden opgeslagen.

Deze laag blijft buiten de expliciete nummering, maar haar aanwezigheid maakt de stroom compleet.
