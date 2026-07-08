<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.9 The Stack :: Human Interface

## In-Depth Discussion

### The Implied Human Boundary

**Human Interface** Stack کا implied lower boundary ہے۔ یہ user کو represent کرتا ہے: وہ person جو system سے perceivable output receive کرتا ہے اور actions produce کرتا ہے جو interaction input بن سکتے ہیں۔ سادہ الفاظ میں، یہ layer آپ ہیں۔

یہ obvious لگ سکتا ہے، مگر matter کرتا ہے۔ Stack user اور information system کے درمیان communication process کو describe کرنے کے لیے exist کرتا ہے۔ اگر Data Storage وہ boundary explain کرتا ہے جہاں retained content active flow میں enter یا leave کر سکتا ہے، تو Human Interface opposite boundary explain کرتا ہے: وہ place جہاں computer output finally human experience کا part بنتا ہے، اور جہاں human action system میں واپس جانے والا path شروع کرتا ہے۔

Human Interface implied ہے کیونکہ Model user کے body، mind، attention، emotions، senses، intentions، memories، یا choices کو directly represent نہیں کرتا۔ CatalystUI describe کر سکتا ہے کہ system output user کی طرف کیسے deliver کرتا ہے اور user action interaction input کیسے بنتا ہے، مگر یہ entire human being model کرنے کا دعویٰ نہیں کرتا۔ وہ تھوڑا ambitious ہوگا۔ اور honestly، terrifying بھی۔ Stack powerful ہے، مگر اسے renderer attached psychology textbook بننے کی ضرورت نہیں۔

### The Recipient of Perceivable Output

top-down flow میں Human Interface perceivable output کا recipient ہے۔ Digital Data explicit Stack سے گزرتا ہے، interpreted، shaped، organized، rendered، window کے through delivered، اور system کے ذریعے carried ہوتا ہے جب تک وہ perceive کیا جا سکے۔ جب output user کے senses تک پہنچتا ہے، explicit Stack اپنا downward path complete کر چکا ہوتا ہے۔

اس کا مطلب یہ نہیں کہ user Digital Data directly receive کرتا ہے۔ person naturally ones and zeros، memory buffers، draw calls، audio samples، یا system events perceive نہیں کرتا۔ user system کے work کا result perceive کرتا ہے: light، sound، vibration، motion، text، spatial change، یا sensory output کی کوئی اور form۔ Human Interface وہ جگہ ہے جہاں output صرف delivered نہیں رہتا بلکہ experienced ہونا شروع ہوتا ہے۔

یہ distinction Model کو honest رکھتا ہے۔ system output provide کر سکتا ہے، مگر understanding force نہیں کر سکتا۔ display button دکھا سکتی ہے، speaker sound play کر سکتا ہے، device vibrate کر سکتا ہے، مگر user کو پھر بھی human کے طور پر result perceive اور interpret کرنا ہوتا ہے۔ Model اس boundary کو recognize کرتا ہے بغیر ہر personal، biological، یا contextual factor define کیے۔ دوسرے لفظوں میں: CatalystUI output کو human تک پہنچا سکتا ہے۔ یہ human کو notification ignore کرنے سے روک نہیں سکتا۔ افسوس۔

### The Source of Interaction

bottom-up flow میں Human Interface action کا source ہے۔ user دیکھتا ہے، سنتا ہے، محسوس کرتا ہے، سمجھتا ہے، react کرتا ہے، decide کرتا ہے، اور پھر کچھ کرتا ہے۔ وہ action key press، pointer movement، screen touch، spoken command، knob turn، sensor field میں چلنا، یا کوئی behavior ہو سکتا ہے جسے system receive کر سکے۔

action itself explicit Stack سے باہر begin ہوتا ہے۔ Model directly وہ full internal process describe نہیں کرتا جس نے user کو act کرنے تک پہنچایا۔ یہ return path کو model کرنا تب شروع کرتا ہے جب system اس action کا effect receive کرتا ہے۔ اس point پر action interaction input بن جاتا ہے اور Layer 1: Systems میں enter کرتا ہے، جہاں سے وہ Stack میں upward pass ہو سکتا ہے۔

