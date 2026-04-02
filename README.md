# SmartReadiCare AI Frontend MVP

![License](https://img.shields.io/badge/license-MIT-green)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF)
![React](https://img.shields.io/badge/React-18.x-61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)

SmartReadiCare AI adalah **frontend MVP dashboard readiness kesehatan & produktivitas** dengan pendekatan modern: ringan, responsif, dan data-first. Proyek ini dibangun untuk memvisualisasikan insight readiness dari sisi kesehatan, recovery, wellness, mental load, hingga innovation readiness.

---

## ✨ Highlight Utama

- **Dashboard modern (mobile-first + desktop sidebar)**
- **Unified Readiness Score** untuk ringkasan performa harian/mingguan
- **Critical Alerts Panel** dengan level risiko (`High`, `Moderate`, `Low`)
- **Recovery Trend Visualization** berbentuk animated bars 7 hari
- **Mental Load Heatmap** untuk memantau beban kognitif
- **Wellness Recommendations** yang actionable
- **Micro-interaction animation** (Framer Motion + Tailwind Animate)

---

## 🧠 Analisis Codebase (Detail & Mendalam)

## 1) Gambaran Arsitektur

Codebase saat ini adalah **single-page React app** berbasis Vite dengan struktur yang sederhana namun jelas untuk MVP:

```txt
src/
├── App.jsx                 # Halaman dashboard utama
├── main.jsx                # React entrypoint
├── index.css               # Global style + Tailwind directives
└── components/ui/
    ├── button.jsx          # Komponen Button reusable
    ├── badge.jsx           # Komponen RiskBadge reusable
    └── card.jsx            # Komponen Card reusable
```

Pemisahan ini menunjukkan pola yang baik:
- **Page composition** di `App.jsx`
- **Design primitives reusable** di `src/components/ui`
- **Styling system terpusat** lewat `tailwind.config.js`

## 2) Stack & Peran Teknologi

- **Vite**: build tool cepat untuk development MVP
- **React 18**: declarative UI dan komposisi komponen
- **TailwindCSS**: utility-first styling, cepat untuk iterasi desain
- **Framer Motion**: animasi masuk komponen + chart bars
- **lucide-react**: icon modern konsisten (Bell, Brain, HeartPulse, dll.)

## 3) Fungsi Tiap Modul Inti

### `src/main.jsx`
Fungsi:
- Mount aplikasi React ke elemen `#root`
- Membungkus App dengan `React.StrictMode`

### `src/App.jsx`
Fungsi:
- Menyusun seluruh layout dashboard (sidebar, header, metrics cards)
- Menyediakan data statis awal (`menu`, `bars`) untuk MVP
- Menampilkan blok fungsional utama:
  - Unified Readiness Score
  - Critical Alerts
  - Recovery Trend
  - Mental Load Heatmap
  - Wellness Recommendation
  - Innovation Readiness Quadrant

### `src/components/ui/card.jsx`
Fungsi:
- Wrapper card konsisten (radius, border, shadow, bg)
- Memudahkan scaling UI tanpa repetisi kelas Tailwind

### `src/components/ui/badge.jsx`
Fungsi:
- Menstandarkan status level risiko:
  - `high` → danger
  - `medium` → warning
  - `low` → success

### `src/components/ui/button.jsx`
Fungsi:
- Tombol CTA dengan style gradien utama brand

### `tailwind.config.js`
Fungsi:
- Menetapkan **design tokens** custom:
  - warna brand (`primary`, `secondary`, `success`, `warning`, `danger`)
  - background (`background`, `surface`, `hero`)
  - shadow card
  - animasi khusus (`float`)

### `docs/smartreadicare-uiux-mvp.md`
Fungsi:
- Menjadi dokumen blueprint produk/UI/UX:
  - IA dashboard
  - user flow
  - prioritas MVP (P0/P1)
  - strategi visual premium

## 4) Kekuatan Implementasi Saat Ini

- **Konsistensi visual bagus** karena token warna terdefinisi jelas
- **Komponen reusable** memudahkan maintenance awal
- **Animasi ringan** meningkatkan persepsi kualitas tanpa overload
- **Informasi dashboard sudah terstruktur** sesuai prioritas insight

## 5) Keterbatasan Saat Ini (MVP Stage)

- Data masih **hardcoded** (belum terhubung API/backend)
- Belum ada **routing multi-page** (masih satu halaman)
- Belum ada **state management global** untuk data dinamis
- Belum ada **autentikasi dan role-based access**
- Belum tersedia **testing** (unit/component/e2e)

## 6) Rekomendasi Pengembangan Lanjutan

1. Tambahkan routing (React Router) untuk modul `Overview`, `Recovery`, `Wellness`, dst.
2. Integrasikan data layer (mis. REST API + React Query).
3. Implementasi auth + role-based dashboard.
4. Tambahkan chart library untuk visual yang lebih kaya.
5. Tambahkan testing: Vitest + React Testing Library.
6. Siapkan CI untuk lint/build/test otomatis.

---

## 🛠️ Instalasi & Menjalankan Proyek

```bash
npm install
npm run dev
```

Akses: `http://localhost:5173`

### Build production

```bash
npm run build
npm run preview
```

---

## 📦 Scripts

- `npm run dev` → menjalankan dev server
- `npm run build` → build production bundle
- `npm run preview` → preview hasil build

---

## 🧩 Fitur & Fungsi (Ringkas)

| Fitur | Fungsi | Status |
|---|---|---|
| Unified Readiness Score | Menampilkan skor readiness komposit | ✅ MVP |
| Critical Alerts | Menandai risiko kesehatan/mental load | ✅ MVP |
| Recovery Trend | Visual tren recovery 7 hari | ✅ MVP |
| Mental Load Heatmap | Visual intensitas beban kognitif | ✅ MVP |
| Wellness Recommendation | Daftar aksi cepat untuk perbaikan | ✅ MVP |
| Innovation Quadrant | Snapshot kesiapan inovasi tim | ✅ MVP |
| Authentication | Login/role based access | 🚧 Planned |
| API Integration | Data real-time dari backend | 🚧 Planned |
| Weekly Report Export | Laporan mingguan terstruktur | 🚧 Planned |

---

## 📚 Dokumen Pendukung

- Konsep UI/UX lengkap: `docs/smartreadicare-uiux-mvp.md`

---

## 👨‍💻 Author

**Lettu Kes dr. Muhammad Sobri Maulana, S.Kom, CEH, OSCP, OSCE**

- GitHub: [github.com/sobri3195](https://github.com/sobri3195)
- Email: [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)
- Website: [muhammadsobrimaulana.netlify.app](https://muhammadsobrimaulana.netlify.app)
- YouTube: [@muhammadsobrimaulana6013](https://www.youtube.com/@muhammadsobrimaulana6013)
- Telegram: [winlin_exploit](https://t.me/winlin_exploit)
- TikTok: [@dr.sobri](https://www.tiktok.com/@dr.sobri)
- Grup WhatsApp: [Join Group](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)
- Toko Online Sobri: [pegasus-shop.netlify.app](https://pegasus-shop.netlify.app)

---

## ❤️ Donasi & Dukungan

Jika proyek ini bermanfaat, dukung pengembangan melalui:

- [Lynk](https://lynk.id/muhsobrimaulana)
- [Trakteer](https://trakteer.id/g9mkave5gauns962u07t)
- [Gumroad](https://maulanasobri.gumroad.com/)
- [KaryaKarsa](https://karyakarsa.com/muhammadsobrimaulana)
- [Nyawer](https://nyawer.co/MuhammadSobriMaulana)
- [Sevalla Page](https://muhammad-sobri-maulana-kvr6a.sevalla.page/)

Terima kasih atas dukungannya 🙏

---

## 📄 License

MIT License (silakan sesuaikan jika ingin lisensi berbeda).
