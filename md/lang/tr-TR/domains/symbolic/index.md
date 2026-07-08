<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 4.1 Alanlar :: Sembolik

## Derinlemesine Tartışma

**Sembolik** alan, verinin doğrudan bir duyusal çıktıya bağlanmadan önceki temsil edilmiş biçimini açıklar. Sembolik veri, başka bir şeyi temsil ederek anlam taşır. Bir değeri açıklayabilir, bir kural tanımlayabilir, bir mesajı koruyabilir, bir ilişkiyi belirleyebilir ya da sisteme bir şeyin nasıl davranması gerektiğini söyleyebilir. Amacı anında algılanmak değil, temsil etmektir.

Bu durum sembolik veriyi Model bağlamında önemli kılar. Bir sistem, bilgi ilk önce *var olmadığı* sürece bilgi üzerinde anlamlı dönüşümler yapamaz. Bir belge, yapılandırma dosyası, veri biçimi veya işaretleme yapısı anlam içerebilir; fakat bu anlam sembolik olarak tutulur. Sistemin onunla yararlı bir şey yapabilmesi için önce onu belirli beklentilere göre okuması gerekir.

Sembolik veri “ham hiçlik” değildir. Son derece düzenli, derin anlamlı ve yorumlanmaya hazır olabilir. Bir sayı bir boyutu, bir dize bir başlığı, bir etiket ise bir bölümün başlangıcını temsil edebilir. Veri zaten bir şey ifade eder; fakat anlamı doğrudan deneyim yerine hâlâ semboller aracılığıyla taşınır.

### Sembolik Temsil

Bir sembol, kendi anlık biçiminin ötesinde anlam taşıdığı için çalışır. Bir ad, değer, kural veya tanım, sistemin daha sonra anlaması gereken bir şeyin yerine geçebilir. Sembolün kendisi nihai sonuç değildir; sistemin tutabileceği, aktarabileceği, karşılaştırabileceği ve yorumlayabileceği bir temsildir. Sembolik veri, yazılan, saklanan veya tanımlanan şey ile bu temsilin *neyi açıklamayı amaçladığı* arasındaki ayrıma dayanır.

Bu yüzden sembolik veri, doğrudan çıktının sahip olmadığı bir güç taşır. Nihai deneyimin zaten var olmasını gerektirmeden saklanabilir, kopyalanabilir, aranabilir, iletilebilir, düzenlenebilir, doğrulanabilir ve dönüştürülebilir. Sistem bir şeyi üretmeden önce onun açıklamasını tutabilir. Yazılıma esnekliğinin büyük kısmını veren ayrım budur.

Hassasiyetin önemli olduğu yer de burasıdır. Sembol belirsizse sistem onu yine de işleyebilir; fakat anlam kararsız hale gelir. Belirsiz bir ad, bozuk bir yapı veya tutarsız bir biçim, kullanıcıya hiçbir şey ulaşmadan çok önce karışıklık yaratabilir. Sembolik hatalar tehlikelidir çünkü çoğu zaman erken oluşur ve sonra kendisine bağlı her şeyde yankılanır.

### Sembolik Yapı

Sembolik veri nadiren yalıtılmış değerler olarak var olur. Genellikle her değere bir rol veren bir yapı içinde görünür. Bir yapılandırma dosyası anahtarlar ve değerler içerebilir. Bir belge başlıklar ve paragraflar içerebilir. Bir komut belirli bir sırada argümanlar içerebilir. Anlam yalnızca her sembolden değil, sembolün nerede göründüğünden ve çevresindeki bilgiyle nasıl ilişkilendiğinden gelir.

Bu yüzden aynı sembol farklı anlamlar taşıyabilir. Bir değer, ad veya ifade yalnızca var olduğu için kendini açıklamaz; rolünü çevresindeki bağlamdan kazanır. Yapı, sistemin her sembolik veri parçasını nasıl anlaması gerektiğini söyler: bir özelliği mi tanımlıyor, bir ilişkiyi mi belirliyor, bir koşul mu ayarlıyor, yoksa daha büyük bir bütünün parçasını mı açıklıyor?

İyi biçimlendirilmiş sembolik yapı sisteme güvenilir bir yorumlama yolu sağlar. Verinin ayrıştırılmasına, denetlenmesine, dönüştürülmesine ve sonraki davranışa bağlanmasına izin verir. Zayıf sembolik yapı sistemi tahmin etmeye, çıkarım yapmaya ya da veriyi tamamen reddetmeye zorlar. CatalystUI terimleriyle bu, sembolik yapıyı netliğin başladığı ya da kırıldığı ilk yerlerden biri yapar.

