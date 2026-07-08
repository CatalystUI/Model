<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 7. Etkileşimler

## Konu Bazlı Özet

Bu noktada bir kullanıcı arayüzünü CatalystUI Modeli aracılığıyla eskisinden çok daha net açıklayabiliriz. Bilgi akışını belirleyebilir, bu bilgiyi alanlara sınıflandırabilir, Stack boyunca izleyebilir ve bağlayıcıların onu bir katmandan diğerine nasıl taşıyıp dönüştürdüğünü açıklayabiliriz. Bunu yaptığımızda kullanıcı arayüzlerinin arkasındaki gizemin büyük kısmı dağılmaya başlar. Bilginin nerede başladığını, nereye gittiğini, nasıl değiştiğini ve sonunda kullanıcıya nasıl ulaştığını görebiliriz.

Peki, bittik mi? Tam olarak değil. Bulmacanın henüz tam ele almadığımız temel bir parçası var: _sen!_

Her kullanıcı arayüzünün en önemli parçası onu kullanan kişidir. Kullanıcı olmadan arayüz amacını kaybeder. O noktada yalnızca bir makinenin başka bir makineyle iletişim kurmasını açıklıyor olurduk; örneğin bir sunucunun API’ye veri göndermesi veya bir programın başka bir programa talimat geçirmesi gibi. Bunlar hâlâ bilgi sistemleri olabilir, ancak kullanıcı arayüzü dediğimiz şeyin kalbinde insanın deneyimi ve niyeti vardır.

Bir **interaction**, bir eylemin arkasındaki niyettir. Tıklama, dokunma, kaydırma, komut, hareket veya söylenen kelime eylemin görünen kısmıdır; etkileşim ise kullanıcının bu eylem aracılığıyla başarmaya çalıştığı şeydir. Bir kullanıcı düğmeye bastığında fiziksel olay yalnızca bir basıştır. Ancak etkileşim “gönder”, “aç”, “sil”, “onayla”, “geri dön” veya başka bir amaç olabilir. Model’in doğru çalışması için bu ayrım önemlidir.

### Eylem ve Niyet

Sistemler genellikle eylemleri algılar. Fare hareket etti, tuş basıldı, parmak ekrana dokundu, mikrofon ses aldı, kontrolcü yön değiştirdi. Bunlar sistemin ölçebildiği olaylardır. Ancak kullanıcı arayüzü tasarımının amacı yalnızca olayları toplamak değildir. Amaç, bu olayların kullanıcının ne yapmak istediğini nasıl ifade ettiğini anlamaktır.

Aynı eylem farklı bağlamlarda farklı etkileşimler olabilir. Bir tıklama bağlantıyı açabilir, bir pencereyi odaklayabilir, bir nesneyi seçebilir veya bir oyunda saldırı başlatabilir. Eylem benzerdir; niyet bağlamdan gelir. Bu nedenle interaction routing yalnızca ham girişleri üst katmanlara göndermekten ibaret değildir. Sistem, eylemi doğru bağlama bağlamalıdır.

### Etkileşimlerin Stack İçindeki Hareketi

Etkileşimler genellikle alt taraftan başlar. Kullanıcı bir eylem yapar. Sistem bu eylemi algılar. Window bağlamı bunun nerede gerçekleştiğini belirlemeye yardım eder. Surface ve Renderer etkileşimle ilgili domain-specific bilgiyi taşıyabilir veya dönüştürebilir. Graphs & Frames etkileşimin hangi component veya control’e ait olduğunu yönlendirir. Sonunda Components, Controls, & Layouts katmanındaki uygun control etkileşimi işler.

Etkileşim işlendiğinde sonuç hiçbir şey yapmamak olabilir, bir görsel durumu değiştirmek olabilir, bir komut başlatmak olabilir veya dijital veriyi güncellemek olabilir. Veri değişirse bu değişiklik Parser aracılığıyla Structure & Semantics’e, Data bağlayıcısı aracılığıyla Digital Data’ya ve gerekirse Data Storage’a geri dönebilir. Böylece kullanıcı niyeti saklanan bilgiye kadar ulaşabilir.

### Katılım Döngüsü

Etkileşimler bilgi akışını katılımcı hale getirir. Sistem çıktı sağlar, kullanıcı bunu algılar, kullanıcı yanıt verir, sistem yanıtı işler ve yeni çıktı üretir. Bu döngü bir arayüzün canlı hissetmesini sağlar. Kullanıcı yalnızca bilgi alan pasif bir izleyici değildir; bilginin neye dönüşeceğine katılır.

Bu yüzden etkileşimler Model’in sonunda ayrı bir konu olarak ele alınır. Alanlar bilginin türünü açıklar. Stack bilginin yerini açıklar. Bağlayıcılar bilginin nasıl dönüştüğünü açıklar. Etkileşimler ise kullanıcının niyetinin bu akışa nasıl girdiğini açıklar.

### Erişilebilirlik ve Etkileşim

Erişilebilirlik açısından etkileşimleri niyet üzerinden düşünmek özellikle önemlidir. Bir kullanıcı belirli bir fiziksel eylemi yapamıyorsa, bu onun aynı niyete sahip olmadığı anlamına gelmez. Tıklayamayan bir kullanıcı seçim yapmak isteyebilir. Konuşamayan bir kullanıcı komut vermek isteyebilir. Göremeyen bir kullanıcı aynı bilgiye ulaşmak isteyebilir.

İyi arayüz tasarımı, niyeti tek bir eylem biçimine kilitlemez. Aynı etkileşim farklı giriş yollarıyla ifade edilebilir: klavye, dokunma, ses, yardımcı teknoloji, haptik cihazlar veya başka araçlar. CatalystUI Modeli bu ayrımı açık tutarak sistemlerin eylem yerine niyete odaklanmasına yardım eder.

### Modelde Etkileşimler

CatalystUI Modeli’nde interaction, kullanıcının bir eylem aracılığıyla ifade ettiği amacı temsil eder. Etkileşimler Stack boyunca hareket eder, bağlayıcılar tarafından dönüştürülebilir, graph ve frame bağlamında yönlendirilebilir, control’ler tarafından işlenebilir ve sonunda dijital veride değişikliğe yol açabilir.

Kısacası etkileşimler, “kullanıcı bir şey yaptı” durumundan “sistem kullanıcının neyi başarmaya çalıştığını işliyor” durumuna geçiştir. Bu ayrımı korumak arayüzleri daha anlaşılır, daha erişilebilir ve daha insana yönelik hale getirir.
