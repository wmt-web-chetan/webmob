"use client";
import React from "react";

const PrimaryButton = ({ text, className, method, icon }) => {
  return (
    <div>
      <button
        className={`${className} cursor-pointer rounded-full flex items-center justify-center min-w-24 sm:min-w-28 md:min-w-30 lg:min-w-32 xl:min-w-34 2xl:min-w-36 h-10 sm:h-11 md:h-12 lg:h-13 xl:h-14 2xl:h-15 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-6 2xl:px-7 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2.5 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl`}
        onClick={method}
      >
        {text}
        {icon && icon}
      </button>
    </div>
  );
};

export default PrimaryButton;
