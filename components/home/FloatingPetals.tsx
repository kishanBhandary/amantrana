"use client";

import React from "react";
import { motion } from "framer-motion";

type PinkTone = "blush" | "rose" | "mauve" | "peachPink" | "berry";

interface FallingHeart {
  id: number;
  tone: PinkTone;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  drift: number;
}

const PINK_PALETTES: Record<
  PinkTone,
  { start: string; mid: string; end: string; stroke: string }
> = {
  blush: {
    start: "#F7B2C4",
    mid: "#EA8DA4",
    end: "#D46B86",
    stroke: "#C69749",
  },
  rose: {
    start: "#EC7A9B",
    mid: "#D65A7D",
    end: "#B53B5E",
    stroke: "#D9BC8C",
  },
  mauve: {
    start: "#E091A9",
    mid: "#C56B87",
    end: "#9E4663",
    stroke: "#C69749",
  },
  peachPink: {
    start: "#F8B3B0",
    mid: "#E8888D",
    end: "#CC636E",
    stroke: "#D9BC8C",
  },
  berry: {
    start: "#C24B70",
    mid: "#9B2C50",
    end: "#721B38",
    stroke: "#E5C285",
  },
};

const FALLING_HEARTS: FallingHeart[] = [
  { id: 0, tone: "rose", x: 8, size: 22, duration: 13, delay: 0, rotate: -12, drift: 22 },
  { id: 1, tone: "blush", x: 16, size: 18, duration: 15, delay: 1.4, rotate: 16, drift: -20 },
  { id: 2, tone: "berry", x: 25, size: 24, duration: 14, delay: 2.8, rotate: -18, drift: 24 },
  { id: 3, tone: "peachPink", x: 34, size: 20, duration: 16, delay: 0.7, rotate: 14, drift: -22 },
  { id: 4, tone: "mauve", x: 43, size: 18, duration: 12, delay: 4.2, rotate: -10, drift: 20 },
  { id: 5, tone: "rose", x: 52, size: 24, duration: 15, delay: 2.1, rotate: 20, drift: -24 },
  { id: 6, tone: "blush", x: 61, size: 20, duration: 17, delay: 5.1, rotate: -16, drift: 22 },
  { id: 7, tone: "berry", x: 70, size: 22, duration: 13, delay: 3.3, rotate: 12, drift: -20 },
  { id: 8, tone: "peachPink", x: 79, size: 18, duration: 14, delay: 1.9, rotate: -20, drift: 18 },
  { id: 9, tone: "mauve", x: 87, size: 24, duration: 16, delay: 6.0, rotate: 15, drift: -22 },
  { id: 10, tone: "blush", x: 93, size: 18, duration: 13, delay: 4.6, rotate: -14, drift: -18 },
  { id: 11, tone: "rose", x: 48, size: 20, duration: 15, delay: 7.4, rotate: 18, drift: 20 },
];

const HeartLogo: React.FC<{ id: number; tone: PinkTone; size: number }> = ({
  id,
  tone,
  size,
}) => {
  const palette = PINK_PALETTES[tone];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_3px_6px_rgba(74,29,44,0.22)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`heart-grad-${id}`}
          x1="4"
          y1="3"
          x2="20"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={palette.start} />
          <stop offset="55%" stopColor={palette.mid} />
          <stop offset="100%" stopColor={palette.end} />
        </linearGradient>
      </defs>
      <path
        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
        fill={`url(#heart-grad-${id})`}
        stroke={palette.stroke}
        strokeWidth="1.15"
      />
      <path
        d="M7.2 6.2C6 6.8 5.3 7.9 5.3 9.2"
        stroke="#FFFDF9"
        strokeOpacity="0.65"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const FloatingPetals: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20"
    >
      {FALLING_HEARTS.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: "-10%",
            width: item.size,
            height: item.size,
          }}
          animate={{
            y: ["0vh", "118vh"],
            x: [0, item.drift, -item.drift * 0.5, 0],
            rotate: [item.rotate, item.rotate + 28, item.rotate - 18, item.rotate],
            opacity: [0, 0.92, 0.92, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <HeartLogo id={item.id} tone={item.tone} size={item.size} />
        </motion.div>
      ))}
    </div>
  );
};
