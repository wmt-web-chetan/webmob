"use client";

import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import "./casestudycard.css";

export default function CaseStudyCard({ caseStudy, isFullWidth = false }) {
  return (
    <div className="group overflow-hidden border-0 transition-all duration-300 rounded-4xl h-full flex flex-col case-study-card">
      <div
        className={
          isFullWidth
            ? "p-0 flex-1 flex flex-col"
            : "p-4 sm:p-6 flex-1 flex flex-col"
        }
      >
        <div
          className={
            isFullWidth
              ? "flex flex-col lg:flex-row h-full flex-1"
              : "flex-1 flex flex-col"
          }
        >
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
                    text={
                      <>
                        <span>View Case Study</span>
                        {/* <i className="icon-right-open"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M19.999 12.5206C19.9987 12.5381 19.9983 12.5557 19.9971 12.5733C19.9935 12.6223 19.9859 12.6701 19.9756 12.7168C19.9731 12.7279 19.9706 12.739 19.9678 12.75C19.9504 12.8173 19.9257 12.8814 19.8955 12.9424C19.8484 13.0377 19.7864 13.1277 19.707 13.2071L12.707 20.2071C12.3165 20.5976 11.6835 20.5976 11.293 20.2071C10.9025 19.8166 10.9025 19.1835 11.293 18.793L16.5859 13.5H5C4.44774 13.5 4.00004 13.0523 4 12.5C4 11.9478 4.44772 11.5 5 11.5H16.5859L11.293 6.20708C10.9025 5.81657 10.9025 5.18354 11.293 4.79302C11.6835 4.40249 12.3165 4.40249 12.707 4.79302L19.707 11.793C19.7642 11.8502 19.8134 11.9148 19.8555 11.9844C19.8675 12.0044 19.8791 12.0244 19.8896 12.045C19.9216 12.1073 19.9474 12.1732 19.9658 12.2422C19.9702 12.2588 19.975 12.2753 19.9785 12.292C19.9808 12.303 19.9824 12.3141 19.9844 12.3252C19.9875 12.3428 19.99 12.3603 19.9922 12.378C19.9943 12.3957 19.9959 12.4136 19.9971 12.4317C19.9982 12.4476 19.9987 12.4636 19.999 12.4795C19.9992 12.4863 20 12.4932 20 12.5C20 12.5069 19.9992 12.5137 19.999 12.5206Z"
                            fill="var(--color-primary)"
                          />
                        </svg>
                      </>
                    }
                    className="w-fit bg-transparent hover:bg-transparent border-1 border-primary text-primary transition-all duration-200 flex items-center gap-2"
                  />
                </div>
              </div>
              {/* Image Section for Full Width */}
              <div className="w-full lg:w-3/5 order-first lg:order-last">
                <div
                  className="m-4 relative h-64 sm:h-80 lg:h-96 rounded-2xl lg:rounded-4xl overflow-hidden"
                  style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
                >
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
              <div
                className="relative mb-4 sm:mb-6 w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl lg:rounded-4xl overflow-hidden"
                style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
              >
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
                  text={
                    <>
                      <span>View Case Study</span>{" "}
                      {/* <i className="icon-right-open"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M19.999 12.5206C19.9987 12.5381 19.9983 12.5557 19.9971 12.5733C19.9935 12.6223 19.9859 12.6701 19.9756 12.7168C19.9731 12.7279 19.9706 12.739 19.9678 12.75C19.9504 12.8173 19.9257 12.8814 19.8955 12.9424C19.8484 13.0377 19.7864 13.1277 19.707 13.2071L12.707 20.2071C12.3165 20.5976 11.6835 20.5976 11.293 20.2071C10.9025 19.8166 10.9025 19.1835 11.293 18.793L16.5859 13.5H5C4.44774 13.5 4.00004 13.0523 4 12.5C4 11.9478 4.44772 11.5 5 11.5H16.5859L11.293 6.20708C10.9025 5.81657 10.9025 5.18354 11.293 4.79302C11.6835 4.40249 12.3165 4.40249 12.707 4.79302L19.707 11.793C19.7642 11.8502 19.8134 11.9148 19.8555 11.9844C19.8675 12.0044 19.8791 12.0244 19.8896 12.045C19.9216 12.1073 19.9474 12.1732 19.9658 12.2422C19.9702 12.2588 19.975 12.2753 19.9785 12.292C19.9808 12.303 19.9824 12.3141 19.9844 12.3252C19.9875 12.3428 19.99 12.3603 19.9922 12.378C19.9943 12.3957 19.9959 12.4136 19.9971 12.4317C19.9982 12.4476 19.9987 12.4636 19.999 12.4795C19.9992 12.4863 20 12.4932 20 12.5C20 12.5069 19.9992 12.5137 19.999 12.5206Z"
                          fill="var(--color-primary)"
                        />
                      </svg>
                    </>
                  }
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
