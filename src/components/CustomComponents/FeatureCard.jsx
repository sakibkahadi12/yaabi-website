import React from 'react'

 const FeatureCard = ({heading, description, image}) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-[24px] bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">{image}</div>
      <h1 className="text-black text-center font-hanken font-medium text-[clamp(18px,4vw,24px)] leading-[clamp(26px,5vw,32px)] my-2">
        {heading.split(" ")[0]} <br />
        {heading.split(" ")[1]}
      </h1>
      <p className="text-[#00000080] text-center font-hanken font-normal text-[clamp(14px,4vw,16px)] leading-[clamp(16px,5vw,18px)]">
        {description}
      </p>
    </div>
  );
}
export default FeatureCard;
