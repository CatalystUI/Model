# 6.6 Connectors :: Native

## Discussion approfondie

### De Windows à Systems

Le connecteur **Native** se situe entre **Layer 2: Windows** et **Layer 1: Systems**. Il est responsable de connecter le window au système sous-jacent afin qu’output puisse être livré et que les interactions puissent être reçues à travers l’environnement réel dans lequel le programme s’exécute.

Layer 2 donne au Stack un window : une vue bornée, un conteneur ou un point de livraison. Layer 1 donne au Stack le system : l’environnement d’exécution, l’accès matériel, les services, les devices et le comportement natif qui rendent le window possible. Le connecteur Native fournit le point de passage entre ces deux couches.

Ce connecteur est souvent l’endroit où le Stack touche le plus directement la réalité pratique de l’informatique. Jusqu’ici, le Modèle a décrit l’information lorsqu’elle se déplace à travers données structurées, components, graphs, renderers et surfaces. Mais un window n’existe pas par imagination seule. Quelque chose doit demander au système de le créer, le configurer, le maintenir, le mettre à jour et rapporter les interactions à travers lui.

Ce quelque chose est le connecteur Native.

### Définir les bindings

Un **binding** est une connexion contrôlée entre une couche et une fonctionnalité fournie par une autre. Dans le contexte du connecteur Native, les bindings exposent un comportement de niveau système au window sous une forme que le programme peut utiliser sans exiger que le window devienne le système lui-même.

Cette définition est volontairement simple. Un binding n’a pas besoin d’être mystérieux. C’est la relation accessible entre le code au-dessus et la fonctionnalité au-dessous.

Un binding natif peut exposer la capacité de créer un window, changer son titre, recevoir une entrée clavier, répondre au mouvement du pointeur, redimensionner la zone active, demander le focus, accéder à un device ou communiquer avec un service système. Les détails varient selon le système et l’implémentation, mais le concept reste le même : le binding fournit une connexion utilisable à la fonctionnalité native.

C’est pourquoi les bindings comptent autant à cette couche. Le système peut fournir des capacités puissantes, mais ces capacités ne sont pas automatiquement disponibles dans le langage ou la structure utilisés par le reste du Stack. Elles doivent être exposées par une forme de connexion. Le connecteur Native est l’endroit où ces connexions sont réunies, formées et utilisées.

### Fournir l’accès natif

Dans beaucoup d’implémentations, le connecteur Native fournira surtout des bindings vers des fonctionnalités système de plus bas niveau. Cela peut sembler ordinaire au premier abord, surtout parce que les développeurs connaissent déjà les APIs natives, les bibliothèques de plateforme, les appels système, les interfaces de device et les outils similaires. Pourtant, dans le Stack, ce ne sont pas de simples détails d’implémentation au hasard. Ce sont les moyens par lesquels Layer 2 obtient l’accès à Layer 1.

Un window graphique sur un système d’exploitation de bureau peut nécessiter des bindings vers une API de fenêtrage de plateforme. Une interface en ligne de commande peut nécessiter des bindings vers l’entrée et la sortie du terminal. Un device spécialisé peut nécessiter des bindings vers des boutons, capteurs, haut-parleurs, lumières ou autres devices contrôlés par le système. Dans chaque cas, le connecteur Native fournit la relation qui permet au window d’agir dans le système.

L’important n’est pas la plateforme utilisée. L’important est que le window ne peut pas livrer output ni recevoir interaction s’il n’a pas un moyen de communiquer avec le système qui le contient.

Le connecteur Native fournit ce moyen.

### Plus qu’un wrapper

Comme ce connecteur expose souvent un comportement natif, il peut être tentant de le décrire comme un wrapper autour d’APIs système. Cette description peut être utile dans certains contextes pratiques, mais elle n’explique pas complètement ce que le connecteur fait dans le Modèle.

Un wrapper décrit la façon dont on implémente souvent ce type de couche. Un binding décrit ce que le connecteur fournit réellement.

Le connecteur Native n’est pas seulement un tas d’appels de plateforme placés sous le window. Il est la relation formelle entre le window et le système. Il définit comment le window reçoit son existence soutenue par le système, comment le comportement système devient disponible au Stack et comment les interactions issues du système commencent à remonter.

Cette distinction compte parce que le Modèle ne cherche pas à préserver la façon dont les développeurs ont historiquement décrit ces outils. Il cherche à décrire le processus sous-jacent lui-même. Dans ce processus, le connecteur Native n’est pas important parce qu’il arrive à wrapper une API native. Il est important parce qu’il lie Layer 2 à Layer 1.

C’est cela que ce connecteur est réellement.

