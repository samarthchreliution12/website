import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-3xl bg-[#0D0E15]/95 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}
