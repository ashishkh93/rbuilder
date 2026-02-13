import FinalRingAccordions from "@/components/final-ring-builder/FinalRingAccordions";
import FinalRingNStoneGallery from "@/components/final-ring-builder/FinalRingNStoneGallery";
import FinalRingSummary from "@/components/final-ring-builder/FinalRingSummary";
import KnowYourSetting from "@/components/final-ring-builder/KnowYourSetting";
import StoneInfo from "@/components/stone/detail/infocards/StoneInfo";

const FinalRingBuilder = () => {
  return (
    <div className="rb:max-w-[1200px] rb:px-1 rb:py-2 rb:md:py-8">
      <div className="rb:grid rb:grid-cols-1 rb:lg:grid-cols-[1.5fr_1fr] rb:gap-10">
        <div className="rb:relative rb:lg:sticky rb:xl:sticky rb:top-28! rb:self-start">
          <FinalRingNStoneGallery />
        </div>

        <div className="rb:relative">
          <FinalRingSummary />
          <div className="rb:mt-8">
            <StoneInfo />
          </div>
          <div className="rb:mt-4">
            <KnowYourSetting />
          </div>
          <div className="rb:mt-2">
            <FinalRingAccordions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalRingBuilder;
