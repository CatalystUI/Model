<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5. The Stack

## 주제별 요약

CatalystUI **Stack**은 사용자와 정보 시스템 사이에서 데이터가 이동하는 과정을 설명하는 층 구조입니다. 이 Stack은 일곱 개의 명시적 layer와 두 개의 암시적 layer로 구성됩니다. 위쪽의 암시적 layer는 **Data Storage**이고, 아래쪽의 암시적 layer는 **Human Interface**입니다. 그 사이에 Layer 7부터 Layer 1까지가 놓입니다.

Stack은 정보가 한 방향으로만 흐른다고 가정하지 않습니다. 시스템이 사용자에게 정보를 제공할 때는 Digital Data가 아래로 이동하여 perceivable data가 됩니다. 사용자가 시스템에 반응할 때는 interaction data가 위로 이동하여 Digital Data를 수정하거나 다시 저장할 수 있는 형태가 됩니다. 그래서 Stack은 본질적으로 가역적입니다.

## Stack의 Layers

Stack의 순서는 다음과 같습니다.

1. **[암시적] Data Storage** — Digital Data의 근원이자 Interaction Data가 최종적으로 보존될 수 있는 위치입니다.
2. **Layer 7: Digital Data** — 컴퓨터가 읽을 수 있는 활성 정보, 즉 1과 0으로 표현되는 데이터입니다.
3. **Layer 6: Structure & Semantics** — Digital Data를 의미 있는 구조와 규칙에 따라 해석합니다.
4. **Layer 5: Components, Controls, & Layouts** — 사용하거나 조작할 수 있는 mutable interface 객체를 제공합니다.
5. **Layer 4: Graphs & Frames** — components를 더 큰 context 안에 조직하고, routing과 bounds를 준비합니다.
6. **Layer 3: Renderers** — interface data를 사용자가 지각할 수 있는 출력으로 변환합니다.
7. **Layer 2: Windows** — rendered output과 system 사이의 view 또는 container 역할을 합니다.
8. **Layer 1: Systems** — hardware, operating system, device services를 제공하여 input과 output을 실제로 처리합니다.
9. **[암시적] Human Interface** — 정보를 지각하고 interaction을 생성하는 사용자입니다.

## 왜 Layer로 나누는가

Layer를 나누면 interface가 실제로 무엇을 하고 있는지 더 명확하게 볼 수 있습니다. 데이터가 어디에서 저장되는지, 언제 의미를 얻는지, 언제 component가 되는지, 언제 context에 배치되는지, 언제 renderer로 전달되는지, 언제 system을 통해 사용자에게 도달하는지 분리해서 설명할 수 있습니다.

이 분리는 설계와 debugging에도 도움이 됩니다. 문제가 renderer에 있는지, layout에 있는지, structure 해석에 있는지, native system 연결에 있는지 더 쉽게 판단할 수 있습니다. 또한 한 layer의 책임을 다른 layer에 억지로 밀어 넣는 일을 줄여 줍니다.

## Top-Down Flow

Top-down flow는 Digital Data가 perceivable output이 되는 과정입니다. 파일, string, stream, database result 같은 digital data는 Structure & Semantics를 통해 해석됩니다. 그 해석된 정보는 Components, Controls, & Layouts에서 사용 가능한 interface 객체가 됩니다. Graphs & Frames는 그 객체들을 context 안에 배치하고, Renderers는 이를 출력 데이터로 변환합니다. Windows와 Systems는 그 output을 실제 장치로 전달하고, Human Interface는 이를 지각합니다.

## Bottom-Up Flow

Bottom-up flow는 사용자의 interaction이 Digital Data로 돌아가는 과정입니다. 사용자가 키를 누르거나, 클릭하거나, 말하거나, 장치 앞을 지나가면 system이 interaction을 감지합니다. Window와 lower layers는 이를 routing하고, Graphs & Frames는 context를 판단하며, Layer 5의 control은 interaction을 처리합니다. 그 결과 Structure & Semantics와 Digital Data가 수정될 수 있고, 필요하다면 Data Storage에 다시 보존됩니다.

## 핵심

Stack은 user interface를 “버튼과 창”이 아니라 정보의 흐름으로 바라보게 해 줍니다. 이 관점에서 어떤 interface든 같은 기본 과정을 따릅니다. 정보는 저장되고, 해석되고, 사용 가능한 형태가 되고, context에 놓이고, 렌더링되고, system을 통해 지각되며, 사용자의 interaction을 통해 다시 수정됩니다.
