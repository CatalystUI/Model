# 6.5 Connectors :: Surface

## Explicación en profundidad

### De rendering a delivery

El conector **Surface** se sitúa entre **Layer 3: Renderers** y **Layer 2: Windows**. Es responsable de llevar output renderizado desde el renderer hacia la window, donde ese output puede colocarse dentro de un contexto delimitado proporcionado por el sistema.

Layer 3 es donde la información se convierte en una forma lista para output. El renderer toma los datos preparados desde el graph y el frame y produce algo que finalmente puede percibirse. Sin embargo, el output renderizado todavía necesita un destino. Necesita algún lugar al que ir, algo a lo que conectarse y una frontera a través de la cual el sistema pueda entregarlo.

Ese destino está representado por la capa Windows.

El conector Surface proporciona el punto de cruce entre el renderer y la window. Explica cómo el output renderizado se adjunta al área utilizable de la window, y cómo el renderer recibe suficiente información de la window para seguir produciendo output correctamente. Sin este conector, el renderer podría producir output, pero el Stack no tendría una explicación explícita de cómo ese output se conecta con la window que lo presenta.

En términos más simples, un renderer crea output. Una window proporciona el lugar donde ese output puede entregarse. El conector Surface permite que ambos trabajen juntos.

### El área renderizada

Una surface puede entenderse como el área utilizable de una window que recibe output renderizado. En una aplicación gráfica tradicional, esto puede ser fácil de imaginar: un renderer dibuja dentro del área interior de una window. Sin embargo, el mismo principio se aplica de forma más amplia. La surface no es simplemente “la pantalla”. Es el conector que da al output renderizado un lugar dentro de los límites de la window.

Esto importa porque un renderer normalmente no es dueño de la window. El renderer puede saber cómo producir output, pero la window es la capa que proporciona la vista activa hacia el sistema. La window puede tener tamaño, posición, estado, escala, foco u otras condiciones gestionadas por el sistema. El conector Surface pone estas condiciones a disposición del renderer de la manera necesaria para que el output se entregue correctamente.

Un renderer puede necesitar conocer los límites actuales de la window. Puede necesitar saber cuándo han cambiado esos límites. Puede necesitar un objetivo en el que dibujar, escribir, transmitir o actualizar de otro modo. Estos detalles pueden variar según la implementación, pero la responsabilidad conceptual sigue siendo la misma: el conector Surface conecta el output del renderer con el contexto de window que lo contendrá.

Esto evita que el renderer finja poseer la frontera del sistema, y evita que la window finja saber cómo renderizar.

### Más que una imagen final

Puede resultar tentador pensar en el conector Surface como algo que simplemente pasa un resultado terminado a una window. En algunos casos, esa descripción puede ser suficiente. Un renderer prepara output, la surface lo lleva a la window y el usuario finalmente percibe el resultado.

Sin embargo, rendering suele ser una relación continua más que una sola entrega. Una window puede cambiar de tamaño. Su estado activo puede cambiar. El sistema puede solicitar un redibujado. El renderer puede necesitar actualizarse continuamente, esperar una señal o sincronizar su output con la condición actual de la window. El conector Surface proporciona el lugar donde esta relación puede expresarse.

Por eso el conector Surface no es simplemente un contenedor para output terminado. Es la conexión entre el acto de rendering y la window que recibe el resultado. Permite que el renderer responda a las condiciones de la window sin hacer que el renderer sea responsable de ser la window.

El output sigue perteneciendo al renderer. La frontera sigue perteneciendo a la window. El conector Surface lleva la relación entre ambos.

### Pasar interacciones de vuelta hacia arriba

Como el Stack es reversible, el conector Surface también participa en el flujo bottom-up. Cuando una interacción empieza en el sistema y entra en una window, finalmente debe moverse hacia arriba hacia las partes del Stack que pueden entenderla y manejarla.

El conector Surface a menudo lleva esta interacción desde la window hacia el renderer. En muchos casos, no necesita hacer mucho más que preservar la información y permitir que continúe hacia arriba. Un movimiento de puntero, una pulsación de tecla, un cambio de foco, un evento de cambio de tamaño u otra interacción puede entrar por la window y después cruzar la surface para que el renderer y las capas superiores puedan responder según sea necesario.

Esto no significa que el conector Surface sea responsable de decidir qué componente debería manejar la interacción. Esa responsabilidad pertenece a una parte más alta del Stack, especialmente una vez que la interacción llega al graph y al frame. El conector Surface simplemente da a la interacción un camino a través de la frontera entre la window y el renderer.

En flujo top-down, el conector Surface lleva output renderizado a la window. En flujo bottom-up, lleva información de interacción originada en la window de vuelta hacia el renderer y las capas superiores.

### Mantener separada la Window

El conector Surface es importante porque impide que renderer y window colapsen en la misma responsabilidad. Sin este conector, un renderer tendría que saber demasiado sobre la window, o la window tendría que saber demasiado sobre el renderer. Cualquiera de las dos direcciones debilita la separación que hace útil al Stack.

Una window proporciona la frontera activa orientada al sistema. Representa la vista, contenedor o punto de entrega. Un renderer produce output que puede entregarse a través de esa frontera. El conector Surface se sitúa entre ambos para que cada capa pueda seguir centrada en su propio propósito.

Esta separación se vuelve especialmente útil cuando un renderer puede usarse con más de un tipo de window, o cuando una window puede soportar más de un tipo de renderer. El conector da al Modelo un lugar para describir la relación sin cablear rígidamente las dos capas. Un renderer puede adjuntarse a una surface adecuada. Una window puede exponer una surface adecuada. El conector Surface explica cómo ocurre esa adjunción.

Esto es lo que permite que renderer y window cooperen sin volverse indistinguibles.

### Preservar output

Un conector Surface debería preservar el output renderizado mientras cruza hacia la window. Esto no significa que el output nunca se transforme, escale, recorte, sincronice o prepare según los requisitos de la window. Significa que el output debería permanecer fiel a lo que produjo el renderer y debería entregarse de una manera que coincida con el contexto activo de la window.

Si la window cambia de tamaño, el conector Surface puede ayudar a comunicar ese cambio. Si la window se vuelve inactiva, oculta, minimizada o no disponible de otro modo, el conector puede ayudar al renderer a responder adecuadamente. Si el renderer necesita un objetivo proporcionado por la window, el conector puede mantener o exponer ese objetivo. Estas responsabilidades no son lo mismo que rendering, y no son lo mismo que ser la window. Son las responsabilidades de la conexión entre ambos.

Esta es la forma principal del conector Surface: preserva el output del renderer mientras lo adapta al contexto de delivery proporcionado por la window.

### Por qué importa el conector

El conector Surface impide que el Stack confunda output renderizado con la window que lo contiene. Sin este conector, un renderer se vería obligado a actuar como si poseyera la window, o una window se vería obligada a actuar como si entendiera rendering directamente.

Al definir el conector Surface, el Modelo da a esta transición un lugar propio.

Renderers sigue siendo responsable de convertir información preparada en forma lista para output. Windows sigue siendo responsable de proporcionar el contexto delimitado orientado al sistema por el que pueden pasar output e interaction. El conector Surface gestiona el movimiento entre ambas.

Este es el punto del Stack donde la información renderizada obtiene un destino. Es donde output deja de ser meramente producido y queda adjunto al lugar donde puede entregarse. Desde ahí, Windows puede llevar el output hacia Systems, donde finalmente puede convertirse en algo que el usuario puede percibir y responder.
