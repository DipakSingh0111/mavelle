"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import mavelleData from "@/data/mavelle.json";

export default function OurTestimonials() {
  const { testimonialsSection } = mavelleData;
  const { subheading, titlePart1, titlePart2, description, testimonials } =
    testimonialsSection;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth scroll to a specific index
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx =
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx =
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIdx);
  };

  // Track active index on manual touch / scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.children[0]
        ? (container.children[0] as HTMLElement).offsetWidth + 24
        : 380;
      const currentIndex = Math.round(scrollPosition / cardWidth);
      if (currentIndex >= 0 && currentIndex < testimonials.length) {
        setActiveIndex(currentIndex);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FAF7F2] pt-4 sm:pt-6 pb-1 sm:pb-2 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto">
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

        {/* Testimonials Carousel Container with Smooth Scrolling */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 items-stretch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="w-full sm:w-[380px] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white rounded-3xl p-7 sm:p-8 border border-[#ECE4D8] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Card Row: Avatar, Author Details & Quote Marks */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Author Avatar */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-stone-100 bg-stone-100">
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

                    {/* Name, Location & Stars */}
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-[18px] text-[#1F2923] leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-500 font-normal mt-0.5">
                        {item.location}
                      </p>

                      {/* 5 Golden Stars */}
                      <div className="flex items-center gap-1 mt-1.5">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#D4933E] text-[#D4933E]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Big Double Quote Marks */}
                  <svg
                    className="w-9 h-9 sm:w-10 sm:h-10 text-[#EADBCC] shrink-0"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14.5 13C12 13 10 15 9.5 17.5C9 19.5 9 22 9.5 24C10.5 28 14 30.5 18 31L19 28.5C16 28 14 26.5 13.5 24.5C14 24.5 14.5 24.5 15 24.5C17.5 24.5 19.5 22.5 19.5 20C19.5 16 17.5 13 14.5 13ZM29.5 13C27 13 25 15 24.5 17.5C24 19.5 24 22 24.5 24C25.5 28 29 30.5 33 31L34 28.5C31 28 29 26.5 28.5 24.5C29 24.5 29.5 24.5 30 24.5C32.5 24.5 34.5 22.5 34.5 20C34.5 16 32.5 13 29.5 13Z" />
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-[#554D47] text-sm sm:text-[14.5px] leading-relaxed font-normal">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Controls (Arrows + Dots) */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-5 sm:gap-6">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#B57C3E] text-[#B57C3E] hover:bg-[#B57C3E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? "w-4 h-2 bg-[#B57C3E]"
                    : "w-2 h-2 bg-[#EADECF] hover:bg-[#D5BFA7]"
                }`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#B57C3E] text-[#B57C3E] hover:bg-[#B57C3E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
