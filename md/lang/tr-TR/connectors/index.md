<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 6. Bağlayıcılar

## Konu Bazlı Özet

Bağlayıcılar benzersizdir çünkü katmanlar arasında bilginin _nasıl_ hareket ettiğini açıklamaktan fazlasını yaparlar; aynı zamanda donanım cihazlarının dayattığı birçok sınırlamayı _soyutlamamıza_ izin verirler. Bunun iddialı bir ifade olduğunun farkındayız; ancak bir kullanıcı arayüzü CatalystUI Stack etrafında doğru tasarlandığında bağlayıcılar, gerektiğinde farklı uygulamalarla değiştirilebilecek şekilde kurulabilir. Bu anlamda bağlayıcılar bilgi için bir _çeviri ortamı_ gibi davranır. Stack’teki katmanların aksine, bir katman bir kez atandığında genellikle belirli bir alana kilitlenirken, bağlayıcılar bilgiyi bir alandan diğerine dönüştürebilir. Örneğin bir bağlayıcı metin içeriğini alıp ekrana, hoparlöre veya hatta bir Braille ekranı üzerinden dokunsal geri bildirime hazırlayabilir!

Stack’te her katmanı belirlediğimiz gibi, bağlayıcılarımızı da bir katmanın başka bir katmanla nerede iletişim kurması gerektiğini belirleyerek saptayabiliriz. Bu önemli bir ayrımdır: “Data Storage” ve “Human Interface” açık Stack katmanları arasında yer almadığı için, bu ima edilen sınırları doğrudan bağlayan resmi bağlayıcılar yoktur. Bağlayıcılar açık komşu katmanlar arasındaki geçişi açıklar.

Model içinde altı bağlayıcı vardır:

- **Data** — Layer 7: Digital Data ↔ Layer 6: Structure & Semantics
- **Parser** — Layer 6: Structure & Semantics ↔ Layer 5: Components, Controls, & Layouts
- **Adapter** — Layer 5: Components, Controls, & Layouts ↔ Layer 4: Graphs & Frames
- **Bridge** — Layer 4: Graphs & Frames ↔ Layer 3: Renderers
- **Surface** — Layer 3: Renderers ↔ Layer 2: Windows
- **Native** — Layer 2: Windows ↔ Layer 1: Systems

### Bağlayıcıların Modeldeki Rolü

Bağlayıcılar, Model’in soyut açıklamasını çalışabilir bir akışa dönüştürür. Katmanlar verinin nerede olduğunu ve hangi role sahip olduğunu söyler; bağlayıcılar ise verinin bir rolden diğerine geçerken nasıl korunacağını, dönüştürüleceğini veya uyarlanacağını açıklar. Bu sayede CatalystUI, yalnızca “hangi parçalar var?” sorusuna değil, “bilgi bu parçalar arasında anlamını kaybetmeden nasıl ilerliyor?” sorusuna da cevap verir.
