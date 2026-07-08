<!--
この翻訳はChatGPTによって生成されたものであり、人間の翻訳者による確認が必要です。
翻訳が検証された後、pull request でこれらの行を削除してください。
-->

# 6.3 Connectors :: Adapter

## 詳細な解説

### Use から Context へ

**Adapter** connector は、**Layer 5: Components, Controls, & Layouts** と **Layer 4: Graphs & Frames** の間に位置します。mutable interface data を受け取り、それを Stack の残りのために organized、discovered、routed、bounded、prepared にできる大きな context へ置く責任を持ちます。

Layer 5 は system に components、controls、layouts を与えます。これらは developer が直接扱える mutable pieces です。component は情報の一部を表すかもしれません。control は interaction に応答するかもしれません。layout は他の components を特定の順序に従って整理するかもしれません。しかし、これらの pieces は自分たちが存在する environment を完全には説明しません。何であるか、どう振る舞うかを知っていても、interface 全体とどう関係するかを自動的に知るわけではありません。

Adapter connector は、個々の usable pieces から organized context への移動を提供します。Parser connector によって生成された components を受け取り、それらを graphs と frames へ adapt します。ここで Stack は、component が存在することだけでなく、それがどこに属し、他の components とどう関係し、active interface にどう参加すべきかを理解し始めます。

言い換えると、Parser connector は structured information を usable にします。Adapter connector は usable information を contextual にします。

### Components を Graphs に適応する

component は単体で存在できますが、user interface が一つの孤立した component だけでできていることはまれです。最も単純な interface でさえ通常は関係を含みます。ある component が別の component を含むかもしれません。control が layout に依存するかもしれません。group は一緒に search、order、enable、disable、focus、update される必要があるかもしれません。

ここで graph が重要になります。

Adapter connector は、components、controls、layouts を graph に置き、大きな全体の一部として organized できるようにします。graph は components を保存し、その relationships を追跡し、query する方法を公開し、collection として管理するために必要な surrounding logic を提供できます。この step がなければ、components は unified interface の参加者ではなく、mutable data の散らばった pieces のままです。

たとえば settings component はそれ自体で useful かもしれません。graph に adapt されると、full settings view の一部になり、他の sections と接続され、name で search され、related values とともに updated され、user が action を行ったときに routed される対象になります。component でなくなったわけではありませんが、graph を通じて context を得ています。

この区別は Layer 5 と Layer 4 を分けておく助けになります。Components は usable interface data を説明します。Graphs はそれらの pieces がどのように一緒に organized されるかを説明します。

### Layout は全体の Context ではない

Adapter connector は、layout と graph の違いを明確にする助けにもなります。layouts は components を organize できるため、それを interface の完全な organizational layer と見なしたくなるかもしれません。しかし layout は components を特定の方法で organize するだけです。components の完全な relationship、lifecycle、routing、environmental context を必ずしも説明しません。

vertical layout は、いくつかの controls が順番に現れるべきだと決めるかもしれません。それは layout が interface 全体の責任を持つという意味ではありません。すべての active component を知り、すべての interaction を管理し、output boundary を準備し、system の top-level mediator として働く必要はありません。それらの責任は Layer 4 にあります。

Adapter connector はこの区別を尊重します。Layer 5 の layout を graph に置くことはできますが、layout が components を配置するからといって graph になるわけではありません。graph はより広い organizational context を提供し、layout は他の components を配置するための component であり続けます。

この分離は interface が成長すると特に有用です。単純な arrangements は単純なままでいられ、より大きな system は discovery、routing、updates、output の準備に必要な structure を提供できます。

### Frame への接続

Layer 4 は graphs だけを扱うわけではありません。frame も含みます。frame は organized components と Stack の lower layers の間にある active boundary と communication point を表します。

Adapter connector は components がこの framed context に入るのを助けます。component には size があり、control には interaction behavior があり、layout は relative placement を説明するかもしれません。しかし frame は、それらの pieces が準備される bounds を決めます。active area、surrounding context、そして最終的に rendering へ渡される必要がある情報を扱います。

