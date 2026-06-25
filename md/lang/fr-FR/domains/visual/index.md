# 4.2 Domains :: Visual

## Discussion approfondie

Là où le domaine **symbolique** décrit les données avant qu’elles ne soient associées à un sens précis, le domaine **visuel** décrit les données une fois qu’elles ont été façonnées pour la vue. Les données visuelles sont des informations destinées à être vues : une image, du texte rendu ou un contrôle visible. La distinction importante n’est pas de savoir si les données « pourraient » finir par apparaître sur un écran, mais si leur rôle actuel dans l’interaction est de communiquer par la vision.

Cela signifie que les données visuelles ne doivent pas être confondues avec la forme stockée qui les sous-tend. Un fichier contenant des données d’image reste symbolique tant qu’il n’existe que comme information stockée. Un paragraphe de texte reste symbolique tant qu’il n’existe que comme caractères, balisage ou autre représentation abstraite. Il devient visuel lorsque le système le présente sous une forme que l’utilisateur peut voir et interpréter. Le changement n’est pas que les données deviennent plus importantes ; le changement est que leur méthode de communication est passée de la représentation à la perception.

Les données visuelles sont particulièrement courantes parce que la vue peut communiquer de nombreuses relations à la fois. Taille, couleur, espacement, direction, regroupement et mouvement peuvent tous aider l’utilisateur à comprendre ce qu’est un élément, où il se situe et si l’on peut agir sur lui. C’est pourquoi les interfaces visuelles donnent souvent une impression d’immédiateté. Un utilisateur peut jeter un coup d’œil à une fenêtre, une page web ou une scène de jeu et en tirer du sens avant de lire chaque mot. Le système ne montre pas seulement des données ; il organise des données en une expérience visible.

### Comprendre les données visuelles

Une manière utile de comprendre les données visuelles consiste à considérer le **placement**, l’**apparence** et l’**état**. Ce ne sont pas des sous-domaines formels ni des catégories obligatoires dans le Modèle CatalystUI, mais ils offrent une manière pratique de reconnaître comment l’information visuelle communique du sens.

**Placement** décrit où les données visuelles apparaissent et comment elles se rapportent aux informations qui les entourent. Un titre placé au-dessus d’un paragraphe communique une relation d’appartenance. Un bouton placé près d’un formulaire communique une association. Un menu placé au-dessus d’un autre contenu communique une priorité temporaire. Le placement compte parce que l’utilisateur ne perçoit pas les objets visibles isolément ; il perçoit les relations entre les objets visibles.

**Apparence** décrit la manière dont les données visuelles se présentent à l’utilisateur. Forme, couleur, typographie, contraste et imagerie influencent tous ce que l’utilisateur croit regarder. Un morceau de texte peut ressembler à un titre, un avertissement ou un lien selon son style. Un rectangle peut ressembler à un bouton, un panneau ou un élément décoratif selon sa bordure, son espacement et son contexte environnant. L’apparence donne aux données visuelles leur forme reconnaissable.

**État** décrit la condition actuelle communiquée visuellement. Un contrôle peut paraître actif, désactivé, sélectionné, focalisé, en chargement ou masqué. Ces états comptent parce que l’action suivante de l’utilisateur dépend souvent de ce que l’interface semble prête à faire. Si l’état visuel ne correspond pas à la condition réelle du système, l’interface devient confuse même si la logique sous-jacente est techniquement correcte.

### Signification visuelle

La sortie visuelle exprime du sens, mais elle ne doit pas être confondue avec le sens lui-même. Une bordure rouge peut communiquer que quelque chose ne va pas, mais la bordure n’est pas l’erreur. Une icône peut représenter une action, mais l’icône n’est pas l’action. Une mise en page peut montrer une hiérarchie, mais la mise en page n’est pas la structure sous-jacente. Les données visuelles sont l’expression sensorielle du sens, pas sa source complète.

Cette distinction aide à éviter une erreur de conception courante : confier trop de responsabilité à l’apparence d’un élément sans préserver ce qu’il signifie. Si une interface dépend uniquement de la couleur pour communiquer une erreur, le sens se retrouve enfermé dans un seul signal visuel. Si une icône n’a pas d’étiquette, de description ou de signification accessible pour l’appuyer, le système peut paraître épuré tout en devenant plus difficile à comprendre. La clarté visuelle est plus forte lorsque la forme visible exprime fidèlement l’intention sous-jacente.

Les données visuelles portent aussi un type de risque particulier, car les utilisateurs ont tendance à faire confiance à ce qu’ils voient. Si quelque chose paraît cliquable, l’utilisateur s’attend à ce que cela réponde. Si quelque chose paraît désactivé, l’utilisateur s’attend à ce que cela ne réponde pas. Si quelque chose paraît sélectionné, l’utilisateur s’attend à ce que le système le traite comme sélectionné. Lorsque la présentation visible et le comportement réel divergent, l’utilisateur vit l’interface comme cassée, même si le programme se comporte exactement comme il a été écrit.

### Données visuelles et accessibilité

Le domaine visuel rend l’accessibilité plus facile à raisonner parce qu’il identifie les moments où l’information est communiquée par la vue seule. Si une erreur est indiquée uniquement par la couleur, un graphique uniquement par une image ou une progression uniquement par une animation, alors le sens peut ne pas être disponible pour tous les utilisateurs. Le problème n’est pas que la communication visuelle soit mauvaise ; le problème est que la communication visuelle peut devoir être traduite dans une autre forme.

C’est ici que les domaines deviennent utiles comme outil de diagnostic. Ils nous aident à demander où réside actuellement le sens. Est-il seulement visuel ? Peut-il aussi être représenté symboliquement ? Devrait-il être disponible par le son, le toucher ou une autre forme de sortie ? En répondant à ces questions, le développeur peut préserver le même sens à travers différents types de perception au lieu de traiter l’accessibilité comme une réflexion après coup.

### Données visuelles dans des expériences plus larges

Les données visuelles peuvent aussi participer à des expériences qui ne sont pas purement visuelles. Un lecteur vidéo peut combiner des images animées avec du son. Un jeu peut combiner graphismes, musique et retour de manette. Un système d’exploitation peut combiner fenêtres, alertes et périphériques d’entrée dans un échange plus vaste. Dans ces situations, le domaine visuel identifie la partie de l’expérience destinée à la vue, tandis que d’autres domaines décrivent les formes supplémentaires de perception impliquées.

Cela garde le modèle précis. Une interface visuelle n’est pas automatiquement toute l’interface utilisateur, et une expérience multisensorielle n’efface pas la portion visuelle qu’elle contient. Chaque domaine aide à identifier comment le sens est porté. Le domaine visuel répond à une question précise : quelles informations sont façonnées pour que l’utilisateur puisse les voir ?

En bref, le domaine visuel décrit le passage de la représentation symbolique à une sortie lisible par la vue. Il nous donne une manière de discuter des informations visibles sans réduire toutes les interfaces à des graphismes. Lorsque les données visuelles sont bien traitées, l’utilisateur peut reconnaître ce que le système présente, comprendre ce sur quoi il peut agir et répondre avec confiance.
