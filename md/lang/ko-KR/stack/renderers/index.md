<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.5 Stack :: Layer 3 — Renderers

## 심층 논의

### 지각 가능한 출력으로 변환하는 곳

**Layer 3: Renderers**는 organized interface data를 사용자가 지각할 수 있는 output으로 변환하는 layer입니다. Visual renderer는 shapes, text, images, scenes를 화면에 그릴 수 있습니다. Auditory renderer는 audio graph를 sound output으로 만들 수 있습니다. Tactile renderer는 haptic instructions를 vibration이나 force feedback으로 변환할 수 있습니다.

CatalystUI에서 renderer는 visual graphics에만 제한되지 않습니다. Rendering은 data를 perceivable form으로 바꾸는 일반적인 과정입니다. 그래서 renderer는 domain에 따라 다양하게 존재할 수 있습니다.

### Rendering은 의미를 표시하는 과정

Renderer는 Layer 4에서 준비된 graph와 frame data를 받아, lower layers가 실제 device로 전달할 수 있는 form으로 바꿉니다. 이 과정에서 renderer는 components의 properties, relationships, bounds, ordering, state를 고려할 수 있습니다.

Visual renderer는 rectangle을 pixels나 draw commands로 바꿀 수 있습니다. Audio renderer는 music graph를 mixed waveform으로 바꿀 수 있습니다. Haptic renderer는 vibration component를 device-specific pattern으로 바꿀 수 있습니다.

중요한 것은 renderer가 high-level interface meaning을 device output에 가까운 representation으로 옮긴다는 점입니다.

### Renderer는 전체 UI가 아니다

Renderer가 중요하다고 해서 renderer가 interface 전체를 소유하는 것은 아닙니다. Renderer는 components를 생성하거나 data semantics를 정의하거나 storage를 직접 관리하지 않습니다. 그 책임은 higher layers에 있습니다. Renderer는 prepared information을 perceivable output으로 변환하는 데 집중합니다.

이 분리는 CatalystUI의 핵심입니다. 렌더링 기술을 바꾸더라도 higher-level model이 유지될 수 있습니다. 예를 들어 OpenGL renderer를 Vulkan renderer로 바꾸거나, visual renderer 대신 auditory renderer를 사용할 수 있습니다. Connector가 의미를 보존하면 interface structure 자체는 더 안정적으로 남을 수 있습니다.

### Domain에 따른 Renderers

Visual domain에서는 renderer가 GPU, canvas, graphics API, text shaping, image compositing을 사용할 수 있습니다. Auditory domain에서는 audio engine, mixer, synthesizer, stream output을 사용할 수 있습니다. Tactile domain에서는 haptic API나 device driver 명령을 사용할 수 있습니다.

Olfactory나 gustatory domain에서도 이론적으로 renderer는 scent output 또는 flavor output 장치가 이해할 수 있는 command를 생성할 수 있습니다. 흔한 예는 아니지만 Model은 이 가능성을 배제하지 않습니다.

### Interaction 방향

Renderer는 output만 다루는 것처럼 보일 수 있지만, bottom-up flow에서도 역할을 할 수 있습니다. 어떤 interaction은 renderer가 이해하는 coordinate, hit region, transformed bounds, key mapping, audio recognition context를 통해 해석될 수 있습니다. Renderer는 interaction을 최종적으로 처리하는 layer는 아니지만, higher layers가 interaction을 올바르게 이해하도록 필요한 변환이나 routing 정보를 제공할 수 있습니다.

### 핵심

Renderer layer는 interface data를 perceivable output으로 변환합니다. CatalystUI에서 rendering은 graphics에만 국한되지 않으며, 어떤 domain이든 사용자가 지각할 수 있는 형태로 data를 바꾸는 과정입니다.
