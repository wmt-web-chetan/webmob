import Image from "next/image";
import React from "react";
import ChallengeImage from "@/assets/images/challenge.jpg";

const issues = [
  {
    title: "High response time",
    description: "Average first response took 6–8 hours.",
  },
  {
    title: "Inconsistent quality",
    description: "Agents provided varying answers to the same queries.",
  },
  {
    title: "High cost",
    description: "Support operations consumed ~25% of operational budget.",
  },
  {
    title: "Scalability issues",
    description:
      "During seasonal peaks, customer queries doubled, overwhelming the team.",
  },
];

const ChallengesSection = () => {
  return (
    <div className="px-wrapper-v2 section-padding-y flex flex-col gap-6 bg-[#f4f4f6]">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-text-primary h2-heading font-bold">Challenge</h2>
          <p className="text-text-secondary text-base sm:text-xl md:text-2xl">
            The client’s pain points were clear
          </p>
        </div>
        <div className="flex flex-col-reverse xl:flex-row  gap-6">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-6 ">
            {issues.map((item, index) => (
              <div
                key={index}
                className="rounded-4xl border border-text-disabled px-6 py-8 hover:shadow-sm transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="text-base sm:text-xl md:text-2xl font-normal text-text-secondary mt-0 sm:mt-2 xl:mt-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <Image
              src={ChallengeImage}
              alt="challenge"
              width={400}
              height={400}
              className="w-full h-full rounded-4xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="p-8 bg-white rounded-4xl flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl text-primary font-medium">
          ShopSphere wanted a scalable AI solution that could
        </h1>
        <ul className="ps-4 list-disc list-outside flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-6 text-base sm:text-xl md:text-2xl">
          <li>Handle multiple languages</li>
          <li>Provide real-time responses</li>
          <li>Integrate with ShopSphere's existing systems</li>
          <li>Be scalable and cost-effective</li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengesSection;
