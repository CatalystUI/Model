# 6.6 Connectors :: Native

## Discussione approfondita

### Da Windows a Systems

Il connettore **Native** si trova tra **Layer 2: Windows** e **Layer 1: Systems**. È responsabile di collegare la window al sistema sottostante, così che output possa essere consegnato e le interazioni possano essere ricevute attraverso l’ambiente reale in cui il programma è in esecuzione.

Layer 2 dà allo Stack una window: una vista, un contenitore o un punto di delivery delimitato. Layer 1 dà allo Stack il system: l’ambiente operativo, l’accesso all’hardware, i servizi, i dispositivi e il comportamento nativo che rendono possibile la window. Il connettore Native fornisce il punto di attraversamento tra questi due layer.

Questo connettore è spesso il punto in cui lo Stack tocca più direttamente la realtà pratica del computing. Fino a qui, il Modello ha descritto l’informazione mentre si muove attraverso dati strutturati, componenti, graphs, renderers e surfaces. Tuttavia, una window non esiste solo per immaginazione. Qualcosa deve chiedere al sistema di crearla, configurarla, mantenerla, aggiornarla e riportare interazioni attraverso di essa.

Quel qualcosa è il connettore Native.

### Definire i bindings

Un **binding** è una connessione controllata tra un layer e funzionalità fornite da un altro. Nel contesto del connettore Native, i bindings espongono comportamento di livello sistema alla window in una forma che il programma può usare senza richiedere alla window di diventare il sistema stesso.

Questa definizione è intenzionalmente semplice. Un binding non deve essere misterioso. È la relazione accessibile tra il codice sopra e la funzionalità sotto.

Un binding nativo può esporre la capacità di creare una window, cambiarne il titolo, ricevere input da tastiera, rispondere al movimento del puntatore, ridimensionare l’area attiva, richiedere focus, accedere a un dispositivo o comunicare con un servizio di sistema. I dettagli varieranno secondo sistema e implementazione, ma il concetto resta lo stesso: il binding fornisce una connessione utilizzabile alla funzionalità nativa.

Per questo i bindings contano così tanto a questo layer. Il sistema può fornire capacità potenti, ma quelle capacità non sono automaticamente disponibili nel linguaggio o nella struttura usati dal resto dello Stack. Devono essere esposte tramite qualche forma di connessione. Il connettore Native è il luogo in cui quelle connessioni vengono raccolte, modellate e usate.

### Fornire accesso nativo

In molte implementazioni, il connettore Native fornirà principalmente bindings a funzionalità di sistema di livello più basso. Questo può sembrare ordinario all’inizio, soprattutto perché gli sviluppatori conoscono già API native, librerie di piattaforma, chiamate del sistema operativo, interfacce di dispositivo e strumenti simili. Tuttavia, nello Stack, questi non sono semplici dettagli casuali di implementazione. Sono i mezzi attraverso cui Layer 2 ottiene accesso a Layer 1.

Una window grafica su un sistema operativo desktop può richiedere bindings a una API di windowing della piattaforma. Un’interfaccia a riga di comando può richiedere bindings a input e output del terminale. Un dispositivo specializzato può richiedere bindings a pulsanti, sensori, altoparlanti, luci o altri dispositivi controllati dal sistema. In ogni caso, il connettore Native fornisce la relazione che permette alla window di agire nel sistema.

La parte importante non è quale piattaforma viene usata. La parte importante è che la window non può consegnare output o ricevere interaction se non ha un modo per comunicare con il sistema che la contiene.

Il connettore Native fornisce quel modo.

### Più di un wrapper

Poiché questo connettore spesso espone comportamento nativo, può essere tentante descriverlo come un wrapper attorno ad API di sistema. Questa descrizione può essere utile in alcuni contesti pratici, ma non spiega completamente che cosa il connettore stia facendo dentro il Modello.

Un wrapper descrive come le persone implementano spesso questo tipo di layer. Un binding descrive che cosa il connettore sta effettivamente fornendo.

Il connettore Native non è semplicemente un mucchio di chiamate di piattaforma poste sotto la window. È la relazione formale tra window e sistema. Definisce come la window riceve la sua esistenza supportata dal sistema, come il comportamento del sistema diventa disponibile allo Stack e come le interazioni originate dal sistema cominciano a muoversi verso l’alto.

Questa distinzione conta perché il Modello non sta cercando di preservare il modo in cui gli sviluppatori hanno storicamente descritto questi strumenti. Sta cercando di descrivere il processo sottostante stesso. In quel processo, il connettore Native non è importante perché capita che wrappi una API nativa. È importante perché lega Layer 2 a Layer 1.

Questo è ciò che questo connettore è davvero.

### Creare e mantenere la Window

