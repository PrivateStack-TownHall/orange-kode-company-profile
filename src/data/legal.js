// Shared content for the three legal pages: Kebijakan Refund, Kebijakan
// Privasi, and Syarat & Ketentuan. Each export follows the same shape so a
// single LegalPageLayout component can render any of them.

export const refundPolicy = {
  title: "Kebijakan",
  titleAccent: "Refund",
  subtitle:
    "Kami ingin proses pembelian kursus di Orange Kode tetap transparan dan nyaman. Halaman ini menjelaskan kondisi, persyaratan, dan proses pengajuan pengembalian dana.",
  lastUpdated: "1 Mei 2024",
  illustration: "/assets/illustrations/ilm-kebijakan-refund.png",
  highlights: [
    { icon: "CalendarClock", title: "7 Hari", text: "Batas maksimal pengajuan refund" },
    { icon: "BookX", title: "Belum Digunakan", text: "Materi belum diakses secara signifikan" },
    { icon: "CheckCircle2", title: "Valid", text: "Transaksi dapat diverifikasi" },
  ],
  sections: [
    {
      number: 1,
      icon: "FileText",
      title: "Ketentuan Umum",
      body: "Kebijakan Refund ini berlaku untuk pembelian kursus berbayar di Orange Kode melalui kanal resmi. Refund tidak otomatis diberikan untuk setiap permintaan, tetapi akan dipertimbangkan berdasarkan waktu pengajuan, status kursus, apakah layanan sudah digunakan, alasan refund, dan bukti transaksi.",
    },
    {
      number: 2,
      icon: "CheckCircle2",
      title: "Kapan Refund Bisa Diajukan?",
      list: [
        "Terjadi pembayaran ganda untuk kursus yang sama.",
        "Terjadi kendala teknis dari Orange Kode, di mana pembayaran berhasil tetapi kursus tidak dapat diakses dan tidak dapat diselesaikan.",
        "Terjadi kesalahan transaksi atau nominal yang menyebabkan pembayaran tidak sesuai.",
        "Kursus dibatalkan oleh Orange Kode dan tidak menyediakan alternatif yang disepakati.",
      ],
    },
    {
      number: 3,
      icon: "XCircle",
      title: "Kapan Refund Tidak Berlaku?",
      list: [
        "Pengajuan sudah melewati batas waktu yang ditentukan.",
        "Kursus sudah digunakan atau diakses secara signifikan.",
        "Peserta sudah menyelesaikan sebagian besar materi kursus.",
        "Peserta berubah pikiran setelah membeli kursus.",
        "Peserta merasa kursus tidak sesuai ekspektasi pribadi setelah mengikuti materi.",
        "Kendala berasal dari perangkat atau koneksi internet peserta.",
        "Transaksi menggunakan promo khusus yang secara eksplisit dinyatakan non-refundable.",
      ],
    },
    {
      number: 4,
      icon: "MonitorCheck",
      title: "Status Akses Kursus",
      statusBoxes: [
        { status: "success", title: "Belum digunakan", text: "Materi belum diakses dan akun belum memulai pembelajaran." },
        { status: "warning", title: "Sebagian digunakan", text: "Materi sudah diakses sebagian kecil." },
        { status: "danger", title: "Sudah digunakan", text: "Materi sudah diakses secara signifikan atau diselesaikan." },
      ],
    },
    {
      number: 5,
      icon: "CreditCard",
      title: "Cara Mengajukan Refund",
      steps: [
        { title: "Hubungi Orange Kode", text: "Sampaikan pengajuan refund melalui email support@orangekode.id atau WhatsApp Customer Support." },
        { title: "Kirim Data yang Diperlukan", text: "Sertakan nama, email, nama kursus, tanggal transaksi, bukti pembayaran, dan alasan pengajuan refund." },
        { title: "Tim Orange Kode Melakukan Verifikasi", text: "Kami akan memeriksa transaksi dan status penggunaan kursus." },
        { title: "Keputusan Refund", text: "Pengguna akan mendapatkan informasi apakah refund disetujui, disetujui sebagian, atau tidak memenuhi syarat." },
      ],
    },
    {
      number: 6,
      icon: "Clock",
      title: "Proses Pengembalian Dana",
      body: "Jika refund disetujui, dana akan dikembalikan melalui metode pembayaran yang sesuai dan tersedia.",
      note: { title: "Estimasi Proses", text: "Proses pengembalian dana biasanya membutuhkan waktu beberapa hari kerja, tergantung pada metode pembayaran dan pihak penyedia layanan terkait." },
    },
  ],
  specialNote:
    "Dalam kondisi tertentu yang berada di luar ketentuan standar, Orange Kode dapat melakukan peninjauan khusus berdasarkan kasus masing-masing.",
  ctaTitle: "Punya masalah dengan transaksi?",
  ctaText: "Jangan khawatir. Hubungi tim Orange Kode dan kami akan membantu memeriksa transaksi kamu.",
};

