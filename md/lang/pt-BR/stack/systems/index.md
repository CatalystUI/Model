<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 5.8 The Stack :: Systems

## Discussão aprofundada

### A camada explícita mais baixa

**Systems** são a camada explícita mais baixa do Stack. Esta camada representa o ambiente computacional que fornece os serviços, dispositivos e operações subjacentes necessários para que output seja entregue e interação seja recebida. Enquanto Layer 2 define o contexto delimitado por meio do qual output e interação passam, Layer 1 representa o ambiente maior que torna esse contexto possível.

Um system não deve ser entendido apenas como um sistema operacional de desktop. No Modelo CatalystUI, um system é o conjunto organizado de processos e capacidades de plataforma que sustenta a interface em runtime. Pode ser um sistema operacional tradicional, um ambiente embedded, um console, um runtime de navegador, uma plataforma de hardware ou outro contexto computacional gerenciado. A característica definidora não é a categoria do produto. A característica definidora é que o system fornece as capacidades de nível inferior pelas quais a interface pode realmente operar.

### O ambiente operacional

A camada System fornece o ambiente de execução ao redor do Stack explícito. Ela pode gerenciar acesso a hardware, dispositivos de input, dispositivos de output, drivers, permissões, agendamento, memória, arquivos, processos, windows, canais ou outros serviços em nível de plataforma. Esses detalhes variam amplamente entre implementações, mas todos cumprem o mesmo papel conceitual: permitem que a interface se conecte às capacidades reais da máquina ou do sistema de informação.

Isso torna Layer 1 diferente de Layer 2. Uma window é um contexto delimitado voltado ao system usado pela interface. O system é o ambiente maior que cria, possui, reconhece, limita e presta serviços a esse contexto. A window fornece um ponto específico de conexão; o system fornece o mundo em que essa conexão existe.

Por causa disso, a camada System não é apenas uma base passiva. Ela participa ativamente do ciclo da interface. Entrega output renderizado em direção a dispositivos físicos ou lógicos, recebe input desses dispositivos, aplica regras de plataforma e expõe as operações de que as camadas superiores dependem. O Stack pode descrever o fluxo da interface, mas o system fornece o chão operacional sob esse fluxo.

### Relação com Windows

Systems e Windows são estreitamente conectados, mas não são a mesma camada. Uma window recebe output renderizado de Layer 3 e fornece um contexto de entrega delimitado. O system recebe esse output em janela e realiza o trabalho de nível inferior necessário para entregá-lo por dispositivos ou serviços disponíveis.

No fluxo de cima para baixo, a window passa output para o system. O system então lida com o caminho real de entrega: enviando output visual para uma tela, output de áudio para um dispositivo de som, output tátil para um dispositivo háptico, output de texto para um terminal ou outra forma de output para seu canal apropriado. A window define onde o output pertence; o system o carrega para o ambiente capaz de torná-lo perceptível.

No fluxo de baixo para cima, o system recebe ou detecta interação do lado humano da interface. Isso pode vir por teclado, ponteiro, touchscreen, microfone, controle, sensor, botão ou outro caminho de input. O system converte essa atividade física ou em nível de dispositivo em um sinal em nível de sistema que pode ser associado a uma window e passado para cima pelo Stack.

### Entrega de output

A camada System é o estágio explícito final do fluxo de cima para baixo. Quando o output chega a Layer 1, as camadas superiores já interpretaram a representação original, formaram objetos de interface utilizáveis, organizaram esses objetos em um contexto operacional corrente, renderizaram esse contexto em forma pronta para output e o passaram por uma window. O system agora realiza o trabalho em nível de plataforma necessário para disponibilizar esse output à Human Interface.

Isso não significa que o system em si seja o mesmo que a percepção do usuário. O usuário não percebe um sistema operacional diretamente. O usuário percebe o resultado físico ou sensorial disponibilizado por dispositivos e canais gerenciados pelo system. Layer 1, portanto, permanece dentro do processo do lado do computador, enquanto a Human Interface implícita fica além dele como destinatária do output.

Essa distinção mantém o Modelo preciso. O system pode produzir luz por meio de uma tela, som por alto-falantes, vibração por um motor ou outro resultado perceptível por algum dispositivo ou serviço. O system fornece o mecanismo explícito final de entrega; a Human Interface recebe e percebe o resultado.

