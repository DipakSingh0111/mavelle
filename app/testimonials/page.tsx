"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="TESTIMONIALS" />

      {/* 2. 3x3 Testimonials Grid */}
      <TestimonialsGrid />
    </div>
  );
}
