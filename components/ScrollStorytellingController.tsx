"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_SECTIONS = [
  { id: "service-odoo", title: "Odoo ERP Solutions" },
  { id: "service-consulting", title: "Business Process Consulting" },
  { id: "service-ai", title: "AI & Machine Learning" },
  { id: "service-automation", title: "Workflow Automation" },
  { id: "service-analytics", title: "Business Intelligence & Analytics" },
  { id: "service-mobile", title: "Mobile App Development" },
  { id: "service-software", title: "Custom Software Development" },
  { id: "service-devops", title: "DevOps & Cloud Infrastructure" },
];

export default function ScrollStorytellingController() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // LENIS SMOOTH SCROLLING INITIALIZATION
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

    // GSAP SCROLLTRIGGER SYNC WITH LENIS
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // SCROLLTRIGGER FOR ACTIVE SECTION TRACKING & PROGRESS BAR FILL
    if (window.innerWidth >= 1024) {
      SERVICE_SECTIONS.forEach((sec, index) => {
        const el = document.getElementById(sec.id);
        if (el) {
          ScrollTrigger.create({
            trigger: el,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => {
              setActiveSectionIndex(index);
              setIsVisible(true);
              setScrollProgress(((index + 1) / SERVICE_SECTIONS.length) * 100);
            },
            onEnterBack: () => {
              setActiveSectionIndex(index);
              setIsVisible(true);
              setScrollProgress(((index + 1) / SERVICE_SECTIONS.length) * 100);
            },
          });
        }
      });

      // HIDE INDICATOR BEFORE FIRST OR AFTER LAST SERVICE SECTION
      const firstEl = document.getElementById(SERVICE_SECTIONS[0].id);
      const lastEl = document.getElementById(SERVICE_SECTIONS[SERVICE_SECTIONS.length - 1].id);

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
      {/* MINIMAL LENSING.AI STYLE VERTICAL LINE PROGRESS INDICATOR (LEFT SIDE) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed left-8 lg:left-20 bottom-16 z-50 hidden lg:flex items-center"
          >
            {/* 200PX THIN VERTICAL PROGRESS LINE */}
            <div
              className="relative w-[2px] h-[200px] bg-white/15 rounded-full overflow-visible cursor-pointer"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* CYAN ACTIVE PROGRESS OVERLAY */}
              <motion.div
                className="w-full bg-[#00F0FF] rounded-full shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                animate={{ height: `${scrollProgress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* INVISIBLE CLICKABLE SEGMENTS FOR HOVER & NAVIGATION */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {SERVICE_SECTIONS.map((sec, idx) => (
                  <div
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className="flex-1 w-6 -ml-3 cursor-pointer"
                  />
                ))}
              </div>

              {/* FLOATING HOVERED / ACTIVE TOOLTIP (SLIDES IN ON RIGHT SIDE OF LINE) */}
              <AnimatePresence>
                {hoveredIndex !== null && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 12 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      top: `${(hoveredIndex / (SERVICE_SECTIONS.length - 1)) * 88}%`,
                    }}
                    className="absolute left-full -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0D0E15]/90 border border-[#00F0FF]/30 backdrop-blur-xl shadow-2xl pointer-events-none whitespace-nowrap flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#00F0FF]">
                      {SERVICE_SECTIONS[hoveredIndex].title}
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
