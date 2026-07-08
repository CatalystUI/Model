<!--
Questa traduzione è stata generata da ChatGPT e deve essere revisionata da un traduttore umano.
Rimuovi queste righe in una pull request dopo che la traduzione è stata verificata.
-->

# 3. Riferimento

Di seguito il Modello CatalystUI è riassunto in vari formati per renderlo più facile da consultare, copiare e applicare durante lo studio, la documentazione o l’implementazione del Modello.

La pagina di Riferimento non intende sostituire la documentazione circostante. Offre invece una vista compatta del Modello dopo che terminologia, riepilogo, domains, stack, connectors e interactions sono già stati introdotti.

## Per prompt IA

Un prompt IA che può permettere a un LLM di interpretare e comprendere il Modello CatalystUI. Può essere usato per porre domande sul Modello, confrontare sistemi esistenti con esso o fornire una scheda di riferimento durante la risoluzione di problemi in un ambiente tecnico.

---

```md
Il Modello CatalystUI è un modello universale per descrivere il flusso di informazioni tra un utente e un sistema informativo.

Un processo è qualcosa che accetta un input, esegue una trasformazione e produce un output. Un sistema è un insieme organizzato di processi, definito dal modo in cui interagiscono e dall’ordine in cui vengono eseguiti. Un’interfaccia è un meccanismo che permette a due sistemi differenti di interagire. Un sistema informativo è un sistema specializzato che lavora con dati persistenti e consente a un utente di crearli, leggerli, aggiornarli o eliminarli tramite un’interfaccia nel tempo. Un computer è un sistema informativo che lavora esclusivamente con dati digitali, cioè dati che possono essere rappresentati in binario ed elaborati da una macchina. Un utente è una persona che può interagire con un sistema informativo.

Nel Modello CatalystUI, i termini "data" e "information" sono trattati come intercambiabili.

Il Modello descrive le interfacce utente attraverso il flusso di informazioni. L’informazione può essere presentata da un sistema, interpretata dall’utente, ricevere una risposta dall’utente, essere elaborata dal sistema e poi presentata di nuovo mentre il ciclo continua. Il ciclo può iniziare in qualsiasi punto, ma si applica lo stesso schema: l’informazione fluisce tra l’utente e il sistema informativo attraverso un’interfaccia.

Il Modello CatalystUI è diviso in tre categorie principali:

- Domains
- The Stack
- Connectors

Domains categorizza i dati. The Stack descrive i dati. Connectors trasforma, modifica e traduce i dati.

Domains descrive che tipo di informazione viene gestita durante una interaction. I sette domains di primo livello sono Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory e Multisensory. Symbolic data è informazione prima che sia stata assegnata a un senso specifico. Visual data è informazione pensata per essere vista. Auditory data è informazione pensata per essere udita. Tactile data è informazione pensata per essere percepita al tatto. Olfactory data è informazione pensata per essere odorata. Gustatory data è informazione pensata per essere gustata. Multisensory data è informazione in cui più categorie sensoriali lavorano insieme come un’unica esperienza.

The Stack descrive dove si trova l’informazione nel flusso. Contiene sette layers espliciti con due estremità implicite. Dall’alto verso il basso, The Stack è:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage è la sorgente o destinazione implicita in cui i dati persistenti rimangono disponibili oltre il flusso attivo dell’interfaccia. Digital Data sono i dati dopo essere entrati nel flusso attivo dell’interfaccia in una forma leggibile dal computer, ma prima che il resto del Modello li abbia interpretati, organizzati o presentati. Structure & Semantics descrive come i dati digitali devono essere compresi; semantics definisce le regole per interpretare i dati, mentre structure è il risultato organizzato dell’applicazione di quelle regole. Components, Controls, & Layouts rappresenta le parti logiche e utilizzabili dell’interfaccia; components rappresenta oggetti di interfaccia utilizzabili, controls elabora interactions, e layouts dispone altri components o controls. Graphs & Frames organizza queste parti in relazioni più ampie e contesti attivi; graphs rappresenta relazioni organizzate tra oggetti di interfaccia, mentre frames contiene e coordina graphs per la preparazione rivolta al renderer. Renderers trasforma dati di interfaccia preparati in una forma pronta per l’output. Windows fornisce una vista o un contesto attraverso cui l’utente può fornire input al sistema o ricevere output dal sistema. Systems fornisce l’ambiente, i servizi, i dispositivi e i processi che alla fine consegnano output e ricevono input. Human Interface è l’estremità implicita in cui l’utente percepisce l’informazione e risponde tramite interaction.

Connectors descrive come l’informazione si muove tra layers espliciti adiacenti dello Stack. Dall’alto verso il basso, i connectors sono:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Il Data connector collega Digital Data a Structure & Semantics. Porta informazione attiva leggibile dal computer in una forma strutturata che il Modello può comprendere, e può anche riportare informazione strutturata in forma digitale.

Il Parser connector collega Structure & Semantics a Components, Controls, & Layouts. Analizza strutture interpretate stabili trasformandole in parti mutabili dell’interfaccia, e può anche riportare components modificati in dati strutturati.

L’Adapter connector collega Components, Controls, & Layouts a Graphs & Frames. Adatta parti utilizzabili dell’interfaccia in relazioni organizzate e contesti attivi, e aiuta a riportare interactions contestuali ai components o controls che possono gestirle.

Il Bridge connector collega Graphs & Frames a Renderers. Porta il contesto organizzato dell’interfaccia nel renderer e di solito passa interactions verso l’alto con poche modifiche, così graph e frame possono instradarle in modo appropriato.

Il Surface connector collega Renderers a Windows. Dà all’output renderizzato una destinazione dentro la window e trasporta verso l’alto informazioni di interaction originate dalla window.

Il Native connector collega Windows a Systems. Fornisce bindings tra la window e il system, permettendo alla window di esistere, ricevere interactions, consegnare output e comunicare con il comportamento nativo del system.

Interactions è il punto in cui il Modello diventa partecipativo. Una interaction è l’intento dietro un’azione. Il clic, il tocco, lo swipe, il comando, il movimento o la parola pronunciata sono solo l’azione visibile; la interaction è ciò che l’utente sta cercando di ottenere tramite quell’azione. Interactions si muove attraverso lo Stack, viene trasformata dai connectors e può infine modificare dati digitali prima che il ciclo ricominci.

Usa il Modello CatalystUI per classificare il tipo di informazione gestita, identificare dove si trova quell’informazione nello Stack, determinare quale connector è responsabile della transizione tra layers e tracciare come l’informazione si muove dai dati archiviati all’esperienza utente e dall’intento dell’utente di nuovo ai dati.
```

