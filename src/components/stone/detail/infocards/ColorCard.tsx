import { Palette, HelpCircle } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";
import { useSelector } from "react-redux";
import { selectDiamondColor } from "@/store/diamonds/diamonds.selectors";

const ColorCard = () => {
  const diamondColor = useSelector(selectDiamondColor);

  return (
    <StoneInfoCard
      title="COLOR"
      icon={
        <Palette className="rb:w-3 rb:h-3 md:rb:h-4 md:rb:w-4 rb:text-pink-500" />
      }
      rightIcon={
        <HelpCircle className="rb:w-4 rb:h-4 md:rb:h-5 md:rb:w-5 rb:text-gray-300" />
      }
    >
      <div className="rb:text-xl rb:font-bold">{diamondColor}</div>

      {/* Color scale */}
      <div className="rb:relative rb:mt-4 rb:h-10 rb:rounded rb:border rb:bg-linear-to-r rb:from-white rb:to-yellow-50">
        <div className="rb:absolute rb:left-[45%] rb:top-0 rb:h-full rb:w-px rb:bg-gray-400" />
        <div className="rb:absolute rb:left-[45%] rb:-top-2 rb:h-2 rb:w-2 rb:rounded rb:bg-gray-400" />
      </div>

      <p className="rb:mt-3 rb:text-xs rb:text-gray-500">
        Completely colorless
      </p>
    </StoneInfoCard>
  );
};

export default ColorCard;
