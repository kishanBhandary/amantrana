import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Tiro_Devanagari_Sanskrit,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amantrana – अमन्त्रणा • Traditional E-Invitations",
  description:
    "Every Celebration Begins with an Invitation. Beautifully crafted Indian digital invitations, motion video invites, and wedding websites with soft pastel aesthetics and regal gold details.",
  keywords: [
    "Indian wedding invitations",
    "Digital e-invitation",
    "Pastel wedding cards",
    "Amantrana",
    "Motion video invitation",
    "Haldi invitations",
    "Mehendi invites",
    "Griha Pravesh card",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${cormorant.variable} ${jakarta.variable} ${tiroDevanagari.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF5EE] font-sans text-[#5C4A46]">
        {children}
      </body>
    </html>
  );
}
