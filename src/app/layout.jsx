import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/app/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import { icons } from "lucide-react";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Orange Kode — Belajar Teknologi, Bangun Masa Depan",
  description:
    "Platform belajar & bootcamp teknologi berbasis Indonesia dengan kurikulum praktis dan mentor berpengalaman.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
