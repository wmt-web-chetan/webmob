"use client";

import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import "./casestudycard.css";

export default function CaseStudyCard({ caseStudy, isFullWidth = false }) {
  return (
    <div className="group overflow-hidden border-0 transition-all duration-300 rounded-4xl h-full flex flex-col case-study-card">
      <div className={isFullWidth ? "p-0 flex-1 flex flex-col" : "p-4 sm:p-6 flex-1 flex flex-col"}>
        <div className={isFullWidth ? "flex flex-col lg:flex-row h-full flex-1" : "flex-1 flex flex-col"}>
          {isFullWidth ? (
            <>
              {/* Content Section for Full Width */}
              <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-gradient-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-md text-gray-600 mb-4 sm:mb-6 leading-relaxed text-pretty">
                    {caseStudy.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 text-black hover:bg-white transition-colors rounded-full inline-block"
                        style={{ backgroundColor: "#B4B4B433" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <PrimaryButton 
                    text={<><span>View Case Study</span><i className="icon-right-open"></i></>}
                    className="w-fit bg-transparent hover:bg-transparent border-1 border-primary text-primary transition-all duration-200 flex items-center gap-2"
                  />
                </div>
              </div>
              {/* Image Section for Full Width */}
              <div className="w-full lg:w-3/5 order-first lg:order-last">
                <div className="m-4 relative h-64 sm:h-80 lg:h-96 rounded-2xl lg:rounded-4xl overflow-hidden" style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}>
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={`${caseStudy.title} case study preview`}
                    fill
                    className="object-contain lg:object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image Section for Half Width */}
              <div className="relative mb-4 sm:mb-6 w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl lg:rounded-4xl overflow-hidden" style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}>
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={`${caseStudy.title} case study preview`}
                  fill
                  className="object-cover bg-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content Section for Half Width */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gradient-primary transition-colors">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-pretty">
                {caseStudy.description}
              </p>
              <div className="space-y-3 sm:space-y-4 mt-auto">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {caseStudy.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 text-black rounded-full inline-block"
                      style={{ backgroundColor: "#B4B4B433" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <PrimaryButton 
                  text={<><span>View Case Study</span><i className="icon-right-open"></i></>}
                  className="bg-transparent hover:bg-transparent hover:cursor-pointer border-1 border-primary text-primary text-xs sm:text-sm rounded-full transition-all duration-200 flex items-center gap-2"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}