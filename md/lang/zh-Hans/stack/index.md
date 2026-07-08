<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 5. The Stack

## 高层概览

在分类出信息流中涉及_哪种_数据之后，我们就可以关注数据位于_哪里_。这时，分析现有解决方案会非常有用，特别是在观察它们之间差异的时候。在拆解每个解决方案之前，我们可以先识别两条基本事实，为分析提供坚实基础：第一，_数据_必须存在于某处，无论是以二进制形式、在磁盘上、在内存中，还是以任何其他数据存储形式存在；第二，_人_也必须存在于某处，无论是在屏幕、耳机、控制器或任何其他接口形式的另一端。我们可以把这两个概念看成一个三明治，其中“Data Storage”是上层面包，“Human Interface”是下层面包。由于这两个概念一旦被识别为信息流的一部分就很明显，我们称它们为_隐含_层，因为信息流的性质_暗示_了它们的存在。

### Stack 的层

从 human interface 开始，我们可以识别 Stack 中第一层和第一个主要模式：存在一个“system”。system 负责组织信息最终如何传递给用户。在大多数现代计算机中，这个角色由“operating system”（“OS”）承担，它在计算机硬件和软件之间搭桥。无论形式如何，在任何信息流中，都必须存在一个 system，用来完成最后一步，把界面的内部工作连接到用户实际体验到的内容。

为了让 system 有用，用户需要某种方式与它交互。在“graphical user interface”（“GUI”）中，这通常通过窗口完成。然而，CatalystUI Model 认为“graphical window”这个概念过于狭窄，因为并不是所有接口都是图形化的。因此，Stack 的下一层“window”被定义为 Layer 2，表示进入 system 的任何“视图”。它可以是传统应用窗口、命令行接口、可视终端、音频采集设备，或者任何用户可以向 system 提供输入或从 system 接收输出的上下文。

为了让信息流入 window，需要一个“renderer”在界面使用的内部形式和用户使用的可感知形式之间转换数据，它就是 Layer 3。在 GUI 中，这通常表现为 OpenGL 或 Vulkan 这样的库，把视觉数据转换为可以通过窗口显示的输出。不过 renderers 不限于图形。OpenAL、WASAPI、ASIO 或 CoreAudio 这样的音频 renderers 可以产生声音，而触觉 renderers 可以产生触觉反馈。在大多数情况下，交互会以很少修改的形式通过，但也可能被重新解释或重新定义，例如处理红外传感器的运动数据。无论数据属于哪个 domain，renderer 都负责在界面准备好的数据和用于输出的 domain-specific 形式之间转换信息。

renderer 之后是一组在界面内部组织和跟踪数据的层。这些层一开始可能难以区分，但当我们考虑每一层提供什么时就会变得更清楚；第一层是 Layer 4：“Graphs & Frames”。在 CatalystUI Model 中，“graph”表示为渲染而准备的有组织结构，例如 3D 世界中的对象、组件树，或界面的某个子部分。“frame”表示包含并协调可用 graphs 的更大上下文，把它们准备好传递给 renderer。Web 中有一个熟悉的例子：“Document Object Model”（“DOM”）像 graph 一样组织网页元素，而文档本身提供这些元素存在的更大 frame。

由于这种信息形式是为 renderer 优化的，而不是为用户解释优化的，我们需要引入一层，把数据分离成可以被识别、组织或交互的逻辑形式。大多数交互处理都发生在这里，因此 CatalystUI Model 把 Layer 5 称为“Components, Controls, & Layouts”。“component”是界面的任何逻辑部分，例如图像、标签、音轨、样式元素，或系统可能呈现或组织的其他对象。“control”处理交互，例如按钮、开关、滑块或可变输入。“layout”排列其他 components 或 controls，并把它们放入有意义的顺序。在图形界面中，这些区别可能表现为视觉元素、可点击 controls，以及行或列。但同样的模式也适用于图形之外：音频界面可以用 components 表示音轨或音效，用 controls 播放或调整它们，用 layouts 把它们组织成组。这一层很重要，因为它表示界面的可用结构：存在的部分、可以响应的部分，以及这些部分在被组织成 graphs 并准备渲染之前的排列方式。

支撑界面逻辑部分的是“Structure & Semantics”，Layer 6。这一层描述数据在成为 components、controls 或 layouts 之前应如何被理解。“Semantics”定义读取数据的规则：它意味着什么、遵循什么顺序，以及每一部分应如何理解。“Structure”是在应用这些规则之后，数据的有组织形式。换句话说，这一层把可能只以文本、字节、字段或记录形式存在的数据，赋予一种有意义的形状，让界面的其余部分可以使用。例如在 web 上，加载的 HTML 一开始是 Digital Data，它的规则定义了应如何解释它。解析后的文档结构，就是把这些规则应用到原始 HTML 后得到的组织结果。

