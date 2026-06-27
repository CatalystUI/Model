# 6.2 Connectors :: Parser

## Discussão aprofundada

### Da estrutura ao uso

O conector **Parser** fica entre **Layer 6: Structure & Semantics** e **Layer 5: Components, Controls, & Layouts**. Ele é responsável por pegar informação estruturada e convertê-la em algo que o restante da interface possa usar, modificar, organizar ou responder ativamente.

Layer 6 dá à informação uma forma interpretada estável. Ele define o que os dados significam, como são organizados e quais regras lhes dão forma. Porém, uma estrutura não é a mesma coisa que um objeto de interface. Uma estrutura pode dizer ao sistema que um documento tem um título, que um arquivo contém uma seção ou que uma música contém informação de tempo, mas a estrutura em si ainda está principalmente preocupada em representar os dados com fidelidade.

O conector Parser move essa informação interpretada para Layer 5, onde ela se torna mutável. É aqui que uma estrutura pode se tornar um componente, um controle ou um layout. É aqui que a informação deixa de ser apenas uma descrição estável do que existe e começa a se tornar algo com que o programa pode interagir diretamente. Em outras palavras, o conector Data ajuda o sistema a entender o que a informação é. O conector Parser ajuda o sistema a transformar esse entendimento em algo utilizável.

### Fazendo parsing em componentes

A palavra “parser” é frequentemente usada para descrever o processo de ler texto ou quebrar um arquivo em partes significativas. No CatalystUI, a palavra carrega essa mesma ideia geral, mas é aplicada de forma mais ampla. Um conector Parser não apenas lê caracteres ou tokens. Ele recebe uma estrutura já interpretada e converte essa estrutura em componentes mutáveis. Essa distinção é importante, porque o conector Data já trouxe digital data para Structure & Semantics. Quando a informação chega ao conector Parser, o sistema não está mais perguntando: “Esses dados podem ser compreendidos?” Agora ele pergunta: “Como esses dados compreendidos devem se tornar utilizáveis?”

Uma estrutura de documento pode se tornar componentes de documento. Uma estrutura de configuração pode se tornar componentes de configurações. Uma estrutura musical pode se tornar componentes de áudio editáveis. O conector Parser realiza a transição de significado estruturado para representação interativa. Também é aqui que o Stack começa a parecer mais familiar para um programador. Components, controls e layouts são as partes com que um desenvolvedor pode trabalhar diretamente. Elas podem ser alteradas, consultadas, organizadas, atualizadas e eventualmente roteadas pelas camadas inferiores do Stack. O conector Parser é o que dá a essas partes sua forma inicial.

### Quando a diferença parece pequena

Em muitos casos, uma estrutura e um componente podem parecer muito diferentes. Um documento complexo, arquivo de áudio ou view interativa pode exigir uma transformação significativa antes de se tornar útil em Layer 5. Porém, quando a estrutura original é simples, a diferença entre uma estrutura e um componente pode parecer quase invisível à primeira vista.

Um arquivo INI é uma boa forma de ver isso. Depois que o conector Data interpretou o arquivo, a estrutura pode conter seções, chaves e valores. Um componente representando esse mesmo arquivo também pode conter seções, chaves e valores. Na superfície, essas duas formas podem parecer quase idênticas.

O ponto-chave é: a distinção não está apenas em sua forma, mas em sua responsabilidade.

A estrutura representa o estado interpretado dos dados. É a forma estável produzida a partir da representação digital original. O componente representa o estado utilizável desses dados. Ele pode permitir que um desenvolvedor adicione uma seção, remova uma chave, altere um valor, aplique padrões, valide edições, acompanhe modificações ou prepare a informação para exibição e interação.

Assim, embora uma estrutura INI simples e um componente INI possam conter quase a mesma informação, eles não significam a mesma coisa dentro do Stack. A estrutura se preocupa com interpretação fiel. O componente se preocupa com uso ativo.

Isso ajuda a explicar por que o conector Parser importa mesmo quando seu trabalho parece pequeno. Às vezes o parsing é dramático. Às vezes é quase um mapeamento um-para-um. Nos dois casos, o conector ainda marca a fronteira onde a informação interpretada se torna interface data mutável.

### O poder da reexpressão

O conector Parser se torna especialmente poderoso quando uma única estrutura pode ser reexpressa em mais de uma forma útil. Como Layer 6 representa significado interpretado, o conector Parser pode decidir como esse significado deve se tornar utilizável em Layer 5.

Um documento HTML demonstra isso claramente. O mesmo documento estruturado poderia ser parseado em componentes para uma página web visual, componentes para um outline legível de documento, componentes para navegação de acessibilidade, componentes para impressão ou componentes para extrair informação específica. A estrutura original pode ser a mesma, mas o conector Parser permite que essa estrutura se torne diferentes representações utilizáveis dependendo do que o sistema está tentando realizar.

