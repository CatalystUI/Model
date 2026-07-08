<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 6.2 Connectors :: Parser

## Explicación en profundidad

### De estructura a uso

El conector **Parser** se sitúa entre **Layer 6: Structure & Semantics** y **Layer 5: Components, Controls, & Layouts**. Es responsable de tomar información estructurada y convertirla en algo que el resto de la interfaz pueda usar, modificar, organizar o responder activamente.

Layer 6 da a la información una forma interpretada estable. Define qué significan los datos, cómo están organizados y qué reglas les dan forma. Sin embargo, una estructura no es lo mismo que un objeto de interfaz. Una estructura puede decirle al sistema que un documento tiene un encabezado, que un archivo contiene una sección o que una canción contiene información de tiempo, pero la estructura en sí sigue preocupada sobre todo por representar fielmente los datos.

El conector Parser mueve esa información interpretada hacia Layer 5, donde se vuelve mutable. Aquí es donde una estructura puede convertirse en un componente, un control o un layout. Aquí es donde la información deja de ser solo una descripción estable de lo que existe y empieza a convertirse en algo con lo que el programa puede interactuar directamente. En otras palabras, el conector Data ayuda al sistema a entender qué es la información. El conector Parser ayuda al sistema a convertir ese entendimiento en algo utilizable.

### Parsear hacia componentes

La palabra “parser” suele usarse para describir el proceso de leer texto o dividir un archivo en piezas significativas. En CatalystUI, la palabra conserva esa idea general, pero se aplica de forma más amplia. Un conector Parser no se limita a leer caracteres o tokens. Recibe una estructura ya interpretada y convierte esa estructura en componentes mutables. Esta distinción es importante, porque el conector Data ya ha llevado digital data hacia Structure & Semantics. Cuando la información llega al conector Parser, el sistema ya no pregunta: “¿Se pueden entender estos datos?”. Ahora pregunta: “¿Cómo deberían volverse utilizables estos datos entendidos?”.

Una estructura de documento puede convertirse en componentes de documento. Una estructura de configuración puede convertirse en componentes de ajustes. Una estructura musical puede convertirse en componentes de audio editables. El conector Parser realiza la transición desde significado estructurado hacia representación interactiva. También es aquí donde el Stack empieza a resultar más familiar para un programador. Componentes, controles y layouts son las piezas con las que un desarrollador puede trabajar directamente. Pueden cambiarse, consultarse, organizarse, actualizarse y finalmente enrutarse por las capas inferiores del Stack. El conector Parser es lo que da a esas piezas su forma inicial.

### Cuando la diferencia parece pequeña

En muchos casos, una estructura y un componente pueden parecer muy diferentes. Un documento complejo, un archivo de audio o una vista interactiva pueden requerir una transformación importante antes de volverse útiles en Layer 5. Sin embargo, cuando la estructura original es sencilla, la diferencia entre estructura y componente puede parecer casi invisible a primera vista.

Un archivo INI es una buena forma de verlo. Después de que el conector Data haya interpretado el archivo, la estructura puede contener secciones, claves y valores. Un componente que representa ese mismo archivo también puede contener secciones, claves y valores. En la superficie, estas dos formas pueden parecer casi idénticas.

La clave es esta: la distinción no está solo en su forma, sino en su responsabilidad.

La estructura representa el estado interpretado de los datos. Es la forma estable producida desde la representación digital original. El componente representa el estado utilizable de esos datos. Puede permitir a un desarrollador añadir una sección, quitar una clave, cambiar un valor, aplicar valores predeterminados, validar ediciones, seguir modificaciones o preparar la información para visualización e interacción.

Así que, aunque una estructura INI sencilla y un componente INI puedan contener casi la misma información, no significan lo mismo dentro del Stack. La estructura se ocupa de la interpretación fiel. El componente se ocupa del uso activo.

Esto ayuda a explicar por qué el conector Parser importa incluso cuando su trabajo parece pequeño. A veces el parsing es dramático. A veces es casi una correspondencia uno a uno. En ambos casos, el conector sigue marcando la frontera donde la información interpretada se convierte en datos de interfaz mutables.

### El poder de la reexpresión

El conector Parser se vuelve especialmente poderoso cuando una sola estructura puede reexpresarse en más de una forma útil. Como Layer 6 representa significado interpretado, el conector Parser puede decidir cómo debería volverse utilizable ese significado en Layer 5.

Un documento HTML lo demuestra con claridad. El mismo documento estructurado podría parsearse en componentes para una página web visual, componentes para un esquema de documento legible, componentes para navegación de accesibilidad, componentes para impresión o componentes para extraer información específica. La estructura original puede ser la misma, pero el conector Parser permite que esa estructura se convierta en distintas representaciones utilizables según lo que el sistema intenta lograr.

