import { Template2 } from '@/components/CustomComponents/Template2'
import React from 'react'

export const FeatureBanner = () => {
  return (
    <div className="  py-5 max-w-[80rem] mx-auto px-5 sm:px-[3.5rem] ">
      <Template2
        heading="Intuitive Drag & Drop Email Builder"
        description="Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency.Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency. Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency.Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency.
    "
      
        paragraphPosition="1"
        imagePosition="2"
        image={"/assets/built-in.png"}
      />
    </div>
  );
}
