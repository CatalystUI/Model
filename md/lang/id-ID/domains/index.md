<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 4. Domain

## Ringkasan Per Topik

### Peran Domain dalam Model

Sebuah *domain* dalam Model CatalystUI adalah kategori tingkat atas yang menjelaskan sifat sensoris data. Domain tidak terutama menjawab di mana data berada di dalam Stack. Domain menjawab jenis pengalaman atau saluran persepsi apa yang sedang diwakili oleh data tersebut.

Model ini mendefinisikan tujuh domain tingkat atas:

- **Symbolic** — bentuk pra-penempatan yang belum terikat pada saluran indra tertentu, seperti teks terenkode, format konfigurasi, atau data biner.
- **Visual** — bentuk yang dirancang untuk dipersepsikan melalui penglihatan, seperti gambar, video, warna, bentuk, dan susunan visual.
- **Auditory** — bentuk yang dirancang untuk dipersepsikan melalui pendengaran, seperti suara, musik, ucapan, atau sinyal audio.
- **Tactile** — bentuk yang dirancang untuk dipersepsikan melalui sentuhan, seperti getaran, tekanan, resistansi, atau umpan balik haptik.
- **Olfactory** — bentuk yang dirancang untuk dipersepsikan melalui penciuman.
- **Gustatory** — bentuk yang dirancang untuk dipersepsikan melalui rasa.
- **Multisensory** — bentuk pasca-penempatan yang menggabungkan beberapa saluran indra dalam satu pengalaman atau jalur sistem.

Domain membantu menjaga model tetap universal. Antarmuka tidak selalu visual, dan data tidak selalu harus berubah menjadi piksel. Sebuah sistem dapat menyampaikan informasi melalui suara, getaran, aroma, rasa, simbol, atau gabungan beberapa saluran. Dengan memakai domain, CatalystUI dapat membahas semua bentuk itu tanpa memaksa semuanya menjadi GUI.

Sebuah lapisan dapat berada dalam lebih dari satu domain. Jika beberapa indra benar-benar digabungkan menjadi satu pengalaman terpadu, lapisan tersebut dapat dipahami sebagai Multisensory. Jika beberapa indra tetap ditangani secara terpisah, lapisan tersebut dapat digambarkan sebagai beberapa domain diskret, misalnya Auditory & Tactile.

Domain juga dapat diperluas menjadi sub-domain untuk kebutuhan organisasi. Contohnya, `Mp3Auditory` dapat dipakai untuk data audio MP3, sementara `IniSymbolic` dapat dipakai untuk data konfigurasi INI. Sub-domain tidak mengubah prinsip utama; ia hanya memberi cara yang lebih rinci untuk mengelompokkan data.
