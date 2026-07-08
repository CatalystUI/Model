<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 4.2 Domains :: Visual

## In-Depth Discussion

جہاں **symbolic** domain data کو specific sense سے committed ہونے سے پہلے describe کرتا ہے، وہاں **visual** domain data کو تب describe کرتا ہے جب اسے sight کے لیے shaped کیا جا چکا ہو۔ Visual data وہ information ہے جو دیکھی جانے کے لیے meant ہو: image، rendered text، یا visible control۔ اہم فرق یہ نہیں کہ data “eventually” screen پر آ سکتا ہے، بلکہ یہ ہے کہ interaction میں اس کا present role vision کے ذریعے communicate کرنا ہے۔

اس کا مطلب ہے کہ visual data کو اس stored form سے confuse نہیں کرنا چاہیے جو اس کے پیچھے ہے۔ image data رکھنے والی file symbolic ہی رہتی ہے جب تک وہ stored information کے طور پر موجود ہے۔ text کا paragraph بھی symbolic ہے جب تک وہ characters، markup، یا abstract representation کے طور پر موجود ہے۔ یہ visual تب بنتا ہے جب system اسے ایسی form میں present کرتا ہے جسے user دیکھ اور interpret کر سکے۔ change یہ نہیں کہ data زیادہ important ہو گیا؛ change یہ ہے کہ communication کا method representation سے perception میں منتقل ہو گیا۔

Visual data بہت common ہے کیونکہ sight ایک ساتھ بہت سے relationships communicate کر سکتی ہے۔ size، color، spacing، direction، grouping، اور motion سب user کو سمجھنے میں مدد دیتے ہیں کہ کوئی چیز کیا ہے، کہاں belongs کرتی ہے، اور کیا اس پر act کیا جا سکتا ہے۔ اسی لیے visual interfaces اکثر immediate محسوس ہوتے ہیں۔ user window، webpage، یا game scene پر ایک glance ڈال کر ہر word پڑھنے سے پہلے meaning gather کر سکتا ہے۔ system صرف data دکھا نہیں رہا؛ وہ data کو visible experience میں arrange کر رہا ہے۔

### Visual Data کو سمجھنا

Visual data سمجھنے کا ایک useful طریقہ **placement**، **appearance**، اور **state** پر غور کرنا ہے۔ یہ CatalystUI Model میں formal sub-domains یا required categories نہیں ہیں، مگر یہ practical way دیتے ہیں کہ visual information meaning کیسے communicate کرتی ہے۔

**Placement** describe کرتا ہے کہ visual data کہاں appear ہوتا ہے اور اپنے اردگرد information سے کیسے relate کرتا ہے۔ paragraph کے اوپر رکھا heading ownership communicate کرتا ہے۔ form کے پاس رکھا button association communicate کرتا ہے۔ content کے اوپر رکھا menu temporary priority communicate کرتا ہے۔ placement matter کرتی ہے کیونکہ user visible objects کو isolation میں perceive نہیں کرتا؛ وہ visible objects کے درمیان relationships perceive کرتا ہے۔

**Appearance** describe کرتا ہے کہ visual data user کے سامنے خود کو کیسے present کرتا ہے۔ shape، color، typography، contrast، اور imagery سب influence کرتے ہیں کہ user سمجھتا کیا ہے۔ text styling کے حساب سے title، warning، یا link لگ سکتا ہے۔ rectangle اپنے border، spacing، اور context کے حساب سے button، panel، یا decoration لگ سکتا ہے۔ appearance visual data کو recognizable form دیتی ہے۔

**State** current condition کو visually communicate کرتا ہے۔ control active، disabled، selected، focused، loading، یا hidden appear ہو سکتا ہے۔ یہ states important ہیں کیونکہ user کو صرف یہ نہیں جاننا کہ کیا موجود ہے؛ اسے یہ بھی جاننا ہے کہ ابھی کیا ممکن ہے۔ Visual state system کی present condition کو perceivable بناتی ہے۔

### Visual Meaning

