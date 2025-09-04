"use client";

import { useState, useRef, useEffect } from "react";

export default function FaqSection({ title, faqs }) {
  const [openItem, setOpenItem] = useState("item-1");

  // Default FAQ data as fallback
  const defaultFaqData = [
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
  ];

  // Use dynamic data if available, otherwise use default data
  const faqData = faqs && faqs.length > 0 
    ? faqs.map((faq, index) => ({
        id: `item-${index + 1}`,
        question: faq.question,
        answer: faq.answer,
      }))
    : defaultFaqData;

  const displayTitle = title || "Your Questions, Answered";

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? "" : itemId);
  };

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        d="M12 5V19M5 12H19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="bg-background section-padding-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="h2-heading font-bold mb-2">
            {displayTitle.includes(' ') ? (
              <>
                <span className="text-balance">{displayTitle.split(' ').slice(0, -1).join(' ')} </span>
                <span className="text-gradient-primary">{displayTitle.split(' ').slice(-1)[0]}</span>
              </>
            ) : (
              <span className="text-gradient-primary">{displayTitle}</span>
            )}
          </h2>
        </div>

        <div className="w-full space-y-0">
          {faqData.map((faq, index) => {
            const contentRef = useRef(null);
            const [height, setHeight] = useState("0px");

            useEffect(() => {
              if (openItem === faq.id && contentRef.current) {
                setHeight(`${contentRef.current.scrollHeight}px`);
              } else {
                setHeight("0px");
              }
            }, [openItem]);

            return (
              <div
                key={faq.id}
                className="bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex flex-col gap-2 lg:gap-4">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left font-medium focus:outline-none"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`pr-4 font-medium text-lg sm:text-xl lg:text-2xl transition-colors ${
                          openItem === faq.id
                            ? "text-secondary"
                            : "text-foreground"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-4 border rounded-full p-1 sm:p-1.5">
                        {openItem === faq.id ? <XIcon /> : <PlusIcon />}
                      </div>
                    </div>
                  </button>

                  {/* Answer with transition */}
                  <div
                    ref={contentRef}
                    style={{ maxHeight: height }}
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-light">
                       
                        {faq.answer}
                       
                    </div>
                  </div>
                </div>
                {index !== faqData.length - 1 && (
                  <div className="w-full border-b border-text-disabled my-2 sm:my-4 lg:my-8"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
