# 5.2 The Stack :: Digital Data

## Trattazione approfondita

### Il primo livello esplicito

**Digital Data** è il primo livello esplicito dello Stack. Rappresenta contenuto, stato o una risorsa dopo che è entrata nel flusso attivo dell’interfaccia in una forma leggibile dal computer, ma prima che il Modello abbia applicato Structure & Semantics o l’abbia trasformata in componenti, layout, rendering o presentazione. È il punto in cui la disponibilità conservata diventa qualcosa con cui lo Stack può iniziare a lavorare direttamente.

Questo livello è esplicito perché il Modello può ora descrivere la risorsa come parte del processo dell’interfaccia. Mentre Data Storage spiega dove qualcosa può persistere fuori dal flusso attivo, Digital Data spiega la rappresentazione attiva che è stata letta, ricevuta, caricata, trasmessa in streaming, generata o altrimenti resa disponibile allo Stack. Non è più soltanto disponibile da qualche parte. Ora è presente in una forma che il sistema può elaborare.

### Rappresentazione leggibile dal computer

Digital Data è definita dalla sua capacità di essere rappresentata in binario ed elaborata da una macchina. A questo livello, la risorsa può essere mantenuta come byte, testo codificato, risposta ricevuta, buffer di memoria, stream o un’altra rappresentazione leggibile dalla macchina. Il contenitore esatto è meno importante del ruolo che svolge: è la forma attiva della risorsa prima dell’interpretazione.

Questo significa che Digital Data non deve essere confusa con significato, struttura o presentazione. Una sequenza di byte può contenere un documento, un’immagine, un comando, una configurazione o un file audio, ma Layer 7 non descrive ancora come quella sequenza debba essere compresa. Stabilisce solo che il contenuto esiste dentro lo Stack in una forma a cui il sistema può accedere e che può passare al livello successivo.

### Prima di Structure and Semantics

Digital Data si trova immediatamente sopra **Layer 6: Structure & Semantics** perché rappresenta il materiale che Structure & Semantics interpreterà. Finché quell’interpretazione non avviene, lo Stack non ha ancora identificato le regole, relazioni, campi, sezioni o significati contenuti nella rappresentazione. La risorsa può già seguire un formato, ma il Modello non ha ancora applicato quel formato.

Un documento memorizzato può essere già valido secondo il proprio formato, e un file può già contenere contenuto organizzato, ma Layer 7 non modella ancora quell’organizzazione come struttura compresa. Nel momento in cui lo Stack inizia ad applicare le regole su come la rappresentazione deve essere letta, il flusso si è spostato in Structure & Semantics. Digital Data quindi non è priva di significato; semplicemente non è ancora interpretata dentro lo Stack.

### Il punto di svolta superiore

Digital Data agisce come punto di svolta superiore dello Stack esplicito. Nel flusso dall’alto verso il basso, è dove lo Stack inizia a trasformare una rappresentazione leggibile dal computer in qualcosa che l’utente potrà infine percepire o con cui potrà interagire. Il flusso inizia con una rappresentazione attiva, poi scende attraverso interpretazione, formazione di componenti, organizzazione, rendering, windowing e consegna del sistema.

Nel flusso dal basso verso l’alto, Digital Data è dove il risultato di un’interazione torna a essere leggibile dalla macchina. Un’azione dell’utente può essere instradata, gestita e convertita in un cambiamento dentro l’interfaccia. Quel cambiamento può poi risalire lo Stack finché diventa Digital Data: una rappresentazione attiva che può essere conservata, trasmessa, confrontata, rigenerata o restituita a Data Storage. In questo modo, Layer 7 partecipa a entrambe le direzioni del ciclo dell’interfaccia.

### Digital Data e Domains

Digital Data è spesso strettamente collegata al dominio **Symbolic** perché di solito esiste prima che sia stata scelta una forma sensoriale specifica. Un file di testo, per esempio, può in seguito essere mostrato visivamente, letto ad alta voce, tradotto in un altro formato o elaborato senza essere presentato direttamente. A Layer 7, il fatto importante non è come l’utente lo percepirà alla fine, ma che la rappresentazione è disponibile perché lo Stack la interpreti.

Questo non significa che Digital Data possa essere solo simbolica. Una risorsa può contenere contenuto visivo, auditivo, tattile o multisensoriale nella sua forma codificata. Tuttavia, il livello stesso descrive la rappresentazione leggibile dal computer prima che lo Stack attivo l’abbia trasformata in un risultato percepibile o interattivo. I Domains identificano il tipo di informazione gestita; lo Stack identifica dove si trova quell’informazione nel flusso.

### Perché il livello conta

Digital Data impedisce al Modello di saltare il primo passo attivo del lavoro di interfaccia. Senza questo livello, lo Stack passerebbe direttamente dallo storage all’interpretazione, come se le risorse memorizzate portassero automaticamente una struttura utilizzabile nel momento in cui vengono accedute. Nei sistemi reali non è così. Qualcosa deve prima esistere in una forma attiva leggibile dalla macchina prima di poter essere analizzato, validato, organizzato, adattato, renderizzato o presentato.

Separando Digital Data sia da Data Storage sia da Structure & Semantics, il Modello conserva tre distinzioni importanti. Data Storage spiega la persistenza fuori dal flusso attivo. Digital Data spiega la rappresentazione attiva leggibile dal computer dentro il flusso. Structure & Semantics spiega l’interpretazione di quella rappresentazione. Tenere separate queste responsabilità permette allo Stack di descrivere il comportamento dell’interfaccia con maggiore precisione, specialmente quando la stessa risorsa memorizzata può essere letta, interpretata, trasformata o presentata in più modi.
