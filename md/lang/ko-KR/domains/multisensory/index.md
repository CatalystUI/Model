<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 4.7 Domains :: Multisensory

## 심층 논의

### 여러 감각이 하나의 경험으로 결합될 때

**Multisensory** domain은 여러 감각 채널이 하나의 통합된 경험으로 함께 작동하는 정보를 나타냅니다. Visual, auditory, tactile, olfactory, gustatory가 각각 따로 존재할 수 있지만, 어떤 경우에는 이 감각들이 분리된 출력이 아니라 하나의 experience로 결합됩니다. 그때 Model은 이를 multisensory로 설명할 수 있습니다.

비디오 게임은 가장 쉬운 예입니다. 화면은 visual 정보를 제공하고, 음악과 효과음은 auditory 정보를 제공하며, 컨트롤러 진동은 tactile 정보를 제공합니다. 사용자는 이를 따로따로 경험하기보다 하나의 게임 경험으로 받아들입니다. 이처럼 여러 domain이 함께 작동해 하나의 interface experience를 만들면 multisensory domain이 나타납니다.

### 여러 domain과 Multisensory의 차이

어떤 layer가 여러 discrete domains에 속하는 것과 multisensory인 것은 다릅니다. 두 domain이 같은 시스템 안에 존재하지만 서로 별도로 처리된다면, 그것은 “Visual & Auditory”처럼 여러 discrete domains로 볼 수 있습니다. 반면, 여러 감각이 하나의 통합된 experience로 결합되어 서로를 보완하고 함께 의미를 만든다면 multisensory입니다.

예를 들어 오디오 파일 관리 앱이 화면에는 파일 목록을 보여 주고, 별도의 장치에는 독립적인 진동 알림을 보낸다면 두 domain이 분리되어 있을 수 있습니다. 하지만 영화나 게임처럼 영상, 소리, 촉각이 같은 사건을 함께 표현한다면 multisensory experience에 더 가깝습니다.

### 통합된 의미

Multisensory domain의 핵심은 여러 감각이 같은 의미를 함께 전달한다는 점입니다. 폭발 장면에서 밝은 섬광, 큰 소리, 컨트롤러 진동이 동시에 발생하면 사용자는 그것을 세 개의 독립된 메시지로 느끼지 않습니다. 하나의 사건으로 느낍니다. Model은 이러한 결합된 의미를 설명하기 위해 multisensory를 둡니다.

이 구분은 설계에서 중요합니다. 여러 감각을 단순히 많이 추가한다고 좋은 interface가 되는 것은 아닙니다. 감각들이 서로 충돌하면 사용자는 혼란스러워질 수 있습니다. 반대로 감각들이 같은 의미를 명확히 보강하면 경험은 더 강력하고 접근 가능해질 수 있습니다.

### Stack 안에서의 Multisensory

Multisensory data는 Stack의 여러 layer에서 나타날 수 있습니다. Layer 5에서는 visual component, audio component, haptic component가 하나의 control이나 experience의 일부로 연결될 수 있습니다. Layer 4에서는 graph와 frame이 이 component들을 하나의 context 안에서 조정합니다. Layer 3에서는 여러 renderer가 협력하거나 하나의 renderer가 여러 출력 stream을 준비할 수 있습니다. Layer 2와 Layer 1은 각각 window와 system을 통해 여러 device와 output path를 다룰 수 있습니다.

중요한 것은 각 감각이 같은 사용자 경험에 참여하도록 조직된다는 점입니다. Multisensory는 단순한 목록이 아니라 결합입니다.

### 접근성과 Multisensory

Multisensory design은 접근성을 크게 강화할 수 있습니다. 같은 정보를 visual, auditory, tactile 방식으로 함께 제공하면 사용자는 자신의 상황과 능력에 맞는 경로를 통해 정보를 받을 수 있습니다. 그러나 모든 정보를 모든 감각으로 중복해야 한다는 뜻은 아닙니다. 중요한 것은 어떤 정보가 사용자에게 반드시 전달되어야 하는지, 그리고 어떤 감각 경로가 그 전달을 가장 잘 돕는지 판단하는 것입니다.

### 예시

비디오 게임은 visual, auditory, tactile 정보를 결합하여 하나의 플레이 경험을 만듭니다.

영화관의 몰입형 상영 시스템은 영상, 소리, 좌석 움직임, 향을 함께 사용해 multisensory experience를 만들 수 있습니다.

자동차 경고 시스템은 화면 표시, 경고음, 핸들 진동을 함께 사용해 운전자에게 하나의 위험 신호를 전달할 수 있습니다.

### 핵심

Multisensory domain은 여러 감각이 하나의 통합된 경험으로 함께 작동할 때 사용됩니다. CatalystUI는 이를 통해 복합적인 인간 경험을 단순한 visual UI보다 더 정확하게 설명할 수 있습니다.
