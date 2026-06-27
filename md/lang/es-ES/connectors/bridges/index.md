# 6.4 Connectors :: Bridge

## Explicación en profundidad

### De contexto a rendering

El conector **Bridge** se sitúa entre **Layer 4: Graphs & Frames** y **Layer 3: Renderers**. Es responsable de llevar datos de interfaz organizados desde el graph y el frame hacia el renderer, donde esos datos pueden empezar su conversión en output perceptible.

Layer 4 da al sistema contexto organizado. Sabe qué componentes existen, cómo se relacionan entre sí, qué límites ocupan y cómo debería entenderse la interfaz activa como un todo. Layer 3 es responsable de rendering. Toma datos preparados y los convierte en una forma que finalmente puede entregarse mediante una window y un system.

El conector Bridge existe porque estas dos capas no hablan naturalmente el mismo idioma.

Un graph organiza relaciones. Un frame define el contexto activo y los límites. Un renderer produce output. El conector Bridge es el punto de cruce entre estas preocupaciones. No necesita ser elaborado ni visible. En la mayoría de los casos, simplemente expone los datos de interfaz organizados al renderer y permite que la información de interacción vuelva hacia arriba cuando hace falta. En ese sentido, el conector Bridge hace exactamente lo que su nombre sugiere. Puentea la separación.

### Llevar el Frame hacia delante

En el flujo top-down, el conector Bridge recibe los resultados preparados de Layer 4 y los lleva a Layer 3. Esto no significa que Bridge sea responsable de organizar componentes, calcular layouts, enrutar controles o renderizar output. Esas responsabilidades pertenecen a las capas que lo rodean. Bridge existe en medio para que esas responsabilidades puedan permanecer separadas.

Puede que un frame ya haya preparado los límites activos de la interfaz. Puede que un graph ya haya organizado los componentes que pertenecen a su interior. El conector Bridge toma ese contexto preparado y lo presenta al renderer en una forma con la que el renderer pueda trabajar. Esto puede implicar pasar referencias, entradas de render preparadas, información de componentes aplanada, manejadores de recursos, datos listos para comandos o cualquier otra representación adecuada al sistema descrito.

La implementación exacta puede variar, pero la responsabilidad sigue siendo la misma. El conector Bridge no decide qué significa la interfaz. No decide cómo debería entregarse al usuario el output final. Simplemente proporciona el punto de cruce donde el contexto de interfaz organizado se convierte en datos orientados al renderer.

Esto permite que graph y frame sigan centrados en la organización mientras el renderer sigue centrado en rendering.

### Un conector silencioso

El conector Bridge a menudo parecerá más silencioso que los conectores que están por encima. El conector Data puede acceder a digital data e interpretarla. El conector Parser puede convertir estructuras en componentes mutables. El conector Adapter puede colocar esos componentes en graphs y frames. En comparación, el conector Bridge puede sentirse casi vacío.

Esa vaciedad es parte del propósito.

Un conector Bridge normalmente no debería realizar más trabajo del necesario. Su objetivo principal es permitir que graph y frame se comuniquen con el renderer sin obligar a ninguna capa a absorber las responsabilidades de la otra. Si el graph empieza a actuar como renderer, el Modelo pierde claridad. Si el renderer empieza a actuar como graph, el Modelo pierde la capacidad de describir limpiamente organización separada de output.

El conector Bridge protege esa frontera.

Puede preparar datos para el consumo del renderer, pero no debería convertirse en el renderer. Puede exponer la interfaz organizada al renderer, pero no debería convertirse en el graph. Su utilidad viene de permitir que dos capas vecinas permanezcan distintas y aun así puedan trabajar juntas.

### Pasar interacciones de vuelta hacia arriba

El conector Bridge también es importante en el flujo bottom-up. Cuando una interacción viene del sistema, se mueve hacia arriba por las capas inferiores hasta llegar al punto donde la interfaz organizada puede darle sentido. En muchos casos, el renderer puede recibir o traducir la interacción en una forma que el Stack pueda seguir enrutando, pero el renderer normalmente no sabe qué componente final debería manejarla.

