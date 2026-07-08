<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 6.6 Connectors :: NativeHandler

## 심층 논의

### Window에서 System으로

**NativeHandler** connector는 **Layer 2: Windows**와 **Layer 1: Systems** 사이에 위치합니다. 이 connector는 window나 view가 underlying system과 통신할 수 있게 합니다. 여기에는 operating system APIs, platform services, hardware devices, drivers, native events가 포함될 수 있습니다.

NativeHandler는 Stack이 실제 platform과 만나는 지점입니다. Higher layers는 interface meaning, organization, rendering에 집중할 수 있고, NativeHandler는 system-specific details를 처리합니다.

### Platform-Specific Reality

모든 platform은 다릅니다. Windows, macOS, Linux, Android, iOS, browser, embedded system은 window creation, event delivery, display handling, audio output, input devices, permissions, lifecycle을 서로 다른 방식으로 제공합니다. NativeHandler connector는 이러한 차이를 CatalystUI Stack의 나머지 부분에서 직접 감당하지 않게 해 줍니다.

예를 들어 visual window를 만들 때 Win32, Cocoa, Wayland, X11, SDL, GLFW 같은 APIs가 사용될 수 있습니다. Higher layers는 “window”라는 concept를 다루지만, NativeHandler는 그 concept를 실제 platform behavior와 연결합니다.

### Output과 Input

Top-down flow에서 NativeHandler는 window가 system services를 사용해 output을 device로 전달하도록 돕습니다. Visual output은 display system으로, audio output은 audio driver로, tactile output은 haptic device로 이어질 수 있습니다.

Bottom-up flow에서 NativeHandler는 system에서 발생한 events를 window로 전달합니다. Keyboard input, pointer movement, touch, window resize, focus changes, device connection, sensor events 등이 이에 해당합니다. NativeHandler는 native event를 Stack이 사용할 수 있는 형태로 전달할 수 있습니다.

### Native Details를 격리하기

NativeHandler의 핵심 가치 중 하나는 native details를 격리하는 것입니다. Application이 모든 operating system API를 직접 처리해야 한다면 portability와 clarity가 크게 떨어집니다. NativeHandler가 system-specific layer를 맡으면, 나머지 Model은 더 stable하고 domain-oriented한 형태로 유지될 수 있습니다.

이것은 native APIs가 중요하지 않다는 뜻이 아닙니다. 오히려 매우 중요하기 때문에 명확한 위치에 두는 것입니다. NativeHandler는 platform과의 실질적 connection을 담당하지만, interface meaning을 system API 안에 묻어버리지 않습니다.

### Specialized Systems

NativeHandler는 desktop operating systems뿐 아니라 embedded systems, kiosks, game consoles, wearable devices, custom hardware에도 적용될 수 있습니다. 각 system은 고유한 native interface를 갖고 있을 수 있으며, NativeHandler는 그 interface를 CatalystUI Stack에 연결합니다.

### 핵심

NativeHandler connector는 Window와 System 사이의 native boundary를 처리합니다. Platform-specific APIs와 hardware services를 Stack에 연결하면서, higher-level interface model이 그 details에 불필요하게 묶이지 않도록 돕습니다.
