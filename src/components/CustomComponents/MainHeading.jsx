import React from "react";

export const MainHeading = ({ heading, align = "center" }) => {
  const alignmentClass = align === "start" ? "text-start" : "text-center";

  return (
    <h1
      className={`font-hanken font-bold text-[clamp(28px,6vw,46px)] leading-[clamp(36px,7vw,62px)] text-[#1A314E] ${alignmentClass}`}
    >
      {heading}
    </h1>
  );
};
