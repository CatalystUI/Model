<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 4. Domains

## Per-Topic Summary

Ang _domain_ sa CatalystUI Model ay ginagamit upang tukuyin kung anong uri ng sensory o symbolic form ang kinakatawan ng data. Hindi sapat na sabihing “may data” lamang ang isang system. Kailangan ding malaman kung paano ito inaasahang maunawaan ng user: bilang teksto, tunog, larawan, haptic feedback, amoy, lasa, o pinagsamang karanasan.

May pitong top-level domains sa Model:

1. **Symbolic** — data na hindi pa nakatalaga sa isang partikular na sensory channel, gaya ng encoded text, file formats, at configuration data.
2. **Visual** — data na hinubog para makita.
3. **Auditory** — data na hinubog para marinig.
4. **Tactile** — data na hinubog para maramdaman sa pamamagitan ng touch o haptics.
5. **Olfactory** — data na hinubog para maamoy.
6. **Gustatory** — data na hinubog para malasahan.
7. **Multisensory** — data o output na nagsasama ng maraming sensory channels sa iisang karanasan.

### Ang Papel ng Domains sa Model

Tinutulungan tayo ng domains na maging malinaw kung anong uri ng meaning ang dinadala ng data. Ang parehong information ay maaaring ipakita bilang text sa screen, basahin bilang audio, o ihatid bilang tactile feedback. Hindi nagbabago ang layunin ng information, ngunit nagbabago ang paraan ng pagdadala nito sa user.

Mahalaga rin ang domains para sa accessibility. Kapag malinaw ang domain ng data, mas madali itong isalin sa ibang domain: halimbawa, mula symbolic text patungong auditory speech, o mula visual notification patungong tactile vibration. Sa ganitong paraan, hindi lang nito inilalarawan ang interface; binubuksan din nito ang posibilidad ng mas maraming paraan upang maabot ang tao.
