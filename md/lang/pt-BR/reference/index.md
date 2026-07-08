<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 3. Referência

Abaixo, o Modelo CatalystUI está resumido em vários formatos para facilitar a consulta, a cópia e a aplicação durante o estudo, a documentação ou a implementação do Modelo.

A página de Referência não pretende substituir a documentação ao redor. Em vez disso, ela oferece uma visão compacta do Modelo depois que a terminologia, o resumo, os domains, o stack, os connectors e as interactions já foram apresentados.

## Por prompt de IA

Um prompt de IA que pode permitir que um LLM interprete e compreenda o Modelo CatalystUI. Ele pode ser usado para fazer perguntas sobre o Modelo, comparar sistemas existentes com ele ou fornecer uma folha de referência durante a resolução de problemas em um ambiente técnico.

---

```md
O Modelo CatalystUI é um modelo universal para descrever o fluxo de informação entre um usuário e um sistema de informação.

Um processo é algo que aceita uma entrada, realiza uma transformação e produz uma saída. Um sistema é um conjunto organizado de processos, definido pela forma como eles interagem e pela ordem em que são executados. Uma interface é um mecanismo que permite que dois sistemas diferentes interajam. Um sistema de informação é um sistema especializado que trabalha com dados persistentes e permite que um usuário os crie, leia, atualize ou exclua por meio de uma interface ao longo do tempo. Um computador é um sistema de informação que trabalha exclusivamente com dados digitais, ou seja, dados que podem ser representados em binário e processados por uma máquina. Um usuário é uma pessoa que pode interagir com um sistema de informação.

No Modelo CatalystUI, os termos "data" e "information" são tratados como intercambiáveis.

O Modelo descreve interfaces de usuário por meio do fluxo de informação. A informação pode ser apresentada por um sistema, interpretada pelo usuário, respondida pelo usuário, processada pelo sistema e apresentada novamente enquanto o ciclo continua. O ciclo pode começar em qualquer ponto, mas o mesmo padrão se aplica: a informação flui entre o usuário e o sistema de informação por meio de uma interface.

O Modelo CatalystUI é dividido em três categorias principais:

- Domains
- The Stack
- Connectors

Domains categoriza os dados. The Stack descreve os dados. Connectors transforma, modifica e traduz os dados.

Domains descreve que tipo de informação está sendo tratado durante uma interaction. Os sete domains de nível superior são Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory e Multisensory. Symbolic data é informação antes de ser comprometida com um sentido específico. Visual data é informação destinada a ser vista. Auditory data é informação destinada a ser ouvida. Tactile data é informação destinada a ser sentida. Olfactory data é informação destinada a ser cheirada. Gustatory data é informação destinada a ser saboreada. Multisensory data é informação em que várias categorias sensoriais trabalham juntas como uma única experiência.

The Stack descreve onde a informação está localizada no fluxo. Ele contém sete layers explícitos com duas extremidades implícitas. De cima para baixo, The Stack é:

- [Implied] Data Storage
- Layer 7: Digital Data
- Layer 6: Structure & Semantics
- Layer 5: Components, Controls, & Layouts
- Layer 4: Graphs & Frames
- Layer 3: Renderers
- Layer 2: Windows
- Layer 1: Systems
- [Implied] Human Interface

Data Storage é a fonte ou o destino implícito onde dados persistentes permanecem disponíveis além do fluxo ativo da interface. Digital Data são dados depois de terem entrado no fluxo ativo da interface em uma forma legível por computador, mas antes que o restante do Modelo os tenha interpretado, organizado ou apresentado. Structure & Semantics descreve como os dados digitais devem ser entendidos; semantics define as regras para interpretar dados, enquanto structure é o resultado organizado da aplicação dessas regras. Components, Controls, & Layouts representa as partes lógicas e utilizáveis da interface; components representa objetos de interface utilizáveis, controls processa interactions, e layouts organiza outros components ou controls. Graphs & Frames organiza essas partes em relações maiores e contextos ativos; graphs representa relações organizadas entre objetos de interface, enquanto frames contém e coordena graphs para preparação voltada ao renderer. Renderers transforma dados de interface preparados em uma forma pronta para saída. Windows fornece uma visão ou contexto por meio do qual o usuário pode fornecer entrada ao sistema ou receber saída dele. Systems fornece o ambiente, os serviços, os dispositivos e os processos que, por fim, entregam saída e recebem entrada. Human Interface é a extremidade implícita em que o usuário percebe informação e responde por meio de interaction.

Connectors descreve como a informação se move entre layers explícitos vizinhos do Stack. De cima para baixo, os connectors são:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

O Data connector conecta Digital Data a Structure & Semantics. Ele leva informação ativa legível por computador a uma forma estruturada que o Modelo pode compreender, e também pode devolver informação estruturada à forma digital.

O Parser connector conecta Structure & Semantics a Components, Controls, & Layouts. Ele analisa estruturas interpretadas estáveis em partes mutáveis da interface e também pode devolver components modificados a dados estruturados.

O Adapter connector conecta Components, Controls, & Layouts a Graphs & Frames. Ele adapta partes utilizáveis da interface em relações organizadas e contextos ativos, e ajuda a devolver interactions contextuais aos components ou controls que podem tratá-las.

O Bridge connector conecta Graphs & Frames a Renderers. Ele leva o contexto organizado da interface ao renderer e normalmente passa interactions de volta para cima com pouca modificação, para que graph e frame possam roteá-las corretamente.

O Surface connector conecta Renderers a Windows. Ele dá à saída renderizada um destino dentro da window e leva de volta para cima informações de interaction originadas na window.

O Native connector conecta Windows a Systems. Ele fornece bindings entre a window e o system, permitindo que a window exista, receba interactions, entregue saída e se comunique com o comportamento nativo do system.

Interactions é o ponto em que o Modelo se torna participativo. Uma interaction é a intenção por trás de uma ação. O clique, toque, deslize, comando, movimento ou palavra falada é apenas a ação visível; a interaction é aquilo que o usuário está tentando realizar por meio dessa ação. Interactions se move pelo Stack, é transformada por connectors e pode eventualmente modificar dados digitais antes que o ciclo recomece.

Use o Modelo CatalystUI para classificar o tipo de informação que está sendo tratado, identificar onde essa informação está localizada no Stack, determinar qual connector é responsável pela transição entre layers e acompanhar como a informação se move dos dados armazenados para a experiência do usuário e da intenção do usuário de volta para os dados.
```

