"use client"

import "./index.css"
import Image from "next/image"

export default function MarqueeSection(props) {
  console.log(props, "marquee props")
  
  if (!props?.items || props.items.length === 0) {
    return null;
  }

  const icon = props?.icon?.node?.mediaItemUrl;
  const speed = props?.speed?.[0] || "medium";

  return (
    <div className="blue-marquee-section bg-blue-600 text-white py-3 sm:py-4 md:py-5 lg:py-6 overflow-hidden">
      <div className="marquee-container">
        <div className={`marquee-content ${speed === "slow" ? "slow" : speed === "fast" ? "fast" : ""}`}>
          <span className="marquee-text">
            {icon && (
              <Image 
                src={icon} 
                alt="icon" 
                width={20} 
                height={20} 
                className="inline mr-2 w-5 h-5" 
              />
            )}
            {props.items.map((item, index) => 
              item.text + (index < props.items.length - 1 ? " ✦ " : "")
            ).join("")}&nbsp;
          </span>
          <span className="marquee-text">
            {icon && (
              <Image 
                src={icon} 
                alt="icon" 
                width={20} 
                height={20} 
                className="inline mr-2 w-5 h-5" 
              />
            )}
            {props.items.map((item, index) => 
              item.text + (index < props.items.length - 1 ? " ✦ " : "")
            ).join("")}&nbsp;
          </span>
          <span className="marquee-text">
            {icon && (
              <Image 
                src={icon} 
                alt="icon" 
                width={20} 
                height={20} 
                className="inline mr-2 w-5 h-5" 
              />
            )}
            {props.items.map((item, index) => 
              item.text + (index < props.items.length - 1 ? " ✦ " : "")
            ).join("")}&nbsp;
          </span>
        </div>
      </div>
    </div>
  )
}