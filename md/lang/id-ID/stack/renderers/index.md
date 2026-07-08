<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.6 Stack :: Renderers

## Pembahasan Mendalam

### Lapisan Transformasional

**Renderers** adalah lapisan yang mentransformasi informasi antarmuka yang telah dipersiapkan menjadi bentuk output yang siap dikirimkan. Rendering sering diasosiasikan dengan grafik, tetapi dalam CatalystUI renderer dapat berlaku pada domain apa pun. Renderer visual dapat menghasilkan gambar. Renderer audio dapat menghasilkan stream suara. Renderer tactile dapat menghasilkan pola haptik.

Tanggung jawab utama renderer adalah konversi. Ia mengambil data yang telah diorganisasi dan dipersiapkan oleh Graphs & Frames, lalu mengubahnya menjadi representasi yang dapat digunakan oleh lapisan pengiriman berikutnya.

### Rendering sebagai Konversi

Rendering bukan hanya “menggambar.” Rendering adalah proses mengubah representasi antarmuka menjadi bentuk output yang lebih dekat dengan persepsi manusia. Untuk visual, ini dapat berarti menghasilkan draw calls, buffer, frame, atau piksel. Untuk auditory, ini dapat berarti menghasilkan waveform atau audio buffer. Untuk tactile, ini dapat berarti menghasilkan pola getaran atau sinyal perangkat.

Dengan definisi ini, renderer menjadi konsep umum yang berlaku di luar GUI. Setiap kali sistem mengubah data antarmuka menjadi output siap persepsi melalui suatu domain, proses itu dapat dijelaskan sebagai rendering.

### Hubungan dengan Graphs & Frames

Renderer tidak seharusnya menjadi pengelola utama organisasi antarmuka. Graphs & Frames bertanggung jawab untuk hubungan, batas, dan konteks. Bridge membawa informasi yang diperlukan dari Layer 4 ke Layer 3. Renderer kemudian fokus pada transformasi output.

Pemisahan ini penting karena renderer sering memiliki kebutuhan khusus domain atau platform. Ia mungkin memerlukan format buffer tertentu, pipeline tertentu, atau aturan kinerja tertentu. Namun, ia tidak perlu mengetahui semua makna organisasi antarmuka.

### Hubungan dengan Windows

Setelah renderer menghasilkan output siap kirim, hasil itu harus ditempatkan pada konteks sistem yang tepat. Itulah peran Windows. Surface connector membawa hasil render dari renderer ke window.

Renderer mengubah. Window menerima, menampung, dan meneruskan output itu menuju system. Dengan begitu, renderer tidak harus mengelola seluruh perilaku window atau platform.

### Tanggung Jawab Khusus Domain

Setiap domain dapat memiliki renderer sendiri. Visual renderer bekerja dengan bentuk visual. Audio renderer bekerja dengan stream audio. Tactile renderer bekerja dengan perangkat haptik. Domain menentukan jenis output, sementara posisi lapisan menentukan peran renderer dalam Stack.

### Rendering dan Keterpersepsian

Renderer berada dekat dengan output yang dapat dipersepsikan, tetapi belum sama dengan persepsi manusia. Renderer menghasilkan representasi yang dapat dibawa ke system. System dan perangkat fisik kemudian membantu membuat output itu benar-benar dapat dilihat, didengar, dirasakan, atau dipersepsikan.

### Peran dalam Aliran Atas-ke-Bawah

Dalam aliran menuju output, renderer mengambil data terorganisasi dari Layer 4 dan mengubahnya menjadi bentuk output-ready. Ini adalah salah satu perubahan paling penting dalam Stack karena data berpindah dari organisasi antarmuka menuju pengiriman sensoris.

### Peran dalam Aliran Bawah-ke-Atas

Dalam aliran interaksi, renderer dapat membantu menerjemahkan atau meneruskan interaksi. Contohnya, renderer visual dapat membantu mengaitkan posisi pointer dengan area render, atau renderer khusus dapat mengubah sinyal perangkat menjadi bentuk yang lebih berguna bagi lapisan di atasnya. Namun, penanganan akhir interaksi tetap berada di control yang sesuai.

### Mengapa Lapisan Ini Penting

Tanpa renderer, antarmuka akan memiliki data yang terorganisasi tetapi belum menjadi output. Renderer memberi tempat yang jelas bagi proses transformasi dari konteks antarmuka menuju bentuk yang siap dikirimkan melalui window dan system.
