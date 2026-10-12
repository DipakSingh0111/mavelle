"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import AboutStory from "../components/about/AboutStory";
import MenuSection from "../components/MenuSection";
import ReservationBanner from "../components/ReservationBanner";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="ABOUT US" />

      {/* 2. About Mavelle Story Section */}
      <AboutStory />

      {/* 3. Menu Preview Section */}
      <MenuSection />

      {/* 4. Table Reservation Banner */}
      <ReservationBanner />
    </div>
  );
}
