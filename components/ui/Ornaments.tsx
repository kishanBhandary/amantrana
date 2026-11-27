import React from "react";

export const LotusEmblem: React.FC<{ className?: string }> = ({
  className = "w-7 h-7 text-[#C69749]",
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M32 10C27 18 25 27 32 38C39 27 37 18 32 10Z"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M32 38C22 33 17 24 19 16C24 20 28 28 32 38Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M32 38C42 33 47 24 45 16C40 20 36 28 32 38Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M32 40C20 40 11 33 10 25C16 26 24 31 32 40Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M32 40C44 40 53 33 54 25C48 26 40 31 32 40Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M16 46C22 43 27 42 32 42C37 42 42 43 48 46"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="32" cy="48" r="2" fill="currentColor" />
  </svg>
);

export const CornerFiligree: React.FC<{ className?: string }> = ({
  className = "w-8 h-8 text-[#C69749]",
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 40V14C4 8.47715 8.47715 4 14 4H40"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M10 30V16C10 12.6863 12.6863 10 16 10H30"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeOpacity="0.65"
    />
    <circle cx="10" cy="10" r="2.2" fill="currentColor" fillOpacity="0.7" />
  </svg>
);

export const WaxSealSvg: React.FC<{ className?: string }> = ({
  className = "w-20 h-20",
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M50 6C57 6 61 10 67 11C73 12 79 14 83 19C87 24 89 31 92 37C95 43 95 50 93 56C91 62 90 69 86 75C82 81 76 85 70 88C64 91 57 94 50 94C43 94 36 91 30 88C24 85 18 81 14 75C10 69 9 62 7 56C5 50 5 43 8 37C11 31 13 24 17 19C21 14 27 12 33 11C39 10 43 6 50 6Z"
      fill="#C69749"
    />
    <circle
      cx="50"
      cy="50"
      r="32"
      fill="#A87B32"
      stroke="#F7E7B4"
      strokeWidth="1.5"
      strokeOpacity="0.7"
    />
    <circle
      cx="50"
      cy="50"
      r="26"
      stroke="#FAF5EE"
      strokeWidth="0.9"
      strokeDasharray="2 3"
      strokeOpacity="0.75"
    />
    <text
      x="50"
      y="57"
      textAnchor="middle"
      fill="#FAF5EE"
      fontSize="24"
      fontFamily="serif"
      fontWeight="600"
    >
      श्री
    </text>
  </svg>
);

export const MandalaWatermark: React.FC<{ className?: string }> = ({
  className = "w-64 h-64 text-[#C69749]",
}) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="24" stroke="currentColor" strokeWidth="0.9" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 100 100)`}>
        <path
          d="M100 10C106 24 106 38 100 52C94 38 94 24 100 10Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="currentColor"
          fillOpacity="0.06"
        />
      </g>
    ))}
  </svg>
);

export const PetalSvg: React.FC<{
  variant?: "rose" | "jasmine";
  className?: string;
}> = ({ variant = "rose", className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {variant === "rose" ? (
      <path
        d="M16 4C22 8 26 15 24 22C22 27 17 28 16 28C15 28 10 27 8 22C6 15 10 8 16 4Z"
        fill="#C86D85"
        fillOpacity="0.45"
        stroke="#C86D85"
        strokeOpacity="0.6"
        strokeWidth="1"
      />
    ) : (
      <path
        d="M16 4C19 10 23 12 28 16C23 20 19 22 16 28C13 22 9 20 4 16C9 12 13 10 16 4Z"
        fill="#FAF5EE"
        fillOpacity="0.85"
        stroke="#C69749"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
    )}
  </svg>
);
