<!--
यह अनुवाद ChatGPT द्वारा तैयार किया गया है और किसी मानव अनुवादक द्वारा इसकी समीक्षा की जानी चाहिए।
अनुवाद सत्यापित हो जाने के बाद pull request में इन पंक्तियों को हटा दें।
-->

# 6.4 Connectors :: Bridge

## गहन चर्चा

### Context से Rendering तक

**Bridge** connector **Layer 4: Graphs & Frames** और **Layer 3: Renderers** के बीच बैठता है। यह organized interface data को graph और frame से renderer तक ले जाने के लिए responsible है, जहाँ वह data perceivable output में conversion शुरू कर सकता है।

Layer 4 system को organized context देता है। वह जानता है कौन से components exist करते हैं, वे एक-दूसरे से कैसे relate करते हैं, कौन से bounds occupy करते हैं, और active interface को whole के रूप में कैसे समझना चाहिए। Layer 3 rendering के लिए responsible है। वह prepared data को ऐसी form में convert करता है जो अंततः window और system के through deliver हो सके।

Bridge connector इसलिए exist करता है क्योंकि ये दो layers naturally एक ही language नहीं बोलते।

graph relationships organize करता है। frame active context और bounds define करता है। renderer output produce करता है। Bridge connector इन concerns के बीच crossing point है। इसे elaborate या visible होने की जरूरत नहीं। अधिकतर cases में यह organized interface data को renderer के लिए expose करता है और जरूरत पड़ने पर interaction information को ऊपर वापस pass होने देता है। इस अर्थ में Bridge connector वही करता है जो उसका नाम कहता है: gap bridge करता है।

### Frame को आगे ले जाना

top-down flow में Bridge connector Layer 4 के prepared results receive करता है और उन्हें Layer 3 में ले जाता है। इसका अर्थ यह नहीं कि Bridge components organize करने, layouts calculate करने, controls route करने या output render करने के लिए responsible है। वे responsibilities surrounding layers की हैं। Bridge बीच में इसलिए मौजूद है ताकि ये responsibilities अलग रह सकें।

frame interface के active bounds पहले ही prepare कर चुका हो सकता है। graph उसके अंदर belonging components पहले ही organize कर चुका हो सकता है। Bridge connector उस prepared context को लेता है और renderer को ऐसी form में present करता है जिसके साथ renderer काम कर सके। इसमें references, prepared render entries, flattened component information, resource handles, command-ready data या described system के लिए suitable कोई और representation pass करना शामिल हो सकता है।

exact implementation अलग हो सकती है, लेकिन responsibility वही रहती है। Bridge connector decide नहीं करता कि interface का अर्थ क्या है। वह decide नहीं करता कि final output user तक कैसे deliver होना चाहिए। वह केवल crossing point देता है जहाँ organized interface context renderer-facing data बनता है।

यही graph और frame को organization पर focused रहने देता है, जबकि renderer rendering पर focused रहता है।

### एक शांत Connector

Bridge connector अक्सर अपने ऊपर के connectors से शांत दिखाई देगा। Data connector digital data access और interpret कर सकता है। Parser connector structures को mutable components में बदल सकता है। Adapter connector उन components को graphs और frames में रख सकता है। तुलना में Bridge connector लगभग empty लग सकता है।

यह emptiness ही बात का हिस्सा है।

Bridge connector को सामान्यतः जरूरत से अधिक काम नहीं करना चाहिए। उसका मुख्य purpose graph और frame को renderer से communicate करने देना है, बिना किसी layer को दूसरी की responsibilities absorb करने पर मजबूर किए। अगर graph renderer की तरह act करने लगे, Model clarity खो देता है। अगर renderer graph की तरह act करने लगे, Model organization को output से अलग साफ तरह describe करने की क्षमता खो देता है।

Bridge connector उस boundary की रक्षा करता है।

वह renderer consumption के लिए data prepare कर सकता है, लेकिन renderer नहीं बनना चाहिए। वह organized interface को renderer के लिए expose कर सकता है, लेकिन graph नहीं बनना चाहिए। उसकी usefulness दो neighbouring layers को distinct रहते हुए साथ काम करने देने से आती है।

### Interactions को ऊपर वापस pass करना

Bridge connector bottom-up flow में भी महत्वपूर्ण है। जब interaction system से आती है, वह lower layers से ऊपर move करती है जब तक वह वहाँ न पहुँचे जहाँ organized interface उसे समझ सके। कई cases में renderer interaction receive या translate कर सकता है ऐसी form में जिसे Stack continue routing कर सके, लेकिन renderer आम तौर पर नहीं जानता कि कौन सा final component उसे handle करे।

