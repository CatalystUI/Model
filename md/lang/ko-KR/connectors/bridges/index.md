<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 6.4 Connectors :: Bridge

## 심층 논의

### Context에서 Rendering으로

**Bridge** connector는 **Layer 4: Graphs & Frames**와 **Layer 3: Renderers** 사이에 위치합니다. 이 connector는 organized interface context를 renderer가 처리할 수 있는 prepared rendering data로 넘기는 역할을 합니다.

Layer 4는 components가 어떻게 organized되어 있고, 어떤 bounds 안에 있으며, 어떤 frame context에서 lower layers로 전달되어야 하는지 이해합니다. 하지만 renderer는 그 정보를 자신의 rendering process에 맞는 형태로 받아야 합니다. Bridge connector는 이 전환을 담당합니다.

### Graph와 Frame Data 전달

Graph는 relationships, ordering, component state, routing information을 제공할 수 있습니다. Frame은 output boundary, active area, size, clipping, scaling, environmental context를 제공할 수 있습니다. Bridge connector는 이러한 정보를 renderer가 사용할 수 있도록 준비합니다.

Visual renderer의 경우 Bridge는 component tree나 graph를 draw list, render commands, scene description, layout results로 변환할 수 있습니다. Audio renderer의 경우 audio graph를 mixing plan이나 stream instructions로 준비할 수 있습니다. Tactile renderer의 경우 haptic components를 device-ready patterns로 준비할 수 있습니다.

### Bridge는 Renderer가 아니다

Bridge connector가 renderer를 대신하지는 않습니다. Bridge는 organized data를 renderer에 맞게 전달하지만, 실제로 output을 perceivable form으로 변환하는 책임은 renderer에게 있습니다. 이 distinction은 중요합니다. Bridge가 rendering logic을 모두 품기 시작하면 Layer 4와 Layer 3의 boundary가 흐려집니다.

Bridge는 “무엇을 렌더링해야 하는가”와 “어떤 context에서 렌더링해야 하는가”를 전달합니다. Renderer는 “그것을 어떻게 output으로 만들 것인가”를 처리합니다.

### Domain 변환

Bridge는 domain translation이 일어날 수 있는 중요한 지점이기도 합니다. Symbolic data가 visual renderer로 전달될 수도 있고, auditory renderer로 전달될 수도 있습니다. 같은 graph information이 여러 renderer를 통해 서로 다른 perceivable output으로 표현될 수 있습니다.

예를 들어 text component는 visual text renderer로 전달되어 화면에 표시될 수 있고, text-to-speech renderer로 전달되어 음성으로 출력될 수도 있습니다. Bridge connector는 meaning을 보존하면서 renderer가 필요한 data를 받을 수 있게 해야 합니다.

### Interaction 방향

Bottom-up flow에서 Bridge connector는 renderer가 해석한 interaction information을 Layer 4로 돌려보낼 수 있습니다. Renderer가 coordinate transform, hit testing assistance, audio recognition context, haptic device state 같은 정보를 제공한다면 Bridge는 이를 graph와 frame이 이해할 수 있는 context로 전달합니다.

### 핵심

Bridge connector는 organized interface context와 rendering process 사이의 전환입니다. Graphs & Frames는 interface를 준비하고, Renderers는 output을 만들며, Bridge는 그 사이에서 prepared meaning이 손실되지 않도록 전달합니다.
