"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import ContactSection from "../components/contact/ContactSection";
import ContactMap from "../components/contact/ContactMap";

import { sectionsData } from "@/types/mavelle.types";

export default function ContactPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.contact;
  const contactData = sectionData?.ContactPage?.variants?.MavelleContactPage1;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "CONTACT US"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. Contact Information & Message Form */}
      <ContactSection data={contactData} />

      {/* 3. Interactive Location Map */}
      <ContactMap data={contactData?.map} />
    </div>
  );
}
