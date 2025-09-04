import Image from "next/image";
import React from "react";

const AwardCard = ({ image, text }) => {
  return (
    <div className="rounded-3xl bg-[#FFF] shadow-[0 0 16px 0 rgba(0, 0, 0, 0.08)] w-40 sm:w-44 lg:w-48 flex flex-col items-center justify-center py-4 sm:py-5 lg:py-6">
      {/* Badge Circle */}
      <div className="rounded-full flex items-center justify-center relative"> 
        <div className="w-16 sm:w-18 lg:w-20 rounded-full bg-white flex items-center justify-center">
          {image ? (
            <img src={image} alt="Award Logo" className="w-full object-contain" />
          ) : (
            <span className="text-orange-500 font-bold text-lg sm:text-xl">∞</span>
          )}
        </div>
      </div>

      {/* Text */}
      <p className="mt-3 sm:mt-4 text-center text-text-primary font-medium text-sm sm:text-base px-2 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default AwardCard;
