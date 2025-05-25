import { MainDescription } from "./MainDescription";
import { MainHeading } from "./MainHeading";

export const Template3 = ({
  btnBgColor,
  btnText,
  btnTextColor,
 
  heading,
  description,
 
  image,
  paragraphPosition = 1,
  imagePosition = 2,
}) => {


  const sections = {
    [paragraphPosition]: (
      <section key="text" className=" space-y-4">
        <button
          style={{ backgroundColor: btnBgColor, color: btnTextColor }}
          className="px-4 py-[10px] border border-[#7F9DBF] text-xs leading-5 font-bold rounded-[12px]"
        >
          {btnText}
        </button>
        <MainHeading heading={heading} align="start" />
        <div className="my-7">
          <MainDescription description={description} align="start" />
        </div>
      </section>
    ),
    [imagePosition]: (
      <section key="image" className="   ">
        <img
          src={image}
          alt="template"
          className="w-full  rounded-[12px]  bg-blue-50  sm:h-[100%]"
        />
      </section>
    ),
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
      {Object.values(sections)}
    </div>
  );
};
