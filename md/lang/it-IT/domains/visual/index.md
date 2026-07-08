<!--
Questa traduzione è stata generata da ChatGPT e deve essere revisionata da un traduttore umano.
Rimuovi queste righe in una pull request dopo che la traduzione è stata verificata.
-->

# 4.2 Domains :: Visual

## Trattazione approfondita

Mentre il dominio **simbolico** descrive i dati prima che siano stati assegnati a un senso specifico, il dominio **visivo** descrive i dati una volta che sono stati modellati per la vista. I dati visivi sono informazioni pensate per essere viste: un’immagine, testo renderizzato o un controllo visibile. La distinzione importante non è se i dati “potrebbero” eventualmente apparire su uno schermo, ma se il loro ruolo attuale nell’interazione è comunicare attraverso la vista.

Questo significa che i dati visivi non devono essere confusi con la forma memorizzata che li sostiene. Un file contenente dati di immagine è ancora simbolico finché esiste solo come informazione memorizzata. Un paragrafo di testo è ancora simbolico finché esiste solo come caratteri, markup o un’altra rappresentazione astratta. Diventa visivo quando il sistema lo presenta in una forma che l’utente può vedere e interpretare. Il cambiamento non è che i dati diventano più importanti; il cambiamento è che il loro metodo di comunicazione è passato dalla rappresentazione alla percezione.

I dati visivi sono particolarmente comuni perché la vista può comunicare molte relazioni contemporaneamente. Dimensione, colore, spaziatura, direzione, raggruppamento e movimento possono tutti aiutare l’utente a capire che cos’è qualcosa, dove appartiene e se è possibile agire su di esso. Per questo le interfacce visive spesso sembrano immediate. Un utente può dare uno sguardo a una finestra, a una pagina web o a una scena di gioco e coglierne il significato prima di leggere ogni parola. Il sistema non sta solo mostrando dati; sta organizzando dati in un’esperienza visibile.

### Comprendere i dati visivi

Un modo utile per comprendere i dati visivi è considerare **posizionamento**, **aspetto** e **stato**. Non sono sotto-domini formali né categorie obbligatorie nel Modello CatalystUI, ma offrono un modo pratico per riconoscere come l’informazione visiva comunica significato.

**Posizionamento** descrive dove appaiono i dati visivi e come si relazionano alle informazioni attorno a essi. Un titolo posto sopra un paragrafo comunica appartenenza. Un pulsante posto vicino a un modulo comunica associazione. Un menu posto sopra altri contenuti comunica priorità temporanea. Il posizionamento conta perché l’utente non percepisce gli oggetti visibili in isolamento; percepisce le relazioni tra oggetti visibili.

**Aspetto** descrive come i dati visivi si presentano all’utente. Forma, colore, tipografia, contrasto e immagini influenzano ciò che l’utente crede di guardare. Un frammento di testo può sembrare un titolo, un avviso o un link a seconda di come è stilizzato. Un rettangolo può sembrare un pulsante, un pannello o decorazione a seconda del bordo, della spaziatura e del contesto circostante. L’aspetto dà ai dati visivi la loro forma riconoscibile.

**Stato** descrive la condizione attuale comunicata visivamente. Un controllo può apparire attivo, disabilitato, selezionato, focalizzato, in caricamento o nascosto. Questi stati contano perché l’azione successiva dell’utente spesso dipende da ciò che l’interfaccia sembra pronta a fare. Se lo stato visivo non corrisponde alla condizione reale del sistema, l’interfaccia diventa confusa anche se la logica sottostante è tecnicamente corretta.

### Significato visivo

L’output visivo esprime significato, ma non deve essere scambiato per il significato stesso. Un bordo rosso può comunicare che qualcosa non va, ma il bordo non è l’errore. Un’icona può rappresentare un’azione, ma l’icona non è l’azione. Un layout può mostrare gerarchia, ma il layout non è la struttura sottostante. I dati visivi sono l’espressione sensoriale del significato, non la sua fonte completa.

Questa distinzione aiuta a evitare un errore di progettazione comune: affidare troppa responsabilità a come qualcosa appare senza preservare ciò che significa. Se un’interfaccia dipende solo dal colore per comunicare un errore, il significato rimane intrappolato in un unico segnale visivo. Se un’icona non ha un’etichetta, una descrizione o un significato accessibile di supporto, il sistema può apparire pulito mentre diventa più difficile da capire. La chiarezza visiva è più forte quando la forma visibile esprime fedelmente l’intento sottostante.

I dati visivi portano anche un rischio particolare, perché gli utenti tendono a fidarsi di ciò che vedono. Se qualcosa sembra cliccabile, l’utente si aspetta che risponda. Se qualcosa sembra disabilitato, l’utente si aspetta che non risponda. Se qualcosa sembra selezionato, l’utente si aspetta che il sistema lo tratti come selezionato. Quando la presentazione visibile e il comportamento reale non coincidono, l’utente vive l’interfaccia come rotta, anche se il programma si comporta esattamente come è stato scritto.

### Dati visivi e accessibilità

Il dominio visivo rende l’accessibilità più facile da ragionare perché identifica quando l’informazione viene comunicata soltanto attraverso la vista. Se un errore è mostrato solo dal colore, un grafico solo da un’immagine o il progresso solo da un’animazione, allora il significato potrebbe non essere disponibile a ogni utente. Il problema non è che la comunicazione visiva sia cattiva; il problema è che la comunicazione visiva potrebbe dover essere tradotta in un’altra forma.

È qui che i domini diventano utili come strumento diagnostico. Ci aiutano a chiedere dove vive attualmente il significato. È solo visivo? Può essere rappresentato anche simbolicamente? Dovrebbe essere disponibile tramite suono, tatto o un’altra forma di output? Rispondendo a queste domande, lo sviluppatore può preservare lo stesso significato attraverso diversi tipi di percezione invece di trattare l’accessibilità come un ripensamento.

### Dati visivi in esperienze più ampie

I dati visivi possono anche partecipare a esperienze che non sono puramente visive. Un lettore video può combinare immagini in movimento con suono. Un gioco può combinare grafica, musica e feedback del controller. Un sistema operativo può combinare finestre, avvisi e dispositivi di input in uno scambio più ampio. In queste situazioni, il dominio visivo identifica la porzione dell’esperienza pensata per la vista, mentre altri domini descrivono le ulteriori forme di percezione coinvolte.

Questo mantiene il modello preciso. Un’interfaccia visiva non è automaticamente l’intera interfaccia utente, e un’esperienza multisensoriale non cancella la porzione visiva al suo interno. Ogni dominio aiuta a identificare come il significato viene trasportato. Il dominio visivo risponde a una domanda specifica: quale informazione viene modellata affinché l’utente possa vederla?

In breve, il dominio visivo descrive il movimento dalla rappresentazione simbolica a un output leggibile attraverso la vista. Ci dà un modo per discutere l’informazione visibile senza ridurre tutte le interfacce alla grafica. Quando i dati visivi sono gestiti bene, l’utente può riconoscere ciò che il sistema presenta, capire su cosa può agire e rispondere con fiducia.
