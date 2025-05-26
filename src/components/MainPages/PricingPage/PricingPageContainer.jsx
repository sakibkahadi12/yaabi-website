import React from 'react'
import PricingBanner from './PricingBanner'
import EmailAndSms from './EmailAndSms'
import PricingFAQ from './PricingFAQ'

const PricingPageContainer = () => {
  return (
    <div className='max-w-[80rem] mx-auto py-12 mt-[100px] px-5 sm:px-[3.5rem]'>
      <PricingBanner />
      <EmailAndSms />
      <PricingFAQ />
    </div>
  )
}

export default PricingPageContainer
