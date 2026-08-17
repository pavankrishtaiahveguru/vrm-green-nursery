import { Suspense } from "react";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

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
    <html lang="en" className="h-full antialiased">
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
