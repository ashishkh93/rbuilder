import DiamondDetailsAccordion from "./DiamondDetailsAccordion";
import ReturnPolicyAccordion from "./ReturnPolicyAccordion";
import ShippingAccordion from "./ShippingAccordion";

const StoneAccordions = () => {
  return (
    <div className="rb:flex rb:flex-col rb:gap-2">
      <DiamondDetailsAccordion />
      <ShippingAccordion />
      <ReturnPolicyAccordion />
    </div>
  );
};

export default StoneAccordions;
