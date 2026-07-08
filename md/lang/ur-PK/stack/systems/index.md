<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.8 The Stack :: Systems

## In-Depth Discussion

### The Lower Explicit Boundary

**Systems** Stack کا Layer 1 ہے۔ یہ lowest explicit layer ہے، جہاں machine-side environment output deliver کرتا ہے اور interaction input receive کرتا ہے۔ system operating system، device firmware، runtime environment، hardware controller، embedded system، browser host، یا کوئی organized mechanism ہو سکتا ہے جو interface کو real environment میں operate کرنے دیتا ہے۔

System وہ layer ہے جو devices، services، processes، hardware capabilities، and platform behavior provide کرتا ہے۔ یہ final explicit step ہے جہاں prepared output actual delivery کی طرف جاتا ہے، اور first explicit step ہے جہاں user action کا effect Stack میں enter ہوتا ہے۔

### More Than an Operating System

Modern desktop context میں system often OS ہوتا ہے، جیسے Windows، macOS، Linux، Android، یا iOS۔ مگر CatalystUI system کو OS تک limited نہیں کرتا۔ automatic door controller، game console runtime، embedded sensor board، browser environment، terminal host، یا custom hardware environment بھی system role ادا کر سکتے ہیں۔

key point یہ ہے کہ system underlying environment provide کرتا ہے۔ یہ output devices، input devices، scheduling، memory، drivers، APIs، or physical mechanisms expose کر سکتا ہے۔

### Delivering Output

top-down flow میں system window سے output receive کرتا ہے یا window کے context کے through output deliver کرتا ہے۔ visual output display تک پہنچ سکتا ہے۔ audio speaker تک پہنچ سکتا ہے۔ haptic signal motor تک پہنچ سکتا ہے۔ physical actuator door، light، or other mechanism move کر سکتا ہے۔

System output کو perceivable world میں لے جانے والا last explicit machine-side handler ہے۔ اس کے بعد Human Interface ہے، جہاں user output کو actually perceive کرتا ہے۔

### Receiving Input

bottom-up flow میں system user action کے effects receive کرتا ہے۔ keyboard signal، pointer movement، touch contact، microphone input، controller action، sensor detection، or physical switch state system میں enter ہو سکتا ہے۔ پھر system اسے appropriate window context تک pass کرتا ہے۔

System user intent کو necessarily understand نہیں کرتا۔ یہ signal receive کرتا ہے۔ higher layers determine کرتے ہیں کہ signal interaction کے طور پر کیا meaning رکھتا ہے۔ یہ distinction important ہے: pressed key اور intended command always same نہیں ہوتے۔

### System Differences

Systems vary کرتے ہیں۔ APIs، devices، timing، capabilities، permission models، accessibility services، performance characteristics، and behavior سب platform کے حساب سے بدل سکتے ہیں۔ CatalystUI system layer کو place دے کر ان differences کو acknowledge کرتا ہے بغیر پورے Model کو platform-specific بنائے۔

Native connector system اور window کے درمیان bindings provide کرتا ہے، مگر System layer itself وہ environment ہے جس سے those bindings communicate کرتے ہیں۔

### Why the Layer Matters

Systems Stack کو machine-side reality میں ground کرتے ہیں۔ interface صرف abstract components اور renderers نہیں؛ اسے آخرکار کسی environment میں run کرنا، output deliver کرنا، and input receive کرنا ہوتا ہے۔ System layer اس boundary کو explicit بناتا ہے۔

مختصر یہ کہ Layer 1 system ہے: وہ underlying environment جو output delivery اور input reception ممکن بناتا ہے۔ یہ OS ہو سکتا ہے، device ہو سکتا ہے، runtime ہو سکتا ہے، یا specialized mechanism ہو سکتا ہے۔
