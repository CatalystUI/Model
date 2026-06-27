# 6.6 Connectors :: Native

## نقاش تفصيلي

### من Windows إلى Systems

يقع موصل **Native** بين **Layer 2: Windows** و **Layer 1: Systems**. وهو مسؤول عن وصل window بالـ system الكامن حتى يمكن تسليم output واستقبال interactions عبر البيئة الفعلية التي يعمل فيها البرنامج.

يعطي Layer 2 الـ Stack نافذة: view أو container أو point of delivery محدود. ويعطي Layer 1 الـ Stack النظام: operating environment و hardware access و services و devices و native behavior التي تجعل window ممكنة. يوفر Native connector نقطة العبور بين هاتين الطبقتين.

هذا connector هو غالبا المكان الذي يلامس فيه الـ Stack الواقع العملي للحوسبة بشكل مباشر. حتى هذه النقطة، وصف الـ Model المعلومات وهي تتحرك عبر structured data و components و graphs و renderers و surfaces. لكن window لا توجد بالخيال وحده. يجب أن يطلب شيء ما من system إنشاءها، وتهيئتها، وصيانتها، وتحديثها، والإبلاغ عن interactions عبرها.

ذلك الشيء هو Native connector.

### تعريف Bindings

**binding** هو connection مضبوط بين طبقة ووظيفة توفرها طبقة أخرى. في سياق Native connector، تكشف bindings عن system-level behavior للـ window في شكل يستطيع البرنامج استخدامه من دون أن تصبح window هي system نفسها.

هذا التعريف بسيط عمدا. لا يحتاج binding إلى أن يكون غامضا. إنه العلاقة القابلة للوصول بين code في الأعلى و functionality في الأسفل.

قد يكشف native binding عن القدرة على إنشاء window، أو تغيير عنوانها، أو استقبال keyboard input، أو الاستجابة لـ pointer movement، أو تغيير حجم active area، أو طلب focus، أو access إلى device، أو التواصل مع system service. تختلف التفاصيل حسب system و implementation، لكن الفكرة تبقى نفسها: يوفر binding اتصالا usable مع native functionality.

لهذا تكون bindings مهمة جدا في هذه الطبقة. قد يوفر system قدرات قوية، لكن تلك القدرات لا تكون متاحة تلقائيا في اللغة أو structure التي يستخدمها باقي الـ Stack. يجب كشفها عبر شكل من أشكال connection. Native connector هو المكان الذي تجمع فيه هذه connections وتشكل وتستخدم.

### توفير Native Access

في كثير من implementations، سيقدم Native connector غالبا bindings إلى lower-level system functionality. قد يبدو هذا عاديا في البداية، خصوصا لأن developers معتادون على native APIs و platform libraries و operating system calls و device interfaces وأدوات مشابهة. لكن داخل الـ Stack، هذه ليست مجرد تفاصيل implementation عشوائية. إنها الوسائل التي يحصل بها Layer 2 على access إلى Layer 1.

قد تحتاج window رسومية على desktop operating system إلى bindings مع platform windowing API. وقد تحتاج command-line interface إلى bindings مع terminal input و output. وقد يحتاج device متخصص إلى bindings مع buttons أو sensors أو speakers أو lights أو devices أخرى يتحكم بها system. في كل حالة، يوفر Native connector العلاقة التي تسمح للـ window بأن تعمل داخل system.

الجزء المهم ليس أي platform تستخدم. الجزء المهم هو أن window لا تستطيع delivery للـ output أو استقبال interaction ما لم يكن لديها طريقة للتواصل مع system الذي يحتويها.

يوفر Native connector تلك الطريقة.

### أكثر من Wrapper

لأن هذا connector يكشف native behavior غالبا، قد يكون من المغري وصفه كـ wrapper حول system APIs. قد يكون هذا الوصف مفيدا في بعض السياقات العملية، لكنه لا يشرح بالكامل ما يفعله connector داخل الـ Model.

يصف wrapper كيف ينفذ الناس غالبا هذا النوع من الطبقات. أما binding فيصف ما يوفره connector فعلا.

Native connector ليس مجرد كومة من platform calls موضوعة تحت window. إنه العلاقة الرسمية بين window و system. يحدد كيف تحصل window على وجودها المدعوم بالنظام، وكيف يصبح system behavior متاحا للـ Stack، وكيف تبدأ system-originating interactions في التحرك إلى الأعلى.

هذا التمييز مهم لأن الـ Model لا يحاول الحفاظ على الطريقة التاريخية التي وصف بها developers هذه الأدوات. إنه يحاول وصف العملية الكامنة نفسها. في تلك العملية، لا يهم Native connector لأنه يصادف أنه يلف native API. بل يهم لأنه يربط Layer 2 بـ Layer 1.

هذا هو هذا connector فعلا.

### إنشاء Window وصيانتها

