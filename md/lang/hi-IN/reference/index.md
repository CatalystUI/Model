# 3. संदर्भ

नीचे CatalystUI Model को कई रूपों में संक्षेपित किया गया है, ताकि Model को पढ़ते, दस्तावेज़ित करते या लागू करते समय उसे संदर्भित, कॉपी और उपयोग करना आसान हो।

Reference पेज आसपास की documentation को बदलने के लिए नहीं है। इसके बजाय, terminology, summary, domains, stack, connectors और interactions परिचित हो जाने के बाद यह Model का एक संक्षिप्त दृश्य देता है।

## AI Prompt के रूप में

एक AI prompt जो किसी LLM को CatalystUI Model को interpret और understand करने में मदद कर सकता है। इसका उपयोग Model के बारे में प्रश्न पूछने, मौजूदा systems की उससे तुलना करने, या तकनीकी वातावरण में समस्या सुलझाते समय reference sheet देने के लिए किया जा सकता है।

---

```md
CatalystUI Model user और information system के बीच information flow को वर्णित करने वाला एक universal model है।

Process वह चीज़ है जो input स्वीकार करती है, transformation करती है और output उत्पन्न करती है। System processes का एक organized set है, जिसे इस बात से परिभाषित किया जाता है कि वे कैसे interact करते हैं और किस order में execute होते हैं। Interface वह mechanism है जो दो अलग systems को interact करने देता है। Information system एक specialized system है जो persistent data के साथ काम करता है और user को समय के साथ interface के माध्यम से उसे create, read, update या delete करने देता है। Computer ऐसा information system है जो केवल digital data के साथ काम करता है, यानी ऐसे data के साथ जिसे binary में represent किया जा सके और machine द्वारा process किया जा सके। User वह व्यक्ति है जो information system के साथ interact कर सकता है।

CatalystUI Model में "data" और "information" terms को interchangeable माना जाता है।

Model user interfaces को information के flow के माध्यम से describe करता है। Information system द्वारा present की जा सकती है, user द्वारा interpret की जा सकती है, user द्वारा respond की जा सकती है, system द्वारा process की जा सकती है, और cycle जारी रहने पर फिर से present की जा सकती है। Cycle किसी भी point से शुरू हो सकता है, लेकिन वही pattern लागू रहता है: information interface के माध्यम से user और information system के बीच flow करती है।

CatalystUI Model तीन primary categories में विभाजित है:

- Domains
- The Stack
- Connectors

Domains data को categorize करते हैं। The Stack data को describe करता है। Connectors data को transform, modify और translate करते हैं।

Domains बताते हैं कि किसी interaction के दौरान किस प्रकार की information संभाली जा रही है। सात top-level domains हैं Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory और Multisensory। Symbolic data वह information है जो अभी किसी specific sense से जुड़ी नहीं है। Visual data वह information है जिसे देखा जाना है। Auditory data वह information है जिसे सुना जाना है। Tactile data वह information है जिसे महसूस किया जाना है। Olfactory data वह information है जिसे सूंघा जाना है। Gustatory data वह information है जिसे चखा जाना है। Multisensory data वह information है जिसमें कई sensory categories मिलकर एक experience के रूप में काम करती हैं।

The Stack बताता है कि flow में information कहाँ स्थित है। इसमें सात explicit layers और दो implied endpoints हैं। ऊपर से नीचे तक The Stack है:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage वह implied source या destination है जहाँ persistent data active interface flow से बाहर उपलब्ध रहता है। Digital Data वह data है जो computer-readable form में active interface flow में प्रवेश कर चुका है, लेकिन Model के बाकी हिस्से ने अभी उसे interpret, organize या present नहीं किया है। Structure & Semantics बताता है कि digital data को कैसे समझा जाना चाहिए; semantics data को interpret करने के rules define करता है, जबकि structure उन rules को apply करने का organized result है। Components, Controls, & Layouts interface के logical और usable parts को represent करता है; components usable interface objects को represent करते हैं, controls interactions को process करते हैं, और layouts दूसरे components या controls को arrange करते हैं। Graphs & Frames उन parts को बड़े relationships और active contexts में organize करता है; graphs interface objects के organized relationships को represent करते हैं, जबकि frames renderer-facing preparation के लिए graphs को contain और coordinate करते हैं। Renderers prepared interface data को output-ready form में transform करते हैं। Windows ऐसा view या context देते हैं जिसके माध्यम से user system को input दे सकता है या system से output प्राप्त कर सकता है। Systems environment, services, devices और processes देते हैं जो अंततः output deliver करते हैं और input receive करते हैं। Human Interface वह implied endpoint है जहाँ user information को perceive करता है और interaction के माध्यम से respond करता है।

Connectors बताते हैं कि information Stack के neighboring explicit layers के बीच कैसे move करती है। ऊपर से नीचे तक connectors हैं:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector Digital Data को Structure & Semantics से connect करता है। यह active computer-readable information को ऐसी structured form में लाता है जिसे Model समझ सकता है, और structured information को फिर से digital form में भी लौटा सकता है।

Parser connector Structure & Semantics को Components, Controls, & Layouts से connect करता है। यह stable interpreted structures को mutable interface parts में parse करता है, और modified components को structured data में भी लौटा सकता है।

Adapter connector Components, Controls, & Layouts को Graphs & Frames से connect करता है। यह usable interface parts को organized relationships और active contexts में adapt करता है, और contextual interactions को उन components या controls तक लौटाने में मदद करता है जो उन्हें handle कर सकते हैं।

Bridge connector Graphs & Frames को Renderers से connect करता है। यह organized interface context को renderer तक ले जाता है और आम तौर पर interactions को बहुत कम modification के साथ ऊपर वापस भेजता है, ताकि graph और frame उन्हें appropriately route कर सकें।

Surface connector Renderers को Windows से connect करता है। यह rendered output को window के भीतर destination देता है और window-originating interaction information को ऊपर वापस ले जाता है।

Native connector Windows को Systems से connect करता है। यह window और system के बीच bindings देता है, जिससे window exist कर सके, interactions receive कर सके, output deliver कर सके और native system behavior से communicate कर सके।

Interactions वह point है जहाँ Model participatory बनता है। Interaction किसी action के पीछे का intent है। Click, tap, swipe, command, movement या spoken word केवल visible action है; interaction वह है जो user उस action के माध्यम से accomplish करना चाहता है। Interactions Stack से होकर move करती हैं, connectors द्वारा transform होती हैं, और cycle फिर शुरू होने से पहले digital data को modify भी कर सकती हैं।

CatalystUI Model का उपयोग करके संभाली जा रही information के kind को classify करें, पहचानें कि वह information Stack में कहाँ located है, determine करें कि layers के बीच transition के लिए कौन सा connector responsible है, और trace करें कि information stored data से user experience तक तथा user intent से वापस data तक कैसे move करती है।
```

