# 6.1 Connectors :: Data

## نقاش تفصيلي

### أول ترجمة

يمثل موصل **Data** أول connector صريح في الـ Stack. يقع بين **Layer 7: Digital Data** و **Layer 6: Structure & Semantics**، حيث تبدأ المعلومات النشطة القابلة للقراءة بالحاسوب في الحصول لأول مرة على شكل مفسر. يخبرنا Layer 7 بأن المعلومات موجودة كـ digital data. ويخبرنا Layer 6 كيف تكون هذه المعلومات structured وما معناها. يشرح Data connector كيف ينتقل النظام من حالة إلى أخرى.

هذا connector ضروري لأن digital data لا تفسر نفسها بنفسها. قد يحتوي ملف أو stream أو buffer أو نتيجة قاعدة بيانات أو response أو message على معلومات منظمة بالفعل، لكن التنظيم ليس هو التفسير. يجب أن يصل شيء ما إلى البيانات، ويقرأها وفق التوقعات المناسبة، وينتج شكلا يمكن لـ Structure & Semantics فهمه. هذا “الشيء” هو Data connector.

بهذا المعنى، يكون هذا connector أول فعل ترجمة داخل الـ Stack الصريح. هو لا ينشئ المعلومات الأصلية، ولا ينشئ بعد components موجهة للمستخدم. دوره هو إدخال المعلومات في الـ active flow كـ Digital Data عند الحاجة، ثم وصل ذلك التمثيل الرقمي النشط بالقواعد والبنى التي تجعل التفسير ممكنا.

### العمل مع Data Storage

مع أن Data connector يقع بين Digital Data و Structure & Semantics، فإنه غالبا ما تكون له علاقة قريبة بالطبقة الضمنية **Data Storage**. يحدث ذلك لأن كثيرا من أشكال digital data لا تصبح مفيدة حتى يمكن الوصول إليها من موضع تخزينها. لذلك يؤدي Data connector غالبا مسؤوليتين مرتبطتين. أولا، يمتد إلى storage ليسترجع المعلومات أو يستقبلها أو يصل إليها بطريقة أخرى، حتى تدخل هذه المعلومات في الـ active flow كـ Digital Data. ثانيا، يعالج Digital Data الناتجة إلى structure مفسرة.

موصل بيانات MySQL مثال جيد. من منظور الـ Model، يمكن التعامل مع قاعدة MySQL كـ Data Storage، بينما تصبح نتيجة الاستعلام هي Digital Data النشطة التي يجري العمل عليها. قد ينشئ connector الاتصال، ويرسل query، ويستقبل النتيجة، ثم ينظم تلك النتيجة إلى معلومات structured يستطيع باقي الـ Stack فهمها. قد تظهر database connection و query behavior و result processing داخل connector نفسه، لأن Data connector مسؤول عن الوصول إلى storage وحمل المعلومات المسترجعة نحو data منظمة وذات معنى.

هذا لا يجعل Data Storage طبقة صريحة في الـ Stack، ولا يجعل Data connector مسؤولا عن أن يكون هو قاعدة البيانات أو file system أو service أو آلية التخزين نفسها. بل يعترف الـ Model بأن أول connector يحتاج غالبا إلى الامتداد نحو storage كي يجلب digital data إلى active flow الخاص بالنظام.

### الوصول ليس فهما

يوجد Data connector جزئيا لأن الوصول والفهم ليسا الشيء نفسه. يمكن للحاسوب أن يفتح ملفا، أو يستقبل response، أو يحتفظ بـ bytes في الذاكرة، أو يتصل بقاعدة بيانات. هذا يثبت فقط أن المعلومات متاحة. ولا يثبت أن المعلومات قد فُهمت.

مثلا، قد يكون ملف إعدادات متاحا كنص. قد يعرف النظام أين يوجد الملف، ويقرأ محتواه بنجاح، ويحتفظ بذلك المحتوى في الذاكرة. ومع ذلك، لم يحدد الـ Stack بعد أي الأجزاء keys، وأي الأجزاء values، وأي sections صالحة، وأي rules تعرف الصيغة.

يوفر Data connector الحركة من “المعلومات متاحة كـ digital data” إلى “يمكن الآن تفسير المعلومات وفق structure و semantics”. يحافظ هذا التمييز على نظافة Layer 7. لا تحتاج Digital Data إلى معرفة طريقة تفسير كل format ممكن. تحتاج فقط إلى تمثيل المعلومات النشطة القابلة للقراءة بالحاسوب. ثم يؤدي Data connector عملية التسليم إلى Layer 6، حيث يمكن أن يحدث التفسير وفق القواعد المناسبة.

### إنتاج Structure

في الـ top-down flow، يستقبل Data connector الـ Digital Data ويجهزها من أجل Structure & Semantics. قد يتضمن ذلك قراءة bytes، أو decode للنص، أو تحديد format، أو اختيار semantic rules، أو validation للتوقعات الأساسية، أو تحويل التمثيل إلى structure منظمة. يعتمد العمل الدقيق على نوع المعلومات التي يجري التعامل معها، لكن المسؤولية تبقى نفسها: وصل التمثيل النشط بشكل مفسر.

