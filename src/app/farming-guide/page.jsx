"use client";

import CTA from "@/components/common/CTA";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiDroplet,
  FiGrid,
  FiInfo,
  FiLayers,
  FiSun,
} from "react-icons/fi";

const spacingData = [
  {
    spacing: "20 × 20",
    plants: "108",
  },
  {
    spacing: "22 × 22",
    plants: "90",
  },
  {
    spacing: "23 × 23",
    plants: "82",
  },
  {
    spacing: "25 × 25",
    plants: "69",
  },
];

const plantingSteps = [
  {
    number: "01",
    title: "Dig the Pit",
    description:
      "Dig a pit of 2 ft × 2 ft × 2 ft and keep the excavated soil aside.",
    icon: FiGrid,
  },
  {
    number: "02",
    title: "Add Topsoil",
    description:
      "Add approximately 1 foot of good-quality topsoil to the bottom of the pit.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Prepare the Soil",
    description:
      "Mix 250 g Neem Powder and 250 g Single Super Phosphate (SSP) thoroughly with the soil.",
    icon: FiSun,
  },
  {
    number: "04",
    title: "Apply Termite Control",
    description:
      "Apply 100 g of the recommended termite-control product according to its product instructions.",
    icon: FiCheck,
  },
  {
    number: "05",
    title: "Place the Plant",
    description:
      "Place the coconut plant carefully in the centre of the prepared pit.",
    icon: FiLayers,
  },
  {
    number: "06",
    title: "Fill & Water",
    description:
      "Fill the remaining space with good soil, gently press around the plant and immediately provide sufficient water.",
    icon: FiDroplet,
  },
];

const recommendedMaterials = [
  {
    name: "Neem Powder",
    quantity: "250 g",
  },
  {
    name: "Single Super Phosphate (SSP)",
    quantity: "250 g",
  },
  {
    name: "Termite-Control Product",
    quantity: "100 g",
  },
];

export default function FarmingGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#66C4CE]/8 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0DA855]/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0DA855]/15 bg-[#F2FAF5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0DA855] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#EF8228]" />
              Coconut Farming Guide
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#173026] sm:text-4xl lg:text-5xl">
              Plan Better.
              <span className="text-[#0DA855]"> Plant Better.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#587067] sm:text-lg">
              Practical guidance on coconut plant spacing, pit preparation and
              planting methods for a well-managed coconut plantation.
            </p>
          </motion.div>

          {/* Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-14 overflow-hidden rounded-[2rem] border border-[#E3ECE7] bg-[#F2FAF5] p-5 sm:p-7 lg:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EF8228]">
                  Planting Density
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#173026] sm:text-3xl">
                  Coconut Plant Spacing
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#587067]">
                  Choose the right spacing according to the coconut variety,
                  soil condition, irrigation facility and farming system.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0DA855] shadow-sm">
                <FiGrid size={21} />
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {spacingData.map((item, index) => (
                <motion.div
                  key={item.spacing}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-[#E3ECE7] bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0DA855]/20 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#587067]">
                    Spacing
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#173026]">
                    {item.spacing}
                    <span className="ml-1 text-sm font-medium text-[#587067]">
                      ft
                    </span>
                  </p>

                  <div className="mx-auto my-4 h-px w-12 bg-[#E3ECE7]" />

                  <p className="text-3xl font-bold text-[#0DA855]">
                    {item.plants}
                  </p>

                  <p className="mt-1 text-xs text-[#587067]">plants / acre</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { icon: FiSun, text: "Better sunlight" },
                { icon: FiDroplet, text: "Better farm management" },
                { icon: FiLayers, text: "Better air circulation" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-[#587067] shadow-sm"
                  >
                    <Icon size={14} className="text-[#0DA855]" />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Pit Preparation */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EF8228]">
                Pit Preparation
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-[#173026] sm:text-4xl">
                Prepare the Pit
                <span className="text-[#0DA855]"> the Right Way</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#587067] sm:text-base">
                Proper pit preparation creates a suitable starting environment
                for the coconut plant and helps establish the root zone after
                planting.
              </p>

              {/* Pit Size */}
              <div className="mt-7 rounded-2xl border border-[#E3ECE7] bg-[#F8FCF9] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/10 text-[#0DA855]">
                    <FiGrid size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#587067]">
                      Recommended Pit Size
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#173026]">
                      2 × 2 × 2{" "}
                      <span className="text-base font-medium text-[#587067]">
                        feet
                      </span>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#587067]">
                  Keep the excavated soil aside after digging the pit.
                </p>
              </div>

              {/* Topsoil */}
              <div className="mt-3 rounded-2xl border border-[#E3ECE7] bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#66C4CE]/15 text-[#1593A0]">
                    <FiLayers size={17} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#173026]">
                      Add Good-Quality Topsoil
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#587067]">
                      Add approximately{" "}
                      <strong className="font-semibold text-[#173026]">
                        1 foot
                      </strong>{" "}
                      of good-quality topsoil to the bottom of the pit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-[2rem] border border-[#E3ECE7] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EF8228]">
                      Recommended Materials
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#173026]">
                      What to Add
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF5EB] text-[#EF8228]">
                    <FiLayers size={19} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {recommendedMaterials.map((material, index) => (
                    <motion.div
                      key={material.name}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      className="flex items-center justify-between gap-4 rounded-xl border border-[#E3ECE7] bg-[#F8FCF9] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/10 text-xs font-bold text-[#0DA855]">
                          {index + 1}
                        </span>

                        <p className="text-sm font-medium text-[#173026]">
                          {material.name}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#EF8228] shadow-sm">
                        {material.quantity}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#EF8228]/15 bg-[#FFF5EB] p-4">
                  <FiInfo
                    className="mt-0.5 shrink-0 text-[#EF8228]"
                    size={17}
                  />

                  <p className="text-xs leading-5 text-[#587067]">
                    For termite-control products, use the appropriate product
                    according to its label and recommended application
                    instructions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Planting Procedure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16"
          >
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EF8228]">
                Planting Procedure
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#173026] sm:text-4xl">
                From Pit to
                <span className="text-[#0DA855]"> Planting</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {plantingSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.07,
                    }}
                    className="rounded-2xl border border-[#E3ECE7] bg-[#F8FCF9] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0DA855] text-white shadow-md shadow-[#0DA855]/15">
                        <Icon size={18} />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#EF8228]">
                          Step {step.number}
                        </span>

                        <h3 className="mt-1 text-base font-bold text-[#173026]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#587067]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Final Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 overflow-hidden rounded-2xl bg-[#173026] p-6 sm:p-7"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0DA855] text-white">
                  <FiDroplet size={21} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Water Immediately After Planting
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-white/65">
                    Give sufficient water immediately after planting to help
                    settle the soil around the root zone.
                  </p>
                </div>
              </div>

              <a
                href="tel:8985532945"
                className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[#EF8228] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D96F19]"
              >
                Need Guidance?
                <FiArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
