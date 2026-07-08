<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.4 The Stack :: Components, Controls, & Layouts

## In-Depth Discussion

### Usable Interface Parts

**Components, Controls, & Layouts** Stack کا Layer 5 ہے۔ یہ layer interpreted data کو ایسی logical, usable interface parts میں بدلتا ہے جن کے ساتھ program اور user interface کام کر سکیں۔ Structure & Semantics data کو meaningful بناتا ہے؛ Layer 5 اس meaning کو active interface objects میں express کرتا ہے۔

یہ layer mutable ہے۔ components change ہو سکتے ہیں، controls interaction کا جواب دے سکتے ہیں، layouts دوبارہ calculate ہو سکتے ہیں، state update ہو سکتی ہے، and user actions meaningful behavior trigger کر سکتے ہیں۔ یہی وہ جگہ ہے جہاں interface صرف understood data نہیں رہتا بلکہ usable system بننا شروع کرتا ہے۔

### Components

**Component** interface کا کوئی بھی usable logical part ہے۔ یہ visual object ہو سکتا ہے، audio track ہو سکتا ہے، image، label، document section، style object، sound effect، haptic cue، یا کوئی بھی represented thing جسے interface present، organize، یا modify کر سکتا ہے۔

Component کا purpose data کو programmer-friendly اور interface-friendly form دینا ہے۔ file structure میں value ہو سکتی ہے؛ component اس value کو size، title، color، playback state، text content، یا کسی higher-level property کے طور پر expose کر سکتا ہے۔ component data کو استعمال کے قریب لے آتا ہے۔

### Controls

**Control** ایسا component ہے جو interactions process کرتا ہے۔ button، slider، toggle، text input، media play control، physical switch، or command handler سب controls ہو سکتے ہیں اگر وہ user action کو receive کر کے behavior perform کریں۔

Control important ہے کیونکہ user intent کو system change میں convert کرنے کا major point یہی ہے۔ user clicks، taps، speaks، moves، presses، یا selects؛ control interaction کو handle کرتا ہے، state change کر سکتا ہے، command run کر سکتا ہے، یا data update شروع کر سکتا ہے۔

### Layouts

**Layout** ایسا component ہے جو دوسرے components یا controls کو arrange کرتا ہے۔ graphical interface میں layout rows، columns، grids، stacks، panels، یا responsive regions بنا سکتا ہے۔ audio system میں layout tracks یا sound groups organize کر سکتا ہے۔ haptic system feedback patterns arrange کر سکتا ہے۔

Layout خود necessarily control نہیں۔ اس کا role organization ہے: parts کو meaningful order اور relationship میں رکھنا۔ layout user کو structure perceive کرنے میں مدد دیتا ہے اور lower layers کو organized output prepare کرنے میں support دیتا ہے۔

### Mutable Meaning

Layer 5 interpreted data کو mutable interface meaning میں بدلتا ہے۔ Layer 6 کا structure stable snapshot کی طرح ہو سکتا ہے، مگر Layer 5 living interface ہے۔ component کا selected state بدل سکتا ہے۔ control disabled ہو سکتا ہے۔ layout available space کے مطابق reflow ہو سکتا ہے۔

یہ mutability interaction کے لیے ضروری ہے۔ user interface static description نہیں؛ یہ ongoing exchange ہے۔ Layer 5 وہ جگہ ہے جہاں data user actions کے جواب میں practical behavior لیتا ہے۔

### Interaction Handling

زیادہ تر direct interaction handling اس layer میں پہنچ کر meaningful بنتی ہے۔ lower layers input detect، route، convert، یا contextualize کر سکتی ہیں، مگر control decide کرتا ہے کہ action کا interface meaning کیا ہے۔ key press text input میں character بن سکتی ہے۔ click button command run کر سکتا ہے۔ slider drag value update کر سکتا ہے۔

یہ بھی possible ہے کہ interaction no-op ہو۔ ہر action meaningful change نہیں ہوتا۔ control decide کر سکتا ہے کہ action ignore کرنا ہے، state change کرنا ہے، command run کرنا ہے، یا digital data update path شروع کرنا ہے۔

### Why the Layer Matters

Layer 5 Stack کو user-facing logic کا clear place دیتا ہے۔ اس کے بغیر Structure & Semantics کو directly interaction handle کرنا پڑتا، یا Graphs & Frames کو components کے meaning کو guess کرنا پڑتا۔ Components، Controls، & Layouts interface کے usable pieces کو define کرتے ہیں: کیا موجود ہے، کیا respond کر سکتا ہے، اور parts کیسے arranged ہیں۔

مختصر یہ کہ Layer 5 interpreted information کو living interface parts میں بدلتا ہے۔ components represent کرتے ہیں، controls respond کرتے ہیں، layouts arrange کرتے ہیں۔ یہی وہ layer ہے جہاں meaning usable ہو جاتا ہے۔
