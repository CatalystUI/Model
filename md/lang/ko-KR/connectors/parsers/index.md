<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 6.2 Connectors :: Parser

## 심층 논의

### 의미에서 사용으로

**Parser** connector는 **Layer 6: Structure & Semantics**와 **Layer 5: Components, Controls, & Layouts** 사이에 위치합니다. 이 connector는 interpreted information을 usable interface objects로 바꾸는 역할을 합니다. Structure가 data의 의미를 설명한다면, Parser는 그 의미를 사용자가 다룰 수 있는 components, controls, layouts로 만들어 줍니다.

Layer 6은 data가 무엇인지 이해하게 해 줍니다. 그러나 parsed structure가 있다고 해서 곧바로 interface가 생기는 것은 아닙니다. Document structure가 있다고 해서 editor가 자동으로 만들어지지 않고, settings structure가 있다고 해서 toggle과 slider가 자동으로 나타나지 않습니다. Parser connector가 그 사이의 전환을 담당합니다.

### Instruction에서 Reality로

Parser는 “무엇이 있어야 하는가”를 “무엇이 실제로 존재하는가”로 바꿉니다. Semantic이 button을 설명하고 structure가 button data를 포함한다면, Parser는 Layer 5에서 사용할 button component나 button control을 만들 수 있습니다. Text document structure는 text component, paragraph layout, editing control로 변환될 수 있습니다.

이때 Parser는 단순히 data를 복사하는 것이 아닙니다. It must decide how interpreted information should become mutable interface objects. 같은 structure라도 editing mode, preview mode, printing mode에 따라 다른 components로 parse될 수 있습니다.

### Mutable Interface Objects

Layer 6의 structure는 보통 immutable snapshot입니다. Layer 5의 components는 mutable합니다. Parser connector는 이 차이를 존중해야 합니다. Parsed object는 original structure의 meaning을 보존해야 하지만, user interaction을 처리할 수 있도록 상태와 behavior를 가진 object가 되어야 합니다.

예를 들어 configuration structure의 value는 immutable parsed data일 수 있습니다. Parser는 이를 checkbox, slider, dropdown, text field 같은 controls로 만들 수 있습니다. 사용자가 control을 조작하면 그 변경은 나중에 structure와 Digital Data로 돌아갈 수 있습니다.

### Layout 만들기

Parser는 components뿐 아니라 layouts도 만들 수 있습니다. Structure가 items의 순서나 grouping을 설명한다면 Parser는 그 정보를 사용해 vertical layout, grid layout, audio collection layout 등을 만들 수 있습니다. Layout은 components가 어떻게 arranged되어야 하는지를 표현합니다.

그러나 Parser가 graph 전체의 context를 담당하는 것은 아닙니다. 그것은 Adapter와 Layer 4의 역할입니다. Parser는 usable pieces를 만들고, Adapter는 그 pieces를 organized context에 넣습니다.

### 의미 보존

Parser connector는 original structure의 intent를 보존해야 합니다. Button으로 표시되어야 할 data가 unrelated image로 변하면 meaning이 손실됩니다. Required field가 optional처럼 만들어지면 semantic contract가 약해집니다. Parser는 interface를 human-friendly하게 만들 수 있지만, data가 원래 가진 의미를 흐리면 안 됩니다.

### 핵심

Parser connector는 interpreted structure를 mutable interface objects로 변환합니다. Structure & Semantics는 data를 이해하게 하고, Components, Controls, & Layouts는 그 data를 사용하고 조작할 수 있게 합니다. Parser는 그 두 세계 사이에서 의미를 실제 interface로 옮기는 connector입니다.
