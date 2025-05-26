

import CustomYaabiAccordion from "@/components/CustomComponents/CustomYaabiAccordion";
import { MainDescription } from "@/components/CustomComponents/MainDescription";
import { MainHeading } from "@/components/CustomComponents/MainHeading";

export const HowYaabiWorks = () => {
  const yaabiData = [
    {
      key: "step-1",
      heading: "Create Your Account",
      description:
        "Sign up easily using your email address to get started quickly.",
      logo: "/logos/signup.png",
      bannerImage: "/banners/account-banner.png",
    },
    {
      key: "step-2",
      heading: "Connect With Experts",
      description:
        "Find professionals tailored to your needs and start collaborating.",
      logo: "/logos/expert.png",
      bannerImage: "/banners/expert-banner.png",
    },
    {
      key: "step-3",
      heading: "Track Your Progress",
      description:
        "Monitor tasks and achievements with our easy-to-use dashboard.",
      logo: "/logos/progress.png",
      bannerImage: "/banners/progress-banner.png",
    },
  ];
  return (
    <div className="max-w-[80rem] mx-auto px-5 sm:px-[3.5rem]">
      <MainHeading heading={"See How "} />
      <MainHeading heading={"Yaabi Works"} />
      <div className="max-w-[796px] mx-auto mt-5 mb-12">
        <MainDescription description="Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of simplicity and efficiency." />
      </div>
     <CustomYaabiAccordion />
    </div>
  );
};
