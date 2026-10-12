"use client";

import React from "react";
import mavelleData from "@/data/mavelle.json";

export default function AboutStory() {
  const { story } = mavelleData.aboutPage;
  const { subheading, titlePart1, titlePart2, paragraphs, images } = story;

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Overlapping Dual Image Composition */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
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
              <div className="absolute right-0 bottom-[-5%] w-[52%] aspect-[3/4] bg-white p-2 rounded-xs shadow-[0_20px_40px_rgba(0,0,0,0.18)] z-10">
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={images.secondary}
                    alt="Close-up of coffee cup with latte art on saucer with coffee beans"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 flex flex-col justify-center pl-0">
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
            <div className="space-y-3.5 text-[#5A504B] text-sm sm:text-[15px] leading-relaxed max-w-xl font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