Esto no es solo una comodidad. Revela algo importante sobre el Stack: una vez que los datos se han interpretado, pueden reformarse según un propósito.

El mismo principio puede aplicarse a la música. Una representación musical estructurada podría convertirse en componentes de línea de tiempo editables, componentes de reproducción, componentes de notación o componentes orientados a exportación. Desde ahí, la información puede acabar volviendo hacia una estructura adecuada para un archivo WAV, un archivo MP3 u otro formato. El conector Parser es parte de la razón por la que este tipo de transformación puede expresarse limpiamente. Da al sistema un lugar para moverse entre estructura estable y representación mutable sin fingir que esas dos ideas son lo mismo.

De este modo, el conector Parser ayuda a preservar la flexibilidad de la información. Permite que los mismos datos interpretados participen en distintos flujos de trabajo, herramientas y formas de expresión, mientras siguen anclados en el significado proporcionado por Structure & Semantics.

### Volver a la estructura

Como el Stack es reversible, el conector Parser también funciona en la dirección opuesta. Cuando los componentes se modifican mediante interacción, puede que esos cambios tengan que volver a Structure & Semantics antes de poder convertirse de nuevo en Digital Data.

Este camino inverso es donde la información mutable se prepara para volver a ser estable. Un componente de ajustes puede ser cambiado por un usuario y después parseado de vuelta a una estructura de configuración. Un componente de documento puede ser editado y después parseado de vuelta a una estructura de documento. Un componente musical puede organizarse, recortarse o ajustarse y después parsearse de vuelta a una estructura que más tarde pueda escribirse como archivo.

Este proceso no significa que cada componente deba volver exactamente a la misma estructura de la que vino. A veces el propósito de la interacción es transformar la información en una forma nueva. Un documento importado puede convertirse en un esquema simplificado. Un proyecto de audio editado puede convertirse en una estructura final de exportación. Un conjunto complejo de componentes puede reducirse a una estructura más pequeña para almacenamiento o transmisión.

El conector Parser proporciona al Modelo un lugar adecuado para esta transformación. Permite que los datos de interfaz mutables vuelvan a convertirse en datos estructurados sin obligar a Layer 5 a fingir que es responsable del almacenamiento, y sin obligar a Layer 6 a entender cada forma interactiva posible.

### Preservar la intención

Un conector Parser debería preservar el significado previsto de la información al cruzar entre capas. Al moverse de estructura a componentes, debería producir formas utilizables que reflejen honestamente la estructura. Al moverse de componentes de vuelta a estructura, debería representar el resultado de la interacción con suficiente claridad para que las capas superiores puedan preservarlo o transmitirlo.

Esto no exige una copia perfecta uno a uno. De hecho, el conector Parser suele existir porque una copia uno a uno sería menos útil. Los componentes pueden necesitar propiedades de conveniencia, métodos auxiliares, estado de edición, estado de validación, información de layout o valores temporales que no pertenecen a la estructura original. Del mismo modo, una estructura devuelta puede omitir estado temporal del componente porque ese estado solo era útil durante la interacción.

El objetivo no es mantener idéntico cada detalle interno. El objetivo es preservar el significado que importa.

Esto mantiene honesto al Stack. Structure & Semantics sigue siendo el lugar de la información interpretada y estable. Components, Controls, & Layouts sigue siendo el lugar de la información mutable y utilizable. El conector Parser realiza el movimiento entre ambas mientras preserva la intención de los datos que se transforman.

### Por qué importa el conector

El conector Parser impide que el Stack confunda datos interpretados con datos de interfaz utilizables. Sin este conector, las estructuras tendrían que volverse mutables por sí mismas, o los componentes tendrían que saber cómo interpretar cada estructura que reciben. Cualquiera de los dos enfoques difumina las responsabilidades de las capas que lo rodean.

Al definir el conector Parser, el Modelo da a esta transición un lugar propio.

Structure & Semantics sigue siendo responsable de la interpretación estable. Components, Controls, & Layouts sigue siendo responsable del uso activo, la modificación y la interacción. El conector Parser gestiona la transformación entre ambas.

Este es el punto del Stack donde la información entendida se convierte en algo con lo que el programa puede trabajar directamente. Es donde el significado estable se convierte en representación mutable. Desde ahí, la información puede organizarse en graphs y frames, prepararse para output, enrutarse por las capas inferiores y finalmente colocarse ante el usuario como algo que puede percibir, entender y responder.
