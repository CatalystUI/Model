# 5.5 The Stack :: Graphs & Frames

## Trattazione approfondita

### Il livello organizzativo

**Graphs & Frames** è il livello in cui gli oggetti di interfaccia utilizzabili vengono organizzati in un contesto operativo più ampio. Layer 5 fornisce components, controls e layouts come oggetti mutabili, ma questi oggetti non formano automaticamente un’interfaccia completa solo perché esistono insieme. Hanno bisogno di un modo per essere scoperti, messi in relazione, interrogati, ordinati, instradati, delimitati e preparati per i livelli inferiori dello Stack.

Questo è lo scopo di Layer 4. Riceve da Layer 5 gli oggetti attivi dell’interfaccia e stabilisce il contesto più ampio in cui operano. Un component può sapere come rappresentare il proprio stato, un control può sapere come gestire un’interazione e un layout può sapere come disporre un gruppo di components, ma Layer 4 determina come quei pezzi partecipano all’interfaccia nel suo complesso.

### Graphs

Un **graph** descrive relazioni organizzate tra components, controls e layouts. Fornisce la struttura necessaria per capire come gli oggetti di interfaccia si relazionano tra loro, come possono essere individuati e come possono essere attraversati o interrogati durante il funzionamento attivo.

Questo rende un graph distinto da un layout. Un layout dispone components secondo una regola o un pattern particolare. Un graph gestisce lo spazio di relazione più ampio in cui layouts e components esistono. Può descrivere relazioni genitore-figlio, proprietà, dipendenza, raggruppamento, ordinamento, percorsi di focus, percorsi di instradamento o altre forme di connessione che aiutano l’interfaccia a funzionare come un sistema coerente.

Un graph fornisce anche un modo pratico per localizzare e gestire oggetti di interfaccia senza costringere ogni component a conoscere ogni altro component. I components possono restare concentrati sul proprio stato utilizzabile, mentre il graph fornisce la struttura circostante necessaria per scoperta, coordinamento e instradamento. Questo impedisce all’interfaccia di diventare una raccolta di oggetti isolati o un insieme aggrovigliato di riferimenti diretti.

### Frames

Un **frame** descrive il contesto operativo corrente più ampio preparato per i livelli inferiori dello Stack. Dove un graph organizza gli oggetti di interfaccia e le loro relazioni, un frame contiene e coordina lo stato rilevante di quell’organizzazione in una forma che può essere passata verso rendering, output o elaborazione di livello inferiore.

Il frame agisce come il confine principale tra il mondo dell’interfaccia orientato agli oggetti di Layer 5 e il mondo orientato al rendering di Layer 3. Non contiene semplicemente components; li prepara. Questa preparazione può includere la risoluzione dei limiti, l’applicazione dei risultati di layout, la raccolta di elementi renderizzabili, l’ordinamento dell’output, il tracciamento dello stato corrente dell’interfaccia o la produzione di una rappresentazione temporanea di ciò su cui il renderer dovrebbe lavorare.

Un frame dovrebbe essere inteso come contestuale piuttosto che permanente. Rappresenta la condizione corrente dell’interfaccia per un passaggio, aggiornamento, rendering o operazione di instradamento particolare. Quando l’interfaccia cambia, possono essere prodotti nuovi frames o stati di frame aggiornati. Questo permette allo Stack di descrivere il funzionamento vivo senza confondere lo stato temporaneo di presentazione con contenuto memorizzato o structure interpretata.

### Relazione tra Graphs e Frames

Graphs e frames lavorano insieme perché un’interfaccia ha bisogno sia di relazione sia di contesto. Il graph spiega come gli oggetti di interfaccia sono connessi. Il frame spiega che cosa i livelli inferiori dovrebbero ricevere da quegli oggetti connessi in un momento particolare.

Questa distinzione conta perché organizzazione e preparazione non sono lo stesso compito. Un graph può contenere le relazioni necessarie per trovare un control, comprendere una gerarchia di layout o determinare quale component appartenga a quale regione dell’interfaccia. Un frame può prendere il risultato corrente di quell’organizzazione e prepararlo per il rendering o l’instradamento dell’interazione. Il graph fornisce la mappa; il frame fornisce il passaggio corrente attraverso quella mappa.

Insieme, impediscono a Layer 4 di diventare una raccolta passiva di components o una lista di comandi specifica per il renderer. Rimane il livello organizzativo e contestuale dello Stack: abbastanza vicino a Layer 5 da comprendere gli oggetti di interfaccia, ma abbastanza vicino a Layer 3 da prepararli per la trasformazione di livello inferiore.

### Preparazione per il rendering

