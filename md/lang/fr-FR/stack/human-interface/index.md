<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 5.9 The Stack :: Human Interface

## Discussion approfondie

### La frontière humaine implicite

**Human Interface** est la frontière inférieure implicite du Stack. Elle représente l’utilisateur : la personne qui reçoit la sortie perceptible du système et produit des actions qui peuvent devenir des entrées d’interaction. Plus simplement, cette couche, c’est vous.

Cela peut sembler évident, mais c’est important. Le Stack existe pour décrire le processus de communication entre un utilisateur et un système d’information. Si Data Storage explique la frontière où le contenu conservé peut entrer ou sortir du flux actif, Human Interface explique la frontière opposée : l’endroit où la sortie de l’ordinateur devient enfin partie de l’expérience humaine, et où l’action humaine commence le chemin de retour vers le système.

Human Interface est implicite parce que le Modèle ne représente pas directement le corps, l’esprit, l’attention, les émotions, les sens, les intentions, les souvenirs ou les choix de l’utilisateur. CatalystUI peut décrire comment un système livre une sortie vers un utilisateur et comment l’action d’un utilisateur devient entrée d’interaction, mais il ne prétend pas modéliser tout l’être humain. Ce serait légèrement ambitieux. Et terrifiant aussi. Le Stack est puissant, mais il n’a pas besoin de devenir un manuel de psychologie avec un renderer attaché.

### Le destinataire de la sortie perceptible

Dans le flux descendant, le Human Interface est le destinataire de la sortie perceptible. Digital Data traverse le Stack explicite, devient interprétée, façonnée, organisée, rendue, livrée par une window et portée par le system jusqu’à pouvoir enfin être perçue. Une fois que cette sortie atteint les sens de l’utilisateur, le Stack explicite a terminé son chemin descendant.

Cela ne signifie pas que l’utilisateur reçoit Digital Data directement. Une personne ne perçoit pas naturellement des uns et des zéros, des buffers mémoire, des appels de dessin, des samples audio ou des événements système. L’utilisateur perçoit le résultat du travail du system : lumière, son, vibration, mouvement, texte, changement spatial ou autre forme de sortie sensorielle. Human Interface est l’endroit où cette sortie cesse d’être seulement livrée et commence à être vécue.

Cette distinction garde le Modèle honnête. Le system peut fournir une sortie, mais il ne peut pas forcer la compréhension. Un écran peut montrer un bouton, un haut-parleur peut jouer un son et un appareil peut vibrer, mais l’utilisateur doit encore percevoir et interpréter ce résultat en tant qu’humain. Le Modèle reconnaît cette frontière sans tenter de définir chaque facteur personnel, biologique ou contextuel impliqué. Autrement dit : CatalystUI peut amener la sortie jusqu’à l’humain. Il ne peut pas empêcher l’humain d’ignorer la notification. Hélas.

### La source de l’interaction

Dans le flux ascendant, le Human Interface est la source de l’action. L’utilisateur voit, entend, ressent, comprend, réagit, décide, puis fait quelque chose. Cette action peut être une pression sur une touche, un mouvement de pointeur, un toucher sur un écran, une commande parlée, la rotation d’un bouton, le passage dans un champ de capteurs ou un autre comportement que le système peut recevoir.

L’action elle-même commence hors du Stack explicite. Le Modèle ne décrit pas directement tout le processus interne qui a conduit l’utilisateur à agir. Il commence seulement à modéliser le chemin de retour lorsque le system reçoit l’effet de cette action. À ce point, l’action devient entrée d’interaction et entre dans Layer 1 : Systems, où elle peut être transmise vers le haut dans le Stack.

Cela maintient une distinction nette entre **action humaine** et **interaction système**. Une action humaine est ce que fait l’utilisateur. L’entrée d’interaction est ce que le système reçoit de cette action. Elles sont étroitement liées, mais elles ne sont pas identiques. Une personne peut vouloir cliquer sur une chose et cliquer accidentellement sur une autre, ou effleurer une touche en cherchant autre chose. Le système peut recevoir les deux, mais une seule est probablement une expression significative de l’intention utilisateur. Sauf si l’entrée accidentelle était le but ; dans ce cas, félicitations : l’interface est entrée dans une phase très expérimentale.

### Pourquoi la couche est implicite

Human Interface est implicite pour la même raison que Data Storage : elle est nécessaire au flux, mais elle n’est pas directement modélisée comme couche explicite de transformation. Le Stack dépend de l’utilisateur, mais il ne transforme pas l’utilisateur. Il ne parse pas l’utilisateur, ne rend pas l’utilisateur, n’adapte pas l’utilisateur et ne stocke pas l’utilisateur comme component. C’est probablement mieux ainsi.

Le Modèle traite plutôt le Human Interface comme la frontière vivante autour de l’extrémité inférieure du système. Le Stack explicite peut décrire comment la sortie est préparée et livrée, et il peut décrire comment l’interaction reçue remonte. Il s’arrête avant de revendiquer la propriété de l’expérience humaine elle-même.

