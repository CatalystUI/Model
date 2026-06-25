# 5.6 The Stack :: Renderers

## Explicación en profundidad

### La capa transformadora

**Renderers** es la capa donde el estado organizado de la interfaz se transforma en forma lista para salida. Layer 4 proporciona graphs y frames: un contexto operativo preparado que describe qué debería enviarse hacia abajo, cómo está organizado y qué estado actual debería representarse. Layer 3 recibe ese contexto preparado y lo convierte en una forma adecuada para entregarse mediante un window y, finalmente, mediante el system.

Esta capa se llama rendering porque realiza la transformación activa desde representación de interfaz hacia salida perceptible. Un renderer no se limita a almacenar la interfaz, interpretar su contenido original o gestionar sus relaciones de components. Su responsabilidad es tomar el resultado preparado de las capas superiores y producir la salida específica de dominio que necesitan las capas inferiores del Stack.

### Renderizado como conversión

En CatalystUI, el renderizado no se limita a gráficos. Un renderer visual puede convertir estado preparado de interfaz en píxeles, comandos de dibujo, texturas, glifos u otra salida visual. Un renderer auditivo puede convertir estado preparado en formas de onda, muestras, pistas o salida de audio mezclada. Un renderer táctil puede convertir estado preparado en patrones hápticos. El dominio específico puede cambiar, pero el papel de la capa sigue siendo el mismo: el renderizado convierte representación organizada de interfaz en salida que el sistema puede entregar.

Esta distinción mantiene el Modelo más amplio que el pensamiento tradicional de interfaz gráfica de usuario. Un renderer no se define por si dibuja en una pantalla. Se define por si transforma estado preparado de interfaz en una forma de salida de nivel inferior. El resultado puede terminar viéndose, oyéndose, sintiéndose o percibiéndose de otro modo, pero en Layer 3 el foco es la transformación en sí.

### Relación con Graphs & Frames

Renderers depende de **Graphs & Frames** porque no debería ser responsable de entender todo el modelo de interfaz. Layer 4 resuelve el contexto operativo actual, organiza components, prepara límites, determina estado relevante y suministra un frame adecuado para renderizado. Layer 3 transforma después ese frame preparado en forma lista para salida.

Esta separación importa porque organización y renderizado son responsabilidades distintas. Un graph puede saber cómo se relacionan las components entre sí, y un frame puede saber qué debería contener la pasada actual. Un renderer debería saber cómo transformar ese contexto preparado en la representación de salida apropiada. Cuando estas responsabilidades permanecen separadas, el renderer puede seguir siendo especializado y eficiente sin convertirse en el gestor global de la interfaz.

### Relación con Windows

Renderers también depende de **Layer 2: Windows** porque la salida renderizada necesita un destino de entrega. Un renderer puede producir comandos, búferes, streams u otras representaciones listas para salida, pero esos resultados aún necesitan algún lugar al que ir. El window proporciona la vista, canal o superficie de entrega delimitada por la que la salida renderizada puede llevarse hacia el system.

Esto convierte al renderer en el punto activo de conversión entre el modelo superior de interfaz y el modelo inferior de entrega. Por encima, el Stack se ocupa principalmente de significado, usabilidad, organización y estado activo. Por debajo, el Stack se ocupa de pasar salida a través de un window y hacia el system. Layer 3 se sitúa entre estas preocupaciones y convierte una en la otra.

### Responsabilidad específica del dominio

Renderers es específico del dominio por naturaleza. Un renderer debe entender el tipo de salida que produce porque distintos dominios requieren distintas formas de transformación. La salida visual, auditiva, táctil y otras formas sensoriales no comparten los mismos requisitos de entrega, incluso cuando se producen desde el mismo estado conceptual de interfaz.

Esto no significa que las capas superiores deban reescribirse para cada dominio. Una de las fortalezas del Stack es que las capas superiores pueden describir contenido, interacción, organización y estado de forma consistente mientras permiten que los renderers se especialicen en el punto donde la conversión específica de dominio se vuelve necesaria. El renderer es donde esa especialización se vuelve explícita.

Una sola interfaz también puede implicar más de un renderer cuando se manejan por separado varias formas de salida. En esos casos, cada renderer es responsable de la transformación requerida por su propio dominio, mientras que el Stack circundante conserva el flujo mayor de la interacción.

### Renderizado y perceptibilidad

Un renderer prepara salida para la percepción, pero no es lo mismo que la percepción en sí. El usuario no percibe directamente el renderer. El renderer produce una forma que puede pasarse por un window y un system hasta volverse perceptible mediante un dispositivo, canal o salida física.

Esta distinción es importante porque el renderizado sigue formando parte del proceso de transformación del lado del ordenador. Un renderer visual puede producir datos de píxeles, pero el usuario percibe luz de una pantalla. Un renderer auditivo puede producir muestras de audio, pero el usuario percibe sonido mediante altavoces o auriculares. Layer 3 prepara la salida; las capas inferiores la entregan.

### Papel en el flujo de arriba hacia abajo

En el flujo de arriba hacia abajo, Renderers recibe un frame preparado de Layer 4 y lo convierte en forma lista para salida. Este es el punto donde el modelo activo de interfaz empieza a salir de la organización abstracta de components y entra en el camino concreto de entrega del sistema.

El renderer puede transformar estado de component en operaciones de dibujo, búferes de audio, instrucciones hápticas u otra representación específica de dominio. Una vez ocurrida esa transformación, el resultado se pasa a la capa Window, que proporciona el canal o vista delimitada mediante la cual el system puede entregar la salida.

### Papel en el flujo de abajo hacia arriba

En el flujo de abajo hacia arriba, Renderers también puede participar en la interpretación o transformación de detalles de interacción antes de que vuelvan a las capas superiores. Una interacción puede llegar desde el system a través de un window en una forma que necesita ajustarse, traducirse, asociarse con una región renderizada o convertirse en una representación que el graph y el frame puedan enrutar.

Esto no convierte al renderer en el manejador final de la interacción. Esa responsabilidad pertenece al control apropiado en Layer 5. Sin embargo, como el renderer entiende cómo la interfaz se transformó en salida, puede proporcionar contexto necesario para invertir o mapear parte de esa transformación. Por ejemplo, puede ayudar a relacionar una interacción de nivel inferior con una posición renderizada, región de salida, punto temporal u objetivo específico de dominio antes de que Layer 4 la enrute hacia arriba.

### Por qué importa la capa

Renderers evita que el Stack trate la salida como una consecuencia directa de objetos organizados de interfaz. Un frame puede describir qué debería representarse, pero no se convierte automáticamente en salida perceptible. Algo debe transformar ese contexto preparado en una forma que las capas inferiores puedan entregar. Layer 3 proporciona esa transformación.

Al separar Renderers tanto de Graphs & Frames como de Windows, el Modelo conserva una división limpia de responsabilidades. Graphs & Frames organiza el contexto actual de interfaz. Renderers convierte ese contexto en forma lista para salida. Windows proporciona el canal delimitado por el que esa salida llega al system. Esta distinción permite que CatalystUI describa el renderizado a través de dominios sin reducirlo a gráficos, obligar a windows a realizar transformación ni exigir que los objetos superiores de interfaz sepan cómo se entregarán finalmente.
