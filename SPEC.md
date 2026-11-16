# Spesifikasi Produk

## Gambaran Produk

Aplikasi pencatatan tugas membantu pengguna mengelola pekerjaan, memantau progres, dan mengetahui tugas yang perlu diselesaikan berdasarkan deadline serta prioritas.

## Fitur Utama

1. **Menambahkan tugas** — pengguna dapat membuat tugas dengan judul dan, bila diperlukan, deskripsi, deadline, serta prioritas.
2. **Mengedit tugas** — pengguna dapat memperbarui informasi tugas yang sudah dibuat.
3. **Menghapus tugas** — pengguna dapat menghapus tugas yang tidak lagi diperlukan.
4. **Mengatur status tugas** — pengguna dapat mengubah status tugas menjadi *Belum dikerjakan*, *Sedang dikerjakan*, atau *Selesai*. Tugas juga dapat ditandai selesai.
5. **Mengatur deadline** — pengguna dapat menentukan atau mengubah tanggal tenggat tugas; deadline yang belum ditentukan diperbolehkan.
6. **Mengatur prioritas** — pengguna dapat memilih tingkat prioritas *Rendah*, *Sedang*, atau *Tinggi*.
7. **Mengelompokkan tugas berdasarkan status** — daftar tugas dapat dilihat per status: *Belum dikerjakan*, *Sedang dikerjakan*, dan *Selesai*.
8. **Melihat tugas selesai dan belum selesai** — pengguna dapat melihat daftar tugas yang selesai maupun yang belum selesai. Tugas *Belum dikerjakan* dan *Sedang dikerjakan* termasuk tugas belum selesai.

## Aturan Produk

- Setiap tugas memiliki judul dan status.
- Status awal tugas baru adalah *Belum dikerjakan*.
- Tugas berstatus *Selesai* termasuk dalam daftar tugas selesai; status lainnya termasuk dalam daftar belum selesai.
- Perubahan data tugas harus tersimpan agar tetap tersedia saat pengguna membuka aplikasi kembali.
- Supabase digunakan sebagai database sesuai aturan proyek.

## Kriteria Penerimaan

- Pengguna dapat membuat, mengubah, dan menghapus tugas.
- Pengguna dapat mengubah status, deadline, dan prioritas tugas.
- Pengguna dapat melihat tugas yang dikelompokkan berdasarkan status serta memisahkan tugas selesai dan belum selesai.
- Data tugas yang tersimpan tetap tersedia setelah aplikasi dimuat ulang.