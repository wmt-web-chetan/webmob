"use client";
import React from "react";

const Star = ({ filled = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
      className="inline-block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-16 w-auto"
    >
      <defs>
        <linearGradient id="starGradient" x1="4.13963" y1="2.7501" x2="51.3945" y2="15.661" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2A9FFF" />
          <stop offset="1" stopColor="#2C23E8" />
        </linearGradient>
        <clipPath id="starClip">
          <path d="M21.0979 1.8541C21.6966 0.011477 24.3034 0.0114799 24.9021 1.8541L28.8374 13.9656C29.1051 14.7896 29.873 15.3475 30.7395 15.3475H43.4742C45.4117 15.3475 46.2172 17.8268 44.6498 18.9656L34.3472 26.4509C33.6462 26.9601 33.3529 27.8629 33.6206 28.6869L37.5559 40.7984C38.1546 42.641 36.0456 44.1732 34.4782 43.0344L24.1756 35.5492C23.4746 35.0399 22.5254 35.0399 21.8244 35.5492L11.5218 43.0344C9.95438 44.1732 7.84542 42.641 8.44413 40.7984L12.3794 28.6869C12.6471 27.8629 12.3538 26.9601 11.6528 26.4509L1.35021 18.9656C-0.217216 17.8268 0.588336 15.3475 2.52578 15.3475H15.2605C16.127 15.3475 16.8949 14.7896 17.1626 13.9656L21.0979 1.8541Z" />
        </clipPath>
      </defs>

      {/* Gradient fill first */}
      <rect
        width={`${filled * 100}%`}
        height="100%"
        fill="url(#starGradient)"
        clipPath="url(#starClip)"
      />

      {/* Gray overlay for the empty part */}
      {filled < 1 && (
        <rect
          x={`${filled * 100}%`}
          width={`${(1 - filled) * 100}%`}
          height="100%"
          fill="#E5E7EB"
          clipPath="url(#starClip)"
        />
      )}
    </svg>
  );
};


const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let fill = 0;
    if (rating >= i) fill = 1; // full star
    else if (rating + 1 > i) fill = rating - (i - 1); // fractional star
    stars.push(<Star key={i} filled={fill} />);
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
