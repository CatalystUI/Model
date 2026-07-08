<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 5. The Stack

## Per-Topic Summary

Matapos tukuyin kung _anong uri_ ng data ang nasa daloy gamit ang Domains, kailangan naman nating tingnan kung _saan_ matatagpuan ang data sa proseso. Dito pumapasok ang **Stack**. Ang Stack ay isang layered model na naglalarawan kung paano gumagalaw ang information mula sa stored digital data patungo sa perceivable output, at kung paano bumabalik ang human interaction patungo sa digital data.

Isipin ito na parang sandwich: sa itaas ay **Data Storage**, ang pinagmumulan o pinagbabalikan ng persistent data. Sa ibaba ay **Human Interface**, ang taong nakakatanggap ng output at gumagawa ng action. Sa pagitan nila, may pitong explicit layers na nagpapaliwanag sa buong conversion process.

### The Layers of The Stack

Ang Stack ay binubuo ng mga sumusunod:

1. **[Implied] Data Storage** — kung saan maaaring manatili ang data bago o pagkatapos itong gamitin ng Model.
2. **Layer 7: Digital Data** — active computer-readable representation ng data.
3. **Layer 6: Structure & Semantics** — interpretation ng data: ano ito, paano ito nakaayos, at ano ang ibig sabihin nito.
4. **Layer 5: Components, Controls, & Layouts** — mutable interface objects na maaaring gamitin, baguhin, ayusin, at tumugon sa interactions.
5. **Layer 4: Graphs & Frames** — organizational context na nag-uugnay, nagbubound, at naghahanda ng interface state.
6. **Layer 3: Renderers** — conversion ng prepared interface state tungo sa output-ready form.
7. **Layer 2: Windows** — bounded delivery context kung saan dumadaan ang output at interaction.
8. **Layer 1: Systems** — operating environment, devices, services, at platform behavior.
9. **[Implied] Human Interface** — ang user mismo: tumatanggap ng perceivable output at gumagawa ng interaction input.

### The Role of the Stack in the Model

Ang Stack ang nagbibigay ng “where” ng Model. Hindi lang nito sinasabing may data at may user; ipinapakita nito ang mga hakbang na dinaraanan ng information upang maging meaningful sa tao, at ang mga hakbang na dinaraanan ng action ng tao upang maging pagbabago sa system.

Sa top-down flow, nagsisimula ang data bilang digital representation, binibigyan ng structure at semantics, ginagawang components, inilalagay sa graph at frame, nirender, ipinapasa sa window, at hinahatid ng system sa user. Sa bottom-up flow, nagsisimula ang action sa user, pumapasok sa system at window, maaaring i-route at i-translate ng renderer at graph/frame, hinahawakan ng control, at maaaring magdulot ng pagbabago sa data.

### Demonstrating the Stack

#### A Door Sensor

Sa automatic door, maaaring hindi ito mukhang software interface, ngunit pareho pa rin ang flow. Ang sensor at controller ay bahagi ng system. Ang bounded area ng sensor ay parang window kung saan pumapasok ang interaction. Ang paglapit ng tao ay interaction data. Pinoproseso ito ng system at naglalabas ng perceivable output: bumubukas ang pinto.

#### The Web

Sa web, maaaring makita ang mapping nang mas pamilyar. Ang HTML o JSON ay digital data. Ang parsed document structure ay Structure & Semantics. Ang DOM elements at UI controls ay nasa Components, Controls, & Layouts. Ang browser engine ay nag-oorganize ng frames, nagre-render, at naghahatid ng output sa browser window, na sa huli ay ipinapakita ng operating system.

### The Need for Connectors

Hindi sapat ang layers kung walang paraan para makausap nila ang isa’t isa. Kaya kailangan ang Connectors. Sila ang gumagawa ng transition sa pagitan ng layers: pagbabasa ng data, parsing, adapting, bridging, surfacing, at native binding. Sa ganitong paraan, hindi lang static diagram ang Stack; nagiging living process ito ng translation at communication.
