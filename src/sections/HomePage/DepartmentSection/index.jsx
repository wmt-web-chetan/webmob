"use client";
import Image from "next/image";
import React, { useState } from "react";
import Demo from "../../../assets/images/image.png";
import "./department.css"
import PrimaryButton from "@/components/PrimaryButton";

const DepartmentSection = () => {
  const [activeTab, setActiveTab] = useState("AI");
  
  const items = [
    "AI",
    "Mobile App",
    "WebApp",
    "UI/UX",
    "IOT",
    "DevOps",
    "QA Testing",
    "IT Counselling",
  ];

  // Content data for each tab
  const tabContent = {
    "AI": {
      title: "Smarter Decisions with AI",
      description: "Leverage predictive analytics, natural language processing, and generative AI to streamline workflows and uncover new opportunities.",
      cardText: "From data to insights drive innovation with Machine Learning and Automation.",
      toolsTitle: "Tools We Use",
      toolsDescription: "From data to insights drive innovation with From data to insights drive innovation with From data to insights drive innovation with From data to insights drive innovation with"
    },
    "Mobile App": {
      title: "Revolutionary Mobile Experiences",
      description: "Create stunning, high-performance mobile applications that engage users across iOS and Android platforms with native functionality.",
      cardText: "Build cross-platform apps that deliver exceptional user experiences and drive business growth.",
      toolsTitle: "Mobile Tools",
      toolsDescription: "React Native, Flutter, Swift, Kotlin React Native, Flutter, Swift, Kotlin React Native, Flutter, Swift, Kotlin React Native, Flutter, Swift, Kotlin"
    },
    "WebApp": {
      title: "Modern Web Applications",
      description: "Develop scalable, responsive web applications using cutting-edge technologies and frameworks for optimal performance.",
      cardText: "From progressive web apps to enterprise solutions, we build web experiences that scale.",
      toolsTitle: "Web Stack",
      toolsDescription: "React, Next.js, Vue.js, Node.js React, Next.js, Vue.js, Node.js React, Next.js, Vue.js, Node.js React, Next.js, Vue.js, Node.js"
    },
    "UI/UX": {
      title: "Exceptional User Experiences",
      description: "Design intuitive interfaces and seamless user journeys that convert visitors into loyal customers through research-driven design.",
      cardText: "User-centered design principles that create engaging and accessible digital experiences.",
      toolsTitle: "Design Tools",
      toolsDescription: "Figma, Adobe Creative Suite, Sketch Figma, Adobe Creative Suite, Sketch Figma, Adobe Creative Suite, Sketch Figma, Adobe Creative Suite, Sketch"
    },
    "IOT": {
      title: "Connected Smart Solutions",
      description: "Build intelligent IoT ecosystems that connect devices, collect data, and automate processes for enhanced efficiency.",
      cardText: "Connect the physical and digital worlds with intelligent sensor networks and automation.",
      toolsTitle: "IoT Stack",
      toolsDescription: "Arduino, Raspberry Pi, AWS IoT Arduino, Raspberry Pi, AWS IoT Arduino, Raspberry Pi, AWS IoT Arduino, Raspberry Pi, AWS IoT"
    },
    "DevOps": {
      title: "Streamlined Development Pipeline",
      description: "Implement robust CI/CD pipelines, infrastructure automation, and monitoring solutions for reliable software delivery.",
      cardText: "Accelerate deployment cycles while maintaining security and reliability through automation.",
      toolsTitle: "DevOps Tools",
      toolsDescription: "Docker, Kubernetes, Jenkins, GitLab Docker, Kubernetes, Jenkins, GitLab Docker, Kubernetes, Jenkins, GitLab Docker, Kubernetes, Jenkins, GitLab"
    },
    "QA Testing": {
      title: "Quality Assurance Excellence",
      description: "Comprehensive testing strategies including automated testing, performance testing, and security audits for bulletproof applications.",
      cardText: "Ensure flawless user experiences through rigorous testing methodologies and quality processes.",
      toolsTitle: "Testing Tools",
      toolsDescription: "Selenium, Jest, Cypress, Postman Selenium, Jest, Cypress, Postman Selenium, Jest, Cypress, Postman Selenium, Jest, Cypress, Postman"
    },
    "IT Counselling": {
      title: "Strategic IT Guidance",
      description: "Expert consultation on technology strategy, digital transformation, and IT infrastructure to align technology with business goals.",
      cardText: "Navigate complex technology decisions with expert guidance and strategic planning.",
      toolsTitle: "Consultation Areas",
      toolsDescription: "Digital transformation strategy, security audits Digital transformation strategy, security audits Digital transformation strategy, security audits Digital transformation strategy, security audits"
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <>
      <div className="pt-5 lg:pt-10 flex flex-col justify-center items-center">
        <h2 className="text-center md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold">
          Unlock Growth with{" "}
          <span className="text-gradient-primary">AI-Powered</span> Innovation
        </h2>
        <p className=" pt-2 md:pt-3 max-w-2xl text-center text-md md:text-lg tracking-wider">
          Transform the way you work with intelligent, scalable solutions.
        </p>

        <div className="mt-5">
          <div className="flex lg:border lg:border-disabled-text rounded-full flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {items.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 md:px-4 md:py-3 rounded-full text-sm  font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "button-background-gradient text-white"
                    : " text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Solution 1: Using grid with items-stretch */}
      <div className="grid lg:grid-cols-12 px-2 lg:px-44 gap-3 items-stretch">
        <div className="bg-[#1B1B35] lg:col-span-8 rounded-3xl flex py-4 lg:py-0 items-center px-6">
          <div>
            <h3 className="text-2xl text-white transition-all duration-500 ease-in-out">
              {currentContent.title.includes('AI') ? (
                <>
                  Smarter <br />
                  Desisions with <span className="font-bold">AI</span>
                </>
              ) : (
                <>
                  {currentContent.title.split(' ').slice(0, -1).join(' ')} <br />
                  {currentContent.title.split(' ').slice(-1)} with <span className="font-bold">{activeTab}</span>
                </>
              )}
            </h3>
            <p className="text-white mt-3 text-xs transition-all duration-500 ease-in-out">
              {currentContent.description}
            </p>
            <div className="mt-8">
              <PrimaryButton
                text="Get Started"
                className="bg-white px-6 rounded-full text-xs py-2"
              />
            </div>
          </div>
          <div>
            <Image src={Demo} alt="demo" className="lg:w-6xl" />
          </div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-[#ebefff] py-2 px-4 rounded-3xl text-sm flex-1 flex items-center transition-all duration-500 ease-in-out">
            {currentContent.cardText}
          </div>

          <div className="bg-[#ebefff] py-3 px-4 rounded-3xl text-sm flex-1 transition-all duration-500 ease-in-out">
           <div className="text-lg font-semibold">{currentContent.toolsTitle}</div>
           <p className="mt-2 text-xs">{currentContent.toolsDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentSection;