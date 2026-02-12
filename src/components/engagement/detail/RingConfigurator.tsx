// components/ring/RingConfigurator.tsx
import ProductHeader from "./ProductHeader";
import ShapeSelector from "./ShapeSelector";
import MaterialSelector from "./MaterialSelector";
import StyleSelector from "./StyleSelector";
import StickyCTA from "./StickyCTA";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/global-config";

const RingConfigurator = () => {
  const navigate = useNavigate();
  return (
    <div className="rb:space-y-6">
      <ProductHeader />
      <ShapeSelector />
      <MaterialSelector />
      <StyleSelector />
      <div className="rb:flex rb:flex-col rb:gap-2">
        <StickyCTA
          className="rb:bg-black! rb:text-white!"
          label="Add Center Stone"
          onClick={() => {
            navigate(`/${ROUTES.defauktDiamondType}`, { viewTransition: true });
          }}
        />
        <StickyCTA
          className="rb:bg-white! rb:text-black! rb:border rb:border-black!"
          label="Buy Settings Only*"
        />
      </div>
    </div>
  );
};

export default RingConfigurator;
