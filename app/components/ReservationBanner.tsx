"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { ReservationBannerSectionProps } from "@/types/mavelle.types";

export default function ReservationBanner({ data }: ReservationBannerSectionProps) {
  if (!data) return null;

  const subheading = data.badge;
  const titlePart1 = data.heading?.main;
  const titlePart2 = data.heading?.highlight;
  const description = data.description;
  const ctaText = data.cta?.label || "RESERVE A TABLE";
  const backgroundImage = data.backgroundImage;

  return (
    <section
      id="reservation"
      className="relative w-full overflow-hidden bg-[#0A0D0B] font-sans selection:bg-[#C67D33]/30 min-h-[300px] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Warm luxury café dining table ambience with gourmet food and candlelight"
          className="w-full h-full object-cover object-right md:object-center filter brightness-[0.75] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B09] via-[#080B09]/85 sm:via-[#080B09]/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none z-10" />
      </div>

      <div className="relative z-20 max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#D29B56]">
              {subheading}
            </span>
            <div className="w-8 sm:w-10 h-[1.5px] bg-[#D29B56]"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-serif leading-[1.12] tracking-tight mb-6">
            <span className="text-[#FAF7F2] font-normal inline-flex items-center gap-3">
              {titlePart1}
              <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-[#D29B56] transform rotate-45 stroke-[1.5] inline-block -mt-1 animate-floatSlow" />
            </span>
            <br />
            <span className="text-[#C67D33] sm:text-[#D29B56] font-normal block mt-1">
              {titlePart2}
            </span>
          </h2>

          <p className="text-[#E2D9CF] text-base sm:text-[1.08rem] font-light leading-relaxed mb-9 max-w-xl">
            {description}
          </p>

          <div>
            <Link
              href={data.cta?.href || "/reservation"}
              className="group inline-flex items-center justify-between bg-[#0B251C] hover:bg-[#071B14] hover:scale-[1.03] text-[#FAF7F2] border border-[#C67D33]/60 hover:border-[#D29B56] pl-7 pr-2 py-2.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(210,155,86,0.3)] cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wider mr-6 uppercase text-[#EADEC9] group-hover:text-white transition-colors duration-200">
                {ctaText}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#C67D33] group-hover:bg-[#D29B56] flex items-center justify-center text-white group-hover:translate-x-1.5 group-hover:scale-105 transition-all duration-300 shadow-inner">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
