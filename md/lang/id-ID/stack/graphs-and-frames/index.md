<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.5 Stack :: Graphs & Frames

## Pembahasan Mendalam

### Lapisan Organisasi

**Graphs & Frames** adalah lapisan organisasi di dalam Stack. Setelah component, control, dan layout tersedia, sistem membutuhkan cara untuk menempatkannya ke dalam konteks yang lebih besar. Antarmuka jarang terdiri dari satu component saja. Biasanya ada hubungan, hierarki, batas, area aktif, fokus, urutan, dan jalur routing.

Layer 4 menyediakan tempat untuk memahami organisasi itu. Ia tidak terutama membuat component menjadi usable; itu tugas Layer 5. Ia juga tidak merender output; itu tugas Layer 3. Ia menempatkan component ke dalam hubungan dan konteks yang membuat antarmuka dapat dikelola sebagai satu kesatuan.

### Graphs

Sebuah **graph** menyimpan, menghubungkan, dan mengorganisasi component, control, serta layout. Graph dapat melacak hubungan parent-child, dependensi, fokus, pencarian, pengurutan, atau kelompok logis. Dalam GUI, graph dapat menyerupai component tree. Dalam domain audio, graph dapat mewakili hubungan antara sumber suara, efek, dan output.

Graph memungkinkan sistem menemukan bagian antarmuka yang relevan. Ketika interaksi terjadi, graph dapat membantu menentukan control mana yang harus menerimanya. Ketika output perlu disiapkan, graph dapat membantu menentukan urutan dan hubungan data yang akan dikirim ke frame atau renderer.

### Frames

Sebuah **frame** mewakili batas aktif dan titik komunikasi antara organisasi antarmuka dan lapisan rendering. Frame membantu menentukan area, konteks, ukuran, batas, dan keadaan yang diperlukan sebelum data diteruskan ke renderer.

Dalam antarmuka visual, frame dapat berkaitan dengan area layar atau surface tempat layout dihitung. Dalam domain lain, frame dapat menjadi konteks output aktif yang menentukan channel, batas waktu, atau kondisi pengiriman. Intinya, frame adalah konteks yang mempersiapkan data terorganisasi agar dapat dirender.

### Hubungan antara Graphs dan Frames

Graph menjelaskan organisasi component. Frame menjelaskan batas dan konteks aktif tempat organisasi itu dipersiapkan. Keduanya bekerja bersama. Graph mengetahui hubungan antar bagian. Frame mengetahui konteks tempat bagian-bagian itu akan dikomunikasikan ke lapisan bawah.

Pemisahan ini membantu model menjelaskan antarmuka yang kompleks. Component dapat tetap sederhana, layout dapat tetap lokal, graph dapat mengelola relasi, dan frame dapat mempersiapkan batas output.

### Mempersiapkan Rendering

Layer 4 tidak merender, tetapi ia mempersiapkan data untuk rendering. Ia dapat menghitung hubungan, menentukan elemen aktif, mengumpulkan data yang relevan, menyiapkan bounds, atau membentuk representasi yang lebih mudah dibawa ke renderer melalui Bridge.

Dengan begitu, renderer tidak harus memahami seluruh sistem organisasi antarmuka. Renderer menerima informasi yang sudah dipersiapkan dalam bentuk yang sesuai untuk transformasi output.

### Merutekan Interaksi

Dalam aliran bawah-ke-atas, Graphs & Frames membantu merutekan interaksi. Sistem mungkin hanya mengetahui bahwa pointer bergerak, tombol ditekan, atau perintah terjadi dalam konteks tertentu. Graph dan frame membantu menentukan component atau control mana yang relevan berdasarkan posisi, fokus, channel, atau hubungan antarmuka.

Setelah konteks diketahui, interaksi dapat dikembalikan ke Layer 5 melalui Adapter agar control yang tepat menanganinya.

### Hubungan dengan Components, Controls, & Layouts

Layer 5 menyediakan bagian-bagian yang dapat digunakan. Layer 4 menempatkan bagian-bagian itu dalam konteks bersama. Layout tidak menjadi graph hanya karena ia menyusun component. Graph memiliki tanggung jawab yang lebih luas: pencarian, hubungan, routing, lifecycle, dan konteks antarmuka.

### Hubungan dengan Renderer

Renderer membutuhkan informasi yang sudah siap ditransformasi. Graphs & Frames memberi bentuk organisasi dan batas yang memungkinkan Bridge membawa data ke renderer tanpa membuat renderer bertanggung jawab atas seluruh struktur antarmuka.

### Mengapa Lapisan Ini Penting

Tanpa Graphs & Frames, component akan tetap menjadi potongan-potongan mutable yang tersebar. Lapisan ini memberi antarmuka konteks hidup: bagian-bagian dapat ditemukan, dihubungkan, dibatasi, dirutekan, dan dipersiapkan. Ini adalah titik tempat informasi usable menjadi informasi yang terorganisasi.
