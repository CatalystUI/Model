<!--
Questa traduzione è stata generata da ChatGPT e deve essere revisionata da un traduttore umano.
Rimuovi queste righe in una pull request dopo che la traduzione è stata verificata.
-->

# 6.5 Connectors :: Surface

## Discussione approfondita

### Dal rendering alla delivery

Il connettore **Surface** si trova tra **Layer 3: Renderers** e **Layer 2: Windows**. È responsabile di portare output renderizzato dal renderer nella window, dove quell’output può essere collocato dentro un contesto delimitato fornito dal sistema.

Layer 3 è il luogo in cui l’informazione viene convertita in una forma pronta per output. Il renderer prende i dati preparati da graph e frame e produce qualcosa che potrà infine essere percepito. Tuttavia, l’output renderizzato ha ancora bisogno di una destinazione. Ha bisogno di un luogo dove andare, di qualcosa a cui collegarsi e di un confine attraverso cui il sistema possa consegnarlo.

Quella destinazione è rappresentata dal layer Windows.

Il connettore Surface fornisce il punto di attraversamento tra renderer e window. Spiega come l’output renderizzato viene collegato all’area utilizzabile della window e come il renderer riceve abbastanza informazione dalla window per continuare a produrre output correttamente. Senza questo connettore, il renderer potrebbe produrre output, ma lo Stack non avrebbe una spiegazione esplicita di come quell’output diventa collegato alla window che lo presenta.

In termini più semplici, un renderer crea output. Una window fornisce il luogo in cui quell’output può essere consegnato. Il connettore Surface permette ai due di lavorare insieme.

### L’area renderizzata

Una surface può essere intesa come l’area utilizzabile di una window che riceve output renderizzato. In un’applicazione grafica tradizionale, questo può essere facile da immaginare: un renderer disegna nell’area interna di una window. Tuttavia, lo stesso principio si applica più ampiamente. La surface non è semplicemente “lo schermo”. È il connettore che dà all’output renderizzato un posto entro i confini della window.

Questo conta perché un renderer di solito non possiede la window. Il renderer può sapere come produrre output, ma la window è il layer che fornisce la vista attiva nel sistema. La window può avere dimensione, posizione, stato, scala, focus o altre condizioni gestite dal sistema. Il connettore Surface rende queste condizioni disponibili al renderer nel modo richiesto affinché l’output sia consegnato correttamente.

Un renderer può dover conoscere i limiti correnti della window. Può dover sapere quando quei limiti sono cambiati. Può aver bisogno di un target in cui disegnare, scrivere, streammare o aggiornare in altro modo. Questi dettagli possono variare per implementazione, ma la responsabilità concettuale resta la stessa: il connettore Surface collega l’output del renderer al contesto di window che lo conterrà.

Questo impedisce al renderer di fingere di possedere il confine del sistema, e impedisce alla window di fingere di sapere come renderizzare.

### Più di un’immagine finale

Può essere tentante pensare al connettore Surface come a qualcosa che passa semplicemente un risultato finito in una window. In alcuni casi, questa descrizione può essere abbastanza vicina. Un renderer prepara output, la surface lo porta alla window e l’utente infine percepisce il risultato.

Tuttavia, il rendering è spesso una relazione continua più che una singola delivery. Una window può cambiare dimensione. Il suo stato attivo può cambiare. Il sistema può richiedere un redraw. Il renderer può dover aggiornare continuamente, attendere un segnale o sincronizzare il proprio output con la condizione corrente della window. Il connettore Surface fornisce il luogo in cui questa relazione può essere espressa.

Per questo il connettore Surface non è semplicemente un contenitore per output finito. È la connessione tra l’atto di rendering e la window che riceve il risultato. Permette al renderer di rispondere alle condizioni della window senza rendere il renderer responsabile di essere la window.

L’output appartiene ancora al renderer. Il confine appartiene ancora alla window. Il connettore Surface porta la relazione tra i due.

### Riportare le interazioni verso l’alto

