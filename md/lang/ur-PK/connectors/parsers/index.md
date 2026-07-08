<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 6.2 Connectors :: Parser

## In-Depth Discussion

### From Meaning to Use

**Parser** connector **Layer 6: Structure & Semantics** اور **Layer 5: Components, Controls, & Layouts** کے درمیان بیٹھتا ہے۔ یہ interpreted structures کو usable interface parts میں بدلتا ہے۔ Layer 6 data کا meaning explain کرتا ہے؛ Parser connector اس meaning کو components، controls، and layouts میں express کرتا ہے جن کے ساتھ interface actually work کر سکے۔

Parser connector “what the data means” سے “what the interface should create” تک movement ہے۔ اگر structure کہتا ہے کہ page میں heading، paragraph، اور button ہیں، parser ان interpreted pieces کو usable interface objects میں بدلتا ہے۔ اگر audio structure tracks define کرتی ہے، parser playback components اور controls create کر سکتا ہے۔

### Parsing Is Not Just Reading

Parsing صرف data read کرنا نہیں ہے۔ reading Data connector کے قریب ہے۔ Parser already interpreted structure کے ساتھ کام کرتا ہے اور determine کرتا ہے کہ اس structure سے کون سے interface parts بننے چاہئیں۔ یہ stable understanding کو mutable usable objects میں translate کرتا ہے۔

یہ distinction important ہے۔ Structure & Semantics document کے rules اور parsed structure know کر سکتے ہیں، مگر user اس parsed structure کے ساتھ directly interact نہیں کرتا۔ user controls، components، layouts، commands، and behaviors کے ساتھ interact کرتا ہے۔ Parser connector ان دونوں worlds کو connect کرتا ہے۔

### Creating Components

top-down flow میں Parser structures سے components create کرتا ہے۔ document section label component بن سکتا ہے۔ image definition image component بن سکتی ہے۔ audio record audio component بن سکتا ہے۔ setting value toggle یا input component بن سکتا ہے۔

Parser کو decide کرنا ہوتا ہے کہ interpreted data کو کس usable form میں represent کرنا ہے۔ same structure different interfaces میں different components بن سکتی ہے۔ document preview میں text label بن سکتا ہے، editor میں text input، print flow میں layout object۔ Parser connector context کے مطابق meaning کو usable shape دیتا ہے۔

### Creating Controls and Layouts

Parser controls اور layouts بھی create کر سکتا ہے۔ semantics اگر action، field، command، یا user-editable value define کرتی ہے تو Parser اسے control میں translate کر سکتا ہے۔ اگر structure grouping، order، nesting، یا arrangement define کرتی ہے، Parser اسے layout میں translate کر سکتا ہے۔

یہ وہ point ہے جہاں interpreted data interactive possibility حاصل کرتا ہے۔ parser کے بغیر system جان سکتا ہے کہ button ہونا چاہیے، مگر button control نہیں ہوگا۔ system جان سکتا ہے کہ fields grouped ہیں، مگر layout نہیں ہوگا جو انہیں organize کرے۔

### Returning Modified Data

Stack reversible ہے، اس لیے Parser connector modified components کو structured data میں واپس translate کرنے میں بھی help کرتا ہے۔ user control change کرتا ہے، component state update ہوتی ہے، یا layout-related value modify ہوتی ہے؛ Parser connector ان changes کو Layer 6 کے structured form میں express کرنے میں مدد دے سکتا ہے۔

مثلاً settings control کی value change ہو تو Parser اسے settings structure میں واپس map کر سکتا ہے۔ document editor text component کی changes کو document structure میں return کر سکتا ہے۔ یہ reverse path ensure کرتا ہے کہ interface changes persistent data تک پہنچ سکیں۔

### Why the Connector Matters

Parser connector Stack کو understood data اور usable interface objects کے درمیان boundary دیتا ہے۔ اس کے بغیر Structure & Semantics کو components create کرنے پڑتے یا Components layer کو raw structure understand کرنا پڑتا۔ دونوں separation کو weak کر دیتے۔

مختصر یہ کہ Parser connector interpreted information کو usable interface parts میں بدلتا ہے، اور changed parts کو structured meaning میں واپس لے جا سکتا ہے۔ یہی transition data کو صرف understood سے actually usable بناتا ہے۔
