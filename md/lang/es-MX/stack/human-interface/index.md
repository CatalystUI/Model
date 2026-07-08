<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 5.9 The Stack :: Human Interface

## Explicación en profundidad

### El límite humano implícito

**Human Interface** es el límite inferior implícito del Stack. Representa al usuario: la persona que recibe salida perceptible del sistema y produce acciones que pueden convertirse en entrada de interacción. En términos más simples, esta capa eres tú.

Puede sonar obvio, pero importa. El Stack existe para describir el proceso de comunicación entre un usuario y un sistema de información. Si Data Storage explica el límite donde el contenido conservado puede entrar o salir del flujo activo, Human Interface explica el límite opuesto: el lugar donde la salida del ordenador finalmente pasa a formar parte de la experiencia humana, y donde la acción humana empieza el camino de retorno hacia el sistema.

Human Interface es implícito porque el Modelo no representa directamente el cuerpo, mente, atención, emociones, sentidos, intenciones, recuerdos o decisiones del usuario. CatalystUI puede describir cómo un sistema entrega salida hacia un usuario y cómo la acción de un usuario se convierte en entrada de interacción, pero no pretende modelar al ser humano completo. Eso sería ligeramente ambicioso. También aterrador. El Stack es potente, pero no necesita convertirse en un libro de psicología con un renderer adjunto.

### El receptor de salida perceptible

En el flujo de arriba hacia abajo, el Human Interface es el receptor de salida perceptible. Digital Data se mueve por el Stack explícito, se interpreta, se moldea, se organiza, se renderiza, se entrega mediante un window y es llevado por el system hasta que finalmente puede percibirse. Una vez que esa salida alcanza los sentidos del usuario, el Stack explícito ha completado su camino descendente.

Esto no significa que el usuario reciba Digital Data directamente. Una persona no percibe naturalmente unos y ceros, búferes de memoria, llamadas de dibujo, muestras de audio o eventos del sistema. El usuario percibe el resultado del trabajo del system: luz, sonido, vibración, movimiento, texto, cambio espacial u otra forma de salida sensorial. Human Interface es donde esa salida deja de ser meramente entregada y empieza a ser experimentada.

Esta distinción mantiene honesto el Modelo. El system puede proporcionar salida, pero no puede forzar comprensión. Una pantalla puede mostrar un botón, un altavoz puede reproducir un sonido y un dispositivo puede vibrar, pero el usuario todavía tiene que percibir e interpretar ese resultado como humano. El Modelo reconoce este límite sin intentar definir cada factor personal, biológico o contextual implicado. Dicho de otro modo: CatalystUI puede llevar la salida hasta la persona. No puede hacer que la persona deje de ignorar la notificación. Tristemente.

### La fuente de interacción

En el flujo de abajo hacia arriba, el Human Interface es la fuente de acción. El usuario ve, oye, siente, entiende, reacciona, decide y luego hace algo. Esa acción puede ser pulsar una tecla, mover un puntero, tocar una pantalla, decir un comando, girar un mando, caminar por un campo de sensores o realizar otro comportamiento que el sistema pueda recibir.

La acción en sí empieza fuera del Stack explícito. El Modelo no describe directamente el proceso interno completo que llevó al usuario a actuar. Solo empieza a modelar el camino de retorno una vez que el system recibe el efecto de esa acción. En ese punto, la acción se convierte en entrada de interacción y entra en Layer 1: Systems, donde puede pasarse hacia arriba por el Stack.

Esto mantiene una distinción limpia entre **acción humana** e **interacción del sistema**. Una acción humana es lo que hace el usuario. La entrada de interacción es lo que el sistema recibe de esa acción. Están estrechamente relacionadas, pero no son idénticas. Una persona puede tener intención de hacer clic en una cosa y hacer clic accidentalmente en otra, o rozar una tecla mientras intenta alcanzar algo. El sistema puede recibir ambas, pero solo una de ellas probablemente sea una expresión significativa de intención del usuario. A menos que la entrada accidental fuera el objetivo, en cuyo caso enhorabuena: la interfaz ha entrado en una fase muy experimental.

### Por qué la capa es implícita

Human Interface es implícito por la misma razón que Data Storage: lo requiere el flujo, pero no se modela directamente como una capa explícita de transformación. El Stack depende del usuario, pero no transforma al usuario. No analiza al usuario, no renderiza al usuario, no adapta al usuario ni almacena al usuario como una component. Probablemente sea lo mejor.

En cambio, el Modelo trata el Human Interface como el límite vivo alrededor del extremo inferior del sistema. El Stack explícito puede describir cómo se prepara y entrega la salida, y puede describir cómo la interacción recibida viaja hacia arriba. Se detiene antes de reclamar propiedad sobre la experiencia humana misma.

