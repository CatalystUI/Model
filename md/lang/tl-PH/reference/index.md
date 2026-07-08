<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 3. Reference

## By AI Prompt

Isang prompt na maaaring gamitin upang tulungan ang isang LLM na maunawaan ang CatalystUI Model:

```md
Ang CatalystUI Model ay naglalarawan sa buong proseso ng pag-convert ng Digital Data tungo sa Perceivable Data at pag-convert ng Interaction Data pabalik tungo sa Digital Data. Kinakatawan nito ang implicit contract sa pagitan ng user at information system kapag ginagamit ang isang interface.

Nahati ang Model sa tatlong pangunahing bahagi:

- Domains, na kumakategorya sa data ayon sa sensory o symbolic nature nito.
- The Stack, na naglalarawan kung saan matatagpuan ang data sa flow.
- Connectors, na nagsasalin at nagbabago ng data sa pagitan ng layers.

Ang Stack ay may dalawang implied boundaries at pitong explicit layers: [Implied] Data Storage, Layer 7: Digital Data, Layer 6: Structure & Semantics, Layer 5: Components, Controls, & Layouts, Layer 4: Graphs & Frames, Layer 3: Renderers, Layer 2: Windows, Layer 1: Systems, at [Implied] Human Interface.

Ang Connectors ay: Data, Parser, Adapter, Bridge, Surface, at Native. Tinutulungan nilang mapanatili ang meaning habang lumilipat ang information mula isang layer patungo sa susunod.

Ang Domains ay: Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory, at Multisensory.
```

## By Text

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

### The Stack

```md
[Implied] Data Storage
  ↓
Layer 7: Digital Data
  ↓ Data Connector
Layer 6: Structure & Semantics
  ↓ Parser Connector
Layer 5: Components, Controls, & Layouts
  ↓ Adapter Connector
Layer 4: Graphs & Frames
  ↓ Bridge Connector
Layer 3: Renderers
  ↓ Surface Connector
Layer 2: Windows
  ↓ Native Connector
Layer 1: Systems
  ↓
[Implied] Human Interface
```

### Connectors

```md
Data     — Layer 7 ↔ Layer 6
Parser   — Layer 6 ↔ Layer 5
Adapter  — Layer 5 ↔ Layer 4
Bridge   — Layer 4 ↔ Layer 3
Surface  — Layer 3 ↔ Layer 2
Native   — Layer 2 ↔ Layer 1
```

## By Flow

### Output-Facing Flow

```md
Data Storage → Digital Data → Structure & Semantics → Components, Controls, & Layouts → Graphs & Frames → Renderers → Windows → Systems → Human Interface
```

Ang output-facing flow ay nagpapakita kung paano nagiging perceivable output ang digital data. Nagsisimula ito sa stored o active data, binibigyan ng meaning, ginagawa bilang interface objects, inorganisa, nirender, inilalagay sa window, at inihahatid ng system sa user.

### Interaction-Facing Flow

```md
Human Interface → Systems → Windows → Renderers → Graphs & Frames → Components, Controls, & Layouts → Structure & Semantics → Digital Data → Data Storage
```

Ang interaction-facing flow ay nagpapakita kung paano bumabalik ang intent ng user sa system. Ang physical o sensory action ay nagiging input event, iruroute pataas sa Stack, hahawakan ng control, at maaaring maging pagbabago sa data.

## By Responsibility

| Bahagi | Responsibilidad |
| --- | --- |
| Domains | Kategoryahin ang sensory o symbolic nature ng data. |
| Stack | Ilarawan kung saan matatagpuan ang data sa process. |
| Connectors | Isalin ang data sa pagitan ng layers habang iniingatan ang meaning. |
| Data Storage | Magbigay o tumanggap ng persistent data. |
| Digital Data | Kumatawan sa active computer-readable information. |
| Structure & Semantics | Bigyan ng stable interpretation ang data. |
| Components, Controls, & Layouts | Gawing mutable at usable ang interpreted data. |
| Graphs & Frames | Iorganisa, i-bound, i-route, at ihanda ang interface state. |
| Renderers | I-convert ang prepared state sa output-ready form. |
| Windows | Magbigay ng bounded delivery context. |
| Systems | Maghatid ng output at tumanggap ng input gamit ang platform capabilities. |
| Human Interface | Tumanggap ng perceivable output at gumawa ng interaction input. |

## By Diagnostic Question

| Tanong | Malamang na Bahagi |
| --- | --- |
| Anong uri ng sensory o symbolic data ito? | Domains |
| Saan ito matatagpuan sa interface flow? | Stack |
| Paano ito lumilipat sa susunod na layer? | Connectors |
| Saan ito naka-store? | Data Storage |
| Ano ang active representation nito? | Digital Data |
| Ano ang ibig sabihin at structure nito? | Structure & Semantics |
| Paano ito ginagamit o binabago ng interface? | Components, Controls, & Layouts |
| Paano ito inoorganisa at niruroute? | Graphs & Frames |
| Paano ito nagiging output-ready? | Renderers |
| Saan ito ihahatid? | Windows |
| Anong platform o device ang magpapatupad nito? | Systems |
| Paano ito mararanasan o sasagutin ng tao? | Human Interface |

## By One-Sentence Summary

Ang CatalystUI Model ay isang paraan ng paglalarawan kung paano ang information ay naglalakbay mula stored digital data patungo sa human perception, at kung paano ang human intent ay bumabalik bilang meaningful change sa system.
