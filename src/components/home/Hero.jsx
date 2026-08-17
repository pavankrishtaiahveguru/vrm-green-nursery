"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const whatsappMessage =
    "Hello VRM Green Nursery, I would like to know more about your coconut plants and varieties.";

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#F2FAF5]"
    >
      {/* Background Decorations */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#66C4CE]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0DA855]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl text-center"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0DA855]/20 bg-white px-4 py-2 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#0DA855]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0DA855] sm:text-sm">
              VRM Green Nursery
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-[#173026] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Quality Coconut
            <span className="block text-[#0DA855]">Plants for Better</span>
            <span className="relative inline-block">
              Farming
              <span className="absolute -bottom-1 left-0 h-1 w-2/3 rounded-full bg-[#EF8228]" />
            </span>
            <span className="ml-2">🌴</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#587067] sm:text-lg"
          >
            Quality coconut plants, dwarf and hybrid varieties, and
            high-yielding plants for farmers, home gardens, and commercial
            coconut plantations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#varieties"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0DA855] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0DA855]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087F40] hover:shadow-xl"
            >
             🌴 Explore Varieties
              <FaArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={`https://wa.me/918985532945?text=${encodeURIComponent(
                whatsappMessage,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0DA855]/25 bg-white px-6 py-3.5 text-sm font-semibold text-[#173026] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0DA855] hover:text-[#0DA855] hover:shadow-md"
            >
              <FaWhatsapp size={20} className="text-[#0DA855]" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mx-auto mt-12 grid max-w-2xl grid-cols-3 border-t border-[#DCEAE1] pt-6"
          >
            <div className="px-3">
              <p className="text-lg font-bold text-[#0DA855] sm:text-xl">
                Dwarf
              </p>

              <p className="mt-1 text-xs leading-5 text-[#587067]">
                Coconut Varieties
              </p>
            </div>

            <div className="border-l border-[#DCEAE1] px-3">
              <p className="text-lg font-bold text-[#0DA855] sm:text-xl">
                Hybrid
              </p>

              <p className="mt-1 text-xs leading-5 text-[#587067]">
                Coconut Plants
              </p>
            </div>

            <div className="border-l border-[#DCEAE1] px-3">
              <p className="text-lg font-bold text-[#EF8228] sm:text-xl">
                High Yield
              </p>

              <p className="mt-1 text-xs leading-5 text-[#587067]">
                Plant Selection
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
