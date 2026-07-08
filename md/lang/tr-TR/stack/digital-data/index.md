<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.2 Stack :: Digital Data

## Derinlemesine Tartışma

### İlk Açık Veri Katmanı

**Digital Data**, Stack’in ilk açık katmanıdır. Bilginin etkin arayüz akışına bilgisayar tarafından okunabilir biçimde girdiği noktayı temsil eder. Veri artık bir depolama mekanizmasında pasif olarak beklemekle kalmaz; sistemin okuyabileceği, taşıyabileceği ve sonraki katmanlara verebileceği etkin bir temsildir.

Digital Data ikili biçimde temsil edilebilen bilgidir. Bu bir dosyanın baytları, bellekteki bir tampon, bir string, bir ağ yanıtı, bir belge içeriği, bir medya akışı veya makinenin işleyebileceği başka herhangi bir biçim olabilir. Bu katmanda veri vardır, fakat henüz Model’in geri kalanı tarafından yorumlanmış değildir.

### Var Olmak, Anlamak Değildir

Digital Data’nın en önemli ayrımı şudur: verinin var olması, sistemin onun anlamını bildiği anlamına gelmez. Bir dizi bayt bir görüntü, ses dosyası, yapılandırma, metin belgesi veya tamamen bozuk giriş olabilir. Dijital temsil bilgisayar tarafından okunabilir; fakat kendi başına ne olduğunu açıklamaz.

Bu nedenle Digital Data katmanı, anlamdan önceki etkin temsildir. Verinin üzerinde çalışılabilir, fakat onun iç ilişkilerini, kurallarını veya semantik anlamını öğrenmek için bir sonraki katmana geçmek gerekir. Bu geçiş Data bağlayıcısı aracılığıyla Structure & Semantics’e yapılır.

### Etkin Temsil

Data Storage ile Digital Data arasındaki fark, pasif kaynak ile etkin temsil arasındaki farktır. Diskteki bir dosya Data Storage tarafında düşünülebilir. Dosya açılıp okunduğunda ve içeriği arayüz akışında kullanılabilir hale geldiğinde Digital Data olarak temsil edilir.

Aynı bilgi farklı zamanlarda farklı konumlarda bulunabilir. Bir ayar dosyası depoda kalıcıdır. Uygulama onu okuduğunda etkin dijital veri olur. Kullanıcı ayarı değiştirdiğinde ve değişiklik geri yazıldığında veri yeniden depolama sınırına döner. Stack bu hareketi açıklamak için vardır.

### Modelde Digital Data

CatalystUI Modeli’nde Digital Data, saklanan bilginin etkin arayüz akışına girdiği ilk açık noktadır. Verinin henüz anlamlandırılmadan önceki bilgisayar tarafından okunabilir halini temsil eder. Bu katman olmadan sonraki katmanların yorumlayacağı, düzenleyeceği veya sunacağı hiçbir şey yoktur.

Kısacası Digital Data, “bilgi artık sistemin elinde” demektir. Henüz anlaşılmamış olabilir, henüz kullanıcı için yararlı olmayabilir, ama akış başlamıştır.
