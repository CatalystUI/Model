# 3. 参照

以下では、CatalystUI Model を複数の形式で要約し、Model を学習、文書化、実装するときに参照、コピー、適用しやすくしています。

Reference ページは、周辺のドキュメントを置き換えるものではありません。terminology、summary、domains、stack、connectors、interactions がすでに導入されたあとで、Model をコンパクトに見られるようにするページです。

## AI Prompt 別

LLM が CatalystUI Model を解釈し理解するために使える AI prompt です。Model について質問したり、既存の system を Model と比較したり、技術的な環境で問題を解くときの reference sheet として使ったりできます。

---

```md
CatalystUI Model は、user と information system のあいだの information flow を記述するための universal model です。

process とは、input を受け取り、transformation を行い、output を生成するものです。system とは、複数の processes がどのように相互作用し、どの順序で実行されるかによって定義される、organised set of processes です。interface とは、異なる二つの systems が相互作用できるようにする mechanism です。information system とは、persistent data を扱い、user が時間を通じて interface からそれを create、read、update、delete できる specialised system です。computer とは、digital data、つまり binary で表現でき machine によって処理できる data だけを扱う information system です。user とは、information system と相互作用できる人です。

CatalystUI Model では、"data" と "information" という terms は互換的なものとして扱われます。

Model は、information の flow を通じて user interfaces を記述します。Information は system によって提示され、user によって解釈され、user によって応答され、system によって処理され、cycle が続くなかで再び提示されます。cycle はどの地点から始まってもよいですが、同じ pattern が適用されます。information は interface を通じて user と information system のあいだを流れます。

CatalystUI Model は三つの primary categories に分かれています。

- Domains
- The Stack
- Connectors

Domains は data を分類します。The Stack は data を記述します。Connectors は data を transform、modify、translate します。

Domains は、interaction のあいだにどの種類の information が扱われているかを記述します。七つの top-level domains は Symbolic、Visual、Auditory、Tactile、Olfactory、Gustatory、Multisensory です。Symbolic data は、特定の sense に結び付けられる前の information です。Visual data は見られることを意図した information です。Auditory data は聞かれることを意図した information です。Tactile data は感じられることを意図した information です。Olfactory data は嗅がれることを意図した information です。Gustatory data は味わわれることを意図した information です。Multisensory data は、複数の sensory categories が一つの experience として働く information です。

The Stack は、information が flow のどこに位置しているかを記述します。七つの explicit layers と二つの implied endpoints を含みます。上から下へ、The Stack は次の通りです。

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage は、persistent data が active interface flow の外で利用可能なまま残る implied source または destination です。Digital Data は、computer-readable form で active interface flow に入った後の data ですが、Model の残りがそれを interpret、organise、present する前の状態です。Structure & Semantics は、digital data がどのように理解されるべきかを記述します。semantics は data を解釈する rules を定義し、structure はそれらの rules を適用した organized result です。Components, Controls, & Layouts は interface の logical で usable な parts を表します。components は usable interface objects を表し、controls は interactions を処理し、layouts は他の components や controls を配置します。Graphs & Frames は、それらの parts をより大きな relationships と active contexts に organize します。graphs は interface objects の organized relationships を表し、frames は renderer-facing preparation のために graphs を含み調整します。Renderers は準備済みの interface data を output-ready form に変換します。Windows は user が system に input を渡したり system から output を受け取ったりする view または context を提供します。Systems は最終的に output を届け input を受け取る environment、services、devices、processes を提供します。Human Interface は、user が information を知覚し interaction によって応答する implied endpoint です。

Connectors は、Stack の隣接する explicit layers のあいだで information がどのように移動するかを記述します。上から下へ、connectors は次の通りです。

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector は Digital Data と Structure & Semantics を接続します。active な computer-readable information を Model が理解できる structured form に持ち込み、structured information を digital form に戻すこともできます。

Parser connector は Structure & Semantics と Components, Controls, & Layouts を接続します。stable interpreted structures を mutable interface parts に parse し、modified components を structured data に戻すこともできます。

Adapter connector は Components, Controls, & Layouts と Graphs & Frames を接続します。usable interface parts を organized relationships と active contexts に adapt し、contextual interactions を、それを扱える components や controls へ戻す助けもします。

Bridge connector は Graphs & Frames と Renderers を接続します。organized interface context を renderer に運び、通常は interactions をほとんど変更せずに上へ戻して、graph と frame が適切に route できるようにします。

Surface connector は Renderers と Windows を接続します。rendered output に window 内の destination を与え、window から生じた interaction information を上へ戻します。

Native connector は Windows と Systems を接続します。window と system のあいだに bindings を提供し、window が存在し、interactions を受け取り、output を届け、native system behavior と通信できるようにします。

Interactions は、Model が participatory になる地点です。interaction とは action の背後にある intent です。click、tap、swipe、command、movement、spoken word は見えている action にすぎません。interaction とは、user がその action を通じて達成しようとしていることです。Interactions は Stack を通って移動し、connectors によって変換され、cycle が再び始まる前に digital data を変更することがあります。

CatalystUI Model を使って、扱われている information の種類を分類し、その information が Stack のどこにあるかを特定し、layers 間の transition をどの connector が担当するかを判断し、information が stored data から user experience へ、そして user intent から data へ戻る流れを追跡します。
```

