# 6.2 Connectors :: Parser

## Discussion approfondie

### De la structure à l’usage

Le connecteur **Parser** se situe entre **Layer 6: Structure & Semantics** et **Layer 5: Components, Controls, & Layouts**. Il est responsable de prendre une information structurée et de la convertir en quelque chose que le reste de l’interface peut activement utiliser, modifier, arranger ou auquel il peut répondre.

Layer 6 donne à l’information une forme interprétée stable. Il définit ce que les données signifient, comment elles sont organisées et quelles règles leur donnent forme. Pourtant, une structure n’est pas la même chose qu’un objet d’interface. Une structure peut dire au système qu’un document possède un titre, qu’un fichier contient une section ou qu’un morceau contient des informations de durée, mais la structure elle-même reste surtout concernée par la représentation fidèle des données.

Le connecteur Parser déplace cette information interprétée vers Layer 5, où elle devient mutable. C’est là qu’une structure peut devenir un component, un control ou un layout. C’est là que l’information cesse d’être seulement une description stable de ce qui existe et commence à devenir quelque chose avec lequel le programme peut interagir directement. Autrement dit, le connecteur Data aide le système à comprendre ce qu’est l’information. Le connecteur Parser aide le système à transformer cette compréhension en quelque chose d’utilisable.

### Parser en components

Le mot « parser » est souvent utilisé pour décrire le processus qui lit du texte ou découpe un fichier en éléments significatifs. Dans CatalystUI, le mot conserve cette idée générale, mais il est appliqué plus largement. Un connecteur Parser ne lit pas seulement des caractères ou des tokens. Il reçoit une structure déjà interprétée et convertit cette structure en components mutables. Cette distinction est importante, parce que le connecteur Data a déjà amené la digital data dans Structure & Semantics. Lorsque l’information atteint le connecteur Parser, le système ne demande plus : « Ces données peuvent-elles être comprises ? » Il demande maintenant : « Comment ces données comprises doivent-elles devenir utilisables ? »

Une structure de document peut devenir des document components. Une structure de configuration peut devenir des settings components. Une structure musicale peut devenir des audio components éditables. Le connecteur Parser effectue la transition du sens structuré vers la représentation interactive. C’est aussi là que le Stack commence à paraître plus familier à un programmeur. Components, controls et layouts sont les pièces avec lesquelles un développeur peut travailler directement. Ils peuvent être modifiés, interrogés, organisés, mis à jour, puis finalement routés à travers les couches inférieures du Stack. Le connecteur Parser donne à ces pièces leur forme initiale.

### Quand la différence paraît faible

Dans beaucoup de cas, une structure et un component peuvent sembler très différents. Un document complexe, un fichier audio ou une vue interactive peuvent nécessiter une transformation importante avant de devenir utiles dans Layer 5. Pourtant, lorsque la structure d’origine est simple, la différence entre une structure et un component peut sembler presque invisible au premier regard.

Un fichier INI permet bien de voir cela. Après que le connecteur Data a interprété le fichier, la structure peut contenir des sections, des clés et des valeurs. Un component représentant ce même fichier peut lui aussi contenir des sections, des clés et des valeurs. En surface, ces deux formes peuvent sembler presque identiques.

Le point essentiel est celui-ci : la distinction ne tient pas seulement à leur forme, mais à leur responsabilité.

La structure représente l’état interprété des données. Elle est la forme stable produite à partir de la représentation numérique d’origine. Le component représente l’état utilisable de ces données. Il peut permettre à un développeur d’ajouter une section, de supprimer une clé, de modifier une valeur, d’appliquer des valeurs par défaut, de valider des edits, de suivre des modifications ou de préparer l’information pour l’affichage et l’interaction.

Ainsi, même si une structure INI simple et un component INI peuvent contenir presque la même information, ils ne signifient pas la même chose dans le Stack. La structure concerne l’interprétation fidèle. Le component concerne l’usage actif.

Cela explique pourquoi le connecteur Parser compte même lorsque son travail paraît faible. Parfois, le parsing est spectaculaire. Parfois, il ressemble presque à une correspondance un pour un. Dans les deux cas, le connecteur marque toujours la frontière où l’information interprétée devient de l’interface data mutable.

### Le pouvoir de la réexpression

Le connecteur Parser devient particulièrement puissant lorsqu’une seule structure peut être réexprimée sous plusieurs formes utiles. Parce que Layer 6 représente le sens interprété, le connecteur Parser peut décider comment ce sens doit devenir utilisable dans Layer 5.

