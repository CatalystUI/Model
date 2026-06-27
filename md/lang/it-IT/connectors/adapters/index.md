# 6.3 Connectors :: Adapter

## Discussione approfondita

### Dall’uso al contesto

Il connettore **Adapter** si trova tra **Layer 5: Components, Controls, & Layouts** e **Layer 4: Graphs & Frames**. È responsabile di prendere interface data mutabile e collocarla in un contesto più ampio, dove può essere organizzata, scoperta, instradata, delimitata e preparata per il resto dello Stack.

Layer 5 dà al sistema componenti, controlli e layout. Sono le parti mutabili con cui uno sviluppatore può lavorare direttamente. Un componente può rappresentare un pezzo di informazione. Un controllo può rispondere a un’interazione. Un layout può organizzare altri componenti secondo un ordine particolare. Tuttavia, queste parti non descrivono completamente l’ambiente in cui esistono. Possono sapere che cosa sono e come si comportano, ma non sanno automaticamente come si relazionano all’intera interfaccia.

Il connettore Adapter fornisce questo movimento da singole parti utilizzabili a un contesto organizzato. Prende i componenti prodotti tramite il connettore Parser e li adatta in graphs e frames. Qui lo Stack comincia a capire non solo che un componente esiste, ma dove appartiene, come si relaziona ad altri componenti e come dovrebbe partecipare all’interfaccia attiva.

In altre parole, il connettore Parser rende utilizzabile l’informazione strutturata. Il connettore Adapter rende contestuale l’informazione utilizzabile.

### Adattare componenti in graphs

Un componente può esistere da solo, ma un’interfaccia utente è raramente fatta di un solo componente isolato. Anche l’interfaccia più semplice di solito contiene relazioni: un componente può contenerne un altro, un controllo può dipendere da un layout, un gruppo può dover essere cercato, ordinato, abilitato, disabilitato, focalizzato o aggiornato insieme.

Qui il graph diventa importante.

Il connettore Adapter permette a componenti, controlli e layout di essere collocati in un graph, così che possano essere organizzati come parte di un insieme più grande. Un graph può memorizzare componenti, tracciarne le relazioni, esporre modi per interrogarli e fornire la logica circostante necessaria per gestirli come collezione. Senza questo passaggio, i componenti resterebbero pezzi sparsi di dati mutabili invece che partecipanti a un’interfaccia unificata.

Un componente di impostazioni, per esempio, può essere utile da solo. Una volta adattato in un graph, può diventare parte di una vista completa delle impostazioni, essere collegato ad altre sezioni, cercato per nome, aggiornato con valori correlati o raggiunto tramite routing quando l’utente esegue un’azione. Il componente non ha smesso di essere un componente, ma ha guadagnato contesto attraverso il graph.

Questa distinzione aiuta a tenere separati Layer 5 e Layer 4. I componenti descrivono interface data utilizzabile. I graphs descrivono come quei pezzi sono organizzati insieme.

### Il layout non è tutto il contesto

Il connettore Adapter aiuta anche a chiarire la differenza tra un layout e un graph. Poiché i layout possono organizzare componenti, può essere tentante trattarli come l’intero layer organizzativo dell’interfaccia. Tuttavia, un layout organizza componenti solo in un modo particolare. Non descrive necessariamente la relazione completa, il ciclo di vita, il routing o il contesto ambientale di quei componenti.

Un layout verticale può stabilire che diversi controlli appaiano in ordine. Questo non significa che il layout sia responsabile dell’intera interfaccia. Non deve conoscere ogni componente attivo, gestire ogni interazione, preparare il confine di output o agire come mediatore principale del sistema. Queste responsabilità appartengono a Layer 4.

Il connettore Adapter rispetta questa distinzione. Può prendere un layout da Layer 5 e collocarlo in un graph, ma il layout non diventa il graph solo perché dispone componenti. Il graph fornisce un contesto organizzativo più ampio, mentre il layout resta un componente il cui scopo è disporre altri componenti.

Questa separazione diventa particolarmente utile quando un’interfaccia cresce. Le disposizioni semplici possono restare semplici, mentre il sistema più ampio può ancora fornire la struttura necessaria per gestire discovery, routing, aggiornamenti e preparazione per output.

### Connessione al Frame

Layer 4 non riguarda solo i graphs. Contiene anche il frame, che rappresenta il confine attivo e il punto di comunicazione tra componenti organizzati e layer inferiori dello Stack.

Il connettore Adapter aiuta i componenti a entrare in questo contesto incorniciato. Un componente può avere una dimensione, un controllo può avere un comportamento di interazione e un layout può descrivere un posizionamento relativo, ma il frame determina i limiti entro cui quei pezzi vengono preparati. Riguarda l’area attiva, il contesto circostante e l’informazione che alla fine deve essere passata verso rendering.

Questo non significa che il connettore Adapter renderizzi qualcosa. Rendering appartiene ai layer inferiori. Il connettore Adapter prepara l’interfaccia organizzata in modo che il frame possa comunicarla correttamente. Dà al frame le relazioni tra componenti, i risultati dei layout e l’informazione contestuale necessaria prima che il connettore successivo porti quella informazione verso il renderer.

