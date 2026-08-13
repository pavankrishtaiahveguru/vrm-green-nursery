"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Coconut Varieties", href: "/#varieties" },
  { name: "Services", href: "/#services" },
  { name: "Demo Farm", href: "/#demo-farm" },
  { name: "Farming Guide", href: "/farming-guide" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#E3ECE7]/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-25 sm:h-30 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="VRM Green Nursery Home"
        >
          <Image
            src="/images/logo/vrm-green-nursery.png"
            alt="VRM Green Nursery"
            width={170}
            height={70}
            priority
            className="h-auto w-[135px] object-contain sm:w-[165px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link, index) => {
            const isContact = link.name === "Contact";

            return (
              <Link
                key={link.name}
                href={link.href}
                className={
                  isContact
                    ? "inline-flex items-center rounded-full bg-[#0DA855] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#087F40] hover:shadow-md"
                    : `relative text-sm font-medium transition-colors duration-300 ${
                        index === 0
                          ? "text-[#0DA855]"
                          : "text-[#173026] hover:text-[#0DA855]"
                      }`
                }
              >
                {link.name}

                {!isContact && index === 0 && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#EF8228]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E3ECE7] text-[#173026] transition-colors hover:border-[#0DA855] hover:text-[#0DA855] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#E3ECE7] bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isContact = link.name === "Contact";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={
                    isContact
                      ? "mt-3 inline-flex items-center justify-center rounded-full bg-[#0DA855] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#087F40]"
                      : "border-b border-[#E3ECE7] py-3.5 text-sm font-medium text-[#173026] transition-colors hover:text-[#0DA855]"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
