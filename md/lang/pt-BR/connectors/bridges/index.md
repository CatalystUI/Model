# 6.4 Connectors :: Bridge

## Discussão aprofundada

### Do contexto ao rendering

O conector **Bridge** fica entre **Layer 4: Graphs & Frames** e **Layer 3: Renderers**. Ele é responsável por levar interface data organizada do graph e do frame para o renderer, onde esses dados podem iniciar sua conversão em output perceptível.

Layer 4 dá ao sistema contexto organizado. Ele sabe quais componentes existem, como eles se relacionam entre si, quais limites ocupam e como a interface ativa deve ser entendida como um todo. Layer 3 é responsável por rendering. Ele pega dados preparados e os converte em uma forma que eventualmente pode ser entregue por uma window e um system.

O conector Bridge existe porque essas duas camadas não falam naturalmente a mesma língua.

Um graph organiza relações. Um frame define o contexto ativo e os limites. Um renderer produz output. O conector Bridge é o ponto de travessia entre essas preocupações. Ele não precisa ser elaborado nem visível. Na maioria dos casos, ele simplesmente expõe a interface data organizada ao renderer e permite que informações de interação passem de volta para cima quando necessário. Nesse sentido, o conector Bridge faz exatamente o que seu nome sugere. Ele faz a ponte.

### Levando o Frame adiante

No fluxo top-down, o conector Bridge recebe os resultados preparados de Layer 4 e os leva para Layer 3. Isso não significa que Bridge seja responsável por organizar componentes, calcular layouts, rotear controles ou renderizar output. Essas responsabilidades pertencem às camadas ao redor. Bridge existe no meio para que essas responsabilidades possam permanecer separadas.

Um frame pode já ter preparado os limites ativos da interface. Um graph pode já ter organizado os componentes que pertencem a ele. O conector Bridge pega esse contexto preparado e o apresenta ao renderer em uma forma com que o renderer consiga trabalhar. Isso pode envolver passar referências, entradas de renderização preparadas, informações achatadas de componentes, resource handles, dados prontos para comando ou qualquer outra representação apropriada ao sistema descrito.

A implementação exata pode variar, mas a responsabilidade continua a mesma. O conector Bridge não decide o que a interface significa. Ele não decide como o output final deve ser entregue ao usuário. Ele simplesmente fornece o ponto de travessia onde o contexto de interface organizado se torna dados voltados ao renderer.

É isso que permite que graph e frame continuem focados em organização enquanto o renderer continua focado em rendering.

### Um conector discreto

O conector Bridge muitas vezes parecerá mais discreto que os conectores acima dele. O conector Data pode acessar e interpretar digital data. O conector Parser pode transformar estruturas em componentes mutáveis. O conector Adapter pode colocar esses componentes em graphs e frames. Em comparação, o conector Bridge pode parecer quase vazio.

Esse vazio faz parte do ponto.

Um conector Bridge normalmente não deve realizar mais trabalho do que o necessário. Seu principal propósito é permitir que graph e frame se comuniquem com o renderer sem forçar nenhuma das camadas a absorver as responsabilidades da outra. Se o graph começa a agir como um renderer, o Modelo perde clareza. Se o renderer começa a agir como um graph, o Modelo perde a capacidade de descrever organização separada de output de forma limpa.

O conector Bridge protege essa fronteira.

Ele pode preparar dados para consumo do renderer, mas não deve se tornar o renderer. Ele pode expor a interface organizada ao renderer, mas não deve se tornar o graph. Sua utilidade vem de permitir que duas camadas vizinhas permaneçam distintas e ainda assim consigam trabalhar juntas.

### Passando interações de volta para cima

O conector Bridge também é importante no fluxo bottom-up. Quando uma interação vem do sistema, ela se move para cima pelas camadas inferiores até alcançar o ponto em que a interface organizada consegue dar sentido a ela. Em muitos casos, o renderer pode receber ou traduzir a interação em uma forma que o Stack consiga continuar roteando, mas o renderer geralmente não sabe qual componente final deve lidar com ela.

