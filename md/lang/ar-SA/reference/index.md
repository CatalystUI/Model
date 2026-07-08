<!--
تم إنشاء هذه الترجمة بواسطة ChatGPT ويجب أن يراجعها مترجم بشري.
احذف هذين السطرين في طلب سحب بعد التحقق من صحة الترجمة.
-->

# 3. المرجع

فيما يلي تلخيص لنموذج CatalystUI Model بعدة صيغ، ليسهل الرجوع إليه ونسخه وتطبيقه أثناء دراسة النموذج أو توثيقه أو تنفيذه.

صفحة المرجع ليست بديلة عن الوثائق المحيطة بها. بل تقدم عرضًا مختصرًا للنموذج بعد أن تكون المصطلحات والملخص وdomains وstack وconnectors وinteractions قد عُرّفت بالفعل.

## حسب AI Prompt

AI prompt يمكن أن يساعد LLM على تفسير CatalystUI Model وفهمه. يمكن استخدامه لطرح أسئلة عن النموذج، أو مقارنة systems قائمة به، أو توفير ورقة مرجعية عند حل المشكلات في بيئة تقنية.

---

```md
CatalystUI Model هو نموذج عام لوصف تدفق المعلومات بين user وinformation system.

Process هو شيء يقبل input، وينفذ transformation، وينتج output. System هو مجموعة منظمة من processes، تُعرّف من خلال طريقة تفاعلها والترتيب الذي تُنفذ به. Interface هو mechanism يسمح بتفاعل systemين مختلفين. Information system هو system متخصص يعمل مع persistent data ويسمح لـ user بإنشائها أو قراءتها أو تحديثها أو حذفها عبر interface مع مرور الوقت. Computer هو information system يعمل حصرًا مع digital data، أي data يمكن تمثيلها بالثنائي ومعالجتها بواسطة machine. User هو شخص يمكنه التفاعل مع information system.

في CatalystUI Model، يُتعامل مع المصطلحين "data" و"information" على أنهما قابلان للتبادل.

يصف Model واجهات المستخدم من خلال تدفق المعلومات. يمكن أن تُعرض information بواسطة system، وأن يفسرها user، وأن يرد عليها user، وأن يعالجها system، ثم تُعرض مرة أخرى مع استمرار الدورة. يمكن أن تبدأ الدورة من أي نقطة، لكن النمط نفسه ينطبق دائمًا: تتدفق information بين user وinformation system عبر interface.

ينقسم CatalystUI Model إلى ثلاث فئات رئيسية:

- Domains
- The Stack
- Connectors

Domains تصنف data. The Stack يصف data. Connectors تحول data وتعدلها وتترجمها.

Domains تصف نوع information التي تُعالج أثناء interaction. الdomains السبعة العليا هي Symbolic وVisual وAuditory وTactile وOlfactory وGustatory وMultisensory. Symbolic data هي information قبل أن تُربط بحاسة محددة. Visual data هي information المقصود رؤيتها. Auditory data هي information المقصود سماعها. Tactile data هي information المقصود الإحساس بها. Olfactory data هي information المقصود شمها. Gustatory data هي information المقصود تذوقها. Multisensory data هي information تعمل فيها عدة فئات حسية معًا كتجربة واحدة.

The Stack يصف موضع information داخل flow. يحتوي على سبعة layers صريحة مع نقطتي نهاية ضمنيتين. من الأعلى إلى الأسفل، The Stack هو:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage هو المصدر أو الوجهة الضمنية حيث تبقى persistent data متاحة خارج active interface flow. Digital Data هي data بعد دخولها active interface flow بصيغة يمكن للحاسوب قراءتها، ولكن قبل أن يكون باقي Model قد فسرها أو نظمها أو عرضها. Structure & Semantics يصف كيف ينبغي فهم digital data؛ semantics تحدد قواعد تفسير data، بينما structure هي النتيجة المنظمة لتطبيق تلك القواعد. Components, Controls, & Layouts تمثل الأجزاء المنطقية والقابلة للاستخدام في interface؛ components تمثل interface objects قابلة للاستخدام، وcontrols تعالج interactions، وlayouts ترتب components أو controls أخرى. Graphs & Frames تنظم تلك الأجزاء في علاقات أكبر وسياقات نشطة؛ graphs تمثل العلاقات المنظمة بين interface objects، بينما frames تحتوي graphs وتنسقها استعدادًا لما يواجه renderer. Renderers تحول interface data المحضرة إلى صيغة جاهزة للإخراج. Windows توفر view أو context يستطيع user من خلاله تقديم input إلى system أو تلقي output منه. Systems توفر environment وservices وdevices وprocesses التي تسلم output وتتلقى input في النهاية. Human Interface هو endpoint الضمني حيث يدرك user information ويرد عبر interaction.

Connectors تصف كيف تنتقل information بين layers الصريحة المتجاورة في Stack. من الأعلى إلى الأسفل، connectors هي:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector يربط Digital Data مع Structure & Semantics. إنه يجلب information نشطة قابلة للقراءة بواسطة الحاسوب إلى صيغة structured يستطيع Model فهمها، ويمكنه أيضًا إعادة structured information إلى digital form.

Parser connector يربط Structure & Semantics مع Components, Controls, & Layouts. إنه يحلل stable interpreted structures إلى mutable interface parts، ويمكنه أيضًا إعادة modified components إلى structured data.

Adapter connector يربط Components, Controls, & Layouts مع Graphs & Frames. إنه يكيف usable interface parts إلى organized relationships وactive contexts، ويساعد على إعادة contextual interactions إلى components أو controls التي تستطيع التعامل معها.

Bridge connector يربط Graphs & Frames مع Renderers. إنه يحمل organized interface context إلى renderer ويمرر interactions غالبًا إلى الأعلى مع تعديل قليل، حتى يستطيع graph وframe توجيهها كما ينبغي.

Surface connector يربط Renderers مع Windows. إنه يعطي rendered output وجهة داخل window ويحمل إلى الأعلى interaction information الصادرة من window.

Native connector يربط Windows مع Systems. إنه يوفر bindings بين window وsystem، مما يسمح لـ window بأن توجد، وتتلقى interactions، وتسلم output، وتتواصل مع native system behavior.

Interactions هي النقطة التي يصبح فيها Model تشاركيًا. Interaction هي النية خلف action. النقر أو اللمس أو السحب أو الأمر أو الحركة أو الكلمة المنطوقة هو فقط action المرئي؛ interaction هي ما يحاول user إنجازه من خلال ذلك action. تتحرك Interactions عبر Stack، وتتحول بواسطة connectors، وقد تعدل digital data في النهاية قبل أن تبدأ الدورة مرة أخرى.

استخدم CatalystUI Model لتصنيف نوع information التي تُعالج، وتحديد موضع تلك information داخل Stack، وتحديد أي connector مسؤول عن transition بين layers، وتتبع كيف تتحرك information من stored data إلى user experience ومن user intent عائدة إلى data.
```

