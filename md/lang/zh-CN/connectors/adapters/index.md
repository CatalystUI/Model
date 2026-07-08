<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 6.3 Connectors :: Adapter

## 深入讨论

### 从使用到上下文

**Adapter** connector 位于 **Layer 5: Components, Controls, & Layouts** 和 **Layer 4: Graphs & Frames** 之间。它负责把可变 interface data 放入更大的上下文中，使它能够被组织、发现、routing、设定边界，并为 Stack 的其余部分做准备。

Layer 5 给系统 components、controls 和 layouts。这些是 developer 可以直接操作的可变部分。component 可以表示一条信息。control 可以响应一次交互。layout 可以按照特定顺序组织其他 components。然而，这些部分并不能完整描述它们所在的环境。它们可以知道自己是什么，也可以知道自己如何行为，但它们不会自动知道自己如何关联到整个界面。

Adapter connector 提供了从单独可用部分到有组织上下文的移动。它接收通过 Parser connector 产生的 components，并把它们适配到 graphs 和 frames 中。这里是 Stack 开始理解的不仅是某个 component 存在，还包括它属于哪里、如何与其他 components 相关，以及应该如何参与活动界面的地方。

换句话说，Parser connector 让结构化信息变得可用。Adapter connector 让可用信息获得上下文。

### 把 Components 适配到 Graphs

component 可以独立存在，但用户界面很少只由一个孤立 component 组成。即使最简单的界面通常也包含关系：一个 component 可以包含另一个，一个 control 可以依赖某个 layout，一个组可能需要一起被搜索、排序、启用、禁用、聚焦或更新。

这就是 graph 变得重要的地方。

Adapter connector 允许 components、controls 和 layouts 被放入 graph 中，使它们能够作为更大整体的一部分被组织。graph 可以存储 components、跟踪它们的关系、暴露查询它们的方式，并提供把它们作为集合管理所需的周围逻辑。没有这一步，components 会停留为分散的可变数据片段，而不是统一界面的参与者。

例如，settings component 本身可能很有用。一旦被适配到 graph 中，它就可以成为完整 settings view 的一部分，连接到其他 sections，按名称搜索，与相关值一起更新，或在用户执行 action 时被 routing 到。这个 component 并没有停止作为 component，但它通过 graph 获得了上下文。

这个区分帮助 Layer 5 和 Layer 4 保持分离。Components 描述可用的 interface data。Graphs 描述这些部分如何被一起组织。

### Layout 不是全部上下文

Adapter connector 也帮助澄清 layout 和 graph 的区别。因为 layouts 能组织 components，人们可能会想把它们当成界面的完整组织层。然而，layout 只以某种特定方式组织 components。它不一定描述这些 components 的完整关系、lifecycle、routing 或环境上下文。

垂直 layout 可以决定几个 controls 应该按顺序出现。这并不意味着 layout 负责整个界面。它不需要知道每个活动 component、管理每次交互、准备 output boundary，或作为系统的最高层中介。这些职责属于 Layer 4。

Adapter connector 尊重这个区分。它可以把 Layer 5 的 layout 放入 graph，但 layout 不会仅仅因为排列 components 就变成 graph。graph 提供更宽的组织上下文，而 layout 仍然是一个 component，其目的在于排列其他 components。

随着界面增长，这种分离尤其有用。简单排列可以保持简单，同时更大的系统仍然提供管理 discovery、routing、updates 和 output 准备所需的结构。

### 连接到 Frame

Layer 4 不只关注 graphs。它还包含 frame，frame 表示有组织 components 和 Stack 下层之间的活动边界与通信点。

Adapter connector 帮助 components 进入这个 framed context。component 可能有尺寸，control 可能有交互行为，layout 可能描述相对放置，但 frame 决定这些部分被准备时所处的边界。它关注活动区域、周围上下文，以及最终必须向 rendering 传递的信息。

