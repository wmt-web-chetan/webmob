import BlogDetail from "@/sections/BlogDetail"; 
import React from "react";

const page = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 section-background w-full min-h-screen">
      <div className="px-wrapper">
        <BlogDetail />
      </div>    
    </div>
  );
};

export default page;
