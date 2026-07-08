<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 6. Connectors

## 주제별 요약

Connectors는 layer 사이에서 정보가 어떻게 이동하는지를 설명할 뿐 아니라, hardware device가 부과하는 많은 제한을 추상화할 수 있게 해 준다는 점에서 특별합니다. 이는 꽤 대담한 주장처럼 들릴 수 있습니다. 그러나 user interface가 CatalystUI Stack을 중심으로 적절히 설계되면, connectors는 필요에 따라 서로 다른 구현으로 교체될 수 있는 방식으로 만들어질 수 있습니다. 이런 의미에서 connectors는 _정보를 번역하는 매개체_처럼 작동합니다. Stack의 layers는 한 번 domain이 정해지면 보통 특정 domain에 묶이지만, connectors는 정보를 한 domain에서 다른 domain으로 변환할 수 있습니다. 예를 들어 connector는 text content를 화면, speaker, 또는 braille display를 통한 tactile feedback으로 준비할 수 있습니다.

Stack의 각 layer를 식별한 것과 같은 방식으로, connectors도 한 layer가 다른 layer와 통신해야 하는 지점을 보면 찾을 수 있습니다. 여기에는 중요한 차이가 있습니다. “Data Storage”와 “Human Interface”에는 암시적 endpoint가 있지만 connectors에는 그런 endpoint가 없습니다. Connectors는 이웃한 두 layer가 함께 작동하게 하는 mechanism입니다. 따라서 각 connector는 자신이 놓인 두 명시적 layer와, 그 사이에서 지원해야 하는 communication의 종류로 정의됩니다.

### Stack의 Connectors

Stack의 맨 위에서 첫 번째 필요한 연결은 Layer 7 “Digital Data”와 Layer 6 “Structure & Semantics” 사이에 있습니다. Digital Data는 file, document, response, database result 같은 원본 material을 담을 수 있지만, 다음 layer는 그 material을 어떻게 읽어야 하는지 알아야 합니다. 이 connector는 Data Storage 쪽으로 손을 뻗어 정보를 active flow로 가져오고, 그 format과 meaning을 보존하면서 interpretation을 준비해야 할 수 있습니다. 이 connector는 digital content를 structured format으로 바꾸기 때문에 “Data” connector로 분류할 수 있습니다.

그 content가 meaningful structure로 읽히면 다음 연결은 Layer 6 “Structure & Semantics”와 Layer 5 “Components, Controls, & Layouts” 사이에 나타납니다. Layer 6은 content가 무엇을 의미하는지 설명할 수 있지만, Layer 5는 그 의미에서 어떤 usable parts가 만들어져야 하는지 알아야 합니다. page description이 button이 있어야 한다고 말한다면, 다음 단계는 그 button이 존재한다는 사실을 _아는_ 것이 아니라 working control로 _만드는_ 것입니다. 이 connector는 structures를 usable interface parts로 parse하므로 “Parser” connector라고 부를 수 있습니다.

그 usable parts가 만들어지면 다음 연결은 Layer 5와 Layer 4 “Graphs & Frames” 사이에 있습니다. Layer 5는 interface가 무엇을 포함하고 어떻게 행동해야 하는지 설명하지만, Layer 4는 그 정보를 더 큰 context 안에 organized해야 합니다. Button은 이미 control로 존재할 수 있지만, complete scene의 일부가 되려면 position, size, state, surrounding frame과의 relationship이 필요합니다. 이 connector는 usable interface parts를 graph와 frame structures로 adapt하므로 “Adapter” connector입니다.

다음 연결은 Layer 4와 Layer 3 “Renderers” 사이입니다. Graphs & Frames는 interface를 organized context로 준비하지만, renderer가 사용할 수 있는 representation으로 전달되어야 합니다. 이 connector는 prepared graph/frame data를 rendering process로 넘기기 때문에 “Bridge” connector입니다.

Layer 3과 Layer 2 “Windows” 사이의 connector는 rendered output이 window나 view로 전달되도록 합니다. Visual system에서는 pixels나 drawing commands가 surface로 전달될 수 있고, audio system에서는 audio output stream이 auditory window로 전달될 수 있습니다. 이 connector는 rendered information을 window context에 놓으므로 “Surface” connector입니다.

마지막으로 Layer 2와 Layer 1 “Systems” 사이에는 NativeHandler connector가 있습니다. Window는 system과 통신해야 하고, system은 hardware와 operating system services를 제공합니다. NativeHandler는 platform-specific APIs, devices, drivers, native events와의 interaction을 담당합니다.

### 핵심

Connectors는 layer 사이의 변환 지점입니다. Data, Parser, Adapter, Bridge, Surface, NativeHandler는 각각 특정 boundary를 담당합니다. 이들을 명확히 정의하면 information flow가 어디에서 해석되고, 만들어지고, 조직되고, 렌더링되고, system으로 전달되는지 더 분명해집니다.
