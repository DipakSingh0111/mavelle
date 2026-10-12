"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import GalleryGrid from "../components/gallery/GalleryGrid";
import ReservationBanner from "../components/ReservationBanner";

export default function GalleryPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="GALLERY" />

      {/* 2. Gallery 16-Image Grid with Lightbox */}
      <GalleryGrid />

      {/* 3. Table Reservation Banner */}
      <ReservationBanner />
    </div>
  );
}