これは Adapter connector が何かを render するという意味ではありません。Rendering は lower layers に属します。Adapter connector は organized interface を準備し、frame がそれを適切に communicate できるようにします。次の connector が情報を renderer へ運ぶ前に、frame に component relationships、layout results、contextual information を与えます。

このように Adapter connector は、「これらは使える pieces である」と「これは準備中の organized interface である」の間の bridge として働きます。

### Adaptation による Reuse

Adapter connector の最も強力な部分の一つは、同じ component を異なる contexts に adapt できることです。component は一つの graph、一つの frame、一種類の interface に永続的に縛られる必要はありません。その meaning と behavior は安定したまま、Adapter connector が特定 environment でどのように参加すべきかを決められます。

document component は editing graph、preview graph、printing graph に adapt されるかもしれません。music component は playback graph、editing graph、library graph に adapt されるかもしれません。settings components の group は、simple preferences page、advanced configuration panel、automated setup flow に adapt されるかもしれません。

基盤となる components は馴染みのあるままでも、入る graph と frame によって relationships と purpose は変わります。これにより CatalystUI は、reuse がすべての context が同一であることを意味するふりをせず、reuse をきれいに表現できます。

Adapter connector がそれを可能にします。component 自体を「何を表すか」「どう振る舞うか」に集中させたまま、mutable interface data を purpose に応じて reorganize できます。

### Components へ戻る

Stack は reversible であるため、Adapter connector は interaction が upper layers へ戻る flow にも参加します。user が system と interaction すると、lower layers は最終的にその interaction を適切な component または control へ route する必要があります。

Layer 4 は organized context を理解しているため、この process で重要な役割を持ちます。graph はどの component が relevant かを判断する助けになります。frame は interaction が起きた bounds を解釈する助けになります。その context が分かると、Adapter connector は interaction を Layer 5 へ戻し、そこで適切な component または control が respond できます。

これは重要です。interactions は、処理すべき正確な component に最初から結びついて到着することはまれだからです。system は key が押された、pointer が動いた、command が triggered された、region が selected されたことを知っているかもしれません。しかし Stack は、その action が現在の interface 内で何を意味するかをまだ決める必要があります。Adapter connector はその contextual decision を mutable components へ戻し、そこで interaction が handled されるようにします。

top-down flow では、Adapter connector は components を context に置きます。bottom-up flow では、contextual interactions を、それに act できる components へ戻す助けになります。

### Identity を保つ

Adapter connector は、adapt する components の identity と intent を保つべきです。component が graph や frame に入るとき、それが何であるかを失うべきではありません。purpose、state、original information との relationship は、大きな system に organized されているときでも recognizable であるべきです。

これは component が wrapped、indexed、grouped、measured、transformed、または特定 environment のために prepared されてはいけないという意味ではありません。多くの場合、adaptation には component が元々持っていなかった追加情報が必要です。graph は identifiers を必要とするかもしれません。frame は bounds を必要とするかもしれません。routing system は focus information を必要とするかもしれません。これらの追加は component が context に参加する助けになりますが、component の meaning を消してはいけません。

そのため Adapter connector は慎重な transformation を行います。component を飲み込まずに context を追加します。すべての component に周囲の system 全体の責任を負わせず、interface を organized にできるようにします。

### Connector が重要な理由

Adapter connector は、Stack が usable interface data と organized interface context を混同することを防ぎます。この connector がなければ、components は自分自身の graphs を管理しなければならず、layouts は完全な interface organization と誤解され、frames は二つの layers の間に適切な transition がないまま components を理解しなければならなくなります。

Adapter connector を定義することで、Model はこの transition に適切な場所を与えます。

Components, Controls, & Layouts は mutable interface objects と direct interaction behavior を担当し続けます。Graphs & Frames は organization、context、boundaries、routing、lower layers への preparation を担当し続けます。Adapter connector はその間の movement を扱います。

これは Stack の中で usable information が situated information になる点です。Components はもはや program に利用可能なだけではありません。互いに関係し、正しい pathways を通じて respond し、さらに Stack の下へ運ばれる準備ができる living context に置かれます。そこから organized interface は rendering、delivery、perception、response へ進めます。
