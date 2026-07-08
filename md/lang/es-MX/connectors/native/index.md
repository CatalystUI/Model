<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 6.6 Connectors :: Native

## Explicación en profundidad

### De Windows a Systems

El conector **Native** se sitúa entre **Layer 2: Windows** y **Layer 1: Systems**. Es responsable de conectar la window con el sistema subyacente para que el output pueda entregarse y las interacciones puedan recibirse mediante el entorno real en el que se ejecuta el programa.

Layer 2 da al Stack una window: una vista, contenedor o punto de entrega delimitado. Layer 1 da al Stack el system: el entorno operativo, acceso a hardware, servicios, dispositivos y comportamiento nativo que hacen posible la window. El conector Native proporciona el punto de cruce entre estas dos capas.

Este conector suele ser donde el Stack toca más directamente la realidad práctica de la informática. Hasta este punto, el Modelo ha descrito la información mientras se mueve por datos estructurados, componentes, graphs, renderers y surfaces. Sin embargo, una window no existe solo por imaginación. Algo debe pedir al sistema que la cree, configure, mantenga, actualice y comunique interacciones de vuelta mediante ella.

Ese algo es el conector Native.

### Definir bindings

Un **binding** es una conexión controlada entre una capa y funcionalidad proporcionada por otra. En el contexto del conector Native, los bindings exponen comportamiento de nivel de sistema a la window en una forma que el programa puede usar sin requerir que la window se convierta en el sistema mismo.

Esta definición es intencionalmente sencilla. Un binding no necesita ser misterioso. Es la relación accesible entre el código de arriba y la funcionalidad de abajo.

Un binding nativo puede exponer la capacidad de crear una window, cambiar su título, recibir entrada de teclado, responder al movimiento del puntero, redimensionar el área activa, solicitar foco, acceder a un dispositivo o comunicarse con un servicio del sistema. Los detalles variarán según el sistema y la implementación, pero el concepto sigue siendo el mismo: el binding proporciona una conexión utilizable con funcionalidad nativa.

Por eso los bindings importan tanto en esta capa. El sistema puede proporcionar capacidades potentes, pero esas capacidades no están disponibles automáticamente en el lenguaje o estructura usada por el resto del Stack. Deben exponerse mediante alguna forma de conexión. El conector Native es donde esas conexiones se reúnen, se moldean y se usan.

### Proporcionar acceso nativo

En muchas implementaciones, el conector Native proporcionará sobre todo bindings a funcionalidad de sistema de nivel inferior. Esto puede parecer ordinario al principio, especialmente porque los desarrolladores ya están familiarizados con APIs nativas, bibliotecas de plataforma, llamadas de sistema operativo, interfaces de dispositivo y herramientas similares. Sin embargo, dentro del Stack, no son meros detalles aleatorios de implementación. Son los medios por los que Layer 2 obtiene acceso a Layer 1.

Una window gráfica en un sistema operativo de escritorio puede requerir bindings a una API de ventanas de la plataforma. Una interfaz de línea de comandos puede requerir bindings a entrada y salida de terminal. Un dispositivo especializado puede requerir bindings a botones, sensores, altavoces, luces u otros dispositivos controlados por el sistema. En cada caso, el conector Native proporciona la relación que permite a la window actuar dentro del sistema.

Lo importante no es qué plataforma se usa. Lo importante es que la window no puede entregar output ni recibir interaction a menos que tenga alguna forma de comunicarse con el sistema que la contiene.

El conector Native proporciona esa forma.

### Más que un wrapper

Como este conector suele exponer comportamiento nativo, puede resultar tentador describirlo como un wrapper alrededor de APIs del sistema. Esa descripción puede ser útil en algunos contextos prácticos, pero no explica por completo lo que el conector hace dentro del Modelo.

Un wrapper describe cómo la gente implementa a menudo este tipo de capa. Un binding describe lo que el conector realmente proporciona.

El conector Native no es simplemente un montón de llamadas de plataforma colocadas debajo de la window. Es la relación formal entre la window y el sistema. Define cómo la window recibe su existencia respaldada por el sistema, cómo el comportamiento del sistema se vuelve disponible para el Stack y cómo las interacciones originadas en el sistema empiezan a moverse hacia arriba.

Esta distinción importa porque el Modelo no intenta preservar la forma en que los desarrolladores han descrito históricamente estas herramientas. Intenta describir el proceso subyacente en sí. En ese proceso, el conector Native no es importante porque casualmente envuelva una API nativa. Es importante porque vincula Layer 2 con Layer 1.

Eso es lo que este conector realmente es.

