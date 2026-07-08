<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.2 The Stack :: Digital Data

## In-Depth Discussion

### Active Computer-Readable Information

**Digital Data** Stack کا Layer 7 ہے۔ یہ information کو اس وقت describe کرتا ہے جب وہ active interface flow میں computer-readable form کے طور پر موجود ہو، مگر اسے ابھی Model کے باقی حصوں نے interpret، organize، یا present نہ کیا ہو۔ یہ file contents، bytes، text، stream، document، response، buffer، record set، یا کوئی representation ہو سکتی ہے جس کے ساتھ machine کام کر سکتی ہے۔

Digital Data کا مطلب یہ نہیں کہ information meaningless ہے۔ اس کا مطلب ہے کہ Stack نے ابھی اس meaning کو explicit structure، components، یا output میں تبدیل نہیں کیا۔ data موجود ہے، readable ہے، اور active flow میں داخل ہو چکا ہے؛ مگر system کو اب بھی سمجھنا ہے کہ اس data کو کیسے interpret کرنا ہے۔

### Not Yet a Domain

Digital Data ابھی کسی sensory domain سے necessarily committed نہیں ہوتا۔ text file screen پر visual بن سکتی ہے، speaker سے auditory بن سکتی ہے، braille display پر tactile بن سکتی ہے، یا parser کے ذریعے structured configuration بن سکتی ہے۔ اس point پر وہ صرف active representation ہے۔

یہ distinction important ہے کیونکہ stored یا active text کو automatically visual سمجھنا narrow assumption ہے۔ same digital data مختلف outputs میں تبدیل ہو سکتا ہے۔ CatalystUI اس flexibility کو preserve کرتا ہے: data پہلے digital form میں active ہوتا ہے، پھر interpretation اور later layers اسے domain-specific experience بنا سکتے ہیں۔

### Relationship to Storage

Digital Data اکثر implied Data Storage سے آتا ہے، مگر Data Storage نہیں ہے۔ file storage میں exist کر سکتی ہے؛ جب اسے read کر کے active representation بنایا جائے، وہ Digital Data ہے۔ network service data retain کر سکتی ہے؛ response receive ہونے پر Digital Data بن سکتا ہے۔ database store ہے؛ query result active Digital Data ہے۔

اسی طرح reverse flow میں Digital Data storage کے لیے تیار form بن سکتا ہے۔ user interaction سے updated structure واپس encoded text، bytes، database update، یا message میں تبدیل ہو سکتا ہے۔ Digital Data اس boundary پر کھڑا ہے جہاں active interface flow persistent world سے ملتا ہے۔

### Need for Interpretation

Digital Data خود interpret نہیں کرتا۔ bytes یہ نہیں بتاتے کہ وہ image ہیں، text ہیں، audio ہیں، settings ہیں، یا executable instructions ہیں جب تک system انہیں appropriate rules کے ذریعے read نہ کرے۔ یہی اگلے layer، Structure & Semantics، اور Data connector کی ضرورت explain کرتا ہے۔

مثال کے طور پر JSON file encoded text کے طور پر active ہو سکتی ہے، مگر system کو still parse کرنا ہے کہ کون سے characters braces ہیں، کون سے keys ہیں، values کیا ہیں، اور rules کیا allow کرتے ہیں۔ MP3 file binary data ہو سکتی ہے، مگر semantic rules کے بغیر system نہیں جانتا کہ frames، metadata، اور audio information کیسے read کرنی ہے۔

### Why the Layer Matters

Digital Data Stack کا upper explicit turning point ہے۔ top-down direction میں یہ وہ place ہے جہاں persistent یا received information active flow میں enter ہوتی ہے۔ bottom-up direction میں یہ وہ place ہے جہاں interpreted changes دوبارہ computer-readable form میں آتے ہیں، ready to store، send، compare، or process.

Layer 7 کو separate رکھنے سے Model representation اور interpretation کو confuse نہیں کرتا۔ data available ہو سکتا ہے، مگر understood نہیں۔ data computer-readable ہو سکتا ہے، مگر user-perceivable نہیں۔ Digital Data ان distinctions کو صاف رکھتا ہے۔

مختصر یہ کہ Digital Data active computer-readable information ہے۔ یہ storage سے آ سکتا ہے، storage کی طرف واپس جا سکتا ہے، اور eventually user experience بن سکتا ہے؛ مگر اس layer پر یہ ابھی interpretation کا منتظر ہے۔