Un document HTML le montre clairement. Le même document structuré pourrait être parsé en components pour une page web visuelle, en components pour un plan de document lisible, en components pour la navigation d’accessibilité, en components pour l’impression ou en components pour extraire une information spécifique. La structure d’origine peut être la même, mais le connecteur Parser permet à cette structure de devenir différentes représentations utilisables selon ce que le système cherche à accomplir.

Ce n’est pas seulement une commodité. Cela révèle quelque chose d’important sur le Stack : une fois les données interprétées, elles peuvent être remodelées selon un objectif.

Le même principe peut s’appliquer à la musique. Une représentation musicale structurée peut devenir des timeline components éditables, des playback components, des notation components ou des components orientés export. À partir de là, l’information peut finalement revenir vers une structure adaptée à un fichier WAV, un fichier MP3 ou un autre format. Le connecteur Parser est l’une des raisons pour lesquelles ce type de transformation peut être exprimé proprement. Il donne au système un endroit pour passer entre structure stable et représentation mutable sans prétendre que ces deux idées sont identiques.

Ainsi, le connecteur Parser aide à préserver la flexibilité de l’information. Il permet aux mêmes données interprétées de participer à différents workflows, outils et formes d’expression tout en restant ancrées dans le sens fourni par Structure & Semantics.

### Retour à la structure

Comme le Stack est réversible, le connecteur Parser fonctionne aussi dans la direction opposée. Lorsque des components sont modifiés par interaction, ces changements peuvent devoir retourner à Structure & Semantics avant de redevenir Digital Data.

Ce chemin inverse est l’endroit où l’information mutable se prépare à redevenir stable. Un settings component peut être modifié par un utilisateur, puis parsé à nouveau en structure de configuration. Un document component peut être édité, puis parsé à nouveau en structure de document. Un music component peut être arrangé, coupé ou ajusté, puis parsé à nouveau en une structure qui pourra plus tard être écrite comme fichier.

Ce processus ne signifie pas que chaque component doit retourner exactement à la même structure que celle dont il vient. Parfois, le but de l’interaction est de transformer l’information en une nouvelle forme. Un document importé peut devenir un plan simplifié. Un projet audio édité peut devenir une structure finale d’export. Un ensemble complexe de components peut être réduit en une structure plus petite pour le stockage ou la transmission.

Le connecteur Parser donne au Modèle un lieu approprié pour cette transformation. Il permet à l’interface data mutable de redevenir une donnée structurée sans forcer Layer 5 à prétendre qu’il est responsable du stockage, et sans forcer Layer 6 à comprendre toutes les formes interactives possibles.

### Préserver l’intention

Un connecteur Parser doit préserver le sens voulu de l’information lorsqu’elle traverse les couches. En allant de la structure aux components, il doit produire des formes utilisables qui reflètent honnêtement la structure. En revenant des components vers la structure, il doit représenter le résultat de l’interaction assez clairement pour que les couches supérieures puissent le préserver ou le transmettre.

Cela n’exige pas une copie parfaite un pour un. En réalité, le connecteur Parser existe souvent parce qu’une copie un pour un serait moins utile. Les components peuvent avoir besoin de propriétés pratiques, de méthodes auxiliaires, d’un état d’édition, d’un état de validation, d’informations de layout ou de valeurs temporaires qui n’appartiennent pas à la structure d’origine. De même, une structure retournée peut omettre l’état temporaire du component parce que cet état n’était utile que pendant l’interaction.

Le but n’est pas de garder chaque détail interne identique. Le but est de préserver le sens qui compte.

Cela garde le Stack honnête. Structure & Semantics reste le lieu de l’information interprétée et stable. Components, Controls, & Layouts reste le lieu de l’information mutable et utilisable. Le connecteur Parser effectue le mouvement entre les deux tout en préservant l’intention des données transformées.

### Pourquoi le connecteur compte

Le connecteur Parser empêche le Stack de confondre les données interprétées avec l’interface data utilisable. Sans ce connecteur, les structures devraient devenir mutables par elles-mêmes, ou les components devraient savoir interpréter chaque structure qu’ils reçoivent. L’une ou l’autre approche brouille les responsabilités des couches autour de lui.

En définissant le connecteur Parser, le Modèle donne à cette transition un lieu approprié.

Structure & Semantics reste responsable de l’interprétation stable. Components, Controls, & Layouts reste responsable de l’usage actif, de la modification et de l’interaction. Le connecteur Parser gère la transformation entre les deux.

C’est le point du Stack où l’information comprise devient quelque chose avec lequel le programme peut travailler directement. C’est là que le sens stable devient représentation mutable. À partir de là, l’information peut être organisée en graphs et frames, préparée pour output, routée à travers les couches inférieures, puis finalement placée devant l’utilisateur comme quelque chose qu’il peut percevoir, comprendre et auquel il peut répondre.
