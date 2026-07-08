<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 6.6 Connectors :: Native

## 深入讨论

### 从 Windows 到 Systems

**Native** connector 位于 **Layer 2: Windows** 和 **Layer 1: Systems** 之间。它负责把 window 连接到下方 system，使 output 能够在程序运行的实际环境中被交付，交互也能够在其中被接收。

Layer 2 给 Stack 一个 window：一个有边界的 view、container 或 point of delivery。Layer 1 给 Stack 一个 system：操作环境、hardware access、services、devices，以及让 window 成为可能的 native behavior。Native connector 提供这两层之间的 crossing point。

这个 connector 往往是 Stack 最直接触及计算现实的位置。到目前为止，Model 描述的是信息如何穿过结构化数据、components、graphs、renderers 和 surfaces。然而，window 不是凭想象就能存在的。必须有某个东西请求 system 创建它、配置它、维护它、更新它，并通过它回报交互。

这个东西就是 Native connector。

### 定义 Bindings

**binding** 是某一层与另一层提供的功能之间的受控连接。在 Native connector 的上下文中，bindings 把 system-level behavior 以程序可以使用的形式暴露给 window，而不要求 window 成为 system 本身。

这个定义有意保持简单。binding 不需要神秘。它就是上方代码与下方功能之间可访问的关系。

native binding 可以暴露创建 window、修改标题、接收 keyboard input、响应 pointer movement、调整活动区域大小、请求 focus、访问 device，或与 system service 通信的能力。细节会因 system 和实现而变化，但概念保持不变：binding 提供到 native functionality 的可用连接。

这就是 bindings 在这一层如此重要的原因。system 可以提供强大能力，但这些能力不会自动出现在 Stack 其余部分所使用的语言或结构中。它们必须通过某种连接形式被暴露。Native connector 就是这些连接被收集、塑形和使用的地方。

### 提供 Native Access

在许多实现中，Native connector 主要会提供到低层 system functionality 的 bindings。乍看之下这可能很普通，尤其是 developers 已经熟悉 native APIs、platform libraries、operating system calls、device interfaces 和类似 tools。然而在 Stack 中，这些并不只是随机的实现细节。它们是 Layer 2 获得 Layer 1 访问能力的手段。

桌面操作系统上的图形 window 可能需要到 platform windowing API 的 bindings。command-line interface 可能需要到 terminal input 和 output 的 bindings。专用 device 可能需要到 buttons、sensors、speakers、lights 或其他 system-controlled devices 的 bindings。在每种情况下，Native connector 都提供让 window 能够在 system 中行动的关系。

重要的不是使用哪种 platform。重要的是，如果 window 没有某种方式与包含它的 system 通信，它就无法交付 output 或接收 interaction。

Native connector 提供这种方式。

### 不只是 Wrapper

因为这个 connector 经常暴露 native behavior，人们可能会想把它描述成 system APIs 的 wrapper。在某些实践语境中，这种描述可能有用，但它不能完整解释该 connector 在 Model 内部做什么。

wrapper 描述人们经常如何实现这种层。binding 描述 connector 实际提供什么。

Native connector 不是堆在 window 下方的一堆 platform calls。它是 window 和 system 之间的正式关系。它定义 window 如何获得由 system 支持的存在，system behavior 如何对 Stack 可用，以及 system-originating interactions 如何开始向上移动。

这个区别很重要，因为 Model 并不是在试图保留 developers 历来描述这些工具的方式。它试图描述底层过程本身。在这个过程中，Native connector 重要不是因为它碰巧 wrap 了 native API，而是因为它把 Layer 2 绑定到 Layer 1。

这才是这个 connector 真正的意义。

### 创建并维护 Window

在 top-down 流程中，Native connector 允许 window 通过 system 运行。window 可能需要被创建、显示、隐藏、resize、移动、focus、更新或关闭。这些 actions 需要与 system 有某种关系，因为 system 才是实际提供这些 actions 能够发生的环境的层。

Native connector 可以暴露执行这些 actions 所需的 bindings。通过它，Layer 2 可以请求 system behavior，而不吸收整个 system management 的职责。window 仍然是有边界的 point of delivery。system 仍然是提供底层功能的环境。Native connector 承载二者之间的关系。

这尤其重要，因为 systems 各不相同。不同 operating systems、devices、runtimes 和 environments 可能提供不同 APIs 和 behaviors。Native connector 给 Stack 一个表示这些差异的位置，而不用让 Model 的其余部分变成 system-specific。

### 接收交互

因为 Stack 是可逆的，当交互从 system 进入时，Native connector 也是第一个参与其中的显式 connector。

key press、pointer movement、touch input、controller action、device signal、resize event、focus change 或其他 system-originating event 必须先从 Layer 1 跨到 Layer 2，Stack 的其余部分才能处理它。Native connector 提供这次跨越。它接收或暴露 system 的 interaction information，并把它带入 window，在那里它可以继续通过 Surface connector 向上进入 Renderers，然后按需要经过 Bridge、Adapter、Parser 和 Data connectors。

在许多情况下，Native connector 不需要决定交互意味着什么。它的作用是把 system 的 interaction source 绑定到 window 的 interaction path。system 报告发生了某件事。Native connector 让这个报告对 Layer 2 可用。Stack 的其余部分随后可以按照自身职责 routing、transform 和处理这次交互。

这让下边界保持清晰。Native connector 给 interaction input 一条进入 Stack 的路径，而不要求 system 理解更高层，也不要求更高层表现得好像它们就是 system。

### 保留边界

Native connector 应该保留 window 和 system 之间的边界。它应该暴露 window 所需的 system functionality，但不应该抹去两层之间的区别。

这里 binding 作为概念尤其有用。binding 允许访问，但不赋予身份。window 可以使用 system functionality，而不成为 system。system 可以提供 behavior，而不成为 window。connector 定义二者之间的关系。

这条边界让 CatalystUI 能够在不同环境中一致地描述 window。一个 system 可以提供传统 desktop window。另一个可以提供 terminal。另一个可以提供 device-specific output channel。另一个可以提供 remote 或 virtualized environment。native bindings 可以不同，但 connector 的角色保持相同。

Native connector 把 Layer 2 绑定到 Layer 1，使 window 能够在支持它的 system 中存在、运行、接收交互并交付 output。

### 为什么这个 Connector 重要

Native connector 防止 Stack 把 window 和提供它的 system 混为一谈。没有这个 connector，Windows 就需要直接包含 system-specific behavior，或者 Systems 需要理解 window 这个更高层概念。任一方向都会模糊 point of delivery 和使 delivery 成为可能的环境之间的边界。

通过定义 Native connector，Model 给这个转换一个合适的位置。

Windows 继续负责 output 和 interaction 经过的有边界上下文。Systems 继续负责底层环境、services、devices 和 native behavior。Native connector 处理二者之间的 binding。

这是 Stack 的最后一个显式 connector。这里是被建模的界面到达其下方 system 的地方。它可能看起来像 platform access。它可以通过 native libraries、operating system calls、device APIs 或 runtime services 实现。但在这些熟悉描述之下，它的目的更清晰也更简单。

Native connector 提供 bindings。

它把 window 绑定到 system，让 output 可以离开 Stack，让 interaction 可以进入 Stack。这样，它完成了被建模界面和该界面必须存在于其中的真实环境之间的显式路径。
