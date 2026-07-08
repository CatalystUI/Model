<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 6.6 Connectors :: Native

## In-Depth Discussion

### From Windows to Systems

Ang **Native** connector ay nasa pagitan ng **Layer 2: Windows** at **Layer 1: Systems**. Tungkulin nitong ikonekta ang window sa underlying system upang maihatid ang output at matanggap ang interactions sa tunay na environment kung saan tumatakbo ang program.

### Defining Bindings

Mahalagang salita rito ang **bindings**. Ang Native connector ay nagbibigay ng bindings sa system capabilities: window creation, input events, device access, platform services, permissions, timers, clipboard, display behavior, audio devices, at iba pang native functionality.

### Providing Native Access

Hindi kailangang direktang kausapin ng buong Stack ang operating system o platform. Sa halip, nagbibigay ang Native connector ng controlled access. Pinapanatili nitong malinaw kung saan nagtatapos ang Model abstraction at saan nagsisimula ang platform-specific behavior.

### More Than a Wrapper

Hindi lang simpleng wrapper ang Native connector. Maaari nitong i-normalize ang behavior, magtago ng platform differences, magbigay ng safe abstractions, at mapanatili ang parehong Model kahit iba-iba ang actual systems.

### Creating and Maintaining the Window

Kadalasang dito nangyayari ang creation, maintenance, resizing, focus handling, lifecycle events, at destruction ng window. Ang window abstraction ay maaaring pareho sa Model, ngunit ang native implementation ay magbabago depende sa platform.

### Receiving Interactions

Sa bottom-up flow, unang nanggagaling sa System ang input. Ang Native connector ang tumatanggap o nagbi-bind sa native events at nagpapasa ng relevant information sa Window layer.

### Preserving the Boundary

Pinapanatili nitong hiwalay ang system-specific code mula sa mas mataas na interface logic. Kapag malinaw ang boundary, mas madaling gumawa ng cross-platform implementation nang hindi ikinakalat ang native details sa buong codebase.

### Why the Connector Matters

Ang Native connector ang lugar kung saan hinaharap ng Model ang tunay na mundo ng platforms, devices, at operating systems. Kung maayos ang bindings, mas malinis ang natitirang Stack.
