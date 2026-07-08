<!--
この翻訳はChatGPTによって生成されたものであり、人間の翻訳者による確認が必要です。
翻訳が検証された後、pull request でこれらの行を削除してください。
-->

# 6. Connectors

## 高レベル概要

Connectors が独特なのは、情報がレイヤー間を_どのように_移動するかを説明するだけでなく、ハードウェアデバイスによって課される多くの制限を_抽象化_できるからです。これは大胆な主張だと理解しています。しかし、ユーザーインターフェイスが CatalystUI Stack を中心に適切に設計されている場合、connectors は必要に応じて別の実装へ差し替えられるように構築できます。この意味で、connectors は_情報の翻訳媒体_として働きます。一度割り当てられると通常は特定の domain に固定される Stack のレイヤーとは異なり、connectors は情報を一つの domain から別の domain へ変換できます。たとえば、connector は保存されたテキストを受け取り、それを画面、スピーカー、あるいは点字ディスプレイを通じた触覚フィードバックのために準備できます！

Stack の各レイヤーを識別したのと同じように、どのレイヤーが別のレイヤーと通信する必要があるかを判断することで、connectors を特定できます。これは重要な違いです。“Data Storage” と “Human Interface” とは異なり、connectors には暗黙の端点がありません。代わりに、それらは隣接する二つのレイヤーが協力できるようにする仕組みです。そのため、各 connector は、その間に位置する二つの明示的なレイヤーと、サポートしなければならない通信の種類によって定義されます。

### Stack の Connectors

Stack の最上部では、最初に必要な接続が Layer 7 “Digital Data” と Layer 6 “Structure & Semantics” の間にあります。Digital Data はファイル、文書、応答、データベース結果などの元の素材を保持できますが、次のレイヤーはその素材をどのように読むべきかを知る必要があります。つまり、その間の connector は、保存された内容を形式と意味を保ったまま Model に取り込まなければなりません。たとえば JSON 設定ファイルは保存されたテキストとして始まるかもしれませんが、インターフェイスが利用可能な設定を知る前に JSON として読まれる必要があります。この connector はデジタル内容を構造化形式に変換するため、“Data” connector と分類できます。

その内容が意味のある structure として読み込まれると、次の接続は Layer 6 “Structure & Semantics” と Layer 5 “Components, Controls, & Layouts” の間に現れます。Layer 6 は内容が何を意味するかを説明できますが、Layer 5 はそこからどの利用可能な部分を作成すべきかをまだ知る必要があります。言い換えると、この connector は「指示」を「現実」に変える必要があります。ページ記述がボタンがあるべきだと言う場合、次のステップはボタンが存在することを_知る_だけではありません。インターフェイスはそのボタンを動作する control として_作成_しなければなりません。この connector は structures を利用可能なインターフェイス部分へ_解析_するため、“Parser” connector と識別するのが適切です。

それらの利用可能な部分が配置されると、次の接続は Layer 5 “Components, Controls, & Layouts” と Layer 4 “Graphs & Frames” の間にあります。Layer 5 はインターフェイスが何を含み、それらの部分がどう振る舞うべきかを説明できますが、Layer 4 はその情報をより大きな文脈の中で整理する必要があります。つまり、その間の connector はインターフェイス部分を取り、追跡、調整、次の段階への準備ができる関係へ配置しなければなりません。たとえばボタンはすでに control として存在していても、インターフェイスの残りがそれを完全なシーンの一部として扱う前に、位置、サイズ、状態、周囲の frame との関係を必要とします。この connector は利用可能なインターフェイス部分を graph と frame の structures へ_適応_させるため、“Adapter” connector と識別できます。

そこから、整理された frame は Layer 4 “Graphs & Frames” との接続を通じて Layer 3 “Renderers” と通信しなければなりません。Layer 4 はインターフェイスに何が存在し、各部分が全体とどう関係するかを説明できますが、Layer 3 は自分が生成できる命令を必要とします。つまり、その間の connector は、整理されたシーンを特定のレンダリングシステムに適した作業へ翻訳しなければなりません。視覚的インターフェイスでは、frame 内のボタンは、画面に現れる前に、矩形、テクスチャ、グリフ、描画コマンドへ変換される必要があるかもしれません。この connector は整理されたインターフェイスとそれを生成する renderer を_橋渡し_するため、“Bridge” connector と識別できます。

renderer が作業を準備した後、次の接続は Layer 3 “Renderers” と Layer 2 “Windows” の間に現れます。Layer 3 は描画、再生、または何かを生成する方法を知っているかもしれませんが、その作業を届ける先をまだ必要とします。Layer 2 はユーザーがそれを受け取る視点を提供するため、その間の connector は renderer が結果を送れる利用可能な場所を公開しなければなりません。たとえば OpenGL はシーンを描画できますが、画像がユーザーに現れる前に、それを置く場所が必要です。この connector はレンダリングされた作業が window と出会う _surface_ を提供するため、“Surface” connector と識別できます。

最後に、Stack の下部では Layer 2 “Windows” と Layer 1 “Systems” の間の通信が必要です。この時点で connector は、Layer 1 が自然に理解するどのような形でも動作しなければなりません。オペレーティングシステムのハンドル、プラットフォーム API、デバイス信号、物理的な仕組みなどです。デスクトップアプリケーションでは、これは Layer 2 を作成し管理するために使われるネイティブハンドルかもしれません。自動ドアでは、ドアが応答できるようにする内蔵センサーとモーターの接続かもしれません。この connector はシステム自身の_ネイティブ_な形で system と通信するため、“Native” connector と識別します。

### Model における Connectors の役割

各 connector が識別されたので、Model の動きをより完全に説明できます。上から下へ、connectors は “Data”、“Parser”、“Adapter”、“Bridge”、“Surface”、“Native” です。それぞれは Stack の二つの明示的なレイヤーの間に位置し、それらのレイヤーがどのように通信するかを説明します。Data connector は保存された内容を Model が理解できる structure にします。Parser connector はその structure を利用可能なインターフェイス部分に変えます。Adapter connector はそれらの部分を graphs と frames に配置します。Bridge connector は整理された structures を renderer のために準備します。Surface connector は renderer が結果を届ける場所を与えます。最後に、Native connector は window が system 自身の条件で system と通信できるようにします。

### Connectors と生きた交換

これらの connectors は、Stack が説明する経路を完成させます。レイヤーは情報が流れのどこにあるかを示し、connectors はそれが一つのステップから次へどのように移動するかを示します。これにより CatalystUI Model は、部品の静的な配置以上のものを説明できます。それは生きた交換を説明します。保存された内容が structure になり、structure が interface になり、interface が output になり、output がユーザーに届き、ユーザーの応答が同じパターンを通って戻ることができます。Connectors はレイヤー自体を再定義せずに置き換えたり作り直したりできるため、Model に最も重要な強みの一つを与えます。つまり、同じ基礎的な情報の流れを保ちながら、異なるデバイス、domains、systems に適応できる力です。