## Per testo

Una scheda di riferimento compatta che mostra l’ordine principale del Modello CatalystUI.

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | Significato rapido                                             |
| ------------ | -------------------------------------------------------------- |
| Symbolic     | Informazione prima dell’assegnazione a un senso specifico.     |
| Visual       | Informazione pensata per essere vista.                         |
| Auditory     | Informazione pensata per essere udita.                         |
| Tactile      | Informazione pensata per essere percepita al tatto.            |
| Olfactory    | Informazione pensata per essere odorata.                       |
| Gustatory    | Informazione pensata per essere gustata.                       |
| Multisensory | Più categorie sensoriali che agiscono come un’unica esperienza. |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Layer   | Nome                            | Significato rapido                                                     |
| ------- | ------------------------------- | ---------------------------------------------------------------------- |
| Implied | Data Storage                    | Dati persistenti fuori dal flusso attivo dell’interfaccia.             |
| Layer 7 | Digital Data                    | Informazione attiva leggibile dal computer prima dell’interpretazione. |
| Layer 6 | Structure & Semantics           | Dati interpretati e regole che danno loro significato.                 |
| Layer 5 | Components, Controls, & Layouts | Parti mutabili dell’interfaccia usate dal programma.                   |
| Layer 4 | Graphs & Frames                 | Relazioni organizzate e contesto attivo dell’interfaccia.              |
| Layer 3 | Renderers                       | Processi che preparano l’informazione per l’output.                   |
| Layer 2 | Windows                         | Viste o contesti di consegna in cui passano input e output.            |
| Layer 1 | Systems                         | Ambiente, servizi, dispositivi e processi sotto l’interfaccia.         |
| Implied | Human Interface                 | L’utente che percepisce l’output e risponde tramite interaction.       |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Collega                                                 | Significato rapido                                      |
| --------- | ------------------------------------------------------- | ------------------------------------------------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | Collega dati digitali attivi a struttura interpretata.  |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Analizza strutture stabili in parti mutabili.           |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adatta parti utilizzabili in contesto organizzato.      |
| Bridge    | Graphs & Frames ↔ Renderers                             | Porta contesto organizzato verso il rendering.          |
| Surface   | Renderers ↔ Windows                                     | Collega output renderizzato a una window.               |
| Native    | Windows ↔ Systems                                       | Fornisce bindings tra una window e il system.           |

## Per flusso

Un riferimento compatto per tracciare come l’informazione si muove attraverso il Modello.

---

### Flusso orientato all’output

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

### Flusso orientato all’interaction

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

## Per responsabilità

Un riferimento rapido per identificare dove qualcosa appartiene nel Modello.

---

| Domanda                                                | Usa          |
| ------------------------------------------------------ | ------------ |
| Che tipo di informazione viene gestita?                | Domains      |
| Dove si trova l’informazione nel flusso?               | The Stack    |
| Come si muove l’informazione tra layers vicini?        | Connectors   |
| Che cosa sta cercando di ottenere l’utente?            | Interactions |

## Per domanda diagnostica

Un riferimento basato su domande per applicare il Modello a un sistema esistente.

---

| Domanda                                                     | Area probabile                            |
| ----------------------------------------------------------- | ----------------------------------------- |
| I dati sono disponibili ma non compresi?                    | Digital Data, Data, Structure & Semantics |
| I dati interpretati non sono ancora utilizzabili?           | Structure & Semantics, Parser, Components |
| Le parti utilizzabili non sono organizzate in contesto?     | Components, Adapter, Graphs & Frames      |
| Il contesto organizzato non raggiunge il renderer?          | Graphs & Frames, Bridge, Renderers        |
| L’output renderizzato non ha un posto dove andare?          | Renderers, Surface, Windows               |
| La window non è collegata correttamente al system?          | Windows, Native, Systems                  |
| Il system ha rilevato un’azione ma ha perso l’intento dell’utente? | Interactions e routing di interaction |

## In una frase

Un riassunto compatto dell’intero Modello.

---

```md
Il Modello CatalystUI descrive il flusso di informazioni tra un utente e un sistema informativo categorizzando i dati tramite Domains, collocando i dati nello Stack, trasformando i dati tramite Connectors e tracciando l’intento dell’utente tramite Interactions.
```
