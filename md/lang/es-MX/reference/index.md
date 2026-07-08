<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 3. Referencia

A continuación se resume el Modelo CatalystUI en varios formatos para que sea más fácil consultarlo, copiarlo y aplicarlo al estudiar, documentar o implementar el Modelo.

La página de Referencia no pretende sustituir la documentación que la rodea. En su lugar, ofrece una vista compacta del Modelo después de haber presentado ya la terminología, el resumen, los domains, el stack, los connectors y las interactions.

## Por prompt de IA

Un prompt de IA que puede permitir a un LLM interpretar y comprender el Modelo CatalystUI. Puede usarse para hacer preguntas sobre el Modelo, comparar sistemas existentes con él o proporcionar una hoja de referencia al resolver problemas en un entorno técnico.

---

```md
El Modelo CatalystUI es un modelo universal para describir el flujo de información entre un usuario y un sistema de información.

Un proceso es algo que acepta una entrada, realiza una transformación y produce una salida. Un sistema es un conjunto organizado de procesos, definido por cómo interactúan y por el orden en que se ejecutan. Una interfaz es un mecanismo que permite que dos sistemas diferentes interactúen. Un sistema de información es un sistema especializado que trabaja con datos persistentes y permite a un usuario crearlos, leerlos, actualizarlos o eliminarlos mediante una interfaz a lo largo del tiempo. Un ordenador es un sistema de información que trabaja exclusivamente con datos digitales, es decir, datos que pueden representarse en binario y procesarse por una máquina. Un usuario es una persona que puede interactuar con un sistema de información.

En el Modelo CatalystUI, los términos "data" e "information" se tratan como intercambiables.

El Modelo describe las interfaces de usuario a través del flujo de información. La información puede ser presentada por un sistema, interpretada por el usuario, respondida por el usuario, procesada por el sistema y presentada de nuevo mientras el ciclo continúa. El ciclo puede comenzar en cualquier punto, pero se aplica el mismo patrón: la información fluye entre el usuario y el sistema de información a través de una interfaz.

El Modelo CatalystUI se divide en tres categorías principales:

- Domains
- The Stack
- Connectors

Domains categoriza los datos. The Stack describe los datos. Connectors transforma, modifica y traduce los datos.

Domains describe qué tipo de información se maneja durante una interaction. Los siete domains de nivel superior son Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory y Multisensory. Symbolic data es información antes de haberse comprometido con un sentido específico. Visual data es información destinada a verse. Auditory data es información destinada a oírse. Tactile data es información destinada a sentirse. Olfactory data es información destinada a olerse. Gustatory data es información destinada a saborearse. Multisensory data es información en la que varias categorías sensoriales trabajan juntas como una sola experiencia.

The Stack describe dónde se encuentra la información dentro del flujo. Contiene siete layers explícitos con dos extremos implícitos. De arriba abajo, The Stack es:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage es la fuente o el destino implícito donde los datos persistentes permanecen disponibles más allá del flujo activo de la interfaz. Digital Data son datos después de haber entrado en el flujo activo de la interfaz en una forma legible por ordenador, pero antes de que el resto del Modelo los haya interpretado, organizado o presentado. Structure & Semantics describe cómo deben entenderse los datos digitales; semantics define las reglas para interpretar los datos, mientras que structure es el resultado organizado de aplicar esas reglas. Components, Controls, & Layouts representa las partes lógicas y utilizables de la interfaz; components representa objetos de interfaz utilizables, controls procesa interactions, y layouts organiza otros components o controls. Graphs & Frames organiza esas partes en relaciones más amplias y contextos activos; graphs representa relaciones organizadas entre objetos de interfaz, mientras que frames contiene y coordina graphs para la preparación orientada al renderer. Renderers transforma datos de interfaz preparados en una forma lista para la salida. Windows proporciona una vista o contexto mediante el cual el usuario puede dar entrada al sistema o recibir salida de él. Systems proporciona el entorno, los servicios, los dispositivos y los procesos que finalmente entregan salida y reciben entrada. Human Interface es el extremo implícito donde el usuario percibe información y responde mediante interaction.

Connectors describe cómo se mueve la información entre layers explícitos vecinos de The Stack. De arriba abajo, los connectors son:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

El Data connector conecta Digital Data con Structure & Semantics. Lleva información activa legible por ordenador a una forma estructurada que el Modelo puede entender, y también puede devolver información estructurada a una forma digital.

El Parser connector conecta Structure & Semantics con Components, Controls, & Layouts. Analiza estructuras interpretadas estables para convertirlas en partes de interfaz mutables, y también puede devolver components modificados a datos estructurados.

El Adapter connector conecta Components, Controls, & Layouts con Graphs & Frames. Adapta partes utilizables de la interfaz a relaciones organizadas y contextos activos, y ayuda a devolver interactions contextuales a los components o controls que pueden gestionarlas.

El Bridge connector conecta Graphs & Frames con Renderers. Lleva contexto organizado de la interfaz al renderer y normalmente pasa interactions de vuelta hacia arriba con poca modificación para que graph y frame puedan enrutarlas adecuadamente.

El Surface connector conecta Renderers con Windows. Da a la salida renderizada un destino dentro de la window y lleva hacia arriba información de interaction originada en la window.

El Native connector conecta Windows con Systems. Proporciona bindings entre la window y el system, permitiendo que la window exista, reciba interactions, entregue salida y se comunique con el comportamiento nativo del system.

Interactions es el punto en el que el Modelo se vuelve participativo. Una interaction es la intención detrás de una acción. El clic, toque, deslizamiento, comando, movimiento o palabra hablada es solo la acción visible; la interaction es lo que el usuario intenta lograr mediante esa acción. Interactions se mueve por The Stack, es transformada por connectors y puede llegar a modificar datos digitales antes de que el ciclo comience de nuevo.

Usa el Modelo CatalystUI para clasificar el tipo de información que se maneja, identificar dónde se encuentra esa información en The Stack, determinar qué connector es responsable de la transición entre layers y seguir cómo la información se mueve desde datos almacenados hasta la experiencia del usuario y desde la intención del usuario de vuelta a los datos.
```

