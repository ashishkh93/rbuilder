import { Palette, HelpCircle } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";

const ColorCard = () => {
  return (
    <StoneInfoCard
      title="COLOR"
      icon={<Palette className="w-3 h-3 md:h-4 md:w-4 text-pink-500" />}
      rightIcon={<HelpCircle className="w-4 h-4 md:h-5 md:w-5 text-gray-300" />}
    >
      <div className="text-xl font-bold">F</div>

      {/* Color scale */}
      <div className="relative mt-4 h-10 rounded border bg-linear-to-r from-white to-yellow-50">
        <div className="absolute left-[45%] top-0 h-full w-px bg-gray-400" />
        <div className="absolute left-[45%] -top-2 h-2 w-2 rounded bg-gray-400" />
      </div>

      <p className="mt-3 text-xs text-gray-500">Completely colorless</p>
    </StoneInfoCard>
  );
};

export default ColorCard;
