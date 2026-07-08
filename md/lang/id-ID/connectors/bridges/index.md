<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 6.4 Konektor :: Bridge

## Pembahasan Mendalam

### Dari Konteks ke Rendering

Konektor **Bridge** berada di antara **Layer 4: Graphs & Frames** dan **Layer 3: Renderers**. Ia membawa informasi antarmuka yang telah diorganisasi ke dalam proses rendering. Jika Adapter membuat informasi usable menjadi kontekstual, Bridge membuat informasi kontekstual siap memasuki transformasi output.

Layer 4 memahami graph, frame, bounds, routing, dan organisasi. Layer 3 memahami cara mengubah informasi yang dipersiapkan menjadi output-ready representation. Bridge menjadi penyeberangan antara dua tanggung jawab tersebut.

### Membawa Frame ke Depan

Frame mewakili batas aktif dan konteks tempat component terorganisasi dipersiapkan. Bridge membawa informasi yang diperlukan dari frame menuju renderer. Ini dapat mencakup daftar item yang perlu dirender, bounds, urutan, area aktif, channel, state, atau data lain yang relevan dengan domain.

Bridge tidak harus membawa seluruh graph. Renderer sering tidak membutuhkan semua detail organisasi antarmuka. Bridge menentukan bagian apa yang perlu menyeberang agar renderer dapat bekerja tanpa mengambil alih tanggung jawab Layer 4.

### Konektor yang Tenang

Bridge sering tampak kecil. Dalam beberapa implementasi, ia mungkin hanya meneruskan data yang telah dipersiapkan. Namun, kecil bukan berarti tidak penting. Tanpa Bridge, graph harus berbicara langsung dalam istilah renderer, atau renderer harus memahami graph sepenuhnya. Keduanya akan mengaburkan batas antara organisasi dan rendering.

Bridge memberi nama pada perpindahan itu. Ia menjelaskan bagaimana antarmuka yang telah diorganisasi masuk ke proses render tanpa membuat Layer 4 dan Layer 3 menjadi lapisan yang sama.

### Meneruskan Interaksi Kembali ke Atas

Dalam aliran bawah-ke-atas, Bridge juga dapat membawa informasi dari renderer kembali ke Graphs & Frames. Renderer mungkin menerima atau membantu menerjemahkan detail interaksi, seperti posisi visual, koordinat, area render, channel audio, atau sinyal domain tertentu. Bridge membawa informasi itu kembali ke Layer 4 agar graph dan frame dapat menentukan konteksnya.

Interaksi jarang tiba dengan makna lengkap. Bridge membantu menjaga agar detail renderer-specific dapat diterjemahkan ke konteks antarmuka tanpa memaksa graph mengetahui seluruh implementasi renderer.

### Konektor yang Paling Sulit Dilihat

Bridge mungkin konektor paling sulit dilihat karena perannya berada pada batas yang halus. Data sudah diorganisasi, tetapi belum dirender. Renderer siap mengubah data, tetapi belum tentu memahami konteks penuh. Bridge menghubungkan kedua hal itu dengan cara yang sering sederhana tetapi konseptualnya penting.

### Menjaga Batas

Bridge harus menjaga batas antara konteks dan rendering. Informasi yang dibawa ke bawah harus tetap setia pada antarmuka yang dipersiapkan Layer 4, sekaligus dapat digunakan oleh Layer 3. Informasi yang dibawa ke atas harus cukup bagi graph dan frame untuk memahami apa yang terjadi, tanpa membuat renderer bertanggung jawab atas organisasi antarmuka.

Ini sangat penting pada sistem dengan renderer yang memiliki kebutuhan teknis khusus. Graph dan frame tidak perlu mengetahui semua detail buffer, pipeline, atau API renderer. Renderer juga tidak perlu memahami keseluruhan organisasi component. Bridge memungkinkan keduanya berkomunikasi tanpa saling menjerat tanggung jawab.

### Mengapa Konektor Ini Penting

Bridge mencegah Stack mencampur konteks antarmuka terorganisasi dengan output render. Graphs & Frames tetap bertanggung jawab atas organisasi, konteks, batas, dan routing. Renderers tetap bertanggung jawab atas transformasi menuju output-ready form. Bridge menangani perpindahan di antara keduanya.
