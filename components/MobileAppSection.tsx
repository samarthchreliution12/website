"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Bell,
  QrCode,
  ShieldCheck,
  Globe,
  Wifi
} from "lucide-react";

const MOBILE_PILLS = [
  "Android App Development",
  "iOS App Development",
  "Cross Platform Apps",
  "Enterprise Mobility",
  "UI / UX Design",
  "API Integration",
  "Push Notifications",
  "App Maintenance & Support",
];

const MOBILE_SCREENS = [
  {
    title: "Reliution Mobile ERP",
    screen: "Sales Dashboard",
    metric: "₹4.8M Revenue Today",
    badge: "iOS & Android",
  },
  {
    title: "Inventory Scanner",
    screen: "Barcode QR Sync",
    metric: "99.8% Scan Accuracy",
    badge: "Offline Mode",
  },
  {
    title: "Enterprise Mobility",
    screen: "Field Team Tracking",
    metric: "Real-Time GPS",
    badge: "GPS Active",
  },
];

export default function MobileAppSection() {
  const [screenIndex, setScreenIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % MOBILE_SCREENS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-screen py-28 lg:py-36 flex items-center bg-[#08090E] overflow-hidden border-b border-white/5 my-12 lg:my-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(0,240,255,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F0FF]/[0.04] border border-[#00F0FF]/18 text-[#7EC8FF] backdrop-blur-md hover:border-[#00F0FF]/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
                MOBILE APP DEVELOPMENT
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Build Powerful{" "}
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Mobile Apps.
              </span> <br />
              Designed for Every Business.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Reliution designs and develops high-performance mobile applications that deliver exceptional user experiences across Android and iOS. Whether it's customer-facing applications, enterprise mobility, field service solutions, or internal business apps, we create secure, scalable, and intuitive mobile experiences that keep your business connected anywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1"
            >
              {MOBILE_PILLS.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span className="text-[11px] font-medium text-slate-200 truncate">{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="/contactus"
                className="group px-6 py-3 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Mobile Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Talk to a Mobile Expert</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative perspective-1000 flex items-center justify-center min-h-[420px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
              className="absolute -top-4 right-2 z-40 p-3 rounded-2xl bg-[#0D0E15] border border-[#00F0FF]/40 shadow-2xl backdrop-blur-md flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-8 h-8 rounded-xl bg-[#00E676]/20 border border-[#00E676] text-[#00E676] flex items-center justify-center shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">Push Notification</div>
                <div className="text-xs font-bold text-white">New Order Received #8492</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6], rotateZ: [-8, -4, -8] }}
              transition={{ duration: 6.1, ease: "easeInOut", repeat: Infinity }}
              className="absolute left-2 sm:left-6 w-44 sm:w-52 h-80 sm:h-96 rounded-[36px] bg-[#0D0E15] border-4 border-white/15 shadow-2xl backdrop-blur-2xl p-3 z-10 hidden sm:block opacity-75 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="w-16 h-3 rounded-full bg-white/20 mx-auto mb-3" />
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0D82F8]/20 text-[#00F0FF] flex items-center justify-center">
                  <QrCode className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">QR Inventory</div>
                <div className="text-[9px] font-mono text-emerald-400">Stock Synced</div>
              </div>
            </motion.div>

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
              className="relative w-56 sm:w-64 h-[400px] sm:h-[460px] rounded-[44px] bg-[#0D0E15] border-[6px] border-white/20 shadow-2xl shadow-black z-30 p-4 backdrop-blur-2xl flex flex-col justify-between scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="w-20 h-4 rounded-full bg-black mx-auto mb-2 flex items-center justify-between px-2">
                <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                <Wifi className="w-2.5 h-2.5 text-white/60" />
              </div>

              <div className="flex-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-4 space-y-3 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">
                    {MOBILE_SCREENS[screenIndex].badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#00E676]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={screenIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 py-2"
                  >
                    <div className="text-xs font-mono text-slate-400">{MOBILE_SCREENS[screenIndex].screen}</div>
                    <div className="text-base font-extrabold text-white leading-tight">
                      {MOBILE_SCREENS[screenIndex].title}
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0D82F8]/20 border border-[#0D82F8]/40 text-xs font-bold text-[#00F0FF]">
                      {MOBILE_SCREENS[screenIndex].metric}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#00F0FF]" /> 60 FPS Native
                  </span>
                  <span>v2.4 Live</span>
                </div>
              </div>

              <div className="w-24 h-1 rounded-full bg-white/30 mx-auto mt-2" />
            </motion.div>

            <motion.div
              animate={{ y: [-6, 6, -6], rotateZ: [8, 4, 8] }}
              transition={{ duration: 7.0, ease: "easeInOut", repeat: Infinity }}
              className="absolute right-2 sm:right-6 w-44 sm:w-52 h-80 sm:h-96 rounded-[36px] bg-[#0D0E15] border-4 border-white/15 shadow-2xl backdrop-blur-2xl p-3 z-10 hidden sm:block opacity-75 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="w-16 h-3 rounded-full bg-white/20 mx-auto mb-3" />
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#00E676]/20 text-[#00E676] flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Cross Platform</div>
                <div className="text-[9px] font-mono text-[#00F0FF]">Flutter & React Native</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
