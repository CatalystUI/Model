<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 5.1 The Stack :: Data Storage

## Discussão aprofundada

### Um limite implícito

**Data Storage** é o limite superior implícito do Stack. Ele representa a condição em que conteúdo, estado ou um recurso permanece disponível antes que as camadas explícitas comecem a trabalhar com ele, e o lugar onde o resultado de uma interação pode ser preservado depois. O Modelo precisa desse limite porque uma interface não cria todo o seu assunto do nada. Algo precisa estar disponível para ser lido, recuperado, recebido ou referenciado antes de poder ser interpretado, transformado, renderizado ou receber uma ação.

Data Storage é implícito porque o Stack não modela os mecanismos internos do armazenamento em si. O Modelo pode depender de um recurso armazenado, mas não precisa descrever cada detalhe de como esse recurso é mantido. Essas preocupações pertencem ao sistema de informação ao redor. O Stack começa quando alguma forma de conteúdo passa a fazer parte do fluxo ativo da interface.

### Disponibilidade armazenada e representação ativa

A distinção entre Data Storage e Layer 7: **Digital Data** é a distinção entre **disponibilidade armazenada** e **representação ativa**. Data Storage descreve o lugar ou condição em que algo pode persistir. Digital Data descreve a primeira forma explícita dessa coisa depois que ela entra no processo modelado como uma representação legível por computador.

Por exemplo, um documento pode existir em um sistema de arquivos, um registro pode existir em um banco de dados, ou uma resposta pode aguardar atrás de uma API. Enquanto permanece apenas disponível para acesso, pertence a Data Storage. Quando a interface lê esse documento, recebe esse registro, abre essa resposta ou de outro modo traz o recurso para o fluxo ativo, ele se torna Layer 7. A mudança importante não é que o conteúdo de repente se tornou significativo. A mudança importante é que agora ele está representado dentro do Stack.

### Persistência e transformação

Data Storage se preocupa com persistência e disponibilidade. O Stack explícito se preocupa com transformação. Depois que um recurso armazenado se torna Digital Data, o Modelo pode começar a descrever o que acontece com ele: como é interpretado por Structure & Semantics, moldado em Components, Controls, & Layouts, organizado por Graphs & Frames, preparado por um Renderer, entregue por uma Window e levado pelo System até a Human Interface.

Essa separação importa porque armazenamento e transformação respondem a perguntas diferentes. Data Storage pergunta se algo pode permanecer disponível ao longo do tempo. Digital Data pergunta com qual representação ativa binária, textual, transmitida em stream ou recebida a interface está trabalhando agora. O primeiro explica retenção. O segundo inicia o fluxo modelado.

### O limite de origem e retorno

No fluxo de cima para baixo, Data Storage serve como limite de origem. Um recurso armazenado é selecionado ou recuperado e então entra no Stack como Digital Data. A partir desse ponto, o Modelo pode rastrear como o recurso é compreendido, organizado, transformado e entregue ao usuário. Data Storage em si não renderiza, faz parsing, dispõe ou interpreta o recurso. Ele apenas fornece a condição a partir da qual a representação ativa pode começar.

No fluxo de baixo para cima, Data Storage serve como limite de retorno. Uma interação do usuário pode solicitar, criar, atualizar, excluir ou afetar de outra forma algo dentro do fluxo da interface. Uma mudança resultante pode subir pelo Stack até se tornar Digital Data novamente. Se esse resultado precisar permanecer disponível além do processo imediato, ele retorna a Data Storage como estado preservado. O Stack não precisa modelar toda estratégia de escrita, transação de banco de dados, atualização de cache ou etapa de sincronização de rede para reconhecer que o resultado cruzou de volta para a persistência.

### Exemplos em contexto

É por isso que Data Storage pode aparecer por meio de muitas tecnologias sem ser definido por nenhuma delas. Um sistema de arquivos, banco de dados MySQL, coleção MongoDB, serviço baseado em API, armazenamento de objetos em nuvem, região de memória de dispositivo ou serviço de streaming podem todos servir como Data Storage quando fornecem disponibilidade retida fora do Stack ativo. Quando um arquivo, registro, resposta, buffer ou stream específico é trazido para o fluxo da interface, o Modelo trata essa representação ativa como Digital Data.

### Por que a separação importa

Separar Data Storage de Layer 7 mantém o Stack limpo. Sem essa distinção, o Modelo confundiria o lugar onde algo é mantido com a forma que assume quando a interface começa a trabalhar com ele. Isso tornaria Digital Data responsável tanto pela persistência quanto pela representação ativa, enfraquecendo o propósito das camadas explícitas.

Ao manter Data Storage implícito, o Modelo preserva um limite claro: o armazenamento circunda o fluxo da interface, enquanto Digital Data o inicia. Isso permite que o Stack descreva a transformação de uma representação ativa específica sem se enredar em todos os possíveis mecanismos de armazenamento por trás dela. Data Storage explica de onde o conteúdo retido pode vir e para onde resultados preservados podem retornar; Layer 7 inicia o processo explícito de transformar esse conteúdo em algo que a interface possa entender, transformar e, por fim, apresentar.
