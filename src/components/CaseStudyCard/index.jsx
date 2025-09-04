"use client";

import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import "./casestudycard.css";

export default function CaseStudyCard({
  caseStudy,
  isFullWidth = false,
  isLatest = false,
}) {
  return (
    <div className="group overflow-hidden border-0 transition-all duration-300 h-full flex flex-col rounded-[42px] case-study-card">
      <div
        className={
          isFullWidth
            ? "p-4 sm:p-6 md:p-8 xl:p-0 flex-1 flex flex-col"
            : "p-4 sm:p-6 md:p-8 flex-1 flex flex-col"
        }
      >
        <div
          className={
            isFullWidth
              ? "flex flex-col xl:flex-row h-full flex-1 gap-8"
              : "flex-1 flex flex-col"
          }
        >
          {isFullWidth ? (
            <div className="w-full bg-white overflow-hidden transition-shadow duration-300 group case-study-card rounded-[42px]">
              <div className="flex flex-col xl:flex-row justify-between h-full xl:p-8 2xl:p-10 gap-8">
                
                {/* Image Section - First on mobile, second on desktop */}
                <div className="w-full xl:w-[65%] order-1 xl:order-2">
                  <div className="h-[250px] sm:h-[350px] md:h-[450px] xl:h-full relative rounded-[42px] overflow-hidden shadow-lg">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={`${caseStudy.title} case study preview`}
                      fill
                      className="object-cover bg-white hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Content Section - Second on mobile, first on desktop */}
                <div className="w-full xl:w-[35%] flex flex-col justify-between min-h-[400px] sm:min-h-[500px] order-2 xl:order-1 pb-4 xl:pb-0">
                  <div>
                    {/* Our Latest Work Label */}
                    {isLatest && (
                      <h5 className="text-primary text-sm sm:text-base font-medium pb-3">
                        Our Latest Work
                      </h5>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight group-hover:text-gradient-primary transition-colors pb-4">
                      {caseStudy.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-text-primary leading-relaxed text-pretty pb-8 sm:pb-12 md:pb-16">
                      {caseStudy.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm sm:text-base px-3 sm:px-4 py-2 text-black hover:bg-white transition-colors rounded-full inline-block"
                          style={{ backgroundColor: "rgba(180, 180, 180, 0.20)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Case Study Button */}
                  <div className="mt-6 sm:mt-10 xl:mt-12">
                    <PrimaryButton
                      text={
                        <div className="flex items-center gap-1 text-base sm:text-lg font-medium px-2">
                          <span>View Case Study</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M20 12.5L12 20M20 12.5L12 5M20 12.5H4"
                              stroke="var(--color-primary)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      }
                      className="bg-transparent hover:bg-transparent border border-primary text-primary transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Image Section */}
              <div className="relative mb-6 w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-[42px] overflow-hidden shadow-lg">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={`${caseStudy.title} case study preview`}
                  fill
                  className="object-cover bg-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary leading-tight pb-4">
                  {caseStudy.title}
                </h3>

                <p className="text-base sm:text-lg text-text-primary font-normal leading-relaxed text-pretty pb-8 sm:pb-12">
                  {caseStudy.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm sm:text-base px-3 sm:px-4 py-2 text-black hover:bg-white transition-colors rounded-full inline-block"
                      style={{ backgroundColor: "rgba(180, 180, 180, 0.20)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-start sm:justify-between items-center mt-6 sm:mt-10 xl:mt-12">
                <PrimaryButton
                  text={
                    <div className="flex items-center gap-1 text-base sm:text-lg font-medium px-2 ">
                      <span>View Case Study</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M20 12.5L12 20M20 12.5L12 5M20 12.5H4"
                          stroke="var(--color-primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  }
                  className="bg-transparent hover:bg-transparent border border-primary text-primary transition-all duration-200"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
