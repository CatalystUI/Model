<!--
यह अनुवाद ChatGPT द्वारा तैयार किया गया है और किसी मानव अनुवादक द्वारा इसकी समीक्षा की जानी चाहिए।
अनुवाद सत्यापित हो जाने के बाद pull request में इन पंक्तियों को हटा दें।
-->

# 6.3 Connectors :: Adapter

## गहन चर्चा

### Use से Context तक

**Adapter** connector **Layer 5: Components, Controls, & Layouts** और **Layer 4: Graphs & Frames** के बीच बैठता है। यह mutable interface data को लेकर उसे बड़े context में रखने के लिए responsible है, जहाँ उसे organized, discovered, routed, bounded और Stack के बाकी हिस्से के लिए prepared किया जा सके।

Layer 5 system को components, controls और layouts देता है। ये वे mutable pieces हैं जिनके साथ developer directly काम कर सकता है। component information का एक हिस्सा represent कर सकता है। control किसी interaction पर respond कर सकता है। layout दूसरे components को किसी particular order के अनुसार organize कर सकता है। फिर भी ये pieces अपने environment को पूरी तरह describe नहीं करते। वे जान सकते हैं कि वे क्या हैं और कैसे behave करते हैं, लेकिन वे automatically नहीं जानते कि वे पूरे interface से कैसे relate करते हैं।

Adapter connector individual usable pieces से organized context तक यह movement देता है। यह Parser connector के माध्यम से produced components को लेता है और उन्हें graphs और frames में adapt करता है। यहीं Stack यह समझना शुरू करता है कि component केवल मौजूद नहीं है, बल्कि वह कहाँ belong करता है, दूसरे components से कैसे relate करता है, और active interface में कैसे participate करना चाहिए।

दूसरे शब्दों में, Parser connector structured information को usable बनाता है। Adapter connector usable information को contextual बनाता है।

### Components को Graphs में adapt करना

component अकेले exist कर सकता है, लेकिन user interface शायद ही कभी एक isolated component से बना होता है। सबसे simple interface भी relationships रखता है: एक component दूसरे को contain कर सकता है, control layout पर depend कर सकता है, group को साथ में searched, ordered, enabled, disabled, focused या updated होने की जरूरत हो सकती है।

यहीं graph महत्वपूर्ण हो जाता है।

Adapter connector components, controls और layouts को graph में रखने देता है ताकि वे बड़े whole के हिस्से के रूप में organized हो सकें। graph components store कर सकता है, उनके relationships track कर सकता है, उन्हें query करने के ways expose कर सकता है, और collection के रूप में manage करने के लिए surrounding logic दे सकता है। इस step के बिना components unified interface के participants नहीं, बल्कि mutable data के scattered pieces बने रहेंगे।

settings component अपने आप में useful हो सकता है। graph में adapt होने के बाद, वह full settings view का part बन सकता है, दूसरी sections से connect हो सकता है, name से search हो सकता है, related values के साथ update हो सकता है, या user action करने पर routed हो सकता है। component component रहना बंद नहीं करता, लेकिन graph के माध्यम से context पाता है।

यह distinction Layer 5 और Layer 4 को separate रखने में मदद करती है। Components usable interface data describe करते हैं। Graphs describe करते हैं कि वे pieces साथ में कैसे organized हैं।

### Layout पूरा Context नहीं है

Adapter connector layout और graph के अंतर को भी स्पष्ट करता है। क्योंकि layouts components organize कर सकते हैं, उन्हें interface का पूरा organizational layer मानना tempting हो सकता है। लेकिन layout components को केवल particular manner में organize करता है। वह उन components की पूरी relationship, lifecycle, routing या environmental context जरूरी नहीं describe करता।

vertical layout तय कर सकता है कि कई controls क्रम में appear हों। इसका अर्थ यह नहीं कि layout पूरे interface के लिए responsible है। उसे हर active component जानने, हर interaction manage करने, output boundary prepare करने या system का top-level mediator बनने की जरूरत नहीं है। ये responsibilities Layer 4 की हैं।

Adapter connector इस distinction का सम्मान करता है। वह Layer 5 से layout ले कर graph में रख सकता है, लेकिन layout केवल components arrange करने से graph नहीं बन जाता। graph broader organizational context देता है, जबकि layout ऐसा component रहता है जिसका purpose दूसरे components arrange करना है।

यह separation interface के grow होने पर विशेष रूप से useful होता है। simple arrangements simple रह सकते हैं, जबकि बड़ा system discovery, routing, updates और output preparation manage करने के लिए structure देता रहता है।

### Frame से connection

Layer 4 केवल graphs से संबंधित नहीं है। इसमें frame भी है, जो organized components और Stack के lower layers के बीच active boundary और communication point represent करता है।

Adapter connector components को इस framed context में enter करने में मदद करता है। component का size हो सकता है, control का interaction behavior हो सकता है, और layout relative placement describe कर सकता है, लेकिन frame तय करता है कि ये pieces किन bounds में prepare हो रहे हैं। वह active area, surrounding context और उस information से संबंधित है जिसे आखिरकार rendering की ओर pass होना है।

