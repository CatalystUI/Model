<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 5.4 The Stack :: Components, Controls, & Layouts

## In-Depth Discussion

### Usable Interface Data

**Components, Controls, & Layouts** হলো Layer 5। এখানে structured information mutable, human-friendly interface objects-এ রূপ নেয়। programmer এই layer-এ create, read, update, এবং modify করার মতো usable pieces পায়। interaction handling-এর প্রধান জায়গাও এটি।

Layer 6 data কীভাবে understood হবে তা বলে; Layer 5 বলে সেই understood data নিয়ে interface কীভাবে কাজ করবে। এখানে data user-facing behavior পায়, state update হতে পারে, method expose হতে পারে, এবং interaction respond করতে পারে।

### Components

একটি **component** হলো interface-এর একটি usable mutable element। image component, label component, audio component, document component, style component—সবই example হতে পারে। component data represent করে এবং properties বা methods expose করতে পারে, যেমন `Size`, `Position`, `Color`, `Play()`, `Pause()`। component নিজে necessarily interaction handle করে না, কিন্তু interface-এ অংশ নেয়।

### Controls

একটি **control** হলো component যা directly interaction handle করে। button click, toggle change, slider movement, text input, physical button press, voice command confirmation—সব control responsibility হতে পারে। control user intent গ্রহণ করে এবং appropriate change বা action trigger করে। Layer 5-এ interaction intent digital data পরিবর্তনের দিকে ফিরতে শুরু করে।

### Layouts

একটি **layout** হলো component যা অন্য components বা controls arrange করে। graphical UI-তে vertical/horizontal layout পরিচিত। কিন্তু layout visual-only নয়: audio items group করা, haptic patterns order করা, বা command options organize করাও layout role হতে পারে। layout relationship ও order তৈরি করে, কিন্তু পুরো interface context manage করে না; সেটি Layer 4-এর কাজ।

### কেন Layerটি গুরুত্বপূর্ণ

এই layer usable interface তৈরি করে। Structure & Semantics meaningful data দেয়, কিন্তু user বা developer direct interaction করতে পারে এমন mutable object তৈরি হয় Layer 5-এ। Components what exists, Controls what responds, Layouts how things are arranged—এই তিনটি মিলেই interface-এর practical working surface তৈরি করে।
