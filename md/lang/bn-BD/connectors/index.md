<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 6. Connectors

## Per-Topic Summary

Stack layerগুলো কী এবং কোথায় আছে তা বর্ণনা করে, কিন্তু layer থেকে layer-এ data কীভাবে যায় তা explain করতে **connectors** দরকার। একটি connector হলো programmatic transition mechanism, যা adjacent layers-কে communicate করতে দেয় এবং data-কে এক representation থেকে অন্য representation-এ transform করে।

CatalystUI Stack-এ ছয়টি connector আছে:

- **DataHandler** — Layer 7: Digital Data ↔ Layer 6: Structure & Semantics
- **Parser** — Layer 6: Structure & Semantics ↔ Layer 5: Components, Controls, & Layouts
- **Adapter** — Layer 5: Components, Controls, & Layouts ↔ Layer 4: Graphs & Frames
- **Bridge** — Layer 4: Graphs & Frames ↔ Layer 3: Renderers
- **Surface** — Layer 3: Renderers ↔ Layer 2: Windows
- **NativeHandler** — Layer 2: Windows ↔ Layer 1: Systems

Connectors meaning preserve করে। তারা শুধু data pass করে না; তারা বুঝিয়ে দেয় এক layer-এর responsibility কীভাবে পরের layer-এর responsibility-তে translate হয়। top-down flow-এ তারা digital data-কে perceivable output-এর দিকে নিয়ে যায়। bottom-up flow-এ তারা interaction data-কে digital data পরিবর্তনের দিকে ফেরায়।

### Connectors-এর ভূমিকা

প্রতিটি connector specialized। DataHandler raw active data-কে structured interpretation-এর কাছে আনে। Parser structured meaning-কে usable components বানায়। Adapter components-কে organized graph/frame context-এ রাখে। Bridge prepared context renderer-এর কাছে পাঠায়। Surface rendered output window delivery context-এ আনে। NativeHandler window এবং system-এর মধ্যে platform/native boundary manage করে।

এই transitions named হলে Model পরিষ্কার থাকে। layers নিজেদের responsibility ধরে রাখে, আর connectors movement ও translation handle করে।
