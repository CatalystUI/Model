---
title: Window
sidebar_position: 7
---

<h3>*Layer 2*</h3>

## Summary

The **window** layer represents a *view into the system* — the place where rendered output (Layer 3) is ultimately directed and where interaction signals begin their journey upward through the stack. In CatalystUI, a window is not inherently graphical. It is simply the domain-specific surface through which a renderer communicates with the system, whether that surface emits pixels, sound, vibrations, text, or anything else.

Traditional computing environments have conditioned developers to think of windows as rectangular graphical surfaces on a screen. CatalystUI removes that assumption. A window is whatever a domain uses to present perceivable output and receive interactions. For visuals, that might be a GLFW or SDL window. For audio, it might be an audio device session. For a command-line interface, it might be a terminal buffer. For haptics, it might be a device endpoint that can receive vibration commands. The concept stays the same even as the form changes.

This layer exists because rendering alone does not guarantee presentation. A renderer produces output, but output must have somewhere to go. A window provides that destination — the system-facing context where rendered signals become actionable by the operating system and, eventually, by the physical world.

## Qualifications

This layer is distinct because it defines the boundary between CatalystUI and the system-level output environment.

- **System-facing view:** A window represents a domain-specific surface exposed by the system.
- **Domain-agnostic concept:** Windows are not inherently graphical; any domain may define its own window type.
- **Presentation endpoint:** The renderer writes its output *into* a window.
- **Interaction source:** Input from the system (keyboard, mouse, audio input, haptic feedback sensors, etc.) enters the stack through a window.
- **Lifecycle-managed:** Windows define creation, destruction, resizing, and other state transitions for the domain surface.

## Responsibilities

The window layer provides the system-level context in which rendering and interaction take place.

- **Expose** a presentable surface or endpoint for rendered output.
- **Deliver** system-level input events upward into the Catalyst stack.
- **Manage** the lifecycle of domain-specific window objects (open, close, resize, focus, etc.).
- **Coordinate** with the renderer to ensure output is displayed or emitted correctly.
- **Translate** OS-level windowing events into Catalyst interactions.
- **Provide** system-specific handles, contexts, or descriptors required by renderers.

## Examples of Windows

### 1. Visual Windows

Windows that represent graphical surfaces for visual output.

- A GLFW window created on desktop platforms.
- An SDL window supporting multiple rendering backends.
- A native Cocoa window on macOS.
- A custom framebuffer window for embedded displays.

### 2. Audio Windows

Windows for auditory domains — surfaces that receive sound output.

- An audio device session representing speakers or headphones.
- An OpenAL device/context pair.
- A WASAPI or CoreAudio output session.
- A virtual audio endpoint for synthesized or redirected output.

### 3. Text-Based Windows

Specialized windows for non-graphical, text-driven environments.

- A terminal or console window.
- A REPL environment surface.
- A remote SSH session acting as a command-line window.
- An interactive text buffer for embedded systems.

### 4. Haptic or Device-Specific Windows

Windows representing endpoints for tactile or domain-specific output.

- A haptic actuator device session.
- A force-feedback motor controller window.
- A VR controller haptic endpoint.
- A wearable device’s tactile output channel.

### 5. Multi-Domain Window Configurations

Applications may use multiple windows across multiple domains simultaneously.

- A graphical window + audio window + haptic window for immersive applications.
- A console window + audio window for command-line multimedia tools.
- A visual window + lighting-frame window for dynamic lighting control.
- A headless audio window for servers generating only sound output.

Across all examples, the identity of this layer remains clear: **a window is the system-facing view through which a domain presents output and receives input.** It is not inherently graphical, nor does it interpret or render. It provides the environment where rendering becomes real.
