# 6.3 Connectors :: Adapter

## Discussão aprofundada

### Do uso ao contexto

O conector **Adapter** fica entre **Layer 5: Components, Controls, & Layouts** e **Layer 4: Graphs & Frames**. Ele é responsável por pegar interface data mutável e colocá-la em um contexto maior, onde ela pode ser organizada, descoberta, roteada, delimitada e preparada para o restante do Stack.

Layer 5 dá ao sistema componentes, controles e layouts. Essas são as partes mutáveis com que um desenvolvedor pode trabalhar diretamente. Um componente pode representar uma peça de informação. Um controle pode responder a uma interação. Um layout pode organizar outros componentes de acordo com uma ordem específica. Porém, essas partes não descrevem completamente o ambiente em que existem. Elas podem saber o que são e como se comportam, mas não sabem automaticamente como se relacionam com a interface inteira.

O conector Adapter fornece esse movimento de peças individuais utilizáveis para um contexto organizado. Ele pega os componentes produzidos pelo conector Parser e os adapta em graphs e frames. É aqui que o Stack começa a entender não apenas que um componente existe, mas onde ele pertence, como se relaciona com outros componentes e como deve participar da interface ativa.

Em outras palavras, o conector Parser torna informação estruturada utilizável. O conector Adapter torna informação utilizável contextual.

### Adaptando componentes em graphs

Um componente pode existir por conta própria, mas uma interface de usuário raramente é composta por um único componente isolado. Mesmo a interface mais simples geralmente contém relações: um componente pode conter outro, um controle pode depender de um layout, um grupo pode precisar ser pesquisado, ordenado, habilitado, desabilitado, focado ou atualizado em conjunto.

É aqui que o graph se torna importante.

O conector Adapter permite que componentes, controles e layouts sejam colocados em um graph para que possam ser organizados como parte de um todo maior. Um graph pode armazenar componentes, acompanhar suas relações, expor formas de consultá-los e fornecer a lógica ao redor necessária para gerenciá-los como uma coleção. Sem esse passo, componentes continuariam sendo peças dispersas de dados mutáveis em vez de participantes de uma interface unificada.

Um componente de configurações, por exemplo, pode ser útil por si só. Depois de adaptado em um graph, ele pode se tornar parte de uma view completa de configurações, conectado a outras seções, pesquisado por nome, atualizado com valores relacionados ou roteado quando o usuário executa uma ação. O componente não deixou de ser um componente, mas ganhou contexto por meio do graph.

Essa distinção ajuda a manter Layer 5 e Layer 4 separados. Componentes descrevem interface data utilizável. Graphs descrevem como essas peças são organizadas em conjunto.

### Layout não é todo o contexto

O conector Adapter também ajuda a esclarecer a diferença entre um layout e um graph. Como layouts podem organizar componentes, pode ser tentador tratá-los como a camada organizacional completa da interface. Porém, um layout apenas organiza componentes de uma maneira específica. Ele não descreve necessariamente a relação completa, o ciclo de vida, o routing ou o contexto ambiental desses componentes.

Um layout vertical pode determinar que vários controles apareçam em ordem. Isso não significa que o layout seja responsável pela interface inteira. Ele não precisa conhecer cada componente ativo, gerenciar cada interação, preparar a fronteira de output ou agir como mediador de nível superior para o sistema. Essas responsabilidades pertencem a Layer 4.

O conector Adapter respeita essa distinção. Ele pode pegar um layout de Layer 5 e colocá-lo em um graph, mas o layout não se torna o graph apenas porque organiza componentes. O graph fornece um contexto organizacional mais amplo, enquanto o layout continua sendo um componente cujo propósito é organizar outros componentes.

Essa separação se torna especialmente útil conforme uma interface cresce. Arranjos simples podem continuar simples, enquanto o sistema maior ainda fornece a estrutura necessária para gerenciar descoberta, routing, atualizações e preparação para output.

### Conectando ao Frame

Layer 4 não se preocupa apenas com graphs. Ele também contém o frame, que representa a fronteira ativa e o ponto de comunicação entre componentes organizados e as camadas inferiores do Stack.

O conector Adapter ajuda componentes a entrar nesse contexto emoldurado. Um componente pode ter um tamanho, um controle pode ter comportamento de interação, e um layout pode descrever posicionamento relativo, mas o frame determina os limites em que essas peças estão sendo preparadas. Ele se preocupa com a área ativa, o contexto ao redor e a informação que eventualmente deve ser passada em direção ao rendering.

Isso não significa que o conector Adapter renderize alguma coisa. Rendering pertence às camadas inferiores. O conector Adapter prepara a interface organizada para que o frame possa comunicá-la adequadamente. Ele dá ao frame as relações entre componentes, os resultados de layout e as informações contextuais necessárias antes que o próximo conector leve essa informação em direção ao renderer.

