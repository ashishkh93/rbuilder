import FinalRingHeader from "./FinalRingHeader";
import ExtrasRow from "./ExtrasRow";
import FInalSummaryItem from "./FInalSummaryItem";
import FinalSummaryItem from "./FInalSummaryItem";
import { COMMON_ICONS } from "../shared/icons/common";
import FinalCheckoutSummary from "./FinalCheckoutSummary";

const FinalRingSummary = () => {
  return (
    <section className="rb:w-full rb:lg:max-w-3xl">
      <FinalRingHeader />

      <div className="rb:mt-6 rb:space-y-2">
        {/* Setting */}
        <FinalSummaryItem
          icon={COMMON_ICONS.ring}
          title="The Sarah"
          subtitle="14k Yellow Gold"
          price="$865"
          originalPrice="$1,150"
          discount="25% off"
          onChange={() => console.log("change")}
          detailsHref="/products/the-sarah"
        />

        {/* Diamond */}
        <FInalSummaryItem
          icon={COMMON_ICONS.stone}
          title="Radiant"
          subtitle="2.09ct F VVS2"
          price="$840"
          originalPrice="$1,120"
          discount="25% off"
          onChange={() => console.log("change")}
          detailsHref="/products/the-sarah"
        />

        <ExtrasRow />
      </div>

      <div className="rb:mt-3">
        <FinalCheckoutSummary
          totalPrice={1705}
          originalPrice={2270}
          onAddToBag={() => console.log("Added to bag")}
        />
      </div>
    </section>
  );
};

export default FinalRingSummary;
