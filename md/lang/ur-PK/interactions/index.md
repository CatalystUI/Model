<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 7. Interactions

## Per-Topic Summary

اس point پر ہم CatalystUI Model کے ذریعے user interface کو پہلے سے کہیں زیادہ clarity کے ساتھ describe کر سکتے ہیں۔ ہم information کا flow identify کر سکتے ہیں، اس information کو domains میں classify کر سکتے ہیں، Stack کے through trace کر سکتے ہیں، اور explain کر سکتے ہیں کہ connectors اسے ایک layer سے next layer تک کیسے move اور transform کرتے ہیں۔ ایسا کرنے سے user interfaces کے پیچھے موجود بہت سا mystery dissolve ہونا شروع ہو جاتا ہے۔ ہم دیکھ سکتے ہیں information کہاں start ہوتی ہے، کہاں جاتی ہے، کیسے change ہوتی ہے، اور eventually user تک کیسے پہنچتی ہے۔

تو کیا ہم finish ہو گئے؟ مکمل نہیں۔ puzzle کا ایک essential part ابھی باقی ہے جسے ہم نے fully address نہیں کیا: _آپ!_

کسی بھی user interface کا most important part وہ person ہے جو اسے use کر رہا ہے۔ user کے بغیر interface اپنا purpose کھو دیتا ہے۔ اس point پر ہم صرف ایک machine کو دوسری machine سے communicate کرتے ہوئے describe کر رہے ہوتے، جیسے server API کو data send کر رہا ہو، یا ایک program دوسرے کو instructions pass کر رہا ہو۔ یہ exchanges useful ہو سکتے ہیں، مگر Model کا full subject نہیں۔ user interface اس لیے exist کرتا ہے کیونکہ ایک person کو کچھ perceive، understand، choose، یا respond کرنا ہوتا ہے۔ یہاں تک کہ اگر آپ کی cat keyboard پر چل کر Cat Gods کو summon کر دے اور زمین کو ان کے rightful throne پر واپس لے آئے، point same رہتا ہے: system کے باہر کچھ اس پر act کر چکا ہے، اور interface کو اب respond کرنا ہے۔

اسی لیے “Human Interface” matter کرتا ہے۔ ہم اسے Stack کے bottom پر implied endpoint کے طور پر already identify کر چکے ہیں، مگر اب ہمیں قریب سے دیکھنا ہے کہ وہاں کیا ہوتا ہے۔ Information user تک پہنچ کر simply stop نہیں ہوتی۔ user respond کر سکتا ہے۔ وہ click، speak، move، type، listen، ignore، hesitate، misunderstand، یا system کی expectation سے مختلف way میں act کر سکتا ہے۔ وہ response flow کا part بن جاتا ہے۔

اسی وجہ سے ہمیں ایک اور kind of data identify اور track کرنی ہے: _interaction_۔ interaction وہ exchange ہے جو اس وقت occur ہوتا ہے جب information user تک پہنچتی ہے، user respond کرتا ہے، اور system اس response کو continuing flow کے part کے طور پر receive کرتا ہے۔ یہ وہ point ہے جہاں Model صرف presentation کے بارے میں نہیں رہتا بلکہ participation کے بارے میں بن جاتا ہے۔ interface اب person کو صرف information show نہیں کر رہا؛ وہ person کو affect کرنے دیتا ہے کہ next کیا ہوگا۔

زیادہ directly، _interaction action کے پیچھے intent ہے_۔ click، tap، swipe، command، movement، یا spoken word صرف اس کا visible part ہے۔ اس action کے پیچھے کچھ ہے جو user _try_ کر رہا ہے۔ وہ menu open کرنا چاہتا ہے، forward move کرنا چاہتا ہے، form submit کرنا چاہتا ہے، song pause کرنا چاہتا ہے، warning dismiss کرنا چاہتا ہے، light on کرنا چاہتا ہے، یا simply figure out کرنا چاہتا ہے کہ ہو کیا رہا ہے۔ system شاید صرف signal receive کرے، مگر user صرف signal send نہیں کر رہا۔ user request کر رہا ہے۔

### Modern Frustrations With Technology

modern technology کی بہت سی frustrations یہیں سے شروع ہوتی ہیں۔ user ایک intent کے ساتھ act کرتا ہے، مگر system اس intent کو incorrectly interpret کرتا ہے، بہت slow respond کرتا ہے، یا altogether ignore کر دیتا ہے۔ ہم سب نے یہ محسوس کیا ہے: button جو clickable لگتا ہے مگر کچھ نہیں کرتا، page جو frozen لگتا ہے، device جس نے ہمیں سنا مگر understand نہیں کیا، یا interface جو technically work تو کرتا ہے مگر اس way میں respond نہیں کرتا جسے ہم perceive کر سکیں۔ ہر case میں user نے request کی، مگر system نے clearly answer نہیں کیا۔ جب ایسا ہوتا ہے تو frustration mystery نہیں رہتی۔ یہ misunderstood، delayed، یا unresolved interaction کا natural result ہے۔

یہی وجہ ہے کہ interactions special ہیں۔ many other data forms کے برعکس، یہ bi-directional اور transformative دونوں ہیں۔ یہ system سے user تک move کرتے ہیں، پھر user سے واپس system میں آتے ہیں۔ وہ move ہوتے ہوئے change ہوتے ہیں۔ output سے perception بن سکتی ہے، perception سے intent، intent سے action، اور action سے input۔ پھر system respond کر سکتا ہے، cycle دوبارہ شروع کرتے ہوئے۔ interaction stored file، rendered image، یا single sound سے different ہے۔ interaction صرف data کو کہیں carry کرنا نہیں؛ یہ choice کے ذریعے shaped data ہے۔

