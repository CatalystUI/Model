<!--
Ang pagsasaling ito ay ginawa ng ChatGPT at dapat suriin ng isang taong tagasalin.
Alisin ang mga linyang ito sa isang pull request pagkatapos ma-verify ang pagsasalin.
-->

# 7. Interactions

## Per-Topic Summary

Ang **interactions** ay ang bahagi ng flow kung saan ipinapahayag ng user ang intent pabalik sa system. Kapag nag-click, nag-type, humawak, nagsalita, gumalaw, o gumamit ng device ang user, hindi lang iyon physical event. Sa loob ng interface, maaari itong maging meaningful information na kailangang i-route, i-interpret, at posibleng gawing pagbabago sa digital data.

### Modern Frustrations With Technology

Maraming frustration sa modern technology ang nanggagaling sa maling paghawak ng interactions. Minsan nakikita ng user ang gusto nilang gawin, ngunit hindi iyon pinapayagan ng interface. Minsan may maliit na customization na dapat simple, pero nakatago sa maraming layers ng framework. Minsan ang system ay may technically correct behavior, pero mali ang dating sa user dahil hindi nito nakuha ang tunay na intent.

Sa CatalystUI, tinutulungan tayo ng Model na makita kung saan nabibigo ang flow. Mali ba ang domain? Mali ba ang layer? Nawawala ba ang meaning sa connector? Hindi ba tama ang route mula window papunta sa control? Kapag nahati nang malinaw ang interaction process, mas madaling hanapin kung saan talaga nasisira ang experience.

### The Purpose of Behind It All

Ang layunin ng interaction ay hindi lang magpadala ng event. Ang layunin nito ay ipahayag ang human intent sa paraang kayang tanggapin ng system. Ang click ay maaaring ibig sabihing “buksan ito,” “piliin ito,” “ilipat ito,” o “gawin ang action na ito.” Ang key press ay maaaring text input, command, shortcut, navigation, o accessibility action depende sa context.

Sa bottom-up flow, nagsisimula ang action sa Human Interface, pumapasok sa System, dumadaan sa Window, maaaring ma-translate ng Renderer, ma-route ng Graphs & Frames, at sa huli ay hawakan ng Components, Controls, & Layouts. Kung kailangan, ang resultang change ay bumabalik sa Structure & Semantics, Digital Data, at Data Storage.

Dito nagiging buhay ang Model. Hindi lamang ito tungkol sa output na ipinapakita sa tao; tungkol din ito sa pakikinig sa tao, pag-intindi sa kanilang ginagawa, at pagsasalin ng intent pabalik sa data.
