import LegalPageLayout from "@/components/shared/LegalPageLayout";
import { refundPolicy } from "@/data/legal";

export const metadata = {
  title: "Kebijakan Refund — Orange Kode",
  description: "Ketentuan dan proses pengajuan refund kursus di Orange Kode.",
};

export default function KebijakanRefundPage() {
  return <LegalPageLayout data={refundPolicy} />;
}
