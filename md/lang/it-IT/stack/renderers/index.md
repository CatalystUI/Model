# 5.6 The Stack :: Renderers

## Trattazione approfondita

### Il livello trasformazionale

I **Renderers** sono il livello in cui lo stato organizzato dell’interfaccia viene trasformato in una forma pronta per l’output. Layer 4 fornisce graphs e frames: un contesto operativo preparato che descrive che cosa debba essere inviato verso il basso, come sia organizzato e quale stato corrente debba essere rappresentato. Layer 3 riceve quel contesto preparato e lo converte in una forma adatta alla consegna attraverso una window e, infine, attraverso il system.

Questo livello si chiama rendering perché esegue la trasformazione attiva dalla rappresentazione dell’interfaccia all’output percepibile. Un renderer non si limita a memorizzare l’interfaccia, interpretare il suo contenuto originale o gestire le relazioni tra components. La sua responsabilità è prendere il risultato preparato dai livelli superiori e produrre l’output specifico del dominio necessario ai livelli inferiori dello Stack.

### Rendering come conversione

In CatalystUI, il rendering non è limitato alla grafica. Un renderer visivo può convertire lo stato preparato dell’interfaccia in pixel, comandi di disegno, texture, glifi o altro output visivo. Un renderer auditivo può convertire lo stato preparato in forme d’onda, campioni, tracce o output audio mixato. Un renderer tattile può convertire lo stato preparato in pattern aptici. Il dominio specifico può cambiare, ma il ruolo del livello rimane lo stesso: il rendering converte una rappresentazione organizzata dell’interfaccia in output che il sistema può consegnare.

Questa distinzione mantiene il Modello più ampio del pensiero tradizionale sulle interfacce grafiche. Un renderer non è definito dal fatto che disegni su uno schermo. È definito dal fatto che trasformi stato preparato dell’interfaccia in una forma di output di livello inferiore. Il risultato potrà infine essere visto, udito, sentito o altrimenti percepito, ma a Layer 3 il focus è la trasformazione stessa.

### Relazione con Graphs & Frames

I Renderers dipendono da **Graphs & Frames** perché non dovrebbero essere responsabili di comprendere l’intero modello dell’interfaccia. Layer 4 risolve il contesto operativo corrente, organizza components, prepara limiti, determina lo stato rilevante e fornisce un frame adatto al rendering. Layer 3 trasforma poi quel frame preparato in una forma pronta per l’output.

Questa separazione conta perché organizzazione e rendering sono responsabilità diverse. Un graph può sapere come i components si relazionano tra loro, e un frame può sapere che cosa il passaggio corrente dovrebbe contenere. Un renderer dovrebbe sapere come trasformare quel contesto preparato nella rappresentazione di output appropriata. Quando queste responsabilità rimangono separate, il renderer può restare specializzato ed efficiente senza diventare il gestore globale dell’interfaccia.

### Relazione con Windows

I Renderers dipendono anche da **Layer 2: Windows** perché l’output renderizzato ha bisogno di un target di consegna. Un renderer può produrre comandi, buffer, stream o altre rappresentazioni pronte per l’output, ma quei risultati hanno comunque bisogno di un luogo dove andare. La window fornisce la vista, il canale o la superficie di consegna delimitata attraverso cui l’output renderizzato può essere portato verso il system.

Questo rende il renderer il punto di conversione attivo tra il modello superiore dell’interfaccia e il modello inferiore di consegna. Sopra di esso, lo Stack riguarda soprattutto significato, usabilità, organizzazione e stato attivo. Sotto di esso, lo Stack riguarda il passaggio dell’output attraverso una window e dentro il system. Layer 3 sta tra queste preoccupazioni e converte l’una nell’altra.

### Responsabilità specifica del dominio

I Renderers sono specifici del dominio per natura. Un renderer deve comprendere il tipo di output che produce perché domini diversi richiedono forme diverse di trasformazione. Output visivo, auditivo, tattile e altre forme sensoriali non condividono gli stessi requisiti di consegna, anche quando sono prodotte dallo stesso stato concettuale dell’interfaccia.

