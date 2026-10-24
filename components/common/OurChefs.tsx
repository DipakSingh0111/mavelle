"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChefsSectionProps } from "@/types/mavelle.types";

export default function OurChefs({ data }: ChefsSectionProps) {
  if (!data) return null;

  const { badge, heading, description, list } = data;
  const subheading = badge;
  const titlePart1 = heading?.main;
  const titlePart2 = heading?.highlight;
  const chefs = list || [];

  return (
    <section
      id="chefs"
      className="relative w-full bg-[#FAF7F2] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      
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
          <path
            d="M120 95C135 85 150 78 165 72"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-[1340px] mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D48]">
              {subheading}
            </span>
            <div className="w-10 h-[1.5px] bg-[#8C6D48]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1F2923] leading-tight tracking-tight mb-4">
            <span>{titlePart1}</span>
            <span className="text-[#B57C3E]">{titlePart2}</span>
          </h2>

          <p className="text-[#685D57] text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-[#ECE4D8] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(31,41,35,0.1)] flex flex-col justify-between"
            >
              <div>
                
                <div className="relative w-full aspect-[4/3.8] sm:aspect-[4/4] rounded-xl overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={chef.image}
                    alt={chef.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>

                <div className="px-1.5 flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-lg sm:text-[19px] text-[#1F2923] group-hover:text-[#B57C3E] transition-colors leading-snug tracking-tight">
                      {chef.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-bold text-[#B57C3E]">
                        {chef.role}
                      </span>
                      <div className="w-5 h-[1.5px] bg-[#B57C3E]/80"></div>
                    </div>
                  </div>

                  <span
                    className="font-signature text-2xl sm:text-[28px] text-[#D09A65] shrink-0 -rotate-6 transform select-none pr-1 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
                    aria-label={`Signature of ${chef.name}`}
                  >
                    {chef.signature}
                  </span>
                </div>
              </div>

              <p className="px-1.5 pt-3.5 mt-3.5 border-t border-stone-100 text-[#685D57] text-xs sm:text-[13px] leading-relaxed font-normal">
                {chef.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
