"use client";

import CaseStudyCard from "@/components/CaseStudyCard";
import { useRouter } from "next/navigation";


export default function CaseStudiesSection(props) {
  console.log(props)
  const router = useRouter();

  if (!props?.portfolios?.nodes || props.portfolios.nodes.length === 0) {
    return null;
  }

  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length < 2) return title;
    
    return words.map((word, index) => {
      if (index === 1) {
        return (
          <span key={index} className="text-gradient-primary">
            {word}
          </span>
        );
      }
      return word;
    }).reduce((prev, curr, index) => {
      return index === 0 ? [curr] : [...prev, " ", curr];
    }, []);
  };

  const caseStudies = props.portfolios.nodes.map((node, index) => {
    const portfolio = node.portfolios.caseStudiesCard;
    return {
      id: index + 1,
      title: portfolio.title,
      description: portfolio.description,
      image: portfolio.thumnail?.node?.mediaItemUrl,
      tags: portfolio.technologyTags?.tag ? [portfolio.technologyTags.tag] : [],
      category: portfolio.technologyTags?.tag || "General",
      isFullWidth: portfolio.technologyTags?.isFeatured || false,
      viewCaseStudy: portfolio.viewCaseStudy
    };
  });

  return (
    <div className="bg-white">
      <section className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {props?.title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {formatTitle(props.title)}
            </h2>
          )}
          {props?.subtitle && (
            <p className="text-base sm:text-lg text-gray-600 w-full max-w-3xl mx-auto text-pretty">
              {props.subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className={caseStudy.isFullWidth ? "md:col-span-full lg:col-span-full" : ""}
            >
              <CaseStudyCard
                caseStudy={caseStudy}
                isFullWidth={caseStudy.isFullWidth}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        {props?.viewAll?.title && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => router.push(props.viewAll.url || "/case-study")}
              className="bg-gradient-primary hover:bg-blue-700 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {props.viewAll.title}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
