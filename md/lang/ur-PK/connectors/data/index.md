<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 6.1 Connectors :: Data

## In-Depth Discussion

### The First Translation

**Data** connector Stack کا پہلا explicit connector ہے۔ یہ **Layer 7: Digital Data** اور **Layer 6: Structure & Semantics** کے درمیان بیٹھتا ہے، جہاں active computer-readable information پہلی بار interpreted form receive کرنا شروع کرتی ہے۔ Layer 7 بتاتا ہے کہ information digital data کے طور پر exists ہے۔ Layer 6 بتاتا ہے کہ information structured کیسے ہے اور اس کا meaning کیا ہے۔ Data connector explain کرتا ہے کہ system ایک condition سے دوسری condition تک کیسے move کرتا ہے۔

یہ connector ضروری ہے کیونکہ digital data خود کو interpret نہیں کرتا۔ file، stream، buffer، database result، response، یا message organized information contain کر سکتے ہیں، مگر organization interpretation نہیں ہے۔ کسی چیز کو data access کرنا، appropriate expectations کے مطابق read کرنا، اور ایسی form produce کرنا ہوتی ہے جسے Structure & Semantics understand کر سکے۔ وہ “something” Data connector ہے۔

### Data Storage کے ساتھ کام کرنا

اگرچہ Data connector Digital Data اور Structure & Semantics کے درمیان ہے، اس کا implied **Data Storage** layer کے ساتھ close relationship ہوتا ہے۔ many forms of digital data useful تب ہوتے ہیں جب انہیں storage سے access کیا جائے۔ اس لیے Data connector often دو related responsibilities ادا کرتا ہے: پہلے storage سے information retrieve/receive/access کرنا تاکہ information active flow میں Digital Data کے طور پر enter ہو، پھر resulting Digital Data کو interpreted structure میں process کرنا۔

MySQL data connector مثال ہے۔ Model کے perspective سے MySQL database Data Storage ہو سکتا ہے، جبکہ query result active Digital Data بنتا ہے۔ connector connection establish کر سکتا ہے، query send کر سکتا ہے، result receive کر سکتا ہے، اور اسے structured information میں organize کر سکتا ہے جسے باقی Stack understand کرے۔

### Access Understanding نہیں

Data connector partly اس لیے exists کرتا ہے کیونکہ access اور understanding same نہیں۔ computer file open کر سکتا ہے، response receive کر سکتا ہے، bytes memory میں hold کر سکتا ہے، یا database connect کر سکتا ہے۔ اس سے صرف information available ثابت ہوتی ہے، understood نہیں۔

مثال کے طور پر settings file text کے طور پر available ہو سکتی ہے۔ system file read کر کے contents memory میں hold کر سکتا ہے۔ پھر بھی Stack نے determine نہیں کیا کہ کون سے parts keys ہیں، کون سے values، کون سے sections valid ہیں، یا format کے rules کیا ہیں۔ Data connector “information digital data کے طور پر available ہے” سے “information structure and semantics کے مطابق interpreted ہو سکتی ہے” تک movement provide کرتا ہے۔

### Producing Structure

top-down flow میں Data connector Digital Data receive کرتا ہے اور اسے Structure & Semantics کے لیے prepare کرتا ہے۔ یہ bytes read کرنا، text decode کرنا، format identify کرنا، semantic rules select کرنا، basic expectations validate کرنا، یا representation کو organized structure میں transform کرنا involve کر سکتا ہے۔ exact work handled information پر depend کرتا ہے، مگر responsibility same رہتی ہے: active representation کو interpreted form سے connect کرنا۔

JSON settings file encoded text کے طور پر begin ہو سکتی ہے۔ Data connector text read کرتا ہے، expected format recognize کرتا ہے، اور settings represent کرنے والی structured information produce کرتا ہے۔ CSV rows and fields بن سکتا ہے۔ database result records بن سکتا ہے۔ binary file headers، sections، and values بن سکتی ہے۔ server response structured message بن سکتا ہے۔

### Preserving Meaning

Data connector کو layers کے درمیان information move کرتے وقت meaning preserve کرنا چاہیے۔ اس کا مطلب یہ نہیں کہ original representation کی ہر detail unchanged رہے۔ مطلب یہ ہے کہ connector digital data اور produced interpreted structure کے intended relationship کو preserve کرے۔

اگر file title contain کرتی ہے، resulting structure کو title faithfully represent کرنا چاہیے۔ اگر database record identifier contain کرتا ہے، identifier کو اس record سے connected رہنا چاہیے جسے وہ describe کرتا ہے۔ اگر format order، grouping، یا required values define کرتا ہے، connector کو structured result produce کرتے وقت ان expectations کا respect کرنا چاہیے۔

### Returning to Digital Data

Stack reversible ہے، اس لیے Data connector bottom-up flow میں بھی participate کرتا ہے۔ جب interaction interface میں information change کرتا ہے، وہ change eventually Digital Data میں واپس آنا چاہ سکتی ہے۔ preserve، transmit، یا reuse کرنے سے پہلے structured information کو computer-readable form میں convert کرنا ہوتا ہے۔

اس direction میں Data connector opposite transformation perform کرتا ہے۔ یہ Layer 6 سے structured information receive کرتا ہے اور storage، transmission، comparison، یا further processing کے لیے suitable Digital Data produce کرتا ہے۔ settings structure encoded JSON text بن سکتی ہے۔ values table CSV بن سکتی ہے۔ record database update بن سکتا ہے۔ document structure file bytes بن سکتی ہے۔

### Validation and Failure

Data connector پہلی جگہوں میں سے ایک ہے جہاں failure meaningfully recognized ہو سکتی ہے۔ Digital Data missing، malformed، incomplete، unsupported، outdated، یا Layer 6 کے expected semantic rules سے inconsistent ہو سکتا ہے۔

جب ایسا ہو، connector کو transformation result clear بنانا چاہیے۔ connector missing optional values recover کر سکتا ہے، defaults apply کر سکتا ہے، unsupported extensions ignore کر سکتا ہے، یا appropriate ہونے پر partial structure produce کر سکتا ہے۔ مگر باقی Stack کو guess نہیں کرنا چاہیے کہ data correctly interpreted ہوا یا نہیں۔ اس boundary پر failure identify کر کے Model interpretation کو honest رکھتا ہے۔

### Why the Connector Matters

Data connector Stack کو یہ assume کرنے سے روکتا ہے کہ digital data available ہوتے ہی meaningful بن جاتا ہے۔ اس connector کے بغیر Model representation اور interpretation کے درمیان boundary blur کر دیتا۔ Layer 7 کو formats directly understand کرنے پڑتے، یا Layer 6 کو raw data خود retrieve کرنا پڑتا۔ Data connector اس transition کو proper place دیتا ہے۔

Digital Data active computer-readable representation کے لیے responsible رہتا ہے۔ Structure & Semantics interpreted meaning اور organized form کے لیے responsible رہتا ہے۔ Data connector ان کے درمیان movement handle کرتا ہے۔
