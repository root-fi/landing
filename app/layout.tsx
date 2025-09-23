import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

const mont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "root.fi - next-generation yield platform",
  description:
    "root.fi is a modern DeFi protocol focused on building advanced financial tools for all user segments — from beginners to institutional investors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.variable} antialiased bg-main-bg`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
