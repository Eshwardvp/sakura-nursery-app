import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="text-center py-16">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/logo.png"
            alt="Sakura Nursery"
            width={80}
            height={80}
            priority
          />
          <h1 className="text-4xl font-bold text-orange-500">
            Sakura Nursery
          </h1>
        </div>

        <p className="mt-4 text-lg text-gray-600">
          Daily plant drops • White-glove delivery • Home setup service
        </p>

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
      </section>
    </div>
  );
}