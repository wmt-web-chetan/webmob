import React from "react";
import BlogCard from "@/components/BlogCardV2";
import BlogImg from "@/assets/images/netflix1.png";
import Ceo from "@/assets/images/ceo.png";

const blogs = [
  {
    id: 1,
    title: "How AI is Changing the Future",
    description:
      "Discover how artificial intelligence is shaping industries across the world.",
    tags: ["Latest", "Big Data", "Future"],
    image: BlogImg,
    author: "Pramesh Jain",
    authorImg: Ceo,
    date: new Date(),
  },
  {
    id: 2,
    title: "Building Scalable Apps with Next.js",
    description:
      "A deep dive into Next.js features and best practices for scaling apps.",
    tags: ["Development", "Next.js"],
    image: BlogImg,
    author: "Pramesh Jain",
    authorImg: Ceo,
    date: new Date(),
  },
  {
    id: 3,
    title: "UI/UX Trends for 2025",
    description:
      "Explore the latest design trends that will dominate the digital space in 2025.",
    tags: ["Design", "Trends"],
    image: BlogImg,
    author: "Pramesh Jain",
    authorImg: Ceo,
    date: new Date(),
  },
  {
    id: 4,
    title: "The Rise of Cloud-Native Applications",
    description:
      "Why businesses are shifting towards cloud-native apps for scalability and resilience.",
    tags: ["Cloud", "Kubernetes", "DevOps"],
    image: BlogImg,
    author: "Pramesh Jain",
    authorImg: Ceo,
    date: new Date(),
  },
  {
    id: 5,
    title: "Mastering Data Visualization in 2025",
    description:
      "Tips and tools to make your dashboards and data stories stand out.",
    tags: ["Data", "Visualization", "Analytics"],
    image: BlogImg,
    author: "Pramesh Jain",
    authorImg: Ceo,
    date: new Date(),
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Startups",
    description:
      "Learn the must-have security strategies for protecting sensitive data.",
    tags: ["Cybersecurity", "Startups", "Best Practices"],
    image: BlogImg,
    author: "Pramesh Jain",
    authorImg: Ceo,
    date: new Date(),
  },
];

const RelatedBlogs = () => {
  return (
    <div className="w-full px-wrapper flex flex-col gap-8 md:gap-10 lg:gap-12 items-center section-padding-y">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl to-text-primary font-normal text-center px-4">
        Related <span className="font-bold">Blogs</span>
      </h1>
      <div className="flex flex-col gap-6 md:gap-8 items-center w-full">
        <div className="grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-3 3xl:grid-cols-4 gap-4 md:gap-6 w-full ">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        <div className="text-center mt-4">
            <button
            //   onClick={() => router.push("/case-study")}
              className="bg-gradient-primary hover:bg-primary text-white px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View All
            </button>
          </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
