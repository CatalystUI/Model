<!--
Cette traduction a été générée par ChatGPT et doit être relue par un traducteur humain.
Supprimez ces lignes dans une pull request une fois la traduction vérifiée.
-->

# 5.5 The Stack :: Graphs & Frames

## Discussion approfondie

### La couche organisationnelle

**Graphs & Frames** est la couche où les objets d’interface utilisables sont organisés dans un contexte opérationnel plus large. Layer 5 fournit components, controls et layouts comme objets mutables, mais ces objets ne forment pas automatiquement une interface complète simplement parce qu’ils existent ensemble. Ils ont besoin d’un moyen d’être découverts, reliés, interrogés, ordonnés, routés, bornés et préparés pour les couches inférieures du Stack.

C’est le rôle de Layer 4. Elle reçoit les objets d’interface actifs de Layer 5 et établit le contexte plus large dans lequel ils opèrent. Une component peut savoir représenter son propre état, un control peut savoir gérer une interaction, et un layout peut savoir arranger un groupe de components, mais Layer 4 détermine comment ces pièces participent à l’interface dans son ensemble.

### Graphs

Un **graph** décrit des relations organisées entre components, controls et layouts. Il fournit la structure nécessaire pour comprendre comment les objets d’interface se rapportent les uns aux autres, comment ils peuvent être localisés et comment ils peuvent être parcourus ou interrogés pendant le fonctionnement actif.

Cela distingue un graph d’un layout. Un layout arrange des components selon une règle ou un motif particulier. Un graph gère l’espace relationnel plus large dans lequel les layouts et components existent. Il peut décrire des relations parent-enfant, de propriété, de dépendance, de groupement, d’ordre, de chemins de focus, de chemins de routage ou d’autres formes de connexion qui aident l’interface à fonctionner comme un système cohérent.

Un graph fournit aussi un moyen pratique de localiser et de gérer les objets d’interface sans forcer chaque component à connaître toutes les autres. Les components peuvent rester centrées sur leur propre état utilisable, tandis que le graph fournit la structure environnante nécessaire à la découverte, à la coordination et au routage. Cela évite que l’interface devienne une collection d’objets isolés ou un ensemble emmêlé de références directes.

### Frames

Un **frame** décrit le contexte opérationnel actuel plus large préparé pour les couches inférieures du Stack. Là où un graph organise les objets d’interface et leurs relations, un frame contient et coordonne l’état pertinent de cette organisation sous une forme qui peut être transmise vers le rendu, la sortie ou un traitement de niveau inférieur.

Le frame agit comme la frontière principale entre le monde d’interface orienté objet de Layer 5 et le monde orienté rendu de Layer 3. Il ne contient pas seulement les components ; il les prépare. Cette préparation peut inclure la résolution de limites, l’application des résultats de layout, la collecte d’éléments rendables, l’ordonnancement de la sortie, le suivi de l’état actuel de l’interface ou la production d’une représentation temporaire de ce avec quoi le renderer doit travailler.

Un frame doit être compris comme contextuel plutôt que permanent. Il représente l’état actuel de l’interface pour un passage, une mise à jour, un rendu ou une opération de routage particulière. Lorsque l’interface change, de nouveaux frames ou des états de frame mis à jour peuvent être produits. Cela permet au Stack de décrire le fonctionnement vivant sans confondre l’état temporaire de présentation avec le contenu stocké ou la structure interprétée.

### Relation entre Graphs et Frames

Graphs et frames travaillent ensemble parce qu’une interface a besoin à la fois de relation et de contexte. Le graph explique comment les objets d’interface sont connectés. Le frame explique ce que les couches inférieures doivent recevoir de ces objets connectés à un moment donné.

Cette distinction compte parce que l’organisation et la préparation ne sont pas la même tâche. Un graph peut contenir les relations nécessaires pour trouver un control, comprendre une hiérarchie de layout ou déterminer quelle component appartient à quelle région de l’interface. Un frame peut prendre le résultat actuel de cette organisation et le préparer pour le rendu ou le routage d’interaction. Le graph fournit la carte ; le frame fournit le passage actuel à travers cette carte.

Ensemble, ils empêchent Layer 4 de devenir soit une collection passive de components, soit une liste de commandes spécifique au renderer. Elle reste la couche organisationnelle et contextuelle du Stack : assez proche de Layer 5 pour comprendre les objets d’interface, mais assez proche de Layer 3 pour les préparer à une transformation de niveau inférieur.

### Préparation au rendu

