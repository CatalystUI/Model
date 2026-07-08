<!--
この翻訳はChatGPTによって生成されたものであり、人間の翻訳者による確認が必要です。
翻訳が検証された後、pull request でこれらの行を削除してください。
-->

# 6.5 Connectors :: Surface

## 詳細な解説

### Rendering から Delivery へ

**Surface** connector は、**Layer 3: Renderers** と **Layer 2: Windows** の間に位置します。rendered output を renderer から window へ運び、その output を system が提供する bounded context の中に置けるようにします。

Layer 3 は情報が output-ready form へ変換される場所です。renderer は graph と frame から prepared data を受け取り、最終的に perceive できるものを生成します。しかし rendered output にはまだ destination が必要です。どこか行き先が必要であり、何かに接続される必要があり、system がそれを delivery できる boundary が必要です。

その destination は Windows layer によって表されます。

Surface connector は renderer と window の間の crossing point を提供します。rendered output が window の usable area にどのように attached されるか、そして renderer が output を正しく生成し続けるために window から十分な information をどのように受け取るかを説明します。この connector がなければ、renderer は output を生成できますが、Stack はその output がそれを提示する window にどう接続されるかを明示的に説明できません。

簡単に言えば、renderer は output を作ります。window はその output が delivery される場所を提供します。Surface connector はその二つが一緒に働けるようにします。

### Rendered Area

surface は、rendered output を受け取る window の usable area として理解できます。伝統的な graphical application では、これは想像しやすいものです。renderer が window の内側の領域に描画するからです。しかし同じ原理はもっと広く適用されます。surface は単に「screen」ではありません。rendered output に window の bounds 内の場所を与える connector です。

これは重要です。renderer は通常 window を所有しないからです。renderer は output の生成方法を知っているかもしれませんが、window は system への active view を提供する layer です。window には size、position、state、scale、focus、その他 system-managed conditions があるかもしれません。Surface connector は、output を正しく delivery するために必要な形で、これらの conditions を renderer に利用可能にします。

renderer は window の current bounds を知る必要があるかもしれません。それらの bounds が変わったことを知る必要があるかもしれません。draw、write、stream、または update する target が必要かもしれません。これらの details は implementation によって変わりますが、conceptual responsibility は同じです。Surface connector は renderer output を、それを含む window context に接続します。

これにより renderer が system boundary を所有しているふりをすることを防ぎ、window が rendering を知っているふりをすることも防ぎます。

### 最終画像以上のもの

Surface connector を、完成した結果を window に渡すだけのものだと考えたくなるかもしれません。場合によっては、その説明で十分近いこともあります。renderer が output を準備し、surface がそれを window に運び、user が最終的に result を perceive します。

しかし rendering は、多くの場合、一回の delivery ではなく ongoing relationship です。window は resize されるかもしれません。active state が変わるかもしれません。system が redraw を要求するかもしれません。renderer は continuous update、signal の待機、または output を window の current condition と synchronize する必要があるかもしれません。Surface connector は、この relationship を表現する場所を提供します。

そのため Surface connector は、finished output の container だけではありません。rendering の行為と、その result を受け取る window の間の connection です。renderer が window の conditions に応答できるようにしながら、renderer に window である責任を負わせません。

output は引き続き renderer に属します。boundary は引き続き window に属します。Surface connector はその二つの関係を運びます。

### Interactions を上へ戻す

Stack は reversible であるため、Surface connector は bottom-up flow にも参加します。interaction が system で始まり window に入ると、最終的にはそれを理解し handle できる Stack の parts へ向かって上へ移動する必要があります。

Surface connector はこの interaction を window から renderer へ運ぶことがよくあります。多くの場合、information を保ち、それが上へ進めるようにする以上のことは必要ありません。pointer movement、key press、focus change、resize event、その他の interaction は window を通って入り、surface を crossing して renderer と higher layers が必要に応じて respond できるようになります。

これは Surface connector がどの component が interaction を handle すべきか決める責任を持つという意味ではありません。その responsibility は Stack のより上、特に interaction が graph と frame に到達した後にあります。Surface connector は、interaction に window と renderer の boundary を越える path を与えるだけです。

top-down flow では、Surface connector は rendered output を window へ運びます。bottom-up flow では、window-originating interaction information を renderer とその上の layers へ戻します。

### Window を分離しておく

Surface connector が重要なのは、renderer と window が同じ responsibility に collapse することを防ぐからです。この connector がなければ、renderer は window について知りすぎる必要があり、または window が renderer について知りすぎる必要があります。どちらも Stack を有用にしている separation を弱めます。

window は active system-facing boundary を提供します。view、container、point of delivery を表します。renderer はその boundary を通じて delivery できる output を生成します。Surface connector はその間に位置し、それぞれの layer が自身の purpose に集中できるようにします。

この separation は、renderer が複数の種類の window と使える場合や、window が複数の種類の renderer を support できる場合に特に有用です。connector は Model に関係を説明する場所を与え、二つの layers を hardwire しません。renderer は suitable surface に attached されます。window は suitable surface を expose できます。Surface connector はその attachment がどのように起こるかを説明します。

これにより renderer と window は、区別不能にならずに cooperate できます。

### Output を保つ

Surface connector は、rendered output が window へ crossing するとき、それを保つべきです。これは output が決して transformed、scaled、clipped、synchronized、または window の requirements に従って prepared されないという意味ではありません。renderer が生成したものに忠実であり、active window context に合う方法で delivery されるべきだという意味です。

window の size が変われば、Surface connector はその change を communicate する助けになります。window が inactive、hidden、minimized、または unavailable になれば、connector は renderer が適切に respond する助けになります。renderer が window によって提供される target を必要とするなら、connector はその target を hold または expose できます。これらの responsibilities は rendering と同じではなく、window であることとも同じではありません。二つの間の connection の responsibilities です。

これが Surface connector の主な形です。renderer の output を保ちながら、window が提供する delivery context に適応させます。

### Connector が重要な理由

Surface connector は、Stack が rendered output とそれを含む window を混同することを防ぎます。この connector がなければ、renderer は window を所有しているかのように振る舞うことを強いられ、または window は rendering を直接理解しているかのように振る舞うことを強いられます。

Surface connector を定義することで、Model はこの transition に適切な場所を与えます。

Renderers は prepared information を output-ready form へ変換する責任を持ち続けます。Windows は output と interaction が通過できる bounded system-facing context を提供する責任を持ち続けます。Surface connector はその間の movement を扱います。

これは Stack の中で rendered information が destination を得る点です。output が単に生成されたものではなく、delivery できる場所に attached される場所です。そこから Windows は output を Systems へ運び、最終的に user が perceive し respond できるものにできます。
