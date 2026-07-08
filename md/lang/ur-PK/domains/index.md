<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 4. Domains

## Per-Topic Summary

CatalystUI Model کو describe کرنے کے لیے ہمیں پہلے domains سے شروع کرنا ہوگا۔ _domain_ اس data کی category بیان کرتا ہے جسے interaction کے دوران handle کیا جا رہا ہوتا ہے۔ یہ information کے flow کو توڑ کر سمجھنے کا پہلا قدم ہے۔ یہ identify کرتا ہے کہ system کس _kind_ کی information کے ساتھ کام کر رہا ہے۔ storefront door sensor motion detect کرنے کے لیے visual یا spatial cues استعمال کر سکتا ہے۔ game controller tactile information استعمال کر کے haptic feedback produce کر سکتا ہے۔ smart speaker speech process کرتے وقت auditory information کے ساتھ کام کر سکتا ہے۔ تقریباً ہر case میں domains اس بات سے align ہوتے ہیں کہ لوگ دنیا کو کیسے sense کرتے ہیں۔ Model اس data کو بھی account کرتا ہے جو کسی specific sense تک پہنچنے سے پہلے موجود ہوتا ہے، اور اس data کو بھی جو بیک وقت multiple senses میں پھیلا ہوتا ہے۔ اسی لیے سات domains define کیے گئے ہیں: “symbolic,” “visual,” “auditory,” “tactile,” “olfactory,” “gustatory,” اور “multisensory.”

Domains useful ہیں کیونکہ وہ information کے flow کو recognize، diagnose، اور user کی needs کے مطابق shape کرنا آسان بناتے ہیں۔ جب ہم identify کرتے ہیں کہ information کس domain سے تعلق رکھتی ہے، تو ہم زیادہ واضح طور پر دیکھ سکتے ہیں کہ system کیا کر رہا ہے، کیا نہیں کر رہا، اور user experience کے کون سے parts missing ہو سکتے ہیں۔ accessibility کے لیے یہ خاص طور پر important ہے: اگر interface صرف visually communicate کرتا ہے، تو Model ہمیں recognize کرنے میں مدد دیتا ہے کہ tactile، auditory، یا communication کی دوسری forms پر بھی غور کرنا پڑ سکتا ہے۔ چونکہ domains describe کرتے ہیں کہ information user experience میں کیسے participate کرتی ہے، data کو domain میں classify کرنے کا آغاز پہلے اس سوال سے ہونا چاہیے کہ interaction میں اس کا role کیا ہے۔ اگر data دیکھنے کے لیے ہے تو وہ visual ہے؛ اگر سننے کے لیے ہے تو auditory ہے؛ اگر محسوس کرنے کے لیے ہے تو tactile ہے۔ اگر data ابھی کسی specific sense سے committed نہیں، جیسے text file کے case میں، تو وہ symbolic ہے۔ اگر multiple sensory categories ایک experience کے طور پر مل کر کام کرتی ہیں، جیسے video game میں visuals، sound، اور controller vibration کا combination، تو وہ multisensory ہے۔

### Model میں Domains کا کردار

جب data کو کسی domain میں classify کر دیا جاتا ہے، interaction کا starting point زیادہ clear ہو جاتا ہے۔ ہمیں معلوم ہو جاتا ہے کہ system کس information کو handle کرتا ہے، user کو کیا experience ہوگا، اور کیا communication کی دوسری forms پر غور کرنے کی ضرورت ہے۔ جب یہ category established ہو جاتی ہے، تو Model data کی type identify کرنے سے آگے بڑھ کر یہ describe کر سکتا ہے کہ وہ interface کے اندر کیسے حرکت کرتی ہے۔
