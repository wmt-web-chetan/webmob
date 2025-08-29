'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';

const ServicesSection = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  const services = [
    {
      id: 0,
      number: '01.',
      title: 'AI-ML Development',
      description: 'Our AI-ML solutions enhance efficiency and fuel organic growth, powered by our expert developers turning ideas into solutions.',
      tags: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Generative AI', 'Model Deployment'],
      buttonText: 'Get Started',
      image: '/api/placeholder/400/200',
      isExpanded: true
    },
    {
      id: 1,
      number: '02.',
      title: 'Web App Development',
      description: 'Custom web applications built with modern technologies to drive your business forward.',
      tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'],
      buttonText: 'Learn More',
      image: '/api/placeholder/400/200',
      isExpanded: false
    },
    {
      id: 2,
      number: '03.',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      buttonText: 'Explore',
      image: '/api/placeholder/400/200',
      isExpanded: false
    },
    {
      id: 3,
      number: '04.',
      title: 'Product Design',
      description: 'User-centered design solutions that create memorable experiences.',
      tags: ['UX Design', 'UI Design', 'Prototyping', 'Design Systems', 'User Research'],
      buttonText: 'View Work',
      image: '/api/placeholder/400/200',
      isExpanded: false
    },
    {
      id: 4,
      number: '05.',
      title: 'DevOps Service',
      description: 'Streamlined development operations for faster, more reliable deployments.',
      tags: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Monitoring'],
      buttonText: 'Get Started',
      image: '/api/placeholder/400/200',
      isExpanded: false
    },
    {
      id: 5,
      number: '06.',
      title: 'QA & Testing Service',
      description: 'Comprehensive testing solutions to ensure quality and reliability.',
      tags: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Testing', 'API Testing'],
      buttonText: 'Learn More',
      image: '/api/placeholder/400/200',
      isExpanded: false
    }
  ];

  const getServiceImage = (serviceId) => {
    const imageUrls = {
      0: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop&crop=center',
      1: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=500&fit=crop&crop=center',
      2: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop&crop=center',
      3: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop&crop=center',
      4: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=500&fit=crop&crop=center',
      5: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&crop=center'
    };
    return imageUrls[serviceId] || imageUrls[0];
  };

  const handleServiceToggle = (serviceId) => {
    setExpandedSection(expandedSection === serviceId ? -1 : serviceId);
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="w-full mx-auto lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-12 lg:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Smart <span className="text-gradient-primary">Services</span> for a Smarter{' '}
            <span className="text-gradient-primary">Future</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Delivering innovative solutions tailored to your business needs.
          </p>
        </div>

        {/* Services List */}
        <div className="w-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white transition-all duration-500 ease-in-out group ${
                index < services.length - 1 ? 'border-b border-gray-200' : ''
              }`}
              onMouseEnter={() => {
                if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                  setExpandedSection(service.id);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                  setExpandedSection(-1);
                }
              }}
            >
              {/* Service Header - Always visible */}
              <div 
                className="px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 flex items-center cursor-pointer relative  transition-colors duration-200"
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <span className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-3 sm:mr-4 md:mr-6 lg:mr-8 transition-colors duration-300 flex-shrink-0 ${
                    expandedSection === service.id 
                      ? 'text-gradient-primary' 
                      : 'text-gray-400'
                  }`}>
                    {service.number}
                  </span>
                  <h3 className={`text-lg sm:text-xl md:text-4xl transition-all duration-300 truncate sm:whitespace-normal ${
                    expandedSection === service.id ? 'text-gray-900 font-bold' : 'text-gray-600 font-normal'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Expand/Collapse Icon */}
                <div className={`flex-shrink-0 ml-2 transition-colors duration-300 ${
                  expandedSection === service.id ? 'text-gradient-primary' : 'text-gray-400'
                }`}>
                  <svg
                    className={`w-6 h-5 sm:w-7 sm:h-6 transform transition-transform duration-300 ${
                      expandedSection === service.id ? 'rotate-90' : ''
                    }`}
                    viewBox="0 0 33 28"
                    fill="none"
                  >
                    <path 
                      d="M16.7607 0.896484C17.4226 0.234637 18.4964 0.234637 19.1582 0.896484L32.0156 13.7539C32.1174 13.8558 32.13 14.0131 32.0537 14.1289L32.0156 14.1758L19.1582 27.0342C18.4964 27.696 17.4226 27.6959 16.7607 27.0342C16.0989 26.3723 16.0989 25.2986 16.7607 24.6367L25.0557 16.3428L25.7383 15.6602H2.59766C1.66168 15.6601 0.90332 14.9008 0.90332 13.9648C0.90348 13.029 1.66178 12.2705 2.59766 12.2705H25.7383L16.7607 3.29297C16.0992 2.63116 16.0991 1.55828 16.7607 0.896484Z" 
                      fill="currentColor" 
                      stroke="white" 
                      strokeWidth="0.8"
                    />
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSection === service.id
                    ? 'max-h-[800px] sm:max-h-[600px] md:max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 md:px-12 lg:px-16 pb-6 sm:pb-8">
                  <div className="flex items-start">
                    {/* Spacer to align with title */}
                    <div className="w-8 sm:w-10 md:w-16 lg:w-20 xl:w-28 flex-shrink-0"></div>
                    
                    {/* Content Container */}
                    <div className="flex-1">
                      {/* Mobile: Stack vertically, Desktop: Side by side */}
                      <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
                        
                        {/* Content Section */}
                        <div className="flex-1 lg:flex lg:flex-col lg:justify-start mb-6 lg:mb-0">
                          <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                            {service.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                            {service.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 sm:px-3 py-1 bg-white text-black border border-gray-300 text-xs sm:text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          {/* Button */}
                          <PrimaryButton
                            text={
                              <>
                                <span>{service.buttonText}</span>
                                <svg
                                  className="w-5 h-3 sm:w-6 sm:h-4"
                                  viewBox="0 0 33 28"
                                  fill="none"
                                >
                                  <path 
                                    d="M16.7607 0.896484C17.4226 0.234637 18.4964 0.234637 19.1582 0.896484L32.0156 13.7539C32.1174 13.8558 32.13 14.0131 32.0537 14.1289L32.0156 14.1758L19.1582 27.0342C18.4964 27.696 17.4226 27.6959 16.7607 27.0342C16.0989 26.3723 16.0989 25.2986 16.7607 24.6367L25.0557 16.3428L25.7383 15.6602H2.59766C1.66168 15.6601 0.90332 14.9008 0.90332 13.9648C0.90348 13.029 1.66178 12.2705 2.59766 12.2705H25.7383L16.7607 3.29297C16.0992 2.63116 16.0991 1.55828 16.7607 0.896484Z" 
                                    fill="currentColor" 
                                    stroke="white" 
                                strokeWidth="0.8"
                                  />
                                </svg>
                              </>
                            }
                            className="bg-gradient-primary hover:bg-gradient-primary-hover text-white font-medium transition-all duration-200 flex items-center space-x-2 w-fit text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                          />
                        </div>
                        
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 flex-shrink-0">
                          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                            <Image 
                              src={getServiceImage(service.id)}
                              alt={service.title}
                              width={500}
                              height={500}
                              className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-12 lg:px-16">
          <PrimaryButton 
            text="View All Services"
            className="bg-gradient-primary text-white hover:cursor-pointer px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium transition-all duration-200 text-sm sm:text-base shadow-lg hover:shadow-xl transform"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;