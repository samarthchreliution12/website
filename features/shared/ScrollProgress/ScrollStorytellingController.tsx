"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICE_STORY_SECTIONS } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStorytellingController() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    if (window.innerWidth >= 1024) {
      SERVICE_STORY_SECTIONS.forEach((sec, index) => {
        const el = document.getElementById(sec.id);
        if (el) {
          ScrollTrigger.create({
            trigger: el,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => {
              setActiveSectionIndex(index);
              setIsVisible(true);
              setScrollProgress(((index + 1) / SERVICE_STORY_SECTIONS.length) * 100);
            },
            onEnterBack: () => {
              setActiveSectionIndex(index);
              setIsVisible(true);
              setScrollProgress(((index + 1) / SERVICE_STORY_SECTIONS.length) * 100);
            },
          });
        }
      });

      const firstEl = document.getElementById(SERVICE_STORY_SECTIONS[0].id);
      const lastEl = document.getElementById(SERVICE_STORY_SECTIONS[SERVICE_STORY_SECTIONS.length - 1].id);

      if (firstEl && lastEl) {
        ScrollTrigger.create({
          trigger: firstEl,
          start: "top 80%",
          endTrigger: lastEl,
          end: "bottom 20%",
          onLeave: () => setIsVisible(false),
          onLeaveBack: () => setIsVisible(false),
        });
      }
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed left-8 lg:left-20 bottom-16 z-50 hidden lg:flex items-center"
          >
            <div
              className="relative w-[2px] h-[200px] bg-white/15 rounded-full overflow-visible cursor-pointer"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="w-full bg-[#00F0FF] rounded-full shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                animate={{ height: `${scrollProgress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              <div className="absolute inset-0 flex flex-col justify-between">
                {SERVICE_STORY_SECTIONS.map((sec, idx) => (
                  <div
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className="flex-1 w-6 -ml-3 cursor-pointer"
                  />
                ))}
              </div>

              <AnimatePresence>
                {hoveredIndex !== null && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 12 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      top: `${(hoveredIndex / (SERVICE_STORY_SECTIONS.length - 1)) * 88}%`,
                    }}
                    className="absolute left-full -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0D0E15]/90 border border-[#00F0FF]/30 backdrop-blur-xl shadow-2xl pointer-events-none whitespace-nowrap flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#00F0FF]">
                      {SERVICE_STORY_SECTIONS[hoveredIndex].title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
