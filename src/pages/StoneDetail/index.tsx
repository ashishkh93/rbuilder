import StoneGallery from "@/components/stone/detail/StoneGallery";
import StoneSummary from "@/components/stone/detail/summary/StoneSummary";

const StoneDetails = () => {
  return (
    <div className="max-w-[1200px] px-1 py-2 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
        <div className="relative lg:sticky xl:sticky top-6 self-start">
          <StoneGallery />
        </div>

        <div className="relative">
          <StoneSummary />
        </div>
      </div>  
    </div>
  );
};

export default StoneDetails;
