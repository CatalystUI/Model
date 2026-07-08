<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 6.1 Connectors :: Data

## Discussion approfondie

### La première traduction

Le connecteur **Data** est le premier connecteur explicite du Stack. Il se situe entre **Layer 7: Digital Data** et **Layer 6: Structure & Semantics**, là où l’information active lisible par ordinateur commence pour la première fois à recevoir une forme interprétée. Layer 7 nous dit que l’information existe sous forme de digital data. Layer 6 nous dit comment cette information est structurée et ce qu’elle signifie. Le connecteur Data explique comment le système passe d’une condition à l’autre.

Ce connecteur est nécessaire parce que la digital data ne s’interprète pas elle-même. Un fichier, un stream, un buffer, un résultat de base de données, une réponse ou un message peut déjà contenir une information organisée, mais l’organisation n’est pas la même chose que l’interprétation. Quelque chose doit accéder aux données, les lire selon les attentes appropriées et produire une forme que Structure & Semantics peut comprendre. Ce « quelque chose » est le connecteur Data.

En ce sens, ce connecteur est le premier acte de traduction dans le Stack explicite. Il ne crée pas l’information d’origine et ne crée pas encore de components orientés utilisateur. Son rôle est d’amener l’information dans le flux actif sous forme de Digital Data lorsque c’est nécessaire, puis de relier cette représentation numérique active aux règles et structures qui rendent l’interprétation possible.

### Travailler avec Data Storage

Bien que le connecteur Data se situe entre Digital Data et Structure & Semantics, il entretient souvent une relation étroite avec la couche implicite **Data Storage**. C’est parce que beaucoup de formes de digital data ne deviennent utiles que lorsqu’elles peuvent être atteintes là où elles sont stockées. C’est pourquoi un connecteur Data accomplit souvent deux responsabilités liées. D’abord, il atteint le stockage pour récupérer, recevoir ou autrement accéder à l’information afin qu’elle puisse entrer dans le flux actif comme Digital Data. Ensuite, il traite la Digital Data obtenue pour en faire une structure interprétée.

Un connecteur de données MySQL en est un bon exemple. Du point de vue du Modèle, la base MySQL peut être traitée comme Data Storage, tandis que le résultat de requête devient la Digital Data active avec laquelle le système travaille. Le connecteur peut établir la connexion, envoyer une requête, recevoir le résultat, puis organiser ce résultat en information structurée que le reste du Stack peut comprendre. La connexion à la base, le comportement de requête et le traitement du résultat peuvent tous apparaître dans le même connecteur, parce que le connecteur Data est responsable d’atteindre le stockage et de porter l’information récupérée vers des données structurées et significatives.

Cela ne fait pas de Data Storage une couche explicite du Stack, et cela ne rend pas le connecteur Data responsable d’être la base de données, le système de fichiers, le service ou le mécanisme de stockage lui-même. Le Modèle reconnaît plutôt que le premier connecteur doit souvent se tourner vers le stockage afin d’amener la digital data dans le flux actif du système.

### Accéder n’est pas comprendre

Le connecteur Data existe en partie parce qu’accès et compréhension ne sont pas la même chose. Un ordinateur peut ouvrir un fichier, recevoir une réponse, garder des octets en mémoire ou se connecter à une base de données. Cela prouve seulement que l’information est disponible. Cela ne prouve pas qu’elle a été comprise.

Par exemple, un fichier de paramètres peut être disponible sous forme de texte. Le système peut savoir où se trouve le fichier, lire correctement son contenu et conserver ce contenu en mémoire. Même alors, le Stack n’a pas encore déterminé quelles parties sont des clés, quelles parties sont des valeurs, quelles sections sont valides ou quelles règles définissent le format.

Le connecteur Data fournit le passage de « l’information est disponible comme digital data » à « l’information peut maintenant être interprétée selon une structure et une sémantique ». Cette distinction garde Layer 7 net. Digital Data n’a pas besoin de savoir comment chaque format possible doit être interprété. Elle doit seulement représenter l’information active lisible par ordinateur. Le connecteur Data effectue ensuite le transfert vers Layer 6, où l’interprétation peut se produire selon les règles appropriées.

### Produire une structure

Dans le flux top-down, le connecteur Data reçoit Digital Data et la prépare pour Structure & Semantics. Cela peut impliquer de lire des octets, de décoder du texte, d’identifier un format, de sélectionner des règles sémantiques, de valider des attentes de base ou de transformer la représentation en une structure organisée. Le travail exact dépend du type d’information traité, mais la responsabilité reste la même : relier la représentation active à une forme interprétée.