Cette frontière est particulièrement importante parce qu’un utilisateur n’est pas simplement un autre appareil. Un écran fournit une sortie visuelle. Un clavier fournit des signaux d’entrée. Un utilisateur perçoit, interprète, choisit, répond, se trompe, apprend, hésite, fait des erreurs et clique parfois sur le mauvais bouton avec une confiance totale. Le Modèle doit respecter cette différence. Human Interface est donc présent parce que le Stack est construit pour la communication humaine, mais implicite parce que l’humain ne fait pas partie du processus de transformation côté machine.

### Perception et intention

Human Interface complète le cycle de communication en joignant perception et intention. Dans une direction, le système fournit quelque chose de perceptible. Dans l’autre, l’utilisateur répond par une action. Cela crée la boucle conversationnelle au centre de CatalystUI : le système parle par la sortie, l’utilisateur répond par l’interaction, et le système traite cette réponse pour poursuivre l’échange.

C’est pourquoi Human Interface ne peut pas être réduit aux périphériques d’entrée. Un clavier, une souris, un écran tactile, un microphone, une caméra ou un controller peut aider à capturer l’interaction, mais aucun n’est l’utilisateur. Ce sont des chemins accessibles au système par lesquels l’action utilisateur peut entrer dans le Stack. Human Interface est la personne dont la perception et l’intention donnent du sens à ces signaux.

Il en va de même pour les périphériques de sortie. Un moniteur, haut-parleur, moteur haptique ou autre périphérique de sortie peut porter des données perceptibles, mais l’appareil ne complète pas l’expérience. L’expérience est complétée lorsque l’utilisateur perçoit le résultat. Un écran rempli de pixels parfaitement rendus n’est toujours pas une interface réussie si l’utilisateur ne peut pas voir, comprendre, atteindre, entendre, sentir ou agir sur ce qui a été fourni.

### Relation avec Systems

Human Interface se trouve directement sous **Layer 1 : Systems**. La couche System fournit le dernier traitement explicite côté ordinateur de la sortie et le premier traitement explicite côté ordinateur de l’interaction. Human Interface se trouve au-delà de cette couche comme destinataire de la sortie système et source de l’action utilisateur.

Cette relation définit le bord inférieur du Stack. Dans le flux descendant, le system livre la sortie vers l’utilisateur. Dans le flux ascendant, le system reçoit l’effet de l’action utilisateur. Le system est donc la dernière couche explicite du fonctionnement machine, tandis que Human Interface est la frontière implicite où le fonctionnement machine rencontre l’expérience humaine.

En séparant ces couches, le Modèle évite de confondre le comportement des appareils avec l’expérience utilisateur. Le system peut savoir qu’une touche a été pressée, qu’un pointeur a bougé ou qu’un son a été joué. Il ne sait pas automatiquement ce que l’utilisateur a compris, voulu, ressenti ou remarqué. Ces réalités humaines appartiennent au-delà du Stack explicite, même si le Stack existe pour les servir.

### Accessibilité et variation humaine

Human Interface rappelle aussi au Modèle que les utilisateurs ne sont pas des machines interchangeables. Les personnes perçoivent et agissent avec des capacités, sens, contextes, outils, limites, préférences et environnements différents. Un utilisateur peut s’appuyer principalement sur la sortie visuelle. Un autre peut dépendre de la sortie auditive, du retour tactile, de la navigation clavier, des lecteurs d’écran, des sous-titres, du mouvement simplifié, d’appareils d’entrée alternatifs ou d’autres formes d’accès.

Cela ne change pas la structure du Stack. Cela clarifie pourquoi le Stack compte. En séparant les couches, CatalystUI peut mieux identifier où une défaillance se produit lorsque la sortie est livrée mais pas significativement perceptible, ou lorsqu’un utilisateur a une intention mais aucun chemin utilisable pour l’exprimer. La frontière Human Interface garde visible le but de tout le flux : le système ne produit pas simplement une sortie ; il communique avec une personne.

Cette personne peut être fatiguée, distraite, brillante, confuse, handicapée, en train d’apprendre, multitâche ou en train d’essayer de finir quelque chose cinq minutes avant une échéance. L’interface doit tout de même la rencontrer comme un être humain. De préférence sans lui demander de lire d’abord un message d’erreur de quarante pages.

### Pourquoi la couche compte

Human Interface empêche le Stack de se terminer à la machine. Sans cette couche implicite, le Modèle s’arrêterait à la sortie système et à l’entrée système, comme si le but d’une interface était seulement de déplacer des signaux dans du matériel. Ce serait manquer l’essentiel. Le but du Stack n’est pas seulement de produire une sortie ; il est de rendre possible la communication entre un système d’information et un utilisateur.

En séparant Human Interface de Systems, le Modèle préserve une frontière finale nette. Systems livre la sortie et reçoit l’entrée. Human Interface perçoit la sortie et produit l’action. Le Stack explicite décrit le processus côté machine entre ces deux directions, tandis que le Human Interface implicite rappelle pour qui ce processus existe.

C’est pourquoi Human Interface appartient au Stack même s’il n’est pas numéroté. L’utilisateur n’est pas une couche à implémenter, rendre, parser ou tester unitairement. L’utilisateur est la raison pour laquelle les couches existent. Et, en supposant que l’utilisateur soit humain, le Modèle fonctionne très bien.
