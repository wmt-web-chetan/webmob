import { Card, CardContent } from "@/components/IconTextCard"
import "./about.css"

const defaultFeatures = [
  {
    id: "artists-geeks",
    title: "Artists and Geeks",
    description: "Artists create with coffee, papers, and tools. We analyze, explore, implement, test, and support.",
    icon: (
      <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L11.91 12.25L15.83 8.33L17.5 10H19V9H21ZM1 9H3V7H1V9ZM3 13H1V11H3V13ZM1 17H3V15H1V17Z" />
      </svg>
    ),
  },
  {
    id: "success-goal",
    title: "Your Success Our Goal",
    description: "We focus on your online success by meeting development goals on time. We plan and execute.",
    highlighted: true,
    icon: (
      <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" />
      </svg>
    ),
  },
  {
    id: "digital-companions",
    title: "Digital Companions",
    description: "We design to meet your needs. Developers explore advancements for seamless solutions.",
    icon: (
      <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 3H4C2.9 3 2 3.9 2 5V15C2 16.1 2.9 17 4 17H8L7 18V19H17V18L16 17H20C21.1 17 22 16.1 22 15V5C22 3.9 21.1 3 20 3ZM20 15H4V5H20V15ZM6 13H8V11H6V13ZM10 13H12V11H10V13ZM14 13H16V11H14V13Z" />
      </svg>
    ),
  },
  {
    id: "quality-process",
    title: "Quality Driven Process",
    description: "We create software people love, focusing on quality apps and web development.",
    icon: (
      <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L22 9L16 14L18 22L12 19L6 22L8 14L2 9L10.91 8.26L12 2ZM12 15.4L16.2 18L15.1 13.1L19 9.7L14 9.2L12 4.8L10 9.2L5 9.7L8.9 13.1L7.8 18L12 15.4Z" />
      </svg>
    ),
  },
]

export default function AboutSection({
  title = "Why Choose WebMob Technologies?",
  subtitle = "With a team of well-trained, experienced, quick learners we have the ability to crack every software complexity & challenges to build a seamless custom solution for you",
  features = defaultFeatures,
}) {
  return (
    <section className=" bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/5 space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title.split("WebMob Technologies").map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && <span className="text-gradient-primary">WebMob Technologies</span>}
                  </span>
                ))}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Right Column - Dynamic Feature Cards Grid */}
          <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="bg-white/90 backdrop-blur-sm border-0 right-icon shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 w-16 h-16 opacity-30 "></div>
                <CardContent className="p-4 flex flex-col space-y-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.highlighted ? (
                      <span className="bg-cyan-100 px-2 py-1 rounded-full text-base">
                        {feature.title}
                      </span>
                    ) : (
                      feature.title
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
