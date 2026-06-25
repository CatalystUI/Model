# 5.3 The Stack :: Structure & Semantics

## Trattazione approfondita

### Il primo livello interpretativo

**Structure & Semantics** è il livello in cui Digital Data diventa comprensibile per la prima volta dentro lo Stack. Layer 7 fornisce una rappresentazione attiva leggibile dal computer, ma quella rappresentazione non si spiega da sola. Prima che il resto dell’interfaccia possa usarla, il sistema deve sapere che tipo di rappresentazione è, quali regole la governano e come devono essere comprese le sue parti interne.

Questo è lo scopo di Layer 6. Prende una rappresentazione attiva da Digital Data e le dà una forma significativa. A questo punto, lo Stack non si occupa ancora di componenti, controlli, layout, rendering o presentazione. Si occupa di interpretazione: come la rappresentazione deve essere letta, quali relazioni esistono al suo interno e quale forma può essere passata in sicurezza al livello successivo.

### Semantics

**Semantics** definisce le regole con cui una rappresentazione deve essere compresa. Descrive il significato atteso, l’ordine, il formato e le relazioni del contenuto interpretato. In questo senso, Semantics agisce come un contratto. Non deve contenere la rappresentazione attiva stessa; definisce piuttosto come quella rappresentazione dovrebbe essere letta.

Questa distinzione conta perché Digital Data può contenere pattern riconoscibili senza che lo Stack sappia ancora cosa significano. Una sequenza di byte, caratteri, campi o record può seguire un formato noto, ma il Modello non tratta quel formato come applicato fino a Layer 6. Semantics fornisce l’insieme di regole che rende possibile l’interpretazione.

Semantics può definire regole ampie, come la forma attesa di un documento, formato file, messaggio, risposta, configurazione o risorsa. Può anche definire aspettative interne più piccole, come l’ordine di un campo, il modo in cui una sezione viene riconosciuta, quali valori sono validi o come una parte si collega a un’altra. Il punto importante è che Semantics definisce il significato prima che l’interfaccia inizi a trasformare quel significato in parti utilizzabili.

### Structure

Una **Structure** è il risultato organizzato dell’applicazione di Semantics a Digital Data. Dove Semantics definisce come qualcosa deve essere compreso, una Structure rappresenta ciò che è stato compreso da una specifica rappresentazione attiva. È la forma modellata del contenuto dopo che le regole rilevanti sono state applicate.

Structure permette al resto dello Stack di lavorare con la rappresentazione senza tornare ripetutamente alla forma grezza. Invece di trattare la risorsa come una sequenza non interpretata, il sistema può ora lavorare con sezioni, valori, relazioni o record organizzati. Questo non rende ancora la risorsa interattiva. Significa soltanto che il contenuto ha ricevuto una forma stabile che l’interfaccia può usare come base.

Nel Modello, Structure è legata a una particolare interpretazione. Se gli stessi Digital Data possono essere compresi attraverso più di un insieme di Semantics, allora da essi possono essere prodotte più Structure. Allo stesso modo, se la rappresentazione sottostante cambia, la Structure risultante deve riflettere quella nuova interpretazione. Structure quindi non è semplicemente “i dati in memoria”. È la forma interpretata di una specifica rappresentazione secondo specifiche regole semantiche.

### Interpretazione stabile

Structure & Semantics dovrebbe essere trattata come stabile in un dato passaggio attraverso lo Stack. Questo livello rappresenta un’interpretazione già stabilita, non un oggetto di interfaccia mutabile manipolato attivamente dall’utente. Una volta che Digital Data è stata interpretata in Structure, quella Structure fornisce una base affidabile per i livelli successivi.

Questa stabilità è ciò che separa Layer 6 da **Layer 5: Components, Controls, & Layouts**. Layer 5 introduce oggetti di interfaccia mutabili e orientati all’essere umano, che possono essere disposti, aggiornati, usati in interazione e instradati nel resto dell’interfaccia. Layer 6 non svolge quel ruolo. Spiega cosa significa il contenuto e come è organizzato prima che l’interfaccia lo trasformi in componenti utilizzabili.

