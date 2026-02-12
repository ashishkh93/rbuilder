import { Scale } from "lucide-react";
import StoneInfoCard from "./StoneInfoCard";
import { useSelector } from "react-redux";
import { selectDiamondCarat } from "@/store/diamonds/diamonds.selectors";

const CaratCard = () => {
  const diamondCarat = useSelector(selectDiamondCarat);

  return (
    <StoneInfoCard
      title="CARAT"
      icon={
        <Scale className="rb:w-3 rb:h-3 md:rb:h-4 md:rb:w-4 rb:text-orange-500" />
      }
    >
      <div className="rb:flex rb:flex-col rb:justify-between">
        <div className="rb:text-xl rb:font-bold">{diamondCarat}</div>
        <p className="rb:mt-12 rb:text-xs rb:text-gray-500">
          Universal measurement unit for diamonds
        </p>
      </div>
    </StoneInfoCard>
  );
};

export default CaratCard;