## Por texto

Una hoja de referencia compacta que muestra el orden principal del Modelo CatalystUI.

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | Significado rápido                                               |
| ------------ | ---------------------------------------------------------------- |
| Symbolic     | Información antes de comprometerse con un sentido específico.    |
| Visual       | Información destinada a verse.                                   |
| Auditory     | Información destinada a oírse.                                   |
| Tactile      | Información destinada a sentirse.                                |
| Olfactory    | Información destinada a olerse.                                  |
| Gustatory    | Información destinada a saborearse.                              |
| Multisensory | Varias categorías sensoriales trabajando como una experiencia.   |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Layer   | Nombre                          | Significado rápido                                                       |
| ------- | ------------------------------- | ------------------------------------------------------------------------ |
| Implied | Data Storage                    | Datos persistentes fuera del flujo activo de la interfaz.                |
| Layer 7 | Digital Data                    | Información activa legible por ordenador antes de la interpretación.     |
| Layer 6 | Structure & Semantics           | Datos interpretados y reglas que les dan significado.                    |
| Layer 5 | Components, Controls, & Layouts | Partes mutables de la interfaz usadas por el programa.                   |
| Layer 4 | Graphs & Frames                 | Relaciones organizadas y contexto activo de la interfaz.                 |
| Layer 3 | Renderers                       | Procesos que preparan información para la salida.                        |
| Layer 2 | Windows                         | Vistas o contextos de entrega por donde pasan entrada y salida.          |
| Layer 1 | Systems                         | Entorno, servicios, dispositivos y procesos bajo la interfaz.            |
| Implied | Human Interface                 | El usuario que percibe la salida y responde mediante interaction.        |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Conecta                                                 | Significado rápido                                       |
| --------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | Conecta datos digitales activos con estructura interpretada. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Analiza estructuras estables en partes mutables.         |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adapta partes utilizables a contexto organizado.         |
| Bridge    | Graphs & Frames ↔ Renderers                             | Lleva contexto organizado hacia el rendering.            |
| Surface   | Renderers ↔ Windows                                     | Conecta salida renderizada con una window.               |
| Native    | Windows ↔ Systems                                       | Proporciona bindings entre una window y el system.       |

## Por flujo

Una referencia compacta para seguir cómo se mueve la información por el Modelo.

---

### Flujo orientado a salida

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

### Flujo orientado a interaction

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

## Por responsabilidad

Una referencia rápida para identificar dónde pertenece algo dentro del Modelo.

---

| Pregunta                                               | Usar         |
| ------------------------------------------------------ | ------------ |
| ¿Qué tipo de información se está manejando?            | Domains      |
| ¿Dónde se encuentra la información en el flujo?        | The Stack    |
| ¿Cómo se mueve la información entre layers vecinos?    | Connectors   |
| ¿Qué intenta lograr el usuario?                        | Interactions |

## Por pregunta diagnóstica

Una referencia basada en preguntas para aplicar el Modelo a un sistema existente.

---

| Pregunta                                                     | Área probable                             |
| ------------------------------------------------------------ | ----------------------------------------- |
| ¿Los datos están disponibles pero no se entienden?           | Digital Data, Data, Structure & Semantics |
| ¿Los datos interpretados todavía no son utilizables?         | Structure & Semantics, Parser, Components |
| ¿Las partes utilizables no están organizadas en contexto?    | Components, Adapter, Graphs & Frames      |
| ¿El contexto organizado no llega al renderer?                | Graphs & Frames, Bridge, Renderers        |
| ¿La salida renderizada no tiene adónde ir?                   | Renderers, Surface, Windows               |
| ¿La window no está conectada correctamente con el system?    | Windows, Native, Systems                  |
| ¿El system detectó una acción pero perdió la intención del usuario? | Interactions y routing de interaction |

## En una frase

Un resumen compacto de todo el Modelo.

---

```md
El Modelo CatalystUI describe el flujo de información entre un usuario y un sistema de información categorizando los datos mediante Domains, ubicando los datos dentro de The Stack, transformando los datos mediante Connectors y siguiendo la intención del usuario mediante Interactions.
```