Un fichier de paramètres JSON peut commencer comme texte encodé. Le connecteur Data lit le texte, reconnaît le format attendu et produit une information structurée représentant les paramètres. Un fichier CSV peut devenir des lignes et des champs. Un résultat de base de données peut devenir des enregistrements. Un fichier binaire peut devenir des en-têtes, des sections et des valeurs. Une réponse de serveur peut devenir un message structuré.

Le point important est le mouvement. Le connecteur Data peut commencer par atteindre le stockage, mais sa transition explicite dans le Stack n’est complète que lorsque la Digital Data récupérée ou reçue est devenue une information qui peut être comprise par Structure & Semantics.

### Préserver le sens

Un connecteur Data doit préserver le sens lorsque l’information passe d’une couche à l’autre. Cela ne signifie pas que chaque détail de la représentation d’origine doit rester inchangé. Cela signifie que le connecteur doit préserver la relation prévue entre la digital data et la structure interprétée qu’il produit.

Par exemple, si un fichier contient un titre, la structure résultante doit représenter ce titre d’une manière fidèle à l’information d’origine. Si un enregistrement de base de données contient un identifiant, cet identifiant doit rester connecté à l’enregistrement qu’il décrit. Si un format définit un ordre, un groupement ou des valeurs obligatoires, le connecteur doit respecter ces attentes lorsqu’il produit le résultat structuré.

### Retour vers Digital Data

Comme le Stack est réversible, le connecteur Data participe aussi au flux bottom-up. Lorsqu’une interaction modifie une information dans l’interface, cette modification peut finalement devoir retourner à Digital Data. Avant de pouvoir être conservée, transmise ou réutilisée, l’information structurée doit être reconvertie en une forme lisible par ordinateur.

Dans cette direction, le connecteur Data accomplit la transformation opposée. Il reçoit l’information structurée de Layer 6 et produit une Digital Data adaptée au stockage, à la transmission, à la comparaison ou à un traitement ultérieur.

Une structure de paramètres peut devenir du texte JSON encodé. Un tableau de valeurs peut devenir du CSV. Un enregistrement peut devenir une mise à jour de base de données. Une structure de document peut devenir les octets d’un fichier.

Ce mouvement inverse est aussi important que le mouvement top-down. Si le connecteur Data peut lire l’information vers une structure mais ne peut pas écrire cette structure sous forme numérique, l’interface peut peut-être afficher ou utiliser l’information, mais elle ne peut pas préserver pleinement le résultat de l’interaction. Le connecteur aide donc à compléter le cycle entre l’intention de l’utilisateur et le changement persistant.

### Validation et échec

Le connecteur Data est aussi l’un des premiers endroits où l’échec peut être reconnu de façon significative. Digital Data peut être absente, mal formée, incomplète, non prise en charge, obsolète ou incompatible avec les règles sémantiques attendues par Layer 6.

Lorsque cela arrive, le connecteur doit rendre clair le résultat de cette transformation. Un connecteur peut récupérer des valeurs optionnelles manquantes, appliquer des valeurs par défaut, ignorer des extensions non prises en charge ou produire une structure partielle lorsque c’est approprié. Cependant, le reste du Stack ne devrait pas être forcé de deviner si les données ont été correctement interprétées.

En identifiant l’échec à cette frontière, le Modèle garde l’interprétation honnête. Le connecteur Data protège le reste du Stack contre la construction sur une information qui n’a jamais été réellement comprise.

### Pourquoi le connecteur compte

Le connecteur Data empêche le Stack de supposer que la digital data devient automatiquement significative dès qu’elle est disponible. Sans ce connecteur, le Modèle brouillerait la frontière entre représentation et interprétation. Layer 7 serait forcé de comprendre directement les formats, ou Layer 6 serait forcé de récupérer lui-même des données brutes. En définissant le connecteur Data, le Modèle donne à cette transition un lieu approprié.

Digital Data reste responsable de la représentation active lisible par ordinateur. Structure & Semantics reste responsable du sens interprété et de la forme organisée. Le connecteur Data gère le mouvement entre les deux.

Cela rend explicite la première transformation du Stack. L’information commence comme représentation numérique active, traverse le connecteur Data et devient quelque chose que le système peut comprendre. À partir de là, le reste du Stack peut continuer le processus : transformer l’information interprétée en objets d’interface utilisables, organiser ces objets en contexte, les préparer pour output, les livrer par le système et permettre à l’utilisateur de répondre.
