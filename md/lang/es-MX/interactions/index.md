<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 7. Interacciones

## Visión general de alto nivel

En este punto, podemos describir una interfaz de usuario mediante el Modelo CatalystUI con mucha más claridad que antes. Podemos identificar el flujo de información, clasificar esa información en dominios, seguirla a través del Stack y explicar cómo los connectors la mueven y transforman de una capa a la siguiente. Al hacerlo, gran parte del misterio detrás de las interfaces de usuario empieza a disolverse. Podemos ver dónde comienza la información, adónde va, cómo cambia y cómo finalmente llega al usuario.

Entonces, ¿hemos terminado? No del todo. Todavía hay una parte esencial del rompecabezas que no hemos abordado por completo: _¡tú!_

La parte más importante de cualquier interfaz de usuario es la persona que la usa. Sin el usuario, la interfaz pierde su propósito. En ese punto, simplemente estaríamos describiendo una máquina comunicándose con otra, como un servidor enviando datos a una API, o un programa pasando instrucciones a otro. Esos intercambios pueden ser útiles, pero no son el tema completo del Modelo. Una interfaz de usuario existe porque una persona necesita percibir, entender o elegir algo, o responder de alguna manera. Incluso si tu gato pisa el teclado, invoca a los Dioses Gato y devuelve la tierra a su trono legítimo, el punto sigue siendo el mismo: algo fuera del sistema ha actuado sobre él, y la interfaz ahora debe responder.

Por eso importa la “Human Interface”. Ya la hemos identificado como el extremo implícito en la parte inferior del Stack, pero ahora necesitamos mirar más de cerca qué ocurre allí. La información no simplemente llega al usuario y se detiene. El usuario puede responder. Puede hacer clic, hablar, moverse, escribir, escuchar, ignorar, dudar, malinterpretar o actuar de una forma que el sistema no esperaba. Esa respuesta se convierte en parte del flujo.

Por eso hay otro tipo de datos que debemos identificar y seguir: _interacción_. Una interacción es el intercambio que ocurre cuando la información llega al usuario, el usuario responde y el sistema recibe esa respuesta como parte del flujo continuo. Es el punto en el que el Modelo deja de tratar solo sobre presentación y empieza a tratar sobre participación. La interfaz ya no solo muestra información a una persona; permite que esa persona afecte lo que ocurre después.

Más directamente, _una interacción es la intención detrás de una acción_. El clic, toque, deslizamiento, comando, movimiento o palabra hablada es solo la parte visible. Detrás de esa acción hay algo que el usuario está _intentando_ hacer. Quiere abrir un menú, avanzar, enviar un formulario, pausar una canción, descartar una advertencia, encender una luz o simplemente averiguar qué está pasando. El sistema puede recibir solo una señal, pero el usuario no solo está enviando una. El usuario está haciendo una solicitud.

### Frustraciones modernas con la tecnología

Aquí es donde comienzan muchas frustraciones modernas con la tecnología. Un usuario actúa con una intención, pero el sistema interpreta esa intención incorrectamente, responde demasiado lento o la ignora por completo. Todos lo hemos sentido: un botón que parece clicable pero no hace nada, una página que parece congelada, un dispositivo que nos oyó pero no nos entendió, o una interfaz que técnicamente funcionó pero no respondió de una manera que pudiéramos percibir. En cada caso, el usuario hizo una solicitud, pero el sistema no respondió claramente. Cuando eso ocurre, la frustración no es un misterio. Es el resultado natural de una interacción malentendida, retrasada o sin resolver.

Por eso las interacciones son tan especiales. A diferencia de muchas otras formas de datos, son tanto bidireccionales como transformadoras. Se mueven del sistema al usuario y luego del usuario de vuelta al sistema. Cambian mientras se mueven. Lo que comienza como salida puede convertirse en percepción; la percepción puede convertirse en intención; la intención puede convertirse en acción; y esa acción puede convertirse en entrada. El sistema puede entonces responder, iniciando de nuevo el ciclo. Esto hace que la interacción sea diferente de un archivo almacenado, una imagen renderizada o un sonido único. La interacción no es solo datos transportados a algún lugar. Son datos moldeados por elección.

