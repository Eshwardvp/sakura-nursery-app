import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakura Nursery",
  description: "Daily plant drops, white-glove delivery and home setup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <nav className="border-b bg-white sticky top-0 z-10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sakura Nursery"
                width={72}
                height={72}
                priority
              />
              <span className="text-xl font-bold text-orange-500">
                Sakura Nursery
              </span>
            </a>

            <div className="flex gap-6 text-sm font-medium">
              <a href="/daily-drop" className="hover:text-orange-500">
                Daily Drop
              </a>
              <a href="/admin" className="hover:text-orange-500">
                Admin
              </a>
              <a href="/ops" className="hover:text-orange-500">
                Ops
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}