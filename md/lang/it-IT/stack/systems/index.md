# 5.8 The Stack :: Systems

## Trattazione approfondita

### Il livello esplicito più basso

I **Systems** sono il livello esplicito più basso dello Stack. Questo livello rappresenta l’ambiente di calcolo che fornisce i servizi, dispositivi e operazioni sottostanti necessari perché l’output venga consegnato e l’interazione venga ricevuta. Dove Layer 2 definisce il contesto delimitato attraverso cui passano output e interazione, Layer 1 rappresenta l’ambiente più ampio che rende possibile quel contesto.

Un system non dovrebbe essere inteso soltanto come sistema operativo desktop. Nel Modello CatalystUI, un system è l’insieme organizzato di processi e capacità di piattaforma che sostiene l’interfaccia a runtime. Può essere un sistema operativo tradizionale, un ambiente embedded, una console, un runtime browser, una piattaforma hardware o un altro contesto di calcolo gestito. La caratteristica definitoria non è la categoria del prodotto. La caratteristica definitoria è che il system fornisce le capacità di livello inferiore attraverso cui l’interfaccia può effettivamente operare.

### L’ambiente operativo

Il livello System fornisce l’ambiente di esecuzione circostante per lo Stack esplicito. Può gestire accesso all’hardware, dispositivi di input, dispositivi di output, driver, permessi, scheduling, memoria, file, processi, windows, canali o altri servizi a livello di piattaforma. Questi dettagli variano molto tra le implementazioni, ma svolgono tutti lo stesso ruolo concettuale: permettono all’interfaccia di connettersi con le capacità reali della macchina o del sistema informativo.

Questo rende Layer 1 diverso da Layer 2. Una window è un contesto delimitato rivolto al system usato dall’interfaccia. Il system è l’ambiente più ampio che crea, possiede, riconosce, vincola e serve quel contesto. La window fornisce un punto specifico di connessione; il system fornisce il mondo in cui quella connessione esiste.

Per questo, il livello System non è soltanto una fondazione passiva. Partecipa attivamente al ciclo dell’interfaccia. Consegna l’output renderizzato verso dispositivi fisici o logici, riceve input da quei dispositivi, applica regole di piattaforma ed espone le operazioni da cui dipendono i livelli superiori. Lo Stack può descrivere il flusso dell’interfaccia, ma il system fornisce il terreno operativo sotto quel flusso.

### Relazione con Windows

Systems e Windows sono strettamente connessi, ma non sono lo stesso livello. Una window riceve output renderizzato da Layer 3 e fornisce un contesto di consegna delimitato. Il system riceve quell’output finestrato ed esegue il lavoro di livello inferiore necessario per consegnarlo attraverso dispositivi o servizi disponibili.

Nel flusso dall’alto verso il basso, la window passa output nel system. Il system poi gestisce il percorso effettivo di consegna: invia output visivo verso un display, output audio verso un dispositivo sonoro, output tattile verso un dispositivo aptico, output testuale verso un terminale o un’altra forma di output verso il suo canale appropriato. La window definisce dove l’output appartiene; il system lo porta nell’ambiente capace di renderlo percepibile.

Nel flusso dal basso verso l’alto, il system riceve o rileva interazione dal lato umano dell’interfaccia. Questa può arrivare attraverso tastiera, puntatore, touchscreen, microfono, controller, sensore, pulsante o un altro percorso di input. Il system converte quell’attività fisica o a livello di dispositivo in un segnale a livello di sistema che può essere associato a una window e passato verso l’alto attraverso lo Stack.

### Consegna dell’output

Il livello System è lo stadio esplicito finale del flusso dall’alto verso il basso. Quando l’output raggiunge Layer 1, i livelli superiori hanno già interpretato la rappresentazione originale, formato oggetti di interfaccia utilizzabili, organizzato quegli oggetti in un contesto operativo corrente, renderizzato quel contesto in una forma pronta per l’output e passato il risultato attraverso una window. Il system ora esegue il lavoro a livello di piattaforma necessario per rendere quell’output disponibile alla Human Interface.

Questo non significa che il system stesso sia uguale alla percezione dell’utente. L’utente non percepisce direttamente un sistema operativo. L’utente percepisce il risultato fisico o sensoriale reso disponibile attraverso dispositivi e canali gestiti dal system. Layer 1 quindi rimane dentro il processo lato computer, mentre la Human Interface implicita si trova oltre, come destinataria dell’output.

Questa distinzione mantiene preciso il Modello. Il system può produrre luce attraverso un display, suono attraverso altoparlanti, vibrazione attraverso un motore o un altro risultato percepibile attraverso qualche dispositivo o servizio. Il system fornisce il meccanismo esplicito finale di consegna; la Human Interface riceve e percepisce il risultato.

### Origine dell’interazione

Il livello System è anche il primo stadio esplicito del flusso dal basso verso l’alto. Un utente compie un’azione fuori dallo Stack esplicito, ma il system è il luogo in cui quell’azione diventa disponibile all’interfaccia modellata come input di interazione. L’azione umana in sé appartiene alla Human Interface implicita. Il system riceve l’effetto di quell’azione attraverso un percorso di input supportato e inizia a convertirlo in qualcosa che lo Stack può elaborare.

Questo è il motivo per cui il system è strettamente legato all’interazione. Una pressione fisica di tasto, movimento del puntatore, gesto touch, input parlato, segnale di controller o cambiamento di sensore deve prima essere ricevuto dall’ambiente di calcolo prima che i livelli superiori dell’interfaccia possano rispondere. Il system di solito non determina il significato finale di quell’interazione. Identifica che qualcosa è accaduto, fornisce contesto rilevante di dispositivo o piattaforma e passa l’interazione verso la window appropriata.

Da lì, l’interazione può viaggiare verso l’alto attraverso lo Stack. La window la associa a un contesto delimitato, il renderer può aiutare a tradurla o mapparla, il graph e il frame possono instradarla, e il control appropriato può finalmente gestirla. Il system avvia il percorso esplicito di ritorno, ma il significato dell’azione viene risolto più in alto nello Stack.

### Regole e vincoli di piattaforma

I Systems contano perché ogni interfaccia opera dentro vincoli. Un system può determinare quali dispositivi sono disponibili, come vengono create le windows, come viene consegnato l’input, come vengono concessi i permessi, come si comportano i canali di output, quali risorse possono essere accessibili e quali operazioni sono supportate. Questi vincoli modellano ciò che il resto dello Stack può fare.

Tuttavia, CatalystUI separa queste preoccupazioni di piattaforma dal modello superiore dell’interfaccia. I components non dovrebbero dover comprendere direttamente ogni driver o regola del sistema operativo. I renderers non dovrebbero dover gestire ogni dettaglio hardware. Le windows non dovrebbero dover rappresentare l’intera piattaforma. Layer 1 fornisce un luogo chiaro per il comportamento a livello di sistema, permettendo ai livelli superiori di restare concentrati su interpretazione, usabilità, organizzazione e trasformazione.

Questa separazione permette anche al Modello di applicarsi a diversi ambienti. Un’applicazione desktop, app mobile, dispositivo embedded, interfaccia basata su browser, strumento a riga di comando o sistema hardware specializzato possono avere regole di piattaforma diverse, ma ciascuno ha comunque bisogno di un livello system che fornisca l’ambiente operativo sotto l’interfaccia.

### Relazione con la Human Interface

Systems si trova direttamente sopra la **Human Interface** implicita. Questo significa che Layer 1 è il livello esplicito finale prima che l’output lasci il flusso lato computer modellato e il primo livello esplicito dopo che l’azione dell’utente vi entra. Il system è quindi il confine tra l’ambiente di calcolo gestito e l’essere umano che percepisce e agisce.

Questo confine è essenziale. Il Modello può descrivere come un system invia output verso un dispositivo, ma non modella direttamente l’esperienza sensoriale, biologia, attenzione, emozione o interpretazione dell’utente. Allo stesso modo, il Modello può descrivere come il system riceve un segnale di input, ma non modella direttamente il processo umano completo che ha prodotto l’azione. Queste preoccupazioni appartengono alla Human Interface implicita.

Ponendo Systems a Layer 1, lo Stack identifica chiaramente il punto esplicito più basso in cui il processo lato computer può essere descritto prima di attraversare verso percezione e azione umane.

### Perché il livello conta

Systems mantiene lo Stack radicato nel funzionamento reale. Senza questo livello, il Modello descriverebbe rendering e windows come se consegna dell’output e ricezione dell’input avvenissero automaticamente. In pratica, ogni interfaccia dipende da un ambiente sottostante che gestisce dispositivi, risorse, permessi, esecuzione e comportamento della piattaforma.

Separando Systems da Windows e dalla Human Interface, il Modello conserva un confine finale pulito. Windows fornisce il contesto delimitato per output e interazione. Systems fornisce l’ambiente operativo sottostante che consegna output e riceve input. La Human Interface percepisce l’output e produce azione. Questa distinzione permette a CatalystUI di descrivere interfacce attraverso piattaforme e domini senza ridurre il system a un singolo sistema operativo, uno specifico dispositivo o un modello di display visivo.
