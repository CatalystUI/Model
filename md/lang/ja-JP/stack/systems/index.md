# 5.8 The Stack :: Systems

## 詳細な解説

### 最も低い明示的レイヤー

**Systems** は Stack の最も低い明示的レイヤーです。このレイヤーは、output が届けられ、interaction が受け取られるために必要な、基礎となるサービス、デバイス、操作を提供する computing environment を表します。Layer 2 が output と interaction の通る境界づけられた文脈を定義するのに対して、Layer 1 はその文脈を可能にするより広い環境を表します。

System はデスクトップ operating system だけとして理解すべきではありません。CatalystUI Model では、system は runtime においてインターフェイスを支える、整理されたプロセスと platform capabilities の集合です。従来の operating system、embedded environment、console、browser runtime、hardware platform、または別の managed computing context かもしれません。定義する特徴は製品カテゴリではありません。定義する特徴は、system がインターフェイスが実際に動作するための lower-level capabilities を提供することです。

### Operating Environment

System レイヤーは、明示的な Stack の周囲の実行環境を提供します。Hardware access、input devices、output devices、drivers、permissions、scheduling、memory、files、processes、windows、channels、または他の platform-level services を管理することがあります。これらの詳細は実装ごとに大きく異なりますが、すべて同じ概念的役割を果たします。インターフェイスが機械または情報システムの実際の能力に接続できるようにすることです。

これにより Layer 1 は Layer 2 と異なります。Window はインターフェイスが使う境界づけられた system-facing context です。System は、その文脈を作成し、所有し、認識し、制約し、サービスする、より広い環境です。Window は特定の接続点を提供し、system はその接続が存在する世界を提供します。

そのため、System レイヤーは単なる受動的な基盤ではありません。インターフェイスサイクルに能動的に参加します。レンダリングされた output を物理または論理デバイスへ届け、それらのデバイスから input を受け取り、platform rules を適用し、上位レイヤーが依存する操作を公開します。Stack はインターフェイスの流れを説明できますが、system はその流れの下にある操作上の地面を提供します。

### Windows との関係

Systems と Windows は密接に接続されていますが、同じレイヤーではありません。Window は Layer 3 からレンダリングされた output を受け取り、境界づけられた delivery context を提供します。System はその windowed output を受け取り、利用可能なデバイスまたはサービスを通じて届けるために必要な lower-level work を行います。

上から下への流れでは、window が output を system へ渡します。System はその後、実際の delivery path を扱います。Visual output をディスプレイへ、audio output を音声デバイスへ、tactile output を haptic device へ、text output を terminal へ、または別の output 形式を適切な channel へ送ります。Window は output がどこに属するかを定義し、system はそれを知覚可能にできる環境へ運びます。

下から上への流れでは、system はインターフェイスの人間側から interaction を受け取る、または検出します。これは keyboard、pointer、touchscreen、microphone、controller、sensor、button、または別の input path を通じて来るかもしれません。System はその物理的またはデバイスレベルの活動を system-level signal へ変換し、それを window に関連づけて Stack を上へ渡せるようにします。

### Output Delivery

System レイヤーは、上から下への流れにおける最後の明示的段階です。Output が Layer 1 に到達するまでに、上位レイヤーはすでに元の表現を解釈し、利用可能なインターフェイスオブジェクトを形成し、それらを現在の操作文脈へ整理し、その文脈を output-ready な形へレンダリングし、window を通して渡しています。System はここで、その output を Human Interface が受け取れるようにするために必要な platform-level work を行います。

これは system 自体がユーザーの知覚と同じであるという意味ではありません。ユーザーは operating system を直接知覚しません。ユーザーが知覚するのは、system が管理するデバイスや channels を通じて利用可能になる物理的または感覚的な結果です。したがって Layer 1 はコンピューター側のプロセスの内側にとどまり、暗黙の Human Interface はその先で output の受け手となります。

この区別は Model を正確に保ちます。System はディスプレイを通じて光を、スピーカーを通じて音を、モーターを通じて振動を、または何らかのデバイスやサービスを通じて別の知覚可能な結果を生成できます。System は最後の明示的な delivery mechanism を提供し、Human Interface はその結果を受け取り知覚します。

