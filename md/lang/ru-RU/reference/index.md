<!--
Этот перевод был создан ChatGPT и должен быть проверен человеком-переводчиком.
Удалите эти строки в pull request после проверки перевода.
-->

# 3. Справочник

Ниже CatalystUI Model представлен в нескольких форматах, чтобы его было проще использовать как справку, копировать и применять при изучении, документировании или реализации Модели.

Страница Reference не заменяет окружающую документацию. Вместо этого она даёт компактный обзор Модели после того, как terminology, summary, domains, stack, connectors и interactions уже представлены.

## Как AI Prompt

AI prompt, который может помочь LLM интерпретировать и понять CatalystUI Model. Его можно использовать, чтобы задавать вопросы о Модели, сравнивать с ней существующие systems или иметь справочный лист при решении технических задач.

---

```md
CatalystUI Model — это универсальная модель для описания потока информации между пользователем и информационной системой.

Process — это то, что принимает input, выполняет transformation и создаёт output. System — это организованный набор processes, определяемый тем, как они взаимодействуют и в каком порядке выполняются. Interface — это механизм, позволяющий двум различным systems взаимодействовать. Information system — это специализированная system, которая работает с persistent data и позволяет user со временем создавать, читать, обновлять или удалять их через interface. Computer — это information system, которая работает исключительно с digital data, то есть с data, которые могут быть представлены в binary form и обработаны machine. User — это человек, который может взаимодействовать с information system.

В CatalystUI Model термины "data" и "information" считаются взаимозаменяемыми.

Модель описывает пользовательские интерфейсы через поток информации. Information может быть представлена system, интерпретирована user, получить ответ от user, быть обработана system и снова представлена по мере продолжения цикла. Цикл может начаться в любой точке, но действует один и тот же pattern: information течёт между user и information system через interface.

CatalystUI Model делится на три основные категории:

- Domains
- The Stack
- Connectors

Domains категоризируют data. The Stack описывает data. Connectors преобразуют, изменяют и переводят data.

Domains описывают, какой вид information обрабатывается во время interaction. Семь top-level domains — Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory и Multisensory. Symbolic data — это information до привязки к конкретному чувству. Visual data — information, предназначенная для зрения. Auditory data — information, предназначенная для слуха. Tactile data — information, предназначенная для осязания. Olfactory data — information, предназначенная для обоняния. Gustatory data — information, предназначенная для вкуса. Multisensory data — information, в которой несколько sensory categories работают вместе как один experience.

The Stack описывает, где information находится в потоке. Он содержит семь явных layers с двумя подразумеваемыми endpoints. Сверху вниз The Stack выглядит так:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage — это подразумеваемый источник или назначение, где persistent data остаются доступными за пределами active interface flow. Digital Data — это data после входа в active interface flow в computer-readable form, но до того, как остальная Модель интерпретировала, организовала или представила их. Structure & Semantics описывает, как digital data должны пониматься; semantics задаёт rules для интерпретации data, а structure является организованным результатом применения этих rules. Components, Controls, & Layouts представляют логические и используемые части interface; components представляют usable interface objects, controls обрабатывают interactions, а layouts располагают другие components или controls. Graphs & Frames организуют эти части в более крупные relationships и active contexts; graphs представляют organized relationships между interface objects, а frames содержат и координируют graphs для renderer-facing preparation. Renderers преобразуют подготовленные interface data в output-ready form. Windows предоставляют view или context, через который user может передать input system или получить output от system. Systems предоставляют environment, services, devices и processes, которые в конечном итоге доставляют output и принимают input. Human Interface — подразумеваемый endpoint, где user воспринимает information и отвечает через interaction.

Connectors описывают, как information движется между соседними явными layers Stack. Сверху вниз connectors таковы:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector соединяет Digital Data со Structure & Semantics. Он переводит active computer-readable information в structured form, понятную Модели, а также может возвращать structured information обратно в digital form.

Parser connector соединяет Structure & Semantics с Components, Controls, & Layouts. Он разбирает stable interpreted structures в mutable interface parts, а также может возвращать modified components обратно в structured data.

Adapter connector соединяет Components, Controls, & Layouts с Graphs & Frames. Он адаптирует usable interface parts в organized relationships и active contexts, а также помогает возвращать contextual interactions к components или controls, которые могут их обработать.

Bridge connector соединяет Graphs & Frames с Renderers. Он переносит organized interface context в renderer и обычно передаёт interactions обратно вверх с небольшими изменениями, чтобы graph и frame могли правильно их маршрутизировать.

Surface connector соединяет Renderers с Windows. Он даёт rendered output место назначения внутри window и переносит window-originating interaction information обратно вверх.

Native connector соединяет Windows с Systems. Он предоставляет bindings между window и system, позволяя window существовать, принимать interactions, доставлять output и общаться с native system behavior.

Interactions — это точка, где Модель становится участной. Interaction — это intent за action. Click, tap, swipe, command, movement или spoken word являются только видимым action; interaction — это то, чего user пытается достичь через это action. Interactions движутся через Stack, преобразуются connectors и могут в итоге изменить digital data, прежде чем цикл начнётся снова.

Используйте CatalystUI Model, чтобы классифицировать вид обрабатываемой information, определить, где эта information находится в Stack, понять, какой connector отвечает за transition между layers, и проследить, как information движется от stored data к user experience и от user intent обратно к data.
```

