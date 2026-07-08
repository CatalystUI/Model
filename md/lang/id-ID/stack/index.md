<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5. Stack

## Ringkasan Per Topik

### Lapisan-Lapisan Stack

**Stack** dalam Model CatalystUI adalah model berlapis yang menjelaskan bagaimana informasi bergerak antara sistem informasi dan pengguna. Stack menunjukkan bagaimana data digital dapat berubah menjadi output yang dapat dipersepsikan, dan bagaimana tindakan pengguna dapat bergerak kembali ke atas menjadi perubahan terhadap data digital.

Stack memiliki tujuh lapisan eksplisit dan dua lapisan tersirat:

- **[Tersirat] Data Storage**
- **Layer 7: Digital Data**
- **Layer 6: Structure & Semantics**
- **Layer 5: Components, Controls, & Layouts**
- **Layer 4: Graphs & Frames**
- **Layer 3: Renderers**
- **Layer 2: Windows**
- **Layer 1: Systems**
- **[Tersirat] Human Interface**

Lapisan-lapisan ini bukan sekadar daftar teknis. Mereka menjelaskan perubahan bertahap dari data yang disimpan dan dapat dibaca komputer menjadi sesuatu yang dapat dipahami manusia. Dalam arah sebaliknya, lapisan-lapisan ini juga menjelaskan bagaimana tindakan manusia dipahami, dirutekan, ditangani, dan akhirnya dapat mengubah data yang disimpan.

### Peran Stack dalam Model

Stack membantu memisahkan tanggung jawab. Digital Data tidak perlu mengetahui cara menggambar tombol. Renderer tidak perlu mengetahui cara menyimpan file konfigurasi. Window tidak perlu memahami seluruh makna sebuah dokumen. Setiap lapisan memiliki peran sendiri, dan konektor di antara lapisan bertugas membawa data dari satu bentuk ke bentuk berikutnya.

Pemisahan ini membuat model lebih mudah digunakan untuk menganalisis sistem. Jika masalah terjadi pada cara data disimpan, kemungkinan besar masalahnya berada di bagian atas Stack. Jika masalah terjadi pada cara output dikirim ke sistem operasi atau perangkat, masalahnya lebih dekat ke bawah. Jika masalah terjadi saat data berpindah dari satu lapisan ke lapisan lain, konektor yang relevan perlu diperiksa.

### Mendemonstrasikan Stack

#### Sensor Pintu

Sensor pintu toko dapat dijelaskan melalui Stack. Data tersimpan dan aturan sistem menentukan cara pintu merespons. Sistem menangkap pergerakan pengguna sebagai interaksi. Window atau konteks sistem menerima sinyal sensor. Lapisan bawah meneruskan informasi itu ke bagian yang menentukan makna tindakan. Sistem kemudian menghasilkan output: pintu terbuka. Pengguna melihat perubahan itu dan berjalan masuk.

Meskipun tidak terlihat seperti aplikasi desktop, prosesnya tetap sebuah antarmuka. Ada output, persepsi, tindakan, input, pemrosesan, dan output baru.

#### Web

Dalam aplikasi web, data digital dapat berupa HTML, CSS, JavaScript, JSON, atau data dari server. Struktur dan Semantik memberi makna pada dokumen dan data. Components, Controls, & Layouts dapat muncul sebagai elemen interaktif dan struktur aplikasi. Graphs & Frames dapat direpresentasikan oleh DOM, tree, layout frame, atau struktur runtime. Renderer browser mengubahnya menjadi output visual, auditory, atau bentuk lain. Window browser menyediakan konteks pengiriman, dan System menjalankannya melalui perangkat pengguna.

### Kebutuhan akan Konektor

Lapisan-lapisan Stack tidak bekerja sendirian. Data harus berpindah dari satu lapisan ke lapisan berikutnya. Perpindahan itulah yang dijelaskan oleh konektor. Tanpa konektor, lapisan akan menjadi kotak-kotak terpisah tanpa jalur yang jelas. Dengan konektor, Stack dapat menjelaskan proses penuh dari penyimpanan data sampai pengalaman manusia, dan kembali lagi dari interaksi manusia menuju data digital.