### Sembolik Yorumlama

Sembolik veri, sistem onu nasıl yorumlayacağını bildiğinde yararlı olur. Yorumlama, temsili beklenen anlamla bağlar. Bir parser bir dosya biçimini okuyabilir. Bir şema geçerli alanları tanımlayabilir. Bir komut işleyici, bir ifadenin hangi eylemi açıkladığını belirleyebilir. Yorumlama olmadan sembolik veri hâlâ var olabilir; fakat sistemin onunla güvenilir biçimde hareket etme yolu yoktur.

Bu yüzden sembolik veri niyete bu kadar yakındır. Bir geliştirici kod aracılığıyla davranışı açıklayabilir. Bir kullanıcı ayarlar aracılığıyla davranışı değiştirebilir. Bir belge metin aracılığıyla düşünceyi koruyabilir. Her durumda sembolik biçim, nihai sonucu doğrudan kurcalamadan anlamın ifade edilmesine izin verir. Sistem bir temsil alır, onu yorumlar ve sonra bundan sonra ne olacağını yönlendirmek için kullanır.

Sembolik etkileşim doğrudan manipülasyondan daha az anlık hissedebilir; ancak çoğu zaman daha fazla denetim sağlar. Yazılı bir komut tam olarak tekrarlanabilir. Bir yapılandırma dosyası sürümlendirilebilir. Yapılandırılmış bir belge birçok farklı çıktıya dönüştürülebilir. Sembolik veri hem sisteme hem kullanıcıya sabit bir başvuru noktası verir.

### Sembolik Veri ve Erişilebilirlik

Sembolik veri erişilebilirlikte önemli bir rol oynar çünkü anlamı uyarlanabilir bir biçimde korur. Bilgi yalnızca nihai sunum olarak varsa, sistemin onu açıklama, yeniden boyutlandırma, arama, çevirme veya yeniden düzenleme yeteneği sınırlı olabilir. Altta yatan sembolik anlam korunursa sistem, bu anlamı kullanıcının alabileceği bir biçimde sunmak için daha fazla seçeneğe sahip olur.

Yapılandırılmış bir belge, metnin düzleştirilmiş bir görüntüsünden daha kolay gezinilir. Anlamlı etiketi olan bir kontrol, amacı yalnızca görünüşünde saklı olan bir kontrolden daha kolay dışa açılır. Gerçek ilişkileri olan bir veri tablosu, satır ve sütunların resminden daha kolay yeniden yorumlanır. Her durumda sembolik veri, sunumun arkasındaki anlamı korur.

Bu, sembolik veriyi otomatik olarak erişilebilir yapmaz. Semboller belirsiz, eksik, yanlış etiketlenmiş veya temsil etmeleri gereken şeyden kopuk olabilir. Ancak sembolik anlam açık ve korunmuş olduğunda sistem, amacını kaybetmeden bilgiyi dönüştürme yeteneği kazanır.

### Modelde Sembolik Veri

Sembolik alan, CatalystUI’ya bilginin doğrudan kullanıcıya dönük deneyime dönüşmeden önceki halini açıklama yolu verir. Anlamın saklanabildiği, adlandırılabildiği, düzenlenebildiği ve hazırlanabildiği yerdir. Dosyalar, komutlar, biçimler, meta veriler, ayarlar, kaynak kodu, işaretleme ve sistemin yorumlayabildiği diğer temsil edilmiş biçimler buna dahildir.

Önemi kolayca gözden kaçabilir çünkü sembolik veri çoğu zaman sonucun arkasında yaşar. Kullanıcı deneyimi mümkün kılan dosya biçimini, şemayı, parser’ı veya iç temsili hiç görmeyebilir. Yine de bu sembolik biçimler sistemin neyi anlayabileceğini, ne üretebileceğini ve dönüşümler boyunca anlamı ne kadar sadakatle koruyabileceğini şekillendirir.

Kısacası sembolik alan bilgiyi temsil olarak açıklar. Kullanıcının onu nasıl algıladığıyla değil, sistemin doğrudan sunumdan önce anlamı nasıl tuttuğu ve anladığıyla tanımlanır. Sembolik veri iyi ele alındığında etkileşimin geri kalanı üzerine inşa edilecek daha net bir temele sahip olur.
