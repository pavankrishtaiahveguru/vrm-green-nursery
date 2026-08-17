"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiYoutube,
} from "react-icons/fi";
import CTA from "@/components/common/CTA";
import { FaWhatsapp } from "react-icons/fa";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  variety: "",
  quantity: "",
  message: "",
};

const varieties = [
  "Chandra Shankara",
  "D × T Coconut",
  "Ganga Coconut",
  "Malaysian Green Dwarf (MGD)",
  "COD – Chowghat Orange Dwarf",
  "Kalpasree",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!form.variety) {
      setError("Please select a coconut variety.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const whatsappMessage = `
🌴 *VRM GREEN NURSERY – NEW ENQUIRY*

*Customer Details*
Name: ${form.name.trim()}
Phone: ${form.phone.trim()}
${form.email.trim() ? `Email: ${form.email.trim()}` : ""}

*Plant Requirement*
Coconut Variety: ${form.variety}
${form.quantity.trim() ? `Quantity: ${form.quantity.trim()}` : ""}

*Message*
${form.message.trim() || "No additional message."}

━━━━━━━━━━━━━━━━
Thank you for contacting VRM Green Nursery! 🌴
We will get back to you shortly.

    `.trim();

    const whatsappUrl = `https://wa.me/918985532945?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setForm(initialForm);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#F7FBF8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173026] pt-22 pb-20 sm:pt-22 sm:pb-24">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#0DA855]/15 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#66C4CE]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-[#66C4CE]"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#66C4CE]">
              <span className="h-px w-8 bg-[#66C4CE]" />
              Get In Touch
              <span className="h-px w-8 bg-[#66C4CE]" />
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact
              <span className="text-[#0DA855]"> VRM Green Nursery</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Have a question about our coconut plants or want to know more
              about a particular variety? Send us your requirements through
              WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
            {/* LEFT – Information */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:vrmgreennursery@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-[#E1EAE4] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0DA855]/30 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0DA855]/15 bg-[#F2FAF5] text-[#0DA855] transition-colors group-hover:bg-[#0DA855] group-hover:text-white">
                  <FiMail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#7B8D84]">Email</p>

                  <p className="mt-1 break-all text-sm font-semibold text-[#173026]">
                    vrmgreennursery@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:8985532945"
                className="group flex items-center gap-4 rounded-2xl border border-[#E1EAE4] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0DA855]/30 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0DA855]/15 bg-[#F2FAF5] text-[#0DA855] transition-colors group-hover:bg-[#0DA855] group-hover:text-white">
                  <FiPhone size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#7B8D84]">Phone</p>

                  <p className="mt-1 text-sm font-semibold text-[#173026]">
                    +91 89855 32945
                  </p>
                </div>
              </a>

              {/* Nursery Address */}
              <div className="rounded-2xl border border-[#E1EAE4] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0DA855]/15 bg-[#F2FAF5] text-[#0DA855]">
                    <FiMapPin size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#7B8D84]">
                      Nursery Address
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#173026]">
                      Tirumangalam Road, Kappalur
                      <br />
                      Madurai – 625008, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo Farm */}
              <div className="rounded-2xl border border-[#E1EAE4] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#66C4CE]/20 bg-[#EFFBFC] text-[#1593A0]">
                    <FiMapPin size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#7B8D84]">
                      Visit Our Demo Farm
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#173026]">
                      Chinnamanur,
                      <br />
                      Theni District,
                      <br />
                      Tamil Nadu – 625515
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#7B8D84]">
                      Contact us before visiting for the exact location and
                      directions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="rounded-2xl border border-[#E1EAE4] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#EF8228]/20 bg-[#FFF6EE] text-[#EF8228]">
                    <FiClock size={19} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#7B8D84]">
                      Business Hours
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold text-[#173026]">
                        Monday – Sunday
                      </p>

                      <p className="text-sm font-semibold text-[#0DA855]">
                        7:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl border border-[#E1EAE4] bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-[#7B8D84]">
                  Follow VRM Green Nursery
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://facebook.com/VRMGREENNURSERY"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2FAF5] text-[#0DA855] transition-all hover:bg-[#0DA855] hover:text-white"
                  >
                    <FiFacebook size={17} />
                  </a>

                  <a
                    href="https://instagram.com/vrmgreen"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2FAF5] text-[#0DA855] transition-all hover:bg-[#EF8228] hover:text-white"
                  >
                    <FiInstagram size={17} />
                  </a>

                  <a
                    href="https://youtube.com/@vrmgreennursery-ne2bu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2FAF5] text-[#0DA855] transition-all hover:bg-[#EF8228] hover:text-white"
                  >
                    <FiYoutube size={17} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT – Contact Form */}
            <div className="rounded-2xl border border-[#E1EAE4] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F2FAF5] text-[#0DA855]">
                  <FiMessageCircle size={20} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#173026] sm:text-2xl">
                    Send an Enquiry
                  </h2>

                  <p className="mt-1 text-xs text-[#7B8D84] sm:text-sm">
                    Tell us how we can help you.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-[#173026]"
                  >
                    Name <span className="text-[#EF8228]">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12 w-full rounded-xl border border-[#DDE7E1] bg-[#FAFCFB] px-4 text-sm text-[#173026] outline-none transition-all placeholder:text-[#A0ADA7] focus:border-[#0DA855] focus:bg-white focus:ring-4 focus:ring-[#0DA855]/8"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold text-[#173026]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="h-12 w-full rounded-xl border border-[#DDE7E1] bg-[#FAFCFB] px-4 text-sm text-[#173026] outline-none transition-all placeholder:text-[#A0ADA7] focus:border-[#0DA855] focus:bg-white focus:ring-4 focus:ring-[#0DA855]/8"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold text-[#173026]"
                    >
                      Phone <span className="text-[#EF8228]">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="h-12 w-full rounded-xl border border-[#DDE7E1] bg-[#FAFCFB] px-4 text-sm text-[#173026] outline-none transition-all placeholder:text-[#A0ADA7] focus:border-[#0DA855] focus:bg-white focus:ring-4 focus:ring-[#0DA855]/8"
                    />
                  </div>
                </div>

                {/* Variety */}
                <div>
                  <label
                    htmlFor="variety"
                    className="mb-2 block text-xs font-semibold text-[#173026]"
                  >
                    Coconut Variety <span className="text-[#EF8228]">*</span>
                  </label>

                  <select
                    id="variety"
                    name="variety"
                    value={form.variety}
                    onChange={handleChange}
                    className="h-12 w-full appearance-none rounded-xl border border-[#DDE7E1] bg-[#FAFCFB] px-4 text-sm text-[#173026] outline-none transition-all focus:border-[#0DA855] focus:bg-white focus:ring-4 focus:ring-[#0DA855]/8"
                  >
                    <option value="">Select a variety</option>

                    {varieties.map((variety) => (
                      <option key={variety} value={variety}>
                        {variety}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label
                    htmlFor="quantity"
                    className="mb-2 block text-xs font-semibold text-[#173026]"
                  >
                    Required Quantity
                  </label>

                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="Example: 100 plants"
                    className="h-12 w-full rounded-xl border border-[#DDE7E1] bg-[#FAFCFB] px-4 text-sm text-[#173026] outline-none transition-all placeholder:text-[#A0ADA7] focus:border-[#0DA855] focus:bg-white focus:ring-4 focus:ring-[#0DA855]/8"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-[#173026]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-[#DDE7E1] bg-[#FAFCFB] px-4 py-3 text-sm text-[#173026] outline-none transition-all placeholder:text-[#A0ADA7] focus:border-[#0DA855] focus:bg-white focus:ring-4 focus:ring-[#0DA855]/8"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#0DA855] px-5 text-sm font-semibold text-white shadow-lg shadow-[#0DA855]/15 transition-all duration-300 hover:bg-[#087F40] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp size={20} />
                      Send Enquiry on WhatsApp
                      <FiSend size={16} />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] leading-5 text-[#8A9992]">
                  Your enquiry will open directly in WhatsApp with VRM Green
                  Nursery.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 overflow-hidden rounded-2xl bg-[#173026] p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#66C4CE]">
                  Demo Farm Visit
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Want to see our coconut varieties directly?
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Visit our Demo Farm at Chinnamanur, Theni District.
                </p>
              </div>

              <a
                href="tel:8985532945"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#EF8228] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D96F19]"
              >
                <FiPhone size={16} />
                Call for Directions
                <FiArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
