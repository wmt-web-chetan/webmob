import CaseStudyCard from "@/components/CaseStudyCard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const allCaseStudies = [
  // USA Projects
  {
    id: 2,
    title: "StreamBase USA",
    description:
      "Revolutionizing AV Distribution with Seamless, Scalable, and Ultra-Low Latency Video and Audio Over IP in the US market.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/Next-Gen-Av-over-IP-Distribution-Platform-Stream-Base.png",
    tags: [
      "AI Core IP",
      "IP Based Routing",
      "Video Wall Support",
      "Full Control/Power over Ethernet",
    ],
    country: "usa",
    technology: "mern",
    industry: "service",
    isFullWidth: false,
  },
  {
    id: 3,
    title: "FinTech Pro USA",
    description:
      "Advanced financial management platform for US enterprises with real-time analytics.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/Next-Gen-Av-over-IP-Distribution-Platform-Stream-Base.png",
    tags: [
      "Real-time Analytics",
      "Financial Management",
      "Enterprise Solutions",
    ],
    country: "usa",
    technology: "laravel",
    industry: "finance",
    isFullWidth: false,
  },
  // India Projects
  {
    id: 4,
    title: "Melly India",
    description:
      "Mental Wellness App Powered by AI Insights tailored for Indian market.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: [
      "Categorized Content",
      "CBT Exercise",
      "Melly Coach AI",
      "Today's Plan",
      "Personalized Program",
    ],
    country: "india",
    technology: "mobile",
    industry: "service",
    isFullWidth: false,
  },
  {
    id: 5,
    title: "E-Commerce India",
    description:
      "Complete e-commerce solution for Indian retail market with payment gateway integration.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: ["Payment Gateway", "Inventory Management", "Multi-vendor Support"],
    country: "india",
    technology: "mern",
    industry: "product",
    isFullWidth: false,
  },
  // UK Projects
  {
    id: 6,
    title: "Banking Solutions UK",
    description:
      "Comprehensive banking platform for UK financial institutions with regulatory compliance.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: ["Regulatory Compliance", "Digital Banking", "Security Features"],
    country: "uk",
    technology: "laravel",
    industry: "finance",
    isFullWidth: false,
  },
  {
    id: 7,
    title: "Healthcare UK",
    description:
      "Digital healthcare platform connecting patients with healthcare providers across the UK.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: ["Telemedicine", "Patient Management", "Appointment Booking"],
    country: "uk",
    technology: "mern",
    industry: "service",
    isFullWidth: false,
  },
  // Mobile App Projects
  {
    id: 8,
    title: "Mobile Finance App",
    description:
      "Cross-platform mobile application for personal finance management and investment tracking.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: ["Investment Tracking", "Budget Management", "Cross-platform"],
    country: "usa",
    technology: "mobile",
    industry: "finance",
    isFullWidth: false,
  },
  {
    id: 9,
    title: "Product Catalog App",
    description:
      "Mobile-first product catalog application with AR visualization and inventory management.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: ["AR Visualization", "Inventory Management", "Mobile-first"],
    country: "india",
    technology: "mobile",
    industry: "product",
    isFullWidth: false,
  },
  // Laravel Projects
  {
    id: 10,
    title: "Enterprise Resource Planning",
    description:
      "Comprehensive ERP solution built with Laravel for manufacturing industry.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: ["ERP", "Manufacturing", "Resource Planning"],
    country: "uk",
    technology: "laravel",
    industry: "product",
    isFullWidth: false,
  },
];

const filterOptions = {
  country: ["usa", "india", "uk"],
  technology: ["mern", "laravel", "mobile"],
  industry: ["finance", "service", "product"],
};

