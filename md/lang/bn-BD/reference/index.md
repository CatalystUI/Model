<!--
এই অনুবাদটি ChatGPT দ্বারা তৈরি করা হয়েছে এবং একজন মানব অনুবাদক দ্বারা পর্যালোচনা করা উচিত।
অনুবাদটি যাচাই হয়ে গেলে একটি pull request-এ এই লাইনগুলো সরিয়ে ফেলুন।
-->

# 7. Reference

## Quick Reference

এই reference page CatalystUI Model-এর main pieces দ্রুত মনে রাখার জন্য। বিস্তারিত ব্যাখ্যার জন্য Stack, Connectors, Domains, এবং Interactions অংশ পড়ুন।

## The Flow of Information

CatalystUI Model information system এবং user-এর মধ্যে reversible flow describe করে। Top-down flow-এ stored বা active Digital Data interpreted, organized, rendered, delivered, এবং perceived হয়। Bottom-up flow-এ user action Interaction Data হিসেবে system-এ ফিরে আসে এবং eventually Digital Data বা Data Storage পরিবর্তন করতে পারে।

```md
Data Storage
↓
Layer 7: Digital Data
↓
Layer 6: Structure & Semantics
↓
Layer 5: Components, Controls, & Layouts
↓
Layer 4: Graphs & Frames
↓
Layer 3: Renderers
↓
Layer 2: Windows
↓
Layer 1: Systems
↓
Human Interface
```

## The Stack

1. **[Implied] Data Storage** — যেখানে content, state, বা resource active Stack-এ প্রবেশ করার আগে available থাকে এবং result পরে preserve হতে পারে।
2. **Layer 7: Digital Data** — active computer-readable representation, যেমন file content, stream, document, response, বা buffer।
3. **Layer 6: Structure & Semantics** — data কীভাবে read ও understood হবে তার rules এবং সেই rules apply করার পরে structured result।
4. **Layer 5: Components, Controls, & Layouts** — mutable usable interface objects, direct interaction behavior, এবং arrangement।
5. **Layer 4: Graphs & Frames** — components-এর relationships, context, bounds, routing, এবং renderer-facing preparation।
6. **Layer 3: Renderers** — prepared interface data-কে domain-specific output-ready form-এ transform করে।
7. **Layer 2: Windows** — system-facing bounded context যেখানে rendered output যায় এবং system interaction ফিরে আসে।
8. **Layer 1: Systems** — hardware, operating environment, services, device input/output, এবং platform behavior।
9. **[Implied] Human Interface** — user, যিনি output perceive করেন এবং interaction produce করেন।

## Connectors

1. **DataHandler** — `Digital Data ↔ Structure & Semantics`; active data access/read/write boundary।
2. **Parser** — `Structure & Semantics ↔ Components, Controls, & Layouts`; structured meaning থেকে usable objects।
3. **Adapter** — `Components, Controls, & Layouts ↔ Graphs & Frames`; usable pieces থেকে organized context।
4. **Bridge** — `Graphs & Frames ↔ Renderers`; contextual interface state থেকে renderer input।
5. **Surface** — `Renderers ↔ Windows`; rendered output থেকে window delivery context।
6. **NativeHandler** — `Windows ↔ Systems`; window এবং native/system APIs-এর boundary।

## Domains

1. **Symbolic** — representation-based data, sensory output-এ committed হওয়ার আগে। উদাহরণ: files, markup, settings, source code।
2. **Visual** — sight-এর জন্য shaped data। উদাহরণ: images, rendered text, visible controls।
3. **Auditory** — hearing-এর জন্য shaped data। উদাহরণ: speech, music, alerts, sound effects।
4. **Tactile** — touch/feeling-এর জন্য shaped data। উদাহরণ: haptics, vibration, physical feedback।
5. **Olfactory** — smell-এর জন্য shaped data। উদাহরণ: scent output, odor warning।
6. **Gustatory** — taste-এর জন্য shaped data। উদাহরণ: flavor/taste-based signal।
7. **Multisensory** — coordinated output across multiple senses as one unified experience। উদাহরণ: video with audio, game feedback combining visuals/sound/haptics।

## Short AI Prompt

```md
CatalystUI is a model for describing the complete flow of information between a user and an information system. It separates interaction into Domains, the Stack, and Connectors. Domains classify the kind of data. The Stack describes where data is in the process. Connectors transform data between adjacent layers. The Stack includes implied Data Storage, Layer 7 Digital Data, Layer 6 Structure & Semantics, Layer 5 Components/Controls/Layouts, Layer 4 Graphs & Frames, Layer 3 Renderers, Layer 2 Windows, Layer 1 Systems, and implied Human Interface. The Model is reversible: digital data can become perceivable output, and user interaction can return upward to change digital data.
```

## Common Mapping: Web

- **Data Storage** — server, database, file system, API-backed service
- **Digital Data** — fetched HTML, CSS, JavaScript, images, and resources
- **Structure & Semantics** — HTML semantics, CSS rules, JavaScript behavior definitions
- **Components, Controls, & Layouts** — page elements, buttons, forms, links, images, layout containers
- **Graphs & Frames** — document and DOM context
- **Renderers** — browser rendering engine
- **Windows** — browser window/tab/context
- **Systems** — operating system, browser runtime, device services
- **Human Interface** — user viewing and interacting with the page

## Common Mapping: Door Sensor

- **Human Interface** — person approaching the door
- **System** — controller, wiring, motor, power, sensor hardware
- **Window** — doorway detection context
- **Renderer** — mapping physical signal into usable event/output command
- **Graphs & Frames** — doorway state, detection area, current context
- **Components, Controls, & Layouts** — decision logic: open, stay open, close
- **Structure & Semantics** — settings such as sensitivity and delay format
- **Digital Data** — active settings/state representation
- **Data Storage** — retained configuration or state
