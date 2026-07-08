<!--
この翻訳はChatGPTによって生成されたものであり、人間の翻訳者による確認が必要です。
翻訳が検証された後、pull request でこれらの行を削除してください。
-->

# 5.6 The Stack :: Renderers

## 詳細な解説

### 変換のレイヤー

**Renderers** は、整理されたインターフェイス状態が output-ready な形へ変換されるレイヤーです。Layer 4 は graphs と frames を提供します。つまり、何を下へ送るべきか、どのように整理されているか、どの現在状態を表すべきかを説明する、準備済みの操作文脈です。Layer 3 はその準備済みの文脈を受け取り、window を通じ、最終的には system を通じて届けるのに適した形へ変換します。

このレイヤーが rendering と呼ばれるのは、インターフェイス表現から知覚可能な output へのアクティブな変換を行うからです。Renderer は単にインターフェイスを保存したり、元の内容を解釈したり、component relationships を管理したりするものではありません。その責任は、上位レイヤーの準備済みの結果を受け取り、Stack の下位レイヤーが必要とする domain-specific output を生成することです。

### 変換としての Rendering

CatalystUI では、rendering はグラフィックに限定されません。Visual renderer は、準備されたインターフェイス状態を pixels、draw commands、textures、glyphs、または他の visual output へ変換できます。Auditory renderer は、準備された状態を waveforms、samples、tracks、または mix された audio output へ変換できます。Tactile renderer は、準備された状態を haptic patterns へ変換できます。具体的な domain は変わるかもしれませんが、このレイヤーの役割は同じです。Rendering は整理されたインターフェイス表現を、system が届けられる output へ変換します。

この区別により、Model は従来の graphical user interface 的な考え方より広くなります。Renderer は画面に描画するかどうかで定義されません。準備されたインターフェイス状態を下位レベルの output 形式へ変換するかどうかで定義されます。その結果は最終的に見られ、聞かれ、感じられ、または別の形で知覚されるかもしれませんが、Layer 3 での焦点は変換そのものです。

### Graphs & Frames との関係

Renderers は **Graphs & Frames** に依存します。インターフェイスモデル全体を理解する責任を持つべきではないからです。Layer 4 は現在の操作文脈を解決し、components を整理し、境界を準備し、関連する状態を決定し、rendering に適した frame を提供します。Layer 3 はその準備済みの frame を output-ready な形へ変換します。

この分離が重要なのは、整理と rendering が異なる責任だからです。Graph は components が互いにどう関係するかを知っているかもしれません。Frame は現在の pass が何を含むべきかを知っているかもしれません。Renderer は、その準備済みの文脈を適切な output 表現へ変換する方法を知るべきです。これらの責任が分かれていると、renderer はインターフェイス全体の管理者になることなく、専門的で効率的なままでいられます。

### Windows との関係

Renderers は **Layer 2: Windows** にも依存します。レンダリングされた output には届け先が必要だからです。Renderer は commands、buffers、streams、または他の output-ready な表現を生成できますが、それらの結果にはなお行き先が必要です。Window は、レンダリングされた output を system へ運ぶための、境界づけられた view、channel、または delivery surface を提供します。

これにより renderer は、上位のインターフェイスモデルと下位の delivery model の間のアクティブな変換点になります。その上では、Stack は主に意味、使いやすさ、整理、アクティブな状態に関わります。その下では、Stack は output を window へ通し、system へ入れることに関わります。Layer 3 はこれらの関心の間に立ち、一方をもう一方へ変換します。

### Domain-Specific な責任

Renderers は本質的に domain-specific です。Renderer は自分が生成する output の種類を理解していなければなりません。異なる domains は異なる変換形式を必要とするからです。Visual output、auditory output、tactile output、その他の感覚形式は、同じ概念的なインターフェイス状態から生成される場合でも、同じ delivery requirements を共有しません。

これは、上位レイヤーを domain ごとに書き直す必要があるという意味ではありません。Stack の強みの一つは、上位レイヤーが内容、相互作用、整理、状態を一貫した方法で説明しながら、domain-specific conversion が必要になる地点で renderers が専門化できることです。Renderer は、その専門化が明示的になる場所です。

複数の output 形式が別々に扱われる場合、一つのインターフェイスが複数の renderer を含むこともあります。その場合、それぞれの renderer は自分の domain に必要な変換を担当し、周囲の Stack は相互作用のより大きな流れを保ちます。

### Rendering と知覚可能性

Renderer は知覚のために output を準備しますが、知覚そのものではありません。ユーザーは renderer を直接知覚しません。Renderer は、window と system を通って、デバイス、channel、または物理的な output を通じて知覚可能になる形を生成します。

この区別は重要です。Rendering はまだコンピューター側の変換プロセスの一部だからです。Visual renderer は pixel data を生成するかもしれませんが、ユーザーが知覚するのはディスプレイからの光です。Auditory renderer は audio samples を生成するかもしれませんが、ユーザーが知覚するのはスピーカーやヘッドホンを通じた音です。Layer 3 は output を準備し、下位レイヤーがそれを届けます。

### 上から下への流れにおける役割

上から下への流れでは、Renderers は Layer 4 から準備済みの frame を受け取り、それを output-ready な形へ変換します。これは、アクティブなインターフェイスモデルが components の抽象的な整理を離れ、system の具体的な delivery path へ入り始める地点です。

Renderer は component state を draw operations、audio buffers、haptic instructions、または別の domain-specific representation へ変換するかもしれません。その変換が起きると、結果は Window レイヤーへ渡されます。Window は、system が output を届けるための境界づけられた channel または view を提供します。

### 下から上への流れにおける役割

下から上への流れでは、Renderers は相互作用の詳細が上位レイヤーへ戻る前に、その解釈や変換にも参加することがあります。相互作用は system から window を通じて到着し、調整、翻訳、レンダリングされた領域への関連づけ、または graph と frame がルーティングできる表現への変換を必要とする形で来るかもしれません。

これは renderer が相互作用の最終的な handler になるという意味ではありません。その責任は Layer 5 の適切な control に属します。しかし renderer はインターフェイスがどのように output へ変換されたかを理解しているため、その変換の一部を逆向きにしたり対応づけたりするための必要な文脈を提供できます。たとえば、Layer 4 がそれを上へルーティングする前に、下位レベルの相互作用をレンダリング位置、output region、timing point、または domain-specific target に関連づける助けになります。

### なぜこのレイヤーが重要なのか

Renderers は、Stack が output を整理済みインターフェイスオブジェクトの直接の結果として扱うことを防ぎます。Frame は何を表すべきかを説明できますが、自動的に知覚可能な output になるわけではありません。その準備済みの文脈を、下位レイヤーが届けられる形へ変換するものが必要です。Layer 3 はその変換を提供します。

Renderers を Graphs & Frames と Windows の両方から分離することで、Model は責任の明確な分担を保ちます。Graphs & Frames は現在のインターフェイス文脈を整理します。Renderers はその文脈を output-ready な形へ変換します。Windows は、その output が system へ届く境界づけられた channel を提供します。この区別により CatalystUI は、rendering をグラフィックへ還元したり、windows に変換を行わせたり、上位のインターフェイスオブジェクトに最終的な delivery の方法を知ることを要求したりせずに、domains をまたいで rendering を説明できます。
