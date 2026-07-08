<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 6. Connectors

## Per-Topic Summary

Connectors unique ہیں کیونکہ وہ صرف یہ describe نہیں کرتے کہ information layers کے درمیان _کیسے_ move کرتی ہے؛ وہ ہمیں hardware devices کی many limitations کو _abstract_ کرنے کی ability بھی دیتے ہیں۔ یہ bold claim ہے، مگر جب user interface CatalystUI Stack کے گرد مناسب طور پر design ہو، connectors ایسے build کیے جا سکتے ہیں کہ ضرورت کے مطابق different implementations سے swap ہو سکیں۔ اس sense میں connectors information کے لیے _translation medium_ کی طرح کام کرتے ہیں۔ Stack کی layers کے برعکس، جو assign ہونے کے بعد عموماً specific domain سے locked ہوتی ہیں، connectors information کو ایک domain سے دوسرے domain میں transform کر سکتے ہیں۔ مثلاً connector text content کو screen، speaker، یا braille display کے tactile feedback کے لیے prepare کر سکتا ہے۔

جس طرح ہم نے Stack میں each layer identify کی، اسی طرح connectors کو بھی identify کیا جا سکتا ہے کہ ایک layer کو neighboring layer سے کہاں communicate کرنا ہے۔ یہ important distinction ہے: “Data Storage” اور “Human Interface” کے برعکس، connectors کے implied endpoints نہیں ہوتے۔ وہ mechanism ہیں جو دو neighboring explicit layers کو together work کرنے دیتے ہیں۔ اسی وجہ سے ہر connector ان دو layers سے define ہوتا ہے جن کے درمیان وہ بیٹھتا ہے، اور اس communication کی kind سے جو اسے support کرنی ہے۔

### Stack کے Connectors

Stack کے top پر پہلا required connection Layer 7، “Digital Data”، اور Layer 6، “Structure & Semantics”، کے درمیان بیٹھتا ہے۔ Digital Data original material hold کر سکتا ہے، جیسے file، document، response، یا database result، مگر next layer کو جاننا ہوتا ہے کہ material کو کیسے read کیا جائے۔ اس connector کو Data Storage کی طرف reach کرنا پڑ سکتا ہے، information کو active flow میں Digital Data کے طور پر لانا پڑ سکتا ہے، اور interpretation کے لیے prepare کرتے ہوئے format اور meaning preserve کرنا پڑتا ہے۔ چونکہ یہ connector digital content کو structured format میں convert کرتا ہے، ہم اسے “Data” connector کہہ سکتے ہیں۔

جب content meaningful structure میں read ہو جائے، next connection Layer 6، “Structure & Semantics”، اور Layer 5، “Components, Controls, & Layouts”، کے درمیان آتا ہے۔ Layer 6 explain کر سکتا ہے کہ content کا meaning کیا ہے، مگر Layer 5 کو جاننا ہوتا ہے کہ اس سے کون سے usable parts create ہونے چاہئیں۔ دوسرے لفظوں میں connector کو “instruction” کو “reality” میں بدلنا ہوتا ہے۔ اگر page description کہتی ہے کہ button ہونا چاہیے، اگلا step صرف یہ جاننا نہیں کہ button exists؛ interface کو working control کے طور پر button create کرنا ہوگا۔ چونکہ یہ connector structures کو usable interface parts میں _parse_ کرتا ہے، اسے “Parser” connector کہنا مناسب ہے۔

جب usable parts exist کر جائیں، next connection Layer 5، “Components, Controls, & Layouts”، اور Layer 4، “Graphs & Frames”، کے درمیان ہوتا ہے۔ Layer 5 describe کر سکتا ہے کہ interface میں کیا ہے اور parts کیسے behave کرتے ہیں، مگر Layer 4 کو یہ information larger context میں organized چاہیے۔ connector interface parts کو relationships میں place کرتا ہے جنہیں track، coordinate، اور next stage کے لیے prepare کیا جا سکے۔ button control کے طور پر exist کر سکتا ہے، مگر complete scene کا part بننے سے پہلے اسے position، size، state، اور surrounding frame سے relationship چاہیے۔ چونکہ یہ connector usable parts کو graph and frame structures میں _adapt_ کرتا ہے، ہم اسے “Adapter” connector کہتے ہیں۔

