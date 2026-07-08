<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 5.9 The Stack :: Human Interface

## In-Depth Discussion

### The Implied Lower Boundary

**Human Interface** হলো Stack-এর implied lower boundary। এটি আপনি—end user—যিনি perceivable output receive করেন এবং interaction data produce করেন। Model এই layer directly implement করে না, কারণ মানুষকে library হিসেবে ship করা practical নয়। অন্তত এখনো নয়।

Stack humans-এর জন্য designed। আমরা দেখি, শুনি, স্পর্শ করি, কখনও smell বা taste করি, তারপর action করি। সেই action key press, touch, speech, gesture, movement, or physical decision হতে পারে। system output দেয়; human interface তা perceive করে; তারপর human intent interaction হিসেবে system-এর দিকে ফিরে যায়।

### Perception and Response

Human Interface output consume করে এবং response produce করে। user একটি button দেখে click করতে পারে, sound শুনে attention দিতে পারে, vibration অনুভব করে react করতে পারে, বা doorway দেখে হাঁটতে পারে। Interface তখনই meaningful যখন user তা perceive করতে পারে এবং তার ভিত্তিতে action নিতে পারে।

এখানে accessibility অত্যন্ত গুরুত্বপূর্ণ। সব human একইভাবে perceive করেন না। কেউ sight-এর উপর নির্ভর করেন, কেউ sound-এর উপর, কেউ tactile feedback-এর উপর, কেউ assistive technology ব্যবহার করেন। CatalystUI Model user-এর perceptual capacity দিয়ে interface design ভাবতে সাহায্য করে, device habit দিয়ে নয়।

### The Cat Problem

আমরা আশা করি end user একজন **human**। Stack humans-এর জন্য designed। non-human-এর জন্য এটি খুব ভালো কাজ নাও করতে পারে। হয়তো **dogs**। অথবা **cats**।

আসলে আপনার keyboard-টা cat থেকে protect করাই ভালো। তাদের হাতে এত power দেওয়া probably wise নয়। বিষয়টা মাথায় উঠে যাবে, তারপর তাদের থামানো কঠিন হবে।

মানে, **try** তো করতেই পারেন, কিন্তু good luck with that.

আমি বলি, আমাদের নতুন **feline overlords**-দের জয় হোক।

### কেন Layerটি গুরুত্বপূর্ণ

Human Interface implied হলেও Model-এর purpose এখানেই শেষ হয়। যদি output user perceive করতে না পারেন, interaction incomplete। যদি user intent system-এ ফিরতে না পারে, interface broken। এই boundary Model-কে মনে করিয়ে দেয় যে computing শুধু machine-to-machine নয়; human experience-ই interaction cycle-এর কেন্দ্র।
