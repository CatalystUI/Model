<!--
تم إنشاء هذه الترجمة بواسطة ChatGPT ويجب أن يراجعها مترجم بشري.
احذف هذين السطرين في طلب سحب بعد التحقق من صحة الترجمة.
-->

# 6.5 Connectors :: Surface

## نقاش تفصيلي

### من Rendering إلى Delivery

يقع موصل **Surface** بين **Layer 3: Renderers** و **Layer 2: Windows**. وهو مسؤول عن حمل rendered output من renderer إلى window، حيث يمكن وضع ذلك output داخل سياق bounded يوفره system.

Layer 3 هو المكان الذي تتحول فيه المعلومات إلى output-ready form. يأخذ renderer data المجهزة من graph و frame وينتج شيئا يمكن إدراكه في النهاية. لكن rendered output ما يزال يحتاج إلى destination. يحتاج إلى مكان يذهب إليه، وشيء يتصل به، و boundary يستطيع system تسليمه من خلالها.

تمثل طبقة Windows تلك destination.

يوفر Surface connector نقطة العبور بين renderer و window. يشرح كيف يلتحق rendered output بالمنطقة usable من window، وكيف يستقبل renderer معلومات كافية من window حتى يستمر في إنتاج output بشكل صحيح. من دون هذا connector يستطيع renderer إنتاج output، لكن الـ Stack لن يملك تفسيرا صريحا لكيف يتصل ذلك output بالـ window التي تعرضه.

ببساطة، renderer ينشئ output. و window توفر المكان الذي يمكن تسليم ذلك output فيه. يسمح Surface connector لهما بالعمل معا.

### المنطقة Rendered

يمكن فهم surface بوصفها المنطقة usable من window التي تستقبل rendered output. في تطبيق رسومي تقليدي، يسهل تصور ذلك: يرسم renderer داخل المنطقة الداخلية من window. لكن المبدأ نفسه يطبق على نطاق أوسع. surface ليست “الشاشة” فقط. إنها connector الذي يعطي rendered output مكانا داخل bounds الخاصة بالـ window.

هذا مهم لأن renderer لا يملك window عادة. قد يعرف renderer كيف ينتج output، لكن window هي الطبقة التي توفر active view إلى system. قد يكون للـ window size و position و state و scale و focus أو conditions أخرى يديرها system. يجعل Surface connector هذه conditions متاحة للـ renderer بالطريقة المطلوبة حتى يتم delivery للـ output بشكل صحيح.

قد يحتاج renderer إلى معرفة bounds الحالية للـ window. وقد يحتاج إلى معرفة متى تغيرت تلك bounds. وقد يحتاج إلى target يرسم فيه أو يكتب فيه أو stream إليه أو يحدثه بطريقة أخرى. قد تختلف هذه التفاصيل حسب implementation، لكن المسؤولية المفهومية تبقى نفسها: يربط Surface connector output الخاص بالـ renderer بالـ window context الذي سيحتويه.

هذا يمنع renderer من التظاهر بأنه يملك system boundary، ويمنع window من التظاهر بأنها تعرف كيف تقوم بـ rendering.

### أكثر من صورة نهائية

قد يكون من المغري التفكير في Surface connector كشيء يمرر نتيجة منتهية إلى window فقط. في بعض الحالات قد يكون هذا الوصف قريبا بما يكفي. يجهز renderer output، وتحمله surface إلى window، ويدرك المستخدم النتيجة في النهاية.

لكن rendering غالبا علاقة مستمرة لا delivery واحدة. قد يتغير حجم window. وقد تتغير حالتها النشطة. وقد يطلب system redraw. وقد يحتاج renderer إلى التحديث باستمرار، أو انتظار signal، أو مزامنة output مع condition الحالية للـ window. يوفر Surface connector المكان الذي يمكن فيه التعبير عن هذه العلاقة.

لهذا لا يكون Surface connector مجرد container لـ output منته. إنه connection بين فعل rendering والـ window التي تستقبل النتيجة. يسمح للـ renderer بالاستجابة لـ conditions الخاصة بالـ window من دون جعله مسؤولا عن أن يكون window.

يبقى output تابعا للـ renderer. وتبقى boundary تابعة للـ window. ويحمل Surface connector العلاقة بينهما.

### إعادة Interactions إلى الأعلى

