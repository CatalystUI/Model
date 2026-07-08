<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.6 Stack :: Renderers

## Derinlemesine Tartışma

### Dönüştürücü Katman

**Renderers**, düzenlenmiş arayüz durumunun çıktıya hazır biçime dönüştürüldüğü katmandır. Layer 4 graph’lar ve frame’ler sağlar: aşağı gönderilmesi gereken şeyi, nasıl düzenlendiğini ve hangi mevcut durumun temsil edilmesi gerektiğini açıklayan hazırlanmış bir çalışma bağlamı. Layer 3 bu hazırlanmış bağlamı alır ve pencere, ardından sistem üzerinden teslim edilmeye uygun bir biçime dönüştürür.

Bu katmana rendering denir çünkü arayüz temsilinden algılanabilir çıktıya giden etkin dönüşümü gerçekleştirir. Bir renderer arayüzü yalnızca saklamaz, orijinal içeriğini yorumlamaz veya component ilişkilerini yönetmez. Sorumluluğu, üst katmanların hazırlanmış sonucunu alıp Stack’in alt katmanlarının ihtiyaç duyduğu alan-özgü çıktıyı üretmektir.

### Dönüşüm Olarak Rendering

CatalystUI’da rendering grafiklerle sınırlı değildir. Görsel bir renderer hazırlanmış arayüz verisini çizim komutlarına, piksel çıktısına veya GPU kaynaklarına dönüştürebilir. İşitsel bir renderer hazırlanmış veriyi ses örneklerine, mikslenmiş akışa veya oynatma komutlarına dönüştürebilir. Dokunsal bir renderer titreşim örüntüleri veya haptik komutlar üretebilir.

Ortak fikir dönüşümdür. Renderer, Model’in daha üst katmanlarında anlamlı ve düzenlenmiş olan bilgiyi alır ve daha alt katmanların teslim edebileceği biçime çevirir. Bu yüzden renderer alan-özgüdür: görsel, işitsel, dokunsal veya başka bir duyusal hedefe göre farklı çalışır.

### Renderer Ne Yapmaz?

Renderer’ın sınırlarını bilmek önemlidir. Renderer verinin semantiğini tanımlamaz; bu Layer 6’nın işidir. Kullanıcıya uygun component API’si sağlamaz; bu Layer 5’in işidir. Arayüz ilişkilerini ana sorumluluk olarak düzenlemez; bu Layer 4’ün işidir. Renderer, hazırlanmış veriden çıktı üretir.

Bu ayrım karmaşıklığı azaltır. Renderer bütün arayüzü anlamaya çalışırsa katmanlar birbirine karışır. Graph ve frame hazırlığı yeterince açık olduğunda renderer kendi özel görevine odaklanabilir: çıktıyı doğru, verimli ve hedef alana uygun üretmek.

### Girdi ve Etkileşim

Renderer çoğunlukla çıktı yönlü düşünülse de etkileşimlerin yukarı taşınmasında da rol oynayabilir. Bir görsel renderer, pencere koordinatlarını render edilmiş nesnelerle ilişkilendirebilir. Bir işitsel renderer oynatma zamanını veya kanal bilgisini etkileşime ekleyebilir. Bir haptik renderer cihaz durumunu üst katmanlara iletebilir.

Yine de kullanıcı niyetinin nihai işlenmesi genellikle Layer 5’teki controls tarafında gerçekleşir. Renderer etkileşimi zenginleştirebilir, dönüştürebilir veya doğru bağlama geri taşınmasına yardım edebilir; fakat arayüz mantığının tamamını üstlenmesi gerekmez.

### Modelde Renderers

CatalystUI Modeli’nde Renderers, hazırlanmış arayüz verisinin çıktıya hazır biçime dönüştüğü katmandır. Bu çıktı görsel, işitsel, dokunsal, kokuya ilişkin, tada ilişkin veya çok duyulu olabilir. Renderer, anlamı algılanabilir teslimata yaklaştıran dönüşüm noktasını temsil eder.

Kısacası Layer 3, “arayüz bağlamı hazır” durumundan “çıktı üretildi veya üretilmeye hazır” durumuna geçiştir. İyi tasarlanmış bir renderer, üst katmanların anlamını korur ve alt katmanların teslim edebileceği net, verimli çıktı sağlar.
