<!--
この翻訳はChatGPTによって生成されたものであり、人間の翻訳者による確認が必要です。
翻訳が検証された後、pull request でこれらの行を削除してください。
-->

# 6.2 Connectors :: Parser

## 詳細な解説

### Structure から Use へ

**Parser** connector は、**Layer 6: Structure & Semantics** と **Layer 5: Components, Controls, & Layouts** の間に位置します。structured information を受け取り、それを interface の残りが能動的に使い、変更し、配置し、応答できるものへ変換する責任を持ちます。

Layer 6 は情報に安定した interpreted form を与えます。data が何を意味し、どのように整理され、どの rules が形を与えるのかを定義します。しかし structure は interface object と同じではありません。structure は、document に heading があること、file に section があること、song に timing information があることを system に伝えられますが、structure 自体はまだ主に data を忠実に表すことを扱っています。

Parser connector は、その interpreted information を Layer 5 へ移動させ、そこで mutable にします。ここで structure は component、control、layout になれます。情報が、存在するものについての安定した description であるだけの状態をやめ、program が直接やり取りできるものになり始める場所です。言い換えると、Data connector は system が情報とは何かを理解する助けになります。Parser connector は、その理解を usable なものへ変える助けになります。

### Components へ Parse する

“parser” という言葉は、text を読んだり file を meaningful pieces に分解したりする process を表すためによく使われます。CatalystUI でも同じ一般的な考えを持ちますが、より広く適用されます。Parser connector は characters や tokens を読むだけではありません。すでに解釈された structure を受け取り、それを mutable components へ変換します。この区別は重要です。Data connector がすでに digital data を Structure & Semantics へ持ち込んでいるからです。情報が Parser connector に到達する時点で、system はもう「この data は理解できるか？」とは尋ねていません。「この理解済み data はどのように usable になるべきか？」と尋ねています。

document structure は document components になるかもしれません。configuration structure は settings components になるかもしれません。music structure は editable audio components になるかもしれません。Parser connector は structured meaning から interactive representation への transition を行います。ここで Stack は programmer にとってより馴染みのあるものにもなります。Components、controls、layouts は developer が直接扱える pieces です。それらは変更され、query され、organized され、updated され、最終的に Stack の下層を通して routed されます。Parser connector はそれらに starting form を与えます。

### 違いが小さく見えるとき

多くの場合、structure と component は大きく異なって見えます。複雑な document、audio file、interactive view は、Layer 5 で useful になる前に大きな transformation を必要とするかもしれません。しかし、元の structure が単純なとき、structure と component の違いは最初ほとんど見えないことがあります。

INI file はこれを理解するよい例です。Data connector が file を解釈した後、structure は sections、keys、values を含むかもしれません。同じ file を表す component も sections、keys、values を含むかもしれません。表面上、この二つの forms はほとんど同じに見えます。

重要なのは、区別が形だけでなく責任にあるということです。

structure は data の interpreted state を表します。元の digital representation から生成された stable form です。component はその data の usable state を表します。developer が section を追加し、key を削除し、value を変更し、defaults を適用し、edits を validate し、modifications を追跡し、表示と interaction のために情報を準備できるようにします。

したがって、単純な INI structure と INI component がほとんど同じ情報を含んでいても、Stack の中で同じ意味を持つわけではありません。structure は忠実な interpretation を扱います。component は active use を扱います。

これにより、Parser connector の仕事が小さく見える場合でも重要である理由がわかります。parsing が劇的な場合もあります。ほとんど one-to-one mapping の場合もあります。どちらの場合でも、connector は interpreted information が mutable interface data になる boundary を示します。

### 再表現の力

Parser connector は、一つの structure が複数の useful forms へ再表現できるとき、特に強力になります。Layer 6 が interpreted meaning を表すため、Parser connector はその meaning を Layer 5 でどのように usable にするかを決められます。

