import StoneAccordions from "../infocards/StoneAccordions";
import StoneInfo from "../infocards/StoneInfo";
import StoneCTAs from "./StoneCTAs";
import StoneHeader from "./StoneHeader";
import StonePrice from "./StonePrice";
import StoneQuickSpecs from "./StoneQuickSpecs";
import StoneTrustBadges from "./StoneTrustBadges";

const StoneSummary = () => {
  return (
    <div className="space-y-3">
      <StoneHeader />
      <StonePrice />
      <StoneQuickSpecs />
      <StoneCTAs />
      <StoneTrustBadges />
      <div className="mt-4">
        <StoneInfo />
      </div>
      <div className="mt-2">
        <StoneAccordions />
      </div>
    </div>
  );
};

export default StoneSummary;