यह responsibility Stack में ऊपर है।

इसलिए Bridge connector अक्सर interaction को बहुत कम modification के साथ Layer 4 तक pass करता है। graph और frame वे layers हैं जो determine कर सकते हैं कि interaction कहाँ belong करती है। वे organized context जानते हैं। वे determine कर सकते हैं कौन सा component active है, कौन सा control relevant region occupy करता है, कौन सी layout relationship matter करती है, या interface का कौन सा part interaction receive करे।

इसलिए Bridge connector को interaction router समझना गलत होगा। वह interaction carry कर सकता है और routing के लिए needed information preserve कर सकता है, लेकिन आम तौर पर routing स्वयं perform करने वाला layer नहीं है। Bridge केवल यह सुनिश्चित करता है कि interaction renderer-facing information से वापस graph-facing context में cross कर सके।

top-down flow में Bridge renderer को feed करने में मदद करता है। bottom-up flow में वह interactions को उस जगह लौटाने में मदद करता है जहाँ वे meaningfully routed हो सकें।

### देखने में सबसे कठिन Connector

Bridge connector पहचानने में सबसे कठिन connectors में से एक था क्योंकि उसका purpose बाहर से vague लग सकता है। Data connector जैसा obvious storage relationship नहीं है। Parser connector जैसी clear transformation नहीं है। Adapter connector जैसा organizational role नहीं है। पहली नज़र में यह दो layers के बीच thin handoff जैसा दिख सकता है जो पहले से ही सीधे communicate करने के लिए close लगते हैं।

लेकिन Bridge connector के बिना Stack के पास organized interface context से rendering में move करने का explicit तरीका नहीं होगा। graph को renderer को सीधे feed करना जानना पड़ेगा, या renderer को graphs और frames को स्वयं interpret करना पड़ेगा। दोनों direction organization और output के boundary को collapse कर देंगे।

Bridge connector उस boundary को नाम देता है।

इसमें हमेशा बहुत logic नहीं होगा, और कुछ implementations में यह बहुत छोटा दिख सकता है, लेकिन conceptual role essential है। यह समझाता है कि organized interface rendering process में कैसे cross करता है, बिना Layer 4 और Layer 3 को एक ही चीज़ बनाए।

### Boundary preserve करना

Bridge connector को context और rendering के बीच boundary preserve करनी चाहिए। नीचे pass की गई information Layer 4 द्वारा prepared organized interface के प्रति faithful रहनी चाहिए, और फिर भी Layer 3 द्वारा usable होनी चाहिए। ऊपर pass की गई information graph और frame को यह समझने के लिए needed details preserve करनी चाहिए कि क्या हुआ, जबकि renderer अपनी responsibility पर focused रह सके।

इसका मतलब यह नहीं कि Bridge को किसी भी layer का हर internal detail preserve करना होगा। renderer को full graph की जरूरत नहीं हो सकती। graph को हर renderer-specific detail की जरूरत नहीं हो सकती। Bridge connector decide करता है कि boundary cross करने के लिए क्या जरूरी है ताकि दोनों sides अपना काम जारी रख सकें, बिना दूसरे की role लेने के।

यह connector उन systems में विशेष रूप से important है जहाँ renderer की बहुत specific requirements होती हैं। graph और frame को उन requirements का हर detail जानने की जरूरत नहीं होनी चाहिए। renderer को interface की पूरी organization समझने की जरूरत नहीं होनी चाहिए। Bridge connector इसलिए exist करता है ताकि दोनों sides entangled हुए बिना communicate कर सकें।

### Connector क्यों महत्वपूर्ण है

Bridge connector Stack को organized interface context और rendered output को confuse करने से रोकता है। इस connector के बिना graphs और frames को सीधे renderer terms में बोलना पड़ेगा, या renderers को active interface की पूरी structure समझनी पड़ेगी।

Bridge connector को define करके Model इस transition को proper place देता है।

Graphs & Frames organization, context, boundaries, routing और preparation के लिए responsible रहता है। Renderers prepared information को output-ready form में convert करने के लिए responsible रहता है। Bridge connector दोनों के बीच movement संभालता है।

यह Stack का वह point है जहाँ organized information rendering process में cross करती है। यह अक्सर शांत होता है। अक्सर पतला होता है। लगभग invisible लग सकता है। लेकिन इसके बिना Stack interface-as-organized और interface-as-rendered के बीच explicit connection खो देता है। Bridge connector उस crossing को संभव बनाता है, और फिर आराम से रास्ते से हट जाता है।