Essa responsabilidade pertence a uma parte mais alta do Stack.

Por isso, o conector Bridge frequentemente pega uma interação e a passa para Layer 4 com muito pouca modificação. O graph e o frame são as camadas que podem determinar onde a interação pertence. Eles conhecem o contexto organizado. Podem determinar qual componente está ativo, qual controle ocupa a região relevante, qual relação de layout importa ou qual parte da interface deve receber a interação.

É por isso que o conector Bridge não deve ser confundido com um roteador de interações. Ele pode carregar a interação e preservar qualquer informação necessária ao routing, mas geralmente não é a camada que executa o routing em si. Bridge apenas garante que a interação possa atravessar de informação voltada ao renderer de volta para contexto voltado ao graph.

No fluxo top-down, Bridge ajuda a alimentar o renderer. No fluxo bottom-up, ajuda a devolver interações ao lugar onde podem ser roteadas com significado.

### O conector mais difícil de ver

O conector Bridge foi um dos conectores mais difíceis de identificar porque seu propósito pode parecer externamente vago. Ele não tem a relação óbvia com armazenamento do conector Data. Não tem a transformação clara do conector Parser. Não tem o papel organizacional do conector Adapter. À primeira vista, pode parecer uma passagem fina entre duas camadas que já parecem próximas o suficiente para se comunicar diretamente.

No entanto, sem o conector Bridge, o Stack não teria uma forma explícita de passar de contexto de interface organizado para rendering. Um graph precisaria saber como alimentar diretamente um renderer, ou um renderer precisaria saber como interpretar graphs e frames por conta própria. Qualquer direção colapsaria a fronteira entre organização e output.

O conector Bridge dá um nome a essa fronteira.

Ele pode nem sempre conter muita lógica, e em algumas implementações pode parecer muito pequeno, mas o papel conceitual é essencial. Ele explica como a interface organizada atravessa para o processo de rendering sem forçar Layer 4 e Layer 3 a se tornarem a mesma coisa.

### Preservando a fronteira

Um conector Bridge deve preservar a fronteira entre contexto e rendering. A informação que ele passa para baixo deve permanecer fiel à interface organizada preparada por Layer 4, ainda sendo utilizável por Layer 3. A informação que ele passa para cima deve preservar os detalhes necessários para que graph e frame entendam o que ocorreu, ainda permitindo que o renderer permaneça focado em sua própria responsabilidade.

Isso não exige que Bridge preserve cada detalhe interno de qualquer camada. Um renderer pode não precisar do graph completo. Um graph pode não precisar de todo detalhe específico do renderer. O conector Bridge decide o que precisa atravessar a fronteira para que cada lado continue seu trabalho sem assumir o papel do outro.

Isso torna o conector especialmente importante em sistemas onde o renderer tem requisitos muito específicos. O graph e o frame não devem precisar conhecer cada detalhe desses requisitos. O renderer não deve precisar entender a organização inteira da interface. O conector Bridge existe para que os dois lados possam se comunicar sem se emaranhar.

### Por que o conector importa

O conector Bridge impede que o Stack confunda contexto de interface organizado com output renderizado. Sem esse conector, graphs e frames seriam forçados a falar diretamente em termos de renderer, ou renderers seriam forçados a entender a estrutura completa da interface ativa.

Ao definir o conector Bridge, o Modelo dá a essa transição um lugar apropriado.

Graphs & Frames continua responsável por organização, contexto, fronteiras, routing e preparação. Renderers continua responsável por converter informação preparada em forma pronta para output. O conector Bridge lida com o movimento entre os dois.

Esse é o ponto do Stack em que informação organizada atravessa para o processo de rendering. Ele é frequentemente discreto. É frequentemente fino. Pode parecer quase invisível. Mas sem ele, o Stack perde a conexão explícita entre a interface como organizada e a interface como renderizada. O conector Bridge torna essa travessia possível e depois, felizmente, sai do caminho.
