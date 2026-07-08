<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 5.7 The Stack :: Windows

## Discussion approfondie

### La couche de livraison bornée

**Windows** est la couche où la sortie rendue reçoit un contexte de livraison borné. Layer 3 transforme l’état préparé de l’interface en forme prête pour la sortie, mais cette sortie a encore besoin d’un lieu, canal ou point de vue défini à travers lequel elle peut être livrée par le system. Layer 2 fournit cette frontière.

Une window doit être comprise comme un contexte logique de livraison plutôt que simplement comme une boîte visuelle sur un écran. Dans un environnement graphique, une window apparaît souvent comme une région visible gérée par un système d’exploitation. Dans le Modèle, toutefois, le concept est plus large : une window est le contexte orienté système à travers lequel la sortie peut être fournie et l’interaction reçue. Elle définit où le résultat rendu appartient dans le système environnant.

### Une vue dans le système

La window agit comme une vue dans le système. Elle ne crée pas le système et ne remplace pas le renderer. Elle fournit plutôt le contexte borné où la sortie du renderer peut être connectée à la livraison au niveau du système. Cette frontière peut impliquer position, taille, focus, visibilité, contexte de dispositif, canal de sortie ou autre forme de portée définie par le système.

Cela compte parce que la sortie rendue n’existe pas pour l’utilisateur de manière isolée. Elle doit être livrée quelque part. Un renderer peut produire des commandes visuelles, des samples audio, des instructions haptiques ou une autre sortie spécifique au domaine, mais ces résultats doivent encore être associés à un contexte reconnu par le système. La window fournit cette association.

Dans les interfaces visuelles, cela se reconnaît facilement parce que la window peut correspondre à une zone rectangulaire sur un écran. Dans d’autres domaines, le même rôle conceptuel peut être rempli par une session en ligne de commande, un contexte de sortie audio, un canal d’appareil, un viewport virtuel ou une autre interface bornée orientée système. La caractéristique définissante n’est pas l’apparence visuelle. La caractéristique définissante est que la window fournit la frontière de livraison entre la sortie rendue et le system.

### Relation avec Renderers

Windows reçoit la sortie de Renderers, mais n’effectue pas le rendu lui-même. Le rendu est la transformation d’un état d’interface préparé en forme prête pour la sortie. Le windowing est l’acte de donner à cette sortie un contexte système borné par lequel elle peut être livrée.

Cette distinction empêche Layer 2 d’absorber les responsabilités de Layer 3. Un renderer doit décider comment l’état organisé de l’interface devient prêt pour la sortie. Une window doit fournir le lieu ou canal orienté système où cette sortie peut être envoyée. Le renderer transforme ; la window contient, reçoit et transmet.

Cela permet aussi à différents renderers de cibler différents types de windows. Un renderer visuel peut cibler une window graphique, tandis qu’un renderer auditif peut cibler un contexte de sortie audio. L’implémentation précise peut varier selon le système et le domaine, mais la responsabilité par couches reste cohérente.

### Relation avec le System

Windows dépend de **Layer 1 : Systems** parce qu’elle est généralement créée, gérée, contrainte ou reconnue par la plateforme environnante. Un system peut déterminer comment les windows sont créées, comment elles reçoivent l’entrée, comment elles exposent des canaux de sortie, quelles ressources elles peuvent accéder et comment elles interagissent avec le matériel ou des services de niveau inférieur.

Cela ne rend pas la window identique au system. Le system est l’environnement opérationnel plus large qui fournit accès matériel, services d’appareil, planification, permissions, pilotes et comportement de plateforme. La window est un contexte logique borné dans cet environnement. C’est le contexte tourné vers l’interface qui permet à la sortie rendue et à l’interaction de passer entre le Stack et le system.

En séparant Windows du System, le Modèle évite de traiter chaque détail de plateforme comme partie de la frontière de l’interface. La window représente le contexte précis orienté système utilisé par l’interface. Le system représente l’environnement plus large qui rend ce contexte possible.

### Livraison de sortie

Dans le flux descendant, la window reçoit du renderer une représentation prête pour la sortie et la transmet vers le system. C’est l’étape où la sortie rendue n’est plus seulement préparée par l’interface ; elle est assignée à un contexte de livraison que le system peut utiliser.

La window peut gérer limites, focus, buffering, visibilité, état de canal ou autres conditions de livraison selon le domaine et l’implémentation. Ces détails affectent la manière dont la sortie entre dans le system, mais ils ne changent pas le rôle principal de la couche. La window fournit la frontière par laquelle la sortie rendue peut devenir sortie système.

Une fois que la sortie passe par la window, le system peut la porter vers le dispositif, service ou processus physique pertinent qui permet à l’utilisateur de la percevoir. La window est donc proche de la perceptibilité, mais elle n’est pas la perception elle-même. Elle reste partie du flux côté ordinateur.

### Entrée d’interaction

Dans le flux ascendant, la window est la première couche explicite du Stack où l’interaction fournie par le system devient disponible pour l’interface modélisée. Le system peut détecter une pression de touche, un mouvement de pointeur, un événement tactile, un signal d’appareil, une commande audio ou une autre forme d’entrée. La window reçoit cette interaction dans son propre contexte borné et la transmet vers le haut pour routage et traitement ultérieurs.

Cela rend la window centrale pour l’interaction parce qu’elle fournit le contexte de l’action. Une interaction n’est pas seulement le fait que quelque chose s’est produit, mais le fait que cela s’est produit dans une frontière particulière orientée système. Le focus, la position, le timing, la source de l’appareil, le canal ou le contexte actif peuvent déterminer comment le reste du Stack doit comprendre et router l’interaction.

La window ne décide généralement pas le sens final de l’interaction. Cette responsabilité appartient plus haut dans le Stack, surtout lorsque l’interaction atteint le control approprié. Le rôle de la window est de recevoir l’interaction du system, de l’associer à la bonne frontière et de la transmettre vers le haut sous une forme que le reste du Stack peut continuer à traiter.

### Indépendance de domaine

Windows est indépendante du domaine de la même manière que le reste du Stack est indépendant du domaine. Le mot « window » est souvent associé aux graphiques, mais dans CatalystUI il désigne tout contexte borné orienté système pour la sortie et l’interaction. Le domaine détermine quel type de sortie et d’entrée la window transporte ; la position dans le Stack détermine le rôle que la window remplit.

Cela permet à la même couche de décrire des windows graphiques, sessions texte, canaux audio, contextes de sortie tactile ou autres formes de livraison d’interface sans changer le Modèle. Chaque implémentation peut avoir des exigences système différentes, mais chacune remplit la même responsabilité conceptuelle : fournir la frontière par laquelle passent la sortie rendue et l’interaction système.

### Pourquoi la couche compte

Windows empêche le Stack de traiter la sortie rendue comme si elle atteignait automatiquement l’utilisateur. Un renderer peut transformer l’état de l’interface en forme prête pour la sortie, mais cette sortie a encore besoin d’un contexte orienté système. Layer 2 fournit ce contexte.

En séparant Windows à la fois de Renderers et du System, le Modèle préserve un chemin de livraison net. Renderers transforme l’état préparé de l’interface en représentation prête pour la sortie. Windows fournit le contexte borné par lequel cette représentation entre dans le system. Le System effectue ensuite le travail de niveau inférieur nécessaire pour livrer la sortie et recevoir l’entrée. Cette distinction permet à CatalystUI de décrire la livraison d’interface à travers plateformes et domaines sans réduire les windows à des rectangles visuels ni forcer les renderers à gérer le comportement de plateforme.
