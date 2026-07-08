<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 6. Connectors

## 高层概览

Connectors 很独特，因为它们不只是描述信息在层之间_如何_移动；它们还允许我们_抽象_许多由硬件设备施加的限制。我们知道这是一个大胆的说法。不过，当用户界面围绕 CatalystUI Stack 得到合适设计时，connectors 可以被构建成能够按需要替换为不同实现的形式。从这个意义上说，connectors 是一种_信息的翻译媒介_。不同于 Stack 中的层——它们一旦分配后通常会锁定到某个特定 domain——connectors 可以把信息从一个 domain 转换到另一个 domain。例如，一个 connector 可以接收存储的文本，并把它准备成适合屏幕、扬声器，甚至通过盲文显示器提供触觉反馈的形式！

就像我们识别 Stack 中每一层一样，我们可以通过判断哪一层需要与另一层通信来定位 connectors。这是一个重要区别：不同于“Data Storage”和“Human Interface”，connectors 没有隐含端点。相反，它们是让两个相邻层能够协同工作的机制。因此，每个 connector 都由它所处的两个显式层以及它必须支持的通信类型来定义。

### Stack 的 Connectors

在 Stack 顶部，第一个必需连接位于 Layer 7 “Digital Data”和 Layer 6 “Structure & Semantics”之间。Digital Data 可以保存原始材料，例如文件、文档、响应或数据库结果，但下一层需要知道这些材料应该如何读取。这意味着它们之间的 connector 必须把存储内容带入 Model，同时保留其格式和意义。例如，一个 JSON 设置文件可能最初只是存储文本，但在界面知道有哪些设置可用之前，它必须被读取为 JSON。由于这个 connector 把数字内容转换成结构化格式，我们可以把它分类为“Data” connector。

当内容被读取成有意义的结构后，下一条连接出现在 Layer 6 “Structure & Semantics”和 Layer 5 “Components, Controls, & Layouts”之间。Layer 6 可以解释内容是什么意思，但 Layer 5 仍然需要知道应该从中创建哪些可用部分。换句话说，这个 connector 必须把“指令”变成“现实”。如果页面描述说应该有一个按钮，下一步不只是_知道_按钮存在；界面必须把按钮_创建_为一个可工作的 control。由于这个 connector 把 structures _解析_成可用的界面部分，所以把它识别为“Parser” connector 是合适的。

当这些可用部分到位后，下一条连接位于 Layer 5 “Components, Controls, & Layouts”和 Layer 4 “Graphs & Frames”之间。Layer 5 可以描述界面包含什么，以及这些部分应如何行为，但 Layer 4 需要把这些信息组织到更大的上下文中。这意味着它们之间的 connector 必须接收界面部分，并把它们放入可以被跟踪、协调并为下一阶段准备的关系中。例如，一个按钮可能已经作为 control 存在，但在界面其余部分能把它当作完整场景的一部分之前，它仍然需要位置、大小、状态以及与周围 frame 的关系。由于这个 connector 把可用界面部分_适配_成 graph 和 frame structures，我们可以把它识别为“Adapter” connector。

接下来，组织好的 frame 必须通过与 Layer 4 “Graphs & Frames”的连接，与 Layer 3 “Renderers”通信。Layer 4 可以描述界面中存在什么，以及每个部分与整体如何相关，但 Layer 3 需要它能产生的指令。这意味着它们之间的 connector 必须把组织好的场景翻译成适合特定渲染系统的工作。在视觉界面中，frame 内的按钮可能需要被转换成矩形、纹理、字形或绘制命令，才能显示在屏幕上。由于这个 connector _桥接_了组织好的界面和产生它的 renderer，我们可以把它识别为“Bridge” connector。

当 renderer 准备好工作之后，下一条连接出现在 Layer 3 “Renderers”和 Layer 2 “Windows”之间。Layer 3 可能知道如何绘制、播放或以其他方式产生某物，但它仍然需要一个目标来交付这些工作。Layer 2 提供用户接收它的视图，因此两者之间的 connector 必须暴露一个可用位置，让 renderer 可以把结果发送过去。例如，OpenGL 可以绘制一个场景，但在图像能出现在用户面前之前，它需要一个地方放置它。由于这个 connector 提供了渲染工作与 window 相遇的 _surface_，我们可以把它识别为“Surface” connector。

最后，Stack 底部需要 Layer 2 “Windows”和 Layer 1 “Systems”之间的通信。在这一点上，connector 必须以 Layer 1 自然理解的形式工作，无论那是操作系统句柄、平台 API、设备信号，还是物理机制。在桌面应用中，这可能是用于创建和管理 Layer 2 的本机句柄。在自动门中，它可能是内置的传感器和电机连接，让门能够响应。由于这个 connector 以系统自身的_本机_形式与系统通信，我们把它识别为“Native” connector。

### Connectors 在 Model 中的作用

现在每个 connector 都已被识别，我们可以更完整地描述 Model 的运动。从上到下，connectors 是“Data”、“Parser”、“Adapter”、“Bridge”、“Surface”和“Native”。每一个都位于 Stack 的两个显式层之间，并解释这些层如何通信。Data connector 把存储内容带入 Model 可以理解的 structure。Parser connector 把该 structure 转换为可用的界面部分。Adapter connector 把这些部分放入 graphs 和 frames。Bridge connector 为 renderer 准备这些组织好的 structures。Surface connector 给 renderer 一个交付结果的位置。最后，Native connector 允许 window 以 system 自身的方式与 system 通信。

### Connectors 与活的交换

这些 connectors 一起完成了 Stack 描述的路径。层告诉我们信息在流中的哪里，而 connectors 告诉我们它如何从一步移动到下一步。这让 CatalystUI Model 能描述的不只是静态的部件排列。它描述的是一种活的交换：存储内容变成 structure，structure 变成 interface，interface 变成 output，output 到达用户，用户的回应又可以沿着同一模式返回。由于 connectors 可以被替换或重做，而不需要重新定义层本身，它们也赋予 Model 一项最重要的能力：适应不同设备、domains 和 systems，同时保留同一个底层信息流。
