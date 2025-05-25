import { CustomAccordion } from "@/components/CustomComponents/CustomAccordion";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
        {/* Left Illustration Section */}
        <section className="flex justify-center">
          <svg
            width="617"
            height="660"
            viewBox="0 0 617 660"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[500px]"
          >
            <path
              d="M30.2266 76.9844H83.8115"
              stroke="#999999"
              strokeWidth="10.717"
              strokeLinecap="round"
            />
            <rect
              x="25.9414"
              y="93.3203"
              width="568.034"
              height="42.9726"
              rx="10.7431"
              fill="#FFE0BD"
            />
            <path
              d="M30.2266 164.109H130.966"
              stroke="#999999"
              strokeWidth="10.717"
              strokeLinecap="round"
            />
            <rect
              x="25"
              y="180.934"
              width="568.034"
              height="42.9726"
              rx="10.7431"
              fill="#FFE0BD"
            />
            <path
              d="M30.2266 251.727H130.966"
              stroke="#999999"
              strokeWidth="10.717"
              strokeLinecap="round"
            />
            <rect
              x="25"
              y="268.539"
              width="568.034"
              height="42.9726"
              rx="10.7431"
              fill="#FFE0BD"
            />
            <path
              d="M30.2305 335.508H130.97"
              stroke="#999999"
              strokeWidth="10.717"
              strokeLinecap="round"
            />
            <rect
              x="25.0078"
              y="356.496"
              width="567"
              height="235.774"
              rx="21.434"
              fill="#FFE0BD"
            />
          </svg>
        </section>

        {/* Right Accordion Section */}
        <section>
          <CustomAccordion items={yaabiData} />
        </section>
      </div>
    </div>
  );
};
