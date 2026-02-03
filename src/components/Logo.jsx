import React from 'react';

const Logo = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Icon: Fork with Leaf (Abstract) */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fork Tines */}
        <path
          d="M30 15V50C30 50 30 65 50 65C70 65 70 50 70 50V15"
          stroke="#1A4D2E"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M50 15V65"
          stroke="#1A4D2E"
          strokeWidth="8"
          strokeLinecap="round"
        />
        
        {/* Handle */}
        <path
          d="M50 65V95"
          stroke="#1A4D2E"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Organic Leaf wrapping */}
        <path
          d="M50 45C50 45 85 45 85 25C85 15 70 15 50 35"
          fill="#CA673A" // Terracotta Accent
          opacity="0.9"
        />
      </svg>
      {/* Text */}
      <span className="font-anton text-3xl tracking-wide text-primary">WellFed</span>
    </div>
  );
};

export default Logo;
