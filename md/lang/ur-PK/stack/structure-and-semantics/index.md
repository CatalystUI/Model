<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.3 The Stack :: Structure & Semantics

## In-Depth Discussion

### Interpreting Digital Data

**Structure & Semantics** Stack کا Layer 6 ہے۔ یہ layer describe کرتا ہے کہ Digital Data کو کیسے understood ہونا چاہیے۔ Digital Data active computer-readable information فراہم کرتا ہے، مگر Layer 6 اس information کو meaning اور organized form دیتا ہے۔

اس layer کے دو closely related parts ہیں: **semantics** اور **structure**۔ Semantics rules define کرتے ہیں: data کا مطلب کیا ہے، format کی expectations کیا ہیں، order کیا ہے، کون سے parts valid ہیں، اور ہر part کو کیسے read کرنا چاہیے۔ Structure ان rules کے apply ہونے کے بعد حاصل ہونے والی organized form ہے۔

### Semantics

Semantics data کے interpretation contract کو represent کرتے ہیں۔ وہ system کو بتاتے ہیں کہ data کو کس expectation کے تحت read کرنا ہے۔ HTML semantic rules browser کو بتاتے ہیں کہ tags، attributes، nesting، اور document meaning کیسے understand کرنا ہے۔ CSV rules fields، rows، separators، اور escaping define کر سکتے ہیں۔ audio format rules headers، frames، metadata، اور samples کو describe کر سکتے ہیں۔

Semantics implementation نہیں بلکہ understanding کے rules ہیں۔ وہ explain کرتے ہیں کہ data کا shape کیا ہونا چاہیے اور system کو اس meaning تک کیسے پہنچنا چاہیے۔ Semantics کے بغیر data موجود ہو سکتا ہے، مگر dependable interpretation نہیں ہوتی۔

### Structure

Structure وہ organized result ہے جو semantics کو actual Digital Data پر apply کرنے کے بعد ملتا ہے۔ اگر semantics map ہے تو structure اس map کے مطابق بنا ہوا read result ہے۔ HTML parse ہو کر document structure بن سکتا ہے۔ JSON parse ہو کر objects اور values بن سکتا ہے۔ database response records اور fields میں organize ہو سکتا ہے۔

Structure کو immutable snapshot سمجھنا useful ہے۔ یہ active data کی interpreted state represent کرتا ہے۔ یہ user-facing component نہیں ہے، اور یہ necessarily mutable interface object بھی نہیں۔ یہ data کو understandable form میں رکھتا ہے تاکہ later layers usable parts بنا سکیں۔

### Meaning Before Use

Layer 6 use سے پہلے meaning provide کرتا ہے۔ Component بنانے سے پہلے system کو جاننا ہوتا ہے کہ data کیا represent کرتا ہے۔ button create کرنے سے پہلے page description کو understand کرنا ہوتا ہے۔ audio component بنانے سے پہلے audio data کو structured form میں read کرنا ہوتا ہے۔ settings control بنانے سے پہلے settings file کے keys اور values identify کرنے ہوتے ہیں۔

یہ separation important ہے کیونکہ interpretation اور interaction ایک ہی چیز نہیں۔ data سمجھ آ جائے تو بھی user کے لیے usable object نہیں بنا۔ Layer 6 meaning establish کرتا ہے؛ Layer 5 that meaning کو components، controls، اور layouts میں بدلتا ہے۔

### Validation and Stability

Structure & Semantics validation کے لیے natural place ہے۔ اگر data expected rules follow نہیں کرتا، missing fields رکھتا ہے، invalid values رکھتا ہے، یا malformed ہے، تو یہ layer error identify کر سکتا ہے۔ system اس point پر decide کر سکتا ہے کہ defaults apply کرنے ہیں، partial structure produce کرنا ہے، warning دینا ہے، یا data reject کرنا ہے۔

Stability بھی important ہے۔ Layer 6 کا result later layers کے لیے dependable ہونا چاہیے۔ اگر interpreted structure constantly unpredictable ہو تو components reliable behavior نہیں بنا سکتے۔ اسی لیے semantics clear ہونے چاہئیں اور structure faithful ہونا چاہیے۔

### Returning Changes

reverse flow میں Layer 6 updated components یا controls سے آنے والی meaningful changes کو دوبارہ structured data میں express کرنے میں مدد دیتا ہے۔ user settings change کر سکتا ہے؛ control interaction handle کرتا ہے؛ پھر change structured settings representation میں واپس جا سکتا ہے؛ پھر Digital Data میں serialize ہو کر storage میں جا سکتا ہے۔

Layer 6 therefore user intent اور digital representation کے درمیان meaning کو preserve کرتا ہے۔ یہ ensure کرتا ہے کہ change صرف visual یا interactive state نہ رہے بلکہ data کی understood form میں translate ہو سکے۔

### Why the Layer Matters

Structure & Semantics Stack کو raw computer-readable data اور usable interface parts کے درمیان clear boundary دیتا ہے۔ یہ Model کو یہ کہنے دیتا ہے: “data موجود ہے” اور “data understood ہے” دو different states ہیں۔

مختصر یہ کہ Layer 6 Digital Data کو meaning دیتا ہے۔ Semantics rules provide کرتے ہیں؛ Structure ان rules کے تحت organized result provide کرتی ہے۔ یہی وہ foundation ہے جس پر components، controls، layouts، graphs، rendering، اور user experience build ہوتے ہیں۔
