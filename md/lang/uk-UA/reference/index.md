# 3. Довідник

Нижче CatalystUI Model подано в кількох форматах, щоб його було простіше використовувати як довідку, копіювати й застосовувати під час вивчення, документування або реалізації Моделі.

Сторінка Reference не замінює навколишню документацію. Натомість вона дає компактний огляд Моделі після того, як terminology, summary, domains, stack, connectors і interactions уже представлені.

## Як AI Prompt

AI prompt, який може допомогти LLM інтерпретувати й зрозуміти CatalystUI Model. Його можна використовувати, щоб ставити запитання про Модель, порівнювати з нею наявні systems або мати довідковий аркуш під час розв’язання технічних задач.

---

```md
CatalystUI Model — це універсальна модель для опису потоку інформації між користувачем та інформаційною системою.

Process — це те, що приймає input, виконує transformation і створює output. System — це організований набір processes, визначений тим, як вони взаємодіють і в якому порядку виконуються. Interface — це mechanism, який дозволяє двом різним systems взаємодіяти. Information system — це спеціалізована system, яка працює з persistent data і дозволяє user з часом створювати, читати, оновлювати або видаляти їх через interface. Computer — це information system, яка працює виключно з digital data, тобто з data, що можуть бути представлені у binary form і оброблені machine. User — це людина, яка може взаємодіяти з information system.

У CatalystUI Model терміни "data" і "information" вважаються взаємозамінними.

Модель описує користувацькі інтерфейси через потік інформації. Information може бути представлена system, інтерпретована user, отримати відповідь від user, бути оброблена system і знову представлена, поки цикл триває. Цикл може початися з будь-якої точки, але діє той самий pattern: information тече між user і information system через interface.

CatalystUI Model поділяється на три основні категорії:

- Domains
- The Stack
- Connectors

Domains категоризують data. The Stack описує data. Connectors перетворюють, змінюють і перекладають data.

Domains описують, який вид information обробляється під час interaction. Сім top-level domains — Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory і Multisensory. Symbolic data — це information до прив’язки до конкретного чуття. Visual data — information, призначена для зору. Auditory data — information, призначена для слуху. Tactile data — information, призначена для дотику або відчуття. Olfactory data — information, призначена для нюху. Gustatory data — information, призначена для смаку. Multisensory data — information, у якій кілька sensory categories працюють разом як один experience.

The Stack описує, де information розташована в потоці. Він містить сім явних layers із двома неявними endpoints. Згори вниз The Stack виглядає так:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage — це неявне джерело або призначення, де persistent data лишаються доступними за межами active interface flow. Digital Data — це data після входу в active interface flow у computer-readable form, але до того, як решта Моделі інтерпретувала, організувала або представила їх. Structure & Semantics описує, як digital data мають розумітися; semantics задає rules для інтерпретації data, а structure є організованим результатом застосування цих rules. Components, Controls, & Layouts представляють логічні й придатні частини interface; components представляють usable interface objects, controls обробляють interactions, а layouts розташовують інші components або controls. Graphs & Frames організовують ці частини у більші relationships і active contexts; graphs представляють organized relationships між interface objects, а frames містять і координують graphs для renderer-facing preparation. Renderers перетворюють підготовлені interface data на output-ready form. Windows надають view або context, через який user може передати input до system або отримати output від system. Systems надають environment, services, devices і processes, які зрештою доставляють output і приймають input. Human Interface — неявний endpoint, де user сприймає information і відповідає через interaction.

Connectors описують, як information рухається між сусідніми явними layers Stack. Згори вниз connectors такі:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector з’єднує Digital Data зі Structure & Semantics. Він переносить active computer-readable information у structured form, зрозумілу Моделі, а також може повертати structured information назад у digital form.

Parser connector з’єднує Structure & Semantics із Components, Controls, & Layouts. Він розбирає stable interpreted structures на mutable interface parts, а також може повертати modified components назад у structured data.

Adapter connector з’єднує Components, Controls, & Layouts із Graphs & Frames. Він адаптує usable interface parts в organized relationships і active contexts, а також допомагає повертати contextual interactions до components або controls, які можуть їх обробити.

Bridge connector з’єднує Graphs & Frames із Renderers. Він переносить organized interface context у renderer і зазвичай передає interactions назад угору з невеликими змінами, щоб graph і frame могли правильно їх маршрутизувати.

Surface connector з’єднує Renderers із Windows. Він дає rendered output місце призначення всередині window і переносить window-originating interaction information назад угору.

Native connector з’єднує Windows із Systems. Він надає bindings між window і system, дозволяючи window існувати, приймати interactions, доставляти output і спілкуватися з native system behavior.

Interactions — це точка, де Модель стає участю. Interaction — це intent за action. Click, tap, swipe, command, movement або spoken word є лише видимим action; interaction — це те, чого user намагається досягти через це action. Interactions рухаються через Stack, перетворюються connectors і можуть зрештою змінити digital data, перш ніж цикл почнеться знову.

Використовуйте CatalystUI Model, щоб класифікувати вид information, яка обробляється, визначити, де ця information розташована в Stack, з’ясувати, який connector відповідає за transition між layers, і простежити, як information рухається від stored data до user experience і від user intent назад до data.
```

