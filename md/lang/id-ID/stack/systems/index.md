<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.8 Stack :: Systems

## Pembahasan Mendalam

### Lapisan Eksplisit Terendah

**Systems** adalah lapisan eksplisit terendah di Stack. Lapisan ini mewakili lingkungan operasi yang menyediakan akses ke perangkat, layanan platform, driver, penjadwalan, izin, dan proses tingkat bawah yang membuat output dan input benar-benar dapat terjadi.

Dalam banyak kasus, system berarti sistem operasi seperti Windows, macOS, Linux, Android, iOS, atau ChromeOS. Namun, dalam CatalystUI, system dapat juga berupa firmware, platform tertanam, runtime perangkat, atau lingkungan khusus yang mengelola perangkat dan operasi.

### Lingkungan Operasi

System menyediakan aturan dan kemampuan dasar. Ia menentukan bagaimana window dibuat, bagaimana input dideteksi, bagaimana output dikirim ke perangkat, bagaimana proses berjalan, dan batasan apa yang harus diikuti oleh aplikasi. System adalah lingkungan tempat Stack dijalankan.

Ini tidak berarti CatalystUI harus mengendalikan seluruh system. Model hanya mengakui bahwa output dan input antarmuka akhirnya harus melewati lingkungan operasi yang lebih luas.

### Hubungan dengan Windows

Windows adalah konteks berbatas yang menghadap system. System menciptakan, mengenali, atau mengelola konteks tersebut. Window meminta akses atau menerima layanan dari system, sementara system menyediakan mekanisme tingkat bawah yang membuat window dapat berfungsi.

Pemisahan ini membantu menjaga tanggung jawab tetap jelas. Window adalah konteks antarmuka. System adalah lingkungan yang menyediakan perangkat, izin, dan perilaku platform.

### Pengiriman Output

Dalam aliran atas-ke-bawah, system menerima output dari window dan membawanya menuju perangkat atau proses fisik yang relevan. Untuk visual, system dapat mengirim data ke GPU dan display. Untuk auditory, system dapat mengirim data ke driver audio dan speaker. Untuk tactile, system dapat mengirim sinyal ke motor haptik atau perangkat fisik lain.

System adalah tahap komputer-side terakhir sebelum output menjadi sesuatu yang dapat dipersepsikan oleh manusia.

### Asal Interaksi

Dalam aliran bawah-ke-atas, system adalah sumber pertama dari interaction data eksplisit. Ia mendeteksi atau menerima tindakan dari perangkat: keyboard, mouse, layar sentuh, mikrofon, sensor, pengendali, tombol fisik, atau perangkat lain. System kemudian meneruskan informasi itu ke window yang sesuai.

Tindakan manusia terjadi di dunia fisik. System adalah bagian komputer yang pertama kali mengubah tindakan itu menjadi informasi yang dapat diproses Stack.

### Aturan dan Batasan Platform

Setiap system memiliki aturan. Izin, model event, manajemen window, akses perangkat, sandboxing, driver, API, dan batasan performa dapat berbeda. Native connector membantu menghubungkan Windows dengan Systems tanpa memaksa seluruh Stack memahami setiap detail platform.

Dengan mengakui aturan platform sebagai bagian dari Layer 1, CatalystUI dapat menjelaskan mengapa implementasi mungkin berbeda sementara model konseptual tetap sama.

### Hubungan dengan Human Interface

System berada tepat di atas lapisan tersirat **Human Interface**. System mengirim output ke dunia yang dapat dipersepsikan dan menerima input yang berasal dari manusia. Ia tidak sama dengan pengguna, tetapi menjadi batas komputer yang paling dekat dengan pengguna.

### Mengapa Lapisan Ini Penting

Tanpa Systems, Stack akan berhenti sebelum mencapai perangkat nyata. Layer 1 memberi tempat bagi lingkungan operasi yang membuat antarmuka dapat berkomunikasi dengan hardware dan layanan platform. Ini menjaga model tetap terhubung dengan kenyataan komputer yang menjalankan antarmuka tersebut.
