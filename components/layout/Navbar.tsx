"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919164490335?text=Namaste%20Amantrana!%20I%20would%20like%20to%20inquire%20about%20an%20invitation.";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Weddings", href: "#weddings" },
    { label: "Parties", href: "#parties" },
    { label: "Other Events", href: "#other-events" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-3 sm:top-4 z-50 mx-auto w-full max-w-6xl px-3 sm:px-6">
      {/* Main Outer Pill Container */}
      <header className="flex items-center justify-between gap-2 rounded-full bg-[#F6EFE6]/95 backdrop-blur-md border border-[#D9BC8C]/75 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-[0_10px_35px_rgba(74,29,44,0.08)]">
        {/* Left Brand Cluster */}
        <Link
          href="#home"
          onClick={() => setActiveHref("#home")}
          className="group flex items-center min-w-0 shrink"
        >
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#FBECEF] border border-[#D9BC8C] overflow-hidden shadow-2xs transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Amantrana Logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="ml-2 sm:ml-3 flex flex-col min-w-0">
            <span className="font-serif italic text-lg sm:text-2xl font-semibold leading-none text-[#4A1D2C] truncate">
              Amantrana
            </span>
            <span className="font-devanagari text-[10px] sm:text-[11px] font-medium tracking-wide text-[#9A6E2A] mt-0.5 truncate">
              अमन्त्रणा<span className="hidden sm:inline"> • Pastel Invites</span>
            </span>
          </div>
        </Link>

        {/* Center Inner Navigation Pill (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-[#FAF1F1]/90 border border-[#EAD4D4]/70 px-2 py-1.5">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                className={`font-sans rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[#F3DFE4] text-[#4A1D2C] font-semibold shadow-2xs"
                    : "text-[#5A4449] hover:bg-[#F3DFE4]/80 hover:text-[#4A1D2C]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#4A1D2C] hover:bg-[#61273A] px-3.5 sm:px-5 py-2 sm:py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FAF5EE] shadow-xs hover:shadow-sm transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E5C285]" />
            <span>Order<span className="hidden sm:inline"> Now</span></span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF1F1] border border-[#D9BC8C]/60 text-[#4A1D2C] hover:bg-[#F3DFE4] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden rounded-3xl bg-[#F6EFE6]/98 backdrop-blur-lg border border-[#D9BC8C]/70 p-3.5 mt-2 shadow-xl">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveHref(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-2xl font-sans text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-[#F3DFE4] text-[#4A1D2C] font-semibold"
                      : "text-[#5A4449] hover:bg-[#FAF1F1] hover:text-[#4A1D2C]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9A6E2A] shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
