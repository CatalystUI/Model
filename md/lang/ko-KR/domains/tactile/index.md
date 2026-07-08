<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 4.4 Domains :: Tactile

## 심층 논의

### 느껴지도록 만들어진 정보

**Tactile** domain은 촉각을 통해 지각되도록 만들어진 정보를 나타냅니다. 진동, 압력, 저항, 점자, 버튼 클릭감, 햅틱 피드백, 물리적 표면, 힘 피드백 등이 여기에 속합니다. 정보가 사용자의 몸으로 느껴지도록 전달된다면, 그 정보는 tactile domain에 참여합니다.

Tactile data는 종종 시각이나 청각보다 덜 주목받지만, 실제 상호작용에서는 매우 중요합니다. 휴대전화의 진동은 알림을 전달하고, 게임 컨트롤러의 햅틱 피드백은 충격이나 움직임을 느끼게 하며, 물리적 키보드의 키감은 입력이 발생했음을 사용자에게 알려 줍니다.

### 촉각은 단순한 물리 현상이 아니다

CatalystUI에서 tactile domain은 단순히 물체가 존재한다는 뜻이 아닙니다. 중요한 것은 그 물리적 감각이 정보로 사용되는가입니다. 책상은 만질 수 있지만, 일반적으로 interface data는 아닙니다. 그러나 점자 디스플레이의 돌출된 점, 휴대전화의 진동 패턴, 자동차의 스티어링 휠 경고 진동은 모두 정보를 전달하기 때문에 tactile data입니다.

즉 tactile domain은 “몸으로 느껴지는 정보”를 설명합니다.

### Symbolic에서 Tactile로

Symbolic data는 tactile output으로 변환될 수 있습니다. 텍스트 문자열은 점자로 표현될 수 있고, 알림 상태는 진동 패턴으로 표현될 수 있으며, 게임 이벤트는 컨트롤러의 힘 피드백으로 전달될 수 있습니다. 이 과정에서 connector는 의미를 보존하면서 감각 채널을 바꿉니다.

이 구분은 접근성에 특히 중요합니다. 텍스트가 화면에만 표시되면 visual domain에 묶이지만, 점자로도 제공되면 tactile domain을 통해 사용자가 같은 정보를 받을 수 있습니다.

### Stack 안에서의 Tactile

Layer 5에서는 haptic component나 physical control이 존재할 수 있습니다. 예를 들어 `VibrationComponent`는 강도와 지속 시간을 가질 수 있고, `PhysicalButtonControl`은 눌림 interaction을 처리할 수 있습니다. Layer 4는 여러 tactile component를 graph와 frame 안에서 정리합니다. Layer 3의 renderer는 이를 device가 이해할 수 있는 햅틱 명령으로 변환합니다. Layer 2의 window는 tactile 출력 장치나 입력 장치로 향하는 view 역할을 할 수 있고, Layer 1의 system은 실제 hardware와 driver를 통해 감각을 전달합니다.

반대 방향으로 tactile interaction도 Stack을 거슬러 올라갈 수 있습니다. 버튼을 누르거나, 화면을 터치하거나, 컨트롤러를 움직이는 일은 모두 interaction data가 되어 higher layers로 전달될 수 있습니다.

### 예시

스마트폰 진동 알림은 tactile output입니다. 화면을 보지 않아도 사용자는 알림이 왔음을 느낄 수 있습니다.

점자 디스플레이는 symbolic text를 tactile form으로 변환합니다. 원래 데이터는 문자열일 수 있지만, 사용자는 손끝으로 정보를 읽습니다.

게임 컨트롤러의 진동은 게임 안의 충격, 속도, 위험, 방향을 촉각적으로 전달할 수 있습니다.

### 핵심

Tactile domain은 사용자가 몸으로 느끼도록 의도된 정보를 설명합니다. CatalystUI는 촉각을 보조 요소로 취급하지 않고, 사용자와 시스템 사이의 정보 흐름에 참여하는 완전한 interface domain으로 다룹니다.
