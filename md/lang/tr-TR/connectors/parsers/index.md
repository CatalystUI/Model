<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 6.2 Bağlayıcılar :: Parser

## Derinlemesine Tartışma

### Yapıdan Kullanıma

**Parser** bağlayıcısı **Layer 6: Structure & Semantics** ile **Layer 5: Components, Controls, & Layouts** arasında yer alır. Yapılandırılmış bilgiyi alıp arayüzün geri kalanının etkin biçimde kullanabileceği, değiştirebileceği, düzenleyebileceği veya yanıtlayabileceği bir şeye dönüştürmekten sorumludur.

Layer 6 bilgiye kararlı ve yorumlanmış bir biçim verir. Verinin ne anlama geldiğini, nasıl düzenlendiğini ve hangi kuralların ona şekil verdiğini tanımlar. Ancak bir yapı, arayüz nesnesiyle aynı şey değildir. Bir yapı sisteme bir belgenin başlığı olduğunu, bir dosyanın bölüm içerdiğini veya bir şarkının zaman bilgisi taşıdığını söyleyebilir; fakat yapının kendisi hâlâ veriyi sadakatle temsil etmeye odaklanır.

Parser bağlayıcısı bu yorumlanmış bilgiyi Layer 5’e taşır; burada bilgi değiştirilebilir hale gelir. Bir yapı burada bileşene, kontrole veya yerleşime dönüşebilir. Bilgi yalnızca kararlı bir açıklama olmaktan çıkıp programın üzerinde çalışabileceği kullanılabilir bir arayüz parçası haline gelir.

### Yorumlamayı Nesneye Dönüştürmek

Parser’ın rolü anlamı kaybetmeden biçim değiştirmektir. Layer 6’daki yapı, verinin kurallara göre nasıl anlaşılması gerektiğini söyler. Layer 5 ise geliştiricinin ve arayüzün bu veriyi nasıl kullanabileceğini ifade eder. Parser, bu iki ihtiyaç arasında köprü kurar.

Örneğin bir belge yapısı başlıklar, paragraflar ve bağlantılar içerebilir. Parser bunları metin bileşenlerine, tıklanabilir kontrollere ve yerleşim öğelerine dönüştürebilir. Bir ses yapısı süre, kanal ve örnekleme bilgisi içerebilir. Parser bunu oynatılabilir bir bileşene ve kullanıcı kontrolüne dönüştürebilir.

Bu dönüşüm yalnızca kopyalama değildir. Parser, hangi parçaların kullanılabilir nesnelere dönüşeceğine, hangi bilgilerin durum olarak tutulacağına, hangi etkileşimlerin mümkün olacağına ve hangi yapıların yerleşim içinde temsil edileceğine karar verir.

### Değiştirilebilir Katmana Geçiş

Layer 6 genellikle kararlı yorumlanmış veriye odaklanır. Layer 5 ise değiştirilebilir arayüz parçalarına odaklanır. Bu geçiş önemlidir çünkü kullanıcı arayüzleri canlıdır. Kullanıcı tıklar, yazar, sürükler, seçer, oynatır, durdurur ve değiştirir. Arayüzün bu eylemlere yanıt verebilmesi için verinin yalnızca okunmuş olması yetmez; etkileşime uygun hale gelmesi gerekir.

Parser bağlayıcısı yapıdan bu canlı duruma geçişi sağlar. Bir dosyanın içeriği düzenlenebilir alanlara dönüşebilir. Bir yapılandırma değeri ayarlanabilir kontrol haline gelebilir. Bir veri listesi sıralanabilir, filtrelenebilir veya seçilebilir bileşenlere dönüşebilir.

Bu noktada anlam korunmalıdır. Parser yanlış eşleme yaparsa kullanıcı doğru şeyi değiştiriyor gibi görünse bile altta yatan yapı başka bir şeyi temsil edebilir. Bu nedenle Parser, kullanışlılık ile sadakat arasındaki dengeyi korumalıdır.

### Geriye Ayrıştırma

Parser bağlayıcısı ters yönde de önemlidir. Kullanıcı bir bileşeni veya kontrolü değiştirdiğinde, bu değişikliğin yeniden yapılandırılmış veriye dönmesi gerekebilir. Bu süreçte Parser, değiştirilebilir Layer 5 durumunu alıp Layer 6’nın anlayabileceği kararlı biçime geri çevirir.

Örneğin bir kullanıcı metin alanını düzenlediğinde, bu değişiklik belgedeki bir paragraf yapısına geri yazılabilir. Bir ayar anahtarı değiştirildiğinde, yapılandırma semantiğine uygun bir değer güncellenebilir. Bir oynatma kontrolü zaman konumunu değiştirdiğinde, ilgili yapılandırılmış durum güncellenebilir.

Bu geri dönüş yolu, kullanıcı niyetinin dijital veriye geri taşınmasında temel bir adımdır. Parser yalnızca veriyi arayüze dönüştürmez; arayüzdeki değişiklikleri yeniden anlamlı yapıya bağlar.

### Modelde Parser Bağlayıcısı

CatalystUI Modeli’nde Parser bağlayıcısı, yorumlanmış yapılar ile kullanılabilir arayüz parçaları arasındaki geçişi açıklar. Sembolik anlamı korur, fakat onu etkileşime açık hale getirir. Bileşenler, kontroller ve yerleşimler bu geçiş sayesinde yalnızca rastgele nesneler değil, anlamlı verinin canlı temsilleri olur.

Kısacası Parser, “sistem bu verinin ne olduğunu biliyor” durumundan “arayüz bu veriyle çalışabilir” durumuna geçiştir. Bu bağlayıcı iyi tasarlandığında yapı ile kullanım arasında güvenilir bir hat kurulur. Kötü tasarlandığında arayüz doğru görünebilir, fakat temsil ettiği anlamla bağı zayıflar.