export const privacyPolicy = {
  title: "Kebijakan",
  titleAccent: "Privasi",
  subtitle:
    "Kami menghargai privasi kamu. Halaman ini menjelaskan bagaimana Orange Kode mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi saat kamu menggunakan layanan kami.",
  lastUpdated: "1 Mei 2024",
  illustration: "/assets/illustrations/ilm-kebijakan-privasi.png",
  sections: [
    {
      number: 1,
      icon: "FileText",
      title: "Pendahuluan",
      body: "Kebijakan Privasi ini menjelaskan bagaimana Orange Kode mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi kamu saat mengakses dan menggunakan layanan kami, termasuk website, kursus, event, dan fitur lainnya. Dengan menggunakan layanan Orange Kode, kamu dianggap telah memahami dan menyetujui kebijakan privasi ini.",
    },
    {
      number: 2,
      icon: "User",
      title: "Data yang Kami Kumpulkan",
      list: [
        "Informasi yang kamu berikan: nama, email, nomor telepon, dan informasi kontak lainnya saat mendaftar, mengisi form, atau menghubungi kami.",
        "Informasi penggunaan: halaman yang dikunjungi, fitur yang digunakan, waktu akses, dan perangkat yang kamu gunakan.",
        "Informasi yang kamu kirimkan: portofolio, testimonial, komentar, dan konten lain yang kamu bagikan di Orange Kode.",
      ],
    },
    {
      number: 3,
      icon: "Lightbulb",
      title: "Bagaimana Data Digunakan",
      list: [
        "Memberikan dan meningkatkan layanan, termasuk informasi kursus, event, dan fitur lainnya.",
        "Memproses dan mengelola partisipasi kamu dalam event atau komunitas.",
        "Menyediakan dukungan dan menjawab pertanyaan.",
        "Meningkatkan kualitas website dan pengalaman belajar.",
        "Mengirimkan informasi terbaru, pembaruan, dan promosi (jika kamu berlangganan newsletter).",
      ],
    },
    {
      number: 4,
      icon: "Cookie",
      title: "Cookies & Analytics",
      body: "Kami menggunakan cookies dan teknologi analitik untuk membantu kami memahami bagaimana website Orange Kode digunakan, sehingga kami dapat memberikan pengalaman yang lebih baik.",
      subsections: [
        { title: "Apa itu Cookies?", text: "Cookies adalah file kecil yang disimpan di perangkat kamu untuk membantu website mengenali preferensi dan aktivitas tertentu." },
        {
          title: "Kami menggunakan cookies untuk:",
          list: ["Memastikan website berfungsi dengan baik", "Mengingat preferensi kamu", "Menganalisis penggunaan website", "Meningkatkan performa dan keamanan"],
        },
      ],
      body2: "Kamu dapat mengatur atau menonaktifkan cookies melalui pengaturan browser kamu, meskipun beberapa fungsi website mungkin terpengaruh.",
    },
    {
      number: 5,
      icon: "CreditCard",
      title: "Pembayaran",
      list: [
        "Untuk layanan berbayar, Orange Kode bekerja sama dengan penyedia layanan pembayaran pihak ketiga. Informasi pembayaran kamu akan diproses dan dikelola oleh penyedia tersebut sesuai dengan kebijakan privasi mereka.",
        "Kami tidak menyimpan data kartu kredit atau informasi pembayaran sensitif secara langsung.",
        "Kamu akan diarahkan ke platform pembayaran yang aman untuk menyelesaikan transaksi.",
        "Data transaksi yang diperlukan akan disimpan sesuai dengan ketentuan yang berlaku.",
      ],
    },
    {
      number: 6,
      icon: "Share2",
      title: "Berbagi Data dengan Pihak Ketiga",
      body: "Kami hanya akan membagikan data pribadi kamu kepada pihak ketiga jika diperlukan dengan tujuan yang jelas, seperti:",
      list: ["Penyedia layanan pembayaran", "Penyedia layanan hosting dan teknologi", "Alat analitik dan pemantauan performa", "Partner acara atau komunitas (jika diperlukan)", "Pihak berwenang, jika diwajibkan oleh hukum"],
      body2: "Orange Kode tidak menjual data pribadi pengguna kepada pihak manapun.",
    },
    {
      number: 7,
      icon: "Database",
      title: "Penyimpanan Data",
      list: ["Menyediakan layanan yang kamu gunakan", "Memenuhi tujuan yang dijelaskan dalam kebijakan ini", "Memenuhi kewajiban hukum yang berlaku"],
      body2: "Kami akan mengambil langkah yang wajar untuk memastikan bahwa data kamu disimpan dengan aman dan hanya selama waktu yang diperlukan.",
    },
    {
      number: 8,
      icon: "Shield",
      title: "Keamanan Data",
      body: "Orange Kode berkomitmen untuk menjaga keamanan data pribadi kamu dengan menerapkan langkah-langkah teknis dan organisasi yang sesuai, seperti:",
      list: ["Akses terbatas ke data", "Enkripsi data sensitif", "Sistem keamanan dan pemantauan berkala", "Backup data secara rutin"],
      body2: "Kami juga terus berupaya meningkatkan sistem keamanan untuk melindungi data kamu dari akses, penggunaan, atau pengungkapan yang tidak sah.",
    },
    {
      number: 9,
      icon: "Users",
      title: "Hak Pengguna atas Data",
      body: "Kamu memiliki hak untuk:",
      list: [
        "Mengetahui data pribadi apa saja yang kami proses",
        "Mengakses data pribadi kamu",
        "Memperbaiki data pribadi yang tidak akurat",
        "Meminta penghapusan data pribadi (dalam kondisi tertentu)",
        "Menarik persetujuan (jika pemrosesan berdasarkan persetujuan)",
        "Mengajukan keberatan terhadap pemrosesan data (dalam kondisi tertentu)",
      ],
      body2: "Untuk menggunakan hak-hak tersebut, silakan hubungi tim Orange Kode melalui kontak yang tersedia di bawah.",
    },
    {
      number: 10,
      icon: "Heart",
      title: "Data Anak",
      body: "Orange Kode tidak secara sengaja mengumpulkan data pribadi anak-anak tanpa dasar atau persetujuan yang sesuai dengan ketentuan hukum yang berlaku. Jika kamu adalah orang tua atau wali dan menemukan adanya pengumpulan data anak, silakan hubungi kami untuk penanganan lebih lanjut.",
    },
    {
      number: 11,
      icon: "Images",
      title: "Portfolio, Testimonial & Konten Pengguna",
      body: "Kami dapat membagikan karya, proyek, atau testimonial melalui fitur Gallery dan konten lainnya di Orange Kode. Dengan mengirimkan konten tersebut, kamu memberikan izin kepada Orange Kode untuk menampilkan konten tersebut di website, media sosial, dan materi promosi, sesuai dengan persetujuan yang kamu berikan.",
    },
    {
      number: 12,
      icon: "Link2",
      title: "Komunikasi & Newsletter",
      body: "Kami dapat menggunakan data kamu untuk mengirimkan informasi terkait layanan, event, dan pembaruan. Kamu dapat berhenti menerima informasi pemasaran dan promosi yang relevan, berlangganan kapan saja melalui tautan yang tersedia dalam email.",
    },
    {
      number: 13,
      icon: "Link2",
      title: "Website Pihak Ketiga",
      body: "Website Orange Kode dapat berisi tautan ke website atau layanan pihak ketiga. Kebijakan Privasi Orange Kode tidak berlaku pada website atau layanan pihak ketiga tersebut. Kami menyarankan kamu untuk membaca kebijakan privasi masing-masing pihak ketiga.",
    },
    {
      number: 14,
      icon: "RefreshCw",
      title: "Perubahan Kebijakan Privasi",
      body: "Orange Kode dapat memperbarui Kebijakan Privasi dari waktu ke waktu. Versi terbaru akan selalu tersedia di halaman ini dan akan mencantumkan tanggal pembaruan.",
    },
  ],
  ctaTitle: "Punya pertanyaan tentang privasi?",
  ctaText: "Jika kamu ingin mengetahui, memperbaiki, atau menggunakan hak terkait data pribadi, hubungi tim Orange Kode.",
};

