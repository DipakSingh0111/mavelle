"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import ContactSection from "../components/contact/ContactSection";
import ContactMap from "../components/contact/ContactMap";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="CONTACT US" />

      {/* 2. Contact Information & Message Form */}
      <ContactSection />

      {/* 3. Interactive Location Map */}
      <ContactMap />
    </div>
  );
}
