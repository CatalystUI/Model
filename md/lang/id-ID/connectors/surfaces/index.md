<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 6.5 Konektor :: Surface

## Pembahasan Mendalam

### Dari Rendering ke Pengiriman

Konektor **Surface** berada di antara **Layer 3: Renderers** dan **Layer 2: Windows**. Ia membawa hasil rendering dari proses transformasi menuju konteks pengiriman yang dapat diterima oleh window.

Renderer menghasilkan bentuk output-ready. Namun output itu belum sampai ke system atau pengguna. Surface menjelaskan bagaimana hasil render ditempatkan ke area, channel, buffer, atau surface yang dimiliki window agar dapat diteruskan ke system.

### Area yang Dirender

Dalam domain visual, surface sering dapat dibayangkan sebagai area tempat gambar hasil render ditempatkan sebelum muncul di window. Namun konsep ini tidak terbatas pada grafik. Dalam domain audio, surface dapat dipahami sebagai channel atau buffer output. Dalam domain tactile, surface dapat berupa jalur perangkat haptik.

Surface adalah titik penyerahan antara “data telah dirender” dan “data siap dikirim melalui window.”

### Lebih dari Gambar Akhir

Surface bukan hanya gambar final. Ia dapat melibatkan buffering, sinkronisasi, ukuran, format output, channel, atau state yang diperlukan agar window dapat menerima hasil renderer dengan benar. Detailnya bergantung pada domain dan platform.

Namun, Surface tidak mengambil alih tanggung jawab renderer atau window. Renderer tetap bertugas mentransformasi data. Window tetap bertugas menyediakan konteks system-facing. Surface hanya menangani perpindahan yang diperlukan di antara keduanya.

### Meneruskan Interaksi Kembali ke Atas

Dalam aliran bawah-ke-atas, Surface juga dapat membawa informasi interaksi dari window kembali ke renderer. Window dapat menerima event dari system, seperti input pointer, key, sentuhan, atau sinyal perangkat. Surface membantu meneruskan informasi itu dalam bentuk yang dapat diproses renderer atau lapisan di atasnya.

Misalnya, dalam domain visual, window dapat mengetahui bahwa pointer berada di koordinat tertentu. Surface dapat membantu mengaitkan koordinat itu dengan area render. Renderer kemudian dapat meneruskan detail yang relevan ke Bridge dan Layer 4.

### Menjaga Window Tetap Terpisah

Surface penting karena window tidak sama dengan renderer. Window menyediakan konteks system-facing, sedangkan renderer menghasilkan output-ready representation. Jika keduanya dicampur, renderer akan mulai mengelola perilaku platform, atau window akan dipaksa memahami detail rendering.

Surface menjaga pemisahan itu tetap bersih. Ia memberi jalur eksplisit bagi hasil render untuk masuk ke window.

### Menjaga Output

Surface harus menjaga output agar tetap setia terhadap hasil renderer. Jika renderer menghasilkan frame visual, stream audio, atau sinyal haptik, Surface harus membawanya ke window tanpa mengubah makna atau merusak bentuk yang diperlukan.

Dalam beberapa implementasi, Surface dapat melakukan penyesuaian teknis seperti format atau buffering. Penyesuaian itu harus mendukung pengiriman, bukan mengubah maksud output.

### Mengapa Konektor Ini Penting

Tanpa Surface, Stack tidak memiliki tempat yang jelas untuk perpindahan dari renderer ke window. Surface memberi batas yang rapi antara transformasi output dan pengiriman output. Ia adalah penghubung yang membuat hasil render dapat masuk ke konteks system-facing.