इसका मतलब यह नहीं कि Adapter connector कुछ render करता है। Rendering lower layers की responsibility है। Adapter connector organized interface को prepare करता है ताकि frame उसे properly communicate कर सके। अगले connector के information को renderer की ओर ले जाने से पहले, यह frame को component relationships, layout results और contextual information देता है।

इस तरह Adapter connector “ये pieces हैं जिन्हें हम use कर सकते हैं” और “यह organized interface है जिसे हम prepare कर रहे हैं” के बीच bridge की तरह काम करता है।

### Adaptation से reuse

Adapter connector की सबसे शक्तिशाली बातों में से एक यह है कि वही component अलग-अलग contexts में adapt हो सकता है। component को permanently एक graph, एक frame या एक kind of interface से बंधे रहने की जरूरत नहीं। उसका meaning और behavior stable रह सकता है, जबकि Adapter connector तय करता है कि वह particular environment में कैसे participate करे।

document component editing graph, preview graph या printing graph में adapt हो सकता है। music component playback graph, editing graph या library graph में adapt हो सकता है। settings components का group simple preferences page, advanced configuration panel या automated setup flow में adapt हो सकता है।

underlying components familiar रह सकते हैं, लेकिन वे जिस graph और frame में enter करते हैं उसके अनुसार उनके relationships और purpose बदलते हैं। इससे CatalystUI reuse को साफ तरह express कर सकता है, बिना यह pretend किए कि reuse का अर्थ है हर context identical है।

Adapter connector यही संभव करता है। यह mutable interface data को purpose के अनुसार reorganize होने देता है, जबकि component स्वयं इस पर focused रहता है कि वह क्या represent करता है और कैसे behave करता है।

### Components पर लौटना

क्योंकि Stack reversible है, Adapter connector interaction के upper layers की ओर लौटने वाले flow में भी भाग लेता है। जब user system से interact करता है, lower layers को अंततः उस interaction को appropriate component या control तक route करना पड़ता है।

Layer 4 इस process में महत्वपूर्ण है क्योंकि वह organized context समझता है। graph यह determine करने में मदद कर सकता है कि कौन सा component relevant है। frame यह interpret करने में मदद कर सकता है कि interaction किन bounds में हुआ। context ज्ञात होने पर Adapter connector interaction को Layer 5 तक लौटाने में मदद करता है, जहाँ appropriate component या control respond कर सकता है।

यह इसलिए matter करता है क्योंकि interactions शायद ही कभी exact component से attached होकर आती हैं जिसे उन्हें handle करना चाहिए। system जान सकता है कि key press हुई, pointer moved, command triggered हुआ, या region selected हुई, लेकिन Stack को अभी यह determine करना होता है कि current interface में उस action का अर्थ क्या है। Adapter connector उस contextual decision को mutable components में वापस ले जाने में मदद करता है, जहाँ interaction handled हो सकती है।

top-down flow में Adapter connector components को context में रखता है। bottom-up flow में यह contextual interactions को उन components तक लौटाने में मदद करता है जो उन पर act कर सकते हैं।

### Identity preserve करना

Adapter connector को adapt किए गए components की identity और intent preserve करनी चाहिए। जब component graph या frame में enter करता है, उसे यह नहीं खोना चाहिए कि वह क्या है। उसका purpose, state और original information से relationship recognizable रहना चाहिए, भले वह बड़े system में organized हो रहा हो।

इसका अर्थ यह नहीं कि component wrapped, indexed, grouped, measured, transformed या specific environment के लिए prepared नहीं हो सकता। कई मामलों में adaptation ऐसी additional information मांगती है जो component में originally नहीं थी। graph को identifiers चाहिए हो सकते हैं। frame को bounds चाहिए हो सकते हैं। routing system को focus information चाहिए हो सकती है। ये additions component को context में participate करने में मदद करते हैं, लेकिन component का meaning erase नहीं करना चाहिए।

इसलिए Adapter connector careful transformation करता है। यह component को निगले बिना context जोड़ता है। यह interface को organized होने देता है, बिना हर component को अपने आसपास पूरे system के लिए responsible बनाए।

### Connector क्यों महत्वपूर्ण है

Adapter connector Stack को usable interface data और organized interface context को confuse करने से रोकता है। इस connector के बिना, components को अपने graphs manage करने पड़ेंगे, layouts को complete interface organization समझ लिया जाएगा, या frames को दोनों layers के बीच proper transition के बिना components समझने पर मजबूर होना पड़ेगा।

Adapter connector को define करके Model इस transition को proper place देता है।

Components, Controls, & Layouts mutable interface objects और direct interaction behavior के लिए responsible रहता है। Graphs & Frames organization, context, boundaries, routing और lower layers की preparation के लिए responsible रहता है। Adapter connector दोनों के बीच movement संभालता है।

यह Stack का वह point है जहाँ usable information situated information बनती है। Components अब केवल program को available नहीं रहते; वे living context में रखे जाते हैं जहाँ वे एक-दूसरे से relate कर सकते हैं, correct pathways से respond कर सकते हैं, और Stack में आगे नीचे carried होने के लिए prepare हो सकते हैं। वहाँ से organized interface rendering, delivery, perception और response की ओर move कर सकता है।
