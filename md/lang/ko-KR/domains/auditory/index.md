<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 4.3 Domains :: Auditory

## 심층 논의

### 들리도록 만들어진 정보

**Auditory** domain은 청각을 통해 지각되도록 만들어진 정보를 나타냅니다. 음악, 음성, 효과음, 알림음, 녹음, 합성 음성, 오디오 스트림, 공간 음향 등이 여기에 속합니다. 정보가 사용자의 귀로 전달되도록 만들어졌다면, 그 정보는 auditory domain에 참여합니다.

Auditory domain은 사용자 인터페이스를 visual 중심으로만 생각하는 습관을 깨는 데 중요합니다. 많은 시스템은 소리를 통해 사용자에게 상태, 경고, 성공, 실패, 위치, 리듬, 분위기를 전달합니다. 화면을 보지 않고도 알림음을 듣고 메시지가 왔음을 알 수 있고, 음성 안내를 듣고 다음 행동을 이해할 수 있습니다.

### 소리도 인터페이스다

소리는 단순한 장식이 아닙니다. 소리는 정보를 전달합니다. 오류음은 사용자의 행동이 거부되었음을 알려 줄 수 있고, 시작음은 시스템이 준비되었음을 알려 줄 수 있으며, 음성 합성은 텍스트 정보를 읽어 줄 수 있습니다. 게임의 발소리는 다른 대상의 위치를 암시할 수 있고, 내비게이션 음성은 사용자의 다음 움직임을 안내합니다.

이런 경우 auditory data는 사용자와 시스템 사이의 대화에 직접 참여합니다. CatalystUI Model은 이러한 소리 기반 상호작용도 사용자 인터페이스의 일부로 취급합니다.

### Symbolic에서 Auditory로

Auditory 출력도 symbolic data에서 시작될 수 있습니다. 텍스트는 음성 합성을 통해 소리로 변환될 수 있습니다. 악보나 MIDI 데이터는 음악으로 렌더링될 수 있습니다. 알림 상태나 오류 코드는 특정 소리로 매핑될 수 있습니다.

중요한 점은 입력 데이터가 원래 소리가 아니어도 auditory domain으로 이동할 수 있다는 것입니다. Connector와 renderer가 정보를 청각적으로 표현하면, 사용자는 그 정보를 들을 수 있습니다.

### Stack 안에서의 Auditory

Layer 5에서는 오디오 component가 `Play()`, `Pause()`, `Stop()`, `Seek()` 같은 동작을 제공할 수 있습니다. Layer 4에서는 audio graph가 여러 소리를 정리하고, 볼륨, 우선순위, 재생 순서, 믹싱 환경을 관리할 수 있습니다. Layer 3의 renderer는 오디오 데이터를 waveform이나 출력 스트림으로 변환합니다. Layer 2의 window는 visual window가 아닐 수도 있습니다. auditory window는 오디오 출력 장치로 향하는 view 역할을 할 수 있습니다. Layer 1의 system은 오디오 드라이버와 speaker를 통해 perceivable output을 전달합니다.

반대 방향으로는 microphone 입력, 음성 명령, 박수, 버튼 소리 같은 interaction이 auditory domain에서 시작될 수 있습니다. 시스템은 이를 처리하여 higher layers로 전달하고, control은 그 의도에 반응할 수 있습니다.

### 접근성과 Auditory

Auditory domain은 접근성에서도 큰 역할을 합니다. 화면을 보기 어려운 사용자는 스크린 리더와 음성 안내를 통해 정보를 받을 수 있습니다. 반대로 청각 정보를 사용할 수 없는 사용자에게는 같은 정보를 visual 또는 tactile domain으로 제공해야 할 수 있습니다. CatalystUI Model은 domain을 명확히 구분함으로써 어떤 정보가 어떤 감각에만 의존하고 있는지 더 쉽게 확인하게 해 줍니다.

### 예시

스마트 스피커는 auditory domain을 중심으로 동작합니다. 사용자는 말을 하고, 시스템은 음성으로 답합니다. 화면이 없어도 완전한 interface가 될 수 있습니다.

음악 앱은 오디오 파일을 digital data로 읽고, structure와 component를 통해 제어 가능한 음악으로 만들며, renderer를 통해 audible output으로 변환합니다.

알림음은 작은 예이지만 중요한 예입니다. 사용자는 화면을 보지 않아도 소리를 듣고 시스템 상태가 바뀌었음을 알 수 있습니다.

### 핵심

Auditory domain은 들리도록 의도된 정보를 설명합니다. CatalystUI에서 소리는 보조 장식이 아니라, 정보를 전달하고 interaction을 가능하게 하는 정당한 사용자 인터페이스 domain입니다.
