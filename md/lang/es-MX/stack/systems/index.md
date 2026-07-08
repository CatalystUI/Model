<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 5.8 The Stack :: Systems

## Explicación en profundidad

### La capa explícita más baja

**Systems** es la capa explícita más baja del Stack. Esta capa representa el entorno de computación que proporciona los servicios, dispositivos y operaciones subyacentes necesarios para que la salida se entregue y la interacción se reciba. Mientras Layer 2 define el contexto delimitado por el que pasan salida e interacción, Layer 1 representa el entorno más amplio que hace posible ese contexto.

Un system no debe entenderse solo como un sistema operativo de escritorio. En el Modelo CatalystUI, un system es el conjunto organizado de procesos y capacidades de plataforma que soporta la interfaz en tiempo de ejecución. Puede ser un sistema operativo tradicional, un entorno embebido, una consola, un runtime de navegador, una plataforma de hardware u otro contexto de computación gestionado. La característica definitoria no es la categoría del producto. La característica definitoria es que el system suministra las capacidades de nivel inferior mediante las cuales la interfaz puede operar realmente.

### El entorno operativo

La capa System proporciona el entorno de ejecución circundante para el Stack explícito. Puede gestionar acceso a hardware, dispositivos de entrada, dispositivos de salida, drivers, permisos, planificación, memoria, archivos, procesos, windows, canales u otros servicios de nivel de plataforma. Estos detalles varían mucho entre implementaciones, pero todos cumplen el mismo papel conceptual: permiten que la interfaz se conecte con las capacidades reales de la máquina o sistema de información.

Esto hace que Layer 1 sea distinto de Layer 2. Un window es un contexto delimitado orientado al sistema usado por la interfaz. El system es el entorno más amplio que crea, posee, reconoce, restringe y da servicio a ese contexto. El window proporciona un punto específico de conexión; el system proporciona el mundo en el que existe esa conexión.

Por eso, la capa System no es simplemente una base pasiva. Participa activamente en el ciclo de interfaz. Entrega salida renderizada hacia dispositivos físicos o lógicos, recibe entrada de esos dispositivos, aplica reglas de plataforma y expone las operaciones de las que dependen las capas superiores. El Stack puede describir el flujo de la interfaz, pero el system suministra el suelo operativo bajo ese flujo.

### Relación con Windows

Systems y Windows están estrechamente conectados, pero no son la misma capa. Un window recibe salida renderizada de Layer 3 y proporciona un contexto delimitado de entrega. El system recibe esa salida con contexto de window y realiza el trabajo de nivel inferior necesario para entregarla mediante dispositivos o servicios disponibles.

En el flujo de arriba hacia abajo, el window pasa salida al system. El system maneja entonces el camino real de entrega: envía salida visual hacia una pantalla, salida de audio hacia un dispositivo de sonido, salida táctil hacia un dispositivo háptico, salida de texto hacia una terminal u otra forma de salida hacia su canal apropiado. El window define dónde pertenece la salida; el system la lleva al entorno capaz de hacerla perceptible.

En el flujo de abajo hacia arriba, el system recibe o detecta interacción desde el lado humano de la interfaz. Esto puede venir por un teclado, puntero, pantalla táctil, micrófono, controller, sensor, botón u otro camino de entrada. El system convierte esa actividad física o de nivel de dispositivo en una señal de nivel de sistema que puede asociarse con un window y pasarse hacia arriba por el Stack.

### Entrega de salida

La capa System es la etapa explícita final del flujo de arriba hacia abajo. Para cuando la salida llega a Layer 1, las capas superiores ya han interpretado la representación original, formado objetos usables de interfaz, organizado esos objetos en un contexto operativo actual, renderizado ese contexto en forma lista para salida y lo han pasado por un window. El system realiza ahora el trabajo de nivel de plataforma necesario para hacer que esa salida esté disponible para el Human Interface.

Esto no significa que el system en sí sea lo mismo que la percepción del usuario. El usuario no percibe directamente un sistema operativo. El usuario percibe el resultado físico o sensorial disponible mediante dispositivos y canales gestionados por el system. Layer 1, por tanto, permanece dentro del proceso del lado del ordenador, mientras que el Human Interface implícito se sitúa más allá como receptor de la salida.

