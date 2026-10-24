"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";
import { GallerySectionProps } from "@/types/mavelle.types";
import Reveal from "./Reveal";

interface GalleryImage {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export default function OurGallery({ data }: GallerySectionProps) {
  if (!data) return null;

  const subheading = data.badge;
  const titlePart1 = data.heading?.main;
  const titlePart2 = data.heading?.highlight;
  const description = data.description;
  const featured = data.featured;
  const topRow = data.topRow || [];
  const bottomRow = data.bottomRow || [];

  const allImages: GalleryImage[] = [featured, ...topRow, ...bottomRow];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + allImages.length) % allImages.length,
    );
  }, [allImages.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % allImages.length,
    );
  }, [allImages.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; 

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      className="relative w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          
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
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => handleOpen(0)}
            className="sm:col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-2xl border border-[#ECE4D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] min-h-[300px] sm:min-h-[380px] lg:min-h-full cursor-pointer"
          >
            <img
              src={featured.image}
              alt={featured.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src =
                  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <ZoomIn className="w-5 h-5 text-[#8C6D48]" />
              </div>
            </div>
          </motion.div>

          {topRow.map((item, idx) => {
            const overallIndex = 1 + idx;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleOpen(overallIndex)}
                className="relative group overflow-hidden rounded-2xl border border-[#ECE4D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] aspect-[4/3] sm:aspect-[4/3] h-full cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-[#8C6D48]" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {bottomRow.map((item, idx) => {
            const overallIndex = 1 + topRow.length + idx;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleOpen(overallIndex)}
                className="relative group overflow-hidden rounded-2xl border border-[#ECE4D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] aspect-[4/3] sm:aspect-[4/3] h-full cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-[#8C6D48]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={handleClose}
        >
          
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200 z-50 cursor-pointer"
          >
            <X className="w-6 h-6 stroke-[2]" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200 z-50 cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200 z-50 cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 max-h-[85vh]">
              <img
                src={allImages[activeIndex].image}
                alt={allImages[activeIndex].alt}
                className="w-auto h-auto max-h-[85vh] max-w-[90vw] object-contain select-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
