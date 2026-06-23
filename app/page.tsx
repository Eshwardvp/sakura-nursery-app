import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="text-center py-16">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <img src="/mascot.jpg" alt="Pot Boy" width={160} height={160} className="rounded-full shadow-lg" />
          <div>
            <h1 className="text-4xl font-bold text-orange-500">
              Pot Boy
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Daily plant drops • White-glove delivery • Home setup service
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4 justify-center">

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/daily-drop"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
          >
            View Today's Drop
          </Link>
          <Link
            href="/admin"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
          >
            Admin Panel
          </Link>
        </div>
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <Link
            href="/seasonal-plants"
            className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Seasonal
          </Link>
          <Link
            href="/premium-plants"
            className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Premium
          </Link>
          <Link
            href="/healthcare-plants"
            className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Healthcare
          </Link>
          <Link
            href="/plant-equipment"
            className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Equipment
          </Link>
          <Link
            href="/manures"
            className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Manures
          </Link>
          <Link
            href="/attractive-stones"
            className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm"
          >
            Stones
          </Link>
        </div>
      </section>
    </div>
  );
}