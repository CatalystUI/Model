# 4.2 Domains :: Visual

## Discussão aprofundada

Enquanto o domínio **simbólico** descreve dados antes de eles terem sido associados a um sentido específico, o domínio **visual** descreve dados depois que foram moldados para a visão. Dados visuais são informações feitas para serem vistas: uma imagem, texto renderizado ou um controle visível. A distinção importante não é se os dados “poderiam” eventualmente aparecer em uma tela, mas se o papel atual deles na interação é comunicar por meio da visão.

Isso significa que dados visuais não devem ser confundidos com a forma armazenada por trás deles. Um arquivo contendo dados de imagem ainda é simbólico enquanto existir apenas como informação armazenada. Um parágrafo de texto ainda é simbólico enquanto existir apenas como caracteres, marcação ou outra representação abstrata. Ele se torna visual quando o sistema o apresenta em uma forma que o usuário pode ver e interpretar. A mudança não é que os dados se tornam mais importantes; a mudança é que seu método de comunicação passou da representação para a percepção.

Dados visuais são especialmente comuns porque a visão consegue comunicar muitas relações ao mesmo tempo. Tamanho, cor, espaçamento, direção, agrupamento e movimento podem ajudar o usuário a entender o que algo é, onde pertence e se pode receber uma ação. É por isso que interfaces visuais muitas vezes parecem imediatas. Um usuário pode olhar rapidamente para uma janela, página web ou cena de jogo e captar significado antes de ler cada palavra. O sistema não está apenas mostrando dados; está organizando dados em uma experiência visível.

### Compreendendo dados visuais

Uma forma útil de entender dados visuais é considerar **posicionamento**, **aparência** e **estado**. Essas não são subcategorias formais nem categorias obrigatórias no Modelo CatalystUI, mas oferecem uma forma prática de reconhecer como a informação visual comunica significado.

**Posicionamento** descreve onde os dados visuais aparecem e como se relacionam com as informações ao redor. Um título colocado acima de um parágrafo comunica pertencimento. Um botão colocado perto de um formulário comunica associação. Um menu colocado sobre outro conteúdo comunica prioridade temporária. O posicionamento importa porque o usuário não percebe objetos visíveis isoladamente; ele percebe relações entre objetos visíveis.

**Aparência** descreve como os dados visuais se apresentam ao usuário. Forma, cor, tipografia, contraste e imagens influenciam o que o usuário acredita estar vendo. Um trecho de texto pode parecer um título, um aviso ou um link dependendo de como é estilizado. Um retângulo pode parecer um botão, um painel ou decoração dependendo da borda, do espaçamento e do contexto ao redor. A aparência dá aos dados visuais sua forma reconhecível.

**Estado** descreve a condição atual comunicada visualmente. Um controle pode parecer ativo, desabilitado, selecionado, focado, carregando ou oculto. Esses estados importam porque a próxima ação do usuário muitas vezes depende do que a interface parece pronta para fazer. Se o estado visual não corresponde à condição real do sistema, a interface se torna confusa mesmo que a lógica subjacente esteja tecnicamente correta.

### Significado visual

A saída visual expressa significado, mas não deve ser confundida com o significado em si. Uma borda vermelha pode comunicar que algo está errado, mas a borda não é o erro. Um ícone pode representar uma ação, mas o ícone não é a ação. Um layout pode mostrar hierarquia, mas o layout não é a estrutura subjacente. Dados visuais são a expressão sensorial do significado, não a fonte completa do significado.

Essa distinção ajuda a evitar um erro comum de design: colocar responsabilidade demais na aparência de algo sem preservar o que aquilo significa. Se uma interface depende apenas de cor para comunicar um erro, o significado fica preso em um único sinal visual. Se um ícone não tem um rótulo, descrição ou significado acessível de apoio, o sistema pode parecer limpo enquanto se torna mais difícil de entender. A clareza visual é mais forte quando a forma visível expressa fielmente a intenção subjacente.

Dados visuais também carregam um tipo particular de risco porque usuários tendem a confiar no que veem. Se algo parece clicável, o usuário espera que responda. Se algo parece desabilitado, o usuário espera que não responda. Se algo parece selecionado, o usuário espera que o sistema o trate como selecionado. Quando a apresentação visível e o comportamento real divergem, o usuário percebe a interface como quebrada, mesmo que o programa esteja se comportando exatamente como foi escrito.

### Dados visuais e acessibilidade

O domínio visual torna a acessibilidade mais fácil de raciocinar porque identifica quando a informação está sendo comunicada apenas pela visão. Se um erro é mostrado só por cor, um gráfico só por imagem ou o progresso só por animação, então o significado pode não estar disponível para todos os usuários. A questão não é que a comunicação visual seja ruim; a questão é que a comunicação visual pode precisar ser traduzida para outra forma.

É aqui que os domínios se tornam úteis como ferramenta de diagnóstico. Eles nos ajudam a perguntar onde o significado vive atualmente. Ele é apenas visual? Também pode ser representado simbolicamente? Deveria estar disponível por som, toque ou outra forma de saída? Ao responder essas perguntas, o desenvolvedor pode preservar o mesmo significado em diferentes tipos de percepção em vez de tratar acessibilidade como algo pensado depois.

### Dados visuais em experiências mais amplas

Dados visuais também podem participar de experiências que não são puramente visuais. Um reprodutor de vídeo pode combinar imagens em movimento com som. Um jogo pode combinar gráficos, música e feedback do controle. Um sistema operacional pode combinar janelas, alertas e dispositivos de entrada em uma troca maior. Nessas situações, o domínio visual identifica a parte da experiência feita para a visão, enquanto outros domínios descrevem as formas adicionais de percepção envolvidas.

Isso mantém o modelo preciso. Uma interface visual não é automaticamente a interface de usuário inteira, e uma experiência multissensorial não apaga a parte visual dentro dela. Cada domínio ajuda a identificar como o significado está sendo carregado. O domínio visual responde a uma pergunta específica: que informação está sendo moldada para que o usuário possa vê-la?

Em resumo, o domínio visual descreve o movimento da representação simbólica para uma saída legível pela visão. Ele nos dá uma forma de discutir informações visíveis sem reduzir todas as interfaces a gráficos. Quando dados visuais são bem tratados, o usuário consegue reconhecer o que o sistema apresenta, entender sobre o que pode agir e responder com confiança.
