<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 6.6 Konektor :: Native

## Pembahasan Mendalam

### Dari Windows ke Systems

Konektor **Native** berada di antara **Layer 2: Windows** dan **Layer 1: Systems**. Ia menghubungkan konteks window dengan lingkungan operasi asli yang menyediakan perangkat, layanan, API, driver, permission, dan perilaku platform.

Window membutuhkan system agar dapat dibuat, menerima input, mengirim output, dan mengakses resource. System menyediakan kemampuan tersebut melalui mekanisme native. Konektor Native menjelaskan hubungan programatik di antara keduanya.

### Mendefinisikan Bindings

Kata **bindings** penting di sini. Native connector sering menyediakan bindings ke API platform, library sistem, perangkat, atau layanan yang tidak berada langsung dalam model antarmuka tingkat tinggi. Bindings memungkinkan lapisan CatalystUI berbicara dengan kemampuan native tanpa membuat seluruh Stack bergantung pada detail setiap platform.

Bindings dapat berupa wrapper, interop, pemanggilan API, adapter platform, callback event, atau bentuk lain yang mengikat konsep window ke kemampuan system.

### Menyediakan Akses Native

Konektor Native dapat menyediakan akses untuk membuat window, mengatur ukuran, menangani fokus, menerima event input, mengakses clipboard, meminta device, mengelola cursor, membuat context rendering, atau berkomunikasi dengan layanan platform lain.

Tanggung jawabnya bukan menjadi seluruh system. Ia hanya menyediakan jalur yang dibutuhkan agar window dapat memakai kemampuan system yang relevan.

### Lebih dari Wrapper

Native connector bisa terlihat seperti wrapper, tetapi perannya lebih dalam. Wrapper hanya menyembunyikan panggilan API. Native connector menjelaskan batas konseptual antara window dan system. Ia menjaga agar detail platform tetap berada pada tempatnya, sekaligus memberi window kemampuan yang diperlukan.

Dengan begitu, lapisan di atas tidak perlu memahami semua variasi Windows API, Cocoa, X11, Wayland, Android, iOS, SDL, GLFW, atau platform lain. Implementasi dapat berbeda, tetapi peran connector tetap sama.

### Membuat dan Memelihara Window

Dalam banyak sistem, Native connector terlibat saat window dibuat dan dipelihara. Ia dapat meminta system membuat konteks window, menghubungkan event loop, memperbarui bounds, mengatur visibility, atau menyiapkan surface yang diperlukan oleh renderer.

Hal ini membuat Native connector sangat dekat dengan realitas platform. Namun, kedekatan itu justru alasan mengapa ia dipisahkan sebagai connector. Kode platform dapat tetap berada di batas yang tepat.

### Menerima Interaksi

Dalam aliran bawah-ke-atas, system mendeteksi input dan Native connector membantu membawanya ke window. Event native dapat diterjemahkan menjadi bentuk yang lebih cocok untuk Stack: key press, pointer movement, touch event, device signal, command, atau bentuk interaksi lain.

Native connector tidak harus menentukan makna akhir interaksi. Ia menyediakan bindings dan penerjemahan awal sehingga window dan lapisan di atas dapat melanjutkan routing.

### Menjaga Batas

Native connector harus menjaga batas antara konsep window dan detail system. Ia boleh menerjemahkan, membungkus, dan menghubungkan API native, tetapi tidak seharusnya membuat seluruh model bergantung pada satu platform.

Batas ini memungkinkan CatalystUI tetap universal. Platform dapat berbeda, tetapi Stack tetap dapat menjelaskan proses yang sama.

### Mengapa Konektor Ini Penting

Tanpa Native connector, window tidak memiliki jalur eksplisit menuju system. Layer 2 akan harus berbicara langsung ke API platform, atau Layer 1 harus memahami detail antarmuka tingkat tinggi. Native connector memberi tempat yang benar bagi bindings, akses native, dan penerjemahan platform.
