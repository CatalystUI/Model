<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.0 Stack :: Data Storage

## 심층 논의

### 암시적 시작점

**Data Storage**는 CatalystUI Stack의 위쪽에 있는 암시적 layer입니다. 이 layer는 Model이 직접 표현하거나 구현하는 대상은 아니지만, Digital Data가 어디에서 오는지를 설명하기 위해 필요합니다. 파일 시스템, database, web API, remote server, memory cache, streaming service, configuration store 등 어떤 저장 방식이든 Data Storage의 역할을 할 수 있습니다.

Data Storage가 암시적이라는 말은 중요합니다. CatalystUI Model은 저장 장치 자체를 user interface의 layer로 다루지 않습니다. 대신 저장된 정보가 active flow로 들어와 **Layer 7: Digital Data**가 되는 순간부터 Stack이 명시적으로 시작됩니다.

### 저장과 활성 데이터의 차이

디스크에 있는 파일과 Stack 안에서 처리 중인 Digital Data는 같은 정보를 가리킬 수 있지만, 같은 layer는 아닙니다. 저장소에 있는 파일은 아직 system의 active interface flow에 들어오지 않았을 수 있습니다. 파일이 열리고, 읽히고, 메모리로 들어오거나 stream으로 전달될 때 그 정보는 Layer 7의 Digital Data로 표현될 수 있습니다.

이 구분은 책임을 깨끗하게 나누는 데 도움이 됩니다. Data Storage는 정보를 보존하는 곳입니다. Digital Data는 그 정보가 interface flow 안에서 컴퓨터가 읽을 수 있는 형태로 존재하는 상태입니다.

### 다양한 저장 방식

Data Storage는 반드시 로컬 파일일 필요가 없습니다. SQL database, key-value store, HTTP response, cloud object storage, socket stream, embedded resource, clipboard, sensor buffer 모두 상황에 따라 storage의 역할을 할 수 있습니다. 중요한 것은 정보가 active Stack으로 들어오기 전에 어느 곳에 존재했는가입니다.

예를 들어 settings 파일은 디스크에 저장되어 있을 수 있습니다. 사용자가 앱을 열면 Data connector가 파일을 읽고, 그 내용은 Digital Data가 됩니다. 웹 앱에서는 같은 설정이 server API에서 올 수 있습니다. 저장 방식은 다르지만 Stack에서의 다음 단계는 같습니다.

### Interaction이 돌아오는 곳

Stack은 reversible하기 때문에 Data Storage는 top-down flow의 시작점일 뿐 아니라 bottom-up flow의 끝점이 될 수도 있습니다. 사용자가 값을 변경하면 interaction은 Stack을 거슬러 올라가 Digital Data를 수정하고, 그 결과가 Data Storage에 다시 저장될 수 있습니다.

사용자가 문서를 편집하고 저장하면, 수정된 structure는 다시 digital form으로 변환되고 파일에 기록됩니다. 사용자가 설정을 바꾸면, 변경된 값은 JSON, database row, server request 같은 형태로 storage에 반영될 수 있습니다.

### 핵심

Data Storage는 CatalystUI가 직접 다루는 명시적 layer는 아니지만, Digital Data의 근원과 interaction 결과의 보존 위치를 설명합니다. Model은 저장소 자체보다, 저장된 정보가 active interface flow로 들어오는 순간부터의 과정을 명확히 설명합니다.
