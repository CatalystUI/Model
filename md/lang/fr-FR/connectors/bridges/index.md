<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 6.4 Connectors :: Bridge

## Discussion approfondie

### Du contexte au Rendering

Le connecteur **Bridge** se situe entre **Layer 4: Graphs & Frames** et **Layer 3: Renderers**. Il est responsable de porter l’interface data organisée depuis le graph et le frame vers le renderer, où ces données peuvent commencer leur conversion en output perceptible.

Layer 4 donne au système un contexte organisé. Il sait quels components existent, comment ils se rapportent les uns aux autres, quelles limites ils occupent et comment l’interface active doit être comprise comme un tout. Layer 3 est responsable de rendering. Il prend des données préparées et les convertit en une forme qui pourra finalement être livrée par un window et un system.

Le connecteur Bridge existe parce que ces deux couches ne parlent pas naturellement la même langue.

Un graph organise les relations. Un frame définit le contexte actif et les limites. Un renderer produit output. Le connecteur Bridge est le point de passage entre ces préoccupations. Il n’a pas besoin d’être complexe ou visible. Dans la plupart des cas, il expose simplement l’interface data organisée au renderer et permet à l’information d’interaction de remonter lorsque c’est nécessaire. En ce sens, le connecteur Bridge fait exactement ce que son nom suggère. Il comble l’écart.

### Porter le Frame vers l’avant

Dans le flux top-down, le connecteur Bridge reçoit les résultats préparés de Layer 4 et les porte vers Layer 3. Cela ne signifie pas que Bridge est responsable d’organiser les components, de calculer les layouts, de router les controls ou de rendre output. Ces responsabilités appartiennent aux couches environnantes. Bridge existe au milieu pour que ces responsabilités puissent rester séparées.

Un frame peut déjà avoir préparé les limites actives de l’interface. Un graph peut déjà avoir organisé les components qui lui appartiennent. Le connecteur Bridge prend ce contexte préparé et le présente au renderer dans une forme avec laquelle celui-ci peut travailler. Cela peut impliquer de transmettre des références, des render entries préparées, des informations de components aplaties, des resource handles, des données prêtes pour commande ou toute autre représentation adaptée au système décrit.

L’implémentation exacte peut varier, mais la responsabilité reste la même. Le connecteur Bridge ne décide pas ce que l’interface signifie. Il ne décide pas comment l’output final doit être livré à l’utilisateur. Il fournit simplement le point de passage où le contexte d’interface organisé devient une data orientée renderer.

C’est ce qui permet au graph et au frame de rester concentrés sur l’organisation pendant que le renderer reste concentré sur rendering.

### Un connecteur discret

Le connecteur Bridge apparaîtra souvent plus discret que les connecteurs au-dessus de lui. Le connecteur Data peut accéder à la digital data et l’interpréter. Le connecteur Parser peut transformer des structures en components mutables. Le connecteur Adapter peut placer ces components dans des graphs et frames. Par comparaison, le connecteur Bridge peut sembler presque vide.

Cette vacuité fait partie du point.

Un connecteur Bridge ne devrait généralement pas faire plus de travail que nécessaire. Son objectif principal est de permettre au graph et au frame de communiquer avec le renderer sans forcer l’une des couches à absorber les responsabilités de l’autre. Si le graph commence à agir comme un renderer, le Modèle perd en clarté. Si le renderer commence à agir comme un graph, le Modèle perd la capacité de décrire proprement l’organisation séparée d’output.

Le connecteur Bridge protège cette frontière.

Il peut préparer des données pour la consommation du renderer, mais il ne doit pas devenir le renderer. Il peut exposer l’interface organisée au renderer, mais il ne doit pas devenir le graph. Son utilité vient du fait qu’il permet à deux couches voisines de rester distinctes tout en pouvant travailler ensemble.

### Faire remonter les interactions

Le connecteur Bridge est également important dans le flux bottom-up. Lorsqu’une interaction vient du système, elle remonte à travers les couches inférieures jusqu’au point où l’interface organisée peut lui donner du sens. Dans beaucoup de cas, le renderer peut recevoir ou traduire l’interaction dans une forme que le Stack peut continuer à router, mais le renderer ne sait généralement pas quel component final doit la traiter.

