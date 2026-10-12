"use client";

import React from "react";
import mavelleData from "@/data/mavelle.json";

export default function ChefsGrid() {
  const { chefsPage } = mavelleData;
  const { subheading, titlePart1, titlePart2, description, chefs } = chefsPage;

  return (
    <section className="relative w-full bg-[#FCFBF8] pt-10 sm:pt-12 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Decorative Botanical Leaf Watermark on Top Right */}
      <div
        className="absolute -top-10 -right-12 w-80 h-80 pointer-events-none opacity-20 text-[#B57C3E]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M50 180C70 120 120 70 190 20C180 90 130 150 50 180Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M60 170C90 125 130 90 180 30"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M100 120C115 105 135 95 155 85"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M85 140C98 128 112 118 128 110"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Subheading with trailing line */}
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D48]">
              {subheading}
            </span>
            <div className="w-10 h-[1.5px] bg-[#8C6D48]"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1F2923] leading-tight tracking-tight mb-4">
            <span>{titlePart1}</span>
            <span className="text-[#B57C3E]">{titlePart2}</span>
          </h2>

          {/* Description */}
          <p className="text-[#685D57] text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Chefs Grid (4 Columns, 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7">
          {chefs.map((chef, index) => (
            <div
              key={`${chef.id}-${index}`}
              className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-[#ECE4D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Chef Portrait Image */}
                <div className="relative w-full aspect-[4/3.8] rounded-xl overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={chef.image}
                    alt={chef.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Name & Role */}
                <div className="px-1">
                  <h3 className="font-serif font-bold text-lg sm:text-[18px] text-[#1F2923] leading-snug tracking-tight group-hover:text-[#B57C3E] transition-colors">
                    {chef.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-bold text-[#B57C3E]">
                      {chef.role}
                    </span>
                    <div className="w-5 h-[1.5px] bg-[#B57C3E]/80"></div>
                  </div>
                </div>
              </div>

              {/* Bio Description */}
              <p className="px-1 pt-3 mt-3 border-t border-stone-100 text-[#685D57] text-xs sm:text-[12.5px] leading-relaxed font-normal">
                {chef.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
