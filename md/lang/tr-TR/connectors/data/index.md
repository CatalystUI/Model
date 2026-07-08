<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 6.1 Bağlayıcılar :: Data

## Derinlemesine Tartışma

### İlk Çeviri

**Data** bağlayıcısı Stack’in ilk açık bağlayıcısıdır. **Layer 7: Digital Data** ile **Layer 6: Structure & Semantics** arasında yer alır; burada etkin, bilgisayar tarafından okunabilir bilgi ilk kez yorumlanmış bir biçim almaya başlar. Layer 7 bize bilginin dijital veri olarak var olduğunu söyler. Layer 6 ise bu bilginin nasıl yapılandığını ve ne anlama geldiğini söyler. Data bağlayıcısı sistemin bir durumdan diğerine nasıl geçtiğini açıklar.

Bu bağlayıcı gereklidir çünkü dijital veri kendini yorumlamaz. Bir dosya, akış, tampon, veritabanı sonucu, yanıt veya mesaj zaten düzenli bilgi içerebilir; ancak düzen, yorumla aynı şey değildir. Bir şeyin veriye erişmesi, onu uygun beklentilere göre okuması ve Structure & Semantics’in anlayabileceği bir biçim üretmesi gerekir. Bu “şey” Data bağlayıcısıdır.

Bu anlamda Data bağlayıcısı açık Stack içindeki ilk çeviri eylemidir. Saklanan veya etkin dijital bilgiyi alır ve onu Model’in hakkında akıl yürütebileceği yapılandırılmış bir temsile taşır.

### Dijital Veriye Erişim

Data bağlayıcısının ilk sorumluluğu dijital veriye erişmektir. Bu erişim birçok biçim alabilir. Bir dosya açılabilir, bir ağ yanıtı okunabilir, bir bellek tamponu incelenebilir, bir veritabanı sonucu alınabilir veya bir kaynak akış halinde tüketilebilir. Önemli olan kaynak türü değildir. Önemli olan bağlayıcının etkin dijital temsil ile onu anlayacak yapı arasında sınır görevi görmesidir.

Bu sınır önemlidir çünkü Layer 7 yalnızca verinin bilgisayar tarafından okunabilir biçimde var olduğunu garanti eder. Verinin güvenli, geçerli, eksiksiz, iyi biçimlendirilmiş veya anlamlı olduğunu garanti etmez. Data bağlayıcısı bu temsile kontrollü erişim sağlayarak sonraki katmanın çalışabileceği koşulları oluşturur.

Bazı durumlarda Data bağlayıcısı çok basit olabilir. Bir string’i okuyup yapılandırılmış bir nesneye geçirebilir. Başka durumlarda karmaşık olabilir: kodlama algılayabilir, bayt sırası yorumlayabilir, sıkıştırmayı çözebilir, parçalı veri okuyabilir veya eksik girdiyi reddedebilir. Karmaşıklık değişir; rol aynı kalır.

### Yorumlamaya Hazırlık

Data bağlayıcısı Layer 6’nın yerine geçmez. Semantiği tanımlamaz ve bütün anlamı kendisi üstlenmez. Bunun yerine veriyi, Structure & Semantics’in güvenilir biçimde yorumlayabileceği duruma getirir. Bu ayrım önemlidir: Data bağlayıcısı erişim ve geçiş sağlar; Layer 6 anlamı ve yapıyı açıklar.

Örneğin bir Markdown dosyasını düşünelim. Layer 7, dosyanın etkin dijital içeriğidir. Data bağlayıcısı dosyayı okuyabilir, metin kodlamasını çözebilir ve karakter akışını sağlayabilir. Ancak Markdown başlığının ne anlama geldiğini, bağlantı sözdiziminin nasıl yorumlanacağını veya belge yapısının nasıl kurulacağını asıl tanımlayan Layer 6’daki semantik ve yapıdır.

Bu hazırlık adımı yanlış yapılırsa sonraki bütün katmanlar etkilenir. Yanlış kodlama, kesilmiş giriş, bozuk akış veya hatalı kaynak seçimi, Structure & Semantics’in doğru çalışmasını engeller. Bu yüzden Data bağlayıcısı düşük seviyede görünse de anlamın korunması için çok kritiktir.

### Geri Dönüş Yolu

Bağlayıcılar yalnızca yukarıdan aşağıya akış için değildir. Kullanıcı etkileşimi veriyi değiştirdiğinde, değişiklikler sonunda yeniden dijital biçime dönmelidir. Data bağlayıcısı bu dönüş yolunda da rol oynar. Yapılandırılmış veya yorumlanmış bilgi, saklanabilir ya da aktarılabilir bir dijital temsile geri yazılabilir.

Bu yazma işlemi dosyayı kaydetmek, veritabanına kayıt göndermek, bir API isteği oluşturmak, bir tamponu güncellemek veya yeni bir dijital paket üretmek olabilir. Her durumda bağlayıcı, Layer 6’daki yapılandırılmış anlam ile Layer 7’deki dijital temsil arasında geçiş sağlar.

Bu geri dönüş yolu, Model’in tersinir olmasının nedenlerinden biridir. Bilgi yalnızca kullanıcıya doğru akmaz; kullanıcının niyeti de veriye geri dönebilir. Data bağlayıcısı, bu dönüşün sonunda anlamlı değişikliğin yeniden bilgisayar tarafından okunabilir biçime bağlandığı yerdir.

### Modelde Data Bağlayıcısı

CatalystUI Modeli’nde Data bağlayıcısı, dijital verinin yorumlanmış yapıya girdiği ve yapılandırılmış bilginin tekrar dijital veriye döndüğü geçişi açıklar. Dosyaları, akışları, bellek tamponlarını, veritabanı sonuçlarını, API yanıtlarını ve benzeri kaynakları kapsayabilir.

Kısacası Data bağlayıcısı, “veri var” durumundan “veri okunabilir ve yorumlanmaya hazır” durumuna geçiştir. Bu bağlayıcı iyi tasarlandığında Stack’in geri kalanı sağlam bir giriş alır. Kötü tasarlandığında sorun daha üst katmanlarda görünse bile kökeni çoğu zaman burada olur.
