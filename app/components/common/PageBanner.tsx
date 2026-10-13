"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { PageBannerSectionProps, BreadcrumbItem } from "@/types/mavelle.types";

export type { BreadcrumbItem };
export type PageBannerProps = PageBannerSectionProps;

export default function PageBanner({
  title,
  breadcrumb,
  breadcrumbText,
  backgroundImage = "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1600&auto=format&fit=crop",
}: PageBannerSectionProps) {
  // Default breadcrumbs if not provided
  const items: BreadcrumbItem[] = breadcrumb || [
    { label: "HOME", href: "/" },
    { label: breadcrumbText || title },
  ];

  return (
    <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[390px] flex items-center justify-center overflow-hidden bg-[#0A0D0B]">
      {/* Background Image with Dark Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src =
              "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1600&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
      </div>

      {/* Banner Content: Title and Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[0.2em] uppercase drop-shadow-md">
          {title}
        </h1>

        {items && items.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2.5 mt-3 text-xs sm:text-[13px] tracking-widest font-semibold uppercase"
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <React.Fragment key={index}>
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        isLast ? "text-white font-bold" : "text-white/80"
                      }
                    >
                      {item.label}
                    </span>
                  )}

                  {!isLast && (
                    <span
                      className="text-white/80 select-none text-[11px]"
                      aria-hidden="true"
                    >
                      &gt;
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}
      </motion.div>
    </section>
  );
}
