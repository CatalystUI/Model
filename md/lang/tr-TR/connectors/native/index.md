<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 6.6 Bağlayıcılar :: Native

## Derinlemesine Tartışma

### Pencerelerden Sistemlere

**Native** bağlayıcısı **Layer 2: Windows** ile **Layer 1: Systems** arasında yer alır. Programın çalıştığı gerçek ortam üzerinden çıktının teslim edilebilmesi ve etkileşimlerin alınabilmesi için pencereyi alttaki sisteme bağlamaktan sorumludur.

Layer 2 Stack’e bir pencere verir: sınırlı bir görünüm, kapsayıcı veya teslim noktası. Layer 1 Stack’e sistemi verir: pencereyi mümkün kılan işletim ortamı, donanım erişimi, hizmetler, cihazlar ve yerel davranış. Native bağlayıcısı bu iki katman arasındaki geçiş noktasını sağlar.

Bu bağlayıcı çoğu zaman Stack’in bilişimin pratik gerçekliğine en doğrudan dokunduğu yerdir. Bu noktaya kadar Model, bilginin yapılandırılmış veri, bileşenler, grafikler, renderer’lar ve surface’ler üzerinden nasıl hareket ettiğini açıklamıştır. Ancak bir pencere yalnızca hayal gücüyle var olmaz. Bir şey sistemden onu oluşturmasını, yapılandırmasını, sürdürmesini, olaylarını almasını ve çıkış yollarıyla bağlamasını istemelidir.

Bu “şey” Native bağlayıcısıdır.

### Bindings Olarak Native

Native bağlayıcısını anlamanın en yararlı yollarından biri onu **bindings** olarak düşünmektir. Bir binding, CatalystUI tarafındaki bir kavramı sistem tarafındaki gerçek bir yeteneğe bağlar. Pencere oluşturma, olay alma, cihaz bilgisi, platform davranışı, dosya seçim pencereleri, imleçler, klavye durumları, ekran bilgileri veya işletim sistemi API çağrıları bu bağlamda binding gerektirebilir.

Bu bindings olmadan pencere kavramı soyut kalır. Model bir pencerenin ne olduğunu açıklayabilir; fakat gerçek sistemde pencerenin oluşması için platformla konuşan bir uygulama gerekir. Native bağlayıcısı bu konuşmayı sağlar.

Farklı platformlar farklı davranır. Windows, macOS, Linux, tarayıcılar, gömülü cihazlar ve konsollar pencere, giriş ve çıkış konusunda farklı API’ler sunar. Native bağlayıcısı bu farkları kapsar ve Layer 2’nin daha tutarlı bir pencere kavramıyla çalışmasına izin verir.

### Sistemin Sorumlulukları

Sistem katmanı, arayüzün çalışabilmesi için gereken temel yetenekleri sağlar. Donanım cihazları, işletim sistemi hizmetleri, sürücüler, süreç yönetimi, pencere yöneticileri, izinler, olay döngüleri ve yerel API’ler bu dünyaya aittir. Native bağlayıcısı, pencerenin bu yeteneklere uygun biçimde bağlanmasını sağlar.

Bu, yalnızca bir pencere açmak değildir. Sistem, pencerenin boyutunu, konumunu, odağını, görünürlüğünü, girdi olaylarını, ekran ölçeğini, kapatma davranışını ve cihaz değişikliklerini yönetebilir. Native bağlayıcısı bu gerçekleri pencere katmanına taşır.

Aynı zamanda pencerenin isteklerini sisteme iletir. Pencere yeniden boyutlandırılmak isteyebilir, başlık değiştirebilir, tam ekrana geçebilir, imleci yakalayabilir, yerel bir iletişim kutusu açabilir veya sistem kaynaklarını kullanabilir. Native bağlayıcısı bu isteklerin sistemin anlayabileceği çağrılara dönüşmesini sağlar.

### Platform Farklarını Soyutlamak

Native bağlayıcısının en pratik yararlarından biri platform farklarını yönetmesidir. Bir uygulama CatalystUI içinde tutarlı bir pencere kavramıyla çalışabilir; fakat altta her sistem farklı kurallara sahiptir. Native bağlayıcısı bu farkları uygun bindings aracılığıyla ele alır.

Bu soyutlama farkları yok saymak anlamına gelmez. Farklar hâlâ gerçektir. Bir platform belirli bir özelliği desteklemeyebilir, farklı izinler gerektirebilir veya farklı olay sırası kullanabilir. Native bağlayıcısı bu farkları açık ve yönetilebilir hale getirir.

İyi tasarlanmış Native bağlayıcısı, üst katmanları gereksiz platform ayrıntılarından korur; fakat önemli gerçekleri de gizlemez. Sistem davranışı arayüzün sonucunu etkiliyorsa bu davranış doğru biçimde temsil edilmelidir.

### Etkileşim ve Çıktı

Native bağlayıcısı hem çıktı hem de etkileşim için çalışır. Çıktı aşağı yönde pencere aracılığıyla sisteme gider; sistem de donanım veya platform hizmetleri üzerinden bunu kullanıcıya ulaştırır. Etkileşim yukarı yönde sistemden pencereye gelir; kullanıcı eylemleri işletim ortamı tarafından algılanır ve pencere bağlamına iletilir.

Örneğin bir fare hareketi önce sistem tarafından algılanır. Native bağlayıcısı bu olayı pencereye taşır. Pencere bunu Surface ve üst katmanlara iletir. Ters yönde renderer görsel çıktı üretir, Surface bunu pencereye bağlar, Native bağlayıcısı da pencerenin sistemle olan gerçek bağlantısı üzerinden teslim edilmesini sağlar.

Bu iki yönlü hareket, Native bağlayıcısını Model’in alt sınırındaki en önemli çeviri noktası yapar.

### Modelde Native Bağlayıcısı

CatalystUI Modeli’nde Native bağlayıcısı, pencere ile sistem arasındaki bindings’i açıklar. Pencerenin gerçek ortamda var olmasını, çıktı teslim etmesini, etkileşim almasını ve yerel sistem davranışıyla iletişim kurmasını sağlar.

Kısacası Native, “pencere kavramı var” durumundan “bu pencere gerçek sistemde çalışıyor” durumuna geçiştir. İyi tasarlanmış bir Native bağlayıcısı, platform ayrıntılarını yönetir, sistem yeteneklerini açık hale getirir ve Stack’in kullanıcının gerçek cihazında anlamlı biçimde çalışmasını sağlar.
