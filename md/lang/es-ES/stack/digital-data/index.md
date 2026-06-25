# 5.2 The Stack :: Digital Data

## Explicación en profundidad

### La primera capa explícita

**Digital Data** es la primera capa explícita del Stack. Representa contenido, estado o un recurso después de que ha entrado en el flujo activo de la interfaz en una forma legible por ordenador, pero antes de que el Modelo haya aplicado Structure & Semantics o lo haya convertido en componentes, layout, renderizado o presentación. Es el punto donde la disponibilidad conservada se convierte en algo con lo que el Stack puede empezar a trabajar directamente.

Esta capa es explícita porque el Modelo ahora puede describir el recurso como parte del proceso de la interfaz. Mientras Data Storage explica dónde puede persistir algo fuera del flujo activo, Digital Data explica la representación activa que se ha leído, recibido, cargado, transmitido, generado o puesto de otro modo a disposición del Stack. Ya no está simplemente disponible en algún lugar. Ahora está presente en una forma que el sistema puede procesar.

### Representación legible por ordenador

Digital Data se define por su capacidad de representarse en binario y procesarse por una máquina. En esta capa, el recurso puede mantenerse como bytes, texto codificado, una respuesta recibida, un búfer de memoria, un stream u otra representación legible por máquina. El contenedor exacto es menos importante que el papel que cumple: es la forma activa del recurso antes de la interpretación.

Esto significa que Digital Data no debe confundirse con significado, estructura o presentación. Una secuencia de bytes puede contener un documento, imagen, comando, configuración o archivo de audio, pero Layer 7 aún no describe cómo debe entenderse esa secuencia. Solo establece que el contenido existe dentro del Stack en una forma a la que el sistema puede acceder y pasar a la siguiente capa.

### Antes de Structure and Semantics

Digital Data se sitúa inmediatamente por encima de **Layer 6: Structure & Semantics** porque representa el material que Structure & Semantics interpretará. Hasta que ocurre esa interpretación, el Stack todavía no ha identificado las reglas, relaciones, campos, secciones o significados contenidos dentro de la representación. El recurso puede seguir ya un formato, pero el Modelo todavía no ha aplicado ese formato.

Un documento almacenado puede ser ya válido según su formato, y un archivo puede contener ya contenido organizado, pero Layer 7 no modela esa organización como estructura comprendida. En el momento en que el Stack empieza a aplicar reglas sobre cómo debe leerse la representación, el flujo se ha movido a Structure & Semantics. Digital Data, por tanto, no carece de significado; simplemente aún no ha sido interpretado dentro del Stack.

### El punto de giro superior

Digital Data actúa como el punto de giro superior del Stack explícito. En el flujo de arriba hacia abajo, es donde el Stack empieza a transformar una representación legible por ordenador en algo que finalmente puede percibirse o usarse en una interacción con el usuario. El flujo empieza con una representación activa y luego baja por interpretación, formación de componentes, organización, renderizado, windowing y entrega del sistema.

En el flujo de abajo hacia arriba, Digital Data es donde el resultado de una interacción vuelve a ser legible por máquina. Una acción del usuario puede rutarse, manejarse y convertirse en un cambio dentro de la interfaz. Ese cambio puede subir por el Stack hasta convertirse en Digital Data: una representación activa que puede conservarse, transmitirse, compararse, regenerarse o devolverse a Data Storage. De esta manera, Layer 7 participa en ambas direcciones del ciclo de la interfaz.

### Digital Data y Domains

Digital Data suele estar estrechamente relacionado con el dominio **Symbolic** porque normalmente existe antes de que se haya elegido una forma sensorial específica. Un archivo de texto, por ejemplo, puede mostrarse visualmente más tarde, pronunciarse de forma audible, traducirse a otro formato o procesarse sin presentarse directamente. En Layer 7, el hecho importante no es cómo lo percibirá finalmente el usuario, sino que la representación está disponible para que el Stack la interprete.

Esto no significa que Digital Data solo pueda ser simbólico. Un recurso puede contener contenido visual, auditivo, táctil o multisensorial en su forma codificada. Sin embargo, la capa en sí describe la representación legible por ordenador antes de que el Stack activo la haya transformado en un resultado perceptible o interactivo. Los Domains identifican el tipo de información que se maneja; el Stack identifica dónde está esa información dentro del flujo.

### Por qué importa la capa

Digital Data evita que el Modelo salte el primer paso activo del trabajo de interfaz. Sin esta capa, el Stack pasaría directamente del almacenamiento a la interpretación, como si los recursos almacenados llevaran automáticamente una estructura usable en el momento en que se accede a ellos. En los sistemas reales, eso no es lo que ocurre. Algo debe existir primero en una forma activa legible por máquina antes de poder analizarse, validarse, organizarse, adaptarse, renderizarse o presentarse.

Al separar Digital Data tanto de Data Storage como de Structure & Semantics, el Modelo conserva tres distinciones importantes. Data Storage explica la persistencia fuera del flujo activo. Digital Data explica la representación activa legible por ordenador dentro del flujo. Structure & Semantics explica la interpretación de esa representación. Mantener separadas estas responsabilidades permite que el Stack describa el comportamiento de la interfaz con mayor precisión, especialmente cuando el mismo recurso almacenado puede leerse, interpretarse, transformarse o presentarse de más de una manera.
