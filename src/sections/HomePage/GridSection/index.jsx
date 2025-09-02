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
    <section className="section-padding-y flex items-center justify-center p-8" style={{ backgroundColor: '#1b1b35' }}>
        <div className="mx-48 text-center">
          {/* Header */}
          <div className="mb-12">
            {props?.title && (
              <h1 className="h2-heading text-white mb-4 ">
                {formatTitle(props.title)}
              </h1>
            )}
            {props?.subtitle && (
              <p className="h2-description !text-text-disabled mx-auto">
                {props.subtitle}
              </p>
            )}
          </div>

          <div className="relative">
            <div className={`p-[8px] rounded-3xl ${styles['animate-gradient-border']} ${styles['white-shadow']}`}>
              {/* Content Container */}
              <div className="bg-white rounded-[calc(1.5rem-3px)] p-8 shadow-inner shadow-white/10">
                {/* Technology Grid */}
                <div className={`${styles['tech-grid']} mb-8`}>
                  {technologies.map((tech, index) => (
                    <div key={index} className={`${styles['tech-card']} text-left p-6`}>
                      <div className="flex items-center gap-3 mb-2">
                        {tech.icon ? (
                          <Image 
                            src={tech.icon} 
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        ) : (
                          <span className="text-2xl">🔧</span>
                        )}
                        <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                {props?.viewallbutton?.title && (
                  <div className="flex justify-end">
                    <PrimaryButton 
                      text={props.viewallbutton.title}
                      className="text-primary border border-blue-200 hover:bg-blue-50 bg-transparent"
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