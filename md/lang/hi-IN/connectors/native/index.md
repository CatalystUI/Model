# 6.6 Connectors :: Native

## गहन चर्चा

### Windows से Systems तक

**Native** connector **Layer 2: Windows** और **Layer 1: Systems** के बीच बैठता है। यह window को underlying system से connect करने के लिए responsible है ताकि output deliver हो सके और interactions उस वास्तविक environment के through receive हो सकें जिसमें program चल रहा है।

Layer 2 Stack को window देता है: bounded view, container या point of delivery। Layer 1 Stack को system देता है: operating environment, hardware access, services, devices और native behavior जो window को संभव बनाते हैं। Native connector इन दो layers के बीच crossing point देता है।

यह connector अक्सर वह जगह है जहाँ Stack computing की practical reality को सबसे directly touch करता है। इस point तक Model ने information को structured data, components, graphs, renderers और surfaces से move होते हुए describe किया है। लेकिन window केवल imagination से exist नहीं करती। किसी चीज़ को system से कहना पड़ता है कि उसे create, configure, maintain, update करे और उसके through interactions report करे।

वह चीज़ Native connector है।

### Bindings define करना

**binding** किसी layer और किसी दूसरे layer द्वारा provided functionality के बीच controlled connection है। Native connector के context में, bindings system-level behavior को window के लिए ऐसी form में expose करते हैं जिसे program use कर सके, बिना window को स्वयं system बनने की आवश्यकता के।

यह definition जानबूझकर simple है। binding mysterious होने की जरूरत नहीं। यह ऊपर के code और नीचे की functionality के बीच accessible relationship है।

native binding window create करने, उसका title बदलने, keyboard input receive करने, pointer movement पर respond करने, active area resize करने, focus request करने, device access करने या system service से communicate करने की ability expose कर सकता है। details system और implementation के अनुसार vary होंगे, लेकिन concept वही है: binding native functionality से usable connection देता है।

इसीलिए bindings इस layer पर इतने महत्वपूर्ण हैं। system powerful capabilities दे सकता है, लेकिन वे capabilities Stack के बाकी हिस्से द्वारा इस्तेमाल की जाने वाली language या structure में automatically available नहीं होतीं। उन्हें किसी connection के form से expose करना पड़ता है। Native connector वह जगह है जहाँ ये connections gathered, shaped और used होते हैं।

### Native Access देना

कई implementations में Native connector मुख्यतः lower-level system functionality के bindings देगा। यह पहले ordinary लग सकता है, खासकर क्योंकि developers native APIs, platform libraries, operating system calls, device interfaces और समान tools से परिचित होते हैं। लेकिन Stack के भीतर ये random implementation details नहीं हैं। ये वे means हैं जिनसे Layer 2, Layer 1 तक access प्राप्त करता है।

desktop operating system पर graphical window को platform windowing API के bindings चाहिए हो सकते हैं। command-line interface को terminal input और output के bindings चाहिए हो सकते हैं। specialized device को buttons, sensors, speakers, lights या अन्य system-controlled devices के bindings चाहिए हो सकते हैं। हर case में Native connector वह relationship देता है जिससे window system के भीतर act कर सके।

महत्वपूर्ण बात यह नहीं कि कौन सी platform इस्तेमाल हो रही है। महत्वपूर्ण बात यह है कि window output deliver या interaction receive नहीं कर सकती जब तक उसके पास अपने containing system से communicate करने का तरीका न हो।

Native connector वह तरीका देता है।

### Wrapper से अधिक

क्योंकि यह connector अक्सर native behavior expose करता है, इसे system APIs के wrapper के रूप में describe करना tempting हो सकता है। यह description कुछ practical contexts में useful हो सकती है, लेकिन यह पूरी तरह नहीं समझाती कि connector Model के भीतर क्या कर रहा है।

wrapper बताता है कि लोग अक्सर इस तरह का layer कैसे implement करते हैं। binding बताता है कि connector वास्तव में क्या provide कर रहा है।

Native connector window के नीचे रखी platform calls की pile मात्र नहीं है। यह window और system के बीच formal relationship है। यह define करता है कि window अपनी system-backed existence कैसे receive करती है, system behavior Stack के लिए कैसे available होता है, और system-originating interactions ऊपर move करना कैसे शुरू करते हैं।

यह distinction महत्वपूर्ण है क्योंकि Model यह preserve करने की कोशिश नहीं कर रहा कि developers ने historically इन tools को कैसे describe किया है। वह underlying process स्वयं describe कर रहा है। उस process में Native connector इसलिए important नहीं कि वह native API wrap करता है। वह इसलिए important है कि वह Layer 2 को Layer 1 से bind करता है।

