# 5.4 The Stack :: Components, Controls, & Layouts

## गहराई वाली चर्चा

### पहली mutable interface layer

**Components, Controls, & Layouts** वह layer है जहाँ interpreted structure usable interface material बनती है। Layer 6 explain करता है कि representation का मतलब क्या है और वह कैसे organized है; Layer 5 उस stable interpretation को mutable objects में turn करता है जिन्हें arrange, update, interact, और बाकी Stack के लिए prepare किया जा सके।

यह पहली layer है जहाँ Model interface को सिर्फ understood चीज नहीं, बल्कि actively usable चीज के रूप में describe करना शुरू करता है। Structure किसी resource का meaning explain कर सकती है, लेकिन user structure से directly interact नहीं करता। Interface को ऐसे objects चाहिए जो values expose कर सकें, intent का respond कर सकें, temporary state maintain कर सकें, और larger arrangement में participate कर सकें। Layer 5 ये objects provide करता है।

### Interpretation से Use तक

**Structure & Semantics** और **Components, Controls, & Layouts** के बीच boundary interpreted form और usable form के बीच boundary है। Layer 6 content की stable understanding produce करता है। Layer 5 उस understanding को ऐसी form में adapt करता है जिसके साथ interface active operation के दौरान काम कर सके।

यह distinction important है क्योंकि interpreted structure और interface behavior एक ही responsibility नहीं हैं। Structure identify कर सकती है कि कोई value exist करती है, कहाँ belong करती है, और कौन से rules उसे govern करते हैं। Component उस value को adjustable, displayable, playable, selectable, editable, या otherwise usable चीज की तरह expose कर सकता है। Structure content explain करती है; component interface को उसके साथ काम करने का way देता है।

इसलिए Layer 5 सिर्फ visual layer नहीं है। Components, controls, और layouts किसी भी domain में exist कर सकते हैं। Component text, sound, haptic feedback, command, document section, media resource, या interface का कोई other usable piece represent कर सकता है। Layer को define यह नहीं करता कि object eventually कैसे perceive होगा, बल्कि यह कि वह interpreted content से built mutable interface form provide करता है।

### Components

**Component** interface का logical, mutable part है जो interpreted structure से created या associated होता है। वह image, label, audio track, style element, command, document section, media resource, या interface का another usable piece represent कर सकता है। जहाँ structure primarily stable meaning से concerned होती है, component active use से concerned होता है।

Component properties, methods, state, या behavior expose कर सकता है जो underlying content को handle करना आसान बनाते हैं। वह values provide कर सकता है जिन्हें read या change किया जा सके, operations provide कर सकता है जिन्हें perform किया जा सके, या state provide कर सकता है जिसे interface active रहते track किया जा सके। इससे बाकी Stack raw representations या immutable structures बार-बार handle करने के बजाय meaningful objects के साथ काम कर सकता है।

Important point यह है कि component को original resource की exact shape preserve करने की जरूरत नहीं। वह उसे simplify कर सकता है, उसके parts combine कर सकता है, उसका सिर्फ specific portion expose कर सकता है, या उस पर अधिक convenient interface provide कर सकता है। Layer 5 practical हो सकता है क्योंकि उसका role content का original meaning define करना नहीं है। उसका role उस meaning को usable बनाना है।

### Controls

**Control** वह component है जो interaction handle करता है। वह Stack की lower layers से routed interaction receive करता है और determine करता है कि response में क्या होना चाहिए। इससे controls interface के user-facing side और content-facing side के बीच main meeting points में से एक बनते हैं।

Controls interaction को meaningful interface behavior में turn करने के लिए responsible हैं। Control value update कर सकता है, operation trigger कर सकता है, state change कर सकता है, new representation request कर सकता है, या कोई change produce नहीं कर सकता। Key distinction यह है कि control सिर्फ interface का part बनकर exist नहीं करता; वह user की system पर act करने की ability में participate करता है।

क्योंकि controls components हैं, वे same mutable nature share करते हैं। फिर भी उनकी defining responsibility interaction handling है। Component usable object represent कर सकता है बिना user intent का directly respond किए। Control usable object represent करता है जो interface flow के भीतर उस intent को receive, interpret, और act कर सकता है।

### Layouts

**Layout** वह component है जो controls सहित other components को किसी order, relationship, या placement rule के according arrange करता है। Visual interfaces में यह spatial arrangement के रूप में दिखाई दे सकता है। Other domains में layout sequence, grouping, priority, timing, category, routing, या कोई other organizational relationship describe कर सकता है।

Layouts important हैं क्योंकि usable interface objects rarely isolation में exist करते हैं। Components को context चाहिए। User experience में clearly participate करने से पहले उन्हें ordered, grouped, aligned, layered, sequenced, या otherwise related होना पड़ सकता है। Layout वह relational structure provide करता है बिना interface as a whole का top-level manager बने।

