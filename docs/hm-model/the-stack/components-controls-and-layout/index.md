---
title: Components, Controls, & Layout
sidebar_position: 4
---

<h3>*Layer 5*</h3>

## Summary

The **components, controls, and layout** layer is the first layer in the CatalystUI stack where interpreted data becomes **mutable**. After Layer 6 provides an immutable, in-memory representation of digital data, Layer 5 introduces the live, changeable interfaces that developers work with as the application runs. Each component corresponds to one piece of interpreted data and exposes a mutable API that allows its state to evolve in real time.

Controls extend components by responding to interactions passing upward through the stack, giving user input or system input a direct effect on application state. Layouts define rules for how a component’s own children *should be arranged*, but do not perform any global organization themselves—the interpretation of layout intent occurs later in Layer 4.

Layer 5 represents each piece of data as a standalone mutable object. It defines the operational behavior of those objects, but **does not** define how multiple components relate, connect, or form a tree. That responsibility belongs solely to Layer 4. Here, the focus is on mutability, behavior, and per-component logic.

## Qualifications

Layer 5 is distinct because it introduces per-object mutability while still remaining structurally isolated from other elements.

- **Mutable per-component state:** Each component may evolve independently over time.
- **API exposure:** Components present developer-facing properties, methods, and events.
- **Interaction-aware:** Controls respond to and interpret user or system interactions.
- **Local layout intent:** Layouts describe how *this component* wishes to arrange its children, but do not form trees or structures.
- **No global organization:** This layer contains only individual components; structural relationships emerge later in Layer 4.

## Responsibilities

Layer 5 governs the mutable behavior and per-component operational logic of the application.

- **Wrap** an immutable structure from Layer 6 with mutable state.
- **Expose** methods and properties that allow the component’s state to change.
- **Respond** to user/system interactions via controls.
- **Define** layout rules that describe arrangement intent for a component’s children.
- **Propagate** per-component state changes upward for later structural interpretation.
- **Maintain** all behavior strictly at the per-component level, not the system level.

## Examples of Components, Controls, & Layout

These examples reflect behavior tied to individual components, without implying any tree structure, grouping, or global organization—because that belongs to Layer 4.

### 1. Components

Components wrap interpreted data and expose mutable state.

- A configuration component that updates settings derived from an immutable structure.
- An audio component exposing play, pause, seek, and volume adjustment.
- A text component enabling editing and formatting.
- A sprite component with mutable position, opacity, or rotation.

### 2. Controls

Controls are components that directly process interactions.

- A button that raises an event when pressed.
- A slider that updates a value when dragged.
- A textbox reacting to keyboard input.
- A toggle control that maintains on/off state.

### 3. Layouts

Layouts define how this component intends to arrange *its* children—not global structure.

- A vertical layout describing vertical stacking.
- A horizontal layout describing horizontal arrangement.
- A grid layout specifying row/column intent.
- A scroll layout describing overflow behavior.

Each layout simply expresses a rule or intention. The actual hierarchy or spatial relationship across the entire application is computed in Layer 4, not here.

### 4. Domain-Specific Mutable Components

Components exist beyond visual domains.

- A haptic component controlling vibration patterns.
- A lighting component adjusting brightness or color.
- A voice-command component updating based on recognized input.
- A gameplay entity component with mutable world-state properties.

Across all examples, the defining characteristic of this layer is clear: **Layer 5 contains standalone, mutable components—not organizational structures.** It defines per-object behavior and mutable state, leaving structural organization to Layer 4.

## A Note on Why “Layout” Is Singular

Within this layer’s name, the word *layout* appears in the singular form by design. Components and controls refer to categories of objects, but layout represents a **single conceptual mechanism** applied per component, not a collection of independent layout entities. A component does not maintain multiple layouts; it defines **one layout rule**, describing how its own children should be arranged once structural interpretation occurs in Layer 4. Using the singular form reinforces this boundary: layout in Layer 5 expresses intent, not the final arrangement. The actual organization of components into a hierarchical structure is the responsibility of **Graphs & Frame** in the next layer.
