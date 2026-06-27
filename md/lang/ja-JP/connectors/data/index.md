# 6.1 Connectors :: Data

## 詳細な解説

### 最初の変換

**Data** connector は、Stack における最初の明示的な connector です。これは **Layer 7: Digital Data** と **Layer 6: Structure & Semantics** の間に位置し、活動中のコンピューター可読な情報が、初めて解釈された形を受け取り始める場所です。Layer 7 は、その情報が digital data として存在していることを示します。Layer 6 は、その情報がどのように構造化され、何を意味するのかを示します。Data connector は、system が一方の状態からもう一方の状態へどのように移るかを説明します。

この connector が必要なのは、digital data が自分自身を解釈しないからです。file、stream、buffer、database result、response、message は、すでに整理された情報を含んでいるかもしれません。しかし、整理されていることと解釈されていることは同じではありません。何かが data にアクセスし、適切な期待に従ってそれを読み、Structure & Semantics が理解できる形を生成しなければなりません。その「何か」が Data connector です。

その意味で、この connector は明示的な Stack の中で最初の変換行為です。元の情報を作るわけでも、まだ user-facing components を作るわけでもありません。その役割は、必要なときに情報を Digital Data として active flow に持ち込み、その活動中のデジタル表現を、解釈を可能にする rules と structures へ接続することです。

### Data Storage との連携

Data connector は Digital Data と Structure & Semantics の間にありますが、多くの場合、暗黙の **Data Storage** layer と密接な関係を持ちます。多くの digital data は、それが保存されている場所からアクセスできるようになって初めて役に立つからです。そのため、Data connector はしばしば二つの関連する責任を果たします。第一に、storage に手を伸ばし、情報を取得、受信、または別の方法でアクセス可能にして、その情報が Digital Data として active flow に入れるようにします。第二に、その結果として得られた Digital Data を、解釈された structure へ処理します。

MySQL data connector はよい例です。Model の視点では、MySQL database は Data Storage として扱われ、query result は処理対象の active Digital Data になります。connector は接続を確立し、query を送り、結果を受け取り、その結果を Stack の残りが理解できる structured information へ整理できます。database connection、query behavior、result processing は同じ connector の中に現れることがあります。Data connector は storage に手を伸ばし、取得した情報を structured で meaningful な data へ運ぶ責任を持つからです。

これは Data Storage を Stack の明示的な layer にするものではなく、Data connector 自体を database、file system、service、storage mechanism にするものでもありません。むしろ Model は、最初の connector が digital data を system の active flow に持ち込むため、storage の方向へ手を伸ばす必要がしばしばあることを認めています。

### アクセスは理解ではない

Data connector が存在する理由の一つは、アクセスと理解が同じではないことです。computer は file を開き、response を受け取り、bytes を memory に保持し、database に接続できます。それは情報が利用可能であることを示すだけです。情報が理解されたことを示すわけではありません。

たとえば settings file が text として利用可能かもしれません。system は file の場所を知り、その内容を正常に読み、memory に保持できるかもしれません。それでも Stack は、どの部分が keys で、どの部分が values で、どの sections が valid で、どの rules が format を定義するのかをまだ決めていません。

Data connector は、「情報が digital data として利用可能である」状態から、「情報が structure と semantics に従って解釈できる」状態への移動を提供します。この区別により Layer 7 はきれいに保たれます。Digital Data は、あらゆる format をどのように解釈すべきか知る必要はありません。活動中のコンピューター可読情報を表せばよいのです。Data connector はその後 Layer 6 へ handoff し、そこで適切な rules に従って解釈が行われます。

### Structure を生成する

top-down flow では、Data connector は Digital Data を受け取り、Structure & Semantics のために準備します。これには bytes の読み取り、text の decode、format の識別、semantic rules の選択、基本的な expectations の validation、または representation を整理された structure へ変換することが含まれます。実際の作業は扱う情報の種類によって変わりますが、責任は同じです。active representation を interpreted form へ接続することです。

JSON settings file は encoded text として始まるかもしれません。Data connector は text を読み、期待される format を認識し、settings を表す structured information を生成します。CSV file は rows と fields になるかもしれません。database result は records になるかもしれません。binary file は headers、sections、values になるかもしれません。server response は structured message になるかもしれません。

重要なのは移動です。Data connector は storage に手を伸ばすところから始まるかもしれませんが、明示的な Stack transition が完了するのは、取得または受信された Digital Data が Structure & Semantics を通じて理解可能な情報になったときだけです。

### 意味を保つ

Data connector は、情報が layers の間を移動するとき、意味を保たなければなりません。これは、元の representation のすべての detail を変えずに保つという意味ではありません。connector が、digital data とそれが生成する interpreted structure の間の意図された関係を保つべきだという意味です。

たとえば file が title を含むなら、結果の structure は元の情報に忠実な形でその title を表すべきです。database record が identifier を含むなら、その identifier はそれが説明する record とつながったままであるべきです。format が order、grouping、required values を定義するなら、connector は structured result を生成するときにその期待を尊重すべきです。

### Digital Data へ戻る

Stack は reversible であるため、Data connector は bottom-up flow にも参加します。interaction が interface 内の情報を変更した場合、その変更は最終的に Digital Data へ戻る必要があるかもしれません。保存、送信、再利用できるようになる前に、structured information はコンピューター可読な形へ戻されなければなりません。

この方向では、Data connector は逆の transformation を行います。Layer 6 から structured information を受け取り、storage、transmission、comparison、または further processing に適した Digital Data を生成します。

settings structure は encoded JSON text になるかもしれません。values の table は CSV になるかもしれません。record は database update になるかもしれません。document structure は file の bytes になるかもしれません。

この逆方向の移動は top-down の移動と同じくらい重要です。Data connector が情報を structure に読み込めても、structure を digital form に書き戻せないなら、interface は情報を表示または使用できるかもしれませんが、interaction の結果を完全に保存することはできません。そのため connector は、user intent と persistent change の間の cycle を完成させる助けになります。

### Validation と Failure

Data connector は、failure を意味のある形で認識できる最初の場所の一つでもあります。Digital Data は missing、malformed、incomplete、unsupported、outdated であるか、Layer 6 が期待する semantic rules と inconsistent であるかもしれません。

これが起こったとき、connector はその transformation の結果を明確にすべきです。connector は、missing optional values から回復し、defaults を適用し、unsupported extensions を無視し、適切な場合には partial structure を生成できます。しかし、Stack の残りが data が正しく解釈されたかを推測しなければならない状態にすべきではありません。

この boundary で failure を識別することで、Model は解釈を誠実に保ちます。Data connector は、正しく理解されなかった情報の上に Stack の残りが構築されることを防ぎます。

### Connector が重要な理由

Data connector は、digital data が利用可能になっただけで自動的に意味を持つと Stack が仮定することを防ぎます。この connector がなければ、Model は representation と interpretation の境界をぼかしてしまいます。Layer 7 が formats を直接理解しなければならないか、Layer 6 が raw data を自分で取得しなければならなくなります。Data connector を定義することで、Model はこの transition に適切な場所を与えます。

Digital Data は活動中のコンピューター可読 representation を担当し続けます。Structure & Semantics は interpreted meaning と organized form を担当し続けます。Data connector はその間の movement を扱います。

これにより、Stack の最初の transformation が明示されます。情報は active digital representation として始まり、Data connector を通過し、system が理解できるものになります。そこから Stack の残りは、解釈された情報を usable interface objects に変え、それらを context に organizing し、output のために準備し、system を通じて delivery し、user が応答できるようにする process を続けられます。