یہ **human action** اور **system interaction** کے درمیان clean distinction رکھتا ہے۔ human action وہ ہے جو user کرتا ہے۔ interaction input وہ ہے جو system اس action سے receive کرتا ہے۔ دونوں closely related ہیں، مگر identical نہیں۔ person ایک چیز click کرنا intend کر سکتا ہے اور accidentally دوسری click کر سکتا ہے، یا کچھ پکڑتے ہوئے key brush کر سکتا ہے۔ system دونوں receive کر سکتا ہے، مگر likely صرف ایک meaningful expression of user intent ہے۔ Unless accidental input ہی goal تھا، جس صورت میں مبارک ہو: interface ایک بہت experimental phase میں داخل ہو چکا ہے۔

### Why the Layer Is Implied

Human Interface اسی reason سے implied ہے جس reason سے Data Storage implied ہے: flow کے لیے required ہے، مگر explicit transformation layer کے طور پر directly modeled نہیں۔ Stack user پر depend کرتا ہے، مگر user کو transform نہیں کرتا۔ یہ user کو parse نہیں کرتا، render نہیں کرتا، adapt نہیں کرتا، یا component کے طور پر store نہیں کرتا۔ غالباً یہی بہتر ہے۔

اس کے بجائے Model Human Interface کو system کے lower end کے گرد living boundary کے طور پر treat کرتا ہے۔ explicit Stack describe کر سکتا ہے کہ output کیسے prepared اور delivered ہوتا ہے، اور received interaction upward کیسے travel کرتا ہے۔ یہ human experience itself پر ownership claim کرنے سے پہلے رک جاتا ہے۔

یہ boundary خاص طور پر important ہے کیونکہ user merely another device نہیں۔ display visual output provide کرتا ہے۔ keyboard input signals provide کرتا ہے۔ user perceive، interpret، choose، respond، misunderstand، learn، hesitate، mistakes کرتا ہے، اور کبھی کبھی full confidence کے ساتھ غلط button click کرتا ہے۔ Model کو اس difference کا respect کرنا چاہیے۔ Human Interface اس لیے present ہے کیونکہ Stack human communication کے لیے built ہے، مگر implied ہے کیونکہ human machine-side transformation process کا part نہیں۔

### Perception and Intent

Human Interface perception اور intent کو join کر کے communication cycle complete کرتا ہے۔ ایک direction میں system perceivable چیز provide کرتا ہے۔ دوسری direction میں user action کے ذریعے respond کرتا ہے۔ یہی CatalystUI کے center میں conversational loop بناتا ہے: system output کے ذریعے speak کرتا ہے، user interaction کے ذریعے respond کرتا ہے، اور system اس response کو process کر کے exchange جاری رکھتا ہے۔

اسی لیے Human Interface کو input devices تک reduce نہیں کیا جا سکتا۔ keyboard، mouse، touchscreen، microphone، camera، یا controller interaction capture کرنے میں help کر سکتے ہیں، مگر ان میں سے کوئی user نہیں۔ یہ system-accessible paths ہیں جن کے through user action Stack میں enter کر سکتا ہے۔ Human Interface وہ person ہے جس کی perception اور intent ان signals کو meaning دیتے ہیں۔

output devices کے لیے بھی یہی true ہے۔ monitor، speaker، haptic motor، یا کوئی output device perceivable data carry کر سکتا ہے، مگر device experience complete نہیں کرتا۔ experience تب complete ہوتا ہے جب user result perceive کرتا ہے۔ perfectly rendered pixels سے بھری screen successful interface نہیں اگر user provided چیز کو دیکھ، سمجھ، reach، hear، feel، یا act نہیں کر سکتا۔

### Relationship to Systems

