"use client";

import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { ContactMapSectionProps } from "@/types/mavelle.types";

export default function ContactMap({ data }: ContactMapSectionProps) {
  const map = data;
  if (!map) return null;

  return (
    <section className="relative w-full bg-[#FCFBF8] pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1340px] mx-auto">
        
        <div className="relative w-full h-[360px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden border border-[#E6DDD0] shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-[#E8E0D2]">
          
          <iframe
            title="Mavelle Café & Bistro Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.772591605374!2d77.170248!3d28.641214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029962a93b49%3A0xe543c3fbb094e9f7!2sRajendra%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale-[25%] opacity-90 contrast-[105%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute top-[42%] left-[45%] -translate-x-1/2 -translate-y-full pointer-events-none z-10 flex flex-col items-center">
            
            <div className="bg-[#B57C3E] text-white text-xs sm:text-[12.5px] font-bold px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 whitespace-nowrap border border-white/20">
              <MapPin className="w-3.5 h-3.5 fill-current" />
              <span>Mavelle Café & Bistro</span>
            </div>
            
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#B57C3E] drop-shadow-md"></div>
          </div>

          <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 max-w-sm w-[90%] sm:w-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.15)] border border-[#ECE4D8]">
              
              <div className="flex items-center space-x-2.5 mb-2.5">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1F2923] tracking-tight">
                  {map.title}
                </h3>
                <div className="w-8 h-[1.5px] bg-[#B57C3E] shrink-0"></div>
              </div>

              <p className="text-xs sm:text-[13px] text-[#685D57] leading-relaxed mb-5 font-normal">
                {map.description}
              </p>

              <a
                href={map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B57C3E] hover:bg-[#A36D35] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>{map.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
