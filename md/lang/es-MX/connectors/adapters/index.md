<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 6.3 Connectors :: Adapter

## Explicación en profundidad

### De uso a contexto

El conector **Adapter** se sitúa entre **Layer 5: Components, Controls, & Layouts** y **Layer 4: Graphs & Frames**. Es responsable de tomar datos de interfaz mutables y colocarlos en un contexto más amplio donde puedan organizarse, descubrirse, enrutarse, delimitarse y prepararse para el resto del Stack.

Layer 5 da al sistema componentes, controles y layouts. Estas son las piezas mutables con las que un desarrollador puede trabajar directamente. Un componente puede representar una pieza de información. Un control puede responder a una interacción. Un layout puede organizar otros componentes según un orden determinado. Sin embargo, estas piezas no describen por completo el entorno en el que existen. Pueden saber qué son y cómo se comportan, pero no saben automáticamente cómo se relacionan con toda la interfaz.

El conector Adapter proporciona este movimiento desde piezas utilizables individuales hacia contexto organizado. Toma los componentes producidos mediante el conector Parser y los adapta en graphs y frames. Aquí es donde el Stack empieza a entender no solo que existe un componente, sino dónde pertenece, cómo se relaciona con otros componentes y cómo debería participar en la interfaz activa.

En otras palabras, el conector Parser hace utilizable la información estructurada. El conector Adapter hace contextual la información utilizable.

### Adaptar componentes en graphs

Un componente puede existir por sí solo, pero una interfaz de usuario rara vez está hecha de un solo componente aislado. Incluso la interfaz más sencilla suele contener relaciones: un componente puede contener otro, un control puede depender de un layout, un grupo puede necesitar buscarse, ordenarse, activarse, desactivarse, enfocarse o actualizarse junto.

Aquí es donde el graph se vuelve importante.

El conector Adapter permite que componentes, controles y layouts se coloquen en un graph para que puedan organizarse como parte de un todo mayor. Un graph puede almacenar componentes, seguir sus relaciones, exponer formas de consultarlos y proporcionar la lógica circundante necesaria para gestionarlos como una colección. Sin este paso, los componentes seguirían siendo piezas dispersas de datos mutables en lugar de participantes en una interfaz unificada.

Un componente de ajustes, por ejemplo, puede ser útil por sí mismo. Una vez adaptado en un graph, puede convertirse en parte de una vista completa de ajustes, conectarse a otras secciones, buscarse por nombre, actualizarse con valores relacionados o enrutarse hacia él cuando el usuario realiza una acción. El componente no ha dejado de ser un componente, pero ha ganado contexto mediante el graph.

Esta distinción ayuda a mantener separados Layer 5 y Layer 4. Los componentes describen datos de interfaz utilizables. Los graphs describen cómo esas piezas se organizan juntas.

### Layout no es todo el contexto

El conector Adapter también ayuda a aclarar la diferencia entre un layout y un graph. Como los layouts pueden organizar componentes, puede resultar tentador tratarlos como la capa organizativa completa de la interfaz. Sin embargo, un layout solo organiza componentes de una manera determinada. No describe necesariamente la relación completa, el ciclo de vida, el routing o el contexto ambiental de esos componentes.

Un layout vertical puede determinar que varios controles aparezcan en orden. Eso no significa que el layout sea responsable de toda la interfaz. No necesita conocer cada componente activo, gestionar cada interacción, preparar la frontera de output ni actuar como mediador de nivel superior para el sistema. Esas responsabilidades pertenecen a Layer 4.

El conector Adapter respeta esta distinción. Puede tomar un layout de Layer 5 y colocarlo en un graph, pero el layout no se convierte en graph solo porque organiza componentes. El graph proporciona un contexto organizativo más amplio, mientras el layout sigue siendo un componente cuyo propósito es organizar otros componentes.

Esta separación se vuelve especialmente útil a medida que una interfaz crece. Las disposiciones simples pueden seguir siendo simples, mientras el sistema más amplio aún proporciona la estructura necesaria para gestionar descubrimiento, routing, actualizaciones y preparación para output.

### Conectar con el Frame

Layer 4 no se ocupa solo de graphs. También contiene el frame, que representa la frontera activa y el punto de comunicación entre componentes organizados y las capas inferiores del Stack.

El conector Adapter ayuda a los componentes a entrar en este contexto enmarcado. Un componente puede tener un tamaño, un control puede tener comportamiento de interacción y un layout puede describir colocación relativa, pero el frame determina los límites en los que se preparan esas piezas. Se ocupa del área activa, el contexto circundante y la información que finalmente debe pasarse hacia rendering.

