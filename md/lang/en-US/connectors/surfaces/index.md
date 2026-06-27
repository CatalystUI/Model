# 6.5 Connectors :: Surface

## In-Depth Discussion

### From Rendering to Delivery

The **Surface** connector sits between **Layer 3: Renderers** and **Layer 2: Windows**. It is responsible for carrying rendered output from the renderer into the window, where that output can be placed within a bounded context provided by the system.

Layer 3 is where information is converted into an output-ready form. The renderer takes the prepared data from the graph and frame and produces something that can eventually be perceived. However, rendered output still needs a destination. It needs somewhere to go, something to be connected to, and some boundary through which the system can deliver it.

That destination is represented by the Windows layer.

The Surface connector provides the crossing point between the renderer and the window. It explains how rendered output is attached to the window’s usable area, and how the renderer receives enough information from the window to keep producing output correctly. Without this connector, the renderer could produce output, but the Stack would have no explicit explanation for how that output becomes connected to the window that presents it.

In simpler terms, a renderer creates output. A window provides the place where that output can be delivered. The Surface connector allows the two to work together.

### The Rendered Area

A surface can be understood as the usable area of a window that receives rendered output. In a traditional graphical application, this might feel easy to picture: a renderer draws into the inner area of a window. However, the same principle applies more broadly. The surface is not merely “the screen.” It is the connector that gives rendered output a place within the window’s boundaries.

This matters because a renderer does not usually own the window. The renderer may know how to produce output, but the window is the layer that provides the active view into the system. The window may have a size, position, state, scale, focus, or other system-managed conditions. The Surface connector makes these conditions available to the renderer in the manner required for output to be delivered correctly.

A renderer may need to know the current bounds of the window. It may need to know when those bounds have changed. It may need a target to draw into, write into, stream into, or otherwise update. These details can vary by implementation, but the conceptual responsibility remains the same: the Surface connector connects renderer output to the window context that will contain it.

This keeps the renderer from pretending it owns the system boundary, and it keeps the window from pretending it knows how to render.

### More Than a Final Image

It can be tempting to think of the Surface connector as simply passing a finished result into a window. In some cases, that description may be close enough. A renderer prepares output, the surface carries it to the window, and the user eventually perceives the result.

However, rendering is often an ongoing relationship rather than a single delivery. A window may resize. Its active state may change. The system may request a redraw. The renderer may need to update continuously, wait for a signal, or synchronize its output with the window’s current condition. The Surface connector provides the place where this relationship can be expressed.

This is why the Surface connector is not merely a container for finished output. It is the connection between the act of rendering and the window that receives the result. It allows the renderer to respond to the conditions of the window without making the renderer responsible for being the window.

The output still belongs to the renderer. The boundary still belongs to the window. The Surface connector carries the relationship between them.

### Passing Interactions Back Up

Because the Stack is reversible, the Surface connector also participates in bottom-up flow. When an interaction begins at the system and enters a window, it must eventually move upward toward the parts of the Stack that can understand and handle it.

The Surface connector often carries this interaction from the window into the renderer. In many cases, it does not need to do much more than preserve the information and allow it to continue upward. A pointer movement, key press, focus change, resize event, or other interaction may enter through the window and then cross the surface so the renderer and higher layers can respond as needed.

This does not mean the Surface connector is responsible for deciding which component should handle the interaction. That responsibility belongs higher in the Stack, especially once the interaction reaches the graph and frame. The Surface connector simply gives the interaction a path across the boundary between the window and the renderer.

In top-down flow, the Surface connector carries rendered output into the window. In bottom-up flow, it carries window-originating interaction information back toward the renderer and the layers above it.

### Keeping the Window Separate

The Surface connector is important because it prevents the renderer and window from collapsing into the same responsibility. Without this connector, a renderer would need to know too much about the window, or the window would need to know too much about the renderer. Either direction weakens the separation that makes the Stack useful.

A window provides the active system-facing boundary. It represents the view, container, or point of delivery. A renderer produces output that can be delivered through that boundary. The Surface connector sits between them so each layer can remain focused on its own purpose.

This separation becomes especially useful when a renderer can be used with more than one kind of window, or when a window can support more than one kind of renderer. The connector gives the Model a place to describe the relationship without hardwiring the two layers together. A renderer can be attached to a suitable surface. A window can expose a suitable surface. The Surface connector explains how that attachment occurs.

This is what allows the renderer and window to cooperate without becoming indistinguishable.

### Preserving Output

A Surface connector should preserve the rendered output as it crosses into the window. This does not mean the output is never transformed, scaled, clipped, synchronized, or prepared according to the window’s requirements. It means the output should remain faithful to what the renderer produced and should be delivered in a way that matches the active window context.

If the window changes size, the Surface connector may help communicate that change. If the window becomes inactive, hidden, minimized, or otherwise unavailable, the connector may help the renderer respond appropriately. If the renderer needs a target provided by the window, the connector may hold or expose that target. These responsibilities are not the same as rendering, and they are not the same as being the window. They are the responsibilities of the connection between them.

This is the main shape of the Surface connector: it preserves the renderer’s output while adapting it to the delivery context provided by the window.

### Why the Connector Matters

The Surface connector keeps the Stack from confusing rendered output with the window that contains it. Without this connector, a renderer would be forced to act as though it owns the window, or a window would be forced to act as though it understands rendering directly.

By defining the Surface connector, the Model gives this transition a proper place.

Renderers remain responsible for converting prepared information into output-ready form. Windows remain responsible for providing the bounded system-facing context through which output and interaction can pass. The Surface connector handles the movement between them.

This is the point in the Stack where rendered information gains a destination. It is where output stops being merely produced and becomes attached to the place where it can be delivered. From there, Windows can carry the output forward into Systems, where it can finally become something the user can perceive and respond to.