最后，我们到达 Stack 的顶部，Layer 7：“Digital Data”本身。这一层表示在 Model 的其余部分读取、组织或呈现数据之前的数据。它可以是文件、文档、流、web 响应或其他类似表示。此时，它还没有被塑造成 structure，也没有被分配到感官 domain。文本文件例如还不是 visual 或 auditory。它只是存储的文本。Stack 之后可以选择把它显示在屏幕上，或通过扬声器朗读，从而把它分配给某个 domain。因此，Digital Data 是信息流的上方转折点：交互可以向上移动并改变所存储的内容，而被存储的内容之后可以再向下穿过 Stack，成为用户体验的一部分。

### Stack 在 Model 中的作用

当 Stack 的每个部分都被识别后，我们可以把 Model 作为一个整体来描述。从上到下，Stack 包含“Data Storage”（隐含）、“Digital Data”、“Structure & Semantics”、“Components, Controls, & Layouts”、“Graphs & Frames”、“Renderers”、“Windows”、“Systems”和“Human Interface”（隐含）。七个显式层从下往上编号，其中“Systems”为 Layer One，“Digital Data”为 Layer Seven。隐含层位于编号之外，并作为信息流的端点。它们共同为我们提供了一种完整方式来追踪信息如何穿过界面。它们让我们能够询问某个事物在过程中位于哪里、扮演什么角色，以及如何帮助交互完成。由于 Stack 描述的是模式而不是精确实现，我们不需要了解系统的每个内部细节就能开始理解它。这也是 Model 强大的原因之一，尤其是在 large-language models、machine-learning systems 和其他“AI”驱动架构可能让界面内部运作更难看清的时代。

### 展示 Stack

#### 一个门传感器

为了展示这一点，我们可以回到门传感器的例子。前面我们把交换总结为：用户看到前进的路径，进入检测区域，系统打开门，用户通过后门关闭，循环结束。Stack 让我们可以在不知道具体硬件设计的情况下，更详细地描述同一个过程。

动作从“Human Interface”开始，也就是用户接近门口，并到达“System”，例如控制器、布线、电源和电机组件。“Window”通过运动传感器或热检测器检测用户存在，而“Renderer”把这个物理信号转换为可用事件。“Graphs & Frames”把事件放入更大的门口上下文，包括检测区域和当前门状态。“Components, Controls, & Layouts”处理决策本身，判断门应打开、保持打开还是关闭。为了作出这个决定，control 可能依赖“Structure & Semantics”，例如指定灵敏度或延迟时间等设置位置的配置格式。然后这些设置和状态变化被表示为“Digital Data”，如果需要保留，则放入“Data Storage”。

一旦作出决策，信息流就沿 Stack 向下移动：更新后的门状态被解释，转为 control 动作，放回门口上下文，由“Renderer”转换成硬件可以执行的内容，通过门机制的“Window”，由“System”执行，最终被“Human Interface”接收。最后，用户看到门打开并走过去。

#### Web

作为第二个例子，我们可以看 web。Web 是现有最接近广义用户界面模型的尝试之一，尤其是通过 W3C 及其标准化接口。然而，由于它主要围绕计算机之间的通信而设计，它本身并不能捕捉 Stack 的每一部分。在典型网页中，“Data Storage”可以由托管页面的服务器、数据库、文件系统或 API 表示。当浏览器获取 HTML、CSS、JavaScript、图像和类似资源时，它们就成为“Digital Data”。读取它们的规则，例如 HTML 语义、CSS 样式和 JavaScript 行为，属于“Structure & Semantics”。解释之后，它们成为可用的页面元素，例如文本、按钮、表单、链接、图像和 layout 容器，属于“Components, Controls, & Layouts”。然后页面被组织成“Graphs & Frames”，也就是前面提到的 Document Object Model。之后，浏览器的“Renderer”准备页面用于呈现。浏览器出现在操作系统提供的“Window”中，而操作系统作为“System”把结果传递给“Human Interface”。

## 对 Connectors 的需要

在 CatalystUI 的早期开发中，我们曾认为只靠 Stack 也许足以描述用户界面。一开始这似乎很合理。Stack 已经比许多现有模型更清晰、更完整地识别了用户界面的各个部分。但当我们开始把它作为真实开发的基础时，仍然感觉缺少了什么。我们可以描述每个部分_是什么_。我们可以描述它_属于哪里_。但它们之间仍然有一个空白：数据_如何_在层之间移动？Stack 给出了路径，但还没有解释从一层到下一层的移动。为了完成 Model，我们需要定义这些转换。这时，“Connectors”就不仅仅是一个附加概念，而成为一种必要。
