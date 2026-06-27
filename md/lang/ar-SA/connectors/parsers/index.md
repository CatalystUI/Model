# 6.2 Connectors :: Parser

## نقاش تفصيلي

### من Structure إلى الاستخدام

يقع موصل **Parser** بين **Layer 6: Structure & Semantics** و **Layer 5: Components, Controls, & Layouts**. وهو مسؤول عن أخذ معلومات structured وتحويلها إلى شيء تستطيع بقية الواجهة استخدامه أو تعديله أو ترتيبه أو الاستجابة له بشكل نشط.

يعطي Layer 6 المعلومات شكلا مفسرا ومستقرا. يحدد معنى البيانات، وكيف هي منظمة، وأي rules تمنحها شكلها. لكن structure ليست هي نفسها interface object. قد تخبر structure النظام بأن document لديه heading، أو أن file يحتوي على section، أو أن song يحتوي على timing information، لكن structure نفسها ما تزال معنية أساسا بتمثيل البيانات بأمانة.

ينقل Parser connector تلك المعلومات المفسرة إلى Layer 5، حيث تصبح mutable. هنا يمكن أن تتحول structure إلى component أو control أو layout. هنا تتوقف المعلومات عن كونها وصفا مستقرا لما هو موجود فقط، وتبدأ في أن تصبح شيئا يستطيع البرنامج التعامل معه مباشرة. بعبارة أخرى، يساعد Data connector النظام على فهم ماهية المعلومات. ويساعد Parser connector النظام على تحويل ذلك الفهم إلى شيء قابل للاستخدام.

### Parsing إلى Components

تستخدم كلمة “parser” غالبا لوصف عملية قراءة نص أو تقسيم ملف إلى أجزاء ذات معنى. في CatalystUI تحمل الكلمة الفكرة العامة نفسها، لكنها تطبق على نطاق أوسع. Parser connector لا يقرأ characters أو tokens فقط. إنه يستقبل structure مفسرة بالفعل ويحولها إلى components قابلة للتغيير. هذا التمييز مهم، لأن Data connector سبق أن جلب digital data إلى Structure & Semantics. عندما تصل المعلومات إلى Parser connector، لم يعد النظام يسأل: “هل يمكن فهم هذه data؟” بل يسأل: “كيف يجب أن تصبح هذه data المفهومة قابلة للاستخدام؟”

قد تتحول document structure إلى document components. وقد تتحول configuration structure إلى settings components. وقد تتحول music structure إلى editable audio components. يؤدي Parser connector الانتقال من structured meaning إلى interactive representation. وهنا يبدأ الـ Stack أيضا في أن يبدو مألوفا أكثر للمبرمج. Components و controls و layouts هي الأجزاء التي يستطيع developer العمل معها مباشرة. يمكن تغييرها، والاستعلام عنها، وتنظيمها، وتحديثها، ثم routing لها في الطبقات السفلى من الـ Stack. Parser connector هو ما يعطي هذه الأجزاء شكلها الابتدائي.

### عندما يبدو الفرق صغيرا

في حالات كثيرة، قد تبدو structure و component مختلفتين جدا. قد يحتاج document معقد أو audio file أو interactive view إلى transformation كبير قبل أن يصبح مفيدا في Layer 5. لكن عندما تكون structure الأصلية بسيطة، قد يبدو الفرق بين structure و component شبه غير مرئي في البداية.

ملف INI مثال جيد. بعد أن يفسر Data connector الملف، قد تحتوي structure على sections و keys و values. وقد يحتوي component يمثل الملف نفسه على sections و keys و values أيضا. ظاهريا، قد يبدوان شبه متطابقين.

المفتاح هو أن الفرق ليس في الشكل فقط، بل في المسؤولية.

تمثل structure الحالة المفسرة للبيانات. إنها الشكل المستقر الناتج من التمثيل الرقمي الأصلي. أما component فيمثل الحالة القابلة للاستخدام لتلك البيانات. قد يسمح للمطور بإضافة section، أو حذف key، أو تغيير value، أو تطبيق defaults، أو validation للتعديلات، أو تتبع modifications، أو تجهيز المعلومات للعرض والتفاعل.

لذلك، رغم أن INI structure بسيطة و INI component قد يحتويان على المعلومات نفسها تقريبا، فهما لا يعنيان الشيء نفسه داخل الـ Stack. تهتم structure بالتفسير الأمين. ويهتم component بالاستخدام النشط.

هذا يوضح لماذا يهم Parser connector حتى عندما يبدو عمله صغيرا. أحيانا يكون parsing كبيرا. وأحيانا يكون قريبا من mapping واحد لواحد. في الحالتين، يظل connector يحدد boundary حيث تصبح المعلومات المفسرة interface data قابلة للتغيير.

### قوة إعادة التعبير

يصبح Parser connector قويا بشكل خاص عندما يمكن إعادة التعبير عن structure واحدة بأكثر من شكل مفيد. لأن Layer 6 يمثل interpreted meaning، يستطيع Parser connector أن يقرر كيف يجب أن يصبح ذلك المعنى usable في Layer 5.

