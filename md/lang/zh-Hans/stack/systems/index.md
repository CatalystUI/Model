# 5.8 The Stack :: Systems

## 深入讨论

### 最低的显式层

**Systems** 是 Stack 的最低显式层。这一层表示计算环境，它提供交付 output 和接收 interaction 所需的底层服务、设备和操作。Layer 2 定义 output 与 interaction 通过的有界上下文，而 Layer 1 表示使该上下文成为可能的更大环境。

System 不应只被理解为桌面操作系统。在 CatalystUI Model 中，system 是在 runtime 支持界面的有组织进程和平台能力集合。它可以是传统操作系统、嵌入式环境、控制台、浏览器 runtime、硬件平台或另一种受管理的计算上下文。定义特征不是产品类别。定义特征是 system 提供界面实际运行所需的较低层能力。

### 操作环境

System 层为显式 Stack 提供周围执行环境。它可以管理硬件访问、input devices、output devices、drivers、permissions、scheduling、memory、files、processes、windows、channels 或其他 platform-level services。这些细节在不同实现之间差异很大，但它们都承担同一个概念角色：让界面连接到机器或信息系统的真实能力。

这使 Layer 1 不同于 Layer 2。Window 是界面使用的有界面向 system 的上下文。System 是创建、拥有、识别、约束并服务该上下文的更大环境。Window 提供特定连接点；system 提供该连接存在其中的世界。

因此，System 层不只是被动基础。它主动参与界面循环。它把已渲染 output 交付到物理或逻辑设备，接收来自这些设备的 input，应用平台规则，并暴露上层所依赖的操作。Stack 可以描述界面流，但 system 提供这个流之下的操作基础。

### 与 Windows 的关系

Systems 和 Windows 紧密相连，但它们不是同一层。Window 接收来自 Layer 3 的已渲染 output，并提供有界交付上下文。System 接收这个 windowed output，并执行通过可用设备或服务交付它所需的较低层工作。

在自上而下的流中，window 把 output 传入 system。System 随后处理实际交付路径：把 visual output 发送到显示器，把 audio output 发送到声音设备，把 tactile output 发送到 haptic device，把 text output 发送到 terminal，或把另一种 output 发送到其适当 channel。Window 定义 output 属于哪里；system 把它带入能够使其可感知的环境。

在自下而上的流中，system 从界面的人类一侧接收或检测 interaction。这可以通过 keyboard、pointer、touchscreen、microphone、controller、sensor、button 或另一种 input path 发生。System 把这种物理或设备层活动转换为 system-level signal，该信号可以与 window 关联，并向上通过 Stack 传递。

### Output 交付

System 层是自上而下流中的最后一个显式阶段。当 output 到达 Layer 1 时，上层已经解释了原始表示，形成可用界面对象，把它们组织成当前操作上下文，把该上下文渲染为 output-ready 形式，并通过 window 传递。System 现在执行 platform-level work，使这个 output 可供 Human Interface 接收。

这并不意味着 system 本身等同于用户的感知。用户不会直接感知操作系统。用户感知的是通过 system 管理的设备和 channels 可用的物理或感官结果。因此，Layer 1 仍然位于计算机侧过程内部，而隐含的 Human Interface 位于其外，作为 output 的接收者。

这种区别让 Model 保持精确。System 可以通过显示器产生光，通过扬声器产生声音，通过电机产生振动，或通过某个设备或服务产生另一种可感知结果。System 提供最后的显式交付机制；Human Interface 接收并感知结果。

### 交互来源

System 层也是自下而上流中的第一个显式阶段。用户在显式 Stack 之外执行动作，但 system 是该动作作为 interaction input 对被建模界面可用的位置。人类动作本身属于隐含的 Human Interface。System 通过受支持的 input path 接收该动作的效果，并开始把它转换为 Stack 可以处理的东西。

这就是为什么 system 与 interaction 紧密相关。物理按键、指针移动、触摸手势、语音 input、controller signal 或 sensor change，必须先被计算环境接收，上层界面才能响应。System 通常不决定该交互的最终意义。它识别某事发生，提供相关设备或平台上下文，并把交互传向适当的 window。

从那里，交互可以向上穿过 Stack。Window 把它与有界上下文关联，renderer 可以帮助翻译或映射它，graph 和 frame 可以路由它，适当的 control 最终可以处理它。System 开始显式返回路径，但动作的意义在 Stack 更高处被解析。

### 平台规则与约束

Systems 很重要，因为每个界面都在约束中运行。System 可以决定有哪些设备可用，windows 如何创建，input 如何交付，permissions 如何授予，output channels 如何行为，哪些资源可以访问，以及哪些操作被支持。这些约束塑造 Stack 的其余部分能够做什么。

不过，CatalystUI 把这些平台关注点同上层界面模型分开。Components 不应该需要直接理解每个 driver 或 operating system rule。Renderers 不应该需要管理每个 hardware detail。Windows 不应该需要表示整个平台。Layer 1 为 system-level behavior 提供清楚位置，让上层继续专注于解释、可用性、组织和转换。

这种分离也让 Model 能够应用于不同环境。桌面应用、移动 app、嵌入式设备、基于浏览器的界面、命令行工具或专用硬件系统，都可能有不同平台规则，但每个都仍然需要一个 system layer，为界面提供底层操作环境。

### 与 Human Interface 的关系

Systems 位于隐含的 **Human Interface** 正上方。这意味着 Layer 1 是 output 离开被建模的计算机侧流之前的最后一个显式层，也是用户动作进入它之后的第一个显式层。因此，system 是受管理计算环境与感知并行动的人之间的边界。

这个边界很关键。Model 可以描述 system 如何向设备发送 output，但它不直接建模用户的感官体验、生物学、注意力、情绪或解释。同样，Model 可以描述 system 如何接收 input signal，但它不直接建模产生该动作的完整人类过程。这些关注点属于隐含的 Human Interface。

通过把 Systems 放在 Layer 1，Stack 清楚识别出在跨入人类感知和行动之前，计算机侧过程可被描述的最低显式点。

### 为什么这一层重要

Systems 让 Stack 扎根于真实运行。没有这一层，Model 就会把 rendering 和 windows 描述得好像 output delivery 与 input reception 会自动发生。实际上，每个界面都依赖底层环境来管理设备、资源、权限、执行和平台行为。

通过把 Systems 同 Windows 和 Human Interface 分开，Model 保留了清晰的最终边界。Windows 提供 output 和 interaction 的有界上下文。Systems 提供交付 output 和接收 input 的底层操作环境。Human Interface 感知 output 并产生 action。这种区别让 CatalystUI 能够跨平台和 domains 描述界面，而不把 system 简化为单一操作系统、特定设备或视觉显示模型。
