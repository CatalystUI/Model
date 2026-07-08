<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 2. Ringkasan

## Aliran Informasi

> **Catatan:** Bagian ini berfungsi sebagai gambaran tingkat tinggi dari Model. Dokumentasi berikutnya menyediakan ringkasan per topik dan pembahasan mendalam.

Untuk memahami cara kerja antarmuka pengguna, kita perlu terlebih dahulu mendefinisikan “_aliran informasi_.” Setiap hari, disadari atau tidak, orang berinteraksi dengan sistem informasi: ponsel, komputer, mesin kasir, pintu otomatis, sensor, pengendali permainan, speaker pintar, atau bentuk lain yang menerima tindakan dan memberikan hasil. Dalam setiap sistem itu, informasi disajikan, pengguna menafsirkannya, pengguna dapat merespons, lalu sistem memproses respons tersebut. Setelah itu sistem kembali menyajikan informasi, dan siklusnya berulang selama interaksi berlangsung.

Siklus ini dapat dimulai dari titik mana pun. Informasi bisa saja telah disajikan sebelum pengguna menyadarinya. Pengguna juga dapat melakukan tindakan sebelum sistem tampak memberikan informasi baru. Namun, terlepas dari kapan aliran itu dimulai, pola yang sama tetap berlaku: sistem menyediakan sesuatu yang dapat dipersepsikan, pengguna menanggapinya, dan sistem memproses tanggapan itu.

Model CatalystUI dibangun di sekitar aliran tersebut. Model ini menyediakan struktur tingkat tinggi untuk menjelaskan bagaimana informasi berpindah antara pengguna dan sistem informasi, bahkan ketika sistem itu tidak terlihat seperti antarmuka pengguna tradisional. Sensor pintu toko, misalnya, dapat terasa seperti “merasakan” seseorang secara ajaib. Dengan aliran informasi, prosesnya menjadi lebih sederhana: pengguna melihat pintu, mengenali jalan masuk, lalu berjalan ke area deteksi. Gerakan itu menjadi input bagi sistem. Sistem memprosesnya, membuka pintu sebagai output yang dapat dipersepsikan, lalu pengguna berjalan melewatinya. Setelah beberapa saat, sistem menutup pintu dan pertukaran itu berakhir sampai tindakan berikutnya memulai siklus lagi.

Bersama dengan aliran informasi, sebuah _antarmuka pengguna_ mendefinisikan bagaimana aliran itu terjadi di dalam sistem informasi tertentu. Antarmuka menentukan bagaimana sistem menerima input, menghasilkan output, dan memungkinkan pengguna berinteraksi dengannya. Karena setiap sistem memiliki kebutuhan yang berbeda, banyak istilah dan pendekatan muncul dari waktu ke waktu, termasuk “human interface” (“HI”), “human-machine interface” (“HMI”), dan “human-computer interface” (“HCI”). Pada era komputer modern, bentuk yang paling dikenal adalah “graphical user interface” (“GUI”).

Ketika berbagai implementasi ini dibandingkan, sebuah pola umum mulai tampak. Terlepas dari perbedaan luarnya, kita dapat mengenali tiga konsep yang muncul di seluruh antarmuka pengguna: 1) “domain,” yang mengategorikan dan mengorganisasi data; 2) “Stack,” yang merepresentasikan dan menjelaskan data; dan 3) “konektor,” yang mentransformasi, memodifikasi, dan menerjemahkan data. Masing-masing konsep berguna secara terpisah, tetapi bersama-sama ketiganya membentuk sebuah _sistem yang reversibel_ yang dapat menjelaskan antarmuka secara keseluruhan maupun proses-proses individual di dalamnya.

Di sinilah kekuatan Model CatalystUI terlihat: dengan memisahkan interaksi menjadi kategorisasi, representasi, dan penerjemahan, sistem informasi menjadi lebih mudah dijelaskan, diperiksa, di-debug, dan dipahami.
