# 5.8 The Stack :: Systems

## Discussion approfondie

### La couche explicite la plus basse

**Systems** est la couche explicite la plus basse du Stack. Cette couche représente l’environnement informatique qui fournit les services, appareils et opérations sous-jacents nécessaires pour que la sortie soit livrée et que l’interaction soit reçue. Là où Layer 2 définit le contexte borné par lequel passent sortie et interaction, Layer 1 représente l’environnement plus large qui rend ce contexte possible.

Un system ne doit pas être compris seulement comme un système d’exploitation de bureau. Dans le Modèle CatalystUI, un system est l’ensemble organisé de processus et de capacités de plateforme qui soutient l’interface à l’exécution. Il peut s’agir d’un système d’exploitation traditionnel, d’un environnement embarqué, d’une console, d’un runtime de navigateur, d’une plateforme matérielle ou d’un autre contexte informatique géré. La caractéristique définissante n’est pas la catégorie de produit. La caractéristique définissante est que le system fournit les capacités de niveau inférieur grâce auxquelles l’interface peut réellement fonctionner.

### L’environnement opérationnel

La couche System fournit l’environnement d’exécution environnant du Stack explicite. Elle peut gérer accès matériel, dispositifs d’entrée, dispositifs de sortie, pilotes, permissions, planification, mémoire, fichiers, processus, windows, canaux ou autres services de niveau plateforme. Ces détails varient largement selon les implémentations, mais ils remplissent tous le même rôle conceptuel : ils permettent à l’interface de se connecter aux capacités réelles de la machine ou du système d’information.

Cela différencie Layer 1 de Layer 2. Une window est un contexte borné orienté système utilisé par l’interface. Le system est l’environnement plus large qui crée, possède, reconnaît, contraint et sert ce contexte. La window fournit un point de connexion précis ; le system fournit le monde dans lequel cette connexion existe.

Pour cette raison, la couche System n’est pas simplement une fondation passive. Elle participe activement au cycle de l’interface. Elle livre la sortie rendue vers des dispositifs physiques ou logiques, reçoit l’entrée de ces dispositifs, applique les règles de plateforme et expose les opérations dont les couches supérieures dépendent. Le Stack peut décrire le flux de l’interface, mais le system fournit le sol opérationnel sous ce flux.

### Relation avec Windows

Systems et Windows sont étroitement connectés, mais ce ne sont pas la même couche. Une window reçoit la sortie rendue de Layer 3 et fournit un contexte de livraison borné. Le system reçoit cette sortie windowed et effectue le travail de niveau inférieur nécessaire pour la livrer à travers les dispositifs ou services disponibles.

Dans le flux descendant, la window transmet la sortie au system. Le system gère ensuite le chemin de livraison réel : envoyer la sortie visuelle vers un écran, la sortie audio vers un appareil sonore, la sortie tactile vers un appareil haptique, la sortie texte vers un terminal ou une autre forme de sortie vers son canal approprié. La window définit où la sortie appartient ; le system la porte dans l’environnement capable de la rendre perceptible.

Dans le flux ascendant, le system reçoit ou détecte l’interaction venant du côté humain de l’interface. Cela peut passer par un clavier, pointeur, écran tactile, microphone, controller, capteur, bouton ou autre chemin d’entrée. Le system convertit cette activité physique ou de niveau appareil en signal de niveau système qui peut être associé à une window et transmis vers le haut dans le Stack.

### Livraison de sortie

La couche System est l’étape explicite finale du flux descendant. Lorsque la sortie atteint Layer 1, les couches supérieures ont déjà interprété la représentation originale, formé des objets d’interface utilisables, organisé ces objets dans un contexte opérationnel actuel, rendu ce contexte en forme prête pour la sortie et l’ont passé à travers une window. Le system effectue maintenant le travail de niveau plateforme nécessaire pour rendre cette sortie disponible au Human Interface.

Cela ne signifie pas que le system lui-même est identique à la perception de l’utilisateur. L’utilisateur ne perçoit pas directement un système d’exploitation. Il perçoit le résultat physique ou sensoriel rendu disponible par les dispositifs et canaux gérés par le system. Layer 1 reste donc dans le processus côté ordinateur, tandis que le Human Interface implicite se trouve au-delà comme destinataire de la sortie.

Cette distinction garde le Modèle précis. Le system peut produire de la lumière par un écran, du son par des haut-parleurs, une vibration par un moteur ou un autre résultat perceptible par un appareil ou service. Le system fournit le mécanisme de livraison explicite final ; le Human Interface reçoit et perçoit le résultat.

