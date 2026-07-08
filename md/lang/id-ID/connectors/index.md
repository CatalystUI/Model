<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 6. Konektor

## Ringkasan Per Topik

### Konektor-Konektor Stack

**Connectors** adalah modul programatik yang berada di antara lapisan-lapisan Stack dan memungkinkan data berpindah dari satu bentuk ke bentuk berikutnya. Jika Stack menjelaskan tahap-tahap data, konektor menjelaskan perpindahan di antara tahap-tahap itu.

Model CatalystUI menggunakan enam konektor utama:

- **Data** — antara Layer 7: Digital Data dan Layer 6: Structure & Semantics.
- **Parser** — antara Layer 6: Structure & Semantics dan Layer 5: Components, Controls, & Layouts.
- **Adapter** — antara Layer 5: Components, Controls, & Layouts dan Layer 4: Graphs & Frames.
- **Bridge** — antara Layer 4: Graphs & Frames dan Layer 3: Renderers.
- **Surface** — antara Layer 3: Renderers dan Layer 2: Windows.
- **Native** — antara Layer 2: Windows dan Layer 1: Systems.

### Peran Konektor dalam Model

Konektor penting karena setiap lapisan memiliki tanggung jawab berbeda. Digital Data tidak sama dengan Structure. Component tidak sama dengan Graph. Renderer tidak sama dengan Window. Jika lapisan-lapisan itu langsung dicampur, model akan kehilangan kejelasan. Konektor memberi tempat yang jelas bagi transformasi, penerjemahan, adaptasi, validasi, dan pengiriman antar-lapisan.

Konektor juga menjaga makna. Saat data berubah bentuk, maksudnya harus tetap dapat dikenali. Sebuah judul yang dibaca dari file harus tetap menjadi judul ketika menjadi component, ketika ditempatkan dalam graph, ketika dirender, dan ketika akhirnya dipersepsikan oleh pengguna. Konektor membantu menjaga perpindahan itu tetap dapat dijelaskan.

### Konektor dan Pertukaran yang Hidup

Karena Stack bersifat reversibel, konektor bekerja dalam dua arah. Dari atas ke bawah, mereka membantu mengubah data digital menjadi output yang dapat dipersepsikan. Dari bawah ke atas, mereka membantu membawa interaksi pengguna kembali menuju data digital.

Dalam praktiknya, beberapa konektor dapat sangat tipis, sementara yang lain dapat berisi banyak logika. Namun, peran konseptualnya tetap penting. Konektor menjawab pertanyaan: “Bagaimana data ini menyeberang dari lapisan ini ke lapisan berikutnya tanpa kehilangan makna?”
