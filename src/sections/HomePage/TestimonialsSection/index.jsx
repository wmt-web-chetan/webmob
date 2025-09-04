"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import blue_colon from "@/assets/images/blue_colon.svg"
import colon from "@/assets/images/collon.svg"
import PrimaryButton from "@/components/PrimaryButton";
import arrow from '@/assets/SVGs/arrow-up.svg';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle slide for 3-card view

  const testimonials = [
    {
      id: 1,
      name: "Ananya Mehra",
      position: "CEO & Founder Whitefield",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      text: "DreamSquare made my home search so simple. I found a beautiful villa in Whitefield within days. The team was responsive and genuinely helpful!",
    },
    {
      id: 2,
      name: "Andoni",
      position: "CEO & Founder @ Molly - UK",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      text: "I was relocating from Mumbai and had no time to explore in person. DreamSquare's platform helped me shortlist great options, and their agent support was top-notch!",
    },
    {
      id: 3,
      name: "Priya Desai",
      position: "CTO RIC",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      text: "I loved how easy it was to compare properties and schedule visits. Within a week, I booked a 2BHK in Pune — all thanks to DreamSquare!",
    },
    {
      id: 4,
      name: "Rahul Sharma",
      position: "Product Manager at TechCorp",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      text: "The virtual tours and detailed property information saved me countless hours. I could filter exactly what I needed and found my dream home in Bangalore effortlessly.",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      position: "Marketing Director at InnovateX",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      text: "Moving to India for work was stressful, but DreamSquare's international relocation support made finding accommodation seamless. Highly recommended!",
    },
    {
      id: 6,
      name: "Vikram Patel",
      position: "Senior Developer at StartupHub",
      avatar:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
      text: "Great platform with transparent pricing and no hidden fees. The customer service team was available 24/7 to answer all my queries during the home buying process.",
    },
  ];

  // Quote SVG Component
  const QuoteIcon = ({ isActive }) => (
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-500 ${
        isActive ? "text-white" : "text-blue-500"
      }`}
    >
      <path
        d="M21.6 36H7.2C3.204 36 0 32.796 0 28.8V14.4C0 6.444 6.444 0 14.4 0H18c1.332 0 2.4 1.068 2.4 2.4s-1.068 2.4-2.4 2.4h-3.6c-5.292 0-9.6 4.308-9.6 9.6v2.4h7.2c3.996 0 7.2 3.204 7.2 7.2V28.8c0 3.996-3.204 7.2-7.2 7.2zm24 0h-14.4c-3.996 0-7.2-3.204-7.2-7.2V14.4C24 6.444 30.444 0 38.4 0H42c1.332 0 2.4 1.068 2.4 2.4s-1.068 2.4-2.4 2.4h-3.6c-5.292 0-9.6 4.308-9.6 9.6v2.4h7.2c3.996 0 7.2 3.204 7.2 7.2V28.8c0 3.996-3.204 7.2-7.2 7.2z"
        fill="currentColor"
      />
    </svg>
  );

 
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const getSlidePosition = (index) => {
    const diff =
      (index - currentSlide + testimonials.length) % testimonials.length;

    if (diff === 0) {
      // Center slide
      return "translate-x-0 scale-100 z-30 opacity-100 bottom-50 ";
    } else if (diff === 1 || diff === testimonials.length - 1) {
      // Side slides
      const isRight = diff === 1;
      return `${
        isRight ? "translate-x-160" : "-translate-x-160"
      } scale-90 z-20 opacity-100`;
    } else {
      // Hidden slides
      return "translate-x-0 scale-75 z-0 opacity-0";
    }
  };

  return (
    <section className="bg-white section-padding-y">
      <div className="container mx-auto  w-full">
        {/* Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-1 sm:mb-2 md:mb-2 lg:mb-4">
            What{" "}
            <span className="text-gradient-primary bg-clip-text text-transparent font-bold">
              Our Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary  mx-auto">
            We've helped people turn houses into homes. See what they're saying
            about us.
          </p>
        </div>

        {/* Desktop Carousel Container */}
        <div className="hidden lg:block">
          <div className="relative h-[500px] lg:h-[550px] xl:h-[600px] flex items-center justify-center ">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute transition-all duration-700 ease-in-out transform cursor-pointer ${getSlidePosition(
                  index
                )}`}
                onClick={() => goToSlide(index)}
              >
                <div
                  className={`relative transition-all duration-700 ${
                    index === currentSlide
                      ? "w-3xl"
                      : "w-96"
                  }`}
                >
                  {/* Main Card */}
                  <div
                    className={`rounded-2xl lg:rounded-3xl py-6 lg:py-8 xl:py-10 px-3 lg:px-3 xl:px-6 pb-24 lg:pb-28 xl:pb-32 transition-all duration-700 ${
                      index === currentSlide
                        ? "bg-primary text-white "
                        : "bg-[#f2f2f2] text-text-primary   opacity-50"
                    }`}
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6 lg:mb-8">
                      <div
                        className={`transition-all duration-700 ${
                          index === currentSlide
                            ? "scale-110 lg:scale-125"
                            : "scale-90 lg:scale-100"
                        }`}
                      >
                        {index === currentSlide ? (
                          <Image src={colon} alt="colon" width={48} height={36} />
                        ) : (
                          <Image src={blue_colon} alt="blue colon" width={48} height={36} />
                        )}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p
                      className={`text-center transition-all duration-700 ${
                        index === currentSlide
                          ? "text-white text-base lg:text-lg xl:text-3xl font-medium"
                          : "text-text-primary text-sm lg:text-base xl:text-lg font-normal"
                      }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="relative">
                    {/* Profile Section - Positioned at bottom */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2  flex flex-col items-center">
                      {/* Avatar */}
                      <div
                        className={`rounded-full overflow-hidden shadow-lg mb-4 transition-all duration-700 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 `}
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name and Position */}
                      <div className="text-center">
                        <h4
                          className={`font-semibold text-text-primary transition-all duration-700 ${
                            index === currentSlide
                              ? "text-base lg:text-lg xl:text-2xl font-medium"
                              : "text-sm lg:text-base xl:text-base"
                          }`}
                        >
                          {testimonial.name}
                        </h4>
                        <p
                          className={`text-text-secondary transition-all duration-700 ${
                            index === currentSlide
                              ? "text-sm lg:text-base xl:text-base"
                              : "text-xs lg:text-sm xl:text-sm"
                          }`}
                        >
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Dots */}
          <div className="flex justify-center mt-3 lg:mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary scale-125"
                    : "bg-[#bfbfbf] hover:scale-110"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

       {/* Mobile Carousel (visible only on mobile) */}
       <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 px-2 relative transition-all duration-500 ${
                    index === currentSlide ? "" : "opacity-60 translate-y-4"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-3 sm:p-4 pb-8 sm:pb-10 transition-all duration-500 ${
                      index === currentSlide
                        ? "bg-blue-600 text-white"
                        : "bg-gray-50 text-gray-900"
                    }`}
                  >
                    <div
                      className={`transition-all duration-500 flex justify-center mb-3 sm:mb-4 ${
                        index === currentSlide
                          ? "text-white text-3xl sm:text-4xl"
                          : "text-gradient-primary text-3xl sm:text-4xl"
                      }`}
                    >
                      {index === currentSlide ? (
                        <Image src={colon} alt="colon" />
                      ) : (
                        <Image src={blue_colon} alt="blue colon" />
                      )}
                    </div>
                    <p
                      className={`leading-relaxed text-sm sm:text-base transition-all duration-500 ${
                        index === currentSlide ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="absolute bottom-18 sm:bottom-16 left-1/2 transform -translate-x-1/2">
                    <Image
                     height={100}
                     width={100}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={`rounded-full shadow-lg transition-all duration-500 ${
                        index === currentSlide
                          ? "w-10 h-10 sm:w-12 sm:h-12"
                          : "w-8 h-8 sm:w-10 sm:h-10"
                      }`}
                    />
                  </div>
                  <div className="text-center mt-12 sm:mt-10 px-2">
                    <h4
                      className={`font-semibold text-sm sm:text-base mb-1 text-gray-900 transition-all duration-500 ${
                        index === currentSlide ? "" : "text-xs sm:text-sm"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm text-gray-600 transition-all duration-500 ${
                        index === currentSlide ? "" : "text-xs"
                      }`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-12">
          <PrimaryButton
            text={
              <>
                View All Testimonials
                <Image src={arrow} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5 " />
              </>
            }
            className="bg-gradient-primary hover:bg-gradient-primary-hover text-white font-medium transition-colors duration-200"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
