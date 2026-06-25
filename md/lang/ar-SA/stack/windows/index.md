# 5.7 The Stack :: Windows

## نقاش معمّق

### طبقة التسليم المحدود

**Windows** هي الطبقة التي يحصل فيها output المصيّر على سياق تسليم محدود. يحول Layer 3 حالة الواجهة المعدّة إلى شكل جاهز لـ output، لكن ذلك output ما يزال يحتاج إلى مكان أو channel أو view محدد يمكن لـ system أن يسلّمه من خلاله. يوفر Layer 2 هذا الحد.

ينبغي فهم window كسياق تسليم منطقي، لا كمربع مرئي على شاشة فقط. في بيئة رسومية، تظهر window عادة كمنطقة مرئية يديرها نظام تشغيل. لكن المفهوم في النموذج أوسع: window هي السياق system-facing الذي يمكن عبره توفير output واستقبال interaction. إنها تحدد أين ينتمي الناتج المصيّر داخل system المحيط.

### منظر داخل النظام

تعمل window كمنظر داخل system. إنها لا تنشئ system ولا تستبدل renderer. بل توفر السياق المحدود الذي يمكن فيه وصل output ‏renderer بالتسليم على مستوى system. قد يشمل هذا الحد الموضع أو الحجم أو التركيز أو الرؤية أو سياق الجهاز أو output channel أو شكلًا آخر من النطاق الذي يحدده system.

هذا مهم لأن output المصيّر لا يوجد للمستخدم في عزلة. يجب تسليمه في مكان ما. قد ينتج renderer ‏visual commands أو audio samples أو haptic instructions أو output آخر خاص بالـ domain، لكن هذه النتائج ما تزال بحاجة إلى الارتباط بسياق يتعرف إليه system. توفر window ذلك الارتباط.

في الواجهات المرئية، يسهل التعرف إلى ذلك لأن window قد تقابل منطقة مستطيلة على شاشة. في domains أخرى، قد تؤدي الدور المفهومي نفسه جلسة سطر أوامر، أو audio output context، أو device channel، أو virtual viewport، أو واجهة أخرى محدودة وموجهة إلى system. السمة المحددة ليست المظهر المرئي. السمة المحددة هي أن window توفر حد التسليم بين output المصيّر وsystem.

### العلاقة مع Renderers

تتلقى Windows ‏output من Renderers، لكنها لا تنفذ rendering بنفسها. Rendering هو تحويل حالة الواجهة المعدّة إلى شكل جاهز لـ output. أما windowing فهو إعطاء ذلك output سياقًا نظاميًا محدودًا يمكن تسليمه من خلاله.

يحافظ هذا التمييز على Layer 2 من امتصاص مسؤوليات Layer 3. ينبغي أن يقرر renderer كيف تصبح حالة الواجهة المنظمة جاهزة لـ output. وينبغي أن توفر window المكان أو channel الموجّه إلى system الذي يمكن إرسال ذلك output إليه. يحوّل renderer؛ وتحتوي window وتستقبل وتعيد التمرير.

يسمح ذلك أيضًا لـ renderers مختلفة باستهداف أنواع window مختلفة. قد يستهدف visual renderer ‏graphical window، بينما قد يستهدف auditory renderer ‏audio output context. يمكن أن تختلف طريقة التنفيذ المحددة بحسب system وdomain، لكن المسؤولية الطبقية تبقى متسقة.

### العلاقة مع System

تعتمد Windows على **Layer 1: Systems** لأنها غالبًا تُنشأ أو تُدار أو تُقيّد أو يُتعرف إليها عبر المنصة المحيطة. قد يحدد system كيف تُنشأ windows، وكيف تستقبل input، وكيف تكشف output channels، وما الموارد التي تستطيع الوصول إليها، وكيف تتفاعل مع hardware أو lower-level services.

هذا لا يجعل window مطابقة لـ system. System هو operating environment الأوسع الذي يوفر hardware access وdevice services وscheduling وpermissions وdrivers وplatform behavior. أما window فهي سياق منطقي محدود داخل تلك البيئة. إنها السياق interface-facing الذي يسمح لـ output المصيّر وinteraction بالمرور بين Stack وsystem.

