"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const NAVBAR_OFFSET = 120;
const homeSectionIds = ["home", "about", "varieties", "services", "demo-farm"];

const navLinks = [
  { name: "Home", href: "/#home", sectionId: "home" },
  { name: "About Us", href: "/#about", sectionId: "about" },
  { name: "Coconut Varieties", href: "/#varieties", sectionId: "varieties" },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "Demo Farm", href: "/#demo-farm", sectionId: "demo-farm" },
  { name: "Farming Guide", href: "/farming-guide" },
  { name: "Contact", href: "/contact" },
];

const getActiveHomeSection = () => {
  if (typeof window === "undefined") return "home";

  const hashSection = window.location.hash.replace("#", "").trim();
  if (hashSection && homeSectionIds.includes(hashSection)) {
    return hashSection;
  }

  if (window.scrollY <= 12) {
    return "home";
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0 && window.scrollY >= maxScroll - 24) {
    return homeSectionIds[homeSectionIds.length - 1];
  }

  let activeId = "home";
  let bestDistance = Number.POSITIVE_INFINITY;

  homeSectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const { top } = section.getBoundingClientRect();

    if (top <= NAVBAR_OFFSET + 18) {
      const distance = Math.abs(top - NAVBAR_OFFSET);
      if (distance < bestDistance) {
        activeId = sectionId;
        bestDistance = distance;
      }
    }
  });

  return activeId;
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/contact") {
        setActiveSection((current) =>
          current === "contact" ? current : "contact",
        );
      } else if (pathname === "/farming-guide") {
        setActiveSection((current) =>
          current === "farming-guide" ? current : "farming-guide",
        );
      } else {
        setActiveSection((current) => (current === "home" ? current : "home"));
      }
      return;
    }

    const updateActiveSection = () => {
      const nextSection = getActiveHomeSection();
      setActiveSection((current) =>
        current === nextSection ? current : nextSection,
      );
    };

    updateActiveSection();

    const handleScroll = () => updateActiveSection();
    const handleHashChange = () => updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  const isLinkActive = (link) => {
    if (link.name === "Contact") return pathname === "/contact";
    if (link.name === "Farming Guide") return pathname === "/farming-guide";
    if (pathname !== "/") return false;
    return link.sectionId ? activeSection === link.sectionId : false;
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#E3ECE7]/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-25 sm:h-30 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const isContact = link.name === "Contact";
            const isFarmingGuide = link.name === "Farming Guide";
            const active = isLinkActive(link);

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  isContact
                    ? "inline-flex items-center rounded-full bg-[#0DA855] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#087F40] hover:shadow-md"
                    : isFarmingGuide
                      ? active
                        ? "relative text-sm font-medium text-[#0DA855] transition-colors duration-300"
                        : "relative text-sm font-medium text-[#173026] transition-colors duration-300 hover:text-[#0DA855]"
                      : `relative text-sm font-medium transition-colors duration-300 ${
                          active
                            ? "text-[#0DA855]"
                            : "text-[#173026] hover:text-[#0DA855]"
                        }`
                }
              >
                {link.name}

                {!isContact && !isFarmingGuide && active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#EF8228]" />
                )}
              </Link>
            );
          })}
        </nav>

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

      <div
        className={`overflow-hidden border-t border-[#E3ECE7] bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isContact = link.name === "Contact";
              const isFarmingGuide = link.name === "Farming Guide";
              const active = isLinkActive(link);

              return (
                <div key={link.name} >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={
                      isContact
                        ? "mt-3 inline-flex items-center justify-center rounded-full bg-[#0DA855] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#087F40]"
                        : isFarmingGuide
                          ? active
                            ? "relative inline-block py-3.5 text-sm font-medium text-[#0DA855]"
                            : "inline-block py-3.5 text-sm font-medium text-[#173026] transition-colors hover:text-[#0DA855]"
                          : active
                            ? "relative inline-block py-3.5 text-sm font-medium text-[#0DA855]"
                            : "inline-block py-3.5 text-sm font-medium text-[#173026] transition-colors hover:text-[#0DA855]"
                    }
                  >
                    {link.name}

                    {!isContact && !isFarmingGuide && active && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#EF8228]" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
