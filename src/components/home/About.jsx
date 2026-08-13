"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiMapPin, FiPhone } from "react-icons/fi";

const highlights = [
  "Quality coconut plant supply",
  "Dwarf & hybrid coconut varieties",
  "High-yielding plant varieties",
  "Plant selection and care guidance",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#66C4CE]/8 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#0DA855]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0DA855]/15 bg-[#F2FAF5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0DA855]">
            <span className="h-2 w-2 rounded-full bg-[#EF8228]" />
            About VRM Green Nursery
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#173026] sm:text-4xl lg:text-5xl">
            Growing Quality,
            <span className="text-[#0DA855]"> Supporting Farmers</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#587067] sm:text-lg">
            Quality coconut plants backed by practical guidance for better
            planting and long-term farm development.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-[#F2FAF5] shadow-xl shadow-[#173026]/8">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/about/coconut-farm.jpg"
                  alt="Coconut farm and plants"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#173026]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute -bottom-6 -right-3 w-[85%] max-w-sm rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-6 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#66C4CE]/15 text-[#1593A0]">
                  <FiMapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0DA855]">
                    Nursery Location
                  </p>
                  <p className="mt-1 text-sm font-medium leading-5 text-[#173026]">
                    Madurai, Thirumangalam Road
                  </p>
                  <p className="text-xs text-[#587067]">625008</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EF8228]">
              About Our Nursery
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-[#173026] sm:text-4xl">
              Quality coconut plants for{" "}
              <span className="text-[#0DA855]">every farming need.</span>
            </h3>

            <p className="mt-6 text-base leading-8 text-[#587067]">
              VRM Green Nursery is a trusted nursery specializing in the supply
              of quality coconut plants. We provide different varieties suitable
              for farmers, home gardens, and commercial coconut plantations.
            </p>

            <p className="mt-4 text-base leading-8 text-[#587067]">
              Our aim is to supply healthy, good-quality plants along with
              helpful guidance on plant selection, planting, and care.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[#E3ECE7] bg-[#F8FCF9] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0DA855]/25 hover:shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/10 text-[#0DA855]">
                    <FiCheck size={14} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-medium leading-5 text-[#173026]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:8985532945"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0DA855] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#0DA855]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087F40]"
              >
                <FiPhone size={16} />
                Talk to Us
              </a>

              <a
                href="#varieties"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#E3ECE7] bg-white px-5 py-3 text-sm font-semibold text-[#173026] transition-all duration-300 hover:border-[#EF8228] hover:text-[#EF8228]"
              >
                Explore Varieties
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
