import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VRM Green Nursery | Quality Coconut Plants",
  description:
    "VRM Green Nursery supplies quality coconut plants, dwarf and hybrid coconut varieties, high-yielding plants, and provides planting and farm development guidance.",
  keywords: [
    "VRM Green Nursery",
    "coconut plants",
    "coconut nursery",
    "hybrid coconut plants",
    "dwarf coconut plants",
    "high yielding coconut plants",
    "coconut nursery Madurai",
    "coconut plants Tamil Nadu",
  ],
  authors: [{ name: "VRM Green Nursery" }],
  openGraph: {
    title: "VRM Green Nursery | Quality Coconut Plants",
    description:
      "Quality coconut plants, dwarf & hybrid varieties, high-yielding plants, and coconut farm development support.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#173026] flex flex-col">
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Navbar />

        <main className="flex-1 pt-20">{children}</main>

        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
