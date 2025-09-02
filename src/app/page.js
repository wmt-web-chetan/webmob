
import AwardSection from "@/components/AwardSection";
import Header from "@/components/Header";
import AboutSection from "@/sections/HomePage/AboutSection";
import { BlogsSection } from "@/sections/HomePage/BlogsSection";
import FaqSection from "@/sections/HomePage/FaqSection";
import TestimonialsSection from "@/sections/HomePage/TestimonialsSection";
import { sectionRegistry } from "@/sections/sectionsRegistry";
import { getPageData } from "@/utils/pageApi";

export default async function Home() {
  const data = await getPageData("home");
  const pageBlocks = data?.data?.pageBy?.pageBuilder?.pageBuilder || [];
  console.log(pageBlocks, "ffffff");
  return (
    <>
      {pageBlocks.map((block, i) => {
        const key = Object.keys(block)[0];
        const Component = sectionRegistry[key];

        if (!Component) {
          console.warn(`No component found for ${key}`);
          return null;
        }

        return <Component key={i} {...block[key]} />;
      })}
      <Header />
      <AwardSection/>
      <TestimonialsSection/>
      <FaqSection />
      <BlogsSection />
      <AboutSection />
                                                                                                                              
    </>
  );
}
