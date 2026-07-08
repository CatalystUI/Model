<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.1 Stack :: Data Storage

## Pembahasan Mendalam

### Batas Tersirat

**Data Storage** adalah lapisan tersirat di bagian paling atas Stack. Ia mewakili tempat atau mekanisme tempat data disimpan sebelum masuk ke aliran aktif CatalystUI. Lapisan ini dapat berupa filesystem, database, layanan web, cache, stream, repositori dokumen, atau mekanisme lain yang membuat data tetap tersedia.

Lapisan ini disebut tersirat karena Model CatalystUI tidak perlu mewakilinya secara langsung sebagai bagian eksplisit dari Stack. CatalystUI terutama menjelaskan proses antarmuka aktif: bagaimana data yang tersedia dibawa ke dalam sistem, ditafsirkan, digunakan, dirender, dan dipersepsikan. Penyimpanan adalah sumber dan tujuan data, tetapi bukan bagian yang selalu dikelola oleh model antarmuka itu sendiri.

### Ketersediaan Tersimpan dan Representasi Aktif

Data yang tersimpan belum tentu sama dengan data yang sedang aktif diproses. Sebuah file dapat berada di disk tanpa dibaca. Sebuah database dapat menyimpan baris data tanpa query aktif. Sebuah endpoint web dapat memiliki informasi yang belum diminta. Agar data itu masuk ke Stack, sistem perlu mengambil, menerima, atau membuka data tersebut sehingga ia menjadi **Digital Data** aktif.

Perbedaan ini penting. Data Storage menjawab pertanyaan “di mana data tersedia?” sedangkan Digital Data menjawab “apa representasi komputer yang sedang dikerjakan sekarang?” Keduanya berhubungan erat, tetapi perannya tidak sama.

### Persistensi dan Transformasi

Penyimpanan berkaitan dengan persistensi. Data tetap ada sehingga dapat digunakan lagi nanti. Namun, ketika data bergerak ke dalam Stack, ia sering harus berubah bentuk. File teks dapat menjadi string. Hasil query dapat menjadi daftar record. Stream jaringan dapat menjadi buffer. Perubahan ini tidak menghapus hubungan dengan sumbernya; ia hanya membawa data ke bentuk aktif yang dapat diproses.

Arah sebaliknya juga terjadi. Setelah pengguna berinteraksi dan sistem mengubah data, hasilnya mungkin perlu dikembalikan ke penyimpanan. Struktur dapat diserialisasi menjadi JSON, dokumen dapat ditulis kembali ke file, atau record dapat dikirim sebagai update database.

### Batas Sumber dan Pengembalian

Data Storage adalah batas tempat data masuk dan keluar dari aliran. Dari atas ke bawah, ia menjadi sumber Digital Data. Dari bawah ke atas, ia menjadi tujuan akhir ketika perubahan perlu disimpan, dikirim, atau dipersistenkan.

Karena itu, lapisan ini membantu menjelaskan mengapa Stack memiliki titik awal dan titik balik. Antarmuka tidak hanya menampilkan sesuatu; ia sering menjadi sarana untuk mengubah informasi yang tetap ada setelah interaksi selesai.

### Contoh dalam Konteks

Untuk aplikasi catatan, Data Storage dapat berupa file lokal atau database cloud. Untuk pemutar musik, Data Storage dapat berupa file audio, library, atau stream. Untuk aplikasi web, Data Storage dapat berupa server, API, database, atau local storage. Dalam semua kasus, model tidak harus menganggap mekanisme penyimpanan sebagai bagian eksplisit dari antarmuka, tetapi tetap mengakui bahwa data aktif berasal dari sana.

### Mengapa Pemisahan Ini Penting

Pemisahan Data Storage dari Digital Data menjaga Stack tetap bersih. Model dapat membahas antarmuka tanpa harus mengikat dirinya pada satu jenis database, format file, atau layanan jaringan. Penyimpanan tetap diakui, tetapi tanggung jawab eksplisit dimulai ketika data masuk ke aliran aktif sebagai Digital Data.
