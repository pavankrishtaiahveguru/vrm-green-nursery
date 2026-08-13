"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function CTA() {
  const whatsappMessage =
    "Hello VRM Green Nursery, I would like to know more about your coconut plants.";

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#173026] px-6 py-10 sm:px-10 lg:px-12"
        >
          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0DA855]/15 blur-3xl" />
          <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#66C4CE]/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66C4CE]">
                VRM Green Nursery 🌴
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Ready to grow your
                <span className="text-[#0DA855]"> coconut farm?</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base">
                Get in touch with us for quality coconut plants, variety
                selection, planting guidance, and farm development support.
              </p>
            </div>

            {/* Actions */}
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`https://wa.me/918985532945?text=${encodeURIComponent(
                  whatsappMessage,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0DA855] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#087F40] hover:shadow-lg"
              >
                WhatsApp Us
                <FiArrowRight size={16} />
              </a>

              <a
                href="tel:8985532945"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#EF8228] hover:bg-[#EF8228]"
              >
                <FiPhone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
