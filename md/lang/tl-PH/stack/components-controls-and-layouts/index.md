<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 5.4 The Stack :: Components, Controls, & Layouts

## In-Depth Discussion

### The First Mutable Interface Layer

Ang **Components, Controls, & Layouts** ang unang mutable interface layer ng Stack. Dito nagiging mga object na maaaring gamitin, baguhin, ayusin, at tugunan ang data. Kung ang Structure & Semantics ay stable interpretation, ang Layer 5 naman ang active interface representation.

### From Interpretation to Use

Hindi sapat na alam ng system ang structure ng data. Kailangan din ng paraan para gamitin ito. Ang document heading ay maaaring maging label component. Ang audio file ay maaaring maging player component. Ang setting value ay maaaring maging toggle control. Dito nagsisimulang maging praktikal ang interpreted data.

### Components

Ang **component** ay mutable object na kumakatawan sa isang bahagi ng interface state. Maaari itong magkaroon ng properties tulad ng size, position, color, text, volume, state, o iba pang values. Hindi kailangang pareho ang itsura nito sa underlying stored data; ang layunin nito ay magbigay ng human-friendly at developer-friendly API.

### Controls

Ang **control** ay component na direktang humahawak ng interactions. Maaari itong button, slider, text field, physical button handler, voice command target, o anumang elementong tumutugon sa user action. Dito madalas “dumadapo” ang intent ng user.

### Layouts

Ang **layout** ay component na nag-aayos ng ibang components ayon sa isang rule o order. Maaari itong vertical layout, horizontal layout, audio collection, menu structure, o ibang organizing component. Hindi nito kailangang hawakan ang interaction mismo; ang pangunahing tungkulin nito ay arrangement.

### Mutability and Active State

Mahalaga ang mutability dahil ang interface ay buhay. Nagbabago ang values, focus, selection, position, visibility, playback state, at iba pa. Ang Layer 5 ang lugar kung saan ligtas na nagaganap ang active changes bago sila iorganisa at irender.

### Role in Top-Down Flow

Sa top-down flow, tumatanggap ang layer na ito ng interpreted structures at ginagawa silang usable interface objects. Pagkatapos, ipapasa ang mga object na ito sa Graphs & Frames para maorganisa sa mas malaking context.

### Role in Bottom-Up Flow

Sa bottom-up flow, dito hinahawakan ng controls ang interactions. Ang click, key press, touch, voice input, o ibang action ay maaaring maging command, state change, o data update.

### Relationship to Graphs & Frames

Hindi sapat na mayroon lamang components. Kailangan silang tuklasin, i-route, i-bound, at ihanda bilang bahagi ng buong interface. Iyon ang ibinibigay ng Graphs & Frames sa susunod na layer.

### Why the Layer Matters

Ang Layer 5 ang lugar kung saan ang data ay nagiging bagay na maaaring gamitin ng developer at maapektuhan ng user. Ito ang unang layer kung saan ramdam ang interface bilang active system, hindi lang stored information.
