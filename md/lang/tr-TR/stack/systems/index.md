<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.8 Stack :: Systems

## Derinlemesine Tartışma

### En Alt Açık Katman

**Systems**, Stack’in en alt açık katmanıdır. Bu katman, çıktının teslim edilmesi ve etkileşimin alınması için gereken alttaki hizmetleri, cihazları ve işlemleri sağlayan bilişim ortamını temsil eder. Layer 2 çıktı ve etkileşimin geçtiği sınırlı bağlamı tanımlarken, Layer 1 bu bağlamı mümkün kılan daha geniş ortamı temsil eder.

Bir sistem yalnızca masaüstü işletim sistemi olarak anlaşılmamalıdır. CatalystUI Modeli’nde sistem, arayüzü çalışma zamanında destekleyen düzenli süreçler ve platform yetenekleri kümesidir. Geleneksel bir işletim sistemi, gömülü ortam, konsol, tarayıcı çalışma zamanı, donanım platformu veya başka bir yönetilen bilişim bağlamı olabilir. Belirleyici özellik ürün kategorisi değildir; arayüzün gerçekten çalışabilmesi için alt seviye yetenekleri sağlamasıdır.

### Çalışma Ortamı

System katmanı cihazları, sürücüleri, izinleri, olay döngülerini, pencere yöneticilerini, ses sistemlerini, giriş kaynaklarını, zamanlayıcıları, dosya erişimini ve platform API’lerini içerebilir. Arayüz bu yetenekleri doğrudan ya da Native bağlayıcısı aracılığıyla kullanır.

Bu katman Model’in pratik dünyaya değdiği noktadır. Üst katmanlar ne kadar temiz tasarlanmış olursa olsun, çıktı sonunda gerçek bir sistem tarafından teslim edilir ve etkileşimler gerçek bir sistem tarafından alınır. Sistem bu yüzden kullanıcı deneyiminin görünmeyen ama vazgeçilmez temelidir.

### Farklı Sistemler

Farklı sistemler aynı arayüz kavramlarını farklı yollarla destekleyebilir. Bir masaüstü işletim sistemi pencereleri, imleçleri ve klavye olaylarını belirli API’lerle sağlar. Bir tarayıcı benzer kavramları DOM, canvas, event loop ve web API’leri üzerinden sağlar. Bir gömülü cihaz yalnızca küçük bir ekran, birkaç düğme veya tek bir ses çıkışı sunabilir.

CatalystUI açısından bu sistemlerin hepsi incelenebilir çünkü hepsi kullanıcı ile bilgi arasında bir çalışma ortamı sağlar. Model’in amacı hepsinin aynı olduğunu söylemek değildir. Amaç, farklı sistemlerin aynı temel bilgi akışı içinde nerede yer aldığını açıklamaktır.

### Çıktı ve Girdi

System katmanı, çıktının gerçekten kullanıcıya ulaşması ve girdinin gerçekten sisteme alınması için gereken son açık noktadır. Görsel çıktı ekran sürücüsü ve pencere sistemi üzerinden gidebilir. İşitsel çıktı ses sürücüsü ve hoparlörler üzerinden gidebilir. Dokunsal çıktı cihaz motorları üzerinden iletilebilir. Kullanıcı eylemleri de klavye, fare, dokunmatik yüzey, mikrofon, sensör veya başka giriş cihazları aracılığıyla sisteme döner.

Bu yüzden System katmanı iki yönlüdür. Yukarıdan gelen çıktıyı kullanıcıya doğru taşır ve kullanıcıdan gelen eylemleri Stack’e geri başlatır.

### Modelde Systems

CatalystUI Modeli’nde Systems, arayüzün altında çalışan gerçek ortamı temsil eder. Donanım ve yazılım yeteneklerini sağlar, windows’un var olmasına izin verir, output’u teslim eder ve input’u alır.

Kısacası Layer 1, “pencerenin bağlamı var” durumundan “bu bağlam gerçek bir bilişim ortamında çalışıyor” durumuna geçiştir. İyi anlaşılan system katmanı, platform sınırlarını, yeteneklerini ve davranışlarını daha açık hale getirir.