## Как текст

Компактный справочный лист, показывающий основной порядок CatalystUI Model.

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

| Domain       | Краткое значение |
| ------------ | ---------------- |
| Symbolic     | Information до привязки к конкретному чувству. |
| Visual       | Information, предназначенная для зрения. |
| Auditory     | Information, предназначенная для слуха. |
| Tactile      | Information, предназначенная для осязания. |
| Olfactory    | Information, предназначенная для обоняния. |
| Gustatory    | Information, предназначенная для вкуса. |
| Multisensory | Несколько sensory categories, работающих как один experience. |

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

| Layer   | Name                            | Краткое значение |
| ------- | ------------------------------- | ---------------- |
| Implied | Data Storage                    | Persistent data вне active interface flow. |
| Layer 7 | Digital Data                    | Active computer-readable information до interpretation. |
| Layer 6 | Structure & Semantics           | Interpreted data и rules, придающие им meaning. |
| Layer 5 | Components, Controls, & Layouts | Mutable interface parts, используемые program. |
| Layer 4 | Graphs & Frames                 | Organized relationships и active interface context. |
| Layer 3 | Renderers                       | Processes, подготавливающие information к output. |
| Layer 2 | Windows                         | Views или delivery contexts, через которые проходят input и output. |
| Layer 1 | Systems                         | Environment, services, devices и processes под interface. |
| Implied | Human Interface                 | User, который воспринимает output и отвечает через interaction. |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Connects                                                | Краткое значение |
| --------- | ------------------------------------------------------- | ---------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | Соединяет active digital data с interpreted structure. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Разбирает stable structures в mutable interface parts. |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Адаптирует usable parts в organized context. |
| Bridge    | Graphs & Frames ↔ Renderers                             | Переносит organized context в rendering. |
| Surface   | Renderers ↔ Windows                                     | Соединяет rendered output с window. |
| Native    | Windows ↔ Systems                                       | Предоставляет bindings между window и system. |

## По Flow

Компактная справка для отслеживания того, как information движется через Model.

---

### Output-Facing Flow

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

### Interaction-Facing Flow

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

## По ответственности

Краткая справка для определения того, куда что-либо относится в Model.

---

| Вопрос | Использовать |
| ------ | ------------ |
| Какой вид information обрабатывается? | Domains |
| Где information находится в flow? | The Stack |
| Как information движется между соседними layers? | Connectors |
| Чего user пытается достичь? | Interactions |

## По диагностическому вопросу

Справка на основе вопросов для применения Model к существующей system.

---

| Вопрос | Вероятная область |
| ------ | ----------------- |
| Data доступны, но не поняты? | Digital Data, Data, Structure & Semantics |
| Interpreted data ещё нельзя использовать? | Structure & Semantics, Parser, Components |
| Usable parts ещё не организованы в контекст? | Components, Adapter, Graphs & Frames |
| Organized context не достигает renderer? | Graphs & Frames, Bridge, Renderers |
| Rendered output некуда идти? | Renderers, Surface, Windows |
| Window неправильно соединено с system? | Windows, Native, Systems |
| System обнаружил action, но упустил user intent? | Interactions and interaction routing |

## Одним предложением

Краткое резюме всей Модели.

---

```md
CatalystUI Model описывает поток information между user и information system, категоризируя data через Domains, размещая data внутри Stack, преобразуя data через Connectors и отслеживая user intent через Interactions.
```
