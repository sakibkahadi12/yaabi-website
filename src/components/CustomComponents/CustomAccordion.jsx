"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";

const CustomAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(String(null));
  const faqData = [
    {
      id: 1,
      title: "Is there a free trial available?",
      details: "Yes, we have free trial available for our user upto 30 days",
    },
    {
      id: 2,
      title: "Can I change my plan later?",
      details: "Yes, we have free trial available for our user upto 30 days",
    },
    {
      id: 3,
      title: "What is your cancellation policy?",
      details: "Yes, we have free trial available for our user upto 30 days",
    },
    {
      id: 4,
      title: "Can other info be added to an invoice?",
      details: "Yes, we have free trial available for our user upto 30 days",
    },
  ];
  const plusIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 4.5V19.5M19.5 12H4.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        d="M11.5417 11.7865L22.3905 22.1453M22.1454 11.5415L11.7867 22.3903"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="mt-6 sm:mt-[50px] bg-[#94BEE5] rounded-[24px] ">
      {faqData?.length > 0 ? (
        <Accordion type="single" collapsible onValueChange={setOpenAccordion}>
          {faqData.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === faqData.length - 1;

            return (
              <AccordionItem
                key={item?.id}
                value={String(item?.id)}
                className={`px-4 sm:px-[40px]  bg-[#94BEE5] mb-[13px] -mt-3 pt-[10px]
      ${isFirst ? "rounded-t-[24px] sm:rounded-t-[24px] sm:pt-[20px]" : ""}
      ${isLast ? "rounded-b-[24px] sm:rounded-b-[24px] pb-3 " : ""}
      ${
        openAccordion === String(item?.id)
          ? "bg-[#FFFFFF]  rounded-[24px]"
          : " "
      }`}
              >
                <AccordionTrigger
                  openIcon={plusIcon}
                  closeIcon={closeIcon}
                  className={` ${
                    isLast ? "" : " border-b-2 pb-7 border-[#7C7C7C1A]"
                  } ${
                    openAccordion === String(item?.id) ? "border-none" : ""
                  } hover:no-underline text-[#000000] text-[20px]  leading-6 font-medium`}
                >
                  <div className="items-center flex text-start">
                    {/* <span className="mr-4 sm:mr-12 sm:text-5xl font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span> */}
                    {item?.title}
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className={`text-[18px] font-[300] leading-6 md:text-[18px] md:leading-[24px] ml-5 sm:ml-10`}
                >
                  {item?.details}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      ) : (
        <p className="text-center text-[16px] font-medium text-[#868686] py-8">
          No FAQs found .
        </p>
      )}
    </div>
  );
};

export default CustomAccordion;
