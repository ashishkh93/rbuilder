import CaratCard from "./CaratCard";
import ColorCard from "./ColorCard";
import ClarityCard from "./ClarityCard";
import DimensionsCard from "./DimensionsCard";
import CertificationCard from "./CertificationCard";

const StoneInfoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <CaratCard />
      <ColorCard />
      <ClarityCard />
      <DimensionsCard />
      <CertificationCard />
    </div>
  );
};

export default StoneInfoGrid;
