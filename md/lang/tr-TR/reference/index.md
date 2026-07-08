<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 3. Referans

Aşağıda CatalystUI Modeli’nin farklı biçimlerde özetlenmiş hali bulunur. Bu bölüm hızlı başvuru, hata ayıklama ve Model’i mevcut sistemlere uygulama sırasında kullanılmak üzere hazırlanmıştır.

## AI Prompt Olarak

Bir LLM’nin CatalystUI Modeli’ni yorumlayıp anlayabilmesi için kullanılabilecek örnek prompt.

---

```md
CatalystUI Framework, modern yazılımlar için kullanıcı arayüzü geliştirmeye yardımcı olan C# programlama araçları kümesidir.

CatalystUI Modeli, Digital Data’nın Perceivable Data’ya dönüştürülmesi ve Interaction Data’nın Digital Data’ya dönüştürülmesi sürecinin tamamını açıklar. Model, bir insanın bir bilgi sistemiyle arayüz kurarken yaptığı örtük sözleşmeyi önce tanımlar, sonra tam olarak temsil eder.

Model üç ana kategoriye ayrılır:

- Domains
- The Stack
- Connectors

Domains, bir etkileşim sırasında işlenen verinin duyusal veya temsili türünü sınıflandırır. Yedi üst düzey domain vardır: Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory ve Multisensory. Symbolic veri belirli bir duyuya bağlanmadan önceki temsil edilmiş bilgidir. Visual veri görülmek üzere, Auditory veri duyulmak üzere, Tactile veri hissedilmek üzere, Olfactory veri koklanmak üzere, Gustatory veri tadılmak üzere, Multisensory veri ise birden fazla duyunun tek birleşik deneyim olarak birlikte çalışması üzere şekillendirilmiş bilgidir.

The Stack, bilginin kullanıcı ile bilgi sistemi arasındaki akışta nerede bulunduğunu açıklar. Stack, iki ima edilen sınırla birlikte yedi açık katmandan oluşur:

[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface

Data Storage, etkin arayüz akışının dışında kalıcı verinin bulunduğu ima edilen kaynak veya hedeftir. Digital Data, veri etkin arayüz akışına bilgisayar tarafından okunabilir biçimde girdikten sonraki halidir. Structure & Semantics dijital verinin nasıl anlaşılması gerektiğini açıklar; semantics veriyi yorumlama kurallarını tanımlar, structure ise bu kuralların uygulanmış düzenli sonucudur. Components, Controls, & Layouts arayüzün mantıksal ve kullanılabilir parçalarını temsil eder; components kullanılabilir arayüz nesnelerini, controls etkileşimleri, layouts ise diğer component veya control’leri düzenler. Graphs & Frames bu parçaları daha büyük ilişkiler ve etkin bağlamlar içinde düzenler; graphs arayüz nesneleri arasındaki ilişkileri, frames ise renderer’a dönük hazırlık için graph’ları içeren ve koordine eden etkin bağlamları temsil eder. Renderers hazırlanmış arayüz verisini çıktıya hazır biçime dönüştürür. Windows kullanıcının sisteme girdi sağlayabildiği veya sistemden çıktı alabildiği görünüm ya da teslim bağlamını sağlar. Systems çıktıyı teslim eden ve girdiyi alan alttaki ortamı, hizmetleri, cihazları ve süreçleri sağlar. Human Interface, kullanıcının bilgiyi algıladığı ve etkileşim yoluyla yanıt verdiği ima edilen uç noktadır.

Connectors, bilginin Stack’in komşu açık katmanları arasında nasıl hareket ettiğini açıklar. Yukarıdan aşağıya bağlayıcılar şunlardır:

- Data: Layer 7 ↔ Layer 6
- Parser: Layer 6 ↔ Layer 5
- Adapter: Layer 5 ↔ Layer 4
- Bridge: Layer 4 ↔ Layer 3
- Surface: Layer 3 ↔ Layer 2
- Native: Layer 2 ↔ Layer 1

Data connector, Digital Data’yı Structure & Semantics’e bağlar. Etkin bilgisayar tarafından okunabilir bilgiyi Model’in anlayabileceği yapılandırılmış biçime getirir ve yapılandırılmış bilgiyi dijital biçime geri döndürebilir.

Parser connector, Structure & Semantics’i Components, Controls, & Layouts’a bağlar. Kararlı yorumlanmış yapıları değiştirilebilir arayüz parçalarına ayrıştırır ve değiştirilmiş component’leri yapılandırılmış veriye geri taşıyabilir.

Adapter connector, Components, Controls, & Layouts’u Graphs & Frames’e bağlar. Kullanılabilir arayüz parçalarını düzenlenmiş ilişkiler ve etkin bağlamlar içine uyarlar ve bağlamsal etkileşimleri onları işleyebilecek component veya control’lere geri taşımaya yardım eder.

Bridge connector, Graphs & Frames’i Renderers’a bağlar. Düzenlenmiş arayüz bağlamını renderer’a taşır ve etkileşimleri genellikle az değişiklikle yukarı geri geçirerek graph ve frame’in onları uygun biçimde yönlendirmesine izin verir.

Surface connector, Renderers’ı Windows’a bağlar. Render edilmiş çıktıya window içinde hedef verir ve window kaynaklı etkileşim bilgisini yukarı taşır.

Native connector, Windows’u Systems’e bağlar. Window ile system arasında bindings sağlar; window’un var olmasına, etkileşim almasına, çıktı teslim etmesine ve yerel sistem davranışıyla iletişim kurmasına izin verir.

Interactions, Model’in katılımcı hale geldiği noktadır. Bir interaction, bir eylemin arkasındaki niyettir. Tıklama, dokunma, kaydırma, komut, hareket veya söylenen kelime yalnızca görünen eylemdir; interaction, kullanıcının bu eylem aracılığıyla başarmaya çalıştığı şeydir. Interactions Stack boyunca hareket eder, connectors tarafından dönüştürülür ve döngü tekrar başlamadan önce digital data’yı değiştirebilir.

CatalystUI Modeli’ni kullanırken önce işlenen bilginin türünü domain ile sınıflandırın, sonra bu bilginin Stack içinde nerede bulunduğunu belirleyin, katmanlar arasındaki geçişten hangi connector’ın sorumlu olduğunu saptayın ve bilginin saklanan veriden kullanıcı deneyimine, kullanıcı niyetinden tekrar veriye nasıl hareket ettiğini izleyin.
```

