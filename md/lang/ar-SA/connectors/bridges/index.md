# 6.4 Connectors :: Bridge

## نقاش تفصيلي

### من السياق إلى Rendering

يقع موصل **Bridge** بين **Layer 4: Graphs & Frames** و **Layer 3: Renderers**. وهو مسؤول عن حمل interface data المنظمة من graph و frame إلى renderer، حيث يمكن أن تبدأ تلك data في التحول إلى output قابل للإدراك.

يعطي Layer 4 النظام سياقا منظما. يعرف أي components موجودة، وكيف ترتبط ببعضها، وأي bounds تشغلها، وكيف يجب فهم active interface ككل. Layer 3 مسؤول عن rendering. يأخذ data مجهزة ويحولها إلى form يمكن في النهاية تسليمها عبر window و system.

يوجد Bridge connector لأن هاتين الطبقتين لا تتحدثان اللغة نفسها بطبيعتهما.

ينظم graph العلاقات. ويحدد frame السياق النشط والحدود. وينتج renderer output. Bridge connector هو نقطة العبور بين هذه الاهتمامات. لا يحتاج إلى أن يكون معقدا أو مرئيا. في معظم الحالات، يكشف ببساطة interface data المنظمة للـ renderer، ويسمح لمعلومات interaction بالعودة إلى الأعلى عند الحاجة. بهذا المعنى، يفعل Bridge connector بالضبط ما يقترحه اسمه: يجسر الفجوة.

### حمل الـ Frame إلى الأمام

في top-down flow، يستقبل Bridge connector النتائج المجهزة من Layer 4 ويحملها إلى Layer 3. هذا لا يعني أن Bridge مسؤول عن تنظيم components أو حساب layouts أو routing controls أو rendering output. تلك المسؤوليات تخص الطبقات المحيطة. يوجد Bridge في الوسط حتى تبقى هذه المسؤوليات منفصلة.

قد يكون frame قد جهز بالفعل bounds النشطة للواجهة. وقد يكون graph قد نظم components التي تنتمي إليه. يأخذ Bridge connector ذلك السياق المجهز ويقدمه للـ renderer في form يستطيع العمل معها. قد يتضمن ذلك تمرير references، أو prepared render entries، أو flattened component information، أو resource handles، أو command-ready data، أو أي representation أخرى مناسبة للنظام الموصوف.

قد تختلف implementation الدقيقة، لكن المسؤولية تبقى نفسها. Bridge connector لا يقرر معنى الواجهة. ولا يقرر كيف يجب أن يسلم output النهائي إلى المستخدم. إنه يوفر فقط نقطة العبور التي يصبح عندها organized interface context بيانات موجهة للـ renderer.

هذا ما يسمح لـ graph و frame بالبقاء مركزين على organization بينما يبقى renderer مركزا على rendering.

### Connector هادئ

سيبدو Bridge connector غالبا أهدأ من connectors التي فوقه. قد يصل Data connector إلى digital data ويفسرها. وقد يحول Parser connector structures إلى components mutable. وقد يضع Adapter connector تلك components في graphs و frames. بالمقارنة، قد يبدو Bridge connector شبه فارغ.

هذا الفراغ جزء من الفكرة.

عادة لا ينبغي لـ Bridge connector أن يؤدي عملا أكثر من اللازم. غرضه الرئيسي هو السماح لـ graph و frame بالتواصل مع renderer من دون إجبار أي طبقة على امتصاص مسؤوليات الأخرى. إذا بدأ graph يتصرف كـ renderer، يفقد الـ Model وضوحه. وإذا بدأ renderer يتصرف كـ graph، يفقد الـ Model قدرته على وصف organization منفصلة عن output بوضوح.

يحمي Bridge connector تلك boundary.

قد يجهز data لاستهلاك renderer، لكنه لا يجب أن يصبح renderer. وقد يكشف الواجهة المنظمة للـ renderer، لكنه لا يجب أن يصبح graph. تأتي فائدته من السماح لطبقتين متجاورتين بالبقاء distinct مع قدرتهما على العمل معا.

### إعادة Interactions إلى الأعلى

Bridge connector مهم أيضا في bottom-up flow. عندما تأتي interaction من system، تتحرك إلى الأعلى عبر الطبقات السفلى حتى تصل إلى النقطة التي تستطيع عندها الواجهة المنظمة فهمها. في حالات كثيرة، قد يستقبل renderer interaction أو يترجمها إلى form يمكن للـ Stack متابعة routing لها، لكن renderer لا يعرف عادة أي component نهائي يجب أن يعالجها.

تلك المسؤولية موجودة أعلى في الـ Stack.

