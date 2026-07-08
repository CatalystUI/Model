<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 4. ডোমেইন

## Per-Topic Summary

CatalystUI Model বর্ণনা করতে হলে প্রথমে domains দিয়ে শুরু করতে হয়। একটি _domain_ interaction চলাকালীন যে data handle করা হচ্ছে তার category বর্ণনা করে। এটি information flow ভাঙার প্রথম ধাপ। এটি system কোন _ধরনের_ information নিয়ে কাজ করছে তা শনাক্ত করে। দোকানের দরজার sensor motion detect করতে visual বা spatial cue ব্যবহার করতে পারে। game controller tactile information ব্যবহার করে haptic feedback দিতে পারে। smart speaker speech process করার সময় auditory information নিয়ে কাজ করতে পারে। প্রায় সব ক্ষেত্রেই domains মানুষের world sense করার পদ্ধতির সঙ্গে সম্পর্কিত। Model এমন data-কেও ধরে যা এখনও নির্দিষ্ট sense-এ পৌঁছায়নি, এবং এমন data-কেও ধরে যা একসঙ্গে একাধিক sense জুড়ে থাকে। তাই সাতটি domain হলো “symbolic,” “visual,” “auditory,” “tactile,” “olfactory,” “gustatory,” এবং “multisensory।”

Domains useful কারণ এগুলো information flow চিনতে, diagnose করতে, এবং user-এর প্রয়োজন অনুযায়ী shape করতে সাহায্য করে। কোন domain-এ information পড়ে তা শনাক্ত করলে system কী করছে, কী করছে না, এবং user experience-এর কোন অংশ অনুপস্থিত হতে পারে তা পরিষ্কার দেখা যায়। Accessibility-র জন্য এটি বিশেষ গুরুত্বপূর্ণ: যদি interface কেবল visual ভাবে communicate করে, Model আমাদের মনে করিয়ে দেয় যে tactile, auditory, অথবা অন্য form-ও বিবেচনা করা দরকার হতে পারে। Domain data user experience-এ কী ভূমিকা রাখে তা বর্ণনা করে; তাই data classify করার আগে জিজ্ঞাসা করতে হয় interaction-এ তার ভূমিকা কী। data যদি দেখার জন্য হয়, সেটি visual; শোনার জন্য হলে auditory; অনুভব করার জন্য হলে tactile। data যদি এখনও নির্দিষ্ট sense-এ committed না হয়, যেমন text file, সেটি symbolic। আর একাধিক sensory category এক অভিজ্ঞতা হিসেবে কাজ করলে, যেমন visual, sound, এবং controller vibration যুক্ত video game, সেটি multisensory।

### মডেলে Domains-এর ভূমিকা

Data কোনো domain-এ classified হলে interaction-এর starting point পরিষ্কার হয়। তখন আমরা জানি system কোন information handle করছে, user কী অভিজ্ঞতা পাবে, এবং communication-এর অন্য form বিবেচনা করা দরকার কি না। category নির্ধারিত হলে Model data-এর type শনাক্ত করা থেকে interface-এর ভেতর data কীভাবে চলে তা বর্ণনা করার দিকে যেতে পারে।
