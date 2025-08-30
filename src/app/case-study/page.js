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
    <div className=" pt-36 section-background h-screen">
      {/* Header */}
      <div className="px-wrapper flex justify-between items-center ">
        <div className="flex flex-col items-start gap-y-4">
          <h1 className="text-gradient-secondry text-7xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold">
            Case Studies
          </h1>
          <p className="text-text-text-secondary text-2xl">
            Explore how our tailored solutions transformed complex problems into
            success stories.
          </p>
        </div>
        <div className="pb-7">
          <Image src={backdropImage} alt="backdrop-img" className="w-32 " />
        </div>
      </div>

      {/* Latest Study */}
      <div className="px-wrapper pt-16">
        <CaseStudyCard caseStudy={latestStudy} isFullWidth={true} />
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
