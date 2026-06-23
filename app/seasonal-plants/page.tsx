import Link from "next/link";

export default function SeasonalPlants() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-orange-500">Seasonal Plants</h1>
      <p className="mt-4 text-lg text-gray-600">
        Curated seasonal plants — timely picks for your home and garden.
      </p>

      <div className="mt-8">
        <Link href="/" className="text-orange-500 underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