### Créer et maintenir le Window

Dans le flux top-down, le connecteur Native permet au window d’opérer à travers le système. Un window peut devoir être créé, affiché, caché, redimensionné, déplacé, focalisé, mis à jour ou fermé. Ces actions nécessitent une relation avec le système, parce que le système est la couche qui fournit réellement l’environnement dans lequel ces actions peuvent se produire.

Le connecteur Native peut exposer les bindings nécessaires pour effectuer ces actions. À travers lui, Layer 2 peut demander un comportement système sans absorber toute la responsabilité de la gestion du système. Le window reste le point de livraison borné. Le système reste l’environnement qui fournit la fonctionnalité sous-jacente. Le connecteur Native porte la relation entre les deux.

C’est particulièrement important parce que les systèmes diffèrent. Des systèmes d’exploitation, devices, runtimes et environnements différents peuvent fournir des APIs et des comportements différents. Le connecteur Native donne au Stack un lieu pour représenter ces différences sans forcer le reste du Modèle à devenir spécifique à un système.

### Recevoir les interactions

Comme le Stack est réversible, le connecteur Native est aussi le premier connecteur explicite impliqué lorsqu’une interaction entre depuis le système.

Une pression de touche, un mouvement de pointeur, une entrée tactile, une action de manette, un signal de device, un événement de redimensionnement, un changement de focus ou tout autre événement issu du système doit traverser de Layer 1 vers Layer 2 avant que le reste du Stack puisse en faire quoi que ce soit. Le connecteur Native fournit ce passage. Il reçoit ou expose l’information d’interaction du système et la porte dans le window, où elle peut continuer à remonter à travers le connecteur Surface vers Renderers, puis à travers Bridge, Adapter, Parser et Data si nécessaire.

Dans beaucoup de cas, le connecteur Native n’a pas besoin de décider ce que l’interaction signifie. Son rôle est de lier la source d’interaction du système au chemin d’interaction du window. Le système signale que quelque chose s’est produit. Le connecteur Native rend ce signal utilisable par Layer 2. Le reste du Stack peut alors router, transformer et traiter l’interaction selon ses propres responsabilités.

Cela garde la frontière inférieure nette. Le connecteur Native donne à l’input d’interaction un chemin vers le Stack sans exiger que le système comprenne les couches supérieures, et sans exiger que les couches supérieures se comportent comme si elles étaient le système.

### Préserver la frontière

Un connecteur Native doit préserver la frontière entre le window et le système. Il doit exposer la fonctionnalité système dont le window a besoin, mais il ne doit pas effacer la distinction entre les deux couches.

C’est là que les bindings sont particulièrement utiles comme concept. Un binding permet l’accès sans identité. Le window peut utiliser une fonctionnalité système sans devenir le système. Le système peut fournir un comportement sans devenir le window. Le connecteur définit la relation entre les deux.

Cette frontière permet à CatalystUI de décrire un window de façon cohérente à travers différents environnements. Un système peut fournir un window de bureau traditionnel. Un autre peut fournir un terminal. Un autre peut fournir un canal d’output spécifique à un device. Un autre peut fournir un environnement distant ou virtualisé. Les bindings natifs peuvent différer, mais le rôle du connecteur reste le même.

Le connecteur Native lie Layer 2 à Layer 1 afin que le window puisse exister, opérer, recevoir des interactions et livrer output dans le système qui le prend en charge.

### Pourquoi le connecteur compte

Le connecteur Native empêche le Stack de confondre un window avec le système qui le fournit. Sans ce connecteur, Windows devrait contenir directement du comportement spécifique au système, ou Systems devrait comprendre le concept de plus haut niveau du window. L’une ou l’autre direction brouillerait la frontière entre le point de livraison et l’environnement qui rend la livraison possible.

En définissant le connecteur Native, le Modèle donne à cette transition un lieu approprié.

Windows reste responsable du contexte borné par lequel output et interaction passent. Systems reste responsable de l’environnement sous-jacent, des services, des devices et du comportement natif. Le connecteur Native gère le binding entre les deux.

C’est le dernier connecteur explicite du Stack. C’est là que l’interface modélisée atteint le système sous elle. Il peut ressembler à un accès de plateforme. Il peut être implémenté par des bibliothèques natives, des appels système, des APIs de device ou des services de runtime. Mais sous ces descriptions familières, son objectif est plus clair et plus simple.

Le connecteur Native fournit des bindings.

Il lie le window au système, permettant à output de quitter le Stack et à interaction d’y entrer. Ce faisant, il complète le chemin explicite entre l’interface modélisée et l’environnement réel dans lequel cette interface doit vivre.
