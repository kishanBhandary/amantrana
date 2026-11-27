"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Compass, Palette, Eye, CheckCheck, Send } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      sanskrit: "प्रथम चरण",
      title: "Choose Suite",
      description:
        "Pick a pastel template or package tailored to your celebration.",
      icon: Compass,
    },
    {
      stepNumber: "02",
      sanskrit: "द्वितीय चरण",
      title: "Share Details",
      description:
        "Send names, shlokas, dates, and venue over WhatsApp.",
      icon: Palette,
    },
    {
      stepNumber: "03",
      sanskrit: "तृतीय चरण",
      title: "Preview Draft",
      description:
        "Review your high-resolution proof with complimentary revisions.",
      icon: Eye,
    },
    {
      stepNumber: "04",
      sanskrit: "चतुर्थ चरण",
      title: "Confirm Order",
      description:
        "Approve your finalized PDF, MP4 motion video, or website link.",
      icon: CheckCheck,
    },
    {
      stepNumber: "05",
      sanskrit: "पञ्चम चरण",
      title: "Share With Joy",
      description:
        "Receive delivery in 24–48 hours and share effortlessly on WhatsApp.",
      icon: Send,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-14 sm:py-24 overflow-hidden scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        <SectionHeader
          shloka="|| आरम्भो हि समृद्धये ||"
          badge="Seamless Experience"
          title="How It Works"
          subtitle="Five simple steps from choosing your pastel aesthetic to sharing sacred blessings with loved ones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.stepNumber}
                className="bg-white/92 backdrop-blur-md rounded-2xl border border-[#EDE0D1] shadow-[0_4px_20px_rgba(74,29,44,0.05)] p-5 flex flex-col items-center text-center hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative w-11 h-11 rounded-full bg-[#FAF5EE] border border-[#E5D2BC] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#9A6E2A]" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full font-sans text-[10px] font-bold bg-[#4A1D2C] text-[#FAF5EE] flex items-center justify-center">
                    {st.stepNumber}
                  </span>
                </div>

                <span className="font-devanagari text-[11px] text-[#9A6E2A] mb-1">
                  {st.sanskrit}
                </span>

                <h3 className="font-serif text-xl font-semibold text-[#4A1D2C] mb-1.5">
                  {st.title}
                </h3>
                <p className="font-sans text-xs text-[#5C4A46] leading-relaxed">
                  {st.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
