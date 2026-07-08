<!--
Questa traduzione è stata generata da ChatGPT e deve essere revisionata da un traduttore umano.
Rimuovi queste righe in una pull request dopo che la traduzione è stata verificata.
-->

# 5.1 The Stack :: Data Storage

## Trattazione approfondita

### Un confine implicito

**Data Storage** è il confine superiore implicito dello Stack. Rappresenta la condizione in cui contenuto, stato o una risorsa rimangono disponibili prima che i livelli espliciti inizino a lavorarci, e il punto in cui il risultato di un’interazione può essere conservato in seguito. Il Modello ha bisogno di questo confine perché un’interfaccia non crea tutto il proprio oggetto dal nulla. Qualcosa deve essere disponibile per essere letto, recuperato, ricevuto o referenziato prima di poter essere interpretato, trasformato, renderizzato o usato come base per un’azione.

Data Storage è implicito perché lo Stack non modella i meccanismi interni dello storage stesso. Il Modello può dipendere da una risorsa memorizzata, ma non deve descrivere ogni dettaglio di come quella risorsa viene conservata. Queste responsabilità appartengono al sistema informativo circostante. Lo Stack inizia quando una qualche forma di contenuto entra a far parte del flusso attivo dell’interfaccia.

### Disponibilità memorizzata e rappresentazione attiva

La distinzione tra Data Storage e Layer 7: **Digital Data** è la distinzione tra **disponibilità memorizzata** e **rappresentazione attiva**. Data Storage descrive il luogo o la condizione in cui qualcosa può persistere. Digital Data descrive la prima forma esplicita di quella cosa una volta entrata nel processo modellato come rappresentazione leggibile dal computer.

Per esempio, un documento può esistere in un file system, un record può esistere in un database, o una risposta può attendere dietro una API. Finché rimane solo disponibile per l’accesso, appartiene a Data Storage. Quando l’interfaccia legge quel documento, riceve quel record, apre quella risposta o porta altrimenti la risorsa nel flusso attivo, essa diventa Layer 7. Il cambiamento importante non è che il contenuto sia diventato improvvisamente significativo. Il cambiamento importante è che ora è rappresentato dentro lo Stack.

### Persistenza e trasformazione

Data Storage riguarda persistenza e disponibilità. Lo Stack esplicito riguarda la trasformazione. Una volta che una risorsa memorizzata diventa Digital Data, il Modello può iniziare a descrivere cosa le accade: come viene interpretata da Structure & Semantics, modellata in Components, Controls, & Layouts, organizzata attraverso Graphs & Frames, preparata da un Renderer, consegnata attraverso una Window e portata dal System verso la Human Interface.

Questa separazione conta perché storage e trasformazione rispondono a domande diverse. Data Storage chiede se qualcosa può restare disponibile nel tempo. Digital Data chiede con quale rappresentazione attiva binaria, testuale, trasmessa in streaming o ricevuta l’interfaccia stia lavorando in quel momento. Il primo spiega la conservazione. Il secondo avvia il flusso modellato.

### Il confine di origine e ritorno

Nel flusso dall’alto verso il basso, Data Storage serve come confine di origine. Una risorsa memorizzata viene selezionata o recuperata, poi entra nello Stack come Digital Data. Da quel punto in avanti, il Modello può tracciare come la risorsa viene compresa, disposta, trasformata e consegnata all’utente. Data Storage in sé non renderizza, analizza, dispone o interpreta la risorsa. Fornisce solo la condizione da cui la rappresentazione attiva può iniziare.

Nel flusso dal basso verso l’alto, Data Storage serve come confine di ritorno. Un’interazione dell’utente può richiedere, creare, aggiornare, eliminare o influenzare in altro modo qualcosa nel flusso dell’interfaccia. Un cambiamento risultante può risalire lo Stack fino a diventare di nuovo Digital Data. Se quel risultato deve restare disponibile oltre il processo immediato, ritorna a Data Storage come stato preservato. Lo Stack non deve modellare ogni strategia di scrittura, transazione di database, aggiornamento di cache o passaggio di sincronizzazione di rete per riconoscere che il risultato è rientrato nella persistenza.

### Esempi nel contesto

Per questo Data Storage può apparire attraverso molte tecnologie senza essere definito da nessuna di esse. Un file system, un database MySQL, una collezione MongoDB, un servizio basato su API, uno storage di oggetti cloud, una regione di memoria di un dispositivo o un servizio di streaming possono tutti servire come Data Storage quando forniscono disponibilità conservata fuori dallo Stack attivo. Quando un file, record, risposta, buffer o stream specifico viene portato nel flusso dell’interfaccia, il Modello tratta quella rappresentazione attiva come Digital Data.

### Perché la separazione conta

Separare Data Storage da Layer 7 mantiene pulito lo Stack. Senza questa distinzione, il Modello confonderebbe il luogo in cui qualcosa viene tenuto con la forma che assume quando l’interfaccia inizia a lavorarci. Questo renderebbe Digital Data responsabile sia della persistenza sia della rappresentazione attiva, indebolendo lo scopo dei livelli espliciti.

Mantenendo Data Storage implicito, il Modello preserva un confine chiaro: lo storage circonda il flusso dell’interfaccia, mentre Digital Data lo inizia. Questo permette allo Stack di descrivere la trasformazione di una specifica rappresentazione attiva senza intrecciarsi con ogni possibile meccanismo di storage dietro di essa. Data Storage spiega da dove può venire il contenuto conservato e dove possono tornare i risultati preservati; Layer 7 avvia il processo esplicito che trasforma quel contenuto in qualcosa che l’interfaccia può capire, trasformare e infine presentare.
