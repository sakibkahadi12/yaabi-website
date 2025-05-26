import React from "react";

export const FeatureDetails = () => {
  const sections = [
    {
      key: 1,
      heading: "2x engagements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. Quam vel aliquam sit vulputate.",
    },
    {
      key: 2,
      heading: "33,459 emails",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. Quam vel aliquam sit vulputate.",
      backgroundColor: "#D8E6F3",
      radius: "10px",
    },
    {
      key: 3,
      heading: "55% sign-ups",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. Quam vel aliquam sit vulputate.",
      backgroundColor: "#D8E6F3",
      radius: "10px",
    },
    {
      heading: "2,456 SMS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. imperdiet sed id elementum. Quam vel aliquam sit vulputate.",
    },
  ];

  return (
    <div className="max-w-[80rem]   mx-auto px-5 sm:px-[3.5rem] py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
        {/* left */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
          {sections.slice(0, 2).map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.backgroundColor }}
              className=" px-5 py-8 rounded-t-[10px] sm:rounded-t-none sm:rounded-tl-[10px] sm:rounded-bl-[12px] "
            >
              <h2 className="font-[600] mb-4 leading-[44px] tracking-[0]   text-[clamp(24px,5vw,30px)] ">
                {item.heading}
              </h2>
              <p className="text-[clamp(14px,3.5vw,16px)] text-justify leading-[20px] font-[400] text-[#1A314E]  ">
                {item.description}
              </p>
            </div>
          ))}
        </section>
        {/* right */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
          {sections.slice(2, 4).map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.backgroundColor }}
              className=" px-5 py-8 rounded-b-[10px] sm:rounded-b-none sm:rounded-tr-[10px] sm:rounded-br-[12px] "
            >
              <h2 className="font-[600] mb-4 leading-[44px] tracking-[0]   text-[clamp(24px,5vw,30px)] ">
                {item.heading}
              </h2>
              <p className="text-[clamp(14px,3.5vw,16px)] text-justify leading-[20px] font-[400] text-[#1A314E]  ">
                {item.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
