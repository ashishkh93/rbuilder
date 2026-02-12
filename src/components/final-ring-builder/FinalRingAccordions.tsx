import ReturnPolicyAccordion from "../stone/detail/infocards/ReturnPolicyAccordion";
import ShippingAccordion from "../stone/detail/infocards/ShippingAccordion";
import RingDetailsAccordion from "./RingDetailsAccordion";

const FinalRingAccordions = () => {
  return (
    <div className="rb:space-y-3">
      <RingDetailsAccordion />
      <ShippingAccordion />
      <ReturnPolicyAccordion />
    </div>
  );
};

export default FinalRingAccordions;
