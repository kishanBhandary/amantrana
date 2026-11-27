"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CornerFiligree, MandalaWatermark } from "@/components/ui/Ornaments";
import { MessageCircle, ArrowUpRight, Star } from "lucide-react";

interface PackageTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  popular?: boolean;
  isCombo?: boolean;
  delivery: string;
  description: string;
  features: string[];
}

interface PackageCategory {
  id: string;
  anchorId: string;
  title: string;
  subtitle: string;
  occasionsCovered: string;
  tiers: PackageTier[];
}

const PACKAGE_CATEGORIES: PackageCategory[] = [
  {
    id: "weddings",
    anchorId: "weddings",
    title: "Wedding Invitations & Combos",
    subtitle: "Haldi • Mehendi • Sangeet • Wedding • Reception",
    occasionsCovered: "Complete suites for single ceremonies or multi-day royal weddings",
    tiers: [
      {
        id: "wedding-card",
        name: "Normal Card Design",
        price: "₹699",
        delivery: "24h Delivery",
        description:
          "High-resolution static digital card tailored in our signature pastel heritage palettes.",
        features: [
          "High-res WhatsApp image & print-ready PDF",
          "Customized Sanskrit shloka & bilingual typography",
          "Pastel Blush, Sage, Lavender, or Ivory theme",
          "2 complimentary text/date revisions",
        ],
      },
      {
        id: "wedding-video",
        name: "Video Invitation Design",
        price: "₹899",
        delivery: "24–48h Delivery",
        description:
          "Animated motion video invite with gentle floral transitions and classical Indian music.",
        features: [
          "9:16 WhatsApp portrait & 16:9 HD MP4 video",
          "Custom music track & animated diya/petal motifs",
          "Multi-event slides (Haldi, Mehendi, Wedding)",
          "2 complimentary revisions included",
        ],
      },
      {
        id: "wedding-website",
        name: "Wedding Website Design",
        price: "₹3,999",
        badge: "MOST POPULAR",
        popular: true,
        delivery: "48h Delivery",
        description:
          "Interactive digital wedding suite with full schedule, countdown, Google Maps, RSVP & gallery.",
        features: [
          "Interactive ceremony schedule & live countdown",
          "One-tap Google Maps venue directions",
          "Digital RSVP form & couple photo gallery",
          "Custom shareable link + static WhatsApp card",
        ],
      },
      {
        id: "wedding-combo",
        name: "Wedding Complete Combo",
        price: "₹4,999",
        originalPrice: "₹5,597",
        badge: "COMPLETE COMBO • SAVE ₹598",
        isCombo: true,
        delivery: "48h Priority Delivery",
        description:
          "All-in-one matching suite combining Normal Card + Video Invitation + Wedding Website.",
        features: [
          "Normal Card Design (WhatsApp + Print PDF)",
          "Animated Video Invitation (9:16 & 16:9 MP4)",
          "Full Interactive Wedding Website with RSVP",
          "Priority support & 4 complimentary revisions",
        ],
      },
    ],
  },
  {
    id: "parties",
    anchorId: "parties",
    title: "Birthday & Party Packages",
    subtitle: "First Birthdays • Milestone Parties • Theme Celebrations",
    occasionsCovered: "Playful pastel designs for kids, milestone birthdays, and evening soirées",
    tiers: [
      {
        id: "birthday-card",
        name: "Simple Card Design",
        price: "₹399",
        delivery: "24h Delivery",
        description:
          "Charming pastel static invite ready to share effortlessly on WhatsApp and family groups.",
        features: [
          "High-res WhatsApp image & printable PDF",
          "Custom name, age & theme color palette",
          "Venue & party timing highlights",
          "2 complimentary revisions included",
        ],
      },
      {
        id: "birthday-video",
        name: "Video Invitation Design",
        price: "₹499",
        badge: "MOST POPULAR",
        popular: true,
        delivery: "24–48h Delivery",
        description:
          "Joyful animated birthday video invitation with cheerful music and custom photo/text.",
        features: [
          "9:16 vertical MP4 optimized for WhatsApp",
          "Playful pastel animations & curated music",
          "Custom photo, dress-code & venue slide",
          "2 complimentary revisions included",
        ],
      },
      {
        id: "birthday-website",
        name: "Birthday Website Design",
        price: "₹1,999",
        delivery: "48h Delivery",
        description:
          "Interactive celebration page with party timeline, photo gallery, map & guest RSVP.",
        features: [
          "Live party countdown & venue Google Maps",
          "Interactive RSVP & meal/gift preferences",
          "Milestone photo gallery & wish wall",
          "Custom shareable link for guests",
        ],
      },
      {
        id: "birthday-combo",
        name: "Party Complete Combo",
        price: "₹2,499",
        originalPrice: "₹2,897",
        badge: "COMPLETE COMBO • SAVE ₹398",
        isCombo: true,
        delivery: "48h Priority Delivery",
        description:
          "Everything you need for a memorable party: Simple Card + Video Invite + Birthday Website.",
        features: [
          "Simple Card Design (WhatsApp + Print PDF)",
          "Animated Video Invitation (9:16 MP4)",
          "Full Interactive Birthday Website with RSVP",
          "Unified theme + 3 complimentary revisions",
        ],
      },
    ],
  },
  {
    id: "other-events",
    anchorId: "other-events",
    title: "Other Events & Celebration Combos",
    subtitle: "Griha Pravesh • Baby Shower • Religious Poojas • Engagements • Anniversaries",
    occasionsCovered: "Auspicious Vedic & milestone invitations crafted with traditional grace",
    tiers: [
      {
        id: "other-card",
        name: "Classic Card Design",
        price: "₹499",
        delivery: "24h Delivery",
        description:
          "Auspicious digital invitation with traditional kalash, lotus, and Vedic shloka accents.",
        features: [
          "High-res WhatsApp image & print-ready PDF",
          "Authentic occasion-specific Sanskrit shloka",
          "Soft Blush, Sage, Lavender, or Peach palette",
          "2 complimentary revisions included",
        ],
      },
      {
        id: "other-video",
        name: "Video Invitation Design",
        price: "₹699",
        badge: "MOST POPULAR",
        popular: true,
        delivery: "24–48h Delivery",
        description:
          "Serene animated e-invite with devotional or classical instrumental background music.",
        features: [
          "Full HD 9:16 WhatsApp motion video",
          "Animated floral borders & glowing diya effects",
          "Ceremony muhurtham & venue details",
          "2 complimentary revisions included",
        ],
      },
      {
        id: "other-website",
        name: "Event Microsite",
        price: "₹2,499",
        delivery: "48h Delivery",
        description:
          "Dedicated celebration webpage with ceremony timings, Google Maps, and digital RSVP.",
        features: [
          "Custom event page with schedule & countdown",
          "One-tap Google Maps & host contact links",
          "Guest RSVP confirmation tracking",
          "Custom shareable link for family & friends",
        ],
      },
      {
        id: "other-combo",
        name: "Celebration Complete Combo",
        price: "₹3,199",
        originalPrice: "₹3,697",
        badge: "COMPLETE COMBO • SAVE ₹498",
        isCombo: true,
        delivery: "48h Priority Delivery",
        description:
          "Complete matching suite combining Classic Card + Video Invitation + Event Microsite.",
        features: [
          "Classic Card Design (WhatsApp + Print PDF)",
          "Animated Video Invitation (9:16 MP4)",
          "Full Interactive Event Microsite with RSVP",
          "Unified theme + 3 complimentary revisions",
        ],
      },
    ],
  },
];

