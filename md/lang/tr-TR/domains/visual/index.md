<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 4.2 Alanlar :: Görsel

## Derinlemesine Tartışma

**Sembolik** alan veriyi belirli bir duyuya bağlanmadan önce açıklarken, **görsel** alan veriyi görme için şekillendirildikten sonra açıklar. Görsel veri görülmesi amaçlanan bilgidir: bir görüntü, render edilmiş metin ya da görünür bir kontrol. Önemli ayrım verinin bir gün ekranda “görünebilmesi” değil, etkileşimdeki mevcut rolünün görme yoluyla iletişim kurmak olup olmadığıdır.

Bu, görsel verinin arkasındaki saklanan biçimle karıştırılmaması gerektiği anlamına gelir. Görüntü verisi içeren bir dosya, yalnızca saklanan bilgi olarak var olduğu sürece hâlâ semboliktir. Bir paragraf metin, yalnızca karakterler, işaretleme veya başka bir soyut temsil olarak var olduğu sürece semboliktir. Sistem onu kullanıcının görebileceği ve yorumlayabileceği bir biçimde sunduğunda görsel olur. Değişen şey verinin daha önemli hale gelmesi değildir; iletişim yöntemi temsilden algıya taşınmıştır.

Görsel veri çok yaygındır çünkü görme birçok ilişkiyi aynı anda iletebilir. Boyut, renk, boşluk, yön, gruplama ve hareket kullanıcının bir şeyin ne olduğunu, nereye ait olduğunu ve üzerinde işlem yapılıp yapılamayacağını anlamasına yardım eder. Bu yüzden görsel arayüzler çoğu zaman anlık hissedilir. Bir kullanıcı bir pencereye, web sayfasına veya oyun sahnesine bakıp her kelimeyi okumadan önce anlam toplayabilir. Sistem yalnızca veriyi göstermiyor; veriyi görünür bir deneyim hâline düzenliyordur.

### Görsel Veriyi Anlamak

Görsel veriyi anlamanın yararlı bir yolu **yerleşim**, **görünüm** ve **durum** kavramlarını düşünmektir. Bunlar CatalystUI Modeli’nde resmi alt alanlar ya da zorunlu kategoriler değildir; fakat görsel bilginin anlamı nasıl ilettiğini tanımak için pratik bir yol sağlarlar.

**Yerleşim**, görsel verinin nerede göründüğünü ve çevresindeki bilgiyle nasıl ilişkilendiğini açıklar. Bir paragrafın üzerine yerleştirilen başlık sahiplik ilişkisi kurar. Bir formun yakınına yerleştirilen düğme ilişki kurar. Diğer içeriğin üzerine yerleştirilen menü geçici öncelik iletir. Yerleşim önemlidir çünkü kullanıcı görünür nesneleri yalıtılmış olarak algılamaz; görünür nesneler arasındaki ilişkileri algılar.

**Görünüm**, görsel verinin kendini kullanıcıya nasıl sunduğunu açıklar. Şekil, renk, tipografi, kontrast ve imge kullanıcının neye baktığına dair inancını etkiler. Bir metin, nasıl biçimlendirildiğine göre başlık, uyarı veya bağlantı gibi görünebilir. Bir dikdörtgen, kenarlığına, boşluğuna ve bağlamına göre düğme, panel veya süsleme gibi görünebilir. Görünüm, görsel veriye tanınabilir biçimini verir.

**Durum**, görsel olarak iletilen mevcut koşulu açıklar. Bir kontrol etkin, devre dışı, seçili, odaklanmış, yükleniyor veya gizli görünebilir. Durum, kullanıcının sistemin o anda ne yaptığını ve hangi eylemlerin mümkün olduğunu anlamasına yardım eder. Görsel durum özellikle önemlidir çünkü kullanıcılar çoğu zaman sistem davranışını metinsel açıklamadan önce görünüşten çıkarır.

### Görsel Anlam ve Bağlam

