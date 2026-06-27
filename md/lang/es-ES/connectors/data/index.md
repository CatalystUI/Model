# 6.1 Connectors :: Data

## Explicación en profundidad

### La primera traducción

El conector **Data** es el primer conector explícito del Stack. Se sitúa entre **Layer 7: Digital Data** y **Layer 6: Structure & Semantics**, donde la información activa legible por ordenador empieza por primera vez a recibir una forma interpretada. Layer 7 nos dice que la información existe como digital data. Layer 6 nos dice cómo está estructurada esa información y qué significa. El conector Data explica cómo el sistema pasa de una condición a la otra.

Este conector es necesario porque digital data no se interpreta a sí misma. Un archivo, stream, buffer, resultado de base de datos, respuesta o mensaje puede contener ya información organizada, pero organización no es lo mismo que interpretación. Algo debe acceder a los datos, leerlos según las expectativas adecuadas y producir una forma que Structure & Semantics pueda entender. Ese “algo” es el conector Data.

En ese sentido, este conector es el primer acto de traducción dentro del Stack explícito. No crea la información original y todavía no crea componentes orientados al usuario. Su papel es introducir información en el flujo activo como Digital Data cuando hace falta, y después conectar esa representación digital activa con las reglas y estructuras que hacen posible la interpretación.

### Trabajar con Data Storage

Aunque el conector Data se sitúa entre Digital Data y Structure & Semantics, a menudo tiene una relación cercana con la capa implícita **Data Storage**. Esto ocurre porque muchas formas de digital data no son útiles hasta que pueden accederse desde el lugar donde están almacenadas. Por eso un conector Data suele realizar dos responsabilidades relacionadas. Primero, alcanza el almacenamiento para recuperar, recibir o acceder de otro modo a información, de forma que esa información pueda entrar en el flujo activo como Digital Data. Segundo, procesa la Digital Data resultante y la convierte en una estructura interpretada.

Un conector de datos de MySQL es un buen ejemplo. Desde la perspectiva del Modelo, la base de datos MySQL puede tratarse como Data Storage, mientras que el resultado de la consulta se convierte en la Digital Data activa con la que se trabaja. El conector puede establecer la conexión, enviar una consulta, recibir el resultado y después organizar ese resultado como información estructurada que el resto del Stack pueda entender. La conexión a la base de datos, el comportamiento de consulta y el procesamiento del resultado pueden aparecer dentro del mismo conector porque el conector Data es responsable de llegar al almacenamiento y llevar la información recuperada hacia datos estructurados y significativos.

Esto no convierte Data Storage en una capa explícita del Stack, ni hace que el conector Data sea responsable de ser la base de datos, el sistema de archivos, el servicio o el mecanismo de almacenamiento. Más bien, el Modelo reconoce que el primer conector a menudo necesita acercarse al almacenamiento para traer digital data al flujo activo del sistema.

### Acceder no es entender

El conector Data existe en parte porque acceder y entender no son lo mismo. Un ordenador puede abrir un archivo, recibir una respuesta, mantener bytes en memoria o conectarse a una base de datos. Eso solo demuestra que la información está disponible. No demuestra que la información se haya entendido.

Por ejemplo, un archivo de configuración puede estar disponible como texto. El sistema puede saber dónde está el archivo, leer correctamente su contenido y conservar ese contenido en memoria. Aun así, el Stack todavía no ha determinado qué partes son claves, qué partes son valores, qué secciones son válidas o qué reglas definen el formato.

El conector Data proporciona el movimiento desde “la información está disponible como digital data” hasta “la información ahora puede interpretarse según structure y semantics”. Esta distinción mantiene limpio Layer 7. Digital Data no necesita saber cómo debe interpretarse cada formato posible. Solo necesita representar la información activa legible por ordenador. Después, el conector Data realiza la entrega hacia Layer 6, donde la interpretación puede ocurrir según las reglas adecuadas.

### Producir estructura

En el flujo top-down, el conector Data recibe Digital Data y la prepara para Structure & Semantics. Esto puede implicar leer bytes, decodificar texto, identificar un formato, seleccionar reglas semánticas, validar expectativas básicas o transformar la representación en una estructura organizada. El trabajo exacto depende del tipo de información que se maneje, pero la responsabilidad sigue siendo la misma: conectar la representación activa con una forma interpretada.

