<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 4.7 Alanlar :: Çok Duyulu

## Derinlemesine Tartışma

**Çok duyulu** alan, birden fazla duyu için tek bir birleşik deneyimin parçası olarak şekillendirilmiş veriyi açıklar. Bu yalnızca aynı sistemde birden fazla çıktı bulunması değildir. Farklı duyusal biçimlerin kullanıcının onları “*tek bir şey*” olarak alacağı şekilde birleştirildiği, koordine edildiği, yönlendirildiği veya birlikte teslim edildiği noktadır.

Bu ayrım önemlidir çünkü bir sistem anlamlı biçimde çok duyulu olmadan da birden fazla çıktı türü içerebilir. Bir program bir yerde görüntü gösterebilir ve başka bir yerde ses çalabilir; fakat bu çıktılar ilişkisizse ayrı iletişim biçimleri olarak kalırlar. Çok duyulu veri, bu biçimler bilerek birbirine bağlandığında veya aynı anda sunulduğunda ortaya çıkar. Senkronize sesli bir video, etki sesini fiziksel geri bildirimle birleştiren bir oyun olayı veya ayrı ekran ve hoparlör yollarından koordine çıktı gönderen bir cihaz bu alana ait olabilir, çünkü deneyim çıktılar arasındaki ilişkiye bağlıdır.

Çok duyulu veri çoğu zaman bilginin artık tek bir yalıtılmış temsil olarak değil, koordine edilmiş bir teslimat olarak ele alındığı noktada görünür. Veri bir akışta birleştirilebilir, çıktılar arasında bölünebilir veya aynı anda birkaç cihaz için hazırlanabilir. Önemli özellik her şeyin tek bir kablodan, dosyadan veya nesneden geçmesi değildir. Önemli özellik, kullanıcının sonucu tek anlamlı olay olarak almasıdır.

### Çok Duyulu Veriyi Anlamak

Çok duyulu veriyi anlamanın yararlı bir yolu **bileşim**, **senkronizasyon** ve **yönlendirme** kavramlarını düşünmektir.

**Bileşim**, farklı çıktı biçimlerinin nasıl bir araya getirildiğini açıklar. Bir video görüşmesinde konuşma, yüz hareketi, altyazılar ve arayüz geri bildirimi aynı deneyime katkıda bulunabilir. Bu parçaların hiçbiri diğerlerinin yerini tamamen almaz. Anlamları, tek bir iletişimsel bütün olarak birleştirildikleri için güçlenir.

**Senkronizasyon**, bu çıktıların zaman içinde nasıl ilişkili kaldığını açıklar. Çok geç gelen bir ses, olay geçtikten sonra tetiklenen bir titreşim veya konuşmanın gerisinde kalan altyazılar, her çıktı tek başına çalışıyor olsa bile deneyimi bozuk hissettirebilir. Çok duyulu veri zamanlamaya bağlıdır çünkü sinyaller arasındaki ilişki çoğu zaman anlamın parçasıdır.

**Yönlendirme**, birleşik bir deneyimin ayrı yollar üzerinden nasıl teslim edilebileceğini açıklar. Sistem çıktının bir bölümünü ekrana, bir bölümünü hoparlörlere, bir bölümünü de haptik bir cihaza gönderebilir. Bu yollar fiziksel olarak ayrı olabilir; fakat doğru koordine edildiklerinde kullanıcı onları tek bir etkileşim olarak anlar. Yönlendirme önemlidir çünkü çok duyulu veri teslimatta bölünürken anlamda birleşik kalmak zorundadır.

### Çok Duyulu Anlam

Çok duyulu çıktı anlamı ilişki üzerinden ifade eder. Bir ses kullanıcının gördüğünü doğrulayabilir. Bir titreşim kullanıcının duyduğuna ağırlık verebilir. Bir altyazı, konuşmada kaybolabilecek bilgiyi koruyabilir. Her parçanın kendi duyusal biçimi vardır; fakat daha büyük anlam parçaların birlikte nasıl çalıştığından gelir.

Bu, çok duyulu tasarımı yalnızca efekt eklemekten farklı kılar. Bir düğmeye ses eklemek otomatik olarak anlamlı değildir. Bir uyarıya titreşim eklemek otomatik olarak yararlı değildir. Görsel animasyon sesle eşleştirildiğinde ikisi de aynı olayı iletiyorsa etkileşimi güçlendirebilir; fakat farklı şeyler ima ediyorlarsa karışıklık da yaratabilir. Alanın yararı, çıktıların işbirliği mi yaptığı yoksa yalnızca yan yana mı bulunduğu sorusunu sormasıdır.

Çok duyulu veri, tek bir duyusal yoldan daha dayanıklı anlam da taşıyabilir. Bir çıktı kaçırılırsa başka biri mesajın bir bölümünü koruyabilir. Kullanıcı görmeye güvenemiyorsa ses önemli bilgiyi taşıyabilir. Ortam gürültülüyse dokunma veya görünür yapı taşıyabilir. İyi tasarlanmış çok duyulu deneyim anlamı rastgele dağıtmaz; anlamı amaçlı biçimde paylaştırır.

