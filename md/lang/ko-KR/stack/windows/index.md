<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.6 Stack :: Layer 2 — Windows

## 심층 논의

### System으로 향하는 View

**Layer 2: Windows**는 renderer와 system 사이의 view 또는 container 역할을 합니다. 전통적으로 window라고 하면 Windows, macOS, Linux desktop에서 볼 수 있는 graphical window를 떠올립니다. 그러나 CatalystUI에서 window는 visual domain에만 제한되지 않습니다. Window는 어떤 domain에서든 rendered output이 system을 통해 사용자에게 전달되는 통로가 될 수 있습니다.

Visual application에서는 window가 화면에 표시되는 bounded area일 수 있습니다. Command-line interface에서는 text-only window나 terminal view가 될 수 있습니다. Audio-only system에서는 auditory window가 speaker output으로 향하는 view처럼 작동할 수 있습니다.

### Window는 Output의 장소를 제공한다

Renderer가 output을 준비하더라도, 그 output이 어디로 전달되어야 하는지에 대한 context가 필요합니다. Window는 이 context를 제공합니다. Visual renderer는 drawing commands를 window surface에 전달할 수 있고, audio renderer는 output stream을 auditory window context에 전달할 수 있습니다.

Window는 bounds, focus, lifecycle, resizing, visibility, device association 같은 정보를 제공할 수 있습니다. Visual window는 크기와 위치를 갖고, user input focus를 받을 수 있으며, display surface를 제공합니다. 다른 domain의 window도 자기 domain에 맞는 equivalent context를 가질 수 있습니다.

### System과의 경계

Window는 Layer 1 System과 가까운 layer입니다. 많은 경우 window는 operating system이나 platform library가 제공하는 API로 표현됩니다. GLFW, SDL, Win32, Cocoa, Wayland, Android view, browser window 같은 것들이 상황에 따라 Layer 2의 역할을 할 수 있습니다.

이 layer는 platform-specific details와 CatalystUI의 higher-level model 사이에 중요한 경계를 제공합니다. Higher layers는 interface의 meaning과 organization에 집중하고, Window와 NativeHandler connector는 system-specific behavior를 처리합니다.

### Interaction의 입구

Window는 output뿐 아니라 input에서도 중요합니다. 사용자가 key를 누르거나 pointer를 움직이거나 touch를 하면, system은 보통 그 interaction을 특정 window나 view에 연결합니다. 그러면 Window layer는 interaction을 Stack 위쪽으로 전달할 수 있습니다.

즉 Window는 output이 내려가는 길의 container이자, interaction이 올라오는 길의 입구입니다.

### Window는 반드시 그래픽일 필요가 없다

CatalystUI에서 가장 중요한 점은 window를 “화면에 보이는 사각형”으로만 보지 않는 것입니다. Window는 system과 rendered output 사이의 view입니다. 따라서 visual output이 없는 embedded device, audio-only interface, tactile-only device에서도 window-like layer를 정의할 수 있습니다.

이 관점은 Model을 특정 운영체제의 창 개념에 묶지 않고, 더 넓은 information-system interaction으로 확장합니다.

### 핵심

Window layer는 renderer와 system 사이에서 output과 interaction이 지나는 view 또는 container입니다. 전통적인 graphical window를 포함하지만, CatalystUI에서는 어떤 domain에도 적용될 수 있는 더 넓은 개념입니다.
