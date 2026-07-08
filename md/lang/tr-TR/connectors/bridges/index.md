<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 6.4 Bağlayıcılar :: Bridge

## Derinlemesine Tartışma

### Bağlamdan Rendering’e

**Bridge** bağlayıcısı **Layer 4: Graphs & Frames** ile **Layer 3: Renderers** arasında yer alır. Düzenlenmiş arayüz verisini graf ve frame’den renderer’a taşımaktan sorumludur; burada veri algılanabilir çıktıya dönüşmeye başlayabilir.

Layer 4 sisteme düzenlenmiş bağlam verir. Hangi bileşenlerin var olduğunu, birbirleriyle nasıl ilişkilendiğini, hangi sınırları kapladığını ve etkin arayüzün bütün olarak nasıl anlaşılması gerektiğini bilir. Layer 3 rendering’den sorumludur. Hazırlanmış veriyi alır ve sonunda bir pencere ve sistem üzerinden teslim edilebilecek biçime dönüştürür.

Bridge bağlayıcısı vardır çünkü bu iki katman doğal olarak aynı dili konuşmaz. Graf ilişkileri düzenler. Frame etkin bağlamı ve sınırları tanımlar. Renderer çıktı üretir. Bridge, bu kaygılar arasındaki geçiş noktasıdır.

### Renderer’a Hazırlamak

Bridge’in görevi, Layer 4’teki bilgiyi renderer’ın gerçekten kullanabileceği şekilde taşımaktır. Bu, bileşenlerin düzleştirilmesi, çizim komutlarına dönüştürülmesi, ses olaylarının sıraya alınması, haptik komutların hazırlanması veya renderer’a özgü bir veri yapısının oluşturulması anlamına gelebilir.

Bridge, uygulamaya bağlı olarak çok ince veya oldukça karmaşık olabilir. Basit bir sistemde yalnızca hazır frame verisini renderer’a aktarabilir. Daha gelişmiş bir sistemde görünürlük, kırpma, sıralama, katmanlama, z-index, ses karışımı veya zamanlama gibi kararları hazırlayabilir.

Önemli olan Bridge’in bağlamı render edilebilir hazırlığa taşımasıdır. Renderer’ın amacı arayüz ilişkilerini keşfetmek değildir; çıktı üretmektir. Bridge, renderer’ın bu işe odaklanabilmesi için gerekli bilgiyi anlaşılır bir biçimde sağlar.

### Anlamı Kaybetmeden Dönüştürmek

Bridge, üst katmanların niyetini korumalıdır. Bir düğme yalnızca bir dikdörtgen değildir; kullanıcı için bir kontrolü temsil eder. Bir ses yalnızca örnek dizisi değildir; bir olayın veya durumun parçası olabilir. Bridge, bu anlamın renderer’a giden biçimde yeterince korunmasını sağlamalıdır.

Bu, her semantik ayrıntının renderer’a taşınması gerektiği anlamına gelmez. Renderer yalnızca kendi sorumluluğu için gerekeni bilmelidir. Ancak Bridge, renderer’a verilen verinin üst katmanların düzenlediği bağlamı bozmadığından emin olmalıdır. Yanlış sıralama, yanlış sınır, yanlış kaynak veya eksik durum bilgisi, kullanıcıya ulaşan çıktıyı yanlış hale getirebilir.

Bridge bu yüzden küçük görünse bile Model’de kritik bir noktadır. Arayüzün düzenlenmiş anlamı burada çıktı üretimine yaklaşır.

### Etkileşimlerin Geri Dönüşü

Etkileşimler ters yönde hareket ederken Bridge genellikle onları mümkün olduğunca az değiştirerek yukarı taşır. Renderer bir etkileşimi konum, hedef veya renderer’a özgü bağlamla zenginleştirebilir; ancak çoğu durumda etkileşimin hangi bileşene ait olduğunu Layer 4 belirler.

Örneğin bir görsel renderer, bir tıklamanın hangi koordinatta gerçekleştiğini bilebilir. Bridge bu bilgiyi Graphs & Frames katmanına geri taşıyarak frame’in sınırlar içinde doğru hedefi bulmasına izin verir. Bir ses renderer’ı oynatma konumuyla ilgili bir etkileşim üretebilir ve bu da ilgili graf bağlamına geri taşınabilir.

Bu geri dönüş yolu, Bridge’in yalnızca çıktı hazırlığı olmadığını gösterir. Bridge, renderer ile düzenlenmiş arayüz bağlamı arasındaki iki yönlü geçiştir.

### Modelde Bridge Bağlayıcısı

CatalystUI Modeli’nde Bridge bağlayıcısı, arayüz bağlamının rendering’e taşındığı noktayı açıklar. Graf ve frame’in düzenlediği bilgiyi renderer’ın tüketebileceği biçime dönüştürür ve etkileşimleri yeniden bağlama geri iletir.

Kısacası Bridge, “arayüz bağlamı hazır” durumundan “renderer bu bağlamdan çıktı üretebilir” durumuna geçiştir. İyi tasarlanmış bir Bridge, üst katmanların anlamını korurken renderer’a gereksiz yük bindirmeden doğru veriyi sağlar.
