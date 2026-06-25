# 5.9 The Stack :: Human Interface

## Trattazione approfondita

### Il confine umano implicito

**Human Interface** è il confine inferiore implicito dello Stack. Rappresenta l’utente: la persona che riceve output percepibile dal system e produce azioni che possono diventare input di interazione. In termini più semplici, questo livello sei tu.

Può sembrare ovvio, ma conta. Lo Stack esiste per descrivere il processo di comunicazione tra un utente e un sistema informativo. Se Data Storage spiega il confine in cui il contenuto conservato può entrare o uscire dal flusso attivo, Human Interface spiega il confine opposto: il luogo in cui l’output del computer diventa finalmente parte dell’esperienza umana, e in cui l’azione umana inizia il percorso di ritorno verso il system.

Human Interface è implicita perché il Modello non rappresenta direttamente corpo, mente, attenzione, emozioni, sensi, intenzioni, ricordi o scelte dell’utente. CatalystUI può descrivere come un system consegna output verso un utente e come l’azione di un utente diventa input di interazione, ma non finge di modellare l’intero essere umano. Sarebbe leggermente ambizioso. Anche terrificante. Lo Stack è potente, ma non deve diventare un manuale di psicologia con un renderer attaccato.

### Il destinatario dell’output percepibile

Nel flusso dall’alto verso il basso, la Human Interface è la destinataria dell’output percepibile. Digital Data si muove attraverso lo Stack esplicito, viene interpretata, modellata, organizzata, renderizzata, consegnata attraverso una window e portata dal system finché può finalmente essere percepita. Una volta che quell’output raggiunge i sensi dell’utente, lo Stack esplicito ha completato il suo percorso discendente.

Questo non significa che l’utente riceva direttamente Digital Data. Una persona non percepisce naturalmente uni e zeri, buffer di memoria, draw call, campioni audio o eventi di sistema. L’utente percepisce il risultato del lavoro del system: luce, suono, vibrazione, movimento, testo, cambiamento spaziale o un’altra forma di output sensoriale. La Human Interface è dove quell’output smette di essere soltanto consegnato e inizia a essere vissuto.

Questa distinzione mantiene onesto il Modello. Il system può fornire output, ma non può imporre comprensione. Un display può mostrare un pulsante, un altoparlante può riprodurre un suono e un dispositivo può vibrare, ma l’utente deve comunque percepire e interpretare quel risultato come essere umano. Il Modello riconosce questo confine senza tentare di definire ogni fattore personale, biologico o contestuale coinvolto. In altre parole: CatalystUI può portare l’output fino all’essere umano. Non può far smettere all’essere umano di ignorare la notifica. Purtroppo.

### La sorgente dell’interazione

Nel flusso dal basso verso l’alto, la Human Interface è la sorgente dell’azione. L’utente vede, sente, percepisce, comprende, reagisce, decide e poi fa qualcosa. Quell’azione può essere premere un tasto, muovere un puntatore, toccare uno schermo, pronunciare un comando, girare una manopola, camminare attraverso un campo di sensori o compiere un altro comportamento che il system può ricevere.

L’azione stessa inizia fuori dallo Stack esplicito. Il Modello non descrive direttamente il processo interno completo che ha portato l’utente ad agire. Inizia a modellare il percorso di ritorno solo quando il system riceve l’effetto di quell’azione. A quel punto, l’azione diventa input di interazione ed entra in Layer 1: Systems, dove può essere passata verso l’alto attraverso lo Stack.

Questo mantiene una distinzione pulita tra **azione umana** e **interazione di sistema**. Un’azione umana è ciò che fa l’utente. L’input di interazione è ciò che il system riceve da quell’azione. Sono strettamente collegati, ma non sono identici. Una persona può intendere di cliccare una cosa e cliccarne accidentalmente un’altra, oppure sfiorare un tasto mentre cerca qualcos’altro. Il system può ricevere entrambe le cose, ma solo una di esse probabilmente esprime in modo significativo l’intento dell’utente. A meno che l’input accidentale fosse l’obiettivo, nel qual caso congratulazioni: l’interfaccia è entrata in una fase molto sperimentale.

### Perché il livello è implicito

Human Interface è implicita per la stessa ragione per cui Data Storage è implicito: è richiesta dal flusso, ma non viene modellata direttamente come livello esplicito di trasformazione. Lo Stack dipende dall’utente, ma non trasforma l’utente. Non analizza l’utente, non renderizza l’utente, non adatta l’utente e non memorizza l’utente come component. Probabilmente è meglio così.

Il Modello tratta invece la Human Interface come il confine vivente attorno all’estremità inferiore del system. Lo Stack esplicito può descrivere come l’output viene preparato e consegnato, e può descrivere come l’interazione ricevuta viaggia verso l’alto. Si ferma prima di rivendicare possesso sull’esperienza umana stessa.

