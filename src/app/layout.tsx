import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RYZTECH Digital Agency | Dijital Dünyada Fark Yaratıyoruz",
  description:
    "Performans pazarlamadan yaratıcı prodüksiyona — ölçülebilir sonuçlar, kalıcı marka izleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="relative flex flex-1 flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
