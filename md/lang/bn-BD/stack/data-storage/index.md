<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 5.1 The Stack :: Data Storage

## In-Depth Discussion

### একটি Implied Boundary

**Data Storage** হলো Stack-এর implied upper boundary। এটি সেই condition represent করে যেখানে content, state, বা resource explicit layers কাজ শুরুর আগে available থাকে, এবং interaction-এর result পরে preserve হতে পারে। interface নিজের subject শূন্য থেকে তৈরি করে না; interpret, transform, render, বা act করার আগে কিছু read, retrieve, receive, বা reference করার মতো available থাকতে হয়।

Data Storage implied কারণ Stack storage-এর internal mechanics model করে না। Model stored resource-এর উপর depend করতে পারে, কিন্তু resource কীভাবে retained হয় তার সব detail describe করতে হয় না। সেই concern surrounding information system-এর। Stack শুরু হয় যখন কোনো content active interface flow-এর part হয়।

### Stored Availability and Active Representation

Data Storage এবং Layer 7: **Digital Data**-এর পার্থক্য হলো **stored availability** এবং **active representation**। Data Storage বলে কিছু persist করতে পারে এমন place বা condition। Digital Data বলে সেই জিনিস Stack-এর modeled process-এ computer-readable representation হিসেবে প্রবেশ করার প্রথম explicit form।

document file system-এ থাকতে পারে, record database-এ থাকতে পারে, response API-এর পেছনে অপেক্ষা করতে পারে। access না হওয়া পর্যন্ত তা Data Storage। interface যখন document read করে, record receive করে, response open করে, resource active flow-এ আনে—তখন তা Layer 7। মূল পরিবর্তন meaning নয়; এখন এটি Stack-এর ভেতরে represented।

### Persistence and Transformation

Data Storage persistence এবং availability নিয়ে concern। explicit Stack transformation নিয়ে concern। resource Digital Data হলে Model trace করতে পারে কীভাবে তা Structure & Semantics দ্বারা interpreted, Components/Controls/Layouts-এ shaped, Graphs/Frames-এ organized, Renderer দ্বারা prepared, Window দিয়ে delivered, এবং System দ্বারা Human Interface-এর দিকে carried হয়।

Top-down flow-এ Data Storage source boundary। bottom-up flow-এ return boundary। interaction create/update/delete করলে change Stack দিয়ে উপরে Digital Data হয়; immediate process-এর বাইরে available রাখতে হলে তা Data Storage-এ ফিরে যায়।

### কেন Separation জরুরি

Data Storage ও Layer 7 আলাদা রাখলে Stack পরিষ্কার থাকে। stored place এবং active form blur হলে Digital Data persistence ও representation—দুটোর জন্য দায়ী হয়ে পড়ত। implied boundary রেখে Model বলে: storage interface flow-এর বাইরে/চারপাশে থাকে; Digital Data explicit process শুরু করে।
