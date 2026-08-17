import LegalPageLayout from "@/components/shared/LegalPageLayout";
import { privacyPolicy } from "@/data/legal";

export const metadata = {
  title: "Kebijakan Privasi — Orange Kode",
  description: "Bagaimana Orange Kode mengumpulkan, menggunakan, dan melindungi data pribadi kamu.",
};

export default function KebijakanPrivasiPage() {
  return <LegalPageLayout data={privacyPolicy} />;
}
