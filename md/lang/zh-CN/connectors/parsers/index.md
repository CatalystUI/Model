<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 6.2 Connectors :: Parser

## 深入讨论

### 从结构到使用

**Parser** connector 位于 **Layer 6: Structure & Semantics** 和 **Layer 5: Components, Controls, & Layouts** 之间。它负责把结构化信息转换成界面其余部分能够主动使用、修改、排列或响应的东西。

Layer 6 给信息一种稳定的解释形式。它定义数据意味着什么、如何被组织，以及哪些规则赋予它形状。然而，结构并不等同于界面对象。结构可以告诉系统某个文档有标题、某个文件包含 section，或某首歌包含 timing information，但结构本身仍然主要关注如何忠实表示数据。

Parser connector 把这些被解释的信息移动到 Layer 5，在那里它变得可变。这里是结构可以变成 component、control 或 layout 的地方。这里是信息停止仅仅作为“存在之物”的稳定描述，并开始成为程序可以直接交互的东西的地方。换句话说，Data connector 帮助系统理解信息是什么。Parser connector 帮助系统把这种理解转化为可用的东西。

### 解析成 Components

“parser”这个词常用来描述读取文本或把文件分解成有意义部分的过程。在 CatalystUI 中，这个词保留了同样的基本想法，但适用范围更广。Parser connector 不只是读取字符或 tokens。它接收已经被解释的结构，并把这种结构转换为可变 components。这个区别很重要，因为 Data connector 已经把 digital data 带入 Structure & Semantics。当信息到达 Parser connector 时，系统问的已经不是“这些数据能被理解吗？”而是“这些已被理解的数据应该如何变得可用？”

文档结构可以变成 document components。配置结构可以变成 settings components。音乐结构可以变成可编辑的 audio components。Parser connector 执行从结构化意义到交互式表示的转换。这也是 Stack 开始让程序员感到熟悉的地方。Components、controls 和 layouts 是 developer 可以直接操作的部分。它们可以被改变、查询、组织、更新，并最终通过 Stack 的下层进行 routing。Parser connector 为这些部分提供初始形态。

### 当差异看起来很小

在许多情况下，结构和 component 可能看起来非常不同。复杂文档、音频文件或交互式 view 可能需要显著转换，才能在 Layer 5 中变得有用。然而，当原始结构很简单时，结构和 component 之间的差异乍看之下可能几乎不可见。

INI 文件很好地说明了这一点。Data connector 解释该文件之后，结构可能包含 sections、keys 和 values。表示同一文件的 component 也可能包含 sections、keys 和 values。从表面看，这两种形式几乎相同。

关键在于：区别不只在它们的形状，而在它们的职责。

结构表示数据的解释状态。它是从原始数字表示产生的稳定形式。component 表示这些数据的可用状态。它可以允许 developer 添加 section、删除 key、修改 value、应用默认值、验证 edits、跟踪修改，或为显示和交互准备信息。

因此，虽然简单 INI 结构和 INI component 可能包含几乎相同的信息，它们在 Stack 中并不意味着同一件事。结构关注忠实解释。component 关注主动使用。

这说明了为什么 Parser connector 即使在工作看起来很小时也很重要。有时 parsing 很剧烈。有时它几乎是一对一映射。在两种情况下，connector 仍然标记了被解释的信息变成可变 interface data 的边界。

### 重新表达的力量

当单一结构可以被重新表达为多种有用形式时，Parser connector 尤其强大。因为 Layer 6 表示被解释的意义，Parser connector 可以决定这种意义应该如何在 Layer 5 中变得可用。

HTML 文档清楚地展示了这一点。同一个结构化文档可以被解析成用于可视网页的 components、用于可读文档大纲的 components、用于 accessibility navigation 的 components、用于打印的 components，或用于提取特定信息的 components。原始结构可以相同，但 Parser connector 允许该结构根据系统目标变成不同的可用表示。

这不只是便利。它揭示了 Stack 的一个重要特性：一旦数据被解释，就可以按照目的重新塑形。

同样的原则也适用于音乐。结构化音乐表示可以变成可编辑的 timeline components、playback components、notation components 或面向导出的 components。之后，信息最终可以返回到适合 WAV 文件、MP3 文件或其他格式的结构。Parser connector 是这种转换能够被清晰表达的原因之一。它给系统一个位置，在稳定结构和可变表示之间移动，而不用假装这两个概念相同。

通过这种方式，Parser connector 帮助保留信息的灵活性。它让同一份被解释的数据能够参与不同 workflows、tools 和表达形式，同时仍然扎根于 Structure & Semantics 提供的意义。

### 返回结构

因为 Stack 是可逆的，Parser connector 也在相反方向工作。当 components 通过交互被修改时，这些改变可能需要先返回 Structure & Semantics，才能再次成为 Digital Data。

这条反向路径是可变信息准备再次变稳定的地方。settings component 可以被用户修改，然后被解析回配置结构。document component 可以被编辑，然后被解析回文档结构。music component 可以被排列、裁剪或调整，然后被解析回稍后可以写成文件的结构。

这个过程并不意味着每个 component 都必须返回到它来源的完全相同结构。有时交互的目的就是把信息转换成新的形式。导入的文档可以变成简化大纲。编辑后的音频项目可以变成最终导出结构。一组复杂 components 可以被缩减成用于存储或传输的较小结构。

Parser connector 给 Model 一个合适的位置来表达这种转换。它允许可变 interface data 再次成为结构化数据，而不用让 Layer 5 假装自己负责 storage，也不用强迫 Layer 6 理解每一种可能的交互形式。

### 保留意图

Parser connector 应该在信息跨层移动时保留其预期意义。从结构移动到 components 时，它应该产生诚实反映结构的可用形式。从 components 返回结构时，它应该足够清楚地表示交互结果，使上层能够保存或传输它。

这不要求完美的一对一复制。事实上，Parser connector 往往正是因为一对一复制不够有用才存在。Components 可能需要便利属性、helper methods、editing state、validation state、layout information 或不属于原始结构的临时值。同样，返回的结构可以省略临时 component state，因为该状态只在交互期间有用。

目标不是保持每个内部细节完全相同。目标是保留真正重要的意义。

这让 Stack 保持诚实。Structure & Semantics 仍然是被解释的稳定信息所在的位置。Components, Controls, & Layouts 仍然是可变、可用信息所在的位置。Parser connector 在二者之间执行移动，同时保留被转换数据的意图。

### 为什么这个 Connector 重要

Parser connector 防止 Stack 把被解释的数据和可用的 interface data 混为一谈。没有这个 connector，结构就必须自己变得可变，或者 components 必须知道如何解释它们收到的每一种结构。任一做法都会模糊周围层的职责。

通过定义 Parser connector，Model 给这个转换一个合适的位置。

Structure & Semantics 继续负责稳定解释。Components, Controls, & Layouts 继续负责主动使用、修改和交互。Parser connector 处理二者之间的转换。

这里是 Stack 中已理解的信息变成程序可以直接操作的东西的点。稳定意义在这里变成可变表示。之后，信息可以被组织进 graphs 和 frames，为 output 做准备，通过下层 routing，并最终呈现在用户面前，成为用户可以感知、理解并回应的东西。