Este límite es especialmente importante porque un usuario no es simplemente otro dispositivo. Una pantalla proporciona salida visual. Un teclado proporciona señales de entrada. Un usuario percibe, interpreta, elige, responde, malinterpreta, aprende, duda, comete errores y a veces hace clic en el botón equivocado con plena confianza. El Modelo debería respetar esa diferencia. Human Interface está presente porque el Stack está construido para la comunicación humana, pero es implícito porque el ser humano no forma parte del proceso de transformación del lado de la máquina.

### Percepción e intención

Human Interface completa el ciclo de comunicación al unir percepción e intención. En una dirección, el sistema proporciona algo perceptible. En la otra, el usuario responde con una acción. Esto crea el bucle conversacional en el centro de CatalystUI: el sistema habla mediante salida, el usuario responde mediante interacción y el sistema procesa esa respuesta para continuar el intercambio.

Por eso Human Interface no puede reducirse a dispositivos de entrada. Un teclado, ratón, pantalla táctil, micrófono, cámara o controller puede ayudar a capturar interacción, pero ninguno de ellos es el usuario. Son caminos accesibles para el sistema por los que la acción del usuario puede entrar en el Stack. Human Interface es la persona cuya percepción e intención dan significado a esas señales.

Lo mismo ocurre con los dispositivos de salida. Un monitor, altavoz, motor háptico u otro dispositivo de salida puede transportar datos perceptibles, pero el dispositivo no completa la experiencia. La experiencia se completa cuando el usuario percibe el resultado. Una pantalla llena de píxeles perfectamente renderizados sigue sin ser una interfaz exitosa si el usuario no puede ver, entender, alcanzar, oír, sentir o actuar sobre lo que se le ha proporcionado.

### Relación con Systems

Human Interface se sitúa directamente por debajo de **Layer 1: Systems**. La capa System proporciona el último manejo explícito del lado del ordenador para la salida y el primer manejo explícito del lado del ordenador para la interacción. Human Interface se sitúa más allá de esa capa como receptor de salida del sistema y fuente de acción del usuario.

Esta relación define el borde inferior del Stack. En el flujo de arriba hacia abajo, el system entrega salida hacia el usuario. En el flujo de abajo hacia arriba, el system recibe el efecto de la acción del usuario. El system es por tanto la última capa explícita de operación de máquina, mientras que Human Interface es el límite implícito donde la operación de máquina se encuentra con la experiencia humana.

Al separar estas capas, el Modelo evita confundir comportamiento de dispositivo con experiencia de usuario. El system puede saber que se pulsó una tecla, que se movió un puntero o que se reprodujo un sonido. No sabe automáticamente qué entendió, pretendió, sintió o notó el usuario. Esas realidades humanas pertenecen más allá del Stack explícito, aunque el Stack existe para servirlas.

### Accesibilidad y variación humana

Human Interface también recuerda al Modelo que los usuarios no son máquinas intercambiables. Las personas perciben y actúan mediante distintas capacidades, sentidos, contextos, herramientas, limitaciones, preferencias y entornos. Un usuario puede depender principalmente de la salida visual. Otro puede depender de salida auditiva, retroalimentación táctil, navegación por teclado, lectores de pantalla, subtítulos, movimiento simplificado, dispositivos alternativos de entrada u otras formas de acceso.

Esto no cambia la estructura del Stack. Aclara por qué importa el Stack. Al separar las capas, CatalystUI puede identificar mejor dónde ocurre una falla cuando la salida se entrega pero no es significativamente perceptible, o cuando un usuario tiene intención pero no un camino usable para expresarla. El límite Human Interface mantiene visible el propósito de todo el flujo: el sistema no está simplemente produciendo salida; está comunicándose con una persona.

Esa persona puede estar cansada, distraída, brillante, confundida, discapacitada, aprendiendo, haciendo varias cosas a la vez o intentando terminar algo cinco minutos antes de una fecha límite. La interfaz aún tiene que encontrarse con ella como humana. Preferiblemente sin exigirle leer primero un mensaje de error de cuarenta páginas.

### Por qué importa la capa

Human Interface evita que el Stack termine en la máquina. Sin esta capa implícita, el Modelo se detendría en salida del sistema y entrada del sistema, como si el propósito de una interfaz fuera simplemente mover señales por hardware. Eso perdería el punto. El propósito del Stack no es solo producir salida; es hacer posible la comunicación entre un sistema de información y un usuario.

Al separar Human Interface de Systems, el Modelo conserva un límite final limpio. Systems entrega salida y recibe entrada. Human Interface percibe salida y produce acción. El Stack explícito describe el proceso del lado de la máquina entre esas dos direcciones, mientras que el Human Interface implícito nos recuerda para quién existe ese proceso.

Por eso Human Interface pertenece al Stack aunque no esté numerado. El usuario no es una capa que deba implementarse, renderizarse, analizarse o probarse con unit tests. El usuario es la razón por la que existen las capas. Y, suponiendo que el usuario sea humano, el Modelo funciona de maravilla.
