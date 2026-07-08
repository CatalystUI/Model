<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.1 Stack :: Layer 7 — Digital Data

## 심층 논의

### 컴퓨터가 읽을 수 있는 활성 정보

**Layer 7: Digital Data**는 Stack에서 명시적으로 다루는 가장 위쪽 layer입니다. 이 layer는 컴퓨터가 읽을 수 있는 active information을 나타냅니다. 정보는 파일, string, stream, byte array, document, response, record, packet 등 여러 형태로 존재할 수 있지만, 근본적으로는 1과 0으로 표현됩니다.

Digital Data는 아직 “이 정보가 무엇을 의미하는지”까지 설명하지 않습니다. 그것은 정보를 담고 있지만, 그 자체로는 구조와 의미를 완전히 제공하지 않습니다. 텍스트 파일은 문자를 담을 수 있지만, 그 파일이 설정 파일인지, 문서인지, 로그인지, 명령어 목록인지는 별도의 해석이 필요합니다.

### 데이터는 의미와 같지 않다

Digital Data가 존재한다고 해서 system이 그 정보를 이해했다는 뜻은 아닙니다. 파일을 열 수 있고 bytes를 읽을 수 있어도, 그 bytes가 어떤 format을 따르고 어떤 규칙으로 해석되어야 하는지는 Layer 6에서 다루어야 합니다.

예를 들어 `config.json` 파일의 내용은 Digital Data입니다. 하지만 JSON 문법, key/value 구조, 각 key의 의미, 허용되는 값의 범위는 아직 Digital Data layer 자체의 책임이 아닙니다. Digital Data는 active representation을 제공하고, Data connector와 Structure & Semantics layer가 그 representation을 해석합니다.

### 왜 Layer 7이 필요한가

Layer 7은 저장된 정보와 해석된 정보 사이의 경계를 분명히 합니다. 이 경계가 없으면 저장소, bytes, format parsing, semantic interpretation이 한 곳에 뒤섞이기 쉽습니다. CatalystUI는 Digital Data를 별도로 두어 “정보가 컴퓨터 안에서 읽을 수 있는 상태로 존재한다”는 사실과 “그 정보가 의미 있게 해석되었다”는 사실을 구분합니다.

이 구분은 다양한 저장 방식과 format을 동일한 Model로 설명하게 해 줍니다. 로컬 파일이든, network response든, database result든, stream이든, active flow 안에서 컴퓨터가 읽을 수 있는 정보가 되면 Layer 7로 다룰 수 있습니다.

### Top-Down과 Bottom-Up

Top-down flow에서 Digital Data는 이후 layer들이 사용할 원재료입니다. Data connector는 이를 Structure & Semantics로 넘겨 해석할 수 있게 합니다.

Bottom-up flow에서는 interaction의 결과가 다시 Digital Data로 돌아올 수 있습니다. 사용자가 문서를 수정하거나 설정을 변경하면, higher-level structure와 components에서 생긴 변경 사항이 다시 computer-readable form으로 변환됩니다. 그 Digital Data는 저장, 전송, 비교, 재사용될 수 있습니다.

### 예시

MP3 파일의 bytes는 Digital Data입니다. 그것이 MP3 format에 따라 해석되기 전까지는 단지 computer-readable information입니다.

JSON settings 파일의 text는 Digital Data입니다. JSON parser가 구조를 만들기 전까지는 아직 usable component가 아닙니다.

서버에서 받은 HTTP response body도 Digital Data입니다. 그 내용이 HTML, JSON, 이미지, 오디오인지에 따라 이후 layer의 해석이 달라집니다.

### 핵심

Digital Data는 active computer-readable information입니다. 그것은 의미의 원재료이지만, 의미 자체는 아닙니다. CatalystUI는 이 layer를 통해 저장된 정보가 interface flow로 들어오는 첫 번째 명시적 단계를 설명합니다.
