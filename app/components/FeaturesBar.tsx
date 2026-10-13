"use client";

import React from "react";
import { motion } from "framer-motion";
import mavelleData from "@/data/mavelle.json";

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "leaves":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-8 h-8 xl:w-9 xl:h-9 text-[#b37937]"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 25C13 18 19 12 28 6C27 18 20 23 11 25Z" />
          <path d="M12 24C17 18 21 14 27 7" />
          <path d="M6 26C7 20 10 16 16 13C16 19 12 24 6 26Z" />
          <path d="M7 25C10 21 12 18 15 14" />
        </svg>
      );
    case "coffee":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-8 h-8 xl:w-9 xl:h-9 text-[#b37937]"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 14H22V20C22 23 19 25 14 25C9 25 6 23 6 20V14Z" />
          <path d="M22 16H25C26.5 16 27 17.5 27 19C27 20.5 26.5 22 25 22H22" />
          <path d="M4 27H24" />
          <path d="M10 6C9.5 7.5 10.5 9 10 10.5" />
          <path d="M14 5C13.5 7 14.5 8.5 14 10.5" />
          <path d="M18 6C17.5 7.5 18.5 9 18 10.5" />
        </svg>
      );
    case "food":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-8 h-8 xl:w-9 xl:h-9 text-[#b37937]"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="16" cy="9" r="1.8" fill="currentColor" />
          <path d="M6 23C6 15 10.5 11 16 11C21.5 11 26 15 26 23H6Z" />
          <path d="M4 25H28" />
        </svg>
      );
    case "ambience":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-8 h-8 xl:w-9 xl:h-9 text-[#b37937]"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 20V10C8 7.8 9.8 6 12 6H20C22.2 6 24 7.8 24 10V20" />
          <path d="M6 15H9V21H6C4.9 21 4 20.1 4 19V17C4 15.9 4.9 15 6 15Z" />
          <path d="M23 15H26C27.1 15 28 15.9 28 17V19C28 20.1 27.1 21 26 21H23V15Z" />
          <path d="M9 19H23V22H9V19Z" />
          <path d="M7 23L5 27" />
          <path d="M25 23L27 27" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FeaturesBar() {
  const { features } = mavelleData;

  return (
    <section className="w-full bg-white border-b border-stone-100">
      <div className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 items-center">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group flex items-center gap-4 xl:gap-5 cursor-pointer ${
                index === 0
                  ? "lg:pr-6 xl:pr-8"
                  : "lg:border-l lg:border-stone-200 lg:px-6 xl:px-8"
              }`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 xl:w-[72px] xl:h-[72px] rounded-full bg-[#f8f3eb] group-hover:bg-[#f2e7d7] group-hover:shadow-[0_4px_16px_rgba(179,121,55,0.2)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                <div className="transition-transform duration-300 group-hover:rotate-6">
                  <FeatureIcon type={item.icon} />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="font-serif font-medium text-[#1c1c1c] group-hover:text-[#b37937] transition-colors duration-200 text-[17px] xl:text-[21px] leading-snug">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-[13px] xl:text-[15px] leading-normal mt-1">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
