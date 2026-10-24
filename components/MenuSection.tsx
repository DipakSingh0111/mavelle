"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { MenuSectionProps } from "@/types/mavelle.types";

export default function MenuSection({ data }: MenuSectionProps) {
  if (!data) return null;

  const subheading = data.badge;
  const titleLine1 = data.heading?.main || "A Taste for ";
  const titleLine2 = data.heading?.highlight || "Every Mood";
  const description = data.description;
  const ctaText = data.cta?.label || "VIEW FULL MENU";
  const categories = data.list || [];

  return (
    <section
      id="menu"
      className="bg-[#FAF7F2] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D48]">
                {subheading}
              </span>
              <div className="w-10 h-[1px] bg-[#8C6D48]"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif text-[#2C221E] leading-[1.15] mb-6 relative">
              {titleLine1} <br />
              <span className="inline-flex items-center gap-2">
                {titleLine2}
                <Leaf className="w-6 h-6 text-[#7E8F67] transform rotate-45 inline-block stroke-[1.5] animate-floatSlow" />
              </span>
            </h2>

            <p className="text-[#685D57] text-base leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            <Link
              href="/menu"
              className="group inline-flex items-center justify-between bg-[#1A2E22] text-[#F3EFEA] pl-7 pr-2 py-3 rounded-full hover:bg-[#112017] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(26,46,34,0.3)] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="text-sm font-medium tracking-wide mr-6">
                {ctaText}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#C68B59] flex items-center justify-center text-white group-hover:translate-x-1.5 group-hover:scale-105 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {categories.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                >
                  <Link
                    href={`/menu#${item.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="bg-white rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(44,34,30,0.12)] flex flex-col justify-between block group/card h-full transition-shadow duration-300"
                  >
                    <div className="relative w-full h-64 sm:h-56 md:h-64 overflow-hidden rounded-tr-[70px] rounded-tl-xl rounded-bl-xl rounded-br-xl">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src =
                            "https://placehold.co/400x500/e2e8f0/1e293b?text=Food+Item";
                        }}
                      />
                    </div>

                    <div className="pt-4 pb-2 px-2 flex items-end justify-between">
                      <h3 className="font-serif text-lg font-medium text-[#2C221E] group-hover/card:text-[#8C6D48] transition-colors max-w-[100px] leading-snug">
                        {item.title}
                      </h3>

                      <div className="w-10 h-10 rounded-full border border-[#E6DCD0] flex items-center justify-center text-[#2C221E] group-hover/card:border-[#8C6D48] group-hover/card:bg-[#8C6D48] group-hover/card:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-[#8C6D48] group-hover/card:text-white transition-colors duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
