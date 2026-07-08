<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 6.5 Connectors :: Surface

## 심층 논의

### Rendered Output에서 Window로

**Surface** connector는 **Layer 3: Renderers**와 **Layer 2: Windows** 사이에 위치합니다. Renderer가 perceivable output을 준비하면, 그 output은 특정 window나 view context로 전달되어야 합니다. Surface connector는 이 전달을 담당합니다.

Visual interface에서는 surface가 drawing target, framebuffer, canvas, swapchain, window surface처럼 보일 수 있습니다. Audio interface에서는 output stream이나 device channel이 비슷한 역할을 할 수 있습니다. Tactile interface에서는 haptic output channel이나 device surface가 될 수 있습니다.

### Surface는 배치 지점이다

Renderer가 data를 output form으로 바꾸더라도, 그 output이 어디에 놓이는지는 별개의 문제입니다. Surface connector는 renderer output을 window context에 연결합니다. 즉 “이 rendered data를 이 view, 이 bounded area, 이 output path에 전달한다”는 역할을 합니다.

이 connector는 rendered data의 ownership과 lifecycle에도 관련될 수 있습니다. Visual rendering에서는 buffer swap, redraw request, viewport size, DPI scaling, clipping 같은 문제가 surface boundary에서 나타날 수 있습니다. Audio에서는 stream buffer, latency, device selection이 문제가 될 수 있습니다.

### Rendering과 Windowing의 분리

Surface connector는 rendering logic과 windowing logic을 분리하는 데 도움이 됩니다. Renderer는 output을 만드는 데 집중하고, Window는 system과의 view/container 역할에 집중합니다. Surface connector는 그 둘 사이의 protocol을 제공합니다.

이 분리가 없다면 renderer는 각 platform window API를 직접 알아야 하고, window는 renderer 내부 구조를 직접 이해해야 할 수 있습니다. Surface connector를 두면 renderer implementation과 window implementation을 더 유연하게 바꿀 수 있습니다.

### Interaction 방향

Bottom-up flow에서도 Surface connector는 역할을 할 수 있습니다. Window가 받은 interaction은 renderer가 이해할 수 있는 coordinate system이나 output context로 변환되어야 할 수 있습니다. Visual window의 mouse position은 renderer의 viewport coordinates로 바뀔 수 있고, audio device event는 renderer의 stream context로 전달될 수 있습니다.

Surface connector는 output이 내려가는 길에서는 rendered data를 window로 전달하고, interaction이 올라오는 길에서는 window context를 renderer가 이해할 수 있게 도울 수 있습니다.

### 핵심

Surface connector는 renderer와 window 사이의 연결입니다. Rendered output이 실제 view나 output path에 놓이도록 하고, window에서 들어오는 context가 renderer와 이어지도록 합니다.
