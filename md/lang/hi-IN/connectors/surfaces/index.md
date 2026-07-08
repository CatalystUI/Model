<!--
यह अनुवाद ChatGPT द्वारा तैयार किया गया है और किसी मानव अनुवादक द्वारा इसकी समीक्षा की जानी चाहिए।
अनुवाद सत्यापित हो जाने के बाद pull request में इन पंक्तियों को हटा दें।
-->

# 6.5 Connectors :: Surface

## गहन चर्चा

### Rendering से Delivery तक

**Surface** connector **Layer 3: Renderers** और **Layer 2: Windows** के बीच बैठता है। यह rendered output को renderer से window में ले जाने के लिए responsible है, जहाँ वह output system द्वारा दिए गए bounded context में placed हो सकता है।

Layer 3 वह जगह है जहाँ information output-ready form में convert होती है। renderer graph और frame से prepared data लेता है और कुछ ऐसा produce करता है जिसे अंततः perceive किया जा सके। फिर भी rendered output को destination चाहिए। उसे कहीं जाना है, किसी चीज़ से connect होना है, और ऐसी boundary चाहिए जिसके through system उसे deliver कर सके।

यह destination Windows layer द्वारा represent होती है।

Surface connector renderer और window के बीच crossing point देता है। यह समझाता है कि rendered output window के usable area से कैसे attach होता है, और renderer window से enough information कैसे receive करता है ताकि output सही तरह produce करता रहे। इस connector के बिना renderer output produce कर सकता है, लेकिन Stack के पास यह explicit explanation नहीं होगी कि वह output उसे present करने वाली window से कैसे connect होता है।

सरल शब्दों में, renderer output बनाता है। window वह जगह देती है जहाँ वह output deliver हो सकता है। Surface connector दोनों को साथ काम करने देता है।

### Rendered Area

surface को window के उस usable area के रूप में समझा जा सकता है जो rendered output receive करता है। traditional graphical application में इसे देखना आसान है: renderer window के inner area में draw करता है। लेकिन वही principle broadly लागू होता है। surface केवल “screen” नहीं है। यह वह connector है जो rendered output को window की boundaries के भीतर जगह देता है।

यह matter करता है क्योंकि renderer आम तौर पर window own नहीं करता। renderer जान सकता है कि output कैसे produce करना है, लेकिन window वह layer है जो system में active view देती है। window का size, position, state, scale, focus या दूसरे system-managed conditions हो सकते हैं। Surface connector इन conditions को renderer के लिए उस manner में available करता है जो output को सही delivery के लिए required है।

renderer को window के current bounds जानने की जरूरत हो सकती है। उसे जानना पड़ सकता है कि वे bounds कब changed हुए। उसे draw, write, stream या update करने के लिए target चाहिए हो सकता है। ये details implementation के अनुसार vary कर सकते हैं, लेकिन conceptual responsibility वही रहती है: Surface connector renderer output को उस window context से connect करता है जो उसे contain करेगा।

यह renderer को system boundary own करने का pretend करने से रोकता है, और window को rendering जानने का pretend करने से रोकता है।

### Final Image से अधिक

Surface connector को केवल finished result को window में pass करने वाला समझना tempting हो सकता है। कुछ cases में यह description काफी करीब है। renderer output prepare करता है, surface उसे window तक ले जाती है, और user अंततः result perceive करता है।

लेकिन rendering अक्सर single delivery नहीं बल्कि ongoing relationship है। window resize हो सकती है। उसका active state बदल सकता है। system redraw request कर सकता है। renderer को continuously update करना, signal का wait करना, या अपने output को window की current condition से synchronize करना पड़ सकता है। Surface connector वह जगह देता है जहाँ यह relationship express हो सके।

इसलिए Surface connector केवल finished output का container नहीं है। यह rendering के act और result receive करने वाली window के बीच connection है। यह renderer को window की conditions पर respond करने देता है, बिना renderer को window होने के लिए responsible बनाए।

output अब भी renderer का है। boundary अब भी window की है। Surface connector उनके बीच relationship carry करता है।

### Interactions को ऊपर वापस pass करना

