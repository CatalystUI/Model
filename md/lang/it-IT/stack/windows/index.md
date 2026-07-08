<!--
Questa traduzione è stata generata da ChatGPT e deve essere revisionata da un traduttore umano.
Rimuovi queste righe in una pull request dopo che la traduzione è stata verificata.
-->

# 5.7 The Stack :: Windows

## Trattazione approfondita

### Il livello di consegna delimitato

Le **Windows** sono il livello in cui l’output renderizzato riceve un contesto di consegna delimitato. Layer 3 trasforma lo stato preparato dell’interfaccia in una forma pronta per l’output, ma quell’output ha ancora bisogno di un luogo, canale o vista definiti attraverso cui possa essere consegnato dal system. Layer 2 fornisce quel confine.

Una window dovrebbe essere intesa come un contesto logico di consegna, non soltanto come una casella visiva su uno schermo. In un ambiente grafico, una window appare comunemente come una regione visibile gestita da un sistema operativo. Nel Modello, però, il concetto è più ampio: una window è il contesto rivolto al system attraverso cui l’output può essere fornito e l’interazione può essere ricevuta. Definisce dove il risultato renderizzato appartiene dentro il sistema circostante.

### Una vista nel sistema

La window agisce come una vista nel system. Non crea il system e non sostituisce il renderer. Fornisce invece il contesto delimitato in cui l’output del renderer può essere collegato alla consegna a livello di sistema. Questo confine può coinvolgere posizione, dimensione, focus, visibilità, contesto del dispositivo, canale di output o un’altra forma di ambito definito dal system.

Questo conta perché l’output renderizzato non esiste per l’utente in isolamento. Deve essere consegnato da qualche parte. Un renderer può produrre comandi visivi, campioni audio, istruzioni aptiche o un altro output specifico del dominio, ma quei risultati devono comunque essere associati a un contesto riconosciuto dal system. La window fornisce quell’associazione.

Nelle interfacce visive, questo è facile da riconoscere perché la window può corrispondere a un’area rettangolare su un display. In altri domini, lo stesso ruolo concettuale può essere svolto da una sessione a riga di comando, un contesto di output audio, un canale di dispositivo, un viewport virtuale o un’altra interfaccia delimitata rivolta al system. La caratteristica definitoria non è l’aspetto visivo. La caratteristica definitoria è che la window fornisce il confine di consegna tra output renderizzato e system.

### Relazione con Renderers

Le Windows ricevono output dai Renderers, ma non eseguono il rendering loro stesse. Il rendering è la trasformazione dello stato preparato dell’interfaccia in una forma pronta per l’output. Il windowing è l’atto di dare a quell’output un contesto di sistema delimitato attraverso cui possa essere consegnato.

Questa distinzione impedisce a Layer 2 di assorbire le responsabilità di Layer 3. Un renderer dovrebbe decidere come lo stato organizzato dell’interfaccia diventa pronto per l’output. Una window dovrebbe fornire il luogo o canale rivolto al system in cui quell’output può essere inviato. Il renderer trasforma; la window contiene, riceve e inoltra.

Questo permette anche a renderers diversi di puntare a tipi diversi di window. Un renderer visivo può puntare a una window grafica, mentre un renderer auditivo può puntare a un contesto di output audio. L’implementazione specifica può variare per sistema e dominio, ma la responsabilità stratificata rimane coerente.

### Relazione con il System

Le Windows dipendono da **Layer 1: Systems** perché di solito sono create, gestite, vincolate o riconosciute dalla piattaforma circostante. Un system può determinare come le windows vengono create, come ricevono input, come espongono canali di output, a quali risorse possono accedere e come interagiscono con hardware o servizi di livello inferiore.

Questo non rende la window identica al system. Il system è l’ambiente operativo più ampio che fornisce accesso all’hardware, servizi di dispositivo, scheduling, permessi, driver e comportamento della piattaforma. La window è un contesto logico delimitato dentro quell’ambiente. È il contesto rivolto all’interfaccia che permette a output renderizzato e interazione di passare tra lo Stack e il system.

