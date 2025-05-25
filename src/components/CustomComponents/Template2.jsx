import { PrimaryButton } from "../PrimaryButton";
import { MainDescription } from "./MainDescription";
import { MainHeading } from "./MainHeading";

export const Template2 = ({
  
  heading,
  description,
  
  image,
  paragraphPosition = 1,
  imagePosition = 2,
}) => {
 

  const sections = {
    [paragraphPosition]: (
      <section key="text" className="lg:w-[40%]  w-full ">
        <MainHeading heading={heading} align="start" />
        <div className="my-7">
          <MainDescription description={description} align="start" />
        </div>
        <div className="flex items-center gap-6">
          <PrimaryButton
            bgColor="#154D7E"
            buttonText={"Get Started"}
            textColor={"#ffffff"}
          />
          <PrimaryButton
            bgColor="#B4D5F4"
            buttonText={"Request Demo"}
            textColor={"Black/100"}
          />
        </div>
      </section>
    ),
    [imagePosition]: (
      <section key="image" className="lg:w-[60%] w-full   ">
        <img
          src={image}
          alt="template"
          className="w-full   bg-blue-50  h-[100%]"
        />
      </section>
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center ">
      {Object.values(sections)}
    </div>
  );
};
