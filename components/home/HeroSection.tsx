"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919164490335?text=Namaste%20Amantrana!%20I%20would%20like%20to%20order%20a%20custom%20traditional%20pastel%20e-invitation.";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-[30vh] pb-14 sm:pt-28 sm:pb-24 md:pt-24 md:pb-28 flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 md:px-16 w-full">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-2xl bg-[#FAF5EE]/88 backdrop-blur-md px-5 py-7 sm:bg-transparent sm:backdrop-blur-none sm:p-0"
          >
            {/* Shloka Pill */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/90 border border-[#E5D2BC] mb-5">
              <span className="font-devanagari text-xs md:text-sm tracking-wide text-[#9A6E2A]">
                || ॐ श्री गणेशाय नमः ||
              </span>
            </div>

            {/* Editorial Display Headline */}
            <h1 className="font-serif text-[34px] sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.12] text-[#4A1D2C]">
              Make Every Celebration{" "}
              <span className="italic font-normal text-[#7A3248]">
                Unforgettable
              </span>
            </h1>

            {/* Concise subtext */}
            <p className="mt-4 sm:mt-5 font-sans text-sm sm:text-base leading-relaxed text-[#5C4A46] max-w-xl mx-auto">
              Bespoke digital invitation cards, animated video invites, and celebration websites
              crafted with soothing pastel palettes and timeless Indian heritage motifs.
            </p>

            {/* Clean Minimalist Luxury Buttons */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4A1D2C] hover:bg-[#61273A] text-[#FAF5EE] font-sans text-xs font-semibold tracking-[0.14em] uppercase shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/95 hover:bg-[#FAF5EE] text-[#4A1D2C] border border-[#DFCBB2] hover:border-[#C69749] font-sans text-xs font-semibold tracking-[0.14em] uppercase shadow-2xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#6E8560]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Subtle Trust Strip */}
            <div className="mt-7 pt-5 border-t border-[#E5D2BC]/60 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-xs text-[#5C4A46]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6E8560]" />
                100% WhatsApp Friendly
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69749]" />
                Soft Pastel Palettes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C86D85]" />
                24–48h Delivery
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
