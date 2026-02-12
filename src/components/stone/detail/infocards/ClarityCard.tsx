import { Diamond, HelpCircle } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";
import { useSelector } from "react-redux";
import { selectDiamondClarity } from "@/store/diamonds/diamonds.selectors";

const ClarityCard = () => {
  const diamondClarity = useSelector(selectDiamondClarity);

  return (
    <StoneInfoCard
      title="CLARITY"
      icon={
        <Diamond className="rb:w-3 rb:h-3 md:rb:h-4 md:rb:w-4 rb:text-indigo-500" />
      }
      rightIcon={
        <HelpCircle className="rb:w-4 rb:h-4 md:rb:h-5 md:rb:w-5 rb:text-gray-300" />
      }
    >
      <div className="rb:text-xl rb:font-bold">{diamondClarity}</div>

      <img
        className="rb:w-full rb:mt-2"
        src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/2951961/build/_assets/stoneClarityBG-EISDTFPI.png"
        alt="clarity"
      />

      <p className="rb:mt-3 rb:text-xs rb:text-gray-500">
        Hard to see inclusions even under 10x magnification
      </p>
    </StoneInfoCard>
  );
};

export default ClarityCard;
