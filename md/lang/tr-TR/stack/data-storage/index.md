<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.1 Stack :: Data Storage

## Derinlemesine Tartışma

### İma Edilen Üst Sınır

**Data Storage**, Stack’in ima edilen üst sınırıdır. Etkin arayüz akışının dışında kalıcı olarak var olabilen verinin bulunduğu veya geri döndüğü yeri temsil eder. Bu bir dosya sistemi, veritabanı, uzak API, önbellek, yapılandırma deposu, bellek içi kaynak veya bilginin tek bir işlemden daha uzun süre kullanılabilir kaldığı başka herhangi bir mekanizma olabilir.

Bu katman ima edilmiştir çünkü CatalystUI doğrudan veri depolama mekanizmasının kendisini modellemez. Model, bilgi etkin arayüz akışına girdikten sonra ne olduğunu açıklar. Yine de veri bir yerden gelmelidir ve çoğu durumda bir yere geri yazılmalıdır. Data Storage bu gerçeği adlandırır.

### Kalıcılık ve Kaynak

Data Storage’ın temel fikri kalıcılıktır. Veri yalnızca anlık bir hesaplama sonucu olmayabilir; daha sonra tekrar okunmak, değiştirilmek veya sunulmak üzere tutulabilir. Bir belge diskte bekleyebilir. Bir kullanıcı profili veritabanında saklanabilir. Bir medya dosyası uzak bir sunucuda bulunabilir. Bir ayar dosyası uygulama kapandıktan sonra da geçerli kalabilir.

Stack açısından önemli olan, bu kaynakların etkin arayüz akışına girmeden önce hâlâ depolama tarafında olmalarıdır. Kullanıcı arayüzü veriyi doğrudan algılanabilir hale getirmeden önce, veri önce etkin dijital temsil olarak alınmalıdır. Bu geçiş Layer 7: Digital Data tarafında başlar.

### Neden İma Edilir?

Data Storage’ın ima edilmesi, önemsiz olduğu anlamına gelmez. Tam tersine, birçok arayüzün amacı depolanan veriyle çalışmaktır. Ancak depolama mekanizmaları çok çeşitlidir ve CatalystUI Modeli’nin asıl konusu depolama sistemlerinin iç tasarımı değildir. Model, depolanan bilginin arayüz akışına nasıl girdiğini ve kullanıcı etkileşimlerinin sonunda nasıl geri dönebileceğini açıklar.

Bu ayrım temiz bir sınır sağlar. Bir SQL veritabanı ile bir Markdown dosyası çok farklı depolama biçimleridir; fakat ikisi de arayüze Digital Data olarak girebilir. Model, depolamanın ayrıntılarını bağlayıcılar ve uygulama kararlarıyla ele alırken bilgi akışının evrensel kısmını açık tutar.

### Modelde Data Storage

CatalystUI Modeli’nde Data Storage, kalıcı bilginin etkin arayüz akışının dışında kalan kaynak veya hedefidir. Üst sınır olarak, bilginin Stack’e girmeden önce nerede beklediğini ve değişikliklerin Stack’ten çıktıktan sonra nereye dönebileceğini açıklar.

Kısacası Data Storage, sandviçin üst ekmeğidir. Belki çok gösterişli değildir, ama bütün malzemelerin dağılmaması için orada olması iyi olur.
