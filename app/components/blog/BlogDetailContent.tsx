"use client";

import React from "react";
import { Calendar, User, Clock, Quote } from "lucide-react";
import mavelleData from "@/data/mavelle.json";

export default function BlogDetailContent() {
  const { blogDetail } = mavelleData;

  return (
    <article className="relative w-full bg-[#FCFBF8] py-14 sm:py-18 lg:py-20">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Article Header */}
        <header className="mb-8 sm:mb-10">
          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1F2923] leading-[1.15] tracking-tight mb-4 sm:mb-5">
            <span>{blogDetail.titlePart1}</span>{" "}
            <span className="text-[#B57C3E] block sm:inline">
              {blogDetail.titlePart2}
            </span>
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-[#685D57] text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mb-6 font-normal">
            {blogDetail.description}
          </p>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-[13.5px] text-[#7C6E66] border-b border-[#ECE4D8] pb-6">
            {/* Date */}
            <div className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#B57C3E] stroke-[2]" />
              <span>{blogDetail.meta.date}</span>
            </div>

            <span className="text-stone-300">|</span>

            {/* Author */}
            <div className="inline-flex items-center gap-2">
              <User className="w-4 h-4 text-[#B57C3E] stroke-[2]" />
              <span>{blogDetail.meta.author}</span>
            </div>

            <span className="text-stone-300">|</span>

            {/* Read Time */}
            <div className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B57C3E] stroke-[2]" />
              <span>{blogDetail.meta.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Main Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#ECE4D8] bg-stone-900 mb-10 sm:mb-12">
          <img
            src={blogDetail.mainImage}
            alt={blogDetail.mainImageAlt}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src =
                "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop";
            }}
          />
        </div>

        {/* Article Body */}
        <div className="space-y-8 sm:space-y-9 text-[#4A403A]">
          {/* Lead Paragraph */}
          <p className="text-sm sm:text-base md:text-[16.5px] text-[#5A504B] leading-relaxed font-normal">
            {blogDetail.leadParagraph}
          </p>

          {/* Dynamic Content Sections */}
          {blogDetail.sections.map((section, index) => (
            <div key={index} className="space-y-2.5">
              <h2 className="font-serif font-bold text-xl sm:text-2xl lg:text-[26px] text-[#1F2923] tracking-tight">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] text-[#5A504B] leading-relaxed font-normal">
                {section.content}
              </p>
            </div>
          ))}

          {/* Quote Card */}
          <div className="relative mt-10 sm:mt-12 p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#F9F5EE] border border-[#E8DEC8] shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            {/* Quote Icon with Golden Divider */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="text-[#C68B4D]">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 fill-[#C68B4D]/25 stroke-[1.5]" />
              </div>
              <div className="hidden sm:block w-[1.5px] h-14 bg-[#D6C5B0]"></div>
            </div>

            {/* Quote Content */}
            <div className="flex-1">
              <p className="font-serif italic text-lg sm:text-xl lg:text-[22px] text-[#1F2923] leading-snug">
                &ldquo;{blogDetail.quote.text}&rdquo;
              </p>
              <p className="text-right mt-3 text-xs sm:text-[12.5px] font-bold tracking-[0.2em] text-[#B57C3E] uppercase">
                &mdash; {blogDetail.quote.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