यही यह connector सच में है।

### Window बनाना और maintain करना

top-down flow में Native connector window को system के through operate करने देता है। window को create, show, hide, resize, move, focus, update या close करने की जरूरत हो सकती है। इन actions को system से relationship चाहिए, क्योंकि system वह layer है जो वह environment provide करता है जिसमें ये actions हो सकते हैं।

Native connector उन actions को perform करने के लिए needed bindings expose कर सकता है। इसके through Layer 2 system behavior request कर सकता है, बिना system management की पूरी responsibility absorb किए। window bounded point of delivery बनी रहती है। system underlying functionality provide करने वाला environment बना रहता है। Native connector उनके बीच relationship carry करता है।

यह विशेष रूप से important है क्योंकि systems अलग होते हैं। अलग operating systems, devices, runtimes और environments अलग APIs और behaviors provide कर सकते हैं। Native connector Stack को इन differences represent करने की जगह देता है, बिना बाकी Model को system-specific बनाए।

### Interactions receive करना

क्योंकि Stack reversible है, Native connector पहला explicit connector भी है जो तब involved होता है जब interaction system से enter करती है।

key press, pointer movement, touch input, controller action, device signal, resize event, focus change या कोई अन्य system-originating event Layer 1 से Layer 2 तक cross करना चाहिए, इससे पहले कि बाकी Stack उससे कुछ कर सके। Native connector वह crossing देता है। वह system की interaction information receive या expose करता है और उसे window में carry करता है, जहाँ वह Surface connector के through Renderers में, फिर जरूरत के अनुसार Bridge, Adapter, Parser और Data connectors से ऊपर continue कर सकती है।

कई cases में Native connector को decide करने की जरूरत नहीं कि interaction का अर्थ क्या है। उसका role system की interaction source को window के interaction path से bind करना है। system report करता है कि कुछ हुआ। Native connector उस report को Layer 2 के लिए usable बनाता है। फिर बाकी Stack अपनी responsibilities के अनुसार interaction को route, transform और handle कर सकता है।

यह lower boundary को clean रखता है। Native connector interaction input को Stack में आने का रास्ता देता है, बिना system से higher layers समझने की मांग किए, और बिना higher layers को ऐसा behave करने की मांग किए जैसे वे system हों।

### Boundary preserve करना

Native connector को window और system के बीच boundary preserve करनी चाहिए। उसे वह system functionality expose करनी चाहिए जिसकी window को जरूरत है, लेकिन दोनों layers के distinction को erase नहीं करना चाहिए।

यहाँ bindings concept के रूप में विशेष रूप से useful हैं। binding identity के बिना access देता है। window system functionality use कर सकती है बिना system बने। system behavior provide कर सकता है बिना window बने। connector उनके बीच relationship define करता है।

यह boundary CatalystUI को अलग environments में window को consistently describe करने देती है। एक system traditional desktop window provide कर सकता है। दूसरा terminal provide कर सकता है। दूसरा device-specific output channel provide कर सकता है। दूसरा remote या virtualized environment provide कर सकता है। native bindings अलग हो सकते हैं, लेकिन connector की role वही रहती है।

Native connector Layer 2 को Layer 1 से bind करता है ताकि window उस supporting system में exist, operate, receive interactions और deliver output कर सके।

### Connector क्यों महत्वपूर्ण है

Native connector Stack को window और उसे provide करने वाले system को confuse करने से रोकता है। इस connector के बिना Windows को system-specific behavior सीधे contain करना पड़ेगा, या Systems को window का higher-level concept समझना पड़ेगा। दोनों directions point of delivery और delivery possible बनाने वाले environment के बीच boundary blur कर देंगे।

Native connector को define करके Model इस transition को proper place देता है।

Windows output और interaction के pass होने वाले bounded context के लिए responsible रहता है। Systems underlying environment, services, devices और native behavior के लिए responsible रहता है। Native connector दोनों के बीच binding संभालता है।

यह Stack का final explicit connector है। यहीं modeled interface अपने नीचे के system तक पहुँचता है। यह platform access जैसा दिख सकता है। यह native libraries, operating system calls, device APIs या runtime services से implement हो सकता है। लेकिन उन familiar descriptions के नीचे इसका purpose ज्यादा clear और simple है।

Native connector bindings provide करता है।

यह window को system से bind करता है, जिससे output Stack से बाहर जा सके और interaction उसमें enter कर सके। ऐसा करके यह modeled interface और उस real environment के बीच explicit path पूरा करता है जिसमें उस interface को live करना है।
