<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 5.4 The Stack :: Components, Controls, & Layouts

## Explicación en profundidad

### La primera capa mutable de interfaz

**Components, Controls, & Layouts** es la capa donde la estructura interpretada se convierte en material usable de interfaz. Layer 6 explica qué significa una representación y cómo está organizada; Layer 5 convierte esa interpretación estable en objetos mutables que pueden ordenarse, actualizarse, recibir interacción y prepararse para el resto del Stack.

Esta es la primera capa donde el Modelo empieza a describir la interfaz como algo activamente usable en lugar de meramente entendido. Una Structure puede explicar el significado de un recurso, pero un usuario no interactúa directamente con una Structure. La interfaz necesita objetos que puedan exponer valores, responder a intención, mantener estado temporal y participar en una disposición mayor. Layer 5 proporciona esos objetos.

### De la interpretación al uso

El límite entre **Structure & Semantics** y **Components, Controls, & Layouts** es el límite entre forma interpretada y forma usable. Layer 6 produce una comprensión estable del contenido. Layer 5 adapta esa comprensión a una forma con la que la interfaz puede trabajar durante la operación activa.

Esta distinción importa porque la estructura interpretada y el comportamiento de interfaz no son la misma responsabilidad. Una Structure puede identificar que existe un valor, dónde pertenece y qué reglas lo gobiernan. Una component puede exponer ese valor como algo ajustable, mostrable, reproducible, seleccionable, editable o usable de otro modo. La Structure explica el contenido; la component da a la interfaz una forma de trabajar con él.

Layer 5, por tanto, no es simplemente una capa visual. Components, controls y layouts pueden existir en cualquier dominio. Una component puede representar texto, sonido, retroalimentación háptica, un comando, una sección de documento, un recurso multimedia o cualquier otra pieza usable de una interfaz. Lo que define la capa no es cómo se percibirá finalmente el objeto, sino que proporciona una forma mutable de interfaz construida a partir de contenido interpretado.

### Components

Una **component** es una parte lógica y mutable de la interfaz creada a partir de una estructura interpretada o asociada con ella. Puede representar una imagen, etiqueta, pista de audio, elemento de estilo, comando, sección de documento, recurso multimedia u otra pieza usable de la interfaz. Mientras que una Structure se ocupa principalmente de significado estable, una component se ocupa del uso activo.

Una component puede exponer propiedades, métodos, estado o comportamiento que hagan más fácil manejar el contenido subyacente. Puede proporcionar valores que pueden leerse o cambiarse, operaciones que pueden realizarse o estado que puede rastrearse mientras la interfaz está activa. Esto permite que el resto del Stack trabaje con objetos significativos en lugar de manejar repetidamente representaciones crudas o estructuras inmutables.

El punto importante es que una component no necesita preservar la forma exacta del recurso original. Puede simplificarlo, combinar partes de él, exponer solo una porción específica o proporcionar una interfaz más conveniente sobre él. A Layer 5 se le permite ser práctico porque su papel no es definir el significado original del contenido. Su papel es hacer usable ese significado.

### Controls

Un **control** es una component que maneja interacción. Recibe interacción rutada desde capas inferiores del Stack y determina qué debería ocurrir como respuesta. Esto convierte a los controls en uno de los principales puntos de encuentro entre el lado de la interfaz orientado al usuario y el lado orientado al contenido.

Los controls son responsables de convertir interacción en comportamiento significativo de interfaz. Un control puede actualizar un valor, disparar una operación, cambiar estado, solicitar una nueva representación o no producir ningún cambio. La distinción clave es que un control no existe simplemente como parte de la interfaz; participa en la capacidad del usuario para actuar sobre el sistema.

Como los controls son components, comparten la misma naturaleza mutable. Sin embargo, su responsabilidad definitoria es el manejo de interacción. Una component puede representar un objeto usable sin responder directamente a la intención del usuario. Un control representa un objeto usable que puede recibir, interpretar y actuar sobre esa intención dentro del flujo de la interfaz.

### Layouts

Un **layout** es una component que organiza otras components, incluidos controls, según alguna forma de orden, relación o regla de colocación. En interfaces visuales, esto puede aparecer como disposición espacial. En otros dominios, layout puede describir secuencia, agrupación, prioridad, temporización, categoría, enrutamiento u otra relación organizativa.

Los layouts importan porque los objetos usables de interfaz rara vez existen aislados. Las components necesitan contexto. Pueden necesitar ordenarse, agruparse, alinearse, superponerse, secuenciarse o relacionarse de otro modo antes de poder participar con claridad en la experiencia del usuario. Un layout proporciona esa estructura relacional sin convertirse en el gestor de nivel superior de la interfaz completa.

