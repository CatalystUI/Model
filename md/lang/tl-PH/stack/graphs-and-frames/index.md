<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 5.5 The Stack :: Graphs & Frames

## In-Depth Discussion

### The Organizational Layer

Ang **Graphs & Frames** ang layer kung saan inaayos ang usable interface objects sa mas malaking operating context. Ang Layer 5 ay nagbibigay ng components, controls, at layouts, ngunit hindi awtomatikong nagiging buong interface ang mga iyon dahil lang magkakasama sila. Kailangan silang tuklasin, iugnay, i-query, i-order, i-route, i-bound, at ihanda para sa mas mababang layers ng Stack.

### Graphs

Ang **graph** ay nag-oorganisa ng relationships sa pagitan ng components, controls, at layouts. Maaari nitong tukuyin kung alin ang parent, child, active element, focused control, audio group, visual tree, o iba pang relationship. Sa halip na hayaang magkahiwa-hiwalay ang components, ginagawa silang isang navigable at meaningful collection ng graph.

### Frames

Ang **frame** ay ang bahagi ng layer na naghahanda sa organized state para sa rendering. Kung ang graph ay tumutulong maunawaan kung paano magkakaugnay ang pieces, ang frame naman ang nagbibigay ng boundary at prepared context para maipasa pababa sa Renderer. Maaaring isama rito ang size, bounds, viewport, timing, current state, at iba pang delivery context.

### Relationship Between Graphs and Frames

Magkaugnay ang graphs at frames. Ang graph ay nagsasabi kung ano ang umiiral at paano ito magkakaugnay. Ang frame ay nagsasabi kung paano ito ihahanda sa kasalukuyang sandali. Sa graphical UI, maaaring isipin ang graph bilang component tree at ang frame bilang prepared render context. Sa audio system, maaaring graph ang collection ng sounds at frame ang kasalukuyang mix context.

### Preparing for Rendering

Hindi direktang dapat ipasa sa renderer ang raw components. Kailangan muna silang ihanda: kalkulahin ang layout, tukuyin ang bounds, i-flatten ang relationships, at linawin kung ano ang kailangang i-output. Dito pumapasok ang Layer 4.

### Routing Interactions

Sa reverse flow, mahalaga rin ang Graphs & Frames. Kapag may interaction na pumasok mula sa lower layers, kailangan malaman kung aling component o control ang dapat tumanggap nito. Ang Layer 4 ang tumutulong mag-route ng interaction batay sa position, focus, ownership, graph relationship, o ibang context.

### Relationship to Components, Controls, & Layouts

Tinatanggap ng Layer 4 ang active objects mula Layer 5, ngunit hindi nito pinapalitan ang kanilang role. Ang components pa rin ang may state, controls pa rin ang humahawak ng interactions, at layouts pa rin ang nag-aayos. Ang Layer 4 ang naglalagay sa kanila sa mas malawak na larawan.

### Relationship to the Renderer

Sa baba nito, inaasahan ng Renderer ang prepared data na maaari nitong i-convert sa output-ready form. Ang Graphs & Frames ang naghahanda ng data na iyon upang hindi kailangang malaman ng renderer ang buong business logic ng interface.

### Why the Layer Matters

Kung walang Layer 4, magiging kumpol lamang ng objects ang interface. Ginagawa nitong organisado, bounded, routable, at ready-for-rendering ang active interface state.
