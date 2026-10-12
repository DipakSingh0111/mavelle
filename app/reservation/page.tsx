"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import ReservationForm from "../components/reservation/ReservationForm";
import ReservationFeatures from "../components/reservation/ReservationFeatures";
import PlanVisit from "../components/reservation/PlanVisit";

export default function ReservationPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="BOOK A TABLE" />

      {/* 2. Table Booking Form & Image */}
      <ReservationForm />

      {/* 3. 4 Highlight Badges */}
      <ReservationFeatures />

      {/* 4. Plan Your Visit */}
      <PlanVisit />
    </div>
  );
}
