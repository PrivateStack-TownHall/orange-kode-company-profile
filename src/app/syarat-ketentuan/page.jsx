import LegalPageLayout from "@/components/shared/LegalPageLayout";
import { termsOfService } from "@/data/legal";

export const metadata = {
  title: "Syarat & Ketentuan — Orange Kode",
  description: "Ketentuan penggunaan website, layanan pembelajaran, dan fitur Orange Kode.",
};

export default function SyaratKetentuanPage() {
  return <LegalPageLayout data={termsOfService} />;
}