## حسب النص

ورقة مرجعية مختصرة تعرض الترتيب الأساسي لـ CatalystUI Model.

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

| Domain       | المعنى السريع |
| ------------ | ------------- |
| Symbolic     | Information قبل الارتباط بحاسة محددة. |
| Visual       | Information المقصود رؤيتها. |
| Auditory     | Information المقصود سماعها. |
| Tactile      | Information المقصود الإحساس بها. |
| Olfactory    | Information المقصود شمها. |
| Gustatory    | Information المقصود تذوقها. |
| Multisensory | عدة فئات حسية تعمل معًا كتجربة واحدة. |

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

| Layer   | Name                            | المعنى السريع |
| ------- | ------------------------------- | ------------- |
| Implied | Data Storage                    | Persistent data خارج active interface flow. |
| Layer 7 | Digital Data                    | Information نشطة قابلة للقراءة بواسطة الحاسوب قبل interpretation. |
| Layer 6 | Structure & Semantics           | Data مفسرة والقواعد التي تمنحها meaning. |
| Layer 5 | Components, Controls, & Layouts | Mutable interface parts يستخدمها program. |
| Layer 4 | Graphs & Frames                 | Organized relationships وactive interface context. |
| Layer 3 | Renderers                       | Processes تجهز information من أجل output. |
| Layer 2 | Windows                         | Views أو delivery contexts تمر عبرها input وoutput. |
| Layer 1 | Systems                         | Environment وservices وdevices وprocesses تحت interface. |
| Implied | Human Interface                 | User الذي يدرك output ويرد عبر interaction. |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Connects                                                | المعنى السريع |
| --------- | ------------------------------------------------------- | ------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | يربط active digital data بـ interpreted structure. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | يحلل stable structures إلى mutable interface parts. |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | يكيف usable parts إلى organized context. |
| Bridge    | Graphs & Frames ↔ Renderers                             | ينقل organized context إلى rendering. |
| Surface   | Renderers ↔ Windows                                     | يربط rendered output بـ window. |
| Native    | Windows ↔ Systems                                       | يوفر bindings بين window وsystem. |

## حسب Flow

مرجع مختصر لتتبع كيفية حركة information عبر Model.

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

## حسب المسؤولية

مرجع سريع لتحديد موضع شيء ما داخل Model.

---

| السؤال | استخدم |
| ------ | ------ |
| ما نوع information التي تُعالج؟ | Domains |
| أين تقع information داخل flow؟ | The Stack |
| كيف تتحرك information بين layers المتجاورة؟ | Connectors |
| ما الذي يحاول user إنجازه؟ | Interactions |

## حسب سؤال تشخيصي

مرجع قائم على الأسئلة لتطبيق Model على system قائم.

---

| السؤال | المنطقة المرجحة |
| ------ | --------------- |
| هل data متاحة لكنها غير مفهومة؟ | Digital Data, Data, Structure & Semantics |
| هل interpreted data غير usable بعد؟ | Structure & Semantics, Parser, Components |
| هل usable parts غير منظمة في context؟ | Components, Adapter, Graphs & Frames |
| هل organized context لا يصل إلى renderer؟ | Graphs & Frames, Bridge, Renderers |
| هل rendered output ليس له مكان يذهب إليه؟ | Renderers, Surface, Windows |
| هل window غير متصلة جيدًا بـ system؟ | Windows, Native, Systems |
| هل اكتشف system فعلًا لكنه فاته user intent؟ | Interactions and interaction routing |

## ملخص بجملة واحدة

ملخص مختصر للنموذج كله.

---

```md
يصف CatalystUI Model تدفق information بين user وinformation system من خلال تصنيف data عبر Domains، وتحديد موقع data داخل Stack، وتحويل data عبر Connectors، وتتبع user intent عبر Interactions.
```
