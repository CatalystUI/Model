# 3. Référence

Ci-dessous, le Modèle CatalystUI est résumé sous plusieurs formats afin de le rendre plus facile à consulter, copier et appliquer lors de l’étude, de la documentation ou de l’implémentation du Modèle.

La page Référence n’a pas vocation à remplacer la documentation qui l’entoure. Elle fournit plutôt une vue compacte du Modèle après l’introduction de la terminologie, du résumé, des domains, du stack, des connectors et des interactions.

## Par prompt IA

Un prompt IA qui peut permettre à un LLM d’interpréter et de comprendre le Modèle CatalystUI. Il peut être utilisé pour poser des questions sur le Modèle, comparer des systèmes existants avec lui ou fournir une fiche de référence pendant la résolution de problèmes dans un environnement technique.

---

```md
Le Modèle CatalystUI est un modèle universel pour décrire le flux d’information entre un utilisateur et un système d’information.

Un processus est quelque chose qui accepte une entrée, effectue une transformation et produit une sortie. Un système est un ensemble organisé de processus, défini par leur manière d’interagir et par l’ordre dans lequel ils sont exécutés. Une interface est un mécanisme qui permet à deux systèmes différents d’interagir. Un système d’information est un système spécialisé qui travaille avec des données persistantes et permet à un utilisateur de les créer, les lire, les mettre à jour ou les supprimer au fil du temps par une interface. Un ordinateur est un système d’information qui travaille exclusivement avec des données numériques, c’est-à-dire des données pouvant être représentées en binaire et traitées par une machine. Un utilisateur est une personne qui peut interagir avec un système d’information.

Dans le Modèle CatalystUI, les termes "data" et "information" sont traités comme interchangeables.

Le Modèle décrit les interfaces utilisateur par le flux d’information. L’information peut être présentée par un système, interprétée par l’utilisateur, faire l’objet d’une réponse de l’utilisateur, être traitée par le système, puis être présentée à nouveau pendant que le cycle continue. Le cycle peut commencer à n’importe quel point, mais le même motif s’applique : l’information circule entre l’utilisateur et le système d’information par une interface.

Le Modèle CatalystUI est divisé en trois catégories principales :

- Domains
- The Stack
- Connectors

Domains catégorise les données. The Stack décrit les données. Connectors transforme, modifie et traduit les données.

Domains décrit le type d’information traité pendant une interaction. Les sept domains de premier niveau sont Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory et Multisensory. Symbolic data est l’information avant qu’elle soit attachée à un sens précis. Visual data est l’information destinée à être vue. Auditory data est l’information destinée à être entendue. Tactile data est l’information destinée à être ressentie. Olfactory data est l’information destinée à être sentie. Gustatory data est l’information destinée à être goûtée. Multisensory data est l’information où plusieurs catégories sensorielles travaillent ensemble comme une seule expérience.

The Stack décrit où se trouve l’information dans le flux. Il contient sept layers explicites avec deux extrémités implicites. De haut en bas, The Stack est :

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage est la source ou la destination implicite où les données persistantes restent disponibles au-delà du flux actif de l’interface. Digital Data désigne les données après leur entrée dans le flux actif de l’interface sous une forme lisible par ordinateur, mais avant que le reste du Modèle les ait interprétées, organisées ou présentées. Structure & Semantics décrit comment les données numériques doivent être comprises ; semantics définit les règles d’interprétation des données, tandis que structure est le résultat organisé de l’application de ces règles. Components, Controls, & Layouts représente les parties logiques et utilisables de l’interface ; components représente les objets d’interface utilisables, controls traite les interactions, et layouts dispose d’autres components ou controls. Graphs & Frames organise ces parties en relations plus larges et en contextes actifs ; graphs représente les relations organisées entre objets d’interface, tandis que frames contient et coordonne les graphs pour la préparation orientée renderer. Renderers transforme les données d’interface préparées en une forme prête pour la sortie. Windows fournit une vue ou un contexte par lequel l’utilisateur peut fournir une entrée au système ou recevoir une sortie du système. Systems fournit l’environnement, les services, les appareils et les processus qui livrent finalement la sortie et reçoivent l’entrée. Human Interface est l’extrémité implicite où l’utilisateur perçoit l’information et répond par interaction.

Connectors décrit comment l’information se déplace entre les layers explicites voisins du Stack. De haut en bas, les connectors sont :

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Le Data connector relie Digital Data à Structure & Semantics. Il amène l’information active lisible par ordinateur dans une forme structurée que le Modèle peut comprendre, et il peut aussi ramener l’information structurée en forme numérique.

Le Parser connector relie Structure & Semantics à Components, Controls, & Layouts. Il analyse des structures interprétées stables pour les transformer en parties d’interface mutables, et il peut aussi ramener des components modifiés en données structurées.

Le Adapter connector relie Components, Controls, & Layouts à Graphs & Frames. Il adapte des parties d’interface utilisables en relations organisées et en contextes actifs, et il aide à renvoyer les interactions contextuelles vers les components ou controls capables de les traiter.

Le Bridge connector relie Graphs & Frames à Renderers. Il transporte le contexte organisé de l’interface vers le renderer et renvoie généralement les interactions vers le haut avec peu de modification afin que graph et frame puissent les router correctement.

Le Surface connector relie Renderers à Windows. Il donne à la sortie rendue une destination dans la window et transporte vers le haut les informations d’interaction originaires de la window.

Le Native connector relie Windows à Systems. Il fournit des bindings entre la window et le system, permettant à la window d’exister, de recevoir des interactions, de livrer une sortie et de communiquer avec le comportement natif du system.

Interactions est le point où le Modèle devient participatif. Une interaction est l’intention derrière une action. Le clic, le toucher, le balayage, la commande, le mouvement ou le mot prononcé n’est que l’action visible ; l’interaction est ce que l’utilisateur essaie d’accomplir par cette action. Les interactions se déplacent dans le Stack, sont transformées par les connectors et peuvent finalement modifier des données numériques avant que le cycle recommence.

Utilisez le Modèle CatalystUI pour classer le type d’information traité, identifier où cette information se trouve dans le Stack, déterminer quel connector est responsable de la transition entre layers et suivre comment l’information passe des données stockées à l’expérience utilisateur, puis de l’intention utilisateur vers les données.
```

