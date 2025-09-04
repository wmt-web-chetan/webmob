import Image from "next/image";
import React from "react";

const CaseStudySection = () => {
  return (
    <div className="px-wrapper-v2 section-padding-y flex flex-col gap-y-8 sm:gap-y-10 xl:gap-y-14">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-gradient-primary text-3xl font-normal">
          Case Study
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-text-primary h2-heading font-bold">
            AI-Powered Customer Support Chatbot for E-Commerce
          </p>
          <p className="text-text-primary text-base sm:text-xl md:text-2xl font-normal">
            Transforming Customer Support with AI: How an E-Commerce Brand
            Reduced Response Time by 85%
          </p>
        </div>
      </div>
      <Image
        src="https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/0d6a55646e9aa800ca19a86402554b868c16be30.png"
        alt="hero-img"
        width={1800}
        height={1800}
        className=" w-full h-auto object-cover "
      />
    </div>
  );
};

export default CaseStudySection;