Nel flusso top-down, il connettore Native permette alla window di operare attraverso il sistema. Una window può dover essere creata, mostrata, nascosta, ridimensionata, spostata, focalizzata, aggiornata o chiusa. Queste azioni richiedono una relazione con il sistema, perché il sistema è il layer che fornisce realmente l’ambiente in cui quelle azioni possono accadere.

Il connettore Native può esporre i bindings necessari per eseguire quelle azioni. Attraverso di esso, Layer 2 può richiedere comportamento di sistema senza assorbire l’intera responsabilità della gestione del sistema. La window resta il punto di delivery delimitato. Il sistema resta l’ambiente che fornisce la funzionalità sottostante. Il connettore Native porta la relazione tra i due.

Questo è particolarmente importante perché i sistemi differiscono. Sistemi operativi, dispositivi, runtime e ambienti diversi possono fornire API e comportamenti diversi. Il connettore Native dà allo Stack un luogo per rappresentare quelle differenze senza costringere il resto del Modello a diventare specifico del sistema.

### Ricevere interazioni

Poiché lo Stack è reversibile, il connettore Native è anche il primo connettore esplicito coinvolto quando un’interazione entra dal sistema.

La pressione di un tasto, il movimento del puntatore, un input touch, un’azione di controller, un segnale di dispositivo, un evento di resize, un cambio di focus o un altro evento originato dal sistema deve attraversare da Layer 1 a Layer 2 prima che il resto dello Stack possa farci qualcosa. Il connettore Native fornisce quell’attraversamento. Riceve o espone l’informazione di interazione del sistema e la porta nella window, dove può continuare verso l’alto attraverso il connettore Surface in Renderers, poi attraverso Bridge, Adapter, Parser e Data connectors secondo necessità.

In molti casi, il connettore Native non deve decidere che cosa significa l’interazione. Il suo ruolo è legare la sorgente di interazione del sistema al percorso di interazione della window. Il sistema riporta che qualcosa è accaduto. Il connettore Native rende quel report utilizzabile da Layer 2. Il resto dello Stack può poi instradare, trasformare e gestire l’interazione secondo le proprie responsabilità.

Questo mantiene pulito il confine inferiore. Il connettore Native dà all’input di interazione un modo per entrare nello Stack senza richiedere al sistema di comprendere i layer superiori e senza richiedere ai layer superiori di comportarsi come se fossero il sistema.

### Preservare il confine

Un connettore Native dovrebbe preservare il confine tra window e sistema. Dovrebbe esporre la funzionalità del sistema di cui la window ha bisogno, ma non dovrebbe cancellare la distinzione tra i due layer.

Qui i bindings sono particolarmente utili come concetto. Un binding permette accesso senza identità. La window può usare funzionalità di sistema senza diventare il sistema. Il sistema può fornire comportamento senza diventare la window. Il connettore definisce la relazione tra i due.

Questo confine permette a CatalystUI di descrivere una window in modo coerente attraverso ambienti diversi. Un sistema può fornire una window desktop tradizionale. Un altro può fornire un terminale. Un altro può fornire un canale di output specifico per dispositivo. Un altro può fornire un ambiente remoto o virtualizzato. I bindings nativi possono differire, ma il ruolo del connettore resta lo stesso.

Il connettore Native lega Layer 2 a Layer 1 affinché la window possa esistere, operare, ricevere interazioni e consegnare output nel sistema che la supporta.

### Perché il connettore conta

Il connettore Native impedisce allo Stack di confondere una window con il sistema che la fornisce. Senza questo connettore, Windows dovrebbe contenere direttamente comportamento specifico del sistema, oppure Systems dovrebbe comprendere il concetto di livello superiore della window. Entrambe le direzioni sfumerebbero il confine tra il punto di delivery e l’ambiente che rende possibile la delivery.

Definendo il connettore Native, il Modello dà a questa transizione un luogo proprio.

Windows resta responsabile del contesto delimitato attraverso cui passano output e interaction. Systems resta responsabile dell’ambiente sottostante, dei servizi, dei dispositivi e del comportamento nativo. Il connettore Native gestisce il binding tra i due.

Questo è l’ultimo connettore esplicito dello Stack. È dove l’interfaccia modellata raggiunge il sistema sottostante. Può sembrare accesso alla piattaforma. Può essere implementato tramite librerie native, chiamate del sistema operativo, API di dispositivo o servizi runtime. Ma sotto quelle descrizioni familiari, il suo scopo è più chiaro e semplice.

Il connettore Native fornisce bindings.

Lega la window al sistema, permettendo a output di lasciare lo Stack e a interaction di entrarvi. Così facendo, completa il percorso esplicito tra l’interfaccia modellata e l’ambiente reale in cui quell’interfaccia deve vivere.
