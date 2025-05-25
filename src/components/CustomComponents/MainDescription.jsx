import React from 'react'

export const MainDescription = ({ description, align = "center" }) => {
  const alignmentClass = align === "start" ? "text-start" : "text-center";
  return (
    <p
      className={`${alignmentClass} font-hanken font-normal text-[clamp(16px,4vw,18px)] leading-[clamp(18px,5vw,20px)] text-[rgba(16,36,62,0.8)]`}
    >
      {description}
    </p>
  );
};
