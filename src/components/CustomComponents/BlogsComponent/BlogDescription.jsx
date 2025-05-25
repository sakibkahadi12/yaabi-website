import React from "react";

export const BlogDescription = ({
  description,
  align = "center",
  textColor = "#10243ECC",
}) => {
  const alignmentClass = align === "start" ? "text-start" : "text-center";
  const inlineStyle = { color: textColor };

  return (
    <p
      className={`${alignmentClass} font-hanken font-normal text-[clamp(14px,4vw,16px)] leading-[clamp(18px,5vw,20px)]`}
      style={inlineStyle}
    >
      {description}
    </p>
  );
};