لذلك يأخذ Bridge connector غالبا interaction ويمررها إلى Layer 4 بتعديل قليل جدا. graph و frame هما الطبقتان القادرتان على تحديد أين تنتمي interaction. هما يعرفان organized context. يمكنهما تحديد أي component نشط، وأي control يشغل region ذات صلة، وأي علاقة layout مهمة، أو أي جزء من الواجهة يجب أن يستقبل interaction.

لهذا لا ينبغي الخلط بين Bridge connector و interaction router. قد يحمل interaction ويحفظ المعلومات اللازمة لـ routing، لكنه عادة ليس الطبقة التي تنفذ routing نفسها. يضمن Bridge فقط أن interaction تستطيع العبور من معلومات موجهة للـ renderer إلى context موجه للـ graph.

في top-down flow، يساعد Bridge في تغذية renderer. وفي bottom-up flow، يساعد في إعادة interactions إلى المكان الذي يمكن routing لها فيه بمعنى.

### أصعب Connector في الرؤية

كان Bridge connector من أصعب connectors في التعرف إليه لأن غرضه قد يبدو غامضا من الخارج. ليست له علاقة storage الواضحة الموجودة في Data connector. وليست له transformation الواضحة الموجودة في Parser connector. وليست له الوظيفة التنظيمية الموجودة في Adapter connector. للوهلة الأولى قد يبدو مجرد handoff رفيع بين طبقتين تبدوان قريبتين بما يكفي للتواصل مباشرة.

ومع ذلك، من دون Bridge connector، لن يملك الـ Stack طريقة صريحة للانتقال من organized interface context إلى rendering. سيحتاج graph إلى معرفة كيفية تغذية renderer مباشرة، أو سيحتاج renderer إلى معرفة كيفية تفسير graphs و frames بنفسه. كلا الاتجاهين سيطيح بالحد بين organization و output.

يعطي Bridge connector ذلك الحد اسما.

قد لا يحتوي دائما على logic كثيرة، وقد يبدو صغيرا جدا في بعض implementations، لكن دوره المفهومي أساسي. يشرح كيف تعبر الواجهة المنظمة إلى rendering process من دون إجبار Layer 4 و Layer 3 على أن يصبحا الشيء نفسه.

### حفظ الـ Boundary

يجب على Bridge connector أن يحفظ boundary بين context و rendering. يجب أن تبقى المعلومات التي يمررها إلى الأسفل وفية للواجهة المنظمة التي جهزها Layer 4، مع بقائها usable بواسطة Layer 3. ويجب أن تحفظ المعلومات التي يمررها إلى الأعلى التفاصيل اللازمة كي يفهم graph و frame ما حدث، مع السماح لـ renderer بالبقاء مركزا على مسؤوليته.

لا يتطلب هذا من Bridge أن يحفظ كل detail داخلي لأي من الطبقتين. قد لا يحتاج renderer إلى graph كامل. وقد لا يحتاج graph إلى كل detail خاص بالـ renderer. يقرر Bridge connector ما يجب أن يعبر boundary حتى يستطيع كل جانب متابعة عمله من دون أخذ دور الآخر.

يجعل هذا connector مهما خصوصا في الأنظمة التي يكون للـ renderer فيها requirements محددة جدا. لا ينبغي لـ graph و frame أن يحتاجا إلى معرفة كل detail في تلك requirements. ولا ينبغي لـ renderer أن يحتاج إلى فهم organization الواجهة كلها. يوجد Bridge connector حتى يتواصل الجانبان من دون التشابك.

### لماذا يهم هذا Connector

يمنع Bridge connector الـ Stack من الخلط بين organized interface context و rendered output. من دون هذا connector، ستُجبر graphs و frames على الكلام مباشرة بمصطلحات renderer، أو ستُجبر renderers على فهم structure الكاملة للواجهة النشطة.

بتعريف Bridge connector، يعطي الـ Model هذا الانتقال مكانا مناسبا.

تبقى Graphs & Frames مسؤولة عن organization و context و boundaries و routing و preparation. وتبقى Renderers مسؤولة عن تحويل المعلومات المجهزة إلى output-ready form. ويتولى Bridge connector الحركة بينهما.

هذه هي النقطة في الـ Stack حيث تعبر المعلومات المنظمة إلى rendering process. غالبا ما يكون هادئا. وغالبا ما يكون رفيعا. وقد يبدو شبه غير مرئي. لكن من دونه يفقد الـ Stack الاتصال الصريح بين الواجهة كشيء منظم والواجهة كشيء rendered. يجعل Bridge connector ذلك العبور ممكنا، ثم يبتعد عن الطريق برحمة.
