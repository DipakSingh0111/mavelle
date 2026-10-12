import React from "react";
import PageBanner from "../../components/common/PageBanner";
import BlogDetailContent from "../../components/blog/BlogDetailContent";
import mavelleData from "@/data/mavelle.json";

export function generateStaticParams() {
  const blogs = mavelleData.blogsSection?.blogs || [];
  return blogs.map((b) => ({
    slug: b.link ? b.link.replace("/blog/", "") : String(b.id),
  }));
}

export default function DynamicBlogDetailPage() {
  return (
    <div className="w-full bg-[#FCFBF8] text-[#1a1a1a]">
      {/* 1. Reusable Page Banner */}
      <PageBanner title="BLOG DETAIL" breadcrumbText="BLOG DETAIL" />

      {/* 2. Blog Detail Content matching screenshot */}
      <BlogDetailContent />
    </div>
  );
}
