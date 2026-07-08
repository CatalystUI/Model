<!--
Questa traduzione è stata generata da ChatGPT e deve essere revisionata da un traduttore umano.
Rimuovi queste righe in una pull request dopo che la traduzione è stata verificata.
-->

# 6.1 Connectors :: Data

## Discussione approfondita

### La prima traduzione

Il connettore **Data** è il primo connettore esplicito dello Stack. Si trova tra **Layer 7: Digital Data** e **Layer 6: Structure & Semantics**, dove l’informazione attiva leggibile dal computer comincia per la prima volta a ricevere una forma interpretata. Layer 7 ci dice che l’informazione esiste come digital data. Layer 6 ci dice come quell’informazione è strutturata e che cosa significa. Il connettore Data spiega come il sistema passa da una condizione all’altra.

Questo connettore è necessario perché la digital data non si interpreta da sola. Un file, uno stream, un buffer, un risultato di database, una risposta o un messaggio può già contenere informazione organizzata, ma organizzazione e interpretazione non sono la stessa cosa. Qualcosa deve accedere ai dati, leggerli secondo le aspettative appropriate e produrre una forma che Structure & Semantics possa comprendere. Quel “qualcosa” è il connettore Data.

In questo senso, questo connettore è il primo atto di traduzione nello Stack esplicito. Non crea l’informazione originale e non crea ancora componenti rivolti all’utente. Il suo ruolo è portare l’informazione nel flusso attivo come Digital Data quando serve, poi collegare quella rappresentazione digitale attiva alle regole e alle strutture che rendono possibile l’interpretazione.

### Lavorare con Data Storage

Anche se il connettore Data si trova tra Digital Data e Structure & Semantics, spesso ha una relazione stretta con il layer implicito **Data Storage**. Questo accade perché molte forme di digital data non sono utili finché non possono essere raggiunte dal luogo in cui sono archiviate. Per questo un connettore Data svolge spesso due responsabilità correlate. Prima raggiunge lo storage per recuperare, ricevere o comunque accedere all’informazione, così che essa possa entrare nel flusso attivo come Digital Data. Poi elabora la Digital Data risultante in una struttura interpretata.

Un connettore dati MySQL è un buon esempio. Dal punto di vista del Modello, il database MySQL può essere trattato come Data Storage, mentre il risultato della query diventa la Digital Data attiva su cui si lavora. Il connettore può stabilire la connessione, inviare una query, ricevere il risultato e poi organizzare quel risultato in informazione strutturata che il resto dello Stack può comprendere. Connessione al database, comportamento della query ed elaborazione del risultato possono apparire nello stesso connettore perché il connettore Data è responsabile di raggiungere lo storage e portare l’informazione recuperata verso dati strutturati e significativi.

Questo non rende Data Storage un layer esplicito dello Stack e non rende il connettore Data responsabile di essere il database, il file system, il servizio o il meccanismo di storage stesso. Piuttosto, il Modello riconosce che il primo connettore deve spesso rivolgersi allo storage per portare digital data nel flusso attivo del sistema.

### Accesso non è comprensione

Il connettore Data esiste in parte perché accesso e comprensione non sono la stessa cosa. Un computer può aprire un file, ricevere una risposta, tenere byte in memoria o collegarsi a un database. Questo dimostra solo che l’informazione è disponibile. Non dimostra che l’informazione sia stata compresa.

Per esempio, un file di impostazioni può essere disponibile come testo. Il sistema può sapere dove si trova il file, leggerne correttamente il contenuto e conservarlo in memoria. Anche allora, lo Stack non ha ancora determinato quali parti siano chiavi, quali parti siano valori, quali sezioni siano valide o quali regole definiscano il formato.

Il connettore Data fornisce il movimento da “l’informazione è disponibile come digital data” a “l’informazione può ora essere interpretata secondo structure e semantics”. Questa distinzione mantiene pulito Layer 7. Digital Data non deve sapere come interpretare ogni formato possibile. Deve soltanto rappresentare l’informazione attiva leggibile dal computer. Il connettore Data esegue poi il passaggio a Layer 6, dove l’interpretazione può avvenire secondo le regole appropriate.

### Produrre struttura

Nel flusso top-down, il connettore Data riceve Digital Data e la prepara per Structure & Semantics. Questo può includere leggere byte, decodificare testo, identificare un formato, selezionare regole semantiche, validare aspettative di base o trasformare la rappresentazione in una struttura organizzata. Il lavoro esatto dipende dal tipo di informazione gestita, ma la responsabilità resta la stessa: collegare la rappresentazione attiva a una forma interpretata.

