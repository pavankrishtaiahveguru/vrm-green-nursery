"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiPhone, FiNavigation } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function DemoFarm() {
  return (
    <section id="demo-farm" className="bg-[#F2FAF5] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0DA855]">
            <span className="h-2 w-2 rounded-full bg-[#EF8228]" />
            Demo Farm
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#173026] sm:text-4xl">
            Visit Our Demo Farm
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#587067] sm:text-base">
            Visit our Demo Farm to see our coconut plants and varieties
            directly.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#DCEAE1] bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Address */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0DA855]/10 text-[#0DA855]">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#EF8228]">
                    Demo Farm Location
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-[#173026]">
                    Chinnamanur
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#587067]">
                Chinnamanur, Theni District,
                <br />
                Tamil Nadu – 625515
              </p>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#FFF7EF] p-4">
                <FiNavigation
                  size={17}
                  className="mt-0.5 shrink-0 text-[#EF8228]"
                />

                <p className="text-xs leading-5 text-[#587067]">
                  Please contact us before visiting for the exact location and
                  directions.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-[#173026] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#66C4CE]">
                Plan Your Visit
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                See the plants in person.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Talk to us before coming to the Demo Farm and get the exact
                location and directions.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <a
                  href="tel:8985532945"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EF8228] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D96F19]"
                >
                  <FiPhone size={16} />
                  Call Us
                </a>

                <a
                  href={`https://wa.me/918985532945?text=${encodeURIComponent(
                    `🌴 Hello VRM Green Nursery,

I am interested in visiting your Demo Farm to see the coconut plants and varieties.

📍 Demo Farm:
Chinnamanur, Theni District,
Tamil Nadu – 625515

Please share the exact location and directions for the Demo Farm.

Thank you.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0DA855]"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                  <FiArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
