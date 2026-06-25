# 5.7 The Stack :: Windows

## 詳細な解説

### 境界づけられた delivery レイヤー

**Windows** は、レンダリングされた output が境界づけられた delivery context を受け取るレイヤーです。Layer 3 は準備されたインターフェイス状態を output-ready な形へ変換しますが、その output には、system によって届けられるための定義された場所、channel、または view がまだ必要です。Layer 2 はその境界を提供します。

Window は、単に画面上の視覚的な箱ではなく、論理的な delivery context として理解すべきです。グラフィカル環境では、window は通常、オペレーティングシステムによって管理される可視領域として現れます。しかし Model では、この概念はより広いものです。Window は、output を提供し、interaction を受け取ることができる、system-facing な文脈です。レンダリングされた結果が周囲の system の中でどこに属するかを定義します。

### System への視点

Window は system への視点として働きます。System を作るわけでも、renderer を置き換えるわけでもありません。代わりに、renderer の output を system-level delivery へ接続できる境界づけられた文脈を提供します。この境界は、位置、サイズ、フォーカス、可視性、デバイス文脈、output channel、または別の system-defined なスコープを含むことがあります。

これが重要なのは、レンダリングされた output がユーザーに対して孤立して存在するわけではないからです。どこかへ届けられなければなりません。Renderer は visual commands、audio samples、haptic instructions、または別の domain-specific output を生成できますが、それらの結果はなお system が認識する文脈に関連づけられる必要があります。Window はその関連づけを提供します。

視覚インターフェイスでは、これは認識しやすいものです。Window はディスプレイ上の長方形領域に対応するかもしれないからです。他のドメインでは、同じ概念的役割を、コマンドラインセッション、audio output context、device channel、virtual viewport、または別の境界づけられた system-facing interface が果たすかもしれません。定義する特徴は見た目ではありません。定義する特徴は、window がレンダリングされた output と system の間の delivery boundary を提供することです。

### Renderers との関係

Windows は Renderers から output を受け取りますが、自分で rendering を行うわけではありません。Rendering は、準備されたインターフェイス状態を output-ready な形へ変換することです。Windowing は、その output に、届けられるための境界づけられた system context を与えることです。

この区別により、Layer 2 が Layer 3 の責任を吸収することを防ぎます。Renderer は、整理されたインターフェイス状態がどのように output-ready になるかを決めるべきです。Window は、その output を送る system-facing な場所または channel を提供すべきです。Renderer は変換し、window は含み、受け取り、転送します。

これにより、異なる renderers が異なる window types を対象にすることもできます。Visual renderer は graphical window を対象にし、auditory renderer は audio output context を対象にするかもしれません。具体的な実装は system や domain によって変わりますが、レイヤー化された責任は一貫しています。

### System との関係

Windows は **Layer 1: Systems** に依存します。多くの場合、周囲のプラットフォームによって作成され、管理され、制約され、認識されるからです。System は、windows がどのように作成されるか、どのように input を受け取るか、どのように output channels を公開するか、どのリソースにアクセスできるか、hardware や lower-level services とどのように相互作用するかを決定することがあります。

これは window が system と同一であるという意味ではありません。System は、hardware access、device services、scheduling、permissions、drivers、platform behavior を提供する、より広い operating environment です。Window はその環境内の境界づけられた論理文脈です。レンダリングされた output と interaction が Stack と system の間を通れるようにする、interface-facing な文脈です。

Windows を System から分離することで、Model はすべての platform detail をインターフェイス境界の一部として扱うことを避けます。Window はインターフェイスが使う特定の system-facing context を表します。System はその文脈を可能にする、より大きな環境を表します。

### Output Delivery

上から下への流れでは、window は renderer から output-ready representation を受け取り、それを system へ渡します。これは、レンダリングされた output がもはやインターフェイスによって準備されただけではなく、system が使える delivery context に割り当てられる段階です。

Window は、domain と実装に応じて、境界、フォーカス、buffering、可視性、channel state、またはその他の delivery conditions を管理することがあります。これらの詳細は output が system へどう移動するかに影響しますが、このレイヤーの主要な役割を変えるものではありません。Window は、レンダリングされた output が system output になるための境界を提供します。

Output が window を通過すると、system はそれを、ユーザーが知覚できるようにする関連デバイス、サービス、または物理的プロセスへ運べます。したがって window は知覚可能性に近い位置にありますが、知覚そのものではありません。コンピューター側の流れの一部にとどまります。

### Interaction Entry

下から上への流れでは、window は system-provided interaction がモデル化されたインターフェイスに利用可能になる、最初の明示的な Stack レイヤーです。System はキー押下、ポインター移動、タッチイベント、デバイス信号、音声コマンド、または別の input 形式を検出するかもしれません。Window は自分の境界づけられた文脈内でその interaction を受け取り、さらなるルーティングと処理のために上へ転送します。

これにより window は interaction にとって中心的です。行動に文脈を与えるからです。Interaction は単に何かが起きたというだけではなく、それが特定の system-facing boundary の中で起きたということです。フォーカス、位置、タイミング、デバイスソース、channel、active context は、Stack の他の部分がその interaction をどう理解しルーティングすべきかを決定することがあります。

Window は通常、interaction の最終的な意味を決めません。その責任は Stack の上位、特に interaction が適切な control に到達した後に属します。Window の役割は、system から interaction を受け取り、それを正しい境界に関連づけ、Stack の他の部分が処理を続けられる形で上へ渡すことです。

### Domain Independence

Windows は、Stack の他の部分と同じように domain-independent です。“window” という言葉はしばしばグラフィックと結びつけられますが、CatalystUI では、output と interaction のためのあらゆる境界づけられた system-facing context を指します。Domain は window がどの種類の output と input を運ぶかを決め、Stack position は window がどの役割を果たすかを決めます。

これにより同じレイヤーが、graphical windows、text sessions、audio channels、tactile output contexts、または他の interface delivery 形式を、Model を変えることなく説明できます。それぞれの実装には異なる system requirements があるかもしれませんが、すべて同じ概念的責任を果たします。レンダリングされた output と system interaction が通る境界を提供することです。

### なぜこのレイヤーが重要なのか

Windows は、Stack がレンダリングされた output を自動的にユーザーへ届くものとして扱うことを防ぎます。Renderer はインターフェイス状態を output-ready な形へ変換できますが、その output にはまだ system-facing context が必要です。Layer 2 はその文脈を提供します。

Windows を Renderers と System の両方から分離することで、Model は明確な delivery path を保ちます。Renderers は準備されたインターフェイス状態を output-ready representation へ変換します。Windows はその表現が system に入る境界づけられた文脈を提供します。System は output を届け input を受け取るために必要な lower-level work を行います。この区別により CatalystUI は、windows を視覚的な長方形へ還元したり、renderers に platform-level behavior を管理させたりせずに、platforms と domains をまたいだ interface delivery を説明できます。
