<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.7 Stack :: Windows

## Derinlemesine Tartışma

### Sınırlı Teslim Katmanı

**Windows**, render edilmiş çıktının sınırlı bir teslim bağlamı aldığı katmandır. Layer 3 hazırlanmış arayüz durumunu çıktıya hazır biçime dönüştürür; fakat bu çıktının sistem tarafından teslim edilebilmesi için hâlâ tanımlı bir yere, kanala veya görünüme ihtiyacı vardır. Layer 2 bu sınırı sağlar.

Bir window yalnızca ekrandaki görsel bir kutu olarak anlaşılmamalıdır. Grafiksel bir ortamda window çoğu zaman işletim sistemi tarafından yönetilen görünür bir bölge olarak ortaya çıkar. Ancak Model’de kavram daha geniştir: window, çıktının sağlanabildiği ve etkileşimin alınabildiği sistem-yönlü bağlamdır. Render edilmiş sonucun çevredeki sistem içinde nereye ait olduğunu tanımlar.

### Sisteme Açılan Görünüm

Window sisteme açılan bir görünüm gibi davranır. Sistemi oluşturmaz ve renderer’ın yerine geçmez. Bunun yerine renderer’ın çıktısının teslim edileceği ve sistemden gelen etkileşim bilgisinin üst katmanlara dönebileceği sınırlı bağlamı sağlar.

Görsel sistemlerde bu bir masaüstü penceresi, tarayıcı canvas’ı, mobil görünüm, terminal alanı veya oyun ekranı olabilir. İşitsel ya da dokunsal sistemlerde window daha soyut olabilir: belirli bir çıkış kanalı, cihaz bağlamı veya etkileşim bölgesi gibi. Önemli olan, kullanıcı ile sistem arasındaki teslim noktasının sınırlanmış olmasıdır.

### Sınır ve Bağlam

Window, çıktının kapsamını ve etkileşimin bağlamını tanımlar. Görsel bir pencerede bu boyut, konum, DPI, odak ve görünürlük olabilir. Başka alanlarda kanal, cihaz, mod, etkin durum veya kullanılabilir çıktı hedefi olabilir. Window, alt sistem gerçekliği ile üst arayüz temsili arasındaki pratik sınırdır.

Bu sınır olmadan renderer çıktı üretse bile bunun nereye gideceği belirsiz olur. Window, Surface bağlayıcısı aracılığıyla renderer’a hedef sağlar ve Native bağlayıcısı aracılığıyla sisteme bağlanır.

### Etkileşimlerin Alınması

Windows yalnızca çıktı teslim etmez; etkileşimlerin sisteme girdiği önemli bir noktadır. Kullanıcı tıkladığında, yazdığında, dokunduğunda, konuştuğunda, hareket ettiğinde veya başka bir eylem yaptığında sistem bu eylemi algılayabilir ve ilgili window bağlamına iletebilir.

Window bu etkileşimin hangi bağlamda gerçekleştiğini belirlemeye yardım eder. Aynı tıklama farklı pencerelerde farklı anlamlar taşıyabilir. Aynı tuş basışı farklı odak durumlarında farklı şekilde ele alınabilir. Window, bu olayların üst katmanlara doğru biçimde taşınması için sınır bilgisini sağlar.

### Modelde Windows

CatalystUI Modeli’nde Windows, çıktının teslim edildiği ve etkileşimin alındığı sınırlı bağlamları açıklar. Geleneksel grafik pencereleri buna dahildir; fakat kavram daha geniştir. Window, bir sistemin kullanıcıyla iletişim kurduğu tanımlı görüş veya teslim noktasıdır.

Kısacası Layer 2, “çıktı üretildi” durumundan “çıktının sistem içinde teslim edileceği bir bağlam var” durumuna geçiştir. İyi tasarlanmış bir window katmanı, renderer ve sistem arasındaki sınırı açık tutar ve etkileşimlerin doğru bağlamla yukarı taşınmasına yardım eder.
