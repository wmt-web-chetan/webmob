"use client";

import Image from "next/image";

export default function CaseStudyCard({ caseStudy, isFullWidth = false }) {
  return (
    <div
      className="group overflow-hidden border-0 transition-all duration-300 rounded-4xl"
      style={{ backgroundColor: "#f0f4ff" }}
    >
      <div className={isFullWidth ? "p-0" : "p-6"}>
        <div className={isFullWidth ? "flex flex-col lg:flex-row h-full" : ""}>
          {isFullWidth ? (
            <>
              {/* Content Section for Full Width */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-gradient-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-md text-gray-600 mb-6 leading-relaxed text-pretty">
                    {caseStudy.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy?.categories?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm px-4 py-2 text-black hover:bg-white transition-colors rounded-full inline-block"
                        style={{ backgroundColor: "#B4B4B433" }}
                      >
                        {tag?.cateogoryName}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <button className="w-fit bg-transparent hover:bg-transparent border-1 border-primary text-primary transition-all duration-200 px-4 py-2 rounded-full flex items-center gap-2">
                    <span>View Case Study</span>
                    <i className="icon-right-open"></i>
                  </button>
                </div>
              </div>
              {/* Image Section for Full Width */}
              <div className="lg:w-3/5 m-4 relative min-h-[500px] lg:min-h-[600px]">
                <div
                  className="absolute inset-4 rounded-4xl overflow-hidden"
                  style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
                >
                  <Image
                    src={
                      caseStudy?.image?.node?.mediaItemUrl || "/placeholder.svg"
                    }
                    alt={`${caseStudy.title} case study preview`}
                    fill
                    className="object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image Section for Half Width */}
              <div
                className="relative mb-6 h-124 rounded-4xl overflow-hidden"
                style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
              >
                <Image
                  src={
                    caseStudy?.image?.node?.mediaItemUrl || "/placeholder.svg"
                  }
                  alt={`${caseStudy.title} case study preview`}
                  fill
                  className="object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content Section for Half Width */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gradient-primary transition-colors">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 mb-4 text-base leading-relaxed text-pretty">
                {caseStudy.description}
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {caseStudy?.categories?.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm px-4 py-2 text-black rounded-full inline-block"
                      style={{ backgroundColor: "#B4B4B433" }}
                    >
                      {tag?.cateogoryName}
                    </span>
                  ))}
                </div>
                <button className="bg-transparent hover:bg-transparent hover:cursor-pointer border-1 border-primary text-primary px-3 py-1.5 text-sm rounded-full transition-all duration-200 flex items-center gap-2">
                  <span>View Case Study</span>
                  <i className="icon-right-open"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
