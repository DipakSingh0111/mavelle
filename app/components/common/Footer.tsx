"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight, Heart } from "lucide-react";
import mavelleData from "@/data/mavelle.json";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const { footerSection } = mavelleData;
  const {
    logo,
    description,
    socials,
    quickLinks,
    menuLinks,
    contact,
    visit,
    copyright,
    footerNote,
  } = footerSection;

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0C2B1E] text-white overflow-hidden"
    >
      {/* Decorative Botanical Leaf Outline in Bottom-Right Corner */}
      <div
        className="absolute -bottom-16 -right-16 w-80 h-80 pointer-events-none opacity-15 text-[#D39A5B]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M30 190C60 130 110 80 180 30C170 100 120 160 30 190Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M40 180C75 130 120 95 170 40"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M80 130C95 115 115 105 135 95"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Decorative Botanical Leaf in Bottom-Left */}
      <div
        className="absolute -bottom-12 -left-12 w-64 h-64 pointer-events-none opacity-15 text-[#D39A5B]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M170 190C140 130 90 80 20 30C30 100 80 160 170 190Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M160 180C125 130 80 95 30 40"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10 pb-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start">
          {/* Column 1: Brand Info & Socials (3 cols) */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-1">
              <img
                src={logo}
                alt="Mavelle Café & Bistro"
                className="h-14 sm:h-16 lg:h-[76px] xl:h-[80px] w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = "/images/logo-white.png";
                }}
              />
            </Link>

            <p className="text-[#CAD6CD] text-xs sm:text-[13px] leading-relaxed max-w-xs mt-3 mb-4 font-normal">
              {description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-8 h-8 rounded-full border border-[#D39A5B]/60 text-[#D39A5B] hover:bg-[#D39A5B] hover:text-[#0C2B1E] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  <SocialIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <h3 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide whitespace-nowrap">
                Quick Links
              </h3>
              <div className="w-6 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
            </div>

            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between text-xs sm:text-[12.5px] text-[#CAD6CD] hover:text-[#D39A5B] transition-colors py-0.5 group"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#B57C3E] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Menu (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <h3 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide whitespace-nowrap">
                Our Menu
              </h3>
              <div className="w-6 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
            </div>

            <ul className="space-y-1.5">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between text-xs sm:text-[12.5px] text-[#CAD6CD] hover:text-[#D39A5B] transition-colors py-0.5 group"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#B57C3E] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <h3 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide whitespace-nowrap">
                Contact Us
              </h3>
              <div className="w-6 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
            </div>

            <ul className="space-y-2 text-xs sm:text-[12.5px]">
              {/* Address */}
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B57C3E] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#CAD6CD] leading-snug">
                  {contact.address}
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B57C3E] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-[#CAD6CD] hover:text-[#D39A5B] transition-colors whitespace-nowrap"
                >
                  {contact.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B57C3E] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#CAD6CD] hover:text-[#D39A5B] transition-colors"
                >
                  {contact.email}
                </a>
              </li>

              {/* Working Hours */}
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#B57C3E] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-[#CAD6CD] leading-tight">
                  <span className="block font-medium">{contact.hoursDays}</span>
                  <span className="text-[11.5px] opacity-90">
                    {contact.hoursTime}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Visit Our Café (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <h3 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide whitespace-nowrap">
                {visit.title}
              </h3>
              <div className="w-6 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
            </div>

            {/* Café Picture */}
            <div className="relative w-full h-24 sm:h-26 rounded-lg overflow-hidden border border-white/10 shadow-md mb-2 bg-stone-900 group">
              <img
                src={visit.image}
                alt={visit.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Book a Table Button */}
            <Link
              href={visit.ctaHref}
              className="w-full py-1.5 px-3 rounded-md bg-[#B57C3E] hover:bg-[#C68B59] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase flex items-center justify-center gap-1 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <span>{visit.ctaText}</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright Divider & Row */}
        <div className="mt-7 pt-4 border-t border-[#163E2D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9BB1A3]">
          <div>
            <p>{copyright}</p>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 fill-[#B57C3E] text-[#B57C3E]" />
            <span>for Food Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
