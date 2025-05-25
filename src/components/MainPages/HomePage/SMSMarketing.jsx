import { Template } from "@/components/CustomComponents/Template";
import React from "react";

export const SMSMarketing = () => {
  return (
    <div className="  py-5 max-w-[80rem] mx-auto px-5 sm:px-[3.5rem] ">
      <Template
        heading="SMS Marketing Automation"
        description="Our platform is built with privacy at its core, ensuring all your marketing campaigns comply with GDPR and other privacy regulations.
 "
        btnBgColor="#92E3A9"
        btnText="Privacy First"
        btnTextColor="#10243E"
        footerText="Learn about our SMS automation"
        iconColor="#92E3A9"
        paragraphPosition="2"
        imagePosition="1"
        image={"/assets/built-in.png"}
      />
    </div>
  );
};
