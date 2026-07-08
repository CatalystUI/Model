<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 5.5 The Stack :: Graphs & Frames

## In-Depth Discussion

### Organized Interface Context

**Graphs & Frames** হলো Layer 4। Layer 5 usable pieces দেয়, কিন্তু interface সাধারণত isolated component-এর set নয়। components, controls, এবং layouts একে অন্যের সঙ্গে relationship, order, lifecycle, routing, focus, boundary, এবং shared state-এ যুক্ত থাকে। Layer 4 সেই organized context describe করে।

### Graphs

একটি **graph** components, controls, এবং layouts-এর relationship organize করে। graphical UI-তে এটি component tree বা scene graph হতে পারে। audio interface-এ এটি track graph, routing graph, বা library graph হতে পারে। graph query, store, order, group, enable/disable, focus, update, এবং route করার context দিতে পারে।

Graph layout নয়। layout pieces arrange করে; graph broader relationship ও discovery manage করে। একটি layout বলতে পারে items vertically সাজাও। graph বলতে পারে কোন items exist করে, কোনটি active, কোন control route পাবে, এবং কোন section current context-এর অংশ।

### Frame

**frame** হলো active boundary এবং lower layers-এর সঙ্গে communication point। graph relationships organize করে, frame renderer-facing preparation-এর context দেয়। frame bounds, active area, current state, resizing, routing context, এবং output-ready preparation manage করতে পারে। GUI-তে surface/bounds/layout recalculation-এর connection এখানে দেখা যায়।

### Interaction Routing

Bottom-up flow-এ interaction system থেকে window/renderer পেরিয়ে Layer 4-এ এলে graph ও frame determine করতে সাহায্য করে কোন component বা control relevant। pointer position, focus, selected region, active graph, বা current frame bounds interaction-এর meaning shape করতে পারে। তারপর Adapter connector interaction Layer 5-এ ফেরায়।

### কেন Layerটি গুরুত্বপূর্ণ

Layer 4 usable components-কে living interface context-এ স্থাপন করে। এটি না থাকলে components scattered mutable data হয়ে থাকত, আর renderer context ছাড়া output prepare করতে বাধ্য হতো। Graphs organize relationships; Frames prepare bounded context। একসঙ্গে তারা interface-কে coherent করে।