### Origem da interação

A camada System também é o primeiro estágio explícito do fluxo de baixo para cima. Um usuário realiza uma ação fora do Stack explícito, mas o system é onde essa ação se torna disponível para a interface modelada como input de interação. A ação humana em si pertence à Human Interface implícita. O system recebe o efeito dessa ação por um caminho de input suportado e começa a convertê-lo em algo que o Stack pode processar.

É por isso que o system está intimamente ligado à interação. Uma tecla física pressionada, movimento de ponteiro, gesto de toque, input falado, sinal de controle ou mudança de sensor precisa primeiro ser recebido pelo ambiente computacional antes que as camadas superiores da interface possam responder. O system normalmente não determina o significado final dessa interação. Ele identifica que algo ocorreu, fornece contexto relevante de dispositivo ou plataforma e passa a interação para a window apropriada.

A partir daí, a interação pode viajar para cima pelo Stack. A window a associa a um contexto delimitado, o renderer pode ajudar a traduzi-la ou mapeá-la, o graph e o frame podem roteá-la, e o control apropriado pode finalmente lidar com ela. O system inicia o caminho explícito de retorno, mas o significado da ação é resolvido mais acima no Stack.

### Regras e restrições de plataforma

Systems importam porque toda interface opera dentro de restrições. Um system pode determinar quais dispositivos estão disponíveis, como windows são criadas, como input é entregue, como permissões são concedidas, como canais de output se comportam, quais recursos podem ser acessados e quais operações são suportadas. Essas restrições moldam o que o restante do Stack pode fazer.

No entanto, CatalystUI separa essas preocupações de plataforma do modelo superior da interface. Components não deveriam precisar entender diretamente todo driver ou regra de sistema operacional. Renderers não deveriam precisar gerenciar todo detalhe de hardware. Windows não deveria precisar representar a plataforma inteira. Layer 1 fornece um lugar claro para comportamento em nível de sistema, permitindo que as camadas superiores permaneçam focadas em interpretação, usabilidade, organização e transformação.

Essa separação também permite que o Modelo se aplique a diferentes ambientes. Um aplicativo desktop, app móvel, dispositivo embedded, interface baseada em navegador, ferramenta de linha de comando ou sistema de hardware especializado podem todos ter regras de plataforma diferentes, mas cada um ainda precisa de uma camada system que forneça o ambiente operacional abaixo da interface.

### Relação com a Human Interface

Systems ficam diretamente acima da **Human Interface** implícita. Isso significa que Layer 1 é a camada explícita final antes que output deixe o fluxo modelado do lado do computador e a primeira camada explícita depois que a ação do usuário entra nele. O system é, portanto, o limite entre o ambiente computacional gerenciado e o ser humano que percebe e age.

Esse limite é essencial. O Modelo pode descrever como um system envia output em direção a um dispositivo, mas não modela diretamente a experiência sensorial, biologia, atenção, emoção ou interpretação do usuário. Da mesma forma, o Modelo pode descrever como o system recebe um sinal de input, mas não modela diretamente todo o processo humano que produziu a ação. Essas preocupações pertencem à Human Interface implícita.

Ao colocar Systems em Layer 1, o Stack identifica claramente o ponto explícito mais baixo em que o processo do lado do computador pode ser descrito antes de cruzar para percepção e ação humanas.

### Por que a camada importa

Systems mantém o Stack ancorado na operação real. Sem essa camada, o Modelo descreveria rendering e windows como se entrega de output e recepção de input acontecessem automaticamente. Na prática, toda interface depende de um ambiente subjacente que gerencia dispositivos, recursos, permissões, execução e comportamento de plataforma.

Ao separar Systems de Windows e da Human Interface, o Modelo preserva um limite final limpo. Windows fornece o contexto delimitado para output e interação. Systems fornece o ambiente operacional subjacente que entrega output e recebe input. A Human Interface percebe o output e produz ação. Essa distinção permite que CatalystUI descreva interfaces através de plataformas e domínios sem reduzir o system a um único sistema operacional, a um dispositivo específico ou a um modelo de tela visual.
