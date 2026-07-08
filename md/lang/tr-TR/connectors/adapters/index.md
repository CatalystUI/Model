<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 6.3 Bağlayıcılar :: Adapter

## Derinlemesine Tartışma

### Kullanımdan Bağlama

**Adapter** bağlayıcısı **Layer 5: Components, Controls, & Layouts** ile **Layer 4: Graphs & Frames** arasında yer alır. Değiştirilebilir arayüz verisini alıp düzenlenebileceği, keşfedilebileceği, yönlendirilebileceği, sınırlandırılabileceği ve Stack’in geri kalanı için hazırlanabileceği daha büyük bir bağlama yerleştirmekten sorumludur.

Layer 5 sisteme bileşenler, kontroller ve yerleşimler verir. Bunlar geliştiricinin doğrudan çalışabileceği değiştirilebilir parçalardır. Bir bileşen bir bilgi parçasını temsil edebilir. Bir kontrol etkileşime yanıt verebilir. Bir yerleşim diğer bileşenleri belirli bir düzene göre organize edebilir. Ancak bu parçalar var oldukları ortamı tam olarak açıklamaz. Ne olduklarını ve nasıl davrandıklarını bilebilirler; fakat bütün arayüzle nasıl ilişkilendiklerini otomatik olarak bilmezler.

Adapter bağlayıcısı, tek tek kullanılabilir parçalardan düzenlenmiş bağlama geçişi sağlar. Parser aracılığıyla üretilen bileşenleri alır ve onları grafiklerin ve çerçevelerin çalışabileceği bir yapıya yerleştirir.

### Parçaları Düzenlemek

Bir arayüz yalnızca bileşenler listesi değildir. Bileşenlerin ilişkileri, sınırları, öncelikleri, yaşam döngüleri ve etkileşim yolları vardır. Adapter, Layer 5’teki kullanılabilir parçaları Layer 4’ün düzenleyici ihtiyaçlarına uygun hale getirir.

Bu, bileşenleri bir component tree’ye eklemek, kontrolleri olay yönlendirmesi için kaydetmek, yerleşimleri ölçüm ve düzenleme sürecine bağlamak veya bileşenleri bir graf içinde sorgulanabilir hale getirmek anlamına gelebilir. Adapter’ın işi parçaları değiştirmekten çok, onları daha büyük bir sistem içinde anlamlı kılmaktır.

Örneğin bir düğme kontrolü kendi tıklama davranışını biliyor olabilir. Ancak ekrandaki yerini, hangi çerçevenin içinde bulunduğunu, hangi kardeş bileşenlerle çakıştığını veya hangi etkileşimin ona yönlendirilmesi gerektiğini bilmeyebilir. Adapter bu bilgiyi Layer 4 bağlamına taşır.

### Bağlam ve Sınırlar

Layer 4, grafikleri ve çerçeveleri kullanarak arayüz parçalarını etkin bir bağlam içinde düzenler. Adapter bu bağlamı kurmak için gereken bilgiyi sağlar. Bileşenin hangi graf içinde yer aldığı, hangi frame tarafından koordine edildiği, hangi sınırlar içinde çalıştığı ve hangi renderer-facing hazırlığa katılacağı burada belirlenir.

Bu geçiş özellikle etkileşim yönlendirmesi için önemlidir. Kullanıcı bir eylem yaptığında sistemin hangi kontrolün bu eylemi ele alacağını bilmesi gerekir. Bu karar yalnızca kontrolün kendisinden çıkmaz; kontrolün graf içindeki konumundan, sınırlarından, üst-alt ilişkilerinden ve etkin bağlamından çıkar.

Adapter, kullanılabilir parçaları bu ilişkiler dünyasına bağlayarak Layer 4’ün arayüzü bütün olarak anlamasına yardım eder.

### Geri Dönüş Yolu

Adapter ters yönde de çalışır. Layer 4 bir etkileşimi yönlendirdiğinde, yeniden uygun bileşene veya kontrole ulaşması gerekir. Graf ve frame, etkileşimin hangi parçaya ait olduğunu belirleyebilir; fakat etkileşimin gerçekten işlenmesi çoğu zaman Layer 5’te gerçekleşir. Adapter bu dönüşü sağlar.

Örneğin bir frame fare konumunu veya dokunma noktasını alabilir, graf üzerinden ilgili kontrolü bulabilir ve olayı Adapter aracılığıyla Layer 5’e geri iletebilir. Kontrol daha sonra kullanıcı niyetini işleyebilir, durumunu değiştirebilir veya verinin daha üst katmanlara geri taşınmasını başlatabilir.

Bu nedenle Adapter yalnızca aşağı yönlü bir hazırlık değildir. Arayüz parçalarını bağlama sokar ve bağlamdan gelen etkileşimleri yeniden kullanılabilir parçalara taşır.

### Modelde Adapter Bağlayıcısı

CatalystUI Modeli’nde Adapter bağlayıcısı, bileşenleri, kontrolleri ve yerleşimleri grafikler ve çerçeveler içinde düzenlenmiş bağlama uyarlar. Kullanılabilir parçaların tek başına kalmasını önler ve onları arayüzün bütünsel yapısına bağlar.

Kısacası Adapter, “bu arayüz parçası kullanılabilir” durumundan “bu arayüz parçası etkin bağlam içinde nerede ve nasıl çalışıyor?” durumuna geçiştir. İyi tasarlanmış bir Adapter arayüzün parçalarını kaybolmadan, karışmadan ve anlamını yitirmeden daha büyük düzene taşır.
