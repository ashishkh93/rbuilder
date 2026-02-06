import { Diamond, HelpCircle } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";

const ClarityCard = () => {
  return (
    <StoneInfoCard
      title="CLARITY"
      icon={<Diamond className="w-3 h-3 md:h-4 md:w-4 text-indigo-500" />}
      rightIcon={<HelpCircle className="w-4 h-4 md:h-5 md:w-5 text-gray-300" />}
    >
      <div className="text-xl font-bold">VVS2</div>

      <img
        className="w-full mt-2"
        src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2951961/build/_assets/stoneClarityBG-EISDTFPI.png"
        alt="clarity"
      />

      <p className="mt-3 text-xs text-gray-500">
        Hard to see inclusions even under 10x magnification
      </p>
    </StoneInfoCard>
  );
};

export default ClarityCard;
