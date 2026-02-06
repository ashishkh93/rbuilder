import FinalRingAccordions from "@/components/final-ring-builder/FinalRingAccordions";
import FinalRingNStoneGallery from "@/components/final-ring-builder/FinalRingNStoneGallery";
import FinalRingSummary from "@/components/final-ring-builder/FinalRingSummary";
import KnowYourSetting from "@/components/final-ring-builder/KnowYourSetting";
import StoneInfo from "@/components/stone/detail/infocards/StoneInfo";

const FinalRingBuilder = () => {
  return (
    <div className="max-w-[1200px] px-1 py-2 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
        <div className="relative lg:sticky xl:sticky top-6 self-start">
          <FinalRingNStoneGallery />
        </div>

        <div className="relative">
          <FinalRingSummary />
          <div className="mt-8">
            <StoneInfo />
          </div>
          <div className="mt-4">
            <KnowYourSetting />
          </div>
          <div className="mt-2">
            <FinalRingAccordions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalRingBuilder;
