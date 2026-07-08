<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 5.7 The Stack :: Windows

## In-Depth Discussion

### A View Into the System

**Window** হলো Layer 2। CatalystUI-তে window মানে শুধু graphical rectangle নয়; এটি system-এর মধ্যে bounded context বা “view” যার মাধ্যমে rendered output system-এর দিকে যায় এবং system-provided interaction Stack-এর দিকে ফিরে আসে। GUI window familiar example, কিন্তু command-line session, audio output context, capture device, terminal, বা specialized embedded channel-ও window role নিতে পারে।

### Relationship to Renderer

Renderer output-ready representation তৈরি করে। Window সেই output রাখার বা পাঠানোর system-facing place/channel দেয়। renderer transforms; window contains, receives, এবং forwards। তাই different renderer different window type target করতে পারে—visual renderer graphical window, auditory renderer audio context, tactile renderer haptic output context।

### Relationship to System

Window system-এর উপর depend করে কারণ platform সাধারণত window create, manage, constrain, বা recognize করে। system hardware access, scheduling, permissions, drivers, device services, এবং platform behavior দেয়। window সেই broader environment-এর bounded logical context।

### Output Delivery

Top-down flow-এ window renderer থেকে output-ready representation গ্রহণ করে system-এর দিকে pass করে। এটি bounds, focus, buffering, visibility, channel state, বা domain-specific delivery condition manage করতে পারে। window user perception নয়; perception system/device পেরিয়ে human interface-এ ঘটে।

### Interaction Entry

Bottom-up flow-এ window হলো প্রথম explicit Stack layer যেখানে system-provided interaction modeled interface-এ available হয়। key press, pointer move, touch event, device signal, audio command—সব window context-এ arrive করতে পারে। window interaction-কে boundary, focus, position, timing, বা channel-এর সঙ্গে associate করে এবং upward forward করে।

### কেন Layerটি গুরুত্বপূর্ণ

Window rendered output নিজে নিজে user-এর কাছে পৌঁছে যায়—এই ভুল ধারণা আটকায়। renderer output prepare করে; window system-facing context দেয়; system lower-level delivery করে। এই separation CatalystUI-কে visual rectangle-এর বাইরে window concept ব্যবহার করতে দেয়।
