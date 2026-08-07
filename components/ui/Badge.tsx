import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F0FF]/[0.04] border border-[#00F0FF]/18 text-[#7EC8FF] backdrop-blur-md hover:border-[#00F0FF]/30 transition-colors ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
      <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}
