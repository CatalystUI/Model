<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 5.2 The Stack :: Digital Data

## Discussion approfondie

### La première couche explicite

**Digital Data** est la première couche explicite du Stack. Elle représente un contenu, un état ou une ressource après son entrée dans le flux actif de l’interface sous une forme lisible par ordinateur, mais avant que le Modèle n’ait appliqué Structure & Semantics ou ne l’ait transformé en composants, layout, rendu ou présentation. C’est le point où la disponibilité conservée devient quelque chose avec lequel le Stack peut commencer à travailler directement.

Cette couche est explicite parce que le Modèle peut maintenant décrire la ressource comme partie du processus de l’interface. Là où Data Storage explique où quelque chose peut persister hors du flux actif, Digital Data explique la représentation active qui a été lue, reçue, chargée, diffusée, générée ou autrement rendue disponible au Stack. Elle n’est plus simplement disponible quelque part. Elle est maintenant présente sous une forme que le système peut traiter.

### Représentation lisible par ordinateur

Digital Data se définit par sa capacité à être représentée en binaire et traitée par une machine. À cette couche, la ressource peut être tenue sous forme d’octets, de texte encodé, de réponse reçue, de buffer mémoire, de stream ou d’une autre représentation lisible par machine. Le conteneur exact importe moins que le rôle qu’il joue : c’est la forme active de la ressource avant l’interprétation.

Cela signifie que Digital Data ne doit pas être confondue avec le sens, la structure ou la présentation. Une séquence d’octets peut contenir un document, une image, une commande, une configuration ou un fichier audio, mais Layer 7 ne décrit pas encore comment cette séquence doit être comprise. Il établit seulement que le contenu existe dans le Stack sous une forme à laquelle le système peut accéder et qu’il peut transmettre à la couche suivante.

### Avant Structure and Semantics

Digital Data se trouve immédiatement au-dessus de **Layer 6 : Structure & Semantics** parce qu’elle représente la matière que Structure & Semantics interprétera. Tant que cette interprétation n’a pas lieu, le Stack n’a pas encore identifié les règles, relations, champs, sections ou significations contenus dans la représentation. La ressource peut déjà suivre un format, mais le Modèle n’a pas encore appliqué ce format.

Un document stocké peut déjà être valide selon son format, et un fichier peut déjà contenir du contenu organisé, mais Layer 7 ne modélise pas encore cette organisation comme structure comprise. Au moment où le Stack commence à appliquer les règles indiquant comment la représentation doit être lue, le flux est passé dans Structure & Semantics. Digital Data n’est donc pas dénuée de sens ; elle n’est simplement pas encore interprétée dans le Stack.

### Le point de retournement supérieur

Digital Data agit comme le point de retournement supérieur du Stack explicite. Dans le flux descendant, c’est là que le Stack commence à transformer une représentation lisible par ordinateur en quelque chose que l’utilisateur pourra finalement percevoir ou manipuler. Le flux commence par une représentation active, puis descend à travers l’interprétation, la formation de composants, l’organisation, le rendu, le windowing et la livraison par le système.

Dans le flux ascendant, Digital Data est l’endroit où le résultat d’une interaction redevient lisible par machine. Une action utilisateur peut être routée, traitée et convertie en changement dans l’interface. Ce changement peut ensuite remonter le Stack jusqu’à devenir Digital Data : une représentation active qui peut être conservée, transmise, comparée, régénérée ou retournée à Data Storage. Ainsi, Layer 7 participe aux deux directions du cycle de l’interface.

### Digital Data et Domains

Digital Data est souvent étroitement liée au domaine **Symbolic** parce qu’elle existe généralement avant qu’une forme sensorielle précise ait été choisie. Un fichier texte, par exemple, pourra plus tard être affiché visuellement, lu à voix haute, traduit dans un autre format ou traité sans être présenté directement. À Layer 7, le fait important n’est pas comment l’utilisateur le percevra finalement, mais que la représentation est disponible pour que le Stack l’interprète.

Cela ne signifie pas que Digital Data ne peut être que symbolique. Une ressource peut contenir du contenu visuel, auditif, tactile ou multisensoriel sous forme encodée. Toutefois, la couche elle-même décrit la représentation lisible par ordinateur avant que le Stack actif ne l’ait transformée en résultat perceptible ou interactif. Les Domains identifient le type d’information manipulée ; le Stack identifie où cette information se trouve dans le flux.

### Pourquoi la couche compte

Digital Data empêche le Modèle de sauter la première étape active du travail d’interface. Sans cette couche, le Stack passerait directement du stockage à l’interprétation, comme si les ressources stockées portaient automatiquement une structure utilisable dès qu’on y accède. Dans les systèmes réels, ce n’est pas ce qui se passe. Quelque chose doit d’abord exister sous une forme active lisible par machine avant de pouvoir être analysé, validé, organisé, adapté, rendu ou présenté.

En séparant Digital Data à la fois de Data Storage et de Structure & Semantics, le Modèle préserve trois distinctions importantes. Data Storage explique la persistance hors du flux actif. Digital Data explique la représentation active lisible par ordinateur dans le flux. Structure & Semantics explique l’interprétation de cette représentation. Garder ces responsabilités séparées permet au Stack de décrire le comportement de l’interface avec plus de précision, surtout lorsqu’une même ressource stockée peut être lue, interprétée, transformée ou présentée de plusieurs manières.
