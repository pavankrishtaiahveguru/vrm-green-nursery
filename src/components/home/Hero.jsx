"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#F2FAF5]"
    >
      {/* Decorative Elements */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#66C4CE]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0DA855]/10 blur-3xl" />

      {/* <div className="absolute right-[42%] top-20 hidden h-3 w-3 rounded-full bg-[#EF8228] lg:block" />
      <div className="absolute bottom-24 left-[46%] hidden h-2 w-2 rounded-full bg-[#66C4CE] lg:block" /> */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
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
            className="text-4xl font-bold leading-[1.08] tracking-tight text-[#173026] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
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
            className="mt-6 max-w-xl text-base leading-7 text-[#587067] sm:text-lg"
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
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#varieties"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0DA855] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0DA855]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087F40] hover:shadow-xl"
            >
              Explore Varieties
              <FaArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://wa.me/918985532945"
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
            className="mt-10 grid max-w-lg grid-cols-3 border-t border-[#DCEAE1] pt-6"
          >
            <div className="pr-4">
              <p className="text-xl font-bold text-[#0DA855]">Dwarf</p>
              <p className="mt-1 text-xs leading-5 text-[#587067]">
                Coconut Varieties
              </p>
            </div>

            <div className="border-l border-[#DCEAE1] px-4">
              <p className="text-xl font-bold text-[#0DA855]">Hybrid</p>
              <p className="mt-1 text-xs leading-5 text-[#587067]">
                Coconut Plants
              </p>
            </div>

            <div className="border-l border-[#DCEAE1] pl-4">
              <p className="text-xl font-bold text-[#EF8228]">High Yield</p>
              <p className="mt-1 text-xs leading-5 text-[#587067]">
                Plant Selection
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          {/* Image Background */}
          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-[#173026]/10">
            <div className="relative aspect-[4/4.5] overflow-hidden sm:aspect-[4/4] lg:aspect-[4/4.5]">
              <Image
                src="/images/hero/coconut-farm.jpg"
                alt="Coconut plants at VRM Green Nursery"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173026]/45 via-transparent to-transparent" />

              {/* Image Badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0DA855]">
                        Our Specialty
                      </p>
                      <p className="mt-1 text-base font-bold text-[#173026] sm:text-lg">
                        Quality Coconut Plants
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/10 text-xl">
                      🌴
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Experience Card */}
          {/* <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block lg:-left-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#66C4CE]/15 text-xl">
                🌱
              </div>
              <div>
                <p className="text-sm font-bold text-[#173026]">
                  Farmer Support
                </p>
                <p className="text-xs text-[#587067]">
                  Selection & Care Guidance
                </p>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
