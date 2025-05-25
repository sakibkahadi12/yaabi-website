import { CustomAccordian } from "@/components/CustomComponents/CustomAccordian";
import { MainDescription } from "@/components/CustomComponents/MainDescription";
import { MainHeading } from "@/components/CustomComponents/MainHeading";

export const FAQ = () => {
  return (
    <div className="max-w-[80rem] px-5 sm:px-[3.5rem] mx-auto py-10">
      <section className="max-w-[708px] space-y-5 mb-12 mx-auto">
        <MainHeading heading="Have More Questions? We Have Some Answers" />
        <MainDescription description="Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency." />
      </section>
      {/* faq section */}
      <section className="max-w-[832px] mx-auto">
        <CustomAccordian />
      </section>
    </div>
  );
};
