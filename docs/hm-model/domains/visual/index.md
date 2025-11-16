---
title: Visual
sidebar_position: 2
---

## Summary

The **visual** domain represents any data that expresses itself through sight. Unlike symbolic data, which is neutral and undecided, visual data has already chosen its sensory channel. It is meant to be seen, perceived through light, shape, color, depth, motion, or spatial arrangement. Whether it appears on a monitor, a phone screen, or a projected surface, visual data is the form we most commonly associate with computer interaction.

This domain includes everything from simple shapes and text glyphs to complex scenes, animations, and visual interfaces. Yet even here, visual data doesn’t begin as visuals. It begins symbolically—stored, structured, and eventually transformed by renderers into something the human eye can understand. The visual domain is where that transformation becomes real.

In CatalystUI, the visual domain comes alive primarily in the lower half of the stack, where symbolic data has already been parsed, structured, and prepared for perception. By the time information reaches this domain, the question is no longer “What does this data mean?” but “What should this look like to the human interface?”

Visual data is not merely displayed—it is *interpreted*, *arranged*, and *made meaningful*, forming one of the clearest bridges between digital information and human experience.

## Core Characteristics

Visual data is defined by its commitment to sight—by its transformation into shapes, colors, patterns, and spatial arrangements that the human eye can interpret. It is no longer abstract or undecided; it has become fully perceptual, bound to the sensory rules of vision and the constraints of the surfaces that present it.

- **Sight-based perception:** Visual data is specifically crafted for the human visual system—light, color, shape, motion, and spatial organization.
- **Rendered, not stored:** No file is inherently visual; it becomes visual only after a renderer interprets its symbolic structure.
- **Surfaces and viewports:** Visual data requires a target surface (a window, framebuffer, display, or projected output) to be perceived.
- **Highly structured:** Layouts, component trees, graphs, and view hierarchies strongly influence how visual data is positioned and interpreted.
- **Domain-specific constraints:** Resolution, DPI, scaling, color profiles, and transformations shape how visual data appears from system to system.

## Appearances in The Stack

The visual domain is strongest in Layers 5 through 2, though its influence often reaches back into Layer 6 during layout or text-shaping calculations.

- **Layer 5 — Components, Controls, & Layout:** Visual components—such as rectangles, text, images, and shapes—are defined here. They describe *what* must be drawn and *how* it should be arranged.

- **Layer 4 — Graphs & Frame:** Component trees and layouts are flattened and prepared into renderable visual structures. This layer determines ordering, bounds, and the visual relationships between components.

- **Layer 3 — Renderer:** Symbolic or structured data becomes true visual output here. Renderers (OpenGL, Vulkan, Direct2D, etc.) convert structures into pixels.

- **Layer 2 — Window:** Represents the visual viewport. The window receives rendered visuals and presents them to the human interface.

## Examples of Visual Data

Visual data comes in many forms—static, dynamic, simple, or complex. Below are several common examples and where they belong within the visual domain.

### 1. Rendered Images (e.g., decoded PNGs, JPEGs, or texture data)

Once decoded and drawn, image data becomes visual through color, light, and shape. The final output—what appears on a surface—is decisively part of the visual domain.

### 2. Text Rendering (glyphs, SDFs, shaped text streams)

Font outlines, glyph buffers, and SDF textures only become visual when a renderer shapes and draws them. The visual domain encompasses both rasterized text and vector-based rendering.

### 3. UI Components (rectangles, buttons, icons, overlays)

Buttons, sliders, labels, borders, and other graphical elements exist symbolically until placed and drawn. In their rendered form, they represent core examples of visual data.

### 4. Vector Graphics (paths, curves, shapes)

Bezier curves, SVG paths, line segments, and shapes are symbolic descriptions that become visual when converted into rasterized or GPU-accelerated geometry.

### 5. Animations and Transitions (motion, interpolation, frame sequences)

Anything involving motion, timing, or visually tracked change belongs to the visual domain once rendered. Even symbolic animation curves (e.g., easing functions) only become visual when displayed over time.

### 6. Rendering Effects (shadows, blurs, tints, shaders)

Drop shadows, Gaussian blurs, highlights, gradients, and shader-based effects all operate squarely in the visual domain—transforming how visual components are perceived.