Human Interface directly **Layer 1: Systems** کے نیچے بیٹھتا ہے۔ System layer output کا final explicit computer-side handling اور interaction کا first explicit computer-side handling provide کرتا ہے۔ Human Interface اس layer سے beyond ہے، system output کا recipient اور user action کا source۔

یہ relationship Stack کا lower edge define کرتا ہے۔ top-down flow میں system user کی طرف output deliver کرتا ہے۔ bottom-up flow میں system user action کا effect receive کرتا ہے۔ system machine operation کا final explicit layer ہے، جبکہ Human Interface implied boundary ہے جہاں machine operation human experience سے ملتی ہے۔

ان layers کو separate کرنے سے Model device behavior کو user experience کے ساتھ confuse نہیں کرتا۔ system جان سکتا ہے کہ key pressed ہوئی، pointer moved ہوا، یا sound play ہوا۔ یہ automatically نہیں جانتا کہ user نے کیا understood، intended، felt، یا noticed کیا۔ یہ human realities explicit Stack سے beyond belong کرتی ہیں، اگرچہ Stack انہیں serve کرنے کے لیے exist کرتا ہے۔

### Accessibility and Human Variation

Human Interface Model کو یاد دلاتا ہے کہ users interchangeable machines نہیں۔ لوگ different abilities، senses، contexts، tools، limitations، preferences، اور environments کے ذریعے perceive اور act کرتے ہیں۔ ایک user primarily visual output پر rely کر سکتا ہے۔ دوسرا auditory output، tactile feedback، keyboard navigation، screen readers، captions، simplified motion، alternate input devices، یا access کی دوسری forms پر depend کر سکتا ہے۔

یہ Stack کی structure نہیں بدلتا۔ یہ clarify کرتا ہے کہ Stack کیوں matter کرتا ہے۔ layers کو separate کر کے CatalystUI بہتر identify کر سکتا ہے کہ failure کہاں ہوتا ہے جب output delivered ہو مگر meaningfully perceivable نہ ہو، یا جب user کے پاس intent ہو مگر اسے express کرنے کا usable path نہ ہو۔ Human Interface boundary پورے flow کا purpose visible رکھتی ہے: system صرف output produce نہیں کر رہا؛ وہ person کے ساتھ communicate کر رہا ہے۔

وہ person tired، distracted، brilliant، confused، disabled، learning، multitasking، یا deadline سے پانچ minutes پہلے کچھ finish کرنے کی کوشش میں ہو سکتا ہے۔ interface کو پھر بھی اسے human کے طور پر meet کرنا ہے۔ Preferably بغیر اس کے کہ پہلے اسے forty-page error message پڑھنا پڑے۔

### Why the Layer Matters

Human Interface Stack کو machine پر ختم ہونے سے بچاتا ہے۔ اس implied layer کے بغیر Model system output اور system input پر رک جاتا، جیسے interface کا purpose صرف hardware میں signals move کرنا ہو۔ یہ point miss کر دیتا۔ Stack کا purpose صرف output produce کرنا نہیں؛ information system اور user کے درمیان communication possible بنانا ہے۔

Human Interface کو Systems سے separate کر کے Model clean final boundary preserve کرتا ہے۔ Systems output deliver کرتے ہیں اور input receive کرتے ہیں۔ Human Interface output perceive کرتا ہے اور action produce کرتا ہے۔ explicit Stack ان دو directions کے درمیان machine-side process describe کرتا ہے، جبکہ implied Human Interface ہمیں یاد دلاتا ہے کہ process کس کے لیے ہے۔

اسی لیے Human Interface Stack میں belong کرتا ہے اگرچہ numbered نہیں۔ user کوئی layer نہیں جسے implement، render، parse، یا unit-test کیا جائے۔ user ہی reason ہے کہ layers exist کرتی ہیں۔ اور assuming user human ہے، Model خوبصورتی سے کام کرتا ہے۔
