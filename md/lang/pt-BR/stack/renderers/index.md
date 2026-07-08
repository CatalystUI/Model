<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 5.6 The Stack :: Renderers

## Discussão aprofundada

### A camada transformacional

**Renderers** são a camada em que o estado organizado da interface é transformado em uma forma pronta para output. Layer 4 fornece graphs e frames: um contexto operacional preparado que descreve o que deve ser enviado para baixo, como está organizado e que estado corrente deve ser representado. Layer 3 recebe esse contexto preparado e o converte em uma forma adequada para entrega por uma window e, eventualmente, pelo system.

Essa camada é chamada de rendering porque realiza a transformação ativa da representação da interface em output perceptível. Um renderer não apenas armazena a interface, interpreta seu conteúdo original ou gerencia suas relações entre components. Sua responsabilidade é pegar o resultado preparado das camadas superiores e produzir o output específico de domínio necessário às camadas inferiores do Stack.

### Rendering como conversão

Em CatalystUI, rendering não se limita a gráficos. Um renderer visual pode converter estado preparado da interface em pixels, comandos de desenho, texturas, glifos ou outro output visual. Um renderer auditivo pode converter estado preparado em formas de onda, amostras, faixas ou output de áudio mixado. Um renderer tátil pode converter estado preparado em padrões hápticos. O domínio específico pode mudar, mas o papel da camada permanece o mesmo: rendering converte representação organizada da interface em output que o sistema pode entregar.

Essa distinção mantém o Modelo mais amplo do que o pensamento tradicional de interfaces gráficas de usuário. Um renderer não é definido por desenhar ou não em uma tela. Ele é definido por transformar estado preparado da interface em uma forma de output de nível inferior. O resultado pode eventualmente ser visto, ouvido, sentido ou percebido de outra forma, mas em Layer 3 o foco é a própria transformação.

### Relação com Graphs & Frames

Renderers dependem de **Graphs & Frames** porque não devem ser responsáveis por compreender todo o modelo da interface. Layer 4 resolve o contexto operacional corrente, organiza components, prepara limites, determina estado relevante e fornece um frame adequado para rendering. Layer 3 então transforma esse frame preparado em uma forma pronta para output.

Essa separação importa porque organização e rendering são responsabilidades diferentes. Um graph pode saber como components se relacionam entre si, e um frame pode saber o que a passagem corrente deve conter. Um renderer deve saber como transformar esse contexto preparado na representação de output apropriada. Quando essas responsabilidades permanecem separadas, o renderer pode permanecer especializado e eficiente sem se tornar o gestor global da interface.

### Relação com Windows

Renderers também dependem de **Layer 2: Windows** porque output renderizado precisa de um alvo de entrega. Um renderer pode produzir comandos, buffers, streams ou outras representações prontas para output, mas esses resultados ainda precisam de algum lugar para ir. A window fornece a visão, canal ou superfície de entrega delimitada por meio da qual o output renderizado pode ser levado em direção ao system.

Isso torna o renderer o ponto ativo de conversão entre o modelo superior da interface e o modelo inferior de entrega. Acima dele, o Stack se preocupa principalmente com significado, usabilidade, organização e estado ativo. Abaixo dele, o Stack se preocupa com passar output por uma window e para dentro do system. Layer 3 fica entre essas preocupações e converte uma na outra.

### Responsabilidade específica do domínio

Renderers são específicos do domínio por natureza. Um renderer precisa entender o tipo de output que está produzindo porque domínios diferentes exigem formas diferentes de transformação. Output visual, output auditivo, output tátil e outras formas sensoriais não compartilham os mesmos requisitos de entrega, mesmo quando são produzidos a partir do mesmo estado conceitual de interface.

Isso não significa que as camadas superiores precisem ser reescritas para cada domínio. Uma das forças do Stack é que as camadas superiores podem descrever conteúdo, interação, organização e estado de forma consistente enquanto permitem que renderers se especializem no ponto em que a conversão específica de domínio se torna necessária. O renderer é onde essa especialização se torna explícita.

Uma única interface também pode envolver mais de um renderer quando várias formas de output são tratadas separadamente. Nesses casos, cada renderer é responsável pela transformação exigida por seu próprio domínio, enquanto o Stack ao redor preserva o fluxo maior da interação.

### Rendering e perceptibilidade

Um renderer prepara output para percepção, mas não é a mesma coisa que percepção em si. O usuário não percebe o renderer diretamente. O renderer produz uma forma que pode ser passada por uma window e um system até se tornar perceptível por meio de um dispositivo, canal ou output físico.

Essa distinção é importante porque rendering ainda faz parte do processo de transformação do lado do computador. Um renderer visual pode produzir dados de pixels, mas o usuário percebe luz de uma tela. Um renderer auditivo pode produzir amostras de áudio, mas o usuário percebe som por alto-falantes ou fones de ouvido. Layer 3 prepara o output; as camadas inferiores o entregam.

### Papel no fluxo de cima para baixo

No fluxo de cima para baixo, Renderers recebem um frame preparado de Layer 4 e o convertem em forma pronta para output. Este é o ponto em que o modelo ativo da interface começa a deixar a organização abstrata dos components e a entrar no caminho concreto de entrega do system.

O renderer pode transformar estado de component em operações de desenho, buffers de áudio, instruções hápticas ou outra representação específica de domínio. Depois que essa transformação acontece, o resultado é passado à camada Window, que fornece o canal ou visão delimitada por meio da qual o system pode entregar o output.

### Papel no fluxo de baixo para cima

No fluxo de baixo para cima, Renderers também podem participar da interpretação ou transformação de detalhes de interação antes que eles retornem às camadas superiores. Uma interação pode chegar do system por uma window em uma forma que precisa ser ajustada, traduzida, associada a uma região renderizada ou convertida em uma representação que o graph e o frame possam rotear.

Isso não torna o renderer o tratador final da interação. Essa responsabilidade pertence ao control apropriado em Layer 5. No entanto, como o renderer entende como a interface foi transformada em output, ele pode fornecer contexto necessário para reverter ou mapear parte dessa transformação. Por exemplo, pode ajudar a relacionar uma interação de nível inferior a uma posição renderizada, região de output, ponto temporal ou alvo específico de domínio antes que Layer 4 a roteie para cima.

### Por que a camada importa

Renderers impedem que o Stack trate output como consequência direta de objetos organizados da interface. Um frame pode descrever o que deve ser representado, mas não se torna automaticamente output perceptível. Algo precisa transformar esse contexto preparado em uma forma que as camadas inferiores possam entregar. Layer 3 fornece essa transformação.

Ao separar Renderers tanto de Graphs & Frames quanto de Windows, o Modelo preserva uma divisão limpa de responsabilidades. Graphs & Frames organiza o contexto corrente da interface. Renderers convertem esse contexto em forma pronta para output. Windows fornece o canal delimitado pelo qual esse output chega ao system. Essa distinção permite que CatalystUI descreva rendering através dos domínios sem reduzir rendering a gráficos, forçar windows a realizar transformação ou exigir que objetos superiores da interface saibam como serão entregues no fim.
