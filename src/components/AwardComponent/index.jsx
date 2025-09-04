import React from "react"; 
import AwardCard from "../AwardCard";
import VerticalAwardScroll from "../VerticalAwardScroll";
import StarRating from "../StarRating";
import Image from "next/image";

const techLogos = [
  { text: "Excellence in Innovation Award 2024", title: "Innovation Award" },
  { text: "Best Design Excellence Award 2024", title: "Design Award" },
  { text: "Outstanding Performance Award 2024", title: "Performance Award" },
  { text: "Customer Choice Award 2024", title: "Customer Award" },
  { text: "Industry Leadership Award 2024", title: "Leadership Award" },
  { text: "Premium Quality Award 2024", title: "Quality Award" },
];

const AwardComponent = (props) => {
  // console.log("11111111111111111", props);

  const { rating = 4.2, count = 144 } = props;

  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length < 2) return title;

    return words
      .map((word, index) => {
        if (index === 0) {
          return (
            <span key={index} className="text-gradient-secondry">
              {word}
            </span>
          );
        }
        return word;
      })
      .reduce((prev, curr, index) => {
        return index === 0 ? [curr] : [...prev, " ", curr];
      }, []);
  };
  return (
    <div className="bg-dark-bg  flex flex-col lg:flrx-col xl:flex-row justify-between gap-8 lg:gap-16 py-12 xl:py-0 px-4 sm:px-24 md:px-30 lg:px-36 xl:px-42 2xl:!px-48">
      <div className="w-full lg:max-w-3xl flex flex-col gap-y-8 lg:gap-y-16 justify-center">
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-center xl:text-start">
            {formatTitle(props?.title)}
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-2xl font-normal leading-relaxed text-center xl:text-start">
            {props?.description}
          </p>
        </div>
        <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4 items-center xl:items-start">
          <div className="flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6 text-white text-lg sm:text-2xl lg:text-4xl font-bold">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="36"
              viewBox="0 0 71 80"
              fill="none"
              className="w-8 h-9 sm:w-10 sm:h-12 lg:w-12 lg:h-14 flex-shrink-0"
              aria-label="Clutch logo"
            >
              <path
                d="M55.4943 56.3265C51.4138 59.5918 45.7012 62.0408 39.9885 62.0408C26.931 62.0408 17.954 52.2449 17.954 39.1837C17.954 26.1224 26.931 17.1428 39.9885 17.1428C45.7012 17.1428 51.4138 18.7755 55.4943 22.8571L57.9425 25.3061L71 13.0612L67.7356 10.6122C60.3908 4.08162 50.5977 0 39.9885 0C17.1379 0 0 17.1429 0 40C0 62.8571 17.1379 80 39.9885 80C50.5977 80 60.3908 75.9184 67.7356 69.3878L71 66.9388L57.9425 53.8775L55.4943 56.3265Z"
                fill="white"
              />
              <path
                d="M39.1725 53.0614C46.3839 53.0614 52.2299 47.2137 52.2299 40.0002C52.2299 32.7867 46.3839 26.939 39.1725 26.939C31.961 26.939 26.115 32.7867 26.115 40.0002C26.115 47.2137 31.961 53.0614 39.1725 53.0614Z"
                fill="#EF4335"
              />
            </svg> */}
            <div>
            {props?.mainRating?.logo?.node?.mediaItemUrl && (
              <Image src={props?.mainRating?.logo?.node?.mediaItemUrl} alt="award logo" width={32} height={36} />
            )}
            </div>
            {props?.mainRating?.value}
            <div className="">
              <StarRating
                rating={Number(props?.mainRating?.value) ?? 0}
                aria-label={`Rating of ${rating} stars`}
              />
            </div>
          </div>
          <div className="text-base sm:text-lg lg:text-xl font-normal text-light-bg opacity-75 text-center sm:text-left">
            {props?.mainRating?.reviewCount}
          </div>
        </div>
      </div>

      {/* Award Cards - responsive layout */}
      <div className="flex gap-x-6 sm:gap-x-8 lg:gap-x-14 justify-center xl:justify-end mt-8 lg:mt-0">
        <VerticalAwardScroll>
          {props?.awards?.map((award, idx) => (
            <AwardCard key={idx} image={award?.image?.node?.mediaItemUrl} text={award?.title} />
          ))}
        </VerticalAwardScroll>
        <VerticalAwardScroll reverse>
          {props?.awards?.map((award, idx) => (
            <AwardCard key={idx} image={award?.image?.node?.mediaItemUrl} text={award?.title} />
          ))}
        </VerticalAwardScroll>
      </div>
    </div>
  );
};

export default AwardComponent;
