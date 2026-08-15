export const articleCategories = [
  { id: "semua", label: "Semua Artikel" },
  { id: "web-development", label: "Web Development" },
  { id: "data-science", label: "Data Science" },
  { id: "career", label: "Career" },
  { id: "uiux-design", label: "UI/UX Design" },
  { id: "tips-productivity", label: "Tips & Productivity" },
];

export const articles = [
  {
    id: 1,
    slug: "10-javascript-tips-developer-pemula",
    title: "10 JavaScript Tips yang Wajib Diketahui Developer Pemula",
    excerpt: "Tingkatkan skill JavaScript-mu dengan tips praktis ini dan menulis kode yang lebih efisien, bersih, dan mudah dipelihara.",
    category: "web-development",
    categoryLabel: "Web Development",
    author: "Team Orange Kode",
    date: "20 Mei 2024",
    readTime: "6 min read",
    cover: "/assets/logos/logo-javascript.png",
    content: [
      {
        heading: "1. Gunakan const dan let, Hindari var",
        body: "Gunakan const secara default untuk variabel yang nilainya tidak berubah, dan let untuk yang nilainya bisa berubah. Hindari var karena memiliki scope yang membingungkan.",
      },
      {
        heading: "2. Manfaatkan Template Literal",
        body: "Template literal memudahkan kita membuat string dinamis tanpa perlu banyak konkatenasi, sehingga kode lebih mudah dibaca.",
      },
      {
        heading: "3. Gunakan Arrow Function untuk Fungsi Singkat",
        body: "Arrow function membuat kode lebih ringkas dan mudah dibaca, terutama untuk fungsi satu baris atau callback sederhana.",
      },
      {
        heading: "4. Destructuring untuk Kode Lebih Bersih",
        body: "Destructuring object dan array membantu mengekstrak nilai tanpa menulis akses properti berulang kali.",
      },
      {
        heading: "5. Gunakan Array Method Modern",
        body: "Method seperti map, filter, dan reduce membuat manipulasi data lebih deklaratif dibanding perulangan manual.",
      },
    ],
  },
  {
    id: 2,
    slug: "memahami-data-visualization-analisis-data",
    title: "Memahami Data Visualization untuk Analisis Data yang Efektif",
    excerpt: "Pelajari prinsip dasar visualisasi data dan tools populer yang banyak digunakan di industri.",
    category: "data-science",
    categoryLabel: "Data Science",
    author: "Team Orange Kode",
    date: "18 Mei 2024",
    readTime: "8 min read",
    cover: "/assets/logos/logo-python.png",
    content: [
      { heading: "Kenapa Visualisasi Data Penting", body: "Visualisasi membantu mengubah data mentah menjadi insight yang mudah dipahami dan diambil keputusannya." },
      { heading: "Memilih Jenis Chart yang Tepat", body: "Setiap jenis data punya representasi visual paling efektif, dari bar chart hingga heatmap." },
      { heading: "Tools Populer untuk Visualisasi", body: "Matplotlib, Seaborn, dan Plotly adalah beberapa tools yang banyak digunakan praktisi data." },
    ],
  },
  {
    id: 3,
    slug: "cara-membuat-portofolio-menarik-recruiter",
    title: "Cara Membuat Portofolio yang Menarik Perhatian Recruiter",
    excerpt: "Panduan lengkap membuat portofolio profesional yang bisa meningkatkan peluang kariermu.",
    category: "career",
    categoryLabel: "Career",
    author: "Team Orange Kode",
    date: "15 Mei 2024",
    readTime: "5 min read",
    cover: "/assets/illustrations/dashboard-analytics-mockup.png",
    content: [
      { heading: "Tampilkan Proyek Terbaikmu", body: "Pilih 3-5 proyek terbaik yang menunjukkan keahlian intimu secara jelas dan relevan dengan posisi yang dituju." },
      { heading: "Ceritakan Proses, Bukan Hanya Hasil", body: "Recruiter ingin tahu bagaimana kamu berpikir dan menyelesaikan masalah, bukan hanya hasil akhirnya." },
    ],
  },
  {
    id: 4,
    slug: "5-prinsip-uiux-setiap-desain",
    title: "5 Prinsip UI/UX yang Harus Kamu Terapkan di Setiap Desain",
    excerpt: "Pelajari prinsip dasar UI/UX untuk menciptakan pengalaman pengguna yang lebih baik.",
    category: "uiux-design",
    categoryLabel: "UI/UX Design",
    author: "Team Orange Kode",
    date: "12 Mei 2024",
    readTime: "7 min read",
    cover: "/assets/logos/logo-figma.png",
    content: [
      { heading: "1. Konsistensi", body: "Gunakan pola desain yang konsisten agar pengguna mudah memahami antarmuka." },
      { heading: "2. Hierarki Visual", body: "Susun elemen berdasarkan tingkat kepentingannya agar mata pengguna terarah dengan baik." },
    ],
  },
  {
    id: 5,
    slug: "teknik-pomodoro-untuk-developer",
    title: "Teknik Pomodoro untuk Developer: Fokus Maksimal, Hasil Optimal",
    excerpt: "Tingkatkan fokus dan produktivitas coding-mu dengan teknik Pomodoro yang terbukti efektif.",
    category: "tips-productivity",
    categoryLabel: "Tips & Productivity",
    author: "Team Orange Kode",
    date: "10 Mei 2024",
    readTime: "6 min read",
    cover: "/assets/illustrations/study-streak-card.png",
    content: [
      { heading: "Apa itu Teknik Pomodoro", body: "Metode manajemen waktu dengan interval fokus 25 menit diikuti istirahat singkat." },
      { heading: "Menerapkannya Saat Coding", body: "Gunakan setiap sesi untuk satu task kecil agar progres terasa dan tetap termotivasi." },
    ],
  },
  {
    id: 6,
    slug: "apa-itu-ai-dalam-web-development",
    title: "Apa itu AI dalam Web Development? Kenali Manfaat dan Contohnya",
    excerpt: "AI kini hadir di dunia web development. Yuk, kenali manfaat dan implementasinya!",
    category: "web-development",
    categoryLabel: "Web Development",
    author: "Team Orange Kode",
    date: "8 Mei 2024",
    readTime: "7 min read",
    cover: "/assets/illustrations/hero-student-illustration.png",
    content: [
      { heading: "AI sebagai Asisten Developer", body: "Tools berbasis AI membantu developer menulis kode lebih cepat dan mendeteksi bug lebih awal." },
      { heading: "Personalisasi Pengalaman Pengguna", body: "AI memungkinkan website menyesuaikan konten berdasarkan perilaku pengguna secara real-time." },
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug, limit = 4) {
  return articles.filter((article) => article.slug !== slug).slice(0, limit);
}
