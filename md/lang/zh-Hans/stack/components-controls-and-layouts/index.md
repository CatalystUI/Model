# 5.4 The Stack :: Components, Controls, & Layouts

## 深入讨论

### 第一个可变界面层

**Components, Controls, & Layouts** 是已解释 structure 变成可用界面材料的层。Layer 6 解释一个表示意味着什么以及它如何组织；Layer 5 把这种稳定解释转变为可变对象，这些对象可以被排列、更新、交互，并为 Stack 的其余部分做好准备。

这是 Model 开始把界面描述为主动可用之物，而不只是已被理解之物的第一层。Structure 可以解释资源的意义，但用户不会直接与 structure 交互。界面需要能够暴露值、响应意图、保持临时状态，并参与更大排列的对象。Layer 5 提供这些对象。

### 从解释到使用

**Structure & Semantics** 与 **Components, Controls, & Layouts** 之间的边界，是已解释形式与可用形式之间的边界。Layer 6 产生对内容的稳定理解。Layer 5 把这种理解适配为界面在活动运行期间可以处理的形式。

这种区别很重要，因为已解释 structure 与界面行为不是同一种责任。Structure 可以识别某个值存在、它属于哪里，以及哪些规则支配它。Component 可以把这个值暴露为可调整、可显示、可播放、可选择、可编辑或以其他方式可用的东西。Structure 解释内容；component 给界面一种处理该内容的方式。

因此，Layer 5 不只是视觉层。Components、controls 和 layouts 可以存在于任何 domain。Component 可以表示文本、声音、触觉反馈、命令、文档 section、媒体资源，或界面的任何其他可用部分。定义这一层的不是对象最终会如何被感知，而是它提供一种由已解释内容构建而来的可变界面形式。

### Components

**Component** 是从已解释 structure 创建，或与已解释 structure 关联的界面逻辑可变部分。它可以表示图像、标签、音轨、样式元素、命令、文档 section、媒体资源，或界面的另一种可用部分。Structure 主要关心稳定意义，而 component 关心主动使用。

Component 可以暴露属性、方法、状态或行为，使底层内容更容易处理。它可以提供可读取或可更改的值、可执行的操作，或在界面活动期间可跟踪的状态。这让 Stack 的其余部分能够处理有意义的对象，而不是反复处理原始表示或不可变 structure。

重点是，component 不需要保留原始资源的精确形状。它可以简化资源、组合其中的部分、只暴露某个特定部分，或在它之上提供更方便的接口。Layer 5 可以是实用的，因为它的角色不是定义内容的原始意义。它的角色是让这种意义变得可用。

### Controls

**Control** 是处理交互的 component。它接收来自 Stack 较低层的已路由交互，并决定应该如何响应。这使 controls 成为界面面向用户的一侧与面向内容的一侧之间的主要交汇点之一。

Controls 负责把交互转变为有意义的界面行为。Control 可以更新值、触发操作、改变状态、请求新的表示，或完全不产生变化。关键区别是 control 不只是作为界面的一部分存在；它参与用户对系统采取行动的能力。

因为 controls 是 components，它们共享同样的可变性质。不过，它们的定义性责任是交互处理。Component 可以表示一个可用对象，而不直接响应用户意图。Control 表示一个能够在界面流中接收、解释并作用于这种意图的可用对象。

### Layouts

**Layout** 是排列其他 components 的 component，包括 controls，并按照某种顺序、关系或放置规则来排列它们。在视觉界面中，这可能表现为空间排列。在其他 domains 中，layout 可以描述序列、分组、优先级、时间安排、类别、路由或另一种组织关系。

Layouts 很重要，因为可用的界面对象很少孤立存在。Components 需要上下文。它们可能需要被排序、分组、对齐、分层、排序成序列或以其他方式建立关系，才能清楚地参与用户体验。Layout 提供这种关系结构，而不会变成整个界面的最高层管理者。

这把 layouts 与 graphs 区分开来。Layout 按特定规则或模式排列 components。Graph 管理更大界面上下文中的发现、组织、关系和生命周期。Layer 5 提供 layout 对象本身；Layer 4 决定这些对象如何参与更大的操作 frame。

### 可变性与活动状态

Layer 5 是可变的，因为界面是活动的。一旦已解释内容成为界面的一部分，它可能需要响应用户意图、系统状态、时间、焦点、选择、可见性、播放、输入或其他实时条件的变化。Components、controls 和 layouts 提供这些活动变化发生的位置。

这并不意味着 Layer 5 替代 Layer 6 提供的稳定解释。相反，它建立在其上。Component 可以临时持有变化后的值，control 可以处理一次编辑，layout 可以重新计算排列，但这些变化仍然与它们下方的已解释意义相连。当某个变化必须成为被保留资源的一部分时，流可以再次向上穿过 Structure & Semantics 和 Digital Data。

可变性也让 Layer 5 能够表示可能永远不会被存储的临时界面条件。被选中的项目、展开的 section、播放位置、hover 状态、focus target 或待处理编辑，即使永远不会成为永久存储的一部分，也可能对活动界面非常重要。Layer 5 给 Stack 一个清楚的位置来描述这些实时条件。

### 在自上而下流中的角色

在自上而下的流中，Components, Controls, & Layouts 接收已解释 structure，并把它转换为可用界面对象。Stack 已经越过“知道内容意味着什么”的阶段，现在开始为交互、组织和最终呈现准备这些内容。

在这一阶段，界面可以决定已解释内容的哪些部分应该成为 components，哪些 components 应该能够处理交互，以及这些 components 应该如何排列。结果还不是已渲染 frame 或 system output。它是一个活动界面模型，可以由 Layer 4 组织，并最终为 rendering 做好准备。

### 在自下而上流中的角色

在自下而上的流中，Layer 5 是已路由交互变成有意义行为的位置。较低层可以检测、转换并路由一个动作，但 control 是该动作最终相对于它所影响的界面对象被理解的位置。

当 control 处理交互时，它可以更新 component 状态、请求 layout 变化、触发命令，或产生需要返回 Structure & Semantics 的修改。如果该修改影响底层内容，Layer 6 可以按照相关语义规则验证并组织该变化，然后它才再次成为 Digital Data。这样，Layer 5 作为用户意图与界面状态之间的活动转换点。

### 与 Graphs & Frames 的关系

Layer 5 产生可用界面对象，但它不充当这些对象运行的完整环境。这项责任属于 **Layer 4: Graphs & Frames**。Components、controls 和 layouts 需要更广泛的上下文来组织它们、查询它们、在它们之间路由、为 rendering 准备它们，并定义它们参与其中的边界。

这种关系让 Model 保持清晰。Layer 5 定义活动界面的对象。Layer 4 管理它们更大的组织，并为 Stack 的较低层准备它们。Component 应该知道如何表示并管理自己的可用状态；graph 和 frame 应该知道该 component 如何适合更广泛的界面流。

### 为什么这一层重要

Components, Controls, & Layouts 防止 Stack 从解释直接跳到 rendering。系统不能仅仅通过理解内容并立即产生 output 来构建清楚的界面。必须有一层让这些已解释内容变得可用、可变、可排列，并能响应交互。

通过把 Layer 5 同 Structure & Semantics 和 Graphs & Frames 分开，Model 保留了精确的责任顺序。Structure & Semantics 定义稳定意义。Components, Controls, & Layouts 把这种意义转变为活动界面对象。Graphs & Frames 把这些对象组织进更大的操作上下文。这种分离使 CatalystUI 能够跨 domains 描述界面，而不把它们简化为视觉 widgets、原始 structures 或 renderer-specific commands。