const IndianFlowerBullet: React.FC = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 shrink-0 mt-0.5 text-[#C69749]"
    aria-hidden="true"
  >
    <path
      d="M10 2.5C11.4 5.2 11.4 7.3 10 10C8.6 7.3 8.6 5.2 10 2.5Z"
      fill="#C69749"
      fillOpacity="0.85"
    />
    <path
      d="M17.5 10C14.8 11.4 12.7 11.4 10 10C12.7 8.6 14.8 8.6 17.5 10Z"
      fill="#C69749"
      fillOpacity="0.85"
    />
    <path
      d="M10 17.5C8.6 14.8 8.6 12.7 10 10C11.4 12.7 11.4 14.8 10 17.5Z"
      fill="#C69749"
      fillOpacity="0.85"
    />
    <path
      d="M2.5 10C5.2 8.6 7.3 8.6 10 10C7.3 11.4 5.2 11.4 2.5 10Z"
      fill="#C69749"
      fillOpacity="0.85"
    />
    <circle cx="10" cy="10" r="1.8" fill="#4A1D2C" />
  </svg>
);

export const PackagesSection: React.FC = () => {
  const getWhatsAppLink = (categoryTitle: string, tierName: string, price: string) => {
    const text = encodeURIComponent(
      `Namaste Amantrana! I would like to order the *${categoryTitle} – ${tierName}* (${price}) package.`
    );
    return `https://wa.me/919164490335?text=${text}`;
  };

  return (
    <section id="packages" className="relative py-14 sm:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-16 relative z-10">
        <SectionHeader
          shloka="|| शुभं भवतु कल्याणम् ||"
          badge="Transparent Pricing & Combos"
          title="Curated Packages"
          subtitle="Complete suites for single ceremonies or multi-day royal weddings"
        />

        {/* Quick Jump Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {PACKAGE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.anchorId}`}
              className="px-5 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.14em] bg-[#FAF6EE]/95 text-[#4A1D2C] border border-[#C69749]/55 hover:bg-[#441E29] hover:text-[#D4AF37] hover:border-[#C69749] shadow-2xs transition-all duration-200"
            >
              {cat.id === "weddings"
                ? "Weddings"
                : cat.id === "parties"
                ? "Birthday Parties"
                : "Other Events"}
            </a>
          ))}
        </div>

        {/* All Three Categories */}
        <div className="space-y-16">
          {PACKAGE_CATEGORIES.map((category) => (
            <div key={category.id} id={category.anchorId} className="scroll-mt-24">
              {/* Category Header */}
              <div className="text-center mb-9 rounded-2xl bg-[#FAF6EE]/92 backdrop-blur-md border border-[#C69749]/35 px-4 py-4 sm:bg-transparent sm:backdrop-blur-none sm:border-0 sm:p-0">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A6E2A] mb-1">
                  {category.subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-4xl font-semibold text-[#4A1D2C]">
                  {category.title}
                </h3>
                <p className="font-sans text-sm text-[#5C4A46] mt-1.5">
                  {category.occasionsCovered}
                </p>
              </div>

              {/* Spacious 2x2 Luxury Editorial Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 items-stretch">
                {category.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                      tier.isCombo || tier.popular
                        ? "bg-[#FAF1F1]/94 backdrop-blur-md border border-[#C69749]/75 shadow-[0_14px_38px_rgba(74,29,44,0.1)] hover:shadow-[0_18px_44px_rgba(198,151,73,0.22)]"
                        : "bg-[#FAF6EE]/94 backdrop-blur-md border border-[#C69749]/55 shadow-[0_10px_32px_rgba(74,29,44,0.07)] hover:shadow-[0_16px_38px_rgba(198,151,73,0.18)]"
                    }`}
                  >
                    {/* Delicate Golden Mandala Watermark */}
                    <div className="absolute -right-12 -bottom-12 w-56 h-56 pointer-events-none opacity-[0.07] transition-transform duration-700 group-hover:rotate-12">
                      <MandalaWatermark className="w-full h-full text-[#C69749]" />
                    </div>

                    {/* Inner Antique-Gold Hairline Filigree Frame */}
                    <div className="absolute inset-2.5 rounded-[20px] border border-[#C69749]/25 pointer-events-none" />

                    {/* Traditional Ornamental Corners */}
                    <CornerFiligree className="absolute top-3.5 left-3.5 w-5 h-5 text-[#C69749]/65 pointer-events-none" />
                    <CornerFiligree className="absolute top-3.5 right-3.5 w-5 h-5 text-[#C69749]/65 pointer-events-none scale-x-[-1]" />
                    <CornerFiligree className="absolute bottom-3.5 left-3.5 w-5 h-5 text-[#C69749]/65 pointer-events-none scale-y-[-1]" />
                    <CornerFiligree className="absolute bottom-3.5 right-3.5 w-5 h-5 text-[#C69749]/65 pointer-events-none scale-[-1]" />

                    <div className="relative z-10">
                      {/* Luxe Top Tag / Banner */}
                      {tier.badge && (
                        <div className="mb-4">
                          {tier.isCombo ? (
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#441E29] to-[#6B283E] border border-[#C69749]/65 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F7E7B4] shadow-2xs">
                              {tier.badge}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C69749] to-[#A87B32] font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FAF5EE] shadow-2xs">
                              <Star className="w-3 h-3 fill-current" />
                              <span>{tier.badge}</span>
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title & Oversized Maroon-Gold Serif Price */}
                      <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#C69749]/25">
                        <div>
                          <h4 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#4A1D2C] leading-tight">
                            {tier.name}
                          </h4>
                          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6E8560] mt-1.5">
                            {tier.delivery}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="font-serif text-4xl sm:text-[42px] font-bold tracking-tight leading-none bg-gradient-to-br from-[#4A1D2C] via-[#6B283E] to-[#9E722E] bg-clip-text text-transparent">
                            {tier.price}
                          </div>
                          {tier.originalPrice && (
                            <span className="font-sans text-xs text-[#5C4A46]/65 line-through mt-0.5 inline-block">
                              {tier.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm text-[#5C4A46] leading-relaxed my-4">
                        {tier.description}
                      </p>

                      {/* Traditional Indian Flower Bullet List */}
                      <ul className="space-y-3 mb-7">
                        {tier.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <IndianFlowerBullet />
                            <span className="font-sans text-[13px] text-[#5C4A46] leading-relaxed">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Majestic Filled Royal Plum-Maroon Capsule CTA */}
                    <a
                      href={getWhatsAppLink(category.title, tier.name, tier.price)}
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 w-full rounded-full bg-[#441E29] hover:bg-[#5A2434] border border-[#C69749]/85 ring-1 ring-inset ring-[#F7E7B4]/20 px-4 py-3.5 flex items-center justify-between gap-2 shadow-[0_6px_18px_rgba(68,30,41,0.22)] hover:shadow-[0_10px_26px_rgba(212,175,55,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37] text-center leading-tight">
                        ORDER {tier.name.toUpperCase()}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
