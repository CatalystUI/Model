<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 3. Referensi

## Berdasarkan Prompt AI

Berikut adalah ringkasan Model CatalystUI dalam bentuk prompt yang dapat digunakan untuk membantu LLM memahami model ini.

```md
CatalystUI adalah model dan ekosistem antarmuka pengguna yang menjelaskan proses lengkap perubahan Digital Data menjadi Perceivable Data, serta perubahan Interaction Data kembali menjadi Digital Data. Model ini mengidentifikasi kontrak implisit yang terjadi ketika manusia berinteraksi dengan sistem informasi.

Model ini terbagi menjadi tiga kategori utama:

- Domains
- The Stack
- Connectors

Domain mengategorikan sifat sensoris data. Domain tingkat atas adalah Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory, dan Multisensory.

The Stack adalah model berlapis yang menjelaskan bagaimana data bergerak antara manusia dan sistem informasi. Urutannya adalah [Implied] Data Storage, Layer 7: Digital Data, Layer 6: Structure & Semantics, Layer 5: Components, Controls, & Layouts, Layer 4: Graphs & Frames, Layer 3: Renderers, Layer 2: Windows, Layer 1: Systems, dan [Implied] Human Interface.

Connectors adalah modul programatik yang berada di antara lapisan Stack dan memungkinkan lapisan-lapisan itu berkomunikasi. Konektor utamanya adalah Data, Parser, Adapter, Bridge, Surface, dan Native.
```

## Berdasarkan Teks

Bagian ini menyediakan lembar referensi singkat untuk meninjau nama, urutan, dan tanggung jawab utama di dalam Model.

### Domain

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

### Stack

```md
[Implied] Data Storage
  ↓
Layer 7: Digital Data
  ↓ Data connector
Layer 6: Structure & Semantics
  ↓ Parser connector
Layer 5: Components, Controls, & Layouts
  ↓ Adapter connector
Layer 4: Graphs & Frames
  ↓ Bridge connector
Layer 3: Renderers
  ↓ Surface connector
Layer 2: Windows
  ↓ Native connector
Layer 1: Systems
  ↓
[Implied] Human Interface
```

### Konektor

```md
1. Data — menghubungkan Digital Data dengan Structure & Semantics.
2. Parser — mengubah struktur dan semantik menjadi komponen yang dapat digunakan.
3. Adapter — menempatkan komponen ke dalam grafik dan frame.
4. Bridge — membawa konteks terorganisasi menuju proses rendering.
5. Surface — membawa hasil render menuju window.
6. Native — menghubungkan window dengan sistem asli.
```

## Berdasarkan Aliran

### Aliran Menghadap Output

Data tersimpan menjadi Digital Data, lalu ditafsirkan melalui Structure & Semantics. Setelah itu data menjadi Components, Controls, & Layouts yang dapat digunakan. Data tersebut ditempatkan ke dalam Graphs & Frames, dirender oleh Renderers, dikirim melalui Windows, diproses oleh Systems, dan akhirnya diterima oleh Human Interface sebagai output yang dapat dipersepsikan.

### Aliran Menghadap Interaksi

Pengguna melakukan tindakan. Sistem menangkap tindakan itu sebagai interaksi, window menerima dan membatasinya pada konteks tertentu, renderer dan frame membantu meneruskan serta merutekannya, graph menentukan bagian yang relevan, control menanganinya, structure memperbarui maknanya, dan Digital Data dapat disimpan kembali.

## Berdasarkan Tanggung Jawab

Domains menjawab: “Jenis data sensoris apa ini?”

The Stack menjawab: “Di tahap mana data ini berada?”

Connectors menjawab: “Bagaimana data ini berpindah dari satu tahap ke tahap berikutnya?”

## Berdasarkan Pertanyaan Diagnostik

Jika sebuah masalah berkaitan dengan cara data dikategorikan, lihat Domain. Jika masalah berkaitan dengan posisi data dalam proses antarmuka, lihat Stack. Jika masalah berkaitan dengan perubahan bentuk data di antara dua lapisan, lihat Connector.

## Ringkasan Satu Kalimat

CatalystUI menjelaskan bagaimana informasi bergerak antara manusia dan sistem informasi melalui domain, Stack, dan konektor sehingga interaksi dapat dimodelkan secara konsisten di berbagai platform, perangkat, dan bentuk antarmuka.
