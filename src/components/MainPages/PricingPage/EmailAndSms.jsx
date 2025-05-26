import { PrimaryButton } from '@/components/PrimaryButton';
import React from 'react'

const EmailAndSms = () => {
    const features = [
      "Customer profiles with all-time data",
      "350+ built-in integrations",
      "Email support",
      "Built-in reporting dashboards",
      "Generative AI to create content fast",
      "Multi-channel segmentation",
      "Multi-channel segmentation",
      "Multi-channel attribution",
      "SMS Smart Opt-in",
      "Email deliverability score",
      "Predictive analytics",
      "Reviews available (added cost)",
      "Mobile push marketing channel",
      "Multi-channel segmentation",
      "Unlimited app integrations",
      "Group messages with people outside your organization",
      "Unlimited workflows",
      "Data exports for all messages",
      "User provisioning and deprovisioning",
    ];
    const featureList = features.map((heading, index) => ({
      key: index + 1,
      heading,
      bgColor: index % 2 === 0 ? "#D8E6F3" : "",
    }));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 my-20 ">
      <div className="">
        {/* logo and sms section */}
        <section className="grid px-8 py-7 bg-[#B4D5F4] rounded-t-[30px] grid-cols-1 sm:grid-cols-2 gap-12">
          {/* logo */}
          <div className="flex text-center items-center flex-col space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="132"
              height="35"
              viewBox="0 0 132 35"
              fill="none"
            >
              <path
                d="M7.01264 25.5759L0 13.2031H5.3626L9.90019 20.6268L14.0253 13.2031H18.5629L11.9627 25.5759V34.2368H7.01264V25.5759Z"
                fill="#10243E"
              />
              <path
                d="M35.8877 12.7969L44.5498 33.8301H39.6006L37.9502 29.2939H29.2871L27.6377 33.8301H22.6875L31.3496 12.7969H35.8877ZM31.3516 25.1729H35.8887L33.4141 19.3984L31.3516 25.1729Z"
                fill="#10243E"
              />
              <path
                d="M62.708 12.7969L71.3711 33.8301H66.4209L64.7705 29.2939H56.1074L54.458 33.8301H49.5078L58.1709 12.7969H62.708ZM58.1719 25.1729H62.709L60.2344 19.3984L58.1719 25.1729Z"
                fill="#10243E"
              />
              <path
                d="M88.2725 12.7969C89.9226 12.7971 93.6347 14.4467 93.6348 18.1582C93.6348 21.8695 90.3356 23.1071 90.7471 23.1074C91.1596 23.1074 94.4599 23.9323 94.46 28.4688C94.46 32.0978 90.8854 33.5549 89.0977 33.8301H77.5469V12.7969H88.2725ZM82.498 24.7578V29.707H87.4482C88.8149 29.707 89.9228 28.5991 89.9229 27.2324C89.9229 25.8658 88.8149 24.7578 87.4482 24.7578H82.498ZM82.498 21.457H86.624C87.9905 21.4568 89.0986 20.3489 89.0986 18.9824C89.0986 17.6159 87.9905 16.508 86.624 16.5078H82.498V21.457Z"
                fill="#10243E"
              />
              <rect
                x="101.477"
                y="12.3828"
                width="4.9501"
                height="21.4461"
                fill="#10243E"
              />
              <rect
                width="1.27473"
                height="17.9971"
                rx="0.637367"
                transform="matrix(0.620363 -0.784315 0.784435 0.620211 109.316 8.12109)"
                fill="#10243E"
              />
              <ellipse
                cx="103.532"
                cy="2.88698"
                rx="2.88756"
                ry="2.88698"
                fill="#DE484F"
              />
              <ellipse
                cx="129.938"
                cy="23.5035"
                rx="2.06254"
                ry="2.06213"
                fill="#AA62AD"
              />
            </svg>
            <p className="text-[#10243E] text-[12px] font-normal leading-5 ">
              Say farewell to the complexities of the past and unlock a smoother
              path to success.
            </p>
          </div>
          {/* email and sms */}
          <div
            style={{
              boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
            }}
            className="bg-[#FFFFFF] rounded-[20px] px-6 py-3"
          >
            <h1 className="text-[22px] leading-10 font-bold text-[#10243e] sm:text-[24px] text-center">
              Emails + SMS
            </h1>
            <p className="text-[#F76FAE] text-[12px] font-normal leading-5 text-center">
              Say farewell to the complexities of the past and unlock
            </p>
          </div>
        </section>
        {/* feature section */}
        <section>
          {featureList.map((item, index) => {
            const isLast = index === featureList.length - 1;

            return (
              <div
                key={item.key}
                className={`p-5 flex justify-between items-center ${
                  isLast ? "rounded-t-[5px] rounded-b-none" : "rounded-[5px] "
                }`}
                style={{ backgroundColor: item.bgColor || "#fff" }}
              >
                <h4 className="text-sm font-semibold text-[#000000]">
                  {" "}
                  {item.heading}
                </h4>
                <div className='lg:mr-20'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                  >
                    <path
                      d="M21.8307 6.75L10.3724 18.2083L5.16406 13"
                      stroke="#F25B9D"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </section>
        {/* button */}
        <section className="bg-[#D8E6F3] w-full p-7 rounded-b-[30px]">
          <PrimaryButton
            width="100%"
            bgColor="#B4D5F4"
            buttonText="Request Demo"
            textColor="#10243E"
          />
        </section>
      </div>
    </div>
  );
}

export default EmailAndSms
