import React from "react";
import BlogImg from "@/assets/images/netflix1.png";
import Ceo from "@/assets/images/ceo.png"; 
import BlogCard from "@/components/BlogCardV2";

const Blog = {
  id: 1,
  title: "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
  description:
    "Ensure your HealthTech app is HIPAA compliant from day one. This founder's checklist covers 7 crucial steps for HIPAA compliant app development, secure EMR integration, and protecting PHI.",
  tags: ["Latest", "Big Data", "Future"],
  image: BlogImg,
  author: "Pramesh Jain",
  authorImg: Ceo,
  date: new Date(),
};
const LatestBlog = () => {
  return (
    <div className="px-wrapper">
      <BlogCard {...Blog} isFullWidth={true} />
    </div>
  );
};

export default LatestBlog;
