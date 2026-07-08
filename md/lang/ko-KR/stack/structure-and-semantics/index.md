<!--
이 번역은 ChatGPT가 생성했으며 인간 번역가의 검토가 필요합니다.
번역이 검증된 후에는 풀 리퀘스트에서 이 줄들을 제거하십시오.
-->

# 5.2 Stack :: Layer 6 — Structure & Semantics

## 심층 논의

### 데이터가 이해 가능한 형태가 되는 곳

**Layer 6: Structure & Semantics**는 Digital Data가 의미 있게 해석되는 layer입니다. 이 layer는 raw computer-readable information을 단순한 bytes나 text에서 벗어나, system이 규칙과 구조에 따라 이해할 수 있는 형태로 바꿉니다.

CatalystUI에서 이 layer는 두 가지 개념으로 나눌 수 있습니다. **Semantic**은 어떤 data가 어떤 규칙과 contract를 따라야 하는지 정의합니다. **Structure**는 특정 data instance가 그 semantic에 따라 해석된 결과입니다.

### Semantics

Semantic은 software의 `interface`나 specification에 비유할 수 있습니다. 그것은 “이 데이터는 어떤 형식을 가져야 하는가”, “어떤 항목이 필요하며 어떤 순서나 관계를 가져야 하는가”, “무엇이 유효하고 무엇이 유효하지 않은가”를 설명합니다.

예를 들어 MP3 파일의 semantic은 MP3 specification 자체에 가깝습니다. JSON의 semantic은 JSON grammar와 value rules에 가깝습니다. INI 파일의 semantic은 section, key, value가 어떻게 나타나는지 정의할 수 있습니다.

Semantic은 특정 파일 하나가 아닙니다. 그것은 파일을 해석하기 위한 규칙입니다.

### Structure

Structure는 semantic에 따라 해석된 data instance입니다. Software의 `struct`나 parsed object에 비유할 수 있습니다. Digital Data가 bytes로 존재했다면, structure는 그 bytes가 어떤 의미 있는 fields, records, sections, values로 구성되어 있는지 보여 줍니다.

예를 들어 settings file이 JSON으로 저장되어 있다면, structure는 parsed JSON object가 될 수 있습니다. CSV 파일이라면 rows와 columns가 될 수 있습니다. 문서 파일이라면 sections, paragraphs, metadata가 될 수 있습니다.

### Immutable snapshot

CatalystUI에서 Layer 6의 structure는 보통 immutable snapshot처럼 이해됩니다. 그것은 storage provider가 제공한 data를 특정 시점에 해석한 결과입니다. 이 layer는 “현재 data가 무엇을 의미하는가”를 설명하지, 사용자의 live interaction을 직접 처리하는 mutable interface object가 아닙니다. 그런 역할은 Layer 5에서 담당합니다.

이 구분은 중요합니다. Structure가 계속 직접 변경되는 live UI object가 되어 버리면, original data의 해석과 user-facing mutable state가 섞이게 됩니다. CatalystUI는 이를 분리하여 해석된 의미와 interactive behavior를 더 명확히 관리합니다.

### Layer 5로 이동하기

Structure & Semantics는 data를 이해 가능하게 만들지만, 사용자가 바로 상호작용할 수 있는 components를 제공하지는 않습니다. Parsed document가 있다고 해서 자동으로 editable text box가 생기는 것은 아닙니다. Settings structure가 있다고 해서 자동으로 toggle control이 생기는 것도 아닙니다.

Parser connector는 Layer 6의 interpreted information을 Layer 5의 Components, Controls, & Layouts로 변환합니다. 이때 information은 immutable structure에서 mutable interface object로 이동합니다.

### 예시

JSON settings file의 semantic은 JSON rules와 application-specific setting definitions입니다. Structure는 parsed settings object입니다.

HTML document의 semantic은 tags, attributes, nesting rules, document meaning을 설명합니다. Structure는 parsed document tree가 될 수 있습니다.

MP3 file의 semantic은 MP3 format rules입니다. Structure는 headers, frames, metadata, audio data sections로 해석된 result입니다.

### 핵심

Structure & Semantics layer는 Digital Data를 이해 가능한 형태로 바꿉니다. Semantic은 규칙과 contract를 정의하고, Structure는 그 규칙에 따라 해석된 data instance를 나타냅니다. 이 layer는 meaning을 제공하지만, interaction을 직접 처리하는 mutable interface는 아닙니다.
