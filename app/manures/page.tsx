import Link from "next/link";

export default function Manures() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-orange-500">Manures & Fertilizers</h1>
      <p className="mt-4 text-lg text-gray-600">
        Organic and synthetic fertilizers to nourish your plants.
      </p>

      <div className="mt-8">
        <Link href="/" className="text-orange-500 underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
