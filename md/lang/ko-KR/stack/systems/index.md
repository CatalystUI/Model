<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.7 Stack :: Layer 1 — Systems

## 심층 논의

### Hardware와 Platform의 기반

**Layer 1: Systems**는 CatalystUI Stack의 가장 아래쪽 명시적 layer입니다. 이 layer는 hardware, operating system, drivers, device services, platform APIs를 포함하여 input과 output이 실제로 처리되는 기반을 나타냅니다. Windows, macOS, Linux, iOS, Android, browser runtime, embedded firmware, custom device environment 모두 system의 역할을 할 수 있습니다.

System layer는 사용자에게 perceivable output을 전달하고, 사용자의 interaction을 받아들이는 실제 세계와 가장 가까운 layer입니다. Display, speaker, keyboard, mouse, touchscreen, microphone, game controller, sensor, haptic motor 같은 devices는 system을 통해 interface flow에 참여합니다.

### System은 모든 것을 의미하지 않는다

System이 기반이라고 해서 모든 interface logic이 system layer에 속하는 것은 아닙니다. System은 hardware와 platform capabilities를 제공하지만, components, semantics, graph organization, rendering decisions는 higher layers의 책임입니다. CatalystUI는 system-specific details와 interface meaning을 분리하려고 합니다.

이 분리가 없다면 application logic이 operating system API와 깊게 얽히고, platform을 바꾸기 어려워집니다. CatalystUI의 Model은 system을 명확한 layer로 두어 higher-level interface가 system 위에 세워질 수 있게 합니다.

### Output 방향

Top-down flow에서 system은 renderer와 window를 통해 준비된 output을 실제 device로 전달합니다. Visual output은 display로 가고, auditory output은 speaker나 headphones로 가며, tactile output은 haptic device로 갈 수 있습니다. System은 drivers와 hardware를 통해 perceivable data가 실제로 사용자에게 도달하도록 합니다.

### Input 방향

Bottom-up flow에서 system은 interaction의 출발점입니다. 사용자가 keyboard를 누르거나 mouse를 움직이거나 microphone에 말하거나 sensor 앞을 지나가면, system은 그 input을 감지합니다. 그런 다음 Window layer로 interaction을 전달하고, Stack은 그 interaction을 higher layers로 route합니다.

이때 system은 raw input을 제공할 수 있지만, 그 input의 interface meaning을 최종적으로 결정하는 것은 higher layers입니다. 같은 key press가 텍스트 입력인지, 게임 command인지, global shortcut인지는 context에 따라 달라집니다.

### Specialized Systems

System은 반드시 일반-purpose operating system일 필요가 없습니다. Embedded controller, kiosk, appliance, vehicle dashboard, industrial panel, game console, wearable device도 system이 될 수 있습니다. 중요한 것은 그 environment가 information system으로서 input과 output을 처리한다는 점입니다.

CatalystUI는 이런 다양한 system을 같은 Model로 설명할 수 있습니다. Platform은 달라도 정보 흐름의 기본 구조는 유지됩니다.

### 핵심

System layer는 hardware와 platform services를 통해 output을 전달하고 input을 받아들이는 기반입니다. CatalystUI는 system을 interface의 전부로 보지 않고, lower-level capability를 제공하는 명확한 layer로 다룹니다.