## Par texte

Une fiche de référence compacte montrant l’ordre principal du Modèle CatalystUI.

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | Sens rapide                                                     |
| ------------ | --------------------------------------------------------------- |
| Symbolic     | Information avant l’attachement à un sens précis.               |
| Visual       | Information destinée à être vue.                                |
| Auditory     | Information destinée à être entendue.                           |
| Tactile      | Information destinée à être ressentie.                          |
| Olfactory    | Information destinée à être sentie.                             |
| Gustatory    | Information destinée à être goûtée.                             |
| Multisensory | Plusieurs catégories sensorielles comme une seule expérience.   |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Layer   | Nom                             | Sens rapide                                                               |
| ------- | ------------------------------- | ------------------------------------------------------------------------- |
| Implied | Data Storage                    | Données persistantes hors du flux actif de l’interface.                   |
| Layer 7 | Digital Data                    | Information active lisible par ordinateur avant interprétation.           |
| Layer 6 | Structure & Semantics           | Données interprétées et règles qui leur donnent du sens.                  |
| Layer 5 | Components, Controls, & Layouts | Parties mutables de l’interface utilisées par le programme.               |
| Layer 4 | Graphs & Frames                 | Relations organisées et contexte actif de l’interface.                    |
| Layer 3 | Renderers                       | Processus qui préparent l’information pour la sortie.                     |
| Layer 2 | Windows                         | Vues ou contextes de livraison où passent entrée et sortie.               |
| Layer 1 | Systems                         | Environnement, services, appareils et processus sous l’interface.         |
| Implied | Human Interface                 | L’utilisateur qui perçoit la sortie et répond par interaction.            |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Relie                                                   | Sens rapide                                                |
| --------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | Relie les données numériques actives à une structure interprétée. |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Analyse des structures stables en parties mutables.        |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adapte les parties utilisables en contexte organisé.       |
| Bridge    | Graphs & Frames ↔ Renderers                             | Transporte le contexte organisé vers le rendering.         |
| Surface   | Renderers ↔ Windows                                     | Relie la sortie rendue à une window.                       |
| Native    | Windows ↔ Systems                                       | Fournit des bindings entre une window et le system.        |

## Par flux

Une référence compacte pour suivre la manière dont l’information se déplace dans le Modèle.

---

### Flux orienté sortie

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

### Flux orienté interaction

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

## Par responsabilité

Une référence rapide pour identifier où quelque chose appartient dans le Modèle.

---

| Question                                                | Utiliser     |
| ------------------------------------------------------- | ------------ |
| Quel type d’information est traité ?                    | Domains      |
| Où l’information se trouve-t-elle dans le flux ?        | The Stack    |
| Comment l’information circule-t-elle entre layers voisins ? | Connectors |
| Qu’est-ce que l’utilisateur essaie d’accomplir ?        | Interactions |

## Par question de diagnostic

Une référence sous forme de questions pour appliquer le Modèle à un système existant.

---

| Question                                                     | Zone probable                            |
| ------------------------------------------------------------ | ---------------------------------------- |
| Les données sont-elles disponibles mais non comprises ?      | Digital Data, Data, Structure & Semantics |
| Les données interprétées ne sont-elles pas encore utilisables ? | Structure & Semantics, Parser, Components |
| Les parties utilisables ne sont-elles pas organisées en contexte ? | Components, Adapter, Graphs & Frames  |
| Le contexte organisé n’atteint-il pas le renderer ?          | Graphs & Frames, Bridge, Renderers       |
| La sortie rendue n’a-t-elle nulle part où aller ?            | Renderers, Surface, Windows              |
| La window n’est-elle pas correctement connectée au system ?  | Windows, Native, Systems                 |
| Le system a-t-il détecté une action sans saisir l’intention de l’utilisateur ? | Interactions et routing d’interaction |

## En une phrase

Un résumé compact de tout le Modèle.

---

```md
Le Modèle CatalystUI décrit le flux d’information entre un utilisateur et un système d’information en catégorisant les données avec Domains, en situant les données dans The Stack, en transformant les données avec Connectors et en suivant l’intention utilisateur avec Interactions.
```
