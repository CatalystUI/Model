<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 6.1 Connectors :: Data

## 심층 논의

### 접근에서 이해로

**Data** connector는 **Layer 7: Digital Data**와 **Layer 6: Structure & Semantics** 사이에 위치합니다. 이 connector는 active computer-readable information을 가져와, semantic rules에 따라 이해될 수 있는 structure로 준비합니다. Data connector는 Stack에서 첫 번째 명시적 변환을 담당합니다.

Data connector가 필요한 이유는 access와 understanding이 같은 것이 아니기 때문입니다. Computer는 file을 열고, bytes를 읽고, memory에 보관하거나, database response를 받을 수 있습니다. 하지만 그것은 정보가 available하다는 뜻일 뿐, understood되었다는 뜻은 아닙니다.

예를 들어 settings file이 text로 존재할 수 있습니다. System은 그 file이 어디 있는지 알고, contents를 성공적으로 읽고, memory에 보관할 수 있습니다. 그래도 Stack은 아직 어떤 부분이 key이고, 어떤 부분이 value이며, 어떤 section이 valid하고, format을 정의하는 rules가 무엇인지 판단하지 않았습니다.

### Structure 만들기

Top-down flow에서 Data connector는 Digital Data를 받아 Structure & Semantics를 위한 형태로 준비합니다. 이 과정에는 bytes 읽기, text decoding, format 식별, semantic rules 선택, basic validation, organized structure로 변환하기 등이 포함될 수 있습니다. 정확한 작업은 정보의 종류에 따라 달라지지만 책임은 같습니다. active representation을 interpreted form에 연결하는 것입니다.

JSON settings file은 encoded text로 시작할 수 있습니다. Data connector는 text를 읽고 expected format을 인식하며 settings를 나타내는 structured information을 만듭니다. CSV file은 rows와 fields가 될 수 있고, database result는 records가 될 수 있으며, binary file은 headers, sections, values가 될 수 있습니다.

### 의미 보존

Data connector는 layer 사이를 이동할 때 meaning을 보존해야 합니다. 이는 original representation의 모든 detail을 그대로 유지해야 한다는 뜻은 아닙니다. 중요한 것은 digital data와 그로부터 만들어진 interpreted structure 사이의 intended relationship을 보존하는 것입니다.

파일에 title이 있다면 resulting structure는 그 title을 원래 정보에 충실하게 표현해야 합니다. Database record에 identifier가 있다면 그 identifier는 자신이 설명하는 record와 연결되어 있어야 합니다. Format이 order, grouping, required values를 정의한다면 connector는 structure를 만들 때 그 기대를 존중해야 합니다.

### Digital Data로 돌아가기

Stack은 reversible하므로 Data connector는 bottom-up flow에도 참여합니다. Interaction이 interface의 정보를 바꾸면, 그 변경은 결국 Digital Data로 돌아가야 할 수 있습니다. 저장, 전송, 비교, 재사용을 위해 structured information은 다시 computer-readable form으로 변환되어야 합니다.

이 방향에서 Data connector는 반대 변환을 수행합니다. Layer 6에서 structured information을 받아 storage나 transmission에 적합한 Digital Data를 만듭니다. Settings structure는 encoded JSON text가 될 수 있고, table of values는 CSV가 될 수 있으며, record는 database update가 될 수 있습니다.

### Validation과 Failure

Data connector는 failure를 의미 있게 인식할 수 있는 첫 지점 중 하나입니다. Digital Data는 missing, malformed, incomplete, unsupported, outdated일 수 있고, Layer 6이 기대하는 semantic rules와 일치하지 않을 수 있습니다.

이런 일이 생기면 connector는 transformation의 결과를 분명히 해야 합니다. Optional value가 없으면 default를 적용할 수도 있고, unsupported extension을 무시할 수도 있으며, 적절하다면 partial structure를 만들 수도 있습니다. 그러나 나머지 Stack이 data가 올바르게 해석되었는지 추측하게 해서는 안 됩니다.

### 핵심

Data connector는 digital data가 available하다는 사실과 meaningful structure가 되었다는 사실 사이의 경계를 지킵니다. Layer 7은 active computer-readable representation을 담당하고, Layer 6은 interpreted meaning과 organized form을 담당하며, Data connector는 그 사이의 이동을 처리합니다.
