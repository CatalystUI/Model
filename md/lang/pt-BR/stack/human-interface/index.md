<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 5.9 The Stack :: Human Interface

## Discussão aprofundada

### O limite humano implícito

**Human Interface** é o limite inferior implícito do Stack. Ela representa o usuário: a pessoa que recebe output perceptível do system e produz ações que podem se tornar input de interação. Em termos mais simples, esta camada é você.

Isso pode parecer óbvio, mas importa. O Stack existe para descrever o processo de comunicação entre um usuário e um sistema de informação. Se Data Storage explica o limite onde conteúdo retido pode entrar ou sair do fluxo ativo, Human Interface explica o limite oposto: o lugar onde output do computador finalmente se torna parte da experiência humana, e onde ação humana inicia o caminho de retorno para dentro do system.

Human Interface é implícita porque o Modelo não representa diretamente corpo, mente, atenção, emoções, sentidos, intenções, memórias ou escolhas do usuário. CatalystUI pode descrever como um system entrega output em direção a um usuário e como a ação de um usuário se torna input de interação, mas não finge modelar o ser humano inteiro. Isso seria um pouco ambicioso. Também aterrorizante. O Stack é poderoso, mas não precisa se tornar um livro de psicologia com um renderer anexado.

### O destinatário do output perceptível

No fluxo de cima para baixo, a Human Interface é a destinatária do output perceptível. Digital Data se move pelo Stack explícito, torna-se interpretada, moldada, organizada, renderizada, entregue por uma window e carregada pelo system até finalmente poder ser percebida. Quando esse output alcança os sentidos do usuário, o Stack explícito completou seu caminho descendente.

Isso não significa que o usuário receba Digital Data diretamente. Uma pessoa não percebe naturalmente uns e zeros, buffers de memória, draw calls, amostras de áudio ou eventos de sistema. O usuário percebe o resultado do trabalho do system: luz, som, vibração, movimento, texto, mudança espacial ou outra forma de output sensorial. A Human Interface é onde esse output deixa de ser apenas entregue e começa a ser vivido.

Essa distinção mantém o Modelo honesto. O system pode fornecer output, mas não pode forçar compreensão. Uma tela pode mostrar um botão, um alto-falante pode tocar um som, e um dispositivo pode vibrar, mas o usuário ainda precisa perceber e interpretar esse resultado como humano. O Modelo reconhece esse limite sem tentar definir todo fator pessoal, biológico ou contextual envolvido. Em outras palavras: CatalystUI consegue levar o output até o humano. Não consegue fazer o humano parar de ignorar a notificação. Infelizmente.

### A fonte da interação

No fluxo de baixo para cima, a Human Interface é a fonte da ação. O usuário vê, ouve, sente, entende, reage, decide e então faz alguma coisa. Essa ação pode ser pressionar uma tecla, mover um ponteiro, tocar uma tela, falar um comando, girar um botão, atravessar um campo de sensores ou realizar outro comportamento que o system possa receber.

A ação em si começa fora do Stack explícito. O Modelo não descreve diretamente o processo interno completo que levou o usuário a agir. Ele só começa a modelar o caminho de retorno quando o system recebe o efeito dessa ação. Nesse ponto, a ação se torna input de interação e entra em Layer 1: Systems, onde pode ser passada para cima pelo Stack.

Isso mantém uma distinção limpa entre **ação humana** e **interação de sistema**. Uma ação humana é o que o usuário faz. Input de interação é o que o system recebe dessa ação. Eles são estreitamente relacionados, mas não são idênticos. Uma pessoa pode pretender clicar uma coisa e clicar outra por acidente, ou esbarrar em uma tecla ao tentar pegar outra coisa. O system pode receber ambos, mas apenas um deles provavelmente expressa de forma significativa o intento do usuário. A menos que input acidental fosse o objetivo, caso em que parabéns: a interface entrou em uma fase muito experimental.

### Por que a camada é implícita

Human Interface é implícita pela mesma razão que Data Storage é implícito: ela é exigida pelo fluxo, mas não é modelada diretamente como uma camada explícita de transformação. O Stack depende do usuário, mas não transforma o usuário. Ele não faz parsing do usuário, não renderiza o usuário, não adapta o usuário nem armazena o usuário como component. Provavelmente é melhor assim.

Em vez disso, o Modelo trata a Human Interface como o limite vivo ao redor da extremidade inferior do system. O Stack explícito pode descrever como output é preparado e entregue, e pode descrever como interação recebida viaja para cima. Ele para antes de reivindicar posse sobre a própria experiência humana.

