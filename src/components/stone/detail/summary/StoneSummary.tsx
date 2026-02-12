import StoneAccordions from "../infocards/StoneAccordions";
import StoneInfo from "../infocards/StoneInfo";
import StoneCTAs from "./StoneCTAs";
import StoneHeader from "./StoneHeader";
import StonePrice from "./StonePrice";
import StoneQuickSpecs from "./StoneQuickSpecs";
import StoneTrustBadges from "./StoneTrustBadges";

const StoneSummary = () => {
  return (
    <div className="rb:flex rb:flex-col rb:gap-2">
      <StoneHeader />
      <StonePrice />
      <StoneQuickSpecs />
      <StoneCTAs />
      <StoneTrustBadges />
      <div className="rb:mt-4">
        <StoneInfo />
      </div>
      <div className="rb:mt-1">
        <StoneAccordions />
      </div>
    </div>
  );
};

export default StoneSummary;
