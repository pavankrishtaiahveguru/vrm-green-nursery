"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiDroplet,
  FiInfo,
  FiLayers,
  FiMapPin,
  FiPhone,
  FiSun,
  FiX,
} from "react-icons/fi";

import varieties from "@/data/varieties";
import Link from "next/link";

const getFeatureIcon = (label = "") => {
  const value = label.toLowerCase();

  if (
    value.includes("water") ||
    value.includes("production") ||
    value.includes("yield")
  ) {
    return FiDroplet;
  }

  if (
    value.includes("type") ||
    value.includes("cross") ||
    value.includes("parentage") ||
    value.includes("variety")
  ) {
    return FiLayers;
  }

  if (
    value.includes("climate") ||
    value.includes("bearing") ||
    value.includes("flowering")
  ) {
    return FiSun;
  }

  return FiInfo;
};

export default function Varieties() {
  const [selectedVariety, setSelectedVariety] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openVariety = (variety) => {
    setSelectedVariety(variety);
    setActiveImage(0);
  };

  const closeVariety = () => {
    setSelectedVariety(null);
    setActiveImage(0);
  };

  useEffect(() => {
    if (!selectedVariety) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeVariety();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedVariety]);

  return (
    <>
      <section
        id="varieties"
        className="relative overflow-hidden bg-[#F2FAF5] py-20 sm:py-24 lg:py-28"
      >
        {/* Background Decorations */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#66C4CE]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0DA855]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0DA855]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0DA855] shadow-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#EF8228]" />
              Coconut Varieties
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#173026] sm:text-4xl lg:text-5xl">
              Choose the Right
              <span className="text-[#0DA855]"> Coconut Variety</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#587067] sm:text-lg">
              Explore our quality coconut varieties and learn about their
              characteristics, production potential, suitable uses, and growing
              requirements.
            </p>
          </motion.div>

          {/* Variety Cards */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {varieties.map((variety, index) => {
              const productionFeature = variety.keyFeatures?.find((feature) =>
                /yield|production/i.test(feature.label),
              );

              const waterFeature = variety.keyFeatures?.find((feature) =>
                /water/i.test(feature.label),
              );

              return (
                <motion.article
                  key={variety.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-2xl border border-[#E3ECE7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0DA855]/20 hover:shadow-xl hover:shadow-[#173026]/8"
                >
                  {/* Image */}
                  <div className="relative h-[320px] overflow-hidden sm:h-[340px]">
                    <Image
                      src={variety.images?.[0]}
                      alt={variety.name}
                      fill
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#173026]/60 via-transparent to-transparent" />

                    {/* Category */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0DA855] shadow-sm backdrop-blur-md">
                      {variety.category}
                    </div>

                    {/* Image Count */}
                    {variety.images?.length > 1 && (
                      <div className="absolute right-4 top-4 rounded-full bg-[#173026]/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                        {variety.images.length} Photos
                      </div>
                    )}

                    {/* Production */}
                    {productionFeature && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="rounded-xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#587067]">
                            {productionFeature.label}
                          </p>

                          <p className="mt-1 text-sm font-bold text-[#EF8228]">
                            {productionFeature.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#EF8228]">
                      {variety.subtitle}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#173026]">
                      {variety.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#587067]">
                      {variety.shortDescription}
                    </p>

                    {/* Quick Info */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-[#F2FAF5] p-3">
                        <p className="text-[10px] uppercase tracking-wide text-[#587067]">
                          Category
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#173026]">
                          {variety.category}
                        </p>
                      </div>

                      {waterFeature ? (
                        <div className="rounded-xl bg-[#F1FBFD] p-3">
                          <p className="text-[10px] uppercase tracking-wide text-[#587067]">
                            {waterFeature.label}
                          </p>
                          <p className="mt-1 text-xs font-semibold text-[#1593A0]">
                            {waterFeature.value}
                          </p>
                        </div>
                      ) : (
                        <div className="rounded-xl bg-[#FFF5EB] p-3">
                          <p className="text-[10px] uppercase tracking-wide text-[#587067]">
                            Photos
                          </p>
                          <p className="mt-1 text-xs font-semibold text-[#EF8228]">
                            {variety.images?.length || 0} Images
                          </p>
                        </div>
                      )}
                    </div>

                    {/* View Details */}
                    <button
                      type="button"
                      onClick={() => openVariety(variety)}
                      className="group/button mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#0DA855] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#087F40]"
                    >
                      View Full Details
                      <FiArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#0DA855]/10 bg-white p-5 text-center shadow-sm sm:p-6"
          >
            <p className="text-sm leading-6 text-[#587067]">
              Looking for a particular coconut variety or need help choosing the
              right plant for your farm?
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0DA855] transition-colors hover:text-[#EF8228]"
            >
             
              Contact VRM Green Nursery
              <FiArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Variety Details Modal */}
      <AnimatePresence>
        {selectedVariety && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#173026]/70 p-3 backdrop-blur-sm sm:p-5"
            onClick={closeVariety}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-[2rem]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeVariety}
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#173026] shadow-lg backdrop-blur-md transition-all hover:bg-[#EF8228] hover:text-white"
                aria-label="Close variety details"
              >
                <FiX size={20} />
              </button>

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* Gallery */}
                <div className="bg-[#F2FAF5] p-3 sm:p-5 lg:p-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white sm:aspect-[4/4.5] lg:aspect-[4/5]">
                    <Image
                      src={
                        selectedVariety.images?.[activeImage] ||
                        selectedVariety.images?.[0]
                      }
                      alt={`${selectedVariety.name} image ${activeImage + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#173026]/40 via-transparent to-transparent" />

                    {/* Image Counter */}
                    {selectedVariety.images?.length > 1 && (
                      <div className="absolute bottom-4 right-4 rounded-full bg-[#173026]/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                        {activeImage + 1} / {selectedVariety.images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {selectedVariety.images?.length > 1 && (
                    <div className="mt-3 grid grid-cols-4 gap-2 sm:mt-4 sm:gap-3">
                      {selectedVariety.images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveImage(index)}
                          className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                            activeImage === index
                              ? "border-[#0DA855] ring-2 ring-[#0DA855]/15"
                              : "border-transparent opacity-70 hover:border-[#66C4CE] hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${selectedVariety.name} thumbnail ${
                              index + 1
                            }`}
                            fill
                            sizes="120px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Gallery Location */}
                  <div className="mt-4 hidden items-center gap-2 rounded-xl bg-white p-3 text-xs text-[#587067] lg:flex">
                    <FiMapPin size={15} className="shrink-0 text-[#0DA855]" />
                    <span>
                      Visit our Demo Farm to see coconut varieties directly.
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-5 sm:p-7 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EF8228]">
                    {selectedVariety.category}
                  </p>

                  <h2 className="mt-2 pr-10 text-3xl font-bold text-[#173026] sm:text-4xl">
                    {selectedVariety.name}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-[#0DA855]">
                    {selectedVariety.subtitle}
                  </p>

                  {/* Description */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold text-[#173026]">
                      About the Variety
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#587067]">
                      {selectedVariety.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {selectedVariety.keyFeatures?.length > 0 && (
                    <div className="mt-7">
                      <h3 className="text-lg font-bold text-[#173026]">
                        Key Features
                      </h3>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {selectedVariety.keyFeatures.map((feature) => {
                          const Icon = getFeatureIcon(feature.label);

                          return (
                            <div
                              key={`${selectedVariety.id}-${feature.label}`}
                              className="rounded-xl border border-[#E3ECE7] bg-[#F8FCF9] p-4"
                            >
                              <div className="flex items-start gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/10 text-[#0DA855]">
                                  <Icon size={17} />
                                </span>

                                <div className="min-w-0">
                                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#587067]">
                                    {feature.label}
                                  </p>

                                  <p className="mt-1 text-sm font-semibold leading-5 text-[#173026]">
                                    {feature.value}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Recommended Management */}
                  {selectedVariety.recommendedManagement?.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-[#173026]">
                        Recommended Management
                      </h3>

                      <div className="mt-4 rounded-2xl border border-[#E3ECE7] bg-[#F8FCF9] p-4 sm:p-5">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {selectedVariety.recommendedManagement.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/10 text-[#0DA855]">
                                <FiCheck size={13} strokeWidth={3} />
                              </span>

                              <p className="text-sm leading-6 text-[#587067]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Why Choose */}
                  {selectedVariety.whyChoose && (
                    <div className="mt-8 rounded-2xl bg-[#F1FBFD] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1593A0]">
                        Why Choose {selectedVariety.name}?
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#587067]">
                        {selectedVariety.whyChoose}
                      </p>
                    </div>
                  )}

                  {/* Yield / Performance Note */}
                  {selectedVariety.note && (
                    <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#EF8228]/15 bg-[#FFF5EB] p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EF8228]/10 text-[#EF8228]">
                        <FiInfo size={17} />
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-[#173026]">
                          Important Note
                        </p>

                        <p className="mt-1 text-xs leading-6 text-[#587067]">
                          {selectedVariety.note}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/918985532945?text=${encodeURIComponent(
                        `Hello VRM Green Nursery, I am interested in ${selectedVariety.name}. Please share more details.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0DA855] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#087F40]"
                    >
                      Enquire on WhatsApp
                      <FiArrowRight size={16} />
                    </a>

                    <a
                      href="tel:8985532945"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E3ECE7] px-5 py-3.5 text-sm font-semibold text-[#173026] transition-all duration-300 hover:border-[#EF8228] hover:text-[#EF8228]"
                    >
                      <FiPhone size={16} />
                      Call Now
                    </a>
                  </div>

                  {/* Demo Farm */}
                  <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#F2FAF5] p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#66C4CE]/15 text-[#1593A0]">
                      <FiMapPin size={17} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-[#173026]">
                        See the varieties in person
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#587067]">
                        Visit our Demo Farm at Chinnamanur, Theni District,
                        Tamil Nadu – 625515. Please contact us before visiting
                        for the exact location and directions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
