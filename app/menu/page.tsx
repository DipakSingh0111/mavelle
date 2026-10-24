"use client";

import React from "react";
import PageBanner from "@/components/common/PageBanner";
import MenuIntro from "@/components/menu/MenuIntro";
import MenuCategories from "@/components/menu/MenuCategories";

import { sectionsData } from "@/types/mavelle.types";

export default function MenuPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.menu;
  const menuData = sectionData?.Menu?.variants?.MavelleMenu1;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "OUR MENU"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. Menu Intro Section */}
      <MenuIntro data={menuData?.page?.intro} />

      {/* 3. Menu Categories List */}
      <MenuCategories data={menuData?.page?.sections} />
    </div>
  );
}
