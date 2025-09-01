import { BlogCard } from "@/components/BlogCard";
import PrimaryButton from "@/components/PrimaryButton";

export function BlogsSection() {
  const featuredBlog = {
    title: "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
    highlightedText: "Ensuring Your HealthTech App",
    description:
      "It's no secret, really, the HealthTech market is absolutely booming right now. Innovation is, of course, driving incredible progress, and that's wonderful to see. But at the heart of this sector, perhaps more than any other, is trust. Patients are sharing truly sensitive data, and understandably, they expect it to be kept safe, completely secure.",
    author: "Marketing WMT",
    date: "Aug 20, 2025",
    tags: ["Latest", "Tech", "Health"],
    imageSrc: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-4-1.png",
    readMoreLink: "#",
  }

  const blogCards = [
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-2.png", // doctor tablet
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-9.png", // futuristic healthcare tech
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80", // data visualization
      readMoreLink: "#",
    },
    {
      title:
        "The Founder's Checklist: 7 Steps to Ensuring Your HealthTech App is HIPAA Compliant from Day One",
      tags: ["Latest", "Tech", "Health"],
      thumbnailSrc:
        "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/08/WMT-Featured-Image-For-Blogs-2.png", // doctor tablet
      readMoreLink: "#",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24 w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Explore Our Latest <span className="text-gradient-primary">Insights</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Exploring the latest insights and trends in your industry.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
        {/* Featured Blog - Takes 2 columns on xl+ screens */}
        <div className="xl:col-span-1">
          <BlogCard {...featuredBlog} />
        </div>

        {/* Smaller Blog Cards */}
        <div className="flex flex-col justify-between h-full gap-4 sm:gap-6 lg:gap-8">
          {blogCards.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-4 sm:p-5 lg:p-6 border border-disabled-text flex-1"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={blog.thumbnailSrc || "/placeholder.svg"}
                    alt="Blog thumbnail"
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-3 leading-tight">
                    {blog.title}
                  </h3>
                  <a
                    href={blog.readMoreLink}
                    className="text-blue-600 hover:text-blue-700 text-base sm:text-lg font-medium transition-colors duration-200"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center">
        <PrimaryButton
          text="View All Blogs"
          className="bg-gradient-primary text-white font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
        />
      </div>
    </section>
  )
}