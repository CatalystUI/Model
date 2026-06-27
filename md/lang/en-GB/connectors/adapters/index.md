# 6.3 Connectors :: Adapter

## In-Depth Discussion

### From Use to Context

The **Adapter** connector sits between **Layer 5: Components, Controls, & Layouts** and **Layer 4: Graphs & Frames**. It is responsible for taking mutable interface data and placing it into a larger context where it can be organised, discovered, routed, bounded, and prepared for the rest of the Stack.

Layer 5 gives the system components, controls, and layouts. These are the mutable pieces a developer can work with directly. A component may represent a piece of information. A control may respond to an interaction. A layout may organise other components according to a particular order. However, these pieces do not fully describe the environment in which they exist. They may know what they are, and they may know how they behave, but they do not automatically know how they relate to the entire interface.

The Adapter connector provides this movement from individual usable pieces into organised context. It takes the components produced through the Parser connector and adapts them into graphs and frames. This is where the Stack begins to understand not only that a component exists, but where it belongs, how it relates to other components, and how it should participate in the active interface.

In other words, the Parser connector makes structured information usable. The Adapter connector makes usable information contextual.

### Adapting Components Into Graphs

A component can exist on its own, but a user interface is rarely made of one isolated component. Even the simplest interface usually contains relationships: one component may contain another, one control may depend on a layout, one group may need to be searched, ordered, enabled, disabled, focused, or updated together.

This is where the graph becomes important.

The Adapter connector allows components, controls, and layouts to be placed into a graph so they can be organised as part of a larger whole. A graph may store components, track their relationships, expose ways to query them, and provide the surrounding logic needed to manage them as a collection. Without this step, components would remain scattered pieces of mutable data rather than participants in a unified interface.

A settings component, for instance, may be useful by itself. Once adapted into a graph, it can become part of a full settings view, connected to other sections, searched by name, updated with related values, or routed to when the user performs an action. The component has not stopped being a component, but it has gained context through the graph.

This distinction helps keep Layer 5 and Layer 4 separate. Components describe usable interface data. Graphs describe how those pieces are organised together.

### Layout Is Not the Whole Context

The Adapter connector also helps clarify the difference between a layout and a graph. Because layouts can organise components, it may be tempting to treat them as the full organisational layer of the interface. However, a layout only organises components in a particular manner. It does not necessarily describe the full relationship, lifecycle, routing, or environmental context of those components.

A vertical layout may determine that several controls should appear in order. That does not mean the layout is responsible for the entire interface. It does not need to know every active component, manage every interaction, prepare the output boundary, or act as the top-level mediator for the system. Those responsibilities belong to Layer 4.

The Adapter connector respects this distinction. It can take a layout from Layer 5 and place it into a graph, but the layout does not become the graph merely because it arranges components. The graph provides a broader organisational context, while the layout remains a component whose purpose is to arrange other components.

This separation becomes especially useful as an interface grows. Simple arrangements can remain simple, while the larger system can still provide the structure needed to manage discovery, routing, updates, and preparation for output.

### Connecting to the Frame

Layer 4 is not only concerned with graphs. It also contains the frame, which represents the active boundary and communication point between organised components and the lower layers of the Stack.

The Adapter connector helps components enter this framed context. A component may have a size, a control may have interaction behaviour, and a layout may describe relative placement, but the frame determines the bounds in which those pieces are being prepared. It is concerned with the active area, the surrounding context, and the information that must eventually be passed toward rendering.

This does not mean the Adapter connector renders anything. Rendering belongs to the lower layers. The Adapter connector prepares the organised interface so the frame can communicate it properly. It gives the frame the component relationships, layout results, and contextual information needed before the next connector carries that information toward the renderer.

In this way, the Adapter connector acts as a bridge between “these are the pieces we can use” and “this is the organised interface we are preparing.”

### Reuse Through Adaptation

One of the most powerful parts of the Adapter connector is that the same component can be adapted into different contexts. A component does not need to be permanently tied to one graph, one frame, or one kind of interface. Its meaning and behaviour can remain stable while the Adapter connector determines how it should participate in a particular environment.

A document component could be adapted into an editing graph, a preview graph, or a printing graph. A music component could be adapted into a playback graph, an editing graph, or a library graph. A group of settings components could be adapted into a simple preferences page, an advanced configuration panel, or an automated setup flow.

The underlying components may remain familiar, but their relationships and purpose change depending on the graph and frame they enter. This gives CatalystUI a clean way to express reuse without pretending that reuse means every context is identical.

The Adapter connector is what makes that possible. It allows mutable interface data to be reorganised according to purpose while keeping the component itself focused on what it represents and how it behaves.

### Returning to Components

Because the Stack is reversible, the Adapter connector also participates in the flow of interaction back toward the upper layers. When a user interacts with the system, the lower layers eventually need to route that interaction back to the appropriate component or control.

Layer 4 plays an important role in this process because it understands the organised context. The graph can help determine which component is relevant. The frame can help interpret the bounds in which the interaction occurred. Once that context is known, the Adapter connector helps return the interaction to Layer 5, where the appropriate component or control can respond.

This matters because interactions rarely arrive already attached to the exact component that should handle them. The system may know that a key was pressed, a pointer moved, a command was triggered, or a region was selected, but the Stack still needs to determine what that action means within the current interface. The Adapter connector helps carry that contextual decision back into the mutable components where the interaction can be handled.

In top-down flow, the Adapter connector places components into context. In bottom-up flow, it helps return contextual interactions to the components that can act on them.

### Preserving Identity

An Adapter connector should preserve the identity and intent of the components it adapts. When a component enters a graph or frame, it should not lose what it is. Its purpose, state, and relationship to the original information should remain recognisable, even when it is being organised into a larger system.

This does not mean the component cannot be wrapped, indexed, grouped, measured, transformed, or prepared for a specific environment. In many cases, adaptation requires additional information that the component did not originally contain. A graph may need identifiers. A frame may need bounds. A routing system may need focus information. These additions help the component participate in context, but they should not erase the component’s meaning.

The Adapter connector therefore performs a careful kind of transformation. It adds context without swallowing the component. It allows the interface to become organised without forcing every component to become responsible for the whole system around it.

### Why the Connector Matters

The Adapter connector keeps the Stack from confusing usable interface data with organised interface context. Without this connector, components would have to manage their own graphs, layouts would be mistaken for complete interface organisation, or frames would be forced to understand components without a proper transition between the two layers.

By defining the Adapter connector, the Model gives this transition a proper place.

Components, Controls, & Layouts remain responsible for mutable interface objects and direct interaction behaviour. Graphs & Frames remain responsible for organisation, context, boundaries, routing, and preparation for the lower layers. The Adapter connector handles the movement between them.

This is the point in the Stack where usable information becomes situated information. Components are no longer merely available to the program; they are placed into a living context where they can relate to one another, respond through the correct pathways, and prepare to be carried further down the Stack. From there, the organised interface can move toward rendering, delivery, perception, and response.
