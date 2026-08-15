export default function Sticker({
  icon,
  title,
  text,
  top,
  left,
  right,
  bottom,
}) {
  const style = {
    position: "absolute",
    top,
    left,
    right,
    bottom,
  };

  return (
    <div
      style={style}
      className="bg-white rounded-xl shadow-lg flex items-center gap-3 p-4"
    >
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <div className="font-semibold text-gray-800">{title}</div>

        <div className="text-sm text-gray-500">{text}</div>
      </div>
    </div>
  );
}
