"use client";
import React, { useState } from "react";
import Image from "next/image";

// Define FAQ data
const faqData = [
  {
    question: "Create Your Campaigns",
    answer:
      "Combine your audience into targeted segments based on behavior, demographics, or custom criteria for personalized campaigns.",
    image: "/assets/built-in.png",
    logo: "/assets/icons/phone.png",
    bgColor: "#FFE0BD",
  },
  {
    question: "Segment Your Audience",
    answer:
      "Set up trigger-based automation workflows that send the right message at the right time, without manual intervention.",
    image: "/assets/work_together.png",
    logo: "/assets/icons/people.png",
    bgColor: "#D6E9FF",
  },
  {
    question: "Automate & Schedule",
    answer:
      "Time your follow-up emails and SMS using our automated scheduler, increase engagement with new offers and content.",
    image: "/assets/blog.png",
    logo: "/assets/icons/email.png",
    bgColor: "#DEF7E5",
  },
  {
    question: "Analyze & Optimize",
    answer:
      "Track campaign performance with detailed analytics. Measure open rates, conversions, and ROI to continuously improve results.",
    image: "/assets/blog.png",
    logo: "/assets/icons/setting.png",
    bgColor: "#FDCCE2",
  },
];

// Accordion Item Component
const CustomAccordionItem = ({ question, answer, isOpen, onToggle, logo ,bgColor }) => {
  return (
    <div
      style={{
        backgroundColor: isOpen ? bgColor : "#FFFFFF",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      className={`  rounded-[24px] mb-2  px-5 py-7`}
    >
      <button
        className="flex w-full justify-between text-left text-lg font-medium text-gray-900 "
        onClick={onToggle}
      >
        <div>
          <Image
            src={logo}
            alt="logo"
            height={200}
            width={200}
            className="size-[56px]"
          />
          <h2 className="text-[#0f172a] sm:text-[24px] my-[10px] text-[20px] leading-8 font-bold ">
            {question}
          </h2>
        </div>

        {/* <span>{isOpen ? "-" : "+"}</span> */}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        } text-[#0F172A] text-[14px] font-normal leading-6 sm:text-[16px]`}
      >
        <div className="pr-1">{answer}</div>
      </div>
    </div>
  );
};

// FAQ Section Component
const CustomYaabiAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-12 gap-7 sm:gap-12 ">
      {/* Left: Image Section */}
      <div className=" py-4">
        <div className="relative w-full h-[200px] sm:h-full py-4">
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
      <div className=" ">
       
        {faqData.map((faq, index) => (
          <CustomAccordionItem
            key={index}
            question={faq.question}
            bgColor= {faq.bgColor}
            logo = {faq.logo}
            answer={faq.answer}
            isOpen={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomYaabiAccordion;
