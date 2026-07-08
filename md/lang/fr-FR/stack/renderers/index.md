<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 5.6 The Stack :: Renderers

## Discussion approfondie

### La couche transformationnelle

**Renderers** est la couche où l’état organisé de l’interface est transformé en forme prête pour la sortie. Layer 4 fournit graphs et frames : un contexte opérationnel préparé qui décrit ce qui doit être envoyé vers le bas, comment c’est organisé et quel état actuel doit être représenté. Layer 3 reçoit ce contexte préparé et le convertit en une forme adaptée à la livraison par une window puis, finalement, par le system.

Cette couche s’appelle rendering parce qu’elle effectue la transformation active de la représentation d’interface en sortie perceptible. Un renderer ne se contente pas de stocker l’interface, d’interpréter son contenu d’origine ou de gérer ses relations de components. Sa responsabilité est de prendre le résultat préparé des couches supérieures et de produire la sortie spécifique au domaine dont les couches inférieures du Stack ont besoin.

### Le rendu comme conversion

Dans CatalystUI, le rendu n’est pas limité aux graphiques. Un renderer visuel peut convertir l’état préparé de l’interface en pixels, commandes de dessin, textures, glyphes ou autre sortie visuelle. Un renderer auditif peut convertir l’état préparé en formes d’onde, samples, pistes ou sortie audio mixée. Un renderer tactile peut convertir l’état préparé en motifs haptiques. Le domaine spécifique peut changer, mais le rôle de la couche reste le même : le rendu convertit une représentation d’interface organisée en sortie que le système peut livrer.

Cette distinction garde le Modèle plus large que la pensée traditionnelle des interfaces graphiques. Un renderer n’est pas défini par le fait qu’il dessine sur un écran. Il est défini par le fait qu’il transforme un état d’interface préparé en une forme de sortie de niveau inférieur. Le résultat pourra finalement être vu, entendu, senti ou perçu autrement, mais à Layer 3 l’accent est mis sur la transformation elle-même.

### Relation avec Graphs & Frames

Renderers dépend de **Graphs & Frames** parce qu’il ne doit pas être responsable de comprendre tout le modèle d’interface. Layer 4 résout le contexte opérationnel actuel, organise les components, prépare les limites, détermine l’état pertinent et fournit un frame adapté au rendu. Layer 3 transforme ensuite ce frame préparé en forme prête pour la sortie.

Cette séparation compte parce que l’organisation et le rendu sont des responsabilités différentes. Un graph peut savoir comment les components se rapportent les unes aux autres, et un frame peut savoir ce que le passage actuel doit contenir. Un renderer doit savoir comment transformer ce contexte préparé en représentation de sortie appropriée. Lorsque ces responsabilités restent séparées, le renderer peut rester spécialisé et efficace sans devenir le gestionnaire global de l’interface.

### Relation avec Windows

Renderers dépend aussi de **Layer 2 : Windows** parce qu’une sortie rendue a besoin d’une cible de livraison. Un renderer peut produire des commandes, buffers, streams ou autres représentations prêtes pour la sortie, mais ces résultats ont toujours besoin d’un endroit où aller. La window fournit la vue, le canal ou la surface de livraison bornée à travers laquelle la sortie rendue peut être portée vers le system.

Cela fait du renderer le point de conversion actif entre le modèle d’interface supérieur et le modèle de livraison inférieur. Au-dessus, le Stack concerne surtout le sens, l’utilisabilité, l’organisation et l’état actif. En dessous, le Stack concerne le passage de la sortie à travers une window et dans le system. Layer 3 se tient entre ces préoccupations et convertit l’une en l’autre.

### Responsabilité spécifique au domaine

Renderers est spécifique au domaine par nature. Un renderer doit comprendre le type de sortie qu’il produit, parce que les différents domaines exigent différentes formes de transformation. La sortie visuelle, la sortie auditive, la sortie tactile et d’autres formes sensorielles ne partagent pas les mêmes exigences de livraison, même lorsqu’elles sont produites à partir du même état conceptuel d’interface.

