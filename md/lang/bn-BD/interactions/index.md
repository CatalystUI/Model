<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 3. Interactions

## Per-Topic Summary

একটি **interaction** হলো user intent থেকে উৎপন্ন information। user click করতে পারে, type করতে পারে, touch করতে পারে, speak করতে পারে, move করতে পারে, controller press করতে পারে, door sensor-এর detection area-তে হাঁটতে পারে। এসব action system-এর কাছে input হিসেবে আসে। CatalystUI Model interaction-কে শুধু device event হিসেবে নয়, intent-bearing information হিসেবে দেখে।

Interaction bottom-up flow শুরু করে। Human Interface action produce করে। System device বা sensor input detect করে। Window সেটিকে bounded context-এর সঙ্গে associate করে। Renderer প্রয়োজনে event transform বা map করে। Graphs & Frames context দেখে relevant component/control নির্ধারণ করে। Components, Controls, & Layouts layer-এ appropriate control interaction handle করে। তারপর change Structure & Semantics এবং Digital Data-এর দিকে উঠতে পারে, প্রয়োজনে Data Storage-এ preserve হয়।

### Intent and Context

Interaction-এর meaning কেবল “কিছু ঘটেছে” নয়। কোথায় ঘটেছে, কখন ঘটেছে, কোন context active ছিল, কোন control focused ছিল, এবং user কী করতে চাইছিল—এসব meaning তৈরি করে। একই key press text field-এ character input হতে পারে, game-এ movement হতে পারে, command interface-এ shortcut হতে পারে। Context ছাড়া interaction incomplete।

### Interactions and Output

Interaction প্রায়ই নতুন output তৈরি করে। button press state change করতে পারে, setting update করতে পারে, document edit করতে পারে, sound play করতে পারে, door open করতে পারে। তারপর updated data আবার top-down flow দিয়ে perceivable output হয়। এই reversible cycle-ই interface-কে conversation বানায়: system output দেয়, user respond করে, system process করে, output বদলায়।

### কেন Interactions গুরুত্বপূর্ণ

Interactions ছাড়া interface শুধু presentation। user intent system-এ ফিরতে না পারলে communication একমুখী হয়ে যায়। CatalystUI interaction flow explicitly describe করে যাতে input routing, accessibility, event handling, এবং data modification পরিষ্কারভাবে মডেল করা যায়।
