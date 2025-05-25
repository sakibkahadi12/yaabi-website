import { MainDescription } from "@/components/CustomComponents/MainDescription";
import { MainHeading } from "@/components/CustomComponents/MainHeading";
import { PrimaryButton } from "@/components/PrimaryButton";

export const FavoriteIntegration = () => {
  return (
    <div className="max-w-[80rem] mx-auto px-5 sm:px-[3.5rem] py-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* left section */}
      <section>
        <MainHeading
          heading="Your Favorite Integration Are All In One Place"
          align="start"
        />
        <div className="mt-6 mb-16">
          <MainDescription
            align="start"
            description="Take your business to the next level with highly customization, user friendly Emails and SMS campaigns to getting closer to your marketing goals."
          />
        </div>
        <PrimaryButton
          bgColor="#154D7E"
          buttonText="Get Started"
          textColor="#FFFFFF"
        />
      </section>
      {/* right section */}
      <section>
        <img src="/assets/work_together.png" alt="work" />
      </section>
    </div>
  );
};
