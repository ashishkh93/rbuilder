import { Ruler } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";

const DimensionsCard = () => {
  return (
    <StoneInfoCard
      title="DIMENSIONS (MM)"
      icon={<Ruler className="w-3 h-3 md:h-4 md:w-4 text-teal-500" />}
    >
      <div className="text-xl font-bold">9.31×6.21</div>

      <img
        className="max-h-11 mt-2"
        src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2951961/build/_assets/stoneDimensions-V2IG3DFU.png"
        alt="dimensions"
      />

      <div className="mt-4 text-xs text-gray-600">
        <span>Ratio: 1.5</span>
      </div>
    </StoneInfoCard>
  );
};

export default DimensionsCard;
