import RingConfigurator from "@/components/engagement/detail/RingConfigurator";
import RingGallery from "@/components/engagement/detail/RingGallery";

const EngagementRingDetail = () => {
  return (
    <div className="rb:max-w-[1400px] rb:mx-auto rb:px-3 rb:py-4">
      <div className="rb:grid rb:grid-cols-1 rb:lg:grid-cols-[2fr_1fr] rb:gap-10 rb:items-start">
        {/* LEFT — sticky only on desktop */}
        <div className="rb:relative rb:lg:sticky rb:xl:sticky rb:top-6 rb:self-start">
          <RingGallery />
        </div>

        {/* RIGHT */}
        <div className="rb:relative rb:max-w-xl">
          <RingConfigurator />
          <div className="rb:hidden rb:lg:block rb:h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default EngagementRingDetail;
