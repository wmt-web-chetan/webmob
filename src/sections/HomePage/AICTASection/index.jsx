import React from 'react';
import Image from 'next/image';
import CTAImage from '../../../assets/images/CTA.png';

const AICTASection = () => {
  return (
    <section className="relative h-auto flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={CTAImage}
          alt="CTA Background"
          fill
          className="object-cover"
          priority
        />
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
          <button className="group relative px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 hover:from-blue-400 hover:to-purple-500 hover:scale-102 hover:shadow-lg hover:shadow-purple-500/25 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-sm sm:text-base lg:text-lg">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 border-2 border-white/30 rounded-full font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-102 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-sm sm:text-base lg:text-lg">
            <span className="flex items-center justify-center gap-2">
              Contact Sales
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-105" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AICTASection;