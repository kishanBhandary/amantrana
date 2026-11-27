"use client";

import React from "react";

interface SectionHeaderProps {
  shloka?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  shloka,
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`relative mb-8 sm:mb-12 rounded-3xl bg-[#FAF5EE]/90 backdrop-blur-md border border-[#D9BC8C]/50 px-5 py-6 sm:bg-transparent sm:backdrop-blur-none sm:border-0 sm:p-0 shadow-[0_8px_28px_rgba(74,29,44,0.06)] sm:shadow-none ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-left"
      } ${className}`}
    >
      {shloka && (
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full gold-badge mb-3 shadow-2xs">
          <span className="font-devanagari text-xs md:text-sm tracking-wide text-[#9A6E2A]">
            {shloka}
          </span>
        </div>
      )}

      {badge && (
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#7A3248] mb-2">
          {badge}
        </p>
      )}

      <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-[#4A1D2C] leading-[1.12]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 font-sans text-base leading-relaxed text-[#5C4A46]">
          {subtitle}
        </p>
      )}

      {align === "center" && (
        <div className="flex justify-center mt-4">
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C69749] to-transparent" />
        </div>
      )}
    </div>
  );
};
