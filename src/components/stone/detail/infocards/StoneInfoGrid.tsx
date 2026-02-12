import CaratCard from "./CaratCard";
import ColorCard from "./ColorCard";
import ClarityCard from "./ClarityCard";
import DimensionsCard from "./DimensionsCard";
import CertificationCard from "./CertificationCard";

const StoneInfoGrid = () => {
  return (
    <div className="rb:grid rb:grid-cols-2 rb:gap-2">
      <CaratCard />
      <ColorCard />
      <ClarityCard />
      <DimensionsCard />
      <CertificationCard />
    </div>
  );
};

export default StoneInfoGrid;
