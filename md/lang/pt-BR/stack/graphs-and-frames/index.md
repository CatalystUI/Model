# 5.5 The Stack :: Graphs & Frames

## Discussão aprofundada

### A camada organizacional

**Graphs & Frames** é a camada em que objetos de interface utilizáveis são organizados em um contexto operacional maior. Layer 5 fornece components, controls e layouts como objetos mutáveis, mas esses objetos não formam automaticamente uma interface completa apenas por existirem juntos. Eles precisam de uma forma de serem descobertos, relacionados, consultados, ordenados, roteados, delimitados e preparados para as camadas inferiores do Stack.

Esse é o propósito de Layer 4. Ela recebe os objetos ativos de interface vindos de Layer 5 e estabelece o contexto maior em que eles operam. Um component pode saber como representar seu próprio estado, um control pode saber como lidar com uma interação, e um layout pode saber como dispor um grupo de components, mas Layer 4 determina como essas peças participam da interface como um todo.

### Graphs

Um **graph** descreve relações organizadas entre components, controls e layouts. Ele fornece a estrutura necessária para entender como objetos de interface se relacionam entre si, como podem ser localizados e como podem ser percorridos ou consultados durante a operação ativa.

Isso torna um graph distinto de um layout. Um layout dispõe components segundo uma regra ou padrão particular. Um graph gerencia o espaço relacional maior em que layouts e components existem. Ele pode descrever relações pai-filho, propriedade, dependência, agrupamento, ordenação, caminhos de foco, caminhos de roteamento ou outras formas de conexão que ajudam a interface a operar como um sistema coerente.

Um graph também fornece uma forma prática de localizar e gerenciar objetos de interface sem forçar cada component a conhecer todos os outros components. Components podem permanecer concentrados em seu próprio estado utilizável, enquanto o graph fornece a estrutura ao redor necessária para descoberta, coordenação e roteamento. Isso impede que a interface se torne uma coleção de objetos isolados ou um conjunto emaranhado de referências diretas.

### Frames

Um **frame** descreve o contexto operacional corrente maior preparado para as camadas inferiores do Stack. Enquanto um graph organiza objetos de interface e suas relações, um frame contém e coordena o estado relevante dessa organização em uma forma que pode ser passada para rendering, output ou processamento de nível inferior.

O frame atua como o limite principal entre o mundo da interface orientado a objetos de Layer 5 e o mundo orientado a rendering de Layer 3. Ele não contém apenas components; ele os prepara. Essa preparação pode incluir resolver limites, aplicar resultados de layout, coletar elementos renderizáveis, ordenar output, rastrear o estado corrente da interface ou produzir uma representação temporária daquilo com que o renderer deve trabalhar.

Um frame deve ser entendido como contextual, não permanente. Ele representa a condição corrente da interface para uma passagem, atualização, renderização ou operação de roteamento particular. Conforme a interface muda, novos frames ou estados de frame atualizados podem ser produzidos. Isso permite que o Stack descreva operação viva sem confundir estado temporário de apresentação com conteúdo armazenado ou structure interpretada.

### Relação entre Graphs e Frames

Graphs e frames trabalham juntos porque uma interface precisa tanto de relação quanto de contexto. O graph explica como objetos de interface estão conectados. O frame explica o que as camadas inferiores devem receber desses objetos conectados em um momento particular.

Essa distinção importa porque organização e preparação não são a mesma tarefa. Um graph pode conter as relações necessárias para encontrar um control, entender uma hierarquia de layout ou determinar qual component pertence a qual região da interface. Um frame pode pegar o resultado corrente dessa organização e prepará-lo para rendering ou roteamento de interação. O graph fornece o mapa; o frame fornece a passagem corrente por esse mapa.

Juntos, eles impedem que Layer 4 se torne uma coleção passiva de components ou uma lista de comandos específica de renderer. Ela permanece a camada organizacional e contextual do Stack: próxima o suficiente de Layer 5 para entender objetos de interface, mas próxima o suficiente de Layer 3 para prepará-los para transformação de nível inferior.

### Preparando para rendering

