<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 5.1 The Stack :: Data Storage

## Explicación en profundidad

### Un límite implícito

**Data Storage** es el límite superior implícito del Stack. Representa la condición en la que un contenido, estado o recurso sigue disponible antes de que las capas explícitas empiecen a trabajar con él, y donde el resultado de una interacción puede conservarse más tarde. El Modelo necesita este límite porque una interfaz no crea todo su asunto desde la nada. Algo debe estar disponible para leerse, recuperarse, recibirse o referenciarse antes de poder interpretarse, transformarse, renderizarse o recibir una acción.

Data Storage es implícito porque el Stack no modela los mecanismos internos del almacenamiento en sí. El Modelo puede depender de un recurso almacenado, pero no necesita describir cada detalle de cómo se conserva ese recurso. Esas preocupaciones pertenecen al sistema de información que lo rodea. El Stack empieza cuando alguna forma de contenido pasa a formar parte del flujo activo de la interfaz.

### Disponibilidad almacenada y representación activa

La distinción entre Data Storage y Layer 7: **Digital Data** es la distinción entre **disponibilidad almacenada** y **representación activa**. Data Storage describe el lugar o condición en que algo puede persistir. Digital Data describe la primera forma explícita de esa cosa una vez que entra en el proceso modelado como una representación legible por ordenador.

Por ejemplo, un documento puede existir en un sistema de archivos, un registro puede existir en una base de datos o una respuesta puede esperar detrás de una API. Mientras solo permanece disponible para accederse, pertenece a Data Storage. Cuando la interfaz lee ese documento, recibe ese registro, abre esa respuesta o incorpora de otra manera el recurso al flujo activo, se convierte en Layer 7. El cambio importante no es que el contenido se haya vuelto significativo de repente. El cambio importante es que ahora está representado dentro del Stack.

### Persistencia y transformación

Data Storage se ocupa de la persistencia y la disponibilidad. El Stack explícito se ocupa de la transformación. Una vez que un recurso almacenado se convierte en Digital Data, el Modelo puede empezar a describir qué le ocurre: cómo lo interpreta Structure & Semantics, cómo se moldea en Components, Controls, & Layouts, cómo se organiza mediante Graphs & Frames, cómo lo prepara un Renderer, cómo se entrega mediante un Window y cómo el System lo lleva hacia el Human Interface.

Esta separación importa porque almacenamiento y transformación responden preguntas distintas. Data Storage pregunta si algo puede seguir disponible a lo largo del tiempo. Digital Data pregunta con qué representación activa binaria, textual, transmitida o recibida está trabajando actualmente la interfaz. Lo primero explica la conservación. Lo segundo inicia el flujo modelado.

### El límite de origen y retorno

En el flujo de arriba hacia abajo, Data Storage sirve como límite de origen. Un recurso almacenado se selecciona o recupera, y luego entra en el Stack como Digital Data. Desde ese punto, el Modelo puede rastrear cómo se entiende, organiza, transforma y entrega el recurso al usuario. Data Storage en sí no renderiza, analiza, distribuye ni interpreta el recurso. Solo suministra la condición desde la cual puede comenzar la representación activa.

En el flujo de abajo hacia arriba, Data Storage sirve como límite de retorno. Una interacción del usuario puede solicitar, crear, actualizar, eliminar o afectar de otro modo algo dentro del flujo de la interfaz. Un cambio resultante puede subir por el Stack hasta convertirse de nuevo en Digital Data. Si ese resultado debe permanecer disponible más allá del proceso inmediato, vuelve a Data Storage como estado preservado. El Stack no necesita modelar cada estrategia de escritura, transacción de base de datos, actualización de caché o paso de sincronización de red para reconocer que el resultado ha cruzado de vuelta a la persistencia.

### Ejemplos en contexto

Por eso Data Storage puede aparecer mediante muchas tecnologías sin quedar definido por ninguna de ellas. Un sistema de archivos, una base de datos MySQL, una colección MongoDB, un servicio respaldado por API, un almacén de objetos en la nube, una región de memoria de un dispositivo o un servicio de streaming pueden servir como Data Storage cuando proporcionan disponibilidad conservada fuera del Stack activo. Una vez que un archivo, registro, respuesta, búfer o stream específico se incorpora al flujo de la interfaz, el Modelo trata esa representación activa como Digital Data.

### Por qué importa la separación

Separar Data Storage de Layer 7 mantiene limpio el Stack. Sin esta distinción, el Modelo mezclaría el lugar donde algo se conserva con la forma que adopta una vez que la interfaz empieza a trabajar con ello. Eso haría que Digital Data fuera responsable tanto de la persistencia como de la representación activa, debilitando el propósito de las capas explícitas.

Al mantener Data Storage como implícito, el Modelo conserva un límite claro: el almacenamiento rodea el flujo de la interfaz, mientras que Digital Data lo inicia. Esto permite que el Stack describa la transformación de una representación activa específica sin enredarse en todos los posibles mecanismos de almacenamiento que hay detrás. Data Storage explica de dónde puede venir el contenido conservado y adónde pueden regresar los resultados preservados; Layer 7 inicia el proceso explícito de convertir ese contenido en algo que la interfaz pueda entender, transformar y finalmente presentar.
