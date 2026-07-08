<!--
این ترجمه توسط ChatGPT ایجاد شده و باید توسط مترجم انسانی بازبینی شود.
پس از تأیید ترجمه، این خطوط را در یک pull request حذف کنید.
-->

# 8. مرجع

## برگه مرجع مدل CatalystUI

این صفحه خلاصه‌ای سریع از مفاهیم اصلی مدل را فراهم می‌کند تا هنگام طراحی، پیاده‌سازی یا دیباگ بتوانید به آن رجوع کنید.

### دسته‌های اصلی مدل

```md
CatalystUI Model

1. Domains
   - داده را بر اساس ماهیت حسی یا نمادین دسته‌بندی می‌کند.

2. The Stack
   - نقش و جایگاه داده را در جریان انسان و سیستم توصیف می‌کند.

3. Connectors
   - داده را میان لایه‌ها و گاهی میان دامنه‌ها تبدیل، حمل یا ترجمه می‌کند.
```

### The Stack

```md
[Implied] Data Storage
  Produces Digital Data

Layer 7: Digital Data
  Active computer-readable data

Connector: Data

Layer 6: Structure & Semantics
  Interpreted, structured, usually immutable data

Connector: Parser

Layer 5: Components, Controls, & Layouts
  Mutable usable interface elements and interaction handling

Connector: Adapter

Layer 4: Graphs & Frames
  Organized context, routing, bounds, and frame preparation

Connector: Bridge

Layer 3: Renderers
  Converts prepared data into output-ready form

Connector: Surface

Layer 2: Windows
  Bounded delivery and interaction context

Connector: Native

Layer 1: Systems
  Runtime environment, devices, platform services

[Implied] Human Interface
  Consumes Perceivable Data and produces Interaction Data
```

### Domains

```md
1. Symbolic
   Pre-placement, sensory-neutral, meaning-bearing forms

2. Visual
   Data intended for sight

3. Auditory
   Data intended for hearing

4. Tactile
   Data intended for touch

5. Olfactory
   Data intended for smell

6. Gustatory
   Data intended for taste

7. Multisensory
   Integrated multi-sense or multi-channel experiences
```

### Connectors

```md
Data
  Layer 7 ↔ Layer 6
  Connects active digital data to structure and semantics.

Parser
  Layer 6 ↔ Layer 5
  Converts interpreted structures into usable components, controls, and layouts.

Adapter
  Layer 5 ↔ Layer 4
  Places usable interface elements into graphs, frames, and broader context.

Bridge
  Layer 4 ↔ Layer 3
  Carries organized frame/graph data into renderers.

Surface
  Layer 3 ↔ Layer 2
  Transfers renderer output into a bounded window context.

Native
  Layer 2 ↔ Layer 1
  Connects windows to system-level services and native behavior through bindings.
```

### جریان بالا به پایین

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

این مسیر توضیح می‌دهد چگونه داده دیجیتال به خروجی قابل ادراک تبدیل می‌شود.

### جریان پایین به بالا

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

این مسیر توضیح می‌دهد چگونه کنش انسان به interaction و سپس به تغییر یا پردازش داده دیجیتال تبدیل می‌شود.

### عبارت کوتاه برای یادآوری

```md
Domains categorize data.
The Stack describes data.
Connectors transform data.
```

ترجمه مفهومی:

```md
دامنه‌ها داده را دسته‌بندی می‌کنند.
Stack داده را توصیف می‌کند.
اتصال‌دهنده‌ها داده را تبدیل می‌کنند.
```
