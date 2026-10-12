"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Users, Calendar, ArrowRight } from "lucide-react";
import mavelleData from "@/data/mavelle.json";

const iconMap = {
  heart: Heart,
  leaf: Leaf,
  users: Users,
  calendar: Calendar,
};

export default function AboutMaville() {
  const { aboutSection } = mavelleData;
  const {
    subheading,
    titlePart1,
    titlePart2,
    description,
    features,
    ctaText,
    images,
  } = aboutSection;

  return (
    <section
      id="about"
      className="bg-[#FAF6F0] pt-4 sm:pt-6 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-12 font-sans selection:bg-[#C68B59]/20"
    >
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Overlapping Dual Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[540px]">
              {/* 1. Main Background Image - Cozy Café Interior */}
              <div className="relative w-[82%] aspect-[4/5] rounded-xs overflow-hidden shadow-2xl border border-black/10">
                <img
                  src={images.main}
                  alt="Cozy café interior with warm wooden tables and lights"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* 2. Secondary Overlapping Image - Coffee Cup with Latte Art */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 bottom-[-5%] w-[52%] aspect-[3/4] bg-white p-2 rounded-xs shadow-[0_20px_40px_rgba(0,0,0,0.18)] z-10"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={images.secondary}
                    alt="Close-up of coffee cup with latte art on saucer with coffee beans"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center pl-0"
          >
            {/* Subheader */}
            <div className="flex items-center space-x-3 mb-2.5">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C5B2B]">
                {subheading}
              </span>
              <div className="w-10 h-[1.5px] bg-[#8C5B2B]"></div>
            </div>

            {/* Main Dual-Color Serif Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif leading-[1.14] mb-4 tracking-tight">
              <span className="text-[#0F2E23] font-bold block">
                {titlePart1}
              </span>
              <span className="text-[#8C4F1A] font-bold block italic font-serif">
                {titlePart2}
              </span>
            </h2>

            {/* Paragraph Body Text */}
            <p className="text-[#5A504B] text-sm sm:text-base leading-relaxed mb-6 max-w-xl font-normal">
              {description}
            </p>

            {/* Features List with Circular Badge Icons */}
            <div className="space-y-3 mb-7">
              {features.map((item) => {
                const IconComponent =
                  iconMap[item.icon as keyof typeof iconMap] || Heart;
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-3.5 group cursor-pointer"
                  >
                    {/* Circle Icon Badge */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F3E8DA] flex items-center justify-center shrink-0 border border-[#E3D4C1] group-hover:bg-[#EBDBC8] group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-4 h-4 text-[#8C4F1A] transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    {/* Feature Title */}
                    <span className="text-[#2C221E] font-medium text-sm sm:text-[15px] group-hover:text-[#8C5B2B] transition-colors">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button "OUR STORY" */}
            <div>
              <button
                type="button"
                className="group inline-flex items-center justify-between bg-[#0F2E23] text-[#FAF6F0] pl-6 pr-1.5 py-2 rounded-full hover:bg-[#091E17] hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span className="text-xs sm:text-[13px] font-semibold tracking-wider mr-5 uppercase">
                  {ctaText}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#C67D33] flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
