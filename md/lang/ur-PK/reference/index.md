<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 3. Reference

ذیل میں CatalystUI Model کو مختلف formats میں summarize کیا گیا ہے تاکہ studying، documenting، یا Model implement کرتے وقت اسے reference، copy، اور apply کرنا آسان ہو۔

Reference page surrounding documentation کا replacement نہیں ہے۔ اس کے بجائے، یہ Model کا compact view provide کرتی ہے، جب terminology، summary، domains، stack، connectors، and interactions پہلے introduce کیے جا چکے ہوں۔

## By AI Prompt

ایک AI prompt جو LLM کو CatalystUI Model interpret اور understand کرنے دے سکتا ہے۔ اسے Model کے بارے میں questions پوچھنے، existing systems کو اس کے against compare کرنے، یا technical environment میں problem-solving کے وقت reference sheet provide کرنے کے لیے use کیا جا سکتا ہے۔

---

```md
CatalystUI Model user اور information system کے درمیان information کے flow کو describe کرنے کے لیے ایک universal model ہے۔

process ایسی چیز ہے جو input قبول کرتی ہے، transformation perform کرتی ہے، اور output produce کرتی ہے۔ system processes کا organized set ہے، جسے اس بات سے define کیا جاتا ہے کہ وہ کیسے interact کرتے ہیں اور کس order میں execute ہوتے ہیں۔ interface ایسا mechanism ہے جو دو different systems کو interact کرنے دیتا ہے۔ information system ایسا specialized system ہے جو persistent data کے ساتھ کام کرتا ہے اور user کو time کے ساتھ interface کے ذریعے اسے create، read، update، یا delete کرنے دیتا ہے۔ computer ایسا information system ہے جو exclusively digital data کے ساتھ کام کرتا ہے، یعنی data جو binary میں represent ہو سکتا ہے اور machine کے ذریعے process کیا جا سکتا ہے۔ user ایسا person ہے جو information system کے ساتھ interact کر سکتا ہے۔

CatalystUI Model میں "data" اور "information" کو interchangeable سمجھا جاتا ہے۔

Model user interfaces کو information کے flow کے ذریعے describe کرتا ہے۔ information system کے ذریعے presented ہو سکتی ہے، user کے ذریعے interpreted ہو سکتی ہے، user اس کا response دے سکتا ہے، system response process کر سکتا ہے، اور cycle جاری رہتے ہوئے information دوبارہ presented ہو سکتی ہے۔ cycle کسی بھی point سے begin ہو سکتی ہے، مگر same pattern apply ہوتا ہے: information user اور information system کے درمیان interface کے ذریعے flow کرتی ہے۔

CatalystUI Model تین primary categories میں split ہے:

- Domains
- The Stack
- Connectors

Domains data کو categorize کرتے ہیں۔ Stack data کو describe کرتا ہے۔ Connectors data کو transform، modify، اور translate کرتے ہیں۔

Domains describe کرتے ہیں کہ interaction کے دوران کس kind کی information handle ہو رہی ہے۔ سات top-level domains ہیں: Symbolic، Visual، Auditory، Tactile، Olfactory، Gustatory، اور Multisensory۔ Symbolic data وہ information ہے جو ابھی specific sense سے committed نہیں۔ Visual data دیکھنے کے لیے meant ہے۔ Auditory data سننے کے لیے meant ہے۔ Tactile data محسوس کرنے کے لیے meant ہے۔ Olfactory data سونگھنے کے لیے meant ہے۔ Gustatory data چکھنے کے لیے meant ہے۔ Multisensory data وہ information ہے جہاں multiple sensory categories ایک experience کے طور پر together work کرتی ہیں۔

Stack describe کرتا ہے کہ information flow میں کہاں located ہے۔ اس میں سات explicit layers اور دو implied endpoints ہیں۔ top سے bottom تک Stack یہ ہے:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage implied source یا destination ہے جہاں persistent data active interface flow سے باہر available رہتا ہے۔ Digital Data وہ data ہے جو active interface flow میں computer-readable form میں داخل ہو چکا ہے، مگر Model نے اسے ابھی interpret، organize، یا present نہیں کیا۔ Structure & Semantics describe کرتا ہے کہ digital data کو کیسے understand کرنا چاہیے؛ semantics data interpret کرنے کے rules define کرتے ہیں، جبکہ structure ان rules کو apply کرنے کا organized result ہے۔ Components, Controls, & Layouts interface کے logical and usable parts represent کرتے ہیں؛ components usable interface objects represent کرتے ہیں، controls interactions process کرتے ہیں، اور layouts other components یا controls arrange کرتے ہیں۔ Graphs & Frames ان parts کو larger relationships اور active contexts میں organize کرتے ہیں؛ graphs interface objects کے organized relationships represent کرتے ہیں، جبکہ frames renderer-facing preparation کے لیے graphs کو contain and coordinate کرتے ہیں۔ Renderers prepared interface data کو output-ready form میں transform کرتے ہیں۔ Windows ایسا view یا context provide کرتے ہیں جس کے through user system کو input دے یا output receive کر سکتا ہے۔ Systems environment، services، devices، and processes provide کرتے ہیں جو ultimately output deliver اور input receive کرتے ہیں۔ Human Interface implied endpoint ہے جہاں user information perceive کرتا ہے اور interaction کے ذریعے respond کرتا ہے۔

Connectors describe کرتے ہیں کہ information Stack کی neighboring explicit layers کے درمیان کیسے move کرتی ہے۔ top سے bottom تک connectors یہ ہیں:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector Digital Data کو Structure & Semantics سے connect کرتا ہے۔ یہ active computer-readable information کو ایسی structured form میں لاتا ہے جسے Model understand کر سکے، اور structured information کو واپس digital form میں بھی return کر سکتا ہے۔

Parser connector Structure & Semantics کو Components, Controls, & Layouts سے connect کرتا ہے۔ یہ stable interpreted structures کو mutable interface parts میں parse کرتا ہے، اور modified components کو واپس structured data میں بھی return کر سکتا ہے۔

Adapter connector Components, Controls, & Layouts کو Graphs & Frames سے connect کرتا ہے۔ یہ usable interface parts کو organized relationships and active contexts میں adapt کرتا ہے، اور contextual interactions کو واپس ان components یا controls تک لے جانے میں help کرتا ہے جو انہیں handle کر سکتے ہیں۔

Bridge connector Graphs & Frames کو Renderers سے connect کرتا ہے۔ یہ organized interface context کو renderer میں carry کرتا ہے، اور عموماً interactions کو little modification کے ساتھ upward واپس pass کرتا ہے تاکہ graph and frame انہیں appropriately route کر سکیں۔

Surface connector Renderers کو Windows سے connect کرتا ہے۔ یہ rendered output کو window کے اندر destination دیتا ہے اور window-originating interaction information کو upward واپس carry کرتا ہے۔

Native connector Windows کو Systems سے connect کرتا ہے۔ یہ window اور system کے درمیان bindings provide کرتا ہے، جس سے window exist کر سکتی ہے، interactions receive کر سکتی ہے، output deliver کر سکتی ہے، اور native system behavior سے communicate کر سکتی ہے۔

Interactions وہ point ہیں جہاں Model participatory بن جاتا ہے۔ interaction action کے پیچھے intent ہے۔ click، tap، swipe، command، movement، یا spoken word صرف visible action ہے؛ interaction وہ ہے جو user اس action کے ذریعے accomplish کرنے کی کوشش کر رہا ہے۔ Interactions Stack کے through move کرتے ہیں، connectors سے transformed ہوتے ہیں، اور eventually digital data modify کر سکتے ہیں before cycle begins again۔

CatalystUI Model کو استعمال کریں تاکہ handled information کی kind classify کر سکیں، identify کر سکیں کہ وہ information Stack میں کہاں located ہے، determine کر سکیں کہ layers کے transition کے لیے کون سا connector responsible ہے، اور trace کر سکیں کہ information stored data سے user experience تک اور user intent سے واپس data تک کیسے move کرتی ہے۔
```

