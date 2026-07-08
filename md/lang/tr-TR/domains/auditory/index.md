<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 4.3 Alanlar :: İşitsel

## Derinlemesine Tartışma

Görsel alandan sonra **işitsel** alan, işitme için şekillendirilmiş veriyi açıklar. İşitsel veri, ses yoluyla algılanması amaçlanan bilgidir: konuşulan sözcükler, müzik, uyarılar, tonlar veya kullanıcının dinleyerek anladığı başka herhangi bir çıktı. Görsel veri anlamı görmeyle okunabilir biçime düzenlerken, işitsel veri anlamı zamana bağlı ses olarak düzenler.

Bu, işitsel alanı görsel alandan önemli bir şekilde ayırır. Görsel bilgi çoğu zaman bir anda taranabilir; ancak işitsel bilgi genellikle zaman içinde açılır. Kullanıcı bir ekrana bakıp birçok ilişkiyi hemen tanıyabilir, fakat bir ses sırayla duyulmalıdır. Bu nedenle işitsel veri zamanlamaya, sıraya, süreye ve ritme büyük ölçüde bağlıdır. Anlam yalnızca neyin duyulduğunda değil, ne zaman duyulduğunda ve nasıl değiştiğinde de bulunur.

Saklanmış bir ses dosyası yalnızca ses verisi içerdiği için işitsel değildir. Saklanmış, kodlanmış veya soyut olarak temsil edilmiş kaldığı sürece hâlâ sembolik bir biçimdedir. Sistem onu ses çıkışı olarak ürettiğinde ya da üretmeye hazır hale getirdiğinde işitsel alana girer. Başka bir deyişle, işitsel alanın konusu sesin varlığı değil, sesin kullanıcıya iletişim aracı olarak sunulmasıdır.

### İşitsel Veriyi Anlamak

İşitsel veriyi anlamanın yararlı bir yolu **zamanlama**, **ton** ve **yoğunluk** kavramlarını düşünmektir.

**Zamanlama**, sesin ne zaman başladığını, ne kadar sürdüğünü, ne zaman durduğunu ve başka olaylarla nasıl ilişkili olduğunu açıklar. Bir bildirim sesi geç gelirse kullanıcı onu yanlış olayla ilişkilendirebilir. Bir konuşma yanıtı çok erken kesilirse anlam kaybolabilir. İşitsel veride zamanlama çoğu zaman yapının kendisidir.

**Ton**, sesin nasıl hissettirdiğini ve nasıl yorumlandığını açıklar. Bir uyarı keskin, yumuşak, sakin, neşeli veya acil olabilir. Konuşma sentezi dostça, mekanik, resmi veya yorucu gelebilir. Ton, kullanıcının sistemin niyetini ve önceliğini nasıl algıladığını etkiler.

**Yoğunluk**, sesin gücünü, karmaşıklığını ve dikkat çekme seviyesini açıklar. Sessiz bir ipucu arka planda kalabilir. Yüksek bir alarm dikkati zorla çekebilir. Çok fazla ses ise kullanıcının anlamı ayırmasını zorlaştırabilir. İşitsel tasarımda daha fazla ses her zaman daha fazla açıklık değildir.

### İşitsel Anlam

İşitsel çıktı anlamı zaman içinde kurar. Bir melodi beklenti oluşturabilir. Bir ritim eylem hızını iletebilir. Bir tıklama sesi bir işlemin gerçekleştiğini doğrulayabilir. Konuşulan bir cümle karmaşık bilgiyi açıklayabilir. Her durumda kullanıcı anlamı duyduklarından ve bu seslerin nasıl sıralandığından çıkarır.

Bu yüzden işitsel veri özellikle bağlama duyarlıdır. Aynı ses farklı durumlarda farklı anlamlara gelebilir. Kısa bir bip bir yerde başarı, başka bir yerde hata, başka bir yerde yalnızca dikkat isteği olabilir. Kullanıcı anlamı yalnızca sesten değil, sesin hangi anda, hangi eylemden sonra ve hangi sistem durumunda geldiğinden öğrenir.

İyi işitsel tasarım, sesi rastgele efekt olarak kullanmaz. Ses, kullanıcının neler olduğunu anlamasına yardım eden bilgi taşımalıdır. Sesin rolü görsel çıktıyı desteklemek, görsel bilginin yerine geçmek, dikkat çekmek veya başka türlü kaybolacak bir durumu iletmek olabilir. Rol net değilse işitsel çıktı deneyime gürültü ekler.

### İşitsel Veri ve Erişilebilirlik

İşitsel alan erişilebilirlik için çok güçlü olabilir. Görsel bilgi alamayan veya almakta zorlanan kullanıcılar için ses, anlamı taşımanın ana yollarından biri olabilir. Ekran okuyucular, konuşma sentezi, sesli ipuçları ve sözlü yönlendirmeler, sistemlerin bilgiyi görme dışında bir yolla iletmesini sağlar.

Aynı zamanda işitsel verinin kendisi de erişilebilirlik sorunları yaratabilir. Kullanıcı duymayabilir, gürültülü bir ortamda olabilir, sesini kapatmış olabilir veya konuşulan dili anlamayabilir. Bu nedenle önemli anlam yalnızca sese kilitlenmemelidir. Altyazılar, görsel durumlar, dokunsal geri bildirim veya sembolik metin aynı anlamı koruyabilir.

İşitsel erişilebilirlikte amaç tek bir çıktı yolunu yüceltmek değildir. Amaç, anlamı kullanıcının gerçekten alabileceği biçimlerde korumaktır. Ses güçlü bir yol olabilir; fakat en iyi işitsel tasarım, kullanıcının koşullarını ve tercihlerini hesaba katacak kadar esnektir.

### Modelde İşitsel Veri

CatalystUI Modeli’nde işitsel alan, bilginin duyulmak üzere şekillendirildiği her yeri kapsar. Ses efektleri, konuşma, müzik, alarm tonları, sistem bildirimleri, ses akışları ve işitsel geri bildirim buna dahildir. Kaynak veri sembolik olabilir; fakat kullanıcıya ses olarak iletilmek üzere hazırlandığında işitsel alana katılır.

Bu alan, kullanıcı arayüzünün yalnızca ekrandan ibaret olmadığını hatırlatır. Bir sistem konuşabilir, uyarabilir, doğrulayabilir, yönlendirebilir veya atmosfer oluşturabilir. Bunların her biri bilgi akışının parçasıdır. İşitsel çıktı iyi ele alındığında sistemin anlamı zamana, sıraya ve sese yerleştirmesine izin verir.

Kısacası işitsel alan, işitme yoluyla algılanmak üzere şekillendirilmiş bilgiyi açıklar. Zamanlama, ton ve yoğunluğun anlamı nasıl taşıdığını gösterir. İşitsel veri iyi tasarlandığında kullanıcı yalnızca bir ses duymaz; sistemin ne anlatmaya çalıştığını anlar.