لأن الـ Stack قابل للعكس، يشارك Surface connector أيضا في bottom-up flow. عندما تبدأ interaction في system وتدخل window، يجب أن تتحرك في النهاية إلى الأعلى نحو أجزاء الـ Stack التي تستطيع فهمها ومعالجتها.

يحمل Surface connector هذه interaction غالبا من window إلى renderer. في حالات كثيرة، لا يحتاج إلى فعل أكثر من حفظ information والسماح لها بالاستمرار إلى الأعلى. قد تدخل pointer movement أو key press أو focus change أو resize event أو interaction أخرى عبر window، ثم تعبر surface حتى يستطيع renderer والطبقات الأعلى الاستجابة عند الحاجة.

هذا لا يعني أن Surface connector مسؤول عن تحديد أي component يجب أن يعالج interaction. تلك المسؤولية موجودة أعلى في الـ Stack، خاصة بعد أن تصل interaction إلى graph و frame. يعطي Surface connector فقط interaction مسارا عبر boundary بين window و renderer.

في top-down flow، يحمل Surface connector rendered output إلى window. وفي bottom-up flow، يحمل window-originating interaction information عائدا نحو renderer والطبقات فوقه.

### إبقاء Window منفصلة

Surface connector مهم لأنه يمنع renderer و window من الانهيار في مسؤولية واحدة. من دون هذا connector، سيحتاج renderer إلى معرفة الكثير عن window، أو ستحتاج window إلى معرفة الكثير عن renderer. كلا الاتجاهين يضعف separation التي تجعل الـ Stack مفيدا.

توفر window boundary نشطة موجهة إلى system. إنها تمثل view أو container أو point of delivery. ينتج renderer output يمكن تسليمه عبر تلك boundary. يقع Surface connector بينهما حتى تبقى كل طبقة مركزة على غرضها.

تصبح هذه separation مفيدة خصوصا عندما يمكن استخدام renderer مع أكثر من نوع من window، أو عندما تستطيع window دعم أكثر من نوع من renderer. يعطي connector الـ Model مكانا لوصف العلاقة من دون hardwiring الطبقتين معا. يمكن إلحاق renderer بـ surface مناسبة. ويمكن أن تكشف window عن surface مناسبة. يشرح Surface connector كيف يحدث ذلك الإلحاق.

هذا ما يسمح لـ renderer و window بالتعاون من دون أن يصبحا غير قابلين للتمييز.

### حفظ Output

يجب على Surface connector أن يحفظ rendered output أثناء عبوره إلى window. هذا لا يعني أن output لا يتحول أو يتدرج أو يقتص أو يتزامن أو يجهز وفقا لمتطلبات window. بل يعني أن output يجب أن يبقى وفيا لما أنتجه renderer وأن يسلم بطريقة تطابق active window context.

إذا تغير حجم window، قد يساعد Surface connector في التواصل حول ذلك التغيير. وإذا أصبحت window غير نشطة أو مخفية أو minimized أو غير متاحة بطريقة أخرى، قد يساعد connector renderer على الاستجابة بشكل مناسب. وإذا احتاج renderer إلى target توفره window، فقد يحتفظ connector بذلك target أو يكشفه. هذه المسؤوليات ليست هي rendering، وليست هي أن يكون الشيء window. إنها مسؤوليات connection بينهما.

هذا هو الشكل الرئيسي لـ Surface connector: يحفظ output الخاص بالـ renderer بينما يكيفه مع delivery context الذي توفره window.

### لماذا يهم هذا Connector

يمنع Surface connector الـ Stack من الخلط بين rendered output و window التي تحتويه. من دون هذا connector، سيُجبر renderer على التصرف كأنه يملك window، أو ستُجبر window على التصرف كأنها تفهم rendering مباشرة.

بتعريف Surface connector، يعطي الـ Model هذا الانتقال مكانا مناسبا.

تبقى Renderers مسؤولة عن تحويل المعلومات المجهزة إلى output-ready form. وتبقى Windows مسؤولة عن توفير bounded system-facing context الذي يمكن أن يمر عبره output و interaction. ويتولى Surface connector الحركة بينهما.

هذه هي النقطة في الـ Stack حيث تحصل المعلومات rendered على destination. هنا يتوقف output عن كونه منتجا فقط، ويصبح ملحقا بالمكان الذي يمكن تسليمه فيه. ومن هناك تستطيع Windows حمل output إلى Systems، حيث يمكنه أخيرا أن يصبح شيئا يستطيع المستخدم إدراكه والاستجابة له.
