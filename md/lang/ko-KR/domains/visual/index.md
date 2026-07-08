<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 4.2 Domains :: Visual

## 심층 논의

### 보이도록 만들어진 정보

**Visual** domain은 시각을 통해 지각되도록 만들어진 정보를 나타냅니다. 이미지, 비디오, 그래픽, 색상, 글리프, 화면 배치, 창 안의 픽셀, 차트, 아이콘, 애니메이션 등이 여기에 속합니다. 정보가 눈으로 인식되도록 배치되고 전달될 때, 그 정보는 visual domain에 참여합니다.

Visual data는 현대 사용자 인터페이스에서 가장 익숙한 형태입니다. 대부분의 사람은 “UI”라고 하면 버튼, 창, 메뉴, 텍스트 상자, 아이콘을 떠올립니다. 하지만 CatalystUI는 visual을 사용자 인터페이스의 전부로 보지 않습니다. Visual은 여러 domain 중 하나일 뿐입니다. 중요한 점은 visual domain이 정보를 시각적으로 전달하는 방식이라는 것입니다.

### Symbolic에서 Visual로

많은 visual 출력은 symbolic data에서 시작됩니다. 텍스트 파일, 문서 구조, SVG 경로, UI 선언, 레이아웃 정보는 모두 처음에는 감각 중립적인 정보일 수 있습니다. Renderer가 이를 글자, 모양, 색상, 위치, 픽셀로 변환할 때 visual domain이 나타납니다.

예를 들어 “Submit”이라는 문자열은 그 자체로 symbolic입니다. 버튼 위에 특정 폰트와 색상으로 배치되면 visual이 됩니다. 같은 문자열이 스크린 리더로 읽히면 auditory가 될 수 있습니다. 이처럼 CatalystUI는 데이터가 어떤 감각 경험으로 변환되었는지를 기준으로 domain을 판단합니다.

### Visual은 픽셀만이 아니다

Visual domain을 단순히 픽셀로만 이해하면 너무 좁습니다. 픽셀은 시각 정보를 전달하는 한 방식이지만, visual domain은 사용자가 시각적으로 인식하는 모든 형태를 포함합니다. 벡터 그래픽, 3D 장면, 텍스트 렌더링, 화면 전환, 색상 대비, 공간적 배치도 모두 visual experience에 속합니다.

즉 visual domain은 “GPU가 무엇을 그렸는가”만이 아니라 “사용자가 무엇을 보도록 의도되었는가”를 설명합니다. 이것은 접근성과 설계 품질을 판단할 때 중요합니다. 정보가 시각적으로만 전달된다면, 시각 장애가 있거나 화면을 볼 수 없는 사용자를 위해 다른 domain으로도 전달할 방법을 고려해야 할 수 있습니다.

### Stack 안에서의 Visual

Visual data는 Stack의 아래쪽으로 갈수록 더 구체적인 형태가 됩니다. Layer 5에서는 visual component가 크기, 색상, 위치 같은 속성을 가질 수 있습니다. Layer 4에서는 graph와 frame이 그 component들의 관계와 경계를 정리합니다. Layer 3의 renderer는 이를 실제 시각 출력으로 변환합니다. Layer 2의 window는 그 출력이 놓일 viewport를 제공하고, Layer 1의 system은 display hardware를 통해 사용자가 볼 수 있게 합니다.

이 과정은 반대로도 작동합니다. 사용자가 화면의 특정 위치를 클릭하면, system과 window는 그 interaction을 Stack 위쪽으로 전달합니다. frame과 graph는 어떤 component가 관련 있는지 판단하고, 해당 control이 interaction에 반응합니다.

### 예시

이미지 뷰어에서 JPEG 파일은 처음에는 digital data입니다. 파일 구조가 해석되고, 이미지 component가 만들어지고, renderer가 픽셀로 변환하면 visual output이 됩니다.

게임 화면은 여러 visual 요소가 결합된 예입니다. 3D 모델, 조명, 텍스처, UI overlay, 색상 효과가 함께 사용자의 시각 경험을 구성합니다.

텍스트 편집기의 문서도 visual domain에 참여합니다. 문서의 내용은 symbolic이지만, 화면에 글자와 줄, 커서, 선택 영역으로 표시되면 visual이 됩니다.

### 핵심

Visual domain은 보이도록 의도된 정보를 설명합니다. CatalystUI에서 visual은 매우 중요하지만 유일한 interface 방식은 아닙니다. Visual은 symbolic 의미가 눈으로 지각 가능한 형태로 변환된 하나의 domain입니다.
