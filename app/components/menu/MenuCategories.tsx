"use client";

import React from "react";
import { MenuCategoriesSectionProps } from "@/types/mavelle.types";

export default function MenuCategories({ data }: MenuCategoriesSectionProps) {
  const sections = data || [];

  return (
    <section className="max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-12 space-y-14 sm:space-y-16">
      {sections.map((category) => (
        <div key={category.id} id={category.id} className="scroll-mt-28">
          {/* Category Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10 pb-3 border-b border-[#EADFCB]/80">
            {/* Category Title with Golden Line */}
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1c1c1c] tracking-tight">
                <span>{category.heading?.main}</span>{" "}
                {category.heading?.highlight && (
                  <span className="text-[#B57C3E]">{category.heading.highlight}</span>
                )}
              </h3>
              <div className="w-12 sm:w-16 h-[2px] bg-[#B57C3E] shrink-0" />
            </div>

            {/* Category Subtitle */}
            {category.subtitle && (
              <div className="flex items-center gap-2 text-xs sm:text-[12.5px] font-bold tracking-[0.16em] text-[#B57C3E] uppercase font-sans">
                <span>{category.subtitle}</span>
                <div className="w-6 h-[1.5px] bg-[#B57C3E] shrink-0 hidden sm:block" />
              </div>
            )}
          </div>

          {/* Category Items Grid (4 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7">
            {(category.list || []).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Item Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                </div>

                {/* Item Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Name & Price */}
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-serif font-bold text-base sm:text-[17px] text-[#1c1c1c] tracking-tight group-hover:text-[#B57C3E] transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-bold text-base sm:text-[17px] text-[#B57C3E] shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed mt-2 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
