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
    <div className="max-w-6xl mx-auto flex flex-col gap-14 pb-14">
      <div className="flex flex-col items-center gap-4">
        <h1 className=" text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight">
          Explore Our{" "}
          <span className="text-gradient-secondry font-bold">
            Latest Insights
          </span>
        </h1>
        <p className="text-text-text-secondary text-base sm:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed">
          Exploring the latest insights and trends in your industry.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="min-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 pr-12 text-text-secondary bg-white border border-text-disabled rounded-full  focus:outline-none focus:ring-2 focus:ring-text-disabled focus:border-transparent "
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg
                className="w-5 h-5"
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
        <div>
          <div className="flex flex-wrap gap-4 sm:justify-center items-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterChange(categories[index])}
                className={`px-6 py-2 rounded-full text-xl font-normal transition-all duration-300 cursor-pointer ${
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