قد يبدأ ملف إعدادات JSON كنص encoded. يقرأ Data connector النص، ويتعرف على format المتوقع، وينتج معلومات structured تمثل الإعدادات. قد يتحول ملف CSV إلى rows و fields. وقد تتحول نتيجة قاعدة بيانات إلى records. وقد يتحول ملف binary إلى headers و sections و values. وقد تتحول server response إلى message structured.

النقطة المهمة هي الحركة. قد يبدأ Data connector بالوصول إلى storage، لكن انتقاله الصريح في الـ Stack لا يكتمل إلا عندما تصبح Digital Data المسترجعة أو المستقبلة معلومات يمكن فهمها عبر Structure & Semantics.

### حفظ المعنى

يجب على Data connector أن يحفظ المعنى أثناء انتقال المعلومات بين الطبقات. هذا لا يعني أن كل detail في التمثيل الأصلي يجب أن يبقى بلا تغيير. بل يعني أن connector يجب أن يحفظ العلاقة المقصودة بين digital data و structure المفسرة التي ينتجها.

على سبيل المثال، إذا احتوى ملف على title، فيجب أن تمثل structure الناتجة ذلك title بطريقة وفية للمعلومات الأصلية. وإذا احتوى database record على identifier، فيجب أن يبقى ذلك identifier متصلا بالـ record الذي يصفه. وإذا كانت صيغة ما تعرف order أو grouping أو required values، فيجب أن يحترم connector تلك التوقعات عند إنتاج النتيجة structured.

### العودة إلى Digital Data

لأن الـ Stack قابل للعكس، يشارك Data connector أيضا في الـ bottom-up flow. عندما تغير interaction معلومات في الواجهة، قد يحتاج هذا التغيير في النهاية إلى العودة إلى Digital Data. قبل أن يمكن حفظه أو نقله أو إعادة استخدامه، يجب تحويل المعلومات structured مرة أخرى إلى شكل قابل للقراءة بالحاسوب.

في هذا الاتجاه، يؤدي Data connector التحويل المعاكس. يستقبل معلومات structured من Layer 6 وينتج Digital Data مناسبة للتخزين أو النقل أو المقارنة أو المعالجة اللاحقة.

قد تصبح structure إعدادات نص JSON encoded. وقد تصبح table من القيم CSV. وقد يصبح record تحديثا في قاعدة بيانات. وقد تصبح document structure هي bytes الخاصة بملف.

هذه الحركة العكسية مهمة بقدر أهمية الحركة top-down. إذا كان Data connector يستطيع قراءة المعلومات إلى structure لكنه لا يستطيع كتابة structure مرة أخرى في شكل رقمي، فقد تتمكن الواجهة من عرض المعلومات أو استخدامها، لكنها لا تستطيع حفظ نتيجة interaction بالكامل. لذلك يساعد connector في إكمال الدورة بين نية المستخدم والتغيير المستمر.

### Validation والفشل

يعد Data connector أيضا واحدا من أوائل الأماكن التي يمكن فيها التعرف إلى الفشل بشكل ذي معنى. قد تكون Digital Data مفقودة أو malformed أو incomplete أو unsupported أو outdated أو غير متسقة مع semantic rules المتوقعة من Layer 6.

عندما يحدث ذلك، يجب أن يجعل connector نتيجة ذلك التحويل واضحة. قد يتعافى connector من missing optional values، أو يطبق defaults، أو يتجاهل unsupported extensions، أو ينتج partial structure عندما يكون ذلك مناسبا. لكن لا ينبغي لباقي الـ Stack أن يضطر إلى تخمين ما إذا كانت البيانات قد فُسرت بشكل صحيح.

بتحديد الفشل عند هذه boundary، يحافظ الـ Model على صدق التفسير. يحمي Data connector باقي الـ Stack من البناء فوق معلومات لم تُفهم بنجاح أصلا.

### لماذا يهم هذا Connector

يمنع Data connector الـ Stack من افتراض أن digital data تصبح ذات معنى تلقائيا بمجرد توفرها. من دون هذا connector، سيطمس الـ Model الحد بين representation و interpretation. سيضطر Layer 7 إلى فهم formats مباشرة، أو سيضطر Layer 6 إلى استرجاع raw data بنفسه. بتعريف Data connector، يعطي الـ Model هذا الانتقال مكانا مناسبا.

تبقى Digital Data مسؤولة عن active computer-readable representation. وتبقى Structure & Semantics مسؤولة عن interpreted meaning و organized form. ويتولى Data connector الحركة بينهما.

هذا يجعل أول transformation في الـ Stack صريحا. تبدأ المعلومات كتمثيل رقمي نشط، وتعبر عبر Data connector، وتصبح شيئا يستطيع النظام فهمه. من هناك يستطيع باقي الـ Stack متابعة العملية: تحويل المعلومات المفسرة إلى interface objects قابلة للاستخدام، وتنظيم تلك objects في context، وتجهيزها من أجل output، وتسليمها عبر النظام، والسماح للمستخدم بأن يستجيب.