Dessa forma, o conector Adapter atua como uma ponte entre “estas são as peças que podemos usar” e “esta é a interface organizada que estamos preparando”.

### Reuso por adaptação

Uma das partes mais poderosas do conector Adapter é que o mesmo componente pode ser adaptado para diferentes contextos. Um componente não precisa ficar permanentemente preso a um graph, um frame ou um tipo de interface. Seu significado e comportamento podem permanecer estáveis enquanto o conector Adapter determina como ele deve participar de um ambiente específico.

Um componente de documento poderia ser adaptado para um graph de edição, um graph de pré-visualização ou um graph de impressão. Um componente de música poderia ser adaptado para um graph de playback, um graph de edição ou um graph de biblioteca. Um grupo de componentes de configurações poderia ser adaptado para uma página simples de preferências, um painel avançado de configuração ou um fluxo automatizado de setup.

Os componentes subjacentes podem continuar familiares, mas suas relações e propósito mudam dependendo do graph e do frame em que entram. Isso dá ao CatalystUI uma forma limpa de expressar reuso sem fingir que reuso significa que todo contexto é idêntico.

O conector Adapter é o que torna isso possível. Ele permite que interface data mutável seja reorganizada de acordo com o propósito, mantendo o próprio componente focado no que representa e em como se comporta.

### Retornando aos componentes

Como o Stack é reversível, o conector Adapter também participa do fluxo de interação de volta para as camadas superiores. Quando um usuário interage com o sistema, as camadas inferiores eventualmente precisam rotear essa interação de volta ao componente ou controle apropriado.

Layer 4 tem um papel importante nesse processo porque entende o contexto organizado. O graph pode ajudar a determinar qual componente é relevante. O frame pode ajudar a interpretar os limites em que a interação ocorreu. Depois que esse contexto é conhecido, o conector Adapter ajuda a devolver a interação para Layer 5, onde o componente ou controle apropriado pode responder.

Isso importa porque interações raramente chegam já anexadas ao componente exato que deve lidar com elas. O sistema pode saber que uma tecla foi pressionada, um ponteiro se moveu, um comando foi disparado ou uma região foi selecionada, mas o Stack ainda precisa determinar o que essa ação significa dentro da interface atual. O conector Adapter ajuda a levar essa decisão contextual de volta aos componentes mutáveis onde a interação pode ser tratada.

No fluxo top-down, o conector Adapter coloca componentes em contexto. No fluxo bottom-up, ele ajuda a devolver interações contextuais aos componentes que podem agir sobre elas.

### Preservando identidade

Um conector Adapter deve preservar a identidade e a intenção dos componentes que adapta. Quando um componente entra em um graph ou frame, ele não deve perder o que é. Seu propósito, estado e relação com a informação original devem permanecer reconhecíveis, mesmo quando ele está sendo organizado em um sistema maior.

Isso não significa que o componente não possa ser envolvido, indexado, agrupado, medido, transformado ou preparado para um ambiente específico. Em muitos casos, a adaptação exige informação adicional que o componente não continha originalmente. Um graph pode precisar de identificadores. Um frame pode precisar de limites. Um sistema de routing pode precisar de informação de foco. Esses acréscimos ajudam o componente a participar do contexto, mas não devem apagar seu significado.

Portanto, o conector Adapter realiza um tipo cuidadoso de transformação. Ele adiciona contexto sem engolir o componente. Ele permite que a interface se torne organizada sem forçar cada componente a se tornar responsável pelo sistema inteiro ao seu redor.

### Por que o conector importa

O conector Adapter impede que o Stack confunda interface data utilizável com contexto de interface organizado. Sem esse conector, componentes teriam que gerenciar seus próprios graphs, layouts seriam confundidos com organização completa da interface, ou frames seriam forçados a entender componentes sem uma transição apropriada entre as duas camadas.

Ao definir o conector Adapter, o Modelo dá a essa transição um lugar apropriado.

Components, Controls, & Layouts continua responsável por objetos de interface mutáveis e comportamento de interação direta. Graphs & Frames continua responsável por organização, contexto, fronteiras, routing e preparação para as camadas inferiores. O conector Adapter lida com o movimento entre os dois.

Esse é o ponto do Stack em que informação utilizável se torna informação situada. Componentes não estão mais apenas disponíveis para o programa; eles são colocados em um contexto vivo onde podem se relacionar entre si, responder pelos caminhos corretos e se preparar para serem levados mais abaixo no Stack. A partir daí, a interface organizada pode seguir em direção a rendering, delivery, percepção e resposta.
