<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 4.1 Domain :: Symbolic

## Pembahasan Mendalam

### Representasi Simbolik

Data **Symbolic** adalah data yang mewakili makna sebelum makna itu ditempatkan ke dalam saluran indra tertentu. Ia dapat berupa teks, angka, kode, struktur konfigurasi, format dokumen, metadata, perintah, atau bentuk lain yang menyatakan sesuatu tanpa langsung menjadi gambar, suara, getaran, aroma, atau rasa.

Karena sifatnya pra-penempatan, data simbolik sering menjadi titik awal bagi banyak pengalaman antarmuka. Sebuah kalimat dapat ditampilkan sebagai teks visual, dibacakan sebagai suara, diterjemahkan menjadi braille taktil, atau dipakai sebagai instruksi untuk menghasilkan output lain. Data yang sama dapat bergerak ke beberapa domain, bergantung pada konektor dan lapisan yang menanganinya.

### Struktur Simbolik

Data simbolik biasanya sangat bergantung pada struktur. Karakter harus diurutkan. Token harus dipisahkan. Kunci dan nilai harus dipasangkan. Sintaks harus ditafsirkan. Format harus dikenali. Tanpa struktur, data simbolik hanya menjadi kumpulan tanda yang belum tentu dapat dipahami oleh sistem atau pengguna.

Inilah sebabnya domain simbolik sering terkait erat dengan **Layer 6: Structure & Semantics**. Struktur menentukan bagaimana simbol dibaca, sedangkan semantik menentukan apa arti bentuk itu. Sebuah file JSON, misalnya, bukan hanya teks. Ia adalah teks yang mengikuti aturan tertentu sehingga dapat dipahami sebagai objek, daftar, string, angka, dan nilai lainnya.

### Interpretasi Simbolik

Simbol tidak berarti banyak tanpa interpretasi. Angka `12` dapat berarti ukuran font, jumlah item, posisi, waktu, kode status, atau nilai matematika. Sistem tidak memahami nilai tersebut hanya karena dapat membaca karakternya. Sistem memahami nilai itu karena struktur sekitarnya menjelaskan jenis makna yang harus dibawa oleh nilai tersebut.

Dalam CatalystUI, domain simbolik membantu memisahkan “bentuk yang mewakili makna” dari “cara makna itu dipersepsikan.” Ini membuat model lebih fleksibel. Teks dapat tetap menjadi data simbolik sampai suatu konektor atau renderer mengubahnya menjadi visual, auditory, tactile, atau domain lain.

### Data Simbolik dan Aksesibilitas

Data simbolik sangat penting untuk aksesibilitas karena ia sering dapat diterjemahkan ke banyak bentuk persepsi. Label teks dapat ditampilkan di layar, dibacakan oleh pembaca layar, dikirim ke perangkat braille, atau digunakan untuk membuat ringkasan suara. Karena maknanya belum terkunci pada satu indra, data simbolik memberi sistem kesempatan untuk menyediakan beberapa jalur akses.

Ini juga berarti data simbolik perlu dirawat dengan hati-hati. Jika informasi penting hanya tersimpan sebagai gambar tanpa makna simbolik yang dapat dibaca, sistem akan kesulitan menyediakan alternatif yang dapat diakses. Sebaliknya, ketika data tetap memiliki representasi simbolik yang jelas, domain lain dapat dihasilkan darinya dengan lebih andal.

### Data Simbolik dalam Model

Di dalam Model CatalystUI, Symbolic bukan domain “kurang nyata.” Ia adalah domain yang sangat mendasar karena banyak bentuk data dimulai sebagai simbol sebelum menjadi pengalaman sensoris. Namun, simbolik juga bukan tujuan akhir untuk semua antarmuka. Ia adalah kategori yang menjelaskan data yang membawa makna secara abstrak dan dapat diterjemahkan ke bentuk lain sesuai kebutuhan.
