<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 4.5 Domains :: Olfactory

## 심층 논의

### 냄새로 지각되는 정보

**Olfactory** domain은 후각을 통해 지각되도록 만들어진 정보를 나타냅니다. 냄새, 향, 화학적 신호, 향 분사 장치, 환경적 냄새 출력 등이 여기에 속할 수 있습니다. 현대 컴퓨팅에서 흔한 domain은 아니지만, CatalystUI Model은 사용자 인터페이스를 특정 장치나 현재의 관습에만 제한하지 않기 때문에 olfactory domain도 포함합니다.

후각은 정보를 전달할 수 있습니다. 특정 냄새는 위험, 상태 변화, 위치, 기억, 분위기, 경험의 일부를 나타낼 수 있습니다. 예를 들어 훈련 시뮬레이터는 연기 냄새를 사용하여 화재 상황을 더 명확히 전달할 수 있고, 실험적 인터페이스는 특정 향을 사용해 알림이나 환경 변화를 표현할 수 있습니다.

### 드물지만 불가능하지 않다

Olfactory interface는 일반적인 데스크톱 앱이나 웹사이트에서는 거의 사용되지 않습니다. 하지만 Model은 현재 가장 흔한 것만 설명하려고 만들어진 것이 아닙니다. Model은 인간과 정보 시스템 사이에서 정보가 어떻게 전달되는지를 설명합니다. 사람이 냄새를 지각할 수 있고, 시스템이 냄새를 출력하거나 감지할 수 있다면, 그 상호작용은 Model 안에 자리를 가져야 합니다.

이 점이 CatalystUI의 중요한 특징입니다. Model은 기존 GUI 관습에 갇히지 않고, 가능한 사용자 경험의 전체 범위를 설명하려고 합니다.

### Stack 안에서의 Olfactory

Layer 5에서는 scent component가 특정 향, 강도, 지속 시간, 순서를 표현할 수 있습니다. Layer 4에서는 여러 scent component가 graph나 frame 안에서 정리되어 특정 경험의 일부가 될 수 있습니다. Layer 3의 renderer는 이를 실제 향 분사 장치나 화학 출력 장치가 이해할 수 있는 명령으로 변환할 수 있습니다. Layer 2의 window는 olfactory 출력 장치로 향하는 view 역할을 하고, Layer 1의 system은 실제 hardware를 제어합니다.

반대 방향도 생각할 수 있습니다. 센서가 냄새나 화학적 변화를 감지하면, system은 이를 interaction data로 전달하고 higher layers에서 의미를 해석할 수 있습니다.

### Symbolic에서 Olfactory로

Olfactory output은 symbolic data에서 시작될 수 있습니다. “fire”, “warning”, “forest”, “coffee” 같은 symbolic state나 label이 특정 향 출력으로 매핑될 수 있습니다. 중요한 것은 데이터가 어떤 감각 형태로 사용자에게 전달되는가입니다. 텍스트나 상태 값이 향으로 표현되면 olfactory domain에 들어갑니다.

### 예시

소방 훈련 시뮬레이터가 연기 냄새를 출력한다면, 그 냄새는 상황 정보를 전달하는 olfactory output입니다.

가상현실 환경에서 숲 장면과 함께 나무나 흙 냄새를 출력하면, 경험은 visual과 auditory를 넘어 olfactory domain까지 포함할 수 있습니다.

산업 장비가 위험한 화학 물질을 감지하고 경고 향을 발생시킨다면, 시스템은 후각을 통해 사용자에게 정보를 전달하는 것입니다.

### 핵심

Olfactory domain은 냄새를 통해 지각되도록 의도된 정보를 설명합니다. 흔하지 않더라도, 후각은 인간이 정보를 받을 수 있는 감각이므로 CatalystUI Model 안에서 정당한 domain입니다.