### Origine de l’interaction

La couche System est aussi la première étape explicite du flux ascendant. Un utilisateur effectue une action hors du Stack explicite, mais le system est l’endroit où cette action devient disponible à l’interface modélisée comme entrée d’interaction. L’action humaine elle-même appartient au Human Interface implicite. Le system reçoit l’effet de cette action par un chemin d’entrée pris en charge et commence à le convertir en quelque chose que le Stack peut traiter.

C’est pourquoi le system est étroitement lié à l’interaction. Une pression physique de touche, un mouvement de pointeur, un geste tactile, une entrée parlée, un signal de controller ou un changement de capteur doit d’abord être reçu par l’environnement informatique avant que les couches supérieures de l’interface puissent répondre. Le system ne détermine généralement pas le sens final de cette interaction. Il identifie que quelque chose s’est produit, fournit le contexte d’appareil ou de plateforme pertinent et transmet l’interaction vers la window appropriée.

À partir de là, l’interaction peut remonter le Stack. La window l’associe à un contexte borné, le renderer peut aider à la traduire ou à la mapper, le graph et le frame peuvent la router, et le control approprié peut finalement la gérer. Le system commence le chemin de retour explicite, mais le sens de l’action est résolu plus haut dans le Stack.

### Règles et contraintes de plateforme

Systems compte parce que toute interface opère dans des contraintes. Un system peut déterminer quels appareils sont disponibles, comment les windows sont créées, comment l’entrée est livrée, comment les permissions sont accordées, comment les canaux de sortie se comportent, quelles ressources sont accessibles et quelles opérations sont prises en charge. Ces contraintes façonnent ce que le reste du Stack peut faire.

Toutefois, CatalystUI sépare ces préoccupations de plateforme du modèle supérieur de l’interface. Les components ne devraient pas devoir comprendre directement chaque pilote ou règle de système d’exploitation. Les renderers ne devraient pas devoir gérer chaque détail matériel. Les windows ne devraient pas devoir représenter toute la plateforme. Layer 1 fournit un lieu clair pour le comportement de niveau système, permettant aux couches supérieures de rester centrées sur l’interprétation, l’utilisabilité, l’organisation et la transformation.

Cette séparation permet aussi au Modèle de s’appliquer à différents environnements. Une application de bureau, une application mobile, un appareil embarqué, une interface basée navigateur, un outil en ligne de commande ou un système matériel spécialisé peuvent tous avoir des règles de plateforme différentes, mais chacun a tout de même besoin d’une couche system qui fournisse l’environnement opérationnel sous l’interface.

### Relation avec le Human Interface

Systems se trouve directement au-dessus du **Human Interface** implicite. Cela signifie que Layer 1 est la dernière couche explicite avant que la sortie quitte le flux modélisé côté ordinateur et la première couche explicite après que l’action utilisateur y entre. Le system est donc la frontière entre l’environnement informatique géré et l’humain qui perçoit et agit.

Cette frontière est essentielle. Le Modèle peut décrire comment un system envoie une sortie vers un appareil, mais il ne modélise pas directement l’expérience sensorielle, la biologie, l’attention, l’émotion ou l’interprétation de l’utilisateur. De même, le Modèle peut décrire comment le system reçoit un signal d’entrée, mais il ne modélise pas directement tout le processus humain qui a produit l’action. Ces préoccupations appartiennent au Human Interface implicite.

En plaçant Systems à Layer 1, le Stack identifie clairement le point explicite le plus bas où le processus côté ordinateur peut être décrit avant de passer dans la perception et l’action humaines.

### Pourquoi la couche compte

Systems garde le Stack ancré dans le fonctionnement réel. Sans cette couche, le Modèle décrirait le rendu et les windows comme si la livraison de sortie et la réception d’entrée se produisaient automatiquement. En pratique, toute interface dépend d’un environnement sous-jacent qui gère appareils, ressources, permissions, exécution et comportement de plateforme.

En séparant Systems de Windows et du Human Interface, le Modèle préserve une frontière finale claire. Windows fournit le contexte borné de sortie et d’interaction. Systems fournit l’environnement opérationnel sous-jacent qui livre la sortie et reçoit l’entrée. Le Human Interface perçoit la sortie et produit l’action. Cette distinction permet à CatalystUI de décrire les interfaces à travers plateformes et domaines sans réduire le system à un seul système d’exploitation, appareil précis ou modèle visuel d’écran.
