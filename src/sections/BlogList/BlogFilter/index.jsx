"use client";
import React, { useState } from "react";
const categories = [
  "All",
  "Ondemand",
  "Technology",
  "Latest",
  "Healthcare",
  "Artificial Intelligence",
  "Insights",
  "Real Estate",
  "Events",
  "DevOps",
  "Fintech",
  "ECommerce",
  "WebMobTech",
];
const BlogFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const handleFilterChange = (category) => {
    setSelectedFilter(category);
  };
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10 lg:gap-14 pb-8 md:pb-10 lg:pb-14">
      <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal leading-tight px-2">
          Explore Our{" "}
          <span className="text-gradient-secondry font-bold">
            Latest Insights
          </span>
        </h1>
        <p className="text-text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed max-w-4xl px-4">
          Exploring the latest insights and trends in your industry.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
        <div className="w-full max-w-lg mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2.5 md:py-3 pr-12 text-sm md:text-base text-text-secondary bg-white border border-text-disabled rounded-full focus:outline-none focus:ring-2 focus:ring-text-disabled focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center items-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterChange(categories[index])}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-normal transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedFilter === category
                    ? "button-background-gradient text-white"
                    : "text-text-primary border border-text-disabled"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