في top-down flow، يسمح Native connector للـ window بأن تعمل عبر system. قد تحتاج window إلى أن تنشأ، أو تظهر، أو تخفى، أو يتغير حجمها، أو تتحرك، أو تحصل على focus، أو تحدث، أو تغلق. تتطلب هذه actions علاقة مع system، لأن system هو الطبقة التي توفر فعلا البيئة التي يمكن أن تحدث فيها تلك actions.

قد يكشف Native connector عن bindings اللازمة لتنفيذ تلك actions. من خلاله، يستطيع Layer 2 طلب system behavior من دون امتصاص مسؤولية system management كلها. تبقى window هي point of delivery المحدود. ويبقى system هو البيئة التي توفر functionality الكامنة. ويحمل Native connector العلاقة بينهما.

هذا مهم خصوصا لأن systems تختلف. قد توفر operating systems و devices و runtimes و environments مختلفة APIs و behaviors مختلفة. يعطي Native connector الـ Stack مكانا لتمثيل هذه الاختلافات من دون إجبار باقي الـ Model على أن يصبح system-specific.

### استقبال Interactions

لأن الـ Stack قابل للعكس، يكون Native connector أيضا أول connector صريح يشارك عندما تدخل interaction من system.

يجب أن تعبر key press أو pointer movement أو touch input أو controller action أو device signal أو resize event أو focus change أو أي system-originating event آخر من Layer 1 إلى Layer 2 قبل أن يستطيع باقي الـ Stack فعل أي شيء بها. يوفر Native connector ذلك العبور. يستقبل أو يكشف معلومات interaction الخاصة بالـ system ويحملها إلى window، حيث يمكنها أن تواصل الصعود عبر Surface connector إلى Renderers، ثم عبر Bridge و Adapter و Parser و Data connectors عند الحاجة.

في حالات كثيرة لا يحتاج Native connector إلى تقرير معنى interaction. دوره هو ربط interaction source الخاصة بالـ system مع interaction path الخاصة بالـ window. يبلغ system أن شيئا ما حدث. يجعل Native connector ذلك التقرير usable لـ Layer 2. ثم يستطيع باقي الـ Stack routing و transform و handle interaction وفق مسؤولياته.

يحافظ هذا على نظافة lower boundary. يعطي Native connector interaction input طريقا إلى الـ Stack من دون مطالبة system بفهم الطبقات العليا، ومن دون مطالبة الطبقات العليا بالتصرف كأنها system.

### حفظ الـ Boundary

يجب على Native connector أن يحفظ boundary بين window و system. يجب أن يكشف system functionality التي تحتاج إليها window، لكنه لا يجب أن يمحو distinction بين الطبقتين.

هنا تكون bindings مفيدة جدا كفكرة. يسمح binding بالوصول من دون identity. تستطيع window استخدام system functionality من دون أن تصبح system. ويستطيع system توفير behavior من دون أن يصبح window. يعرف connector العلاقة بينهما.

هذه boundary هي ما يسمح لـ CatalystUI بوصف window بشكل consistent عبر environments مختلفة. قد يوفر system نافذة desktop تقليدية. وقد يوفر آخر terminal. وقد يوفر آخر device-specific output channel. وقد يوفر آخر remote أو virtualized environment. قد تختلف native bindings، لكن دور connector يبقى نفسه.

يربط Native connector Layer 2 بـ Layer 1 حتى تستطيع window أن توجد وتعمل وتستقبل interactions وتسلم output داخل system الذي يدعمها.

### لماذا يهم هذا Connector

يمنع Native connector الـ Stack من الخلط بين window و system الذي يوفرها. من دون هذا connector، ستحتاج Windows إلى احتواء system-specific behavior مباشرة، أو ستحتاج Systems إلى فهم المفهوم الأعلى للـ window. كلا الاتجاهين يطمس boundary بين point of delivery والبيئة التي تجعل delivery ممكنا.

بتعريف Native connector، يعطي الـ Model هذا الانتقال مكانا مناسبا.

تبقى Windows مسؤولة عن bounded context الذي يمر عبره output و interaction. وتبقى Systems مسؤولة عن البيئة الكامنة و services و devices و native behavior. ويتولى Native connector الـ binding بينهما.

هذا هو آخر connector صريح في الـ Stack. هنا تصل الواجهة modeled إلى system الموجود تحتها. قد يبدو كـ platform access. وقد ينفذ عبر native libraries أو operating system calls أو device APIs أو runtime services. لكن تحت هذه الأوصاف المألوفة، يكون غرضه أوضح وأبسط.

يوفر Native connector bindings.

إنه يربط window بالـ system، مما يسمح لـ output بأن يغادر الـ Stack و interaction بأن تدخل إليه. وبذلك يكمل المسار الصريح بين modeled interface والبيئة الحقيقية التي يجب أن تعيش فيها تلك الواجهة.
