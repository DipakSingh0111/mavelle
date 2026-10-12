"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import ChefsGrid from "../components/chefs/ChefsGrid";
import ReservationBanner from "../components/ReservationBanner";

export default function ChefsPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="OUR CHEFS" breadcrumbText="CHEFS" />

      {/* 2. Chefs Grid Section */}
      <ChefsGrid />

      {/* 3. Table Reservation Banner */}
      <ReservationBanner />
    </div>
  );
}