Separando Windows dal System, il Modello evita di trattare ogni dettaglio della piattaforma come parte del confine dell’interfaccia. La window rappresenta il contesto specifico rivolto al system usato dall’interfaccia. Il system rappresenta l’ambiente più ampio che rende possibile quel contesto.

### Consegna dell’output

Nel flusso dall’alto verso il basso, la window riceve dal renderer la rappresentazione pronta per l’output e la passa verso il system. Questo è lo stadio in cui l’output renderizzato non è più soltanto preparato dall’interfaccia; viene assegnato a un contesto di consegna che il system può usare.

La window può gestire limiti, focus, buffering, visibilità, stato del canale o altre condizioni di consegna a seconda del dominio e dell’implementazione. Questi dettagli influenzano come l’output si muove nel system, ma non cambiano il ruolo primario del livello. La window fornisce il confine attraverso cui l’output renderizzato può diventare output di sistema.

Una volta che l’output passa attraverso la window, il system può portarlo verso il dispositivo, servizio o processo fisico rilevante che permette all’utente di percepirlo. La window è quindi vicina alla percepibilità, ma non è la percezione stessa. Rimane parte del flusso lato computer.

### Ingresso dell’interazione

Nel flusso dal basso verso l’alto, la window è il primo livello esplicito dello Stack in cui l’interazione fornita dal system diventa disponibile all’interfaccia modellata. Il system può rilevare una pressione di tasto, movimento del puntatore, evento touch, segnale di dispositivo, comando audio o un’altra forma di input. La window riceve quell’interazione dentro il proprio contesto delimitato e la inoltra verso l’alto per ulteriore instradamento e gestione.

Questo rende la window centrale per l’interazione perché fornisce contesto all’azione. Un’interazione non è solo il fatto che qualcosa è accaduto, ma che è accaduto dentro un particolare confine rivolto al system. Focus, posizione, temporizzazione, sorgente del dispositivo, canale o contesto attivo possono determinare come il resto dello Stack debba comprendere e instradare l’interazione.

La window di solito non decide il significato finale dell’interazione. Quella responsabilità appartiene più in alto nello Stack, specialmente quando l’interazione raggiunge il control appropriato. Il ruolo della window è ricevere l’interazione dal system, associarla al confine corretto e passarla verso l’alto in una forma che il resto dello Stack possa continuare a elaborare.

### Indipendenza dal dominio

Le Windows sono indipendenti dal dominio nello stesso modo in cui il resto dello Stack è indipendente dal dominio. La parola “window” è spesso associata alla grafica, ma in CatalystUI indica qualunque contesto delimitato rivolto al system per output e interazione. Il dominio determina che tipo di output e input la window trasporta; la posizione nello Stack determina quale ruolo la window svolge.

Questo permette allo stesso livello di descrivere windows grafiche, sessioni testuali, canali audio, contesti di output tattile o altre forme di consegna dell’interfaccia senza cambiare il Modello. Ogni implementazione può avere requisiti di sistema diversi, ma ciascuna soddisfa la stessa responsabilità concettuale: fornisce il confine attraverso cui passano output renderizzato e interazione di sistema.

### Perché il livello conta

Windows impedisce allo Stack di trattare l’output renderizzato come se raggiungesse automaticamente l’utente. Un renderer può trasformare lo stato dell’interfaccia in una forma pronta per l’output, ma quell’output ha ancora bisogno di un contesto rivolto al system. Layer 2 fornisce quel contesto.

Separando Windows sia da Renderers sia dal System, il Modello conserva un percorso di consegna pulito. Renderers trasforma lo stato preparato dell’interfaccia in rappresentazione pronta per l’output. Windows fornisce il contesto delimitato attraverso cui quella rappresentazione entra nel system. Il System poi esegue il lavoro di livello inferiore necessario per consegnare output e ricevere input. Questa distinzione permette a CatalystUI di descrivere la consegna dell’interfaccia attraverso piattaforme e domini senza ridurre le windows a rettangoli visivi o costringere i renderers a gestire comportamento a livello di piattaforma.
