"use client";
import Image from "next/image";
import React, { useState, useCallback, memo } from "react";
import Demo from "../../../assets/images/image.png";
import "./department.css";
import PrimaryButton from "@/components/PrimaryButton";
import Tensor_Flow from "@/assets/images/tensor_flow.png";
import arrow from "@/assets/SVGs/arrow-up.svg";

// Memoized TabButton to prevent unnecessary re-renders
const TabButton = memo(({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-10 lg:py-5 rounded-full text-sm sm:text-base md:text-lg transition-colors duration-300 ${
      isActive
        ? "button-background-gradient text-white font-semibold"
        : "text-gray-700 hover:bg-gray-200"
    }`}
  >
    {tab}
  </button>
));

// Memoized ToolItem to prevent re-rendering of tool icons
const ToolItem = memo(({ tool }) => (
  <div className="rounded-full justify-center flex text-center transition-transform duration-300">
    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 p-2 sm:p-4 rounded-full bg-white">
      <Image
        src={tool.icon}
        alt={`${tool.name} logo`}
        height={100}
        width={100}
        className="object-contain"
        loading="lazy"
      />
    </div>
  </div>
));

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

  // Content data for each tab (removed duplicate Pandas entry)
  const tabContent = {
    AI: {
      title: "Smarter Decisions with AI",
      description:
        "Leverage predictive analytics, natural language processing, and generative AI to streamline workflows and uncover new opportunities.",
      cardText:
        "From data to insights drive innovation with Machine Learning and Automation  to insights drive innovation with Machine Learning .",
      toolsTitle: "Tools We Use",
      toolsDescription:
        "From data to insights drive innovation with cutting-edge AI technologies.",
      tools: [
        { name: "TensorFlow", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "PyTorch", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "OpenAI", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "Hugging Face", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "Scikit-learn", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "Pandas", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
    "Mobile App": {
      title: "Revolutionary Mobile Experiences",
      description:
        "Create stunning, high-performance mobile applications that engage users across iOS and Android platforms with native functionality.",
      cardText:
        "Build cross-platform apps that deliver exceptional user experiences and drive business growth.",
      toolsTitle: "Mobile Tools",
      toolsDescription:
        "From React Native to Swift, we use cutting-edge mobile technologies to build powerful cross-platform applications.",
      tools: [
        { name: "React Native", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "Swift", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "Kotlin", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "Flutter", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "Ionic", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "Xamarin", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
    // Other tab content remains the same but with unique tools for each tab
    WebApp: {
      title: "Modern Web Applications",
      description:
        "Develop scalable, responsive web applications using cutting-edge technologies and frameworks for optimal performance.",
      cardText:
        "From progressive web apps to enterprise solutions, we build web experiences that scale.",
      toolsTitle: "Web Stack",
      toolsDescription:
        "Modern web technologies and frameworks for building scalable, high-performance applications.",
      tools: [
        { name: "React", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "Vue.js", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "Angular", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "Node.js", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "Express", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "Next.js", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
    "UI/UX": {
      title: "Exceptional User Experiences",
      description:
        "Design intuitive interfaces and seamless user journeys that convert visitors into loyal customers through research-driven design.",
      cardText:
        "User-centered design principles that create engaging and accessible digital experiences.",
      toolsTitle: "Design Tools",
      toolsDescription:
        "Professional design tools for creating stunning user interfaces and experiences.",
      tools: [
        { name: "Figma", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "Sketch", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "Adobe XD", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "InVision", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "Zeplin", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "Miro", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
    IOT: {
      title: "Connected Smart Solutions",
      description:
        "Build intelligent IoT ecosystems that connect devices, collect data, and automate processes for enhanced efficiency.",
      cardText:
        "Connect the physical and digital worlds with intelligent sensor networks and automation.",
      toolsTitle: "IoT Stack",
      toolsDescription:
        "Hardware and cloud platforms for building connected IoT solutions and smart devices.",
      tools: [
        { name: "Arduino", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "Raspberry Pi", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "AWS IoT", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "Azure IoT", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "Google IoT", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "Node-RED", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
    DevOps: {
      title: "Streamlined Development Pipeline",
      description:
        "Implement robust CI/CD pipelines, infrastructure automation, and monitoring solutions for reliable software delivery.",
      cardText:
        "Accelerate deployment cycles while maintaining security and reliability through automation.",
      toolsTitle: "DevOps Tools",
      toolsDescription:
        "Modern DevOps tools for continuous integration, deployment, and infrastructure management.",
      tools: [
        { name: "Docker", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "Kubernetes", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "Jenkins", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "GitLab CI", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "Terraform", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "Ansible", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
    "QA Testing": {
      title: "Quality Assurance Excellence",
      description:
        "Comprehensive testing strategies including automated testing, performance testing, and security audits for bulletproof applications.",
      cardText:
        "Ensure flawless user experiences through rigorous testing methodologies and quality processes.",
      toolsTitle: "Testing Tools",
      toolsDescription:
        "Automated testing frameworks and tools for comprehensive quality assurance.",
      tools: [
        { name: "Selenium", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "Cypress", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "Jest", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "Postman", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "JMeter", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "TestRail", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
    "IT Counselling": {
      title: "Strategic IT Guidance",
      description:
        "Expert consultation on technology strategy, digital transformation, and IT infrastructure to align technology with business goals.",
      cardText:
        "Navigate complex technology decisions with expert guidance and strategic planning.",
      toolsTitle: "Consultation Areas",
      toolsDescription:
        "Strategic consulting services covering digital transformation and technology optimization.",
      tools: [
        { name: "TOGAF", icon: Tensor_Flow, color: "bg-orange-500" },
        { name: "ITIL", icon: Tensor_Flow, color: "bg-red-500" },
        { name: "COBIT", icon: Tensor_Flow, color: "bg-green-500" },
        { name: "AWS Well-Architected", icon: Tensor_Flow, color: "bg-yellow-500" },
        { name: "Azure Advisor", icon: Tensor_Flow, color: "bg-blue-500" },
        { name: "GCP Recommendations", icon: Tensor_Flow, color: "bg-purple-500" },
      ],
    },
  };

  // Debounced tab change handler
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const currentContent = tabContent[activeTab] || tabContent.AI;

  return (
    <>
      <div className="section-padding-y flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Unlock Growth with{" "}
          <span className="text-gradient-primary font-bold">AI-Powered</span>{" "}
          Innovation
        </h2>
        <p className="pt-2 sm:pt-3 max-w-lg sm:max-w-xl md:max-w-2xl text-center text-sm sm:text-base md:text-lg">
          Transform the way you work with intelligent, scalable solutions.
        </p>

        <div className="mt-4 sm:mt-5 md:mt-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:border lg:border-disabled-text lg:rounded-full">
            {items.map((tab) => (
              <TabButton
                key={tab}
                tab={tab}
                isActive={activeTab === tab}
                onClick={() => handleTabChange(tab)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-56 mt-6 sm:mt-8">
        <div className="bg-[#1B1B35] md:col-span-12 lg:col-span-8 rounded-3xl flex flex-col md:flex-row py-4 sm:py-6 lg:py-8 px-4 sm:px-6 md:px-8">
          <div className="flex-1 flex flex-col justify-between mt-4 sm:mt-6 md:mt-8">
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white transition-opacity duration-300 mb-3 sm:mb-4">
                {currentContent.title.includes("AI") ? (
                  <>
                    Smarter <br />
                    Decisions with <span className="font-bold">AI</span>
                  </>
                ) : (
                  <>
                    {currentContent.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <br />
                    {currentContent.title.split(" ").slice(-1)} with{" "}
                    <span className="font-bold">{activeTab}</span>
                  </>
                )}
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg transition-opacity duration-300 leading-relaxed">
                {currentContent.description}
              </p>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
              <PrimaryButton
                text={
                  <span className="flex items-center gap-2">
                    Get Started
                    <Image src={arrow} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5 filter invert" />
                  </span>
                }
                className="bg-white hover:bg-gray-100 text-gray-900 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-colors"
              />
            </div>
          </div>
          <div className="flex-1 mt-4 sm:mt-6 md:mt-0 flex justify-center md:justify-end">
            <Image
              src={Demo}
              alt="demo"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-80 2xl:w-108"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
          <div className="bg-[#ebefff] text-lg sm:text-xl md:text-2xl p-3 sm:p-4 rounded-3xl flex items-center transition-opacity duration-300">
            <div className="text-start w-full leading-tight">
              {currentContent.cardText}
            </div>
          </div>

          <div className="bg-[#ebefff] p-4 sm:p-6 rounded-3xl flex flex-col gap-2 text-sm sm:text-base flex-1 transition-opacity duration-300">
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {currentContent.toolsTitle}
            </div>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              {currentContent.toolsDescription}
            </p>

            <div className="w-full flex flex-wrap gap- sm:gap-4 md:gap-6 justify-center px-0 lg:px-8">
              {currentContent.tools.map((tool, index) => (
                <ToolItem key={index} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentSection;