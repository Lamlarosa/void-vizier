# Modern Portfolio Website

Website portfolio pribadi yang modern dan responsif dengan tema hitam, merah, dan putih.

## 🎨 Design Features

- **Modern & Futuristik**: UI yang clean dengan efek glow dan animasi halus
- **Responsif**: Tampilan optimal di semua perangkat
- **Tema Konsisten**: Warna hitam, merah, putih dengan gradien elegan
- **Animasi Smooth**: Scroll animations, hover effects, dan transisi halus

## 🚀 Komponen Utama

- **Navigation**: Menu navigasi dengan active state dan smooth scroll
- **Hero Section**: Landing page dengan foto profil dan intro
- **About Me**: Deskripsi diri dengan highlights dan statistics
- **Skills**: Line chart interaktif menampilkan skill level
- **Projects**: Grid project cards dengan filter kategori
- **Contact**: Form kontak dengan informasi lengkap
- **Footer**: Social links dan navigation

## 📁 Struktur File

```
src/
├── components/
│   ├── Navigation.tsx      # Menu navigasi
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills dengan chart
│   ├── Projects.tsx       # Projects grid
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── data/
│   └── portfolio.ts       # Data konfigurasi
├── assets/
│   └── profile-photo.jpg  # Foto profil
└── pages/
    └── Index.tsx          # Main page
```

## ⚙️ Cara Modifikasi

### 1. Mengganti Data Pribadi
Edit file `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Nama Anda",           // Ganti nama
    title: "Job Title Anda",     // Ganti job title
    email: "email@anda.com",     // Ganti email
    // ... dst
  },
  // ... bagian lainnya
};
```

### 2. Mengganti Foto Profil
- Ganti file di `src/assets/profile-photo.jpg` dengan foto Anda
- Atau ubah path di `portfolioData.personal.profileImage`

### 3. Mengubah Skills
Edit bagian skills di `portfolio.ts`:

```typescript
skills: {
  HTML: 90,        // Ubah level (0-100)
  CSS: 85,
  JavaScript: 88,
  "Skill Baru": 75  // Tambah skill baru
}
```

### 4. Menambah/Edit Projects
Edit array projects di `portfolio.ts`:

```typescript
projects: [
  {
    id: 1,
    title: "Project Title",
    description: "Deskripsi project",
    technologies: ["Tech1", "Tech2"],
    image: "URL_GAMBAR",
    liveUrl: "URL_DEMO",
    githubUrl: "URL_GITHUB",
    category: "Category"
  }
  // Tambah project baru...
]
```

### 5. Mengubah Warna Theme
Edit file `src/index.css` di bagian CSS variables:

```css
:root {
  --primary: 0 85% 60%;     // Warna merah utama
  --background: 0 0% 8%;    // Warna background
  // ... ubah sesuai keinginan
}
```

### 6. Menambah Section Baru
1. Buat komponen baru di `src/components/`
2. Import dan tambahkan di `src/pages/Index.tsx`
3. Tambah menu di `portfolioData.navigation`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Best Practices

- Gunakan semantic tokens dari design system
- Semua warna menggunakan HSL format
- Animasi menggunakan CSS variables untuk konsistensi
- Komponen modular dan reusable
- Data terpisah untuk kemudahan maintenance

## 🚀 Deployment

Website siap di-deploy ke platform manapun:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Tinggal run `npm run build` dan upload folder `dist/`.

---

**Tips**: Semua data website ada di file `src/data/portfolio.ts` untuk memudahkan modifikasi tanpa menyentuh kode komponen.