<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 6.5 Connectors :: Surface

## Discussion approfondie

### Du Rendering à la Delivery

Le connecteur **Surface** se situe entre **Layer 3: Renderers** et **Layer 2: Windows**. Il est responsable de porter l’output rendu depuis le renderer vers le window, où cet output peut être placé dans un contexte borné fourni par le système.

Layer 3 est l’endroit où l’information est convertie en forme prête pour output. Le renderer prend les données préparées par le graph et le frame et produit quelque chose qui pourra finalement être perçu. Cependant, l’output rendu a encore besoin d’une destination. Il lui faut un endroit où aller, quelque chose auquel être connecté et une frontière par laquelle le système peut le livrer.

Cette destination est représentée par la couche Windows.

Le connecteur Surface fournit le point de passage entre le renderer et le window. Il explique comment l’output rendu est attaché à la zone utilisable du window, et comment le renderer reçoit assez d’information du window pour continuer à produire output correctement. Sans ce connecteur, le renderer pourrait produire output, mais le Stack n’aurait aucune explication explicite de la façon dont cet output devient connecté au window qui le présente.

Plus simplement, un renderer crée output. Un window fournit l’endroit où cet output peut être livré. Le connecteur Surface permet aux deux de travailler ensemble.

### La zone rendue

Une surface peut être comprise comme la zone utilisable d’un window qui reçoit l’output rendu. Dans une application graphique traditionnelle, cela peut être facile à imaginer : un renderer dessine dans la zone intérieure d’un window. Cependant, le même principe s’applique plus largement. La surface n’est pas simplement « l’écran ». Elle est le connecteur qui donne à l’output rendu une place dans les limites du window.

C’est important parce qu’un renderer ne possède généralement pas le window. Le renderer peut savoir produire output, mais le window est la couche qui fournit la vue active dans le système. Le window peut avoir une taille, une position, un état, une échelle, un focus ou d’autres conditions gérées par le système. Le connecteur Surface rend ces conditions disponibles au renderer de la manière nécessaire pour que l’output soit livré correctement.

Un renderer peut avoir besoin de connaître les limites actuelles du window. Il peut avoir besoin de savoir quand ces limites ont changé. Il peut avoir besoin d’une cible dans laquelle dessiner, écrire, streamer ou autrement mettre à jour. Ces détails peuvent varier selon l’implémentation, mais la responsabilité conceptuelle reste la même : le connecteur Surface relie l’output du renderer au contexte de window qui le contiendra.

Cela empêche le renderer de prétendre posséder la frontière système, et cela empêche le window de prétendre savoir rendre.

### Plus qu’une image finale

Il peut être tentant de penser au connecteur Surface comme à un simple passage d’un résultat terminé vers un window. Dans certains cas, cette description peut être suffisante. Un renderer prépare output, la surface le porte au window, et l’utilisateur perçoit finalement le résultat.

Cependant, rendering est souvent une relation continue plutôt qu’une livraison unique. Un window peut être redimensionné. Son état actif peut changer. Le système peut demander un redessin. Le renderer peut devoir se mettre à jour continuellement, attendre un signal ou synchroniser son output avec l’état actuel du window. Le connecteur Surface fournit l’endroit où cette relation peut être exprimée.

C’est pourquoi le connecteur Surface n’est pas seulement un conteneur pour output terminé. Il est la connexion entre l’acte de rendering et le window qui reçoit le résultat. Il permet au renderer de répondre aux conditions du window sans rendre le renderer responsable d’être le window.

L’output appartient toujours au renderer. La frontière appartient toujours au window. Le connecteur Surface porte la relation entre les deux.

### Faire remonter les interactions

Comme le Stack est réversible, le connecteur Surface participe aussi au flux bottom-up. Lorsqu’une interaction commence dans le système et entre dans un window, elle doit finalement remonter vers les parties du Stack qui peuvent la comprendre et la traiter.

