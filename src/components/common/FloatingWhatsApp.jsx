"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappMessage =
    "Hello VRM Green Nursery, I would like to know more about your coconut plants.";

  return (
    <a
      href={`https://wa.me/918985532945?text=${encodeURIComponent(
        whatsappMessage,
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VRM Green Nursery on WhatsApp"
      className="fixed bottom-10 right-10 z-50 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 hover:shadow-xl">
        <FaWhatsapp size={29} />
      </span>
    </a>
  );
}
