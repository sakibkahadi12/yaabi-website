import { Template4 } from '@/components/CustomComponents/Template4';
import React from 'react'

export const ReachUser = () => {
  return (
    <div className="bg-[#D8E6F3] mb-12">
      <div className="max-w-[80rem] mx-auto px-5 sm:px-[8.5rem] py-10">
        {" "}
        <Template4
          heading="Reach your users no matter how"
          description="Collaborate effortlessly with our globally distributed team. Our seamless remote workflow ensures efficient communication and project delivery across time zones.
        "
          // btnBgColor="#D8E6F3"
          // btnText="No Coding Required"
          // btnTextColor="#000000"
          paragraphPosition="1"
          imagePosition="2"
          image="/assets/feature_submenu.jpg"
        />
      </div>
    </div>
  );
}
