"use client";

import React from "react";
import PageBanner from "../components/common/PageBanner";
import BlogGrid from "../components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="BLOGS" />

      {/* 2. 6-Blogs Grid (3x2) matching screenshot */}
      <BlogGrid />
    </div>
  );
}
