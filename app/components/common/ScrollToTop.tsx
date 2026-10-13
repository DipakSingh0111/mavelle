"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  // Global handler for clicks on navigation links, buttons, and tab elements
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find if clicked element or its parent is an anchor or button or tab
      const clickable = target.closest("a, button, [role='tab'], [data-scroll-top]");
      if (!clickable) return;

      // If it's an anchor with a hash linking to an in-page section (e.g. #contact or #menu)
      if (clickable.tagName.toLowerCase() === "a") {
        const href = (clickable as HTMLAnchorElement).getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          // Allow default anchor jump/scroll for valid section ids
          const sectionEl = document.querySelector(href);
          if (sectionEl) {
            return;
          }
        }
      }

      // Check if button is for tabs, pagination, lightboxes, filter buttons, or navigation
      const isButton = clickable.tagName.toLowerCase() === "button";
      const isRoleTab = clickable.getAttribute("role") === "tab";
      const isLink = clickable.tagName.toLowerCase() === "a";

      // If it's a tab or link to another page or regular navigation button
      if (isRoleTab) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else if (isLink) {
        const href = (clickable as HTMLAnchorElement).getAttribute("href");
        // If it's a link to top (# or /) or route
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
