
import AboutSection from "@/sections/HomePage/AboutSection";
import AwardsSection from "@/sections/HomePage/AwardsSection";
import { BlogsSection } from "@/sections/HomePage/BlogsSection";
import BrandsSection from "@/sections/HomePage/BrandsSection";
import CaseStudiesSection from "@/sections/HomePage/CaseStudiesSection";
import DepartmentSection from "@/sections/HomePage/DepartmentSection";
import { GridSection } from "@/sections/HomePage/GridSection";
import HeroSection from "@/sections/HomePage/HeroSection";
import MarqueeVideoSection from "@/sections/HomePage/MarqueeVideoSection";
import ServicesSection from "@/sections/HomePage/ServicesSection";
import StatisticsSection from "@/sections/HomePage/StatisticsSection";
import TestimonialsSection from "@/sections/HomePage/TestimonialsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <DepartmentSection />
      <BrandsSection />
      <ServicesSection />
      <CaseStudiesSection/>
      <BlogsSection />
      <StatisticsSection />
      <MarqueeVideoSection />
      <AboutSection />
      <TestimonialsSection />
      <GridSection />                                                                                                                                                             



    </>
  );
}
