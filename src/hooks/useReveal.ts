"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    let raf = 0;
    const reveal = () => {
      raf = 0;
      const vh = window.innerHeight;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add("in");
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(reveal);
    };
    reveal();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
