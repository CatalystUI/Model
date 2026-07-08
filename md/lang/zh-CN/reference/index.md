<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 3. 参考

下面以多种格式汇总 CatalystUI Model，便于在学习、编写文档或实现该 Model 时查阅、复制和应用。

Reference 页面并不用于取代周围的文档。相反，它在术语、摘要、domains、stack、connectors 和 interactions 已经介绍之后，提供一份紧凑的 Model 视图。

## 按 AI Prompt

一个可帮助 LLM 解释和理解 CatalystUI Model 的 AI prompt。它可用于询问关于 Model 的问题、将现有系统与 Model 对照，或在技术环境中解决问题时作为参考表。

---

```md
CatalystUI Model 是一个通用模型，用于描述用户与信息系统之间的信息流动。

Process 是接收输入、执行转换并产生输出的事物。System 是一组有组织的 processes，由它们如何交互以及按什么顺序执行来定义。Interface 是允许两个不同 systems 交互的机制。Information system 是一种专门处理持久数据的 system，并允许用户随着时间通过 interface 创建、读取、更新或删除这些数据。Computer 是一种只处理 digital data 的 information system，也就是处理可以用二进制表示并由机器加工的数据。User 是能够与 information system 交互的人。

在 CatalystUI Model 中，"data" 和 "information" 两个术语被视为可以互换。

Model 通过信息流描述用户界面。Information 可以由 system 呈现，被 user 解释，由 user 作出回应，被 system 处理，然后随着循环继续再次呈现。这个循环可以从任何一点开始，但模式相同：information 通过 interface 在 user 和 information system 之间流动。

CatalystUI Model 分为三个主要类别：

- Domains
- The Stack
- Connectors

Domains 对 data 进行分类。The Stack 描述 data。Connectors 对 data 进行转换、修改和翻译。

Domains 描述一次 interaction 中正在处理哪类 information。七个顶层 domains 是 Symbolic、Visual、Auditory、Tactile、Olfactory、Gustatory 和 Multisensory。Symbolic data 是尚未绑定到特定感官的信息。Visual data 是用于被看见的信息。Auditory data 是用于被听见的信息。Tactile data 是用于被触摸或感受到的信息。Olfactory data 是用于被闻到的信息。Gustatory data 是用于被尝到的信息。Multisensory data 是多个感官类别作为一次体验共同工作的 information。

The Stack 描述 information 在流动中所处的位置。它包含七个显式 layers 和两个隐式端点。自上而下，The Stack 是：

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage 是隐式来源或目的地，持久数据在主动 interface flow 之外保持可用。Digital Data 是 data 进入主动 interface flow 后的计算机可读形式，但此时 Model 的其余部分尚未解释、组织或呈现它。Structure & Semantics 描述 digital data 应如何被理解；semantics 定义解释 data 的规则，而 structure 是应用这些规则后得到的有组织结果。Components, Controls, & Layouts 表示 interface 中逻辑上可用的部分；components 表示可用的 interface objects，controls 处理 interactions，layouts 安排其他 components 或 controls。Graphs & Frames 将这些部分组织成更大的关系和 active contexts；graphs 表示 interface objects 之间有组织的关系，而 frames 包含并协调 graphs，以便面向 renderer 进行准备。Renderers 将准备好的 interface data 转换为可输出的形式。Windows 提供 view 或 context，user 可通过它向 system 提供 input 或从 system 接收 output。Systems 提供最终交付 output 和接收 input 的环境、服务、设备和 processes。Human Interface 是隐式端点，user 在这里感知 information 并通过 interaction 作出回应。

Connectors 描述 information 如何在 Stack 中相邻的显式 layers 之间移动。自上而下，connectors 是：

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector 将 Digital Data 连接到 Structure & Semantics。它把主动的计算机可读 information 带入 Model 能理解的结构化形式，也可以把结构化 information 返回为 digital form。

Parser connector 将 Structure & Semantics 连接到 Components, Controls, & Layouts。它把稳定的已解释 structures 解析为可变的 interface parts，也可以把被修改的 components 返回为 structured data。

Adapter connector 将 Components, Controls, & Layouts 连接到 Graphs & Frames。它把可用的 interface parts 适配为有组织的关系和 active contexts，并帮助把 contextual interactions 返回给能够处理它们的 components 或 controls。

Bridge connector 将 Graphs & Frames 连接到 Renderers。它把有组织的 interface context 传入 renderer，并通常以很少修改将 interactions 向上传回，使 graph 和 frame 能够适当地路由它们。

Surface connector 将 Renderers 连接到 Windows。它为 rendered output 在 window 内提供目的地，并把源自 window 的 interaction information 向上传回。

Native connector 将 Windows 连接到 Systems。它在 window 与 system 之间提供 bindings，使 window 能够存在、接收 interactions、交付 output，并与 native system behavior 通信。

Interactions 是 Model 变得可参与的地方。Interaction 是 action 背后的 intent。点击、轻触、滑动、命令、移动或 spoken word 只是可见的 action；interaction 是 user 想通过该 action 完成的事情。Interactions 穿过 Stack，由 connectors 转换，并最终可能修改 digital data，然后循环再次开始。

使用 CatalystUI Model 来分类正在处理的 information 类型，识别该 information 在 Stack 中的位置，确定哪个 connector 负责 layers 之间的 transition，并追踪 information 如何从存储的数据移动到用户体验，以及如何从用户意图返回到 data。
```

