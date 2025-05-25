import { Template } from "@/components/CustomComponents/Template";
import React from "react";

export const EmailBuilderSection = () => {
  return (
    <div className="  py-5 max-w-[80rem] mx-auto px-5 sm:px-[3.5rem] ">
      <Template
        heading="Intuitive Drag & Drop Email Builder"
        description="Create stunning, responsive emails without any technical knowledge. Our drag & drop editor makes it easy to design professional-looking emails in minutes.
"
        btnBgColor="#FFC0DC"
        btnText="No Coding Required"
        btnTextColor="#000000"
        footerText="Learn about our templates"
        iconColor="#F25B9D"
        paragraphPosition="1"
        imagePosition="2"
        image={"/assets/built-in.png"}
      />
    </div>
  );
};
