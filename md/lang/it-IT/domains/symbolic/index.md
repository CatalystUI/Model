# 4.1 Domains :: Symbolic

## Trattazione approfondita

Il dominio **simbolico** descrive i dati nella loro forma rappresentata, prima che siano stati assegnati a un output sensoriale diretto. I dati simbolici portano significato rappresentando qualcos’altro. Possono descrivere un valore, definire una regola, conservare un messaggio, identificare una relazione o indicare a un sistema come qualcosa dovrebbe comportarsi. Il loro scopo non è la percezione immediata, ma la rappresentazione.

Questo rende i dati simbolici importanti nel contesto del Modello. Un sistema non può eseguire trasformazioni significative sulle informazioni se queste prima non *esistono*. Un documento, un file di configurazione, un formato dati o una struttura di markup possono contenere significato, ma quel significato è mantenuto simbolicamente. Il sistema deve leggerlo secondo una certa aspettativa prima di poter farci qualcosa di utile.

I dati simbolici non sono “nulla grezzo”. Possono essere molto organizzati, profondamente significativi e pronti per l’interpretazione. Un numero può rappresentare una dimensione, una stringa può rappresentare un titolo e un tag può rappresentare l’inizio di una sezione. I dati significano già qualcosa, ma il loro significato è ancora portato da simboli invece che da esperienza diretta.

### Rappresentazione simbolica

Un simbolo funziona perché porta significato oltre la sua forma immediata. Un nome, un valore, una regola o una definizione può rappresentare qualcosa che il sistema dovrà capire in seguito. Il simbolo in sé non è il risultato finale; è una rappresentazione che il sistema può mantenere, passare, confrontare e interpretare. I dati simbolici dipendono da una separazione tra ciò che è scritto, archiviato o definito, e ciò che quella rappresentazione *intende* descrivere.

Per questo i dati simbolici sono potenti in un modo in cui l’output diretto non lo è. Possono essere archiviati, copiati, cercati, trasmessi, modificati, validati e trasformati senza richiedere che l’esperienza finale esista già. Il sistema può mantenere una descrizione di qualcosa prima di produrla. Questa separazione dà al software molta della sua flessibilità.

È anche qui che la precisione conta. Se il simbolo non è chiaro, il sistema può comunque elaborarlo, ma il significato diventa instabile. Un nome vago, una struttura malformata o un formato incoerente possono creare confusione molto prima che qualcosa raggiunga l’utente. Gli errori simbolici sono pericolosi perché spesso accadono presto e poi riecheggiano in tutto ciò che dipende da essi.

### Struttura simbolica

I dati simbolici raramente esistono come valori isolati. Di solito compaiono all’interno di una struttura che assegna a ogni valore un ruolo. Un file di configurazione può contenere chiavi e valori. Un documento può contenere intestazioni e paragrafi. Un comando può contenere argomenti in un ordine specifico. Il significato non deriva solo da ciascun simbolo, ma da dove appare e da come si rapporta alle informazioni circostanti.

Per questo lo stesso simbolo può portare significati diversi. Un valore, un nome o una frase non si spiega semplicemente esistendo; acquisisce un ruolo dal contesto che lo circonda. La struttura dice al sistema come ogni pezzo di dati simbolici dovrebbe essere compreso, sia che definisca una proprietà, identifichi una relazione, imposti una condizione o descriva parte di un insieme più grande.

Una struttura simbolica ben formata offre al sistema un percorso affidabile per l’interpretazione. Permette ai dati di essere analizzati, controllati, convertiti e collegati a comportamenti successivi. Una struttura simbolica scadente costringe il sistema a indovinare, inferire o rifiutare del tutto i dati. In termini CatalystUI, questo rende la struttura simbolica uno dei primi luoghi in cui la chiarezza inizia o si rompe.

### Interpretazione simbolica

I dati simbolici diventano utili quando il sistema sa come interpretarli. L’interpretazione collega la rappresentazione a un significato atteso. Un parser può leggere un formato di file. Uno schema può definire campi validi. Un processore di comandi può determinare quale azione descrive una frase. Senza interpretazione, i dati simbolici possono comunque esistere, ma il sistema non ha un modo affidabile per agire su di essi.

Per questo i dati simbolici sono così vicini all’intento. Uno sviluppatore può descrivere il comportamento tramite codice. Un utente può modificare il comportamento tramite impostazioni. Un documento può preservare il pensiero tramite testo. In ogni caso, la forma simbolica permette di esprimere significato senza manipolare direttamente il risultato finale. Il sistema riceve una rappresentazione, la interpreta e poi la usa per guidare ciò che accade dopo.

L’interazione simbolica può sembrare meno immediata della manipolazione diretta, ma spesso offre un controllo maggiore. Un comando scritto può essere ripetuto esattamente. Un file di configurazione può essere versionato. Un documento strutturato può essere trasformato in molti output diversi. I dati simbolici danno sia al sistema sia all’utente un punto di riferimento stabile.

### Dati simbolici e accessibilità

I dati simbolici svolgono un ruolo importante nell’accessibilità perché preservano il significato in una forma che può essere adattata. Quando l’informazione esiste solo come presentazione finale, il sistema può avere capacità limitate di spiegarla, ridimensionarla, cercarla, tradurla o riorganizzarla. Quando il significato simbolico sottostante rimane disponibile, il sistema ha più opzioni per presentare quel significato in un modo che l’utente possa ricevere.

Un documento strutturato è più facile da navigare rispetto a un’immagine appiattita di testo. Un controllo con un’etichetta significativa è più facile da esporre rispetto a uno il cui scopo esiste solo nel suo aspetto. Una tabella dati con relazioni reali è più facile da reinterpretare rispetto a un’immagine di righe e colonne. In ogni caso, i dati simbolici proteggono il significato dietro la presentazione.

Questo non rende i dati simbolici automaticamente accessibili. I simboli possono essere vaghi, incompleti, etichettati male o scollegati da ciò che dovrebbero rappresentare. Ma quando il significato simbolico è chiaro e preservato, il sistema acquisisce la capacità di trasformare l’informazione senza perderne lo scopo.

### Dati simbolici nel Modello

Il dominio simbolico dà a CatalystUI un modo per descrivere l’informazione prima che diventi un’esperienza diretta rivolta all’utente. È il luogo in cui il significato può essere archiviato, nominato, organizzato e preparato. Questo include file, comandi, formati, metadati, impostazioni, codice sorgente, markup e altre forme rappresentate che un sistema può interpretare.

La sua importanza è facile da ignorare perché i dati simbolici spesso vivono dietro il risultato. L’utente potrebbe non vedere mai il formato di file, lo schema, il parser o la rappresentazione interna che hanno reso possibile l’esperienza. Eppure quelle forme simboliche modellano ciò che il sistema può capire, ciò che può produrre e con quanta fedeltà può preservare il significato attraverso le trasformazioni.

In breve, il dominio simbolico descrive l’informazione come rappresentazione. Non è definito da come l’utente la percepisce, ma da come il sistema mantiene e comprende il significato prima della presentazione diretta. Quando i dati simbolici sono gestiti bene, il resto dell’interazione ha una base più chiara su cui costruire.
