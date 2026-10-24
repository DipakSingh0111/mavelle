"use client";

import React from "react";
import PageBanner from "@/components/common/PageBanner";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";

import { sectionsData } from "@/types/mavelle.types";

export default function TestimonialsPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.testimonials;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "TESTIMONIALS"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. 3x3 Testimonials Grid */}
      <TestimonialsGrid data={sectionData?.Testimonials?.variants?.MavelleTestimonials1} />
    </div>
  );
}
