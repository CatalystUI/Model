# 5.5 The Stack :: Graphs & Frames

## 詳細な解説

### 組織化のレイヤー

**Graphs & Frames** は、利用可能なインターフェイスオブジェクトがより大きな操作文脈へ整理されるレイヤーです。Layer 5 は components、controls、layouts を可変オブジェクトとして提供しますが、それらのオブジェクトは一緒に存在するだけで完全なインターフェイスを自動的に形成するわけではありません。発見され、関係づけられ、問い合わせられ、順序づけられ、ルーティングされ、境界づけられ、Stack の下位レイヤーのために準備される方法が必要です。

これが Layer 4 の目的です。Layer 5 からアクティブなインターフェイスオブジェクトを受け取り、それらが動作するより広い文脈を確立します。Component は自分の状態をどう表すかを知り、control は相互作用をどう扱うかを知り、layout は components の集まりをどう配置するかを知るかもしれません。しかし Layer 4 は、それらの部分がインターフェイス全体にどう参加するかを決定します。

### Graphs

**Graph** は、components、controls、layouts の間の整理された関係を説明します。インターフェイスオブジェクトが互いにどう関係するか、どのように位置づけられるか、アクティブな動作中にどう辿られたり問い合わせられたりするかを理解するための構造を提供します。

これにより graph は layout と区別されます。Layout は特定の規則またはパターンに従って components を配置します。Graph は、layouts と components が存在するより大きな関係空間を管理します。親子関係、所有、依存、グループ化、順序、フォーカス経路、ルーティング経路、またはインターフェイスが一貫したシステムとして動作する助けになる他の接続形式を説明できます。

Graph はまた、すべての component が他のすべての component を知る必要なしに、インターフェイスオブジェクトを見つけ管理する実用的な方法を提供します。Components は自分自身の利用可能な状態に集中でき、graph は発見、調整、ルーティングに必要な周囲の構造を提供します。これにより、インターフェイスが孤立したオブジェクトの集まりや、直接参照の絡み合った集合になることを防ぎます。

### Frames

**Frame** は、Stack の下位レイヤーのために準備された、より大きな現在の操作文脈を説明します。Graph がインターフェイスオブジェクトとその関係を整理するのに対して、frame はその整理の関連する状態を、rendering、output、または下位レベル処理へ渡せる形で含み、調整します。

Frame は、Layer 5 のオブジェクト指向のインターフェイス世界と Layer 3 の rendering 指向の世界の間の主要な境界として働きます。単に components を含むだけではありません。それらを準備します。この準備には、境界の解決、layout 結果の適用、renderable elements の収集、output の順序づけ、現在のインターフェイス状態の追跡、または renderer が扱うべきものの一時的な表現の生成が含まれるかもしれません。

Frame は永続的なものではなく、文脈的なものとして理解すべきです。特定の pass、update、render、routing operation におけるインターフェイスの現在状態を表します。インターフェイスが変化すると、新しい frames や更新された frame states が生成されることがあります。これにより Stack は、一時的な presentation state を保存内容や解釈された structure と混同せずに、ライブな動作を説明できます。

### Graphs と Frames の関係

Graphs と frames は一緒に働きます。インターフェイスには関係と文脈の両方が必要だからです。Graph はインターフェイスオブジェクトがどのように接続されているかを説明します。Frame は、その接続されたオブジェクトから下位レイヤーが特定の瞬間に何を受け取るべきかを説明します。

この区別が重要なのは、整理と準備が同じ作業ではないからです。Graph は control を見つけ、layout hierarchy を理解し、どの component がインターフェイスのどの領域に属するかを判断するために必要な関係を含むかもしれません。Frame はその整理の現在の結果を取り、rendering や interaction routing のために準備するかもしれません。Graph は地図を提供し、frame はその地図を通る現在の通過を提供します。

この二つにより、Layer 4 は受動的な components の集合にも、renderer-specific な命令リストにもなりません。Stack の組織化と文脈のレイヤーであり続けます。Layer 5 に十分近く、インターフェイスオブジェクトを理解でき、Layer 3 にも十分近く、それらを下位レベルの変換のために準備できます。

### Rendering の準備

