<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 7. Interações

## Visão geral de alto nível

Neste ponto, podemos descrever uma interface de usuário por meio do Modelo CatalystUI com muito mais clareza do que antes. Podemos identificar o fluxo de informação, classificar essa informação em domínios, rastreá-la pelo Stack e explicar como connectors a movem e transformam de uma camada para a próxima. Ao fazer isso, muito do mistério por trás das interfaces de usuário começa a se dissolver. Podemos ver onde a informação começa, para onde vai, como muda e como finalmente chega ao usuário.

Então, terminamos? Ainda não. Há uma parte essencial do quebra-cabeça que ainda não abordamos completamente: _você!_

A parte mais importante de qualquer interface de usuário é a pessoa que a usa. Sem o usuário, a interface perde seu propósito. Nesse ponto, estaríamos simplesmente descrevendo uma máquina se comunicando com outra, como um servidor enviando dados para uma API, ou um programa passando instruções para outro. Essas trocas podem ser úteis, mas não são o assunto completo do Modelo. Uma interface de usuário existe porque uma pessoa precisa perceber, entender ou escolher algo, ou responder de alguma forma. Mesmo que seu gato suba no teclado, invoque os Deuses Gatos e devolva a terra ao trono legítimo deles, o ponto continua o mesmo: algo fora do sistema agiu sobre ele, e a interface agora precisa responder.

É por isso que a “Human Interface” importa. Já a identificamos como o ponto final implícito na parte inferior do Stack, mas agora precisamos olhar com mais cuidado para o que acontece ali. A informação não simplesmente chega ao usuário e para. O usuário pode responder. Ele pode clicar, falar, mover-se, digitar, ouvir, ignorar, hesitar, entender errado ou agir de uma forma que o sistema não esperava. Essa resposta se torna parte do fluxo.

Por causa disso, há mais um tipo de dado que precisamos identificar e acompanhar: _interação_. Uma interação é a troca que ocorre quando a informação chega ao usuário, o usuário responde, e o sistema recebe essa resposta como parte do fluxo contínuo. É o ponto em que o Modelo deixa de ser apenas sobre apresentação e passa a ser sobre participação. A interface não está mais apenas mostrando informação a uma pessoa; ela está permitindo que essa pessoa afete o que acontece depois.

Mais diretamente, _uma interação é a intenção por trás de uma ação_. O clique, toque, gesto, comando, movimento ou palavra falada é apenas a parte visível dela. Por trás dessa ação há algo que o usuário está _tentando_ fazer. Ele quer abrir um menu, avançar, enviar um formulário, pausar uma música, dispensar um aviso, acender uma luz ou simplesmente descobrir o que está acontecendo. O sistema pode receber apenas um sinal, mas o usuário não está apenas enviando um. O usuário está fazendo uma solicitação.

### Frustrações modernas com tecnologia

É aqui que muitas frustrações modernas com tecnologia começam. Um usuário age com uma intenção, mas o sistema interpreta essa intenção incorretamente, responde devagar demais ou a ignora por completo. Todos já sentimos isso: um botão que parece clicável mas não faz nada, uma página que parece travada, um dispositivo que nos ouviu mas não nos entendeu, ou uma interface que tecnicamente funcionou mas não respondeu de uma forma que pudéssemos perceber. Em cada caso, o usuário fez uma solicitação, mas o sistema falhou em responder claramente. Quando isso acontece, a frustração não é um mistério. É o resultado natural de uma interação mal compreendida, atrasada ou deixada sem solução.

É por isso que interações são tão especiais. Diferentemente de muitas outras formas de dados, elas são tanto bidirecionais quanto transformadoras. Elas se movem do sistema para o usuário, depois do usuário de volta para o sistema. Elas mudam enquanto se movem. O que começa como output pode virar percepção, percepção pode virar intenção, intenção pode virar ação, e essa ação pode virar input. O sistema pode então responder, iniciando o ciclo novamente. Isso torna a interação diferente de um arquivo armazenado, uma imagem renderizada ou um único som. Interação não é simplesmente dado sendo carregado para algum lugar. É dado sendo moldado por escolha.

