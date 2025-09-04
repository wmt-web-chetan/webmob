"use client"

import PrimaryButton from "@/components/PrimaryButton"
import styles from './GridSection.module.css'
import Image from "next/image"

export default function GridSection(props) {
  console.log(props, "grid props")
  
  if (!props?.tools || props.tools.length === 0) {
    return null;
  }
  
  const formatTitle = (title) => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length < 6) return title;
    
    return words.map((word, index) => {
      if (index >= 4) {
        return (
          <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
            {word}
          </span>
        );
      }
      return word;
    }).reduce((prev, curr, index) => {
      return index === 0 ? [curr] : [...prev, " ", curr];
    }, []);
  };
  
  const technologies = props.tools.map((tool, index) => ({
    name: tool.name,
    description: tool.description,
    icon: tool.icon?.node?.mediaItemUrl,
    color: `text-${['emerald', 'blue', 'cyan', 'purple', 'green', 'indigo', 'yellow', 'orange', 'teal', 'gray', 'pink', 'red'][index % 12]}-600`
  }));
  
  return (
    <section className="section-padding-y flex items-center justify-center px-wrapper bg-[#1b1b35]" >
        <div className=" text-center">
          {/* Header */}
          <div className="mb-12">
            {props?.title && (
              <h1 className="h2-heading text-white mb-4 ">
                {formatTitle(props.title)}
              </h1>
            )}
            {props?.subtitle && (
              <p className="h2-description !text-text-disabled mx-auto max-w-6xl">
                {props.subtitle}
              </p>
            )}
          </div>

          <div className="relative  px-0 sm:px-8 md:px-4 xl:px-28 2xl:px-32">
            <div className={`rounded-2xl ${styles.box}`}>
              {/* Content Container */}
              <div className="bg-white rounded-[calc(1rem-10px)] p-8 shadow-inner shadow-white/10">
                {/* Technology Grid */}
                <div className={`${styles['tech-grid']} mb-8`}>
                  {technologies.map((tech, index) => (
                    <div key={index} className={`${styles['tech-card']} text-left py-6 px-3 sm:px-6 sm:py-6`}>
                      <div className="flex flex-col items-start gap-3 mb-0 sm:mb-2">
                        {tech.icon ? (
                          <Image 
                            src={tech.icon} 
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                            priority
                          />
                        ) : (
                          <span className="text-2xl">🔧</span>
                        )}
                        <h3 className="font-semibold text-text-primary">{tech.name}</h3>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                {props?.viewallbutton?.title && (
                  <div className="flex justify-center">
                    <PrimaryButton 
                      text={props.viewallbutton.title}
                      className="text-primary border border-primary !h-12 bg-transparent"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}