Esse limite é especialmente importante porque um usuário não é apenas outro dispositivo. Uma tela fornece output visual. Um teclado fornece sinais de input. Um usuário percebe, interpreta, escolhe, responde, entende errado, aprende, hesita, comete erros e às vezes clica no botão errado com plena confiança. O Modelo deve respeitar essa diferença. Human Interface está presente, portanto, porque o Stack é construído para comunicação humana, mas é implícita porque o humano não faz parte do processo de transformação do lado da máquina.

### Percepção e intento

A Human Interface completa o ciclo de comunicação ao unir percepção e intento. Em uma direção, o system fornece algo perceptível. Na outra, o usuário responde com uma ação. Isso cria o loop conversacional no centro do CatalystUI: o system fala por output, o usuário responde por interação, e o system processa essa resposta para continuar a troca.

É por isso que a Human Interface não pode ser reduzida a dispositivos de input. Teclado, mouse, touchscreen, microfone, câmera ou controle podem ajudar a capturar interação, mas nenhum deles é o usuário. Eles são caminhos acessíveis ao system pelos quais a ação do usuário pode entrar no Stack. A Human Interface é a pessoa cuja percepção e intento dão significado a esses sinais.

O mesmo vale para dispositivos de output. Um monitor, alto-falante, motor háptico ou outro dispositivo de output pode carregar dados perceptíveis, mas o dispositivo não completa a experiência. A experiência se completa quando o usuário percebe o resultado. Uma tela cheia de pixels perfeitamente renderizados ainda não é uma interface bem-sucedida se o usuário não consegue ver, entender, alcançar, ouvir, sentir ou agir sobre o que foi fornecido.

### Relação com Systems

Human Interface fica diretamente abaixo de **Layer 1: Systems**. A camada System fornece o tratamento explícito final do lado do computador para output e o primeiro tratamento explícito do lado do computador para interação. Human Interface fica além dessa camada como destinatária do output do system e fonte da ação do usuário.

Essa relação define a borda inferior do Stack. No fluxo de cima para baixo, o system entrega output em direção ao usuário. No fluxo de baixo para cima, o system recebe o efeito da ação do usuário. O system é, portanto, a camada explícita final da operação da máquina, enquanto Human Interface é o limite implícito onde operação da máquina encontra experiência humana.

Ao separar essas camadas, o Modelo evita confundir comportamento de dispositivo com experiência do usuário. O system pode saber que uma tecla foi pressionada, um ponteiro se moveu ou um som foi tocado. Ele não sabe automaticamente o que o usuário entendeu, pretendeu, sentiu ou percebeu. Essas realidades humanas pertencem além do Stack explícito, mesmo que o Stack exista para servi-las.

### Acessibilidade e variação humana

Human Interface também lembra ao Modelo que usuários não são máquinas intercambiáveis. Pessoas percebem e agem por meio de diferentes capacidades, sentidos, contextos, ferramentas, limitações, preferências e ambientes. Um usuário pode depender principalmente de output visual. Outro pode depender de output auditivo, feedback tátil, navegação por teclado, leitores de tela, legendas, movimento simplificado, dispositivos alternativos de input ou outras formas de acesso.

Isso não muda a estrutura do Stack. Esclarece por que o Stack importa. Ao separar as camadas, CatalystUI consegue identificar melhor onde ocorre uma falha quando output é entregue mas não é significativamente perceptível, ou quando um usuário tem intento mas não tem um caminho utilizável para expressá-lo. O limite Human Interface mantém visível o propósito de todo o fluxo: o system não está apenas produzindo output; está se comunicando com uma pessoa.

Essa pessoa pode estar cansada, distraída, brilhante, confusa, ter uma deficiência, estar aprendendo, fazendo várias coisas ao mesmo tempo ou tentando terminar algo cinco minutos antes de um prazo. A interface ainda precisa encontrá-la como humana. De preferência sem exigir que ela leia primeiro uma mensagem de erro de quarenta páginas.

### Por que a camada importa

Human Interface impede que o Stack termine na máquina. Sem essa camada implícita, o Modelo pararia em output de sistema e input de sistema, como se o propósito de uma interface fosse apenas mover sinais pelo hardware. Isso perderia o ponto. O propósito do Stack não é apenas produzir output; é tornar possível a comunicação entre um sistema de informação e um usuário.

Ao separar Human Interface de Systems, o Modelo preserva um limite final limpo. Systems entrega output e recebe input. Human Interface percebe output e produz ação. O Stack explícito descreve o processo do lado da máquina entre essas duas direções, enquanto a Human Interface implícita nos lembra para quem o processo existe.

É por isso que Human Interface pertence ao Stack mesmo sem ser numerada. O usuário não é uma camada a ser implementada, renderizada, analisada ou testada com unit tests. O usuário é a razão pela qual as camadas existem. E, supondo que o usuário seja humano, o Modelo funciona lindamente.