## By Text

CatalystUI Model کی primary order دکھانے والی compact reference sheet۔

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

| Domain       | Quick Meaning                                                   |
| ------------ | --------------------------------------------------------------- |
| Symbolic     | specific sense سے commitment سے پہلے information۔              |
| Visual       | دیکھنے کے لیے meant information۔                                |
| Auditory     | سننے کے لیے meant information۔                                  |
| Tactile      | محسوس کرنے کے لیے meant information۔                            |
| Olfactory    | سونگھنے کے لیے meant information۔                               |
| Gustatory    | چکھنے کے لیے meant information۔                                 |
| Multisensory | multiple sensory categories جو one experience کے طور پر together work کریں۔ |

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

| Layer   | Name                            | Quick Meaning                                                               |
| ------- | ------------------------------- | --------------------------------------------------------------------------- |
| Implied | Data Storage                    | active interface flow سے باہر persistent data۔                              |
| Layer 7 | Digital Data                    | interpretation سے پہلے active computer-readable information۔                |
| Layer 6 | Structure & Semantics           | interpreted data اور meaning دینے والے rules۔                               |
| Layer 5 | Components, Controls, & Layouts | program کے استعمال کے لیے mutable interface parts۔                          |
| Layer 4 | Graphs & Frames                 | organized relationships اور active interface context۔                       |
| Layer 3 | Renderers                       | output کے لیے information prepare کرنے والے processes۔                      |
| Layer 2 | Windows                         | views یا delivery contexts جہاں input اور output pass ہوتے ہیں۔             |
| Layer 1 | Systems                         | interface کے نیچے environment، services، devices، and processes۔            |
| Implied | Human Interface                 | user جو output perceive کرتا ہے اور interaction کے ذریعے respond کرتا ہے۔   |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Connects                                                | Quick Meaning                                          |
| --------- | ------------------------------------------------------- | ------------------------------------------------------ |
| Data      | Digital Data ↔ Structure & Semantics                    | active digital data کو interpreted structure سے connect کرتا ہے۔ |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | stable structures کو mutable interface parts میں parse کرتا ہے۔ |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | usable parts کو organized context میں adapt کرتا ہے۔   |
| Bridge    | Graphs & Frames ↔ Renderers                             | organized context کو rendering میں bridge کرتا ہے۔     |
| Surface   | Renderers ↔ Windows                                     | rendered output کو window سے connect کرتا ہے۔          |
| Native    | Windows ↔ Systems                                       | window اور system کے درمیان bindings provide کرتا ہے۔ |

