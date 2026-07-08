<!--
تم إنشاء هذه الترجمة بواسطة ChatGPT ويجب أن يراجعها مترجم بشري.
احذف هذين السطرين في طلب سحب بعد التحقق من صحة الترجمة.
-->

# 6.3 Connectors :: Adapter

## نقاش تفصيلي

### من الاستخدام إلى السياق

يقع موصل **Adapter** بين **Layer 5: Components, Controls, & Layouts** و **Layer 4: Graphs & Frames**. وهو مسؤول عن أخذ interface data قابلة للتغيير ووضعها في سياق أكبر يمكن فيه تنظيمها، واكتشافها، و routing لها، وتحديد حدودها، وتجهيزها لباقي الـ Stack.

يعطي Layer 5 النظام components و controls و layouts. هذه هي الأجزاء mutable التي يستطيع developer العمل معها مباشرة. قد يمثل component قطعة من المعلومات. وقد يستجيب control إلى interaction. وقد ينظم layout components أخرى وفق ترتيب معين. لكن هذه الأجزاء لا تصف بالكامل البيئة التي توجد فيها. قد تعرف ما هي، وكيف تتصرف، لكنها لا تعرف تلقائيا كيف ترتبط بالواجهة كلها.

يوفر Adapter connector هذه الحركة من أجزاء فردية قابلة للاستخدام إلى سياق منظم. يأخذ components الناتجة عبر Parser connector ويكيفها إلى graphs و frames. هنا يبدأ الـ Stack في فهم ليس فقط أن component موجود، بل أين ينتمي، وكيف يرتبط بـ components أخرى، وكيف يجب أن يشارك في active interface.

بعبارة أخرى، يجعل Parser connector المعلومات structured قابلة للاستخدام. ويجعل Adapter connector المعلومات القابلة للاستخدام سياقية.

### تكييف Components داخل Graphs

يمكن أن يوجد component وحده، لكن user interface نادرا ما تتكون من component واحد معزول. حتى أبسط interface تحتوي عادة على علاقات: قد يحتوي component على آخر، وقد يعتمد control على layout، وقد تحتاج group إلى أن يجري search لها أو ordering أو enabling أو disabling أو focusing أو updating لها معا.

هنا يصبح graph مهما.

يسمح Adapter connector بوضع components و controls و layouts في graph حتى يمكن تنظيمها كجزء من كل أكبر. يمكن للـ graph أن يخزن components، ويتتبع علاقاتها، ويكشف طرقا للاستعلام عنها، ويوفر المنطق المحيط اللازم لإدارتها كـ collection. من دون هذه الخطوة، ستبقى components قطعا متناثرة من data mutable بدلا من أن تكون مشاركين في interface موحدة.

على سبيل المثال، قد يكون settings component مفيدا وحده. بعد تكييفه في graph، يمكن أن يصبح جزءا من settings view كاملة، متصلا بأقسام أخرى، قابلا للبحث بالاسم، محدثا بقيم مرتبطة، أو موجها إليه عندما ينفذ المستخدم action. لم يتوقف component عن كونه component، لكنه اكتسب context عبر graph.

يساعد هذا التمييز في إبقاء Layer 5 و Layer 4 منفصلين. تصف Components interface data قابلة للاستخدام. وتصف Graphs كيف تنظم تلك الأجزاء معا.

### Layout ليس كل السياق

يساعد Adapter connector أيضا في توضيح الفرق بين layout و graph. لأن layouts تستطيع تنظيم components، قد يكون من المغري اعتبارها الطبقة التنظيمية الكاملة للواجهة. لكن layout ينظم components بطريقة معينة فقط. ولا يصف بالضرورة العلاقة الكاملة أو lifecycle أو routing أو environmental context لتلك components.

قد يحدد layout عمودي أن عدة controls يجب أن تظهر بالترتيب. هذا لا يعني أن layout مسؤول عن الواجهة كلها. لا يحتاج إلى معرفة كل component نشط، أو إدارة كل interaction، أو تجهيز output boundary، أو العمل كوسيط أعلى للنظام. تلك المسؤوليات تخص Layer 4.

يحترم Adapter connector هذا التمييز. يمكنه أخذ layout من Layer 5 ووضعه في graph، لكن layout لا يصبح graph لمجرد أنه يرتب components. يوفر graph سياقا تنظيميا أوسع، بينما يبقى layout component غرضه ترتيب components أخرى.

تصبح هذه separation مفيدة خصوصا عندما تكبر الواجهة. يمكن أن تبقى arrangements البسيطة بسيطة، بينما يظل النظام الأوسع يوفر structure اللازمة لإدارة discovery و routing و updates والتحضير لـ output.

### الاتصال بالـ Frame

لا يهتم Layer 4 بالـ graphs فقط. إنه يحتوي أيضا على frame، الذي يمثل boundary النشطة ونقطة التواصل بين components المنظمة والطبقات السفلى من الـ Stack.

يساعد Adapter connector components على الدخول في هذا framed context. قد يكون للـ component حجم، وقد يكون للـ control interaction behavior، وقد يصف layout موضعا نسبيا، لكن frame هو الذي يحدد bounds التي تجهز داخلها تلك الأجزاء. إنه يهتم بالـ active area والسياق المحيط والمعلومات التي يجب في النهاية تمريرها نحو rendering.