export const termsOfService = {
  title: "Syarat &",
  titleAccent: "Ketentuan",
  subtitle: "Ketentuan yang mengatur penggunaan website, layanan pembelajaran, kursus, dan fitur Orange Kode.",
  lastUpdated: "1 Mei 2024",
  illustration: "/assets/illustrations/ilm-syarat-dan-ketentuan.png",
  sections: [
    {
      number: 1,
      icon: "FileText",
      title: "Ketentuan Umum",
      body: "Syarat & Ketentuan ini merupakan aturan yang mengatur penggunaan website, layanan pembelajaran, kursus, event, dan fitur lainnya yang disediakan oleh Orange Kode. Dengan mengakses dan menggunakan platform Orange Kode, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang berlaku.",
    },
    {
      number: 2,
      icon: "User",
      title: "Akun & Penggunaan Platform",
      body: "Untuk mengakses berbagai layanan di Orange Kode, pengguna dapat membuat akun dengan data yang valid dan akurat. Pengguna bertanggung jawab penuh atas keamanan akun dan aktivitas yang dilakukan melalui akun tersebut. Orange Kode berhak membatasi atau menonaktifkan akun jika ditemukan pelanggaran terhadap ketentuan ini.",
    },
    {
      number: 3,
      icon: "GraduationCap",
      title: "Kursus & Akses Pembelajaran",
      body: "Pembelian kursus di Orange Kode memberikan hak akses untuk mengikuti dan mengakses materi pembelajaran sesuai dengan ketentuan yang berlaku. Materi kursus dapat disajikan dalam berbagai format, seperti video, modul, artikel, dan lainnya. Akses kursus diberikan kepada pemilik akun dan tidak dapat dipindahkan kepada pihak lain.",
    },
    {
      number: 4,
      icon: "CreditCard",
      title: "Pembayaran, Pembatalan & Refund",
      body: 'Harga kursus dan layanan lainnya ditampilkan pada halaman masing-masing produk. Orange Kode dapat mengubah harga sewaktu-waktu dengan pemberitahuan yang wajar. Pembayaran dilakukan melalui metode yang tersedia. Untuk informasi lebih lanjut mengenai kebijakan pembatalan dan pengembalian dana (refund), silakan lihat Kebijakan Refund kami.',
      linkTo: { label: "Kebijakan Refund", href: "/kebijakan-refund" },
    },
    {
      number: 5,
      icon: "ShieldCheck",
      title: "Hak Kekayaan Intelektual",
      body: "Seluruh konten, materi, desain, logo, dan fitur yang terdapat di Orange Kode merupakan karya intelektual yang dilindungi hukum. Pengguna tidak diperkenankan untuk menyalin, mendistribusikan, memodifikasi, atau menggunakan konten Orange Kode untuk kepentingan komersial tanpa izin tertulis dari kami.",
    },
    {
      number: 6,
      icon: "Images",
      title: "Karya, Portfolio & Konten Pengguna",
      body: "Project dan karya yang dibuat oleh peserta selama mengikuti kursus tetap menjadi milik masing-masing peserta. Dengan mengirimkan karya ke Gallery Orange Kode, peserta memberikan izin kepada Orange Kode untuk menampilkan karya tersebut di website, media sosial, atau materi promosi Orange Kode, dengan tetap mencantumkan kredit kepada pembuat karya.",
    },
    {
      number: 7,
      icon: "Users",
      title: "Event, Community & Testimonial",
      body: "Orange Kode dapat menyelenggarakan berbagai event, baik online maupun offline, serta komunitas pembelajaran untuk mendukung peserta belajar dan berkembang. Peserta wajib mematuhi tata tertib event dan komunitas. Testimonial yang diberikan pengguna dapat digunakan Orange Kode untuk keperluan promosi dan informasi, dengan persetujuan yang diberikan oleh pengguna.",
    },
    {
      number: 8,
      icon: "Award",
      title: "Sertifikat",
      body: "Orange Kode dapat menyediakan sertifikat penyelesaian untuk beberapa kursus tertentu, dengan syarat dan ketentuan yang berlaku. Sertifikat diterbitkan atas nama peserta berdasarkan data yang diberikan. Sertifikat dari Orange Kode merupakan bentuk apresiasi atas pembelajaran dan tidak menjamin pekerjaan atau peluang karier tertentu.",
    },
    {
      number: 9,
      icon: "Lock",
      title: "Privasi & Keamanan",
      body: 'Orange Kode berkomitmen untuk melindungi data pribadi pengguna sesuai dengan Kebijakan Privasi yang berlaku. Kami juga menerapkan langkah-langkah keamanan untuk menjaga informasi dan data pengguna tetap aman.',
      linkTo: { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    },
    {
      number: 10,
      icon: "MonitorCheck",
      title: "Ketersediaan Layanan & Disclaimer",
      body: "Orange Kode berupaya menjaga agar layanan tetap tersedia dan dapat diakses dengan baik. Namun, layanan dapat mengalami gangguan teknis, pemeliharaan, atau kendala dari pihak ketiga. Orange Kode tidak menjamin layanan akan selalu tersedia tanpa gangguan. Selain itu, semua informasi dan materi di Orange Kode disediakan untuk tujuan edukasi dan pengembangan diri, sehingga tidak dianggap sebagai jaminan hasil tertentu, termasuk dalam hal karier atau pekerjaan.",
    },
    {
      number: 11,
      icon: "RefreshCw",
      title: "Penangguhan & Perubahan Ketentuan",
      body: "Orange Kode berhak untuk menangguhkan atau menghentikan akses pengguna jika ditemukan pelanggaran terhadap ketentuan ini. Kami juga dapat memperbarui atau mengubah Syarat & Ketentuan ini dari waktu ke waktu. Versi terbaru akan diumumkan di halaman ini.",
    },
    {
      number: 12,
      icon: "Scale",
      title: "Hukum yang Berlaku",
      body: "Syarat & Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Segala bentuk sengketa akan diselesaikan secara musyawarah terlebih dahulu, dan jika tidak tercapai kesepakatan, akan diselesaikan sesuai dengan ketentuan hukum yang berlaku.",
    },
  ],
  ctaTitle: "Ada pertanyaan tentang Syarat & Ketentuan?",
  ctaText: "Hubungi tim Orange Kode melalui email atau media sosial kami.",
};
