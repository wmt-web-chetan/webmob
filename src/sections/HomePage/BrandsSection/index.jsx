import "./index.css"
export default function BrandsSection() {
  const brands = [
    // First row
    [
      { name: 'Honeywell', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Honeywell_logo.webp' },
      { name: 'Vibez', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Vibez-Logo.webp' },
      { name: 'HouzQuest', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Houzquest_logo.webp' },
      { name: 'Trinity', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/trinity_logo.webp' },
      { name: 'Merkle Science', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Merkel_science_logo-.webp' },
      { name: 'Brand Logo', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/logo2-1.png' },
      { name: 'Primally Nourished', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Primally_nourished_logo.webp' },
      { name: 'LPGA', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/LPGA_logo.webp' }
    ],
    // Second row
    [
      { name: 'Honeywell', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Honeywell_logo.webp' },
      { name: 'Vibez', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Vibez-Logo.webp' },
      { name: 'HouzQuest', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Houzquest_logo.webp' },
      { name: 'Trinity', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/trinity_logo.webp' },
      { name: 'Merkle Science', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Merkel_science_logo-.webp' },
      { name: 'Brand Logo', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2025/07/logo2-1.png' },
      { name: 'Primally Nourished', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/Primally_nourished_logo.webp' },
      { name: 'LPGA', logo: 'https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/04/LPGA_logo.webp' }
    ]
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
          Brands That{' '}
          <span className="text-gradient-primary font-medium">Trusted</span>{' '}
          Us & We Succeeded{' '}
          <span className="text-gradient-primary font-medium">Together</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          We empower startups and Fortune 500+ with solutions
          <br className="hidden sm:block" />
          that redefine retail through partnerships.
        </p>

        {/* Brands Grid with Scrolling Animation */}
        <div className="space-y-6 overflow-hidden">
          {/* First Row - Moving Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-left gap-4 sm:gap-6 lg:gap-8">
              {/* Duplicate brands for seamless loop */}
              {[...brands[0], ...brands[0]].map((brand, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="h-20 flex items-center justify-center min-w-[180px] px-6">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
            <div className="flex animate-scroll-right gap-4 sm:gap-6 lg:gap-8">
              {/* Duplicate brands for seamless loop */}
              {[...brands[1], ...brands[1]].map((brand, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="h-20 flex items-center justify-center min-w-[180px] px-6">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
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