## 按文本

一份紧凑参考表，展示 CatalystUI Model 的主要顺序。

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

| Domain       | 快速含义 |
| ------------ | -------- |
| Symbolic     | 尚未绑定到特定感官的信息。 |
| Visual       | 用于被看见的信息。 |
| Auditory     | 用于被听见的信息。 |
| Tactile      | 用于被触摸或感受到的信息。 |
| Olfactory    | 用于被闻到的信息。 |
| Gustatory    | 用于被尝到的信息。 |
| Multisensory | 多个感官类别作为一次体验共同工作。 |

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

| Layer   | 名称                            | 快速含义 |
| ------- | ------------------------------- | -------- |
| Implied | Data Storage                    | 主动 interface flow 之外的持久数据。 |
| Layer 7 | Digital Data                    | 解释之前的主动计算机可读信息。 |
| Layer 6 | Structure & Semantics           | 已解释的数据以及赋予其意义的规则。 |
| Layer 5 | Components, Controls, & Layouts | 程序使用的可变 interface parts。 |
| Layer 4 | Graphs & Frames                 | 有组织的关系和主动 interface context。 |
| Layer 3 | Renderers                       | 为输出准备 information 的 processes。 |
| Layer 2 | Windows                         | input 与 output 经过的 views 或 delivery contexts。 |
| Layer 1 | Systems                         | interface 之下的环境、服务、设备和 processes。 |
| Implied | Human Interface                 | 感知 output 并通过 interaction 回应的 user。 |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | 连接 | 快速含义 |
| --------- | ---- | -------- |
| Data      | Digital Data ↔ Structure & Semantics                    | 将主动 digital data 连接到 interpreted structure。 |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | 将稳定 structures 解析为可变 interface parts。 |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | 将可用 parts 适配到有组织的 context。 |
| Bridge    | Graphs & Frames ↔ Renderers                             | 将有组织的 context 接入 rendering。 |
| Surface   | Renderers ↔ Windows                                     | 将 rendered output 连接到 window。 |
| Native    | Windows ↔ Systems                                       | 在 window 和 system 之间提供 bindings。 |

## 按 Flow

一份紧凑参考，用于追踪 information 如何穿过 Model。

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

## 按责任

一份快速参考，用于判断某个事物在 Model 中属于哪里。

---

| 问题 | 使用 |
| ---- | ---- |
| 正在处理哪种 information？ | Domains |
| information 位于 flow 的哪里？ | The Stack |
| information 如何在相邻 layers 之间移动？ | Connectors |
| user 想完成什么？ | Interactions |

## 按诊断问题

一份基于问题的参考，用于将 Model 应用于现有 system。

---

| 问题 | 可能区域 |
| ---- | -------- |
| data 可用但尚未被理解吗？ | Digital Data, Data, Structure & Semantics |
| interpreted data 还不可用吗？ | Structure & Semantics, Parser, Components |
| 可用 parts 尚未组织成 context 吗？ | Components, Adapter, Graphs & Frames |
| organized context 没有到达 renderer 吗？ | Graphs & Frames, Bridge, Renderers |
| rendered output 没有去处吗？ | Renderers, Surface, Windows |
| window 没有正确连接到 system 吗？ | Windows, Native, Systems |
| system 检测到了 action 却错过了 user intent 吗？ | Interactions and interaction routing |

## 一句话总结

整个 Model 的紧凑总结。

---

```md
CatalystUI Model 通过 Domains 对 data 分类，通过 The Stack 定位 data，通过 Connectors 转换 data，并通过 Interactions 追踪 user intent，从而描述 user 与 information system 之间的 information flow。
```