Esta distinción mantiene preciso el Modelo. El system puede producir luz mediante una pantalla, sonido mediante altavoces, vibración mediante un motor u otro resultado perceptible mediante algún dispositivo o servicio. El system proporciona el mecanismo explícito final de entrega; el Human Interface recibe y percibe el resultado.

### Origen de la interacción

La capa System también es la primera etapa explícita del flujo de abajo hacia arriba. Un usuario realiza una acción fuera del Stack explícito, pero el system es donde esa acción queda disponible para la interfaz modelada como entrada de interacción. La acción humana en sí pertenece al Human Interface implícito. El system recibe el efecto de esa acción mediante un camino de entrada soportado y empieza a convertirlo en algo que el Stack puede procesar.

Por eso el system está estrechamente ligado a la interacción. Una pulsación física de tecla, movimiento de puntero, gesto táctil, entrada hablada, señal de controller o cambio de sensor debe recibirse primero por el entorno de computación antes de que las capas superiores de interfaz puedan responder. El system no suele determinar el significado final de esa interacción. Identifica que algo ocurrió, proporciona contexto relevante de dispositivo o plataforma y pasa la interacción hacia el window apropiado.

Desde ahí, la interacción puede viajar hacia arriba por el Stack. El window la asocia con un contexto delimitado, el renderer puede ayudar a traducirla o mapearla, el graph y el frame pueden enrutarla, y el control apropiado puede finalmente manejarla. El system inicia el camino explícito de retorno, pero el significado de la acción se resuelve más arriba en el Stack.

### Reglas y restricciones de plataforma

Systems importa porque toda interfaz opera dentro de restricciones. Un system puede determinar qué dispositivos están disponibles, cómo se crean los windows, cómo se entrega la entrada, cómo se conceden permisos, cómo se comportan los canales de salida, a qué recursos se puede acceder y qué operaciones están soportadas. Estas restricciones moldean lo que el resto del Stack puede hacer.

Sin embargo, CatalystUI separa esas preocupaciones de plataforma del modelo superior de interfaz. Components no deberían necesitar entender directamente cada driver o regla del sistema operativo. Renderers no deberían necesitar gestionar cada detalle de hardware. Windows no debería necesitar representar toda la plataforma. Layer 1 proporciona un lugar claro para el comportamiento de nivel de sistema, permitiendo que las capas superiores sigan centradas en interpretación, usabilidad, organización y transformación.

Esta separación también permite que el Modelo se aplique en distintos entornos. Una aplicación de escritorio, app móvil, dispositivo embebido, interfaz basada en navegador, herramienta de línea de comandos o sistema de hardware especializado pueden tener reglas de plataforma distintas, pero cada uno sigue necesitando una capa system que proporcione el entorno operativo bajo la interfaz.

### Relación con el Human Interface

Systems se sitúa directamente por encima del **Human Interface** implícito. Esto significa que Layer 1 es la última capa explícita antes de que la salida salga del flujo modelado del lado del ordenador y la primera capa explícita después de que la acción del usuario entre en él. El system es, por tanto, el límite entre el entorno de computación gestionado y la persona que percibe y actúa.

Este límite es esencial. El Modelo puede describir cómo un system envía salida hacia un dispositivo, pero no modela directamente la experiencia sensorial, biología, atención, emoción o interpretación del usuario. Del mismo modo, el Modelo puede describir cómo el system recibe una señal de entrada, pero no modela directamente el proceso humano completo que produjo la acción. Esas preocupaciones pertenecen al Human Interface implícito.

Al colocar Systems en Layer 1, el Stack identifica claramente el punto explícito más bajo donde el proceso del lado del ordenador puede describirse antes de cruzar hacia percepción y acción humanas.

### Por qué importa la capa

Systems mantiene el Stack anclado en la operación real. Sin esta capa, el Modelo describiría renderizado y windows como si la entrega de salida y la recepción de entrada ocurrieran automáticamente. En la práctica, toda interfaz depende de un entorno subyacente que gestiona dispositivos, recursos, permisos, ejecución y comportamiento de plataforma.

Al separar Systems de Windows y del Human Interface, el Modelo conserva un límite final limpio. Windows proporciona el contexto delimitado para salida e interacción. Systems proporciona el entorno operativo subyacente que entrega salida y recibe entrada. El Human Interface percibe la salida y produce acción. Esta distinción permite que CatalystUI describa interfaces a través de plataformas y dominios sin reducir el system a un solo sistema operativo, un dispositivo específico o un modelo visual de pantalla.
