<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 6.5 Bağlayıcılar :: Surface

## Derinlemesine Tartışma

### Rendering’den Teslimata

**Surface** bağlayıcısı **Layer 3: Renderers** ile **Layer 2: Windows** arasında yer alır. Render edilmiş çıktıyı renderer’dan pencereye taşımaktan sorumludur; burada çıktı sistem tarafından sağlanan sınırlı bağlama yerleştirilebilir.

Layer 3 bilginin çıktıya hazır biçime dönüştürüldüğü yerdir. Renderer, graf ve frame’den gelen hazırlanmış veriyi alır ve sonunda algılanabilecek bir şey üretir. Ancak render edilmiş çıktının hâlâ bir hedefe ihtiyacı vardır. Gidecek bir yer, bağlanacak bir şey ve sistemin onu teslim edebileceği bir sınır gerekir.

Bu hedef Windows katmanı tarafından temsil edilir. Surface bağlayıcısı renderer ile pencere arasındaki geçiş noktasını sağlar. Render edilmiş çıktının pencerenin kullanılabilir alanına nasıl bağlandığını ve renderer’ın doğru çıktı üretmeye devam etmek için pencereden nasıl yeterli bilgi aldığını açıklar.

### Çıktı İçin Bir Yer

Surface, render edilmiş çıktıya bir yer verir. Görsel bir sistemde bu bir pencere yüzeyi, framebuffer, swapchain, canvas veya platforma özgü başka bir hedef olabilir. İşitsel bir sistemde bir ses çıkış kanalı veya cihaz bağlamı olabilir. Haptik bir sistemde cihaz bağlantısı veya geri bildirim hedefi olabilir.

Hedefin adı değişebilir; rol aynı kalır. Renderer bir şey üretmiştir, fakat bu üretimin kullanıcıya ulaşabilmesi için pencere bağlamına bağlanması gerekir. Surface bu bağlantıyı açıklar.

Bu bağlantı yalnızca çıktı göndermekten ibaret değildir. Pencerenin boyutu, yoğunluğu, yenileme davranışı, odak durumu, görünürlüğü veya cihaz bağlamı renderer’ın nasıl çalışması gerektiğini etkileyebilir. Surface, renderer’ın bu gerçeklerden haberdar olmasını sağlayan yoldur.

### Sınırlar ve Güncelleme

Pencere, çıktının teslim edildiği sınırlı bağlamdır. Surface bu sınırları renderer’a taşır. Görsel çıktı için bu, çözünürlük, DPI, görünür bölge veya yeniden boyutlandırma bilgisi olabilir. İşitsel çıktı için kanal yapılandırması, örnekleme oranı veya cihaz kullanılabilirliği olabilir. Dokunsal çıktı için hedef cihazın yetenekleri olabilir.

Bu bilgiler olmadan renderer çıktı üretebilir, fakat çıktının doğru yere veya doğru biçimde teslim edilip edilmeyeceğini bilemez. Surface, renderer ile pencere arasındaki pratik uyumu sağlar.

Yeniden boyutlandırma, cihaz değişimi, pencere gizlenmesi, odak kaybı veya hedefin yeniden oluşturulması gibi durumlarda Surface özellikle önemlidir. Bu olaylar renderer’ın çıktı üretme biçimini değiştirebilir. Surface, bu değişikliklerin uygun şekilde iletilmesine yardım eder.

### Etkileşimlerin Yukarı Taşınması

Surface ters yönde de çalışır. Bir pencere etkileşim bilgisi aldığında, bu bilgi çoğu zaman renderer’a veya daha üst katmanlara taşınmalıdır. Surface, pencere kaynaklı etkileşimlerin renderer bağlamına girmesini sağlar.

Örneğin pencere bir fare tıklaması, klavye olayı, dokunma hareketi, odak değişikliği veya cihaz geri bildirimi alabilir. Surface bu bilgiyi renderer’a iletebilir; renderer da gerekirse onu konum, hedef veya domain-specific bağlamla dönüştürebilir ve Bridge üzerinden yukarı aktarabilir.

Bu nedenle Surface yalnızca bir çıktı borusu değildir. Pencere ile renderer arasında iki yönlü bir ilişki kurar: çıktı aşağı gider, etkileşim bilgisi yukarı çıkar.

### Modelde Surface Bağlayıcısı

CatalystUI Modeli’nde Surface bağlayıcısı, render edilmiş çıktının bir pencereye bağlandığı ve pencere bilgisiyle renderer’ın güncel tutulduğu noktayı açıklar. Pencere bağlamı olmadan render edilmiş çıktı kullanıcıya ulaşamaz. Renderer bağlamı olmadan pencere de hangi çıktının nasıl üretileceğini bilemez.

Kısacası Surface, “çıktı render edildi” durumundan “çıktının teslim edileceği bir pencere bağlamı var” durumuna geçiştir. İyi tasarlanmış bir Surface, renderer ile pencere arasındaki sınırı net tutar ve çıktı ile etkileşimin güvenilir biçimde hareket etmesini sağlar.
