<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.4 Stack :: Components, Controls, & Layouts

## Derinlemesine Tartışma

### Kullanılabilir Arayüz Katmanı

**Components, Controls, & Layouts**, yorumlanmış bilginin kullanılabilir ve değiştirilebilir arayüz parçalarına dönüştüğü katmandır. Structure & Semantics verinin ne olduğunu açıklar; Layer 5 ise bu verinin program tarafından nasıl kullanılacağını, kullanıcının onunla nasıl etkileşeceğini ve arayüz içinde nasıl düzenleneceğini açıklar.

Bu katman canlıdır. Bileşenler durum taşıyabilir, kontroller etkileşimleri işleyebilir, yerleşimler diğer parçaları düzenleyebilir. Kullanıcı arayüzlerinin hissedilir kısmı çoğu zaman burada başlar, çünkü bilgi artık yalnızca yorumlanmış bir yapı değil, üzerinde işlem yapılabilen arayüz nesneleridir.

### Components

**Components**, arayüzün kullanılabilir parçalarını temsil eder. Bir metin parçası, görüntü, ses öğesi, belge bölümü, oynatma nesnesi, ayar değeri veya başka bir temsil edilebilir arayüz varlığı component olabilir. Component, geliştiriciye veriyle çalışmak için insan dostu bir API sağlar.

Bir component özellikler, yöntemler ve durum içerebilir. Bir görsel component `Size`, `Position` veya `Color` gibi özelliklere sahip olabilir. Bir ses component’i `Play()`, `Pause()` veya `Seek()` gibi yöntemler sağlayabilir. Önemli olan component’in veriyi kullanılabilir hale getirmesidir.

### Controls

**Controls**, etkileşimleri doğrudan işleyen component’lerdir. Bir düğme, metin alanı, kaydırıcı, fiziksel düğme, komut girişi veya kullanıcı eylemine yanıt veren herhangi bir arayüz parçası control olabilir. Control, kullanıcının niyetini sistem davranışına bağlayan noktadır.

Bir control yalnızca görünür bir nesne olmak zorunda değildir. Görsel olmayan sistemlerde de kontroller bulunabilir. Sesli komut alan bir control, fiziksel düğme basışını işleyen control veya haptik cihazdan gelen etkileşimi ele alan control Model içinde aynı genel role sahiptir.

### Layouts

**Layouts**, component’leri veya control’leri belirli bir düzene göre yerleştiren component’lerdir. Görsel arayüzlerde bu dikey veya yatay düzen, grid, panel veya akış olabilir. İşitsel sistemlerde ses öğelerini kategoriye, sıraya veya önceliğe göre düzenleyen bir yapı olabilir. Layout’un temel görevi diğer parçalar arasındaki düzeni sağlamaktır.

Layout, çoğu zaman doğrudan etkileşim işlemez; bu yüzden control değildir. Ancak arayüz deneyimini güçlü biçimde etkiler. Bir şeyin nerede bulunduğu, neyle ilişkili olduğu ve nasıl sıralandığı kullanıcının onu anlamasını belirler.

### Değiştirilebilirlik

Layer 5’in önemli özelliği değiştirilebilir olmasıdır. Kullanıcı bir değeri değiştirebilir, bir seçimi güncelleyebilir, bir parçayı taşıyabilir veya bir işlemi başlatabilir. Bu değişiklikler önce component ve control durumunda görünür; ardından gerekirse Parser aracılığıyla yeniden Structure & Semantics’e ve sonunda Digital Data’ya taşınır.

Bu değiştirilebilirlik, arayüzü canlı kılar. Veriyi yalnızca okumak yetmez; kullanıcı onu etkileyebilmelidir. Layer 5, kullanıcının niyetinin sistem içinde somut değişikliklere dönüşmeye başladığı ana yerdir.

### Modelde Components, Controls, & Layouts

CatalystUI Modeli’nde Layer 5, yorumlanmış verinin kullanılabilir arayüz nesnelerine dönüştüğü katmandır. Components veriyi çalışılabilir hale getirir. Controls etkileşimleri işler. Layouts parçaları düzenler.

Kısacası bu katman, “sistem verinin ne olduğunu biliyor” durumundan “kullanıcı ve program bu veriyle çalışabilir” durumuna geçiştir. İyi tasarlandığında arayüzün davranışı daha doğal, daha açık ve daha yönetilebilir hale gelir.
