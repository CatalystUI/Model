<!--
यह अनुवाद ChatGPT द्वारा तैयार किया गया है और किसी मानव अनुवादक द्वारा इसकी समीक्षा की जानी चाहिए।
अनुवाद सत्यापित हो जाने के बाद pull request में इन पंक्तियों को हटा दें।
-->

# 5.1 The Stack :: Data Storage

## गहराई वाली चर्चा

### एक implied boundary

**Data Storage** Stack की implied upper boundary है। यह उस condition को represent करता है जिसमें content, state, या resource explicit layers के उस पर काम शुरू करने से पहले available रहता है, और वह जगह भी जहाँ किसी interaction का result बाद में preserve किया जा सकता है। Model को यह boundary चाहिए क्योंकि interface अपना पूरा subject शून्य से create नहीं करता। कोई चीज़ read, retrieve, receive, या reference करने के लिए available होनी चाहिए, तभी उसे interpret, transform, render, या उस पर action लिया जा सकता है।

Data Storage implied है क्योंकि Stack storage की internal mechanics को model नहीं करता। Model किसी stored resource पर depend कर सकता है, लेकिन उसे यह describe करने की जरूरत नहीं है कि वह resource हर detail में कैसे retained है। वे concerns surrounding information system से belong करते हैं। Stack तब शुरू होता है जब content का कोई form active interface flow का हिस्सा बनता है।

### Stored Availability और Active Representation

Data Storage और Layer 7: **Digital Data** के बीच distinction **stored availability** और **active representation** के बीच distinction है। Data Storage उस place या condition को describe करता है जिसमें कोई चीज persist कर सकती है। Digital Data उस चीज का पहला explicit form describe करता है जब वह modeled process में computer-readable representation के रूप में enter करती है।

उदाहरण के लिए, document file system में exist कर सकता है, record database में exist कर सकता है, या response किसी API के पीछे wait कर सकती है। जब तक वह सिर्फ access के लिए available रहता है, वह Data Storage से belong करता है। जब interface उस document को read करता है, उस record को receive करता है, उस response को open करता है, या otherwise resource को active flow में लाता है, वह Layer 7 बन जाता है। Important change यह नहीं है कि content अचानक meaningful हो गया। Important change यह है कि अब वह Stack के अंदर represented है।

### Persistence और Transformation

Data Storage persistence और availability से concerned है। Explicit Stack transformation से concerned है। जैसे ही stored resource Digital Data बनता है, Model यह describe करना शुरू कर सकता है कि उसके साथ क्या होता है: Structure & Semantics उसे कैसे interpret करता है, Components, Controls, & Layouts में कैसे shape करता है, Graphs & Frames के through कैसे organize करता है, Renderer द्वारा कैसे prepare होता है, Window के through कैसे deliver होता है, और System द्वारा Human Interface की ओर कैसे carried होता है।

यह separation important है क्योंकि storage और transformation अलग questions का answer देते हैं। Data Storage पूछता है कि क्या कोई चीज time के across available रह सकती है। Digital Data पूछता है कि interface अभी किस active binary, textual, streamed, या received representation के साथ काम कर रहा है। पहला retention explain करता है। दूसरा modeled flow शुरू करता है।

### Source और Return Boundary

Top-down flow में Data Storage source boundary की तरह serve करता है। Stored resource select या retrieve होता है, फिर Digital Data के रूप में Stack में enter करता है। उस point से आगे, Model trace कर सकता है कि resource कैसे understood, arranged, transformed, और user तक delivered होता है। Data Storage खुद resource को render, parse, lay out, या interpret नहीं करता। वह सिर्फ वह condition provide करता है जिससे active representation शुरू हो सके।

Bottom-up flow में Data Storage return boundary की तरह serve करता है। User interaction interface flow के भीतर कुछ request, create, update, delete, या otherwise affect कर सकती है। Resulting change Stack के through ऊपर pass हो सकता है जब तक वह फिर से Digital Data न बन जाए। अगर उस result को immediate process से आगे available रहना है, तो वह preserved state के रूप में Data Storage में return करता है। Stack को यह recognize करने के लिए हर write strategy, database transaction, cache update, या network synchronization step model करने की जरूरत नहीं है कि result persistence में वापस cross कर गया है।

### Context में examples

इसीलिए Data Storage कई technologies के through दिखाई दे सकता है बिना उनमें से किसी एक से define हुए। File system, MySQL database, MongoDB collection, API-backed service, cloud object store, device memory region, या streaming service सभी Data Storage की तरह serve कर सकते हैं जब वे active Stack के बाहर retained availability provide करते हैं। जब कोई specific file, record, response, buffer, या stream interface flow में लाया जाता है, Model उस active representation को Digital Data की तरह treat करता है।

### Separation क्यों important है

Data Storage को Layer 7 से separate रखना Stack को clean रखता है। इस distinction के बिना, Model उस जगह को जहाँ कुछ रखा जाता है और उस form को जो interface के काम शुरू करने पर वह लेता है, blur कर देगा। इससे Digital Data persistence और active representation दोनों के लिए responsible हो जाएगा, जिससे explicit layers का purpose कमजोर होगा।

Data Storage को implied रखकर, Model clear boundary preserve करता है: storage interface flow को surround करता है, जबकि Digital Data उसे शुरू करता है। इससे Stack किसी specific active representation के transformation को describe कर सकता है, बिना उसके पीछे मौजूद हर possible storage mechanism में tangled हुए। Data Storage explain करता है कि retained content कहाँ से आ सकता है और preserved results कहाँ return कर सकते हैं; Layer 7 उस explicit process को शुरू करता है जो उस content को ऐसी चीज में बदलता है जिसे interface understand, transform, और eventually present कर सके।