这并不意味着 Adapter connector 会 render 任何东西。Rendering 属于下层。Adapter connector 准备有组织的界面，使 frame 能够正确传达它。它把 component 关系、layout 结果和上下文信息提供给 frame，然后下一个 connector 才把这些信息带向 renderer。

通过这种方式，Adapter connector 在“这些是我们可以使用的部分”和“这是我们正在准备的有组织界面”之间充当桥梁。

### 通过适配实现复用

Adapter connector 最强大的部分之一是，同一个 component 可以被适配到不同上下文中。component 不需要永久绑定到一个 graph、一个 frame 或一种界面。它的意义和行为可以保持稳定，而 Adapter connector 决定它应该如何参与特定环境。

document component 可以被适配到 editing graph、preview graph 或 printing graph。music component 可以被适配到 playback graph、editing graph 或 library graph。一组 settings components 可以被适配到简单 preferences page、高级 configuration panel 或自动 setup flow。

底层 components 可以保持熟悉，但它们的关系和目的会根据进入的 graph 和 frame 改变。这给 CatalystUI 一种清晰方式来表达 reuse，而不用假装 reuse 意味着每个上下文都相同。

Adapter connector 让这成为可能。它允许可变 interface data 按目的重新组织，同时让 component 本身专注于它表示什么以及如何行为。

### 返回 Components

因为 Stack 是可逆的，Adapter connector 也参与交互向上层返回的流程。当用户与系统交互时，下层最终需要把该交互 routing 回合适的 component 或 control。

Layer 4 在这个过程中很重要，因为它理解有组织的上下文。graph 可以帮助确定哪个 component 相关。frame 可以帮助解释交互发生时所在的边界。一旦上下文已知，Adapter connector 就帮助把交互返回 Layer 5，在那里合适的 component 或 control 可以响应。

这很重要，因为交互很少在到达时就已经附着到应该处理它的精确 component 上。系统可能知道某个 key 被按下、pointer 移动、command 被触发，或某个 region 被选择，但 Stack 仍然需要确定这个 action 在当前界面中意味着什么。Adapter connector 帮助把这个上下文判断带回可变 components 中，在那里交互可以被处理。

在 top-down 流程中，Adapter connector 把 components 放入上下文。在 bottom-up 流程中，它帮助把上下文交互返回给能够处理它们的 components。

### 保留身份

Adapter connector 应该保留它所适配的 components 的身份和意图。当 component 进入 graph 或 frame 时，它不应该失去自己是什么。它的目的、状态以及与原始信息的关系应该保持可识别，即使它正在被组织进更大的系统。

这并不意味着 component 不能被包裹、索引、分组、测量、转换或为特定环境做准备。在很多情况下，适配需要 component 原本不包含的额外信息。graph 可能需要 identifiers。frame 可能需要 bounds。routing system 可能需要 focus information。这些补充帮助 component 参与上下文，但不应抹去 component 的意义。

因此，Adapter connector 执行一种谨慎的转换。它添加上下文，但不吞掉 component。它允许界面变得有组织，而不迫使每个 component 对其周围的整个系统负责。

### 为什么这个 Connector 重要

Adapter connector 防止 Stack 把可用 interface data 和有组织 interface context 混淆。没有这个 connector，components 将不得不管理自己的 graphs，layouts 会被误认为完整的界面组织，或者 frames 会被迫在没有合适层间过渡的情况下理解 components。

通过定义 Adapter connector，Model 给这个转换一个合适的位置。

Components, Controls, & Layouts 继续负责可变界面对象和直接交互行为。Graphs & Frames 继续负责组织、上下文、边界、routing，以及为下层做准备。Adapter connector 处理二者之间的移动。

这里是 Stack 中可用信息变成情境化信息的点。Components 不再只是对程序可用；它们被放入一个活的上下文中，可以相互关联，通过正确路径响应，并准备继续向 Stack 下方传递。之后，有组织的界面可以走向 rendering、delivery、perception 和 response。