Isso não é apenas uma conveniência. Revela algo importante sobre o Stack: depois que os dados foram interpretados, eles podem ser remodelados de acordo com um propósito.

O mesmo princípio pode se aplicar à música. Uma representação musical estruturada pode se tornar componentes de timeline editáveis, componentes de playback, componentes de notação ou componentes orientados a exportação. A partir daí, a informação pode eventualmente retornar para uma estrutura adequada a um arquivo WAV, um arquivo MP3 ou outro formato. O conector Parser é parte do motivo pelo qual esse tipo de transformação pode ser expresso com clareza. Ele dá ao sistema um lugar para se mover entre estrutura estável e representação mutável sem fingir que essas duas ideias são a mesma coisa.

Dessa forma, o conector Parser ajuda a preservar a flexibilidade da informação. Ele permite que os mesmos dados interpretados participem de diferentes fluxos de trabalho, ferramentas e formas de expressão, ainda permanecendo fundamentados no significado fornecido por Structure & Semantics.

### Retornando à estrutura

Como o Stack é reversível, o conector Parser também trabalha na direção oposta. Quando componentes são modificados por interação, essas mudanças podem precisar retornar para Structure & Semantics antes de poderem se tornar Digital Data novamente.

Esse caminho reverso é onde a informação mutável é preparada para se tornar estável mais uma vez. Um componente de configurações pode ser alterado por um usuário e depois parseado de volta para uma estrutura de configuração. Um componente de documento pode ser editado e depois parseado de volta para uma estrutura de documento. Um componente musical pode ser organizado, cortado ou ajustado e depois parseado de volta para uma estrutura que mais tarde possa ser escrita como arquivo.

Esse processo não significa que todo componente precise retornar exatamente à mesma estrutura de onde veio. Às vezes o propósito da interação é transformar a informação em uma nova forma. Um documento importado pode se tornar um outline simplificado. Um projeto de áudio editado pode se tornar uma estrutura final de exportação. Um conjunto complexo de componentes pode ser reduzido a uma estrutura menor para armazenamento ou transmissão.

O conector Parser fornece ao Modelo um lugar apropriado para essa transformação. Ele permite que interface data mutável se torne dados estruturados novamente sem forçar Layer 5 a fingir que é responsável por armazenamento, e sem forçar Layer 6 a entender toda forma interativa possível.

### Preservando intenção

Um conector Parser deve preservar o significado pretendido da informação conforme ela cruza entre camadas. Ao se mover de estrutura para componentes, ele deve produzir formas utilizáveis que reflitam honestamente a estrutura. Ao se mover de componentes de volta para estrutura, ele deve representar o resultado da interação com clareza suficiente para que as camadas superiores possam preservá-lo ou transmiti-lo.

Isso não exige uma cópia perfeita um-para-um. Na verdade, o conector Parser frequentemente existe porque uma cópia um-para-um seria menos útil. Componentes podem precisar de propriedades de conveniência, métodos auxiliares, estado de edição, estado de validação, informação de layout ou valores temporários que não pertencem à estrutura original. Da mesma forma, uma estrutura retornada pode omitir estado temporário do componente porque esse estado só era útil durante a interação.

O objetivo não é manter cada detalhe interno idêntico. O objetivo é preservar o significado que importa.

Isso mantém o Stack honesto. Structure & Semantics continua sendo o lugar da informação interpretada e estável. Components, Controls, & Layouts continua sendo o lugar da informação mutável e utilizável. O conector Parser realiza o movimento entre os dois enquanto preserva a intenção dos dados sendo transformados.

### Por que o conector importa

O conector Parser impede que o Stack confunda dados interpretados com interface data utilizável. Sem esse conector, estruturas teriam que se tornar mutáveis por conta própria, ou componentes teriam que saber interpretar toda estrutura que recebem. Qualquer abordagem borra as responsabilidades das camadas ao redor.

Ao definir o conector Parser, o Modelo dá a essa transição um lugar apropriado.

Structure & Semantics continua responsável pela interpretação estável. Components, Controls, & Layouts continua responsável por uso ativo, modificação e interação. O conector Parser lida com a transformação entre os dois.

Esse é o ponto do Stack em que informação compreendida se torna algo com que o programa pode trabalhar diretamente. É onde significado estável se torna representação mutável. A partir daí, a informação pode ser organizada em graphs e frames, preparada para output, roteada pelas camadas inferiores e eventualmente colocada diante do usuário como algo que ele pode perceber, entender e responder.