## Як текст

Компактний довідковий аркуш, що показує основний порядок CatalystUI Model.

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

| Domain       | Коротке значення |
| ------------ | ---------------- |
| Symbolic     | Information до прив’язки до конкретного чуття. |
| Visual       | Information, призначена для зору. |
| Auditory     | Information, призначена для слуху. |
| Tactile      | Information, призначена для дотику або відчуття. |
| Olfactory    | Information, призначена для нюху. |
| Gustatory    | Information, призначена для смаку. |
| Multisensory | Кілька sensory categories, що працюють як один experience. |

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

| Layer   | Name                            | Коротке значення |
| ------- | ------------------------------- | ---------------- |
| Implied | Data Storage                    | Persistent data поза active interface flow. |
| Layer 7 | Digital Data                    | Active computer-readable information до interpretation. |
| Layer 6 | Structure & Semantics           | Interpreted data і rules, що надають їм meaning. |
| Layer 5 | Components, Controls, & Layouts | Mutable interface parts, які використовує program. |
| Layer 4 | Graphs & Frames                 | Organized relationships і active interface context. |
| Layer 3 | Renderers                       | Processes, які готують information до output. |
| Layer 2 | Windows                         | Views або delivery contexts, через які проходять input і output. |
| Layer 1 | Systems                         | Environment, services, devices і processes під interface. |
| Implied | Human Interface                 | User, який сприймає output і відповідає через interaction. |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Connects                                                | Коротке значення |
| --------- | ------------------------------------------------------- | ---------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | З’єднує active digital data з interpreted structure. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Розбирає stable structures на mutable interface parts. |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Адаптує usable parts в organized context. |
| Bridge    | Graphs & Frames ↔ Renderers                             | Переносить organized context у rendering. |
| Surface   | Renderers ↔ Windows                                     | З’єднує rendered output із window. |
| Native    | Windows ↔ Systems                                       | Надає bindings між window і system. |

## За Flow

Компактна довідка для відстеження того, як information рухається через Model.

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

## За відповідальністю

Коротка довідка для визначення того, куди щось належить у Model.

---

| Запитання | Використати |
| --------- | ----------- |
| Який вид information обробляється? | Domains |
| Де information розташована у flow? | The Stack |
| Як information рухається між сусідніми layers? | Connectors |
| Чого user намагається досягти? | Interactions |

## За діагностичним запитанням

Довідка на основі запитань для застосування Model до наявної system.

---

| Запитання | Ймовірна область |
| --------- | ---------------- |
| Data доступні, але не зрозумілі? | Digital Data, Data, Structure & Semantics |
| Interpreted data ще не можна використовувати? | Structure & Semantics, Parser, Components |
| Usable parts ще не організовані в контекст? | Components, Adapter, Graphs & Frames |
| Organized context не доходить до renderer? | Graphs & Frames, Bridge, Renderers |
| Rendered output не має куди йти? | Renderers, Surface, Windows |
| Window неправильно з’єднане із system? | Windows, Native, Systems |
| System виявив action, але пропустив user intent? | Interactions and interaction routing |

## Одним реченням

Короткий підсумок усієї Моделі.

---

```md
CatalystUI Model описує потік information між user і information system, категоризуючи data через Domains, розміщуючи data всередині Stack, перетворюючи data через Connectors і відстежуючи user intent через Interactions.
```
