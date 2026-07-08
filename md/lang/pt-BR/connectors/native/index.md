<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 6.6 Connectors :: Native

## Discussão aprofundada

### De Windows a Systems

O conector **Native** fica entre **Layer 2: Windows** e **Layer 1: Systems**. Ele é responsável por conectar a window ao sistema subjacente para que output possa ser entregue e interações possam ser recebidas pelo ambiente real em que o programa está sendo executado.

Layer 2 dá ao Stack uma window: uma view, contêiner ou ponto de delivery delimitado. Layer 1 dá ao Stack o system: o ambiente operacional, acesso a hardware, serviços, dispositivos e comportamento nativo que tornam a window possível. O conector Native fornece o ponto de travessia entre essas duas camadas.

Esse conector é frequentemente onde o Stack toca a realidade prática da computação de forma mais direta. Até aqui, o Modelo descreveu informação enquanto ela se move por dados estruturados, componentes, graphs, renderers e surfaces. Porém, uma window não existe apenas por imaginação. Algo precisa pedir ao sistema que a crie, configure, mantenha, atualize e relate interações de volta por meio dela.

Esse algo é o conector Native.

### Definindo bindings

Um **binding** é uma conexão controlada entre uma camada e funcionalidade fornecida por outra. No contexto do conector Native, bindings expõem comportamento de nível de sistema à window em uma forma que o programa possa usar sem exigir que a window se torne o próprio sistema.

Essa definição é intencionalmente simples. Um binding não precisa ser misterioso. Ele é a relação acessível entre o código acima e a funcionalidade abaixo.

Um binding nativo pode expor a capacidade de criar uma window, alterar seu título, receber input de teclado, responder ao movimento do ponteiro, redimensionar a área ativa, solicitar foco, acessar um dispositivo ou comunicar-se com um serviço de sistema. Os detalhes variam por sistema e implementação, mas o conceito continua o mesmo: o binding fornece uma conexão utilizável com funcionalidade nativa.

É por isso que bindings importam tanto nessa camada. O sistema pode fornecer capacidades poderosas, mas essas capacidades não ficam automaticamente disponíveis na linguagem ou estrutura usada pelo restante do Stack. Elas precisam ser expostas por alguma forma de conexão. O conector Native é onde essas conexões são reunidas, moldadas e usadas.

### Fornecendo acesso nativo

Em muitas implementações, o conector Native fornecerá principalmente bindings para funcionalidade de sistema de nível mais baixo. Isso pode parecer comum no início, especialmente porque desenvolvedores já estão familiarizados com APIs nativas, bibliotecas de plataforma, chamadas de sistema operacional, interfaces de dispositivo e ferramentas semelhantes. Porém, dentro do Stack, essas não são meros detalhes aleatórios de implementação. São os meios pelos quais Layer 2 ganha acesso a Layer 1.

Uma window gráfica em um sistema operacional desktop pode exigir bindings para uma API de janelas da plataforma. Uma interface de linha de comando pode exigir bindings para entrada e saída de terminal. Um dispositivo especializado pode exigir bindings para botões, sensores, alto-falantes, luzes ou outros dispositivos controlados pelo sistema. Em cada caso, o conector Native fornece a relação que permite que a window atue dentro do sistema.

A parte importante não é qual plataforma está sendo usada. A parte importante é que a window não consegue entregar output nem receber interaction a menos que tenha alguma forma de se comunicar com o sistema que a contém.

O conector Native fornece essa forma.

### Mais que um wrapper

Como esse conector frequentemente expõe comportamento nativo, pode ser tentador descrevê-lo como um wrapper em volta de APIs de sistema. Essa descrição pode ser útil em alguns contextos práticos, mas não explica completamente o que o conector está fazendo dentro do Modelo.

Um wrapper descreve como as pessoas frequentemente implementam esse tipo de camada. Um binding descreve o que o conector realmente fornece.

O conector Native não é apenas uma pilha de chamadas de plataforma colocadas abaixo da window. Ele é a relação formal entre a window e o sistema. Define como a window recebe sua existência respaldada pelo sistema, como comportamento de sistema se torna disponível ao Stack e como interações originadas no sistema começam a se mover para cima.

Essa distinção importa porque o Modelo não está tentando preservar a forma como desenvolvedores historicamente descreveram essas ferramentas. Ele está tentando descrever o processo subjacente em si. Nesse processo, o conector Native não é importante porque por acaso envolve uma API nativa. Ele é importante porque vincula Layer 2 a Layer 1.

Isso é o que esse conector realmente é.