## Metin Olarak

CatalystUI Modeli’nin birincil sırasını gösteren kısa başvuru sayfası.

---

### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

| Domain       | Kısa Anlam                                                   |
| ------------ | ------------------------------------------------------------ |
| Symbolic     | Belirli bir duyuya bağlanmadan önceki bilgi.                 |
| Visual       | Görülmesi amaçlanan bilgi.                                   |
| Auditory     | Duyulması amaçlanan bilgi.                                   |
| Tactile      | Hissedilmesi amaçlanan bilgi.                                |
| Olfactory    | Koklanması amaçlanan bilgi.                                  |
| Gustatory    | Tadılması amaçlanan bilgi.                                   |
| Multisensory | Birden fazla duyusal kategorinin tek deneyim olarak çalışması. |

### The Stack

```md
[Implied] Data Storage
Layer 7: Digital Data
Layer 6: Structure & Semantics
Layer 5: Components, Controls, & Layouts
Layer 4: Graphs & Frames
Layer 3: Renderers
Layer 2: Windows
Layer 1: Systems
[Implied] Human Interface
```

| Katman  | Ad                              | Kısa Anlam                                                                  |
| ------- | ------------------------------- | --------------------------------------------------------------------------- |
| Implied | Data Storage                    | Etkin arayüz akışının dışındaki kalıcı veri.                                |
| Layer 7 | Digital Data                    | Yorumlanmadan önceki etkin bilgisayar tarafından okunabilir bilgi.          |
| Layer 6 | Structure & Semantics           | Yorumlanmış veri ve ona anlam veren kurallar.                               |
| Layer 5 | Components, Controls, & Layouts | Program tarafından kullanılan değiştirilebilir arayüz parçaları.            |
| Layer 4 | Graphs & Frames                 | Düzenlenmiş ilişkiler ve etkin arayüz bağlamı.                              |
| Layer 3 | Renderers                       | Bilgiyi çıktı için hazırlayan süreçler.                                     |
| Layer 2 | Windows                         | Girdi ve çıktının geçtiği görünümler veya teslim bağlamları.                |
| Layer 1 | Systems                         | Arayüzün altındaki ortam, hizmetler, cihazlar ve süreçler.                  |
| Implied | Human Interface                 | Çıktıyı algılayan ve etkileşimle yanıt veren kullanıcı.                     |