In questo modo, il connettore Adapter agisce da ponte tra “questi sono i pezzi che possiamo usare” e “questa è l’interfaccia organizzata che stiamo preparando”.

### Riutilizzo tramite adattamento

Una delle parti più potenti del connettore Adapter è che lo stesso componente può essere adattato in contesti diversi. Un componente non deve essere legato permanentemente a un graph, a un frame o a un tipo di interfaccia. Il suo significato e comportamento possono restare stabili mentre il connettore Adapter determina come dovrebbe partecipare a un determinato ambiente.

Un componente documento potrebbe essere adattato in un graph di editing, un graph di anteprima o un graph di stampa. Un componente musicale potrebbe essere adattato in un graph di playback, un graph di editing o un graph di libreria. Un gruppo di componenti di impostazioni potrebbe essere adattato in una semplice pagina preferenze, un pannello di configurazione avanzata o un flusso di setup automatizzato.

I componenti sottostanti possono restare familiari, ma le loro relazioni e il loro scopo cambiano a seconda del graph e del frame in cui entrano. Questo dà a CatalystUI un modo pulito per esprimere il riutilizzo senza fingere che riutilizzo significhi che ogni contesto è identico.

Il connettore Adapter rende possibile tutto questo. Permette a interface data mutabile di essere riorganizzata secondo lo scopo, mantenendo il componente stesso concentrato su ciò che rappresenta e su come si comporta.

### Tornare ai componenti

Poiché lo Stack è reversibile, il connettore Adapter partecipa anche al flusso di interazione che torna verso i layer superiori. Quando un utente interagisce con il sistema, i layer inferiori devono infine instradare quell’interazione verso il componente o controllo appropriato.

Layer 4 svolge un ruolo importante in questo processo perché comprende il contesto organizzato. Il graph può aiutare a determinare quale componente è rilevante. Il frame può aiutare a interpretare i limiti entro cui è avvenuta l’interazione. Una volta noto quel contesto, il connettore Adapter aiuta a riportare l’interazione a Layer 5, dove il componente o controllo appropriato può rispondere.

Questo conta perché le interazioni raramente arrivano già collegate al componente esatto che dovrebbe gestirle. Il sistema può sapere che è stato premuto un tasto, che un puntatore si è mosso, che un comando è stato attivato o che una regione è stata selezionata, ma lo Stack deve ancora determinare che cosa significa quell’azione nell’interfaccia corrente. Il connettore Adapter aiuta a portare quella decisione contestuale nei componenti mutabili dove l’interazione può essere gestita.

Nel flusso top-down, il connettore Adapter colloca componenti in contesto. Nel flusso bottom-up, aiuta a riportare interazioni contestuali ai componenti che possono agire su di esse.

### Preservare l’identità

Un connettore Adapter dovrebbe preservare l’identità e l’intento dei componenti che adatta. Quando un componente entra in un graph o frame, non dovrebbe perdere ciò che è. Il suo scopo, stato e relazione con l’informazione originale dovrebbero restare riconoscibili, anche quando viene organizzato in un sistema più ampio.

Questo non significa che il componente non possa essere wrappato, indicizzato, raggruppato, misurato, trasformato o preparato per un ambiente specifico. In molti casi, l’adattamento richiede informazione aggiuntiva che il componente non conteneva originariamente. Un graph può aver bisogno di identificatori. Un frame può aver bisogno di limiti. Un sistema di routing può aver bisogno di informazioni di focus. Queste aggiunte aiutano il componente a partecipare al contesto, ma non dovrebbero cancellarne il significato.

Il connettore Adapter quindi esegue un tipo accurato di trasformazione. Aggiunge contesto senza inghiottire il componente. Permette all’interfaccia di diventare organizzata senza costringere ogni componente a diventare responsabile dell’intero sistema attorno a sé.

### Perché il connettore conta

Il connettore Adapter impedisce allo Stack di confondere interface data utilizzabile con contesto di interfaccia organizzato. Senza questo connettore, i componenti dovrebbero gestire i propri graphs, i layout verrebbero scambiati per organizzazione completa dell’interfaccia, oppure i frames sarebbero costretti a comprendere i componenti senza una transizione appropriata tra i due layer.

Definendo il connettore Adapter, il Modello dà a questa transizione un luogo proprio.

Components, Controls, & Layouts resta responsabile degli oggetti di interfaccia mutabili e del comportamento di interazione diretta. Graphs & Frames resta responsabile di organizzazione, contesto, confini, routing e preparazione per i layer inferiori. Il connettore Adapter gestisce il movimento tra i due.

Questo è il punto dello Stack in cui l’informazione utilizzabile diventa informazione situata. I componenti non sono più soltanto disponibili al programma; sono collocati in un contesto vivo dove possono relazionarsi tra loro, rispondere attraverso i percorsi corretti e prepararsi a essere portati più in basso nello Stack. Da lì, l’interfaccia organizzata può muoversi verso rendering, delivery, percezione e risposta.