Dans le flux descendant, Graphs & Frames reçoit components, controls et layouts de Layer 5 et les prépare pour le Renderer. Cela ne signifie pas que Layer 4 effectue le rendu. Le rendu appartient à Layer 3. Layer 4 détermine ce qui doit être envoyé vers le bas, dans quelle relation, sous quelles limites et dans quel état actuel.

Cette préparation est nécessaire parce qu’un renderer ne doit pas être responsable de comprendre le sens complet de chaque component, control ou layout. Le renderer a besoin d’une forme préparée qu’il peut transformer en sortie perceptible. Layer 4 préserve l’organisation de l’interface tout en réduisant le modèle d’objets actif en quelque chose avec lequel le renderer peut travailler.

Ainsi, Layer 4 permet aux renderers de rester spécialisés. Un renderer peut se concentrer sur la transformation vers une sortie spécifique au domaine sans devenir aussi le gestionnaire de niveau supérieur des relations entre components, de la hiérarchie de layout, des cibles d’interaction et de l’état actif de l’interface.

### Routage des interactions

Dans le flux ascendant, Graphs & Frames aide à router les interactions vers les controls appropriés. Les couches inférieures peuvent identifier qu’une interaction s’est produite et fournir des détails comme la position, le timing, la source de l’appareil, le contexte de focus ou un autre état d’entrée pertinent. Layer 4 utilise le contexte du graph et du frame pour déterminer où cette interaction appartient.

Ce rôle de routage est l’une des raisons les plus claires pour lesquelles Layer 4 doit exister. Un control peut savoir gérer une interaction une fois qu’il la reçoit, mais quelque chose doit déterminer quel control doit la recevoir. Le graph fournit la structure relationnelle, tandis que le frame fournit le contexte opérationnel actuel. Ensemble, ils permettent au Stack de router l’intention à travers l’interface plutôt que de simplement faire remonter l’entrée sans direction.

Cela signifie aussi que Layer 4 participe à la fois à la préparation de la sortie et à la résolution de l’entrée. Elle prépare l’état d’interface organisé pour le rendu dans une direction, et elle aide à résoudre l’interaction routée dans l’autre. La même couche qui sait comment l’interface est actuellement arrangée est aussi la mieux placée pour déterminer comment une interaction doit revenir à travers cet arrangement.

### Relation avec Components, Controls, & Layouts

Layer 4 dépend de Layer 5 pour les objets d’interface actifs qu’elle organise. Components, controls et layouts fournissent les parties utilisables de l’interface, mais Layer 4 détermine comment ces parties forment un ensemble plus large. Cela empêche les components individuelles de devenir responsables de la gestion globale de l’interface.

La séparation protège aussi les layouts contre une responsabilité trop large. Un layout peut arranger un groupe de components, mais il n’a pas besoin de gérer toutes les relations de l’interface. Il n’a pas besoin d’agir comme système complet de routage, coordinateur de cycle de vie ou frontière de rendu. Layer 4 fournit cette organisation de plus haut niveau afin que les layouts puissent rester centrés sur l’arrangement.

### Relation avec le Renderer

Layer 4 protège aussi le Renderer des responsabilités qui n’appartiennent pas au rendu. Sans Graphs & Frames, le renderer devrait comprendre les arbres de components, les relations de layout, le routage des controls, la résolution des limites et le contexte actif de l’interface avant de pouvoir produire une sortie. Cela rendrait le rendu responsable d’une trop grande partie du modèle d’interface.

En plaçant Graphs & Frames entre Layer 5 et Layer 3, le Stack crée un passage clair. Layer 5 fournit les objets d’interface utilisables. Layer 4 organise et prépare ces objets. Layer 3 transforme la représentation préparée en sortie perceptible. Chaque couche reste centrée sur une partie distincte du processus.

### Pourquoi la couche compte

Graphs & Frames empêche le Stack de traiter une interface comme une collection lâche de components ou comme un problème direct de rendu. Une interface utilisable a besoin d’organisation avant de pouvoir être rendue et de routage avant de pouvoir répondre de manière cohérente à l’interaction. Layer 4 fournit la structure nécessaire aux deux.

En séparant Layer 4 de Components, Controls, & Layouts et du Renderer, le Modèle préserve une progression claire des responsabilités. Components, controls et layouts définissent les objets actifs de l’interface. Graphs et frames organisent ces objets dans un contexte opérationnel actuel. Le Renderer transforme ensuite ce contexte préparé en sortie perceptible. Cette distinction permet à CatalystUI de décrire des interfaces complexes sans forcer les components à gérer tout le système ni forcer les renderers à comprendre tout le modèle d’interface.
