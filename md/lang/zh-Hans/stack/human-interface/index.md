<!--
此翻译由 ChatGPT 生成，应由人工译者审核。
翻译验证后，请在 pull request 中删除这些行。
-->

# 5.9 The Stack :: Human Interface

## 深入讨论

### 隐含的人类边界

**Human Interface** 是 Stack 的隐含下边界。它表示用户：接收来自 system 的可感知 output，并产生可能成为 interaction input 的动作的人。说得简单一点，这一层就是你。

这听起来也许很明显，但它很重要。Stack 的存在是为了描述用户与信息系统之间的通信过程。如果 Data Storage 解释被保留的内容可以进入或离开活动流的边界，那么 Human Interface 就解释相反的边界：计算机 output 最终成为人类体验一部分的位置，以及人类动作开始返回 system 的路径的位置。

Human Interface 是隐含的，因为 Model 不直接表示用户的身体、心智、注意力、情绪、感官、意图、记忆或选择。CatalystUI 可以描述 system 如何把 output 送向用户，以及用户动作如何成为 interaction input，但它并不假装建模整个人。那会稍微有点雄心过头。也有点可怕。Stack 很强大，但它不需要变成一本带 renderer 的心理学教材。

### 可感知 Output 的接收者

在自上而下的流中，Human Interface 是可感知 output 的接收者。Digital Data 穿过显式 Stack，变得被解释、塑形、组织、渲染，通过 window 交付，并由 system 承载，直到最终可以被感知。一旦该 output 到达用户的感官，显式 Stack 就完成了它的向下路径。

这并不意味着用户直接接收 Digital Data。人并不会自然感知一和零、memory buffers、draw calls、audio samples 或 system events。用户感知的是 system 工作的结果：光、声音、振动、运动、文本、空间变化，或另一种感官 output。Human Interface 是 output 不再只是被交付，而开始被体验的位置。

这种区别让 Model 保持诚实。System 可以提供 output，但不能强迫理解。显示器可以显示按钮，扬声器可以播放声音，设备可以振动，但用户仍然必须作为人去感知并解释该结果。Model 承认这个边界，但不试图定义其中涉及的每一个个人、生物或上下文因素。换句话说：CatalystUI 可以把 output 送到人那里。它不能让人停止忽略通知。遗憾。

### 交互的来源

在自下而上的流中，Human Interface 是动作的来源。用户看见、听见、感觉到、理解、反应、决定，然后做某件事。这个动作可以是按下按键、移动指针、触摸屏幕、说出命令、转动旋钮、穿过传感器区域，或执行另一种 system 可以接收的行为。

动作本身开始于显式 Stack 之外。Model 不直接描述导致用户行动的完整内部过程。它只在 system 接收到该动作的效果之后，才开始建模返回路径。此时，该动作成为 interaction input，并进入 Layer 1: Systems，在那里它可以向上穿过 Stack。

这保持了 **human action** 与 **system interaction** 之间的清楚区别。Human action 是用户做的事。Interaction input 是 system 从该动作接收到的东西。二者关系密切，但并不相同。一个人可能本想点击一件事，却意外点击另一件；也可能在拿别的东西时碰到按键。System 可能都会接收到，但其中可能只有一个真正表达了用户意图。除非 accidental input 本来就是目标，那就恭喜：界面进入了非常实验性的阶段。

### 为什么这一层是隐含的

Human Interface 是隐含的，原因与 Data Storage 相同：它是流所必需的，但并不作为显式转换层被直接建模。Stack 依赖用户，但它不转换用户。它不解析用户，不渲染用户，不适配用户，也不把用户存成 component。这样大概最好。

相反，Model 把 Human Interface 视为 system 下端周围的活边界。显式 Stack 可以描述 output 如何被准备和交付，也可以描述接收到的 interaction 如何向上移动。它不会进一步声称拥有人的体验本身。

