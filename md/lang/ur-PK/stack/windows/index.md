<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.7 The Stack :: Windows

## In-Depth Discussion

### A View Into the System

**Windows** Stack کا Layer 2 ہے۔ یہ layer system میں ایک bounded view، delivery context، یا interaction context provide کرتا ہے۔ Traditional GUI میں window screen پر application area ہوتی ہے، مگر CatalystUI میں “window” broader ہے۔ یہ کوئی بھی context ہو سکتا ہے جس کے ذریعے output user تک پہنچتا ہے یا input system تک واپس آتا ہے۔

Window graphical application window، command-line terminal، audio endpoint، camera capture context، device panel، embedded display area، sensor zone، یا specialized interface boundary ہو سکتی ہے۔ key idea یہ ہے کہ window system کے اندر وہ place provide کرتی ہے جہاں renderer کا output deliver ہو سکے اور system-originating interactions active interface path میں enter کر سکیں۔

### Not Only Graphics

“Window” کو صرف visual rectangle سمجھنا Model کو unnecessarily محدود کر دے گا۔ کچھ systems screen use نہیں کرتے۔ کچھ interfaces primarily audio ہیں۔ کچھ physical environment میں operate کرتے ہیں۔ کچھ embedded devices lights، buttons، speakers، یا sensors کے ذریعے communicate کرتے ہیں۔ پھر بھی انہیں delivery and interaction context چاہیے۔

CatalystUI window کو “view” کے broader idea کے طور پر define کرتا ہے۔ یہ view visual ہو سکتا ہے، auditory ہو سکتا ہے، tactile ہو سکتا ہے، multisensory ہو سکتا ہے، یا کسی specialized domain میں exist کر سکتا ہے۔

### Receiving Rendered Output

top-down flow میں Window renderer سے prepared output receive کرتی ہے اور اسے system کے ذریعے deliverable context میں place کرتی ہے۔ visual renderer image یا draw result produce کر سکتا ہے؛ window اسے displayable area کے اندر receive کرتی ہے۔ audio renderer stream produce کر سکتا ہے؛ audio window اسے output channel یا device context میں receive کر سکتی ہے۔

Window output کو user تک خود finally deliver نہیں کرتی؛ system layer lower environment provide کرتی ہے۔ مگر window renderer اور system کے درمیان contextual boundary ہے۔ یہ output کے لیے target ہے۔

### Receiving Interaction

bottom-up flow میں Window system سے incoming interaction information receive کرتی ہے۔ key press، mouse movement، touch event، resize event، audio capture، sensor trigger، یا focus change system سے window context میں آ سکتا ہے۔ پھر یہ interaction upward renderer، graphs/frames، اور components تک travel کر سکتا ہے۔

Window interaction کو context دیتی ہے۔ system may know a pointer moved; window tells which bounded context received it. system may detect key input; window helps determine which interface context is active. یہ distinction routing کے لیے important ہے۔

### Why the Layer Matters

Windows renderer output اور system behavior کے درمیان bridge-like context provide کرتی ہیں، مگر وہ connector نہیں بلکہ layer ہیں۔ وہ active view یا delivery boundary represent کرتی ہیں۔ ان کے بغیر renderer کے پاس output put کرنے کی place نہیں، اور system input کو interface context میں locate کرنے کا clear path نہیں۔

مختصر یہ کہ Layer 2 window ہے: system میں وہ view/context جہاں output اور input pass ہوتے ہیں۔ یہ graphical rectangle ہو سکتی ہے، مگر اس سے بہت زیادہ broad بھی ہو سکتی ہے۔
