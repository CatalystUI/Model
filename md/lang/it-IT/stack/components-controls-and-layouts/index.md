# 5.4 The Stack :: Components, Controls, & Layouts

## Trattazione approfondita

### Il primo livello mutabile dell’interfaccia

**Components, Controls, & Layouts** è il livello in cui la struttura interpretata diventa materiale di interfaccia utilizzabile. Layer 6 spiega che cosa significa una rappresentazione e come è organizzata; Layer 5 trasforma quell’interpretazione stabile in oggetti mutabili che possono essere disposti, aggiornati, usati in interazione e preparati per il resto dello Stack.

Questo è il primo livello in cui il Modello inizia a descrivere l’interfaccia come qualcosa di attivamente utilizzabile, non soltanto compreso. Una structure può spiegare il significato di una risorsa, ma un utente non interagisce direttamente con una structure. L’interfaccia ha bisogno di oggetti che possano esporre valori, rispondere all’intento, mantenere stato temporaneo e partecipare a una disposizione più ampia. Layer 5 fornisce questi oggetti.

### Dall’interpretazione all’uso

Il confine tra **Structure & Semantics** e **Components, Controls, & Layouts** è il confine tra forma interpretata e forma utilizzabile. Layer 6 produce una comprensione stabile del contenuto. Layer 5 adatta quella comprensione in una forma con cui l’interfaccia può lavorare durante il funzionamento attivo.

Questa distinzione conta perché struttura interpretata e comportamento dell’interfaccia non sono la stessa responsabilità. Una structure può identificare che un valore esiste, dove appartiene e quali regole lo governano. Un component può esporre quel valore come qualcosa di regolabile, visualizzabile, riproducibile, selezionabile, modificabile o altrimenti utilizzabile. La structure spiega il contenuto; il component dà all’interfaccia un modo per lavorarci.

Layer 5 quindi non è soltanto un livello visivo. Components, controls e layouts possono esistere in qualunque dominio. Un component può rappresentare testo, suono, feedback aptico, un comando, una sezione di documento, una risorsa multimediale o qualunque altra parte utilizzabile di un’interfaccia. Ciò che definisce il livello non è come l’oggetto verrà infine percepito, ma il fatto che fornisca una forma di interfaccia mutabile costruita da contenuto interpretato.

### Components

Un **component** è una parte logica e mutabile dell’interfaccia creata da, o associata a, una struttura interpretata. Può rappresentare un’immagine, un’etichetta, una traccia audio, un elemento di stile, un comando, una sezione di documento, una risorsa multimediale o un’altra parte utilizzabile dell’interfaccia. Dove una structure riguarda soprattutto il significato stabile, un component riguarda l’uso attivo.

Un component può esporre proprietà, metodi, stato o comportamento che rendono più facile gestire il contenuto sottostante. Può fornire valori che possono essere letti o modificati, operazioni che possono essere eseguite o stato che può essere tracciato mentre l’interfaccia è attiva. Questo permette al resto dello Stack di lavorare con oggetti significativi invece di gestire ripetutamente rappresentazioni grezze o structure immutabili.

Il punto importante è che un component non deve preservare la forma esatta della risorsa originale. Può semplificarla, combinarne parti, esporne soltanto una porzione specifica o fornire un’interfaccia più comoda sopra di essa. Layer 5 può essere pratico perché il suo ruolo non è definire il significato originale del contenuto. Il suo ruolo è rendere quel significato utilizzabile.

### Controls

Un **control** è un component che gestisce l’interazione. Riceve l’interazione instradata dai livelli inferiori dello Stack e determina che cosa debba accadere in risposta. Questo rende i controls uno dei principali punti d’incontro tra il lato dell’interfaccia rivolto all’utente e il lato rivolto al contenuto.

I controls sono responsabili di trasformare l’interazione in comportamento significativo dell’interfaccia. Un control può aggiornare un valore, attivare un’operazione, cambiare stato, richiedere una nuova rappresentazione o non produrre alcun cambiamento. La distinzione essenziale è che un control non esiste semplicemente come parte dell’interfaccia; partecipa alla capacità dell’utente di agire sul sistema.

Poiché i controls sono components, condividono la stessa natura mutabile. Tuttavia, la loro responsabilità definitoria è la gestione dell’interazione. Un component può rappresentare un oggetto utilizzabile senza rispondere direttamente all’intento dell’utente. Un control rappresenta un oggetto utilizzabile che può ricevere, interpretare e agire su quell’intento dentro il flusso dell’interfaccia.

### Layouts

Un **layout** è un component che dispone altri components, inclusi i controls, secondo una qualche forma di ordine, relazione o regola di posizionamento. Nelle interfacce visive, questo può apparire come disposizione spaziale. In altri domini, il layout può descrivere sequenza, raggruppamento, priorità, temporizzazione, categoria, instradamento o un’altra relazione organizzativa.

I layouts contano perché gli oggetti di interfaccia utilizzabili raramente esistono in isolamento. I components hanno bisogno di contesto. Potrebbero dover essere ordinati, raggruppati, allineati, stratificati, sequenziati o altrimenti messi in relazione prima di poter partecipare chiaramente all’esperienza dell’utente. Un layout fornisce quella struttura relazionale senza diventare il gestore di livello superiore dell’interfaccia nel suo complesso.

