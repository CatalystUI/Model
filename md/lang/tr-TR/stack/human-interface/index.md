<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.9 Stack :: Human Interface

## Derinlemesine Tartışma

### İma Edilen İnsan Sınırı

**Human Interface**, Stack’in ima edilen alt sınırıdır. Kullanıcıyı temsil eder: sistemden algılanabilir çıktı alan ve etkileşim girdisine dönüşebilecek eylemler üreten kişiyi. Daha basit söylemek gerekirse, bu katman sensin.

Bu açık görünebilir, ama önemlidir. Stack bir kullanıcı ile bir bilgi sistemi arasındaki iletişim sürecini açıklamak için vardır. Data Storage, tutulan içeriğin etkin akışa girebildiği veya akıştan çıkabildiği sınırı açıklıyorsa, Human Interface bunun karşı sınırını açıklar: bilgisayar çıktısının sonunda insan deneyiminin parçası olduğu ve insan eyleminin sisteme geri dönüş yolunu başlattığı yer.

Human Interface ima edilir çünkü Model kullanıcının bedenini, zihnini, dikkatini, duygularını, duyularını, niyetlerini, anılarını veya seçimlerini doğrudan temsil etmez. CatalystUI bir sistemin çıktıyı kullanıcıya nasıl teslim ettiğini ve kullanıcının eyleminin nasıl etkileşim girdisine dönüşebileceğini açıklayabilir; fakat kullanıcının kendisini programatik bir katman gibi sahiplenmez.

### Kullanıcı Sonuç Değil, Katılımcıdır

Bir arayüzün amacı yalnızca çıktı üretmek değildir. Amaç, kullanıcının alabileceği, anlayabileceği ve yanıtlayabileceği bir iletişim kurmaktır. Human Interface bunu hatırlatır. Bilgi akışı, kullanıcı gerçekten algılayana ve gerekirse yanıt verene kadar tamamlanmış sayılmaz.

Bu yüzden kullanıcı, Model’in dışında “sonradan eklenen” bir şey değildir. Kullanıcı, akışın nedenidir. Sistem çıktıyı kullanıcının algısı için üretir. Kullanıcı eylemi, sistemin işleyeceği etkileşimi başlatır. Arayüz bu iki yön arasında yaşar.

### Algı ve Niyet

Human Interface iki büyük fikri bir araya getirir: algı ve niyet. Algı, kullanıcının sistem çıktısını görmesi, duyması, hissetmesi, koklaması, tatması veya başka bir şekilde deneyimlemesidir. Niyet ise kullanıcının bir eylem aracılığıyla başarmaya çalıştığı şeydir.

Bir tıklama yalnızca fiziksel bir olay değildir. Kullanıcı bir şeyi seçmek, açmak, onaylamak veya denemek istiyor olabilir. Bir bakış, dokunuş, komut veya hareket de aynı şekilde yalnızca ham eylem değildir; arkasında amaç vardır. Interactions bölümü bu fikri daha ayrıntılı ele alır.

Model için önemli olan, sistemin kullanıcıyı yalnızca giriş üreten bir makine gibi görmemesidir. Kullanıcı anlamı algılar, yorumlar, karar verir ve yanıt verir. Arayüz tasarımı bu gerçeğe saygı duymalıdır.

### İnsanlar Karmaşıktır, Şok Edici Biliyorum

Human Interface’in ima edilmesinin bir başka nedeni de insanların... biraz karmaşık olmasıdır. Ekran çözünürlüğü ölçebilirsin. Ses örnekleme oranı ölçebilirsin. Bir pencerenin boyutunu alabilirsin. Ama kullanıcının dikkatini, yorgunluğunu, sabrını, beklentisini veya “neden bu düğme burada?” diye içinden geçirdiği o çok gerçek duyguyu aynı şekilde modellemek daha zordur.

Ve evet, kullanıcı büyük ihtimalle insandır. Stack insanlar için tasarlanmıştır. Belki köpekler için bir şeyler çıkar. Kediler içinse... klavyeni koruman iyi olabilir.

Çünkü bir kedi yanlışlıkla terminale odaklanıp rastgele tuşlara basarsa, dürüst olalım, artık o senin bilgisayarın değildir. O sistem çoktan yönetim değişikliğine gitmiştir.

Tüm selamlar yeni tüylü yöneticilerimize.

### Modelde Human Interface

CatalystUI Modeli’nde Human Interface, kullanıcının algılanabilir çıktıyı aldığı ve etkileşim yoluyla yanıt verdiği ima edilen sınırdır. Doğrudan uygulanacak bir katman değildir; fakat bütün modelin neden var olduğunu açıklar.

Kısacası Human Interface, “sistem çıktı teslim etti” durumundan “bir insan bunu deneyimledi ve belki yanıt verdi” durumuna geçiştir. Bu sınırı hatırlamak, arayüz tasarımının yalnızca sistemler için değil, insanlar için yapıldığını net tutar.
