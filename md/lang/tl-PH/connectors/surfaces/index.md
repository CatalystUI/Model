<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 6.5 Connectors :: Surface

## In-Depth Discussion

### From Rendering to Delivery

Ang **Surface** connector ay nasa pagitan ng **Layer 3: Renderers** at **Layer 2: Windows**. Tungkulin nitong dalhin ang rendered output mula renderer papunta sa window, kung saan mailalagay ang output sa bounded context na ibinibigay ng system.

### The Rendered Area

Sa visual domain, maaaring literal na surface ang iniisip: framebuffer, swapchain, canvas, o drawing area. Ngunit sa Model, mas malawak ang kahulugan. Ang surface ay anumang crossing point kung saan inihahatid ang rendered output sa window context.

### More Than a Final Image

Hindi palaging final image ang surface. Maaaring audio buffer ito, haptic output channel, command stream, o ibang rendered result depende sa domain. Ang mahalaga ay ito ang connector mula rendered form patungo sa delivery boundary.

### Passing Interactions Back Up

Sa reverse flow, maaaring magkaroon ng information mula window na kailangang ibalik sa renderer: size changes, pointer coordinates, focus state, device context, o input channel details. Ang Surface connector ang natural na lugar para sa ganitong translation.

### Keeping the Window Separate

Pinapanatili ng Surface na hiwalay ang renderer sa window implementation. Hindi kailangang malaman ng renderer ang lahat ng native window details; kailangan lang nitong maihatid ang output sa surface na kayang tanggapin ng window.

### Preserving Output

Mahalaga ang connector na ito para hindi masira ang rendered result. Kung mali ang surface size, format, timing, buffer, o channel, maaaring mali ang maranasan ng user kahit tama ang rendering logic.

### Why the Connector Matters

Ang Surface ang huling technical crossing bago pumasok ang output sa bounded window context. Ginagawa nitong malinaw ang boundary sa pagitan ng conversion at delivery.
