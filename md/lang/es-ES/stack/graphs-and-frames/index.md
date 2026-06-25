# 5.5 The Stack :: Graphs & Frames

## Explicación en profundidad

### La capa organizativa

**Graphs & Frames** es la capa donde los objetos usables de interfaz se organizan en un contexto operativo más amplio. Layer 5 proporciona components, controls y layouts como objetos mutables, pero esos objetos no forman automáticamente una interfaz completa por existir juntos. Necesitan una forma de descubrirse, relacionarse, consultarse, ordenarse, rutarse, delimitarse y prepararse para las capas inferiores del Stack.

Ese es el propósito de Layer 4. Recibe los objetos activos de interfaz de Layer 5 y establece el contexto más amplio en el que operan. Una component puede saber cómo representar su propio estado, un control puede saber cómo manejar una interacción y un layout puede saber cómo organizar un grupo de components, pero Layer 4 determina cómo esas piezas participan en la interfaz como conjunto.

### Graphs

Un **graph** describe relaciones organizadas entre components, controls y layouts. Proporciona la estructura necesaria para entender cómo se relacionan los objetos de interfaz, cómo pueden localizarse y cómo pueden recorrerse o consultarse durante la operación activa.

Esto distingue un graph de un layout. Un layout organiza components según una regla o patrón particular. Un graph gestiona el espacio de relaciones más amplio en el que existen layouts y components. Puede describir relaciones padre-hijo, propiedad, dependencia, agrupación, orden, rutas de foco, rutas de enrutamiento u otras formas de conexión que ayudan a que la interfaz funcione como un sistema coherente.

Un graph también proporciona una forma práctica de localizar y gestionar objetos de interfaz sin obligar a cada component a conocer todas las demás. Las components pueden seguir centradas en su propio estado usable, mientras que el graph proporciona la estructura circundante necesaria para descubrimiento, coordinación y enrutamiento. Esto evita que la interfaz se convierta en una colección de objetos aislados o en un conjunto enredado de referencias directas.

### Frames

Un **frame** describe el contexto operativo actual más amplio preparado para las capas inferiores del Stack. Mientras un graph organiza objetos de interfaz y sus relaciones, un frame contiene y coordina el estado relevante de esa organización en una forma que puede pasarse hacia renderizado, salida o procesamiento de nivel inferior.

El frame actúa como el límite principal entre el mundo de interfaz orientado a objetos de Layer 5 y el mundo orientado al renderizado de Layer 3. No contiene simplemente components; las prepara. Esta preparación puede incluir resolver límites, aplicar resultados de layout, recopilar elementos renderizables, ordenar salida, rastrear el estado actual de la interfaz o producir una representación temporal de aquello con lo que debería trabajar el renderer.

Un frame debe entenderse como contextual más que permanente. Representa la condición actual de la interfaz para una pasada, actualización, renderizado u operación de enrutamiento particular. A medida que la interfaz cambia, pueden producirse nuevos frames o estados de frame actualizados. Esto permite que el Stack describa operación viva sin confundir estado temporal de presentación con contenido almacenado o estructura interpretada.

### Relación entre Graphs y Frames

Graphs y frames trabajan juntos porque una interfaz necesita tanto relación como contexto. El graph explica cómo están conectados los objetos de interfaz. El frame explica qué deberían recibir las capas inferiores de esos objetos conectados en un momento particular.

Esta distinción importa porque organización y preparación no son la misma tarea. Un graph puede contener las relaciones necesarias para encontrar un control, entender una jerarquía de layout o determinar qué component pertenece a qué región de la interfaz. Un frame puede tomar el resultado actual de esa organización y prepararlo para renderizado o enrutamiento de interacción. El graph proporciona el mapa; el frame proporciona la pasada actual por ese mapa.

Juntos, evitan que Layer 4 se convierta en una colección pasiva de components o en una lista de comandos específica de un renderer. Sigue siendo la capa organizativa y contextual del Stack: lo bastante cerca de Layer 5 para entender objetos de interfaz, pero lo bastante cerca de Layer 3 para prepararlos para transformación de nivel inferior.

### Preparación para renderizado

