<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.4 Stack :: Components, Controls, & Layouts

## Pembahasan Mendalam

### Lapisan Antarmuka Mutable Pertama

**Components, Controls, & Layouts** adalah lapisan pertama di Stack yang benar-benar terasa seperti antarmuka yang dapat digunakan oleh pengembang. Jika Structure & Semantics memberikan interpretasi yang stabil terhadap data, lapisan ini mengubah interpretasi itu menjadi objek antarmuka yang mutable, aktif, dan dapat berpartisipasi dalam interaksi.

Di sinilah data mulai menjadi sesuatu yang dapat dibuat, dibaca, diperbarui, diposisikan, diputar, dihentikan, dipilih, difokuskan, atau ditanggapi. Lapisan ini tidak lagi hanya menjelaskan makna data. Ia memberi cara untuk bekerja dengan data tersebut.

### Dari Interpretasi ke Penggunaan

Parser membawa structure dari Layer 6 ke Layer 5. Hasilnya bukan sekadar salinan struktur, tetapi ekspresi yang lebih berguna bagi antarmuka. Sebuah struktur dokumen dapat menjadi komponen dokumen. Sebuah struktur audio dapat menjadi komponen audio. Sebuah nilai pengaturan dapat menjadi control input. Data yang sebelumnya stabil kini mendapatkan state aktif dan perilaku.

Perubahan ini penting karena pengguna tidak berinteraksi langsung dengan byte atau struktur mentah. Mereka berinteraksi dengan sesuatu yang disajikan, disusun, dan diberi perilaku. Lapisan ini menyediakan bentuk yang memungkinkan interaksi itu terjadi.

### Components

Sebuah **component** adalah elemen mutable yang mewakili bagian dari data atau pengalaman antarmuka. Component dapat memiliki properti seperti ukuran, posisi, warna, nilai, status, atau referensi ke data yang mendasarinya. Component juga dapat menyediakan metode yang digunakan oleh lapisan lain, misalnya `Play()`, `Pause()`, `Open()`, `Close()`, atau operasi lain sesuai domain.

Component tidak harus visual. Ia dapat mewakili audio, haptik, dokumen, data simbolik, atau bentuk lain. Yang membuatnya component adalah perannya sebagai objek antarmuka mutable yang dapat digunakan oleh sistem.

### Controls

Sebuah **control** adalah component yang secara langsung menangani interaksi. Tombol, input teks, slider, perintah suara, tombol fisik, atau control haptik semuanya dapat dipahami sebagai control jika mereka menerima tindakan dan menghasilkan respons.

Control adalah tempat maksud pengguna akhirnya ditangani. Lapisan bawah dapat menangkap dan merutekan interaksi, tetapi control menentukan apa yang harus dilakukan dengan interaksi itu. Jika pengguna menekan tombol simpan, control yang relevan mengubah tindakan itu menjadi operasi bermakna.

### Layouts

Sebuah **layout** adalah component yang mengatur component lain. Layout dapat menyusun elemen secara vertikal, horizontal, grid, aliran audio, urutan prioritas, atau bentuk organisasi lain sesuai domain.

Layout berbeda dari graph. Layout mengatur susunan atau hubungan lokal antar component. Graph menyediakan konteks organisasi yang lebih luas. Pemisahan ini membuat layout tetap fokus pada penempatan atau susunan, sementara Graphs & Frames mengelola konteks, batas, routing, dan hubungan tingkat atas.

### Mutabilitas dan State Aktif

Lapisan ini mutable karena antarmuka hidup berubah. Nilai input dapat berubah. Tombol dapat dinonaktifkan. Audio dapat diputar. Posisi dapat diperbarui. Layout dapat dihitung ulang. State aktif ini memungkinkan antarmuka merespons pengguna dan sistem secara dinamis.

Mutabilitas tidak berarti data kehilangan makna. Component harus tetap mempertahankan hubungan dengan struktur dan maksud aslinya. Namun, ia diberi kebebasan untuk berubah sesuai kebutuhan antarmuka.

### Peran dalam Aliran Atas-ke-Bawah

Dalam aliran menuju output, lapisan ini mengubah interpretasi menjadi objek yang dapat dipakai oleh antarmuka. Component, control, dan layout kemudian dapat diberikan kepada Adapter agar ditempatkan dalam Graphs & Frames.

### Peran dalam Aliran Bawah-ke-Atas

Dalam aliran interaksi, lapisan ini adalah tempat tindakan pengguna akhirnya diproses secara bermakna. Interaksi yang telah ditangkap, diteruskan, dan dirutekan oleh lapisan bawah kembali ke control yang tepat. Control lalu dapat memperbarui state, memicu operasi, atau mengubah data yang akan naik kembali menuju Structure & Semantics dan Digital Data.

### Hubungan dengan Graphs & Frames

Layer 5 menyediakan objek yang dapat digunakan. Layer 4 menyediakan konteks organisasi. Adapter menghubungkan keduanya. Component tidak perlu mengetahui seluruh graph tempat ia berada, dan graph tidak perlu menjadi component itu sendiri. Pemisahan ini menjaga tanggung jawab tetap jelas.

### Mengapa Lapisan Ini Penting

Tanpa Components, Controls, & Layouts, model akan memiliki data yang dapat ditafsirkan tetapi belum dapat digunakan sebagai antarmuka aktif. Lapisan ini memberi data bentuk yang dapat dioperasikan, diubah, dan ditanggapi. Ini adalah titik tempat informasi mulai menjadi pengalaman yang dapat digunakan.
