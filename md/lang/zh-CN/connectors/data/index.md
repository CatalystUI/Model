<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 6.1 Connectors :: Data

## 深入讨论

### 第一次转换

**Data** connector 是 Stack 中第一个显式 connector。它位于 **Layer 7: Digital Data** 和 **Layer 6: Structure & Semantics** 之间，在这里，活动的、计算机可读的信息第一次开始获得被解释后的形式。Layer 7 告诉我们信息以 digital data 的形式存在。Layer 6 告诉我们这些信息如何被结构化，以及它意味着什么。Data connector 解释系统如何从一种状态移动到另一种状态。

这个 connector 是必要的，因为 digital data 不会自己解释自己。一个文件、stream、buffer、数据库结果、响应或消息可能已经包含有组织的信息，但组织并不等于解释。必须有某个东西访问数据，按照合适的预期读取它，并产生一种 Structure & Semantics 能理解的形式。这个“东西”就是 Data connector。

从这个意义上说，这个 connector 是显式 Stack 内的第一次转换行为。它不创造原始信息，也还不创造面向用户的 components。它的作用是在需要时把信息作为 Digital Data 带入活动流程，然后把这种活动的数字表示连接到使解释成为可能的规则和结构。

### 与 Data Storage 协作

虽然 Data connector 位于 Digital Data 和 Structure & Semantics 之间，但它常常与隐含的 **Data Storage** 层有密切关系。这是因为许多形式的 digital data 只有在能够从其存储位置被访问时才有用。因此，Data connector 通常执行两个相关职责。第一，它到 storage 中取回、接收或以其他方式访问信息，使这些信息能够作为 Digital Data 进入活动流程。第二，它把得到的 Digital Data 处理成一种被解释的结构。

MySQL data connector 是一个很好的例子。从 Model 的角度看，MySQL 数据库可以被视为 Data Storage，而查询结果则成为正在被处理的活动 Digital Data。connector 可以建立连接、发送查询、接收结果，然后把该结果组织成 Stack 其余部分能够理解的结构化信息。数据库连接、查询行为和结果处理都可能出现在同一个 connector 中，因为 Data connector 负责伸向 storage，并把取回的信息带向结构化且有意义的数据。

这并不会让 Data Storage 成为 Stack 的显式层，也不会让 Data connector 负责成为数据库、文件系统、服务或存储机制本身。相反，Model 只是承认，第一个 connector 经常需要触及 storage，才能把 digital data 带入系统的活动流程。

### 访问不是理解

Data connector 存在的部分原因是，访问和理解不是同一件事。计算机可以打开文件、接收响应、在内存中保存 bytes，或者连接到数据库。这只能证明信息可用。它不能证明信息已经被理解。

例如，一个设置文件可能以文本形式可用。系统可能知道文件在哪里，成功读取它的内容，并把这些内容保存在内存中。即便如此，Stack 仍然还没有确定哪些部分是 keys，哪些部分是 values，哪些 sections 有效，或者哪些规则定义了该格式。

Data connector 提供了从“信息作为 digital data 可用”到“信息现在可以根据 structure 和 semantics 被解释”的移动。这个区分让 Layer 7 保持清晰。Digital Data 不需要知道每一种可能的格式应该如何解释。它只需要表示活动的计算机可读信息。Data connector 随后执行向 Layer 6 的交接，在那里可以根据合适的规则进行解释。

### 产生结构

在 top-down 流程中，Data connector 接收 Digital Data，并为 Structure & Semantics 做准备。这可能包括读取 bytes、解码文本、识别格式、选择语义规则、验证基本预期，或把表示转换成有组织的结构。具体工作取决于正在处理的信息类型，但职责保持不变：把活动表示连接到被解释的形式。

JSON 设置文件可能从编码文本开始。Data connector 读取文本，识别预期格式，并产生表示这些设置的结构化信息。CSV 文件可以变成行和字段。数据库结果可以变成 records。二进制文件可以变成 headers、sections 和 values。服务器响应可以变成结构化消息。

重要的是这个移动。Data connector 可以从触及 storage 开始，但只有当取回或接收的 Digital Data 已经成为能够通过 Structure & Semantics 理解的信息时，它在显式 Stack 中的转换才算完成。

### 保留意义

Data connector 必须在信息跨层移动时保留意义。这并不意味着原始表示的每个细节都必须保持不变。它意味着 connector 应该保留 digital data 和它所产生的被解释结构之间的预期关系。

例如，如果文件包含标题，结果结构就应该以忠实于原始信息的方式表示该标题。如果数据库 record 包含 identifier，该 identifier 就应该继续连接到它所描述的 record。如果某种格式定义了顺序、分组或必需值，connector 在产生结构化结果时就应该尊重这些预期。

### 返回 Digital Data

因为 Stack 是可逆的，Data connector 也参与 bottom-up 流程。当交互改变了界面中的信息时，这种改变最终可能需要返回到 Digital Data。在它能够被保存、传输或复用之前，结构化信息必须被转换回计算机可读形式。

在这个方向上，Data connector 执行相反的转换。它从 Layer 6 接收结构化信息，并产生适合存储、传输、比较或进一步处理的 Digital Data。

设置结构可以变成编码后的 JSON 文本。一张值表可以变成 CSV。一个 record 可以变成数据库更新。一个文档结构可以变成文件的 bytes。

这种反向移动和 top-down 移动同样重要。如果 Data connector 能把信息读入结构，却不能把结构写回数字形式，界面也许能显示或使用信息，但无法完整保存交互结果。因此，connector 帮助完成用户意图和持久化改变之间的循环。

### 验证与失败

Data connector 也是最早能够有意义地识别失败的位置之一。Digital Data 可能缺失、格式错误、不完整、不受支持、过时，或与 Layer 6 期望的语义规则不一致。

当这种情况发生时，connector 应该让转换结果清晰可见。connector 可以从缺失的可选值中恢复、应用默认值、忽略不受支持的扩展，或者在合适时产生部分结构。不过，Stack 的其余部分不应该被迫猜测数据是否被正确解释。

通过在这条边界上识别失败，Model 让解释保持诚实。Data connector 保护 Stack 的其余部分，避免它建立在从未被成功理解的信息之上。

### 为什么这个 Connector 重要

Data connector 防止 Stack 假设 digital data 一旦可用就会自动变得有意义。没有这个 connector，Model 会模糊表示和解释之间的边界。Layer 7 会被迫直接理解格式，或者 Layer 6 会被迫自己取回原始数据。通过定义 Data connector，Model 给这个转换一个合适的位置。

Digital Data 继续负责活动的计算机可读表示。Structure & Semantics 继续负责被解释的意义和有组织的形式。Data connector 处理二者之间的移动。

这让 Stack 的第一次转换变得显式。信息从活动的数字表示开始，穿过 Data connector，变成系统能够理解的东西。之后，Stack 的其余部分可以继续这个过程：把被解释的信息变成可用的界面对象，把这些对象组织进上下文，为 output 做准备，通过系统交付，并允许用户回应。
