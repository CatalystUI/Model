<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5. Stack

## Konu Bazlı Özet

Akışta _hangi_ tür verinin bulunduğunu sınıflandırdıktan sonra, verinin _nerede_ bulunduğuna odaklanabiliriz. Mevcut çözümleri incelemek özellikle farklılıklarını değerlendirirken burada çok işe yarar. Her çözümü parçalarına ayırmadan önce analizimize sağlam bir zemin vermek için iki temel gerçeği belirleyebiliriz: birincisi, _veri_ bir yerde var olmalıdır; ister ikili olarak, ister diskte, bellekte ya da başka bir veri depolama biçiminde saklansın. İkincisi, bir _kişi_ de bir yerde var olmalıdır; ister ekranın, kulaklığın, kontrolcünün ya da başka bir arayüz biçiminin öbür ucunda olsun. Bu iki kavramı bir sandviç gibi düşüneceğiz: üst ekmek “Data Storage”, alt ekmek ise “Human Interface”. Bu iki kavram, bilgi akışının parçaları olarak tanımlandığında açık oldukları için onları _ima edilen_ katmanlar olarak adlandırırız; çünkü akışın doğası onların varlığını _ima eder_.

### Stack’in Katmanları

Human Interface’ten başlayarak, kullanıcının etkileşiminin sistem tarafından nasıl alındığını ve veriye nasıl geri döndüğünü belirleyebiliriz. Ters yönde, Data Storage’dan başlayarak saklanan verinin kullanıcı tarafından algılanabilir çıktıya nasıl dönüştüğünü izleyebiliriz. CatalystUI Stack bu iki yönlü hareketi yedi açık katman ve iki ima edilen sınırla açıklar:

- **[İma edilen] Data Storage**
- **Layer 7: Digital Data**
- **Layer 6: Structure & Semantics**
- **Layer 5: Components, Controls, & Layouts**
- **Layer 4: Graphs & Frames**
- **Layer 3: Renderers**
- **Layer 2: Windows**
- **Layer 1: Systems**
- **[İma edilen] Human Interface**

Data Storage, kalıcı verinin etkin arayüz akışının dışında var kaldığı kaynak veya hedef sınırıdır. Digital Data, veri etkin arayüz akışına bilgisayar tarafından okunabilir biçimde girdikten sonraki halidir. Structure & Semantics, dijital verinin nasıl anlaşılması gerektiğini açıklar: semantik veriyi yorumlama kurallarını, structure ise bu kuralların uygulanmış düzenli sonucunu temsil eder. Components, Controls, & Layouts arayüzün mantıksal ve kullanılabilir parçalarını temsil eder: bileşenler kullanılabilir arayüz nesnelerini, kontroller etkileşimleri, yerleşimler ise diğer bileşenleri veya kontrolleri düzenler. Graphs & Frames bu parçaları daha büyük ilişkiler ve etkin bağlamlar içinde düzenler. Renderers hazırlanmış arayüz verisini çıktıya hazır biçime dönüştürür. Windows, kullanıcının sisteme girdi sağlayabildiği veya sistemden çıktı alabildiği görünüm ya da teslim bağlamını sağlar. Systems, çıktıyı teslim eden ve girdiyi alan alttaki ortamı, hizmetleri, cihazları ve süreçleri sağlar. Human Interface, kullanıcının bilgiyi algıladığı ve etkileşim yoluyla yanıt verdiği ima edilen uç noktadır.

### Stack’in Modeldeki Rolü

Stack, bilgiyi konumlandırmak için kullanılır. Alanlar bize bilginin hangi tür deneyime ait olduğunu söyler; Stack ise bu bilginin akış içindeki yerini gösterir. Bir sorun yaşandığında, Stack hangi katmanın sorumlu olabileceğini bulmaya yardım eder. Veri var ama anlaşılmıyorsa sorun Digital Data ile Structure & Semantics arasında olabilir. Anlaşılan veri kullanılabilir nesnelere dönüşmüyorsa Parser veya Layer 5 incelenebilir. Kullanılabilir parçalar düzenli bağlama oturmuyorsa Adapter, Graphs & Frames veya frame sorumlulukları gündeme gelir.

Bu nedenle Stack yalnızca teorik bir liste değildir. Kullanıcı arayüzlerini açıklamak, tasarlamak, hata ayıklamak ve karşılaştırmak için kullanılabilecek bir haritadır. Bilginin saklanan veriden kullanıcı deneyimine ve kullanıcı niyetinden yeniden veriye nasıl geçtiğini görünür kılar.