## テキスト別

CatalystUI Model の主要な順序を示すコンパクトな reference sheet です。

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | 簡単な意味 |
| ------------ | ---------- |
| Symbolic     | 特定の sense に結び付けられる前の information。 |
| Visual       | 見られることを意図した information。 |
| Auditory     | 聞かれることを意図した information。 |
| Tactile      | 感じられることを意図した information。 |
| Olfactory    | 嗅がれることを意図した information。 |
| Gustatory    | 味わわれることを意図した information。 |
| Multisensory | 複数の sensory categories が一つの experience として働くもの。 |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Layer   | Name                            | 簡単な意味 |
| ------- | ------------------------------- | ---------- |
| Implied | Data Storage                    | active interface flow の外にある persistent data。 |
| Layer 7 | Digital Data                    | interpretation 前の active computer-readable information。 |
| Layer 6 | Structure & Semantics           | interpreted data と、それに意味を与える rules。 |
| Layer 5 | Components, Controls, & Layouts | program が使う mutable interface parts。 |
| Layer 4 | Graphs & Frames                 | organized relationships と active interface context。 |
| Layer 3 | Renderers                       | information を output のために準備する processes。 |
| Layer 2 | Windows                         | input と output が通る views または delivery contexts。 |
| Layer 1 | Systems                         | interface の下にある environment、services、devices、processes。 |
| Implied | Human Interface                 | output を知覚し interaction で応答する user。 |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Connects                                                | 簡単な意味 |
| --------- | ------------------------------------------------------- | ---------- |
| Data      | Digital Data ↔ Structure & Semantics                    | active digital data を interpreted structure につなぐ。 |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | stable structures を mutable interface parts に parse する。 |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | usable parts を organized context に adapt する。 |
| Bridge    | Graphs & Frames ↔ Renderers                             | organized context を rendering へ bridge する。 |
| Surface   | Renderers ↔ Windows                                     | rendered output を window につなぐ。 |
| Native    | Windows ↔ Systems                                       | window と system のあいだに bindings を提供する。 |

## Flow 別

information が Model をどのように移動するかを追跡するためのコンパクトな参照です。

---

### Output-Facing Flow

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

### Interaction-Facing Flow

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

## Responsibility 別

あるものが Model のどこに属するかを判断するための quick reference です。

---

| Question | Use |
| -------- | --- |
| どの kind of information が扱われているか？ | Domains |
| information は flow のどこにあるか？ | The Stack |
| information は隣接する layers 間をどのように移動しているか？ | Connectors |
| user は何を達成しようとしているか？ | Interactions |

## Diagnostic Question 別

既存の system に Model を適用するための、質問ベースの参照です。

---

| Question | Likely Area |
| -------- | ----------- |
| data は利用可能だが理解されていないか？ | Digital Data, Data, Structure & Semantics |
| interpreted data はまだ usable ではないか？ | Structure & Semantics, Parser, Components |
| usable parts は context に organized されていないか？ | Components, Adapter, Graphs & Frames |
| organized context は renderer に届いていないか？ | Graphs & Frames, Bridge, Renderers |
| rendered output に行き先がないか？ | Renderers, Surface, Windows |
| window は system に正しく接続されていないか？ | Windows, Native, Systems |
| system は action を検出したが user intent を捉えそこねたか？ | Interactions and interaction routing |

## 一文要約

Model 全体のコンパクトな要約です。

---

```md
CatalystUI Model は、Domains によって data を分類し、The Stack の中に data を位置付け、Connectors によって data を変換し、Interactions によって user intent を追跡することで、user と information system のあいだの information flow を記述します。
```
