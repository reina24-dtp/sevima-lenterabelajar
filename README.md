# Lentera Belajar

Lentera Belajar adalah platform belajar untuk siswa SMA/SMK kelas 10–12 yang dirancang agar materi tetap bisa dipelajari ketika koneksi internet terbatas. Siswa dapat mengunduh materi saat online, lalu membaca materi dan mengerjakan kuis dari perangkat saat offline.

## Fitur

- **Katalog pelajaran:** pilih kelas, mata pelajaran, bab, dan subbab Kurikulum Merdeka.
- **Materi offline:** unduh materi per subbab ketika online. Materi yang sudah berhasil diunduh dapat dibuka kembali tanpa koneksi internet.
- **Latihan soal:** kerjakan kuis pilihan ganda dan lihat skor setelah menyelesaikannya.
- **Tanya mentor:** kirim pertanyaan terkait materi. Pertanyaan yang dibuat saat offline akan disimpan di antrean lokal Firestore dan disinkronkan saat koneksi tersedia kembali.
- **Statistik belajar:** pantau progres subbab, skor kuis, aktivitas tujuh hari terakhir, streak belajar, dan perkiraan penyimpanan materi offline.
- **Akun siswa:** daftar atau masuk dengan email/nomor HP atau Google, lalu lengkapi profil belajar.

## Workflow Siswa

1. **Buka website dan pilih kelas.** Siswa memilih kelas 10, 11, atau 12 pada halaman awal, lalu masuk atau mendaftar.
2. **Masuk ke katalog.** Dari Beranda, buka tab **Mapel**, pilih kelas, mata pelajaran, dan bab yang ingin dipelajari.
3. **Unduh materi saat online.** Unduh satu subbab atau semua subbab dalam satu bab. Status unduhan hanya berubah setelah materi berhasil diambil dari server.
4. **Belajar tanpa internet.** Buka subbab yang sudah tersimpan untuk membaca ringkasan, poin penting, dan materi lengkap. Subbab yang belum diunduh perlu diunduh terlebih dahulu saat online.
5. **Kerjakan kuis.** Setelah membaca, mulai latihan soal. Hasil kuis dicatat untuk memperbarui statistik belajar.
6. **Tanya mentor dan pantau progres.** Kirim pertanyaan melalui tab **Tanya Mentor** dan lihat progres di tab **Statistik**. Perubahan yang memerlukan server akan disinkronkan saat koneksi tersedia.

## Alur Data dan Mode Offline

- Firebase Authentication mengelola sesi akun; profil siswa dan hasil kuis disimpan di Firestore.
- Katalog pelajaran berisi metadata, sedangkan isi materi dan kuis dimuat per subbab dari koleksi Firestore `subbabContent`.
- Proses unduh harus dilakukan saat online agar aplikasi dapat memastikan dokumen materi tersedia di server. Firestore menyimpan dokumen yang telah diakses di cache lokal perangkat.
- Daftar subbab yang berhasil diunduh disimpan di `localStorage` per akun. Menghapus unduhan mengunci kembali akses dari antarmuka, tetapi tidak menghapus cache Firestore perangkat.
- Pertanyaan mentor yang dibuat saat offline dan penulisan Firestore lainnya mengikuti mekanisme persistence dan sinkronisasi Firestore.
- Koneksi internet tetap diperlukan untuk memuat website pertama kali, autentikasi, mengunduh materi baru, dan menyinkronkan data ke server.

## Menjalankan Secara Lokal

### Prasyarat

- Node.js dan npm
- Konfigurasi proyek Firebase dengan Authentication dan Cloud Firestore

### Instalasi

1. Pasang dependensi:

   ```bash
   npm install
   ```

2. Buat file `.env` di root proyek dan isi variabel konfigurasi Firebase berikut dengan nilai dari proyek Firebase Anda:

   ```dotenv
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Untuk membuat dan melihat build produksi:

   ```bash
   npm run build
   npm run preview
   ```

## Teknologi

- React
- Vite
- Firebase Authentication
- Cloud Firestore dengan cache lokal persisten untuk dukungan offline
