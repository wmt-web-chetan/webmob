"use client";

import CaseStudyCard from "@/components/CaseStudyCard";
import { useRouter } from "next/navigation";

const allCaseStudies = [
  {
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
    category: "E-commerce",
    isFullWidth: true, // ✅ coming from WordPress
  },
  {
    id: 2,
    title: "StreamBase",
    description:
      "Revolutionizing AV Distribution with Seamless, Scalable, and Ultra-Low Latency Video and Audio Over IP.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/Next-Gen-Av-over-IP-Distribution-Platform-Stream-Base.png",
    tags: [
      "AI Core IP",
      "IP Based Routing",
      "Video Wall Support",
      "Full Control/Power over Ethernet",
    ],
    category: "Media Technology",
    isFullWidth: false,
  },
  {
    id: 3,
    title: "Melly",
    description: "Mental Wellness App Powered by AI Insights.",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2024/09/Melly_Signup.webp",
    tags: [
      "Categorized Content",
      "CBT Exercise",
      "Melly Coach AI",
      "Today's Plan",
      "Personalized Program",
    ],
    category: "Healthcare",
    isFullWidth: false,
  },
];

export default function CaseStudiesSection() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <section className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Case <span className="text-gradient-primary">Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 w-full max-w-3xl mx-auto text-pretty">
            Explore how our tailored solutions transformed complex problems into
            success stories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-2">
          {allCaseStudies.map((caseStudy) => (
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
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => router.push("/case-study")}
            className="bg-gradient-primary hover:bg-blue-700 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            View All
          </button>
        </div>
      </section>
    </div>
  );
}
