// Kebijakan Refund (Refund Policy) content — has a more unique layout
// than the other legal pages (highlight badges, Ya/Tidak comparison,
// status grid, numbered steps), so it gets its own dedicated schema.

export const refundLastUpdated = "1 Mei 2024";

export const refundHighlights = [
  { icon: "CalendarClock", value: "7 Hari", label: "Batas maksimal pengajuan refund" },
  { icon: "BookmarkX", value: "Belum Digunakan", label: "Materi belum diakses secara signifikan" },
  { icon: "CheckCircle2", value: "Valid", label: "Transaksi dapat diverifikasi" },
];

export const refundGeneral = {
  icon: "FileText",
  title: "1. Ketentuan Umum",
  text: "Kebijakan Refund ini berlaku untuk pembelian kursus berbayar di Orange Kode melalui kanal resmi. Refund tidak otomatis diberikan untuk setiap permintaan, tetapi akan dipertimbangkan berdasarkan waktu pengajuan, status kursus, apakah layanan sudah digunakan, alasan refund, dan bukti transaksi.",
};

export const refundEligible = {
  icon: "CheckCircle2",
  title: "2. Kapan Refund Bisa Diajukan?",
  subtitle: "Refund dapat dipertimbangkan jika:",
  items: [
    "Terjadi pembayaran ganda untuk kursus yang sama.",
    "Terjadi kendala teknis dari Orange Kode, di mana pembayaran berhasil tetapi kursus tidak dapat diakses dan tidak dapat diselesaikan.",
    "Terjadi kesalahan transaksi atau nominal yang menyebabkan pembayaran tidak sesuai.",
    "Kursus dibatalkan oleh Orange Kode dan tidak menyediakan alternatif yang disepakati.",
  ],
};

export const refundNotEligible = {
  icon: "XCircle",
  title: "3. Kapan Refund Tidak Berlaku?",
  subtitle: "Refund tidak berlaku jika:",
  items: [
    "Pengajuan sudah melewati batas waktu yang ditentukan.",
    "Kursus sudah digunakan atau diakses secara signifikan.",
    "Peserta sudah menyelesaikan sebagian besar materi kursus.",
    "Peserta berubah pikiran setelah membeli kursus.",
    "Peserta merasa kursus tidak sesuai ekspektasi pribadi setelah mengikuti materi.",
    "Kendala berasal dari perangkat atau koneksi internet peserta.",
    "Transaksi menggunakan promo khusus yang secara eksplisit dinyatakan non-refundable.",
  ],
};

export const refundAccessStatus = {
  icon: "MonitorSmartphone",
  title: "4. Status Akses Kursus",
  subtitle: "Status akses kursus akan menjadi pertimbangan dalam proses refund:",
  statuses: [
    { variant: "success", title: "Belum digunakan", text: "Materi belum diakses dan akun belum memulai pembelajaran." },
    { variant: "warning", title: "Sebagian digunakan", text: "Materi sudah diakses sebagian kecil." },
    { variant: "danger", title: "Sudah digunakan", text: "Materi sudah diakses secara signifikan atau diselesaikan." },
  ],
};

export const refundHowTo = {
  icon: "CreditCard",
  title: "5. Cara Mengajukan Refund",
  subtitle: "Ikuti langkah-langkah berikut untuk mengajukan refund:",
  steps: [
    { title: "Hubungi Orange Kode", text: "Sampaikan pengajuan refund melalui email support@orangekode.id atau WhatsApp Customer Support." },
    { title: "Kirim Data yang Diperlukan", text: "Sertakan nama, email, nama kursus, tanggal transaksi, bukti pembayaran, dan alasan pengajuan refund." },
    { title: "Tim Orange Kode Melakukan Verifikasi", text: "Kami akan memeriksa transaksi dan status penggunaan kursus." },
    { title: "Keputusan Refund", text: "Pengguna akan mendapatkan informasi apakah refund disetujui, disetujui sebagian, atau tidak memenuhi syarat." },
  ],
};

export const refundProcess = {
  icon: "Clock",
  title: "6. Proses Pengembalian Dana",
  text: "Jika refund disetujui, dana akan dikembalikan melalui metode pembayaran yang sesuai dan tersedia.",
  note: {
    title: "Estimasi Proses",
    text: "Proses pengembalian dana biasanya membutuhkan waktu beberapa hari kerja, tergantung pada metode pembayaran dan pihak penyedia layanan terkait.",
  },
};

export const refundSpecialCondition =
  "Dalam kondisi tertentu yang berada di luar ketentuan standar, Orange Kode dapat melakukan peninjauan khusus berdasarkan kasus masing-masing.";
