<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 4.3 Domain :: Auditory

## Pembahasan Mendalam

### Memahami Data Auditory

Data **Auditory** adalah data yang dirancang untuk dipersepsikan melalui pendengaran. Ini mencakup suara, musik, ucapan, nada, efek suara, peringatan, ritme, volume, arah suara, dan pola audio lain yang menyampaikan informasi kepada pengguna.

Dalam CatalystUI, auditory bukan sekadar tambahan bagi visual. Suara dapat menjadi antarmuka utama. Pemutar musik, pembaca layar, sistem navigasi suara, notifikasi, peringatan medis, perangkat bantu, dan asisten suara semuanya dapat bergantung pada domain auditory untuk menyampaikan makna.

### Makna Auditory

Makna auditory muncul dari pola dalam waktu. Nada dapat menandakan keberhasilan. Bunyi keras dapat menandakan bahaya. Ucapan dapat menyampaikan instruksi yang kompleks. Musik dapat memberi suasana atau status. Tidak seperti gambar statis, banyak data auditory dipahami secara berurutan, sehingga durasi, jeda, ritme, dan urutan sangat penting.

Di dalam Stack, data audio dapat dimulai sebagai Digital Data seperti file MP3, WAV, atau stream. Struktur dan Semantik menjelaskan formatnya. Komponen dapat menyediakan operasi seperti `Play()`, `Pause()`, atau `Seek()`. Graph dapat mengelola beberapa sumber suara. Renderer mengubahnya menjadi output audio siap kirim, dan Window/System menyediakan jalur menuju perangkat seperti speaker atau headphone.

### Data Auditory dan Aksesibilitas

Auditory sangat penting untuk aksesibilitas, terutama ketika informasi visual perlu disampaikan melalui suara. Pembaca layar, instruksi suara, dan peringatan audio dapat membuka akses bagi pengguna yang tidak dapat mengandalkan layar.

Namun, auditory juga memiliki batasan. Pengguna dapat berada di lingkungan bising, memiliki gangguan pendengaran, menggunakan perangkat tanpa speaker, atau perlu mematikan suara. Karena itu, makna penting sering perlu tersedia dalam bentuk lain juga, seperti teks, visual, atau haptik. CatalystUI membantu menjelaskan bagaimana satu makna dapat diterjemahkan antar-domain tanpa kehilangan maksudnya.

### Data Auditory dalam Pengalaman yang Lebih Luas

Banyak sistem modern menggabungkan auditory dengan visual atau tactile. Notifikasi dapat muncul sebagai suara, banner, dan getaran. Permainan dapat memakai suara spasial bersama tampilan visual. Sistem keselamatan dapat memakai sirene, lampu, dan getaran. Domain Auditory memungkinkan model menjelaskan saluran suara itu secara khusus, sambil tetap membiarkannya menjadi bagian dari pengalaman Multisensory yang lebih besar.
