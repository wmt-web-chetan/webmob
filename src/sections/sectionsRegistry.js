import dynamic from "next/dynamic";

export const sectionRegistry = {
  ctaWithButtons: dynamic(() => import("./HomePage/HeroSection")),
  trustedBrands: dynamic(()=>import("./HomePage/BrandsSection")),
  servicestabs: dynamic(()=>import("./HomePage/DepartmentSection")),  
  smartServices: dynamic(()=>import("./HomePage/ServicesSection")),
  aiPlatformHero: dynamic(()=>import("./HomePage/AICTASection")),
  caseStudy: dynamic(()=>import("./HomePage/CaseStudiesSection")),
  technologyShowcase: dynamic(()=>import("./HomePage/GridSection")),
  statisticsSection: dynamic(()=>import("./HomePage/StatisticsSection")),
  scrollingTicker: dynamic(()=>import("./HomePage/MarqueeSection")),
  clientTestimonials: dynamic(()=>import("./HomePage/VideoSection")),
  awardsRecognition:dynamic(()=>import("./HomePage/AwardsSection")),
  faqSection: dynamic(()=>import("./HomePage/FaqSection")),
  whyChooseFeatures: dynamic(()=>import("./HomePage/AboutSection")),
  blogsGrid: dynamic(()=>import("./HomePage/BlogsSection")),
  clientTestimonialsCarousel: dynamic(()=>import("./HomePage/TestimonialsSection"))
};
