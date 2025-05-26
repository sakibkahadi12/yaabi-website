import { Banner } from "./Banner";
import { EmailBuilderSection } from "./EmailBuilderSection";
import { FAQ } from "./FAQ";
import { FavoriteIntegration } from "./FavoriteIntegration";
import { GoodByeSection } from "./GoodByeSection";
import { HowYaabiWorks } from "./HowYaabiWorks";
import { Secure } from "./Secure";
import { SMSMarketing } from "./SMSMarketing";

export const HomePageContainer = () => {
  return (
    <div className="space-y-5 sm:space-y-12">
      <Banner />
      <GoodByeSection />
      <EmailBuilderSection />
      <SMSMarketing />
      <HowYaabiWorks />
      <FavoriteIntegration />
      <FAQ />
      <Secure />
    </div>
  );
}
