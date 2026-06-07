import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-green-700">
          🌸 Sakura Nursery
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Daily plant drops • White-glove delivery • Home setup service
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/daily-drop"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
          >
            🌿 View Today's Drop
          </Link>
          <Link
            href="/admin"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
          >
            Admin Panel
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="border rounded-xl p-6 text-center shadow-sm">
          <div className="text-3xl">📸</div>
          <h3 className="mt-3 font-semibold text-lg">Daily Inventory Drops</h3>
          <p className="mt-2 text-sm text-gray-500">
            Fresh plant photos uploaded every morning. Browse live stock.
          </p>
        </div>
        <div className="border rounded-xl p-6 text-center shadow-sm">
          <div className="text-3xl">🛒</div>
          <h3 className="mt-3 font-semibold text-lg">Instant Booking</h3>
          <p className="mt-2 text-sm text-gray-500">
            Buy plants, pots, soil, and pesticides with real-time availability.
          </p>
        </div>
        <div className="border rounded-xl p-6 text-center shadow-sm">
          <div className="text-3xl">🏡</div>
          <h3 className="mt-3 font-semibold text-lg">White-Glove Setup</h3>
          <p className="mt-2 text-sm text-gray-500">
            Our team pots and aligns your plants inside your home.
          </p>
        </div>
      </section>
    </div>
  );
}