<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 6.5 Connectors :: Surface

## In-Depth Discussion

### From Renderer to Window

**Surface** connector **Layer 3: Renderers** এবং **Layer 2: Windows**-এর মধ্যে বসে। Renderer output-ready representation তৈরি করে, কিন্তু সেটি কোন window/context-এ যাবে তা Surface transition handle করে। Surface rendered output-কে window-facing delivery path-এ বসায়।

### Surface as Boundary

Visual systems-এ surface familiar: framebuffer, swapchain surface, drawing surface, canvas, বা native window surface। কিন্তু CatalystUI-তে Surface visual-only নয়। auditory renderer-এর output audio output context-এ, tactile renderer-এর pattern haptic context-এ, বা command renderer-এর text terminal context-এ surface-like transition দিয়ে যেতে পারে।

### Delivery Without Platform Ownership

Surface connector renderer এবং window-র মধ্যে contract দেয়। renderer জানে কী output produce করতে হবে; window জানে কোন bounded system-facing context আছে। Surface এই output transfer, attach, bind, present, buffer, বা submit করতে পারে। এটি পুরো system manage করে না, কিন্তু rendered representation delivery context-এ প্রবেশ করায়।

### Bottom-Up Flow

Interactions window থেকে renderer-side interpretation-এ ফেরত এলে Surface coordinate/context association বজায় রাখতে পারে। visual pointer event কোন surface area-তে ঘটেছে, audio input কোন channel/context থেকে এসেছে, haptic device কোন target context-এর সঙ্গে related—এসব mapping Surface boundary-তে relevant হতে পারে।

### কেন Connectorটি গুরুত্বপূর্ণ

Surface ছাড়া renderer output যেন window-তে magic ভাবে পৌঁছে যায়—এমন assumption তৈরি হতো। Surface explicit করলে Model delivery-এর practical boundary চিনতে পারে। renderer transforms; window contains/forwards; Surface connects them।
