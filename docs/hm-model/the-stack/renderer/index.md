---
title: Renderer
sidebar_position: 6
---

<h3>*Layer 3*</h3>

## Summary

The **renderer** layer is responsible for converting structured component graphs (Layer 4) into perceivable output. It takes the organized, domain-specific interpretation of an application and translates it into signals the system can deliver to the end-user. Although rendering is often associated with graphics, CatalystUI defines rendering broadly: any transformation of structured data into perceivable output is a form of rendering.

A renderer works on a fully constructed domain frame, interpreting its components, layouts, and structural relationships into domain-appropriate output. For visuals, this may involve drawing shapes, images, and text. For audio, it may involve mixing waveforms or producing sound. For haptics, it may involve generating vibration patterns. Regardless of domain, the renderer’s role is the same: it produces output that the system can present through its devices.

This layer exists because structure alone is not perceivable. A frame describes what should be represented and how it is organized, but not how it becomes sensory output. That transformation is unique to each domain and requires domain-specific engines, libraries, or hardware. The renderer is therefore the first moment where Catalyst interacts directly with system output mechanisms.

## Qualifications

This layer is distinct because it handles the transformation from structured representation to perceivable output.

- **Domain-specific conversion:** Each sensory domain uses its own renderer.
- **Output-focused:** Responsible only for producing output, not organizing or interpreting structure.
- **System-facing:** Interfaces directly with windows, system-level APIs or hardware.
- **Deterministic:** Rendering is a predictable transformation from structured input to output signals.
- **Non-mutating:** Does not alter the underlying component or graph state.

## Responsibilities

The renderer layer defines how structured domain data becomes perceivable output.

- **Interpret** domain frames and convert structures into domain-specific output.
- **Transform** component properties into renderable forms (pixels, sound waves, vibrations, etc.).
- **Interface** with windows, system APIs, libraries, or drivers.
- **Maintain** rendering pipelines or update loops.
- **Optimize** rendering performance based on domain and hardware constraints.
- **Deliver** perceivable output through appropriate devices.

## Examples of Renderers

### 1. Visual Renderers

- An OpenGL renderer drawing shapes, images, and text.
- A Vulkan renderer generating GPU command buffers.
- A Metal renderer using hardware acceleration.
- A software rasterizer for constrained environments.

### 2. Audio Renderers

- An OpenAL renderer mixing sound effects and music.
- An FMOD-based renderer managing channels and effects.
- A synthesis engine generating tones or waveforms.
- A spatial audio renderer producing directional cues.

### 3. Haptic Renderers

- A gamepad haptic engine producing vibration patterns.
- A mobile-taptic renderer generating taps or textures.
- A microcontroller-based force-feedback renderer.
- A wearable-device renderer emitting directional haptic cues.

### 4. Specialized or Emerging Renderers

- A lighting renderer controlling smart lighting devices.
- A speech renderer producing synthetic voice.
- A scent renderer (experimental domain).
- A braille-display renderer for tactile output.

### 5. Multi-Domain Rendering Pipelines

- Visual + audio rendering for multimedia applications.
- Visual + haptic rendering for immersive interaction.
- Audio + speech rendering for accessibility.
- Visual, audio, and lighting renderers operating in parallel.

Across all these examples, the renderer’s identity remains consistent: **it transforms structured domain information (Layer 4) into perceivable signals delivered through the system.**
