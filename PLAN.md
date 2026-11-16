# Peta Rencana Pengerjaan Website

Urutan berikut digunakan untuk mengembangkan aplikasi pencatatan tugas dari persiapan hingga rilis. Setiap tahap diselesaikan dan diverifikasi sebelum melanjutkan ke tahap berikutnya.

## 1. Persiapan Proyek

- Tinjau spesifikasi produk dan aturan tetap proyek.
- Pastikan framework, bahasa, dan teknologi yang telah ditentukan tersedia dan dapat dijalankan.
- Periksa struktur proyek, dependensi, serta perintah untuk menjalankan, menguji, dan membangun aplikasi.
- Siapkan konfigurasi lokal dan dokumentasikan kebutuhan environment tanpa memasukkan kredensial ke dalam kode.

**Hasil tahap:** proyek dapat dijalankan secara lokal dan alur pengembangan sudah diketahui.

## 2. Pembuatan Desain

- Tentukan struktur halaman dan alur pengguna untuk melihat serta mengelola tugas.
- Buat rancangan daftar tugas, formulir tambah/edit, dan kontrol status, deadline, serta prioritas.
- Rancang tampilan untuk daftar semua tugas, tugas selesai, tugas belum selesai, dan pengelompokan berdasarkan status.
- Pastikan desain konsisten dengan pola proyek, responsif pada ukuran layar utama, dan memiliki tampilan untuk kondisi kosong serta proses/error.

**Hasil tahap:** rancangan antarmuka dan alur utama siap menjadi acuan implementasi.

## 3. Konfigurasi Supabase

- Siapkan proyek Supabase dan konfigurasi koneksi untuk lingkungan pengembangan.
- Rancang tabel tugas sesuai spesifikasi, termasuk judul, deskripsi opsional, status, deadline opsional, prioritas, dan waktu pembuatan/perubahan.
- Tetapkan nilai status awal *Belum dikerjakan* serta pilihan status dan prioritas yang valid.
- Atur kebijakan akses database sesuai kebutuhan aplikasi dan aktifkan Row Level Security bila relevan.
- Simpan URL dan kunci yang diperlukan melalui environment variable; jangan mengekspos kunci rahasia di sisi klien.
- Verifikasi koneksi dan operasi dasar database.

**Hasil tahap:** skema dan akses database siap digunakan aplikasi.

## 4. Pengembangan Fitur

- Bangun antarmuka sesuai rancangan dengan pola desain yang konsisten.
- Implementasikan pemuatan dan penampilan daftar tugas dari Supabase.
- Implementasikan tambah, edit, dan hapus tugas.
- Implementasikan perubahan status, termasuk menandai tugas selesai.
- Implementasikan pengaturan deadline dan prioritas.
- Implementasikan tampilan berdasarkan status serta pemisahan tugas selesai dan belum selesai.
- Tambahkan validasi input, konfirmasi sebelum penghapusan, dan umpan balik untuk proses berhasil atau gagal.
- Pastikan data tersimpan di Supabase dan tetap tersedia setelah aplikasi dimuat ulang.

**Hasil tahap:** seluruh fitur utama pada spesifikasi produk berfungsi.

## 5. Pengujian

- Uji setiap alur utama: tambah, edit, hapus, ubah status, atur deadline, dan atur prioritas.
- Uji pengelompokan status serta daftar selesai dan belum selesai, termasuk saat daftar kosong.
- Uji validasi input, kegagalan koneksi/database, dan pemuatan ulang data.
- Periksa tampilan responsif dan konsistensi desain pada ukuran layar utama.
- Jalankan pemeriksaan dan perintah build yang tersedia di proyek; perbaiki kegagalan sebelum rilis.

**Gerbang rilis:** aplikasi dapat dijalankan dan build berhasil sebelum deployment.

## 6. Deployment ke Vercel

- Hubungkan repositori proyek ke Vercel dan pilih konfigurasi build yang sesuai dengan framework proyek.
- Atur environment variable Supabase untuk lingkungan Preview dan Production sesuai kebutuhan.
- Deploy ke Preview dan lakukan smoke test terhadap fitur utama serta koneksi database.
- Setelah verifikasi Preview berhasil, deploy ke Production.
- Periksa website Production, catat URL rilis, dan pantau error awal setelah deployment.

**Hasil akhir:** website tersedia melalui Vercel dan fitur utama telah diverifikasi di Production.