### Crear y mantener la Window

En el flujo top-down, el conector Native permite que la window opere mediante el sistema. Una window puede necesitar crearse, mostrarse, ocultarse, redimensionarse, moverse, enfocarse, actualizarse o cerrarse. Estas acciones requieren alguna relación con el sistema, porque el sistema es la capa que realmente proporciona el entorno en el que esas acciones pueden ocurrir.

El conector Native puede exponer los bindings necesarios para realizar esas acciones. A través de él, Layer 2 puede solicitar comportamiento del sistema sin absorber toda la responsabilidad de gestión del sistema. La window sigue siendo el punto de entrega delimitado. El sistema sigue siendo el entorno que proporciona la funcionalidad subyacente. El conector Native lleva la relación entre ambos.

Esto es especialmente importante porque los sistemas difieren. Distintos sistemas operativos, dispositivos, runtimes y entornos pueden proporcionar APIs y comportamientos diferentes. El conector Native da al Stack un lugar para representar esas diferencias sin obligar al resto del Modelo a volverse específico del sistema.

### Recibir interacciones

Como el Stack es reversible, el conector Native también es el primer conector explícito implicado cuando una interacción entra desde el sistema.

Una pulsación de tecla, movimiento de puntero, entrada táctil, acción de controlador, señal de dispositivo, evento de redimensionamiento, cambio de foco u otro evento originado en el sistema debe cruzar desde Layer 1 hacia Layer 2 antes de que el resto del Stack pueda hacer algo con él. El conector Native proporciona ese cruce. Recibe o expone la información de interacción del sistema y la lleva a la window, donde puede continuar hacia arriba mediante el conector Surface hacia Renderers, y después por los conectores Bridge, Adapter, Parser y Data según sea necesario.

En muchos casos, el conector Native no necesita decidir qué significa la interacción. Su papel es vincular la fuente de interacción del sistema con la ruta de interacción de la window. El sistema informa de que algo ocurrió. El conector Native hace que ese informe sea utilizable para Layer 2. El resto del Stack puede entonces enrutar, transformar y manejar la interacción según sus propias responsabilidades.

Esto mantiene limpia la frontera inferior. El conector Native da a la entrada de interacción una vía hacia el Stack sin requerir que el sistema entienda las capas superiores, y sin requerir que las capas superiores se comporten como si fueran el sistema.

### Preservar la frontera

Un conector Native debería preservar la frontera entre la window y el sistema. Debería exponer la funcionalidad del sistema que la window necesita, pero no debería borrar la distinción entre ambas capas.

Aquí los bindings son especialmente útiles como concepto. Un binding permite acceso sin identidad. La window puede usar funcionalidad del sistema sin convertirse en el sistema. El sistema puede proporcionar comportamiento sin convertirse en la window. El conector define la relación entre ambos.

Esta frontera es lo que permite a CatalystUI describir una window de forma coherente en distintos entornos. Un sistema puede proporcionar una window de escritorio tradicional. Otro puede proporcionar un terminal. Otro puede proporcionar un canal de output específico de un dispositivo. Otro puede proporcionar un entorno remoto o virtualizado. Los bindings nativos pueden diferir, pero el papel del conector sigue siendo el mismo.

El conector Native vincula Layer 2 con Layer 1 para que la window pueda existir, operar, recibir interacciones y entregar output dentro del sistema que la soporta.

### Por qué importa el conector

El conector Native impide que el Stack confunda una window con el sistema que la proporciona. Sin este conector, Windows tendría que contener directamente comportamiento específico del sistema, o Systems tendría que entender el concepto de nivel superior de la window. Cualquiera de las dos direcciones difuminaría la frontera entre el punto de entrega y el entorno que hace posible la entrega.

Al definir el conector Native, el Modelo da a esta transición un lugar propio.

Windows sigue siendo responsable del contexto delimitado por el que pasan output e interaction. Systems sigue siendo responsable del entorno subyacente, servicios, dispositivos y comportamiento nativo. El conector Native gestiona el binding entre ambos.

Este es el último conector explícito del Stack. Es donde la interfaz modelada alcanza el sistema que hay debajo. Puede parecer acceso a plataforma. Puede implementarse mediante bibliotecas nativas, llamadas de sistema operativo, APIs de dispositivo o servicios de runtime. Pero bajo esas descripciones familiares, su propósito es más claro y sencillo.

El conector Native proporciona bindings.

Vincula la window con el sistema, permitiendo que output salga del Stack e interaction entre en él. Al hacerlo, completa el camino explícito entre la interfaz modelada y el entorno real en el que esa interfaz debe vivir.
