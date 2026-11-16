### 2026-11-16 — Inisialisasi proyek

- **Dikerjakan:** Membuat AGENTS.md, SPEC.md, PLAN.md, HISTORY.md.
- **Keputusan:** Stack Vite + React + TypeScript + Tailwind; Supabase untuk database & auth; GitHub untuk repo; Vercel untuk deploy.
- **Masalah terbuka:** Belum ada repo, proyek Supabase, atau kode.
- **Berikutnya:** Tahap 0 di PLAN.md.

### 2026-11-16 — Inisialisasi dan verifikasi lokal

- **Dikerjakan:** Proyek berhasil diinisialisasi dengan Vite menggunakan template React. Node.js v26.13.1 dan npm v11.20.0 terpasang di `D:\Program Files\nodejs` dan versinya berhasil diverifikasi.
- **Dependensi:** `npm install` berhasil diselesaikan; `node_modules` dan `package-lock.json` tersedia.
- **Server dan akses:** Development server berhasil dijalankan dengan `npm run dev`. `http://localhost:5173` merespons HTTP 200 dan menyajikan halaman aplikasi.
- **Kendala dan penyelesaian:** Percobaan awal `npm install` gagal karena `package.json` belum tersedia. Proyek kemudian diinisialisasi dengan Vite terlebih dahulu, lalu `npm install` dijalankan kembali hingga berhasil. Pada shell pemeriksaan saat ini, perintah `node` dan `npm` tidak terdeteksi melalui PATH; keduanya ditemukan di `D:\Program Files\nodejs` dan dapat diverifikasi dengan menjalankan executable melalui lokasi tersebut.
- **Berikutnya:** Menyiapkan struktur folder React, membuat halaman dashboard, lalu mengembangkan fitur pencatatan tugas sesuai spesifikasi.