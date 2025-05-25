export const PrimaryButton = ({ buttonText, bgColor, textColor }) => {
 
  return (
    <button
      className="rounded-[5px] h-[50px] w-[158px]"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: "0.5px 3px 5px 0.5px rgba(0, 0, 0, 0.20)",
      }}
    >
      {buttonText}
    </button>
  );
};
