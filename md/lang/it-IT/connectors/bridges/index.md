<!--
Questa traduzione è stata generata da ChatGPT e deve essere revisionata da un traduttore umano.
Rimuovi queste righe in una pull request dopo che la traduzione è stata verificata.
-->

# 6.4 Connectors :: Bridge

## Discussione approfondita

### Dal contesto al rendering

Il connettore **Bridge** si trova tra **Layer 4: Graphs & Frames** e **Layer 3: Renderers**. È responsabile di portare interface data organizzata dal graph e dal frame nel renderer, dove quei dati possono iniziare la loro conversione in output percepibile.

Layer 4 dà al sistema contesto organizzato. Sa quali componenti esistono, come si relazionano tra loro, quali limiti occupano e come l’interfaccia attiva dovrebbe essere compresa nel suo insieme. Layer 3 è responsabile del rendering. Prende dati preparati e li converte in una forma che potrà infine essere consegnata attraverso una window e un system.

Il connettore Bridge esiste perché questi due layer non parlano naturalmente la stessa lingua.

Un graph organizza relazioni. Un frame definisce il contesto attivo e i limiti. Un renderer produce output. Il connettore Bridge è il punto di attraversamento tra queste responsabilità. Non deve essere elaborato o visibile. Nella maggior parte dei casi, espone semplicemente al renderer la interface data organizzata e permette all’informazione di interazione di tornare verso l’alto quando necessario. In questo senso, il connettore Bridge fa esattamente ciò che il nome suggerisce. Colma il divario.

### Portare avanti il Frame

Nel flusso top-down, il connettore Bridge riceve i risultati preparati di Layer 4 e li porta in Layer 3. Questo non significa che Bridge sia responsabile di organizzare componenti, calcolare layout, instradare controlli o renderizzare output. Quelle responsabilità appartengono ai layer circostanti. Bridge esiste nel mezzo affinché tali responsabilità possano restare separate.

Un frame può aver già preparato i limiti attivi dell’interfaccia. Un graph può aver già organizzato i componenti che gli appartengono. Il connettore Bridge prende quel contesto preparato e lo presenta al renderer in una forma con cui il renderer può lavorare. Questo può comportare il passaggio di riferimenti, render entries preparate, informazioni di componenti appiattite, resource handles, dati pronti per comandi o qualsiasi altra rappresentazione adatta al sistema descritto.

L’implementazione esatta può variare, ma la responsabilità resta la stessa. Il connettore Bridge non decide che cosa significa l’interfaccia. Non decide come l’output finale debba essere consegnato all’utente. Fornisce semplicemente il punto di attraversamento in cui il contesto di interfaccia organizzato diventa dati rivolti al renderer.

Questo permette a graph e frame di restare concentrati sull’organizzazione mentre il renderer resta concentrato sul rendering.

### Un connettore silenzioso

Il connettore Bridge apparirà spesso più silenzioso dei connettori sopra di lui. Il connettore Data può accedere a digital data e interpretarla. Il connettore Parser può trasformare strutture in componenti mutabili. Il connettore Adapter può collocare quei componenti in graphs e frames. In confronto, il connettore Bridge può sembrare quasi vuoto.

Quel vuoto fa parte del punto.

Un connettore Bridge di solito non dovrebbe svolgere più lavoro del necessario. Il suo scopo principale è permettere a graph e frame di comunicare con il renderer senza costringere uno dei due layer ad assorbire le responsabilità dell’altro. Se il graph comincia ad agire come un renderer, il Modello perde chiarezza. Se il renderer comincia ad agire come un graph, il Modello perde la capacità di descrivere pulitamente l’organizzazione separata dall’output.

Il connettore Bridge protegge quel confine.

Può preparare dati per il consumo del renderer, ma non dovrebbe diventare il renderer. Può esporre l’interfaccia organizzata al renderer, ma non dovrebbe diventare il graph. La sua utilità nasce dal permettere a due layer vicini di restare distinti pur potendo lavorare insieme.

### Riportare le interazioni verso l’alto

Il connettore Bridge è importante anche nel flusso bottom-up. Quando un’interazione arriva dal sistema, si muove verso l’alto attraverso i layer inferiori finché raggiunge il punto in cui l’interfaccia organizzata può darle senso. In molti casi, il renderer può ricevere o tradurre l’interazione in una forma che lo Stack può continuare a instradare, ma di solito il renderer non sa quale componente finale dovrebbe gestirla.

