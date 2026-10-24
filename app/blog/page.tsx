"use client";

import React from "react";
import PageBanner from "@/components/common/PageBanner";
import BlogGrid from "@/components/blog/BlogGrid";

import { sectionsData } from "@/types/mavelle.types";

export default function BlogPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.blog;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "BLOGS"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. 6-Blogs Grid (3x2) matching screenshot */}
      <BlogGrid data={sectionData?.BlogNews?.variants?.MavelleBlogNews1} />
    </div>
  );
}
