<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 5.7 The Stack :: Windows

## Explicación en profundidad

### La capa de entrega delimitada

**Windows** es la capa donde la salida renderizada recibe un contexto delimitado de entrega. Layer 3 transforma estado preparado de interfaz en forma lista para salida, pero esa salida aún necesita un lugar, canal o vista definido por el que pueda ser entregada por el system. Layer 2 proporciona ese límite.

Un window debe entenderse como un contexto lógico de entrega y no simplemente como una caja visual en una pantalla. En un entorno gráfico, un window aparece comúnmente como una región visible gestionada por un sistema operativo. En el Modelo, sin embargo, el concepto es más amplio: un window es el contexto orientado al sistema por el que puede proporcionarse salida y recibirse interacción. Define dónde pertenece el resultado renderizado dentro del sistema circundante.

### Una vista hacia el sistema

El window actúa como una vista hacia el sistema. No crea el sistema y no sustituye al renderer. En cambio, proporciona el contexto delimitado donde la salida del renderer puede conectarse con la entrega a nivel de sistema. Este límite puede implicar posición, tamaño, foco, visibilidad, contexto de dispositivo, canal de salida u otra forma de alcance definido por el sistema.

Esto importa porque la salida renderizada no existe para el usuario de forma aislada. Debe entregarse en algún lugar. Un renderer puede producir comandos visuales, muestras de audio, instrucciones hápticas u otra salida específica de dominio, pero esos resultados aún deben asociarse con un contexto reconocido por el sistema. El window proporciona esa asociación.

En interfaces visuales, esto es fácil de reconocer porque el window puede corresponder a un área rectangular en una pantalla. En otros dominios, el mismo papel conceptual puede cumplirse mediante una sesión de línea de comandos, un contexto de salida de audio, un canal de dispositivo, un viewport virtual u otra interfaz delimitada orientada al sistema. La característica definitoria no es la apariencia visual. La característica definitoria es que el window proporciona el límite de entrega entre la salida renderizada y el system.

### Relación con Renderers

Windows recibe salida de Renderers, pero no realiza renderizado por sí mismo. Renderizar es transformar estado preparado de interfaz en forma lista para salida. Windowing es dar a esa salida un contexto delimitado de sistema por el que pueda entregarse.

Esta distinción evita que Layer 2 absorba las responsabilidades de Layer 3. Un renderer debería decidir cómo el estado organizado de interfaz se vuelve listo para salida. Un window debería proporcionar el lugar o canal orientado al sistema al que puede enviarse esa salida. El renderer transforma; el window contiene, recibe y reenvía.

Esto también permite que distintos renderers apunten a distintos tipos de window. Un renderer visual puede apuntar a un window gráfico, mientras que un renderer auditivo puede apuntar a un contexto de salida de audio. La implementación específica puede variar según el sistema y el dominio, pero la responsabilidad por capas sigue siendo consistente.

### Relación con el System

Windows depende de **Layer 1: Systems** porque normalmente el platform circundante lo crea, gestiona, restringe o reconoce. Un system puede determinar cómo se crean los windows, cómo reciben entrada, cómo exponen canales de salida, a qué recursos pueden acceder y cómo interactúan con hardware o servicios de nivel inferior.

Esto no hace que el window sea idéntico al system. El system es el entorno operativo más amplio que proporciona acceso a hardware, servicios de dispositivo, planificación, permisos, drivers y comportamiento de plataforma. El window es un contexto lógico delimitado dentro de ese entorno. Es el contexto orientado a la interfaz que permite que salida renderizada e interacción pasen entre el Stack y el system.

Al separar Windows del System, el Modelo evita tratar cada detalle de plataforma como parte del límite de la interfaz. El window representa el contexto específico orientado al sistema usado por la interfaz. El system representa el entorno mayor que hace posible ese contexto.

### Entrega de salida

En el flujo de arriba hacia abajo, el window recibe representación lista para salida desde el renderer y la pasa hacia el system. Esta es la etapa donde la salida renderizada deja de estar simplemente preparada por la interfaz; se asigna a un contexto de entrega que el system puede usar.

El window puede gestionar límites, foco, buffering, visibilidad, estado de canal u otras condiciones de entrega según el dominio y la implementación. Estos detalles afectan a cómo la salida se mueve hacia el system, pero no cambian el papel principal de la capa. El window proporciona el límite por el que la salida renderizada puede convertirse en salida del sistema.

Una vez que la salida pasa por el window, el system puede llevarla hacia el dispositivo, servicio o proceso físico relevante que permite al usuario percibirla. Por tanto, el window está cerca de la perceptibilidad, pero no es la percepción en sí. Sigue formando parte del flujo del lado del ordenador.

### Entrada de interacción

En el flujo de abajo hacia arriba, el window es la primera capa explícita del Stack donde la interacción proporcionada por el system se vuelve disponible para la interfaz modelada. El system puede detectar una pulsación de tecla, movimiento de puntero, evento táctil, señal de dispositivo, comando de audio u otra forma de entrada. El window recibe esa interacción dentro de su propio contexto delimitado y la reenvía hacia arriba para más enrutamiento y manejo.

Esto hace que el window sea central para la interacción porque proporciona contexto para la acción. Una interacción no es solo que algo ocurrió, sino que ocurrió dentro de un límite particular orientado al sistema. Foco, posición, tiempo, origen del dispositivo, canal o contexto activo pueden determinar cómo el resto del Stack debería entender y enrutar la interacción.

El window no suele decidir el significado final de la interacción. Esa responsabilidad pertenece más arriba en el Stack, especialmente una vez que la interacción llega al control apropiado. El papel del window es recibir la interacción del system, asociarla con el límite correcto y pasarla hacia arriba en una forma que el resto del Stack pueda seguir procesando.

### Independencia de dominio

Windows es independiente del dominio de la misma manera que el resto del Stack es independiente del dominio. La palabra “window” suele asociarse con gráficos, pero en CatalystUI se refiere a cualquier contexto delimitado orientado al sistema para salida e interacción. El dominio determina qué tipo de salida y entrada transporta el window; la posición en el Stack determina qué papel realiza el window.

Esto permite que la misma capa describa windows gráficos, sesiones de texto, canales de audio, contextos de salida táctil u otras formas de entrega de interfaz sin cambiar el Modelo. Cada implementación puede tener requisitos de sistema diferentes, pero cada una cumple la misma responsabilidad conceptual: proporciona el límite por el que pasan la salida renderizada y la interacción del sistema.

### Por qué importa la capa

Windows evita que el Stack trate la salida renderizada como si alcanzara automáticamente al usuario. Un renderer puede transformar estado de interfaz en forma lista para salida, pero esa salida aún necesita un contexto orientado al sistema. Layer 2 proporciona ese contexto.

Al separar Windows tanto de Renderers como del System, el Modelo conserva un camino limpio de entrega. Renderers transforma estado preparado de interfaz en representación lista para salida. Windows proporciona el contexto delimitado por el que esa representación entra en el system. El System realiza entonces el trabajo de nivel inferior necesario para entregar salida y recibir entrada. Esta distinción permite que CatalystUI describa la entrega de interfaz a través de plataformas y dominios sin reducir windows a rectángulos visuales ni obligar a renderers a gestionar comportamiento de plataforma.
