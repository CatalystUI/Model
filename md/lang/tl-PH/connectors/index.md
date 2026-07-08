<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 6. Connectors

## Per-Topic Summary

Ang **connectors** ay mga bahagi ng CatalystUI Model na nagpapaliwanag kung paano gumagalaw ang information sa pagitan ng layers ng Stack. Hindi lang nila inilalarawan ang movement; sila ang tumutulong magsalin, mag-adapt, at magpanatili ng meaning habang nagbabago ang representation ng data.

Sa isang mahusay na disenyo, ang connectors ay maaaring palitan ng ibang implementation kung kinakailangan. Halimbawa, maaaring i-render ang parehong symbolic text sa screen, gawing speech, o ipadala sa braille display depende sa connector at domain. Sa ganitong paraan, ang connectors ay nagiging translation medium ng information.

### The Connectors of the Stack

May anim na pangunahing connectors:

1. **Data** — Layer 7 ↔ Layer 6. Naglilipat mula Digital Data patungo sa Structure & Semantics.
2. **Parser** — Layer 6 ↔ Layer 5. Ginagawang usable components, controls, at layouts ang structured information.
3. **Adapter** — Layer 5 ↔ Layer 4. Inilalagay ang components sa mas malaking graph at frame context.
4. **Bridge** — Layer 4 ↔ Layer 3. Dinadala ang prepared graph/frame data patungo sa Renderer.
5. **Surface** — Layer 3 ↔ Layer 2. Inililipat ang rendered output sa Window.
6. **Native** — Layer 2 ↔ Layer 1. Nagbibigay ng bindings sa underlying System.

### The Role of Connectors in the Model

Ang bawat connector ay may malinaw na boundary. Hindi ito dapat maging random utility layer na gumagawa ng lahat. Ang lakas ng Model ay nasa pagiging tiyak ng bawat transition: data access, parsing, adaptation, bridging, surfacing, at native binding.

### Connectors and the Living Exchange

Dahil reversible ang flow ng interface, gumagana rin ang connectors sa pabalik na direksyon. Maaari silang tumulong mag-route ng interactions, mag-update ng components, magbalik ng structure, at magsulat pabalik sa digital data. Sa ganitong paraan, ang Model ay hindi lang diagram ng output; ito ay model ng buong palitan sa pagitan ng user at system.
