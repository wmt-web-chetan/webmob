"use client"
import Image from "next/image";
import spark from "../../../assets/SVGs/spark.svg";
import PrimaryButton from "@/components/PrimaryButton";
import { useState, useEffect, useRef } from "react";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // 60 FPS (16ms per frame)
    const step = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 100); // Slight delay to ensure visibility
    return () => clearTimeout(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{isVisible ? count : 0}</span>;
};

export default function StatisticsSection(props) {
  console.log(props, "statistics props")
  
  if (!props?.metrics || props.metrics.length === 0) {
    return null;
  }
  
  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    
    return words.map((word, index) => {
      if (index < 2) {
        return (
          <span key={index} className="text-gradient-primary font-bold">
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
    <main className="h-auto bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-12 sm:py-16 md:py-18 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Section */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 text-center md:text-left">
            <div className="space-y-4 md:space-y-5">
              {props?.title && (
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl  leading-tight">
                  {formatTitle(props.title)}
                </h1>
              )}

              {props?.subtitle && (
                <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-0">
                  {props.subtitle}
                </p>
              )}
            </div>

            {props?.ctabutton && (
              <div className="relative inline-block">
                <PrimaryButton
                  text={
                    <>
                      <span>{props.ctabutton.title}</span>
                      <div className="relative">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </>
                  }
                  className="bg-gradient-primary text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gradient-primary-dark cursor-pointer transition-shadow duration-200 flex items-center gap-3"
                />
              </div>
            )}

            {/* Chart Illustration */}
            {props?.chartImage?.node?.mediaItemUrl && (
              <div className="relative w-full flex flex-col max-w-sm sm:max-w-md md:max-w-sm mx-auto md:mx-0 lg:mx-0 pt-4 md:pt-6">
                {/* Graph */}
                <Image src={props.chartImage.node.mediaItemUrl} alt="Chart" width={400} height={300} className="w-full h-auto" />

                {/* Spark on top-right of graph */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4">
                  <Image
                    src={spark}
                    alt="Spark"
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Stats */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-8 lg:gap-10">
            {/* First two metrics */}
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 border-b border-gray-400 pb-6 sm:pb-7 md:pb-8">
              {props.metrics.slice(0, 2).map((metric, index) => (
                <div key={index} className="space-y-2 text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    {metric.value.includes('%') ? (
                      <span className="text-gradient-primary">{metric.value}</span>
                    ) : (
                      <>
                        {metric.value}
                        {!metric.value.includes('%') && <span className="text-gradient-primary">+</span>}
                      </>
                    )}
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Remaining metrics in grid */}
            {props.metrics.slice(2).map((metric, index) => {
              const actualIndex = index + 2;
              const isEven = actualIndex % 2 === 0;
              
              if (!isEven) return null;
              
              return (
                <div key={actualIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                      {metric.value.includes('%') ? (
                        <span className="text-gradient-primary">{metric.value}</span>
                      ) : (
                        <>
                          {metric.value}
                          {!metric.value.includes('%') && <span className="text-gradient-primary">+</span>}
                        </>
                      )}
                    </div>
                    <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                  
                  {props.metrics[actualIndex + 1] && (
                    <div className="space-y-2 text-center md:text-left">
                      <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                        {props.metrics[actualIndex + 1].value.includes('%') ? (
                          <span className="text-gradient-primary">{props.metrics[actualIndex + 1].value}</span>
                        ) : (
                          <>
                            {props.metrics[actualIndex + 1].value}
                            {!props.metrics[actualIndex + 1].value.includes('%') && <span className="text-gradient-primary">+</span>}
                          </>
                        )}
                      </div>
                      <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                        {props.metrics[actualIndex + 1].description}
                      </p>
                    </div>
                  )}
                </div>
              );
            }).filter(Boolean)}
          </div>
        </div>
      </div>
    </main>
  );
}