Esto separa los layouts de los graphs. Un layout organiza components según una regla o patrón específico. Un graph gestiona descubrimiento, organización, relaciones y ciclo de vida más amplios dentro de un contexto mayor de interfaz. Layer 5 proporciona los objetos layout en sí; Layer 4 determina cómo esos objetos participan en el marco de operación más amplio.

### Mutabilidad y estado activo

Layer 5 es mutable porque las interfaces están activas. Una vez que el contenido interpretado pasa a formar parte de una interfaz, puede necesitar responder a cambios en intención del usuario, estado del sistema, tiempo, foco, selección, visibilidad, reproducción, entrada u otras condiciones vivas. Components, controls y layouts proporcionan un lugar donde pueden ocurrir esos cambios activos.

Esto no significa que Layer 5 sustituya la interpretación estable proporcionada por Layer 6. En cambio, se construye sobre ella. Una component puede mantener temporalmente un valor cambiado, un control puede procesar una edición o un layout puede recalcular una disposición, pero esos cambios siguen conectados al significado interpretado que tienen debajo. Cuando un cambio debe pasar a formar parte del recurso conservado, el flujo puede moverse de nuevo hacia arriba a través de Structure & Semantics y Digital Data.

La mutabilidad también permite que Layer 5 represente condiciones temporales de interfaz que quizá nunca se almacenen. Un elemento seleccionado, una sección expandida, una posición de reproducción, un estado hover, un objetivo de foco o una edición pendiente pueden importar profundamente a la interfaz activa aunque nunca pasen a formar parte del almacenamiento permanente. Layer 5 da al Stack un lugar claro para describir estas condiciones vivas.

### Papel en el flujo de arriba hacia abajo

En el flujo de arriba hacia abajo, Components, Controls, & Layouts recibe estructura interpretada y la convierte en objetos usables de interfaz. El Stack ha ido más allá de saber qué significa el contenido y ahora empieza a preparar ese contenido para interacción, organización y presentación eventual.

En esta etapa, la interfaz puede decidir qué partes del contenido interpretado deberían convertirse en components, qué components deberían ser capaces de manejar interacción y cómo deberían organizarse esas components. El resultado aún no es un frame renderizado ni una salida del sistema. Es un modelo activo de interfaz que Layer 4 puede organizar y preparar finalmente para el renderizado.

### Papel en el flujo de abajo hacia arriba

En el flujo de abajo hacia arriba, Layer 5 es donde la interacción rutada se convierte en comportamiento significativo. Las capas inferiores pueden detectar, traducir y enrutar una acción, pero un control es donde esa acción se entiende finalmente en relación con el objeto de interfaz al que afecta.

Cuando un control maneja una interacción, puede actualizar estado de component, solicitar un cambio de layout, disparar un comando o producir una modificación que necesita moverse de vuelta hacia Structure & Semantics. Si esa modificación afecta al contenido subyacente, Layer 6 puede validar y organizar el cambio según las reglas semánticas relevantes antes de que vuelva a convertirse en Digital Data. De esta manera, Layer 5 sirve como punto activo de conversión entre intención del usuario y estado de interfaz.

### Relación con Graphs & Frames

Layer 5 produce los objetos usables de interfaz, pero no sirve como el entorno completo en el que esos objetos operan. Esa responsabilidad pertenece a **Layer 4: Graphs & Frames**. Components, controls y layouts necesitan un contexto más amplio que pueda organizarlos, consultarlos, enrutar entre ellos, prepararlos para renderizado y definir los límites en los que participan.

Esta relación mantiene limpio el Modelo. Layer 5 define los objetos de la interfaz activa. Layer 4 gestiona su organización mayor y los prepara para las capas inferiores del Stack. Una component debería saber cómo representar y gestionar su propio estado usable; el graph y el frame deberían saber cómo encaja esa component en el flujo más amplio de la interfaz.

### Por qué importa la capa

Components, Controls, & Layouts evita que el Stack salte directamente de la interpretación al renderizado. Un sistema no puede construir una interfaz clara simplemente entendiendo contenido y produciendo salida de inmediato. Debe haber una capa donde ese contenido interpretado se convierta en algo usable, mutable, organizable y sensible a la interacción.

Al separar Layer 5 tanto de Structure & Semantics como de Graphs & Frames, el Modelo conserva una secuencia precisa de responsabilidades. Structure & Semantics define significado estable. Components, Controls, & Layouts convierte ese significado en objetos activos de interfaz. Graphs & Frames organiza esos objetos en un contexto operativo mayor. Esta separación permite que CatalystUI describa interfaces a través de dominios sin reducirlas a widgets visuales, estructuras crudas o comandos específicos de renderizador.
