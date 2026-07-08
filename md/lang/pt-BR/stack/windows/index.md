<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 5.7 The Stack :: Windows

## Discussão aprofundada

### A camada de entrega delimitada

**Windows** são a camada em que output renderizado recebe um contexto de entrega delimitado. Layer 3 transforma estado preparado da interface em forma pronta para output, mas esse output ainda precisa de um lugar, canal ou visão definidos por meio dos quais possa ser entregue pelo system. Layer 2 fornece esse limite.

Uma window deve ser entendida como um contexto lógico de entrega, não apenas como uma caixa visual em uma tela. Em um ambiente gráfico, uma window normalmente aparece como uma região visível gerenciada por um sistema operacional. No Modelo, porém, o conceito é mais amplo: uma window é o contexto voltado ao system por meio do qual output pode ser fornecido e interação pode ser recebida. Ela define onde o resultado renderizado pertence dentro do sistema ao redor.

### Uma visão para dentro do sistema

A window atua como uma visão para dentro do system. Ela não cria o system e não substitui o renderer. Em vez disso, fornece o contexto delimitado onde o output do renderer pode ser conectado à entrega em nível de sistema. Esse limite pode envolver posição, tamanho, foco, visibilidade, contexto de dispositivo, canal de output ou outra forma de escopo definido pelo system.

Isso importa porque output renderizado não existe para o usuário em isolamento. Ele precisa ser entregue em algum lugar. Um renderer pode produzir comandos visuais, amostras de áudio, instruções hápticas ou outro output específico de domínio, mas esses resultados ainda precisam ser associados a um contexto reconhecido pelo system. A window fornece essa associação.

Em interfaces visuais, isso é fácil de reconhecer porque a window pode corresponder a uma área retangular em uma tela. Em outros domínios, o mesmo papel conceitual pode ser cumprido por uma sessão de linha de comando, contexto de output de áudio, canal de dispositivo, viewport virtual ou outra interface delimitada voltada ao system. A característica definidora não é a aparência visual. A característica definidora é que a window fornece o limite de entrega entre output renderizado e system.

### Relação com Renderers

Windows recebem output de Renderers, mas não realizam rendering por conta própria. Rendering é a transformação de estado preparado da interface em forma pronta para output. Windowing é o ato de dar a esse output um contexto de sistema delimitado por meio do qual possa ser entregue.

Essa distinção impede que Layer 2 absorva as responsabilidades de Layer 3. Um renderer deve decidir como estado organizado da interface se torna pronto para output. Uma window deve fornecer o lugar ou canal voltado ao system para onde esse output pode ser enviado. O renderer transforma; a window contém, recebe e encaminha.

Isso também permite que diferentes renderers apontem para diferentes tipos de window. Um renderer visual pode apontar para uma window gráfica, enquanto um renderer auditivo pode apontar para um contexto de output de áudio. A implementação específica pode variar por sistema e domínio, mas a responsabilidade em camadas permanece consistente.

### Relação com o System

Windows dependem de **Layer 1: Systems** porque normalmente são criadas, gerenciadas, limitadas ou reconhecidas pela plataforma ao redor. Um system pode determinar como windows são criadas, como recebem input, como expõem canais de output, quais recursos podem acessar e como interagem com hardware ou serviços de nível inferior.

Isso não torna a window idêntica ao system. O system é o ambiente operacional mais amplo que fornece acesso a hardware, serviços de dispositivo, agendamento, permissões, drivers e comportamento de plataforma. A window é um contexto lógico delimitado dentro desse ambiente. É o contexto voltado à interface que permite que output renderizado e interação passem entre o Stack e o system.

Ao separar Windows do System, o Modelo evita tratar todo detalhe de plataforma como parte do limite da interface. A window representa o contexto específico voltado ao system usado pela interface. O system representa o ambiente maior que torna esse contexto possível.

### Entrega de output

No fluxo de cima para baixo, a window recebe representação pronta para output do renderer e a passa em direção ao system. Este é o estágio em que output renderizado não está mais apenas preparado pela interface; ele é atribuído a um contexto de entrega que o system pode usar.

A window pode gerenciar limites, foco, buffering, visibilidade, estado de canal ou outras condições de entrega dependendo do domínio e da implementação. Esses detalhes afetam como o output se move para dentro do system, mas não mudam o papel primário da camada. A window fornece o limite por meio do qual output renderizado pode se tornar output de sistema.

Depois que o output passa pela window, o system pode levá-lo em direção ao dispositivo, serviço ou processo físico relevante que permite ao usuário percebê-lo. A window, portanto, fica próxima da perceptibilidade, mas não é a percepção em si. Ela permanece parte do fluxo do lado do computador.

### Entrada de interação

No fluxo de baixo para cima, a window é a primeira camada explícita do Stack em que interação fornecida pelo system se torna disponível para a interface modelada. O system pode detectar uma tecla pressionada, movimento de ponteiro, evento de toque, sinal de dispositivo, comando de áudio ou outra forma de input. A window recebe essa interação dentro de seu próprio contexto delimitado e a encaminha para cima para roteamento e tratamento adicionais.

Isso torna a window central para a interação porque ela fornece contexto para a ação. Uma interação não é apenas que algo aconteceu, mas que aconteceu dentro de um limite específico voltado ao system. Foco, posição, tempo, origem do dispositivo, canal ou contexto ativo podem determinar como o restante do Stack deve entender e rotear a interação.

A window normalmente não decide o significado final da interação. Essa responsabilidade pertence mais acima no Stack, especialmente depois que a interação alcança o control apropriado. O papel da window é receber a interação do system, associá-la ao limite correto e passá-la para cima em uma forma que o restante do Stack possa continuar processando.

### Independência de domínio

Windows são independentes de domínio da mesma forma que o restante do Stack é independente de domínio. A palavra “window” muitas vezes é associada a gráficos, mas em CatalystUI ela se refere a qualquer contexto delimitado voltado ao system para output e interação. O domínio determina que tipo de output e input a window carrega; a posição no Stack determina que papel a window desempenha.

Isso permite que a mesma camada descreva windows gráficas, sessões de texto, canais de áudio, contextos de output tátil ou outras formas de entrega de interface sem mudar o Modelo. Cada implementação pode ter requisitos de sistema diferentes, mas cada uma cumpre a mesma responsabilidade conceitual: fornece o limite pelo qual output renderizado e interação de sistema passam.

### Por que a camada importa

Windows impede que o Stack trate output renderizado como se ele alcançasse o usuário automaticamente. Um renderer pode transformar estado da interface em forma pronta para output, mas esse output ainda precisa de um contexto voltado ao system. Layer 2 fornece esse contexto.

Ao separar Windows tanto de Renderers quanto do System, o Modelo preserva um caminho de entrega limpo. Renderers transformam estado preparado da interface em representação pronta para output. Windows fornece o contexto delimitado pelo qual essa representação entra no system. O System então realiza o trabalho de nível inferior necessário para entregar output e receber input. Essa distinção permite que CatalystUI descreva entrega de interface através de plataformas e domínios sem reduzir windows a retângulos visuais ou forçar renderers a gerenciar comportamento em nível de plataforma.
