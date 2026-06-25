# 5.2 The Stack :: Digital Data

## Discussão aprofundada

### A primeira camada explícita

**Digital Data** é a primeira camada explícita do Stack. Ela representa conteúdo, estado ou um recurso depois que entrou no fluxo ativo da interface em uma forma legível por computador, mas antes que o Modelo tenha aplicado Structure & Semantics ou o tenha transformado em components, layout, rendering ou apresentação. É o ponto em que a disponibilidade retida se torna algo com que o Stack pode começar a trabalhar diretamente.

Essa camada é explícita porque o Modelo agora pode descrever o recurso como parte do processo da interface. Enquanto Data Storage explica onde algo pode persistir fora do fluxo ativo, Digital Data explica a representação ativa que foi lida, recebida, carregada, transmitida em stream, gerada ou de outro modo disponibilizada ao Stack. Ela não está mais apenas disponível em algum lugar. Agora está presente em uma forma que o sistema pode processar.

### Representação legível por computador

Digital Data é definida por sua capacidade de ser representada em binário e processada por uma máquina. Nesta camada, o recurso pode ser mantido como bytes, texto codificado, uma resposta recebida, um buffer de memória, um stream ou outra representação legível por máquina. O contêiner exato é menos importante do que o papel que desempenha: é a forma ativa do recurso antes da interpretação.

Isso significa que Digital Data não deve ser confundida com significado, estrutura ou apresentação. Uma sequência de bytes pode conter um documento, imagem, comando, configuração ou arquivo de áudio, mas Layer 7 ainda não descreve como essa sequência deve ser compreendida. Ela apenas estabelece que o conteúdo existe dentro do Stack em uma forma que o sistema pode acessar e passar para a próxima camada.

### Antes de Structure and Semantics

Digital Data fica imediatamente acima de **Layer 6: Structure & Semantics** porque representa o material que Structure & Semantics irá interpretar. Até que essa interpretação aconteça, o Stack ainda não identificou as regras, relações, campos, seções ou significados contidos na representação. A recurso talvez já siga um formato, mas o Modelo ainda não aplicou esse formato.

Um documento armazenado pode já ser válido segundo seu formato, e um arquivo pode já conter conteúdo organizado, mas Layer 7 ainda não modela essa organização como structure compreendida. No momento em que o Stack começa a aplicar regras sobre como a representação deve ser lida, o fluxo se moveu para Structure & Semantics. Digital Data, portanto, não é sem significado; ela simplesmente ainda não foi interpretada dentro do Stack.

### O ponto de virada superior

Digital Data atua como o ponto de virada superior do Stack explícito. No fluxo de cima para baixo, é onde o Stack começa a transformar uma representação legível por computador em algo que o usuário poderá eventualmente perceber ou com que poderá interagir. O fluxo começa com uma representação ativa e então desce por interpretação, formação de components, organização, rendering, windowing e entrega pelo sistema.

No fluxo de baixo para cima, Digital Data é onde o resultado de uma interação volta a ser legível por máquina. Uma ação do usuário pode ser roteada, tratada e convertida em uma mudança dentro da interface. Essa mudança pode então subir pelo Stack até se tornar Digital Data: uma representação ativa que pode ser retida, transmitida, comparada, regenerada ou devolvida a Data Storage. Dessa forma, Layer 7 participa das duas direções do ciclo da interface.

### Digital Data e Domains

Digital Data muitas vezes está intimamente relacionada ao domínio **Symbolic** porque normalmente existe antes que uma forma sensorial específica tenha sido escolhida. Um arquivo de texto, por exemplo, pode depois ser exibido visualmente, falado em voz alta, traduzido para outro formato ou processado sem ser apresentado diretamente. Em Layer 7, o fato importante não é como o usuário acabará percebendo a representação, mas que ela está disponível para o Stack interpretar.

Isso não significa que Digital Data só possa ser simbólica. Um recurso pode conter conteúdo visual, auditivo, tátil ou multissensorial em sua forma codificada. No entanto, a camada em si descreve a representação legível por computador antes que o Stack ativo a tenha transformado em um resultado perceptível ou interativo. Domains identificam o tipo de informação que está sendo tratado; o Stack identifica onde essa informação está no fluxo.

### Por que a camada importa

Digital Data impede que o Modelo pule o primeiro passo ativo do trabalho de interface. Sem essa camada, o Stack passaria diretamente do armazenamento para a interpretação, como se recursos armazenados carregassem automaticamente uma structure utilizável no momento em que fossem acessados. Em sistemas reais, não é isso que acontece. Algo primeiro precisa existir em uma forma ativa legível por máquina antes de poder ser analisado, validado, organizado, adaptado, renderizado ou apresentado.

Ao separar Digital Data tanto de Data Storage quanto de Structure & Semantics, o Modelo preserva três distinções importantes. Data Storage explica persistência fora do fluxo ativo. Digital Data explica a representação ativa legível por computador dentro do fluxo. Structure & Semantics explica a interpretação dessa representação. Manter essas responsabilidades separadas permite que o Stack descreva o comportamento da interface com maior precisão, especialmente quando o mesmo recurso armazenado pode ser lido, interpretado, transformado ou apresentado de mais de uma maneira.