Questo non significa che la risorsa sottostante non possa mai cambiare. Significa che, quando avviene un cambiamento, il Modello dovrebbe riconoscere una nuova o aggiornata interpretazione invece di trattare la Structure originale come una superficie di controllo infinitamente mutabile. Layer 6 fornisce la base interpretata; Layer 5 fornisce l’interfaccia mutabile costruita su di essa.

### Relazione con Digital Data

Il confine tra Digital Data e Structure & Semantics è il confine tra rappresentazione attiva e forma interpretata. Digital Data dice: “Questa risorsa è ora presente dentro lo Stack in una forma leggibile dal computer.” Structure & Semantics dice: “Questo è il modo in cui quella rappresentazione viene compresa.”

Questo impedisce a Layer 7 di portare responsabilità che appartengono all’interpretazione. Un file, stream, risposta o buffer può essere già codificato secondo un formato, ma la codifica da sola non è la stessa cosa dell’interpretazione nel Modello. Layer 6 inizia quando lo Stack applica le regole rilevanti e produce una forma organizzata utilizzabile dal resto dell’interfaccia.

### Relazione con Components, Controls, & Layouts

Structure & Semantics protegge anche Layer 5 dal dover comprendere direttamente ogni rappresentazione grezza. Components, controls e layouts non dovrebbero essere costretti ad analizzare byte, decodificare formati, validare l’ordine dei campi o determinare il significato di base di una risorsa ogni volta che vengono usati. Dovrebbero ricevere una forma già interpretata che può essere adattata in oggetti di interfaccia orientati all’essere umano.

Questa separazione permette a Layer 5 di concentrarsi su usabilità, interazione e disposizione. Una component può esporre una proprietà comoda, un control può rispondere all’intento dell’utente e un layout può organizzare parti visibili o non visibili di un’interfaccia. Quelle responsabilità dipendono dal significato, ma non definiscono il significato da zero. Layer 6 fornisce la comprensione strutturata che le rende possibili.

### Ruolo nel flusso

Nel flusso dall’alto verso il basso, Structure & Semantics riceve Digital Data e li interpreta in una forma organizzata stabile. Questo è il momento in cui lo Stack inizia a passare da una rappresentazione grezza leggibile dal computer verso materiale di interfaccia utilizzabile. Il risultato può poi essere trasformato in components, controls e layouts adatti all’interazione e all’ulteriore organizzazione.

Nel flusso dal basso verso l’alto, Structure & Semantics riceve cambiamenti prodotti attraverso l’interazione e li prepara a diventare di nuovo Digital Data. Un control può modificare un valore, aggiornare una sezione, creare un record, rimuovere contenuto o produrre un altro cambiamento. Prima che quel risultato possa tornare a Digital Data, deve ancora conformarsi alle regole semantiche rilevanti. Layer 6 quindi aiuta a garantire che il risultato rimanga significativo prima di essere rappresentato di nuovo in forma leggibile dalla macchina.

### Perché il livello conta

Structure & Semantics impedisce allo Stack di confondere accesso e comprensione. Digital Data può essere disponibile al sistema, ma disponibilità non significa che l’interfaccia sappia come usarla. Layer 6 fornisce il passaggio interpretativo mancante: definisce cosa significa la rappresentazione e la organizza in una forma su cui i livelli successivi possono costruire in sicurezza.

Separando Semantics, Structure e Components, il Modello preserva una progressione pulita. Digital Data fornisce la rappresentazione attiva. Semantics definisce come quella rappresentazione deve essere compresa. Structure fornisce il risultato organizzato di quella comprensione. Components, Controls, & Layouts trasformano poi quella forma interpretata in oggetti di interfaccia mutabili. Questa distinzione mantiene preciso lo Stack, impedisce alla logica di parsing di filtrare in ogni livello e permette alla stessa rappresentazione sottostante di supportare diverse forme di interazione, presentazione e trasformazione.
