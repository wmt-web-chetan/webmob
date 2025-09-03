
import Image from "next/image"
import clutchReview from "../../../assets/images/clutch_review.svg"
import "./index.css"
import StarRating from "@/components/StarRating"

const AwardsSection = () => {
 

  const leftColumnAwards = [
    {
      id: 1,
      title: "Top Website Developer 2023",
      icon: "🏆",
      color: "bg-orange-500",
      delay: 0,
    },
    {
      id: 2,
      title: "Clutch Champion 2023",
      subtitle: "Clutch",
      icon: "🏅",
      color: "bg-teal-600",
      delay: 200,
    },
    {
      id: 3,
      title: "Top iOS App",
      icon: "📱",
      color: "bg-red-500",
      delay: 400,
    },
    {
      id: 7,
      title: "Best UI/UX Design 2023",
      icon: "🎨",
      color: "bg-purple-500",
      delay: 600,
    },
    {
      id: 8,
      title: "Innovation Award 2023",
      subtitle: "Tech Excellence",
      icon: "💡",
      color: "bg-blue-500",
      delay: 800,
    },
    {
      id: 9,
      title: "Customer Choice 2022",
      icon: "⭐",
      color: "bg-green-500",
      delay: 1000,
    },
  ]

  const rightColumnAwards = [
    {
      id: 4,
      title: "Top Web Developer Real Estate",
      subtitle: "Clutch",
      icon: "🏠",
      color: "bg-gray-600",
      delay: 100,
    },
    {
      id: 5,
      title: "Top Web Development Company in 2022",
      icon: "⭐",
      color: "bg-yellow-500",
      delay: 300,
    },
    {
      id: 6,
      title: "Top Company Development in 2021",
      icon: "🚀",
      color: "bg-gray-700",
      delay: 500,
    },
    {
      id: 10,
      title: "Excellence in E-commerce",
      subtitle: "Digital Awards",
      icon: "🛒",
      color: "bg-indigo-500",
      delay: 700,
    },
    {
      id: 11,
      title: "Mobile App Excellence 2022",
      icon: "📲",
      color: "bg-pink-500",
      delay: 900,
    },
    {
      id: 12,
      title: "Rising Star Agency 2021",
      icon: "🌟",
      color: "bg-cyan-500",
      delay: 1100,
    },
  ]

  return (
    <>
     

      <section 
        className="h-auto section-padding-y" 
        style={{ backgroundColor: "#1B1B35" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-8 lg:gap-16 xl:gap-20 2xl:gap-24 items-center md:items-start">
            {/* Left Content */}
            <div className="max-w-3xl flex flex-col gap-y-8 lg:gap-y-16 justify-center">
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient-secondry">Awards </span>
            <span>That Define</span>
            <br />
            <span>Our Journey</span>
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-2xl font-normal leading-relaxed">
            From innovation to execution, our recognition speaks volumes about
            the quality, creativity, and results we bring to every project.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 lg:gap-y-4">
          <div className="flex items-center gap-x-3 lg:gap-x-6 text-white text-l sm:text-3xl lg:text-5xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="45"
              viewBox="0 0 71 80"
              fill="none"
              className="w-[40px] h-[45px] sm:w-[56px] sm:h-[64px] lg:w-[71px] lg:h-[80px] flex-shrink-0"
            >
              <path
                d="M55.4943 56.3265C51.4138 59.5918 45.7012 62.0408 39.9885 62.0408C26.931 62.0408 17.954 52.2449 17.954 39.1837C17.954 26.1224 26.931 17.1428 39.9885 17.1428C45.7012 17.1428 51.4138 18.7755 55.4943 22.8571L57.9425 25.3061L71 13.0612L67.7356 10.6122C60.3908 4.08162 50.5977 0 39.9885 0C17.1379 0 0 17.1429 0 40C0 62.8571 17.1379 80 39.9885 80C50.5977 80 60.3908 75.9184 67.7356 69.3878L71 66.9388L57.9425 53.8775L55.4943 56.3265Z"
                fill="white"
              />
              <path
                d="M39.1725 53.0614C46.3839 53.0614 52.2299 47.2137 52.2299 40.0002C52.2299 32.7867 46.3839 26.939 39.1725 26.939C31.961 26.939 26.115 32.7867 26.115 40.0002C26.115 47.2137 31.961 53.0614 39.1725 53.0614Z"
                fill="#EF4335"
              />
            </svg>
            {4.2}
            <div className="scale-75 sm:scale-90 lg:scale-100">
              <StarRating rating={4.2} />
            </div>
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-normal text-light-bg opacity-50">
            42 reviews on Clutch
          </div>
        </div>
      </div>

            <div className="flex-shrink-0 w-full sm:w-auto md:w-auto flex justify-center md:justify-start">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-6 justify-items-center md:justify-items-start">
              {/* Left Column - Marquee Up */}
              <div className="awards-marquee-container">
                <div className="awards-marquee-content animate-marquee-up">
                  {/* Duplicate awards for seamless loop */}
                  {[...leftColumnAwards, ...leftColumnAwards].map((award, index) => (
                    <div
                      key={`${award.id}-${index}`}
                      className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 border border-white/20 shadow-xl flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
                    >
                      <div className="text-center space-y-2 sm:space-y-2 md:space-y-3">
                        <div
                          className={`
                            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14
                            ${award.color} rounded-full mx-auto flex items-center justify-center text-white
                            text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl
                          `}
                        >
                          {award.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm text-balance">
                            {award.title}
                          </h3>
                          {award.subtitle && (
                            <p className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm">
                              {award.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Marquee Down */}
              <div className="awards-marquee-container">
                <div className="awards-marquee-content animate-marquee-down">
                  {/* Duplicate awards for seamless loop */}
                  {[...rightColumnAwards, ...rightColumnAwards].map((award, index) => (
                    <div
                      key={`${award.id}-${index}`}
                      className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 border border-white/20 shadow-xl flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
                    >
                      <div className="text-center space-y-2 sm:space-y-2 md:space-y-3">
                        <div
                          className={`
                            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14
                            ${award.color} rounded-full mx-auto flex items-center justify-center text-white
                            text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl
                          `}
                        >
                          {award.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm text-balance">
                            {award.title}
                          </h3>
                          {award.subtitle && (
                            <p className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm">
                              {award.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AwardsSection