<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.6 The Stack :: Renderers

## In-Depth Discussion

### Preparing Output

**Renderers** Stack کا Layer 3 ہے۔ یہ layer organized interface data کو ایسی form میں transform کرتا ہے جو output کے لیے ready ہو۔ Layer 4 graphs اور frames context prepare کرتے ہیں؛ Renderer اس prepared information کو domain-specific output work میں تبدیل کرتا ہے۔

Renderer کو صرف graphical renderer سمجھنا بہت narrow ہے۔ visual interface میں renderer draw commands، textures، glyphs، shapes، یا pixels prepare کر سکتا ہے۔ auditory interface میں renderer sound buffers، waveform، mix، یا stream produce کر سکتا ہے۔ tactile system میں renderer haptic patterns prepare کر سکتا ہے۔ domain کچھ بھی ہو، renderer information کو perceivable output کی طرف لے جانے والا transformation process ہے۔

### Rendering Is Translation

Rendering کا مطلب information کو ایسی form میں translate کرنا ہے جسے lower system deliver کر سکے۔ Renderer user-facing meaning کو directly create نہیں کرتا؛ وہ prepared interface data کو device/system-ready output میں بدلتا ہے۔ visual renderer rectangle کو GPU commands میں بدل سکتا ہے۔ audio renderer component graph کو samples میں بدل سکتا ہے۔ haptic renderer event کو vibration pattern میں بدل سکتا ہے۔

یہ translation renderer-specific ہو سکتی ہے۔ OpenGL، Vulkan، Metal، Direct3D، OpenAL، CoreAudio، یا custom renderer سب different requirements رکھ سکتے ہیں۔ Model renderer کو ایسی layer دیتا ہے جہاں یہ differences exist کر سکیں بغیر اس کے کہ Graphs & Frames یا Components کو ہر platform detail جاننی پڑے۔

### Interactions Through Renderers

reverse flow میں interactions بھی renderer سے گزر سکتے ہیں۔ اکثر renderer input کو little modification کے ساتھ pass کر سکتا ہے، مگر کبھی اسے reinterpret کرنا پڑتا ہے۔ visual renderer pointer position کو scene coordinates میں map کر سکتا ہے۔ audio renderer input timing کو track context سے relate کر سکتا ہے۔ sensor renderer raw motion کو meaningful event میں convert کر سکتا ہے۔

Renderer کا interaction role usually limited ہونا چاہیے۔ یہ decide نہیں کرتا کہ button click کا business meaning کیا ہے؛ یہ interaction کو ایسی form میں help کر سکتا ہے کہ Layer 4 اسے route کر سکے۔

### Domain-Specific Output

Renderer وہ layer ہے جہاں domain-specific output constraints زیادہ واضح ہوتے ہیں۔ visual output resolution، DPI، clipping، z-order، typography، color، and refresh timing پر depend کر سکتا ہے۔ auditory output sample rate، latency، channels، mixing، and timing پر depend کر سکتا ہے۔ tactile output intensity، duration، pattern، and device capabilities پر depend کر سکتا ہے۔

Model renderer کو اس complexity کے لیے proper place دیتا ہے۔ interface کے higher layers purpose اور organization express کرتے ہیں؛ renderer انہیں output mechanism کے requirements کے مطابق prepare کرتا ہے۔

### Why the Layer Matters

Renderers Stack کو organized context اور deliverable output کے درمیان clear transition دیتے ہیں۔ ان کے بغیر graphs کو hardware-specific language بولنی پڑتی، یا windows کو interface structure understand کرنا پڑتا۔ Renderer responsibility separate کر دیتا ہے: prepared information کو output-ready form میں transform کرنا۔

مختصر یہ کہ Layer 3 rendering process ہے۔ یہ interface کو perceivable delivery کے قریب لے جاتا ہے، چاہے وہ screen، speaker، haptic motor، یا کسی دوسرے output path کے لیے ہو۔