### Interaction Origin

System レイヤーは、下から上への流れにおける最初の明示的段階でもあります。ユーザーは明示的な Stack の外で行動しますが、その行動が interaction input としてモデル化されたインターフェイスに利用可能になる場所が system です。人間の行動そのものは暗黙の Human Interface に属します。System は対応する input path を通じてその行動の効果を受け取り、Stack が処理できるものへ変換し始めます。

これが system と interaction が密接に結びついている理由です。物理的なキー押下、ポインター移動、タッチジェスチャ、音声入力、controller signal、sensor change は、上位のインターフェイスレイヤーが応答する前に、まず computing environment によって受け取られなければなりません。System は通常、その interaction の最終的な意味を決定しません。何かが起きたことを識別し、関連するデバイスまたはプラットフォーム文脈を提供し、その interaction を適切な window へ渡します。

そこから interaction は Stack を上へ移動できます。Window がそれを境界づけられた文脈に関連づけ、renderer が変換または対応づけを助け、graph と frame がルーティングし、適切な control が最終的にそれを扱います。System は明示的な戻り経路を始めますが、行動の意味は Stack の上位で解決されます。

### Platform Rules and Constraints

Systems が重要なのは、すべてのインターフェイスが制約の中で動作するからです。System は、どのデバイスが利用可能か、windows がどのように作成されるか、input がどのように届けられるか、permissions がどのように与えられるか、output channels がどう振る舞うか、どの resources にアクセスできるか、どの operations がサポートされるかを決定することがあります。これらの制約は Stack の他の部分が何をできるかを形づくります。

しかし CatalystUI は、それらの platform concerns を上位のインターフェイスモデルから分離します。Components はすべての driver や operating system rule を直接理解する必要があるべきではありません。Renderers はすべての hardware detail を管理する必要があるべきではありません。Windows はプラットフォーム全体を表す必要があるべきではありません。Layer 1 は system-level behavior のための明確な場所を提供し、上位レイヤーが解釈、使いやすさ、整理、変換に集中できるようにします。

この分離により、Model は異なる環境にも適用できます。Desktop application、mobile app、embedded device、browser-based interface、command-line tool、specialized hardware system はそれぞれ異なる platform rules を持つかもしれませんが、どれもインターフェイスの下に操作環境を提供する system layer を必要とします。

### Human Interface との関係

Systems は暗黙の **Human Interface** のすぐ上にあります。つまり Layer 1 は、output がモデル化されたコンピューター側の流れを離れる前の最後の明示的レイヤーであり、ユーザー行動がそこへ入った後の最初の明示的レイヤーです。したがって system は、管理された computing environment と、知覚し行動する人間との境界です。

この境界は不可欠です。Model は system が output をデバイスへ送る方法を説明できますが、ユーザーの感覚体験、生物学、注意、感情、解釈を直接モデル化しません。同様に、system が input signal を受け取る方法は説明できますが、その行動を生み出した人間のプロセス全体を直接モデル化しません。それらの関心は暗黙の Human Interface に属します。

Systems を Layer 1 に置くことで、Stack は人間の知覚と行動へ渡る前に、コンピューター側のプロセスを説明できる最も低い明示的地点を明確に識別します。

### なぜこのレイヤーが重要なのか

Systems は Stack を実際の動作に根づかせます。このレイヤーがなければ、Model は rendering と windows を、output delivery と input reception が自動的に起こるかのように説明してしまいます。実際には、すべてのインターフェイスはデバイス、resources、permissions、execution、platform behavior を管理する基礎環境に依存しています。

Systems を Windows と Human Interface から分離することで、Model は明確な最終境界を保ちます。Windows は output と interaction のための境界づけられた文脈を提供します。Systems は output を届け input を受け取る基礎の操作環境を提供します。Human Interface は output を知覚し action を生みます。この区別により CatalystUI は、system を単一の operating system、特定の device、または visual display model へ還元せずに、platforms と domains をまたいでインターフェイスを説明できます。
