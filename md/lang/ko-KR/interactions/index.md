<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 7. Interactions

## 주제별 요약

상호작용은 사용자가 정보 시스템에 의도를 전달하는 방식입니다. 사용자가 키를 누르거나, 마우스를 움직이거나, 화면을 터치하거나, 말을 하거나, 문 앞으로 걸어가거나, 버튼을 누르는 순간 그 행동은 시스템이 처리할 수 있는 정보가 됩니다. CatalystUI Model은 이 정보를 **Interaction Data**로 설명합니다.

Interaction Data는 단순한 물리 동작 그 자체가 아닙니다. 중요한 것은 그 동작이 시스템 안에서 어떤 의미를 갖는가입니다. 키보드의 `A` 키를 누르는 것은 물리적으로는 스위치가 눌린 사건이지만, 텍스트 편집기에서는 문자 입력일 수 있고, 게임에서는 왼쪽 이동일 수 있으며, 단축키 시스템에서는 명령의 일부일 수 있습니다. 같은 물리 행동이라도 context에 따라 다른 interaction이 됩니다.

## 행동에서 의미로

사용자의 행동은 보통 Stack의 아래쪽에서 시작됩니다. System은 hardware나 operating system 수준에서 입력을 감지합니다. Window는 그 입력이 어느 view나 surface에 관련되는지 전달합니다. Renderer나 frame은 위치, focus, bounds, routing 같은 정보를 통해 interaction이 어떤 component와 관련되는지 판단할 수 있습니다. 마지막으로 Layer 5의 component나 control은 그 interaction을 실제 의미 있는 동작으로 처리합니다.

이 과정은 사람이 “무언가를 했다”는 사실을 시스템이 “이 component에 대해 이런 의도가 표현되었다”로 바꾸는 과정입니다. CatalystUI가 interaction을 데이터로 보는 이유가 여기에 있습니다. Interaction은 단순한 이벤트가 아니라 정보의 흐름에 참여하는 데이터입니다.

## 모든 interaction이 visual인 것은 아니다

마우스 클릭과 터치 입력은 익숙하기 때문에 interaction을 visual UI에 묶어 생각하기 쉽습니다. 그러나 interaction은 어떤 domain에서도 시작될 수 있습니다. 사용자는 음성 명령을 말할 수 있고, 물리 버튼을 누를 수 있으며, 컨트롤러를 움직일 수 있고, 센서 앞을 지나갈 수 있습니다. 시스템이 그 행동을 받아들이고 의미 있게 처리한다면, 그것은 user interface interaction입니다.

이 구분은 Model을 훨씬 더 넓게 만듭니다. CatalystUI는 “창 안의 버튼을 클릭하는 것”만 설명하는 것이 아니라, 인간과 정보 시스템이 서로 정보를 주고받는 전체 과정을 설명합니다.

## Interaction과 출력의 순환

사용자 인터페이스는 출력과 입력의 순환입니다. 시스템은 perceivable data를 제공하고, 사용자는 그것을 인식하고, interaction data를 생성하며, 시스템은 그 interaction을 처리하고 새로운 output을 만들 수 있습니다. 이 순환은 문이 열리고 닫히는 간단한 시스템에서도, 복잡한 그래픽 프로그램에서도, 음성 assistant에서도 동일하게 적용됩니다.

Interaction은 이 순환의 절반을 담당합니다. 출력이 시스템에서 사용자로 향하는 정보라면, interaction은 사용자에서 시스템으로 향하는 정보입니다.

## 예시

텍스트 편집기에서 `CTRL+V`를 누르면 system은 key press를 감지합니다. Window와 lower layers는 이를 전달하고, renderer나 graph는 context를 판단하며, control은 이를 paste interaction으로 처리합니다. 결과적으로 digital data가 수정됩니다.

스마트 스피커에서 사용자가 “불 켜 줘”라고 말하면 microphone과 system은 auditory input을 받아들입니다. speech processing은 그 소리를 의미 있는 command로 바꾸고, component나 control은 해당 명령을 실행합니다.

자동문 앞에 사람이 걸어가면 센서가 움직임을 감지합니다. 그 움직임은 interaction data가 되고, 시스템은 문을 열어 perceivable output을 제공합니다.

## 핵심

Interaction은 사용자의 의도가 정보 시스템 안으로 들어가는 방식입니다. CatalystUI Model은 interaction을 데이터로 다루기 때문에, 어떤 장치나 domain을 사용하더라도 사용자와 시스템 사이의 대화를 일관되게 설명할 수 있습니다.
