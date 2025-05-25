"use client"
const ViewMoreButton = ({onClick}) => {
  return (
    <button onClick={onClick}
      style={{
        boxShadow: "0.5px 3px 5px 0.5px rgba(0, 0, 0, 0.20)",
      }}
      className="bg-[#b4d5f4] rounded-[5px] text-[15px] text-[#10243e] font-medium leading-5 w-[188px] h-[50px] flex justify-center items-center"
    >
      View More
    </button>
  );
}

export default ViewMoreButton