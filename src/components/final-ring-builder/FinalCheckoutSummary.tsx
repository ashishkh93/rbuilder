import PriceBlock from "./PriceBlock";
import ShippingPill from "./ShippingPill";
import AddToBagButton from "./AddToBagButton";
import StoneTrustBadges from "../stone/detail/summary/StoneTrustBadges";

const FinalCheckoutSummary = ({
  totalPrice,
  originalPrice,
  shippingText = "Ships in 2–3 weeks",
  onAddToBag,
}: FinalCheckoutSummaryProps) => {
  return (
    <section className="rb:flex rb:flex-col rb:items-center rb:gap-6">
      <PriceBlock totalPrice={totalPrice} originalPrice={originalPrice} />

      <ShippingPill text={shippingText} />

      <AddToBagButton onClick={onAddToBag} />

      <StoneTrustBadges />
    </section>
  );
};

export default FinalCheckoutSummary;
