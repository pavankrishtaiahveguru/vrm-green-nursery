"use client";

import Link from "next/link";
import { FiArrowLeft, FiHome, FiPhone } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#F7FBF8] px-4 py-20">
      <div className="relative w-full max-w-2xl text-center">
        {/* Decorative Elements */}
        <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#66C4CE]/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#0DA855]/10 blur-3xl" />

        <div className="relative z-10">
          {/* 404 */}
          <p className="text-[100px] font-black leading-none tracking-tight text-[#0DA855]/10 sm:text-[140px]">
            404
          </p>

          {/* Icon */}
          <div className="mx-auto -mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#173026] text-[#66C4CE] shadow-lg sm:-mt-14">
            <span className="text-2xl">🌴</span>
          </div>

          {/* Content */}
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#EF8228]">
            Page Not Found
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#173026] sm:text-4xl">
            Looks like you took a wrong turn.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#587067] sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back to VRM Green Nursery.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0DA855] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#087F40] hover:shadow-lg"
            >
              <FiHome size={16} />
              Back to Home
            </Link>

            <a
              href="tel:8985532945"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCE8E0] bg-white px-6 py-3.5 text-sm font-semibold text-[#173026] transition-all duration-300 hover:border-[#EF8228] hover:bg-[#FFF7EF]"
            >
              <FiPhone size={16} />
              Contact Us
            </a>
          </div>

          {/* Bottom Message */}
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[#8A9992]">
            <FiArrowLeft size={14} />
            <span>Quality Coconut Plants • Better Farming 🌴</span>
          </div>
        </div>
      </div>
    </main>
  );
}
