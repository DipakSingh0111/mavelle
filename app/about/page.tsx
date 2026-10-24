"use client";

import React from "react";
import PageBanner from "@/components/common/PageBanner";
import AboutStory from "@/components/about/AboutStory";
import MenuSection from "@/components/MenuSection";
import ReservationBanner from "@/components/ReservationBanner";

import { sectionsData } from "@/types/mavelle.types";

export default function AboutPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.about;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "ABOUT US"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. About Mavelle Story Section */}
      <AboutStory data={sectionData?.AboutUs?.variants?.MavelleAboutUs1} />

      {/* 3. Menu Preview Section */}
      <MenuSection data={sectionData?.Menu?.variants?.MavelleMenu1} />

      {/* 4. Table Reservation Banner */}
      <ReservationBanner data={sectionData?.ReservationBanner?.variants?.MavelleReservationBanner1} />
    </div>
  );
}
