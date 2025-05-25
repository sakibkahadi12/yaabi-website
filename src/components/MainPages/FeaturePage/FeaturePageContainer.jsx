import { Secure } from "../HomePage/Secure"
import { FeatureBanner } from "./FeatureBanner"
import { FeatureDetails } from "./FeatureDetails"
import { ReachUser } from "./ReachUser"
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"

export const FeaturePageContainer = () => {
  return (
    <>
      <FeatureBanner />
      <FeatureDetails />
      <Section1 />
      <Section2 />
      <Section3 />
      <ReachUser />
      <Secure />
    </>
  );
}
