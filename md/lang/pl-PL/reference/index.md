<!--
To tłumaczenie zostało wygenerowane przez ChatGPT i powinno zostać sprawdzone przez tłumacza-człowieka.
Usuń te wiersze w pull requeście po zweryfikowaniu tłumaczenia.
-->

# 8. Referencja

Poniżej znajduje się skondensowana referencja Modelu CatalystUI. Jej celem jest szybkie przypomnienie nazw, kolejności i odpowiedzialności poszczególnych części Modelu.

## Jako prompt dla AI

Prompt, który może pomóc modelowi językowemu zinterpretować i zrozumieć Model CatalystUI:

---

```md
CatalystUI Framework jest zestawem narzędzi programistycznych C# pomagających w tworzeniu interfejsów użytkownika dla nowoczesnego oprogramowania.

Model CatalystUI opisuje pełny proces przekształcania Digital Data w Perceivable Data oraz przekształcania Interaction Data z powrotem w Digital Data. Model najpierw identyfikuje, a następnie reprezentuje niejawny kontrakt, jaki człowiek zawiera z komputerem podczas korzystania z interfejsu.

Model dzieli się na trzy główne kategorie:

- Domains
- The Stack
- Connectors

Domains kategoryzują dane według ich roli zmysłowej. Siedem domen to: Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory i Multisensory. Symbolic oznacza informację przed przypisaniem do konkretnego zmysłu. Visual oznacza informację przeznaczoną do zobaczenia. Auditory oznacza informację przeznaczoną do usłyszenia. Tactile oznacza informację przeznaczoną do odczucia. Olfactory oznacza informację przeznaczoną do powąchania. Gustatory oznacza informację przeznaczoną do posmakowania. Multisensory oznacza wiele kategorii zmysłowych działających razem jako jedno doświadczenie.

The Stack opisuje, gdzie informacja znajduje się w przepływie między użytkownikiem a systemem informacyjnym. Od góry do dołu Stos składa się z: [Implied] Data Storage, Layer 7: Digital Data, Layer 6: Structure & Semantics, Layer 5: Components, Controls, & Layouts, Layer 4: Graphs & Frames, Layer 3: Renderers, Layer 2: Windows, Layer 1: Systems oraz [Implied] Human Interface.

Data Storage jest implikowanym źródłem lub miejscem docelowym, gdzie dane trwałe pozostają dostępne poza aktywnym przepływem interfejsu. Digital Data to dane po wejściu do aktywnego przepływu w formie czytelnej dla komputera, ale przed interpretacją, organizacją lub prezentacją. Structure & Semantics opisuje, jak dane cyfrowe powinny być rozumiane; semantics definiują reguły interpretacji, a structure jest uporządkowanym wynikiem zastosowania tych reguł. Components, Controls, & Layouts reprezentują logiczne i użyteczne części interfejsu; components są obiektami interfejsu, controls przetwarzają interakcje, a layouts układają inne komponenty lub kontrolki. Graphs & Frames organizują te części w większe relacje i aktywne konteksty. Renderers przekształcają przygotowane dane interfejsu w formę gotową do wyjścia. Windows zapewniają widoki lub konteksty dostarczenia, przez które przechodzi wejście i wyjście. Systems zapewniają środowisko, usługi, urządzenia i procesy pod interfejsem. Human Interface jest implikowanym punktem końcowym, w którym użytkownik odbiera informację i odpowiada interakcją.

Connectors opisują, jak informacja przemieszcza się między sąsiednimi jawnymi warstwami Stosu. Od góry do dołu są to: Data (Layer 7 ↔ Layer 6), Parser (Layer 6 ↔ Layer 5), Adapter (Layer 5 ↔ Layer 4), Bridge (Layer 4 ↔ Layer 3), Surface (Layer 3 ↔ Layer 2) oraz Native (Layer 2 ↔ Layer 1). Data łączy aktywne dane cyfrowe ze strukturą i semantyką. Parser parsuje stabilne struktury do mutowalnych części interfejsu. Adapter adaptuje użyteczne części do zorganizowanego kontekstu. Bridge przenosi kontekst do renderowania. Surface łączy wyrenderowane wyjście z oknem. Native zapewnia bindings między oknem a systemem.

Interactions opisują zamiar stojący za akcją użytkownika. Kliknięcie, tapnięcie, gest, komenda, ruch lub wypowiedziane słowo jest widoczną akcją; interakcja jest tym, co użytkownik próbuje osiągnąć przez tę akcję. Interakcje przemieszczają się przez Stos, są przekształcane przez łączniki i mogą ostatecznie zmienić Digital Data, zanim cykl zacznie się ponownie.

Używaj Modelu CatalystUI, aby klasyfikować rodzaj obsługiwanej informacji, identyfikować jej położenie w Stosie, określać łącznik odpowiedzialny za przejście między warstwami oraz śledzić, jak informacja przechodzi od danych przechowywanych do doświadczenia użytkownika i od zamiaru użytkownika z powrotem do danych.
```

