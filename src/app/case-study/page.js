"use client";
import CaseStudyCard from "@/components/CaseStudyCard";
import CaseStudyFilter from "@/sections/CaseStudyPage/CaseStudyFilter/CaseStudyFilter";
import Image from "next/image";
import backdropImage from "@/assets/images/Group 74.png";
import AwardSection from "@/components/AwardSection";
import FaqSection from "@/sections/HomePage/FaqSection";

const latestStudy = {
  id: 1,
  title: "Viva Wireless",
  description:
    "Robust B2B/B2C eCommerce and POS Solution with Dynamic Pricing, Membership Integration, and Real-Time Inventory Sync.",
  image:
    "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/0d6a55646e9aa800ca19a86402554b868c16be30.png",
  tags: [
    "Bulk Return",
    "Bulk Discount",
    "Maintenance",
    "My Wallet",
    "Pay Later",
    "POS",
    "Wholesale & Retail",
  ],
  country: "usa",
  technology: "mern",
  industry: "product",
  isFullWidth: true,
};

const CaseStudy = () => {
  return (
    <div className="pt-28 section-background min-h-screen">
      {/* Header */}
      <div className="px-wrapper flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex flex-col items-start gap-y-3 sm:gap-y-4">
          <h1 className="text-gradient-secondry text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Case Studies
          </h1>
          <p className="text-text-text-secondary text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Explore how our tailored solutions transformed complex problems into
            success stories.
          </p>
        </div>
        <div className="pb-0 sm:pb-7 hidden sm:block self-center sm:self-auto">
          <Image src={backdropImage} alt="backdrop-img" className="w-20 sm:w-24 lg:w-32" />
        </div>
      </div>

      {/* Latest Study */}
      <div className="px-wrapper pt-8 sm:pt-12 lg:pt-16">
        <CaseStudyCard caseStudy={latestStudy} isFullWidth={true} isLatest={true} />
      </div>

      <CaseStudyFilter />
      <AwardSection count={144} rating={3.6} />
      <FaqSection />

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
       
      `}</style>
    </div>
  );
};

export default CaseStudy;
