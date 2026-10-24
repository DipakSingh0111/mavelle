"use client";

import React from "react";
import PageBanner from "@/components/common/PageBanner";
import ReservationForm from "@/components/reservation/ReservationForm";
import ReservationFeatures from "@/components/reservation/ReservationFeatures";
import PlanVisit from "@/components/reservation/PlanVisit";

import { sectionsData } from "@/types/mavelle.types";

export default function ReservationPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.reservation;
  const reservationData = sectionData?.ReservationBanner?.variants?.MavelleReservationBanner1;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "BOOK A TABLE"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. Table Booking Form & Image */}
      <ReservationForm data={reservationData?.page?.booking} />

      {/* 3. 4 Highlight Badges */}
      <ReservationFeatures data={reservationData?.page?.list} />

      {/* 4. Plan Your Visit */}
      <PlanVisit data={reservationData?.page?.planVisit} />
    </div>
  );
}
