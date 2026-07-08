<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.4 Stack :: Layer 4 — Graphs & Frames

## 심층 논의

### Components가 Context를 얻는 곳

**Layer 4: Graphs & Frames**는 components, controls, layouts가 더 큰 interface context 안에 조직되는 layer입니다. Layer 5는 사용 가능한 pieces를 제공하지만, 그 pieces가 전체 interface 안에서 어디에 속하고, 서로 어떻게 관계를 맺고, 어떤 bounds 안에서 준비되는지는 Layer 4에서 설명됩니다.

이 layer는 두 가지 중심 개념으로 구성됩니다. **Graph**는 components의 관계와 organization을 다룹니다. **Frame**은 organized data가 lower layers로 전달되기 전에 active boundary와 communication context를 제공합니다.

### Graphs

Graph는 components, controls, layouts를 query하고, 저장하고, 조직하는 역할을 합니다. Graph는 단순한 layout과 다릅니다. Layout은 components를 특정 방식으로 배치하지만, graph는 더 넓은 relationship, discovery, routing, lifecycle을 관리합니다.

예를 들어 visual interface의 component tree는 graph가 될 수 있습니다. Audio system에서는 music graph가 여러 audio components를 category, priority, playback state에 따라 관리할 수 있습니다. Graph는 component가 isolated object로 남지 않고 unified interface의 일부가 되도록 해 줍니다.

Graph는 “무엇이 어디에 있고 무엇과 연결되어 있는가”를 이해합니다. 이 때문에 interaction routing에서도 중요한 역할을 합니다. 사용자가 특정 위치를 클릭하거나 command를 실행했을 때, graph는 어떤 component가 관련되는지 판단하는 데 도움을 줄 수 있습니다.

### Frames

Frame은 organized components와 lower layers 사이의 active boundary를 나타냅니다. Frame은 graph가 준비한 data를 renderer로 넘기기 전에 필요한 bounds, context, output area, resizing information, routing information을 다룰 수 있습니다.

Visual interface에서 frame은 window surface와 layout calculations 사이의 연결 지점처럼 작동할 수 있습니다. Window 크기가 바뀌면 frame은 bounds가 바뀌었다는 사실을 graph와 layout에 알리고, renderer로 전달될 data를 다시 준비하게 할 수 있습니다.

Frame은 직접 render하지 않습니다. Rendering은 Layer 3의 책임입니다. Frame은 renderer가 받을 수 있도록 organized information을 준비합니다.

### Layout과 Graph의 차이

Layout은 components를 배열합니다. Graph는 components를 interface context 안에서 관리합니다. 이 차이를 분명히 하지 않으면 layout이 너무 많은 책임을 떠안게 됩니다. Vertical layout은 items를 위에서 아래로 놓을 수 있지만, 전체 application의 focus, routing, lifecycle, rendering boundary까지 모두 관리할 필요는 없습니다.

Graph와 frame이 별도로 존재하면 layout은 자신의 책임에 집중할 수 있고, larger system은 organization과 context를 담당할 수 있습니다.

### Top-Down Flow

Top-down flow에서 Layer 4는 Layer 5에서 온 components를 organized context에 배치합니다. Graph는 relationships를 만들고, frame은 active bounds와 output preparation을 담당합니다. 그런 다음 Bridge connector가 이 정보를 Layer 3의 renderer로 전달할 수 있는 형태로 넘깁니다.

### Bottom-Up Flow

Bottom-up flow에서 Layer 4는 interaction을 context 안에서 해석합니다. Lower layers가 key press, pointer movement, selection, voice command 같은 interaction을 전달하면, graph와 frame은 그것이 어느 component와 관련되는지 판단하는 데 도움을 줍니다. 그런 다음 Adapter connector를 통해 interaction은 Layer 5의 appropriate control로 돌아갑니다.

### 핵심

Graphs & Frames layer는 usable components를 organized interface context로 만듭니다. Graph는 관계와 organization을 다루고, frame은 active boundary와 lower-layer communication을 준비합니다. 이 layer 덕분에 components는 단순한 pieces가 아니라 살아 있는 interface의 일부가 됩니다.
