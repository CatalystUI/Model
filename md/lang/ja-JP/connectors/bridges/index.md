<!--
この翻訳はChatGPTによって生成されたものであり、人間の翻訳者による確認が必要です。
翻訳が検証された後、pull request でこれらの行を削除してください。
-->

# 6.4 Connectors :: Bridge

## 詳細な解説

### Context から Rendering へ

**Bridge** connector は、**Layer 4: Graphs & Frames** と **Layer 3: Renderers** の間に位置します。organized interface data を graph と frame から renderer へ運び、その data が perceivable output への conversion を始められるようにします。

Layer 4 は system に organized context を与えます。どの components が存在し、互いにどう関係し、どの bounds を占め、active interface 全体をどう理解すべきかを知っています。Layer 3 は rendering を担当します。prepared data を受け取り、最終的に window と system を通じて delivery できる form へ変換します。

Bridge connector が存在するのは、この二つの layers が自然に同じ language を話すわけではないからです。

graph は relationships を organize します。frame は active context と bounds を定義します。renderer は output を生成します。Bridge connector はこれらの concerns の crossing point です。複雑である必要も、目に見える必要もありません。多くの場合、organized interface data を renderer に expose し、必要なときに interaction information が上へ戻れるようにするだけです。その意味で、Bridge connector は名前のとおり gap を bridge します。

### Frame を前へ運ぶ

top-down flow では、Bridge connector は Layer 4 の prepared results を受け取り、Layer 3 へ運びます。これは Bridge が components を organize したり、layouts を calculate したり、controls を route したり、output を render したりする責任を持つという意味ではありません。それらの responsibilities は周囲の layers に属します。Bridge は middle に存在し、その responsibilities が分離されたままでいられるようにします。

frame は interface の active bounds をすでに準備しているかもしれません。graph はその中に属する components をすでに organize しているかもしれません。Bridge connector はその prepared context を受け取り、renderer が扱える form で renderer に提示します。これには references、prepared render entries、flattened component information、resource handles、command-ready data、または対象 system に適した他の representation を渡すことが含まれるかもしれません。

具体的な implementation は変わりますが、responsibility は同じです。Bridge connector は interface が何を意味するかを決めません。final output を user にどう delivery すべきかも決めません。organized interface context が renderer-facing data になる crossing point を提供するだけです。

これにより graph と frame は organization に集中し、renderer は rendering に集中できます。

### 静かな Connector

Bridge connector は、その上にある connectors より静かに見えることがよくあります。Data connector は digital data に access し interpret します。Parser connector は structures を mutable components に変えます。Adapter connector はそれらの components を graphs と frames に置きます。それと比べると、Bridge connector はほとんど空に感じられるかもしれません。

その空白こそが要点の一部です。

Bridge connector は通常、必要以上の仕事をすべきではありません。主な目的は、graph と frame が renderer と communicate できるようにしながら、どちらの layer にも相手の responsibilities を吸収させないことです。graph が renderer のように振る舞い始めれば、Model は clarity を失います。renderer が graph のように振る舞い始めれば、Model は organization を output からきれいに分けて説明する力を失います。

Bridge connector はその boundary を守ります。

renderer consumption のために data を準備することはありますが、renderer になるべきではありません。organized interface を renderer に expose することはありますが、graph になるべきではありません。その有用性は、隣り合う二つの layers が distinct のまま協力できることにあります。

### Interactions を上へ戻す

Bridge connector は bottom-up flow でも重要です。interaction が system から来ると、それは lower layers を通って上へ移動し、organized interface がそれを理解できる場所に到達します。多くの場合、renderer は interaction を受け取るか、Stack が routing を続けられる form へ translate するかもしれませんが、renderer は通常、最終的にどの component がそれを handle すべきかを知りません。

その responsibility は Stack のより上にあります。

そのため Bridge connector は、interaction をほとんど変更せずに Layer 4 へ渡すことがよくあります。graph と frame は interaction がどこに属するかを判断できる layers です。organized context を知っています。どの component が active か、どの control が relevant region を占めるか、どの layout relationship が重要か、interface のどの部分が interaction を受け取るべきかを判断できます。

だから Bridge connector を interaction router と誤解すべきではありません。interaction を運び、routing に必要な情報を保つことはありますが、通常 routing 自体を実行する layer ではありません。Bridge は、interaction が renderer-facing information から graph-facing context へ戻って越えられるようにするだけです。

top-down flow では、Bridge は renderer に data を供給する助けになります。bottom-up flow では、interaction を意味のある routing ができる場所へ戻す助けになります。

### 最も見えにくい Connector

Bridge connector は、目的が外から見ると曖昧に感じられるため、識別するのが最も難しい connectors の一つでした。Data connector のような obvious storage relationship はありません。Parser connector のような clear transformation もありません。Adapter connector のような organizational role もありません。最初は、直接 communicate できそうなほど近い二つの layers の間の薄い handoff に見えることがあります。

しかし Bridge connector がなければ、Stack には organized interface context から rendering へ移動する明示的な方法がありません。graph が renderer に直接 data を供給する方法を知る必要があるか、renderer が graphs と frames を自力で interpret する必要があります。どちらも organization と output の boundary を collapse させます。

Bridge connector はその boundary に名前を与えます。

常に多くの logic を含むわけではなく、実装によっては非常に小さく見えるかもしれません。しかし concept としての役割は essential です。Layer 4 と Layer 3 を同じものにせず、organized interface が rendering process へどのように crossing するかを説明します。

### Boundary を保つ

Bridge connector は context と rendering の boundary を保つべきです。下へ渡す information は Layer 4 が準備した organized interface に忠実でありつつ、Layer 3 が使えるものであるべきです。上へ渡す information は graph と frame が何が起きたかを理解するために必要な details を保ちつつ、renderer が自身の responsibility に集中できるようにすべきです。

これは Bridge がどちらの layer の内部 detail もすべて保つ必要があるという意味ではありません。renderer は full graph を必要としないかもしれません。graph は renderer-specific details のすべてを必要としないかもしれません。Bridge connector は、それぞれが相手の role を引き受けずに work を続けられるよう、何が boundary を越える必要があるかを決めます。

renderer が非常に specific requirements を持つ systems では、この connector は特に重要です。graph と frame はそれらの requirements の細部すべてを知る必要があるべきではありません。renderer も interface の organization 全体を理解する必要があるべきではありません。Bridge connector は、両側が絡み合わずに communicate できるように存在します。

### Connector が重要な理由

Bridge connector は、Stack が organized interface context と rendered output を混同することを防ぎます。この connector がなければ、graphs と frames は renderer terms で直接話すことを強いられるか、renderers が active interface の full structure を理解することを強いられます。

Bridge connector を定義することで、Model はこの transition に適切な場所を与えます。

Graphs & Frames は organization、context、boundaries、routing、preparation を担当し続けます。Renderers は prepared information を output-ready form へ変換する責任を持ち続けます。Bridge connector はその間の movement を扱います。

これは Stack の中で organized information が rendering process へ crossing する点です。しばしば静かです。しばしば薄いです。ほとんど見えないように感じられることもあります。しかしこれがなければ、Stack は organized としての interface と rendered としての interface の明示的な connection を失います。Bridge connector はその crossing を可能にし、その後はありがたいことに道を空けます。
