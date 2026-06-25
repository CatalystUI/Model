# 5.3 The Stack :: Structure & Semantics

## 深入讨论

### 第一个解释层

**Structure & Semantics** 是 Digital Data 在 Stack 内第一次变得可理解的层。Layer 7 提供活动的计算机可读表示，但这个表示不会自我解释。在界面的其余部分能够使用它之前，系统必须知道它是什么类型的表示、哪些规则支配它，以及它的内部部分应该如何被理解。

这就是 Layer 6 的目的。它从 Digital Data 接收活动表示，并赋予它有意义的形状。在这一点上，Stack 还不关心 components、controls、layouts、rendering 或 presentation。它关心的是解释：该表示应该如何被读取，它内部存在哪些关系，以及什么形式可以安全地传递给下一层。

### Semantics

**Semantics** 定义某个表示应如何被理解的规则。它们描述正在被解释的内容所预期的意义、顺序、格式和关系。从这个意义上说，semantics 像一份契约。它们不需要包含活动表示本身；相反，它们定义该表示应该如何被读取。

这种区别很重要，因为 Digital Data 可以包含可识别的模式，而 Stack 还不知道这些模式意味着什么。一串 bytes、字符、字段或记录可以遵循已知格式，但 Model 不会在 Layer 6 之前把该格式视为已应用。Semantics 提供使解释成为可能的规则集合。

Semantics 可以定义宽泛的规则，例如文档、文件格式、消息、响应、配置或资源的预期形式。它们也可以定义更小的内部预期，例如字段如何排序、section 如何被识别、哪些值有效，或一个部分如何与另一部分相关。重点是，semantics 在界面开始把意义变成可用部分之前定义意义。

### Structure

**Structure** 是把 semantics 应用于 Digital Data 后得到的组织结果。Semantics 定义某个东西应该如何被理解，而 structure 表示从某个特定活动表示中已经理解到的东西。它是相关规则被应用之后内容的成形形式。

Structure 让 Stack 的其余部分能够处理该表示，而不用反复回到原始形式。系统不必把资源当作未解释的序列，而是可以处理有组织的 sections、values、relationships 或 records。这还不会让资源变成可交互的。它只意味着内容已经获得了一个稳定形式，界面可以以它作为基础。

在 Model 中，structure 与某种特定解释绑定。如果同一份 Digital Data 可以通过多组 semantics 被理解，那么它可以产生多个 structure。同样，如果底层表示发生变化，结果 structure 必须反映变化后的解释。因此，structure 不只是“内存中的数据”。它是某个特定表示按照特定语义规则得到的已解释形式。

### 稳定解释

Structure & Semantics 应在穿过 Stack 的某一次传递中被视为稳定。这一层表示已经建立的解释，而不是正在被用户主动操作的可变界面对象。一旦 Digital Data 被解释为 structure，该 structure 就为后续层提供可靠基础。

这种稳定性正是 Layer 6 与 **Layer 5: Components, Controls, & Layouts** 的区别。Layer 5 引入面向人的可变界面对象，它们可以被排列、更新、交互，并在界面其余部分中被路由。Layer 6 不承担这个角色。它解释内容意味着什么，以及在界面把它变成可用 components 之前，它是如何组织的。

这并不意味着底层资源永远不能变化。它意味着当变化发生时，Model 应该识别新的或更新后的解释，而不是把原始 structure 当作可以无限可变的控制表面。Layer 6 提供已解释的基础；Layer 5 提供建立在其上的可变界面。

### 与 Digital Data 的关系

Digital Data 与 Structure & Semantics 之间的边界，是活动表示与已解释形式之间的边界。Digital Data 说：“这个资源现在以计算机可读形式存在于 Stack 内部。”Structure & Semantics 说：“这个表示是这样被理解的。”

这防止 Layer 7 承担属于解释的责任。文件、stream、响应或 buffer 可能已经按照某种格式编码，但编码本身并不等于 Model 内部的解释。Layer 6 从 Stack 应用相关规则，并产生界面其余部分可以使用的组织形式时开始。

### 与 Components, Controls, & Layouts 的关系

Structure & Semantics 也保护 Layer 5，使其不必直接理解每一种原始表示。Components、controls 和 layouts 不应该在每次使用时都被迫解析 bytes、解码格式、验证字段顺序或判断资源的基本意义。它们应该接收一个已经被解释的形式，并把它适配为面向人的界面对象。

这种分离让 Layer 5 可以专注于可用性、交互和排列。Component 可以暴露方便的属性，control 可以响应用户意图，layout 可以组织界面中可见或不可见的部分。这些责任依赖意义，但不从零定义意义。Layer 6 提供使这些责任成为可能的结构化理解。

### 在流中的角色

在自上而下的流中，Structure & Semantics 接收 Digital Data，并把它解释成稳定的组织形式。这是 Stack 开始从原始计算机可读表示移动到可用界面材料的时刻。结果随后可以被转换为适合交互和进一步组织的 components、controls 和 layouts。

在自下而上的流中，Structure & Semantics 接收通过交互产生的变化，并准备让它们再次成为 Digital Data。Control 可以修改一个值、更新一个 section、创建一条记录、移除内容或产生其他变化。在该结果能够返回 Digital Data 之前，它仍然必须符合相关语义规则。因此，Layer 6 帮助确保结果在再次以机器可读形式表示之前仍然有意义。

### 为什么这一层重要

Structure & Semantics 防止 Stack 把访问与理解混为一谈。Digital Data 可以对系统可用，但可用并不意味着界面知道如何使用它。Layer 6 提供缺失的解释步骤：它定义该表示意味着什么，并把它组织成后续层可以安全构建其上的形式。

通过分离 semantics、structure 和 components，Model 保留了清晰的责任递进。Digital Data 提供活动表示。Semantics 定义该表示应如何被理解。Structure 提供这种理解的组织结果。Components, Controls, & Layouts 随后把这种已解释形式转换为可变界面对象。这种区别让 Stack 保持精确，防止 parsing logic 渗漏到每一层，并允许同一个底层表示支持不同形式的交互、呈现和转换。
