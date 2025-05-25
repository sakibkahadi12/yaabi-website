import { Banner } from "./Banner";
import { EmailBuilderSection } from "./EmailBuilderSection";
import { FAQ } from "./FAQ";
import { FavoriteIntegration } from "./FavoriteIntegration";
import { GoodByeSection } from "./GoodByeSection";
import { HowYaabiWorks } from "./HowYaabiWorks";
import { Secure } from "./Secure";
import { SMSMarketing } from "./SMSMarketing";
import Test from "./Test";

export const HomePageContainer = () => {
  return (
    <>
      <Banner />
      <GoodByeSection />
      <EmailBuilderSection />
      <SMSMarketing />
      <HowYaabiWorks />
      <FavoriteIntegration />
      {/* <FAQ /> */}
      <Test />
      <Secure />
    </>
  );
};
