"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TestimonialsSectionProps } from "@/types/mavelle.types";

export default function TestimonialsGrid({ data }: TestimonialsSectionProps) {
  const testimonialsData = data;
  if (!testimonialsData) return null;

  const subheading = testimonialsData.badge;
  const titlePart1 = testimonialsData.heading?.main;
  const titlePart2 = testimonialsData.heading?.highlight;
  const description = testimonialsData.description;
  const testimonials = testimonialsData.page?.list || testimonialsData.list || [];

  return (
    <section className="relative w-full bg-[#FCFBF8] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1340px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          {/* Subheading with line */}
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
        </motion.div>

        {/* 3x3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#ECE4D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: User Info & Quote Mark */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    {/* User Avatar */}
                    <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#D39A5B]/30 bg-stone-100 shadow-sm">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src =
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
                        }}
                      />
                    </div>

                    {/* Name, Location & Star Rating */}
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-[17px] text-[#1F2923] tracking-tight group-hover:text-[#B57C3E] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#8C6D48] font-medium mt-0.5">
                        {item.location}
                      </p>

                      {/* 5 Stars */}
                      <div className="flex items-center gap-0.5 mt-1.5 text-[#B57C3E]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#B57C3E] text-[#B57C3E]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Elegant Quote Symbol */}
                  <div
                    className="text-[#D39A5B]/30 shrink-0 select-none pr-1"
                    aria-hidden="true"
                  >
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>
                </div>

                {/* Review Paragraph */}
                <p className="text-[#5A504B] text-xs sm:text-[13.5px] leading-relaxed mt-5 font-normal">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
