import React from "react";
import "./hero.css";
// import PrimaryButton from "../blocks/PrimaryButton";
import Image from "next/image";
import backdropImage from "../../../assets/images/Group 74.png";
import PrimaryButton from "@/components/PrimaryButton";

const HeroSection = (props) => {
  console.log(props ,"DFFFFFFFFF")
  
  const formatTitle = (title) => {
    if (!title) return null;
    
    const words = title.split(' ');
    if (words.length < 2) return title;
    
    return words.map((word, index) => {
      // 2nd word (index 1) or last word
      if (index === 1 || index === words.length - 1) {
        return (
          <span key={index} className="text-gradient-primary font-bold">
            {word}
          </span>
        );
      }
      return word;
    }).reduce((prev, curr, index) => {
      return index === 0 ? [curr] : [...prev, ' ', curr];
    }, []);
  };
   
  return (
    <div className="hero-background px-2 h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="hero-heading-animate text-center h1-heading">
          {formatTitle(props?.title)}
        </h1>
        <p className="hero-subtitle-animate pt-2 md:pt-4 max-w-2xl text-center text-md md:text-lg tracking-wider">
          {/* Unlock buisness potential with cutting-edge AI solutions */}
          {props?.content}
        </p>
        <div className="hero-buttons-animate flex justify-center gap-2 mt-8 md:mt-10 pb-5 md:pb-20">
          {props?.buttons?.[0] && (
            <PrimaryButton
              text={props?.buttons?.[0].button?.text || "Get Started"}
              className={"button-background-gradient text-white"}
            />
          )}
          {props?.buttons?.[1] && (
            <PrimaryButton
              text={props?.buttons?.[1].button?.text || "Deature"}
              className={" text-primary border border-primary"}
              
            />
          )}
        </div>
        <div className="pb-7">
          <Image src={backdropImage} alt="backdrop-img" className="w-32 " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