Nel flusso dall’alto verso il basso, Graphs & Frames riceve components, controls e layouts da Layer 5 e li prepara per il Renderer. Questo non significa che Layer 4 esegua il rendering. Il rendering appartiene a Layer 3. Layer 4 determina che cosa debba essere inviato verso il basso, in quale relazione, entro quali limiti e in quale stato corrente.

Questa preparazione è necessaria perché un renderer non dovrebbe essere responsabile di comprendere il significato completo di ogni component, control o layout. Il renderer ha bisogno di una forma preparata che possa trasformare in output percepibile. Layer 4 preserva l’organizzazione dell’interfaccia mentre riduce il modello attivo degli oggetti in qualcosa con cui il renderer può lavorare.

Facendo questo, Layer 4 permette ai renderers di restare specializzati. Un renderer può concentrarsi sulla trasformazione in output specifico del dominio senza diventare anche il gestore di livello superiore delle relazioni tra components, della gerarchia dei layout, dei target di interazione e dello stato attivo dell’interfaccia.

### Instradamento delle interazioni

Nel flusso dal basso verso l’alto, Graphs & Frames aiuta a instradare le interazioni verso i controls appropriati. I livelli inferiori possono identificare che un’interazione è avvenuta e possono fornire dettagli come posizione, temporizzazione, sorgente del dispositivo, contesto di focus o altro stato di input rilevante. Layer 4 usa il contesto del graph e del frame per determinare dove quell’interazione appartiene.

Questo ruolo di instradamento è una delle ragioni più chiare per cui Layer 4 deve esistere. Un control può sapere come gestire un’interazione una volta ricevuta, ma qualcosa deve determinare quale control debba riceverla. Il graph fornisce la struttura relazionale, mentre il frame fornisce il contesto operativo corrente. Insieme, permettono allo Stack di instradare l’intento attraverso l’interfaccia invece di limitarsi a passare input verso l’alto senza direzione.

Questo significa anche che Layer 4 partecipa sia alla preparazione dell’output sia alla risoluzione dell’input. Prepara in una direzione lo stato organizzato dell’interfaccia per il rendering e nell’altra aiuta a risolvere l’interazione instradata. Lo stesso livello che sa come l’interfaccia è attualmente disposta è anche il livello nella posizione migliore per determinare come un’interazione dovrebbe viaggiare all’indietro attraverso quella disposizione.

### Relazione con Components, Controls, & Layouts

Layer 4 dipende da Layer 5 per gli oggetti attivi dell’interfaccia che organizza. Components, controls e layouts forniscono le parti utilizzabili dell’interfaccia, ma Layer 4 determina come quelle parti formino un insieme più ampio. Questo evita che i singoli components diventino responsabili della gestione globale dell’interfaccia.

La separazione protegge anche i layouts dal diventare troppo ampi. Un layout può disporre un gruppo di components, ma non deve gestire ogni relazione nell’interfaccia. Non deve agire come l’intero sistema di instradamento, coordinatore del ciclo di vita o confine di rendering. Layer 4 fornisce quell’organizzazione di livello superiore così che i layouts possano restare concentrati sulla disposizione.

### Relazione con il Renderer

Layer 4 protegge anche il Renderer da responsabilità che non appartengono al rendering. Senza Graphs & Frames, il renderer dovrebbe comprendere alberi di components, relazioni di layout, instradamento dei controls, risoluzione dei limiti e contesto attivo dell’interfaccia prima di poter produrre output. Questo renderebbe il rendering responsabile di una parte eccessiva del modello dell’interfaccia.

Ponendo Graphs & Frames tra Layer 5 e Layer 3, lo Stack crea un passaggio pulito. Layer 5 fornisce oggetti di interfaccia utilizzabili. Layer 4 organizza e prepara quegli oggetti. Layer 3 trasforma la rappresentazione preparata in output percepibile. Ogni livello rimane concentrato su una parte distinta del processo.

### Perché il livello conta

Graphs & Frames impedisce allo Stack di trattare un’interfaccia come una raccolta sciolta di components o come un problema diretto di rendering. Un’interfaccia utilizzabile richiede organizzazione prima di poter essere renderizzata e instradamento prima di poter rispondere coerentemente all’interazione. Layer 4 fornisce la struttura necessaria per entrambe le cose.

Separando Layer 4 da Components, Controls, & Layouts e dal Renderer, il Modello conserva una progressione pulita di responsabilità. Components, controls e layouts definiscono gli oggetti attivi dell’interfaccia. Graphs e frames organizzano quegli oggetti in un contesto operativo corrente. Il Renderer poi trasforma quel contesto preparato in output percepibile. Questa distinzione permette a CatalystUI di descrivere interfacce complesse senza costringere i components a gestire l’intero sistema o i renderers a comprendere l’intero modello dell’interfaccia.
