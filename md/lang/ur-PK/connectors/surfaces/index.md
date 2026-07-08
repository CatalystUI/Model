<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 6.5 Connectors :: Surface

## In-Depth Discussion

### From Renderer to Window

**Surface** connector **Layer 3: Renderers** اور **Layer 2: Windows** کے درمیان بیٹھتا ہے۔ یہ rendered work کو window کے اندر destination دیتا ہے۔ Renderer output-ready information produce کرتا ہے، مگر اسے deliver کرنے کے لیے place چاہیے۔ Window view یا context provide کرتی ہے۔ Surface connector وہ connection ہے جہاں renderer کا result window سے ملتا ہے۔

Visual systems میں surface framebuffer، swapchain، drawing target، canvas، or platform surface ہو سکتی ہے۔ audio systems میں surface output stream، device endpoint، or channel context ہو سکتی ہے۔ tactile systems میں surface haptic device target یا feedback channel ہو سکتی ہے۔ form domain کے مطابق بدل سکتی ہے، مگر role same رہتا ہے: renderer کو deliverable target دینا۔

### Output Needs a Target

Renderer اگر output prepare کرے مگر target نہ ہو، user کچھ receive نہیں کرے گا۔ OpenGL scene draw کرنا جانتا ہے، مگر اسے window surface چاہیے جہاں draw result appear ہو۔ audio renderer samples produce کر سکتا ہے، مگر انہیں output device یا stream چاہیے۔ haptic renderer pattern produce کر سکتا ہے، مگر اسے motor/channel چاہیے۔

Surface connector اسی gap کو fill کرتا ہے۔ یہ renderer کو window-provided context کے ساتھ bind کرتا ہے تاکہ prepared output actual delivery path میں enter ہو سکے۔

### Surface Is Not the Window

Surface connector کو window itself کے ساتھ confuse نہیں کرنا چاہیے۔ Window Layer 2 ہے: bounded view، context، یا delivery place۔ Surface connector connection ہے جو renderer کو that window میں output deliver کرنے دیتا ہے۔

یہ distinction useful ہے کیونکہ same window different surfaces expose کر سکتی ہے، یا same renderer different surface implementations target کر سکتا ہے۔ graphical window OpenGL surface، Vulkan surface، software canvas، یا Metal layer provide کر سکتی ہے۔ audio context multiple output endpoints expose کر سکتا ہے۔ Surface connector implementation detail کو proper transition میں place کرتا ہے۔

### Interaction Return Path

Stack reversible ہے، اس لیے Surface connector interaction information کو window سے renderer کی طرف upward carry کر سکتا ہے۔ window system سے input receive کرتی ہے؛ Surface connector اسے renderer کے context میں pass کر سکتا ہے، جہاں اسے coordinate systems، timing، domain-specific mapping، یا raw event handling کے مطابق process کیا جا سکتا ہے۔

Surface connector کو interaction کا final meaning decide نہیں کرنا۔ اس کا job window-originating information کو renderer-facing path میں carry کرنا ہے تاکہ higher layers اسے route اور handle کر سکیں۔

### Why the Connector Matters

Surface connector rendering کو destination دیتا ہے۔ اس کے بغیر renderer output produce کر سکتا ہے مگر window تک reliably پہنچا نہیں سکتا۔ window exist کر سکتی ہے مگر renderer سے connected نہیں ہوگی۔ Surface connector Layer 3 اور Layer 2 کے درمیان proper boundary define کرتا ہے۔

مختصر یہ کہ Surface connector وہ place ہے جہاں rendered work window میں delivered ہونے کے قابل بنتا ہے، اور جہاں window-originating interactions renderer کی طرف واپس flow کر سکتے ہیں۔