### Connectors

```md
Data     :: Layer 7 ↔ Layer 6
Parser   :: Layer 6 ↔ Layer 5
Adapter  :: Layer 5 ↔ Layer 4
Bridge   :: Layer 4 ↔ Layer 3
Surface  :: Layer 3 ↔ Layer 2
Native   :: Layer 2 ↔ Layer 1
```

| Connector | Bağladığı Katmanlar                                     | Kısa Anlam                                                   |
| --------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| Data      | Digital Data ↔ Structure & Semantics                    | Etkin dijital veriyi yorumlanmış yapıya bağlar.              |
| Parser    | Structure & Semantics ↔ Components, Controls, & Layouts | Kararlı yapıları değiştirilebilir arayüz parçalarına ayrıştırır. |
| Adapter   | Components, Controls, & Layouts ↔ Graphs & Frames       | Kullanılabilir parçaları düzenlenmiş bağlama uyarlar.        |
| Bridge    | Graphs & Frames ↔ Renderers                             | Düzenlenmiş bağlamı rendering’e taşır.                       |
| Surface   | Renderers ↔ Windows                                     | Render edilmiş çıktıyı window’a bağlar.                      |
| Native    | Windows ↔ Systems                                       | Window ile system arasında bindings sağlar.                  |

## Akış Olarak

Bilginin Model boyunca nasıl hareket ettiğini izlemek için kısa başvuru.

---

### Çıktı Yönlü Akış

```md
Data Storage
→ Digital Data
→ Structure & Semantics
→ Components, Controls, & Layouts
→ Graphs & Frames
→ Renderers
→ Windows
→ Systems
→ Human Interface
```

### Etkileşim Yönlü Akış

```md
Human Interface
→ Systems
→ Windows
→ Renderers
→ Graphs & Frames
→ Components, Controls, & Layouts
→ Structure & Semantics
→ Digital Data
→ Data Storage
```

## Sorumluluk Olarak

Bir şeyin Model içinde nereye ait olduğunu belirlemek için hızlı başvuru.

---

| Soru                                                  | Kullanılacak Alan |
| ----------------------------------------------------- | ----------------- |
| Hangi tür bilgi işleniyor?                            | Domains           |
| Bilgi akışta nerede bulunuyor?                        | The Stack         |
| Bilgi komşu katmanlar arasında nasıl hareket ediyor?  | Connectors        |
| Kullanıcı neyi başarmaya çalışıyor?                   | Interactions      |

## Tanısal Soru Olarak

Model’i mevcut bir sisteme uygulamak için soru tabanlı başvuru.

---

| Soru                                                        | Muhtemel Alan                              |
| ----------------------------------------------------------- | ------------------------------------------ |
| Veri mevcut ama anlaşılmıyor mu?                            | Digital Data, Data, Structure & Semantics  |
| Yorumlanmış veri henüz kullanılabilir değil mi?             | Structure & Semantics, Parser, Components  |
| Kullanılabilir parçalar bağlama düzenlenmemiş mi?           | Components, Adapter, Graphs & Frames       |
| Düzenlenmiş bağlam renderer’a ulaşmıyor mu?                 | Graphs & Frames, Bridge, Renderers         |
| Render edilmiş çıktının gidecek yeri yok mu?                | Renderers, Surface, Windows                |
| Window sisteme doğru bağlanmamış mı?                        | Windows, Native, Systems                   |
| Sistem eylemi algıladı ama kullanıcının niyetini kaçırdı mı? | Interactions ve interaction routing        |

## Tek Cümlelik Özet

Bütün Model’in kısa özeti.

---

```md
CatalystUI Modeli, veriyi Domains aracılığıyla sınıflandırarak, Stack içinde konumlandırarak, Connectors aracılığıyla dönüştürerek ve kullanıcı niyetini Interactions üzerinden izleyerek bir kullanıcı ile bir bilgi sistemi arasındaki bilgi akışını açıklar.
```
