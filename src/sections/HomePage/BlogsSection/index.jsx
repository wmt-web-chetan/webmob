import { BlogCard } from "@/components/BlogCard";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

export default function BlogsSection(props) {
  // Handle both direct props and nested blogsGrid structure
  const data = props?.blogsGrid || props;
  
  // Default data as fallback
  const defaultFeaturedBlog = {
    title: "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
    highlightedText: "Ensuring Your HealthTech App",
    description:
      "It's no secret, really, the HealthTech market is absolutely booming right now. Innovation is, of course, driving incredible progress, and that's wonderful to see. But at the heart of this sector, perhaps more than any other, is trust. Patients are sharing truly sensitive data, and understandably, they expect it to be kept safe, completely secure.",
    author: "Marketing WMT",
    date: "Aug 20, 2025",
    tags: ["Latest", "Tech", "Health"],
    imageSrc: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-4-1.png",
    readMoreLink: "#",
  };

  const defaultBlogCards = [
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-2.png",
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-9.png",
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-2.png",
      readMoreLink: "#",
    },
  ];

  // Extract dynamic data
  const title = data?.title || "Explore Our Latest Insights";
  const subtitle = data?.subtitle || "Exploring the latest insights and trends in your industry.";
  
  // Transform blog data from new structure
  const blogNodes = data?.blogList?.nodes || [];
  
  // Find featured post (isfeatured: true)
  const featuredPost = blogNodes.find(node => node.blogCardFields?.isfeatured === true);
  
  // Transform featured post data
  const featuredBlog = featuredPost ? {
    title: featuredPost.title,
    highlightedText: featuredPost.title?.split(' ').slice(-3).join(' ') || "Latest Insights",
    description: featuredPost.blogCardFields?.shortDescription || defaultFeaturedBlog.description,
    author: featuredPost.author?.node?.name || "Author",
    date: new Date().toLocaleDateString(), // Date not provided in new structure
    tags: ["Latest"], // Tags not provided in new structure
    imageSrc: featuredPost.blogCardFields?.cardImage?.node?.mediaItemUrl || defaultFeaturedBlog.imageSrc,
    readMoreLink: `/blog/${featuredPost.slug}` || "#",
  } : defaultFeaturedBlog;

  // Transform non-featured posts for grid
  const nonFeaturedPosts = blogNodes.filter(node => node.blogCardFields?.isfeatured !== true);
  const blogCards = nonFeaturedPosts.length > 0 ? nonFeaturedPosts.map(post => ({
    title: post.title,
    tags: ["Latest"], // Tags not provided in new structure
    thumbnailSrc: post.blogCardFields?.cardImage?.node?.mediaItemUrl || defaultBlogCards[0].thumbnailSrc,
    readMoreLink: `/blog/${post.slug}` || "#",
  })) : defaultBlogCards;

  // View All button data (using default since not provided in new structure)
  const viewAllButton = { title: "View All Blogs", url: "/blog" };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24 w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="h2-heading font-bold text-gray-900 mb-4 sm:mb-6">
          {title.includes(' ') ? (
            <>
              {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-primary">{title.split(' ').slice(-1)[0]}</span>
            </>
          ) : (
            <span className="text-gradient-primary">{title}</span>
          )}
        </h1>
        <p className="h2-description text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 items-stretch">
        {/* Featured Blog - Left 50% */}
        <div className="lg:col-span-1">
          <BlogCard {...featuredBlog} className="h-full" />
        </div>

        {/* Smaller Blog Cards - Right 50% */}
        <div className="lg:col-span-1 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-6 lg:gap-4 xl:gap-4 h-full content-stretch">
            {blogCards.slice(0, 4).map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-4 sm:p-5 lg:p-4 xl:p-5 border border-text-disabled flex flex-col"
              >
                <div className="flex gap-3 sm:gap-4 lg:gap-3 xl:gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      height={100}
                      width={100}
                      src={blog.thumbnailSrc || "/placeholder.svg"}
                      alt="Blog thumbnail"
                      className="w-24 sm:w-28 lg:w-24 xl:w-36 aspect-square rounded-lg  border border-disabled-text"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                        {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-sm sm:text-base lg:text-sm xl:text-base font-semibold text-gray-900 mb-2 line-clamp-2 lg:line-clamp-3 leading-tight">
                        {blog.title}
                      </h3>
                    </div>
                    <a
                      href={blog.readMoreLink}
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium transition-colors duration-200 mt-auto"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center">
        <a 
          href={viewAllButton.url} 
          target={viewAllButton.target || "_self"}
        >
          <PrimaryButton
            text={viewAllButton.title}
            className="bg-gradient-primary text-white font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
          />
        </a>
      </div>
    </section>
  );
}