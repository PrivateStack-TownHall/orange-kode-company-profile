import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-default)]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