No fluxo de cima para baixo, Graphs & Frames recebe components, controls e layouts de Layer 5 e os prepara para o Renderer. Isso não significa que Layer 4 faz rendering. Rendering pertence a Layer 3. Layer 4 determina o que deve ser enviado para baixo, em que relação, sob quais limites e em qual estado corrente.

Essa preparação é necessária porque um renderer não deve ser responsável por entender o significado completo de cada component, control ou layout. O renderer precisa de uma forma preparada que possa transformar em output perceptível. Layer 4 preserva a organização da interface enquanto reduz o modelo ativo de objetos a algo com que o renderer pode trabalhar.

Ao fazer isso, Layer 4 permite que renderers permaneçam especializados. Um renderer pode se concentrar na transformação em output específico de domínio sem também se tornar o gestor de nível superior das relações entre components, da hierarquia de layout, dos alvos de interação e do estado ativo da interface.

### Roteando interações

No fluxo de baixo para cima, Graphs & Frames ajuda a rotear interações de volta aos controls apropriados. Camadas inferiores podem identificar que uma interação ocorreu e podem fornecer detalhes como posição, tempo, origem do dispositivo, contexto de foco ou outro estado de input relevante. Layer 4 usa o contexto de graph e frame para determinar onde essa interação pertence.

Esse papel de roteamento é uma das razões mais claras pelas quais Layer 4 precisa existir. Um control pode saber como lidar com uma interação depois de recebê-la, mas algo precisa determinar qual control deve recebê-la. O graph fornece a estrutura relacional, enquanto o frame fornece o contexto operacional corrente. Juntos, eles permitem que o Stack roteie intento pela interface em vez de apenas passar input para cima sem direção.

Isso também significa que Layer 4 participa tanto da preparação de output quanto da resolução de input. Ela prepara estado organizado da interface para rendering em uma direção e ajuda a resolver interação roteada na outra. A mesma camada que sabe como a interface está atualmente disposta também é a camada melhor posicionada para determinar como uma interação deve viajar de volta por essa disposição.

### Relação com Components, Controls, & Layouts

Layer 4 depende de Layer 5 para os objetos ativos de interface que organiza. Components, controls e layouts fornecem as partes utilizáveis da interface, mas Layer 4 determina como essas partes formam um todo maior. Isso impede que components individuais se tornem responsáveis pelo gerenciamento global da interface.

A separação também protege layouts de se tornarem amplos demais. Um layout pode dispor um grupo de components, mas não precisa gerenciar toda relação na interface. Não precisa atuar como o sistema completo de roteamento, coordenador de ciclo de vida ou limite de rendering. Layer 4 fornece essa organização de nível mais alto para que layouts possam permanecer focados na disposição.

### Relação com o Renderer

Layer 4 também protege o Renderer de responsabilidades que não pertencem ao rendering. Sem Graphs & Frames, o renderer precisaria entender árvores de components, relações de layout, roteamento de controls, resolução de limites e contexto ativo da interface antes de produzir output. Isso tornaria o rendering responsável por uma parte grande demais do modelo da interface.

Ao colocar Graphs & Frames entre Layer 5 e Layer 3, o Stack cria uma passagem limpa. Layer 5 fornece objetos de interface utilizáveis. Layer 4 organiza e prepara esses objetos. Layer 3 transforma a representação preparada em output perceptível. Cada camada permanece focada em uma parte distinta do processo.

### Por que a camada importa

Graphs & Frames impede que o Stack trate uma interface como uma coleção solta de components ou como um problema direto de rendering. Uma interface utilizável exige organização antes de poder ser renderizada e roteamento antes de poder responder de forma coerente à interação. Layer 4 fornece a estrutura necessária para ambas as coisas.

Ao separar Layer 4 de Components, Controls, & Layouts e do Renderer, o Modelo preserva uma progressão limpa de responsabilidade. Components, controls e layouts definem os objetos ativos da interface. Graphs e frames organizam esses objetos em um contexto operacional corrente. O Renderer então transforma esse contexto preparado em output perceptível. Essa distinção permite que CatalystUI descreva interfaces complexas sem forçar components a gerenciar todo o sistema ou renderers a compreender todo o modelo da interface.
