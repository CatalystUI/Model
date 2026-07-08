<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 8. Reference

## 한눈에 보기

이 reference는 CatalystUI Model의 주요 부분을 빠르게 떠올릴 수 있도록 정리한 것입니다. 더 자세한 설명은 각 섹션의 심층 문서를 참고하십시오.

## Model 요약

CatalystUI Model은 **Digital Data**를 **Perceivable Data**로 변환하고, **Interaction Data**를 다시 **Digital Data**로 변환하는 전체 과정을 설명합니다. 이 Model은 사용자가 정보 시스템과 interface할 때 암시적으로 맺는 계약을 식별하고 표현합니다.

Model은 세 가지 주요 범주로 나뉩니다.

- **Domains** — 데이터를 분류합니다.
- **The Stack** — 데이터를 설명하고 표현합니다.
- **Connectors** — 데이터를 변환하고 전달합니다.

## The Stack

```md
[암시적] Data Storage
  ↓
Layer 7: Digital Data
  ↓ Data connector
Layer 6: Structure & Semantics
  ↓ Parser connector
Layer 5: Components, Controls, & Layouts
  ↓ Adapter connector
Layer 4: Graphs & Frames
  ↓ Bridge connector
Layer 3: Renderers
  ↓ Surface connector
Layer 2: Windows
  ↓ NativeHandler connector
Layer 1: Systems
  ↓
[암시적] Human Interface
```

### Stack Layers

1. **Data Storage** — Digital Data의 producer이자 Interaction Data 결과가 저장될 수 있는 암시적 위치입니다.
2. **Layer 7: Digital Data** — raw computer-readable information을 나타냅니다.
3. **Layer 6: Structure & Semantics** — data를 rules와 structures에 따라 해석합니다.
4. **Layer 5: Components, Controls, & Layouts** — mutable, usable, interactive interface objects를 제공합니다.
5. **Layer 4: Graphs & Frames** — components를 organized context에 배치하고 bounds와 routing을 준비합니다.
6. **Layer 3: Renderers** — interface data를 perceivable output으로 변환합니다.
7. **Layer 2: Windows** — rendered output과 system 사이의 view 또는 container 역할을 합니다.
8. **Layer 1: Systems** — hardware, OS, platform services를 통해 input/output을 처리합니다.
9. **Human Interface** — output을 지각하고 interaction을 생성하는 사용자입니다.

## Connectors

1. **Data** — Layer 7과 Layer 6 사이에서 Digital Data를 interpreted structure로 연결합니다.
2. **Parser** — Layer 6과 Layer 5 사이에서 structures를 components, controls, layouts로 변환합니다.
3. **Adapter** — Layer 5와 Layer 4 사이에서 usable interface objects를 graph/frame context로 배치합니다.
4. **Bridge** — Layer 4와 Layer 3 사이에서 organized context를 renderer-ready data로 전달합니다.
5. **Surface** — Layer 3과 Layer 2 사이에서 rendered output을 window/view context로 전달합니다.
6. **NativeHandler** — Layer 2와 Layer 1 사이에서 window와 native system services를 연결합니다.

## Domains

1. **Symbolic** — 특정 감각에 아직 배치되지 않은 pre-placement data입니다. 예: text, configuration, markup, binary formats.
2. **Visual** — 시각을 통해 지각되도록 만들어진 data입니다. 예: images, video, rendered text, graphics.
3. **Auditory** — 청각을 통해 지각되도록 만들어진 data입니다. 예: speech, music, sound effects.
4. **Tactile** — 촉각을 통해 지각되도록 만들어진 data입니다. 예: haptics, vibration, braille.
5. **Olfactory** — 후각을 통해 지각되도록 만들어진 data입니다. 예: scent output.
6. **Gustatory** — 미각을 통해 지각되도록 만들어진 data입니다. 예: flavor output.
7. **Multisensory** — 여러 감각이 하나의 통합된 experience로 함께 작동하는 data입니다.

## Reversible Flow

Top-down flow에서는 Digital Data가 Structure & Semantics, Components, Graphs, Renderers, Windows, Systems를 거쳐 Human Interface가 지각할 수 있는 output이 됩니다.

Bottom-up flow에서는 사용자의 interaction이 System에서 시작되어 Window, Renderer context, Graphs & Frames, Components/Controls를 거쳐 Digital Data를 수정하거나 저장 가능한 형태로 돌아갑니다.

## 짧은 AI Prompt용 요약

```md
CatalystUI Model은 user interface를 인간과 정보 시스템 사이의 정보 흐름으로 설명한다. Model은 Domains, Stack, Connectors로 구성된다. Domains는 data의 sensory category를 분류한다. Stack은 Data Storage, Digital Data, Structure & Semantics, Components/Controls/Layouts, Graphs & Frames, Renderers, Windows, Systems, Human Interface를 통해 data가 어떻게 표현되고 이동하는지 설명한다. Connectors는 인접한 layers 사이에서 data를 변환한다: Data, Parser, Adapter, Bridge, Surface, NativeHandler. Model은 reversible하며, Digital Data를 Perceivable Data로 만들고 Interaction Data를 다시 Digital Data로 되돌리는 과정을 설명한다.
```
