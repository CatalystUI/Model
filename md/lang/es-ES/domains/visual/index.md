# 4.2 Domains :: Visual

## Explicación en profundidad

Mientras que el dominio **simbólico** describe los datos antes de que se hayan asignado a un sentido concreto, el dominio **visual** describe los datos una vez que se han moldeado para la vista. Los datos visuales son información pensada para verse: una imagen, texto renderizado o un control visible. La distinción importante no es si los datos “podrían” aparecer algún día en una pantalla, sino si su papel actual en la interacción es comunicar a través de la visión.

Esto significa que los datos visuales no deben confundirse con la forma almacenada que hay detrás de ellos. Un archivo que contiene datos de imagen sigue siendo simbólico mientras exista solo como información almacenada. Un párrafo de texto sigue siendo simbólico mientras exista solo como caracteres, marcado u otra representación abstracta. Se vuelve visual cuando el sistema lo presenta en una forma que el usuario puede ver e interpretar. El cambio no consiste en que los datos se vuelvan más importantes; consiste en que su método de comunicación ha pasado de la representación a la percepción.

Los datos visuales son especialmente comunes porque la vista puede comunicar muchas relaciones a la vez. Tamaño, color, espaciado, dirección, agrupación y movimiento pueden ayudar al usuario a entender qué es algo, dónde pertenece y si se puede actuar sobre ello. Por eso las interfaces visuales suelen sentirse inmediatas. Un usuario puede mirar una ventana, página web o escena de un juego y captar significado antes de leer cada palabra. El sistema no solo está mostrando datos; está organizando datos en una experiencia visible.

### Comprender los datos visuales

Una forma útil de entender los datos visuales es considerar la **colocación**, la **apariencia** y el **estado**. No son subdominios formales ni categorías obligatorias en el Modelo CatalystUI, pero ofrecen una forma práctica de reconocer cómo la información visual comunica significado.

**Colocación** describe dónde aparecen los datos visuales y cómo se relacionan con la información que los rodea. Un encabezado colocado sobre un párrafo comunica pertenencia. Un botón colocado cerca de un formulario comunica asociación. Un menú colocado sobre otro contenido comunica prioridad temporal. La colocación importa porque el usuario no percibe los objetos visibles de forma aislada; percibe relaciones entre objetos visibles.

**Apariencia** describe cómo se presentan los datos visuales al usuario. Forma, color, tipografía, contraste e imágenes influyen en lo que el usuario cree estar mirando. Un fragmento de texto puede parecer un título, una advertencia o un enlace según cómo esté diseñado. Un rectángulo puede parecer un botón, un panel o decoración según su borde, espaciado y contexto cercano. La apariencia da a los datos visuales su forma reconocible.

**Estado** describe la condición actual que se comunica visualmente. Un control puede aparecer activo, deshabilitado, seleccionado, enfocado, cargando u oculto. Estos estados importan porque la siguiente acción del usuario suele depender de lo que la interfaz parece estar lista para hacer. Si el estado visual no coincide con la condición real del sistema, la interfaz se vuelve confusa aunque la lógica subyacente sea técnicamente correcta.

### Significado visual

La salida visual expresa significado, pero no debe confundirse con el significado en sí. Un borde rojo puede comunicar que algo está mal, pero el borde no es el error. Un icono puede representar una acción, pero el icono no es la acción. Un diseño puede mostrar jerarquía, pero el diseño no es la estructura subyacente. Los datos visuales son la expresión sensorial del significado, no la fuente completa del significado.

Esta distinción ayuda a evitar un error de diseño común: poner demasiada responsabilidad en cómo se ve algo sin preservar lo que significa. Si una interfaz depende solo del color para comunicar un error, el significado queda atrapado dentro de una única señal visual. Si un icono no tiene una etiqueta, descripción o significado accesible que lo respalde, el sistema puede verse limpio mientras se vuelve más difícil de entender. La claridad visual es más fuerte cuando la forma visible expresa fielmente la intención subyacente.

Los datos visuales también conllevan un tipo de riesgo particular porque los usuarios tienden a confiar en lo que ven. Si algo parece clicable, el usuario espera que responda. Si algo parece deshabilitado, el usuario espera que no responda. Si algo parece seleccionado, el usuario espera que el sistema lo trate como seleccionado. Cuando la presentación visible y el comportamiento real no coinciden, el usuario experimenta la interfaz como rota, aunque el programa se esté comportando exactamente como fue escrito.

### Datos visuales y accesibilidad

El dominio visual hace que la accesibilidad sea más fácil de razonar porque identifica cuándo la información se comunica solo a través de la vista. Si un error se muestra solo mediante color, un gráfico solo mediante una imagen o el progreso solo mediante animación, entonces el significado puede no estar disponible para todos los usuarios. El problema no es que la comunicación visual sea mala; el problema es que la comunicación visual puede necesitar traducirse a otra forma.

Aquí es donde los dominios se vuelven útiles como herramienta de diagnóstico. Nos ayudan a preguntar dónde vive actualmente el significado. ¿Es solo visual? ¿También puede representarse simbólicamente? ¿Debería estar disponible mediante sonido, tacto u otra forma de salida? Al responder esas preguntas, el desarrollador puede preservar el mismo significado a través de distintos tipos de percepción en lugar de tratar la accesibilidad como una idea posterior.

### Datos visuales en experiencias más amplias

Los datos visuales también pueden participar en experiencias que no son puramente visuales. Un reproductor de vídeo puede combinar imágenes en movimiento con sonido. Un juego puede combinar gráficos, música y retroalimentación del mando. Un sistema operativo puede combinar ventanas, alertas y dispositivos de entrada en un intercambio más amplio. En estas situaciones, el dominio visual identifica la parte de la experiencia pensada para la vista, mientras otros dominios describen las formas adicionales de percepción implicadas.

Esto mantiene el modelo preciso. Una interfaz visual no es automáticamente toda la interfaz de usuario, y una experiencia multisensorial no borra la parte visual que contiene. Cada dominio ayuda a identificar cómo se está transportando el significado. El dominio visual responde una pregunta concreta: ¿qué información se está moldeando para que el usuario pueda verla?

En resumen, el dominio visual describe el movimiento desde la representación simbólica hacia una salida legible por la vista. Nos da una forma de hablar sobre información visible sin reducir todas las interfaces a gráficos. Cuando los datos visuales se manejan bien, el usuario puede reconocer lo que el sistema presenta, entender sobre qué puede actuar y responder con confianza.
