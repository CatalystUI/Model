<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 5.5 Stack :: Graphs & Frames

## Derinlemesine Tartışma

### Düzenleyici Bağlam Katmanı

**Graphs & Frames**, arayüz parçalarının daha büyük ilişkiler ve etkin bağlamlar içinde düzenlendiği katmandır. Layer 5 kullanılabilir component’ler, control’ler ve layout’lar sağlar; ancak arayüz yalnızca bu parçaların var olmasından ibaret değildir. Parçaların birbirleriyle nasıl ilişkili olduğu, hangi bağlamda etkin olduğu, hangi sınırlar içinde bulunduğu ve renderer’a nasıl hazırlanacağı da belirlenmelidir.

Layer 4 bu düzenleyici rolü üstlenir. Graph’lar ilişkileri ve keşfi açıklar. Frame’ler etkin bağlamı, sınırları ve renderer’a dönük hazırlığı koordine eder.

### Graphs

**Graphs**, arayüz parçaları arasındaki ilişkileri düzenler. Bir component tree, scene graph, audio graph, document graph veya başka bir ilişki ağı graph olarak düşünülebilir. Graph, hangi parçaların var olduğunu, nasıl bağlandıklarını, nasıl sorgulanabileceklerini ve hangi yollarla bulunabileceklerini açıklar.

Graph ile layout aynı şey değildir. Layout parçaların düzenini belirleyebilir; graph ise bu parçaların daha büyük ilişkisel yapısını yönetir. Bir layout görsel öğeleri dikey sıraya koyabilir. Graph ise bu layout’un hangi frame içinde bulunduğunu, hangi component’lerin hangi üst öğelere ait olduğunu ve etkileşimlerin nasıl hedefleneceğini bilmeye yardım eder.

### Frames

**Frames**, graph’ları etkin bağlam içinde koordine eder ve alt katmanlara hazırlanacak bilgiyi düzenler. Frame, arayüzün belirli bir anda hangi sınırlar içinde çalıştığını, hangi graph’ın etkin olduğunu, hangi çıktıların hazırlanacağını ve renderer’a neyin gönderileceğini belirleyebilir.

Görsel bir arayüzde frame, pencere yüzeyiyle layout hesaplamaları arasındaki bağlantıyı kurabilir. Yeniden boyutlandırma olaylarını alabilir, layout’ların yeniden hesaplanması gerektiğini bildirebilir ve etkileşimleri graph içindeki doğru hedefe yönlendirebilir. Başka alanlarda frame, ses karışımı bağlamı, haptik çıktı bağlamı veya çok duyulu teslim bağlamı gibi çalışabilir.

### Bağlamın Önemi

Bir component tek başına anlamlı olabilir; fakat kullanıcının deneyimi içinde bağlam olmadan eksik kalır. Bir düğmenin nerede olduğu, hangi formun parçası olduğu, hangi frame içinde bulunduğu ve hangi olaylara yanıt verdiği önemlidir. Graphs & Frames bu bağlamı sağlar.

Bu katman aynı zamanda renderer’a geçmeden önceki son büyük düzenleme noktasıdır. Renderer’ın bütün arayüz mantığını keşfetmesi beklenmez. Layer 4, renderer’a gidecek bilgiyi hazırlar, düzenler ve sınırlandırır.

### Etkileşim Yönlendirmesi

Graphs & Frames, etkileşimlerin doğru component veya control’e yönlendirilmesinde de önemli rol oynar. Sistem bir tıklama, tuş basışı, dokunma, sesli komut veya başka bir etkileşim algıladığında bunun hangi arayüz parçasına ait olduğunu belirlemek gerekir. Bu karar çoğu zaman konum, odak, öncelik, görünürlük, hiyerarşi ve etkin bağlama bağlıdır.

Layer 4 bu bilgileri kullanarak etkileşimleri uygun hedefe taşır. Böylece Layer 5’teki control, kullanıcının niyetini gerçekten işleyebilir.

### Modelde Graphs & Frames

CatalystUI Modeli’nde Layer 4, kullanılabilir arayüz parçalarının düzenlenmiş bağlama dönüştüğü katmandır. Graph’lar ilişkileri ve keşfi yönetir. Frame’ler etkin bağlamı ve renderer’a hazırlığı koordine eder.

Kısacası bu katman, “arayüz parçaları var” durumundan “arayüz parçaları anlamlı bir bütün içinde düzenlendi” durumuna geçiştir. İyi tasarlandığında arayüz daha tutarlı, yönlendirilebilir ve render edilmeye hazır olur.
