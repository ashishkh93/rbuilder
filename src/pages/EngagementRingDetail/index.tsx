import RingConfigurator from "@/components/engagement/detail/RingConfigurator";
import RingGallery from "@/components/engagement/detail/RingGallery";

const EngagementRingDetail = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
        {/* LEFT — sticky only on desktop */}
        <div className="relative lg:sticky xl:sticky top-6 self-start">
          <RingGallery />
        </div>

        {/* RIGHT */}
        <div className="relative">
          <RingConfigurator />
          <div className="hidden lg:block h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default EngagementRingDetail;
