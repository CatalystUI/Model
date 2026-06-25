# 5.1 The Stack :: Data Storage

## Discussion approfondie

### Une frontière implicite

**Data Storage** est la frontière supérieure implicite du Stack. Il représente la condition dans laquelle un contenu, un état ou une ressource reste disponible avant que les couches explicites commencent à travailler avec lui, ainsi que l’endroit où le résultat d’une interaction pourra être conservé plus tard. Le Modèle a besoin de cette frontière parce qu’une interface ne crée pas tout son sujet à partir de rien. Quelque chose doit être disponible pour être lu, récupéré, reçu ou référencé avant de pouvoir être interprété, transformé, rendu ou utilisé.

Data Storage est implicite parce que le Stack ne modélise pas les mécanismes internes du stockage lui-même. Le Modèle peut dépendre d’une ressource stockée, mais il n’a pas besoin de décrire chaque détail de la manière dont cette ressource est conservée. Ces préoccupations appartiennent au système d’information environnant. Le Stack commence lorsqu’une forme de contenu devient partie du flux actif de l’interface.

### Disponibilité stockée et représentation active

La distinction entre Data Storage et Layer 7 : **Digital Data** est la distinction entre **disponibilité stockée** et **représentation active**. Data Storage décrit le lieu ou la condition dans lesquels quelque chose peut persister. Digital Data décrit la première forme explicite de cette chose une fois qu’elle entre dans le processus modélisé comme représentation lisible par ordinateur.

Par exemple, un document peut exister dans un système de fichiers, un enregistrement peut exister dans une base de données, ou une réponse peut attendre derrière une API. Tant qu’il reste seulement disponible pour être consulté, il appartient à Data Storage. Lorsque l’interface lit ce document, reçoit cet enregistrement, ouvre cette réponse ou introduit autrement la ressource dans le flux actif, elle devient Layer 7. Le changement important n’est pas que le contenu soit soudain devenu significatif. Le changement important est qu’il est maintenant représenté dans le Stack.

### Persistance et transformation

Data Storage concerne la persistance et la disponibilité. Le Stack explicite concerne la transformation. Une fois qu’une ressource stockée devient Digital Data, le Modèle peut commencer à décrire ce qui lui arrive : comment elle est interprétée par Structure & Semantics, façonnée en Components, Controls, & Layouts, organisée par Graphs & Frames, préparée par un Renderer, livrée à travers une Window et portée par le System vers le Human Interface.

Cette séparation compte parce que le stockage et la transformation répondent à des questions différentes. Data Storage demande si quelque chose peut rester disponible dans le temps. Digital Data demande avec quelle représentation active binaire, textuelle, diffusée ou reçue l’interface travaille actuellement. Le premier explique la conservation. Le second commence le flux modélisé.

### La frontière source et retour

Dans le flux descendant, Data Storage sert de frontière source. Une ressource stockée est sélectionnée ou récupérée, puis entre dans le Stack comme Digital Data. À partir de ce point, le Modèle peut suivre comment la ressource est comprise, arrangée, transformée et livrée à l’utilisateur. Data Storage lui-même ne rend pas, n’analyse pas, ne met pas en page et n’interprète pas la ressource. Il fournit seulement la condition à partir de laquelle la représentation active peut commencer.

Dans le flux ascendant, Data Storage sert de frontière de retour. Une interaction utilisateur peut demander, créer, mettre à jour, supprimer ou affecter autrement quelque chose dans le flux de l’interface. Un changement résultant peut remonter le Stack jusqu’à redevenir Digital Data. Si ce résultat doit rester disponible au-delà du processus immédiat, il retourne à Data Storage comme état préservé. Le Stack n’a pas besoin de modéliser chaque stratégie d’écriture, transaction de base de données, mise à jour de cache ou étape de synchronisation réseau pour reconnaître que le résultat est revenu dans la persistance.

### Exemples en contexte

C’est pourquoi Data Storage peut apparaître à travers de nombreuses technologies sans être défini par l’une d’elles. Un système de fichiers, une base MySQL, une collection MongoDB, un service adossé à une API, un stockage d’objets cloud, une région mémoire d’appareil ou un service de streaming peuvent tous servir de Data Storage lorsqu’ils fournissent une disponibilité conservée hors du Stack actif. Une fois qu’un fichier, enregistrement, réponse, buffer ou stream précis est introduit dans le flux de l’interface, le Modèle traite cette représentation active comme Digital Data.

### Pourquoi la séparation compte

Séparer Data Storage de Layer 7 garde le Stack net. Sans cette distinction, le Modèle confondrait l’endroit où quelque chose est conservé avec la forme qu’il prend lorsque l’interface commence à travailler avec lui. Cela rendrait Digital Data responsable à la fois de la persistance et de la représentation active, ce qui affaiblirait le rôle des couches explicites.

En gardant Data Storage implicite, le Modèle préserve une frontière claire : le stockage entoure le flux de l’interface, tandis que Digital Data le commence. Cela permet au Stack de décrire la transformation d’une représentation active précise sans s’emmêler dans tous les mécanismes de stockage possibles derrière elle. Data Storage explique d’où le contenu conservé peut venir et où les résultats préservés peuvent retourner ; Layer 7 commence le processus explicite qui transforme ce contenu en quelque chose que l’interface peut comprendre, transformer et finalement présenter.
