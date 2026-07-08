<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.8 Stack :: Human Interface

## 심층 논의

### 암시적 끝점, 그리고 시작점

**Human Interface**는 CatalystUI Stack의 아래쪽에 있는 암시적 layer입니다. 이것은 바로 사용자, 즉 정보를 지각하고 interaction을 생성하는 사람입니다. Model은 이 layer를 직접 구현하거나 제어하지 않습니다. 사용자는 software object가 아니기 때문입니다. 그래도 이 layer는 전체 흐름을 이해하는 데 필요합니다.

System이 output을 제공하면 사용자는 그것을 봅니다, 듣습니다, 느낍니다, 냄새 맡습니다, 맛볼 수도 있습니다. 그런 다음 사용자는 어떤 방식으로든 반응할 수 있습니다. 그 반응이 interaction data가 되어 Stack을 다시 위쪽으로 올라갑니다.

### Interface는 사용자를 향한다

CatalystUI는 사용자 인터페이스를 인간과 정보 시스템 사이의 communication으로 봅니다. 그렇다면 최종적으로 interface가 향하는 곳은 사람입니다. Digital Data가 아무리 깔끔하고, components가 아무리 잘 정리되어 있고, renderer가 아무리 빠르더라도, 사용자가 정보를 이해하거나 반응할 수 없다면 interface는 제 역할을 다하지 못합니다.

Human Interface layer는 이 사실을 계속 상기시킵니다. Model의 목적은 computer 내부의 구조를 멋지게 나누는 것만이 아니라, 그 구조가 사람에게 meaningful experience로 도달하도록 설명하는 것입니다.

### 사용자는 Output을 지각한다

Top-down flow의 끝에서 사용자는 perceivable data를 받습니다. 화면의 text, speaker의 sound, controller의 vibration, 알림 light, 향, 물리적 움직임 등 어떤 형태든 사용자가 그것을 감각으로 받아들이면 output은 Human Interface에 도달한 것입니다.

이 지점에서 정보는 단순한 data가 아니라 experience가 됩니다. 사용자는 그것을 해석하고, 판단하고, 무시하거나, 기억하거나, 반응합니다.

### 사용자는 Interaction을 만든다

Bottom-up flow의 시작에서 사용자는 interaction을 만듭니다. 클릭, 키 입력, 말하기, touch, gesture, walking motion, button press 등은 모두 사용자의 의도가 system으로 들어가는 방법이 될 수 있습니다.

중요한 것은 사용자의 행동을 시스템이 어떤 의미로 받아들이는가입니다. 같은 손동작도 context에 따라 선택, 이동, 취소, 공격, 확대, 무시 등 다른 interaction이 될 수 있습니다.

### 인간을 위해 설계됨

CatalystUI Stack은 인간을 위해 설계되었습니다. 다른 생명체나 존재가 어떤 방식으로든 system과 상호작용할 수 있을지도 모르지만, 이 Model은 기본적으로 우리가 가진 감각, 인지, 의도, 행동을 기준으로 설명됩니다.

물론 고양이가 키보드 위를 걸어가면 interaction data가 생기기는 합니다. 시스템은 분명히 뭔가 입력을 받을 겁니다. 하지만 그게 의미 있는 user intent였는지는… 글쎄요. 고양이 쪽에서는 아주 진지한 system administration이었을지도 모르죠.

그래도 키보드는 보호해 두는 편이 좋습니다. 고양이에게 이 정도 권한을 주면 금방 머리에 올라갈 수 있습니다. 그리고 일단 그렇게 되면 막기가 어렵습니다.

시도는 해 볼 수 있겠지만요. 행운을 빕니다.

새로운 고양이 군주들께 영광을.

### 핵심

Human Interface는 사용자가 정보를 지각하고 interaction을 만드는 암시적 layer입니다. CatalystUI는 이 layer를 직접 구현하지 않지만, 모든 interface flow가 결국 사람에게 도달하고 사람에게서 다시 시작된다는 사실을 Model 안에 분명히 남깁니다.
