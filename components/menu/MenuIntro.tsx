"use client";

import React from "react";
import { MenuIntroSectionProps } from "@/types/mavelle.types";

export default function MenuIntro({ data }: MenuIntroSectionProps) {
  const intro = data;
  if (!intro) return null;

  const badge = intro.badge;
  const titlePart1 = intro.heading?.main;
  const titlePart2 = intro.heading?.highlight;
  const description = intro.description;
  const highlights = intro.highlights || [];

  return (
    <section className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 pt-14 sm:pt-20 pb-10 sm:pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2.5 mb-3 animate-fade-up">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#B57C3E] uppercase">
              {badge}
            </span>
            <div className="w-8 h-[1.5px] bg-[#B57C3E]" />
          </div>

          <h2 className="animate-fade-up delay-1 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1c1c] leading-[1.15]">
            {titlePart1}{" "}
            <span className="text-[#B57C3E] block sm:inline">
              {titlePart2}
            </span>
          </h2>

          <p className="animate-fade-up delay-2 text-stone-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl mt-4 font-normal">
            {description}
          </p>
        </div>

        <div className="animate-fade-up delay-3 lg:col-span-4 flex items-center lg:justify-end gap-5">
          
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 text-[#B57C3E] opacity-30 shrink-0"
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <path
                d="M15 85C25 50 55 25 85 15C75 45 45 75 15 85Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M15 85C40 60 65 40 85 15"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M35 65C45 58 55 52 65 46"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M48 52C56 46 64 40 72 35"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </div>

          <div className="w-[1.5px] h-14 bg-[#B57C3E]/80 shrink-0" />

          <div className="space-y-1 text-left">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="text-xs sm:text-[12.5px] font-bold tracking-wider text-[#2a2a2a] uppercase font-sans"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
