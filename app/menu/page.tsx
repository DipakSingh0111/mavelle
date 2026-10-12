"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import MenuIntro from "../components/menu/MenuIntro";
import MenuCategories from "../components/menu/MenuCategories";

export default function MenuPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="OUR MENU" breadcrumbText="MENU" />

      {/* 2. Menu Intro Section */}
      <MenuIntro />

      {/* 3. Menu Categories List */}
      <MenuCategories />
    </div>
  );
}
