import { useAppSelector } from "@/store";
import MediaTile from "../common/MediaTile";
import { selectedSettingDetail } from "@/store/products/products.selectors";
import { selectDiamondDetail } from "@/store/diamonds/diamonds.selectors";
import { shallowEqual } from "react-redux";
import { useMemo } from "react";

const FinalRingNStoneGallery = () => {
  const settingDetail = useAppSelector(selectedSettingDetail, shallowEqual);
  const diamondDetail = useAppSelector(selectDiamondDetail, shallowEqual);

  const medias = useMemo(() => {
    return [
      (
        settingDetail?.featured_image?.src ||
        settingDetail?.featured_media?.preview_image?.src
      )?.startsWith("//")
        ? `https:${settingDetail?.featured_image?.src}`
        : settingDetail?.featured_image?.src,
      diamondDetail?.diamondImage,
    ].filter(Boolean);
  }, [settingDetail, diamondDetail]);

  return (
    <div className="rb:space-y-6">
      <div className="rb:grid rb:grid-cols-1 rb:sm:grid-cols-2 rb:gap-2">
        {medias.map((media, i) => (
          <MediaTile
            key={i}
            index={i}
            // shouldHaveGradient={i === 0}
            src={media || ""}
            imageContainerClass={"rb:bg-gray-200!"}
            // className="rb:bg-transparent"
          />
        ))}
      </div>
    </div>
  );
};

export default FinalRingNStoneGallery;