Visual output meaning کو arrangement اور form کے ذریعے express کرتا ہے۔ ایک icon command represent کر سکتا ہے۔ ایک underline link suggest کر سکتی ہے۔ ایک red border invalid value signal کر سکتا ہے۔ یہ meaning صرف pixels میں نہیں ہوتی؛ یہ اس relation میں ہوتی ہے جو user visible form اور expected behavior کے درمیان سمجھتا ہے۔

اس وجہ سے visual design میں consistency اہم ہے۔ اگر ایک ہی visual form مختلف جگہوں پر radically different meanings رکھتی ہے تو user کو system پر trust کرنا مشکل ہو جاتا ہے۔ اگر different forms same action represent کرتی ہیں تو user کو guess کرنا پڑتا ہے۔ visual domain ہمیں یاد دلاتا ہے کہ sight صرف decoration نہیں؛ یہ communication کا channel ہے۔

Visual meaning context سے بھی depend کرتا ہے۔ ایک color cultural، accessibility، یا environmental reasons کی وجہ سے ہر user کے لیے same message نہیں رکھتا۔ small text high-resolution display پر readable ہو سکتا ہے مگر low vision user کے لیے inaccessible۔ motion attention guide کر سکتی ہے، مگر کچھ users کے لیے distraction یا discomfort بھی بن سکتی ہے۔ Visual data کو user کی perception capacity کے ساتھ design کرنا ہوتا ہے، صرف designer کی preference کے ساتھ نہیں۔

### Visual Data and Accessibility

Visual domain accessibility کے لیے central ہے کیونکہ بہت سے modern interfaces vision پر بہت زیادہ depend کرتے ہیں۔ Clear headings، readable contrast، scalable text، meaningful layout، and recognizable state indicators user کو interface سمجھنے میں مدد دیتے ہیں۔ well-structured visual information confusion کم کرتی ہے اور user کو زیادہ confidence دیتی ہے۔

لیکن visual information inaccessible بھی ہو سکتی ہے جب meaning صرف appearance میں locked ہو۔ صرف color سے error show کرنا color-blind user کے لیے fail ہو سکتا ہے۔ image میں trapped text screen reader کے لیے unavailable ہو سکتا ہے۔ animation کے ذریعے communicated change ان users کے لیے miss ہو سکتا ہے جو motion reduce کرتے ہیں۔

یہاں domains developer کو پوچھنے دیتے ہیں کہ meaning کہاں carried ہے۔ اگر important meaning only visually carried ہے، کیا اسے symbolic، auditory، tactile، یا کسی اور form میں بھی available ہونا چاہیے؟ مقصد visual design کو weak کرنا نہیں بلکہ meaning کو preserve کرنا ہے تاکہ زیادہ users اسے receive کر سکیں۔

### Broader Experiences میں Visual Data

Visual data اکثر دوسرے domains کے ساتھ کام کرتا ہے۔ video میں visual motion auditory speech یا music کے ساتھ combine ہو سکتی ہے۔ game میں visual scene sound اور haptic feedback کے ساتھ مل کر event communicate کر سکتا ہے۔ application میں visual state, audible alert, اور keyboard focus ایک ہی interaction کو support کر سکتے ہیں۔

جب visual data دوسرے sensory forms کے ساتھ coordinated ہو، وہ multisensory experience کا حصہ بن سکتا ہے۔ لیکن visual portion پھر بھی اپنی responsibility رکھتا ہے: وہ sight کے ذریعے information communicate کرتا ہے۔ CatalystUI اس responsibility کو واضح کرتا ہے تاکہ visual design کو صرف “screen stuff” نہ سمجھا جائے بلکہ information flow کا ایک meaningful domain سمجھا جائے۔

مختصر یہ کہ visual domain information کو sight-based output کے طور پر describe کرتا ہے۔ یہ explain کرتا ہے کہ systems placement، appearance، اور state کے ذریعے meaning کیسے communicate کرتے ہیں۔ جب visual data اچھی طرح handle کیا جائے، user دیکھ سکتا ہے کہ system کیا present کر رہا ہے، کیا بدل رہا ہے، اور وہ کیسے respond کر سکتا ہے۔
