# 6.3 Connectors :: Adapter

## Discussion approfondie

### De l’usage au contexte

Le connecteur **Adapter** se situe entre **Layer 5: Components, Controls, & Layouts** et **Layer 4: Graphs & Frames**. Il est responsable de prendre de l’interface data mutable et de la placer dans un contexte plus large où elle peut être organisée, découverte, routée, bornée et préparée pour le reste du Stack.

Layer 5 donne au système des components, controls et layouts. Ce sont les pièces mutables avec lesquelles un développeur peut travailler directement. Un component peut représenter une information. Un control peut répondre à une interaction. Un layout peut organiser d’autres components selon un ordre particulier. Cependant, ces pièces ne décrivent pas entièrement l’environnement dans lequel elles existent. Elles peuvent savoir ce qu’elles sont et comment elles se comportent, mais elles ne savent pas automatiquement comment elles se rapportent à toute l’interface.

Le connecteur Adapter fournit ce mouvement depuis des pièces utilisables individuelles vers un contexte organisé. Il prend les components produits par le connecteur Parser et les adapte en graphs et frames. C’est là que le Stack commence à comprendre non seulement qu’un component existe, mais où il appartient, comment il se rapporte aux autres components et comment il doit participer à l’interface active.

Autrement dit, le connecteur Parser rend l’information structurée utilisable. Le connecteur Adapter rend l’information utilisable contextuelle.

### Adapter des components en graphs

Un component peut exister seul, mais une interface utilisateur est rarement faite d’un seul component isolé. Même l’interface la plus simple contient généralement des relations : un component peut en contenir un autre, un control peut dépendre d’un layout, un groupe peut devoir être recherché, ordonné, activé, désactivé, focalisé ou mis à jour ensemble.

C’est là que le graph devient important.

Le connecteur Adapter permet de placer components, controls et layouts dans un graph afin qu’ils puissent être organisés comme partie d’un tout plus large. Un graph peut stocker des components, suivre leurs relations, exposer des moyens de les interroger et fournir la logique environnante nécessaire pour les gérer comme une collection. Sans cette étape, les components resteraient des morceaux épars de données mutables plutôt que des participants à une interface unifiée.

Un settings component, par exemple, peut être utile seul. Une fois adapté dans un graph, il peut faire partie d’une vue complète de paramètres, être connecté à d’autres sections, recherché par nom, mis à jour avec des valeurs liées ou routé lorsque l’utilisateur effectue une action. Le component n’a pas cessé d’être un component, mais il a gagné du contexte grâce au graph.

Cette distinction aide à garder Layer 5 et Layer 4 séparés. Les components décrivent de l’interface data utilisable. Les graphs décrivent comment ces pièces sont organisées ensemble.

### Le layout n’est pas tout le contexte

Le connecteur Adapter aide aussi à clarifier la différence entre un layout et un graph. Comme les layouts peuvent organiser des components, il peut être tentant de les traiter comme la couche organisationnelle complète de l’interface. Cependant, un layout organise seulement des components d’une certaine manière. Il ne décrit pas nécessairement la relation complète, le cycle de vie, le routing ou le contexte environnemental de ces components.

Un layout vertical peut déterminer que plusieurs controls doivent apparaître dans l’ordre. Cela ne signifie pas que le layout est responsable de toute l’interface. Il n’a pas besoin de connaître chaque component actif, de gérer chaque interaction, de préparer l’output boundary ou d’agir comme médiateur de premier niveau pour le système. Ces responsabilités appartiennent à Layer 4.

Le connecteur Adapter respecte cette distinction. Il peut prendre un layout de Layer 5 et le placer dans un graph, mais le layout ne devient pas le graph simplement parce qu’il arrange des components. Le graph fournit un contexte organisationnel plus large, tandis que le layout reste un component dont le but est d’arranger d’autres components.

Cette séparation devient particulièrement utile lorsque l’interface grandit. Les arrangements simples peuvent rester simples, tandis que le système plus large peut tout de même fournir la structure nécessaire pour gérer la découverte, le routing, les mises à jour et la préparation pour output.

### Connexion au Frame

Layer 4 ne concerne pas seulement les graphs. Il contient aussi le frame, qui représente la frontière active et le point de communication entre les components organisés et les couches inférieures du Stack.

Le connecteur Adapter aide les components à entrer dans ce contexte encadré. Un component peut avoir une taille, un control peut avoir un comportement d’interaction, et un layout peut décrire un placement relatif, mais le frame détermine les limites dans lesquelles ces pièces sont préparées. Il concerne la zone active, le contexte environnant et l’information qui doit finalement être transmise vers rendering.

Cela ne signifie pas que le connecteur Adapter rend quoi que ce soit. Rendering appartient aux couches inférieures. Le connecteur Adapter prépare l’interface organisée afin que le frame puisse la communiquer correctement. Il donne au frame les relations entre components, les résultats de layout et les informations contextuelles nécessaires avant que le connecteur suivant ne porte cette information vers le renderer.

