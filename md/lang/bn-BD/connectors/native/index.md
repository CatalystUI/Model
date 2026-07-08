<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 6.6 Connectors :: NativeHandler

## In-Depth Discussion

### From Window to System

**NativeHandler** connector **Layer 2: Windows** এবং **Layer 1: Systems**-এর মধ্যে বসে। এটি window/context এবং underlying system/native environment-এর boundary handle করে। platform APIs, OS calls, device services, permissions, drivers, input queues, output channels—এসবের সঙ্গে interface window কীভাবে communicate করবে তা এই connector-এর concern।

### Native Does Not Mean Unstructured

“Native” মানে arbitrary low-level chaos নয়। NativeHandler system-specific details-এর জন্য clear transition point দেয়। Windows, macOS, Linux, browser runtime, mobile OS, embedded controller—প্রতিটি system আলাদা API দিতে পারে। NativeHandler Model-এর layer responsibility preserve করে সেই API-গুলোর সঙ্গে bindings বা access পথ দেয়।

### Output and Input

Top-down flow-এ NativeHandler window output system-এর কাছে submit করতে পারে। Bottom-up flow-এ system input window context-এ আনতে পারে। এটি create window, set focus, receive events, request device access, submit buffers, control audio channel, query clipboard, বা platform capability expose করতে পারে।

### Keeping Platform Details Contained

NativeHandler-এর বড় সুবিধা হলো platform-specific behavior contained থাকে। higher layers button, graph, renderer, বা structure নিয়ে কাজ করে; তারা প্রতিটি OS call জানার দরকার নেই। NativeHandler system reality-র সঙ্গে connection রাখে কিন্তু পুরো interface-কে platform detail-এ ডুবিয়ে দেয় না।

### কেন Connectorটি গুরুত্বপূর্ণ

NativeHandler ছাড়া Window এবং System-এর boundary unclear হতো। window system-facing context, system broader environment। NativeHandler সেই boundary safely cross করে। Cross-platform CatalystUI-এর জন্য এই connector critical, কারণ system ভিন্ন হতে পারে, কিন্তু model transition একই থাকে।
