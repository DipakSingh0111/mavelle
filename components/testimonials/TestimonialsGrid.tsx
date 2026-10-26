"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialsSectionProps } from "@/types/mavelle.types";

export default function TestimonialsGrid({ data }: TestimonialsSectionProps) {
  const testimonialsData = data;
  if (!testimonialsData) return null;

  const subheading = testimonialsData.badge;
  const titlePart1 = testimonialsData.heading?.main;
  const titlePart2 = testimonialsData.heading?.highlight;
  const description = testimonialsData.description;
  const testimonials = testimonialsData.page?.list || testimonialsData.list || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("testimonials-grid-start");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FCFBF8] pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div id="testimonials-grid-start" className="max-w-[1340px] mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          
          <div className="inline-flex items-center space-x-3 mb-2.5">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {paginatedTestimonials.map((item, index) => (
            <motion.div
              key={`${item.id}-${startIndex + index}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.09 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#ECE4D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    
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

                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-[17px] text-[#1F2923] tracking-tight group-hover:text-[#B57C3E] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#8C6D48] font-medium mt-0.5">
                        {item.location}
                      </p>

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

                  <div
                    className="text-[#D39A5B]/30 shrink-0 select-none pr-1"
                    aria-hidden="true"
                  >
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>
                </div>

                <p className="text-[#5A504B] text-xs sm:text-[13.5px] leading-relaxed mt-5 font-normal">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-10 h-10 rounded-full border border-[#E6DCD0] bg-white flex items-center justify-center text-[#2C221E] hover:border-[#8C6D48] hover:bg-[#8C6D48] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-xs ${
                    isActive
                      ? "bg-[#8C6D48] text-white shadow-md scale-105"
                      : "bg-white text-[#2C221E] border border-[#E6DCD0] hover:border-[#8C6D48] hover:text-[#8C6D48]"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="w-10 h-10 rounded-full border border-[#E6DCD0] bg-white flex items-center justify-center text-[#2C221E] hover:border-[#8C6D48] hover:bg-[#8C6D48] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
