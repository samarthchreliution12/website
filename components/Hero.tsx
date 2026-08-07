"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  BarChart3,
  Layers,
  ShoppingBag,
  Calculator,
  Factory,
  ShoppingCart,
  Users,
  CheckCircle2
} from "lucide-react";

// ANIMATED COUNTER COMPONENT FOR HERO STATISTICS
function AnimatedHeroStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // ~2 seconds
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Smooth ease-out exponential curve
        const currentCount = Math.round(value * (1 - Math.pow(2, -10 * progress)));
        setCount(currentCount);

        if (frame >= totalFrames) {
          clearInterval(timer);
          setCount(value);
          setIsComplete(true);
        }
      }, frameDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-xl font-extrabold text-white font-mono">
      {count}
      {isComplete && <span className="text-[#00F0FF]">{suffix}</span>}
    </span>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 250, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, 2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, -4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-36 pb-20 bg-[#08090E] overflow-hidden flex items-center justify-center border-b border-white/5"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#0D82F8]/20 via-[#00F0FF]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#00F0FF]/30 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                OFFICIAL ODOO ERP IMPLEMENTATION PARTNER
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Your Trusted Odoo Partner For{" "}
              <span className="bg-gradient-to-r from-white via-[#38BDF8] to-[#00F0FF] bg-clip-text text-transparent">
                Enterprise Implementation
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              Accelerate operational efficiency with tailored Odoo ERP, CRM, and DevOps solutions. Backed by 10+ years of domain mastery and 100+ successful global enterprise deployments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="/contactus"
                className="relative px-7 py-3.5 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-sm font-semibold flex items-center gap-2 shadow-xl shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/odoo-implementation"
                className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/15 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Odoo Services
              </a>
            </motion.div>

            {/* HERO STATS BAR WITH ANIMATED COUNTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10"
            >
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <AnimatedHeroStat value={10} suffix="+" />
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Years Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <AnimatedHeroStat value={100} suffix="+" />
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Global Clients</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <AnimatedHeroStat value={100} suffix="+" />
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Deployments</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <AnimatedHeroStat value={30} suffix="+" />
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Odoo Experts</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative perspective-1000">
            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                y: { duration: 6, ease: "easeInOut", repeat: Infinity },
              }}
              className="relative w-full p-6 rounded-3xl bg-[#0D0E15]/90 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-2xl grid grid-cols-12 gap-4"
            >
              <div className="col-span-12 flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">reliution.odoo.enterprise/dashboard</span>
                </div>
                <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">
                  LIVE ODOO ENGINE
                </span>
              </div>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.2, ease: "easeInOut", repeat: Infinity }}
                className="col-span-6 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">CRM Pipeline</span>
                  <Users className="w-4 h-4 text-[#0D82F8]" />
                </div>
                <div className="text-lg font-bold text-white mt-1">$142,500</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> +28.4% qualified deals
                </div>
                <div className="text-[9px] font-mono text-slate-500 mt-2">[ASSET: Odoo CRM Widget Placeholder]</div>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5.0, ease: "easeInOut", repeat: Infinity }}
                className="col-span-6 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Analytics BI</span>
                  <BarChart3 className="w-4 h-4 text-[#00F0FF]" />
                </div>
                <div className="text-lg font-bold text-white mt-1">99.4% Uptime</div>
                <div className="text-[10px] text-[#00F0FF] mt-1">+34.2% Efficiency gain</div>
                <div className="text-[9px] font-mono text-slate-500 mt-2">[ASSET: Analytics Widget Placeholder]</div>
              </motion.div>
              <div className="col-span-12 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Central Odoo ERP Command Hub</div>
                    <div className="text-xs text-slate-400">Synchronized ERP, HR, Sales & MRP Core</div>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#00E676]" />
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity }}
                className="col-span-4 p-3 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <ShoppingBag className="w-4 h-4 text-[#0D82F8] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Sales</span>
                <span className="text-[9px] font-mono text-slate-400">[ASSET: Sales Placeholder]</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5.4, ease: "easeInOut", repeat: Infinity }}
                className="col-span-4 p-3 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <Calculator className="w-4 h-4 text-[#00F0FF] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Accounting</span>
                <span className="text-[9px] font-mono text-slate-400">[ASSET: Accounting Placeholder]</span>
              </motion.div>
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6.2, ease: "easeInOut", repeat: Infinity }}
                className="col-span-4 p-3 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <Factory className="w-4 h-4 text-[#6366F1] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Manufacturing</span>
                <span className="text-[9px] font-mono text-slate-400">[ASSET: MRP Placeholder]</span>
              </motion.div>
              <div className="col-span-6 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <ShoppingCart className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Purchase Module</span>
                <span className="text-[9px] font-mono text-slate-400">[ASSET: Purchase Widget Placeholder]</span>
              </div>
              <div className="col-span-6 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <Layers className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Inventory Control</span>
                <span className="text-[9px] font-mono text-slate-400">[ASSET: Inventory Widget Placeholder]</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
