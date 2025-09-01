import React from "react"; 
import awardLogo from "@/assets/images/award.png"; 
import AwardCard from "../AwardCard";
import VerticalAwardScroll from "../VerticalAwardScroll";
import StarRating from "../StarRating";

const techLogos = [
  { text: "Excellence in Innovation Award 2024", title: "Innovation Award" },
  { text: "Best Design Excellence Award 2024", title: "Design Award" },
  { text: "Outstanding Performance Award 2024", title: "Performance Award" },
  { text: "Customer Choice Award 2024", title: "Customer Award" },
  { text: "Industry Leadership Award 2024", title: "Leadership Award" },
  { text: "Premium Quality Award 2024", title: "Quality Award" },
];

const AwardSection = ({ rating = 4.2, count = 144 }) => {
  return (
    <div className="bg-dark-bg px-4 sm:px-8 lg:px-48 py-8 lg:py-16 flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
      <div className="max-w-3xl flex flex-col gap-y-8 lg:gap-y-16 justify-center">
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient-secondry">Awards </span>
            <span>That Define</span>
            <br />
            <span>Our Journey</span>
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-2xl font-normal leading-relaxed">
            From innovation to execution, our recognition speaks volumes about
            the quality, creativity, and results we bring to every project.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 lg:gap-y-4">
          <div className="flex items-center gap-x-3 lg:gap-x-6 text-white text-2xl sm:text-3xl lg:text-5xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="45"
              viewBox="0 0 71 80"
              fill="none"
              className="w-[40px] h-[45px] sm:w-[56px] sm:h-[64px] lg:w-[71px] lg:h-[80px] flex-shrink-0"
            >
              <path
                d="M55.4943 56.3265C51.4138 59.5918 45.7012 62.0408 39.9885 62.0408C26.931 62.0408 17.954 52.2449 17.954 39.1837C17.954 26.1224 26.931 17.1428 39.9885 17.1428C45.7012 17.1428 51.4138 18.7755 55.4943 22.8571L57.9425 25.3061L71 13.0612L67.7356 10.6122C60.3908 4.08162 50.5977 0 39.9885 0C17.1379 0 0 17.1429 0 40C0 62.8571 17.1379 80 39.9885 80C50.5977 80 60.3908 75.9184 67.7356 69.3878L71 66.9388L57.9425 53.8775L55.4943 56.3265Z"
                fill="white"
              />
              <path
                d="M39.1725 53.0614C46.3839 53.0614 52.2299 47.2137 52.2299 40.0002C52.2299 32.7867 46.3839 26.939 39.1725 26.939C31.961 26.939 26.115 32.7867 26.115 40.0002C26.115 47.2137 31.961 53.0614 39.1725 53.0614Z"
                fill="#EF4335"
              />
            </svg>
            {rating}
            <div className="scale-75 sm:scale-90 lg:scale-100">
              <StarRating rating={rating} />
            </div>
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-normal text-light-bg opacity-50">
            {count} reviews on Clutch
          </div>
        </div>
      </div>

      {/* Award Cards - responsive layout */}
      <div className="flex gap-x-6 sm:gap-x-8 lg:gap-x-14 justify-center lg:justify-end mt-8 lg:mt-0">
        <VerticalAwardScroll>
          {techLogos.map((award, idx) => (
            <AwardCard key={idx} image={awardLogo} text={award.text} />
          ))}
        </VerticalAwardScroll>
        <VerticalAwardScroll reverse>
          {techLogos.map((award, idx) => (
            <AwardCard key={idx} image={awardLogo} text={award.text} />
          ))}
        </VerticalAwardScroll>
      </div>
    </div>
  );
};

export default AwardSection;
