<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 5. Stack

## Per-Topic Summary

information flow-এ _কী_ ধরনের data জড়িত তা classify করার পরে আমরা data _কোথায়_ আছে সেদিকে focus করতে পারি। existing solutions বিশ্লেষণ করার সময়, বিশেষ করে তাদের পার্থক্য দেখলে, এটি কাজে আসে। প্রতিটি solution আলাদা করার আগে দুটি fundamental truth ধরা যায়: প্রথমত, _data_ অবশ্যই কোথাও exist করে—binary হিসেবে, disk-এ, memory-তে, বা অন্য কোনো storage form-এ; দ্বিতীয়ত, _person_ বা user-ও কোথাও exist করে—screen, headphones, controller, বা অন্য interface-এর অপর প্রান্তে। আমরা এই দুই concept-কে sandwich হিসেবে দেখি: উপর দিকে “Data Storage,” নিচে “Human Interface।” flow of information-এর অংশ হিসেবে এগুলো স্পষ্ট হওয়ায় Model এগুলোকে _implied_ বলে।

### Stack-এর Layers

Human Interface থেকে শুরু করলে Stack-এর প্রথম explicit pattern হলো “system।” system ultimately user-এর কাছে information deliver করার পদ্ধতি organize করে। modern computer-এ এটি সাধারণত operating system (“OS”)—hardware এবং software-এর gap bridge করে। form যাই হোক, information flow সম্পূর্ণ করতে system দরকার।

System useful হতে হলে user-এর interact করার একটি way দরকার। GUI-তে এটি সাধারণত window। CatalystUI Model “graphical window” ধারণাকে বেশি narrow মনে করে, কারণ সব interface graphical নয়। তাই Layer 2 “Window” হলো system-এর মধ্যে যেকোনো “view” বা context—traditional app window, command-line interface, visual terminal, audio-capture device, বা input/output-এর অন্য কোনো context।

Window-তে information flow করাতে “Renderer” দরকার, যা interface-এর internal form এবং user-এর perceivable form-এর মধ্যে data transform করে। GUI-তে OpenGL বা Vulkan visual data displayable output বানায়। কিন্তু renderer graphics-এ সীমাবদ্ধ নয়: OpenAL, WASAPI, ASIO, CoreAudio-এর মতো audio renderer sound produce করতে পারে; haptic renderer tactile feedback produce করতে পারে। renderer-এর কাজ domain-specific output-এর জন্য prepared data convert করা।

এরপর আসে interface data organize ও track করার layers। Layer 4 “Graphs & Frames।” graph interface objects-এর relationships organize করে—3D object, component tree, বা interface subsection। frame হলো larger current context যা available graphs ধারণ ও coordinate করে এবং renderer-এর জন্য prepare করে। web-এ DOM graph-এর মতো elements organize করে, আর document frame-এর মতো context দেয়।

Layer 5 “Components, Controls, & Layouts” logical usable form দেয়। component হলো interface-এর usable part—image, label, audio track, style element ইত্যাদি। control interaction process করে—button, toggle, slider, input। layout অন্য components বা controls meaningful order-এ arrange করে। graphics-এর বাইরে audio interface-তেও tracks component, playback controls control, এবং groups layout হতে পারে। এই layer interaction handling-এর কেন্দ্রীয় জায়গা।

Layer 6 “Structure & Semantics” data কীভাবে understood হবে তা describe করে। semantics reading rules define করে—meaning, order, এবং part interpretation। structure হলো rules apply করার পরে organized form। web-এ loaded HTML digital data, HTML rules semantics, আর parsed document structure হলো structured result।

Layer 7 “Digital Data” active interface flow-এ computer-readable form হিসেবে data-র প্রথম explicit representation। এটি file, document, stream, web response, বা similar representation হতে পারে। এই point-এ data এখনও structure পায়নি বা sensory domain-এ assigned হয়নি। text document visual বা auditory নয়; Stack later তা screen-এ display বা speaker দিয়ে read করতে পারে।

### মডেলে Stack-এর ভূমিকা

Top to bottom Stack হলো “Data Storage” (implied), “Digital Data,” “Structure & Semantics,” “Components, Controls, & Layouts,” “Graphs & Frames,” “Renderers,” “Windows,” “Systems,” এবং “Human Interface” (implied)। explicit seven layers bottom-up numbered: Systems Layer 1, Digital Data Layer 7। implied layers endpoints। Stack আমাদের জিজ্ঞাসা করতে দেয় কোনো information process-এ কোথায় আছে, কী role serve করছে, এবং interaction complete করতে কীভাবে contribute করছে।

### Stack Demonstration

Door sensor উদাহরণে user doorway approach করে। Human Interface থেকে signal System-এ যায়—controller, wiring, power, motor assembly। Window signal-কে doorway detection context-এর সঙ্গে associate করে। Renderer সেটিকে usable event-এ map করে। Graphs & Frames detection area এবং door state-এর larger context-এ event রাখে। Components, Controls, & Layouts সিদ্ধান্ত নেয় door open, stay open, বা close হবে কি না। Structure & Semantics sensitivity বা delay timing-এর settings বুঝতে সাহায্য করতে পারে। Digital Data state/settings represent করে, এবং প্রয়োজন হলে Data Storage-এ preserve হয়। তারপর flow নিচে নেমে door open output user perceive করে।

Web উদাহরণে server/database/file/API Data Storage, browser-fetch করা HTML/CSS/JS/images Digital Data, HTML semantics/CSS/JS rules Structure & Semantics, interpreted page elements Components/Controls/Layouts, DOM/document Graphs & Frames, browser Renderer, OS-provided Window, OS System, আর viewer Human Interface।

### Connectors-এর প্রয়োজন

Stack আমাদের বলে প্রতিটি piece _কী_ এবং _কোথায়_ belongs করে। কিন্তু data layer থেকে layer-এ _কীভাবে_ moves করে তা explain করতে আরেক concept দরকার। তাই Connectors Model-এর necessity: তারা transitions define করে। Stack path দেয়; connectors movement explain করে।
