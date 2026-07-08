<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 4.1 Domains :: Symbolic

## 심층 논의

### 감각에 놓이기 전의 의미

**Symbolic** domain은 아직 특정 감각 채널에 배치되지 않은 정보를 나타냅니다. 이것은 보이거나, 들리거나, 만져지기 전의 데이터입니다. 텍스트 파일, 구성 파일, 마크업, JSON, INI, 바이너리 형식, 명령어, 식별자, 토큰, 문서 구조 같은 것들이 여기에 속할 수 있습니다. 이러한 데이터는 의미를 가질 수 있지만, 그 의미가 아직 사용자에게 어떤 감각 형태로 전달될지는 정해지지 않았습니다.

Symbolic data는 CatalystUI에서 매우 중요합니다. 많은 시스템은 먼저 symbolic 형태로 정보를 저장하거나 설명한 뒤, 나중에 그것을 visual, auditory, tactile 또는 다른 domain으로 변환합니다. 예를 들어 문자열 “Hello”는 화면에 글자로 표시될 수도 있고, 음성 합성을 통해 말해질 수도 있고, 점자로 출력될 수도 있습니다. 같은 정보가 여러 감각적 표현으로 이동할 수 있기 때문에, Model은 감각에 놓이기 전의 단계를 별도의 domain으로 인정합니다.

### 텍스트가 항상 Visual은 아니다

텍스트를 보면 시각적이라고 생각하기 쉽습니다. 하지만 CatalystUI Model에서는 텍스트 그 자체가 반드시 visual인 것은 아닙니다. 텍스트 파일 안에 저장된 문자는 symbolic입니다. 그것이 폰트, 크기, 위치, 색상, 줄바꿈을 갖추고 화면에 놓일 때 비로소 visual 표현이 됩니다. 같은 텍스트가 음성으로 읽히면 auditory가 되고, 점자 디스플레이로 전달되면 tactile이 됩니다.

이 구분은 중요합니다. 데이터의 의미와 데이터의 표현을 분리해 주기 때문입니다. Symbolic domain은 “무엇을 말하고 있는가”에 더 가깝고, visual이나 auditory domain은 “그것이 사용자에게 어떻게 전달되는가”에 더 가깝습니다.

### 왜 Symbolic이 필요한가

Symbolic domain이 없다면 Model은 모든 데이터를 너무 일찍 감각 형태로 묶어 버리게 됩니다. 그러면 같은 데이터가 여러 방식으로 표현될 수 있다는 사실을 설명하기 어려워집니다. 접근성도 약해집니다. 텍스트를 처음부터 visual로만 취급하면, 그 텍스트가 음성이나 점자로도 제공될 수 있다는 가능성을 놓치기 쉽습니다.

Symbolic domain은 정보를 더 유연하게 유지합니다. 데이터는 먼저 의미와 구조로 존재하고, 이후 적절한 connector와 renderer를 통해 특정 감각 경험으로 변환될 수 있습니다.

### Stack 안에서의 Symbolic

Symbolic data는 Stack의 여러 층에서 나타날 수 있습니다. Layer 7의 Digital Data는 symbolic 파일이나 문자열을 담을 수 있습니다. Layer 6의 Structure & Semantics는 symbolic 형식의 규칙과 구조를 해석할 수 있습니다. Layer 5는 그 symbolic 정보를 사용 가능한 components나 controls로 만들 수 있습니다. 그 아래 layers는 connector를 통해 symbolic 정보를 visual, auditory, tactile 등으로 전달할 수 있습니다.

따라서 Symbolic domain은 감각 경험의 “전 단계”로 작동합니다. 그것은 사용자가 직접 느끼는 최종 형태가 아닐 수 있지만, 최종 형태가 만들어지는 데 필요한 의미의 기반입니다.

### 예시

`README.md` 파일은 symbolic data입니다. Markdown 문법은 문서의 제목, 목록, 링크, 강조를 설명하지만, 그것이 실제로 화면에 어떤 글꼴과 간격으로 표시될지는 아직 정하지 않습니다.

`settings.json` 파일도 symbolic data입니다. 사용자가 직접 읽을 수도 있지만, 그 주된 역할은 시스템이 설정 값을 이해하고 나중에 인터페이스로 보여 주거나 동작에 반영할 수 있도록 의미를 담는 것입니다.

텍스트 음성 변환도 좋은 예입니다. 입력 문자열은 symbolic으로 시작하지만, connector와 renderer를 거치면 auditory 출력이 됩니다. 점자 출력으로 변환되면 tactile 출력이 됩니다.

### 핵심

Symbolic domain은 데이터가 아직 특정 감각에 “배치”되지 않은 상태를 설명합니다. 이 domain은 의미와 표현을 분리하고, 같은 정보가 여러 방식으로 사용자에게 전달될 수 있도록 Model에 공간을 만들어 줍니다.
