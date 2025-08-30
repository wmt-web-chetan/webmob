import dynamic from "next/dynamic";

export const sectionRegistry = {
//   caseStudies: dynamic(() => import("./CaseStudiesSection/index")),
ctaWithButtons: dynamic(()=>import("./HomePage/HeroSection"))
    
};
