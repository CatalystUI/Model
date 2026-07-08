<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 4. Alanlar

## Konu Bazlı Özet

CatalystUI Modeli’ni açıklamak için önce alanlardan başlamamız gerekir. Bir _alan_, bir etkileşim sırasında işlenen verinin kategorisini tanımlar. Bu, bilgi akışını parçalara ayırmanın ilk adımıdır. Sistemin hangi _tür_ bilgiyle çalıştığını belirler. Bir mağaza kapısı sensörü hareketi algılamak için görsel ya da uzamsal ipuçları kullanabilir. Bir oyun kumandası dokunsal bilgiyi kullanarak haptik geri bildirim üretebilir. Akıllı bir hoparlör konuşmayı işlerken işitsel bilgiyle çalışabilir. Neredeyse bütün durumlarda alanlar, insanların dünyayı nasıl algıladığıyla uyumludur. Model ayrıca verinin belirli bir duyuya ulaşmadan önceki halini ve aynı anda birden fazla duyuyu kapsayan veriyi de hesaba katar. Sonuç olarak yedi alan “sembolik”, “görsel”, “işitsel”, “dokunsal”, “kokuya ilişkin”, “tada ilişkin” ve “çok duyulu” olarak tanımlanır.

Alanlar yararlıdır çünkü bilgi akışını tanımayı, teşhis etmeyi ve kullanıcının ihtiyaçları etrafında şekillendirmeyi kolaylaştırırlar. Bilginin hangi alana ait olduğunu belirleyerek sistemin ne yaptığını, ne yapmadığını ve kullanıcının deneyiminde hangi parçaların eksik olabileceğini daha net görebiliriz. Bu özellikle erişilebilirlik için önemlidir: bir arayüz yalnızca görsel olarak iletişim kuruyorsa Model, dokunsal, işitsel veya diğer bilgi biçimlerinin de düşünülmesi gerekebileceğini görmemize yardım eder. Alanlar bilginin kullanıcının deneyimine nasıl katıldığını açıkladığı için veriyi bir alana sınıflandırmak önce şu soruyu sormakla başlamalıdır: etkileşimde hangi rolü oynuyor? Veri görülmek içinse görseldir; duyulmak içinse işitseldir; hissedilmek içinse dokunsaldır. Veri henüz belirli bir duyuya bağlanmamışsa, bir metin dosyasında olduğu gibi semboliktir. Bir video oyununun görselleri, sesi ve kumanda titreşimini birleştirmesi gibi birden fazla duyusal kategori tek bir deneyim olarak birlikte çalışıyorsa çok duyuludur.

### Alanların Modeldeki Rolü

Veri bir alana sınıflandırıldığında etkileşim daha net bir başlangıç noktasına sahip olur. Sistemin hangi bilgiyi işlediğini, kullanıcının hangi deneyimi yaşayacağını ve başka iletişim biçimlerinin düşünülmesi gerekip gerekmediğini biliriz. Bu kategori kurulduğunda Model, verinin türünü belirlemekten verinin arayüzün içinden nasıl hareket ettiğini açıklamaya geçebilir.
