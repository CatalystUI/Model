<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 6.3 Konektor :: Adapter

## Pembahasan Mendalam

### Dari Penggunaan ke Konteks

Konektor **Adapter** berada di antara **Layer 5: Components, Controls, & Layouts** dan **Layer 4: Graphs & Frames**. Ia bertanggung jawab mengambil data antarmuka mutable dan menempatkannya ke dalam konteks yang lebih besar, tempat data itu dapat diorganisasi, ditemukan, dirutekan, dibatasi, dan dipersiapkan untuk sisa Stack.

Layer 5 memberi sistem component, control, dan layout. Bagian-bagian ini dapat digunakan langsung oleh pengembang. Namun, bagian-bagian itu belum sepenuhnya menjelaskan lingkungan tempat mereka berada. Mereka mungkin tahu apa dirinya dan bagaimana berperilaku, tetapi tidak otomatis tahu bagaimana berhubungan dengan seluruh antarmuka.

Adapter menyediakan perpindahan dari potongan usable individual menuju konteks yang terorganisasi. Ia mengambil component dari Parser dan mengadaptasinya menjadi graph dan frame.

### Mengadaptasi Components ke Graphs

Sebuah component dapat berdiri sendiri, tetapi antarmuka pengguna jarang terdiri dari satu component terisolasi. Biasanya ada hubungan: satu component berisi yang lain, satu control bergantung pada layout, satu kelompok perlu dicari, diurutkan, diaktifkan, dinonaktifkan, difokuskan, atau diperbarui bersama.

Adapter memungkinkan component, control, dan layout ditempatkan ke dalam graph sehingga menjadi bagian dari keseluruhan yang lebih besar. Graph dapat menyimpan component, melacak relasinya, menyediakan cara query, dan memberi logika sekitar yang diperlukan untuk mengelolanya sebagai koleksi.

### Layout Bukan Seluruh Konteks

Adapter juga memperjelas perbedaan antara layout dan graph. Layout memang dapat mengatur component, tetapi layout hanya mengatur dalam cara tertentu. Ia tidak otomatis mengelola seluruh hubungan, lifecycle, routing, atau konteks lingkungan component.

Layout vertikal dapat menentukan beberapa control tampil berurutan. Itu tidak berarti layout bertanggung jawab atas seluruh antarmuka. Tanggung jawab seperti menemukan component aktif, menyiapkan batas output, atau menjadi mediator tingkat atas berada pada Layer 4.

### Terhubung ke Frame

Layer 4 tidak hanya berisi graph. Ia juga berisi frame, yaitu batas aktif dan titik komunikasi antara component terorganisasi dan lapisan bawah Stack.

Adapter membantu component masuk ke konteks frame. Component dapat memiliki ukuran, control dapat memiliki perilaku interaksi, dan layout dapat menjelaskan posisi relatif. Frame menentukan bounds dan konteks tempat semua bagian itu dipersiapkan sebelum dikirim menuju rendering.

### Penggunaan Ulang melalui Adaptasi

Salah satu kekuatan Adapter adalah component yang sama dapat diadaptasi ke konteks berbeda. Component dokumen dapat masuk ke graph editor, graph pratinjau, atau graph pencetakan. Component musik dapat masuk ke graph pemutaran, editing, atau library.

Component dasarnya tetap familier, tetapi relasi dan tujuannya berubah sesuai graph dan frame yang dimasukinya. Adapter memberi cara bersih untuk mengekspresikan reuse tanpa berpura-pura bahwa semua konteks identik.

### Kembali ke Components

Karena Stack reversibel, Adapter juga membantu aliran interaksi kembali ke lapisan atas. Saat pengguna berinteraksi, Layer 4 membantu menentukan component mana yang relevan. Graph memahami konteks organisasi, sedangkan frame membantu memahami bounds tempat interaksi terjadi. Setelah konteks diketahui, Adapter membawa interaksi kembali ke Layer 5 agar control yang tepat dapat merespons.

### Menjaga Identitas

Adapter harus menjaga identitas dan maksud component yang diadaptasi. Saat component masuk ke graph atau frame, ia tidak boleh kehilangan apa dirinya. Tujuan, state, dan hubungannya dengan informasi asli harus tetap dikenali.

Adapter boleh membungkus, mengindeks, mengelompokkan, mengukur, atau menambahkan informasi konteks. Namun penambahan itu harus membantu component berpartisipasi dalam konteks, bukan menghapus maknanya.

### Mengapa Konektor Ini Penting

Adapter mencegah Stack mencampur data antarmuka yang usable dengan konteks antarmuka yang terorganisasi. Component tetap bertanggung jawab atas objek mutable dan perilaku interaksi langsung. Graphs & Frames tetap bertanggung jawab atas organisasi, konteks, batas, routing, dan persiapan menuju lapisan bawah. Adapter menangani perpindahan di antara keduanya.