De cette manière, le connecteur Adapter agit comme un pont entre « voici les pièces que nous pouvons utiliser » et « voici l’interface organisée que nous préparons ».

### Réutilisation par adaptation

L’un des aspects les plus puissants du connecteur Adapter est que le même component peut être adapté dans différents contextes. Un component n’a pas besoin d’être lié définitivement à un graph, un frame ou un type d’interface. Son sens et son comportement peuvent rester stables pendant que le connecteur Adapter détermine comment il doit participer à un environnement particulier.

Un document component pourrait être adapté dans un graph d’édition, un graph d’aperçu ou un graph d’impression. Un music component pourrait être adapté dans un graph de lecture, un graph d’édition ou un graph de bibliothèque. Un groupe de settings components pourrait être adapté dans une page de préférences simple, un panneau de configuration avancé ou un flux de configuration automatisé.

Les components sous-jacents peuvent rester familiers, mais leurs relations et leur objectif changent selon le graph et le frame dans lesquels ils entrent. Cela donne à CatalystUI une façon propre d’exprimer la réutilisation sans prétendre que réutilisation signifie que tous les contextes sont identiques.

Le connecteur Adapter rend cela possible. Il permet à l’interface data mutable d’être réorganisée selon l’objectif, tout en gardant le component lui-même concentré sur ce qu’il représente et comment il se comporte.

### Retour aux components

Comme le Stack est réversible, le connecteur Adapter participe aussi au flux d’interaction qui revient vers les couches supérieures. Lorsqu’un utilisateur interagit avec le système, les couches inférieures doivent finalement router cette interaction vers le component ou le control approprié.

Layer 4 joue un rôle important dans ce processus parce qu’il comprend le contexte organisé. Le graph peut aider à déterminer quel component est pertinent. Le frame peut aider à interpréter les limites dans lesquelles l’interaction s’est produite. Une fois ce contexte connu, le connecteur Adapter aide à renvoyer l’interaction vers Layer 5, où le component ou control approprié peut répondre.

C’est important parce que les interactions arrivent rarement déjà attachées au component exact qui doit les traiter. Le système peut savoir qu’une touche a été pressée, qu’un pointeur a bougé, qu’une commande a été déclenchée ou qu’une région a été sélectionnée, mais le Stack doit encore déterminer ce que cette action signifie dans l’interface actuelle. Le connecteur Adapter aide à porter cette décision contextuelle vers les components mutables où l’interaction peut être traitée.

Dans le flux top-down, le connecteur Adapter place les components dans un contexte. Dans le flux bottom-up, il aide à retourner les interactions contextuelles aux components qui peuvent agir sur elles.

### Préserver l’identité

Un connecteur Adapter doit préserver l’identité et l’intention des components qu’il adapte. Lorsqu’un component entre dans un graph ou un frame, il ne doit pas perdre ce qu’il est. Son objectif, son état et sa relation à l’information d’origine doivent rester reconnaissables, même lorsqu’il est organisé dans un système plus large.

Cela ne signifie pas que le component ne peut pas être enveloppé, indexé, groupé, mesuré, transformé ou préparé pour un environnement spécifique. Dans beaucoup de cas, l’adaptation exige des informations supplémentaires que le component ne contenait pas à l’origine. Un graph peut avoir besoin d’identifiants. Un frame peut avoir besoin de limites. Un système de routing peut avoir besoin d’informations de focus. Ces ajouts aident le component à participer au contexte, mais ils ne doivent pas effacer son sens.

Le connecteur Adapter effectue donc une forme de transformation soigneuse. Il ajoute du contexte sans avaler le component. Il permet à l’interface de devenir organisée sans forcer chaque component à devenir responsable de tout le système autour de lui.

### Pourquoi le connecteur compte

Le connecteur Adapter empêche le Stack de confondre l’interface data utilisable avec le contexte d’interface organisé. Sans ce connecteur, les components devraient gérer leurs propres graphs, les layouts seraient pris pour une organisation complète de l’interface, ou les frames seraient forcés de comprendre les components sans transition appropriée entre les deux couches.

En définissant le connecteur Adapter, le Modèle donne à cette transition un lieu approprié.

Components, Controls, & Layouts reste responsable des objets d’interface mutables et du comportement d’interaction direct. Graphs & Frames reste responsable de l’organisation, du contexte, des frontières, du routing et de la préparation pour les couches inférieures. Le connecteur Adapter gère le mouvement entre les deux.

C’est le point du Stack où l’information utilisable devient une information située. Les components ne sont plus seulement disponibles pour le programme ; ils sont placés dans un contexte vivant où ils peuvent se relier les uns aux autres, répondre par les bons chemins et se préparer à être portés plus bas dans le Stack. À partir de là, l’interface organisée peut aller vers rendering, delivery, perception et réponse.
