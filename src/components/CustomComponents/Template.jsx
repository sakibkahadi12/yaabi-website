import { MainHeading } from "./MainHeading";

export const Template = ({
  btnBgColor,
  btnText,
  btnTextColor,
  iconColor,
  heading,
  description,
  footerText,
  image,
  paragraphPosition = 1,
  imagePosition = 2,
}) => {
  const subDescription = [
    { id: 1, text: "Easy consent management for subscribers" },
    { id: 2, text: "Automated compliance documentation" },
    { id: 3, text: "One-click data export and deletion" },
    { id: 4, text: "Privacy-by-design architecture" },
    { id: 5, text: "Regular compliance audits and updates" },
  ];

  const sections = {
    [paragraphPosition]: (
      <section key="text" className="lg:w-[40%]  w-full space-y-4">
        <button
          style={{ backgroundColor: btnBgColor, color: btnTextColor }}
          className="px-4 py-[10px] border border-[#7F9DBF] text-xs leading-5 font-bold rounded-[12px]"
        >
          {btnText}
        </button>
        <MainHeading heading={heading} align="start" />
        <div>
          
        </div>
        <p className="text-[rgba(26,49,78,0.6)] font-hanken text-[14px] text-justify sm:text-[15px] font-normal">
          {description}
        </p>
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
                  stroke={iconColor}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" font-hanken text-[20px] font-medium leading-[48px]  text-[#10243ECC] ">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[#000000] font-hanken text-[16px] sm:text-[20px] leading-5 flex gap-2 items-center font-normal">
          {footerText}{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#154D7E" />
              <path
                d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                fill="#D8E6F3"
              />
            </svg>
          </span>
        </p>
      </section>
    ),
    [imagePosition]: (
      <section key="image" className="lg:w-[60%] w-full sm:h-[650px]  ">
        <img
          src={image}
          alt="template"
          className="w-full   bg-blue-50  sm:h-[100%]"
        />
      </section>
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center ">
      {Object.values(sections)}
    </div>
  );
};
