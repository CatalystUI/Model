<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 6.4 Connectors :: Bridge

## In-Depth Discussion

### From Context to Rendering

Ang **Bridge** connector ay nasa pagitan ng **Layer 4: Graphs & Frames** at **Layer 3: Renderers**. Tungkulin nitong dalhin ang organized interface data mula graph at frame papunta sa renderer, kung saan magsisimula ang conversion patungo sa perceivable output.

### Carrying the Frame Forward

Ang frame ay may prepared context: bounds, order, state, relationships, at kung ano ang kailangang ipakita o ihatid. Ang Bridge ang nagdadala ng context na iyon sa form na kayang gamitin ng renderer.

### A Quiet Connector

Minsan mahirap makita ang Bridge dahil mukhang simpleng pass-through lamang ito. Ngunit mahalaga ang ginagawa nito: pinapanatili nitong hiwalay ang organization logic at rendering logic. Ang graph ay hindi kailangang maging renderer, at ang renderer ay hindi kailangang maging graph manager.

### Passing Interactions Back Up

Sa reverse flow, maaaring dumaan ang interaction information mula Renderer pabalik sa Graphs & Frames. Ang Bridge ang maaaring magpanatili ng mapping upang malaman kung saan dapat bumalik ang input.

### The Hardest Connector to See

Dahil abstract ang boundary sa pagitan ng organized state at rendering, madaling pagsamahin ang dalawang layers sa code. Ngunit sa Model, mahalagang makita ang distinction: ang Layer 4 ay naghahanda ng context; ang Layer 3 ay nagco-convert para sa output.

### Preserving the Boundary

Pinapanatili ng Bridge ang separation of responsibility. Maaari kang magpalit ng renderer nang hindi kailangang baguhin ang buong graph model, o magpalit ng graph strategy nang hindi kailangang sirain ang renderer.

### Why the Connector Matters

Ang Bridge ang tahimik na transition mula organized interface patungo sa output conversion. Kung malinaw ito, mas modular, testable, at understandable ang buong stack.
