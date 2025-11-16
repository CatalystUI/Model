---
title: 2. Summary
sidebar_position: 3
---

import DataFlowInfographic from "/infographics/data-flow.png";

<div align="center">
  <img id="infographics-data-flow" src={DataFlowInfographic} alt="An infographic containing the text 'Digital Data' with an arrow to 'Percievable Data', to 'Interaction Data', and back to 'Digital Data.' It includes various graphics for each text, such as system files and folders, computer monitors and other output devices, and keyboards and other input devices." style={{ width: "50%", minWidth: "300px" }} />
  <p><a href="#infographics-data-flow">Infographic: Data Flow</a></p>
</div>

## Understanding Data Flow

The CatalystUI Model explains how computers turn data into something we can see, hear, or feel—and how our actions turn right back into data the computer understands. It reveals the simple, two-way conversation happening every time we interact with technology, mapping out the hidden contract between humans and machines.

CatalystUI was never about creating another framework—it was about discovering a truth that already existed. Computers and humans have always spoken the same language; we just hadn’t written down the grammar yet. The model captures that dialogue, showing how both sides contribute to the same continuous flow of information.

## The Structure of Catalyst

The CatalystUI Model isn’t just a diagram—it’s a map of how every interaction between humans and computers really works. To make it easy to understand, the model is divided into three parts:

- [**Domains**](#domains) — the senses through which data is experienced.
- [**The Stack**](#the-stack) — the path data takes as it moves between humans and machines.
- [**Connectors**](#connectors) — the bridges that keep everything working together.

Together, these three form the heartbeat of Catalyst—a complete picture of how information becomes experience, and experience becomes information again.

### Domains

At its core, Catalyst recognizes that all interaction is sensory. Data isn’t just numbers or text—it’s something meant to be *felt*. That’s where **domains** come in: they describe the way information reaches us, through the same senses we use to perceive the world.

In CatalystUI, a **domain** describes *how* information is experienced through the senses. Every piece of data—whether it’s something you see, hear, or touch—belongs to a specific sensory category. There are seven in total:

- **Symbolic** — information in its pure, abstract form; ideas, words, or code that *represent* meaning before taking any physical shape
- **Visual** — what can be seen
- **Auditory** — what can be heard
- **Tactile** — what can be felt
- **Olfactory** — what can be smelled
- **Gustatory** — what can be tasted
- **Multisensory** — unified experiences that blend multiple senses into a single, cohesive perception

Layers in the model can span across several domains at once. For example, a video player might exist within both the *Visual* and *Auditory* domains, while a haptic feedback device would belong solely to the *Tactile* domain. In this way, domains define the sensory character of each part of the model, showing how information moves from the abstract to the perceivable.

### The Stack

The **stack** is the foundation of the CatalystUI Model—a seven-layer structure (with two implied layers) that maps the entire journey of information between humans and computers. It shows how raw data becomes something we can see, hear, or feel–and how our actions flow back to change that data in return.

Each layer represents a distinct step in this cycle: from storing and structuring information, to presenting it through controls and visuals, to finally rendering it into perceivable form. The process also works in reverse, guiding human interactions back into digital meaning.

By breaking the full loop into clear, logical stages, CatalystUI reveals the hidden rhythm behind every user experience—turning complex computing into something understandable, consistent, and beautifully ordered.

**The layers of the stack include:**

- **[*Implied*]** Data Storage
- **Layer 7** — Digital Data
- **Layer 6** — Structure & Semantics
- **Layer 5** — Components, Controls, & Layout
- **Layer 4** — Graphs & Frame
- **Layer 3** — Renderer
- **Layer 2** — Window
- **Layer 1** — System
- **[*Implied*]** Human Interface

### Connectors

In the early days of Catalyst, I realized that layers alone weren’t enough. You can define structure forever, but if those layers can’t *communicate*, meaning gets trapped. **Connectors** were born from that realization. They aren’t physical cables or network links—they’re logical translators, built to bridge the gap between one level of understanding and the next.

Connectors are what make the CatalystUI Model *move*. They’re the pathways that let each layer talk to the next—translating data, refining structure, and ensuring nothing is lost as information changes form. Without them, the stack would be static—a set of ideas sitting side by side but never speaking to each other.

Each connector has a specific purpose. Some take raw data and give it meaning; others prepare it for rendering or delivery to the system. Together, they create a continuous current of translation—turning stored data into experience, and experience back into data again.

**The six connectors are:**

- **Data** — connects *Layer 7* ↔ *Layer 6* (raw data to defined structure)
- **Parser** — connects *Layer 6* ↔ *Layer 5* (structure to interactive components)
- **Adapter** — connects *Layer 5* ↔ *Layer 4* (components to organized frames)
- **Bridge** — connects *Layer 4* ↔ *Layer 3* (frames to renderers)
- **Surface** — connects *Layer 3* ↔ *Layer 2* (renderers to windows)
- **Native** — connects *Layer 2* ↔ *Layer 1* (windows to the underlying system)

Each one is perfectly positioned—anchored between two layers, carrying meaning in both directions. Together, they ensure that every part of Catalyst speaks the same language, no matter how deep the system goes.
