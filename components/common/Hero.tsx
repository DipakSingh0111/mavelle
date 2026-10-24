import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "@/types/mavelle.types";
import Reveal from "./Reveal";

export default function Hero({ data }: HeroSectionProps) {
  if (!data) return null;

  const taglineParts = (data.badge || "").split("◇").map((part) => part.trim());

  return (
    <section id="home" className="relative w-full bg-white overflow-hidden">
      
      <div className="relative w-full min-h-[600px] sm:min-h-[640px] lg:min-h-0 lg:aspect-[1931/814]">
        <Image
          src={data.backgroundImage}
          alt="Fresh Flavours & Bigger Moments at Mavelle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_bottom] lg:object-bottom select-none"
        />

        <div className="absolute inset-x-0 top-0 bottom-[20%] flex items-center">
          <div className="w-full max-w-[1436px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-[700px]">
              <Reveal direction="down" distance={20} delay={0.1}>
              <p className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-white text-[10px] sm:text-[11px] xl:text-[13px] font-medium tracking-[0.28em] uppercase">
                {taglineParts.map((part, i) => (
                  <React.Fragment key={part}>
                    {i > 0 && (
                      <span
                        className="inline-block w-[7px] h-[7px] rounded-full border-[1.5px] border-[#d39a5b]"
                        aria-hidden="true"
                      />
                    )}
                    <span>{part}</span>
                  </React.Fragment>
                ))}
              </p>
              </Reveal>

              <Reveal delay={0.25} duration={0.9} distance={44}>
              <h1 className="mt-4 sm:mt-5 font-serif font-semibold tracking-[-0.01em] leading-[1.08] text-[34px] sm:text-[46px] lg:text-[52px] xl:text-[60px] 2xl:text-[66px]">
                <span className="flex items-center gap-2.5 sm:gap-3 text-white whitespace-nowrap">
                  {data.heading?.main?.replace("\n", "") || "Fresh Flavours"}
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 xl:w-9 xl:h-9 text-[#d39a5b] shrink-0"
                    viewBox="0 0 40 40"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 36C8 22 18 10 36 4C35 20 26 32 6 36Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 34C15 24 22 16 32 8"
                      stroke="#1a1410"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17 25L14 18M22 19L20 13M17 25L24 24M22 19L28 18"
                      stroke="#1a1410"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="block text-[#d39a5b] whitespace-nowrap">
                  {data.heading?.highlight || "Bigger Moments"}
                </span>
              </h1>
              </Reveal>

              <Reveal delay={0.45}>
              <p className="mt-4 sm:mt-5 max-w-[440px] xl:max-w-[520px] text-white/95 text-sm sm:text-[15px] xl:text-[18px] leading-relaxed">
                {data.description}
              </p>
              </Reveal>

              <Reveal delay={0.65}>
              <div className="mt-6 sm:mt-7 xl:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href={data.primaryCta?.href || "#menu"}
                  className="group inline-flex items-center gap-4 xl:gap-6 rounded-full border-[1.5px] border-[#d39a5b] bg-black/40 hover:bg-black/60 backdrop-blur-[2px] pl-6 xl:pl-7 pr-1.5 py-1.5 transition-colors duration-300"
                >
                  <span className="text-white text-[11px] xl:text-[13px] font-semibold tracking-[0.12em] uppercase">
                    {data.primaryCta?.label || "EXPLORE OUR MENU"}
                  </span>
                  <span className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-[#d39a5b] group-hover:bg-[#e0a866] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>

                <Link
                  href={data.secondaryCta?.href || "#reservation"}
                  className="inline-flex items-center justify-center rounded-full border-[1.5px] border-white/80 hover:border-white bg-black/30 hover:bg-black/50 backdrop-blur-[2px] px-7 xl:px-9 h-[47px] xl:h-[55px] text-white text-[11px] xl:text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors duration-300"
                >
                  {data.secondaryCta?.label || "RESERVE A TABLE"}
                </Link>
              </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