Le connecteur Surface porte souvent cette interaction du window vers le renderer. Dans beaucoup de cas, il n’a pas besoin de faire beaucoup plus que préserver l’information et lui permettre de continuer à remonter. Un mouvement de pointeur, une pression de touche, un changement de focus, un événement de redimensionnement ou une autre interaction peut entrer par le window puis traverser la surface afin que le renderer et les couches supérieures puissent répondre si nécessaire.

Cela ne signifie pas que le connecteur Surface est responsable de décider quel component doit traiter l’interaction. Cette responsabilité appartient plus haut dans le Stack, surtout une fois que l’interaction atteint le graph et le frame. Le connecteur Surface donne simplement à l’interaction un chemin à travers la frontière entre le window et le renderer.

Dans le flux top-down, le connecteur Surface porte l’output rendu dans le window. Dans le flux bottom-up, il porte l’information d’interaction originaire du window vers le renderer et les couches au-dessus.

### Garder le Window séparé

Le connecteur Surface est important parce qu’il empêche le renderer et le window de se confondre dans une même responsabilité. Sans ce connecteur, un renderer devrait en savoir trop sur le window, ou le window devrait en savoir trop sur le renderer. L’une ou l’autre direction affaiblit la séparation qui rend le Stack utile.

Un window fournit la frontière active orientée système. Il représente la vue, le conteneur ou le point de livraison. Un renderer produit output qui peut être livré à travers cette frontière. Le connecteur Surface se situe entre eux afin que chaque couche puisse rester concentrée sur son propre objectif.

Cette séparation devient particulièrement utile lorsqu’un renderer peut être utilisé avec plusieurs types de window, ou lorsqu’un window peut prendre en charge plusieurs types de renderer. Le connecteur donne au Modèle un lieu pour décrire la relation sans câbler rigidement les deux couches ensemble. Un renderer peut être attaché à une surface appropriée. Un window peut exposer une surface appropriée. Le connecteur Surface explique comment cet attachement se produit.

C’est ce qui permet au renderer et au window de coopérer sans devenir indiscernables.

### Préserver l’output

Un connecteur Surface doit préserver l’output rendu lorsqu’il traverse vers le window. Cela ne signifie pas que l’output n’est jamais transformé, mis à l’échelle, découpé, synchronisé ou préparé selon les exigences du window. Cela signifie que l’output doit rester fidèle à ce que le renderer a produit et être livré d’une manière qui correspond au contexte actif du window.

Si le window change de taille, le connecteur Surface peut aider à communiquer ce changement. Si le window devient inactif, caché, minimisé ou autrement indisponible, le connecteur peut aider le renderer à répondre de façon appropriée. Si le renderer a besoin d’une cible fournie par le window, le connecteur peut conserver ou exposer cette cible. Ces responsabilités ne sont pas les mêmes que rendering, et elles ne sont pas les mêmes qu’être le window. Ce sont les responsabilités de la connexion entre les deux.

C’est la forme principale du connecteur Surface : il préserve l’output du renderer tout en l’adaptant au contexte de delivery fourni par le window.

### Pourquoi le connecteur compte

Le connecteur Surface empêche le Stack de confondre l’output rendu avec le window qui le contient. Sans ce connecteur, un renderer serait forcé d’agir comme s’il possédait le window, ou un window serait forcé d’agir comme s’il comprenait directement rendering.

En définissant le connecteur Surface, le Modèle donne à cette transition un lieu approprié.

Renderers reste responsable de convertir l’information préparée en forme prête pour output. Windows reste responsable de fournir le contexte borné orienté système par lequel output et interaction peuvent passer. Le connecteur Surface gère le mouvement entre les deux.

C’est le point du Stack où l’information rendue reçoit une destination. C’est là qu’output cesse d’être simplement produit et devient attaché à l’endroit où il peut être livré. À partir de là, Windows peut porter output vers Systems, où il peut finalement devenir quelque chose que l’utilisateur peut percevoir et auquel il peut répondre.
