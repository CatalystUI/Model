<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 6.5 Connectors :: Surface

## 深入讨论

### 从 Rendering 到 Delivery

**Surface** connector 位于 **Layer 3: Renderers** 和 **Layer 2: Windows** 之间。它负责把 rendered output 从 renderer 带入 window，在那里这些 output 可以被放置在 system 提供的有边界上下文中。

Layer 3 是信息被转换成 output-ready form 的地方。renderer 接收来自 graph 和 frame 的准备数据，并产生最终可以被感知的东西。然而，rendered output 仍然需要一个目的地。它需要去往某处，需要连接到某物，并需要一个 system 可以通过它交付的边界。

这个目的地由 Windows 层表示。

Surface connector 提供 renderer 和 window 之间的 crossing point。它解释 rendered output 如何附着到 window 的可用区域，以及 renderer 如何从 window 接收足够信息，以继续正确地产生 output。没有这个 connector，renderer 可以产生 output，但 Stack 没有显式解释这些 output 如何连接到呈现它的 window。

更简单地说，renderer 创建 output。window 提供 output 可以被交付的地方。Surface connector 让二者能够协作。

### 被渲染的区域

surface 可以理解为 window 中接收 rendered output 的可用区域。在传统图形应用中，这很容易想象：renderer 在 window 内部区域绘制。然而，同一原则适用得更广。surface 不只是“屏幕”。它是给 rendered output 在 window 边界内提供位置的 connector。

这很重要，因为 renderer 通常不拥有 window。renderer 可能知道如何产生 output，但 window 是提供进入 system 的活动 view 的层。window 可能有大小、位置、状态、scale、focus 或其他由 system 管理的条件。Surface connector 以 output 正确交付所需的方式，把这些条件提供给 renderer。

renderer 可能需要知道 window 当前的 bounds。它可能需要知道这些 bounds 何时改变。它可能需要一个 target，用来绘制、写入、stream 或以其他方式更新。具体细节可以因实现而异，但概念职责保持相同：Surface connector 把 renderer output 连接到将容纳它的 window context。

这防止 renderer 假装自己拥有 system boundary，也防止 window 假装自己知道如何 render。

### 不只是最终图像

人们可能会把 Surface connector 想成只是把完成的结果传入 window。在某些情况下，这种描述足够接近。renderer 准备 output，surface 把它带到 window，用户最终感知结果。

然而，rendering 往往是一种持续关系，而不是一次性 delivery。window 可能 resize。它的活动状态可能改变。system 可能请求 redraw。renderer 可能需要持续更新、等待信号，或把自己的 output 与 window 当前条件同步。Surface connector 提供了表达这种关系的位置。

因此，Surface connector 不只是 finished output 的容器。它是 rendering 行为和接收结果的 window 之间的连接。它允许 renderer 响应 window 的条件，而不让 renderer 负责成为 window。

output 仍然属于 renderer。边界仍然属于 window。Surface connector 承载二者之间的关系。

### 把交互向上传回

因为 Stack 是可逆的，Surface connector 也参与 bottom-up 流程。当交互从 system 开始并进入 window 时，它最终必须向上移动到 Stack 中能够理解并处理它的部分。

Surface connector 通常把这个交互从 window 带入 renderer。在很多情况下，它不需要做太多，只需保留信息并允许其继续向上。pointer movement、key press、focus change、resize event 或其他交互可以通过 window 进入，然后跨过 surface，使 renderer 和更高层能够按需响应。

这并不意味着 Surface connector 负责决定哪个 component 应该处理交互。该职责属于 Stack 更高的位置，特别是当交互到达 graph 和 frame 之后。Surface connector 只是给交互一条跨越 window 与 renderer 之间边界的路径。

在 top-down 流程中，Surface connector 把 rendered output 带入 window。在 bottom-up 流程中，它把来自 window 的 interaction information 带回 renderer 和上方层。

### 保持 Window 分离

Surface connector 很重要，因为它防止 renderer 和 window 塌缩成同一职责。没有这个 connector，renderer 就需要知道太多关于 window 的信息，或者 window 需要知道太多关于 renderer 的信息。任一方向都会削弱让 Stack 有用的分离。

window 提供活动的 system-facing boundary。它表示 view、container 或 point of delivery。renderer 产生可以通过该边界交付的 output。Surface connector 位于二者之间，使每层都能专注于自己的目的。

当 renderer 可以与多种 window 使用，或 window 可以支持多种 renderer 时，这种分离尤其有用。connector 给 Model 一个描述这种关系的位置，而不用把两层硬连在一起。renderer 可以附着到合适的 surface。window 可以暴露合适的 surface。Surface connector 解释这种附着如何发生。

这让 renderer 和 window 能够协作，而不变得不可区分。

### 保留 Output

Surface connector 应该在 rendered output 跨入 window 时保留它。这并不意味着 output 永远不会按照 window 的要求被转换、缩放、裁剪、同步或准备。它意味着 output 应该忠实于 renderer 产生的内容，并以符合活动 window context 的方式交付。

如果 window 改变大小，Surface connector 可以帮助传达这种变化。如果 window 变为非活动、隐藏、最小化或以其他方式不可用，connector 可以帮助 renderer 做出合适响应。如果 renderer 需要 window 提供的 target，connector 可以持有或暴露该 target。这些职责不等于 rendering，也不等于成为 window。它们是二者之间连接的职责。

这就是 Surface connector 的主要形态：它保留 renderer 的 output，同时把它适配到 window 提供的 delivery context。

### 为什么这个 Connector 重要

Surface connector 防止 Stack 把 rendered output 和包含它的 window 混为一谈。没有这个 connector，renderer 会被迫像自己拥有 window 一样行动，或者 window 会被迫像自己直接理解 rendering 一样行动。

通过定义 Surface connector，Model 给这个转换一个合适的位置。

Renderers 继续负责把准备好的信息转换成 output-ready form。Windows 继续负责提供有边界的 system-facing context，让 output 和 interaction 能够通过。Surface connector 处理二者之间的移动。

这里是 Stack 中 rendered information 获得目的地的点。output 在这里不再只是被产生，而是被附着到可以交付它的地方。之后，Windows 可以把 output 向前带入 Systems，在那里它最终可以成为用户能够感知并回应的东西。
