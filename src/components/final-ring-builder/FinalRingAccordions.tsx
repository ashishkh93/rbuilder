import ReturnPolicyAccordion from "../stone/detail/infocards/ReturnPolicyAccordion";
import ShippingAccordion from "../stone/detail/infocards/ShippingAccordion";
import RingDetailsAccordion from "./RingDetailsAccordion";

const FinalRingAccordions = () => {
  return (
    <div className="rb:flex rb:flex-col rb:gap-2">
      <RingDetailsAccordion />
      <ShippingAccordion />
      <ReturnPolicyAccordion />
    </div>
  );
};

export default FinalRingAccordions;
