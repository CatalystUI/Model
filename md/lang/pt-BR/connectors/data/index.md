<!--
Esta tradução foi gerada pelo ChatGPT e deve ser revisada por um tradutor humano.
Remova estas linhas em uma pull request após a tradução ser verificada.
-->

# 6.1 Connectors :: Data

## Discussão aprofundada

### A primeira tradução

O conector **Data** é o primeiro conector explícito do Stack. Ele fica entre **Layer 7: Digital Data** e **Layer 6: Structure & Semantics**, onde a informação ativa legível por computador começa, pela primeira vez, a receber uma forma interpretada. Layer 7 nos diz que a informação existe como digital data. Layer 6 nos diz como essa informação é estruturada e o que ela significa. O conector Data explica como o sistema passa de uma condição para a outra.

Esse conector é necessário porque digital data não se interpreta sozinha. Um arquivo, stream, buffer, resultado de banco de dados, resposta ou mensagem já pode conter informação organizada, mas organização não é o mesmo que interpretação. Algo precisa acessar os dados, lê-los de acordo com as expectativas apropriadas e produzir uma forma que Structure & Semantics consiga entender. Esse “algo” é o conector Data.

Nesse sentido, esse conector é o primeiro ato de tradução dentro do Stack explícito. Ele não cria a informação original e ainda não cria componentes voltados ao usuário. Seu papel é trazer informação para o fluxo ativo como Digital Data quando necessário, e então conectar essa representação digital ativa às regras e estruturas que tornam a interpretação possível.

### Trabalhando com Data Storage

Embora o conector Data fique entre Digital Data e Structure & Semantics, ele frequentemente tem uma relação próxima com a camada implícita **Data Storage**. Isso acontece porque muitas formas de digital data só se tornam úteis quando podem ser acessadas de onde estão armazenadas. Por isso, um conector Data costuma cumprir duas responsabilidades relacionadas. Primeiro, ele alcança o armazenamento para recuperar, receber ou acessar informação de alguma outra maneira, para que essa informação possa entrar no fluxo ativo como Digital Data. Segundo, ele processa a Digital Data resultante em uma estrutura interpretada.

Um conector de dados MySQL é um bom exemplo. Da perspectiva do Modelo, o banco de dados MySQL pode ser tratado como Data Storage, enquanto o resultado da consulta se torna a Digital Data ativa com a qual se trabalha. O conector pode estabelecer a conexão, enviar uma consulta, receber o resultado e depois organizar esse resultado em informação estruturada que o restante do Stack consiga entender. A conexão com o banco de dados, o comportamento de consulta e o processamento do resultado podem aparecer dentro do mesmo conector porque o conector Data é responsável por alcançar o armazenamento e carregar a informação recuperada em direção a dados estruturados e significativos.

Isso não torna Data Storage uma camada explícita do Stack, nem torna o conector Data responsável por ser o banco de dados, sistema de arquivos, serviço ou mecanismo de armazenamento em si. Em vez disso, o Modelo reconhece que o primeiro conector muitas vezes precisa se aproximar do armazenamento para trazer digital data para o fluxo ativo do sistema.

### Acesso não é compreensão

O conector Data existe em parte porque acesso e compreensão não são a mesma coisa. Um computador pode abrir um arquivo, receber uma resposta, manter bytes na memória ou se conectar a um banco de dados. Isso apenas prova que a informação está disponível. Não prova que a informação foi compreendida.

Por exemplo, um arquivo de configurações pode estar disponível como texto. O sistema pode saber onde o arquivo está, ler seu conteúdo com sucesso e manter esse conteúdo na memória. Mesmo assim, o Stack ainda não determinou quais partes são chaves, quais partes são valores, quais seções são válidas ou quais regras definem o formato.

O conector Data fornece o movimento de “a informação está disponível como digital data” para “a informação agora pode ser interpretada de acordo com structure e semantics”. Essa distinção mantém Layer 7 limpo. Digital Data não precisa saber como cada formato possível deve ser interpretado. Ela só precisa representar a informação ativa legível por computador. O conector Data então faz a passagem para Layer 6, onde a interpretação pode ocorrer de acordo com as regras apropriadas.

### Produzindo estrutura

