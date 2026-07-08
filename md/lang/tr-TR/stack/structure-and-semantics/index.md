<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.3 Stack :: Structure & Semantics

## Derinlemesine Tartışma

### İlk Yorumlayıcı Katman

**Structure & Semantics**, Digital Data’nın Stack içinde ilk kez anlaşılabilir hale geldiği katmandır. Layer 7 etkin, bilgisayar tarafından okunabilir bir temsil sağlar; ancak bu temsil kendini açıklamaz. Arayüzün geri kalanı onu kullanmadan önce sistemin bunun ne tür bir temsil olduğunu, hangi kurallarla yönetildiğini ve iç parçalarının nasıl anlaşılması gerektiğini bilmesi gerekir.

Layer 6’nın amacı budur. Digital Data’dan gelen etkin temsile anlamlı bir şekil verir. Bu noktada Stack henüz bileşenler, kontroller, yerleşimler, rendering veya sunumla ilgilenmez. Yorumlamayla ilgilenir: temsil nasıl okunmalı, içinde hangi ilişkiler var ve sonraki katmana güvenle hangi biçim geçirilebilir?

### Semantics

**Semantics**, bir temsilin hangi kurallara göre anlaşılması gerektiğini tanımlar. Beklenen anlamı, düzeni, biçimi ve ilişkileri açıklar. Bir dosya biçimi, işaretleme dili, protokol, veri şeması veya komut söz dizimi semantik olarak düşünülebilir.

Semantics, “bu veriye bakarken ne beklemeliyiz?” sorusuna cevap verir. Örneğin bir Markdown belgesinde `#` karakterinin başlık anlamına geldiğini, bir JSON dosyasında süslü parantezlerin nesne yapısı oluşturduğunu veya bir MP3 dosyasında belirli alanların zaman ve ses bilgisini tanımladığını semantik belirler.

Semantics olmadan sistem veriyi okuyabilir, fakat güvenilir biçimde anlamlandıramaz. Aynı karakterler veya baytlar farklı bağlamlarda farklı şeyler ifade edebilir. Semantik, bu bağlamı sağlar.

### Structure

**Structure**, semantik kuralların belirli bir veri örneğine uygulanmış düzenli sonucudur. Bu, verinin programın kullanabileceği kararlı bir temsile dönüştüğü yerdir. Bir belge başlıklar ve paragraflar halinde düzenlenebilir. Bir yapılandırma dosyası anahtar-değer yapısına dönüşebilir. Bir medya dosyası süre, parça ve kodlama bilgisiyle temsil edilebilir.

Structure, veriyi daha erişilebilir hale getirir; ancak genellikle hâlâ değiştirilebilir arayüz nesnesi değildir. Daha çok, verinin güvenilir bir fotoğrafı gibidir. Sistem neyin nerede olduğunu ve ne anlama geldiğini görebilir.

Bu katmanda açıklık çok önemlidir. Structure yanlışsa, sonraki katmanlar yanlış anlam üzerine inşa edilir. Semantics belirsizse, structure kararsız hale gelir. Bu yüzden Layer 6, bilgi akışının sağlamlığı için temel bir noktadır.

### Değişmezlik ve Güvenilirlik

Structure & Semantics çoğu zaman kararlı ve güvenilir yorumlanmış veri olarak düşünülmelidir. Bu katmanın görevi kullanıcı etkileşimlerine anlık tepki vermek değil, verinin ne olduğunu doğru biçimde belirlemektir. Değişiklik gerekiyorsa bu değişiklik genellikle Layer 5’teki bileşenler ve kontroller aracılığıyla başlar, sonra yeniden structure’a ve dijital veriye dönüştürülür.

Bu ayrım arayüz tasarımını temiz tutar. Structure verinin anlamını korur. Components, Controls, & Layouts ise kullanıcının o anlamla çalışabileceği canlı nesneleri sağlar. Bu iki sorumluluk karıştırılırsa sistem hem veriyi yorumlamaya hem de kullanıcı davranışını yönetmeye aynı anda çalışır ve karmaşıklık artar.

### Modelde Structure & Semantics

CatalystUI Modeli’nde Structure & Semantics, Digital Data’nın anlamlı biçimde okunabilir hale geldiği katmandır. Semantics kuralları tanımlar; Structure bu kuralların belirli veriye uygulanmış düzenli sonucudur.

Kısacası Layer 6, “veri var” durumundan “sistem verinin ne olduğunu anlıyor” durumuna geçiştir. Bu katman iyi tasarlandığında arayüzün geri kalanı güvenilir bir anlam temeli üzerinde çalışır.