Esto no significa que el conector Adapter renderice nada. Rendering pertenece a las capas inferiores. El conector Adapter prepara la interfaz organizada para que el frame pueda comunicarla correctamente. Da al frame las relaciones entre componentes, los resultados de layout y la información contextual necesarios antes de que el siguiente conector lleve esa información hacia el renderer.

De este modo, el conector Adapter actúa como puente entre “estas son las piezas que podemos usar” y “esta es la interfaz organizada que estamos preparando”.

### Reutilización mediante adaptación

Una de las partes más potentes del conector Adapter es que el mismo componente puede adaptarse a distintos contextos. Un componente no necesita quedar atado permanentemente a un graph, un frame o un tipo de interfaz. Su significado y comportamiento pueden permanecer estables mientras el conector Adapter determina cómo debería participar en un entorno concreto.

Un componente de documento podría adaptarse a un graph de edición, un graph de vista previa o un graph de impresión. Un componente musical podría adaptarse a un graph de reproducción, un graph de edición o un graph de biblioteca. Un grupo de componentes de ajustes podría adaptarse a una página sencilla de preferencias, un panel de configuración avanzada o un flujo de configuración automatizado.

Los componentes subyacentes pueden seguir resultando familiares, pero sus relaciones y propósito cambian según el graph y el frame en los que entran. Esto da a CatalystUI una forma limpia de expresar reutilización sin fingir que reutilizar significa que cada contexto es idéntico.

El conector Adapter es lo que lo hace posible. Permite reorganizar datos de interfaz mutables según el propósito, mientras mantiene el propio componente centrado en lo que representa y en cómo se comporta.

### Volver a los componentes

Como el Stack es reversible, el conector Adapter también participa en el flujo de interacción de vuelta hacia las capas superiores. Cuando un usuario interactúa con el sistema, las capas inferiores necesitan finalmente enrutar esa interacción de vuelta al componente o control adecuado.

Layer 4 desempeña un papel importante en este proceso porque entiende el contexto organizado. El graph puede ayudar a determinar qué componente es relevante. El frame puede ayudar a interpretar los límites en los que ocurrió la interacción. Una vez conocido ese contexto, el conector Adapter ayuda a devolver la interacción a Layer 5, donde el componente o control adecuado puede responder.

Esto importa porque las interacciones rara vez llegan ya unidas al componente exacto que debería manejarlas. El sistema puede saber que se pulsó una tecla, se movió un puntero, se activó un comando o se seleccionó una región, pero el Stack todavía necesita determinar qué significa esa acción dentro de la interfaz actual. El conector Adapter ayuda a llevar esa decisión contextual de vuelta a los componentes mutables donde la interacción puede tratarse.

En flujo top-down, el conector Adapter coloca componentes en contexto. En flujo bottom-up, ayuda a devolver interacciones contextuales a los componentes que pueden actuar sobre ellas.

### Preservar identidad

Un conector Adapter debería preservar la identidad y la intención de los componentes que adapta. Cuando un componente entra en un graph o frame, no debería perder lo que es. Su propósito, estado y relación con la información original deberían seguir siendo reconocibles, incluso cuando se organiza dentro de un sistema mayor.

Esto no significa que el componente no pueda envolverse, indexarse, agruparse, medirse, transformarse o prepararse para un entorno específico. En muchos casos, la adaptación requiere información adicional que el componente no contenía originalmente. Un graph puede necesitar identificadores. Un frame puede necesitar límites. Un sistema de routing puede necesitar información de foco. Estos añadidos ayudan al componente a participar en contexto, pero no deberían borrar el significado del componente.

Por tanto, el conector Adapter realiza un tipo cuidadoso de transformación. Añade contexto sin tragarse el componente. Permite que la interfaz se organice sin obligar a cada componente a hacerse responsable de todo el sistema que lo rodea.

### Por qué importa el conector

El conector Adapter impide que el Stack confunda datos de interfaz utilizables con contexto de interfaz organizado. Sin este conector, los componentes tendrían que gestionar sus propios graphs, los layouts se confundirían con la organización completa de la interfaz, o los frames se verían obligados a entender componentes sin una transición adecuada entre las dos capas.

Al definir el conector Adapter, el Modelo da a esta transición un lugar propio.

Components, Controls, & Layouts sigue siendo responsable de objetos de interfaz mutables y comportamiento de interacción directa. Graphs & Frames sigue siendo responsable de organización, contexto, fronteras, routing y preparación para las capas inferiores. El conector Adapter gestiona el movimiento entre ambas.

Este es el punto del Stack donde la información utilizable se convierte en información situada. Los componentes ya no están meramente disponibles para el programa; se colocan en un contexto vivo donde pueden relacionarse entre sí, responder por las rutas correctas y prepararse para ser llevados más abajo por el Stack. Desde ahí, la interfaz organizada puede avanzar hacia rendering, delivery, percepción y respuesta.