يوضح document HTML ذلك بوضوح. يمكن parsing للوثيقة structured نفسها إلى components لصفحة web مرئية، أو components لمخطط document قابل للقراءة، أو components من أجل accessibility navigation، أو components للطباعة، أو components لاستخراج معلومات محددة. قد تكون structure الأصلية نفسها، لكن Parser connector يسمح لها بأن تصبح representations قابلة للاستخدام مختلفة حسب ما يحاول النظام إنجازه.

هذا ليس مجرد راحة. إنه يكشف شيئا مهما عن الـ Stack: بعد تفسير data، يمكن إعادة تشكيلها وفق الغرض.

يمكن تطبيق المبدأ نفسه على الموسيقى. قد تتحول representation موسيقية structured إلى editable timeline components أو playback components أو notation components أو export-oriented components. ومن هناك قد تعود المعلومات لاحقا نحو structure مناسبة لملف WAV أو MP3 أو صيغة أخرى. Parser connector هو جزء من سبب إمكانية التعبير عن هذا النوع من transformation بوضوح. إنه يعطي النظام مكانا للتحرك بين stable structure و mutable representation من دون الادعاء بأن الفكرتين متماثلتان.

بهذا الشكل يساعد Parser connector في حفظ مرونة المعلومات. يسمح لنفس interpreted data بالمشاركة في workflows و tools و forms of expression مختلفة، مع بقائها rooted في المعنى الذي توفره Structure & Semantics.

### العودة إلى Structure

لأن الـ Stack قابل للعكس، يعمل Parser connector أيضا في الاتجاه المعاكس. عندما تعدل components عبر interaction، قد تحتاج تلك التغييرات إلى العودة إلى Structure & Semantics قبل أن تصبح Digital Data مرة أخرى.

هذا المسار العكسي هو المكان الذي تجهز فيه المعلومات mutable لتصبح stable مرة أخرى. قد يغير المستخدم settings component ثم يجري parsing له مرة أخرى إلى configuration structure. وقد يجري editing لـ document component ثم parsing له إلى document structure. وقد يجري ترتيب music component أو قصه أو تعديله ثم parsing له إلى structure يمكن كتابتها لاحقا كملف.

لا تعني هذه العملية أن كل component يجب أن يعود إلى structure نفسها تماما التي جاء منها. أحيانا يكون الغرض من interaction هو تحويل المعلومات إلى شكل جديد. قد يصبح document مستورد outline مبسطا. وقد يصبح audio project محرر final export structure. وقد تختزل مجموعة components معقدة إلى structure أصغر من أجل storage أو transmission.

يوفر Parser connector للـ Model مكانا مناسبا لهذا transformation. يسمح لـ mutable interface data بأن تصبح structured data مرة أخرى من دون إجبار Layer 5 على التظاهر بأنه مسؤول عن storage، ومن دون إجبار Layer 6 على فهم كل شكل تفاعلي ممكن.

### حفظ القصد

يجب على Parser connector أن يحفظ المعنى المقصود للمعلومات أثناء عبورها بين الطبقات. عند الانتقال من structure إلى components، يجب أن ينتج أشكالا usable تعكس structure بصدق. وعند الانتقال من components إلى structure، يجب أن يمثل نتيجة interaction بوضوح كاف لكي تستطيع الطبقات العليا حفظها أو نقلها.

هذا لا يتطلب نسخة مثالية واحدا لواحد. في الواقع، يوجد Parser connector غالبا لأن النسخة واحدا لواحد ستكون أقل فائدة. قد تحتاج components إلى convenience properties أو helper methods أو editing state أو validation state أو layout information أو temporary values لا تنتمي إلى structure الأصلية. وبالمثل، قد تحذف structure المعادة temporary component state لأن ذلك state كان مفيدا فقط أثناء interaction.

الهدف ليس إبقاء كل detail داخلي متطابقا. الهدف هو حفظ المعنى المهم.

هذا يبقي الـ Stack صادقا. تظل Structure & Semantics مكان المعلومات المفسرة والمستقرة. وتظل Components, Controls, & Layouts مكان المعلومات المتغيرة والقابلة للاستخدام. ويؤدي Parser connector الحركة بينهما مع حفظ intent الخاص بالبيانات التي يجري تحويلها.

### لماذا يهم هذا Connector

يمنع Parser connector الـ Stack من الخلط بين interpreted data و usable interface data. من دون هذا connector، ستضطر structures إلى أن تصبح mutable بنفسها، أو ستضطر components إلى معرفة كيفية تفسير كل structure تستقبلها. كلا النهجين يطمس مسؤوليات الطبقات المحيطة.

بتعريف Parser connector، يعطي الـ Model هذا الانتقال مكانا مناسبا.

تبقى Structure & Semantics مسؤولة عن stable interpretation. وتبقى Components, Controls, & Layouts مسؤولة عن active use و modification و interaction. ويتولى Parser connector التحويل بينهما.

هذه هي النقطة في الـ Stack حيث تصبح المعلومات المفهومة شيئا يستطيع البرنامج العمل معه مباشرة. هنا يصبح stable meaning تمثيلا mutable. ومن هناك يمكن تنظيم المعلومات في graphs و frames، وتجهيزها من أجل output، و routing لها عبر الطبقات السفلى، ووضعها أخيرا أمام المستخدم كشيء يستطيع إدراكه وفهمه والاستجابة له.
