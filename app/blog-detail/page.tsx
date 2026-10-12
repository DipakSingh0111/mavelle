import React from "react";
import PageBanner from "../components/common/PageBanner";
import BlogDetailContent from "../components/blog/BlogDetailContent";

export default function BlogDetailPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="BLOG DETAIL" breadcrumbText="BLOG DETAIL" />

      {/* 2. Blog Detail Content matching screenshot */}
      <BlogDetailContent />
    </div>
  );
}
