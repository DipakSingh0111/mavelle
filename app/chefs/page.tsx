"use client";

import React from "react";
import PageBanner from "@/components/common/PageBanner";
import ChefsGrid from "@/components/chefs/ChefsGrid";
import ReservationBanner from "@/components/ReservationBanner";

import { sectionsData } from "@/types/mavelle.types";

export default function ChefsPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.chefs;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "OUR CHEFS"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. Chefs Grid Section */}
      <ChefsGrid data={sectionData?.Chefs?.variants?.MavelleChefs1} />

      {/* 3. Table Reservation Banner */}
      <ReservationBanner data={sectionData?.ReservationBanner?.variants?.MavelleReservationBanner1} />
    </div>
  );
}
