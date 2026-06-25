# 5.3 The Stack :: Structure & Semantics

## Discussion approfondie

### La première couche interprétative

**Structure & Semantics** est la couche où Digital Data devient pour la première fois compréhensible dans le Stack. Layer 7 fournit une représentation active lisible par ordinateur, mais cette représentation ne s’explique pas elle-même. Avant que le reste de l’interface puisse l’utiliser, le système doit savoir quel type de représentation elle est, quelles règles la gouvernent et comment ses parties internes doivent être comprises.

C’est le rôle de Layer 6. Elle prend une représentation active provenant de Digital Data et lui donne une forme significative. À ce stade, le Stack ne s’occupe pas encore de composants, controls, layouts, rendu ou présentation. Il s’occupe d’interprétation : comment la représentation doit être lue, quelles relations existent en elle et quelle forme peut être transmise sans risque à la couche suivante.

### Semantics

**Semantics** définit les règles selon lesquelles une représentation doit être comprise. Elle décrit le sens attendu, l’ordre, le format et les relations du contenu interprété. En ce sens, Semantics agit comme un contrat. Elle n’a pas besoin de contenir la représentation active elle-même ; elle définit plutôt comment cette représentation est censée être lue.

Cette distinction compte parce que Digital Data peut contenir des motifs reconnaissables sans que le Stack sache encore ce qu’ils signifient. Une séquence d’octets, de caractères, de champs ou d’enregistrements peut suivre un format connu, mais le Modèle ne traite pas ce format comme appliqué avant Layer 6. Semantics fournit l’ensemble de règles qui rend l’interprétation possible.

Semantics peut définir de grandes règles, comme la forme attendue d’un document, d’un format de fichier, d’un message, d’une réponse, d’une configuration ou d’une ressource. Elle peut aussi définir des attentes internes plus petites, comme la manière dont un champ est ordonné, comment une section est reconnue, quelles valeurs sont valides ou comment une partie se rapporte à une autre. Le point important est que Semantics définit le sens avant que l’interface commence à transformer ce sens en parties utilisables.

### Structure

Une **Structure** est le résultat organisé de l’application de Semantics à Digital Data. Là où Semantics définit comment quelque chose doit être compris, une Structure représente ce qui a été compris d’une représentation active précise. C’est la forme façonnée du contenu après l’application des règles pertinentes.

Structure permet au reste du Stack de travailler avec la représentation sans revenir sans cesse à sa forme brute. Au lieu de traiter la ressource comme une séquence non interprétée, le système peut maintenant travailler avec des sections, valeurs, relations ou enregistrements organisés. Cela ne rend pas encore la ressource interactive. Cela signifie seulement que le contenu a reçu une forme stable que l’interface peut utiliser comme fondation.

Dans le Modèle, Structure est liée à une interprétation particulière. Si les mêmes Digital Data peuvent être comprises à travers plusieurs ensembles de Semantics, plusieurs Structures peuvent en être produites. De même, si la représentation sous-jacente change, la Structure résultante doit refléter cette interprétation changée. Structure n’est donc pas simplement « les données en mémoire ». C’est la forme interprétée d’une représentation précise selon des règles sémantiques précises.

### Interprétation stable

Structure & Semantics doit être traitée comme stable dans un passage donné à travers le Stack. Cette couche représente une interprétation déjà établie, et non un objet d’interface mutable activement manipulé par l’utilisateur. Une fois que Digital Data a été interprétée en Structure, cette Structure fournit une base fiable aux couches suivantes.

Cette stabilité est ce qui sépare Layer 6 de **Layer 5 : Components, Controls, & Layouts**. Layer 5 introduit des objets d’interface mutables, orientés vers l’humain, qui peuvent être arrangés, mis à jour, utilisés en interaction et routés dans le reste de l’interface. Layer 6 ne joue pas ce rôle. Elle explique ce que signifie le contenu et comment il est organisé avant que l’interface le transforme en composants utilisables.

Cela ne signifie pas que la ressource sous-jacente ne peut jamais changer. Cela signifie que, lorsqu’un changement se produit, le Modèle doit reconnaître une interprétation nouvelle ou mise à jour plutôt que de traiter la Structure d’origine comme une surface de contrôle indéfiniment mutable. Layer 6 fournit la fondation interprétée ; Layer 5 fournit l’interface mutable construite à partir d’elle.

### Relation avec Digital Data

La frontière entre Digital Data et Structure & Semantics est la frontière entre représentation active et forme interprétée. Digital Data dit : « Cette ressource est maintenant présente dans le Stack sous une forme lisible par ordinateur. » Structure & Semantics dit : « Voici comment cette représentation est comprise. »

Cela empêche Layer 7 de porter des responsabilités qui appartiennent à l’interprétation. Un fichier, stream, réponse ou buffer peut déjà être encodé selon un format, mais l’encodage seul n’est pas la même chose que l’interprétation dans le Modèle. Layer 6 commence lorsque le Stack applique les règles pertinentes et produit une forme organisée utilisable par le reste de l’interface.

### Relation avec Components, Controls, & Layouts

Structure & Semantics protège aussi Layer 5 contre l’obligation de comprendre directement chaque représentation brute. Components, controls et layouts ne devraient pas être forcés d’analyser des octets, de décoder des formats, de valider l’ordre des champs ou de déterminer le sens de base d’une ressource chaque fois qu’ils sont utilisés. Ils devraient recevoir une forme déjà interprétée qui peut être adaptée en objets d’interface orientés vers l’humain.

Cette séparation permet à Layer 5 de se concentrer sur l’utilisabilité, l’interaction et l’arrangement. Une component peut exposer une propriété pratique, un control peut répondre à l’intention de l’utilisateur, et un layout peut organiser des parties visibles ou non visibles d’une interface. Ces responsabilités dépendent du sens, mais elles ne définissent pas le sens à partir de zéro. Layer 6 fournit la compréhension structurée qui les rend possibles.

### Rôle dans le flux

Dans le flux descendant, Structure & Semantics reçoit Digital Data et l’interprète en une forme organisée stable. C’est le moment où le Stack commence à passer d’une représentation brute lisible par ordinateur vers du matériau d’interface utilisable. Le résultat peut ensuite être transformé en components, controls et layouts adaptés à l’interaction et à l’organisation ultérieure.

Dans le flux ascendant, Structure & Semantics reçoit les changements produits par l’interaction et les prépare à redevenir Digital Data. Un control peut modifier une valeur, mettre à jour une section, créer un enregistrement, supprimer du contenu ou produire un autre changement. Avant que ce résultat puisse retourner à Digital Data, il doit encore se conformer aux règles sémantiques pertinentes. Layer 6 aide donc à garantir que le résultat reste significatif avant d’être représenté de nouveau sous une forme lisible par machine.

### Pourquoi la couche compte

Structure & Semantics empêche le Stack de confondre accès et compréhension. Digital Data peut être disponible pour le système, mais la disponibilité ne signifie pas que l’interface sait comment l’utiliser. Layer 6 fournit l’étape interprétative manquante : elle définit ce que signifie la représentation et l’organise en une forme sur laquelle les couches suivantes peuvent construire en sécurité.

En séparant Semantics, Structure et Components, le Modèle préserve une progression claire. Digital Data fournit la représentation active. Semantics définit comment cette représentation doit être comprise. Structure fournit le résultat organisé de cette compréhension. Components, Controls, & Layouts transforment ensuite cette forme interprétée en objets d’interface mutables. Cette distinction garde le Stack précis, empêche la logique d’analyse de fuir dans chaque couche et permet à la même représentation sous-jacente de soutenir différentes formes d’interaction, de présentation et de transformation.
