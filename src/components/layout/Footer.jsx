import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiArrowUpRight,
} from "react-icons/fi";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Coconut Varieties", href: "/#varieties" },
  { name: "Services", href: "/#services" },
  { name: "Demo Farm", href: "/#demo-farm" },
  { name: "Farming Guide", href: "/farming-guide" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Quality Coconut Plant Supply",
  "Dwarf & Hybrid Coconut Plants",
  "High-Yielding Varieties",
  "Bulk Plant Supply",
  "Plant Selection Guidance",
  "Planting & Care Guidance",
];

export default function Footer() {
  return (
    <footer className="bg-[#173026] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/#home" className="inline-block">
              <div className="rounded-xl bg-white px-4 py-3">
                <img
                  src="/images/logo/vrm-green-nursery.png"
                  alt="VRM Green Nursery"
                  className="h-auto w-[180px] object-contain"
                />
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              VRM Green Nursery specializes in quality coconut plants, including
              dwarf, hybrid, and high-yielding varieties for farmers, home
              gardens, and commercial plantations.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com/VRMGREENNURSERY"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#66C4CE] hover:bg-[#66C4CE] hover:text-white"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="https://instagram.com/vrmgreen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#EF8228] hover:bg-[#EF8228] hover:text-white"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="https://youtube.com/@vrmgreennursery-ne2bu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#EF8228] hover:bg-[#EF8228] hover:text-white"
              >
                <FiYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors duration-300 hover:text-[#66C4CE]"
                  >
                    {link.name}
                    <FiArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-white">Our Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm leading-5 text-white/65">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white">Get In Touch</h3>

            <div className="mt-5 space-y-5">
              <a href="tel:8985532945" className="group flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/15 text-[#66C4CE]">
                  <FiPhone size={17} />
                </span>
                <span>
                  <span className="block text-xs text-white/45">Phone</span>
                  <span className="mt-1 block text-sm font-medium text-white transition-colors group-hover:text-[#66C4CE]">
                    8985532945
                  </span>
                </span>
              </a>

              <a
                href="mailto:vrmgreennursery@gmail.com"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/15 text-[#66C4CE]">
                  <FiMail size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-white/45">Email</span>
                  <span className="mt-1 block break-all text-sm font-medium text-white transition-colors group-hover:text-[#66C4CE]">
                    vrmgreennursery@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/15 text-[#66C4CE]">
                  <FiMapPin size={17} />
                </span>
                <span>
                  <span className="block text-xs text-white/45">
                    Nursery Address
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/80">
                    Madurai, Thirumangalam Road
                    <br />
                    625008
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0DA855]/15 text-[#66C4CE]">
                  <FiClock size={17} />
                </span>
                <span>
                  <span className="block text-xs text-white/45">
                    Business Hours
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/80">
                    Monday – Sunday
                    <br />
                    7:00 AM – 7:00 PM
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} VRM Green Nursery. All rights reserved.
          </p>

          <DevelopedByStaffArc />

          <p className="text-sm text-white/45">
            Quality Coconut Plants. Better Farming. 🌴
          </p>
        </div>
      </div>
    </footer>
  );
}
