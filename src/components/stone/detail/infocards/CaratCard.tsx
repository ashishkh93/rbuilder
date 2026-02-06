import { Scale } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";

const CaratCard = () => {
  return (
    <StoneInfoCard
      title="CARAT"
      icon={<Scale className="w-3 h-3 md:h-4 md:w-4 text-orange-500" />}
    >
      <div className="flex flex-col justify-between">
        <div className="text-xl font-bold">2.09</div>
        <p className="mt-12 text-xs text-gray-500">
          Universal measurement unit for diamonds
        </p>
      </div>
    </StoneInfoCard>
  );
};

export default CaratCard;
