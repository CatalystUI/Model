# 5.5 The Stack :: Graphs & Frames

## 深入讨论

### 组织层

**Graphs & Frames** 是可用界面对象被组织进更大操作上下文的层。Layer 5 把 components、controls 和 layouts 作为可变对象提供，但这些对象并不会仅仅因为一起存在就自动形成完整界面。它们需要一种方式被发现、关联、查询、排序、路由、限定，并为 Stack 的较低层做好准备。

这就是 Layer 4 的目的。它接收来自 Layer 5 的活动界面对象，并建立它们运行所在的更广泛上下文。Component 可以知道如何表示自己的状态，control 可以知道如何处理交互，layout 可以知道如何排列一组 components，但 Layer 4 决定这些部分如何作为整体参与界面。

### Graphs

**Graph** 描述 components、controls 和 layouts 之间有组织的关系。它提供必要结构，用来理解界面对象如何彼此关联、如何被定位，以及在活动运行期间如何被遍历或查询。

这使 graph 不同于 layout。Layout 按特定规则或模式排列 components。Graph 管理 layouts 和 components 存在其中的更大关系空间。它可以描述父子关系、所有权、依赖、分组、排序、焦点路径、路由路径，或帮助界面作为连贯系统运行的其他连接形式。

Graph 还提供一种实用方式来定位和管理界面对象，而不迫使每个 component 都知道每个其他 component。Components 可以继续专注于自己的可用状态，而 graph 提供发现、协调和路由所需的周围结构。这防止界面变成一组孤立对象，或一团直接引用的混乱集合。

### Frames

**Frame** 描述为 Stack 较低层准备好的更大当前操作上下文。Graph 组织界面对象及其关系，而 frame 以一种可以传向 rendering、output 或较低层处理的形式，包含并协调该组织的相关状态。

Frame 是 Layer 5 面向对象的界面世界与 Layer 3 面向 rendering 的世界之间的主要边界。它不只是包含 components；它准备它们。这种准备可以包括解析边界、应用 layout 结果、收集可渲染元素、排序 output、跟踪当前界面状态，或生成 renderer 应该处理的临时表示。

Frame 应被理解为上下文性的，而不是永久性的。它表示界面在某次 pass、update、render 或 routing operation 中的当前条件。随着界面变化，可以产生新的 frames 或更新后的 frame 状态。这使 Stack 能够描述实时运行，而不会把临时 presentation state 与已存储内容或已解释 structure 混淆。

### Graphs 与 Frames 的关系

Graphs 和 frames 一起工作，因为界面既需要关系，也需要上下文。Graph 解释界面对象如何连接。Frame 解释较低层在某个特定时刻应该从这些已连接对象中接收什么。

这种区别很重要，因为组织和准备不是同一件事。Graph 可以包含寻找 control、理解 layout hierarchy 或确定某个 component 属于界面哪一区域所需的关系。Frame 可以取得这种组织的当前结果，并把它准备好用于 rendering 或 interaction routing。Graph 提供地图；frame 提供这次穿过地图的当前路径。

它们共同防止 Layer 4 变成一组被动 components，或一份 renderer-specific command list。它仍然是 Stack 的组织与上下文层：足够接近 Layer 5，可以理解界面对象；也足够接近 Layer 3，可以为较低层转换准备这些对象。

### 为 Rendering 做准备

在自上而下的流中，Graphs & Frames 从 Layer 5 接收 components、controls 和 layouts，并为 Renderer 准备它们。这并不意味着 Layer 4 执行 rendering。Rendering 属于 Layer 3。Layer 4 决定什么应该被向下发送、处于什么关系、在什么边界内、并处于什么当前状态。

这种准备是必要的，因为 renderer 不应该负责理解每个 component、control 或 layout 的完整意义。Renderer 需要一个已准备好的形式，以便把它转换成可感知 output。Layer 4 在保留界面组织的同时，把活动对象模型缩减成 renderer 可以处理的东西。

通过这样做，Layer 4 让 renderers 能够保持专门化。Renderer 可以专注于转换成 domain-specific output，而不必同时成为 component 关系、layout hierarchy、interaction targets 和活动界面状态的最高层管理者。

### 路由交互

在自下而上的流中，Graphs & Frames 帮助把交互路由回适当的 controls。较低层可以识别交互已经发生，并提供位置、时间、设备来源、focus context 或其他相关 input state 等细节。Layer 4 使用 graph 和 frame context 来判断该交互属于哪里。

这个路由角色是 Layer 4 必须存在的最清楚理由之一。Control 可以知道在接收交互后如何处理它，但必须有某个东西判断哪个 control 应该接收它。Graph 提供关系结构，frame 提供当前操作上下文。它们一起让 Stack 能够通过界面路由意图，而不是只是毫无方向地把 input 向上传递。

这也意味着 Layer 4 同时参与 output preparation 和 input resolution。它在一个方向上为 rendering 准备有组织的界面状态，在另一个方向上帮助解析已路由交互。知道界面当前如何排列的同一层，也最适合判断交互应该如何沿这种排列向回移动。

### 与 Components, Controls, & Layouts 的关系

Layer 4 依赖 Layer 5 提供它要组织的活动界面对象。Components、controls 和 layouts 提供界面的可用部分，但 Layer 4 决定这些部分如何形成更大的整体。这防止单个 components 对全局界面管理负责。

这种分离也保护 layouts 不至于变得过于宽泛。Layout 可以排列一组 components，但它不需要管理界面中的每一种关系。它不需要充当完整路由系统、生命周期协调器或 rendering boundary。Layer 4 提供更高层组织，让 layouts 可以继续专注于排列。

### 与 Renderer 的关系

Layer 4 也保护 Renderer，使它不承担不属于 rendering 的责任。没有 Graphs & Frames，renderer 就必须在产生 output 之前理解 component trees、layout relationships、control routing、bounds resolution 和 active interface context。这会让 rendering 负责过多的界面模型。

通过把 Graphs & Frames 放在 Layer 5 与 Layer 3 之间，Stack 创造了清晰的交接。Layer 5 提供可用界面对象。Layer 4 组织并准备这些对象。Layer 3 把已准备的表示转换成可感知 output。每一层都专注于过程的不同部分。

### 为什么这一层重要

Graphs & Frames 防止 Stack 把界面视为松散的 components 集合，或直接的 rendering 问题。可用界面需要在渲染前被组织，也需要在能够连贯响应交互前具备路由。Layer 4 为二者提供必要结构。

通过把 Layer 4 同 Components, Controls, & Layouts 以及 Renderer 分开，Model 保留了清晰的责任递进。Components、controls 和 layouts 定义活动界面对象。Graphs 和 frames 把这些对象组织成当前操作上下文。Renderer 随后把这个已准备上下文转换为可感知 output。这种区别让 CatalystUI 能够描述复杂界面，而不迫使 components 管理整个 system，也不迫使 renderers 理解整个界面模型。
