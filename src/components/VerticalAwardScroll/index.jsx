"use client"
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./index.css";

const VerticalAwardScroll = ({ children, reverse = false }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Convert children to array
  const childArray = React.Children.toArray(children);

  // Duplicate enough times for smooth infinite scroll
  const extendedChildren = [...childArray, ...childArray, ...childArray];

  const animate = useCallback(() => {
    if (!containerRef.current) return;

    setScrollPosition((prev) => {
      const speed = 0.8; // scroll speed
      let newPosition = reverse ? prev - speed : prev + speed;

      const scrollHeight = containerRef.current.scrollHeight;
      const containerHeight = containerRef.current.clientHeight;

      // Only scrollable height (avoid flicker at end)
      const maxScroll = scrollHeight - containerHeight;

      if (!reverse && newPosition >= maxScroll / 2) {
        // Reset seamlessly to first duplicate
        newPosition = 0;
      }
      if (reverse && newPosition <= 0) {
        // Reset seamlessly to middle duplicate
        newPosition = maxScroll / 2;
      }

      return newPosition;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [reverse]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [animate]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="relative max-h-[400px] sm:max-h-[500px] lg:max-h-[650px]">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 lg:h-20 wrapper-gradient-top"></div>
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 wrapper-gradient-bottom"></div>

      {/* Scrolling container */}
      <div ref={containerRef} className="h-full overflow-hidden py-6 sm:py-7 lg:py-8">
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {extendedChildren.map((child, index) => (
            <div key={index} className="transition-all duration-300">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalAwardScroll;
