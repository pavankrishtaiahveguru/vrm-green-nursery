"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiLayers,
  FiPackage,
  FiSearch,
  FiSettings,
  FiTruck,
  FiTrendingUp,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Quality Coconut Plant Supply",
    description:
      "We supply quality coconut plants suitable for farmers, home gardens, and commercial coconut plantations.",
    icon: FiPackage,
  },
  {
    number: "02",
    title: "Dwarf & Hybrid Coconut Plants",
    description:
      "Explore dwarf and hybrid coconut varieties selected for different farming requirements and growing conditions.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "High-Yielding Varieties",
    description:
      "Choose from coconut varieties with good production potential when supported by suitable irrigation, nutrition, and farm management.",
    icon: FiTrendingUp,
  },
  {
    number: "04",
    title: "Bulk Plant Supply",
    description:
      "Plant supply support for farmers and commercial coconut plantation requirements.",
    icon: FiTruck,
  },
  {
    number: "05",
    title: "Plant Selection Guidance",
    description:
      "Get helpful guidance when selecting a coconut variety according to your farming requirements.",
    icon: FiSearch,
  },
  {
    number: "06",
    title: "Planting & Care Guidance",
    description:
      "Practical guidance on planting, spacing, pit preparation, irrigation, and plant care.",
    icon: FiBookOpen,
  },
  {
    number: "07",
    title: "Coconut Farm Development Support",
    description:
      "Support and guidance for farmers planning and developing their coconut plantation.",
    icon: FiSettings,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F2FAF5] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#66C4CE]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0DA855]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0DA855]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0DA855] shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#EF8228]" />
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#173026] sm:text-4xl lg:text-5xl">
            More Than Plants.
            <span className="block text-[#0DA855]">
              Guidance for Better Farming.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#587067] sm:text-lg">
            From selecting the right coconut variety to planting and farm
            development, VRM Green Nursery provides practical support for your
            coconut farming journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="group relative flex min-h-[270px] w-full flex-col overflow-hidden rounded-2xl border border-[#E3ECE7] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0DA855]/20 hover:shadow-xl hover:shadow-[#173026]/8 sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
              >
                <div className="absolute right-5 top-4 text-4xl font-bold text-[#0DA855]/5 group-hover:text-[#0DA855]/10">
                  {service.number}
                </div>

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2FAF5] text-[#0DA855] transition-all duration-300 group-hover:bg-[#0DA855] group-hover:text-white">
                  <Icon size={21} />
                </div>

                <div className="relative mt-5 flex flex-1 flex-col">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#EF8228]">
                    Service {service.number}
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-6 text-[#173026]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#587067]">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="h-1 w-10 rounded-full bg-[#66C4CE] transition-all duration-300 group-hover:w-16 group-hover:bg-[#EF8228]" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 overflow-hidden rounded-[2rem] bg-[#173026] p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#66C4CE]">
                <FiCheckCircle size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Need Help Choosing?
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Find the right coconut variety for your farm.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
                Talk to VRM Green Nursery about your plant selection, planting
                requirements, and coconut farm development needs.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/918985532945?text=${encodeURIComponent(
                  "Hello VRM Green Nursery, I would like to know more about your coconut plants and services.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0DA855] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#087F40]"
              >
                WhatsApp Us
                <FiArrowRight size={16} />
              </a>

              <a
                href="tel:8985532945"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#EF8228] hover:bg-[#EF8228]"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
