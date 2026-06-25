# 5.3 The Stack :: Structure & Semantics

## Explicación en profundidad

### La primera capa interpretativa

**Structure & Semantics** es la capa donde Digital Data se vuelve comprensible por primera vez dentro del Stack. Layer 7 proporciona una representación activa legible por ordenador, pero esa representación no se explica a sí misma. Antes de que el resto de la interfaz pueda usarla, el sistema debe saber qué tipo de representación es, qué reglas la gobiernan y cómo deben entenderse sus partes internas.

Ese es el propósito de Layer 6. Toma una representación activa de Digital Data y le da una forma significativa. En este punto, el Stack aún no se ocupa de componentes, controles, layouts, renderizado o presentación. Se ocupa de la interpretación: cómo debe leerse la representación, qué relaciones existen dentro de ella y qué forma puede pasarse con seguridad a la siguiente capa.

### Semantics

**Semantics** define las reglas por las que debe entenderse una representación. Describe el significado esperado, el orden, el formato y las relaciones del contenido que se está interpretando. En este sentido, Semantics actúa como un contrato. No necesita contener la representación activa en sí; más bien, define cómo se supone que debe leerse esa representación.

Esta distinción importa porque Digital Data puede contener patrones reconocibles sin que el Stack sepa todavía qué significan esos patrones. Una secuencia de bytes, caracteres, campos o registros puede seguir un formato conocido, pero el Modelo no trata ese formato como aplicado hasta Layer 6. Semantics proporciona el conjunto de reglas que hace posible la interpretación.

Semantics puede definir reglas amplias, como la forma esperada de un documento, formato de archivo, mensaje, respuesta, configuración o recurso. También puede definir expectativas internas más pequeñas, como cómo se ordena un campo, cómo se reconoce una sección, qué valores son válidos o cómo se relaciona una parte con otra. El punto importante es que Semantics define significado antes de que la interfaz empiece a convertir ese significado en partes usables.

### Structure

Una **Structure** es el resultado organizado de aplicar Semantics a Digital Data. Mientras Semantics define cómo debe entenderse algo, una Structure representa lo que se ha entendido de una representación activa específica. Es la forma moldeada del contenido después de aplicar las reglas relevantes.

Structure permite que el resto del Stack trabaje con la representación sin volver repetidamente a la forma cruda. En lugar de tratar el recurso como una secuencia no interpretada, el sistema puede trabajar ahora con secciones, valores, relaciones o registros organizados. Esto aún no vuelve interactivo el recurso. Solo significa que el contenido ha recibido una forma estable que la interfaz puede usar como fundamento.

En el Modelo, Structure está vinculada a una interpretación particular. Si los mismos Digital Data pueden entenderse mediante más de un conjunto de Semantics, entonces puede producirse más de una Structure a partir de ellos. Del mismo modo, si la representación subyacente cambia, la Structure resultante debe reflejar esa interpretación cambiada. Structure, por tanto, no es simplemente “los datos en memoria”. Es la forma interpretada de una representación específica según reglas semánticas específicas.

### Interpretación estable

Structure & Semantics debe tratarse como estable dentro de una pasada determinada por el Stack. Esta capa representa una interpretación que ya se ha establecido, no un objeto de interfaz mutable que el usuario manipula activamente. Una vez que Digital Data se ha interpretado en Structure, esa Structure proporciona una base fiable para las capas posteriores.

Esta estabilidad es lo que separa Layer 6 de **Layer 5: Components, Controls, & Layouts**. Layer 5 introduce objetos de interfaz mutables y orientados al ser humano que pueden ordenarse, actualizarse, recibir interacción y rutarse por el resto de la interfaz. Layer 6 no cumple ese papel. Explica qué significa el contenido y cómo está organizado antes de que la interfaz lo convierta en componentes usables.

Esto no significa que el recurso subyacente nunca pueda cambiar. Significa que, cuando ocurre un cambio, el Modelo debería reconocer una interpretación nueva o actualizada en lugar de tratar la Structure original como una superficie de control infinitamente mutable. Layer 6 proporciona la base interpretada; Layer 5 proporciona la interfaz mutable construida a partir de ella.

### Relación con Digital Data

El límite entre Digital Data y Structure & Semantics es el límite entre representación activa y forma interpretada. Digital Data dice: “Este recurso está ahora presente dentro del Stack en una forma legible por ordenador”. Structure & Semantics dice: “Así se entiende esa representación”.

Esto evita que Layer 7 cargue responsabilidades que pertenecen a la interpretación. Un archivo, stream, respuesta o búfer puede estar ya codificado según un formato, pero la codificación por sí sola no es lo mismo que la interpretación dentro del Modelo. Layer 6 empieza cuando el Stack aplica las reglas relevantes y produce una forma organizada que puede usar el resto de la interfaz.

### Relación con Components, Controls, & Layouts

Structure & Semantics también protege a Layer 5 de tener que entender directamente cada representación cruda. Components, controls y layouts no deberían verse obligados a analizar bytes, decodificar formatos, validar el orden de campos o determinar el significado básico de un recurso cada vez que se usan. Deberían recibir una forma ya interpretada que pueda adaptarse a objetos de interfaz orientados a las personas.

Esta separación permite que Layer 5 se centre en usabilidad, interacción y disposición. Una component puede exponer una propiedad conveniente, un control puede responder a la intención del usuario, y un layout puede organizar partes visibles o no visibles de una interfaz. Esas responsabilidades dependen del significado, pero no definen el significado desde cero. Layer 6 suministra la comprensión estructurada que hace posibles esas responsabilidades.

### Papel en el flujo

En el flujo de arriba hacia abajo, Structure & Semantics recibe Digital Data y los interpreta en una forma organizada estable. Este es el momento en que el Stack empieza a moverse desde una representación cruda legible por ordenador hacia material usable de interfaz. El resultado puede transformarse después en components, controls y layouts adecuados para la interacción y la organización posterior.

En el flujo de abajo hacia arriba, Structure & Semantics recibe cambios producidos mediante interacción y los prepara para convertirse de nuevo en Digital Data. Un control puede modificar un valor, actualizar una sección, crear un registro, eliminar contenido o producir algún otro cambio. Antes de que ese resultado pueda volver a Digital Data, aún debe ajustarse a las reglas semánticas relevantes. Por tanto, Layer 6 ayuda a garantizar que el resultado siga siendo significativo antes de representarse otra vez en forma legible por máquina.

### Por qué importa la capa

Structure & Semantics evita que el Stack confunda acceso con comprensión. Digital Data puede estar disponible para el sistema, pero disponibilidad no significa que la interfaz sepa cómo usarlo. Layer 6 proporciona el paso interpretativo que falta: define qué significa la representación y la organiza en una forma sobre la que las capas posteriores pueden construir con seguridad.

Al separar Semantics, Structure y Components, el Modelo conserva una progresión limpia. Digital Data proporciona la representación activa. Semantics define cómo debe entenderse esa representación. Structure proporciona el resultado organizado de esa comprensión. Components, Controls, & Layouts transforma entonces esa forma interpretada en objetos de interfaz mutables. Esta distinción mantiene preciso el Stack, evita que la lógica de análisis se filtre a cada capa y permite que la misma representación subyacente soporte distintas formas de interacción, presentación y transformación.