پھر organized frame کو Layer 3، “Renderers”، کے ساتھ communicate کرنا ہوتا ہے۔ Layer 4 describe کر سکتا ہے کہ interface میں کیا exists ہے اور each part whole سے کیسے relate کرتا ہے، مگر Layer 3 کو ایسی instructions چاہیے جنہیں وہ produce کر سکے۔ connector organized scene کو specific rendering system کے لیے suitable work میں translate کرتا ہے۔ visual interface میں frame کے اندر button rectangles، textures، glyphs، یا draw commands میں convert ہو سکتا ہے۔ چونکہ یہ organized interface اور renderer کے درمیان _bridge_ کرتا ہے، اسے “Bridge” connector کہتے ہیں۔

renderer کے work prepare کرنے کے بعد next connection Layer 3، “Renderers”، اور Layer 2، “Windows”، کے درمیان آتا ہے۔ Layer 3 draw، play، یا output produce کرنا جان سکتا ہے، مگر اسے target چاہیے جہاں result deliver ہو۔ Layer 2 وہ view provide کرتا ہے جس کے through user result receive کرتا ہے، اس لیے connector renderer کو result send کرنے کے لیے usable place expose کرتا ہے۔ OpenGL scene draw کر سکتا ہے، مگر image user کو دکھنے سے پہلے اسے place چاہیے۔ چونکہ یہ connector وہ _surface_ provide کرتا ہے جہاں rendered work window سے ملتا ہے، اسے “Surface” connector کہتے ہیں۔

آخر میں Stack کے bottom پر Layer 2، “Windows”، اور Layer 1، “Systems”، کے درمیان communication چاہیے۔ اس point پر connector کو Layer 1 کی natural form میں work کرنا ہوتا ہے، چاہے وہ operating-system handle، platform API، device signal، یا physical mechanism ہو۔ desktop app میں یہ native handle ہو سکتا ہے جو Layer 2 create/manage کرنے کے لیے use ہوتا ہے۔ automatic door میں built-in sensor اور motor connection ہو سکتا ہے۔ چونکہ یہ connector system کی اپنی _native_ form میں communicate کرتا ہے، ہم اسے “Native” connector کہتے ہیں۔

### Model میں Connectors کا کردار

top سے bottom تک connectors “Data,” “Parser,” “Adapter,” “Bridge,” “Surface,” اور “Native” ہیں۔ ہر connector Stack کی دو explicit layers کے درمیان بیٹھتا ہے اور explain کرتا ہے کہ layers communicate کیسے کرتی ہیں۔ Data connector information کو storage سے active digital form اور پھر structured understanding میں لاتا ہے۔ Parser structure کو usable interface parts میں بدلتا ہے۔ Adapter ان parts کو graphs and frames میں place کرتا ہے۔ Bridge organized structures کو renderer کے لیے prepare کرتا ہے۔ Surface renderer کو result deliver کرنے کی place دیتا ہے۔ Native connector window کو system کے native terms میں system سے communicate کرنے دیتا ہے۔

### Connectors and the Living Exchange

Together، connectors Stack کے described path کو complete کرتے ہیں۔ layers بتاتی ہیں information flow میں کہاں ہے؛ connectors بتاتے ہیں کہ وہ ایک step سے next step تک کیسے move کرتی ہے۔ یہی CatalystUI Model کو static arrangement سے بڑھا کر living exchange describe کرنے دیتا ہے: stored content structure بنتا ہے، structure interface بنتا ہے، interface output بنتا ہے، output user تک پہنچتا ہے، اور user response same pattern سے واپس travel کر سکتا ہے۔ چونکہ connectors کو layers redefine کیے بغیر replace یا rework کیا جا سکتا ہے، وہ Model کو اس کی اہم strengths میں سے ایک دیتے ہیں: different devices، domains، اور systems کے مطابق adapt ہونے کی ability، جبکہ underlying information flow محفوظ رہتا ہے۔
