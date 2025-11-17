---
title: Graphs & Frame
sidebar_position: 5
---

<h3>*Layer 4*</h3>

## Summary

The **graphs and frame** layer is the structural center of CatalystUI. After Layer 5 creates mutable components, each standing alone, Layer 4 organizes those components into coherent structures that can be traversed, updated, and prepared for rendering. Until this layer, the application is a collection of independent objects. Here, those objects become a structured domain.

A **graph** represents how components relate to each other. Graphs may form trees, lists, hierarchies, routing structures, or other organizational forms depending on the domain. An application often uses multiple graphs for the same domain, each representing a different structural perspective — for example, one graph for layout, another for render ordering, another for timing or animation. This plurality is intentional.

A **frame** is the top-level structural container for an *entire domain*. Catalyst maintains **one frame per domain**—such as a visual frame, an audio frame, or a haptic frame. Each frame contains all the graphs that domain needs. The frame defines boundaries, triggers structural recalculations, forwards domain-wide events, and prepares the domain’s structured representation for Layer 3.

Layer 4 exists because mutability alone does not create structure. Layout intent in Layer 5 is not yet organization; components do not yet know where they belong. Structure emerges only when graphs interpret components and layout rules into explicit arrangement. The frame then integrates these graphs into a unified domain that Layer 3 can render.

## Qualifications

- **Organizational layer:** Introduces explicit relationships between components.
- **Domain-scoped frames:** One frame per sensory domain.
- **Multiple graphs:** A domain may hold several structural interpretations.
- **Layout interpretation:** Converts layout intent into structure.
- **Pre-render organization:** Prepares structured domain data for Layer 3.
- **Not a parser:** Does not interpret digital data or structures.

## Responsibilities

- **Assemble** components into structured graphs.
- **Interpret** layout rules into explicit structural arrangements.
- **Maintain** hierarchy, ordering, and traversal paths.
- **Propagate** global domain changes (resize, reflow, recompute).
- **Provide** the domain’s unified structural container (frame).
- **Prepare** domain structure for rendering in Layer 3.

## Examples of Graphs & Frame

### 1. Structural Graphs

- A visual component tree representing UI hierarchy.
- An audio graph organizing channels and playback.
- A haptic graph defining vibration nodes and spatial mapping.
- A logical graph grouping components by behavior.

### 2. Layout Interpretation

- Vertical layout → ordered list of children.
- Grid layout → row and column placement.
- Scroll layout → scroll regions and offsets.
- Categorization layouts → domain-specific grouping.

### 3. Domain Frames

- Visual frame containing all visual graphs.
- Audio frame orchestrating the audible domain.
- Haptic frame coordinating tactile components.
- Lighting frame organizing illumination components.

### 4. Multi-Graph Domains

- Visual: component tree + render graph + animation graph.
- Audio: playback graph + effects routing graph.
- Haptic: spatial graph + timing dependency graph.
- Visual: logical grouping graph + z-order graph.

### 5. Domain-Agnostic Structures

- Navigation graphs for screen flows.
- Animation dependency graphs.
- Spatial graphs for 3D/AR components.
- IoT sensor graphs representing relationships.

## A Note on Why “Graphs” Is Plural and “Frame” Is Singular

Graphs are plural because a domain often requires multiple structural interpretations. For example, the visual domain might include a component tree, an animation graph, and a render-order graph; each plays a different structural role. “Frame” is singular because Catalyst provides one frame per domain — the one container responsible for managing that domain’s full structural interpretation. All graphs within a domain live inside that domain’s frame.

## Common Misunderstandings About Layer 4

### 1. “Graphs parse digital data.”

Parsing belongs to **Layer 6**, not Layer 4.

### 2. “Graphs and layouts are the same.”

Layouts express intent; graphs express structure.

### 3. “Frame is global to the whole app.”

Frame is singular **per domain**, not per application.

### 4. “Graphs apply only to visuals.”

Graphs exist in all sensory domains.

### 5. “Graphs store digital data.”

Graphs store **components**, not structures or raw data.

### 6. “Frame renders the domain.”

Frame prepares structure; **Layer 3** renders.

### 7. “Graphs replace components.”

Graphs organize components; they do not replace them.