## By Flow

information Model کے through کیسے move کرتی ہے، اس کے لیے compact reference۔

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

## By Responsibility

Model میں کوئی چیز کہاں belong کرتی ہے identify کرنے کے لیے quick reference۔

---

| Question                                              | Use          |
| ----------------------------------------------------- | ------------ |
| کس kind کی information handle ہو رہی ہے؟             | Domains      |
| information flow میں کہاں located ہے؟                | The Stack    |
| neighboring layers کے درمیان information کیسے move ہو رہی ہے؟ | Connectors   |
| user کیا accomplish کرنے کی کوشش کر رہا ہے؟           | Interactions |

## By Diagnostic Question

existing system پر Model apply کرنے کے لیے question-based reference۔

---

| Question                                                    | Likely Area                               |
| ----------------------------------------------------------- | ----------------------------------------- |
| کیا data available ہے مگر understood نہیں؟                 | Digital Data, Data, Structure & Semantics |
| کیا interpreted data ابھی usable نہیں؟                     | Structure & Semantics, Parser, Components |
| کیا usable parts context میں organized نہیں؟               | Components, Adapter, Graphs & Frames      |
| کیا organized context renderer تک نہیں پہنچ رہا؟           | Graphs & Frames, Bridge, Renderers        |
| کیا rendered output کے پاس جانے کی place نہیں؟             | Renderers, Surface, Windows               |
| کیا window system سے properly connected نہیں؟              | Windows, Native, Systems                  |
| کیا system نے action detect کیا مگر user intent miss کیا؟  | Interactions and interaction routing      |

## By One-Sentence Summary

پورے Model کا compact summary۔

---

```md
CatalystUI Model user اور information system کے درمیان information کے flow کو describe کرتا ہے by categorizing data through Domains, locating data within the Stack, transforming data through Connectors, and tracing user intent through Interactions.
```
