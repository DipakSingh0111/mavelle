"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import mavelleData from "@/data/mavelle.json";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navbar } = mavelleData;
  const navLinks = navbar.links;
  const cta = navbar.cta;

  // Uses active logo from mavelle.json
  const [logoSrc, setLogoSrc] = useState(navbar.logo || "/images/logo (1).png");

  const getLinkProps = (item: {
    name: string;
    href: string;
    active?: boolean;
  }) => {
    const isMenuPage = pathname === "/menu";
    const isAboutPage = pathname === "/about";
    const isChefsPage = pathname === "/chefs";
    const isGalleryPage = pathname === "/gallery";
    const isTestimonialsPage = pathname === "/testimonials";
    const isBlogPage =
      pathname === "/blog" ||
      pathname?.startsWith("/blog/") ||
      pathname === "/blog-detail" ||
      pathname === "/blogs";
    const isContactPage = pathname === "/contact";
    const isReservationPage = pathname === "/reservation";
    const isHome = pathname === "/" || pathname === "";

    let href = item.href;
    let isActive = false;

    if (item.name === "Our Menu") {
      href = "/menu";
      isActive = isMenuPage;
    } else if (item.name === "About Us") {
      href = "/about";
      isActive = isAboutPage;
    } else if (item.name === "Our Chefs") {
      href = "/chefs";
      isActive = isChefsPage;
    } else if (item.name === "Gallery") {
      href = "/gallery";
      isActive = isGalleryPage;
    } else if (item.name === "Testimonials") {
      href = "/testimonials";
      isActive = isTestimonialsPage;
    } else if (item.name === "Blog" || item.name === "Blogs") {
      href = "/blog";
      isActive = isBlogPage;
    } else if (item.name === "Contact Us") {
      href = "/contact";
      isActive = isContactPage;
    } else if (item.name === "Home") {
      href = "/";
      isActive = isHome;
    } else {
      if (
        (isMenuPage ||
          isAboutPage ||
          isChefsPage ||
          isGalleryPage ||
          isTestimonialsPage ||
          isBlogPage ||
          isContactPage ||
          isReservationPage) &&
        href.startsWith("#")
      ) {
        href = `/${href}`;
      }
    }

    return { href, isActive };
  };

  const reservationHref = "/reservation";

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Deep Forest Green Accent Stripe */}
      <div className="w-full h-[3.5px] bg-[#0c3829]" />

      {/* Main Navbar */}
      <header className="w-full bg-white border-b border-[#f1f1f1] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12 min-h-[78px] sm:h-[84px] py-1.5 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center shrink-0 py-1">
            <div className="relative flex items-center">
              <Image
                src={logoSrc}
                alt={`${navbar.brandName} ${navbar.brandSubtitle}`}
                width={280}
                height={90}
                priority
                className="h-14 sm:h-16 lg:h-[76px] xl:h-[80px] w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
                onError={() => {
                  if (logoSrc !== "/images/logo (1).png") {
                    setLogoSrc("/images/logo (1).png");
                  }
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((item) => {
              const { href, isActive } = getLinkProps(item);
              return (
                <Link
                  key={item.name}
                  href={href}
                  className={`relative py-1 text-[14.5px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#c2782b] font-semibold"
                      : "text-[#222222] hover:text-[#c2782b]"
                  }`}
                >
                  {item.name}
                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#c2782b] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: "Book a Table" Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href={reservationHref}
              className="group inline-flex items-center bg-[#0d3929] hover:bg-[#0a2f22] border-[1.5px] border-[#c2782b] pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0d3929]/20"
            >
              <span className="text-white text-[14px] font-medium tracking-wide">
                {cta.text}
              </span>
              <span className="ml-2.5 w-8 h-8 rounded-full bg-[#c2782b] group-hover:bg-[#d08332] text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0d3929] hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-5 shadow-xl transition-all">
            <div className="flex flex-col space-y-3">
              {navLinks.map((item) => {
                const { href, isActive } = getLinkProps(item);
                return (
                  <Link
                    key={item.name}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 text-[16px] font-medium transition-colors ${
                      isActive
                        ? "text-[#c2782b] font-semibold border-l-2 border-[#c2782b] pl-3"
                        : "text-stone-700 hover:text-[#c2782b] pl-3"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-stone-100">
                <Link
                  href={reservationHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-between bg-[#0d3929] border-[1.5px] border-[#c2782b] pl-6 pr-2 py-2 rounded-full text-white font-medium"
                >
                  <span>{cta.text}</span>
                  <span className="w-8 h-8 rounded-full bg-[#c2782b] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
