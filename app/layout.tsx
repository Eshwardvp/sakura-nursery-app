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
            <a href="/" className="text-xl font-bold text-green-700">
              🌸 Sakura Nursery
            </a>
            <div className="flex gap-6 text-sm font-medium">
              <a href="/daily-drop" className="hover:text-green-700">
                Daily Drop
              </a>
              <a href="/admin" className="hover:text-green-700">
                Admin
              </a>
              <a href="/ops" className="hover:text-green-700">
                Ops
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t mt-16 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-400">
            © {new Date().getFullYear()} Sakura Nursery · Hyderabad
          </div>
        </footer>
      </body>
    </html>
  );
}