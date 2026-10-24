"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("a, button, [role='tab'], [data-scroll-top]");
      if (!clickable) return;

      if (clickable.tagName.toLowerCase() === "a") {
        const href = (clickable as HTMLAnchorElement).getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          
          const sectionEl = document.querySelector(href);
          if (sectionEl) {
            return;
          }
        }
      }

      const isButton = clickable.tagName.toLowerCase() === "button";
      const isRoleTab = clickable.getAttribute("role") === "tab";
      const isLink = clickable.tagName.toLowerCase() === "a";

      if (isRoleTab) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else if (isLink) {
        const href = (clickable as HTMLAnchorElement).getAttribute("href");
        
        if (href === "#" || href === "#top" || href === "/") {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
