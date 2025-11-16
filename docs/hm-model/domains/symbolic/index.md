---
title: Symbolic
sidebar_position: 1
---

## Summary

Not all data maps cleanly to a single human sense. In fact, much of the information computers handle doesn’t inherently “belong” to sight, sound, touch, or any other perception. Early on, it’s easy to assume that a text file is innately “visual,” or that an audio file is inherently “auditory,” but this isn’t true. A file—any file—is only a container of meaning, not the meaning itself. This is why the symbolic domain exists.

**Symbolic** data represents information before it has chosen a sensory channel. It is the purest form of representation: structured, encoded, stored, but not yet committed to how it will eventually be perceived. It’s the flexible middle ground where data still holds its potential—capable of becoming visual, auditory, tactile, or anything else depending on how it moves through the stack.

The symbolic domain appears most strongly in the top layers of CatalystUI, where the line between “what the data is” and “how the data will be experienced” becomes blurred. Here, the model recognizes that data does not yet speak the language of human senses; it simply exists, waiting to be interpreted.

Symbolism through symbolic data is the foundation from which every perceivable experience is eventually formed.

## Core Characteristics

Before data chooses a sensory channel, it exists in the symbolic domain—a space defined not by how information is perceived, but by how it is represented. Symbolic data carries meaning without committing to sight, sound, touch, or any other sense. It is the neutral foundation from which all other domains emerge, holding structure and potential long before any renderer gives that structure a perceptual form.

- **Sensory-neutral:** Symbolic data does not inherently express itself to any human sense. Meaning must be assigned through interpretation or rendering.
- **Flexible in representation:** The same block of symbolic data can be turned into vastly different sensory outcomes depending on the renderer and domain chosen.
- **Structured, not perceptual:** Symbolic data describes *what something is*, not *how humans will experience it*. Structure and semantics play a major role here.
- **Lives primarily in the upper stack:** Symbolic appears most often in Digital Data (Layer 7) and Structure & Semantics (Layer 6), before the model’s perceptual decisions are made.
- **Essential for cross-domain conversion:** Many domain transformations—like text-to-speech, image metadata parsing, or waveform analysis—start by working with symbolic forms.

## Appearances in The Stack

- **Layer 7 – Digital Data:** Raw bytes, strings, streams, and encoded formats almost always begin as symbolic, because nothing about their storage determines how they should be perceived.

- **Layer 6 — Structure & Semantics:** When parsed, symbolic data becomes structured meaning—still abstract and not yet sensory, but understood and ready for interpretation.

- **Layer 5 and below:** Symbolic may appear here only briefly or indirectly, usually during parsing or conversions. Once data enters the perceptual layers, it generally transitions into its target domain (visual, auditory, tactile, etc.).

## Examples of Symbolic Data

Symbolic data appears in more places than most people expect. Many formats we instinctively associate with sight, sound, or touch are, in their stored form, simply encoded meaning waiting to be interpreted. Here are some clearer illustrations:

### 1. Text Files (e.g., `.txt`, `.json`, `.xml`)

These files store encoded characters as raw bytes, not visual content. They become perceivable only when rendered as text, spoken aloud, or converted into another sensory form.

### 2. Image Files (e.g., `.png`, `.jpg`, `.bmp`)

Image formats contain pixel data, metadata, and compression structures, but none of these are inherently visible. They only enter the Visual domain when decoded and drawn onto a surface.

### 3. Audio Files (e.g., `.mp3`, `.wav`, `.ogg`)

Audio formats store frames, samples, and bitrates symbolically. Sound exists only after these values are interpreted by an audio renderer.

### 4. Scripts, Code, and Structured Documents (e.g., `.cs`, `.lua`, `.ini`, `.yaml`)

These formats describe logic, structure, or configuration purely in symbolic form. Their meaning becomes perceivable only through interpretation or execution.

### 5. Sensor and Telemetry Data (e.g., GPS coordinates, gyroscope readings, pressure values)

Raw sensor outputs are numeric or binary representations without inherent perception. They only gain sensory meaning when mapped to visuals, audio cues, or tactile alerts.

### 6. Binary Formats (e.g., executable binaries, video containers, custom binary structures)

Binary data represents encoded structures and semantics, not perceivable content. Only through decoding and rendering do they produce visuals, audio, interaction, or behavior.
