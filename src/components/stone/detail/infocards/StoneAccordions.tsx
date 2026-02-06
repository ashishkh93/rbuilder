import DiamondDetailsAccordion from "./DiamondDetailsAccordion";
import ReturnPolicyAccordion from "./ReturnPolicyAccordion";
import ShippingAccordion from "./ShippingAccordion";

const StoneAccordions = () => {
  return (
    <div className="space-y-3">
      <DiamondDetailsAccordion />
      <ShippingAccordion />
      <ReturnPolicyAccordion />
    </div>
  );
};

export default StoneAccordions;
