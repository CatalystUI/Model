<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.2 Stack :: Digital Data

## Pembahasan Mendalam

### Lapisan Eksplisit Pertama

**Digital Data** adalah lapisan eksplisit pertama di Stack. Lapisan ini mewakili informasi dalam bentuk yang dapat dibaca komputer, yaitu bentuk biner atau representasi digital yang sedang aktif diproses oleh sistem.

Digital Data dapat berupa file, buffer, stream, string, byte array, respons jaringan, dokumen, record, atau bentuk lain yang dapat ditangani oleh komputer. Pada titik ini, informasi sudah tersedia dalam sistem, tetapi belum tentu telah ditafsirkan secara penuh.

### Representasi yang Dapat Dibaca Komputer

Digital Data adalah data yang komputer dapat simpan, salin, kirim, bandingkan, dan proses. Namun, kemampuan komputer untuk memegang data tidak sama dengan kemampuan sistem untuk memahami maknanya. Deretan byte dapat berisi gambar, musik, teks, arsip, konfigurasi, atau sesuatu yang rusak. Tanpa aturan, sistem hanya melihat representasi digital.

Karena itu, Digital Data tidak bertanggung jawab untuk mendefinisikan struktur lengkap atau makna data. Ia hanya menjadi representasi aktif yang siap diberikan kepada lapisan berikutnya.

### Sebelum Struktur dan Semantik

Lapisan berikutnya, **Structure & Semantics**, menjelaskan bagaimana Digital Data harus ditafsirkan. Sebelum mencapai lapisan itu, data belum memiliki bentuk programatik yang kaya. Sebuah file JSON mungkin sudah berisi tanda kurung, string, dan nilai, tetapi Digital Data sendiri tidak mengatakan mana kunci, mana nilai, atau aturan apa yang berlaku. Semua itu muncul setelah data dibaca melalui konektor Data dan ditafsirkan oleh Structure & Semantics.

Pemisahan ini membantu mencegah satu lapisan melakukan terlalu banyak pekerjaan. Digital Data tidak perlu mengetahui semua format yang mungkin ada. Ia hanya menyediakan bahan mentah aktif yang akan ditafsirkan oleh lapisan yang tepat.

### Titik Balik Atas

Dalam aliran dari bawah ke atas, Digital Data juga menjadi titik balik atas. Setelah interaksi pengguna diproses, struktur diperbarui, dan perubahan siap disimpan, sistem dapat kembali menghasilkan Digital Data. Data itu kemudian dapat dikirim ke Data Storage, disimpan ke file, dikirim ke server, atau dipakai kembali dalam proses lain.

Dengan demikian, Digital Data adalah titik masuk dan titik keluar utama bagi informasi aktif di Stack.

### Digital Data dan Domain

Digital Data dapat terkait dengan domain apa pun. File gambar adalah Digital Data yang nantinya dapat ditafsirkan dalam domain Visual. File audio dapat menjadi domain Auditory. File konfigurasi dapat menjadi Symbolic. Stream gabungan dapat menjadi Multisensory. Domain menjelaskan sifat sensoris atau simbolik data, sedangkan lapisan Digital Data menjelaskan tahap representasinya di Stack.

### Mengapa Lapisan Ini Penting

Digital Data menjaga model tetap berakar pada realitas komputer. Sebelum antarmuka dapat menampilkan, memutar, mengguncang, atau merespons sesuatu, informasi harus hadir sebagai data yang dapat diproses mesin. Lapisan ini memberi tempat yang jelas bagi representasi aktif itu tanpa mencampurkannya dengan struktur, komponen, rendering, atau penyimpanan.