## Por texto

Uma folha de referência compacta que mostra a ordem principal do Modelo CatalystUI.

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

| Domain       | Significado rápido                                              |
| ------------ | --------------------------------------------------------------- |
| Symbolic     | Informação antes de se comprometer com um sentido específico.   |
| Visual       | Informação destinada a ser vista.                               |
| Auditory     | Informação destinada a ser ouvida.                              |
| Tactile      | Informação destinada a ser sentida.                             |
| Olfactory    | Informação destinada a ser cheirada.                            |
| Gustatory    | Informação destinada a ser saboreada.                           |
| Multisensory | Várias categorias sensoriais trabalhando como uma experiência.  |

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

| Layer   | Nome                            | Significado rápido                                                       |
| ------- | ------------------------------- | ------------------------------------------------------------------------ |
| Implied | Data Storage                    | Dados persistentes fora do fluxo ativo da interface.                     |
| Layer 7 | Digital Data                    | Informação ativa legível por computador antes da interpretação.          |
| Layer 6 | Structure & Semantics           | Dados interpretados e as regras que lhes dão significado.                |
| Layer 5 | Components, Controls, & Layouts | Partes mutáveis da interface usadas pelo programa.                       |
| Layer 4 | Graphs & Frames                 | Relações organizadas e contexto ativo da interface.                      |
| Layer 3 | Renderers                       | Processos que preparam informação para saída.                            |
| Layer 2 | Windows                         | Visões ou contextos de entrega por onde entrada e saída passam.          |
| Layer 1 | Systems                         | Ambiente, serviços, dispositivos e processos abaixo da interface.        |
| Implied | Human Interface                 | O usuário que percebe a saída e responde por meio de interaction.        |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Conecta                                                 | Significado rápido                                       |
| --------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Data      | Digital Data ↔ Structure & Semantics                    | Conecta dados digitais ativos à estrutura interpretada.  |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Analisa estruturas estáveis em partes mutáveis.          |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Adapta partes utilizáveis em contexto organizado.        |
| Bridge    | Graphs & Frames ↔ Renderers                             | Leva contexto organizado ao rendering.                   |
| Surface   | Renderers ↔ Windows                                     | Conecta saída renderizada a uma window.                  |
| Native    | Windows ↔ Systems                                       | Fornece bindings entre uma window e o system.            |

## Por fluxo

Uma referência compacta para acompanhar como a informação se move pelo Modelo.

---

### Fluxo voltado à saída

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

### Fluxo voltado à interaction

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

## Por responsabilidade

Uma referência rápida para identificar onde algo pertence no Modelo.

---

| Pergunta                                               | Usar         |
| ------------------------------------------------------ | ------------ |
| Que tipo de informação está sendo tratado?             | Domains      |
| Onde a informação está localizada no fluxo?            | The Stack    |
| Como a informação se move entre layers vizinhos?       | Connectors   |
| O que o usuário está tentando realizar?                | Interactions |

## Por pergunta diagnóstica

Uma referência baseada em perguntas para aplicar o Modelo a um sistema existente.

---

| Pergunta                                                     | Área provável                            |
| ------------------------------------------------------------ | ---------------------------------------- |
| Os dados estão disponíveis, mas não compreendidos?           | Digital Data, Data, Structure & Semantics |
| Os dados interpretados ainda não são utilizáveis?            | Structure & Semantics, Parser, Components |
| As partes utilizáveis não estão organizadas em contexto?     | Components, Adapter, Graphs & Frames     |
| O contexto organizado não está chegando ao renderer?         | Graphs & Frames, Bridge, Renderers       |
| A saída renderizada não tem para onde ir?                    | Renderers, Surface, Windows              |
| A window não está conectada corretamente ao system?          | Windows, Native, Systems                 |
| O system detectou uma ação, mas perdeu a intenção do usuário? | Interactions e routing de interaction   |

## Em uma frase

Um resumo compacto de todo o Modelo.

---

```md
O Modelo CatalystUI descreve o fluxo de informação entre um usuário e um sistema de informação categorizando dados por meio de Domains, localizando dados dentro do Stack, transformando dados por meio de Connectors e rastreando a intenção do usuário por meio de Interactions.
```