上から下への流れでは、Graphs & Frames は Layer 5 から components、controls、layouts を受け取り、Renderer のために準備します。これは Layer 4 が rendering を行うという意味ではありません。Rendering は Layer 3 に属します。Layer 4 は、何を下へ送るべきか、どの関係で、どの境界の下で、どの現在状態で送るべきかを決定します。

この準備が必要なのは、renderer がすべての component、control、layout の完全な意味を理解する責任を持つべきではないからです。Renderer には、知覚可能な output へ変換できる準備済みの形が必要です。Layer 4 はインターフェイスの整理を保ちながら、アクティブなオブジェクトモデルを renderer が扱えるものへ縮小します。

これにより Layer 4 は renderers を専門化されたままにできます。Renderer は、component relationships、layout hierarchy、interaction targets、active interface state の最上位管理者にもなることなく、domain-specific output への変換に集中できます。

### 相互作用のルーティング

下から上への流れでは、Graphs & Frames は相互作用を適切な controls へ戻すルーティングを助けます。下位レイヤーは相互作用が起きたことを識別し、位置、タイミング、デバイスソース、focus context、その他の関連する input state などの詳細を提供するかもしれません。Layer 4 は graph と frame の文脈を使って、その相互作用がどこに属するかを決定します。

このルーティングの役割は、Layer 4 が存在しなければならない最も明確な理由の一つです。Control は相互作用を受け取った後にどう扱うかを知っているかもしれませんが、どの control がそれを受け取るべきかを決めるものが必要です。Graph は関係構造を提供し、frame は現在の操作文脈を提供します。二つを合わせることで、Stack は input を方向なく上へ渡すだけでなく、意図をインターフェイスの中でルーティングできます。

これは Layer 4 が output preparation と input resolution の両方に参加することも意味します。一方向では、整理されたインターフェイス状態を rendering のために準備します。もう一方向では、ルーティングされた相互作用の解決を助けます。インターフェイスが現在どのように配置されているかを知る同じレイヤーが、その配置を通じて相互作用がどのように戻るべきかを決定するのに最も適した位置にあります。

### Components, Controls, & Layouts との関係

Layer 4 は、整理するアクティブなインターフェイスオブジェクトを Layer 5 に依存します。Components、controls、layouts はインターフェイスの利用可能な部分を提供しますが、Layer 4 はそれらの部分がどのようにより大きな全体を形成するかを決定します。これにより個々の components がグローバルなインターフェイス管理を担当することを防ぎます。

この分離は layouts が広すぎる責任を持つことも防ぎます。Layout は components の集まりを配置できますが、インターフェイス内のすべての関係を管理する必要はありません。完全なルーティングシステム、ライフサイクル調整役、rendering boundary として振る舞う必要もありません。Layer 4 はその高いレベルの整理を提供し、layouts が配置に集中できるようにします。

### Renderer との関係

Layer 4 は、Renderer を rendering に属さない責任からも守ります。Graphs & Frames がなければ、renderer は output を生成する前に component trees、layout relationships、control routing、bounds resolution、active interface context を理解しなければならなくなります。それは rendering にインターフェイスモデルの過剰な部分を担当させることになります。

Graphs & Frames を Layer 5 と Layer 3 の間に置くことで、Stack は明確な受け渡しを作ります。Layer 5 は利用可能なインターフェイスオブジェクトを提供します。Layer 4 はそれらのオブジェクトを整理し準備します。Layer 3 は準備された表現を知覚可能な output へ変換します。各レイヤーはプロセスの別々の部分に集中したままです。

### なぜこのレイヤーが重要なのか

Graphs & Frames は、Stack がインターフェイスを components の緩い集合や直接的な rendering 問題として扱うことを防ぎます。利用可能なインターフェイスは、render される前に整理を必要とし、相互作用へ一貫して応答する前にルーティングを必要とします。Layer 4 はその両方に必要な構造を提供します。

Layer 4 を Components, Controls, & Layouts と Renderer から分離することで、Model は責任のきれいな進行を保ちます。Components、controls、layouts はアクティブなインターフェイスオブジェクトを定義します。Graphs と frames はそれらのオブジェクトを現在の操作文脈へ整理します。Renderer はその準備された文脈を知覚可能な output へ変換します。この区別により CatalystUI は、components に system 全体を管理させたり、renderers にインターフェイスモデル全体を理解させたりせずに、複雑なインターフェイスを説明できます。
