"use client";
import React, { useState } from "react";
import Image from "next/image";

// Define FAQ data
const faqData = [
  {
    question: "What is your product about?",
    answer:
      "Our product helps streamline workflows with advanced automation tools.",
    image: "/assets/built-in.png",
  },
  {
    question: "How can I get started?",
    answer: "Sign up on our website and follow the onboarding guide.",
    image: "/assets/work_together.png",
  },
  {
    question: "What support do you offer?",
    answer: "We provide 24/7 customer support via chat and email.",
    image: "/assets/blog.png",
  },
];

// Accordion Item Component
const CustomAccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className=" ">
      <button
        className="flex w-full justify-between p-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-50"
        onClick={onToggle}
      >
        <span>{question}</span>
        {/* <span>{isOpen ? "-" : "+"}</span> */}
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600 transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

// FAQ Section Component
const Test = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row max-w-6xl mx-auto my-12 p-6">
      {/* Left: Image Section */}
      <div className="md:w-1/2 p-4">
        <div className="relative w-full h-96">
          <Image
            src={
              activeIndex !== null
                ? faqData[activeIndex].image
                : faqData[0].image
            }
            alt="FAQ Image"
            fill
            className="object-cover rounded-lg shadow-lg transition-all duration-300"
          />
        </div>
      </div>
      {/* Right: Accordion Section */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <CustomAccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Test;
