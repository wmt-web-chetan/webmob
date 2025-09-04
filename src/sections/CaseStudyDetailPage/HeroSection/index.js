import React from "react";
import Image from "next/image";

export const CaseHeroSection = () => {
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative">
        <div className="w-full h-full flex flex-col  items-center justify-between gap-y-8 sm:gap-y-10 xl:gap-y-14 pt-24 sm:pt-32 lg:pt-40">
          <div className="max-w-4xl flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug">
              Viva Wireless
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl font-normal text-center leading-relaxed">
              Robust B2B/B2C eCommerce and POS Solution with Dynamic Pricing,
              Marketplace Integration, and Real-Time Inventory Sync
            </p>
          </div>
          <Image
            src="https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/0d6a55646e9aa800ca19a86402554b868c16be30.png"
            alt="hero-img"
            width={1800}
            height={1800}
            className="w-full h-3/4  xl:w-full xl:h-auto object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default CaseHeroSection;
