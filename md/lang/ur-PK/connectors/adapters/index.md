<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 6.3 Connectors :: Adapter

## In-Depth Discussion

### From Use to Context

**Adapter** connector **Layer 5: Components, Controls, & Layouts** اور **Layer 4: Graphs & Frames** کے درمیان بیٹھتا ہے۔ یہ mutable interface data کو larger context میں place کرتا ہے جہاں اسے organize، discover، route، bound، اور Stack کے باقی حصے کے لیے prepare کیا جا سکے۔

Layer 5 system کو components، controls، اور layouts دیتا ہے۔ یہ mutable pieces ہیں جن کے ساتھ developer directly work کر سکتا ہے۔ component information کا piece represent کر سکتا ہے۔ control interaction کا response دے سکتا ہے۔ layout components کو particular order میں organize کر سکتا ہے۔ مگر یہ pieces اپنے environment کو fully describe نہیں کرتے۔ وہ جان سکتے ہیں کہ وہ کیا ہیں اور کیسے behave کرتے ہیں، مگر automatically نہیں جانتے کہ entire interface سے کیسے relate کرتے ہیں۔

Adapter connector individual usable pieces سے organized context تک movement provide کرتا ہے۔ یہ Parser connector سے produced components کو graphs and frames میں adapt کرتا ہے۔ یہی وہ جگہ ہے جہاں Stack صرف یہ نہیں سمجھتا کہ component exists کرتا ہے، بلکہ یہ بھی کہ وہ کہاں belongs کرتا ہے، دوسرے components سے کیسے relate کرتا ہے، اور active interface میں کیسے participate کرنا چاہیے۔

دوسرے الفاظ میں، Parser structured information کو usable بناتا ہے۔ Adapter usable information کو contextual بناتا ہے۔

### Adapting Components Into Graphs

component اکیلا exist کر سکتا ہے، مگر user interface rarely one isolated component پر مشتمل ہوتا ہے۔ simplest interface میں بھی relationships ہوتے ہیں: ایک component دوسرے کو contain کر سکتا ہے، control layout پر depend کر سکتا ہے، group کو search، order، enable، disable، focus، یا update together کرنا پڑ سکتا ہے۔

یہیں graph important ہوتا ہے۔

Adapter connector components، controls، اور layouts کو graph میں place کرنے دیتا ہے تاکہ وہ larger whole کے part کے طور پر organized ہو سکیں۔ graph components store کر سکتا ہے، relationships track کر سکتا ہے، query کے ways expose کر سکتا ہے، اور collection کے طور پر manage کرنے کے لیے surrounding logic provide کر سکتا ہے۔ اس step کے بغیر components mutable data کے scattered pieces رہتے، unified interface کے participants نہیں بنتے۔

settings component خود useful ہو سکتا ہے۔ graph میں adapt ہونے کے بعد وہ full settings view کا part بن سکتا ہے، other sections سے connect ہو سکتا ہے، name سے search ہو سکتا ہے، related values کے ساتھ update ہو سکتا ہے، یا user action پر route ہو سکتا ہے۔ component component رہتا ہے، مگر graph کے ذریعے context gain کرتا ہے۔

یہ distinction Layer 5 اور Layer 4 کو separate رکھنے میں مدد دیتی ہے۔ Components usable interface data describe کرتے ہیں۔ Graphs describe کرتے ہیں کہ وہ pieces together کیسے organized ہیں۔

### Layout Is Not the Whole Context

Adapter connector layout اور graph کے فرق کو clarify کرنے میں بھی مدد دیتا ہے۔ چونکہ layouts components organize کر سکتے ہیں، tempted ہونا easy ہے کہ انہیں interface کی full organizational layer سمجھ لیا جائے۔ مگر layout components کو particular manner میں arrange کرتا ہے۔ یہ necessarily full relationship، lifecycle، routing، یا environmental context describe نہیں کرتا۔

vertical layout decide کر سکتا ہے کہ several controls order میں appear ہوں۔ اس کا مطلب یہ نہیں کہ layout entire interface کا responsible ہے۔ اسے every active component جاننے، every interaction manage کرنے، output boundary prepare کرنے، یا system کے top-level mediator کے طور پر act کرنے کی ضرورت نہیں۔ یہ responsibilities Layer 4 کی ہیں۔

Adapter connector اس distinction کا respect کرتا ہے۔ یہ Layer 5 سے layout لے کر graph میں place کر سکتا ہے، مگر layout صرف arrange کرنے کی وجہ سے graph نہیں بن جاتا۔ graph broader organizational context provide کرتا ہے، جبکہ layout component رہتا ہے جس کا purpose other components arrange کرنا ہے۔

### Connecting to the Frame

Layer 4 صرف graphs سے concerned نہیں؛ اس میں frame بھی ہے، جو organized components اور lower layers کے درمیان active boundary اور communication point represent کرتا ہے۔

