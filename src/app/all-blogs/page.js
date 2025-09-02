
import React from "react";
import RelatedBlogs from "@/sections/BlogList/RelatedBlogs";
import LatestBlog from "@/sections/BlogList/LatestBlog";
import BlogFilter from "@/sections/BlogList/BlogFilter";



const Page = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 section-background min-h-screen">
      <BlogFilter />
      <LatestBlog />
      <RelatedBlogs />
    </div>
  );
};

export default Page;
