
import CustomAccordion from '@/components/CustomComponents/CustomAccordion';
import { MainDescription } from '@/components/CustomComponents/MainDescription'
import { MainHeading } from '@/components/CustomComponents/MainHeading'
import React from 'react'

const PricingFAQ = () => {
  
    
  return (
    <div className="">
      {/* heading */}
      <section className="max-w-[708px] mx-auto mb-12 ">
        <MainHeading heading="Have More Questions?" />
        <MainHeading heading="We Have Some Answers" />

        <div className="mt-5 ">
          <MainDescription description="Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency." />
        </div>
      </section>
      {/* faq */}
      <section  className='max-w-[832px] mx-auto'><CustomAccordion /></section>
    </div>
  );
}

export default PricingFAQ
