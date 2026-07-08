<!--
यह अनुवाद ChatGPT द्वारा तैयार किया गया है और किसी मानव अनुवादक द्वारा इसकी समीक्षा की जानी चाहिए।
अनुवाद सत्यापित हो जाने के बाद pull request में इन पंक्तियों को हटा दें।
-->

# 6.1 Connectors :: Data

## गहन चर्चा

### पहला अनुवाद

**Data** connector Stack का पहला स्पष्ट connector है। यह **Layer 7: Digital Data** और **Layer 6: Structure & Semantics** के बीच बैठता है, जहाँ सक्रिय computer-readable information पहली बार एक interpreted form लेना शुरू करती है। Layer 7 बताता है कि information digital data के रूप में मौजूद है। Layer 6 बताता है कि वह information कैसे structured है और उसका अर्थ क्या है। Data connector समझाता है कि system एक condition से दूसरी condition तक कैसे जाता है।

यह connector इसलिए आवश्यक है क्योंकि digital data स्वयं को interpret नहीं करता। कोई file, stream, buffer, database result, response या message पहले से organized information रख सकता है, लेकिन organization और interpretation एक ही चीज़ नहीं हैं। किसी चीज़ को data तक पहुँचना होगा, उसे उचित expectations के अनुसार पढ़ना होगा, और ऐसी form बनानी होगी जिसे Structure & Semantics समझ सके। वही “कुछ” Data connector है।

इस अर्थ में, यह connector explicit Stack के भीतर translation का पहला act है। यह original information नहीं बनाता, और अभी user-facing components भी नहीं बनाता। इसकी भूमिका information को जरूरत पड़ने पर Digital Data के रूप में active flow में लाना है, फिर उस active digital representation को उन rules और structures से जोड़ना है जो interpretation को संभव बनाते हैं।

### Data Storage के साथ काम करना

हालाँकि Data connector Digital Data और Structure & Semantics के बीच बैठता है, इसका implied **Data Storage** layer से अक्सर करीबी संबंध होता है। कारण यह है कि digital data के कई रूप तब तक उपयोगी नहीं होते जब तक उन्हें वहाँ से access न किया जा सके जहाँ वे stored हैं। इसलिए Data connector अक्सर दो संबंधित responsibilities निभाता है। पहला, वह storage तक पहुँचकर information को retrieve, receive या किसी और तरह access करता है, ताकि वह information Digital Data के रूप में active flow में आ सके। दूसरा, वह resulting Digital Data को interpreted structure में process करता है।

MySQL data connector इसका अच्छा उदाहरण है। Model के perspective से, MySQL database को Data Storage माना जा सकता है, जबकि query result वह active Digital Data बन जाता है जिस पर काम हो रहा है। connector connection स्थापित कर सकता है, query भेज सकता है, result receive कर सकता है, और फिर उस result को structured information में organize कर सकता है जिसे बाकी Stack समझ सके। database connection, query behavior और result processing एक ही connector में दिखाई दे सकते हैं, क्योंकि Data connector storage तक पहुँचने और retrieved information को structured, meaningful data की ओर ले जाने के लिए responsible है।

यह Data Storage को Stack का explicit layer नहीं बनाता, और Data connector को database, file system, service या storage mechanism स्वयं होने के लिए responsible नहीं बनाता। बल्कि Model यह पहचानता है कि पहला connector अक्सर storage की ओर पहुँचे बिना digital data को system के active flow में नहीं ला सकता।

### Access समझना नहीं है

Data connector आंशिक रूप से इसलिए मौजूद है क्योंकि access और understanding एक ही चीज़ नहीं हैं। computer file खोल सकता है, response receive कर सकता है, memory में bytes रख सकता है या database से connect हो सकता है। इससे केवल यह साबित होता है कि information available है। इससे यह साबित नहीं होता कि information समझी गई है।

उदाहरण के लिए, settings file text के रूप में available हो सकती है। system जान सकता है कि file कहाँ है, उसका content सफलतापूर्वक read कर सकता है और उसे memory में रख सकता है। फिर भी Stack ने अभी यह तय नहीं किया कि कौन से parts keys हैं, कौन से values हैं, कौन से sections valid हैं, या कौन से rules format को define करते हैं।

Data connector “information digital data के रूप में available है” से “information अब structure और semantics के अनुसार interpret की जा सकती है” तक का movement देता है। यह distinction Layer 7 को साफ रखता है। Digital Data को यह जानने की जरूरत नहीं कि हर possible format कैसे interpret होगा। उसे केवल active computer-readable information को represent करना है। फिर Data connector Layer 6 में handoff करता है, जहाँ appropriate rules के अनुसार interpretation हो सकती है।

### Structure बनाना