En ese sentido, las interacciones apuntan a algo profundamente humano. No somos máquinas que reciben información pasivamente. Notamos, nos preguntamos, elegimos, dudamos, malinterpretamos, nos corregimos, lo intentamos otra vez y a veces pulsamos el mismo botón diecisiete veces porque _seguro_ que esta vez funcionará. Una interacción existe porque una persona tiene agencia. Se define por la capacidad del usuario de elegir y por la capacidad del sistema de recibir esa elección y responder a ella. Sin elección, no hay verdadera interacción. Solo hay salida.

Por supuesto, la máquina también puede moldear el intercambio. En muchos casos, la interacción comienza cuando el sistema presenta algo al usuario: una pantalla, sonido, mensaje, advertencia, vibración, puerta u otra señal. El sistema también puede elegir detener el intercambio rechazando entrada, cerrando una ventana, agotando el tiempo o ignorando una solicitud. Pero incluso entonces, la interacción no ha desaparecido realmente. Si el sistema no responde, el usuario puede esperar, intentarlo otra vez, confundirse, frustrarse, marcharse, reiniciar el dispositivo o decidir no volver a usar nunca el programa. Tomando prestado libremente el lenguaje del movimiento, una acción simplemente no desaparece porque el sistema se niegue a continuarla. El usuario todavía se mueve. La experiencia todavía cambia. El flujo todavía importa.

Por eso las interfaces de usuario no pueden diseñarse como si los ordenadores fueran el centro del universo. No lo son. Los ordenadores existen para servir propósitos humanos. Nos ayudan a crear, aprender, organizar, comunicarnos, adorar, construir, imaginar y resolver problemas que de otro modo quedarían fuera de nuestro alcance. Cuando una interfaz olvida al usuario, se vuelve fría, frustrante e innecesariamente difícil. Pero cuando honra la intención del usuario, responde con claridad y lleva la información por el camino correcto, la tecnología empieza a sentirse menos como una pared y más como una herramienta.

Ese es el corazón del Modelo CatalystUI. Nos da una forma de ver todo el viaje: la información que se almacena, los dominios a los que pertenece, las capas por las que pasa, los connectors que la transforman y la interacción que la devuelve a la persona que inició el intercambio. Nos ayuda a dejar de tratar las interfaces de usuario como montones de widgets, ventanas, APIs, renderers y dispositivos desconectados, y en su lugar las reconoce como sistemas completos de comunicación entre _personas_ y _máquinas_.

### El propósito detrás de todo

Durante años, el sueño fue simple pero terco: la tecnología no debería tener que sentirse tan rota. Un programa no necesita volverse hinchado, frágil o atado a una plataforma solo para darnos una forma clara de interactuar con la máquina. Un framework no necesita esconder ideas simples detrás de capas de confusión. Una interfaz de usuario no necesita obligar a la persona a pensar como el ordenador. Es importante que un ordenador esté diseñado para entender a la persona. CatalystUI existe porque ese sueño no es imposible. Solo necesitaba un modelo lo bastante claro para describir lo que realmente estaba ocurriendo.

El Stack nos da la estructura. Los dominios nos dicen qué tipo de información estamos manejando. Los connectors explican cómo esa información se mueve y cambia. Las interacciones nos recuerdan por qué todo eso importa desde el principio. Juntos, forman una forma de volver a diseñar ordenadores alrededor de las personas: no alrededor de tendencias, no alrededor de decisiones arbitrarias de frameworks, no alrededor de las limitaciones que nos _dijeron_ que aceptáramos, sino alrededor del _flujo real de información_ entre los seres humanos y sus sistemas.

Por eso el Modelo CatalystUI es tan importante. Por eso se vertieron en él años de trabajo, amor, corazón, odio, frustración y esperanza. Y por eso me alegra tenerte aquí. Bienvenido al universo Catalyst. Me alegra que hayas podido acompañarme en aunque sea una parte de mi aventura. Espero que haya moldeado al menos una pequeña parte de tu percepción del mundo para bien.

> Hacia delante y hacia arriba, mis fieles compañeros.