## Jako tekst

Krótka karta referencyjna pokazująca podstawową kolejność Modelu CatalystUI.

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

| Domain       | Szybkie znaczenie                                           |
| ------------ | ----------------------------------------------------------- |
| Symbolic     | Informacja przed przypisaniem do konkretnego zmysłu.        |
| Visual       | Informacja przeznaczona do zobaczenia.                      |
| Auditory     | Informacja przeznaczona do usłyszenia.                      |
| Tactile      | Informacja przeznaczona do odczucia.                        |
| Olfactory    | Informacja przeznaczona do powąchania.                      |
| Gustatory    | Informacja przeznaczona do posmakowania.                    |
| Multisensory | Wiele kategorii zmysłowych działających jako jedno doświadczenie. |

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

| Warstwa | Nazwa                           | Szybkie znaczenie                                                        |
| ------- | ------------------------------- | ------------------------------------------------------------------------ |
| Implied | Data Storage                    | Dane trwałe poza aktywnym przepływem interfejsu.                         |
| Layer 7 | Digital Data                    | Aktywna informacja czytelna dla komputera przed interpretacją.           |
| Layer 6 | Structure & Semantics           | Zinterpretowane dane i reguły nadające im znaczenie.                    |
| Layer 5 | Components, Controls, & Layouts | Mutowalne części interfejsu używane przez program.                       |
| Layer 4 | Graphs & Frames                 | Zorganizowane relacje i aktywny kontekst interfejsu.                    |
| Layer 3 | Renderers                       | Procesy przygotowujące informację do wyjścia.                            |
| Layer 2 | Windows                         | Widoki lub konteksty dostarczenia, przez które przechodzi wejście i wyjście. |
| Layer 1 | Systems                         | Środowisko, usługi, urządzenia i procesy pod interfejsem.                |
| Implied | Human Interface                 | Użytkownik, który odbiera wyjście i odpowiada interakcją.                |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Łączy                                                   | Szybkie znaczenie                                      |
| --------- | ------------------------------------------------------- | ------------------------------------------------------ |
| Data      | Digital Data ↔ Structure & Semantics                    | Łączy aktywne dane cyfrowe ze zinterpretowaną strukturą. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Parsuje stabilne struktury do mutowalnych części.      |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adaptuje użyteczne części do zorganizowanego kontekstu. |
| Bridge    | Graphs & Frames ↔ Renderers                             | Przenosi zorganizowany kontekst do renderowania.       |
| Surface   | Renderers ↔ Windows                                     | Łączy wyrenderowane wyjście z oknem.                   |
| Native    | Windows ↔ Systems                                       | Zapewnia bindings między oknem a systemem.             |

## Według przepływu

### Przepływ wyjścia

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

### Przepływ interakcji

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

## Według odpowiedzialności

| Pytanie                                                | Użyj         |
| ------------------------------------------------------ | ------------ |
| Jaki rodzaj informacji jest obsługiwany?               | Domains      |
| Gdzie informacja znajduje się w przepływie?            | The Stack    |
| Jak informacja przechodzi między sąsiednimi warstwami? | Connectors   |
| Co użytkownik próbuje osiągnąć?                        | Interactions |

## Według pytania diagnostycznego

| Pytanie                                                     | Prawdopodobny obszar                      |
| ----------------------------------------------------------- | ------------------------------------------ |
| Dane są dostępne, ale nie są rozumiane?                     | Digital Data, Data, Structure & Semantics  |
| Zinterpretowane dane nie są jeszcze użyteczne?              | Structure & Semantics, Parser, Components  |
| Użyteczne części nie są zorganizowane w kontekst?           | Components, Adapter, Graphs & Frames       |
| Zorganizowany kontekst nie dociera do renderera?            | Graphs & Frames, Bridge, Renderers         |
| Wyrenderowane wyjście nie ma dokąd trafić?                  | Renderers, Surface, Windows                |
| Window nie jest poprawnie połączone z systemem?             | Windows, Native, Systems                   |
| System wykrył akcję, ale zgubił zamiar użytkownika?         | Interactions i trasowanie interakcji       |

## Jednozdaniowe podsumowanie

```md
Model CatalystUI opisuje przepływ informacji między użytkownikiem a systemem informacyjnym przez kategoryzowanie danych w Domains, lokalizowanie danych w The Stack, przekształcanie danych przez Connectors oraz śledzenie zamiaru użytkownika przez Interactions.
```
