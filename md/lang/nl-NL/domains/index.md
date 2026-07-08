<!--
Deze vertaling is gegenereerd door ChatGPT en moet door een menselijke vertaler worden nagekeken.
Verwijder deze regels in een pull request nadat de vertaling is geverifieerd.
-->

# 4. Domains

## Samenvatting per onderwerp

Om het CatalystUI Model te beschrijven, moeten we beginnen met domains. Een _domain_ beschrijft de categorie data die tijdens een interactie wordt behandeld. Het is de eerste stap in het uiteenrafelen van de informatiestroom. Het identificeert met wat voor _soort_ informatie het systeem werkt. Een winkelsensor bij een deur kan visuele of ruimtelijke signalen gebruiken om beweging te detecteren. Een gamecontroller kan tactiele informatie gebruiken om haptische feedback te produceren. Een slimme luidspreker kan met auditieve informatie werken wanneer hij spraak verwerkt. In bijna alle gevallen sluiten domains aan bij de manier waarop mensen de wereld waarnemen. Het Model houdt ook rekening met data voordat die aan een specifiek zintuig is gekoppeld, en met data die meerdere zintuigen tegelijk omvat. Daarom zijn de zeven domains gedefinieerd als “symbolic,” “visual,” “auditory,” “tactile,” “olfactory,” “gustatory,” en “multisensory.”

Domains zijn nuttig omdat zij de informatiestroom makkelijker herkenbaar, diagnoseerbaar en vormbaar maken rond de behoeften van de gebruiker. Door te identificeren tot welk domain informatie behoort, kunnen we duidelijker zien wat het systeem doet, wat het niet doet, en welke delen van de gebruikerservaring mogelijk ontbreken. Dit is vooral belangrijk voor toegankelijkheid: als een interface alleen visueel communiceert, helpt het Model ons herkennen dat tactiele, auditieve of andere vormen van informatie mogelijk ook moeten worden overwogen. Omdat domains beschrijven hoe informatie deelneemt aan de ervaring van de gebruiker, moet het classificeren van data in een domain beginnen met de vraag welke rol die data speelt in de interactie. Als data bedoeld is om gezien te worden, is zij visual; als zij bedoeld is om gehoord te worden, is zij auditory; als zij bedoeld is om gevoeld te worden, is zij tactile. Als data nog niet aan een specifiek zintuig is vastgelegd, zoals bij een tekstbestand, is zij symbolic. Als meerdere zintuiglijke categorieën samenwerken als één ervaring, zoals een videogame die beeld, geluid en controllertrilling combineert, is zij multisensory.

### De rol van domains in het Model

Zodra data in een domain is ingedeeld, heeft de interactie een duidelijker startpunt. We weten welke informatie het systeem behandelt, welke ervaring de gebruiker krijgt, en of andere vormen van communicatie moeten worden overwogen. Met die categorie vastgesteld kan het Model verdergaan van het identificeren van het datatype naar het beschrijven van hoe die data door de interface zelf beweegt.
