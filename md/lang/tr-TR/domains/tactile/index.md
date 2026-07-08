<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 4.4 Alanlar :: Dokunsal

## Derinlemesine Tartışma

**Dokunsal** alan, dokunma yoluyla algılanmak üzere şekillendirilmiş veriyi açıklar. Bu, titreşim, basınç, direnç, doku, kuvvet geri bildirimi ya da kullanıcının bedeniyle hissettiği başka herhangi bir çıktı olabilir. Görsel veri görülür, işitsel veri duyulur; dokunsal veri ise hissedilir.

Dokunsal veri önemlidir çünkü kullanıcı deneyimi yalnızca gözlerden ve kulaklardan oluşmaz. Bir telefonun titreşmesi, bir oyun kumandasının sarsılması, bir cihazın direnç vermesi veya bir Braille ekranının yükseltilmiş noktalar sunması, sistemin bilgi iletmesinin gerçek yollarıdır. Kullanıcı bu çıktıyı doğrudan bedeniyle algılar.

Saklanan bir titreşim profili, haptik örüntü dosyası veya dokunsal komut tek başına dokunsal değildir; sembolik biçimde kalır. Sistem onu hissedilebilir bir çıktıya dönüştürdüğünde dokunsal alana girer. Bu ayrım, Model’in veriyi yalnızca ne içerdiğine göre değil, etkileşimde hangi rolü oynadığına göre sınıflandırmasını sağlar.

### Dokunsal Veriyi Anlamak

Dokunsal veriyi anlamanın yararlı bir yolu **kuvvet**, **örüntü** ve **konum** kavramlarını düşünmektir.

**Kuvvet**, kullanıcının ne kadar güçlü bir geri bildirim hissettiğini açıklar. Hafif bir titreşim nazik bir bildirim olabilir. Güçlü bir sarsıntı aciliyet, çarpışma veya fiziksel etkiyi iletebilir. Kuvvet çok düşükse kullanıcı bilgiyi kaçırabilir; çok yüksekse dikkat dağıtıcı veya rahatsız edici olabilir.

**Örüntü**, dokunsal çıktının zaman içinde nasıl düzenlendiğini açıklar. Kısa bir titreşim onay anlamına gelebilir. Tekrarlanan titreşim uyarı anlamına gelebilir. Ritmik bir dizi kullanıcının bir yönlendirmeyi ya da durumu tanımasına yardım edebilir. Dokunsal anlam çoğu zaman tek bir histen değil, hissin nasıl tekrarlandığından ve değiştiğinden gelir.

**Konum**, geri bildirimin kullanıcının bedeninin veya cihazının neresinde hissedildiğini açıklar. Sol ve sağ titreşim motorları farklı yönleri iletebilir. Bir Braille hücresindeki belirli noktalar belirli karakterleri temsil edebilir. Bir kontrol yüzeyindeki direnç, kullanıcının parmağının nerede olduğunu anlamasına yardım edebilir. Konum, dokunsal verinin bedensel bağlamını sağlar.

### Dokunsal Anlam

Dokunsal çıktı çoğu zaman anlamı doğrudan ve anlık biçimde taşır. Kullanıcı bir titreşimi okumaz; hisseder. Bu nedenle dokunsal veri hızlı uyarılar, dikkat çekme, fiziksel doğrulama ve erişilebilirlik için güçlüdür. Bir düğmeye basıldığını hissetmek, bir çarpışmanın etkisini hissetmek veya bir yönlendirme ipucunu dokunarak almak, sistemin bilgiyi bedensel hale getirmesidir.

Ancak dokunsal anlam bağlama bağlıdır. Aynı titreşim bir yerde başarı, başka bir yerde hata, başka bir yerde yalnızca dokunma onayı olabilir. Kullanıcı anlamı hissin kendisinden, hissin hangi anda geldiğinden ve sistemde neyle ilişkilendirildiğinden öğrenir.

Bu yüzden dokunsal veri dikkatle kullanılmalıdır. Gereksiz titreşim kullanıcıyı yorabilir. Belirsiz örüntüler güvenilir olmayabilir. Fazla yoğun geri bildirim rahatsız edebilir. İyi dokunsal tasarım, hissi yalnızca efekt olarak değil, bilgi taşıyan bir kanal olarak kullanır.

### Dokunsal Veri ve Erişilebilirlik

Dokunsal alan erişilebilirlik için özellikle değerlidir çünkü görme veya işitme dışındaki bir iletişim yolunu açar. Braille ekranları, haptik yönlendirme, titreşim uyarıları ve kuvvet geri bildirimi kullanıcının bilgiyi beden aracılığıyla almasına izin verir. Bazı kullanıcılar için bu yardımcı bir seçenek değil, temel iletişim yoludur.

Yine de dokunsal veri tek başına bütün kullanıcılar için yeterli değildir. Bazı kullanıcılar titreşimi hissedemeyebilir, haptik geri bildirimi kapatabilir veya belirli dokunsal örüntüleri rahatsız edici bulabilir. Bu yüzden önemli anlamın sembolik, görsel veya işitsel biçimlerde de korunması gerekebilir.

CatalystUI açısından erişilebilirlik, anlamı bir kanala hapsetmemekle ilgilidir. Dokunsal veri anlamı güçlü biçimde taşıyabilir; fakat en iyi sistemler, kullanıcının bedensel ihtiyaçlarına ve tercihine göre bu anlamı uyarlayabilir.

### Modelde Dokunsal Veri

CatalystUI Modeli’nde dokunsal alan, bilginin dokunma yoluyla algılanmak üzere şekillendirildiği her yeri kapsar. Haptik geri bildirim, titreşimler, Braille çıktısı, dirençli kontroller, basınç tabanlı sinyaller ve fiziksel geri bildirim sistemleri buna dahildir.

Bu alan, kullanıcı arayüzlerinin yalnızca gördüğümüz ve duyduğumuz şeylerden oluşmadığını gösterir. Sistemler hissedilebilir de olabilir. Dokunsal alan, bilgi akışının bedene nasıl ulaşabileceğini ve kullanıcının bu bilgiyi nasıl yanıtlayabileceğini açıklamak için gereklidir.

Kısacası dokunsal alan, hissedilmek üzere şekillendirilmiş bilgiyi açıklar. Kuvvet, örüntü ve konumun anlamı nasıl taşıdığını gösterir. Dokunsal veri iyi kullanıldığında sistem, kullanıcının yalnızca düşünmesine değil, doğrudan hissetmesine de izin verir.
