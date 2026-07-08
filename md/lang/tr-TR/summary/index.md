<!--
Bu çeviri ChatGPT tarafından oluşturulmuştur ve bir insan çevirmen tarafından gözden geçirilmelidir.
Çeviri doğrulandıktan sonra bir pull request içinde bu satırları kaldırın.
-->

# 2. Özet

## Bilgi Akışı

> **Not:** Bu bölüm Model’in üst düzey genel bakışı olarak hizmet eder. Sonraki belgeler sırasıyla konu bazlı özetleri ve derinlemesine tartışmaları sağlayacaktır.

Bir kullanıcı arayüzünün nasıl çalıştığını anlamak için önce “_bilgi akışını_” tanımlamamız gerekir. İnsanlar fark etseler de etmeseler de her gün bilgi sistemleriyle etkileşime girerler: bir akıllı telefon, bilgisayar ya da bir mağaza kapısı sensörü gibi. Her sistemde bilgi sunulur, kullanıcı bunu yorumlar, isteğe bağlı olarak yanıt verir ve sistem bu yanıtı işler. Ardından sistem yeniden bilgi sunar ve döngü etkileşim boyunca tekrar eder. Döngü herhangi bir noktada başlayabilir: bilgi, kullanıcı onu yorumlamadan çok önce sunulmuş olabilir ya da kullanıcı kendisine bilgi sunulmadan da yanıt verebilir. Akışın ne zaman ya da nasıl başladığından bağımsız olarak aynı döngü geçerlidir.

CatalystUI Modeli bu akış üzerine kuruludur. Sistem geleneksel bir kullanıcı arayüzüne benzemese bile, bilginin bir kullanıcı ile bir bilgi sistemi arasında nasıl hareket ettiğini açıklamak için üst düzey bir yapı sağlar. Başka bir deyişle, bir mağaza kapısı sensörü bir kişiyi neredeyse sihirli biçimde “algılıyor” gibi görünebilir; fakat bilgi akışı süreci basitleştirir: kullanıcı kapıyı görür, ileriye giden yolu fark eder ve algılama alanına yürür. Bu hareket sisteme girdi olur. Sistem bunu işler, kapıyı algılanabilir çıktı olarak açar ve kullanıcı içeri yürüyerek yanıt verir. Kısa bir gecikmeden sonra sistem kapıyı kapatır; başka bir eylem döngüyü yeniden başlatana kadar alışveriş sona erer.

Bilgi akışıyla birlikte bir _kullanıcı arayüzü_, bu akışın belirli bir bilgi sistemi içinde nasıl gerçekleştiğini tanımlar. Sistemin girdiyi nasıl kabul ettiğini, çıktıyı nasıl ürettiğini ve kullanıcının sistemle nasıl etkileşime girmesine izin verdiğini belirler. Her sistemin ihtiyaçları farklı olduğu için zaman içinde bu etkileşimleri açıklamak ve uygulamak amacıyla “human interfaces” (“HI”), “human-machine interfaces” (“HMI”) ve “human-computer interfaces” (“HCI”) gibi farklı yollar gelişmiştir. Modern bilgisayar çağında bu arayüzlerin en tanıdık biçimi “graphical user interface” (“GUI”), yani grafiksel kullanıcı arayüzüdür.

Farklı uygulamaları karşılaştırdığımızda ortak bir örüntü ortaya çıkmaya başlar. Dış görünüşleri farklı olsa da tüm kullanıcı arayüzlerinde görünen üç kavramı belirleyebiliriz: 1) veriyi sınıflandıran ve düzenleyen “alanlar”; 2) veriyi temsil eden ve açıklayan “Stack”; ve 3) veriyi dönüştüren, değiştiren ve çeviren “bağlayıcılar”. Her kavram tek başına yararlıdır; fakat birlikte hem arayüzün bütününü hem de tek tek süreçleri açıklayabilen _tersinir_ bir _sistem_ oluştururlar. CatalystUI Modeli’nin gücü burada belirginleşir: etkileşimi sınıflandırma, temsil ve çeviri olarak ayırarak bilgi sistemlerini açıklamayı, hata ayıklamayı ve anlamayı kolaylaştırır.