Cette responsabilité se trouve plus haut dans le Stack.

Pour cette raison, le connecteur Bridge prend souvent une interaction et la transmet à Layer 4 avec très peu de modification. Le graph et le frame sont les couches qui peuvent déterminer où l’interaction appartient. Ils connaissent le contexte organisé. Ils peuvent déterminer quel component est actif, quel control occupe la région pertinente, quelle relation de layout compte ou quelle partie de l’interface doit recevoir l’interaction.

C’est pourquoi le connecteur Bridge ne doit pas être confondu avec un routeur d’interactions. Il peut porter l’interaction et préserver les informations nécessaires au routing, mais il n’est généralement pas la couche qui effectue le routing elle-même. Bridge s’assure simplement que l’interaction peut passer de l’information orientée renderer vers le contexte orienté graph.

Dans le flux top-down, Bridge aide à alimenter le renderer. Dans le flux bottom-up, il aide à retourner les interactions à l’endroit où elles peuvent être routées avec sens.

### Le connecteur le plus difficile à voir

Le connecteur Bridge a été l’un des connecteurs les plus difficiles à identifier, parce que son but peut paraître extérieurement vague. Il n’a pas la relation évidente au stockage du connecteur Data. Il n’a pas la transformation claire du connecteur Parser. Il n’a pas le rôle organisationnel du connecteur Adapter. À première vue, il peut ressembler à un passage mince entre deux couches qui semblent déjà assez proches pour communiquer directement.

Cependant, sans le connecteur Bridge, le Stack n’aurait aucun moyen explicite de passer du contexte d’interface organisé à rendering. Un graph devrait savoir comment alimenter directement un renderer, ou un renderer devrait savoir comment interpréter lui-même graphs et frames. L’une ou l’autre direction ferait s’effondrer la frontière entre organisation et output.

Le connecteur Bridge donne un nom à cette frontière.

Il ne contient pas toujours beaucoup de logique, et dans certaines implémentations il peut paraître très petit, mais son rôle conceptuel est essentiel. Il explique comment l’interface organisée passe dans le processus de rendering sans forcer Layer 4 et Layer 3 à devenir la même chose.

### Préserver la frontière

Un connecteur Bridge doit préserver la frontière entre contexte et rendering. L’information qu’il transmet vers le bas doit rester fidèle à l’interface organisée préparée par Layer 4, tout en restant utilisable par Layer 3. L’information qu’il transmet vers le haut doit préserver les détails nécessaires pour que le graph et le frame comprennent ce qui s’est produit, tout en permettant au renderer de rester concentré sur sa propre responsabilité.

Cela n’exige pas que Bridge préserve chaque détail interne de l’une ou l’autre couche. Un renderer peut ne pas avoir besoin du graph complet. Un graph peut ne pas avoir besoin de chaque détail spécifique au renderer. Le connecteur Bridge décide ce qui doit franchir la frontière afin que chaque côté puisse continuer son travail sans prendre le rôle de l’autre.

Cela rend le connecteur particulièrement important dans les systèmes où le renderer a des exigences très spécifiques. Le graph et le frame ne devraient pas devoir connaître chaque détail de ces exigences. Le renderer ne devrait pas devoir comprendre toute l’organisation de l’interface. Le connecteur Bridge existe pour que les deux côtés puissent communiquer sans s’emmêler.

### Pourquoi le connecteur compte

Le connecteur Bridge empêche le Stack de confondre le contexte d’interface organisé avec l’output rendu. Sans ce connecteur, graphs et frames seraient forcés de parler directement en termes de renderer, ou les renderers seraient forcés de comprendre toute la structure de l’interface active.

En définissant le connecteur Bridge, le Modèle donne à cette transition un lieu approprié.

Graphs & Frames reste responsable de l’organisation, du contexte, des frontières, du routing et de la préparation. Renderers reste responsable de convertir l’information préparée en forme prête pour output. Le connecteur Bridge gère le mouvement entre les deux.

C’est le point du Stack où l’information organisée passe dans le processus de rendering. Il est souvent discret. Il est souvent mince. Il peut sembler presque invisible. Mais sans lui, le Stack perd la connexion explicite entre l’interface comme organisée et l’interface comme rendue. Le connecteur Bridge rend ce passage possible puis, heureusement, s’écarte.
