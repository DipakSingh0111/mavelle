"use client";

import React from "react";
import { Utensils, Coffee, Users, CalendarCheck } from "lucide-react";
import mavelleData from "@/data/mavelle.json";

const iconMap = {
  utensils: Utensils,
  coffee: Coffee,
  users: Users,
  "calendar-check": CalendarCheck,
};

export default function ReservationFeatures() {
  const { reservationPage } = mavelleData;
  const { features } = reservationPage;

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-14 border-y border-[#ECE4D8]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#E5DACB]">
          {features.map((item, index) => {
            const IconComponent =
              iconMap[item.icon as keyof typeof iconMap] || Utensils;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center px-4 ${
                  index !== 0 ? "pt-6 sm:pt-0" : ""
                }`}
              >
                {/* Circular Icon Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5EFE6] text-[#B57C3E] flex items-center justify-center shrink-0 border border-[#E8DEC8] shadow-sm mb-4 transition-transform duration-300 hover:scale-110">
                  <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1F2923] tracking-tight">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13.5px] text-[#685D57] leading-relaxed mt-1.5 font-normal max-w-xs">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