top-down flow में, Data connector Digital Data receive करता है और उसे Structure & Semantics के लिए prepare करता है। इसमें bytes पढ़ना, text decode करना, format identify करना, semantic rules select करना, basic expectations validate करना, या representation को organized structure में transform करना शामिल हो सकता है। exact काम handled information के प्रकार पर निर्भर करता है, लेकिन responsibility वही रहती है: active representation को interpreted form से connect करना।

JSON settings file encoded text के रूप में शुरू हो सकती है। Data connector text पढ़ता है, expected format recognize करता है, और settings को represent करने वाली structured information बनाता है। CSV file rows और fields बन सकती है। database result records बन सकता है। binary file headers, sections और values बन सकती है। server response structured message बन सकता है।

मुख्य बात movement है। Data connector storage तक पहुँचने से शुरू कर सकता है, लेकिन उसका explicit Stack transition तभी पूरा होता है जब retrieved या received Digital Data ऐसी information बन चुकी हो जिसे Structure & Semantics के माध्यम से समझा जा सके।

### Meaning को preserve करना

Data connector को information के layers के बीच move करते समय meaning preserve करना चाहिए। इसका अर्थ यह नहीं कि original representation का हर detail unchanged रहे। इसका अर्थ है कि connector को digital data और उससे बनाई गई interpreted structure के बीच intended relationship preserve करना चाहिए।

उदाहरण के लिए, अगर file में title है, तो resulting structure को उस title को original information के प्रति faithful तरीके से represent करना चाहिए। अगर database record में identifier है, तो वह identifier उस record से जुड़ा रहना चाहिए जिसे वह describe करता है। अगर कोई format order, grouping या required values define करता है, तो connector को structured result बनाते समय उन expectations का सम्मान करना चाहिए।

### Digital Data पर वापस जाना

क्योंकि Stack reversible है, Data connector bottom-up flow में भी भाग लेता है। जब कोई interaction interface में information बदलती है, तो वह change अंततः Digital Data पर वापस जाना पड़ सकता है। preserve, transmit या reuse होने से पहले structured information को computer-readable form में convert करना पड़ता है।

इस direction में, Data connector opposite transformation करता है। वह Layer 6 से structured information receive करता है और storage, transmission, comparison या further processing के लिए suitable Digital Data बनाता है।

settings structure encoded JSON text बन सकती है। values की table CSV बन सकती है। record database update बन सकता है। document structure file के bytes बन सकती है।

यह reverse movement top-down movement जितना ही महत्वपूर्ण है। अगर Data connector information को structure में read कर सकता है, लेकिन structure को digital form में वापस write नहीं कर सकता, तो interface information display या use कर सकता है, लेकिन interaction का result पूरी तरह preserve नहीं कर सकता। इसलिए connector user intent और persistent change के बीच cycle complete करने में मदद करता है।

### Validation और Failure

Data connector उन पहले स्थानों में से एक है जहाँ failure को meaningful तरीके से recognize किया जा सकता है। Digital Data missing, malformed, incomplete, unsupported, outdated या Layer 6 द्वारा expected semantic rules से inconsistent हो सकती है।

जब ऐसा होता है, connector को उस transformation का result स्पष्ट करना चाहिए। connector missing optional values से recover कर सकता है, defaults apply कर सकता है, unsupported extensions ignore कर सकता है, या appropriate होने पर partial structure बना सकता है। लेकिन बाकी Stack को यह guess करने के लिए मजबूर नहीं होना चाहिए कि data सही तरह interpret हुआ या नहीं।

इस boundary पर failure identify करके Model interpretation को honest रखता है। Data connector बाकी Stack को ऐसी information पर build करने से बचाता है जो कभी सफलतापूर्वक समझी ही नहीं गई।

### Connector क्यों महत्वपूर्ण है

Data connector Stack को यह मान लेने से रोकता है कि digital data available होते ही automatically meaningful हो जाती है। इस connector के बिना, Model representation और interpretation के boundary को blur कर देगा। Layer 7 को formats सीधे समझने पड़ेंगे, या Layer 6 को raw data स्वयं retrieve करना पड़ेगा। Data connector को define करके Model इस transition को proper place देता है।

Digital Data active computer-readable representation के लिए responsible रहती है। Structure & Semantics interpreted meaning और organized form के लिए responsible रहता है। Data connector दोनों के बीच movement संभालता है।

इससे Stack की पहली transformation explicit हो जाती है। information active digital representation के रूप में शुरू होती है, Data connector से गुजरती है, और ऐसी चीज़ बनती है जिसे system समझ सकता है। वहाँ से बाकी Stack process जारी रख सकता है: interpreted information को usable interface objects में बदलना, उन objects को context में organize करना, उन्हें output के लिए prepare करना, system के माध्यम से deliver करना, और user को respond करने देना।
