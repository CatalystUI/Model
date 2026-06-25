# 5.4 The Stack :: Components, Controls, & Layouts

## Discussão aprofundada

### A primeira camada mutável da interface

**Components, Controls, & Layouts** é a camada em que a structure interpretada se torna material de interface utilizável. Layer 6 explica o que uma representação significa e como está organizada; Layer 5 transforma essa interpretação estável em objetos mutáveis que podem ser dispostos, atualizados, usados em interação e preparados para o restante do Stack.

Esta é a primeira camada em que o Modelo começa a descrever a interface como algo ativamente utilizável, não apenas compreendido. Uma structure pode explicar o significado de um recurso, mas um usuário não interage diretamente com uma structure. A interface precisa de objetos que possam expor valores, responder a intentos, manter estado temporário e participar de uma disposição maior. Layer 5 fornece esses objetos.

### Da interpretação ao uso

O limite entre **Structure & Semantics** e **Components, Controls, & Layouts** é o limite entre forma interpretada e forma utilizável. Layer 6 produz uma compreensão estável do conteúdo. Layer 5 adapta essa compreensão para uma forma com que a interface possa trabalhar durante a operação ativa.

Essa distinção importa porque structure interpretada e comportamento de interface não são a mesma responsabilidade. Uma structure pode identificar que um valor existe, onde ele pertence e quais regras o governam. Um component pode expor esse valor como algo ajustável, exibível, reproduzível, selecionável, editável ou de outro modo utilizável. A structure explica o conteúdo; o component dá à interface uma forma de trabalhar com ele.

Layer 5, portanto, não é meramente uma camada visual. Components, controls e layouts podem existir em qualquer domínio. Um component pode representar texto, som, feedback háptico, um comando, uma seção de documento, um recurso de mídia ou qualquer outra parte utilizável de uma interface. O que define a camada não é como o objeto será eventualmente percebido, mas que ele fornece uma forma mutável de interface construída a partir de conteúdo interpretado.

### Components

Um **component** é uma parte lógica e mutável da interface criada a partir de, ou associada a, uma structure interpretada. Ele pode representar uma imagem, rótulo, faixa de áudio, elemento de estilo, comando, seção de documento, recurso de mídia ou outra parte utilizável da interface. Onde uma structure se preocupa principalmente com significado estável, um component se preocupa com uso ativo.

Um component pode expor propriedades, métodos, estado ou comportamento que tornam o conteúdo subjacente mais fácil de manipular. Pode fornecer valores que podem ser lidos ou alterados, operações que podem ser executadas ou estado que pode ser rastreado enquanto a interface está ativa. Isso permite que o restante do Stack trabalhe com objetos significativos em vez de lidar repetidamente com representações brutas ou structures imutáveis.

O ponto importante é que um component não precisa preservar a forma exata do recurso original. Ele pode simplificá-lo, combinar partes dele, expor apenas uma porção específica dele ou fornecer uma interface mais conveniente sobre ele. Layer 5 pode ser prático porque seu papel não é definir o significado original do conteúdo. Seu papel é tornar esse significado utilizável.

### Controls

Um **control** é um component que lida com interação. Ele recebe interação roteada das camadas inferiores do Stack e determina o que deve acontecer em resposta. Isso torna os controls um dos principais pontos de encontro entre o lado da interface voltado ao usuário e o lado da interface voltado ao conteúdo.

Controls são responsáveis por transformar interação em comportamento significativo de interface. Um control pode atualizar um valor, acionar uma operação, mudar estado, solicitar uma nova representação ou não produzir mudança alguma. A distinção principal é que um control não existe apenas como parte da interface; ele participa da capacidade do usuário de agir sobre o sistema.

Como controls são components, eles compartilham a mesma natureza mutável. No entanto, sua responsabilidade definidora é o tratamento de interação. Um component pode representar um objeto utilizável sem responder diretamente ao intento do usuário. Um control representa um objeto utilizável que pode receber, interpretar e agir sobre esse intento dentro do fluxo da interface.

### Layouts

Um **layout** é um component que dispõe outros components, incluindo controls, de acordo com alguma forma de ordem, relação ou regra de posicionamento. Em interfaces visuais, isso pode aparecer como disposição espacial. Em outros domínios, layout pode descrever sequência, agrupamento, prioridade, temporização, categoria, roteamento ou outra relação organizacional.

Layouts importam porque objetos de interface utilizáveis raramente existem isolados. Components precisam de contexto. Podem precisar ser ordenados, agrupados, alinhados, colocados em camadas, sequenciados ou de outro modo relacionados antes de participarem claramente da experiência do usuário. Um layout fornece essa estrutura relacional sem se tornar o gestor de nível superior da interface como um todo.

