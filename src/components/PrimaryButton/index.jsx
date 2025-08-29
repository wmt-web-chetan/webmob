"use client";
import React from "react";

const PrimaryButton = ({ text, className, method, icon }) => {
  return (
    <div>
      <button
        className={`${className} cursor-pointer rounded-full p-2 px-3  text-sm md:px-4 `}
        onClick={method}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