const Dropdown = ({
  label,
  value,
  options,
  filterType,
  selectedFilter,
  handleFilterChange,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`px-6 py-2 rounded-full text-xl font-normal transition-all duration-300 flex justify-between items-center ${
          selectedFilter === filterType
            ? "button-background-gradient text-white"
            : "text-text-primary border border-text-disabled bg-transparent"
        }`}
      >
        {selectedFilter === filterType && value ? value.toUpperCase() : label}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ml-1 transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 21 22"
          fill="currentColor"
        >
          <path d="M16.2556 7.20698C16.6076 6.85496 17.1785 6.85508 17.5306 7.20698C17.8827 7.55906 17.8827 8.12992 17.5306 8.48201L11.2196 14.793C10.8675 15.1451 10.2967 15.1451 9.94459 14.793L3.63361 8.48201C3.28169 8.12991 3.28158 7.55901 3.63361 7.20698C3.98565 6.85495 4.55654 6.85505 4.90864 7.20698L10.5821 12.8804L16.2556 7.20698Z" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 min-w-30 bg-white border border-text-disabled rounded-xl shadow-lg z-10">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                handleFilterChange(filterType.toLowerCase(), opt);
                setOpen(false); // close after selection
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-xl"
            >
              {opt.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CaseStudyFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ Hydration fix
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setIsTransitioning(true);

    setTimeout(() => {
      if (filterType === "main") {
        setSelectedFilter(value);
        if (value === "All") {
          setSelectedCountry("");
          setSelectedTechnology("");
          setSelectedIndustry("");
        }
      } else if (filterType === "country") {
        setSelectedCountry(value);
        setSelectedTechnology("");
        setSelectedIndustry("");
        setSelectedFilter("Country");
      } else if (filterType === "technology") {
        setSelectedTechnology(value);
        setSelectedCountry("");
        setSelectedIndustry("");
        setSelectedFilter("Technology");
      } else if (filterType === "industry") {
        setSelectedIndustry(value);
        setSelectedCountry("");
        setSelectedTechnology("");
        setSelectedFilter("Industry");
      }
      setTimeout(() => setIsTransitioning(false), 100);
    }, 150);
  };

  const filteredCaseStudies = (() => {
    if (selectedFilter === "All") return allCaseStudies;
    if (selectedFilter === "Country" && selectedCountry)
      return allCaseStudies.filter((s) => s.country === selectedCountry);
    if (selectedFilter === "Technology" && selectedTechnology)
      return allCaseStudies.filter((s) => s.technology === selectedTechnology);
    if (selectedFilter === "Industry" && selectedIndustry)
      return allCaseStudies.filter((s) => s.industry === selectedIndustry);
    return allCaseStudies;
  })();
  return (
    <div>
      {/* Filtered Case Studies */}
      <div className="flex flex-col pt-10 pb-20 gap-y-14">
        {/* Filter Section */}
        <div className="px-wrapper  flex flex-col items-center gap-y-4">
          <div className="flex flex-wrap gap-4 sm:justify-center items-center">
            <button
              onClick={() => handleFilterChange("main", "All")}
              className={`px-6 py-2 rounded-full text-xl font-normal transition-all duration-300 cursor-pointer ${
                selectedFilter === "All"
                  ? "button-background-gradient text-white"
                  : "text-text-primary border border-text-disabled"
              }`}
            >
              All
            </button>

            <Dropdown
              label="Country"
              value={selectedCountry}
              options={filterOptions.country}
              filterType="Country"
              selectedFilter={selectedFilter}
              handleFilterChange={handleFilterChange}
            />
            <Dropdown
              label="Technology"
              value={selectedTechnology}
              options={filterOptions.technology}
              filterType="Technology"
              selectedFilter={selectedFilter}
              handleFilterChange={handleFilterChange}
            />
            <Dropdown
              label="Industry"
              value={selectedIndustry}
              options={filterOptions.industry}
              filterType="Industry"
              selectedFilter={selectedFilter}
              handleFilterChange={handleFilterChange}
            />
          </div>

          <p className="text-text-secondary text-center text-xl font-normal max-w-xl">
            Explore all our case studies showcasing diverse solutions,
            industries, and innovations.
          </p>
        </div>
        <div className="flex flex-col gap-y-14 ">
          <div
            className={`px-wrapper grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-2 transition-all duration-300 ${
              isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {filteredCaseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`${
                  caseStudy.isFullWidth
                    ? "md:col-span-full lg:col-span-full"
                    : ""
                } transition-all duration-300 ease-in-out`}
                style={
                  mounted
                    ? isTransitioning
                      ? { animation: "none" }
                      : {
                          animationName: "fadeInUp",
                          animationDuration: "0.6s",
                          animationTimingFunction: "ease-out",
                          animationFillMode: "forwards",
                          animationDelay: `${index * 100}ms`,
                        }
                    : {}
                }
              >
                <CaseStudyCard
                  caseStudy={caseStudy}
                  isFullWidth={caseStudy.isFullWidth}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push("/case-study")}
              className="bg-gradient-primary hover:bg-primary text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyFilter;
