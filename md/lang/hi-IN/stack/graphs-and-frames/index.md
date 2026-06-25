# 5.5 The Stack :: Graphs & Frames

## गहराई वाली चर्चा

### Organizational Layer

**Graphs & Frames** वह layer है जहाँ usable interface objects larger operating context में organize होते हैं। Layer 5 components, controls, और layouts को mutable objects की तरह provide करता है, लेकिन ये objects सिर्फ साथ exist करने से automatically complete interface नहीं बनाते। उन्हें discover, relate, query, order, route, bound, और Stack की lower layers के लिए prepare किए जाने का तरीका चाहिए।

यही Layer 4 का purpose है। यह Layer 5 से active interface objects receive करता है और वह broader context establish करता है जिसमें वे operate करते हैं। Component जान सकता है कि अपनी state कैसे represent करनी है, control जान सकता है interaction कैसे handle करनी है, और layout जान सकता है components के group को कैसे arrange करना है, लेकिन Layer 4 determine करता है कि ये pieces interface as a whole में कैसे participate करते हैं।

### Graphs

**Graph** components, controls, और layouts के बीच organized relationships describe करता है। यह वह structure provide करता है जिससे समझा जा सके कि interface objects एक-दूसरे से कैसे relate करते हैं, कैसे located हो सकते हैं, और active operation के दौरान कैसे traversed या queried हो सकते हैं।

यह graph को layout से distinct बनाता है। Layout components को particular rule या pattern के according arrange करता है। Graph larger relationship space manage करता है जिसमें layouts और components exist करते हैं। वह parent-child relationships, ownership, dependency, grouping, ordering, focus paths, routing paths, या connection के other forms describe कर सकता है जो interface को coherent system की तरह operate करने में मदद करते हैं।

Graph interface objects locate और manage करने का practical way भी provide करता है बिना हर component को हर other component के बारे में जानने के लिए force किए। Components अपनी usable state पर focused रह सकते हैं, जबकि graph discovery, coordination, और routing के लिए needed surrounding structure provide करता है। इससे interface isolated objects के collection या direct references के tangled set में बदलने से बचता है।

### Frames

**Frame** Stack की lower layers के लिए prepared larger current operating context describe करता है। जहाँ graph interface objects और उनके relationships organize करता है, frame उस organization की relevant state को ऐसी form में contain और coordinate करता है जिसे rendering, output, या lower-level processing की ओर pass किया जा सके।

Frame Layer 5 की object-oriented interface world और Layer 3 की rendering-oriented world के बीच main boundary की तरह act करता है। वह सिर्फ components contain नहीं करता; वह उन्हें prepare करता है। यह preparation bounds resolve करना, layout results apply करना, renderable elements collect करना, output order करना, current interface state track करना, या renderer को work करने के लिए temporary representation produce करना include कर सकता है।

Frame को permanent के बजाय contextual समझना चाहिए। यह particular pass, update, render, या routing operation के लिए interface की current condition represent करता है। Interface change होने पर new frames या updated frame states produce हो सकते हैं। इससे Stack live operation describe कर सकता है बिना temporary presentation state को stored content या interpreted structure से confuse किए।

### Graphs और Frames का relationship

Graphs और frames साथ काम करते हैं क्योंकि interface को relationship और context दोनों चाहिए। Graph explain करता है कि interface objects कैसे connected हैं। Frame explain करता है कि lower layers को उन connected objects से particular moment पर क्या receive करना चाहिए।

यह distinction important है क्योंकि organization और preparation same task नहीं हैं। Graph control खोजने, layout hierarchy समझने, या कौन सा component interface की कौन सी region से belong करता है यह determine करने के लिए needed relationships contain कर सकता है। Frame उस organization का current result लेकर उसे rendering या interaction routing के लिए prepare कर सकता है। Graph map provide करता है; frame उस map से current pass provide करता है।

साथ में वे Layer 4 को passive components collection या renderer-specific command list बनने से रोकते हैं। वह Stack की organizational और contextual layer बनी रहती है: Layer 5 के इतनी close कि interface objects समझ सके, और Layer 3 के इतनी close कि उन्हें lower-level transformation के लिए prepare कर सके।

### Rendering के लिए preparation

