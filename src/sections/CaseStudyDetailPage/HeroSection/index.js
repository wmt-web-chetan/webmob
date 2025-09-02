"use client"
import React from "react"

export const CaseHeroSection = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center h-screen overflow-hidden relative"
        style={{
          backgroundImage: `url('https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Career.webp')`, // Replace with your actual image URL
        }}
      >
        {/* Content */}
        <div 
          className="relative flex items-center justify-center h-full w-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        >
          <div
            className="flex flex-col place-items-center items-center text-center py-16 m-4 max-w-5xl"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-duration="700"
          >
            {/* Main Heading */}
            <h1 className="font-serif font-bold lg:text-5xl text-4xl text-white max-w-7xl h1-heading" style={{ lineHeight: "1.20" }}>
                Viwa Wireless
                </h1>
            <hr
                  className="h-1 w-40 mt-5 border-0 bg-white"
                />
            {/* Subtitle */}
            <p className="text-white pt-6 text-lg font-sans max-w-4xl mx-auto">
            Robust B2B/B2C eCommerce and POS Solution with Dynamic Pricing, Marketplace Integration, and Real-Time Inventory Sync
            </p>
            
        
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseHeroSection