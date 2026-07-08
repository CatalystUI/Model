<!--
Terjemahan ini dibuat oleh ChatGPT dan sebaiknya ditinjau oleh penerjemah manusia.
Hapus baris-baris ini dalam pull request setelah terjemahan diverifikasi.
-->

# 5.9 Stack :: Human Interface

## Pembahasan Mendalam

### Batas Manusia yang Tersirat

**Human Interface** adalah lapisan tersirat di bagian paling bawah Stack. Lapisan ini mewakili pengguna manusia yang menerima output dan menghasilkan interaksi. Ia disebut tersirat karena CatalystUI tidak secara langsung mengimplementasikan manusia. Model hanya menjelaskan bagaimana sistem informasi berkomunikasi dengan manusia.

Ini mungkin terdengar jelas, tetapi penting. Antarmuka pengguna ada karena ada pengguna. Tanpa seseorang yang dapat melihat, mendengar, merasakan, memahami, atau bertindak, output system tidak menjadi pengalaman antarmuka dalam arti yang lengkap.

### Penerima Output yang Dapat Dipersepsikan

Dalam aliran atas-ke-bawah, Human Interface adalah penerima output yang dapat dipersepsikan. System mengirimkan cahaya melalui display, suara melalui speaker, getaran melalui perangkat, atau bentuk output lain. Manusia kemudian mempersepsikan output itu melalui tubuh dan pikirannya.

Pada titik ini, data tidak lagi hanya diproses komputer. Data telah menjadi pengalaman. Ia dapat dipahami, diabaikan, disalahpahami, dinikmati, ditanggapi, atau diingat oleh pengguna.

### Sumber Interaksi

Dalam aliran bawah-ke-atas, Human Interface adalah sumber tindakan. Pengguna menekan tombol, menggerakkan pointer, berbicara, menyentuh layar, berjalan melewati sensor, atau melakukan tindakan lain. Tindakan itu menjadi interaction data setelah system menangkapnya.

Dengan demikian, interaksi bukan hanya event teknis. Interaksi adalah ekspresi dari maksud manusia yang diterjemahkan ke dalam bentuk yang dapat diproses komputer.

### Mengapa Lapisan Ini Tersirat

CatalystUI tidak dapat mengontrol tubuh, persepsi, niat, atau pemahaman manusia. Karena itu, Human Interface tidak menjadi lapisan eksplisit yang diimplementasikan oleh framework. Namun, model harus tetap mengakuinya karena seluruh proses antarmuka diarahkan kepada manusia dan berasal dari manusia.

Lapisan ini memberi batas konseptual: komputer dapat mengirim output, tetapi hanya manusia yang mempersepsikannya. Komputer dapat menerima input, tetapi tindakan itu berasal dari pengguna.

### Persepsi dan Maksud

Persepsi manusia tidak sama dengan data komputer. Dua pengguna dapat melihat output yang sama tetapi memahaminya secara berbeda. Seseorang dapat mendengar suara yang sama tetapi menafsirkannya dengan konteks berbeda. Tindakan yang sama dapat memiliki maksud berbeda tergantung situasi.

Model tidak mencoba membaca pikiran pengguna. Model hanya mengakui bahwa antarmuka adalah komunikasi antara data komputer dan persepsi manusia, serta antara tindakan manusia dan pemrosesan komputer.

### Hubungan dengan Systems

Systems adalah lapisan komputer yang paling dekat dengan manusia. Ia mengirim output ke perangkat fisik dan menerima input dari perangkat fisik. Human Interface berada di sisi manusia dari batas itu. Pemisahan ini membantu menjelaskan di mana tanggung jawab komputer berakhir dan pengalaman manusia dimulai.

### Aksesibilitas dan Variasi Manusia

Manusia tidak seragam. Penglihatan, pendengaran, sentuhan, gerak, bahasa, perhatian, memori, dan konteks pengguna berbeda-beda. Karena itu, antarmuka yang baik perlu mempertimbangkan variasi manusia. Domain dan Stack membantu menjelaskan bagaimana makna dapat diterjemahkan ke beberapa bentuk sehingga lebih banyak pengguna dapat mengaksesnya.

### Mengapa Lapisan Ini Penting

Human Interface mengingatkan kita bahwa tujuan antarmuka bukan hanya menjalankan kode. Tujuannya adalah komunikasi. Data harus menjadi sesuatu yang dapat dipersepsikan, dan tindakan manusia harus dapat dipahami oleh sistem. Tanpa lapisan tersirat ini, model kehilangan alasan mengapa antarmuka ada sejak awal.