Top-down flow में Graphs & Frames Layer 5 से components, controls, और layouts receive करता है और उन्हें Renderer के लिए prepare करता है। इसका मतलब यह नहीं कि Layer 4 rendering perform करता है। Rendering Layer 3 से belong करती है। Layer 4 determine करता है कि नीचे क्या भेजना है, किस relationship में, किन bounds के under, और किस current state में।

यह preparation जरूरी है क्योंकि renderer को हर component, control, या layout का full meaning समझने के लिए responsible नहीं होना चाहिए। Renderer को prepared form चाहिए जिसे वह perceivable output में transform कर सके। Layer 4 interface की organization preserve करता है जबकि active object model को ऐसे रूप में reduce करता है जिसके साथ renderer काम कर सके।

ऐसा करके Layer 4 renderers को specialized रहने देता है। Renderer domain-specific output में transformation पर focus कर सकता है बिना component relationships, layout hierarchy, interaction targets, और active interface state का top-level manager भी बने।

### Interactions route करना

Bottom-up flow में Graphs & Frames interactions को appropriate controls की ओर वापस route करने में मदद करता है। Lower layers identify कर सकती हैं कि interaction occurred, और position, timing, device source, focus context, या other relevant input state जैसे details provide कर सकती हैं। Layer 4 graph और frame context का use करके determine करता है कि वह interaction कहाँ belong करती है।

यह routing role उन clearest reasons में से एक है कि Layer 4 क्यों exist करना चाहिए। Control जान सकता है कि interaction receive होने पर उसे कैसे handle करना है, लेकिन कुछ तो determine करेगा कि कौन सा control उसे receive करे। Graph relationship structure provide करता है, जबकि frame current operational context provide करता है। साथ में वे Stack को intent interface के through route करने देते हैं, बजाय input को direction के बिना ऊपर pass करने के।

इसका मतलब यह भी है कि Layer 4 output preparation और input resolution दोनों में participate करता है। एक direction में वह organized interface state को rendering के लिए prepare करता है, और दूसरी direction में routed interaction resolve करने में मदद करता है। वही layer जो जानती है कि interface अभी कैसे arranged है, interaction को उस arrangement के through वापस कैसे travel करना चाहिए यह determine करने के लिए best positioned होती है।

### Components, Controls, & Layouts से relationship

Layer 4 उन active interface objects के लिए Layer 5 पर depend करता है जिन्हें वह organize करता है। Components, controls, और layouts interface के usable parts provide करते हैं, लेकिन Layer 4 determine करता है कि वे parts larger whole कैसे form करते हैं। इससे individual components global interface management के लिए responsible बनने से बचते हैं।

Separation layouts को भी too broad बनने से protect करता है। Layout components के group को arrange कर सकता है, लेकिन उसे interface की हर relationship manage करने की जरूरत नहीं। उसे full routing system, lifecycle coordinator, या rendering boundary की तरह act करने की जरूरत नहीं। Layer 4 higher-level organization provide करता है ताकि layouts arrangement पर focused रह सकें।

### Renderer से relationship

Layer 4 Renderer को उन responsibilities से भी protect करता है जो rendering से belong नहीं करतीं। Graphs & Frames के बिना, renderer को output produce करने से पहले component trees, layout relationships, control routing, bounds resolution, और active interface context समझना पड़ेगा। इससे rendering interface model के बहुत बड़े हिस्से के लिए responsible हो जाएगा।

Graphs & Frames को Layer 5 और Layer 3 के बीच रखकर Stack clean handoff create करता है। Layer 5 usable interface objects provide करता है। Layer 4 उन objects को organize और prepare करता है। Layer 3 prepared representation को perceivable output में transform करता है। हर layer process के distinct part पर focused रहती है।

### Layer क्यों important है

Graphs & Frames Stack को interface को loose components collection या direct rendering problem की तरह treat करने से रोकता है। Usable interface को render होने से पहले organization चाहिए और interaction का coherently respond करने से पहले routing चाहिए। Layer 4 दोनों के लिए needed structure provide करता है।

Layer 4 को Components, Controls, & Layouts और Renderer से separate करके, Model responsibility की clean progression preserve करता है। Components, controls, और layouts active interface objects define करते हैं। Graphs और frames उन objects को current operating context में organize करते हैं। Renderer फिर उस prepared context को perceivable output में transform करता है। यह distinction CatalystUI को complex interfaces describe करने देता है बिना components को whole system manage करने के लिए force किए या renderers को entire interface model समझने के लिए force किए।
