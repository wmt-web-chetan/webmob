import { Card, CardContent } from "@/components/IconTextCard"
import "./about.css"
import TalentIcon from "@/assets/SVGs/talent-hand 1.svg"
import UsersIcon from "@/assets/SVGs/users-class 1.svg"
import LightbulbIcon from "@/assets/SVGs/lightbulb-setting 1.svg"
import PaletteIcon from "@/assets/SVGs/palette 1.svg"
import RightSVG from "@/assets/SVGs/right.svg"
import Image from "next/image"

const defaultFeatures = [
  {
    id: "talented-team",
    title: "Talented Team",
    description: "Our skilled professionals bring expertise, creativity, and dedication to every project we undertake.",
    icon: TalentIcon,
  },
  {
    id: "user-focused",
    title: "User-Focused Approach",
    description: "We prioritize user experience and design solutions that truly meet your audience's needs.",
    highlighted: true,
    icon: UsersIcon,
  },
  {
    id: "innovative-solutions",
    title: "Innovative Solutions",
    description: "We leverage cutting-edge technology and creative thinking to solve complex challenges.",
    icon: LightbulbIcon,
  },
  {
    id: "design-excellence",
    title: "Design Excellence",
    description: "Our design team creates beautiful, functional interfaces that engage and delight users.",
    icon: PaletteIcon,
  },
]

export default function AboutSection(props) {
  // Handle both direct props and nested whyChooseFeatures structure
  const data = props?.whyChooseFeatures || props;
  
  const title = data?.title || "Why Choose WebMob Technologies?";
  const subtitle = data?.description || "With a team of well-trained, experienced, quick learners we have the ability to crack every software complexity & challenges to build a seamless custom solution for you";
  
  // Transform dynamic features to match expected format
  const dynamicFeatures = data?.features?.map((feature, index) => ({
    id: `dynamic-feature-${index + 1}`,
    title: feature.title,
    description: feature.description,
    icon: feature.icon?.node?.mediaItemUrl || defaultFeatures[index % defaultFeatures.length].icon,
    highlighted: index === 1, // Keep second item highlighted for consistency
  })) || [];
  
  const features = dynamicFeatures.length > 0 ? dynamicFeatures : defaultFeatures;
  return (
    <section className="bg-[#EBEFFF]">
      <div className="w-full max-w-none mx-auto px-wrapper section-padding-y">
        {/* Mobile & Tablet Layout: Stack content and cards */}
        <div className="lg:hidden">
          {/* Content Section - Full Width & Centered */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 flex-col items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h1 className="h2-heading-large font-bold text-gray-900 leading-tight">
                {title.includes('WebMob Technologies') ? (
                  <>
                    Why Choose <span className="text-gradient-primary">WebMob Technologies</span>?
                  </>
                ) : (
                  <>
                    {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-primary">{title.split(' ').slice(-1)[0]}</span>
                  </>
                )}
              </h1>
              <p className="h2-description text-gray-700 leading-relaxed max-w-2xl md:max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Cards Grid - 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 auto-rows-fr">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="bg-white/90 border-0 right-icon transition-all duration-300 hover:scale-105 rounded-2xl relative overflow-hidden h-full"
              >
                
                <CardContent className="p-3 sm:p-4 md:p-5 flex flex-col space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    />
                  </div>
                  <div className="absolute right-0 top-0">
                    <Image 
                      src={RightSVG} 
                      alt="Card background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-[28px] font-medium text-gray-900">
                    {feature.highlighted ? (
                      <span className="px-2 py-1 rounded-full text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-[28px]">
                        {feature.title}
                      </span>
                    ) : (
                      feature.title
                    )}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:flex flex-row gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-6">
              <h1 className="h2-heading-large font-bold text-gray-900 leading-tight">
                {title.includes('WebMob Technologies') ? (
                  <>
                    Why Choose <span className="text-gradient-primary">WebMob Technologies</span>?
                  </>
                ) : (
                  <>
                    {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-primary">{title.split(' ').slice(-1)[0]}</span>
                  </>
                )}
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed !max-w-lg">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Right Column - Dynamic Feature Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 gap-6 auto-rows-fr">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="bg-white/90 border-0 right-icon transition-all duration-300 hover:scale-105 rounded-2xl relative overflow-hidden h-full"
              >
                
                <CardContent className="p-5 flex flex-col space-y-4">
                  <div className="w-18 h-18 bg-primary rounded-2xl flex items-center justify-center">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="absolute right-0 top-0">
                  <Image 
                    src={RightSVG} 
                    alt="Card background"
                    className="w-full h-full object-cover "
                  />
                </div>
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-[28px] font-medium text-gray-900">
                    {feature.highlighted ? (
                      <span className=" px-2 py-1 rounded-full text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-[28px]">
                        {feature.title}
                      </span>
                    ) : (
                      feature.title
                    )}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
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
