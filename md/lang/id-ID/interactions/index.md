<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 7. Interaksi

## Ringkasan Per Topik

### Frustrasi Modern dengan Teknologi

Banyak frustrasi teknologi muncul ketika sistem tidak benar-benar menjelaskan atau menghormati aliran interaksi. Pengguna melakukan sesuatu dengan maksud tertentu, tetapi sistem menerima tindakan itu sebagai event mentah, menafsirkannya dengan cara yang tidak jelas, atau gagal memberi output yang membantu pengguna memahami apa yang terjadi.

Masalah seperti ini sering tampak kecil: tombol yang terasa tidak responsif, menu yang sulit ditemukan, kontrol yang bertindak berbeda di tempat berbeda, aplikasi yang menyembunyikan state, atau framework yang memaksa pengembang melompati lapisan-lapisan abstraksi tanpa jalur yang jelas. Namun di balik semua itu ada masalah yang lebih mendasar: tindakan manusia tidak diterjemahkan secara bersih menjadi perubahan informasi, dan informasi sistem tidak diterjemahkan secara bersih kembali menjadi pengalaman manusia.

CatalystUI memandang interaksi sebagai bagian dari percakapan antara manusia dan sistem informasi. Sistem memberikan output. Manusia mempersepsikan output itu. Manusia bertindak. Sistem menangkap tindakan itu sebagai interaction data. Sistem memprosesnya dan menghasilkan output baru. Jika salah satu tahap ini kabur, pengalaman menjadi membingungkan.

Dengan menempatkan interaksi di dalam model yang reversibel, CatalystUI membantu menjelaskan ke mana tindakan harus pergi. Interaksi dimulai dari manusia, ditangkap oleh system, diterima dalam window, dapat diproses oleh renderer, dikontekstualisasikan oleh graph dan frame, lalu akhirnya ditangani oleh control yang sesuai. Setelah itu perubahan dapat naik kembali menuju struktur dan data digital.

### Tujuan di Balik Semuanya

Tujuan antarmuka bukan sekadar membuat komputer “melakukan sesuatu.” Tujuannya adalah komunikasi. Pengguna memiliki maksud. Sistem memiliki data dan proses. Antarmuka adalah tempat kedua hal itu bertemu.

Interaksi adalah cara maksud pengguna masuk ke sistem. Klik, sentuhan, suara, gerakan, tombol fisik, sensor, atau tindakan lain semuanya menjadi informasi ketika system dapat menangkapnya. Namun tindakan mentah belum tentu mengandung makna lengkap. Makna muncul ketika tindakan itu dilihat dalam konteks: window mana yang aktif, control mana yang relevan, data apa yang sedang ditampilkan, dan tujuan apa yang diwakili oleh tindakan tersebut.

CatalystUI membantu memisahkan tindakan dari interpretasi tindakan. System dapat mengetahui bahwa sebuah tombol ditekan. Window dapat mengetahui bahwa event terjadi dalam konteks tertentu. Graph dapat menentukan control yang relevan. Control dapat mengubah tindakan itu menjadi maksud programatik seperti simpan, putar, hapus, pilih, buka, atau perbarui. Structure & Semantics kemudian dapat memastikan perubahan itu valid, dan Digital Data dapat menyimpannya kembali.

Dengan cara ini, interaksi tidak diperlakukan sebagai kejadian acak. Ia menjadi bagian dari aliran informasi yang dapat dijelaskan, dirutekan, diuji, dan diperbaiki. Itulah nilai dari model: bukan hanya memberi nama pada bagian-bagian antarmuka, tetapi membantu melihat bagaimana tindakan manusia menjadi perubahan bermakna dalam sistem informasi.
