# 3. Reference

Below is the CatalystUI Model summarised in a variety of formats to make it easier to reference, copy, and apply while studying, documenting, or implementing the Model.

The Reference page is not intended to replace the surrounding documentation. Instead, it provides a compact view of the Model after the terminology, summary, domains, stack, connectors, and interactions have already been introduced.

## By AI Prompt

An AI prompt which can allow an LLM to interpret and understand the CatalystUI Model. This can be used to ask questions about the Model, compare existing systems against it, or provide a reference sheet when solving problems in a technical environment.

---

```md
The CatalystUI Model is a universal model for describing the flow of information between a user and an information system.

A process is something that accepts an input, performs a transformation, and produces an output. A system is an organised set of processes, defined by how they interact and the order in which they are executed. An interface is a mechanism which allows two differing systems to interact. An information system is a specialised system that works with persistent data and allows a user to create, read, update, or delete it through an interface over time. A computer is an information system that exclusively works with digital data, or data that can be represented in binary and processed by a machine. A user is a person who can interact with an information system.

In the CatalystUI Model, the terms "data" and "information" are treated as interchangeable.

The Model describes user interfaces through the flow of information. Information may be presented by a system, interpreted by the user, responded to by the user, processed by the system, and presented again as the cycle continues. The cycle can begin at any point, but the same pattern applies: information flows between the user and the information system through an interface.

The CatalystUI Model is split into three primary categories:

- Domains
- The Stack
- Connectors

Domains categorise data. The Stack describes data. Connectors transform, modify, and translate data.

Domains describe what kind of information is being handled during an interaction. The seven top-level domains are Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory, and Multisensory. Symbolic data is information before it has been committed to a specific sense. Visual data is information meant to be seen. Auditory data is information meant to be heard. Tactile data is information meant to be felt. Olfactory data is information meant to be smelt. Gustatory data is information meant to be tasted. Multisensory data is information where multiple sensory categories work together as one experience.

The Stack describes where information is located in the flow. It contains seven explicit layers with two implied endpoints. From top to bottom, the Stack is:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage is the implied source or destination where persistent data remains available beyond the active interface flow. Digital Data is data after it has entered the active interface flow in a computer-readable form, but before the rest of the Model has interpreted, organised, or presented it. Structure & Semantics describes how digital data should be understood; semantics define the rules for interpreting data, while structure is the organised result of applying those rules. Components, Controls, & Layouts represent the logical and usable parts of the interface; components represent usable interface objects, controls process interactions, and layouts arrange other components or controls. Graphs & Frames organise those parts into larger relationships and active contexts; graphs represent organised relationships among interface objects, while frames contain and coordinate graphs for renderer-facing preparation. Renderers transform prepared interface data into an output-ready form. Windows provide a view or context through which the user can provide input to or receive output from the system. Systems provide the environment, services, devices, and processes which ultimately deliver output and receive input. The Human Interface is the implied endpoint where the user perceives information and responds through interaction.

Connectors describe how information moves between neighbouring explicit layers of the Stack. From top to bottom, the connectors are:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

The Data connector connects Digital Data to Structure & Semantics. It brings active computer-readable information into a structured form the Model can understand, and it can also return structured information back into digital form.

The Parser connector connects Structure & Semantics to Components, Controls, & Layouts. It parses stable interpreted structures into mutable interface parts, and it can also return modified components back into structured data.

The Adapter connector connects Components, Controls, & Layouts to Graphs & Frames. It adapts usable interface parts into organised relationships and active contexts, and it helps return contextual interactions to the components or controls that can handle them.

The Bridge connector connects Graphs & Frames to Renderers. It carries organised interface context into the renderer and usually passes interactions back upward with little modification so the graph and frame can route them appropriately.

The Surface connector connects Renderers to Windows. It gives rendered output a destination inside the window and carries window-originating interaction information back upward.

The Native connector connects Windows to Systems. It provides bindings between the window and the system, allowing the window to exist, receive interactions, deliver output, and communicate with native system behaviour.

Interactions are the point where the Model becomes participatory. An interaction is the intent behind an action. The click, tap, swipe, command, movement, or spoken word is only the visible action; the interaction is what the user is trying to accomplish through that action. Interactions move through the Stack, are transformed by connectors, and may eventually modify digital data before the cycle begins again.

Use the CatalystUI Model to classify the kind of information being handled, identify where that information is located in the Stack, determine which connector is responsible for the transition between layers, and trace how information moves from stored data to user experience and from user intent back into data.
```

