<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 1. اصطلاحات

## بنیادیں

شروع کرنے سے پہلے، چونکہ readers مختلف backgrounds سے آ سکتے ہیں، documentation میں استعمال ہونے والی common terms کو clarify کرنا ضروری ہے۔ یہ terms user-interface design کا تجربہ رکھنے والوں کے لیے familiar ہو سکتی ہیں، مگر ان میں سے کئی اپنے traditional meanings سے مختلف ہوں گی۔ انہیں دوبارہ introduce کیا جائے گا تاکہ استعمال ہونے والی language زیادہ precise، clear، اور unified ہو سکے۔

---

### Process

*process* ایسی چیز ہے جو *input* قبول کرتی ہے، *transformation* انجام دیتی ہے، اور *output* پیدا کرتی ہے۔

### System

*system* processes کا ایک organized set ہے، جسے اس بات سے define کیا جاتا ہے کہ وہ آپس میں کیسے interact کرتے ہیں اور کس order میں execute ہوتے ہیں۔

### Interface

*interface* وہ mechanism ہے جو دو مختلف systems کو interact کرنے کی اجازت دیتا ہے۔

### Information System

*information system* system کی ایک specialized form ہے جو “persistent data” کے ساتھ کام کرتی ہے، یعنی ایسا data جو ایک single process سے آگے بھی available رہتا ہے، اور user کو وقت کے ساتھ interface کے ذریعے اسے create، read، update، یا delete کرنے کی اجازت دیتی ہے۔

### Computer

*computer* ایک information system ہے جو exclusively "digital data" کے ساتھ کام کرتا ہے، یعنی ایسا data جو binary میں represent ہو سکتا ہے اور machine کے ذریعے process کیا جا سکتا ہے۔

### User

*user* وہ person ہے جو information system کے ساتھ interact کر سکتا ہے۔

---

مزید یہ کہ text اس بات کو recognize کرتا ہے کہ “data” اور “information” کی definitions الگ سمجھی جا سکتی ہیں۔ تاہم Model میں ان کے استعمال کی وجہ سے، ہم ان دونوں terms کو interchangeable سمجھیں گے۔
