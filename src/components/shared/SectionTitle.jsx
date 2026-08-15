export default function SectionTitle({ text }) {
  return (
    <div className="relative mb-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-orange-200 rounded-full -ml-3"></div>

        <h2 className="text-lg font-semibold">{text}</h2>
      </div>

      <div className="h-[1px] mt-2 bg-gradient-to-r from-orange-400 to-transparent"></div>
    </div>
  );
}
