"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingPetals } from "@/components/home/FloatingPetals";
import { HeroSection } from "@/components/home/HeroSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-transparent text-[#5C4A46]">
      {/* Fixed Floral Drape Background Image (Mobile Portrait vs Desktop Landscape) */}
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/image.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-cover object-top md:hidden"
        />
        <Image
          src="/bg.png"
          alt=""
          fill
          unoptimized
          priority
          className="hidden md:block object-cover object-center"
        />
      </div>

      {/* Falling Rose Petals Across Website */}
      <FloatingPetals />

      {/* Sticky Frosted-Ivory Navigation */}
      <Navbar />

      {/* Clean, Customer-Focused Page Flow */}
      <main className="relative z-10 flex-1">
        <HeroSection />
        <PackagesSection />
        <HowItWorks />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