Görsel veri asla tek başına anlam taşımaz. Bir simge, düğme veya metin parçası ancak çevresindeki görsel bağlam içinde anlam kazanır. Aynı sembol bir yerde onay, başka bir yerde kapatma, başka bir yerde dikkat uyarısı olabilir. Renk, konum, hizalama ve komşu öğeler kullanıcının gördüğü şeyi yorumlama biçimini değiştirir.

Bu nedenle iyi görsel tasarım yalnızca güzel görünmekle ilgili değildir. Görsel ilişkileri güvenilir kılmakla ilgilidir. Bir şey tıklanabilir görünüyorsa tıklanabilir olmalıdır. Bir şey başlık gibi görünüyorsa altındaki içeriği anlamlı biçimde tanıtmalıdır. Bir uyarı acil görünüyorsa gerçekten dikkat gerektirmelidir. Görsel biçim davranışla uyuşmadığında kullanıcı arayüze güvenini kaybetmeye başlar.

CatalystUI açısından görsel veri, algılanabilir iletişime dönüşmüş bilgidir. Bu iletişim yalnızca piksellerden ibaret değildir. Pikseller araçtır. Görsel anlam; yapı, yerleşim, görünüm ve durumun kullanıcı için anlaşılabilir bir biçimde birleşmesinden gelir.

### Görsel Veri ve Erişilebilirlik

Görsel alan erişilebilirlikle yakından ilişkilidir çünkü birçok arayüz anlamının büyük bölümünü görsel biçime yükler. Bu güçlü olabilir, ancak aynı zamanda kırılgan da olabilir. Anlam yalnızca renk, konum, hareket veya küçük görsel ayrıntılarla iletilirse bazı kullanıcılar bilgiyi kaçırabilir. Görsel veri kullanıcıyı desteklemeli, bilgiyi tek bir algı kanalına kilitlememelidir.

Okunabilir metin, yeterli kontrast, açık odak durumları, tutarlı yerleşim ve anlamlı görsel hiyerarşi görsel verinin daha güvenilir olmasına yardım eder. Fakat görsel erişilebilirlik yalnızca görseli iyileştirmekten ibaret değildir. Altta yatan sembolik anlamı korumak da önemlidir, böylece sistem aynı anlamı işitsel, dokunsal veya başka yollarla da sağlayabilir.

Bu bağlamda görsel alan, tasarımcıya basit bir soru sorar: Kullanıcının görerek anlaması gereken şey gerçekten görülebilir, anlaşılır ve gerektiğinde başka biçimlere taşınabilir mi? Cevap hayırsa sorun yalnızca stil sorunu değildir; bilgi akışında bir sorundur.

### Modelde Görsel Veri

CatalystUI Modeli’nde görsel alan, bilginin görme yoluyla algılanmak üzere şekillendirildiği yerdir. Render edilmiş metin, görüntüler, grafikler, düğmeler, pencereler, animasyonlar ve görsel yerleşimler buna dahildir. Bu verinin arkasındaki kaynak sembolik olabilir; fakat kullanıcıya görsel biçimde iletildiğinde görsel alana katılır.

Görsel veri çoğu modern arayüzün merkezinde yer alır, ancak Model onu tek varsayılan olarak ele almaz. Görsel alan, diğer alanların yanında bir iletişim biçimidir. Bu ayrım önemlidir çünkü kullanıcı arayüzü tasarımını yalnızca ekran tasarımı gibi düşünmek kolaydır. CatalystUI daha geniş bir soru sorar: bilgi kullanıcıya hangi yolla ulaşır?

Kısacası görsel alan, görülmek üzere şekillendirilmiş bilgiyi açıklar. Verinin nasıl yerleştirildiğine, nasıl göründüğüne, hangi durumu ilettiğine ve kullanıcının onu nasıl yorumladığına odaklanır. Görsel veri iyi ele alındığında, sistem anlamı kullanıcının hızlıca tanıyabileceği ve güvenebileceği bir deneyime dönüştürebilir.
