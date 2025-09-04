"use client";
import Image from "next/image";
import React, { useState, useCallback, memo } from "react";
import Demo from "../../../assets/images/image.png";
import "./department.css";
import PrimaryButton from "@/components/PrimaryButton";
import Tensor_Flow from "@/assets/images/tensor_flow.png";
import Tensor_Flow1 from "../../../assets/images/tensor_flow1.png";
import Pandas from "../../../assets/images/pandas.png";
import OpenCV from "../../../assets/images/open_cv.png";
import OpenAi from "../../../assets/images/openai-gym.png";
import SciKit from "../../../assets/images/sci_kit.png";
import arrow from "@/assets/SVGs/arrow-up.svg";

// Memoized TabButton to prevent unnecessary re-renders
const TabButton = memo(({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-12 lg:py-4 rounded-full transition-colors duration-300 text-sm sm:text-base md:text-lg font-normal ${
      isActive
        ? "button-background-gradient text-white font-medium"
        : "text-text-primary "
    }`}
  >
    {tab}
  </button>
));

// Memoized ToolItem to prevent re-rendering of tool icons
const ToolItem = memo(({ tool }) => (
  <div className="rounded-full justify-center flex gap-6 text-center transition-transform duration-300">
    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 p-2 sm:p-4 rounded-full bg-white flex justify-center items-center">
      <Image
        src={tool.icon}
        alt={`${tool.name} logo`}
        width={40}
        className="object-cover"
        loading="lazy"
      />
    </div>
  </div>
));

const DepartmentSection = ({ defaultTab, mainTitle, subtitle, tabs }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs?.[0]?.tabKey || "");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const items = tabs?.map(tab => tab.tabLabel) || [];

  // Create dynamic tab content from the query data
  const tabContent = {};
  tabs?.forEach(tab => {
    tabContent[tab.tabKey] = {
      title: tab.title,
      description: tab.description,
      cardText: tab.cardText,
      toolsTitle: tab.toolsTitle,
      toolsDescription: tab.toolsDescription,
      tools: tab.toolIcons?.map((toolIcon, index) => ({
        name: `Tool ${index + 1}`, // You may want to add tool names to your GraphQL schema
        icon: Tensor_Flow, // Default icon - you may want to use the actual icon from toolIcon.icon.node
        color: `bg-${['orange', 'red', 'green', 'yellow', 'blue', 'purple'][index % 6]}-500`
      })) || [],
      ctaButton: tab.ctabutton
    };
  });

  // Debounced tab change handler with animation
  const handleTabChange = useCallback(
    (tab) => {
      if (tab === activeTab) return;

      setIsTransitioning(true);

      setTimeout(() => {
        setActiveTab(tab);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 200);
    },
    [activeTab]
  );

  const currentContent = tabContent[activeTab] || Object.values(tabContent)[0] || {};

  return (
    <div className="section-padding-y px-wrapper">
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <h2 className="text-center h2-heading font-bold">
          {mainTitle || "Our Services"}
        </h2>
        <p className="pt-2 sm:pt-4 max-w-xl sm:max-w-2xl md:max-w-3xl text-center h2-description">
          {subtitle || "Discover our range of professional services"}
        </p>

        <div className="mt-4 sm:mt-8 md:mt-16">
          <div className="flex flex-wrap gap-y-3 justify-center lg:border lg:border-text-disabled lg:rounded-full ">
            {tabs?.map((tab) => (
              <TabButton
                key={tab.tabKey}
                tab={tab.tabLabel}
                isActive={activeTab === tab.tabKey}
                onClick={() => handleTabChange(tab.tabKey)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 py-8">
        <div
          className={`bg-[#1B1B35] md:col-span-12 lg:col-span-8 flex flex-col md:flex-row py-4 sm:py-6 lg:py-8 px-4 sm:px-6 md:px-8 transition-all duration-500 ease-in-out transform ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
          style={{ borderRadius: "40px" }}
        >
          <div className="w-full sm:w-[45%] flex flex-col justify-between mt-4 sm:mt-6 md:mt-8 order-2 md:order-1">
            <div className="flex-grow">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-normal transition-all duration-700 ease-in-out mb-3 sm:mb-4 transform ${
                  isTransitioning
                    ? "opacity-0 translate-x-8"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {currentContent.title || "Our Service"}
              </h3>
              <p
                className={`text-white text-sm sm:text-base md:text-lg font-normal transition-all duration-700 ease-in-out leading-relaxed transform delay-100 ${
                  isTransitioning
                    ? "opacity-0 translate-x-8"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {currentContent.description || "Discover our professional services and solutions"}
              </p>
            </div>
            <div
              className={`mt-4 sm:mt-6 md:mt-8 lg:mt-12 transition-all duration-700 ease-in-out transform delay-200 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentContent.ctaButton && (
                <PrimaryButton
                  text={
                    <span className="flex items-center gap-2">
                      {currentContent.ctaButton.title || "Get Started"}
                      <Image
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 sm:w-5 sm:h-5 filter invert"
                      />
                    </span>
                  }
                  className="bg-white text-text-primary px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => {
                    if (currentContent.ctaButton.url) {
                      const target = currentContent.ctaButton.target || '_self';
                      if (target === '_blank') {
                        window.open(currentContent.ctaButton.url, '_blank');
                      } else {
                        window.location.href = currentContent.ctaButton.url;
                      }
                    }
                  }}
                />
              )}
            </div>
          </div>
          <div
            className={`w-full order-1 md:order-2 sm:w-[55%] mt-4 sm:mt-6 md:mt-0 flex justify-center md:justify-end transition-all duration-700 ease-in-out transform delay-150 ${
              isTransitioning
                ? "opacity-0 scale-95 translate-x-8"
                : "opacity-100 scale-100 translate-x-0"
            }`}
          >
            <Image
              src={Demo}
              alt="demo"
              className="w-full  object-contain transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        <div
          className={`md:col-span-12 lg:col-span-4 flex flex-col gap-4 sm:gap-6 transition-all duration-500 ease-in-out transform ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div
            className={`bg-[#ebefff] text-lg sm:text-xl md:text-2xl p-4 sm:p-8 rounded-3xl flex items-center font-normal transition-all duration-700 ease-in-out transform ${
              isTransitioning
                ? "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-start w-full leading-tight">
              {currentContent.cardText || "Explore our services and solutions"}
            </div>
          </div>

          <div
            className={`bg-[#ebefff] p-4 sm:p-8 rounded-3xl flex flex-col gap-4 lg:gap-14 text-sm sm:text-base flex-1 transition-all duration-700 ease-in-out transform delay-100 ${
              isTransitioning
                ? "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="flex flex-col gap-4 px-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                {currentContent.toolsTitle || "Tools"}
              </div>
              <p className="mt-1 sm:mt-2 text-sm sm:text-sm md:text-base mb-4 sm:mb-6">
                {currentContent.toolsDescription || "Tools and technologies we use"}
              </p>
            </div>

            <div className="w-full flex flex-wrap gap-3  sm:gap-4 md:gap-6   justify-center px-0 lg:px-0 xl:px-0 ">
              {currentContent.tools?.map((tool, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out transform ${
                    isTransitioning
                      ? "opacity-0 translate-y-4 scale-95"
                      : "opacity-100 translate-y-0 scale-100"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <ToolItem tool={tool} />
                </div>
              )) || <div className="text-center text-gray-500">No tools available</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSection;