## By Text

A compact reference sheet showing the primary order of the CatalystUI Model.

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | Quick Meaning                                                   |
| ------------ | --------------------------------------------------------------- |
| Symbolic     | Information before commitment to a specific sense.              |
| Visual       | Information meant to be seen.                                   |
| Auditory     | Information meant to be heard.                                  |
| Tactile      | Information meant to be felt.                                   |
| Olfactory    | Information meant to be smelt.                                  |
| Gustatory    | Information meant to be tasted.                                 |
| Multisensory | Multiple sensory categories working together as one experience. |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Layer   | Name                            | Quick Meaning                                                               |
| ------- | ------------------------------- | --------------------------------------------------------------------------- |
| Implied | Data Storage                    | Persistent data outside the active interface flow.                          |
| Layer 7 | Digital Data                    | Active computer-readable information before interpretation.                 |
| Layer 6 | Structure & Semantics           | Interpreted data and the rules that give it meaning.                        |
| Layer 5 | Components, Controls, & Layouts | Mutable interface parts used by the program.                                |
| Layer 4 | Graphs & Frames                 | Organised relationships and active interface context.                       |
| Layer 3 | Renderers                       | Processes that prepare information for output.                              |
| Layer 2 | Windows                         | Views or delivery contexts where input and output pass.                     |
| Layer 1 | Systems                         | The environment, services, devices, and processes underneath the interface. |
| Implied | Human Interface                 | The user who perceives output and responds through interaction.             |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Connects                                                | Quick Meaning                                          |
| --------- | ------------------------------------------------------- | ------------------------------------------------------ |
| Data      | Digital Data ↔ Structure & Semantics                    | Connects active digital data to interpreted structure. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Parses stable structures into mutable interface parts. |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adapts usable parts into organised context.            |
| Bridge    | Graphs & Frames ↔ Renderers                             | Bridges organised context into rendering.              |
| Surface   | Renderers ↔ Windows                                     | Connects rendered output to a window.                  |
| Native    | Windows ↔ Systems                                       | Provides bindings between a window and the system.     |

## By Flow

A compact reference for tracing how information moves through the Model.

---

### Output-Facing Flow

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

### Interaction-Facing Flow

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

## By Responsibility

A quick reference for identifying where something belongs in the Model.

---

| Question                                              | Use          |
| ----------------------------------------------------- | ------------ |
| What kind of information is being handled?            | Domains      |
| Where is the information located in the flow?         | The Stack    |
| How is information moving between neighbouring layers? | Connectors   |
| What is the user trying to accomplish?                | Interactions |

## By Diagnostic Question

A question-based reference for applying the Model to an existing system.

---

| Question                                                    | Likely Area                               |
| ----------------------------------------------------------- | ----------------------------------------- |
| Is data available but not understood?                       | Digital Data, Data, Structure & Semantics |
| Is interpreted data not usable yet?                         | Structure & Semantics, Parser, Components |
| Are usable parts not organised into context?                | Components, Adapter, Graphs & Frames      |
| Is organised context not reaching the renderer?             | Graphs & Frames, Bridge, Renderers        |
| Does rendered output have nowhere to go?                    | Renderers, Surface, Windows               |
| Is the window not properly connected to the system?         | Windows, Native, Systems                  |
| Did the system detect an action but miss the user's intent? | Interactions and interaction routing      |

## By One-Sentence Summary

A compact summary of the whole Model.

---

```md
The CatalystUI Model describes the flow of information between a user and an information system by categorising data through Domains, locating data within the Stack, transforming data through Connectors, and tracing user intent through Interactions.
```
