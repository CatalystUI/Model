<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 5.4 The Stack :: Components, Controls, & Layouts

## Discussion approfondie

### La première couche d’interface mutable

**Components, Controls, & Layouts** est la couche où la structure interprétée devient un matériau d’interface utilisable. Layer 6 explique ce qu’une représentation signifie et comment elle est organisée ; Layer 5 transforme cette interprétation stable en objets mutables qui peuvent être arrangés, mis à jour, manipulés en interaction et préparés pour le reste du Stack.

C’est la première couche où le Modèle commence à décrire l’interface comme quelque chose d’activement utilisable plutôt que simplement compris. Une Structure peut expliquer le sens d’une ressource, mais un utilisateur n’interagit pas directement avec une Structure. L’interface a besoin d’objets capables d’exposer des valeurs, de répondre à une intention, de maintenir un état temporaire et de participer à un arrangement plus large. Layer 5 fournit ces objets.

### De l’interprétation à l’usage

La frontière entre **Structure & Semantics** et **Components, Controls, & Layouts** est la frontière entre forme interprétée et forme utilisable. Layer 6 produit une compréhension stable du contenu. Layer 5 adapte cette compréhension en une forme avec laquelle l’interface peut travailler pendant son fonctionnement actif.

Cette distinction compte parce que la structure interprétée et le comportement d’interface ne relèvent pas de la même responsabilité. Une Structure peut identifier qu’une valeur existe, où elle appartient et quelles règles la gouvernent. Une component peut exposer cette valeur comme quelque chose d’ajustable, affichable, jouable, sélectionnable, éditable ou autrement utilisable. La Structure explique le contenu ; la component donne à l’interface un moyen de travailler avec lui.

Layer 5 n’est donc pas simplement une couche visuelle. Components, controls et layouts peuvent exister dans n’importe quel domaine. Une component peut représenter du texte, du son, un retour haptique, une commande, une section de document, une ressource média ou toute autre partie utilisable d’une interface. Ce qui définit la couche n’est pas la manière dont l’objet sera finalement perçu, mais le fait qu’il fournisse une forme d’interface mutable construite à partir d’un contenu interprété.

### Components

Une **component** est une partie logique et mutable de l’interface créée à partir d’une structure interprétée, ou associée à elle. Elle peut représenter une image, une étiquette, une piste audio, un élément de style, une commande, une section de document, une ressource média ou une autre partie utilisable de l’interface. Là où une Structure se préoccupe surtout du sens stable, une component se préoccupe de l’usage actif.

Une component peut exposer des propriétés, méthodes, états ou comportements qui rendent le contenu sous-jacent plus facile à manipuler. Elle peut fournir des valeurs lisibles ou modifiables, des opérations exécutables ou un état pouvant être suivi pendant que l’interface est active. Cela permet au reste du Stack de travailler avec des objets significatifs au lieu de manipuler sans cesse des représentations brutes ou des structures immuables.

Le point important est qu’une component n’a pas besoin de préserver la forme exacte de la ressource originale. Elle peut la simplifier, en combiner des parties, n’en exposer qu’une portion précise ou fournir une interface plus pratique par-dessus. Layer 5 a le droit d’être pratique parce que son rôle n’est pas de définir le sens original du contenu. Son rôle est de rendre ce sens utilisable.

### Controls

Un **control** est une component qui gère l’interaction. Il reçoit une interaction routée depuis les couches inférieures du Stack et détermine ce qui doit se passer en réponse. Cela fait des controls l’un des principaux points de rencontre entre le côté de l’interface tourné vers l’utilisateur et le côté tourné vers le contenu.

Les controls sont responsables de transformer l’interaction en comportement d’interface significatif. Un control peut mettre à jour une valeur, déclencher une opération, changer un état, demander une nouvelle représentation ou ne produire aucun changement. La distinction clé est qu’un control n’existe pas seulement comme partie de l’interface ; il participe à la capacité de l’utilisateur à agir sur le système.

Parce que les controls sont des components, ils partagent la même nature mutable. Toutefois, leur responsabilité déterminante est la gestion de l’interaction. Une component peut représenter un objet utilisable sans répondre directement à l’intention de l’utilisateur. Un control représente un objet utilisable qui peut recevoir, interpréter et appliquer cette intention dans le flux de l’interface.

### Layouts

Un **layout** est une component qui arrange d’autres components, y compris des controls, selon une forme d’ordre, de relation ou de règle de placement. Dans les interfaces visuelles, cela peut apparaître comme une disposition spatiale. Dans d’autres domaines, un layout peut décrire une séquence, un groupement, une priorité, un timing, une catégorie, un routage ou une autre relation organisationnelle.

Les layouts comptent parce que les objets d’interface utilisables existent rarement isolément. Les components ont besoin de contexte. Elles peuvent devoir être ordonnées, groupées, alignées, superposées, séquencées ou autrement reliées avant de participer clairement à l’expérience de l’utilisateur. Un layout fournit cette structure relationnelle sans devenir le gestionnaire de niveau supérieur de l’interface entière.

