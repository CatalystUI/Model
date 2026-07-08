<!--
یہ ترجمہ ChatGPT کے ذریعے تیار کیا گیا ہے اور اسے انسانی مترجم سے نظرثانی کروانی چاہیے۔
ترجمے کی تصدیق کے بعد pull request میں ان سطروں کو حذف کر دیں۔
-->

# 5.5 The Stack :: Graphs & Frames

## In-Depth Discussion

### Organized Context

**Graphs & Frames** Stack کا Layer 4 ہے۔ یہ layer components، controls، اور layouts کو larger organized context میں place کرتا ہے۔ Layer 5 usable parts provide کرتا ہے؛ Layer 4 ان parts کے relationships، boundaries، routing context، اور renderer-facing preparation کو manage کرتا ہے۔

یہ layer interface کو scattered components کی collection سے بڑھا کر coherent environment بناتا ہے۔ component exists کر سکتا ہے، مگر graph بتاتا ہے کہ وہ کس سے related ہے۔ control behavior رکھ سکتا ہے، مگر frame بتاتا ہے کہ وہ active context میں کہاں ہے۔ layout arrangement کر سکتا ہے، مگر graph اور frame broader lifecycle اور routing context provide کرتے ہیں۔

### Graphs

**Graph** interface objects کے organized relationships کو represent کرتا ہے۔ یہ component tree، scene graph، audio graph، control hierarchy، document structure، یا کسی بھی relationship network کی form لے سکتا ہے۔ graph components کو store کر سکتا ہے، ان کے connections track کر سکتا ہے، query provide کر سکتا ہے، اور identify کر سکتا ہے کہ interaction کس object سے متعلق ہے۔

Graph layout نہیں ہے، اگرچہ layout graph کے اندر exist کر سکتا ہے۔ layout arrangement کرتا ہے؛ graph relationships اور discoverability manage کرتا ہے۔ graph system کو یہ جاننے میں مدد دیتا ہے کہ کون سے parts exist کرتے ہیں، وہ کیسے connected ہیں، اور انہیں broader interface میں کیسے manage کرنا ہے۔

### Frames

**Frame** active boundary اور current context کو represent کرتا ہے جس کے اندر graphs operate کرتے ہیں۔ frame output region، viewport، scene context، document context، audio mix context، or another bounded environment ہو سکتا ہے۔ frame graphs کو coordinate کرتا ہے اور renderer کے لیے preparation میں مدد دیتا ہے۔

Frame کا role lower layers کی طرف communication ہے۔ یہ determine کر سکتا ہے کہ active area کیا ہے، bounds کیا ہیں، resize یا focus changes کیسے affect کرتے ہیں، اور graph data کو renderer-facing form میں کیسے prepare کرنا ہے۔

### Context Before Rendering

Layer 4 rendering نہیں کرتا، مگر rendering کے لیے organized context prepare کرتا ہے۔ Renderer کو raw components نہیں چاہئیں؛ اسے prepared information چاہیے جو بتائے کہ output کیا ہونا ہے، کس relationship میں ہونا ہے، اور active boundary کیا ہے۔

Visual interface میں frame layout results، clip bounds، component tree، focus information، اور update regions prepare کر سکتا ہے۔ audio interface میں graph tracks، routes، volumes، اور timing context organize کر سکتا ہے۔ game scene میں graph entities اور relationships manage کر سکتا ہے جبکہ frame current scene state coordinate کرتا ہے۔

### Interaction Routing

reverse flow میں Layer 4 interaction routing کے لیے crucial ہے۔ lower layers detect کر سکتی ہیں کہ pointer moved، key pressed، sound input received، یا sensor triggered ہوا؛ مگر graph اور frame help کرتے ہیں decide کرنے میں کہ یہ interaction کس component یا control سے relevant ہے۔

Frame bounds interpret کر سکتا ہے۔ graph target find کر سکتا ہے۔ active context focus determine کر سکتا ہے۔ پھر interaction Layer 5 میں appropriate control تک واپس جا سکتا ہے۔ اس کے بغیر controls کو خود entire interface context understand کرنا پڑتا، جو separation کو خراب کر دیتا۔

### Why the Layer Matters

Graphs & Frames usable parts اور rendering process کے درمیان organizational layer فراہم کرتے ہیں۔ یہ components کو context دیتے ہیں، relationships track کرتے ہیں، boundaries define کرتے ہیں، interactions route کرتے ہیں، اور lower layers کے لیے interface prepare کرتے ہیں۔

مختصر یہ کہ Layer 4 situated interface ہے۔ components اب isolated نہیں؛ وہ graphs اور frames میں organized ہیں جہاں وہ ایک living, bounded, renderer-ready context کا حصہ بنتے ہیں۔
