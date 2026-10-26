import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Mavelle Café & Bistro",
  description: "Good Food • Great Coffee • Better Moments",
};

import { sectionsData } from "@/types/mavelle.types";

import ScrollToTop from "@/components/common/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sectionData = sectionsData;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white text-[#1c1c1c]">
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Suspense
          fallback={
            <div className="w-full h-[84px] bg-white border-b border-[#f1f1f1]" />
          }
        >
          <Navbar data={sectionData?.Header?.variants?.MavelleHeader1} />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer
          data={sectionData?.Footer?.variants?.MavelleFooter1}
          globalData={sectionData?.Global?.variants?.MavelleGlobal1}
        />
      </body>
    </html>
  );
}