Questo separa i layouts dai graphs. Un layout dispone components secondo una regola o un pattern specifico. Un graph gestisce scoperta, organizzazione, relazioni e ciclo di vita più ampi attraverso un contesto di interfaccia più grande. Layer 5 fornisce gli oggetti layout stessi; Layer 4 determina come quegli oggetti partecipano al frame operativo più ampio.

### Mutabilità e stato attivo

Layer 5 è mutabile perché le interfacce sono attive. Una volta che il contenuto interpretato diventa parte di un’interfaccia, può dover rispondere a cambiamenti nell’intento dell’utente, nello stato del sistema, nel tempo, nel focus, nella selezione, nella visibilità, nella riproduzione, nell’input o in altre condizioni vive. Components, controls e layouts forniscono un luogo in cui questi cambiamenti attivi possono avvenire.

Questo non significa che Layer 5 sostituisca l’interpretazione stabile fornita da Layer 6. Piuttosto, costruisce su di essa. Un component può mantenere temporaneamente un valore modificato, un control può elaborare una modifica, o un layout può ricalcolare una disposizione, ma quei cambiamenti rimangono comunque collegati al significato interpretato che sta sotto di essi. Quando un cambiamento deve diventare parte della risorsa conservata, il flusso può risalire di nuovo attraverso Structure & Semantics e Digital Data.

La mutabilità permette anche a Layer 5 di rappresentare condizioni temporanee dell’interfaccia che potrebbero non essere mai memorizzate. Un elemento selezionato, una sezione espansa, una posizione di riproduzione, uno stato hover, un target di focus o una modifica in sospeso possono essere molto importanti per l’interfaccia attiva anche se non diventeranno mai parte dello storage permanente. Layer 5 dà allo Stack un luogo chiaro per descrivere queste condizioni vive.

### Ruolo nel flusso dall’alto verso il basso

Nel flusso dall’alto verso il basso, Components, Controls, & Layouts riceve structure interpretata e la trasforma in oggetti di interfaccia utilizzabili. Lo Stack è andato oltre il sapere che cosa significa il contenuto e ora inizia a preparare quel contenuto per interazione, organizzazione e presentazione finale.

A questo stadio, l’interfaccia può decidere quali parti del contenuto interpretato debbano diventare components, quali components debbano poter gestire l’interazione e come quei components debbano essere disposti. Il risultato non è ancora un frame renderizzato o un output di sistema. È un modello di interfaccia attivo che può essere organizzato da Layer 4 e infine preparato per il rendering.

### Ruolo nel flusso dal basso verso l’alto

Nel flusso dal basso verso l’alto, Layer 5 è dove l’interazione instradata diventa comportamento significativo. I livelli inferiori possono rilevare, tradurre e instradare un’azione, ma un control è il punto in cui quell’azione viene finalmente compresa in relazione all’oggetto di interfaccia che influenza.

Quando un control gestisce un’interazione, può aggiornare lo stato di un component, richiedere un cambiamento di layout, attivare un comando o produrre una modifica che deve tornare verso Structure & Semantics. Se quella modifica influenza il contenuto sottostante, Layer 6 può validare e organizzare il cambiamento secondo le regole semantiche rilevanti prima che diventi di nuovo Digital Data. In questo modo, Layer 5 serve come punto di conversione attivo tra intento dell’utente e stato dell’interfaccia.

### Relazione con Graphs & Frames

Layer 5 produce gli oggetti di interfaccia utilizzabili, ma non funge da ambiente completo in cui quegli oggetti operano. Questa responsabilità appartiene a **Layer 4: Graphs & Frames**. Components, controls e layouts hanno bisogno di un contesto più ampio che possa organizzarli, interrogarli, instradare tra loro, prepararli per il rendering e definire i limiti entro cui partecipano.

Questa relazione mantiene pulito il Modello. Layer 5 definisce gli oggetti dell’interfaccia attiva. Layer 4 gestisce la loro organizzazione più ampia e li prepara per i livelli inferiori dello Stack. Un component dovrebbe sapere come rappresentare e gestire il proprio stato utilizzabile; il graph e il frame dovrebbero sapere come quel component si inserisce nel flusso più ampio dell’interfaccia.

### Perché il livello conta

Components, Controls, & Layouts impedisce allo Stack di saltare direttamente dall’interpretazione al rendering. Un sistema non può costruire un’interfaccia chiara limitandosi a comprendere il contenuto e producendo immediatamente output. Deve esserci un livello in cui quel contenuto interpretato diventa utilizzabile, mutabile, disponibile e capace di rispondere all’interazione.

Separando Layer 5 sia da Structure & Semantics sia da Graphs & Frames, il Modello conserva una sequenza precisa di responsabilità. Structure & Semantics definisce il significato stabile. Components, Controls, & Layouts trasforma quel significato in oggetti di interfaccia attivi. Graphs & Frames organizza quegli oggetti in un contesto operativo più ampio. Questa separazione permette a CatalystUI di descrivere interfacce attraverso i domini senza ridurle a widget visivi, structure grezze o comandi specifici di un renderer.
