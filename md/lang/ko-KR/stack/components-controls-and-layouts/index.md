<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.3 Stack :: Layer 5 — Components, Controls, & Layouts

## 심층 논의

### 사용 가능한 Interface 객체

**Layer 5: Components, Controls, & Layouts**는 interpreted information이 사용 가능한 interface object가 되는 layer입니다. Layer 6의 structure는 data를 이해할 수 있게 만들지만, Layer 5는 개발자와 사용자 interaction이 실제로 다룰 수 있는 mutable objects를 제공합니다.

이 layer의 핵심은 mutability입니다. Components, controls, layouts는 상태를 가질 수 있고, 업데이트될 수 있으며, interaction에 반응할 수 있습니다. 이들은 storage의 원래 구조와 반드시 같은 모양을 유지할 필요가 없습니다. 오히려 사용자와 system이 더 편하게 상호작용하도록 data를 human-friendly API로 표현합니다.

### Components

Component는 interface에서 사용할 수 있는 개별 mutable element입니다. Visual interface에서는 rectangle, image, label, button 같은 것이 component가 될 수 있습니다. Auditory interface에서는 audio clip이나 music track이 component가 될 수 있습니다. Tactile interface에서는 vibration pattern이나 haptic element가 component가 될 수 있습니다.

Component는 data를 직접 표현하거나 다루기 위한 properties와 methods를 제공할 수 있습니다. 예를 들어 visual component는 `Size`, `Position`, `Color`를 가질 수 있고, audio component는 `Play()`, `Pause()`, `Stop()` 같은 methods를 제공할 수 있습니다.

### Controls

Control은 interaction에 직접 반응하는 component입니다. 모든 control은 component이지만, 모든 component가 control인 것은 아닙니다. Control은 사용자의 action을 받아들이고, 그 action을 의미 있는 interface behavior로 처리합니다.

예를 들어 button control은 click interaction에 반응할 수 있습니다. Text input control은 keyboard interaction을 받아 text data를 수정할 수 있습니다. Physical button control은 hardware button press를 처리할 수 있습니다. Control은 user intent가 actual data change나 command로 변환되는 지점이 될 수 있습니다.

### Layouts

Layout은 다른 components를 어떤 order나 relationship으로 배치하는 component입니다. Visual interface에서는 vertical layout, horizontal layout, grid layout 등이 있을 수 있습니다. Auditory interface에서는 sound effects와 music을 category나 priority에 따라 정리하는 audio layout이 있을 수 있습니다.

Layout은 components를 정리하지만, interface 전체의 context를 모두 담당하지는 않습니다. 그것은 Layer 4의 graph와 frame의 역할입니다. Layout은 component들의 arrangement를 제공하고, graph는 그 arrangement가 더 큰 interface context 안에서 어떻게 관리되는지 설명합니다.

### Interaction이 처리되는 곳

Layer 5는 interaction handling에서 매우 중요한 layer입니다. Lower layers는 interaction을 감지하고, 전달하고, routing할 수 있지만, 최종적으로 어떤 component나 control이 그 interaction에 반응할지는 Layer 5에서 결정되는 경우가 많습니다.

사용자가 button을 클릭하면 system은 pointer event를 감지하고, window와 renderer와 frame은 위치와 context를 해석하며, graph는 관련 control을 찾습니다. 하지만 button이 실제로 눌렸을 때 어떤 command가 실행되는지는 button control의 책임입니다.

### 왜 Structure와 분리하는가

Layer 6의 structure와 Layer 5의 component를 분리하면 data meaning과 user-facing behavior가 섞이지 않습니다. Settings file의 structure는 key/value data를 설명할 수 있지만, settings screen의 toggle, slider, dropdown은 그 data를 사용자가 바꿀 수 있게 하는 components와 controls입니다.

이 분리는 같은 data를 여러 interface context에서 재사용하게 해 줍니다. 같은 document structure가 editor component, preview component, print component로 다르게 표현될 수 있습니다.

### 핵심

Components, Controls, & Layouts layer는 interpreted data를 사용 가능하고 상호작용 가능한 interface object로 바꿉니다. Component는 data를 표현하고, control은 interaction을 처리하며, layout은 components를 정리합니다. 이 layer는 user intent가 실제 변화로 이어지는 핵심 지점입니다.
