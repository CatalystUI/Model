<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 5.7 The Stack :: Windows

## 深入讨论

### 有界交付层

**Windows** 是已渲染 output 获得有界交付上下文的层。Layer 3 把已准备的界面状态转换为 output-ready 形式，但这个 output 仍然需要一个由 system 交付时使用的确定位置、channel 或 view。Layer 2 提供这个边界。

Window 应该被理解为一种逻辑交付上下文，而不仅仅是屏幕上的视觉方框。在图形环境中，window 通常表现为由操作系统管理的可见区域。然而在 Model 中，这个概念更宽：window 是面向 system 的上下文，output 可以通过它被提供，interaction 可以通过它被接收。它定义已渲染结果在周围 system 中属于哪里。

### 进入系统的一种视图

Window 充当进入 system 的视图。它不创建 system，也不替代 renderer。相反，它提供有界上下文，让 renderer 的 output 可以连接到 system-level delivery。这个边界可能涉及位置、大小、焦点、可见性、设备上下文、output channel 或另一种由 system 定义的范围。

这很重要，因为已渲染 output 并不是孤立地为用户存在。它必须被交付到某处。Renderer 可以产生 visual commands、audio samples、haptic instructions 或另一种 domain-specific output，但这些结果仍然需要与 system 能够识别的上下文关联。Window 提供这种关联。

在视觉界面中，这一点很容易识别，因为 window 可以对应显示器上的矩形区域。在其他 domains 中，同样的概念角色可以由命令行会话、audio output context、device channel、virtual viewport 或另一种有界的面向 system 的 interface 完成。定义特征不是视觉外观。定义特征是 window 提供已渲染 output 与 system 之间的交付边界。

### 与 Renderers 的关系

Windows 接收来自 Renderers 的 output，但它们本身不执行 rendering。Rendering 是把已准备的界面状态转换为 output-ready 形式。Windowing 是为这个 output 提供有界 system context 的行为，使它能够被交付。

这种区别防止 Layer 2 吸收 Layer 3 的责任。Renderer 应该决定有组织的界面状态如何变成 output-ready。Window 应该提供面向 system 的位置或 channel，让这个 output 可以被发送。Renderer 转换；window 包含、接收并转发。

这也允许不同 renderers 针对不同 window 类型。Visual renderer 可以针对 graphical window，而 auditory renderer 可以针对 audio output context。具体实现可以因 system 和 domain 而变化，但分层责任保持一致。

### 与 System 的关系

Windows 依赖 **Layer 1: Systems**，因为它们通常由周围平台创建、管理、约束或识别。System 可以决定 windows 如何创建、如何接收 input、如何暴露 output channels、可以访问哪些资源，以及如何与硬件或较低层服务交互。

这并不让 window 等同于 system。System 是更大的操作环境，提供硬件访问、设备服务、调度、权限、驱动和平台行为。Window 是该环境内部的有界逻辑上下文。它是面向界面的上下文，使已渲染 output 和 interaction 能够在 Stack 与 system 之间传递。

通过把 Windows 与 System 分开，Model 避免把每个平台细节都当作界面边界的一部分。Window 表示界面使用的特定面向 system 的上下文。System 表示使该上下文成为可能的更大环境。

### Output 交付

在自上而下的流中，window 接收来自 renderer 的 output-ready 表示，并把它传向 system。这一阶段中，已渲染 output 不再只是由界面准备；它被分配到 system 可以使用的交付上下文。

Window 可以根据 domain 和 implementation 管理边界、焦点、buffering、可见性、channel state 或其他交付条件。这些细节影响 output 如何进入 system，但不会改变该层的主要角色。Window 提供已渲染 output 可以通过其成为 system output 的边界。

一旦 output 穿过 window，system 就可以把它带向相关设备、服务或物理过程，使用户能够感知它。因此，window 接近可感知性，但并不是感知本身。它仍然是计算机侧流的一部分。

### 交互入口

在自下而上的流中，window 是 system-provided interaction 对被建模界面可用的第一个显式 Stack 层。System 可以检测按键、指针移动、触摸事件、设备信号、音频命令或另一种 input。Window 在自己的有界上下文中接收该交互，并向上转发以进行进一步路由和处理。

这使 window 对交互非常关键，因为它为动作提供上下文。交互不只是“某事发生了”，而是“某事发生在某个特定的面向 system 的边界内”。焦点、位置、时间、设备来源、channel 或活动上下文都可能决定 Stack 的其余部分应该如何理解和路由该交互。

Window 通常不决定交互的最终意义。这项责任属于 Stack 更高处，尤其是在交互到达适当的 control 之后。Window 的角色是从 system 接收交互，把它与正确边界关联起来，并以 Stack 其余部分能够继续处理的形式向上传递。

### Domain 独立性

Windows 与 Stack 的其余部分一样是 domain-independent 的。“Window” 这个词常与图形关联，但在 CatalystUI 中，它指的是任何用于 output 和 interaction 的有界面向 system 的上下文。Domain 决定 window 承载哪种 output 和 input；Stack position 决定 window 执行什么角色。

这让同一层能够描述 graphical windows、text sessions、audio channels、tactile output contexts 或其他形式的 interface delivery，而无需改变 Model。每种实现可能有不同 system requirements，但每一种都完成同样的概念责任：提供已渲染 output 与 system interaction 通过的边界。

### 为什么这一层重要

Windows 防止 Stack 把已渲染 output 当作自动到达用户。Renderer 可以把界面状态转换为 output-ready 形式，但该 output 仍然需要一个面向 system 的上下文。Layer 2 提供这个上下文。

通过把 Windows 同 Renderers 和 System 分开，Model 保留了清晰的交付路径。Renderers 把已准备的界面状态转换为 output-ready representation。Windows 提供该表示进入 system 的有界上下文。System 随后执行交付 output 和接收 input 所需的较低层工作。这种区别让 CatalystUI 能够跨平台和 domains 描述 interface delivery，而不把 windows 简化为视觉矩形，也不强迫 renderers 管理 platform-level behavior。
