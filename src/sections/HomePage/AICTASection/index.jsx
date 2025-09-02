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

const AICTASection = (props) => {
  console.log(props,"propssss")
  
  if (!props?.mainTitle && !props?.subtitle) {
    return null;
  }
  
  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length < 2) return title;
    
    return words.map((word, index) => {
      if (index === 1) {
        return (
          <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            {word}
          </span>
        );
      }
      return word;
    }).reduce((prev, curr, index) => {
      return index === 0 ? [curr] : [...prev, " ", curr];
    }, []);
  };
  
  return (
    <section className="relative h-auto flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 custom-bg">
      <Image src={bg1} alt='design icon' className='hidden lg:block' />
      <Image src={bg2} className='right-[20%] absolute bottom-0 hidden lg:block' alt='design icon'  />
      <Image src={ellipse} className='right-[2%] absolute bottom-0 hidden lg:block' alt='design icon' />
      <Image src={spark} className='right-[10%] absolute top-24 hidden lg:block' alt='design icon' />
      <Image src={bg3} className='right-0 absolute top-0 rotate-180 hidden lg:block' alt='design icon' />

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
      <div className="relative z-10 px-4 sm:px-8 lg:px-48 text-center sm:text-start text-white flex flex-col items-start  py-12 sm:py-16 lg:py-20">
        <div className="mb-6 sm:mb-14">
          {props?.mainTitle && (
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[40px] font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              {formatTitle(props.mainTitle)}
            </h1>
          )}
          
          {props?.subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-[24px] !text-white max-w-sm sm:max-w-md lg:max-w-6xl mx-auto leading-relaxed">
              {props.subtitle}
            </p>
          )}
        </div>
        
        {/* CTA Buttons */}
        {(props?.primaryButton || props?.secondaryButton) && (
          <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 !justify-center mx-auto lg:mx-0 lg:justify-start items-center">
            {props?.primaryButton && (
              <PrimaryButton
                text={
                  <>
                    {props.primaryButton.text?.title}
                    <Image src={arrow} alt="arrow" className="w-5 h-5  " />
                  </>
                }
                className="button-background-gradient text-white font-semibold hover:scale-102 hover:shadow-lg transition-all duration-300"
              />
            )}
            
            {props?.secondaryButton && (
              <PrimaryButton
                text={props.secondaryButton.text?.title}
                className="border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/10 hover:scale-102 transition-all duration-300"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AICTASection;