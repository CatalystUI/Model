<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.1 The Stack :: Data Storage

## In-Depth Discussion

### The Implied Upper Boundary

**Data Storage** Stack کا implied upper boundary ہے۔ یہ اس جگہ کو represent کرتا ہے جہاں persistent information active interface flow میں enter ہونے سے پہلے exist کر سکتی ہے، یا interaction کے بعد واپس جا سکتی ہے۔ یہ explicit numbered layer نہیں ہے، کیونکہ Model storage mechanism کو directly implement نہیں کرتا۔ پھر بھی flow اسے imply کرتا ہے: اگر data active interface میں آ رہا ہے، تو وہ کہیں سے آیا ہے؛ اگر changed data preserve ہونا ہے، تو اسے کہیں جانا ہے۔

Data Storage file system، database، remote service، memory store، stream source، configuration provider، cloud API، یا کوئی physical/logical storage mechanism ہو سکتا ہے۔ CatalystUI کا point یہ نہیں کہ ان میں سے کون سا “real” storage ہے؛ point یہ ہے کہ active interface flow سے باہر information retained رہ سکتی ہے۔

### Storage vs. Active Data

Data Storage اور Layer 7: Digital Data کے درمیان distinction important ہے۔ stored file disk پر exist کر سکتی ہے، مگر وہ Stack میں active Digital Data تب بنتی ہے جب system اسے current flow میں لاتا ہے۔ database table storage میں رہ سکتی ہے، مگر query result active data بن سکتا ہے۔ remote API retained data hold کر سکتی ہے، مگر response Stack میں enter ہو کر Digital Data بن سکتا ہے۔

یہ distinction Model کو clean رکھتا ہے۔ Data Storage persistent availability describe کرتا ہے۔ Digital Data active computer-readable representation describe کرتا ہے۔ دونوں related ہیں، مگر identical نہیں۔ storage material provide کر سکتا ہے؛ active flow اس material کو interpret، organize، render، اور user experience میں بدلتا ہے۔

### Returning Changes

Stack reversible ہے، اس لیے Data Storage output-facing flow کا source بھی ہو سکتا ہے اور interaction-facing flow کا destination بھی۔ جب user interaction data change کرتا ہے، وہ change Stack میں upward travel کر سکتا ہے، Structure & Semantics میں meaningful form حاصل کر سکتا ہے، Digital Data میں convert ہو سکتا ہے، اور پھر storage میں preserve ہو سکتا ہے۔

settings change save کرنا، document edit write کرنا، database record update کرنا، cached response store کرنا، یا game progress persist کرنا سب اس return path کی examples ہیں۔ user کی intent system کے ذریعے process ہو کر persistent change بن سکتی ہے۔

### Why the Layer Is Implied

Data Storage implied ہے کیونکہ CatalystUI Model storage systems کو UI Stack کے explicit transformation layers میں شامل نہیں کرتا۔ File systems، databases، services، اور caches اپنی پیچیدگی رکھتے ہیں۔ Model انہیں ignore نہیں کرتا، مگر انہیں numbered layer نہیں بناتا کیونکہ Stack کا focus active interface flow ہے۔

اس boundary کو implied رکھنے سے Model flexible رہتا ہے۔ same Stack local file، SQL database، REST API، cloud document، یا embedded configuration memory کے ساتھ کام کر سکتا ہے۔ storage mechanism بدل سکتا ہے جبکہ interface flow کا pattern برقرار رہتا ہے۔

### Why Data Storage Matters

Data Storage ہمیں یاد دلاتا ہے کہ interface عام طور پر vacuum میں appear نہیں ہوتا۔ وہ information کے ساتھ کام کرتا ہے جو کہیں retained ہوتی ہے، اور user actions اکثر ایسی changes پیدا کرتے ہیں جنہیں retain کرنا ضروری ہوتا ہے۔ اگر this boundary clear نہ ہو تو system active data، interpreted data، اور persistent data کو confuse کر سکتا ہے۔

مختصر یہ کہ Data Storage وہ implied place ہے جہاں information active interface flow سے باہر persistent رہتی ہے۔ یہ Stack کا numbered layer نہیں، مگر flow کا essential endpoint ہے۔