Esa responsabilidad pertenece a una parte más alta del Stack.

Por eso, el conector Bridge a menudo tomará una interacción y la pasará a Layer 4 con muy poca modificación. El graph y el frame son las capas que pueden determinar dónde pertenece la interacción. Conocen el contexto organizado. Pueden determinar qué componente está activo, qué control ocupa la región relevante, qué relación de layout importa o qué parte de la interfaz debería recibir la interacción.

Por eso el conector Bridge no debería confundirse con un router de interacciones. Puede llevar la interacción y preservar la información necesaria para routing, pero normalmente no es la capa que realiza el routing en sí. Bridge simplemente asegura que la interacción pueda cruzar desde información orientada al renderer de vuelta hacia contexto orientado al graph.

En flujo top-down, Bridge ayuda a alimentar al renderer. En flujo bottom-up, ayuda a devolver interacciones al lugar donde pueden enrutarse con significado.

### El conector más difícil de ver

El conector Bridge fue uno de los conectores más difíciles de identificar porque su propósito puede parecer externamente vago. No tiene la relación obvia con almacenamiento del conector Data. No tiene la transformación clara del conector Parser. No tiene el papel organizativo del conector Adapter. A primera vista, puede parecer una entrega delgada entre dos capas que ya parecen suficientemente cercanas para comunicarse directamente.

Sin embargo, sin el conector Bridge, el Stack no tendría una forma explícita de pasar de contexto de interfaz organizado a rendering. Un graph tendría que saber cómo alimentar directamente a un renderer, o un renderer tendría que saber cómo interpretar graphs y frames por sí mismo. Cualquiera de las dos direcciones colapsaría la frontera entre organización y output.

El conector Bridge da nombre a esa frontera.

Puede que no siempre contenga mucha lógica, y en algunas implementaciones puede parecer muy pequeño, pero el papel conceptual es esencial. Explica cómo la interfaz organizada cruza hacia el proceso de rendering sin obligar a Layer 4 y Layer 3 a convertirse en la misma cosa.

### Preservar la frontera

Un conector Bridge debería preservar la frontera entre contexto y rendering. La información que pasa hacia abajo debería permanecer fiel a la interfaz organizada preparada por Layer 4, sin dejar de ser utilizable por Layer 3. La información que pasa hacia arriba debería preservar los detalles necesarios para que graph y frame entiendan lo ocurrido, mientras permite que el renderer siga centrado en su propia responsabilidad.

Esto no exige que Bridge preserve cada detalle interno de ninguna de las dos capas. Un renderer puede no necesitar el graph completo. Un graph puede no necesitar cada detalle específico del renderer. El conector Bridge decide qué debe cruzar la frontera para que cada lado pueda continuar su trabajo sin asumir el papel del otro.

Esto hace que el conector sea especialmente importante en sistemas donde el renderer tiene requisitos muy específicos. Graph y frame no deberían necesitar conocer cada detalle de esos requisitos. El renderer no debería necesitar entender toda la organización de la interfaz. El conector Bridge existe para que ambos lados puedan comunicarse sin enredarse.

### Por qué importa el conector

El conector Bridge impide que el Stack confunda contexto de interfaz organizado con output renderizado. Sin este conector, graphs y frames se verían obligados a hablar directamente en términos de renderer, o renderers se verían obligados a entender la estructura completa de la interfaz activa.

Al definir el conector Bridge, el Modelo da a esta transición un lugar propio.

Graphs & Frames sigue siendo responsable de organización, contexto, fronteras, routing y preparación. Renderers sigue siendo responsable de convertir información preparada en forma lista para output. El conector Bridge gestiona el movimiento entre ambos.

Este es el punto del Stack donde la información organizada cruza hacia el proceso de rendering. A menudo es silencioso. A menudo es delgado. Puede parecer casi invisible. Pero sin él, el Stack pierde la conexión explícita entre la interfaz como organizada y la interfaz como renderizada. El conector Bridge hace posible ese cruce y luego, afortunadamente, se aparta.