Cela sépare les layouts des graphs. Un layout arrange des components selon une règle ou un motif spécifique. Un graph gère la découverte, l’organisation, les relations et le cycle de vie à une échelle plus large dans un contexte d’interface plus vaste. Layer 5 fournit les objets layout eux-mêmes ; Layer 4 détermine comment ces objets participent au cadre opérationnel plus large.

### Mutabilité et état actif

Layer 5 est mutable parce que les interfaces sont actives. Une fois qu’un contenu interprété devient partie d’une interface, il peut devoir répondre à des changements d’intention utilisateur, d’état système, de timing, de focus, de sélection, de visibilité, de lecture, d’entrée ou d’autres conditions vivantes. Components, controls et layouts fournissent un lieu où ces changements actifs peuvent se produire.

Cela ne signifie pas que Layer 5 remplace l’interprétation stable fournie par Layer 6. Elle s’appuie plutôt sur elle. Une component peut conserver temporairement une valeur modifiée, un control peut traiter une édition ou un layout peut recalculer une disposition, mais ces changements restent liés au sens interprété situé en dessous. Lorsqu’un changement doit faire partie de la ressource conservée, le flux peut remonter à travers Structure & Semantics et Digital Data.

La mutabilité permet aussi à Layer 5 de représenter des conditions temporaires d’interface qui ne seront peut-être jamais stockées. Un élément sélectionné, une section développée, une position de lecture, un état de survol, une cible de focus ou une modification en attente peuvent compter fortement pour l’interface active même s’ils ne deviennent jamais partie du stockage permanent. Layer 5 donne au Stack un lieu clair pour décrire ces conditions vivantes.

### Rôle dans le flux descendant

Dans le flux descendant, Components, Controls, & Layouts reçoit une structure interprétée et la transforme en objets d’interface utilisables. Le Stack a dépassé la simple connaissance de ce que le contenu signifie et commence maintenant à préparer ce contenu pour l’interaction, l’organisation et la présentation éventuelle.

À ce stade, l’interface peut décider quelles parties du contenu interprété doivent devenir des components, quelles components doivent pouvoir gérer l’interaction et comment ces components doivent être arrangées. Le résultat n’est pas encore un frame rendu ou une sortie système. C’est un modèle d’interface actif que Layer 4 peut organiser et préparer finalement pour le rendu.

### Rôle dans le flux ascendant

Dans le flux ascendant, Layer 5 est l’endroit où l’interaction routée devient un comportement significatif. Les couches inférieures peuvent détecter, traduire et router une action, mais un control est l’endroit où cette action est finalement comprise par rapport à l’objet d’interface qu’elle affecte.

Lorsqu’un control gère une interaction, il peut mettre à jour l’état d’une component, demander un changement de layout, déclencher une commande ou produire une modification qui doit remonter vers Structure & Semantics. Si cette modification affecte le contenu sous-jacent, Layer 6 peut valider et organiser le changement selon les règles sémantiques pertinentes avant qu’il redevienne Digital Data. Ainsi, Layer 5 sert de point de conversion actif entre l’intention utilisateur et l’état de l’interface.

### Relation avec Graphs & Frames

Layer 5 produit les objets d’interface utilisables, mais elle ne sert pas d’environnement complet dans lequel ces objets opèrent. Cette responsabilité appartient à **Layer 4 : Graphs & Frames**. Components, controls et layouts ont besoin d’un contexte plus large capable de les organiser, de les interroger, de router entre eux, de les préparer pour le rendu et de définir les limites dans lesquelles ils participent.

Cette relation garde le Modèle net. Layer 5 définit les objets de l’interface active. Layer 4 gère leur organisation plus large et les prépare pour les couches inférieures du Stack. Une component doit savoir représenter et gérer son propre état utilisable ; le graph et le frame doivent savoir comment cette component s’inscrit dans le flux d’interface plus large.

### Pourquoi la couche compte

Components, Controls, & Layouts empêche le Stack de sauter directement de l’interprétation au rendu. Un système ne peut pas construire une interface claire en comprenant simplement le contenu puis en produisant immédiatement une sortie. Il faut une couche où ce contenu interprété devient utilisable, mutable, arrangeable et capable de répondre à l’interaction.

En séparant Layer 5 à la fois de Structure & Semantics et de Graphs & Frames, le Modèle préserve une séquence précise de responsabilités. Structure & Semantics définit le sens stable. Components, Controls, & Layouts transforme ce sens en objets d’interface actifs. Graphs & Frames organise ces objets dans un contexte opérationnel plus large. Cette séparation permet à CatalystUI de décrire des interfaces à travers les domaines sans les réduire à des widgets visuels, des structures brutes ou des commandes spécifiques au renderer.
