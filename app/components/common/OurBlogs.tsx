"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogNewsSectionProps } from "@/types/mavelle.types";

export default function OurBlogs({ data }: BlogNewsSectionProps) {
  const blogNews = data;
  if (!blogNews) return null;

  const subheading = blogNews.badge;
  const titlePart1 = blogNews.heading?.main;
  const titlePart2 = blogNews.heading?.highlight;
  const description = blogNews.description;
  const blogs = blogNews.list || [];

  return (
    <section
      id="blog"
      className="relative w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          {/* Subheading with trailing line */}
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D48]">
              {subheading}
            </span>
            <div className="w-10 h-[1.5px] bg-[#8C6D48]"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1F2923] leading-tight tracking-tight mb-4">
            <span>{titlePart1}</span>
            <span className="text-[#B57C3E]">{titlePart2}</span>
          </h2>

          {/* Description */}
          <p className="text-[#685D57] text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* 3 Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {blogs.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.14 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#ECE4D8] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative w-full aspect-[16/10.5] overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src =
                        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop";
                    }}
                  />

                  {/* Date Badge in Top-Left */}
                  <div className="absolute top-4 left-4 rounded-xl bg-[#A86F36] text-white px-3 py-2 text-center shadow-md min-w-[54px] z-10 select-none">
                    <span className="text-xl sm:text-2xl font-bold font-serif leading-none block">
                      {post.date.day}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-semibold block mt-1 text-white/90">
                      {post.date.monthYear}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 pb-4">
                  {/* Category with Trailing Line */}
                  <div className="flex items-center space-x-2 mb-2.5">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#B57C3E]">
                      {post.category}
                    </span>
                    <div className="w-6 h-[1.5px] bg-[#B57C3E]"></div>
                  </div>

                  {/* Blog Title */}
                  <h3 className="font-serif font-bold text-lg sm:text-[20px] text-[#1F2923] leading-snug group-hover:text-[#B57C3E] transition-colors mb-2.5">
                    <Link href={post.link || "#"}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#685D57] text-xs sm:text-[13.5px] leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Button Link */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                <Link
                  href={post.link || "#"}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-wider text-[#8C6D48] group-hover:text-[#1F2923] transition-colors uppercase"
                >
                  <span>READ MORE</span>
                  <span className="w-8 h-8 rounded-full border border-[#B57C3E] text-[#B57C3E] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B57C3E] group-hover:text-white group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
