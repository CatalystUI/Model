# 6.4 Connectors :: Bridge

## 深入讨论

### 从上下文到 Rendering

**Bridge** connector 位于 **Layer 4: Graphs & Frames** 和 **Layer 3: Renderers** 之间。它负责把有组织的 interface data 从 graph 和 frame 带入 renderer，在那里这些数据可以开始转换成可感知的 output。

Layer 4 给系统有组织的上下文。它知道哪些 components 存在、它们如何相互关联、占据哪些 bounds，以及活动界面作为整体应该如何被理解。Layer 3 负责 rendering。它接收准备好的数据，并把它转换成最终能够通过 window 和 system 交付的形式。

Bridge connector 存在，是因为这两层天然不会说同一种语言。

graph 组织关系。frame 定义活动上下文和边界。renderer 产生 output。Bridge connector 是这些关注点之间的 crossing point。它不需要复杂或可见。多数情况下，它只是把有组织的 interface data 暴露给 renderer，并在需要时允许交互信息向上返回。在这个意义上，Bridge connector 正如其名：它弥合间隙。

### 把 Frame 向前传递

在 top-down 流程中，Bridge connector 接收 Layer 4 的准备结果，并把它们带入 Layer 3。这并不意味着 Bridge 负责组织 components、计算 layouts、routing controls 或 rendering output。这些职责属于周围的层。Bridge 存在于中间，是为了让这些职责保持分离。

frame 可能已经准备好界面的活动边界。graph 可能已经组织好属于其中的 components。Bridge connector 接收这个准备好的上下文，并以 renderer 可以使用的形式呈现给 renderer。这可能涉及传递 references、准备好的 render entries、扁平化的 component information、resource handles、command-ready data，或任何适合所描述系统的其他表示。

具体实现可以不同，但职责保持相同。Bridge connector 不决定界面意味着什么。它不决定最终 output 应该如何交付给用户。它只是提供 crossing point，让有组织的 interface context 变成 renderer-facing data。

这让 graph 和 frame 能继续专注于组织，而 renderer 继续专注于 rendering。

### 一个安静的 Connector

Bridge connector 往往比它上方的 connectors 更安静。Data connector 可以访问并解释 digital data。Parser connector 可以把结构转成可变 components。Adapter connector 可以把这些 components 放入 graphs 和 frames。相比之下，Bridge connector 可能几乎显得空白。

这种空白正是重点的一部分。

Bridge connector 通常不应该执行超过必要的工作。它的主要目的，是允许 graph 和 frame 与 renderer 通信，同时不强迫任何一层吸收另一层的职责。如果 graph 开始像 renderer 一样行动，Model 就失去清晰性。如果 renderer 开始像 graph 一样行动，Model 就失去把组织与 output 清楚分开描述的能力。

Bridge connector 保护这条边界。

它可以为 renderer 消费准备数据，但不应该变成 renderer。它可以把有组织的界面暴露给 renderer，但不应该变成 graph。它的价值在于让两个相邻层保持不同，同时仍能协作。

### 把交互向上传回

Bridge connector 在 bottom-up 流程中也很重要。当交互来自 system 时，它通过下层向上移动，直到到达有组织界面能够理解它的位置。在许多情况下，renderer 可能接收或转换交互，把它变成 Stack 可以继续 routing 的形式，但 renderer 通常不知道最终哪个 component 应该处理它。

这个职责属于 Stack 更高的位置。

因此，Bridge connector 通常会接收一次交互，并几乎不加修改地把它传给 Layer 4。graph 和 frame 是能够决定交互归属的层。它们知道有组织的上下文。它们可以确定哪个 component 处于活动状态、哪个 control 占据相关 region、哪个 layout 关系重要，或界面的哪一部分应该接收交互。

因此，Bridge connector 不应该被误认为 interaction router。它可以携带交互，也可以保留 routing 所需的信息，但通常不是执行 routing 本身的层。Bridge 只是确保交互能够从 renderer-facing information 跨回 graph-facing context。

在 top-down 流程中，Bridge 帮助喂给 renderer。在 bottom-up 流程中，它帮助把交互返回到能够有意义地 routing 的位置。

### 最难看见的 Connector

Bridge connector 是最难识别的 connectors 之一，因为它的目的从外部看可能很模糊。它没有 Data connector 那种明显的 storage 关系。它没有 Parser connector 那种清晰转换。它没有 Adapter connector 的组织角色。乍看之下，它像是两个看似已经足够接近、可以直接通信的层之间的一次薄薄交接。

然而，没有 Bridge connector，Stack 就没有显式方式从有组织的 interface context 移向 rendering。graph 必须知道如何直接喂给 renderer，或者 renderer 必须知道如何自己解释 graphs 和 frames。任一方向都会让组织与 output 之间的边界塌陷。

Bridge connector 给这条边界一个名字。

它不一定总是包含很多逻辑，在某些实现中也可能显得很小，但概念角色是必要的。它解释了有组织界面如何进入 rendering process，而不迫使 Layer 4 和 Layer 3 变成同一件事。

### 保留边界

Bridge connector 应该保留上下文和 rendering 之间的边界。它向下传递的信息应该忠实于 Layer 4 准备的有组织界面，同时仍然可供 Layer 3 使用。它向上传递的信息应该保留 graph 和 frame 理解发生了什么所需的细节，同时允许 renderer 继续专注于自己的职责。

这并不要求 Bridge 保留任一层的每个内部细节。renderer 可能不需要完整 graph。graph 可能不需要每个 renderer-specific detail。Bridge connector 决定什么必须跨越边界，使每一侧都能继续工作，而不接管另一侧的角色。

这让该 connector 在 renderer 有非常具体要求的系统中特别重要。graph 和 frame 不应该需要知道这些要求的每个细节。renderer 也不应该需要理解界面的完整组织。Bridge connector 存在，是为了让双方可以沟通而不纠缠在一起。

### 为什么这个 Connector 重要

Bridge connector 防止 Stack 把有组织的 interface context 和 rendered output 混为一谈。没有这个 connector，graphs 和 frames 会被迫直接用 renderer 的术语说话，或者 renderers 会被迫理解活动界面的完整结构。

通过定义 Bridge connector，Model 给这个转换一个合适的位置。

Graphs & Frames 继续负责组织、上下文、边界、routing 和准备。Renderers 继续负责把准备好的信息转换成 output-ready form。Bridge connector 处理二者之间的移动。

这里是 Stack 中有组织信息进入 rendering process 的点。它常常很安静。它常常很薄。它可能几乎不可见。但没有它，Stack 就失去了界面作为有组织之物和界面作为已渲染之物之间的显式连接。Bridge connector 让这个跨越成为可能，然后仁慈地退到一边。
