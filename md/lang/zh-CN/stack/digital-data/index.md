<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 5.2 The Stack :: Digital Data

## 深入讨论

### 第一个显式层

**Digital Data** 是 Stack 的第一个显式层。它表示内容、状态或资源已经以计算机可读形式进入活动界面流之后，但在 Model 应用 Structure & Semantics，或将其转变为 components、layout、rendering 或 presentation 之前的状态。它是被保留的可用性变成 Stack 可以直接开始处理之物的点。

这一层是显式的，因为 Model 现在可以把该资源描述为界面过程的一部分。Data Storage 解释某个东西可以在活动流之外持久存在于哪里，而 Digital Data 解释已经被读取、接收、加载、流式传输、生成或以其他方式提供给 Stack 的活动表示。它不再只是存在于某处、可供访问。它现在以系统能够处理的形式出现。

### 计算机可读表示

Digital Data 由它能够以二进制表示并由机器处理这一点来定义。在这一层，资源可以作为 bytes、编码文本、接收到的响应、内存 buffer、stream 或其他机器可读表示被持有。确切的容器没有它所扮演的角色重要：它是资源在解释之前的活动形式。

这意味着 Digital Data 不应与意义、结构或呈现混淆。一串 bytes 可以包含文档、图像、命令、配置或音频文件，但 Layer 7 还没有描述这串内容应该如何被理解。它只确立内容以系统可以访问并传递给下一层的形式存在于 Stack 内部。

### 在 Structure and Semantics 之前

Digital Data 位于 **Layer 6: Structure & Semantics** 的正上方，因为它表示 Structure & Semantics 将要解释的材料。在这种解释发生之前，Stack 还没有识别该表示中包含的规则、关系、字段、section 或意义。该资源可能已经遵循某种格式，但 Model 还没有应用该格式。

一个已存储的文档可能已经按其格式有效，一个文件也可能已经包含有组织的内容，但 Layer 7 还不会把这种组织建模为已理解的 structure。当 Stack 开始应用规则来决定该表示应该如何被读取时，流就已经移动到 Structure & Semantics。因此，Digital Data 并不是没有意义；它只是尚未在 Stack 内部被解释。

### 上方转折点

Digital Data 充当显式 Stack 的上方转折点。在自上而下的流中，这里是 Stack 开始把计算机可读表示转换为用户最终可以感知或交互的东西的位置。流从活动表示开始，然后向下经过解释、component 形成、组织、rendering、windowing 和 system delivery。

在自下而上的流中，Digital Data 是交互结果再次变成机器可读的位置。用户动作可以被路由、处理，并转换为界面内部的变化。该变化随后可以向上穿过 Stack，直到成为 Digital Data：一种可以被保留、传输、比较、重新生成或返回 Data Storage 的活动表示。这样，Layer 7 参与界面循环的两个方向。

### Digital Data 与 Domains

Digital Data 通常与 **Symbolic** domain 密切相关，因为它通常存在于某种特定感官形式被选择之前。例如，一个文本文件之后可以被视觉显示、以声音读出、转换成另一种格式，或者完全不被直接呈现而被处理。在 Layer 7，重要的事实不是用户最终将如何感知它，而是该表示可供 Stack 解释。

这并不意味着 Digital Data 只能是 symbolic。资源可以在其编码形式中包含 visual、auditory、tactile 或 multisensory 内容。不过，这一层本身描述的是活动 Stack 将其转换为可感知或可交互结果之前的计算机可读表示。Domains 识别正在处理的信息类型；Stack 识别这些信息在流中的位置。

### 为什么这一层重要

Digital Data 防止 Model 跳过界面工作的第一个活动步骤。没有这一层，Stack 就会从存储直接进入解释，好像已存储的资源在被访问的瞬间就自动携带可用 structure。真实系统并不是这样。某个东西必须先以活动的机器可读形式存在，才能被解析、验证、组织、适配、渲染或呈现。

通过把 Digital Data 同 Data Storage 和 Structure & Semantics 分开，Model 保留了三个重要区别。Data Storage 解释活动流之外的持久性。Digital Data 解释活动流内部的活动计算机可读表示。Structure & Semantics 解释该表示的解释方式。保持这些责任分离，使 Stack 能够更精确地描述界面行为，尤其是在同一个已存储资源可以以多种方式被读取、解释、转换或呈现时。
