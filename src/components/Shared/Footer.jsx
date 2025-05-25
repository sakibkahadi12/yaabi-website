"use client";

import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (!email) {
      return alert("enter email");
    }
    return alert("thanx");
  };
  return (
    <div className="bg-[#BFD4E7]">
      <div className="max-w-[80rem] mx-auto px-5 py-10 sm:px-[3.5rem]">
        {/* top */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-16 items-center">
          {/* left section */}
          <section className="lg:w-[30%]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="119"
                height="32"
                viewBox="0 0 119 32"
                fill="none"
              >
                <path
                  d="M5.37492 23.9327L-1 12.6836H3.87494L7.99989 19.433L11.7498 12.6836H15.8748L9.87487 23.9327V31.807H5.37492V23.9327Z"
                  fill="black"
                />
                <path
                  d="M31.625 12.3125L39.5 31.4355H35L33.5 27.3115H25.625L24.125 31.4355H19.625L27.5 12.3125H31.625ZM27.5 23.5625H31.625L29.375 18.3125L27.5 23.5625Z"
                  fill="black"
                />
                <path
                  d="M56 12.3125L63.875 31.4355H59.375L57.875 27.3115H50L48.5 31.4355H44L51.875 12.3125H56ZM51.875 23.5625H56L53.75 18.3125L51.875 23.5625Z"
                  fill="black"
                />
                <path
                  d="M79.2422 12.3125C80.7422 12.3126 84.1172 13.8129 84.1172 17.1875C84.1169 20.5619 81.1172 21.6865 81.4922 21.6865C81.8678 21.6867 84.8672 22.4374 84.8672 26.5615C84.8671 29.861 81.6172 31.1855 79.9922 31.4355H69.4922V12.3125H79.2422ZM73.9922 23.1875V27.6875H78.4922C79.7347 27.6875 80.7421 26.68 80.7422 25.4375C80.7422 24.195 79.7347 23.1875 78.4922 23.1875H73.9922ZM73.9922 20.1875H77.7422C78.9847 20.1875 79.9921 19.18 79.9922 17.9375C79.9922 16.695 78.9847 15.6875 77.7422 15.6875H73.9922V20.1875Z"
                  fill="black"
                />
                <rect
                  x="91.2461"
                  y="11.9375"
                  width="4.49994"
                  height="19.4984"
                  fill="black"
                />
                <rect
                  width="1.1589"
                  height="16.3613"
                  rx="0.579452"
                  transform="matrix(0.620314 -0.784354 0.784396 0.62026 98.3789 8.07031)"
                  fill="black"
                />
                <ellipse
                  cx="93.1211"
                  cy="3.31228"
                  rx="2.62497"
                  ry="2.62478"
                  fill="#DE484F"
                />
                <ellipse
                  cx="117.125"
                  cy="22.0623"
                  rx="1.87498"
                  ry="1.87484"
                  fill="#AA62AD"
                />
              </svg>
            </div>
            <p
              className=" text-[#565656] mt-4 
    font-hanken 
    font-normal 
    text-[clamp(0.75rem,3vw,0.875rem)] 
    leading-[clamp(1rem,3vw,1.25rem)] 
    lg:text-[14px] 
    lg:leading-[16px]"
            >
              The all-in-one marketing automation platform for businesses of all
              sizes. SMS, email, coupons, and more - all in one place.
            </p>
          </section>
          {/* right section */}
          <section className="grid grid-cols-2 lg:grid-cols-4 lg:w-[70%] ">
            {/* company */}
            <div>
              <h4 className="text-black font-medium leading-[24px] text-[clamp(16px,2.5vw,18px)]">
                Company
              </h4>
              <div className="text-[clamdiv(14px,2.5vw,16px)] space-y-1 mt-2  font-normal leading-[16px] text-[#565656]">
                <p>About</p>
                <p>Support</p>
                <p>Contact Us</p>
              </div>
            </div>
            {/* Product */}
            <div>
              <h4 className="text-black font-medium leading-[24px] text-[clamp(16px,2.5vw,18px)]">
                Product
              </h4>
              <div className="text-[clamdiv(14px,2.5vw,16px)] space-y-1 mt-2 font-normal leading-[16px] text-[#565656]">
                <p>Features</p>
                <p>Pricing</p>
                <p>Request Demo</p>
              </div>
            </div>
            {/* Subscribe */}
            <div className="col-span-2 mt-10 sm:mt-0">
              <h4 className="text-black font-medium leading-[24px] text-[clamp(16px,2.5vw,18px)]">
                Subscribe with our latest news
              </h4>
              <div className="w-full mt-3 max-w-md mx-auto">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <form
                  onSubmit={handleSubmit}
                  className="relative max-w-md mx-auto"
                >
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pr-32 h-11 pl-4 border border-[#14273F] rounded-[7px] focus:outline-none text-[#14273F] text-[12px]"
                  />
                  <button
                    type="submit"
                    className="absolute right-[2px] top-1/2 -translate-y-1/2 bg-[#154D7E] font-medium leading-5 text-[12px] text-[#fff] px-5 h-10 rounded-[5px] transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        {/* footer */}
        <div
          className=' 
    text-[rgba(0,0,0,0.4)] 
    font-hanken 
    font-normal 
    text-[clamp(0.75rem,2.5vw,0.875rem)] 
    leading-[clamp(0.75rem,2.5vw,0.875rem)] 
    lg:text-[14px] 
    lg:leading-[14px] flex justify-between items-center mt-10 gap-10
  "'
        >
          <p> © {new Date().getFullYear()} Yaabi. All rights reserved.</p>
          <div className="items-center flex gap-7">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
