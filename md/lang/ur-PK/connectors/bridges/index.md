<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 6.4 Connectors :: Bridge

## In-Depth Discussion

### From Context to Rendering

**Bridge** connector **Layer 4: Graphs & Frames** اور **Layer 3: Renderers** کے درمیان بیٹھتا ہے۔ یہ organized interface context کو rendering process میں carry کرتا ہے۔ Layer 4 جانتا ہے کہ interface کے parts کیسے organized ہیں؛ Layer 3 کو output-ready work produce کرنے کے لیے information چاہیے۔ Bridge connector ان دونوں کے درمیان crossing provide کرتا ہے۔

یہ connector کبھی بہت thin ہو سکتا ہے۔ کبھی it may only pass prepared frame data to a renderer. کبھی اسے graph information flatten کرنا، render commands prepare کرنا، domain-specific structure create کرنا، یا renderer-specific requirements کے مطابق information shape کرنا پڑ سکتا ہے۔ exact complexity implementation پر depend کرتی ہے، مگر conceptual role same ہے: organized context کو renderer تک پہنچانا۔

### Organized Information Is Not Rendered Output

Graph یا frame already organized ہو سکتا ہے، مگر وہ rendered output نہیں۔ component tree screen پر pixels نہیں ہے۔ audio graph audible waveform نہیں ہے۔ scene graph draw commands نہیں ہے۔ Layer 4 یہ explain کرتا ہے کہ information context میں کیسے arranged ہے؛ Layer 3 اسے output-ready form میں transform کرتا ہے۔ Bridge connector boundary cross کراتا ہے۔

یہ separation important ہے۔ اگر graph renderer details جاننے لگے، organization rendering سے entangled ہو جائے گی۔ اگر renderer entire graph semantics understand کرنے لگے، rendering layer interface organization کی responsibility absorb کر لے گی۔ Bridge connector both sides کو communicate کرنے دیتا ہے without collapsing them into one layer۔

### Passing Downward

top-down flow میں Bridge connector frame یا graph-prepared information کو renderer کے لیے suitable form میں pass کرتا ہے۔ visual interface میں یہ layout results، clipping, draw order, textures, glyphs, or scene information carry کر سکتا ہے۔ audio interface میں یہ tracks، mixes، routes، timing، or output instructions carry کر سکتا ہے۔ haptic interface میں یہ feedback events اور pattern information carry کر سکتا ہے۔

Bridge connector render نہیں کرتا؛ وہ renderer کو render کرنے کے لیے information دیتا ہے۔ یہ subtle distinction important ہے۔ Bridge crossing ہے، renderer transformation ہے۔

### Passing Interactions Upward

bottom-up flow میں Bridge connector renderer سے آنے والی interaction information کو graphs and frames کی طرف return کرنے میں help کرتا ہے۔ renderer pointer coordinates، input timing، hit-test-related information، sensor mapping، or domain-specific event context provide کر سکتا ہے۔ Bridge connector اسے Layer 4 کے لیے usable form میں carry کرتا ہے۔

اکثر Bridge connector interactions کو little modification کے ساتھ pass کر سکتا ہے۔ کبھی اسے renderer-specific details remove یا translate کرنا پڑتا ہے تاکہ graph/frame route کر سکے۔ مقصد interaction کو organized context تک پہنچانا ہے جہاں target یا meaning determine ہو سکے۔

### Quiet but Essential

Bridge connector کبھی dramatic نہیں لگتا۔ Data connector کی obvious storage relationship نہیں، Parser کی clear transformation نہیں، Adapter کی organizational role نہیں۔ first glance پر یہ two close layers کے درمیان thin handoff لگ سکتا ہے۔

مگر Bridge کے بغیر Stack کے پاس organized interface context سے rendering میں move کرنے کا explicit way نہیں ہوگا۔ graph کو renderer کو directly feed کرنا پڑے گا، یا renderer کو graphs/frames خود interpret کرنا پڑے گا۔ دونوں organization اور output کی boundary collapse کر دیں گے۔ Bridge connector اس boundary کو name دیتا ہے۔

### Why the Connector Matters

Bridge connector Stack کو organized interface context اور rendered output confuse کرنے سے بچاتا ہے۔ Graphs & Frames organization، context، boundaries، routing، and preparation کے لیے responsible رہتے ہیں۔ Renderers prepared information کو output-ready form میں convert کرنے کے لیے responsible رہتے ہیں۔ Bridge connector ان کے درمیان movement handle کرتا ہے۔

یہ Stack کا point ہے جہاں organized information rendering process میں cross کرتی ہے۔ یہ often quiet، thin، اور almost invisible ہو سکتا ہے۔ مگر اس کے بغیر interface as organized اور interface as rendered کے درمیان explicit connection گم ہو جاتا ہے۔ Bridge connector crossing possible بناتا ہے، پھر mercifully راستے سے ہٹ جاتا ہے۔