اس sense میں interactions deeply human چیز کی طرف point کرتے ہیں۔ ہم machines نہیں جو information passively receive کرتی ہیں۔ ہم notice کرتے ہیں، wonder کرتے ہیں، choose کرتے ہیں، hesitate کرتے ہیں، misunderstand کرتے ہیں، خود کو correct کرتے ہیں، دوبارہ try کرتے ہیں، اور کبھی کبھی same button سترہ بار press کرتے ہیں کیونکہ _یقیناً_ اس بار کام کرے گا۔ interaction اس لیے exist کرتا ہے کیونکہ person کے پاس agency ہے۔ یہ user کی choose کرنے کی ability، اور system کی اس choice کو receive کر کے respond کرنے کی ability سے define ہوتا ہے۔ choice کے بغیر true interaction نہیں، صرف output ہے۔

یقیناً machine بھی exchange کو shape کر سکتی ہے۔ many cases میں interaction system کے user کو کچھ present کرنے سے شروع ہوتا ہے: screen، sound، prompt، warning، vibration، doorway، یا other signal۔ system input refuse کر کے، window close کر کے، timeout کر کے، یا request ignore کر کے exchange کو stop کرنے کا انتخاب بھی کر سکتا ہے۔ مگر اس کے باوجود interaction truly disappear نہیں ہوتی۔ اگر system respond نہیں کرتا تو user wait کر سکتا ہے، try again کر سکتا ہے، confused ہو سکتا ہے، frustrated ہو سکتا ہے، walk away کر سکتا ہے، device restart کر سکتا ہے، یا decide کر سکتا ہے کہ program دوبارہ use ہی نہیں کرنا۔ motion کی language سے loosely borrow کرتے ہوئے، action صرف اس لیے vanish نہیں ہوتا کہ system continue کرنے سے refuse کر دے۔ user still moves. experience still changes. flow still matters.

اسی لیے user interfaces کو ایسے design نہیں کیا جا سکتا جیسے computers universe کے center میں ہوں۔ وہ نہیں ہیں۔ computers human purpose serve کرنے کے لیے exist کرتے ہیں۔ وہ ہمیں create، learn، organize، communicate، worship، build، imagine، اور ایسے problems solve کرنے میں help کرتے ہیں جو otherwise reach سے باہر رہتے۔ جب interface user کو forget کرتا ہے، تو وہ cold، frustrating، اور needlessly difficult بن جاتا ہے۔ مگر جب وہ user intent کو honor کرتا ہے، clearly respond کرتا ہے، اور information کو right path کے through carry کرتا ہے، technology wall جیسی کم اور tool جیسی زیادہ محسوس ہوتی ہے۔

یہ CatalystUI Model کا heart ہے۔ یہ ہمیں entire journey دیکھنے کا way دیتا ہے: stored information، domains جن سے وہ belong کرتی ہے، layers جن سے وہ pass ہوتی ہے، connectors جو اسے transform کرتے ہیں، اور interaction جو اسے واپس اس person تک لے آتا ہے جس نے exchange شروع کیا۔ یہ ہمیں user interfaces کو disconnected widgets، windows، APIs، renderers، اور devices کے piles سمجھنا چھوڑنے میں help کرتا ہے، اور اس کے بجائے انہیں _people_ اور _machines_ کے درمیان complete communication systems کے طور پر recognize کرتا ہے۔

### The Purpose of Behind It All

سالوں تک dream simple مگر stubborn تھا: technology کو اتنا broken محسوس نہیں ہونا چاہیے۔ program کو machine سے clear interaction دینے کے لیے bloated، fragile، یا platform-bound بننے کی ضرورت نہیں۔ framework کو simple ideas کو confusion کی layers کے پیچھے hide کرنے کی ضرورت نہیں۔ user interface کو person کو computer کی طرح سوچنے پر مجبور کرنے کی ضرورت نہیں۔ important یہ ہے کہ computer کو person کو understand کرنے کے لیے design کیا جائے۔ CatalystUI اس لیے exist کرتا ہے کیونکہ یہ dream impossible نہیں۔ اسے صرف ایسا model چاہیے تھا جو sufficiently clear ہو کہ actually کیا ہو رہا ہے describe کر سکے۔

Stack ہمیں structure دیتا ہے۔ domains بتاتے ہیں کہ ہم کس kind کی information handle کر رہے ہیں۔ connectors explain کرتے ہیں کہ information کیسے move اور change ہوتی ہے۔ Interactions ہمیں یاد دلاتے ہیں کہ یہ سب first place میں matter کیوں کرتا ہے۔ Together یہ computers کو دوبارہ people کے گرد design کرنے کا way بناتے ہیں: trends کے گرد نہیں، arbitrary framework decisions کے گرد نہیں، ان limitations کے گرد نہیں جنہیں ہمیں accept کرنے کو _کہا_ گیا، بلکہ human beings اور systems کے درمیان _actual flow of information_ کے گرد۔

یہی وجہ ہے کہ CatalystUI Model اتنا important ہے۔ یہی وجہ ہے کہ years of work، love، heart، hatred، frustration، اور hope اس میں ڈالی گئی۔ اور یہی وجہ ہے کہ مجھے خوشی ہے کہ آپ یہاں ہیں۔ Catalyst universe میں welcome۔ مجھے خوشی ہے کہ آپ میری adventure کے ایک part میں join کر سکے۔ مجھے امید ہے کہ اس نے آپ کی world perception کا at least ایک چھوٹا سا piece بہتر کیا ہوگا۔

> Onwards and upwards, my faithful companions.
