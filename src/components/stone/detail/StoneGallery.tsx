import MediaTile from "@/components/common/MediaTile";
import StoneMediaTabs from "./StoneMediaTabs";
import StoneSizeGuide from "./StoneSizeGuide";

const StoneGallery = () => {
  return (
    <div className="space-y-6">
      {/* <StoneMediaTabs /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <MediaTile
            key={i}
            index={i}
            src="https://cdn.shopify.com/s/files/1/0039/6994/1568/files/lab_loosediamond_radiant_02-09_vvs2_f_d2ac6275fec5_20260113045045719.webp"
            imageContainerClass="bg-[#dfe6ec]"
          />
        ))}
      </div>
      {/* <StoneSizeGuide /> */}
    </div>
  );
};

export default StoneGallery;