HTML document はこれを明確に示します。同じ structured document が、visual webpage の components、読みやすい document outline の components、accessibility navigation の components、printing の components、特定情報を抽出する components へ parse されるかもしれません。元の structure は同じでも、Parser connector は system の目的に応じて、それを異なる usable representations にできます。

これは単なる便利さではありません。Stack について重要なことを示しています。data は一度 interpret されると、目的に応じて reshaped できるのです。

同じ原理は music にも適用できます。structured musical representation は、editable timeline components、playback components、notation components、export-oriented components になるかもしれません。そこから情報は、WAV file、MP3 file、または別の format に適した structure へ戻ることもできます。この種の transformation をきれいに表現できる理由の一部が Parser connector です。stable structure と mutable representation の間を移動する場所を system に与え、二つの考えが同じであるふりをしなくて済むようにします。

このように、Parser connector は情報の flexibility を保つ助けになります。同じ interpreted data が、Structure & Semantics の意味に根ざしたまま、異なる workflows、tools、forms of expression に参加できるようにします。

### Structure へ戻る

Stack は reversible であるため、Parser connector は逆方向にも働きます。components が interaction によって変更されたとき、それらの changes は再び Digital Data になる前に Structure & Semantics へ戻る必要があるかもしれません。

この reverse path は、mutable information が再び stable になるために準備される場所です。settings component は user によって変更され、その後 configuration structure へ parse back されるかもしれません。document component は編集され、その後 document structure へ parse back されるかもしれません。music component は arrange、trim、adjust され、その後 file として書き出せる structure へ parse back されるかもしれません。

この process は、すべての component が来たときとまったく同じ structure に戻らなければならないという意味ではありません。interaction の目的が情報を新しい form へ transform することもあります。imported document は simplified outline になるかもしれません。edited audio project は final export structure になるかもしれません。複雑な components の集合は、storage や transmission のために小さな structure へ reduce されるかもしれません。

Parser connector は、この transformation のために Model に適切な場所を与えます。mutable interface data が再び structured data になることを可能にし、Layer 5 に storage の責任があるふりをさせず、Layer 6 にすべての interactive form を理解させることもありません。

### 意図を保つ

Parser connector は、情報が layers を越えるとき、その意図された意味を保つべきです。structure から components へ移動するときは、structure を正直に反映する usable forms を生成すべきです。components から structure へ戻るときは、上層がそれを保存または送信できるほど明確に interaction の結果を表すべきです。

これは完全な one-to-one copy を要求しません。実際、Parser connector は one-to-one copy があまり有用でないからこそ存在することが多いのです。components は convenience properties、helper methods、editing state、validation state、layout information、または元の structure に属さない temporary values を必要とするかもしれません。同様に、返される structure は、interaction 中だけ有用だった temporary component state を省くかもしれません。

目標は、すべての内部 detail を同一に保つことではありません。重要な meaning を保つことです。

これにより Stack は誠実に保たれます。Structure & Semantics は interpreted, stable information の場所であり続けます。Components, Controls, & Layouts は mutable, usable information の場所であり続けます。Parser connector はその間の movement を実行しながら、transform される data の intent を保ちます。

### Connector が重要な理由

Parser connector は、Stack が interpreted data と usable interface data を混同することを防ぎます。この connector がなければ、structures は自分で mutable にならなければならないか、components が受け取るあらゆる structure をどう interpret するか知っていなければなりません。どちらも周囲の layers の責任をぼかします。

Parser connector を定義することで、Model はこの transition に適切な場所を与えます。

Structure & Semantics は stable interpretation を担当し続けます。Components, Controls, & Layouts は active use、modification、interaction を担当し続けます。Parser connector はその二つの間の transformation を扱います。

これは Stack の中で、理解済みの情報が program が直接扱えるものになる点です。stable meaning が mutable representation になる場所です。そこから情報は graphs と frames に organized され、output のために準備され、下層を通して routed され、最終的に user が perceive、understand、respond できるものとして提示されます。