Cela ne signifie pas que les couches supérieures doivent être réécrites pour chaque domaine. L’une des forces du Stack est que les couches supérieures peuvent décrire contenu, interaction, organisation et état de manière cohérente tout en permettant aux renderers de se spécialiser au point où la conversion spécifique au domaine devient nécessaire. Le renderer est l’endroit où cette spécialisation devient explicite.

Une interface unique peut aussi impliquer plus d’un renderer lorsque plusieurs formes de sortie sont traitées séparément. Dans ces cas, chaque renderer est responsable de la transformation requise par son propre domaine, tandis que le Stack environnant préserve le flux plus large de l’interaction.

### Rendu et perceptibilité

Un renderer prépare la sortie pour la perception, mais il n’est pas la perception elle-même. L’utilisateur ne perçoit pas directement le renderer. Le renderer produit une forme qui peut passer par une window et un system jusqu’à devenir perceptible à travers un appareil, un canal ou une sortie physique.

Cette distinction est importante parce que le rendu fait encore partie du processus de transformation côté ordinateur. Un renderer visuel peut produire des données de pixels, mais l’utilisateur perçoit la lumière d’un écran. Un renderer auditif peut produire des samples audio, mais l’utilisateur perçoit le son à travers des haut-parleurs ou un casque. Layer 3 prépare la sortie ; les couches inférieures la livrent.

### Rôle dans le flux descendant

Dans le flux descendant, Renderers reçoit un frame préparé de Layer 4 et le convertit en forme prête pour la sortie. C’est le point où le modèle d’interface actif commence à quitter l’organisation abstraite des components pour entrer dans le chemin concret de livraison du système.

Le renderer peut transformer l’état de component en opérations de dessin, buffers audio, instructions haptiques ou autre représentation spécifique au domaine. Une fois cette transformation effectuée, le résultat est passé à la couche Window, qui fournit le canal ou la vue bornée par laquelle le system peut livrer la sortie.

### Rôle dans le flux ascendant

Dans le flux ascendant, Renderers peut aussi participer à l’interprétation ou à la transformation des détails d’interaction avant leur retour vers les couches supérieures. Une interaction peut arriver du system par une window sous une forme qui doit être ajustée, traduite, associée à une région rendue ou convertie en représentation que le graph et le frame peuvent router.

Cela ne fait pas du renderer le gestionnaire final de l’interaction. Cette responsabilité appartient au control approprié dans Layer 5. Toutefois, comme le renderer comprend comment l’interface a été transformée en sortie, il peut fournir le contexte nécessaire pour inverser ou mapper une partie de cette transformation. Par exemple, il peut aider à relier une interaction de niveau inférieur à une position rendue, une région de sortie, un point temporel ou une cible spécifique au domaine avant que Layer 4 la route vers le haut.

### Pourquoi la couche compte

Renderers empêche le Stack de traiter la sortie comme une conséquence directe d’objets d’interface organisés. Un frame peut décrire ce qui doit être représenté, mais il ne devient pas automatiquement une sortie perceptible. Quelque chose doit transformer ce contexte préparé en une forme que les couches inférieures peuvent livrer. Layer 3 fournit cette transformation.

En séparant Renderers à la fois de Graphs & Frames et de Windows, le Modèle préserve une division claire des responsabilités. Graphs & Frames organise le contexte actuel de l’interface. Renderers convertit ce contexte en forme prête pour la sortie. Windows fournit le canal borné par lequel cette sortie atteint le system. Cette distinction permet à CatalystUI de décrire le rendu à travers les domaines sans le réduire aux graphiques, sans forcer les windows à effectuer la transformation et sans exiger des objets d’interface supérieurs qu’ils sachent comment ils seront finalement livrés.