بفصل Windows عن System، يتجنب النموذج التعامل مع كل تفصيل في المنصة كجزء من حد الواجهة. تمثل window السياق system-facing المحدد الذي تستخدمه الواجهة. ويمثل system البيئة الأكبر التي تجعل ذلك السياق ممكنًا.

### تسليم output

في التدفق من الأعلى إلى الأسفل، تتلقى window تمثيلًا جاهزًا لـ output من renderer وتمرره نحو system. هذه هي المرحلة التي لم يعد فيها output المصيّر مجرد شيء أعدته الواجهة؛ بل أُسند إلى سياق تسليم يستطيع system استخدامه.

قد تدير window الحدود أو التركيز أو buffering أو الرؤية أو حالة channel أو شروط تسليم أخرى بحسب domain والتنفيذ. تؤثر هذه التفاصيل في كيفية انتقال output إلى system، لكنها لا تغيّر الدور الرئيسي للطبقة. توفر window الحد الذي يمكن عبره أن يصبح output المصيّر system output.

بعد أن يمر output عبر window، يستطيع system حمله نحو الجهاز أو الخدمة أو العملية الفيزيائية ذات الصلة التي تسمح للمستخدم بإدراكه. لذلك تكون window قريبة من القابلية للإدراك، لكنها ليست الإدراك نفسه. إنها تبقى جزءًا من التدفق في جانب الحاسوب.

### دخول التفاعل

في التدفق من الأسفل إلى الأعلى، تكون window أول طبقة صريحة في Stack يصبح فيها interaction المقدم من system متاحًا للواجهة المُمثلة في النموذج. قد يكتشف system ضغطة مفتاح أو حركة مؤشر أو touch event أو إشارة جهاز أو أمرًا صوتيًا أو شكلًا آخر من input. تتلقى window ذلك interaction داخل سياقها المحدود وتعيد تمريره صعودًا للمزيد من التوجيه والمعالجة.

هذا يجعل window محورية للتفاعل لأنها توفر سياقًا للفعل. Interaction ليس مجرد أن شيئًا ما حدث، بل أنه حدث داخل حد system-facing معين. قد يحدد التركيز أو الموضع أو التوقيت أو مصدر الجهاز أو channel أو السياق النشط كيف ينبغي لبقية Stack أن تفهم interaction وتوجهه.

لا تقرر window عادة المعنى النهائي لـ interaction. تنتمي تلك المسؤولية إلى مستوى أعلى في Stack، خصوصًا بعد أن يصل interaction إلى control المناسب. دور window هو استلام interaction من system وربطه بالحد الصحيح وتمريره صعودًا في شكل تستطيع بقية Stack مواصلة معالجته.

### الاستقلال عن domain

Windows مستقلة عن domain بالطريقة نفسها التي يكون فيها بقية Stack مستقلًا عن domain. ترتبط كلمة “window” غالبًا بالرسوم، لكنها في CatalystUI تشير إلى أي سياق system-facing محدود لـ output وinteraction. يحدد domain نوع output وinput الذي تحمله window؛ ويحدد موضع Stack الدور الذي تؤديه window.

يسمح ذلك للطبقة نفسها بوصف graphical windows أو text sessions أو audio channels أو tactile output contexts أو أشكال أخرى من interface delivery من دون تغيير النموذج. قد تكون لكل تنفيذ متطلبات system مختلفة، لكن كلًا منها يؤدي المسؤولية المفهومية نفسها: توفير الحد الذي يمر عبره output المصيّر وsystem interaction.

### لماذا تهمّ الطبقة

تمنع Windows ‏Stack من التعامل مع output المصيّر كأنه يصل إلى المستخدم تلقائيًا. يستطيع renderer تحويل حالة الواجهة إلى شكل جاهز لـ output، لكن ذلك output ما يزال يحتاج إلى سياق system-facing. يوفر Layer 2 ذلك السياق.

بفصل Windows عن كل من Renderers وSystem، يحافظ النموذج على مسار تسليم نظيف. تحول Renderers حالة الواجهة المعدّة إلى output-ready representation. وتوفر Windows السياق المحدود الذي يدخل عبره ذلك التمثيل إلى system. ثم ينفذ System العمل الأدنى مستوى المطلوب لتسليم output واستقبال input. يسمح هذا التمييز لـ CatalystUI بوصف interface delivery عبر platforms وdomains من دون اختزال windows إلى مستطيلات مرئية أو إجبار renderers على إدارة platform-level behavior.
