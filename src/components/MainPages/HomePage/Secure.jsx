import { PrimaryButton } from "@/components/PrimaryButton";
import React from "react";

export const Secure = () => {
  const subDescription = [
    { id: 1, text: "Easy consent management for subscribers" },
    { id: 2, text: "Automated compliance documentation" },
    { id: 3, text: "One-click data export and deletion" },
    { id: 4, text: "Privacy-by-design architecture" },
    { id: 5, text: "Regular compliance audits and updates" },
  ];
  return (
    <div className="max-w-[80rem] mx-auto px-5 sm:px-[3.5rem]">
      <div
        style={{ boxShadow: "1px 3px 10px 1.5px rgba(0, 0, 0, 0.30)" }}
        className="h-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-10 sm:items-end bg-[#154D7E] rounded-[24px] mb-12    pt-12"
      >
        {/* left side  */}
        <section className=" lg:w-[42%] px-2 sm:px-0 sm:pl-10">
          <h1 className="text-white   text-[28px] leading-9 font-bold lg:text-[36px] lg:leading-[48px]">
            Ready to Keep Your Data Secure
          </h1>
          <div className="">
            {subDescription.map((item) => (
              <div key={item.id} className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M20.8307 6.25L9.3724 17.7083L4.16406 12.5"
                    stroke="#AA62AD"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="   text-[14px] sm:text-[20px] font-medium leading-[48px]  text-[#DEDEDE] ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="py-12">
            <PrimaryButton
              bgColor="#B4D5F4"
              buttonText="Request Demo"
              textColor="#10243E"
            />
          </div>
        </section>
        {/* right side */}
        <section className="lg:w-[58%] w-full h-full ">
          <img
            src="/assets/secure.png"
            alt="lock"
            className="h-full w-full flex   sm:items-end  rounded-br-[24px] rounded-bl-[24px]  sm:rounded-bl-[0px] "
          />
        </section>
      </div>
    </div>
  );
};
