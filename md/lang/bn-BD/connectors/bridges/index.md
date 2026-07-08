<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 6.4 Connectors :: Bridge

## In-Depth Discussion

### From Context to Rendering

**Bridge** connector **Layer 4: Graphs & Frames** এবং **Layer 3: Renderers**-এর মধ্যে বসে। এটি organized interface context-কে renderer-understandable form-এ নিয়ে যায়। graph ও frame interface relationships, bounds, routing, এবং prepared state জানে; renderer domain-specific output তৈরি করতে চায়। Bridge এই দুইয়ের মধ্যে translation point।

### Preparing Without Rendering

Bridge নিজে renderer নয়। এটি output draw, play, vibrate, বা deliver করে না। বরং frame/graph থেকে necessary information সংগ্রহ করে renderer-এর input হিসেবে shape করে। visual case-এ draw list, render tree, geometry, text runs, image references হতে পারে। auditory case-এ track schedule, mix instructions, sound events হতে পারে। tactile case-এ haptic pattern instructions হতে পারে।

### Preserving Organization

Bridge-এর কাজ graph context flatten করে meaning হারানো নয়। renderer-friendly form বানাতে অনেক সময় organization transform করতে হয়, কিন্তু relationships, bounds, state, এবং intent preserve করতে হবে। button disabled হলে renderer input-এ disabled appearance বা behavior-relevant state থাকা দরকার। focused control থাকলে renderer তা জানবে।

### Bottom-Up Flow

Interaction renderer-side coordinate বা event হিসেবে এলে Bridge সেটিকে Layer 4 context-এ ফিরিয়ে নিতে সাহায্য করতে পারে। pointer coordinate render space থেকে frame space-এ map করা, hit-test result graph component-এর সঙ্গে relate করা, বা audio/tactile event source identify করা—সবই Bridge-like transition হতে পারে।

### কেন Connectorটি গুরুত্বপূর্ণ

Bridge ছাড়া Layer 4 এবং Renderer-এর boundary blur হতো। Graphs/Frames context organize করে; Renderer output-ready form তৈরি করে। Bridge নিশ্চিত করে organized meaning renderer-এর কাছে এমনভাবে পৌঁছায় যা domain-specific transformation সম্ভব করে।