Isso separa layouts de graphs. Um layout dispõe components segundo uma regra ou padrão específico. Um graph gerencia descoberta, organização, relações e ciclo de vida mais amplos em um contexto de interface maior. Layer 5 fornece os próprios objetos layout; Layer 4 determina como esses objetos participam do frame operacional maior.

### Mutabilidade e estado ativo

Layer 5 é mutável porque interfaces são ativas. Depois que conteúdo interpretado se torna parte de uma interface, ele pode precisar responder a mudanças no intento do usuário, estado do sistema, tempo, foco, seleção, visibilidade, reprodução, input ou outras condições vivas. Components, controls e layouts fornecem um lugar para que essas mudanças ativas aconteçam.

Isso não significa que Layer 5 substitui a interpretação estável fornecida por Layer 6. Em vez disso, ela constrói sobre essa interpretação. Um component pode manter temporariamente um valor alterado, um control pode processar uma edição, ou um layout pode recalcular a disposição, mas essas mudanças ainda permanecem conectadas ao significado interpretado abaixo delas. Quando uma mudança precisa se tornar parte do recurso retido, o fluxo pode subir novamente por Structure & Semantics e Digital Data.

A mutabilidade também permite que Layer 5 represente condições temporárias de interface que talvez nunca sejam armazenadas. Um item selecionado, seção expandida, posição de reprodução, estado de hover, alvo de foco ou edição pendente pode importar profundamente para a interface ativa mesmo que nunca se torne parte do armazenamento permanente. Layer 5 dá ao Stack um lugar claro para descrever essas condições vivas.

### Papel no fluxo de cima para baixo

No fluxo de cima para baixo, Components, Controls, & Layouts recebe structure interpretada e a transforma em objetos de interface utilizáveis. O Stack já passou de saber o que o conteúdo significa e agora começa a preparar esse conteúdo para interação, organização e apresentação eventual.

Nesse estágio, a interface pode decidir quais partes do conteúdo interpretado devem se tornar components, quais components devem ser capazes de lidar com interação e como esses components devem ser dispostos. O resultado ainda não é um frame renderizado ou output de sistema. É um modelo de interface ativo que pode ser organizado por Layer 4 e eventualmente preparado para rendering.

### Papel no fluxo de baixo para cima

No fluxo de baixo para cima, Layer 5 é onde a interação roteada se torna comportamento significativo. Camadas inferiores podem detectar, traduzir e rotear uma ação, mas um control é onde essa ação finalmente é compreendida em relação ao objeto de interface que ela afeta.

Quando um control lida com uma interação, ele pode atualizar o estado de um component, solicitar uma mudança de layout, acionar um comando ou produzir uma modificação que precisa voltar em direção a Structure & Semantics. Se essa modificação afetar o conteúdo subjacente, Layer 6 pode validar e organizar a mudança segundo as regras semânticas relevantes antes que ela se torne Digital Data novamente. Dessa forma, Layer 5 serve como o ponto ativo de conversão entre intento do usuário e estado da interface.

### Relação com Graphs & Frames

Layer 5 produz os objetos de interface utilizáveis, mas não serve como o ambiente completo em que esses objetos operam. Essa responsabilidade pertence a **Layer 4: Graphs & Frames**. Components, controls e layouts precisam de um contexto mais amplo que possa organizá-los, consultá-los, rotear entre eles, prepará-los para rendering e definir os limites em que participam.

Essa relação mantém o Modelo limpo. Layer 5 define os objetos da interface ativa. Layer 4 gerencia sua organização maior e os prepara para as camadas inferiores do Stack. Um component deve saber como representar e gerenciar seu próprio estado utilizável; o graph e o frame devem saber como esse component se encaixa no fluxo mais amplo da interface.

### Por que a camada importa

Components, Controls, & Layouts impede que o Stack pule diretamente da interpretação para o rendering. Um sistema não consegue construir uma interface clara apenas compreendendo conteúdo e produzindo output imediatamente. Deve haver uma camada em que esse conteúdo interpretado se torne utilizável, mutável, organizável e responsivo à interação.

Ao separar Layer 5 tanto de Structure & Semantics quanto de Graphs & Frames, o Modelo preserva uma sequência precisa de responsabilidades. Structure & Semantics define significado estável. Components, Controls, & Layouts transforma esse significado em objetos ativos de interface. Graphs & Frames organiza esses objetos em um contexto operacional maior. Essa separação permite que CatalystUI descreva interfaces através dos domínios sem reduzi-las a widgets visuais, structures brutas ou comandos específicos de renderer.