Un archivo de configuración JSON puede empezar como texto codificado. El conector Data lee el texto, reconoce el formato esperado y produce información estructurada que representa los ajustes. Un archivo CSV puede convertirse en filas y campos. Un resultado de base de datos puede convertirse en registros. Un archivo binario puede convertirse en cabeceras, secciones y valores. Una respuesta de servidor puede convertirse en un mensaje estructurado.

Lo importante es el movimiento. El conector Data puede empezar alcanzando el almacenamiento, pero su transición explícita dentro del Stack solo se completa cuando la Digital Data recuperada o recibida se ha convertido en información que puede entenderse mediante Structure & Semantics.

### Preservar significado

Un conector Data debe preservar significado mientras la información se mueve entre capas. Esto no significa que cada detalle de la representación original deba permanecer sin cambios. Significa que el conector debería preservar la relación prevista entre la digital data y la estructura interpretada que produce.

Por ejemplo, si un archivo contiene un título, la estructura resultante debería representar ese título de una manera fiel a la información original. Si un registro de base de datos contiene un identificador, ese identificador debería seguir conectado con el registro que describe. Si un formato define orden, agrupación o valores requeridos, el conector debería respetar esas expectativas al producir el resultado estructurado.

### Volver a Digital Data

Como el Stack es reversible, el conector Data también participa en el flujo bottom-up. Cuando una interacción cambia información en la interfaz, puede que ese cambio tenga que volver finalmente a Digital Data. Antes de poder conservarse, transmitirse o reutilizarse, la información estructurada debe convertirse de nuevo en una forma legible por ordenador.

En esta dirección, el conector Data realiza la transformación opuesta. Recibe información estructurada desde Layer 6 y produce Digital Data adecuada para almacenamiento, transmisión, comparación o procesamiento posterior.

Una estructura de ajustes puede convertirse en texto JSON codificado. Una tabla de valores puede convertirse en CSV. Un registro puede convertirse en una actualización de base de datos. Una estructura de documento puede convertirse en los bytes de un archivo.

Este movimiento inverso es tan importante como el movimiento top-down. Si el conector Data puede leer información hacia una estructura pero no puede escribir esa estructura de vuelta en forma digital, la interfaz quizá pueda mostrar o usar información, pero no puede preservar por completo el resultado de la interacción. Por tanto, el conector ayuda a completar el ciclo entre la intención del usuario y el cambio persistente.

### Validación y fallo

El conector Data también es uno de los primeros lugares donde el fallo puede reconocerse de manera significativa. Digital Data puede faltar, estar mal formada, incompleta, no ser compatible, estar obsoleta o ser incoherente con las reglas semánticas esperadas por Layer 6.

Cuando esto ocurre, el conector debería dejar claro el resultado de esa transformación. Un conector puede recuperarse de valores opcionales ausentes, aplicar valores predeterminados, ignorar extensiones no compatibles o producir una estructura parcial cuando sea adecuado. Sin embargo, el resto del Stack no debería verse obligado a adivinar si los datos se interpretaron correctamente.

Al identificar el fallo en esta frontera, el Modelo mantiene honesta la interpretación. El conector Data protege al resto del Stack de construir sobre información que nunca se entendió con éxito.

### Por qué importa el conector

El conector Data impide que el Stack suponga que digital data se vuelve significativa automáticamente en cuanto está disponible. Sin este conector, el Modelo difuminaría la frontera entre representación e interpretación. Layer 7 tendría que entender formatos directamente, o Layer 6 tendría que recuperar datos sin procesar por sí mismo. Al definir el conector Data, el Modelo da a esta transición un lugar propio.

Digital Data sigue siendo responsable de la representación activa legible por ordenador. Structure & Semantics sigue siendo responsable del significado interpretado y la forma organizada. El conector Data gestiona el movimiento entre ambas.

Esto hace explícita la primera transformación del Stack. La información empieza como representación digital activa, cruza el conector Data y se convierte en algo que el sistema puede entender. Desde ahí, el resto del Stack puede continuar el proceso: convertir información interpretada en objetos de interfaz utilizables, organizar esos objetos en contexto, prepararlos para output, entregarlos mediante el sistema y permitir que el usuario responda.
