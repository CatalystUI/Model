<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.7 Stack :: Windows

## Pembahasan Mendalam

### Lapisan Pengiriman Berbatas

**Windows** adalah lapisan yang menyediakan konteks berbatas tempat output yang telah dirender dapat dikirimkan ke system, dan tempat interaksi dari system dapat masuk kembali ke Stack. Dalam bahasa sehari-hari, window sering berarti jendela grafis. Dalam CatalystUI, maknanya lebih luas: window adalah konteks system-facing untuk output dan interaksi.

Window dapat berupa jendela grafis, sesi terminal, konteks audio, channel haptik, atau bentuk lain yang memberi batas pada bagaimana output dan input melewati system.

### Pandangan ke dalam System

Window adalah semacam “pandangan” ke dalam system. Ia tidak identik dengan system, tetapi bergantung pada system untuk dibuat, dikelola, difokuskan, ditampilkan, atau diberi akses ke perangkat. Window menyediakan area atau channel tempat antarmuka dapat berkomunikasi dengan lingkungan platform.

Untuk visual, window dapat memiliki ukuran, posisi, surface, dan status fokus. Untuk audio, window dapat berupa konteks output audio. Untuk tactile, window dapat berupa channel perangkat haptik. Implementasinya berbeda, tetapi tanggung jawab lapisannya sama.

### Hubungan dengan Renderers

Renderer menghasilkan output yang siap dikirim. Window menyediakan tempat atau channel sistem tempat output itu dikirim. Renderer mentransformasi; window menampung, menerima, dan meneruskan.

Pemisahan ini memungkinkan renderer berbeda menargetkan jenis window berbeda. Renderer visual dapat menargetkan graphical window, sementara renderer auditory dapat menargetkan konteks output audio. Implementasinya dapat berubah sesuai domain dan platform, tetapi struktur tanggung jawab tetap konsisten.

### Hubungan dengan System

Windows bergantung pada **Layer 1: Systems** karena biasanya dibuat dan dikelola oleh platform. System dapat menentukan cara window dibuat, cara input diterima, resource apa yang boleh diakses, dan bagaimana output dikirim ke perangkat.

Namun window bukan system. System adalah lingkungan operasi yang lebih luas. Window adalah konteks logis berbatas di dalam lingkungan itu. Dengan memisahkan keduanya, model tidak mencampur detail platform dengan batas antarmuka yang sedang dipakai.

### Pengiriman Output

Dalam aliran atas-ke-bawah, window menerima representasi output-ready dari renderer dan meneruskannya menuju system. Pada tahap ini, output tidak lagi hanya disiapkan oleh antarmuka; output ditempatkan pada konteks pengiriman yang dapat digunakan oleh system.

Window dapat mengelola bounds, fokus, buffer, visibilitas, status channel, atau kondisi pengiriman lain. Detail ini memengaruhi cara output bergerak ke system, tetapi tidak mengubah peran utamanya: menyediakan batas tempat output render menjadi output system.

### Masuknya Interaksi

Dalam aliran bawah-ke-atas, window adalah lapisan eksplisit pertama tempat interaksi yang disediakan system tersedia bagi antarmuka yang dimodelkan. System dapat mendeteksi penekanan tombol, gerakan pointer, sentuhan, sinyal perangkat, perintah audio, atau input lain. Window menerima interaksi itu dalam konteks berbatasnya dan meneruskannya ke atas.

Konteks ini penting. Tindakan bukan hanya “sesuatu terjadi,” tetapi “sesuatu terjadi di dalam batas tertentu.” Fokus, posisi, waktu, sumber perangkat, channel, atau konteks aktif dapat menentukan bagaimana Stack memahami tindakan tersebut.

### Independensi Domain

Windows bersifat domain-independent. Kata “window” sering terkait grafik, tetapi dalam CatalystUI ia mengacu pada konteks system-facing berbatas untuk output dan interaksi. Domain menentukan jenis output dan input yang dibawa window; posisi Stack menentukan perannya.

### Mengapa Lapisan Ini Penting

Windows mencegah Stack menganggap output render otomatis sampai ke pengguna. Renderer dapat menghasilkan output-ready representation, tetapi output itu masih memerlukan konteks system. Layer 2 menyediakan konteks tersebut, menjaga jalur pengiriman tetap jelas antara Renderer dan System.