No fluxo top-down, o conector Data recebe Digital Data e a prepara para Structure & Semantics. Isso pode envolver ler bytes, decodificar texto, identificar um formato, selecionar regras semânticas, validar expectativas básicas ou transformar a representação em uma estrutura organizada. O trabalho exato depende do tipo de informação sendo tratado, mas a responsabilidade continua a mesma: conectar a representação ativa a uma forma interpretada.

Um arquivo de configurações JSON pode começar como texto codificado. O conector Data lê o texto, reconhece o formato esperado e produz informação estruturada representando as configurações. Um arquivo CSV pode se tornar linhas e campos. Um resultado de banco de dados pode se tornar registros. Um arquivo binário pode se tornar cabeçalhos, seções e valores. Uma resposta de servidor pode se tornar uma mensagem estruturada.

O ponto importante é o movimento. O conector Data pode começar alcançando o armazenamento, mas sua transição explícita no Stack só está completa quando a Digital Data recuperada ou recebida se tornou informação que pode ser entendida por Structure & Semantics.

### Preservando significado

Um conector Data deve preservar significado enquanto a informação se move entre camadas. Isso não significa que cada detalhe da representação original deva permanecer inalterado. Significa que o conector deve preservar a relação pretendida entre a digital data e a estrutura interpretada que ele produz.

Por exemplo, se um arquivo contém um título, a estrutura resultante deve representar esse título de uma forma fiel à informação original. Se um registro de banco de dados contém um identificador, esse identificador deve continuar conectado ao registro que descreve. Se um formato define ordem, agrupamento ou valores obrigatórios, o conector deve respeitar essas expectativas ao produzir o resultado estruturado.

### Retornando para Digital Data

Como o Stack é reversível, o conector Data também participa do fluxo bottom-up. Quando uma interação muda informação na interface, essa mudança pode eventualmente precisar voltar para Digital Data. Antes de poder ser preservada, transmitida ou reutilizada, a informação estruturada precisa ser convertida de volta para uma forma legível por computador.

Nessa direção, o conector Data realiza a transformação oposta. Ele recebe informação estruturada de Layer 6 e produz Digital Data adequada para armazenamento, transmissão, comparação ou processamento adicional.

Uma estrutura de configurações pode se tornar texto JSON codificado. Uma tabela de valores pode se tornar CSV. Um registro pode se tornar uma atualização de banco de dados. Uma estrutura de documento pode se tornar os bytes de um arquivo.

Esse movimento inverso é tão importante quanto o movimento top-down. Se o conector Data consegue ler informação para dentro de uma estrutura, mas não consegue escrever essa estrutura de volta em forma digital, a interface talvez consiga exibir ou usar informação, mas não consegue preservar completamente o resultado da interação. Portanto, o conector ajuda a completar o ciclo entre intenção do usuário e mudança persistente.

### Validação e falha

O conector Data também é um dos primeiros lugares onde uma falha pode ser reconhecida de forma significativa. Digital Data pode estar ausente, malformada, incompleta, não suportada, desatualizada ou inconsistente com as regras semânticas esperadas por Layer 6.

Quando isso acontece, o conector deve deixar claro o resultado dessa transformação. Um conector pode se recuperar de valores opcionais ausentes, aplicar padrões, ignorar extensões não suportadas ou produzir uma estrutura parcial quando apropriado. No entanto, o restante do Stack não deve ser forçado a adivinhar se os dados foram interpretados corretamente.

Ao identificar a falha nessa fronteira, o Modelo mantém a interpretação honesta. O conector Data protege o restante do Stack de construir sobre informação que nunca foi compreendida com sucesso.

### Por que o conector importa

O conector Data impede que o Stack presuma que digital data se torna significativa automaticamente assim que está disponível. Sem esse conector, o Modelo borraria a fronteira entre representação e interpretação. Layer 7 seria forçado a entender formatos diretamente, ou Layer 6 seria forçado a recuperar dados brutos por conta própria. Ao definir o conector Data, o Modelo dá a essa transição um lugar apropriado.

Digital Data continua responsável pela representação ativa legível por computador. Structure & Semantics continua responsável por significado interpretado e forma organizada. O conector Data lida com o movimento entre os dois.

Isso torna explícita a primeira transformação do Stack. A informação começa como representação digital ativa, atravessa o conector Data e se torna algo que o sistema pode entender. A partir daí, o restante do Stack pode continuar o processo: transformar informação interpretada em objetos de interface utilizáveis, organizar esses objetos em contexto, prepará-los para output, entregá-los pelo sistema e permitir que o usuário responda.
