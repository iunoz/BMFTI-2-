# BMFTI-2
Website sederhana BMFTI yang tidak memakai backend

## Pages
1. Home
   
   Home merupakan tempat awal bagi setiap user yang mengakses website ini. Pada halaman home sendiri cukup ringkas, tidak terlalu banyak interaksi. Diawali dengan foto gedung universitas tempat organisasi ini berada yang disertai dengan nama organisasi, motto organisasi, dan deskripsi singkat organisasi BMFTI. Dilanjut dengan fasilitas yang disediakan oleh organisasi ini, fasilitas di rangkum menggunakan card yang jika di hover akan menjelaskan masing-masing icon yg terpasang. Dilanjut dengan pencapaian-pencapaian organisasi ini yang dibalut dalam card juga. Terakhir ada ajakan bergabung dengan organisasi BMFTI
   
3. About Us / Tentang Kami

   About pada website ini dibagi menjadi 2, yaitu about terkait organisasinya, dan about terkait dengan pengurus inti serta ada siapa saja pada organisasi ini (Struktur organisasi). About Us diawali dengan sejarah-sejarah penting bagi BMFTI itu sendiri yang dibuat dengan menggunakan konsep timeline selang-seling. Lalu, ada juga pengenalan visi dan misi dari organisasi BMFTI. Selanjutnya pengenalan orang-orang dibalik BMFTI yang dimulai dari pengurus inti hingga ke masing-masing departemen. Pengurus inti disajikan dengan infinite carousel sehingga memberikan nuansa kekinian. Jika cursor melakukan hover terhadap infinite carousel tersebut, maka pergerakan dari infinite carousel akan berhenti, dan setiap card yang disajikan dalam infinite carousel tersebut jika diklik akan mengarahkan user ke instagram orang yang berada di card tersebut.
   
5. Isi Setiap Departemen

   Isi dari setiap departemen dapat diakses bila user menekan salah satu departemen yang berada pada halaman About Us. Pengenalan masing-masing anggota tiap departemen dilakukan dengan cara yang sama dengan pengenalan pengurus inti pada halaman About Us (melalui infinite carousel). Carousel pada halaman ini juga jika terhover dengan cursor maka akan berhenti, dan tentunya setiap card atau anggota yang berada pada carousel ini jika diklik akan menavigasi ke instagram mereka.
   
7. Register / Daftar
   
   Halaman ini dapat diakses melalui 2 cara, yaitu melalui button bertuliskan "Daftar!!!" yang terletak di navbar maupun button bertuliskan "Daftar Sekarang" yang terletak di bagian akhir pada halaman Home sebelum footer. Halaman ini terdapat beberapa form input, diantaranya ada input untuk nama lengkap, email, nomor telepon, nim, alasan bergabung, departemen yang diinginkan, alasan ingin departemen tersebut. Email sudah dilengkapi dengan validasi bahwa harus menginput email yang valid. Nomor telepon dan NIM juga dilengkapi validasi bahwa harus benar-benar berisi angka saja (tidak bisa huruf) dan ada maximum maupun minimum untuk nomor telepon dan juga NIM. Form alasan bergabung dan alasan ingin departemen tersebut dibatasi maksimal hanya 200 karakter saja. Terakhir, ada dropdown untuk memilih departemen (departemen yang diinginkan). Semua form ini harus valid dan juga harus diisi, jika ada salah satu ketentuan tidak dicapai, maka akan muncul error message. Jika berhasil akan muncul modal sukses yang nantinya akan tertutup sendiri dalam waktu 5 detik.

## Cara Menjalankan
1. Klik link github deploy
2. Halaman Home adalah halaman yang pertama kali terbuka
3. Jika ingin melihat halaman About maka dapat klik list atau tulisan "About" yang berada pada navbar
4. Jika ingin melihat halaman masing-masing departemen harus melalui halaman About dan scroll paling bawah hingga menemukan card untuk masing-masing departemen
5. Jika ingin mendaftar, dapat menekan button bertuliskan "Daftar!!!" yg terdapat pada navbar, atau dapat menekan button bertuliskan "Daftar Sekarang" yang terletak di bagian terakhir halaman Home
6. Ada fitur light mode dan dark mode yang bisa di klik pada navbar
7. Untuk halaman juga sudah dibuat responsive