Quella responsabilità appartiene più in alto nello Stack.

Per questo, il connettore Bridge spesso prende un’interazione e la passa a Layer 4 con pochissima modifica. Graph e frame sono i layer che possono determinare dove l’interazione appartiene. Conoscono il contesto organizzato. Possono determinare quale componente è attivo, quale controllo occupa la regione rilevante, quale relazione di layout conta o quale parte dell’interfaccia dovrebbe ricevere l’interazione.

Per questo il connettore Bridge non dovrebbe essere scambiato per un router di interazioni. Può portare l’interazione e preservare l’informazione necessaria per il routing, ma di solito non è il layer che esegue il routing stesso. Bridge assicura semplicemente che l’interazione possa attraversare dall’informazione rivolta al renderer al contesto rivolto al graph.

Nel flusso top-down, Bridge aiuta ad alimentare il renderer. Nel flusso bottom-up, aiuta a riportare le interazioni nel luogo in cui possono essere instradate con significato.

### Il connettore più difficile da vedere

Il connettore Bridge è stato uno dei connettori più difficili da identificare perché il suo scopo può sembrare esteriormente vago. Non ha la relazione evidente con lo storage del connettore Data. Non ha la trasformazione chiara del connettore Parser. Non ha il ruolo organizzativo del connettore Adapter. A prima vista, può sembrare un passaggio sottile tra due layer che sembrano già abbastanza vicini da comunicare direttamente.

Tuttavia, senza il connettore Bridge, lo Stack non avrebbe un modo esplicito per passare dal contesto di interfaccia organizzato al rendering. Un graph dovrebbe sapere come alimentare direttamente un renderer, oppure un renderer dovrebbe sapere come interpretare graphs e frames da solo. Entrambe le direzioni farebbero collassare il confine tra organizzazione e output.

Il connettore Bridge dà un nome a quel confine.

Può non contenere sempre molta logica, e in alcune implementazioni può apparire molto piccolo, ma il suo ruolo concettuale è essenziale. Spiega come l’interfaccia organizzata attraversa il processo di rendering senza costringere Layer 4 e Layer 3 a diventare la stessa cosa.

### Preservare il confine

Un connettore Bridge dovrebbe preservare il confine tra contesto e rendering. L’informazione che passa verso il basso dovrebbe restare fedele all’interfaccia organizzata preparata da Layer 4, pur rimanendo utilizzabile da Layer 3. L’informazione che passa verso l’alto dovrebbe preservare i dettagli necessari perché graph e frame capiscano che cosa è accaduto, pur permettendo al renderer di restare concentrato sulla propria responsabilità.

Questo non richiede che Bridge preservi ogni dettaglio interno di uno dei due layer. Un renderer può non aver bisogno dell’intero graph. Un graph può non aver bisogno di ogni dettaglio specifico del renderer. Il connettore Bridge decide che cosa deve attraversare il confine affinché ciascun lato possa continuare il proprio lavoro senza assumere il ruolo dell’altro.

Questo rende il connettore particolarmente importante nei sistemi in cui il renderer ha requisiti molto specifici. Graph e frame non dovrebbero dover conoscere ogni dettaglio di quei requisiti. Il renderer non dovrebbe dover comprendere l’intera organizzazione dell’interfaccia. Il connettore Bridge esiste affinché entrambi i lati possano comunicare senza intrecciarsi.

### Perché il connettore conta

Il connettore Bridge impedisce allo Stack di confondere contesto di interfaccia organizzato con output renderizzato. Senza questo connettore, graphs e frames sarebbero costretti a parlare direttamente in termini da renderer, oppure renderers sarebbero costretti a comprendere l’intera struttura dell’interfaccia attiva.

Definendo il connettore Bridge, il Modello dà a questa transizione un luogo proprio.

Graphs & Frames resta responsabile di organizzazione, contesto, confini, routing e preparazione. Renderers resta responsabile di convertire informazione preparata in forma pronta per output. Il connettore Bridge gestisce il movimento tra i due.

Questo è il punto dello Stack in cui l’informazione organizzata attraversa il processo di rendering. È spesso silenzioso. È spesso sottile. Può sembrare quasi invisibile. Ma senza di esso, lo Stack perde la connessione esplicita tra l’interfaccia come organizzata e l’interfaccia come renderizzata. Il connettore Bridge rende possibile quell’attraversamento e poi, fortunatamente, si toglie di mezzo.
