"use client";

import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";

const ServicesSection = (props) => {
  console.log(props, "propssssss");
  const [expandedSection, setExpandedSection] = useState(0);

  if (!props?.services || props.services.length === 0) {
    return null;
  }

  const services = props.services.map((service, index) => ({
    id: index,
    number: `${String(index + 1).padStart(2, "0")}.`,
    title: service.title,
    description: service.description,
    tags: service.technologies?.map((tech) => tech.name) || [],
    buttonText: service.ctabutton?.title || "Get Started",
    image: service.image?.node?.mediaItemUrl || "/api/placeholder/400/200",
    isExpanded: index === 0,
  }));

  const handleServiceToggle = (serviceId) => {
    setExpandedSection(expandedSection === serviceId ? -1 : serviceId);
  };

  const formatHeadingWithSpans = (text) => {
    const words = text?.split(" ");
    if (words?.length < 3) return text;

    return words
      ?.map((word, index) => {
        if (index < 3) {
          return (
            <span key={index} className="text-gradient-primary font-bold">
              {word}
            </span>
          );
        }
        return word;
      })
      .reduce((acc, word, index) => {
        if (index === 0) return [word];
        return [...acc, " ", word];
      }, []);
  };

  return (
    <div className="bg-[#F0F4FF] section-padding-y px-wrapper">
      <div className="w-full mx-auto px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 ">
          {props?.title && (
            <h2 className="h2-heading">
              {formatHeadingWithSpans(props.title)}
            </h2>
          )}
          {props?.subtitle && (
            <p className="h2-description max-w-3xl mx-auto mt-3">
              {props.subtitle}
            </p>
          )}
        </div>

        {/* Services List */}
        <div className="w-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-[#F0F4FF] transition-all duration-500 ease-in-out group ${
                index < services.length - 1 ? "border-b border-gray-200" : ""
              }`}
              onMouseEnter={() => {
                if (
                  typeof window !== "undefined" &&
                  window.innerWidth >= 1024
                ) {
                  setExpandedSection(service.id);
                }
              }}
              onMouseLeave={() => {
                if (
                  typeof window !== "undefined" &&
                  window.innerWidth >= 1024
                ) {
                  setExpandedSection(0);
                }
              }}
            >
              {/* Service Header - Always visible */}
              <div
                className="px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 flex items-center cursor-pointer relative  transition-colors duration-200"
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <span
                    className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-3 sm:mr-4 md:mr-6 lg:mr-8 transition-colors duration-300 flex-shrink-0 ${
                      expandedSection === service.id
                        ? "text-gradient-primary"
                        : "text-gray-400"
                    }`}
                  >
                    {service.number}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl md:text-4xl transition-all duration-300 truncate sm:whitespace-normal ${
                      expandedSection === service.id
                        ? "text-gray-900 font-bold"
                        : "text-gray-600 font-normal"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Expand/Collapse Icon */}
                <div
                  className={`flex-shrink-0 ml-2 transition-colors duration-300 ${
                    expandedSection === service.id
                      ? "text-gradient-primary"
                      : "text-gray-400"
                  }`}
                >
                  <svg
                    className={`w-6 h-5 sm:w-7 sm:h-6 transform transition-transform duration-300 ${
                      expandedSection === service.id ? "rotate-90" : ""
                    }`}
                    viewBox="0 0 33 28"
                    fill="none"
                  >
                    <path
                      d="M16.7607 0.896484C17.4226 0.234637 18.4964 0.234637 19.1582 0.896484L32.0156 13.7539C32.1174 13.8558 32.13 14.0131 32.0537 14.1289L32.0156 14.1758L19.1582 27.0342C18.4964 27.696 17.4226 27.6959 16.7607 27.0342C16.0989 26.3723 16.0989 25.2986 16.7607 24.6367L25.0557 16.3428L25.7383 15.6602H2.59766C1.66168 15.6601 0.90332 14.9008 0.90332 13.9648C0.90348 13.029 1.66178 12.2705 2.59766 12.2705H25.7383L16.7607 3.29297C16.0992 2.63116 16.0991 1.55828 16.7607 0.896484Z"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="0.8"
                    />
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSection === service.id
                    ? "max-h-[800px] sm:max-h-[600px] md:max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 md:px-12 lg:px-16 pb-6 sm:pb-8">
                  <div className="flex items-start -ml-0">
                    {/* Spacer to align with title */}
                    <div className="w-8 sm:w-10 md:w-16 lg:w-20 xl:w-28 flex-shrink-0"></div>

                    {/* Content Container */}
                    <div className="flex-1">
                      {/* Mobile: Stack vertically (image first), Desktop: Side by side */}
                      <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
                        {/* Image Section - First on mobile, second on desktop */}
                        <div className="w-full lg:w-1/2 flex-shrink-0 order-1 lg:order-2 mb-6 lg:mb-0">
                          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={500}
                              height={500}
                              className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Content Section - Second on mobile, first on desktop */}
                        <div className="flex-1 lg:flex lg:flex-col lg:justify-start order-2 lg:order-1">
                          <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2.5 mb-4 sm:mb-5 md:mb-6">
                            {service.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="flex justify-center items-center h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-13 px-2 sm:px-3 md:px-3.5 lg:px-4 xl:px-4 2xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 2xl:py-2.5 bg-[#F0F4FF] text-black border border-gray-300 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base rounded-full hover:bg-gray-50 transition-colors duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Button */}
                          <PrimaryButton
                            text={
                              <>
                                <span>{service.buttonText}</span>
                                <svg
                                  className="w-5 h-3 sm:w-6 sm:h-4"
                                  viewBox="0 0 33 28"
                                  fill="none"
                                >
                                  <path
                                    d="M16.7607 0.896484C17.4226 0.234637 18.4964 0.234637 19.1582 0.896484L32.0156 13.7539C32.1174 13.8558 32.13 14.0131 32.0537 14.1289L32.0156 14.1758L19.1582 27.0342C18.4964 27.696 17.4226 27.6959 16.7607 27.0342C16.0989 26.3723 16.0989 25.2986 16.7607 24.6367L25.0557 16.3428L25.7383 15.6602H2.59766C1.66168 15.6601 0.90332 14.9008 0.90332 13.9648C0.90348 13.029 1.66178 12.2705 2.59766 12.2705H25.7383L16.7607 3.29297C16.0992 2.63116 16.0991 1.55828 16.7607 0.896484Z"
                                    fill="currentColor"
                                    stroke="white"
                                    strokeWidth="0.8"
                                  />
                                </svg>
                              </>
                            }
                            className="bg-gradient-primary hover:bg-gradient-primary-hover text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer !h-10 sm:!h-11 md:!h-12 lg:!h-12 xl:!h-13 2xl:!h-14 !max-w-80 sm:!max-w-90 md:!max-w-96 lg:!max-w-104 xl:!max-w-110 2xl:!max-w-116 !px-3 sm:!px-4 md:!px-5 lg:!px-5 xl:!px-6 2xl:!px-7 !gap-1 sm:!gap-1.5 md:!gap-2 lg:!gap-2 xl:!gap-2 2xl:!gap-2.5 !min-w-0 !text-xs sm:!text-sm md:!text-sm lg:!text-base xl:!text-base 2xl:!text-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {props?.viewallbutton?.title && (
          <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-12 lg:px-16">
            <PrimaryButton
              text={props.viewallbutton.title}
              className="bg-gradient-primary text-white hover:cursor-pointer font-medium transition-all duration-200  border-none shadow-none outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
