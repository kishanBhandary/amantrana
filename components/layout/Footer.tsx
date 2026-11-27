"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#4A1D2C] text-[#FAF5EE] pt-14 pb-10 overflow-hidden border-t border-[#C69749]/45"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#D8B888]/25">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="#home" className="inline-flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#FBECEF] border border-[#D9BC8C] overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Amantrana Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif italic text-2xl font-semibold text-[#FAF5EE]">
                  Amantrana
                </span>
                <span className="font-devanagari text-[11px] tracking-wide text-[#E8D5C4]">
                  अमन्त्रणा • Traditional Pastel E-Invitations
                </span>
              </div>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-[#F4DFE4]/85 leading-relaxed mb-5 max-w-sm">
              Every Celebration Begins with an Invitation. We craft serene pastel
              digital invitations infused with Indian heritage motifs and effortless
              WhatsApp sharing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-[#F7E7B4] mb-3.5">
              Packages
            </h4>
            <ul className="space-y-2 font-sans text-xs text-[#F4DFE4]/85">
              <li>
                <a href="#home" className="hover:text-[#F7E7B4] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#weddings" className="hover:text-[#F7E7B4] transition-colors">
                  Wedding Packages &amp; Combo
                </a>
              </li>
              <li>
                <a href="#parties" className="hover:text-[#F7E7B4] transition-colors">
                  Birthday &amp; Party Combos
                </a>
              </li>
              <li>
                <a href="#other-events" className="hover:text-[#F7E7B4] transition-colors">
                  Other Events &amp; Combos
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#F7E7B4] transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-semibold text-[#F7E7B4] mb-3.5">
              Connect With Us
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-[#F4DFE4]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C69749] shrink-0 mt-0.5" />
                <span>Mangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C69749] shrink-0" />
                <span>+91 91644 90335 (WhatsApp Concierge)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C69749] shrink-0" />
                <span>theamantrana@gmail.com</span>
              </div>
            </div>

            <div className="mt-5">
              <label className="block font-sans text-[11px] font-medium text-[#FAF5EE] mb-1.5">
                Receive New Festive Collections
              </label>
              <div className="flex items-center rounded-full bg-[#3A1521] border border-[#C69749]/45 p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-3 font-sans text-xs text-[#FAF5EE] placeholder-[#D7C3BA] focus:outline-hidden flex-1"
                />
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-[#C69749] hover:bg-[#A87B32] text-white flex items-center justify-center transition-colors shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4DFE4]/75 gap-3">
          <p className="font-devanagari text-xs tracking-wider text-[#F7E7B4]">
            || ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ||
          </p>
          <p className="font-sans">
            © 2026 Amantrana. Crafted with devotion for memorable celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
};