क्योंकि Stack reversible है, Surface connector bottom-up flow में भी भाग लेता है। जब interaction system से शुरू होकर window में enter करती है, उसे अंततः Stack के उन parts की ओर ऊपर move करना होता है जो उसे understand और handle कर सकते हैं।

Surface connector अक्सर इस interaction को window से renderer में carry करता है। कई cases में उसे information preserve करने और उसे ऊपर continue करने देने से अधिक कुछ नहीं करना होता। pointer movement, key press, focus change, resize event या कोई और interaction window से enter हो सकती है और फिर surface cross कर सकती है ताकि renderer और higher layers आवश्यकता अनुसार respond कर सकें।

इसका अर्थ यह नहीं कि Surface connector decide करे कि कौन सा component interaction handle करे। यह responsibility Stack में ऊपर है, विशेष रूप से जब interaction graph और frame तक पहुँचती है। Surface connector केवल interaction को window और renderer के boundary के across path देता है।

top-down flow में Surface connector rendered output को window में carry करता है। bottom-up flow में वह window-originating interaction information को renderer और उसके ऊपर के layers की ओर वापस carry करता है।

### Window को अलग रखना

Surface connector महत्वपूर्ण है क्योंकि यह renderer और window को एक ही responsibility में collapse होने से रोकता है। इस connector के बिना renderer को window के बारे में बहुत ज्यादा जानना होगा, या window को renderer के बारे में बहुत ज्यादा जानना होगा। दोनों directions Stack को useful बनाने वाली separation को कमजोर करते हैं।

window active system-facing boundary देती है। वह view, container या point of delivery represent करती है। renderer output produce करता है जो उस boundary से deliver हो सकता है। Surface connector उनके बीच बैठता है ताकि हर layer अपने purpose पर focused रह सके।

यह separation विशेष रूप से useful है जब renderer एक से अधिक kind of window के साथ use हो सकता है, या window एक से अधिक kind of renderer support कर सकती है। connector Model को relationship describe करने की जगह देता है, बिना दोनों layers को hardwire किए। renderer suitable surface से attach हो सकता है। window suitable surface expose कर सकती है। Surface connector समझाता है कि attachment कैसे होता है।

यही renderer और window को indistinguishable हुए बिना cooperate करने देता है।

### Output preserve करना

Surface connector को rendered output को window में cross करते समय preserve करना चाहिए। इसका अर्थ यह नहीं कि output कभी transformed, scaled, clipped, synchronized या window की requirements के अनुसार prepared नहीं होगा। इसका अर्थ है कि output renderer द्वारा produced चीज़ के प्रति faithful रहे और active window context से match करने वाले तरीके से deliver हो।

अगर window size बदलती है, Surface connector उस change को communicate करने में मदद कर सकता है। अगर window inactive, hidden, minimized या otherwise unavailable हो जाती है, connector renderer को appropriately respond करने में मदद कर सकता है। अगर renderer को window द्वारा provided target चाहिए, connector उसे hold या expose कर सकता है। ये responsibilities rendering जैसी नहीं हैं, और window होने जैसी भी नहीं हैं। ये दोनों के बीच connection की responsibilities हैं।

Surface connector का मुख्य shape यही है: वह renderer के output को preserve करता है और उसे window द्वारा provided delivery context के अनुकूल बनाता है।

### Connector क्यों महत्वपूर्ण है

Surface connector Stack को rendered output और उसे contain करने वाली window को confuse करने से रोकता है। इस connector के बिना renderer को ऐसा act करना पड़ेगा जैसे वह window own करता है, या window को ऐसा act करना पड़ेगा जैसे वह rendering directly समझती है।

Surface connector को define करके Model इस transition को proper place देता है।

Renderers prepared information को output-ready form में convert करने के लिए responsible रहता है। Windows bounded system-facing context provide करने के लिए responsible रहता है जिसके through output और interaction pass हो सकते हैं। Surface connector दोनों के बीच movement संभालता है।

यह Stack का वह point है जहाँ rendered information destination पाती है। यहाँ output केवल produced नहीं रहता, बल्कि उस जगह से attached हो जाता है जहाँ वह deliver हो सकता है। वहाँ से Windows output को Systems में आगे carry कर सकता है, जहाँ वह अंततः user द्वारा perceive और respond की जा सकने वाली चीज़ बन सकता है।
