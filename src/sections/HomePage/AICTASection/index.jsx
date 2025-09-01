import React from 'react';
import Image from 'next/image';
import CTAImage from '../../../assets/images/CTA.png';
import PrimaryButton from '@/components/PrimaryButton';
import arrow from '@/assets/SVGs/arrow-up.svg';
import bg1 from "@/assets/images/Frame.png"
import bg2 from "@/assets/images/Frame2.png"
import bg3 from "@/assets/images/Vector3.png"
import ellipse from "@/assets/images/Ellipse_CTA.png"
import spark from "../../../assets/SVGs/AI_spark.svg";
import "./index.css"

const AICTASection = () => {
  return (
    <section className="relative h-auto flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 custom-bg">
      <Image src={bg1} alt='design icon' />
      <Image src={bg2} className='right-[20%] absolute bottom-0' alt='design icon'  />
      <Image src={ellipse} className='right-[2%] absolute bottom-0' alt='design icon' />
      <Image src={spark} className='right-[10%] absolute top-24' alt='design icon' />
      <Image src={bg3} className='right-0 absolute top-0 rotate-180 ' alt='design icon' />

        {/* <Image
          src={CTAImage}
          alt="CTA Background"
          fill
          className="object-cover"
          priority
        /> */}
        {/* Gradient Overlay (optional, uncomment if needed) */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-16 text-start text-white py-12 sm:py-16 lg:py-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Smarter</span> with AI
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 max-w-sm sm:max-w-md lg:max-w-2xl mx-auto leading-lo16">
          Boost productivity, cut costs, and empower your team with the AI platform built for growth.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-center">
          <PrimaryButton
            text={
              <>
                Get Started
                <Image src={arrow} alt="arrow" className="w-5 h-5  " />
              </>
            }
            className="button-background-gradient text-white font-semibold hover:scale-102 hover:shadow-lg transition-all duration-300"
          />
          
          <PrimaryButton
            text="Contact Sales"
            className="border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/10 hover:scale-102 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AICTASection;