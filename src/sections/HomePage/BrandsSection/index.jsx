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
    <section className="w-full bg-white section-padding-y px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto text-center  lg:px-8 xl:px-32">
        {/* Header */}
        {props?.title && (
          <h2 className="h2-heading font-light text-gray-900 mb-6 leading-tight ">
            {formatTitle(props.title)}
          </h2>
        )}

        {/* Subtitle */}
        {props?.subtitle && (
          <p className="h2-description text-text-primary mb-16 max-w-4xl mx-auto leading-relaxed">
            {props.subtitle}
          </p>
        )}

        {/* Brands Grid with Scrolling Animation */}
        <div className="space-y-6 overflow-hidden">
          {/* First Row - Moving Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-left gap-2 sm:gap-4 lg:gap-6">
              {/* Duplicate brands for seamless loop */}
              {[...brandsRows[0], ...brandsRows[0]].map((brand, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={brand.logo?.node?.mediaItemUrl || brand.logo}
                      alt={brand.brandName || brand.name}
                      className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Fade effect for left and right sides */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>

          {/* Second Row - Moving Left to Right */}
          <div className="relative">
            <div className="flex animate-scroll-right gap-2 sm:gap-4 lg:gap-6">
              {/* Duplicate brands for seamless loop */}
              {[...brandsRows[1], ...brandsRows[1]].map((brand, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={brand.logo?.node?.mediaItemUrl || brand.logo}
                      alt={brand.brandName || brand.name}
                      className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Fade effect for left and right sides */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