هذا لا يعني أن Adapter connector يرندر أي شيء. Rendering يخص الطبقات السفلى. يقوم Adapter connector بتجهيز الواجهة المنظمة حتى يستطيع frame أن يواصلها بشكل صحيح. يعطي frame علاقات components ونتائج layout والمعلومات السياقية اللازمة قبل أن يحمل connector التالي تلك المعلومات نحو renderer.

بهذه الطريقة يعمل Adapter connector كجسر بين “هذه هي الأجزاء التي يمكننا استخدامها” و “هذه هي الواجهة المنظمة التي نجهزها”.

### إعادة الاستخدام عبر Adaptation

أحد أقوى جوانب Adapter connector هو أن component نفسه يمكن تكييفه في سياقات مختلفة. لا يحتاج component إلى أن يكون مربوطا دائما بـ graph واحد أو frame واحد أو نوع واحد من الواجهة. يمكن أن يبقى معناه وسلوكه مستقرين بينما يحدد Adapter connector كيف يجب أن يشارك في بيئة معينة.

يمكن تكييف document component في editing graph أو preview graph أو printing graph. ويمكن تكييف music component في playback graph أو editing graph أو library graph. ويمكن تكييف مجموعة settings components في preferences page بسيطة أو advanced configuration panel أو automated setup flow.

قد تبقى components الأساسية مألوفة، لكن علاقاتها وغرضها يتغيران حسب graph و frame اللذين تدخل فيهما. يمنح هذا CatalystUI طريقة نظيفة للتعبير عن reuse من دون الادعاء بأن reuse يعني أن كل context متماثل.

Adapter connector هو ما يجعل ذلك ممكنا. يسمح لـ mutable interface data بإعادة التنظيم وفق الغرض، مع إبقاء component نفسه مركزا على ما يمثله وكيف يتصرف.

### العودة إلى Components

لأن الـ Stack قابل للعكس، يشارك Adapter connector أيضا في تدفق interaction عائدا نحو الطبقات العليا. عندما يتفاعل المستخدم مع النظام، تحتاج الطبقات السفلى في النهاية إلى routing ذلك interaction إلى component أو control المناسب.

يلعب Layer 4 دورا مهما في هذه العملية لأنه يفهم organized context. يمكن للـ graph أن يساعد في تحديد أي component relevant. ويمكن للـ frame أن يساعد في تفسير bounds التي حدثت فيها interaction. بعد معرفة ذلك context، يساعد Adapter connector في إعادة interaction إلى Layer 5، حيث يستطيع component أو control المناسب أن يستجيب.

هذا مهم لأن interactions نادرا ما تصل مرتبطة مسبقا بالـ component الدقيق الذي يجب أن يعالجها. قد يعرف system أن key ضغطت، أو pointer تحرك، أو command triggered، أو region اختيرت، لكن الـ Stack ما يزال يحتاج إلى تحديد معنى ذلك action داخل الواجهة الحالية. يساعد Adapter connector في حمل ذلك القرار السياقي عائدا إلى components mutable حيث يمكن معالجة interaction.

في top-down flow يضع Adapter connector components في context. وفي bottom-up flow يساعد على إعادة contextual interactions إلى components القادرة على التصرف بناء عليها.

### حفظ الهوية

يجب على Adapter connector أن يحفظ identity و intent للـ components التي يكيفها. عندما يدخل component في graph أو frame، يجب ألا يفقد ما هو عليه. يجب أن يبقى غرضه وحالته وعلاقته بالمعلومات الأصلية recognizable، حتى عندما يجري تنظيمه داخل system أكبر.

هذا لا يعني أن component لا يمكن wrapped أو indexed أو grouped أو measured أو transformed أو prepared لبيئة محددة. في حالات كثيرة، تتطلب adaptation معلومات إضافية لم يكن component يحتويها أصلا. قد يحتاج graph إلى identifiers. وقد يحتاج frame إلى bounds. وقد يحتاج routing system إلى focus information. تساعد هذه الإضافات component على المشاركة في context، لكنها لا يجب أن تمحو meaning الخاص به.

لذلك يؤدي Adapter connector نوعا حذرا من transformation. يضيف context من دون ابتلاع component. يسمح للواجهة بأن تصبح organized من دون إجبار كل component على أن يصبح مسؤولا عن system كله حوله.

### لماذا يهم هذا Connector

يمنع Adapter connector الـ Stack من الخلط بين usable interface data و organized interface context. من دون هذا connector، ستضطر components إلى إدارة graphs الخاصة بها، أو ستُفهم layouts خطأ على أنها تنظيم كامل للواجهة، أو ستُجبر frames على فهم components من دون transition مناسب بين الطبقتين.

بتعريف Adapter connector، يعطي الـ Model هذا الانتقال مكانا مناسبا.

تبقى Components, Controls, & Layouts مسؤولة عن objects الواجهة mutable وعن direct interaction behavior. وتبقى Graphs & Frames مسؤولة عن organization و context و boundaries و routing والتحضير للطبقات السفلى. ويتولى Adapter connector الحركة بينهما.

هذه هي النقطة في الـ Stack حيث تصبح المعلومات القابلة للاستخدام معلومات موضوعة في سياق. لم تعد components متاحة للبرنامج فقط؛ بل توضع في living context حيث يمكن أن ترتبط ببعضها، وتستجيب عبر المسارات الصحيحة، وتستعد لأن تحمل إلى أسفل في الـ Stack. ومن هناك يمكن للواجهة المنظمة أن تتحرك نحو rendering و delivery و perception و response.
