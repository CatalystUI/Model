# 6.6 Connectors :: Native

## 詳細な解説

### Windows から Systems へ

**Native** connector は、**Layer 2: Windows** と **Layer 1: Systems** の間に位置します。window を underlying system に接続し、program が実行されている実際の environment を通じて output が delivery され、interactions が received されるようにする責任を持ちます。

Layer 2 は Stack に window を与えます。bounded view、container、または point of delivery です。Layer 1 は Stack に system を与えます。operating environment、hardware access、services、devices、そして window を可能にする native behavior です。Native connector はこの二つの layers の crossing point を提供します。

この connector は、Stack が computing の実際的な現実に最も直接触れる場所であることが多いです。ここまで Model は、情報が structured data、components、graphs、renderers、surfaces を通って移動する様子を説明してきました。しかし window は想像だけでは存在しません。何かが system に、それを create、configure、maintain、update し、そこから interactions を report するよう依頼しなければなりません。

その何かが Native connector です。

### Bindings を定義する

**binding** は、ある layer と別の layer が提供する functionality の間の controlled connection です。Native connector の文脈では、bindings は system-level behavior を、window が system そのものにならなくても program が使える形で window に expose します。

この定義は意図的に単純です。binding は神秘的である必要はありません。上にある code と下にある functionality の間の accessible relationship です。

native binding は、window を create する、title を change する、keyboard input を receive する、pointer movement に respond する、active area を resize する、focus を request する、device に access する、system service と communicate する、といった能力を expose するかもしれません。詳細は system と implementation によって変わりますが、concept は同じです。binding は native functionality への usable connection を提供します。

この layer で bindings が重要なのはそのためです。system は強力な capabilities を提供できますが、それらは Stack の残りが使う language や structure で自動的に利用可能になるわけではありません。何らかの connection を通じて expose される必要があります。Native connector は、その connections が集められ、形づくられ、使われる場所です。

### Native Access を提供する

多くの implementations では、Native connector は主に lower-level system functionality への bindings を提供します。これは最初は普通に見えるかもしれません。developers はすでに native APIs、platform libraries、operating system calls、device interfaces、似た tools に慣れているからです。しかし Stack の中では、それらは単なる実装 detail ではありません。Layer 2 が Layer 1 へ access するための手段です。

desktop operating system 上の graphical window は、platform windowing API への bindings を必要とするかもしれません。command-line interface は terminal input と output への bindings を必要とするかもしれません。specialized device は buttons、sensors、speakers、lights、その他 system-controlled devices への bindings を必要とするかもしれません。いずれの場合も、Native connector は window が system 内で act できる関係を提供します。

重要なのは、どの platform が使われるかではありません。重要なのは、window がそれを含む system と communicate する方法を持たなければ、output を delivery したり interaction を receive したりできないことです。

Native connector はその方法を提供します。

### Wrapper 以上のもの

この connector は native behavior を expose することが多いため、system APIs の wrapper として説明したくなるかもしれません。その説明は実践的な context では有用な場合がありますが、Model 内で connector が何をしているかを完全には説明しません。

wrapper は、人々がこの種の layer をどのように実装することが多いかを説明します。binding は、connector が実際に何を提供するかを説明します。

Native connector は、window の下に置かれた platform calls の集まりにすぎないわけではありません。window と system の formal relationship です。window が system-backed existence をどのように受け取るか、system behavior が Stack にどのように available になるか、system-originating interactions がどのように upward に移動し始めるかを定義します。

この区別は重要です。Model は developers が歴史的にこれらの tools をどう説明してきたかを保存しようとしているのではありません。underlying process 自体を説明しようとしています。その process では、Native connector が重要なのはたまたま native API を wrap するからではありません。Layer 2 を Layer 1 に bind するから重要なのです。

これがこの connector の本質です。

### Window を作成し維持する

top-down flow では、Native connector は window が system を通じて operate できるようにします。window は create、show、hide、resize、move、focus、update、close される必要があるかもしれません。これらの actions には system との関係が必要です。system が、それらの actions が起こり得る environment を実際に提供する layer だからです。

Native connector は、それらの actions を行うために必要な bindings を expose できます。それを通じて Layer 2 は system behavior を request できますが、system management 全体の responsibility を吸収しません。window は bounded point of delivery のままです。system は underlying functionality を提供する environment のままです。Native connector はその二つの関係を運びます。

これは systems が異なるため特に重要です。異なる operating systems、devices、runtimes、environments は、異なる APIs と behaviors を提供するかもしれません。Native connector は、それらの違いを表す場所を Stack に与え、Model の残りを system-specific にしません。

### Interactions を受け取る

Stack は reversible であるため、interaction が system から入ってくるとき、Native connector は最初に関わる明示的な connector でもあります。

key press、pointer movement、touch input、controller action、device signal、resize event、focus change、または他の system-originating event は、Stack の残りが扱えるようになる前に Layer 1 から Layer 2 へ crossing しなければなりません。Native connector はその crossing を提供します。system の interaction information を receive または expose し、それを window へ運びます。そこから Surface connector を通って Renderers へ、さらに必要に応じて Bridge、Adapter、Parser、Data connectors を通って上へ進めます。

多くの場合、Native connector は interaction が何を意味するかを決める必要はありません。その役割は、system の interaction source を window の interaction path に bind することです。system は何かが起きたと report します。Native connector はその report を Layer 2 に usable にします。Stack の残りは、自分たちの responsibilities に従って interaction を route、transform、handle できます。

これにより lower boundary はきれいに保たれます。Native connector は interaction input に Stack へ入る道を与えますが、system に higher layers を理解させる必要はなく、higher layers に system であるかのように振る舞わせる必要もありません。

### Boundary を保つ

Native connector は window と system の boundary を保つべきです。window が必要とする system functionality を expose すべきですが、二つの layers の区別を消すべきではありません。

ここで binding という concept が特に有用です。binding は identity を伴わない access を可能にします。window は system functionality を使えますが system にはなりません。system は behavior を提供できますが window にはなりません。connector がその二つの relationship を定義します。

この boundary により CatalystUI は、異なる environments にわたって window を一貫して説明できます。ある system は traditional desktop window を提供するかもしれません。別の system は terminal を提供するかもしれません。別の system は device-specific output channel を提供するかもしれません。別の system は remote または virtualized environment を提供するかもしれません。native bindings は異なっても、connector の role は同じです。

Native connector は Layer 2 を Layer 1 に bind し、window がそれを支える system の中で exist、operate、receive interactions、deliver output できるようにします。

### Connector が重要な理由

Native connector は、Stack が window とそれを提供する system を混同することを防ぎます。この connector がなければ、Windows は system-specific behavior を直接含まなければならないか、Systems が window という higher-level concept を理解しなければならなくなります。どちらも point of delivery と delivery を可能にする environment の boundary をぼかします。

Native connector を定義することで、Model はこの transition に適切な場所を与えます。

Windows は output と interaction が通過する bounded context を担当し続けます。Systems は underlying environment、services、devices、native behavior を担当し続けます。Native connector はその間の binding を扱います。

これは Stack の最後の明示的な connector です。modeled interface がその下にある system に到達する場所です。platform access のように見えるかもしれません。native libraries、operating system calls、device APIs、runtime services を通じて実装されるかもしれません。しかしそれらの馴染みある説明の下で、その目的はより明確で単純です。

Native connector は bindings を提供します。

window を system に bind し、output が Stack を離れ、interaction が Stack に入れるようにします。そうすることで、modeled interface と、その interface が生きる必要のある real environment の間の明示的な path を完成させます。
