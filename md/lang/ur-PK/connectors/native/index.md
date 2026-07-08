<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 6.6 Connectors :: Native

## In-Depth Discussion

### From Windows to Systems

**Native** connector **Layer 2: Windows** اور **Layer 1: Systems** کے درمیان بیٹھتا ہے۔ یہ window کو underlying system سے connect کرتا ہے تاکہ output actual environment کے through deliver ہو سکے اور interactions receive ہو سکیں۔

Layer 2 Stack کو window دیتا ہے: bounded view، container، یا delivery point۔ Layer 1 Stack کو system دیتا ہے: operating environment، hardware access، services، devices، اور native behavior جو window کو possible بناتے ہیں۔ Native connector ان layers کے درمیان crossing point provide کرتا ہے۔

یہ connector اکثر وہ جگہ ہے جہاں Stack practical computing reality کو directly touch کرتا ہے۔ اس point تک Model information کو structured data، components، graphs، renderers، and surfaces کے through describe کرتا رہا ہے۔ مگر window imagination سے exist نہیں ہوتی۔ کسی چیز کو system سے request کرنا ہوتا ہے کہ اسے create، configure، maintain، update کرے، اور interactions واپس report کرے۔ وہ چیز Native connector ہے۔

### Defining Bindings

**binding** ایک controlled connection ہے جو ایک layer کو دوسری layer کی provided functionality سے connect کرتا ہے۔ Native connector کے context میں bindings system-level behavior کو window کے لیے ایسی form میں expose کرتے ہیں جسے program use کر سکے، بغیر اس کے کہ window خود system بن جائے۔

یہ definition intentionally simple ہے۔ binding mysterious ہونے کی ضرورت نہیں۔ یہ اوپر کے code اور نیچے کی functionality کے درمیان accessible relationship ہے۔

native binding window create کرنے، title change کرنے، keyboard input receive کرنے، pointer movement respond کرنے، active area resize کرنے، focus request کرنے، device access کرنے، یا system service سے communicate کرنے کی ability expose کر سکتی ہے۔ details system اور implementation کے حساب سے vary کریں گی، مگر concept same ہے: binding native functionality کے لیے usable connection provide کرتی ہے۔

### Providing Native Access

many implementations میں Native connector mostly lower-level system functionality کے bindings provide کرے گا۔ یہ ordinary لگ سکتا ہے کیونکہ developers native APIs، platform libraries، operating system calls، device interfaces، وغیرہ سے familiar ہیں۔ مگر Stack کے اندر یہ random implementation details نہیں۔ یہی means ہیں جن کے ذریعے Layer 2 کو Layer 1 تک access ملتا ہے۔

desktop operating system پر graphical window platform windowing API bindings require کر سکتی ہے۔ command-line interface terminal input/output bindings require کر سکتی ہے۔ specialized device buttons، sensors، speakers، lights، یا other system-controlled devices کے bindings require کر سکتا ہے۔ ہر case میں Native connector وہ relationship provide کرتا ہے جو window کو system کے اندر act کرنے دیتا ہے۔

### More Than a Wrapper

چونکہ یہ connector native behavior expose کرتا ہے، اسے system APIs کے wrapper کے طور پر describe کرنا tempting ہو سکتا ہے۔ practical contexts میں یہ description useful ہو سکتی ہے، مگر Model کے اندر connector جو کر رہا ہے اسے fully explain نہیں کرتی۔

wrapper describe کرتا ہے کہ people often اس kind of layer کو implement کیسے کرتے ہیں۔ binding describe کرتا ہے کہ connector actually provide کیا کر رہا ہے۔ Native connector صرف platform calls کا pile نہیں ہے جو window کے نیچے رکھا گیا ہو۔ یہ window اور system کے درمیان formal relationship ہے۔ یہ define کرتا ہے کہ window اپنی system-backed existence کیسے receive کرتی ہے، system behavior Stack کے لیے available کیسے بنتا ہے، اور system-originating interactions upward کیسے move کرنا start کرتے ہیں۔

### Creating and Maintaining the Window

top-down flow میں Native connector window کو system کے ذریعے operate کرنے دیتا ہے۔ window create، show، hide، resize، move، focus، update، یا close ہو سکتی ہے۔ ان actions کے لیے system سے relationship چاہیے کیونکہ system ہی وہ layer ہے جو environment provide کرتا ہے جہاں یہ actions occur کر سکتے ہیں۔

Native connector those actions perform کرنے کے لیے bindings expose کر سکتا ہے۔ اس کے ذریعے Layer 2 system behavior request کر سکتا ہے بغیر system management کی entire responsibility absorb کیے۔ window bounded delivery point رہتی ہے۔ system underlying functionality provide کرنے والا environment رہتا ہے۔ Native connector ان کے درمیان relationship carry کرتا ہے۔

### Receiving Interactions

Stack reversible ہے، اس لیے Native connector first explicit connector ہے جب interaction system سے enter کرتا ہے۔ key press، pointer movement، touch input، controller action، device signal، resize event، focus change، یا other system-originating event کو Layer 1 سے Layer 2 میں cross کرنا ہوتا ہے۔ Native connector یہ crossing provide کرتا ہے۔

اکثر Native connector کو decide نہیں کرنا کہ interaction کا meaning کیا ہے۔ اس کا role system کی interaction source کو window کے interaction path سے bind کرنا ہے۔ system report کرتا ہے کہ something happened۔ Native connector اس report کو Layer 2 کے لیے usable بناتا ہے۔ باقی Stack then route، transform، and handle کرتا ہے۔

### Why the Connector Matters

Native connector Stack کو lower system reality سے connect کرتا ہے without making the whole Model system-specific۔ اس کے بغیر windows abstract idea رہتیں، مگر system میں exist، receive، یا deliver نہیں کر پاتیں۔

مختصر یہ کہ Native connector bindings provide کرتا ہے۔ یہ window کو system سے bind کرتا ہے، output delivery اور interaction input کے lowest explicit crossing کو possible بناتا ہے، اور platform differences کو proper boundary میں contain کرتا ہے۔
