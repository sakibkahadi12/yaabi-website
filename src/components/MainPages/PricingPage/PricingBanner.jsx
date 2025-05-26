import { MainDescription } from '@/components/CustomComponents/MainDescription';
import { MainHeading } from '@/components/CustomComponents/MainHeading'
import React from 'react'

const PricingBanner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="max-w-[480px] mx-auto  space-y-8">
        <MainHeading
          align="start"
          heading=" Pricing that adds itself anywhere"
        />
        <MainDescription
          description="Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency. Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency.Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency."
          align="start"
        />
      </div>
    </div>
  );
}

export default PricingBanner
