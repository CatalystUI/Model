<!--
Esta traducción fue generada por ChatGPT y debe ser revisada por un traductor humano.
Elimina estas líneas en una pull request después de que se haya verificado la traducción.
-->

# 4. Domains

## Visión general de alto nivel

Para describir el Modelo CatalystUI, primero debemos comenzar con los dominios. Un _dominio_ describe la categoría de datos que se está manejando durante una interacción. Es el primer paso para descomponer el flujo de información. Identifica con qué _tipo_ de información está trabajando el sistema. Un sensor de puerta de una tienda puede usar señales visuales o espaciales para detectar movimiento. Un mando de videojuego podría usar información táctil para producir retroalimentación háptica. Un altavoz inteligente podría trabajar con información auditiva al procesar el habla. En casi todos los casos, los dominios se alinean con la forma en que las personas perciben el mundo. El Modelo también contempla datos antes de que lleguen a un sentido específico, así como datos que abarcan varios sentidos simultáneamente. Como resultado, los siete dominios se definen como “simbólico”, “visual”, “auditivo”, “táctil”, “olfativo”, “gustativo” y “multisensorial”.

Los dominios son útiles porque hacen que el flujo de información sea más fácil de reconocer, diagnosticar y adaptar a las necesidades del usuario. Al identificar a qué dominio pertenece la información, podemos ver con mayor claridad qué está haciendo el sistema, qué no está haciendo y qué partes de la experiencia del usuario podrían faltar. Esto es especialmente importante para la accesibilidad: si una interfaz comunica solo visualmente, el Modelo nos ayuda a reconocer que también pueden necesitar considerarse formas táctiles, auditivas u otras formas de información. Como los dominios describen cómo participa la información en la experiencia del usuario, clasificar datos en un dominio debe comenzar preguntando qué papel desempeñan en la interacción. Si los datos están pensados para verse, son visuales; si están pensados para oírse, son auditivos; si están pensados para sentirse, son táctiles. Si los datos todavía no se han asignado a un sentido concreto, como ocurre con un archivo de texto, son simbólicos. Si varias categorías sensoriales trabajan juntas como una sola experiencia, como un videojuego que combina imagen, sonido y vibración del mando, es multisensorial.

## El papel de los dominios en el Modelo

Una vez que los datos se han clasificado en un dominio, la interacción tiene un punto de partida más claro. Sabemos qué información maneja el sistema, qué experiencia tendrá el usuario y si deben considerarse otras formas de comunicación. Con esa categoría establecida, el Modelo puede pasar de identificar el tipo de datos a describir cómo se mueve a través de la propia interfaz.