Questo non significa che i livelli superiori debbano essere riscritti per ogni dominio. Una delle forze dello Stack è che i livelli superiori possono descrivere contenuto, interazione, organizzazione e stato in modo coerente permettendo ai renderers di specializzarsi nel punto in cui la conversione specifica del dominio diventa necessaria. Il renderer è il luogo in cui quella specializzazione diventa esplicita.

Una singola interfaccia può anche coinvolgere più di un renderer quando più forme di output vengono gestite separatamente. In quei casi, ogni renderer è responsabile della trasformazione richiesta dal proprio dominio, mentre lo Stack circostante preserva il flusso più ampio dell’interazione.

### Rendering e percepibilità

Un renderer prepara l’output per la percezione, ma non è la stessa cosa della percezione stessa. L’utente non percepisce direttamente il renderer. Il renderer produce una forma che può essere passata attraverso una window e un system finché diventa percepibile tramite un dispositivo, canale o output fisico.

Questa distinzione è importante perché il rendering fa ancora parte del processo di trasformazione lato computer. Un renderer visivo può produrre dati pixel, ma l’utente percepisce la luce di un display. Un renderer auditivo può produrre campioni audio, ma l’utente percepisce suono attraverso altoparlanti o cuffie. Layer 3 prepara l’output; i livelli inferiori lo consegnano.

### Ruolo nel flusso dall’alto verso il basso

Nel flusso dall’alto verso il basso, i Renderers ricevono un frame preparato da Layer 4 e lo convertono in una forma pronta per l’output. Questo è il punto in cui il modello attivo dell’interfaccia inizia a lasciare l’organizzazione astratta dei components ed entra nel percorso concreto di consegna del system.

Il renderer può trasformare lo stato dei components in operazioni di disegno, buffer audio, istruzioni aptiche o un’altra rappresentazione specifica del dominio. Una volta avvenuta quella trasformazione, il risultato viene passato al livello Window, che fornisce il canale o la vista delimitata attraverso cui il system può consegnare l’output.

### Ruolo nel flusso dal basso verso l’alto

Nel flusso dal basso verso l’alto, i Renderers possono anche partecipare all’interpretazione o trasformazione dei dettagli dell’interazione prima che tornino ai livelli superiori. Un’interazione può arrivare dal system attraverso una window in una forma che deve essere aggiustata, tradotta, associata a una regione renderizzata o convertita in una rappresentazione che graph e frame possano instradare.

Questo non rende il renderer il gestore finale dell’interazione. Quella responsabilità appartiene al control appropriato in Layer 5. Tuttavia, poiché il renderer comprende come l’interfaccia è stata trasformata in output, può fornire contesto necessario per invertire o mappare parte di quella trasformazione. Per esempio, può aiutare a collegare un’interazione di livello inferiore a una posizione renderizzata, regione di output, punto temporale o target specifico del dominio prima che Layer 4 la instradi verso l’alto.

### Perché il livello conta

I Renderers impediscono allo Stack di trattare l’output come una conseguenza diretta degli oggetti organizzati dell’interfaccia. Un frame può descrivere che cosa dovrebbe essere rappresentato, ma non diventa automaticamente output percepibile. Qualcosa deve trasformare quel contesto preparato in una forma che i livelli inferiori possano consegnare. Layer 3 fornisce quella trasformazione.

Separando i Renderers sia da Graphs & Frames sia da Windows, il Modello conserva una divisione pulita di responsabilità. Graphs & Frames organizza il contesto corrente dell’interfaccia. I Renderers convertono quel contesto in una forma pronta per l’output. Windows fornisce il canale delimitato attraverso cui quell’output raggiunge il system. Questa distinzione permette a CatalystUI di descrivere il rendering attraverso i domini senza ridurre il rendering alla grafica, costringere le windows a eseguire trasformazioni o richiedere agli oggetti superiori dell’interfaccia di sapere come verranno infine consegnati.
