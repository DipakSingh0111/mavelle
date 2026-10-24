"use client";

import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { PlanVisitSectionProps } from "@/types/mavelle.types";

export default function PlanVisit({ data }: PlanVisitSectionProps) {
  const planVisit = data;
  if (!planVisit) return null;

  return (
    <section className="relative w-full bg-[#FCFBF8] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-stone-900 group">
              <img
                src={planVisit.image}
                alt="Cozy dining room with wooden tables, framed botanical prints, and soft lights"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-6 pl-0 lg:pl-2">
            
            <div className="flex items-center space-x-3 mb-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#1F2923] tracking-tight">
                <span>{planVisit.heading?.main}</span>
                <span className="text-[#B57C3E]">{planVisit.heading?.highlight}</span>
              </h2>
              <div className="w-12 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
            </div>

            <p className="text-[#685D57] text-xs sm:text-[13.5px] leading-relaxed mb-8 max-w-lg font-normal">
              {planVisit.description}
            </p>

            <div className="space-y-7 sm:space-y-8">
              
              <div className="flex items-start gap-5 sm:gap-6 group">
                <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#F5EFE6] text-[#B57C3E] flex items-center justify-center shrink-0 border border-[#E8DEC8] group-hover:bg-[#EBDCC5] transition-colors shadow-xs mt-0.5">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#1F2923]">
                    {planVisit.location.title}
                  </h3>
                  <div className="text-sm sm:text-[15px] lg:text-base text-[#685D57] leading-relaxed mt-1.5">
                    <p>{planVisit.location.line1}</p>
                    <p>{planVisit.location.line2}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 sm:gap-6 group">
                <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#F5EFE6] text-[#B57C3E] flex items-center justify-center shrink-0 border border-[#E8DEC8] group-hover:bg-[#EBDCC5] transition-colors shadow-xs mt-0.5">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#1F2923]">
                    {planVisit.hours.title}
                  </h3>
                  <div className="text-sm sm:text-[15px] lg:text-base text-[#685D57] leading-relaxed mt-1.5 space-y-1">
                    <p>{planVisit.hours.line1}</p>
                    <p>{planVisit.hours.line2}</p>
                    <p>{planVisit.hours.line3}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 sm:gap-6 group">
                <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#F5EFE6] text-[#B57C3E] flex items-center justify-center shrink-0 border border-[#E8DEC8] group-hover:bg-[#EBDCC5] transition-colors shadow-xs mt-0.5">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#1F2923]">
                    {planVisit.help.title}
                  </h3>
                  <div className="text-sm sm:text-[15px] lg:text-base text-[#685D57] leading-relaxed mt-1.5">
                    <p>
                      <a
                        href={`tel:${planVisit.help.phone1}`}
                        className="hover:text-[#B57C3E] transition-colors"
                      >
                        {planVisit.help.phone1}
                      </a>{" "}
                      <span className="text-stone-300 mx-2">|</span>{" "}
                      <a
                        href={`tel:${planVisit.help.phone2}`}
                        className="hover:text-[#B57C3E] transition-colors"
                      >
                        {planVisit.help.phone2}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
