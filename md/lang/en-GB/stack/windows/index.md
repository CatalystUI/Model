# 5.7 The Stack :: Windows

## In-Depth Discussion

### The Bounded Delivery Layer

**Windows** are the layer where rendered output receives a bounded delivery context. Layer 3 transforms prepared interface state into output-ready form, but that output still needs a defined place, channel, or view through which it can be delivered by the system. Layer 2 provides that boundary.

A window should be understood as a logical delivery context rather than merely a visual box on a screen. In a graphical environment, a window commonly appears as a visible region managed by an operating system. In the Model, however, the concept is broader: a window is the system-facing context through which output can be provided and interaction can be received. It defines where the rendered result belongs within the surrounding system.

### A View Into the System

The window acts as a view into the system. It does not create the system, and it does not replace the renderer. Instead, it provides the bounded context where the renderer’s output can be connected to system-level delivery. This boundary may involve position, size, focus, visibility, device context, output channel, or another form of system-defined scope.

This matters because rendered output does not exist for the user in isolation. It must be delivered somewhere. A renderer may produce visual commands, audio samples, haptic instructions, or another domain-specific output, but those results still need to be associated with a system-recognised context. The window provides that association.

In visual interfaces, this is easy to recognise because the window may correspond to a rectangular area on a display. In other domains, the same conceptual role may be fulfiled by a command-line session, audio output context, device channel, virtual viewport, or another bounded system-facing interface. The defining feature is not visual appearance. The defining feature is that the window provides the delivery boundary between rendered output and the system.

### Relationship to Renderers

Windows receive output from Renderers, but they do not perform rendering themselves. Rendering is the transformation of prepared interface state into output-ready form. Windowing is the act of giving that output a bounded system context through which it can be delivered.

This distinction keeps Layer 2 from absorbing the responsibilities of Layer 3. A renderer should decide how organised interface state becomes output-ready. A window should provide the system-facing place or channel where that output can be sent. The renderer transforms; the window contains, receives, and forwards.

This also allows different renderers to target different window types. A visual renderer may target a graphical window, while an auditory renderer may target an audio output context. The specific implementation can vary by system and domain, but the layered responsibility remains consistent.

### Relationship to the System

Windows depend on **Layer 1: Systems** because they are usually created, managed, constrained, or recognised by the surrounding platform. A system may determine how windows are created, how they receive input, how they expose output channels, what resources they can access, and how they interact with hardware or lower-level services.

This does not make the window identical to the system. The system is the broader operating environment that provides hardware access, device services, scheduling, permissions, drivers, and platform behaviour. The window is a bounded logical context within that environment. It is the interface-facing context that allows rendered output and interaction to pass between the Stack and the system.

By separating Windows from the System, the Model avoids treating every platform detail as part of the interface boundary. The window represents the specific system-facing context used by the interface. The system represents the larger environment that makes that context possible.

### Output Delivery

In top-down flow, the window receives output-ready representation from the renderer and passes it toward the system. This is the stage where rendered output is no longer merely prepared by the interface; it is assigned to a delivery context that the system can use.

The window may manage bounds, focus, buffering, visibility, channel state, or other delivery conditions depending on the domain and implementation. These details affect how output moves into the system, but they do not change the layer’s primary role. The window provides the boundary through which rendered output can become system output.

Once the output passes through the window, the system can carry it toward the relevant device, service, or physical process that allows the user to perceive it. The window is therefore close to perceivability, but it is not perception itself. It remains part of the computer-side flow.

### Interaction Entry

In bottom-up flow, the window is the first explicit Stack layer where system-provided interaction becomes available to the modelled interface. The system may detect a key press, pointer movement, touch event, device signal, audio command, or another form of input. The window receives that interaction within its own bounded context and forwards it upward for further routing and handling.

This makes the window central to interaction because it provides context for the action. An interaction is not only that something happened, but that it happened within a particular system-facing boundary. Focus, position, timing, device source, channel, or active context may determine how the rest of the Stack should understand and route the interaction.

The window does not usually decide the final meaning of the interaction. That responsibility belongs higher in the Stack, especially once the interaction reaches the appropriate control. The window’s role is to receive the interaction from the system, associate it with the correct boundary, and pass it upward in a form the rest of the Stack can continue processing.

### Domain Independence

Windows are domain-independent in the same way the rest of the Stack is domain-independent. The word “window” is often associated with graphics, but in CatalystUI it refers to any bounded system-facing context for output and interaction. The domain determines what kind of output and input the window carries; the Stack position determines what role the window performs.

This allows the same layer to describe graphical windows, text sessions, audio channels, tactile output contexts, or other forms of interface delivery without changing the Model. Each implementation may have different system requirements, but each fulfils the same conceptual responsibility: it provides the boundary through which rendered output and system interaction pass.

### Why the Layer Matters

Windows keep the Stack from treating rendered output as though it reaches the user automatically. A renderer can transform interface state into output-ready form, but that output still needs a system-facing context. Layer 2 supplies that context.

By separating Windows from both Renderers and the System, the Model preserves a clean delivery path. Renderers transform prepared interface state into output-ready representation. Windows provide the bounded context through which that representation enters the system. The System then performs the lower-level work required to deliver output and receive input. This distinction allows CatalystUI to describe interface delivery across platforms and domains without reducing windows to visual rectangles or forcing renderers to manage platform-level behaviour.
