<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 2. সারাংশ

## তথ্যের প্রবাহ

> **নোট:** এই অংশটি মডেলের high-level overview হিসেবে কাজ করে। পরবর্তী documentation-এ যথাক্রমে per-topic summaries এবং in-depth discussions দেওয়া হবে।

একটি user interface কীভাবে কাজ করে তা বোঝার আগে আমাদের “_তথ্যের প্রবাহ_” সংজ্ঞায়িত করতে হবে। মানুষ প্রতিদিন, বুঝে হোক বা না বুঝে, information system-এর সঙ্গে interaction করে—স্মার্টফোন, কম্পিউটার, কিংবা দোকানের দরজার sensor—সবই এর উদাহরণ। প্রতিটি system তথ্য উপস্থাপন করে, user তা ব্যাখ্যা করে, প্রয়োজনে সাড়া দেয়, এবং system সেই সাড়া process করে। তারপর system আবার তথ্য উপস্থাপন করে, এবং interaction চলাকালীন এই cycle চলতে থাকে। cycle যেকোনো জায়গা থেকে শুরু হতে পারে: user বোঝার আগেই তথ্য উপস্থাপিত থাকতে পারে, অথবা কোনো তথ্য উপস্থাপনের আগেই user সাড়া দিতে পারে। শুরু যেভাবেই হোক, একই cycle প্রযোজ্য।

CatalystUI Model এই প্রবাহকে কেন্দ্র করেই তৈরি। এটি user এবং information system-এর মধ্যে তথ্য কীভাবে চলাচল করে তা বর্ণনা করার জন্য একটি উচ্চ-স্তরের structure দেয়, এমনকি system-টি traditional user interface-এর মতো না দেখালেও। উদাহরণ হিসেবে, একটি দোকানের দরজার sensor যেন “জাদুর মতো” একজন মানুষকে অনুভব করছে বলে মনে হতে পারে। কিন্তু information flow দেখলে বিষয়টি সহজ: user দরজার পথ দেখে, সামনে যাওয়ার পথ চিনতে পারে, এবং detection area-তে হাঁটে। সেই movement system-এর input হয়। system তা process করে, perceivable output হিসেবে দরজা খোলে, এবং user দরজা দিয়ে যায়। কিছুক্ষণ পরে system দরজা বন্ধ করে, আর নতুন কোনো action না হওয়া পর্যন্ত exchange শেষ থাকে।

তথ্যের প্রবাহের সঙ্গে সঙ্গে, একটি _user interface_ নির্ধারণ করে নির্দিষ্ট information system-এর ভেতরে সেই প্রবাহ কীভাবে ঘটবে। এটি system কীভাবে input নেবে, output দেবে, এবং user-কে interaction করতে দেবে তা নির্ধারণ করে। বিভিন্ন system-এর চাহিদা ভিন্ন হওয়ায় সময়ের সঙ্গে “human interfaces” (“HI”), “human-machine interfaces” (“HMI”), এবং “human-computer interfaces” (“HCI”) সহ বিভিন্ন নাম ও পদ্ধতি তৈরি হয়েছে। আধুনিক computer যুগে এর সবচেয়ে পরিচিত রূপ হলো “graphical user interface” (“GUI”)।

বিভিন্ন implementation তুলনা করলে একটি সাধারণ pattern দেখা যায়। বাহ্যিক পার্থক্য থাকা সত্ত্বেও, সব user interface-এ তিনটি concept দেখা যায়: ১) “domains,” যা data শ্রেণিবদ্ধ ও organize করে; ২) “the stack,” যা data represent ও explain করে; এবং ৩) “connectors,” যা data transform, modify, এবং translate করে। প্রতিটি concept আলাদাভাবে useful, কিন্তু একসঙ্গে তারা একটি _reversible system_ গঠন করে, যা সম্পূর্ণ interface এবং পৃথক process—দুটোই বর্ণনা করতে পারে। এখানেই CatalystUI Model-এর শক্তি স্পষ্ট হয়: interaction-কে categorization, representation, এবং translation-এ আলাদা করে এটি information system বোঝা, debug করা, এবং explain করা সহজ করে।
