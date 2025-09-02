import Image from "next/image";
import "./index.css";
export default function BrandsSection(props) {
  console.log(props, "DDDFDFSDGDFGDF");

  if (!props?.logos || props.logos.length === 0) {
    return null;
  }

  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    return words
      .map((word, index) => {
        if (word === "Trusted" || word === "Together") {
          return (
            <span key={index} className="text-gradient-primary font-medium">
              {word}
            </span>
          );
        }
        return word;
      })
      .reduce((prev, curr, index) => {
        return index === 0 ? [curr] : [...prev, " ", curr];
      }, []);
  };

  const brands = props.logos;

  const brandsRows = [
    brands.slice(0, Math.ceil(brands.length / 2)),
    brands.slice(Math.ceil(brands.length / 2)),
  ];

  return (
    <section className="w-full bg-white section-padding-y px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="w-full mx-auto text-center sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-16">
        {/* Header */}
        {props?.title && (
          <h2 className="h2-heading font-light text-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 leading-tight ">
            {formatTitle(props.title)}
          </h2>
        )}

        {/* Subtitle */}
        {props?.subtitle && (
          <p className="h2-description text-text-primary mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed">
            {props.subtitle}
          </p>
        )}

        {/* Brands Grid with Scrolling Animation */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 2xl:space-y-10 overflow-hidden">
          {/* First Row - Moving Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-left gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
              {/* Duplicate brands for seamless loop */}
              {[...brandsRows[0], ...brandsRows[0]].map((brand, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="h-16 sm:h-17 md:h-18 lg:h-19 xl:h-20 2xl:h-24 flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={brand.logo?.node?.mediaItemUrl || brand.logo}
                      alt={brand.brandName || brand.name}
                      className="h-12 sm:h-13 md:h-14 lg:h-15 xl:h-16 2xl:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Fade effect for left and right sides */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 2xl:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 2xl:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>

          {/* Second Row - Moving Left to Right */}
          <div className="relative">
            <div className="flex animate-scroll-right gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
              {/* Duplicate brands for seamless loop */}
              {[...brandsRows[1], ...brandsRows[1]].map((brand, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="h-16 sm:h-17 md:h-18 lg:h-19 xl:h-20 2xl:h-24 flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={brand.logo?.node?.mediaItemUrl || brand.logo}
                      alt={brand.brandName || brand.name}
                      className="h-12 sm:h-13 md:h-14 lg:h-15 xl:h-16 2xl:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Fade effect for left and right sides */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 2xl:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 2xl:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
