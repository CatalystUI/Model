# 5.6 The Stack :: Renderers

## 深入讨论

### 转换层

**Renderers** 是有组织的界面状态被转换为 output-ready 形式的层。Layer 4 提供 graphs 和 frames：一个已准备好的操作上下文，描述什么应被向下发送、它如何组织，以及应该表示什么当前状态。Layer 3 接收这个已准备上下文，并把它转换为适合通过 window，最终通过 system 交付的形式。

这一层称为 rendering，因为它执行从界面表示到可感知 output 的主动转换。Renderer 不只是存储界面、解释其原始内容，或管理其 component 关系。它的责任是取得上层准备好的结果，并产生 Stack 较低层所需的 domain-specific output。

### Rendering 作为转换

在 CatalystUI 中，rendering 不限于图形。Visual renderer 可以把已准备的界面状态转换为 pixels、draw commands、textures、glyphs 或其他 visual output。Auditory renderer 可以把已准备状态转换为 waveforms、samples、tracks 或混合 audio output。Tactile renderer 可以把已准备状态转换为 haptic patterns。具体 domain 可以变化，但这一层的角色保持相同：rendering 把有组织的界面表示转换为 system 能够交付的 output。

这种区别让 Model 比传统 graphical user interface 思维更宽。Renderer 并不由它是否向屏幕绘制来定义。它由是否把已准备的界面状态转换成较低层 output 形式来定义。结果最终可以被看见、听见、感觉到，或以其他方式感知，但在 Layer 3，重点是转换本身。

### 与 Graphs & Frames 的关系

Renderers 依赖 **Graphs & Frames**，因为它们不应该负责理解整个界面模型。Layer 4 解析当前操作上下文，组织 components，准备边界，确定相关状态，并提供适合 rendering 的 frame。Layer 3 随后把这个已准备 frame 转换为 output-ready 形式。

这种分离很重要，因为组织和 rendering 是不同责任。Graph 可以知道 components 如何彼此相关，frame 可以知道当前 pass 应包含什么。Renderer 应该知道如何把这个已准备上下文转换为适当的 output 表示。当这些责任保持分离时，renderer 可以保持专门且高效，而不会变成界面的全局管理者。

### 与 Windows 的关系

Renderers 也依赖 **Layer 2: Windows**，因为已渲染 output 需要交付目标。Renderer 可以产生 commands、buffers、streams 或其他 output-ready 表示，但这些结果仍然需要去某个地方。Window 提供有界的 view、channel 或 delivery surface，已渲染 output 可以通过它被带向 system。

这使 renderer 成为上层界面模型与下层交付模型之间的主动转换点。在它之上，Stack 主要关心意义、可用性、组织和活动状态。在它之下，Stack 关心把 output 通过 window 传入 system。Layer 3 位于这些关注之间，并把一个转换为另一个。

### Domain-Specific 责任

Renderers 天然是 domain-specific 的。Renderer 必须理解它正在产生的 output 类型，因为不同 domains 需要不同转换形式。Visual output、auditory output、tactile output 和其他感官形式，即使由同一个概念性界面状态产生，也不共享相同的交付要求。

这并不意味着上层必须为每个 domain 重写。Stack 的强项之一是，上层可以以一致方式描述内容、交互、组织和状态，同时允许 renderers 在 domain-specific conversion 变得必要的点上专门化。Renderer 就是这种专门化变得显式的位置。

当多个 output 形式被分开处理时，单个界面也可以涉及多个 renderer。在这些情况下，每个 renderer 负责其自身 domain 所需的转换，而周围的 Stack 保留更大的交互流。

### Rendering 与可感知性

Renderer 为感知准备 output，但它并不等同于感知本身。用户不会直接感知 renderer。Renderer 产生一种形式，该形式可以穿过 window 和 system，直到通过设备、channel 或物理 output 变得可感知。

这种区别很重要，因为 rendering 仍然是计算机侧转换过程的一部分。Visual renderer 可以产生 pixel data，但用户感知的是显示器发出的光。Auditory renderer 可以产生 audio samples，但用户通过扬声器或耳机感知声音。Layer 3 准备 output；较低层交付它。

### 在自上而下流中的角色

在自上而下的流中，Renderers 接收来自 Layer 4 的已准备 frame，并把它转换为 output-ready 形式。这是活动界面模型开始离开 components 的抽象组织，并进入 system 具体交付路径的位置。

Renderer 可以把 component state 转换为 draw operations、audio buffers、haptic instructions 或另一种 domain-specific 表示。一旦这种转换发生，结果就被传递给 Window 层，后者提供 system 能够通过其交付 output 的有界 channel 或 view。

### 在自下而上流中的角色

在自下而上的流中，Renderers 也可以在交互细节返回上层之前参与对它们的解释或转换。交互可能通过 window 从 system 到达，并处于一种需要调整、翻译、关联到已渲染区域，或转换成 graph 和 frame 可以路由的表示的形式。

这并不让 renderer 成为交互的最终处理者。那项责任属于 Layer 5 中适当的 control。不过，因为 renderer 理解界面是如何被转换成 output 的，它可以为反向处理或映射这部分转换提供必要上下文。例如，在 Layer 4 将交互向上路由之前，它可以帮助把较低层交互关联到已渲染位置、output region、timing point 或 domain-specific target。

### 为什么这一层重要

Renderers 防止 Stack 把 output 视为有组织界面对象的直接后果。Frame 可以描述应该表示什么，但它不会自动变成可感知 output。必须有某个东西把这个已准备上下文转换成较低层可以交付的形式。Layer 3 提供这种转换。

通过把 Renderers 同 Graphs & Frames 和 Windows 分开，Model 保留了清晰的责任划分。Graphs & Frames 组织当前界面上下文。Renderers 把该上下文转换为 output-ready 形式。Windows 提供有界 channel，让该 output 到达 system。这种区别让 CatalystUI 能够跨 domains 描述 rendering，而不把 rendering 简化为图形，不强迫 windows 执行转换，也不要求上层界面对象知道它们最终将如何被交付。