Poiché lo Stack è reversibile, il connettore Surface partecipa anche al flusso bottom-up. Quando un’interazione comincia nel sistema ed entra in una window, deve infine muoversi verso l’alto verso le parti dello Stack che possono comprenderla e gestirla.

Il connettore Surface spesso porta questa interazione dalla window al renderer. In molti casi, non deve fare molto più che preservare l’informazione e permetterle di continuare verso l’alto. Un movimento del puntatore, la pressione di un tasto, un cambio di focus, un evento di resize o un’altra interazione può entrare attraverso la window e poi attraversare la surface affinché renderer e layer superiori possano rispondere se necessario.

Questo non significa che il connettore Surface sia responsabile di decidere quale componente debba gestire l’interazione. Quella responsabilità appartiene più in alto nello Stack, soprattutto quando l’interazione raggiunge graph e frame. Il connettore Surface dà semplicemente all’interazione un percorso attraverso il confine tra window e renderer.

Nel flusso top-down, il connettore Surface porta output renderizzato nella window. Nel flusso bottom-up, porta informazione di interazione originata dalla window verso il renderer e i layer sopra di esso.

### Tenere separata la Window

Il connettore Surface è importante perché impedisce a renderer e window di collassare nella stessa responsabilità. Senza questo connettore, un renderer dovrebbe sapere troppo della window, oppure la window dovrebbe sapere troppo del renderer. Entrambe le direzioni indeboliscono la separazione che rende utile lo Stack.

Una window fornisce il confine attivo rivolto al sistema. Rappresenta la vista, il contenitore o il punto di delivery. Un renderer produce output che può essere consegnato attraverso quel confine. Il connettore Surface sta tra loro affinché ogni layer possa restare concentrato sul proprio scopo.

Questa separazione diventa particolarmente utile quando un renderer può essere usato con più di un tipo di window, o quando una window può supportare più di un tipo di renderer. Il connettore dà al Modello un luogo per descrivere la relazione senza cablare rigidamente i due layer insieme. Un renderer può essere collegato a una surface adatta. Una window può esporre una surface adatta. Il connettore Surface spiega come avviene questo collegamento.

Questo permette a renderer e window di cooperare senza diventare indistinguibili.

### Preservare l’output

Un connettore Surface dovrebbe preservare l’output renderizzato mentre attraversa nella window. Questo non significa che l’output non venga mai trasformato, scalato, ritagliato, sincronizzato o preparato secondo i requisiti della window. Significa che l’output dovrebbe restare fedele a ciò che il renderer ha prodotto e dovrebbe essere consegnato in modo coerente con il contesto attivo della window.

Se la window cambia dimensione, il connettore Surface può aiutare a comunicare quel cambiamento. Se la window diventa inattiva, nascosta, minimizzata o altrimenti non disponibile, il connettore può aiutare il renderer a rispondere in modo appropriato. Se il renderer ha bisogno di un target fornito dalla window, il connettore può mantenere o esporre quel target. Queste responsabilità non sono la stessa cosa del rendering e non sono la stessa cosa dell’essere la window. Sono le responsabilità della connessione tra i due.

Questa è la forma principale del connettore Surface: preserva l’output del renderer mentre lo adatta al contesto di delivery fornito dalla window.

### Perché il connettore conta

Il connettore Surface impedisce allo Stack di confondere output renderizzato con la window che lo contiene. Senza questo connettore, un renderer sarebbe costretto ad agire come se possedesse la window, oppure una window sarebbe costretta ad agire come se comprendesse direttamente il rendering.

Definendo il connettore Surface, il Modello dà a questa transizione un luogo proprio.

Renderers resta responsabile di convertire informazione preparata in forma pronta per output. Windows resta responsabile di fornire il contesto delimitato rivolto al sistema attraverso cui output e interaction possono passare. Il connettore Surface gestisce il movimento tra i due.

Questo è il punto dello Stack in cui l’informazione renderizzata ottiene una destinazione. È dove output smette di essere soltanto prodotto e viene collegato al luogo in cui può essere consegnato. Da lì, Windows può portare output verso Systems, dove può finalmente diventare qualcosa che l’utente può percepire e a cui può rispondere.
