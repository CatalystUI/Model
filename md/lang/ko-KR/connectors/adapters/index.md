<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 6.3 Connectors :: Adapter

## 심층 논의

### 사용에서 Context로

**Adapter** connector는 **Layer 5: Components, Controls, & Layouts**와 **Layer 4: Graphs & Frames** 사이에 위치합니다. 이 connector는 mutable interface data를 더 큰 context 안에 배치하여 organized, discovered, routed, bounded, prepared될 수 있게 합니다.

Layer 5는 system에 components, controls, layouts를 제공합니다. 이들은 developer가 직접 다룰 수 있는 mutable pieces입니다. Component는 정보의 한 부분을 나타낼 수 있고, control은 interaction에 반응할 수 있으며, layout은 다른 components를 특정 order로 정리할 수 있습니다. 하지만 이 pieces만으로는 자신들이 존재하는 environment 전체를 설명하지 못합니다. 자신이 무엇인지, 어떻게 행동하는지는 알 수 있지만, 전체 interface와 어떤 관계를 맺는지는 자동으로 알지 못합니다.

Adapter connector는 individual usable pieces를 organized context로 이동시킵니다. Parser connector를 통해 만들어진 components를 graphs와 frames에 맞게 adapt합니다. 여기서 Stack은 component가 존재한다는 사실뿐 아니라, 그것이 어디에 속하고, 다른 components와 어떻게 관계를 맺으며, active interface에 어떻게 참여해야 하는지도 이해하기 시작합니다.

### Components를 Graphs로 Adapt하기

Component는 혼자 존재할 수 있지만 user interface는 드물게 하나의 isolated component만으로 이루어집니다. 가장 단순한 interface도 보통 relationships를 포함합니다. 어떤 component는 다른 component를 포함하고, 어떤 control은 layout에 의존하며, 어떤 group은 함께 검색, 정렬, enable, disable, focus, update되어야 할 수 있습니다.

Adapter connector는 components, controls, layouts를 graph 안에 배치하여 larger whole의 일부로 organized되게 합니다. Graph는 components를 저장하고, relationships를 추적하고, query 방법을 제공하며, collection으로 관리하기 위한 surrounding logic을 제공할 수 있습니다. 이 step이 없으면 components는 unified interface의 참여자가 아니라 흩어진 mutable data pieces로 남게 됩니다.

Settings component는 그 자체로도 유용할 수 있습니다. 그러나 graph에 adapt되면 full settings view의 일부가 되고, 다른 sections와 연결되고, name으로 search되고, related values와 함께 update되며, user action이 있을 때 route될 수 있습니다.

### Layout은 전체 Context가 아니다

Adapter connector는 layout과 graph의 차이를 분명히 합니다. Layout은 components를 정리할 수 있으므로 interface의 full organizational layer처럼 보일 수 있습니다. 그러나 layout은 components를 특정 방식으로 배열할 뿐이며, 그 components의 full relationship, lifecycle, routing, environmental context를 반드시 설명하지는 않습니다.

Vertical layout은 여러 controls가 순서대로 나타나야 한다고 결정할 수 있습니다. 그렇다고 해서 layout이 전체 interface를 책임지는 것은 아닙니다. 모든 active component를 알고, 모든 interaction을 관리하고, output boundary를 준비하고, system의 top-level mediator가 될 필요는 없습니다. 그런 책임은 Layer 4에 속합니다.

### Frame에 연결하기

Layer 4에는 graph뿐 아니라 frame도 있습니다. Frame은 organized components와 Stack의 lower layers 사이의 active boundary와 communication point를 나타냅니다.

Adapter connector는 components가 이 framed context에 들어가도록 돕습니다. Component는 size를 가질 수 있고, control은 interaction behavior를 가질 수 있으며, layout은 relative placement를 설명할 수 있습니다. 그러나 frame은 그 pieces가 준비되는 bounds와 active area를 결정합니다.

Adapter connector가 rendering을 하는 것은 아닙니다. Rendering은 lower layers의 책임입니다. Adapter는 organized interface를 준비하여 frame이 renderer 쪽으로 정보를 올바르게 전달할 수 있게 합니다.

### Adaptation을 통한 Reuse

Adapter connector의 강력한 점 중 하나는 같은 component를 여러 context에 adapt할 수 있다는 것입니다. Component는 하나의 graph, frame, interface kind에 영구히 묶일 필요가 없습니다. Meaning과 behavior는 안정적으로 남아 있고, Adapter connector가 particular environment에서 어떻게 참여할지를 결정합니다.

Document component는 editing graph, preview graph, printing graph에 adapt될 수 있습니다. Music component는 playback graph, editing graph, library graph에 adapt될 수 있습니다. Settings components는 simple preferences page, advanced configuration panel, automated setup flow에 adapt될 수 있습니다.

### Components로 돌아오기

Stack은 reversible하므로 Adapter connector는 interaction이 upper layers로 돌아가는 흐름에도 참여합니다. 사용자가 system과 상호작용하면 lower layers는 결국 그 interaction을 appropriate component나 control로 route해야 합니다. Layer 4는 organized context를 이해하므로 어떤 component가 관련되는지 판단할 수 있고, Adapter connector는 그 interaction을 Layer 5로 돌려보내 component나 control이 반응하게 합니다.

### 핵심

Adapter connector는 usable interface data와 organized interface context를 혼동하지 않게 합니다. Components, Controls, & Layouts는 mutable interface objects와 direct interaction behavior를 담당하고, Graphs & Frames는 organization, context, bounds, routing, lower-layer preparation을 담당합니다. Adapter connector는 그 사이의 이동을 처리합니다.
