import "./globals.css";
import type { Metadata } from "next";
import { Geist, Press_Start_2P } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Otis Ward | Portfolio",
  description: "CS x Design portfolio by Otis Ward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${pixel.variable}`}>
      <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--ink))]">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-10">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}