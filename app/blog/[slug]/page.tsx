import React from "react";
import PageBanner from "../../components/common/PageBanner";
import BlogDetailContent from "../../components/blog/BlogDetailContent";
import { sectionsData } from "@/types/mavelle.types";

export function generateStaticParams() {
  const blogs = sectionsData?.BlogNews?.variants?.MavelleBlogNews1?.list || [];
  return blogs.map((b) => ({
    slug: b.link ? b.link.replace("/blog/", "") : String(b.id),
  }));
}

export default function DynamicBlogDetailPage() {
  const sectionData = sectionsData;
  const banner = sectionData?.PageBanners?.variants?.MavellePageBanners1?.pages?.blogDetail;

  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner
        title={banner?.title || "BLOG DETAIL"}
        breadcrumb={banner?.breadcrumb}
        backgroundImage={banner?.backgroundImage}
      />

      {/* 2. Blog Detail Content matching screenshot */}
      <BlogDetailContent data={sectionData?.BlogNews?.variants?.MavelleBlogNews1?.details} />
    </div>
  );
}
