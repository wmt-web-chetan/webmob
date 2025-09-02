"use client"
import React, { useEffect, useRef } from "react";
import "./hero.css";
import Image from "next/image";
import backdropImage from "../../../assets/images/Group 74.png";
import PrimaryButton from "@/components/PrimaryButton";
import arrow from "@/assets/SVGs/arrow-up.svg";

const HeroSection = (props) => {
  console.log(props, "DFFFFFFFFF");
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  if (!props?.title && !props?.content) {
    return null;
  }

  const formatTitle = (title) => {
    if (!title) return null;

    const words = title.split(" ");
    if (words.length < 2) return title;

    return words
      .map((word, index) => {
        // 2nd word (index 1) or last word
        if (index === 1 || index === words.length - 1) {
          return (
            <span key={index} className="text-gradient-primary font-bold">
              {word}
            </span>
          );
        }
        return word;
      })
      .reduce((prev, curr, index) => {
        return index === 0 ? [curr] : [...prev, " ", curr];
      }, []);
  };

  return (
    <div className="hero-background px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 h-screen">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        onEnded={() => {
          console.log("Video ended");
        }}
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center justify-center h-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:max-w-7xl mx-auto">
        {props?.title && (
          <h1 className="hero-heading-animate text-center h1-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            {formatTitle(props.title)}
          </h1>
        )}
        {props?.content && (
          <p className="hero-subtitle-animate pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 2xl:pt-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide sm:tracking-wider">
            {props.content}
          </p>
        )}
        {props?.buttons && props.buttons.length > 0 && (
          <div className="hero-buttons-animate flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12 pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-10 2xl:pb-16">
            {props.buttons[0] && (
              <PrimaryButton
                text={
                  <span className="flex items-center gap-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl">
                    {props.buttons[0].button?.title}
                    <Image src={arrow} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                  </span>
                }
                className={"button-background-gradient text-white !px-4 py-2 sm:!px-5 sm:py-3 md:!px-6 md:py-3 lg:!px-7 lg:py-4 xl:!px-8 xl:py-4 2xl:!px-8 2xl:py-4"}
              />
            )}
            {props.buttons[1] && (
              <PrimaryButton
                text={props.buttons[1].button?.title}
                className={"text-primary border border-primary !px-4 py-2 sm:!px-5 sm:py-3 md:!px-6 md:py-3 lg:!px-7 lg:py-4 xl:!px-8 xl:py-4 2xl:!px-8 2xl:py-4 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl"}
              />
            )}
          </div>
        )}
        {props?.happyClient && (
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3 bg-transparent py-2 px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10">
            {props.happyClient.icons?.nodes && (
              <div className="flex relative w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-26 lg:h-13 xl:w-28 xl:h-14 2xl:w-32 2xl:h-16">
                {props.happyClient.icons.nodes.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon.mediaItemUrl}
                    height={100}
                    width={100}
                    alt="Happy client"
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full border-2 border-[#D8EAFF] absolute ${
                      index === 0 ? 'z-0' : 
                      index === 1 ? 'left-4 sm:left-5 md:left-6 lg:left-6.5 xl:left-7 2xl:left-8 z-10' :
                      'left-8 sm:left-10 md:left-12 lg:left-13 xl:left-14 2xl:left-16 z-20'
                    }`}
                  />
                ))}
              </div>
            )}
            {props.happyClient.text && (
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold text-text-secondary">
                {props.happyClient.text}
              </p>
            )}
          </div>
        )}
       
      </div>
    </div>
  );
};

export default HeroSection;