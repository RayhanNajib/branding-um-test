# Tes Web Developer — Tim Branding Universitas Negeri Malang (UM)

Repository ini berisi implementasi solusi untuk **Soal Tes Technical Web Developer Tim Branding UM**. Solusi dikembangkan dengan standar ketat Regulasi Branding Universitas Negeri Malang (Desain Typography, Palette Warna Navy/Grey, Border-Radius, dan Grid System).

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/RayhanNajib/branding-um-test](https://github.com/RayhanNajib/branding-um-test)

---

## 📋 Fitur & Solusi Tiap Soal

### 1. Custom Button Elements (Soal 1)
- **Desain & Warna**:
  - `Button Navy`: Background `#012060` &rarr; Hover `#cfd4df` (Teks berubah dari Putih ke Navy).
  - `Button Abu`: Background `#cfd4df` &rarr; Hover `#012060` (Teks berubah dari Navy ke Putih).
  - `Button Transparan`: Transparent Background dengan border Navy `#012060`.
- **Spesifikasi Teknis**:
  - Padding: `12px` horizontal, `8px` vertikal.
  - Border-Radius: `4px`.
  - Tanpa icon di sebelah kanan sesuai ketentuan soal.

### 2. Fragment Tab-Menu Responsive (Soal 2)
- Navigasi tab menu vertikal pada tampilan **Desktop** (`min-width: 769px`) dan responsive horizontal/stacked pada tampilan **Mobile/Tablet**.
- Menggunakan ARIA attributes (`role="tab"`, `aria-selected`, `aria-controls`) untuk aksesibilitas tinggi.
- Animasi transisi smooth `fadeIn` saat pergantian tab panel.

### 3. Parse Data JS Object Kalender Akademik (Soal 3)
- Memparsing data JavaScript Object dari `json kalender.txt` (Semester Gasal & Genap 2026/2027).
- Visualisasi berupa **Grid Kalender Interaktif** dengan indikator event & navigasi bulan (Juli 2026), disandingkan dengan **Daftar Tanggal Penting**.

### 4. Hover Card Prestasi & 12-Column Grid System (Soal 4)
- **Card Prestasi**:
  - Tanpa box shadow berlebih saat diam, border-radius `4px`.
  - Hover effect: Gambar membesar (*subtle zoom*), overlay navy transparan muncul membawa tombol link "Lihat Selengkapnya".
- **Grid Style (4 Baris 12 Kolom)**:
  - Implementasi CSS Grid 12 kolom responsive:
    - Baris 1: `hanya teks` (3 kolom @ `col-4`)
    - Baris 2: `Berisi gambar dan teks` (2 kolom @ `col-6`)
    - Baris 3 & 4: `gambar aja` (4 kolom @ `col-3`)

### 5. Integration API Folkcast Brand UM (Soal 5)
- Mengambil data dari endpoint API `https://brand.um.ac.id/wp-json/wp/v2/categories?slug=folkcast` atau `categories.json`.
- Dilengkapi **Graceful Fallback system** jika API dibatasi CORS / 403 Forbidden, sehingga card Folkcast tetap tampil sempurna.

---

## 🛠️ Teknologi yang Digunakan
- **HTML5**: Semantik & Accessible (WAI-ARIA).
- **CSS3**: Native CSS Variables, CSS Grid, Flexbox, Keyframe Animations.
- **JavaScript (ES6+)**: Async/Fetch API, DOM Manipulation, Event Handling.
- **Typography & Assets**: Font `Albert Sans` & `Inter`, `prestasi.webp`.

---

## 💻 Pengembang
- **Nama**: Muhammad Rayhan Najib
- **Brand**: FilesXins
- **Institusi**: Universitas Negeri Malang (UM)
