export default function DailyDropPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold text-green-700">🌿 Today's Daily Drop</h1>
      <p className="mt-2 text-gray-500 text-sm">
        Fresh plants and nursery items uploaded today. Reserve before they're gone!
      </p>

      <div className="mt-6 border-2 border-dashed border-gray-200 rounded-xl p-12 text-center text-gray-400">
        <div className="text-4xl">🪴</div>
        <p className="mt-3 font-medium">No drops published yet today.</p>
        <p className="text-sm mt-1">Check back soon or follow us for updates.</p>
      </div>
    </div>
  );
}