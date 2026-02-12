import MediaTile from "@/components/common/MediaTile";
import { shallowEqual, useSelector } from "react-redux";
import { selectDiamondDetail } from "@/store/diamonds/diamonds.selectors";
import { useMemo } from "react";

const StoneGallery = () => {
  const diamondDetail = useSelector(selectDiamondDetail, shallowEqual);

  const gallerySrc = useMemo(() => {
    return [diamondDetail?.diamondImage, diamondDetail?.diamondVideo].filter(
      Boolean
    );
  }, [diamondDetail]);

  return (
    <div className="rb:space-y-6">
      {/* <StoneMediaTabs /> */}
      <div className="rb:grid rb:grid-cols-1 rb:sm:grid-cols-2 rb:gap-2">
        {gallerySrc.length > 0 &&
          gallerySrc.map((media, i) => (
            <MediaTile
              key={i}
              index={i}
              src={media || ""}
              imageContainerClass="rb:bg-[#dfe6ec]"
              isVideo={i === 1}
            />
          ))}
      </div>
      {/* <StoneSizeGuide /> */}
    </div>
  );
};

export default StoneGallery;