En el flujo de arriba hacia abajo, Graphs & Frames recibe components, controls y layouts de Layer 5 y los prepara para el Renderer. Esto no significa que Layer 4 realice renderizado. El renderizado pertenece a Layer 3. Layer 4 determina qué debería enviarse hacia abajo, en qué relación, bajo qué límites y en qué estado actual.

Esta preparación es necesaria porque un renderer no debería ser responsable de entender el significado completo de cada component, control o layout. El renderer necesita una forma preparada que pueda transformar en salida perceptible. Layer 4 conserva la organización de la interfaz mientras reduce el modelo activo de objetos a algo con lo que el renderer puede trabajar.

Al hacer esto, Layer 4 permite que los renderers sigan siendo especializados. Un renderer puede centrarse en la transformación hacia una salida específica de dominio sin convertirse también en el gestor de nivel superior de relaciones entre components, jerarquía de layout, objetivos de interacción y estado activo de interfaz.

### Enrutamiento de interacciones

En el flujo de abajo hacia arriba, Graphs & Frames ayuda a enrutar interacciones de vuelta hacia los controls apropiados. Las capas inferiores pueden identificar que ocurrió una interacción y pueden proporcionar detalles como posición, temporización, origen del dispositivo, contexto de foco u otro estado de entrada relevante. Layer 4 usa el contexto del graph y del frame para determinar dónde pertenece esa interacción.

Este papel de enrutamiento es una de las razones más claras por las que Layer 4 debe existir. Un control puede saber cómo manejar una interacción una vez que la recibe, pero algo debe determinar qué control debería recibirla. El graph proporciona la estructura de relaciones, mientras que el frame proporciona el contexto operativo actual. Juntos, permiten que el Stack enrute intención a través de la interfaz en lugar de limitarse a pasar entrada hacia arriba sin dirección.

Esto también significa que Layer 4 participa tanto en la preparación de salida como en la resolución de entrada. Prepara estado de interfaz organizado para renderizado en una dirección, y ayuda a resolver interacción rutada en la otra. La misma capa que sabe cómo está dispuesta actualmente la interfaz es también la capa mejor posicionada para determinar cómo debería viajar una interacción de vuelta por esa disposición.

### Relación con Components, Controls, & Layouts

Layer 4 depende de Layer 5 para los objetos activos de interfaz que organiza. Components, controls y layouts proporcionan las partes usables de la interfaz, pero Layer 4 determina cómo esas partes forman un conjunto mayor. Esto evita que las components individuales se vuelvan responsables de la gestión global de la interfaz.

La separación también protege a los layouts de volverse demasiado amplios. Un layout puede organizar un grupo de components, pero no necesita gestionar cada relación de la interfaz. No necesita actuar como sistema completo de enrutamiento, coordinador de ciclo de vida o límite de renderizado. Layer 4 proporciona esa organización de nivel superior para que los layouts puedan seguir centrados en la disposición.

### Relación con el Renderer

Layer 4 también protege al Renderer de responsabilidades que no pertenecen al renderizado. Sin Graphs & Frames, el renderer tendría que entender árboles de components, relaciones de layout, enrutamiento de controls, resolución de límites y contexto activo de interfaz antes de poder producir salida. Eso haría que el renderizado fuera responsable de demasiado del modelo de interfaz.

Al colocar Graphs & Frames entre Layer 5 y Layer 3, el Stack crea una entrega clara. Layer 5 proporciona objetos usables de interfaz. Layer 4 organiza y prepara esos objetos. Layer 3 transforma la representación preparada en salida perceptible. Cada capa permanece centrada en una parte distinta del proceso.

### Por qué importa la capa

Graphs & Frames evita que el Stack trate una interfaz como una colección suelta de components o como un problema directo de renderizado. Una interfaz usable necesita organización antes de poder renderizarse y enrutamiento antes de poder responder coherentemente a la interacción. Layer 4 proporciona la estructura necesaria para ambas cosas.

Al separar Layer 4 de Components, Controls, & Layouts y del Renderer, el Modelo conserva una progresión limpia de responsabilidades. Components, controls y layouts definen los objetos activos de interfaz. Graphs y frames organizan esos objetos en un contexto operativo actual. El Renderer transforma luego ese contexto preparado en salida perceptible. Esta distinción permite que CatalystUI describa interfaces complejas sin obligar a las components a gestionar todo el sistema ni obligar a los renderers a entender todo el modelo de interfaz.