Un file di impostazioni JSON può iniziare come testo codificato. Il connettore Data legge il testo, riconosce il formato previsto e produce informazione strutturata che rappresenta le impostazioni. Un file CSV può diventare righe e campi. Un risultato di database può diventare record. Un file binario può diventare header, sezioni e valori. Una risposta server può diventare un messaggio strutturato.

Il punto importante è il movimento. Il connettore Data può cominciare raggiungendo lo storage, ma la sua transizione esplicita nello Stack è completa solo quando la Digital Data recuperata o ricevuta è diventata informazione comprensibile attraverso Structure & Semantics.

### Preservare il significato

Un connettore Data deve preservare il significato mentre l’informazione si muove tra layer. Questo non significa che ogni dettaglio della rappresentazione originale debba restare invariato. Significa che il connettore dovrebbe preservare la relazione prevista tra la digital data e la struttura interpretata che produce.

Per esempio, se un file contiene un titolo, la struttura risultante dovrebbe rappresentare quel titolo in modo fedele all’informazione originale. Se un record di database contiene un identificatore, quell’identificatore dovrebbe restare collegato al record che descrive. Se un formato definisce ordine, raggruppamento o valori richiesti, il connettore dovrebbe rispettare queste aspettative quando produce il risultato strutturato.

### Tornare a Digital Data

Poiché lo Stack è reversibile, il connettore Data partecipa anche al flusso bottom-up. Quando un’interazione cambia informazione nell’interfaccia, quel cambiamento può dover tornare infine a Digital Data. Prima di poter essere preservata, trasmessa o riutilizzata, l’informazione strutturata deve essere riconvertita in una forma leggibile dal computer.

In questa direzione, il connettore Data esegue la trasformazione opposta. Riceve informazione strutturata da Layer 6 e produce Digital Data adatta a storage, trasmissione, confronto o ulteriore elaborazione.

Una struttura di impostazioni può diventare testo JSON codificato. Una tabella di valori può diventare CSV. Un record può diventare un aggiornamento di database. Una struttura di documento può diventare i byte di un file.

Questo movimento inverso è importante quanto il movimento top-down. Se il connettore Data può leggere informazione in una struttura ma non può scrivere la struttura di nuovo in forma digitale, l’interfaccia può forse mostrare o usare informazione, ma non può preservare completamente il risultato dell’interazione. Il connettore aiuta quindi a completare il ciclo tra intenzione dell’utente e cambiamento persistente.

### Validazione e fallimento

Il connettore Data è anche uno dei primi luoghi in cui il fallimento può essere riconosciuto in modo significativo. Digital Data può mancare, essere malformata, incompleta, non supportata, obsoleta o incoerente con le regole semantiche attese da Layer 6.

Quando questo accade, il connettore dovrebbe rendere chiaro il risultato di quella trasformazione. Un connettore può recuperare valori opzionali mancanti, applicare default, ignorare estensioni non supportate o produrre una struttura parziale quando appropriato. Tuttavia, il resto dello Stack non dovrebbe essere costretto a indovinare se i dati siano stati interpretati correttamente.

Identificando il fallimento a questa frontiera, il Modello mantiene onesta l’interpretazione. Il connettore Data protegge il resto dello Stack dal costruire su informazione che non è mai stata davvero compresa.

### Perché il connettore conta

Il connettore Data impedisce allo Stack di presumere che digital data diventi automaticamente significativa appena è disponibile. Senza questo connettore, il Modello sfumerebbe il confine tra rappresentazione e interpretazione. Layer 7 sarebbe costretto a comprendere direttamente i formati, oppure Layer 6 sarebbe costretto a recuperare dati grezzi da sé. Definendo il connettore Data, il Modello dà a questa transizione un luogo proprio.

Digital Data resta responsabile della rappresentazione attiva leggibile dal computer. Structure & Semantics resta responsabile del significato interpretato e della forma organizzata. Il connettore Data gestisce il movimento tra i due.

Questo rende esplicita la prima trasformazione dello Stack. L’informazione comincia come rappresentazione digitale attiva, attraversa il connettore Data e diventa qualcosa che il sistema può comprendere. Da lì, il resto dello Stack può continuare il processo: trasformare l’informazione interpretata in oggetti di interfaccia utilizzabili, organizzare quegli oggetti in contesto, prepararli per output, consegnarli attraverso il sistema e permettere all’utente di rispondere.