这个边界尤其重要，因为用户不只是另一个设备。显示器提供 visual output。键盘提供 input signals。用户会感知、解释、选择、回应、误解、学习、犹豫、犯错，有时还会非常自信地点错按钮。Model 应该尊重这种差异。因此，Human Interface 存在于这里，是因为 Stack 是为人类通信而构建的；但它是隐含的，因为人类不是机器侧转换过程的一部分。

### 感知与意图

Human Interface 通过连接感知与意图来完成通信循环。在一个方向上，system 提供可感知的东西。在另一个方向上，用户以动作回应。这构成 CatalystUI 中心的对话循环：system 通过 output 说话，用户通过 interaction 回应，system 处理该回应以继续交换。

这就是为什么 Human Interface 不能被简化为 input devices。键盘、鼠标、触摸屏、麦克风、摄像头或控制器可以帮助捕获 interaction，但它们都不是用户。它们是 system 可访问的路径，用户动作可以通过这些路径进入 Stack。Human Interface 是那个人，他们的感知和意图赋予这些信号意义。

Output devices 也一样。显示器、扬声器、haptic motor 或其他 output device 可以承载可感知数据，但设备并不完成体验。体验在用户感知结果时才完成。一整屏完美渲染的 pixels，如果用户无法看见、理解、触达、听见、感觉或对其采取行动，仍然不是成功的界面。

### 与 Systems 的关系

Human Interface 直接位于 **Layer 1: Systems** 下方。System 层提供 output 的最后显式计算机侧处理，以及 interaction 的第一个显式计算机侧处理。Human Interface 位于这一层之外，作为 system output 的接收者和用户动作的来源。

这种关系定义了 Stack 的下边缘。在自上而下的流中，system 把 output 送向用户。在自下而上的流中，system 接收用户动作的效果。因此，system 是机器操作的最后显式层，而 Human Interface 是机器操作与人类体验相遇的隐含边界。

通过分离这些层，Model 避免把设备行为与用户体验混淆。System 可以知道某个键被按下、指针移动或声音被播放。它并不会自动知道用户理解了什么、意图是什么、感受如何或注意到了什么。这些人类现实位于显式 Stack 之外，即使 Stack 的存在正是为了服务它们。

### 可访问性与人类差异

Human Interface 也提醒 Model：用户不是可以互换的机器。人们通过不同能力、感官、上下文、工具、限制、偏好和环境来感知并行动。一个用户可能主要依赖 visual output。另一个用户可能依赖 auditory output、tactile feedback、keyboard navigation、screen readers、captions、simplified motion、alternate input devices 或其他访问形式。

这不会改变 Stack 的结构。它说明了为什么 Stack 很重要。通过分离各层，CatalystUI 可以更好地识别失败发生在哪里：output 已被交付但无法被有意义地感知，或用户有意图却没有可用路径表达它。Human Interface 边界让整个流的目的保持可见：system 不只是产生 output；它是在与一个人通信。

这个人可能疲惫、分心、聪明、困惑、残障、正在学习、同时处理很多事，或者正试图在截止时间前五分钟完成某件东西。界面仍然必须把他们当作人来相遇。最好不要先要求他们读一条四十页的错误消息。

### 为什么这一层重要

Human Interface 防止 Stack 在机器处结束。没有这个隐含层，Model 会停在 system output 和 system input，好像界面的目的只是让信号穿过硬件。那就错过了重点。Stack 的目的不只是产生 output；它是让信息系统与用户之间的通信成为可能。

通过把 Human Interface 同 Systems 分开，Model 保留了清晰的最终边界。Systems 交付 output 并接收 input。Human Interface 感知 output 并产生 action。显式 Stack 描述这两个方向之间的机器侧过程，而隐含的 Human Interface 提醒我们这个过程是为谁而存在。

这就是为什么 Human Interface 属于 Stack，尽管它没有编号。用户不是一个需要实现、渲染、解析或单元测试的 layer。用户是这些 layers 存在的理由。而且，假设用户是人类，Model 就运作得很漂亮。