यह layouts को graphs से separate करता है। Layout components को specific rule या pattern के according arrange करता है। Graph larger interface context में broader discovery, organization, relationships, और lifecycle manage करता है। Layer 5 layout objects themselves provide करता है; Layer 4 determine करता है कि वे objects larger frame of operation में कैसे participate करते हैं।

### Mutability और Active State

Layer 5 mutable है क्योंकि interfaces active हैं। जब interpreted content interface का part बनता है, उसे user intent, system state, timing, focus, selection, visibility, playback, input, या other live conditions में changes का respond करना पड़ सकता है। Components, controls, और layouts उन active changes के होने की जगह provide करते हैं।

इसका मतलब यह नहीं कि Layer 5 Layer 6 द्वारा provided stable interpretation को replace करता है। Instead, वह उस पर build करता है। Component temporarily changed value hold कर सकता है, control edit process कर सकता है, या layout arrangement recalculate कर सकता है, लेकिन वे changes अपने नीचे के interpreted meaning से connected रहते हैं। जब change retained resource का part बनना चाहिए, flow Structure & Semantics और Digital Data के through फिर ऊपर move कर सकता है।

Mutability Layer 5 को temporary interface conditions represent करने भी देती है जो शायद कभी stored न हों। Selected item, expanded section, playback position, hover state, focus target, या pending edit active interface के लिए बहुत important हो सकते हैं भले ही वे permanent storage का part कभी न बनें। Layer 5 Stack को इन live conditions को describe करने की clear जगह देता है।

### Top-Down Flow में role

Top-down flow में Components, Controls, & Layouts interpreted structure receive करता है और उसे usable interface objects में turn करता है। Stack अब यह जानने से आगे बढ़ चुका है कि content का मतलब क्या है, और content को interaction, organization, और eventual presentation के लिए prepare करना शुरू करता है।

इस stage पर interface decide कर सकता है कि interpreted content के कौन से parts components बनने चाहिए, कौन से components interaction handle करने के capable होने चाहिए, और वे components कैसे arranged होने चाहिए। Result अभी rendered frame या system output नहीं है। यह active interface model है जिसे Layer 4 organize कर सकता है और eventually rendering के लिए prepare कर सकता है।

### Bottom-Up Flow में role

Bottom-up flow में Layer 5 वह जगह है जहाँ routed interaction meaningful behavior बनती है। Lower layers action detect, translate, और route कर सकती हैं, लेकिन control वह जगह है जहाँ वह action आखिरकार उस interface object के relation में understood होती है जिसे वह affect करती है।

जब control interaction handle करता है, वह component state update कर सकता है, layout change request कर सकता है, command trigger कर सकता है, या ऐसी modification produce कर सकता है जिसे Structure & Semantics की ओर वापस move करना हो। अगर वह modification underlying content affect करती है, Layer 6 relevant semantic rules के according change validate और organize कर सकता है, इससे पहले कि वह फिर Digital Data बने। इस तरह Layer 5 user intent और interface state के बीच active conversion point की तरह serve करता है।

### Graphs & Frames से relationship

Layer 5 usable interface objects produce करता है, लेकिन वह पूरा environment नहीं है जिसमें वे objects operate करते हैं। वह responsibility **Layer 4: Graphs & Frames** से belong करती है। Components, controls, और layouts को broader context चाहिए जो उन्हें organize, query, उनके बीच route, rendering के लिए prepare, और उनके participation की bounds define कर सके।

यह relationship Model को clean रखता है। Layer 5 active interface के objects define करता है। Layer 4 उनकी larger organization manage करता है और उन्हें Stack की lower layers के लिए prepare करता है। Component को जानना चाहिए कि अपनी usable state कैसे represent और manage करनी है; graph और frame को जानना चाहिए कि वह component wider interface flow में कैसे fit होता है।

### Layer क्यों important है

Components, Controls, & Layouts Stack को interpretation से सीधे rendering में jump करने से रोकता है। System सिर्फ content understand करके और तुरंत output produce करके clear interface नहीं बना सकता। ऐसी layer जरूरी है जहाँ interpreted content usable, mutable, arrangeable, और interaction-responsive बने।

Layer 5 को Structure & Semantics और Graphs & Frames दोनों से separate करके, Model responsibility की precise sequence preserve करता है। Structure & Semantics stable meaning define करता है। Components, Controls, & Layouts उस meaning को active interface objects में turn करता है। Graphs & Frames उन objects को larger operating context में organize करता है। यह separation CatalystUI को domains के across interfaces describe करने देता है, बिना उन्हें visual widgets, raw structures, या renderer-specific commands तक reduce किए।