Nesse sentido, interações apontam para algo profundamente humano. Não somos máquinas recebendo informação passivamente. Nós percebemos, questionamos, escolhemos, hesitamos, entendemos errado, nos corrigimos, tentamos de novo e às vezes apertamos o mesmo botão dezessete vezes porque _com certeza_ dessa vez vai funcionar. Uma interação existe porque uma pessoa tem agência. Ela é definida pela capacidade do usuário de escolher e pela capacidade do sistema de receber essa escolha e responder a ela. Sem escolha, não há verdadeira interação. Há apenas saída.

É claro que a máquina também pode moldar a troca. Em muitos casos, a interação começa com o sistema apresentando algo ao usuário: uma tela, som, aviso, alerta, vibração, porta ou outro sinal. O sistema também pode escolher parar a troca recusando entrada, fechando uma janela, atingindo timeout ou ignorando uma solicitação. Mas mesmo assim, a interação não desapareceu de verdade. Se o sistema não responde, o usuário pode esperar, tentar de novo, ficar confuso, frustrar-se, ir embora, reiniciar o dispositivo ou decidir nunca mais usar o programa. Tomando emprestada livremente a linguagem do movimento, uma ação simplesmente não desaparece porque o sistema se recusa a continuá-la. O usuário ainda se move. A experiência ainda muda. O fluxo ainda importa.

É por isso que interfaces de usuário não podem ser projetadas como se computadores fossem o centro do universo. Eles não são. Computadores existem para servir propósitos humanos. Eles nos ajudam a criar, aprender, organizar, comunicar, adorar, construir, imaginar e resolver problemas que de outra forma ficariam fora de alcance. Quando uma interface esquece o usuário, ela se torna fria, frustrante e desnecessariamente difícil. Mas quando honra a intenção do usuário, responde claramente e leva a informação pelo caminho certo, a tecnologia começa a parecer menos uma parede e mais uma ferramenta.

Esse é o coração do Modelo CatalystUI. Ele nos dá uma forma de ver toda a jornada: a informação sendo armazenada, os domínios aos quais ela pertence, as camadas pelas quais passa, os connectors que a transformam e a interação que a traz de volta para a pessoa que iniciou a troca. Ele nos ajuda a parar de tratar interfaces de usuário como pilhas de widgets, windows, APIs, renderers e dispositivos desconectados, e em vez disso reconhecê-las como sistemas completos de comunicação entre _pessoas_ e _máquinas_.

### O propósito por trás de tudo

Por anos, o sonho foi simples, mas teimoso: tecnologia não deveria precisar parecer tão quebrada. Um programa não precisa ficar inchado, frágil ou preso a uma plataforma só para nos dar uma forma clara de interagir com a máquina. Um framework não precisa esconder ideias simples atrás de camadas de confusão. Uma interface de usuário não precisa obrigar a pessoa a pensar como o computador. É importante que um computador seja projetado para entender a pessoa. CatalystUI existe porque esse sonho não é impossível. Ele só precisava de um modelo claro o suficiente para descrever o que realmente estava acontecendo.

O Stack nos dá a estrutura. Os domínios nos dizem com que tipo de informação estamos lidando. Os connectors explicam como essa informação se move e muda. As interações nos lembram por que qualquer uma dessas coisas importa em primeiro lugar. Juntos, eles formam uma maneira de projetar computadores em torno das pessoas novamente: não em torno de tendências, não em torno de decisões arbitrárias de frameworks, não em torno das limitações que nos _disseram_ para aceitar, mas em torno do _fluxo real de informação_ entre seres humanos e seus sistemas.

É por isso que o Modelo CatalystUI é tão importante. É por isso que anos de trabalho, amor, coração, ódio, frustração e esperança foram colocados nele. E é por isso que fico feliz por ter você aqui. Bem-vindo ao universo Catalyst. Fico feliz que você tenha conseguido me acompanhar em pelo menos uma parte da minha aventura. Espero que isso tenha moldado ao menos um pequeno pedaço da sua percepção do mundo para melhor.

> Para frente e para cima, meus fiéis companheiros.