### Çok Duyulu Veri ve Erişilebilirlik

Çok duyulu alan erişilebilirlik için özellikle önemlidir çünkü anlamın farklı algı biçimleri arasında korunup korunmadığını belirlemeye yardım eder. Birden fazla çıktı iyi koordine edildiğinde kullanıcı ne olduğunu anlamak için birden fazla yola sahip olur. Kötü koordine edildiklerinde sistem yüzeyde erişilebilir görünebilir, fakat önemli anlam hâlâ tek bir duyusal yolda sıkışmış kalabilir.

Görsel olarak görünen, ses çıkaran ve fiziksel geri bildirim sağlayan bir bildirim aynı olayı birkaç yolla iletebilir. Bu yararlı olabilir; ancak yalnızca her biçim anlamlı ve uygunsa. Ses, görsel çıktının taşımadığı bilgiyi taşıyorsa veya görsel çıktı diğer çıktıların erişemediği ayrıntı içeriyorsa deneyim hâlâ dengesiz olabilir. Çok duyulu tasarım yalnızca efektleri çoğaltmamalı, niyeti korumalıdır.

Sistemin kullanıcı denetimine saygı duyması gereken yer de burasıdır. Bazı kullanıcılar bir duyudan daha fazla, başka bir duyudan daha az çıktı isteyebilir. Başkaları sesi kapatabilir, hareketi azaltabilir, titreşimden kaçınabilir veya altyazıya güvenebilir. Çok duyulu deneyim, deneyimi tutarlı kılan anlamı kaybetmeden uyarlanabildiğinde en güçlü halindedir.

### Daha Geniş Sistemlerde Çok Duyulu Veri

Çok duyulu veri çoğu zaman bilginin aynı anda birkaç kanaldan teslim edilmesi gereken sistemlerde görünür. Medya oynatma hareketli görüntüleri ve sesi tek bir akışta birleştirebilir. Bir simülatör, gerçek dünyadaki bir olayı temsil etmek için görselleri, sesi ve fiziksel geri bildirimi koordine edebilir. Bir işletim ortamı, farklı çıktı türlerini farklı cihazlara yönlendirirken kullanıcıya yine de tek bir birleşik etkileşim sunabilir.

Bu örnekler çok duyulu verinin gevşek bir ayrı alanlar koleksiyonu gibi ele alınamayacağını gösterir. Çıktılar senkronize edildiğinde, bestelendiğinde veya birlikte yönlendirildiğinde aralarındaki ilişki bilginin parçası olur. Sistem artık yalnızca “Ne görülmeli?” veya “Ne duyulmalı?” diye sormaz. Birden fazla algı biçiminin kullanıcının tek bir olayı anlaması için birlikte nasıl çalışması gerektiğini sorar.

Bu aynı zamanda çok duyulu verinin neden iyi tasarlanmasının zor olduğunu açıklar. Her çıktının kendi sınırları, zamanlaması, teslim yöntemi ve kullanıcı beklentisi vardır. Bunları birleştirmek aynı mesajı her yere göndermekten fazlasını gerektirir. Anlamın hangi parçasının hangi biçime ait olduğuna, bu biçimlerin nasıl bağlı kalacağına ve birinin kullanılamaz olması halinde ne olacağına karar vermeyi gerektirir.

### Çok Duyulu Veri ve Alanların Amacı

Çok duyulu alan, duyusal iletişim koordine edildiğinde ne olduğunu açıklayarak alan modelini tamamlar. Sembolik veri sisteme anlamı temsil olarak tutma yolu verir. Tekil duyusal alanlar bu anlamın belirli yollarla nasıl algılanabilir hale gelebileceğini açıklar. Çok duyulu veri, bu algılanabilir biçimlerin tek bir daha büyük deneyimde nasıl birleşebileceğini açıklar.

Bu alanın gerekli olmasının nedenlerinden biri budur. O olmadan her karmaşık çıktı yalnızca ayrı duyusal parçalar olarak açıklanmak zorunda kalırdı. Bu, birçok gerçek etkileşimin özünü kaçırırdı. Bir film yalnızca ayrı görüntüler artı ayrı sesler olarak deneyimlenmez. Bir oyun etkisi her zaman ayrı bir animasyon, ayrı bir ses ve ayrı bir titreşim olarak anlaşılmaz. Kullanıcı bunların arasındaki ilişkiyi alır.

Kısacası çok duyulu alan, koordine edilmiş duyusal çıktı olarak şekillendirilmiş bilgiyi açıklar. Sistemlerin birden fazla algı biçiminin tek bağlı bir anlamı taşıyabilmesi için veriyi nasıl bestelediğini, senkronize ettiğini ve yönlendirdiğini gösterir. Çok duyulu veri iyi ele alındığında kullanıcı yalnızca aynı anda birkaç çıktı almaz; ilgili duyular arasında anlamı koruyan birleşik bir deneyim alır.