### Criando e mantendo a Window

No fluxo top-down, o conector Native permite que a window opere por meio do sistema. Uma window pode precisar ser criada, exibida, escondida, redimensionada, movida, focada, atualizada ou fechada. Essas ações exigem alguma relação com o sistema, porque o sistema é a camada que realmente fornece o ambiente em que essas ações podem ocorrer.

O conector Native pode expor os bindings necessários para realizar essas ações. Por meio dele, Layer 2 pode solicitar comportamento de sistema sem absorver toda a responsabilidade de gerenciamento do sistema. A window continua sendo o ponto de delivery delimitado. O sistema continua sendo o ambiente que fornece a funcionalidade subjacente. O conector Native carrega a relação entre os dois.

Isso é especialmente importante porque sistemas diferem. Sistemas operacionais, dispositivos, runtimes e ambientes diferentes podem fornecer APIs e comportamentos diferentes. O conector Native dá ao Stack um lugar para representar essas diferenças sem forçar o restante do Modelo a se tornar específico de sistema.

### Recebendo interações

Como o Stack é reversível, o conector Native também é o primeiro conector explícito envolvido quando uma interação entra pelo sistema.

Uma tecla pressionada, movimento de ponteiro, input de toque, ação de controle, sinal de dispositivo, evento de redimensionamento, mudança de foco ou outro evento originado no sistema precisa atravessar de Layer 1 para Layer 2 antes que o restante do Stack possa fazer qualquer coisa com ele. O conector Native fornece essa travessia. Ele recebe ou expõe a informação de interação do sistema e a leva para a window, onde ela pode continuar para cima pelo conector Surface até Renderers, e depois por Bridge, Adapter, Parser e Data connectors conforme necessário.

Em muitos casos, o conector Native não precisa decidir o que a interação significa. Seu papel é vincular a fonte de interação do sistema ao caminho de interação da window. O sistema relata que algo aconteceu. O conector Native torna esse relato utilizável por Layer 2. O restante do Stack pode então rotear, transformar e lidar com a interação de acordo com suas próprias responsabilidades.

Isso mantém a fronteira inferior limpa. O conector Native dá ao input de interação um caminho para dentro do Stack sem exigir que o sistema entenda as camadas superiores, e sem exigir que as camadas superiores se comportem como se fossem o sistema.

### Preservando a fronteira

Um conector Native deve preservar a fronteira entre a window e o sistema. Ele deve expor a funcionalidade do sistema de que a window precisa, mas não deve apagar a distinção entre as duas camadas.

É aqui que bindings são especialmente úteis como conceito. Um binding permite acesso sem identidade. A window pode usar funcionalidade do sistema sem se tornar o sistema. O sistema pode fornecer comportamento sem se tornar a window. O conector define a relação entre os dois.

Essa fronteira é o que permite que CatalystUI descreva uma window consistentemente em diferentes ambientes. Um sistema pode fornecer uma window desktop tradicional. Outro pode fornecer um terminal. Outro pode fornecer um canal de output específico de dispositivo. Outro pode fornecer um ambiente remoto ou virtualizado. Os bindings nativos podem diferir, mas o papel do conector continua o mesmo.

O conector Native vincula Layer 2 a Layer 1 para que a window possa existir, operar, receber interações e entregar output dentro do sistema que a sustenta.

### Por que o conector importa

O conector Native impede que o Stack confunda uma window com o sistema que a fornece. Sem esse conector, Windows precisaria conter diretamente comportamento específico de sistema, ou Systems precisaria entender o conceito de nível mais alto de window. Qualquer direção borraria a fronteira entre o ponto de delivery e o ambiente que torna a delivery possível.

Ao definir o conector Native, o Modelo dá a essa transição um lugar apropriado.

Windows continua responsável pelo contexto delimitado pelo qual output e interaction passam. Systems continua responsável pelo ambiente subjacente, serviços, dispositivos e comportamento nativo. O conector Native lida com o binding entre os dois.

Esse é o conector explícito final do Stack. É onde a interface modelada alcança o sistema abaixo dela. Ele pode parecer acesso de plataforma. Pode ser implementado por bibliotecas nativas, chamadas de sistema operacional, APIs de dispositivo ou serviços de runtime. Mas por baixo dessas descrições familiares, seu propósito é mais claro e simples.

O conector Native fornece bindings.

Ele vincula a window ao sistema, permitindo que output saia do Stack e interaction entre nele. Ao fazer isso, completa o caminho explícito entre a interface modelada e o ambiente real em que essa interface precisa viver.
