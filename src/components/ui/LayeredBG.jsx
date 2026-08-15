import Image from "next/image";

export default function LayeredBg() {
  return (
    <div className="relative flex justify-center md:justify-end">
      <div className="absolute w-[380px] h-[380px] bg-white rotate-12 rounded-xl"></div>

      <div className="relative bg-orange-500 w-[380px] h-[380px] rounded-xl flex items-center justify-center shadow-lg">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </div>
    </div>
  );
}