Questo confine è particolarmente importante perché un utente non è semplicemente un altro dispositivo. Un display fornisce output visivo. Una tastiera fornisce segnali di input. Un utente percepisce, interpreta, sceglie, risponde, fraintende, impara, esita, commette errori e talvolta clicca il pulsante sbagliato con piena fiducia. Il Modello dovrebbe rispettare questa differenza. Human Interface è quindi presente perché lo Stack è costruito per la comunicazione umana, ma implicita perché l’essere umano non fa parte del processo di trasformazione lato macchina.

### Percezione e intento

La Human Interface completa il ciclo di comunicazione unendo percezione e intento. In una direzione, il system fornisce qualcosa di percepibile. Nell’altra, l’utente risponde con un’azione. Questo crea il loop conversazionale al centro di CatalystUI: il system parla attraverso l’output, l’utente risponde attraverso l’interazione e il system elabora quella risposta per continuare lo scambio.

Per questo la Human Interface non può essere ridotta ai dispositivi di input. Tastiera, mouse, touchscreen, microfono, videocamera o controller possono aiutare a catturare l’interazione, ma nessuno di essi è l’utente. Sono percorsi accessibili dal system attraverso cui l’azione dell’utente può entrare nello Stack. La Human Interface è la persona la cui percezione e il cui intento danno significato a quei segnali.

Lo stesso vale per i dispositivi di output. Un monitor, altoparlante, motore aptico o altro dispositivo di output può trasportare dati percepibili, ma il dispositivo non completa l’esperienza. L’esperienza si completa quando l’utente percepisce il risultato. Uno schermo pieno di pixel perfettamente renderizzati non è comunque un’interfaccia riuscita se l’utente non può vedere, capire, raggiungere, udire, sentire o agire su ciò che è stato fornito.

### Relazione con Systems

Human Interface si trova direttamente sotto **Layer 1: Systems**. Il livello System fornisce la gestione finale esplicita lato computer dell’output e la prima gestione esplicita lato computer dell’interazione. Human Interface si trova oltre quel livello come destinataria dell’output di sistema e sorgente dell’azione dell’utente.

Questa relazione definisce il bordo inferiore dello Stack. Nel flusso dall’alto verso il basso, il system consegna output verso l’utente. Nel flusso dal basso verso l’alto, il system riceve l’effetto dell’azione dell’utente. Il system è quindi il livello finale esplicito dell’operazione macchina, mentre Human Interface è il confine implicito in cui l’operazione macchina incontra l’esperienza umana.

Separando questi livelli, il Modello evita di confondere il comportamento del dispositivo con l’esperienza dell’utente. Il system può sapere che un tasto è stato premuto, un puntatore si è mosso o un suono è stato riprodotto. Non sa automaticamente che cosa l’utente ha compreso, inteso, provato o notato. Queste realtà umane appartengono oltre lo Stack esplicito, anche se lo Stack esiste per servirle.

### Accessibilità e variazione umana

Human Interface ricorda anche al Modello che gli utenti non sono macchine intercambiabili. Le persone percepiscono e agiscono attraverso capacità, sensi, contesti, strumenti, limiti, preferenze e ambienti diversi. Un utente può affidarsi principalmente all’output visivo. Un altro può dipendere da output auditivo, feedback tattile, navigazione da tastiera, screen reader, sottotitoli, movimento semplificato, dispositivi di input alternativi o altre forme di accesso.

Questo non cambia la struttura dello Stack. Chiarisce perché lo Stack conta. Separando i livelli, CatalystUI può identificare meglio dove si verifica un fallimento quando l’output viene consegnato ma non è significativamente percepibile, o quando un utente ha un intento ma non ha un percorso utilizzabile per esprimerlo. Il confine Human Interface mantiene visibile lo scopo dell’intero flusso: il system non sta soltanto producendo output; sta comunicando con una persona.

Quella persona può essere stanca, distratta, brillante, confusa, disabile, in apprendimento, multitasking o intenta a finire qualcosa cinque minuti prima di una scadenza. L’interfaccia deve comunque incontrarla come essere umano. Preferibilmente senza costringerla prima a leggere un messaggio di errore di quaranta pagine.

### Perché il livello conta

Human Interface impedisce allo Stack di terminare alla macchina. Senza questo livello implicito, il Modello si fermerebbe all’output di sistema e all’input di sistema, come se lo scopo di un’interfaccia fosse soltanto muovere segnali attraverso l’hardware. Questo perderebbe il punto. Lo scopo dello Stack non è solo produrre output; è rendere possibile la comunicazione tra un sistema informativo e un utente.

Separando Human Interface da Systems, il Modello conserva un confine finale pulito. Systems consegna output e riceve input. Human Interface percepisce output e produce azione. Lo Stack esplicito descrive il processo lato macchina tra queste due direzioni, mentre la Human Interface implicita ci ricorda per chi esiste il processo.

Per questo Human Interface appartiene allo Stack anche se non è numerata. L’utente non è un livello da implementare, renderizzare, analizzare o testare con unit test. L’utente è la ragione per cui i livelli esistono. E, supponendo che l’utente sia umano, il Modello funziona splendidamente.
