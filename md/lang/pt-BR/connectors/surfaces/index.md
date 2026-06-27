# 6.5 Connectors :: Surface

## Discussão aprofundada

### Do rendering à delivery

O conector **Surface** fica entre **Layer 3: Renderers** e **Layer 2: Windows**. Ele é responsável por carregar output renderizado do renderer para a window, onde esse output pode ser colocado dentro de um contexto delimitado fornecido pelo sistema.

Layer 3 é onde a informação é convertida em uma forma pronta para output. O renderer pega os dados preparados pelo graph e pelo frame e produz algo que eventualmente pode ser percebido. Porém, output renderizado ainda precisa de um destino. Precisa de algum lugar para ir, algo a que ser conectado e uma fronteira através da qual o sistema possa entregá-lo.

Esse destino é representado pela camada Windows.

O conector Surface fornece o ponto de travessia entre o renderer e a window. Ele explica como output renderizado é anexado à área utilizável da window, e como o renderer recebe informação suficiente da window para continuar produzindo output corretamente. Sem esse conector, o renderer poderia produzir output, mas o Stack não teria uma explicação explícita de como esse output se conecta à window que o apresenta.

Em termos mais simples, um renderer cria output. Uma window fornece o lugar onde esse output pode ser entregue. O conector Surface permite que os dois trabalhem juntos.

### A área renderizada

Uma surface pode ser entendida como a área utilizável de uma window que recebe output renderizado. Em uma aplicação gráfica tradicional, isso pode ser fácil de imaginar: um renderer desenha na área interna de uma window. Porém, o mesmo princípio se aplica de forma mais ampla. A surface não é simplesmente “a tela”. Ela é o conector que dá ao output renderizado um lugar dentro dos limites da window.

Isso importa porque um renderer geralmente não é dono da window. O renderer pode saber como produzir output, mas a window é a camada que fornece a visão ativa para dentro do sistema. A window pode ter tamanho, posição, estado, escala, foco ou outras condições gerenciadas pelo sistema. O conector Surface torna essas condições disponíveis ao renderer da maneira necessária para que output seja entregue corretamente.

Um renderer pode precisar saber os limites atuais da window. Pode precisar saber quando esses limites mudaram. Pode precisar de um alvo onde desenhar, escrever, transmitir ou atualizar de alguma outra forma. Esses detalhes podem variar por implementação, mas a responsabilidade conceitual continua a mesma: o conector Surface conecta o output do renderer ao contexto de window que o conterá.

Isso impede que o renderer finja possuir a fronteira do sistema, e impede que a window finja saber como renderizar.

### Mais que uma imagem final

Pode ser tentador pensar no conector Surface como algo que simplesmente passa um resultado finalizado para uma window. Em alguns casos, essa descrição pode ser próxima o suficiente. Um renderer prepara output, a surface o leva para a window e o usuário eventualmente percebe o resultado.

No entanto, rendering frequentemente é uma relação contínua em vez de uma única delivery. Uma window pode ser redimensionada. Seu estado ativo pode mudar. O sistema pode solicitar um redesenho. O renderer pode precisar atualizar continuamente, esperar um sinal ou sincronizar seu output com a condição atual da window. O conector Surface fornece o lugar onde essa relação pode ser expressa.

Por isso, o conector Surface não é apenas um contêiner para output finalizado. Ele é a conexão entre o ato de rendering e a window que recebe o resultado. Ele permite que o renderer responda às condições da window sem tornar o renderer responsável por ser a window.

O output ainda pertence ao renderer. A fronteira ainda pertence à window. O conector Surface carrega a relação entre os dois.

### Passando interações de volta para cima

Como o Stack é reversível, o conector Surface também participa do fluxo bottom-up. Quando uma interação começa no sistema e entra em uma window, ela precisa eventualmente subir em direção às partes do Stack que conseguem entendê-la e lidar com ela.

O conector Surface frequentemente carrega essa interação da window para o renderer. Em muitos casos, ele não precisa fazer muito além de preservar a informação e permitir que ela continue para cima. Um movimento de ponteiro, tecla pressionada, mudança de foco, evento de redimensionamento ou outra interação pode entrar pela window e então atravessar a surface para que o renderer e as camadas superiores possam responder conforme necessário.

Isso não significa que o conector Surface seja responsável por decidir qual componente deve lidar com a interação. Essa responsabilidade pertence a uma parte mais alta do Stack, especialmente depois que a interação alcança o graph e o frame. O conector Surface simplesmente dá à interação um caminho através da fronteira entre a window e o renderer.

No fluxo top-down, o conector Surface carrega output renderizado para a window. No fluxo bottom-up, carrega informação de interação originada na window de volta em direção ao renderer e às camadas acima dele.

### Mantendo a Window separada

O conector Surface é importante porque impede que renderer e window colapsem na mesma responsabilidade. Sem esse conector, um renderer precisaria saber demais sobre a window, ou a window precisaria saber demais sobre o renderer. Qualquer direção enfraquece a separação que torna o Stack útil.

Uma window fornece a fronteira ativa voltada ao sistema. Ela representa a view, o contêiner ou o ponto de delivery. Um renderer produz output que pode ser entregue através dessa fronteira. O conector Surface fica entre eles para que cada camada possa continuar focada em seu próprio propósito.

Essa separação se torna especialmente útil quando um renderer pode ser usado com mais de um tipo de window, ou quando uma window pode suportar mais de um tipo de renderer. O conector dá ao Modelo um lugar para descrever a relação sem prender rigidamente as duas camadas. Um renderer pode ser anexado a uma surface adequada. Uma window pode expor uma surface adequada. O conector Surface explica como esse anexo ocorre.

É isso que permite que renderer e window cooperem sem se tornarem indistinguíveis.

### Preservando output

Um conector Surface deve preservar o output renderizado enquanto ele atravessa para a window. Isso não significa que output nunca seja transformado, escalado, recortado, sincronizado ou preparado de acordo com os requisitos da window. Significa que output deve permanecer fiel ao que o renderer produziu e deve ser entregue de uma forma que corresponda ao contexto ativo da window.

Se a window muda de tamanho, o conector Surface pode ajudar a comunicar essa mudança. Se a window se torna inativa, oculta, minimizada ou indisponível de alguma outra forma, o conector pode ajudar o renderer a responder adequadamente. Se o renderer precisa de um alvo fornecido pela window, o conector pode manter ou expor esse alvo. Essas responsabilidades não são o mesmo que rendering, e não são o mesmo que ser a window. São as responsabilidades da conexão entre os dois.

Essa é a forma principal do conector Surface: ele preserva o output do renderer enquanto o adapta ao contexto de delivery fornecido pela window.

### Por que o conector importa

O conector Surface impede que o Stack confunda output renderizado com a window que o contém. Sem esse conector, um renderer seria forçado a agir como se possuísse a window, ou uma window seria forçada a agir como se entendesse rendering diretamente.

Ao definir o conector Surface, o Modelo dá a essa transição um lugar apropriado.

Renderers continua responsável por converter informação preparada em forma pronta para output. Windows continua responsável por fornecer o contexto delimitado voltado ao sistema através do qual output e interaction podem passar. O conector Surface lida com o movimento entre os dois.

Esse é o ponto do Stack em que informação renderizada ganha um destino. É onde output deixa de ser apenas produzido e se torna anexado ao lugar onde pode ser entregue. A partir daí, Windows pode levar o output adiante para Systems, onde ele finalmente pode se tornar algo que o usuário consegue perceber e responder.