## Text के रूप में

CatalystUI Model का primary order दिखाने वाली एक compact reference sheet।

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

| Domain       | त्वरित अर्थ |
| ------------ | ----------- |
| Symbolic     | किसी specific sense से जुड़ने से पहले की information। |
| Visual       | देखे जाने के लिए बनी information। |
| Auditory     | सुने जाने के लिए बनी information। |
| Tactile      | महसूस किए जाने के लिए बनी information। |
| Olfactory    | सूंघे जाने के लिए बनी information। |
| Gustatory    | चखे जाने के लिए बनी information। |
| Multisensory | कई sensory categories का एक experience के रूप में साथ काम करना। |

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

| Layer   | Name                            | त्वरित अर्थ |
| ------- | ------------------------------- | ----------- |
| Implied | Data Storage                    | active interface flow से बाहर persistent data। |
| Layer 7 | Digital Data                    | interpretation से पहले active computer-readable information। |
| Layer 6 | Structure & Semantics           | interpreted data और उसे meaning देने वाले rules। |
| Layer 5 | Components, Controls, & Layouts | program द्वारा उपयोग किए जाने वाले mutable interface parts। |
| Layer 4 | Graphs & Frames                 | organized relationships और active interface context। |
| Layer 3 | Renderers                       | information को output के लिए prepare करने वाले processes। |
| Layer 2 | Windows                         | views या delivery contexts जहाँ input और output pass होते हैं। |
| Layer 1 | Systems                         | interface के नीचे environment, services, devices और processes। |
| Implied | Human Interface                 | user जो output perceive करता है और interaction से respond करता है। |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Connects                                                | त्वरित अर्थ |
| --------- | ------------------------------------------------------- | ----------- |
| Data      | Digital Data ↔ Structure & Semantics                    | active digital data को interpreted structure से connect करता है। |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | stable structures को mutable interface parts में parse करता है। |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | usable parts को organized context में adapt करता है। |
| Bridge    | Graphs & Frames ↔ Renderers                             | organized context को rendering में bridge करता है। |
| Surface   | Renderers ↔ Windows                                     | rendered output को window से connect करता है। |
| Native    | Windows ↔ Systems                                       | window और system के बीच bindings देता है। |

## Flow के रूप में

Model के भीतर information कैसे move करती है, इसे trace करने के लिए compact reference।

---

### Output-Facing Flow

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

### Interaction-Facing Flow

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

## Responsibility के रूप में

Model में कोई चीज़ कहाँ belong करती है, यह पहचानने के लिए quick reference।

---

| प्रश्न | उपयोग |
| ------ | ----- |
| किस तरह की information संभाली जा रही है? | Domains |
| information flow में कहाँ स्थित है? | The Stack |
| information neighboring layers के बीच कैसे move कर रही है? | Connectors |
| user क्या accomplish करना चाहता है? | Interactions |

## Diagnostic Question के रूप में

किसी existing system पर Model लागू करने के लिए question-based reference।

---

| प्रश्न | संभावित क्षेत्र |
| ------ | --------------- |
| क्या data available है लेकिन understood नहीं है? | Digital Data, Data, Structure & Semantics |
| क्या interpreted data अभी usable नहीं है? | Structure & Semantics, Parser, Components |
| क्या usable parts context में organized नहीं हैं? | Components, Adapter, Graphs & Frames |
| क्या organized context renderer तक नहीं पहुँच रहा? | Graphs & Frames, Bridge, Renderers |
| क्या rendered output के पास जाने की जगह नहीं है? | Renderers, Surface, Windows |
| क्या window system से properly connected नहीं है? | Windows, Native, Systems |
| क्या system ने action detect किया लेकिन user intent miss कर दिया? | Interactions and interaction routing |

## एक-वाक्य सार

पूरे Model का compact summary।

---

```md
CatalystUI Model user और information system के बीच information flow को describe करता है: Domains के माध्यम से data categorize करके, Stack के भीतर data locate करके, Connectors के माध्यम से data transform करके, और Interactions के माध्यम से user intent trace करके।
```
