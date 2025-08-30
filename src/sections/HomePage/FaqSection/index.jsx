"use client"

import { useState } from "react"

export default function FaqSection() {
  const [openItem, setOpenItem] = useState("item-1")

  const faqData = [
    {
      id: "item-1",
      question: "What services does WebMob Technologies provide?",
      answer:
        "WebMob Technologies provides end-to-end digital solutions, including custom mobile app and web development, AI & machine learning, IoT, cloud integration, DevOps, UI/UX design, and IT consulting helping businesses of all sizes turn ideas into scalable digital products.",
    },
    {
      id: "item-2",
      question: "How much does it cost to develop a mobile app or website?",
      answer:
        "The cost varies depending on complexity, features, and timeline. We provide customized quotes based on your specific requirements and budget.",
    },
    {
      id: "item-3",
      question: "How long will it take to complete my project?",
      answer:
        "Project timelines depend on scope and complexity. Simple projects may take 4-8 weeks, while complex applications can take 3-6 months or more.",
    },
    {
      id: "item-4",
      question: "Do you provide support and maintenance after launch?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements.",
    },
    {
      id: "item-5",
      question: "Can I hire dedicated developers from your team?",
      answer:
        "We offer dedicated developer hiring models where you can work directly with our skilled developers on your projects.",
    },
  ]

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? "" : itemId)
  }

  const PlusIcon = () => (
    <svg
      className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )

  const XIcon = () => (
    <svg
      className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  return (
    <div className="h-auto bg-background py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className=" h2-heading font-bold  mb-2">
            <span className="text-balance">Your Questions, </span>
            <span className="text-gradient-primary">Answered</span>
          </h2>
        </div>

        <div className="w-full space-y-0">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-text-disabled bg-card hover:bg-accent/50 transition-colors"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left text-sm sm:text-base lg:text-lg font-medium py-4 sm:py-5 lg:py-6 focus:outline-none"
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`pr-4 text-pretty transition-colors ${openItem === faq.id ? 'text-secondary' : 'text-foreground'}`}>{faq.question}</span>
                  <div className="flex-shrink-0 ml-4">
                    {openItem === faq.id ? (
                      <div className="border  rounded-full p-1 sm:p-1.5">
                        <XIcon />
                      </div>
                    ) : (
                      <div className="border  rounded-full p-1 sm:p-1.5">
                        <PlusIcon />
                      </div>
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5 lg:pb-6 pt-0">
                  <div className="text-pretty leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
