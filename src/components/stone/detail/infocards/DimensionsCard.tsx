import { Ruler } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";
import { useSelector } from "react-redux";
import {
  selectDiamondDimensions,
  selectDiamondRatio,
} from "@/store/diamonds/diamonds.selectors";

const DimensionsCard = () => {
  const { dimensions } = useSelector(selectDiamondDimensions);
  const ratio = useSelector(selectDiamondRatio);

  return (
    <StoneInfoCard
      title="DIMENSIONS (MM)"
      icon={
        <Ruler className="rb:w-3 rb:h-3 md:rb:h-4 md:rb:w-4 rb:text-teal-500" />
      }
    >
      <div className="rb:text-xl rb:font-bold">{dimensions}</div>

      <img
        className="rb:max-h-11 rb:mt-2"
        src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2951961/build/_assets/stoneDimensions-V2IG3DFU.png"
        alt="dimensions"
      />

      <div className="rb:mt-4 rb:text-xs rb:text-gray-600">
        <span>Ratio: {ratio || "-"}</span>
      </div>
    </StoneInfoCard>
  );
};

export default DimensionsCard;
