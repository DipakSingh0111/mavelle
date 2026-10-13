"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import GalleryGrid from "../components/gallery/GalleryGrid";
import ReservationBanner from "../components/ReservationBanner";

import { sectionsData } from "@/types/mavelle.types";

export default function GalleryPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.gallery;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "GALLERY"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. Gallery 16-Image Grid with Lightbox */}
      <GalleryGrid data={sectionData?.Gallery?.variants?.MavelleGallery1} />

      {/* 3. Table Reservation Banner */}
      <ReservationBanner data={sectionData?.ReservationBanner?.variants?.MavelleReservationBanner1} />
    </div>
  );
}
