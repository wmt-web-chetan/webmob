import Image from "next/image";
import graph from "../../../assets/images/insight_graphs.svg";
import spark from "../../../assets/images/spark.svg";
import PrimaryButton from "@/components/PrimaryButton";

export default function StatisticsSection() {
    return (
      <main className="h-auto bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-12 sm:py-16 md:py-18 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Section */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8 text-center md:text-left">
              <div className="space-y-4 md:space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-gradient-primary">Trusted By</span>
                  <br />
                  <span className="text-foreground">Businesses From</span>
                  <br />
                  <span className="text-foreground">Over </span>
                  <span className="text-gradient-primary">25</span>
                  <span className="text-foreground"> Countries</span>
                </h1>
  
                <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-0">
                  Over 15 years of experience, $5B+ assets managed, 200+ projects
                  delivered, and a 95% client satisfaction rate.
                </p>
              </div>
  
              <div className="relative inline-block">
  <PrimaryButton
    text={
      <>
        <span>Talk To Expert</span>
        <div className="relative">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </>
    }
    className="bg-gradient-primary text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gradient-primary-dark cursor-pointer transition-shadow duration-200 flex items-center gap-3"
  />
</div>
  
              {/* Chart Illustration */}
           {/* Chart Illustration */}
<div className="relative w-full flex flex-col max-w-sm sm:max-w-md md:max-w-sm mx-auto md:mx-0 lg:mx-0 pt-4 md:pt-6">
  {/* Graph */}
  <Image src={graph} alt="Graph" className="w-full h-auto" />

  {/* Spark on top-right of graph */}
  <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4">
    <Image src={spark} alt="Spark" className="w-10 h-10 md:w-12 md:h-12" />
  </div>
</div>

            </div>
  
            {/* Right Section - Stats */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-8 lg:gap-10">
              {/* Row 1 */}
              <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 border-b border-gray-400 pb-6 sm:pb-7 md:pb-8">
                <div className="space-y-2 text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    24Mn<span className="text-gradient-primary">+</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                    App store downloads with 96%+ crash-free users
                  </p>
                </div>
  
                <div className="space-y-2 text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    $4Bn<span className="text-gradient-primary">+</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Transaction values from Projects
                  </p>
                </div>
              </div>
  
              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    20<span className="text-gradient-primary">+</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Industries served across 25+ countries
                  </p>
                </div>
  
                <div className="space-y-2 text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-primary">
                    99%
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Happy Clients and 60% Recurring Business
                  </p>
                </div>
              </div>
  
              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    700<span className="text-gradient-primary">+</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                    Projects delivered successfully using 50+ technologies
                  </p>
                </div>
  
                <div className="space-y-2 text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    120<span className="text-gradient-primary">+</span>
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                    In house Experts with average 4+ Years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  