Adapter connector components کو اس framed context میں enter کرنے میں help کرتا ہے۔ component size رکھ سکتا ہے، control interaction behavior رکھ سکتا ہے، layout relative placement describe کر سکتا ہے، مگر frame bounds determine کرتا ہے جن کے اندر وہ pieces prepared ہو رہے ہیں۔ frame active area، surrounding context، اور renderer کی طرف pass ہونے والی information سے concerned ہوتا ہے۔

Adapter connector render نہیں کرتا۔ rendering lower layers کا کام ہے۔ Adapter connector organized interface prepare کرتا ہے تاکہ frame properly communicate کر سکے۔ یہ frame کو component relationships، layout results، and contextual information دیتا ہے جس کی ضرورت next connector کو renderer کی طرف information لے جانے سے پہلے ہوتی ہے۔

### Reuse Through Adaptation

Adapter connector کی powerful qualities میں سے ایک یہ ہے کہ same component کو different contexts میں adapt کیا جا سکتا ہے۔ component کو permanently one graph، one frame، یا one kind of interface سے tied ہونے کی ضرورت نہیں۔ اس کا meaning اور behavior stable رہ سکتا ہے جبکہ Adapter connector determine کرتا ہے کہ particular environment میں اسے کیسے participate کرنا ہے۔

Document component editing graph، preview graph، یا printing graph میں adapt ہو سکتا ہے۔ Music component playback graph، editing graph، یا library graph میں adapt ہو سکتا ہے۔ settings components کا group simple preferences page، advanced configuration panel، یا automated setup flow میں adapt ہو سکتا ہے۔

underlying components familiar رہتے ہیں، مگر relationships اور purpose graph/frame کے مطابق change ہوتے ہیں۔ یہ CatalystUI کو reuse express کرنے کا clean way دیتا ہے بغیر یہ pretend کیے کہ ہر context identical ہے۔

### Returning to Components

Stack reversible ہے، اس لیے Adapter connector interaction کو upper layers کی طرف واپس لے جانے میں بھی participate کرتا ہے۔ جب user system سے interact کرتا ہے، lower layers کو eventually وہ interaction appropriate component یا control تک route کرنا ہوتا ہے۔

Layer 4 اس process میں important ہے کیونکہ یہ organized context understand کرتا ہے۔ graph relevant component determine کرنے میں help کر سکتا ہے۔ frame وہ bounds interpret کر سکتا ہے جن میں interaction ہوا۔ جب context known ہو جائے، Adapter connector interaction کو Layer 5 تک return کرنے میں help کرتا ہے، جہاں appropriate component یا control respond کر سکتا ہے۔

Top-down flow میں Adapter connector components کو context میں place کرتا ہے۔ Bottom-up flow میں وہ contextual interactions کو ان components تک واپس لے جانے میں مدد کرتا ہے جو act کر سکتے ہیں۔

### Preserving Identity

Adapter connector کو adapted components کی identity اور intent preserve کرنی چاہیے۔ جب component graph یا frame میں enter کرے، اسے lose نہیں ہونا چاہیے کہ وہ کیا ہے۔ اس کا purpose، state، اور original information سے relationship recognizable رہنا چاہیے، چاہے وہ larger system میں organized ہو رہا ہو۔

اس کا مطلب یہ نہیں کہ component wrap، index، group، measure، transform، یا specific environment کے لیے prepare نہیں ہو سکتا۔ adaptation اکثر additional information require کرتی ہے جو component میں originally نہیں تھی: identifiers، bounds، routing focus، etc. یہ additions component کو context میں participate کرنے میں مدد دیتی ہیں، مگر اس کے meaning کو erase نہیں کرنا چاہیے۔

### Why the Connector Matters

Adapter connector Stack کو usable interface data اور organized interface context confuse کرنے سے بچاتا ہے۔ اس connector کے بغیر components کو اپنے graphs خود manage کرنے پڑتے، layouts کو complete interface organization سمجھا جاتا، یا frames کو proper transition کے بغیر components understand کرنے پر forced کیا جاتا۔

Components, Controls, & Layouts mutable interface objects اور direct interaction behavior کے لیے responsible رہتے ہیں۔ Graphs & Frames organization، context، boundaries، routing، اور lower layers کے لیے preparation کے لیے responsible رہتے ہیں۔ Adapter connector ان کے درمیان movement handle کرتا ہے۔

یہ Stack کا وہ point ہے جہاں usable information situated information بنتی ہے۔ components صرف program کے لیے available نہیں رہتے؛ وہ living context میں place ہوتے ہیں جہاں وہ ایک دوسرے سے relate، correct pathways سے respond، اور renderer-facing preparation میں participate کر سکتے ہیں۔
