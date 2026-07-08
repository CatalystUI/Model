<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 6.3 Connectors :: Adapter

## In-Depth Discussion

### From Use to Context

**Adapter** connector **Layer 5: Components, Controls, & Layouts** এবং **Layer 4: Graphs & Frames**-এর মধ্যে বসে। এটি mutable interface data-কে larger context-এ রাখে, যেখানে তা organized, discovered, routed, bounded, এবং Stack-এর বাকি অংশের জন্য prepared হতে পারে।

Layer 5 components, controls, layouts দেয়—developer সরাসরি কাজ করতে পারে এমন mutable pieces। কিন্তু এগুলো নিজেরাই পুরো environment describe করে না। component জানে সে কী, control জানে কীভাবে respond করে, layout জানে কীভাবে arrange করে; কিন্তু পুরো interface-এর সঙ্গে relationship automatically জানে না। Adapter individual usable pieces-কে organized context-এ স্থানান্তর করে। Parser structured information usable করে; Adapter usable information contextual করে।

### Adapting Components Into Graphs

একটি component একা exist করতে পারে, কিন্তু interface সাধারণত isolated component নয়। components contain, depend, search, order, enable, disable, focus, update, বা route হতে পারে। Adapter components, controls, এবং layouts-কে graph-এ place করে যাতে তারা larger whole-এর অংশ হয়। graph relationships track করে, query expose করে, collection manage করে।

settings component একা useful হতে পারে। graph-এ adapt হলে সেটি full settings view-এর অংশ হয়, related sections-এর সঙ্গে connected হয়, name দিয়ে searched হয়, related values সহ update হয়, অথবা user action থেকে routed হয়। component component-ই থাকে, কিন্তু graph context পায়।

### Layout Is Not the Whole Context

Layout components arrange করতে পারে, কিন্তু full organizational layer নয়। vertical layout order নির্ধারণ করতে পারে, কিন্তু active component list, lifecycle, routing, output boundary, বা top-level mediation manage করতে হয় না। Adapter layout-কে graph-এ place করতে পারে, কিন্তু layout graph হয়ে যায় না। এই separation interface বড় হলে বিশেষভাবে useful।

### Connecting to the Frame

Layer 4 শুধু graph নয়; frame-ও আছে। frame active boundary এবং lower Stack-এর communication point। Adapter components-কে framed context-এ আনতে সাহায্য করে। size, behavior, placement থাকলেও frame নির্ধারণ করে কোন bounds ও active area-তে pieces prepare হচ্ছে। Adapter render করে না; organized interface এমনভাবে prepare করে যাতে frame renderer-এর দিকে communicate করতে পারে।

### Reuse Through Adaptation

একই component different context-এ adapt হতে পারে। document component editing graph, preview graph, printing graph-এ যেতে পারে। music component playback, editing, library graph-এ যেতে পারে। underlying component familiar থাকে, কিন্তু graph/frame অনুযায়ী purpose ও relationship বদলে যায়। Adapter reuse সম্ভব করে, context identical বলে ভান না করে।

### Returning to Components

Stack reversible। interaction নিচ থেকে উঠলে Layer 4 organized context বোঝে—graph relevant component determine করে, frame bounds interpret করে। Adapter সেই contextual interaction Layer 5-এ ফিরিয়ে দেয় যাতে correct component/control respond করতে পারে। Top-down flow-এ Adapter components-কে context-এ রাখে; bottom-up flow-এ contextual interactions components-এর কাছে ফেরায়।

### কেন Connectorটি গুরুত্বপূর্ণ

Adapter usable interface data এবং organized interface context আলাদা রাখে। Components/Controls/Layouts mutable objects ও direct behavior handle করে। Graphs/Frames organization, context, boundaries, routing, এবং output preparation handle করে। Adapter এই movement-এর proper place।
